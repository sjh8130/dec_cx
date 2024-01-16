Ext.define('ananas.ServerHosts', {
	'alternateClassName': 'ServerHosts',
	'singleton': true,
	'constructor': function () {
		var _0x48eb66 = this;
		_0x48eb66.callParent(arguments);
		var _0x404389 = document.domain;
		try {
			_0x48eb66.MASTER_HOST = location.protocol + '//' + top.location.host;
		} catch (_0x4dd617) {
			_0x48eb66.MASTER_HOST = location.protocol + '//' + location.host;
		}
		try {
			_0x48eb66.PARENT_HOST = location.protocol + '//' + parent.location.host;
		} catch (_0x4ba7c0) {
			_0x48eb66.MASTER_HOST = location.protocol + '//' + location.host;
		}
		_0x48eb66.P_HOST = location.protocol + '//p.ananas.chaoxing.com';
		_0x48eb66.s1_HOST = location.protocol + '//s1.ananas.chaoxing.com';
		_0x48eb66.s2_HOST = location.protocol + '//s2.ananas.chaoxing.com';
		_0x48eb66.CLOUD_HOST = 'http://cloud.ananas.' + _0x404389;
		_0x48eb66.NEW_CLOUD_HOST = location.protocol + '//pan-yz.chaoxing.com';
		_0x48eb66.CS_HOST = location.protocol + '//cs.ananas.' + _0x404389;
		_0x48eb66.FANYA_HOST = 'http://course.fanya.' + _0x404389;
		_0x48eb66.PAN_HOST = 'http://pan.ananas.' + _0x404389;
		_0x48eb66.CXLIVE_HOST = 'http://cxlive.' + _0x404389;
		_0x48eb66.ERYA_TSK_HOST = 'http://erya.tsk.' + _0x404389;
		_0x48eb66.QUESTIONNAIRE_HOST = 'http://surveyapp.fy.' + _0x404389;
		_0x48eb66.FX_HOST = 'http://www.' + _0x404389;
		_0x48eb66.PHONE_ZT_HOST = 'https://special.rhky.com';
		_0x48eb66.CHAOXING_CLASS_HOST = 'https://k.chaoxing.com';
		_0x48eb66.LIVE_HOST = location.protocol + '//live.chaoxing.com';
		_0x48eb66.APPCD_HOST = location.protocol + '//appcd.chaoxing.com';
		_0x48eb66.ZHIBO_HOST = 'https://zhibo.chaoxing.com';
	}
});
(function (_0xa3bac6) {
	function _0xfdfc7(_0x488bbf, _0x5e3426) {
		var _0x248c39 = (_0x488bbf & 65535) + (_0x5e3426 & 65535), _0x332dc2 = (_0x488bbf >> 16) + (_0x5e3426 >> 16) + (_0x248c39 >> 16);
		return _0x332dc2 << 16 | _0x248c39 & 65535;
	}
	function _0xb332e4(_0x1db5e8, _0x5ba796) {
		return _0x1db5e8 << _0x5ba796 | _0x1db5e8 >>> 32 - _0x5ba796;
	}
	function _0x6ecb0a(_0x3cc875, _0x18f323, _0x3201ec, _0x1e17df, _0x292a74, _0x488bff) {
		return _0xfdfc7(_0xb332e4(_0xfdfc7(_0xfdfc7(_0x18f323, _0x3cc875), _0xfdfc7(_0x1e17df, _0x488bff)), _0x292a74), _0x3201ec);
	}
	function _0x8fbbed(_0x584a25, _0x29fe74, _0x27f8cc, _0x35ef76, _0x2e38f6, _0x2a4593, _0x391cbc) {
		return _0x6ecb0a(_0x29fe74 & _0x27f8cc | ~_0x29fe74 & _0x35ef76, _0x584a25, _0x29fe74, _0x2e38f6, _0x2a4593, _0x391cbc);
	}
	function _0x22d255(_0x276486, _0x387026, _0xff4921, _0x1fca30, _0x11268c, _0x1dc15d, _0x3dcc06) {
		return _0x6ecb0a(_0x387026 & _0x1fca30 | _0xff4921 & ~_0x1fca30, _0x276486, _0x387026, _0x11268c, _0x1dc15d, _0x3dcc06);
	}
	function _0x347568(_0x2c94f6, _0x2813ff, _0x5ec9b7, _0x1dfcb0, _0x180180, _0x56032e, _0xe0a0e6) {
		return _0x6ecb0a(_0x2813ff ^ _0x5ec9b7 ^ _0x1dfcb0, _0x2c94f6, _0x2813ff, _0x180180, _0x56032e, _0xe0a0e6);
	}
	function _0x773755(_0x3bc348, _0x385ebd, _0x12b1d0, _0x13ebcc, _0x3f1efb, _0x4ac6b5, _0x5dc021) {
		return _0x6ecb0a(_0x12b1d0 ^ (_0x385ebd | ~_0x13ebcc), _0x3bc348, _0x385ebd, _0x3f1efb, _0x4ac6b5, _0x5dc021);
	}
	function _0x4ad8df(_0x4e34d6, _0xefda28) {
		_0x4e34d6[_0xefda28 >> 5] |= 128 << _0xefda28 % 32;
		_0x4e34d6[(_0xefda28 + 64 >>> 9 << 4) + 14] = _0xefda28;
		var _0x5ad82b, _0x173a3a, _0x4b8ad6, _0x2487ff, _0xcbefb7, _0x55f6f4 = 1732584193, _0x397f6f = -271733879, _0x327f0f = -1732584194, _0x5a82bd = 271733878;
		for (_0x5ad82b = 0; _0x5ad82b < _0x4e34d6.length; _0x5ad82b += 16) {
			_0x173a3a = _0x55f6f4;
			_0x4b8ad6 = _0x397f6f;
			_0x2487ff = _0x327f0f;
			_0xcbefb7 = _0x5a82bd;
			_0x55f6f4 = _0x8fbbed(_0x55f6f4, _0x397f6f, _0x327f0f, _0x5a82bd, _0x4e34d6[_0x5ad82b], 7, -680876936);
			_0x5a82bd = _0x8fbbed(_0x5a82bd, _0x55f6f4, _0x397f6f, _0x327f0f, _0x4e34d6[_0x5ad82b + 1], 12, -389564586);
			_0x327f0f = _0x8fbbed(_0x327f0f, _0x5a82bd, _0x55f6f4, _0x397f6f, _0x4e34d6[_0x5ad82b + 2], 17, 606105819);
			_0x397f6f = _0x8fbbed(_0x397f6f, _0x327f0f, _0x5a82bd, _0x55f6f4, _0x4e34d6[_0x5ad82b + 3], 22, -1044525330);
			_0x55f6f4 = _0x8fbbed(_0x55f6f4, _0x397f6f, _0x327f0f, _0x5a82bd, _0x4e34d6[_0x5ad82b + 4], 7, -176418897);
			_0x5a82bd = _0x8fbbed(_0x5a82bd, _0x55f6f4, _0x397f6f, _0x327f0f, _0x4e34d6[_0x5ad82b + 5], 12, 1200080426);
			_0x327f0f = _0x8fbbed(_0x327f0f, _0x5a82bd, _0x55f6f4, _0x397f6f, _0x4e34d6[_0x5ad82b + 6], 17, -1473231341);
			_0x397f6f = _0x8fbbed(_0x397f6f, _0x327f0f, _0x5a82bd, _0x55f6f4, _0x4e34d6[_0x5ad82b + 7], 22, -45705983);
			_0x55f6f4 = _0x8fbbed(_0x55f6f4, _0x397f6f, _0x327f0f, _0x5a82bd, _0x4e34d6[_0x5ad82b + 8], 7, 1770035416);
			_0x5a82bd = _0x8fbbed(_0x5a82bd, _0x55f6f4, _0x397f6f, _0x327f0f, _0x4e34d6[_0x5ad82b + 9], 12, -1958414417);
			_0x327f0f = _0x8fbbed(_0x327f0f, _0x5a82bd, _0x55f6f4, _0x397f6f, _0x4e34d6[_0x5ad82b + 10], 17, -42063);
			_0x397f6f = _0x8fbbed(_0x397f6f, _0x327f0f, _0x5a82bd, _0x55f6f4, _0x4e34d6[_0x5ad82b + 11], 22, -1990404162);
			_0x55f6f4 = _0x8fbbed(_0x55f6f4, _0x397f6f, _0x327f0f, _0x5a82bd, _0x4e34d6[_0x5ad82b + 12], 7, 1804603682);
			_0x5a82bd = _0x8fbbed(_0x5a82bd, _0x55f6f4, _0x397f6f, _0x327f0f, _0x4e34d6[_0x5ad82b + 13], 12, -40341101);
			_0x327f0f = _0x8fbbed(_0x327f0f, _0x5a82bd, _0x55f6f4, _0x397f6f, _0x4e34d6[_0x5ad82b + 14], 17, -1502002290);
			_0x397f6f = _0x8fbbed(_0x397f6f, _0x327f0f, _0x5a82bd, _0x55f6f4, _0x4e34d6[_0x5ad82b + 15], 22, 1236535329);
			_0x55f6f4 = _0x22d255(_0x55f6f4, _0x397f6f, _0x327f0f, _0x5a82bd, _0x4e34d6[_0x5ad82b + 1], 5, -165796510);
			_0x5a82bd = _0x22d255(_0x5a82bd, _0x55f6f4, _0x397f6f, _0x327f0f, _0x4e34d6[_0x5ad82b + 6], 9, -1069501632);
			_0x327f0f = _0x22d255(_0x327f0f, _0x5a82bd, _0x55f6f4, _0x397f6f, _0x4e34d6[_0x5ad82b + 11], 14, 643717713);
			_0x397f6f = _0x22d255(_0x397f6f, _0x327f0f, _0x5a82bd, _0x55f6f4, _0x4e34d6[_0x5ad82b], 20, -373897302);
			_0x55f6f4 = _0x22d255(_0x55f6f4, _0x397f6f, _0x327f0f, _0x5a82bd, _0x4e34d6[_0x5ad82b + 5], 5, -701558691);
			_0x5a82bd = _0x22d255(_0x5a82bd, _0x55f6f4, _0x397f6f, _0x327f0f, _0x4e34d6[_0x5ad82b + 10], 9, 38016083);
			_0x327f0f = _0x22d255(_0x327f0f, _0x5a82bd, _0x55f6f4, _0x397f6f, _0x4e34d6[_0x5ad82b + 15], 14, -660478335);
			_0x397f6f = _0x22d255(_0x397f6f, _0x327f0f, _0x5a82bd, _0x55f6f4, _0x4e34d6[_0x5ad82b + 4], 20, -405537848);
			_0x55f6f4 = _0x22d255(_0x55f6f4, _0x397f6f, _0x327f0f, _0x5a82bd, _0x4e34d6[_0x5ad82b + 9], 5, 568446438);
			_0x5a82bd = _0x22d255(_0x5a82bd, _0x55f6f4, _0x397f6f, _0x327f0f, _0x4e34d6[_0x5ad82b + 14], 9, -1019803690);
			_0x327f0f = _0x22d255(_0x327f0f, _0x5a82bd, _0x55f6f4, _0x397f6f, _0x4e34d6[_0x5ad82b + 3], 14, -187363961);
			_0x397f6f = _0x22d255(_0x397f6f, _0x327f0f, _0x5a82bd, _0x55f6f4, _0x4e34d6[_0x5ad82b + 8], 20, 1163531501);
			_0x55f6f4 = _0x22d255(_0x55f6f4, _0x397f6f, _0x327f0f, _0x5a82bd, _0x4e34d6[_0x5ad82b + 13], 5, -1444681467);
			_0x5a82bd = _0x22d255(_0x5a82bd, _0x55f6f4, _0x397f6f, _0x327f0f, _0x4e34d6[_0x5ad82b + 2], 9, -51403784);
			_0x327f0f = _0x22d255(_0x327f0f, _0x5a82bd, _0x55f6f4, _0x397f6f, _0x4e34d6[_0x5ad82b + 7], 14, 1735328473);
			_0x397f6f = _0x22d255(_0x397f6f, _0x327f0f, _0x5a82bd, _0x55f6f4, _0x4e34d6[_0x5ad82b + 12], 20, -1926607734);
			_0x55f6f4 = _0x347568(_0x55f6f4, _0x397f6f, _0x327f0f, _0x5a82bd, _0x4e34d6[_0x5ad82b + 5], 4, -378558);
			_0x5a82bd = _0x347568(_0x5a82bd, _0x55f6f4, _0x397f6f, _0x327f0f, _0x4e34d6[_0x5ad82b + 8], 11, -2022574463);
			_0x327f0f = _0x347568(_0x327f0f, _0x5a82bd, _0x55f6f4, _0x397f6f, _0x4e34d6[_0x5ad82b + 11], 16, 1839030562);
			_0x397f6f = _0x347568(_0x397f6f, _0x327f0f, _0x5a82bd, _0x55f6f4, _0x4e34d6[_0x5ad82b + 14], 23, -35309556);
			_0x55f6f4 = _0x347568(_0x55f6f4, _0x397f6f, _0x327f0f, _0x5a82bd, _0x4e34d6[_0x5ad82b + 1], 4, -1530992060);
			_0x5a82bd = _0x347568(_0x5a82bd, _0x55f6f4, _0x397f6f, _0x327f0f, _0x4e34d6[_0x5ad82b + 4], 11, 1272893353);
			_0x327f0f = _0x347568(_0x327f0f, _0x5a82bd, _0x55f6f4, _0x397f6f, _0x4e34d6[_0x5ad82b + 7], 16, -155497632);
			_0x397f6f = _0x347568(_0x397f6f, _0x327f0f, _0x5a82bd, _0x55f6f4, _0x4e34d6[_0x5ad82b + 10], 23, -1094730640);
			_0x55f6f4 = _0x347568(_0x55f6f4, _0x397f6f, _0x327f0f, _0x5a82bd, _0x4e34d6[_0x5ad82b + 13], 4, 681279174);
			_0x5a82bd = _0x347568(_0x5a82bd, _0x55f6f4, _0x397f6f, _0x327f0f, _0x4e34d6[_0x5ad82b], 11, -358537222);
			_0x327f0f = _0x347568(_0x327f0f, _0x5a82bd, _0x55f6f4, _0x397f6f, _0x4e34d6[_0x5ad82b + 3], 16, -722521979);
			_0x397f6f = _0x347568(_0x397f6f, _0x327f0f, _0x5a82bd, _0x55f6f4, _0x4e34d6[_0x5ad82b + 6], 23, 76029189);
			_0x55f6f4 = _0x347568(_0x55f6f4, _0x397f6f, _0x327f0f, _0x5a82bd, _0x4e34d6[_0x5ad82b + 9], 4, -640364487);
			_0x5a82bd = _0x347568(_0x5a82bd, _0x55f6f4, _0x397f6f, _0x327f0f, _0x4e34d6[_0x5ad82b + 12], 11, -421815835);
			_0x327f0f = _0x347568(_0x327f0f, _0x5a82bd, _0x55f6f4, _0x397f6f, _0x4e34d6[_0x5ad82b + 15], 16, 530742520);
			_0x397f6f = _0x347568(_0x397f6f, _0x327f0f, _0x5a82bd, _0x55f6f4, _0x4e34d6[_0x5ad82b + 2], 23, -995338651);
			_0x55f6f4 = _0x773755(_0x55f6f4, _0x397f6f, _0x327f0f, _0x5a82bd, _0x4e34d6[_0x5ad82b], 6, -198630844);
			_0x5a82bd = _0x773755(_0x5a82bd, _0x55f6f4, _0x397f6f, _0x327f0f, _0x4e34d6[_0x5ad82b + 7], 10, 1126891415);
			_0x327f0f = _0x773755(_0x327f0f, _0x5a82bd, _0x55f6f4, _0x397f6f, _0x4e34d6[_0x5ad82b + 14], 15, -1416354905);
			_0x397f6f = _0x773755(_0x397f6f, _0x327f0f, _0x5a82bd, _0x55f6f4, _0x4e34d6[_0x5ad82b + 5], 21, -57434055);
			_0x55f6f4 = _0x773755(_0x55f6f4, _0x397f6f, _0x327f0f, _0x5a82bd, _0x4e34d6[_0x5ad82b + 12], 6, 1700485571);
			_0x5a82bd = _0x773755(_0x5a82bd, _0x55f6f4, _0x397f6f, _0x327f0f, _0x4e34d6[_0x5ad82b + 3], 10, -1894986606);
			_0x327f0f = _0x773755(_0x327f0f, _0x5a82bd, _0x55f6f4, _0x397f6f, _0x4e34d6[_0x5ad82b + 10], 15, -1051523);
			_0x397f6f = _0x773755(_0x397f6f, _0x327f0f, _0x5a82bd, _0x55f6f4, _0x4e34d6[_0x5ad82b + 1], 21, -2054922799);
			_0x55f6f4 = _0x773755(_0x55f6f4, _0x397f6f, _0x327f0f, _0x5a82bd, _0x4e34d6[_0x5ad82b + 8], 6, 1873313359);
			_0x5a82bd = _0x773755(_0x5a82bd, _0x55f6f4, _0x397f6f, _0x327f0f, _0x4e34d6[_0x5ad82b + 15], 10, -30611744);
			_0x327f0f = _0x773755(_0x327f0f, _0x5a82bd, _0x55f6f4, _0x397f6f, _0x4e34d6[_0x5ad82b + 6], 15, -1560198380);
			_0x397f6f = _0x773755(_0x397f6f, _0x327f0f, _0x5a82bd, _0x55f6f4, _0x4e34d6[_0x5ad82b + 13], 21, 1309151649);
			_0x55f6f4 = _0x773755(_0x55f6f4, _0x397f6f, _0x327f0f, _0x5a82bd, _0x4e34d6[_0x5ad82b + 4], 6, -145523070);
			_0x5a82bd = _0x773755(_0x5a82bd, _0x55f6f4, _0x397f6f, _0x327f0f, _0x4e34d6[_0x5ad82b + 11], 10, -1120210379);
			_0x327f0f = _0x773755(_0x327f0f, _0x5a82bd, _0x55f6f4, _0x397f6f, _0x4e34d6[_0x5ad82b + 2], 15, 718787259);
			_0x397f6f = _0x773755(_0x397f6f, _0x327f0f, _0x5a82bd, _0x55f6f4, _0x4e34d6[_0x5ad82b + 9], 21, -343485551);
			_0x55f6f4 = _0xfdfc7(_0x55f6f4, _0x173a3a);
			_0x397f6f = _0xfdfc7(_0x397f6f, _0x4b8ad6);
			_0x327f0f = _0xfdfc7(_0x327f0f, _0x2487ff);
			_0x5a82bd = _0xfdfc7(_0x5a82bd, _0xcbefb7);
		}
		return [
			_0x55f6f4,
			_0x397f6f,
			_0x327f0f,
			_0x5a82bd
		];
	}
	function _0x236e30(_0x56cbda) {
		var _0x3a88cd, _0xf3a794 = '', _0x1d902d = _0x56cbda.length * 32;
		for (_0x3a88cd = 0; _0x3a88cd < _0x1d902d; _0x3a88cd += 8) {
			_0xf3a794 += String.fromCharCode(_0x56cbda[_0x3a88cd >> 5] >>> _0x3a88cd % 32 & 255);
		}
		return _0xf3a794;
	}
	function _0x2ed882(_0x198766) {
		var _0x5dd2f3, _0x621e01 = [];
		_0x621e01[(_0x198766.length >> 2) - 1] = undefined;
		for (_0x5dd2f3 = 0; _0x5dd2f3 < _0x621e01.length; _0x5dd2f3 += 1) {
			_0x621e01[_0x5dd2f3] = 0;
		}
		var _0x200d74 = _0x198766.length * 8;
		for (_0x5dd2f3 = 0; _0x5dd2f3 < _0x200d74; _0x5dd2f3 += 8) {
			_0x621e01[_0x5dd2f3 >> 5] |= (_0x198766.charCodeAt(_0x5dd2f3 / 8) & 255) << _0x5dd2f3 % 32;
		}
		return _0x621e01;
	}
	function _0x5797ef(_0xfdcf05) {
		return _0x236e30(_0x4ad8df(_0x2ed882(_0xfdcf05), _0xfdcf05.length * 8));
	}
	function _0xff0c27(_0x5d6717, _0x594a20) {
		var _0x4cb076, _0x569cc7 = _0x2ed882(_0x5d6717), _0x905f21 = [], _0x59db0 = [], _0x2b3fcf;
		_0x905f21[15] = _0x59db0[15] = undefined;
		_0x569cc7.length > 16 && (_0x569cc7 = _0x4ad8df(_0x569cc7, _0x5d6717.length * 8));
		for (_0x4cb076 = 0; _0x4cb076 < 16; _0x4cb076 += 1) {
			_0x905f21[_0x4cb076] = _0x569cc7[_0x4cb076] ^ 909522486;
			_0x59db0[_0x4cb076] = _0x569cc7[_0x4cb076] ^ 1549556828;
		}
		return _0x2b3fcf = _0x4ad8df(_0x905f21.concat(_0x2ed882(_0x594a20)), 512 + _0x594a20.length * 8), _0x236e30(_0x4ad8df(_0x59db0.concat(_0x2b3fcf), 640));
	}
	function _0x3e62e9(_0x2f0353) {
		var _0xb2a462 = '0123456789abcdef', _0x311eaf = '', _0xe8e90e, _0x196b9d;
		for (_0x196b9d = 0; _0x196b9d < _0x2f0353.length; _0x196b9d += 1) {
			_0xe8e90e = _0x2f0353.charCodeAt(_0x196b9d);
			_0x311eaf += _0xb2a462.charAt(_0xe8e90e >>> 4 & 15) + _0xb2a462.charAt(_0xe8e90e & 15);
		}
		return _0x311eaf;
	}
	function _0x351c61(_0x3947bd) {
		return unescape(encodeURIComponent(_0x3947bd));
	}
	function _0xecacb4(_0x209f0b) {
		return _0x5797ef(_0x351c61(_0x209f0b));
	}
	function _0x18f7b8(_0x3c9f1e) {
		return _0x3e62e9(_0xecacb4(_0x3c9f1e));
	}
	function _0x1f4be4(_0xa4c6b8, _0x5069c9) {
		return _0xff0c27(_0x351c61(_0xa4c6b8), _0x351c61(_0x5069c9));
	}
	function _0x4df30f(_0x329a10, _0x38f1a2) {
		return _0x3e62e9(_0x1f4be4(_0x329a10, _0x38f1a2));
	}
	function _0x11345c(_0x4c045a, _0x5632e5, _0x1eca21) {
		if (!_0x5632e5) {
			if (!_0x1eca21) {
				return _0x18f7b8(_0x4c045a);
			}
			return _0xecacb4(_0x4c045a);
		}
		if (!_0x1eca21) {
			return _0x4df30f(_0x5632e5, _0x4c045a);
		}
		return _0x1f4be4(_0x5632e5, _0x4c045a);
	}
	typeof define === 'function' && define.amd ? define(function () {
		return _0x11345c;
	}) : typeof module === 'object' && module.exports ? module.exports = _0x11345c : _0xa3bac6.md5 = _0x11345c;
}(this));
Ext.apply(Ext, {
	'setCookie': function (_0x4af861, _0x417dac) {
		var _0x21d8de = arguments, _0x311c17 = arguments.length, _0x43d662 = _0x311c17 > 2 ? _0x21d8de[2] : null, _0x3b8889 = _0x311c17 > 3 ? _0x21d8de[3] : '/', _0x58f22e = _0x311c17 > 4 ? _0x21d8de[4] : null, _0x1ae64e = _0x311c17 > 5 ? _0x21d8de[5] : false;
		document.cookie = _0x4af861 + '=' + escape(_0x417dac) + (_0x43d662 === null ? '' : '; expires=' + _0x43d662.toGMTString()) + (_0x3b8889 === null ? '' : '; path=' + _0x3b8889) + (_0x58f22e === null ? '' : '; domain=' + _0x58f22e) + (_0x1ae64e === true ? '; secure' : '');
	},
	'getCookie': function (_0x4cc5c0, _0x2516cf) {
		var _0x59052d = _0x4cc5c0 + '=', _0x435507 = _0x59052d.length, _0x3da3aa = document.cookie.length, _0x3fd75b = 0, _0x2ad12e = 0;
		while (_0x3fd75b < _0x3da3aa) {
			_0x2ad12e = _0x3fd75b + _0x435507;
			if (document.cookie.substring(_0x3fd75b, _0x2ad12e) == _0x59052d) {
				return this.getCookieVal(_0x2ad12e);
			}
			_0x3fd75b = document.cookie.indexOf(' ', _0x3fd75b) + 1;
			if (_0x3fd75b === 0) {
				break;
			}
		}
		return _0x2516cf;
	},
	'getCookieVal': function (_0x4b518a) {
		var _0x352333 = document.cookie.indexOf(';', _0x4b518a);
		return _0x352333 == -1 && (_0x352333 = document.cookie.length), unescape(document.cookie.substring(_0x4b518a, _0x352333));
	}
});
Ext.define('ans.VideoJs', {
	'videoJs': null,
	'mixins': { 'observable': 'Ext.util.Observable' },
	'constructor': function (_0x30f5fd) {
		_0x30f5fd = _0x30f5fd || {};
		var _0x516e91 = this;
		_0x516e91.addEvents(['seekstart']);
		_0x516e91.mixins.observable.constructor.call(_0x516e91, _0x30f5fd);
		var _0x19118e = videojs(_0x30f5fd.videojs, _0x516e91.params2VideoOpt(_0x30f5fd.params), function () {
		});
		Ext.fly(_0x30f5fd.videojs).on('contextmenu', function (_0x35f2ea) {
			_0x35f2ea.preventDefault();
		});
		Ext.fly(_0x30f5fd.videojs).on('keydown', function (_0x126cf1) {
			(_0x126cf1.keyCode == 32 || _0x126cf1.keyCode == 37 || _0x126cf1.keyCode == 39 || _0x126cf1.keyCode == 107) && _0x126cf1.preventDefault();
		});
		_0x19118e.videoJsResolutionSwitcher && _0x19118e.on('resolutionchange', function () {
			var _0x4d4bcd = _0x19118e.currentResolution(), _0x4cdab7 = _0x4d4bcd.sources ? _0x4d4bcd.sources[0].res : false;
			Ext.setCookie('resolution', _0x4cdab7);
		});
		var _0x1ed5e2 = _0x30f5fd.params && _0x30f5fd.params.doublespeed ? 2 : 1;
		_0x19118e.on('ratechange', function () {
			var _0xfd7ace = _0x19118e.playbackRate();
			if (_0xfd7ace > _0x1ed5e2) {
				_0x19118e.pause();
				_0x19118e.playbackRate(1);
			}
		});
	},
	'params2VideoOpt': function (_0x527822) {
		var _0x4d87aa = false, _0x3263cd = [
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
		if (_0x527822.cdn) {
			try {
				top.window.app && top.window.app == 2 ? _0x3263cd = _0x3263cd.concat(_0x527822.cdn) : _0x3263cd = _0x3263cd.concat(_0x527822.cdn).sort(function (_0x4eeef6, _0x1ac4b9) {
					return _0x4eeef6.indexorder - _0x1ac4b9.indexorder;
				});
			} catch (_0xbfb490) {
				_0x3263cd = _0x3263cd.concat(_0x527822.cdn);
			}
		}
		function _0x579f83(_0xc3afe0, _0x5214a3, _0x272e2f) {
			return 'http://hls-ans.chaoxing.com/hls/m3u8/' + _0xc3afe0 + '/' + _0x5214a3 + '.m3u8?cdn=' + encodeURIComponent(_0x272e2f);
		}
		function _0x5ba107(_0xbbd6ba, _0x48f2a6) {
			var _0x1bdca3 = ServerHosts.s1_HOST.replace('http:/', '').replace('https:/', ''), _0x4051d8 = 0;
			_0xbbd6ba.src.indexOf(_0x1bdca3) > -1 && (_0x4051d8 = _0xbbd6ba.src.indexOf(_0x1bdca3) + _0x1bdca3.length);
			var _0x3d656b = _0xbbd6ba.src.substr(_0x4051d8);
			if (_0x48f2a6.ispublic && _0x4051d8 == 0) {
				return {
					'src': _0x3d656b,
					'type': 'video/mp4',
					'res': _0xbbd6ba.res
				};
			}
			return _0x48f2a6.ispublic ? _0x4d87aa ? {
				'src': _0x579f83(_0x527822.objectId, _0xbbd6ba.resolution, _0x48f2a6.url),
				'type': 'application/x-mpegURL',
				'res': _0xbbd6ba.res
			} : {
				'src': _0x48f2a6.url + _0x3d656b,
				'type': 'video/mp4',
				'res': _0xbbd6ba.res
			} : _0x4d87aa ? {
				'src': _0x579f83(_0x527822.objectId, _0xbbd6ba.resolution, _0x48f2a6.url + _0x1bdca3),
				'type': 'application/x-mpegURL',
				'res': _0xbbd6ba.res
			} : {
				'src': _0x48f2a6.url + _0x1bdca3 + _0x3d656b,
				'type': 'video/mp4',
				'res': _0xbbd6ba.res
			};
		}
		var _0x4f853a = [], _0x53b423 = Ext.getCookie('resolution', 360);
		!_0x527822.rootPath && (_0x527822.rootPath = '');
		_0x527822.http && _0x4f853a.push({
			'src': _0x527822.http,
			'type': 'video/mp4',
			'label': '标清',
			'resolution': 'sd',
			'res': 360
		});
		_0x527822.httphd && _0x4f853a.push({
			'src': _0x527822.httphd,
			'type': 'video/mp4',
			'label': '高清',
			'resolution': 'hd',
			'res': 720
		});
		_0x527822.httpshd && _0x4f853a.push({
			'src': _0x527822.httpshd,
			'type': 'video/mp4',
			'label': '超高清',
			'resolution': 'shd',
			'res': 1080
		});
		_0x527822.httpmd && _0x4f853a.push({
			'src': _0x527822.httpmd,
			'type': 'video/mp4',
			'label': '极速',
			'resolution': 'md',
			'res': 240
		});
		if (_0x4f853a.length == 1) {
			var _0x5eaaa0 = _0x4f853a[0];
			_0x5eaaa0.label = '高清';
		}
		var _0x4ee87c = false;
		for (var _0x21be2d = 0; _0x21be2d < _0x4f853a.length; _0x21be2d++) {
			if (_0x4f853a[_0x21be2d].res == _0x53b423) {
				_0x4ee87c = true;
				break;
			}
		}
		!_0x4ee87c && (_0x53b423 = 360);
		var _0x3926a6 = !Ext.isChaoxing && (Ext.isIos || Ext.isAndroid), _0x124697 = function (_0x469b50, _0x504962, _0x9993b7) {
			try {
				if (typeof top.hasJobLimit != 'undefined' && top.hasJobLimit === true && isUnFinishJob()) {
					return;
				}
				if (typeof top.videoTimeLimit != 'undefined' && top.videoTimeLimit === true && isUnFinishJob()) {
					return;
				}
			} catch (_0x425908) {
				console.log(_0x425908);
			}
			if (_0x3926a6) {
				return;
			}
			var _0x5780ec = this;
			!_0x5780ec.logCount && (_0x5780ec.logCount = 0);
			videojs.xhr({
				'uri': _0x504962,
				'headers': { 'Content-Type': 'application/json' }
			}, function (_0x67cf65, _0x2b9c48) {
				_0x5780ec.logCount++;
				if (_0x2b9c48.statusCode == 200) {
					_0x5780ec.logCount = 0;
					if (_0x2b9c48.body.indexOf('isPassed') < 0) {
						window.parent && window.parent.location.reload();
						return;
					}
					eval('var d=' + _0x2b9c48.body);
					if (d.isPassed) {
						try {
							typeof d.hasJobLimit != 'undefined' && d.hasJobLimit === true && (top.allowNextVideo = false, top.hasJobLimit = true);
							typeof d.videoTimeLimit != 'undefined' && d.videoTimeLimit === true && (top.allowNextVideo = false, top.videoTimeLimit = true);
						} catch (_0x5878c8) {
							console.log(_0x5878c8);
						}
						_0x9993b7();
					}
					return;
				}
				if (_0x5780ec.logCount >= 4) {
					_0x5780ec.logCount = 0;
					_0x469b50.pause();
					_0x2b9c48.statusCode != 0 ? alert('服务繁忙\uFF0C不能保证您能否正常完成任务\uFF0C请您稍后继续...(e: ' + _0x2b9c48.statusCode + ')') : alert('您的网络不稳定\uFF0C请您稍后继续...');
				}
			});
		}, _0x58d91d = function (_0x56a7a0, _0x2c8ab2, _0x23bdf4, _0x25e4f1) {
			if (!_0x527822.reportUrl) {
				return;
			}
			if (_0x527822.isFiled == 1 || _0x527822.state == 1) {
				return;
			}
			var _0x549151 = '[{0}][{1}][{2}][{3}][{4}][{5}][{6}][{7}]', _0x6d2c0d = (_0x527822.startTime || '0') + '_' + (_0x527822.endTime || _0x527822.duration), _0x43968f = 0, _0x4b5ee0;
			_0x23bdf4.toString().indexOf('-') != -1 ? (_0x4b5ee0 = _0x23bdf4.split('-'), _0x4b5ee0.length == 2 && (_0x43968f = parseInt(_0x4b5ee0[1]) * 1000)) : _0x43968f = _0x23bdf4 * 1000;
			if (_0x43968f == _0x527822.duration * 1000 && _0x2c8ab2 == 2) {
				return;
			}
			var _0x3afbe7 = Ext.String.format(_0x549151, _0x527822.clazzId, _0x527822.userid, _0x527822.jobid || '', _0x527822.objectId, _0x43968f, 'd_yHJ!$pdA~5', _0x527822.duration * 1000, _0x6d2c0d), _0xb494ae = [
				_0x527822.reportUrl,
				'/',
				_0x527822.dtoken,
				'?clazzId=',
				_0x527822.clazzId,
				'&playingTime=',
				_0x23bdf4,
				'&duration=',
				_0x527822.duration,
				'&clipTime=',
				_0x6d2c0d,
				'&objectId=',
				_0x527822.objectId,
				'&otherInfo=',
				_0x527822.otherInfo,
				'&jobid=',
				_0x527822.jobid,
				'&userid=',
				_0x527822.userid,
				'&isdrag=',
				_0x2c8ab2,
				'&view=pc',
				'&enc=',
				md5(_0x3afbe7),
				'&rt=',
				_0x527822.rt,
				'&dtype=Video',
				'&_t=',
				new Date().getTime()
			].join('');
			_0x124697(_0x56a7a0, _0xb494ae, _0x25e4f1);
		};
		return {
			'language': 'zh-CN',
			'poster': _0x527822.screenshot,
			'controls': true,
			'preload': 'none',
			'sources': _0x4f853a,
			'playlines': _0x3263cd,
			'playbackRates': _0x527822.doublespeed != 0 ? [
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
					'default': _0x53b423,
					'dynamicLabel': true,
					'customSourcePicker': function (_0x396475, _0x1c7810, _0x305937) {
						var _0x5b964a = _0x396475.currentPlayline();
						return _0x396475.src(_0x1c7810.map(function (_0x2cde41) {
							return _0x5ba107(_0x2cde41, _0x5b964a);
						})), _0x396475;
					}
				},
				'videoJsPlayLine': {
					'dynamicLabel': true,
					'customSourcePicker': function (_0x8b6a94, _0x245f5d, _0x55e74d) {
						var _0x28b78e = _0x8b6a94.currentResolution().sources[0];
						return _0x8b6a94.src(_0x5ba107(_0x28b78e, _0x245f5d)), _0x8b6a94;
					}
				},
				'studyControl': { 'enableSwitchWindow': _0x527822.enableSwitchWindow },
				'seekBarControl': {
					'headOffset': _0x527822.headOffset,
					'enableFastForward': _0x527822.enableFastForward,
					'isSendLog': !!parent.AttachmentSetting && _0x527822.control,
					'reportTimeInterval': _0x527822.reportTimeInterval,
					'isShowDanmu': _0x527822.danmaku,
					'chapterCapture': _0x527822.chapterCapture || 0,
					'captureInterval': _0x527822.captureInterval || 600,
					'chapterCollectionType': _0x527822.chapterCollectionType || 0,
					'startCapture': _0x527822.startCapture,
					'endCapture': _0x527822.endCapture,
					'playAginCapture': _0x527822.playAginCapture,
					'playingCapture': _0x527822.playingCapture,
					'playingLoopCapture': _0x527822.playingLoopCapture,
					'duration': _0x527822.duration,
					'isSupportFace': _0x527822.isSupportFace || false,
					'isShowFaceCollection': _0x527822.isShowFaceCollection,
					'attachmentId': _0x527822.aId,
					'sendLog': function (_0x2c99ff, _0x2f68ff, _0x3941ad, _0x4b0e78) {
						if (this.isSendLog !== true) {
							return;
						}
						var _0x322455 = 0;
						switch (_0x2f68ff) {
							case 'playing':
								_0x322455 = 0;
								break;
							case 'drag':
								_0x322455 = 1;
								break;
							case 'play':
								_0x322455 = 3;
								break;
							case 'pause':
								_0x322455 = 2;
								break;
							case 'ended':
								_0x322455 = 4;
								break;
						}
						var _0x3e7748 = this;
						_0x58d91d(_0x2c99ff, _0x322455, _0x3941ad, function () {
							try {
								_0x322455 === 4 && typeof _0x4b0e78 != 'undefined' && (_0x4b0e78.sendDataLog('ended'), _0x4b0e78.playNextVideo(_0x3e7748.attachmentId));
							} catch (_0x543179) {
								console.log(_0x543179);
							}
							window.proxy_completed && window.proxy_completed();
						});
					}
				},
				'timelineObjects': {
					'url': _0x527822.rootPath + '/richvideo/initdatawithviewer?mid=' + _0x527822.mid + '&cpi=' + _0x527822.cpi + '&classid=' + _0x527822.clazzId,
					'quizErrorReportUrl': _0x527822.rootPath + '/question/addquestionerror?classid=' + _0x527822.clazzId + '&cpi=' + _0x527822.cpi,
					'validationUrl2': _0x527822.rootPath + '/question/quiz-validation?classid=' + _0x527822.clazzId + '&cpi=' + _0x527822.cpi + '&objectid=' + _0x527822.objectId,
					'quizRightCountUrl': _0x527822.rootPath + '/question/quiz-rightcount?classid=' + _0x527822.clazzId + '&cpi=' + _0x527822.cpi
				},
				'subtitle': {
					'translate': _0x527822.chapterVideoTranslate,
					'subtitleUrl': _0x527822.rootPath + '/richvideo/allsubtitle?mid=' + _0x527822.mid + '&objectid=' + _0x527822.objectId + '&courseid=' + _0x527822.courseid,
					'subtitle': _0x527822.rootPath + '/ananas/video-editor/sub?objectid=' + _0x527822.subobjectid
				},
				'marker': {
					'url': !_0x527822.isNotMark ? _0x527822.rootPath + '/ananas/getpoints?courseid=' + _0x527822.courseid + '&mid=' + _0x527822.mid : '',
					'ff': _0x527822.enableFastForward,
					'videoTopicCloud': _0x527822.videoTopicCloud
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
	var _0x256f9f = videojs.getPlugin('plugin'), _0x5a467e = videojs.extend(_0x256f9f, {
		'constructor': function (_0x28cda6, _0x20065b) {
			_0x256f9f.call(this, _0x28cda6, _0x20065b);
			var _0x131b33 = this, _0x4618e1 = _0x20065b.mouseElTarget, _0x2d6e21 = 1;
			_0x20065b.enableSwitchWindow !== 1 && (_0x2d6e21 = 0);
			if (!_0x4618e1) {
				try {
					_0x4618e1 = window.top ? window.top : window.document;
				} catch (_0x3d0c99) {
					_0x4618e1 = window.parent ? window.parent : window.document;
				}
			}
			Ext.fly(_0x4618e1).on('mouseout', function (_0x50b6e9) {
				_0x50b6e9 = _0x50b6e9 ? _0x50b6e9 : window.event;
				var _0x3f608a = _0x50b6e9.relatedTarget || _0x50b6e9.toElement;
				!_0x3f608a && (_0x2d6e21 != 1 && _0x28cda6.pause());
			});
			_0x131b33.singleton(_0x28cda6);
		},
		'singleton': function (_0xdba4e3) {
			var _0x1dd01f = this, _0x3e1068 = parseInt(Math.random() * 9999999);
			_0xdba4e3.on('play', function () {
				Ext.setCookie('videojs_id', _0x3e1068);
			});
			_0xdba4e3.setInterval(function () {
				var _0x495a91 = Ext.getCookie('videojs_id');
				typeof _0x495a91 != 'undefined' && _0x495a91 != _0x3e1068 && _0xdba4e3.pause();
			}, 1000);
		}
	});
	videojs.registerPlugin('studyControl', _0x5a467e);
}());
(function () {
	var _0x4bfdc1 = videojs.getComponent('SeekBar'), _0x403f43 = videojs.extend(_0x4bfdc1, {
		'constructor': function (_0x10ea61, _0x4f28c1) {
			_0x4bfdc1.call(this, _0x10ea61, _0x4f28c1);
			var _0x5dcf19 = this;
			_0x10ea61.ignorePause = false;
			_0x10ea61.disableSeek = function (_0xda1ad3) {
				_0x5dcf19.disableSeek(_0xda1ad3);
			};
			_0x10ea61.onlyBackward = function (_0x4efdbb) {
				_0x5dcf19.onlyBackward(_0x4efdbb);
			};
			_0x10ea61.getSeekBar = function () {
				return _0x5dcf19;
			};
			_0x5dcf19.on('slideractive', function () {
				_0x10ea61.trigger('seekstart');
				_0x10ea61.ignorePause = true;
				_0x10ea61.ignorePlay = true;
				_0x10ea61.ignoreSeek = false;
			});
			_0x5dcf19.on('sliderinactive', function () {
				_0x10ea61.trigger('seekend');
				_0x10ea61.ignoreSeek = false;
			});
			_0x5dcf19.maxPercent = 0;
			_0x10ea61.on('timeupdate', function () {
				_0x5dcf19.maxPercent = Math.max(_0x5dcf19.getPercent(), _0x5dcf19.maxPercent);
			});
		},
		'getCurrentTime_': function () {
			return this.player_.currentTime();
		},
		'getMaxPercent': function () {
			return this.maxPercent;
		},
		'isBackward': function (_0x3474d9) {
			return this.maxPercent > this.calculateDistance(_0x3474d9);
		},
		'handleMouseDown': function (_0x2634f6) {
			if (this['_onlyBackward']) {
				if (!this.isBackward(_0x2634f6)) {
					return;
				}
			}
			if (this['_disableSeek'] === true) {
				return;
			}
			_0x4bfdc1.prototype.handleMouseDown.call(this, _0x2634f6);
		},
		'handleMouseMove': function (_0x4746e7) {
			if (this['_disableSeek'] === true) {
				return;
			}
			if (this['_onlyBackward']) {
				if (!this.isBackward(_0x4746e7)) {
					return;
				}
			}
			_0x4bfdc1.prototype.handleMouseMove.call(this, _0x4746e7);
		},
		'handleMouseUp': function (_0x4f1ffb) {
			if (this['_disableSeek'] === true) {
				return;
			}
			if (this['_onlyBackward']) {
				if (!this.isBackward(_0x4f1ffb)) {
					return;
				}
			}
			_0x4bfdc1.prototype.handleMouseUp.call(this, _0x4f1ffb);
		},
		'disableSeek': function (_0x3c92af) {
			var _0x167fe4 = this;
			_0x167fe4['_disableSeek'] = _0x3c92af !== false;
			_0x167fe4['_disableSeek'] ? _0x167fe4.disable() : _0x167fe4.enable();
		},
		'onlyBackward': function (_0x4dadc7) {
			var _0x4ffd55 = this;
			_0x4ffd55['_onlyBackward'] = _0x4dadc7 !== false;
		}
	});
	videojs.registerComponent('SeekBar', _0x403f43);
}());
(function () {
	var _0x4c8822 = videojs.getPlugin('plugin'), _0x2e4bc2 = videojs.extend(_0x4c8822, {
		'constructor': function (_0x35ef16, _0x218577) {
			_0x4c8822.call(this, _0x35ef16, _0x218577);
			var _0x542349 = this;
			_0x542349.firstClick = true;
			_0x542349.isSendLog_ = !!_0x218577.isSendLog;
			_0x542349.isShowDanmu_ = !!_0x218577.isShowDanmu;
			_0x542349.damuLastGetTime = 0;
			_0x542349.timeCount = 0;
			_0x542349.isPlay = false;
			_0x542349.isEnd = false;
			_0x542349.playTimer;
			_0x542349.chapterCapture = _0x218577.chapterCapture || 0;
			_0x542349.captureInterval = _0x218577.captureInterval * 60 || 600;
			_0x542349.chapterCollectionType = _0x218577.chapterCollectionType || 0;
			_0x542349.isSupportFace = _0x218577.isSupportFace;
			_0x542349.isAlertTip = false;
			_0x542349.startCapture = _0x218577.startCapture;
			_0x542349.endCapture = _0x218577.endCapture;
			_0x542349.playAginCapture = _0x218577.playAginCapture;
			_0x542349.playingCapture = _0x218577.playingCapture;
			_0x542349.playingLoopCapture = _0x218577.playingLoopCapture;
			_0x542349.isShowFaceCollection = _0x218577.isShowFaceCollection;
			_0x542349.duration = _0x218577.duration;
			_0x542349.playingFace = false;
			_0x542349.loopCaptureInterval = Math.floor(Math.random() * (parseInt(_0x542349.duration) - 0) + 1);
			_0x542349.isAginFace = false;
			_0x542349.againStartTime = 0;
			_0x542349.attachmentId = _0x218577.attachmentId;
			_0x35ef16.on('ready', function () {
				_0x218577.enableFastForward != 1 && _0x35ef16.disableSeek();
			});
			!_0x218577.sendLog && (_0x218577.sendLog = function () {
			});
			_0x218577.headOffset && _0x35ef16.currentTime(_0x218577.headOffset);
			var _0x296b87 = 0, _0x39e23e = 0, _0x3cbb01 = _0x218577.reportTimeInterval || 60, _0x22b28e = _0x3cbb01 * 1000, _0x34f656 = function (_0x5c733b, _0x5b2109, _0x41e009) {
				if (!_0x542349.isSendLog_) {
					return;
				}
				var _0x31ea5d = _0x542349.now_() - _0x296b87;
				(_0x31ea5d > _0x22b28e || _0x5b2109 === true) && (typeof _0x41e009 != 'undefined' ? (_0x218577.sendLog(_0x35ef16, _0x5c733b, _0x41e009, _0x542349), _0x542349.playTimer && clearInterval(_0x542349.playTimer)) : _0x218577.sendLog(_0x35ef16, _0x5c733b, _0x542349.sec_(_0x35ef16), _0x542349), _0x296b87 = _0x542349.now_());
			};
			_0x35ef16.on('play', function () {
				try {
					top.configFullScreen && reSizeVideoWindow();
				} catch (_0x2e6261) {
					console.log(_0x2e6261);
				}
				try {
					if (typeof top.hasJobLimit != 'undefined' && top.hasJobLimit === true && _0x542349.firstClick && isUnFinishJob()) {
						_0x542349.firstClick = false;
						_0x35ef16.pause();
						checkJobCountLimit(_0x35ef16, 0);
						return;
					}
					if (typeof top.videoTimeLimit != 'undefined' && top.videoTimeLimit === true && _0x542349.firstClick && isUnFinishJob()) {
						_0x542349.firstClick = false;
						_0x35ef16.pause();
						checkJobCountLimit(_0x35ef16, 1);
						return;
					}
				} catch (_0x381727) {
					console.log(_0x381727);
				}
				_0x542349.isAlertTip = false;
				_0x542349.chapterCapture == 0 || !_0x542349.isSupportFace ? (!_0x35ef16.ignorePlay ? (_0x34f656('play', true), _0x35ef16.ignoreSeek = true) : (_0x35ef16.ignorePlay = false, _0x35ef16.ignoreSeek = false), _0x542349.sendDataLog('play'), _0x542349.receiveStudyLog(), _0x542349.getDanmuList('play', _0x35ef16)) : _0x542349.chapterCapture == 1 && (_0x542349.timeCount == 0 ? _0x542349.isShowFaceCollection && !_0x542349.isPlay && (_0x542349.startCapture == 1 || typeof _0x542349.startCapture == 'undefined') ? (_0x542349.faceCollection('play', _0x35ef16, _0x542349.chapterCollectionType), _0x35ef16.pause()) : (!_0x35ef16.ignorePlay ? (_0x34f656('play', true), _0x35ef16.ignoreSeek = true) : (_0x35ef16.ignorePlay = false, _0x35ef16.ignoreSeek = false), _0x542349.sendDataLog('play'), _0x542349.receiveStudyLog(), _0x542349.getDanmuList('play', _0x35ef16), (_0x542349.isShowFaceCollection && typeof _0x542349.playingCapture == 'undefined' || _0x542349.playingCapture == 1 && _0x542349.playingLoopCapture == 0) && _0x542349.timer(_0x35ef16), _0x542349.isShowFaceCollection && _0x542349.playAginCapture == 1 && _0x35ef16.ignorePlay && !_0x542349.isAginFace && (_0x542349.faceCollection('aginPlay', _0x35ef16, _0x542349.chapterCollectionType), _0x35ef16.pause())) : ((_0x542349.isShowFaceCollection && typeof _0x542349.playingCapture == 'undefined' || _0x542349.playingCapture == 1 && _0x542349.playingLoopCapture == 1) && _0x542349.timer(_0x35ef16), _0x542349.isShowFaceCollection && _0x542349.playAginCapture == 1 && !_0x35ef16.ignorePlay && !_0x542349.isAginFace && (_0x542349.faceCollection('aginPlay', _0x35ef16, _0x542349.chapterCollectionType), _0x35ef16.pause(), _0x542349.againStartTime = _0x542349.sec_(_0x35ef16))));
			});
			_0x35ef16.on('seeked', function () {
				if (_0x218577.enableFastForward != 1 && !_0x35ef16.switchStatus) {
					var _0x41537a = _0x35ef16.currentTime(), _0x515cc2 = _0x218577.headOffset ? _0x218577.headOffset : 0;
					_0x41537a != 0 && _0x41537a > _0x515cc2 && _0x35ef16.currentTime(_0x515cc2);
				}
				!_0x35ef16.ignoreSeek ? _0x34f656('drag', true, _0x39e23e + '-' + _0x542349.sec_(_0x35ef16)) : _0x35ef16.ignoreSeek = false;
				_0x39e23e = _0x542349.sec_(_0x35ef16);
				_0x35ef16.ignorePlay = true;
				delete _0x35ef16.switchStatus;
			});
			_0x35ef16.on('pause', function () {
				!_0x35ef16.ignorePause ? (_0x34f656('pause', true), _0x35ef16.ignorePlay = false, _0x35ef16.ignoreSeek = false) : _0x35ef16.ignorePause = false;
				_0x542349.sendDataLog('pause');
				_0x542349.getDanmuList('pause', _0x35ef16);
			});
			_0x35ef16.on('timeupdate', function () {
				_0x542349.sec_(_0x35ef16) - _0x542349.againStartTime > 2 && (_0x542349.isAginFace = false);
				_0x542349.isShowFaceCollection && _0x542349.chapterCapture == 1 && _0x542349.playingCapture == 1 && _0x542349.playingLoopCapture == 1 && _0x542349.sec_(_0x35ef16) == _0x542349.loopCaptureInterval && !_0x542349.playingFace && (_0x542349.faceCollection('playing', _0x35ef16, _0x542349.chapterCollectionType), _0x35ef16.pause());
				if (typeof parent.videoTrialDuration != 'undefined' && parent.videoTrialDuration != '-1') {
					var _0x416120 = parseInt(parent.videoTrialDuration) * 60;
					if (_0x416120 < _0x542349.sec_(_0x35ef16) && !_0x542349.isAlertTip) {
						_0x35ef16.pause();
						alert('视频只允许试看' + parent.videoTrialDuration + '分钟');
						_0x542349.isAlertTip = true;
						return;
					}
				}
				parseInt(_0x35ef16.currentTime()) >= this.damuLastGetTime && _0x542349.getDanmuList('timeupdate', _0x35ef16);
				_0x542349.danmuDisplay(_0x35ef16);
				if (_0x296b87 == 0) {
					return;
				}
				_0x542349.sec_(_0x35ef16) - _0x39e23e <= 1 && !_0x35ef16.ignorePlay && (_0x39e23e = _0x542349.sec_(_0x35ef16));
				_0x34f656('playing');
			});
			_0x35ef16.on('ended', function () {
				_0x542349.playTimer && clearInterval(_0x542349.playTimer);
				_0x542349.isShowFaceCollection && !_0x542349.isEnd && _0x542349.chapterCapture == 1 && _0x542349.endCapture == 1 && _0x542349.faceCollection('ended', _0x35ef16, _0x542349.chapterCollectionType);
				_0x34f656('ended', true);
			});
		},
		'sec_': function (_0x5c9696) {
			return parseInt(_0x5c9696.currentTime());
		},
		'now_': function () {
			return new Date().getTime();
		},
		'isSendLog': function (_0x939234) {
			return _0x939234 && (this.isSendLog_ = !!_0x939234), this.isSendLog_;
		},
		'sendDataLog': function (_0x49c2a1) {
			var _0x29867c = _0x49c2a1 == 'pause' || _0x49c2a1 == 'end' ? 2 : 1;
			typeof sendReadZTMediaLog != 'undefined' && sendReadZTMediaLog(_0x29867c);
		},
		'receiveStudyLog': function () {
			typeof receiveStudyLog != 'undefined' && setTimeout(function () {
				receiveStudyLog();
			}, 50);
		},
		'getDanmuList': function (_0x3fb668, _0x262ad2) {
			if (!this.isShowDanmu_) {
				return;
			}
			var _0x590248 = this.sec_(_0x262ad2);
			if (_0x3fb668 == 'pause') {
				this.damuLastGetTime = 0;
				setTimeout(function () {
					getDanmuByTime(_0x3fb668, 0);
				}, 200);
				return;
			}
			typeof getDanmuByTime != 'undefined' && setTimeout(function () {
				getDanmuByTime(_0x3fb668, _0x590248);
			}, 200);
			if (_0x590248 < this.damuLastGetTime) {
				return;
			}
			this.damuLastGetTime = _0x590248 + 59;
		},
		'danmuDisplay': function (_0xc32cf5) {
			if (!this.isShowDanmu_) {
				return;
			}
			var _0x4535fd = this.sec_(_0xc32cf5);
			typeof danmuPlay != 'undefined' && danmuPlay(_0x4535fd);
		},
		'timer': function (_0x220ec9) {
			var _0x1d4d23 = this;
			this.playTimer = setInterval(function () {
				_0x1d4d23.timeCount++;
				if (_0x1d4d23.timeCount >= _0x1d4d23.captureInterval) {
					_0x1d4d23.isPlay = false;
					_0x220ec9.pause();
					_0x1d4d23.faceCollection('pause', _0x220ec9, _0x1d4d23.chapterCollectionType);
				}
			}, 1000);
		},
		'faceCollection': function (_0x27abaa, _0x46f1e5, _0x44a29e) {
			_0x27abaa == 'play' && this.timeCount == 0 ? typeof startFaceCollection != 'undefined' && startFaceCollection(_0x46f1e5, _0x44a29e, this) : _0x27abaa == 'pause' ? (this.playTimer && clearInterval(this.playTimer), !this.isPlay && this.timeCount >= this.captureInterval && (typeof startFaceCollection != 'undefined' && startFaceCollection(_0x46f1e5, _0x44a29e, this), this.timeCount = 0)) : _0x27abaa == 'ended' ? (this.playTimer && clearInterval(this.playTimer), typeof startFaceCollection != 'undefined' && (startFaceCollection(_0x46f1e5, _0x44a29e, this), this.isEnd = true), this.timeCount = 0) : _0x27abaa == 'playing' ? typeof startFaceCollection != 'undefined' && (startFaceCollection(_0x46f1e5, _0x44a29e, this), this.playingFace = true) : _0x27abaa == 'aginPlay' && (typeof startFaceCollection != 'undefined' && (startFaceCollection(_0x46f1e5, _0x44a29e, this), this.isAginFace = true));
		},
		'playNextVideo': function (_0x35e728) {
			if (typeof chapterPlayNextVideo != 'undefined') {
				if (typeof top.allowNextVideo != 'undefined' && top.allowNextVideo === false) {
					top.hasJobLimit === true ? top.showJobLimitTip() : top.showVideoTimeLimitTip();
					return;
				}
				chapterPlayNextVideo(_0x35e728);
			}
		}
	});
	videojs.registerPlugin('seekBarControl', _0x2e4bc2);
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
			'getChecked': function (_0xc127d7, _0x4464a3, _0xd563ca) {
				return _0xc127d7.indexOf(_0x4464a3) != -1 && _0xd563ca == 'InteractiveQuiz' ? 'checked="checked"' : '';
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
		var _0x146b62 = this, _0x3501b5 = _0x146b62.renderData, _0x213733 = _0x146b62.quizRightCountUrl;
		typeof _0x213733 != 'undefined' && Ext.Ajax.request({
			'url': _0x213733,
			'params': {
				'eventid': _0x3501b5.resourceId,
				'memberinfo': _0x3501b5.memberinfo
			},
			'method': 'get',
			'success': function (_0x1f74c1) {
				var _0x477ddf = Ext.decode(_0x1f74c1.responseText);
				_0x477ddf.status && (Ext.get('rightNum').setHTML(_0x477ddf.rightAnswerCount), Ext.get('rightAnswerNum').setStyle('display', 'inline-block'));
			}
		});
		_0x146b62.callParent(arguments);
		var _0x11ee52 = _0x146b62.scrollEl, _0x4f5058 = $(_0x11ee52.dom).niceScroll({
			'cursorborder': '',
			'cursorwidth': 6,
			'cursorcolor': '#A5A5A5',
			'boxzoom': false,
			'autohidemode': true
		});
		_0x146b62.scroller = _0x4f5058;
		_0x146b62.submitEl.on('click', function () {
			if (_0x146b62.checkResult()) {
				if (Ext.get('videoquiz-continue').getStyle('display') == 'none') {
					try {
						top.configFullScreen && exitMediumSizeWindow();
					} catch (_0x41f3d6) {
						console.log(_0x41f3d6);
					}
					_0x146b62.fireEvent('continue');
				}
			}
		});
		_0x146b62.continueEl.on('click', function () {
			try {
				top.configFullScreen && exitMediumSizeWindow();
			} catch (_0x4ae50b) {
				console.log(_0x4ae50b);
			}
			_0x146b62.fireEvent('continue');
		});
		_0x146b62.backEl && _0x146b62.backEl.on('click', function () {
			_0x146b62.onerror && _0x146b62.onerror();
			_0x146b62.fireEvent('continue');
		});
		_0x146b62.viewAnalysisEl && _0x146b62.viewAnalysisEl.on('click', function () {
			Ext.get('tkParsing').setStyle('display', 'inline-block');
		});
		_0x146b62.delAnalysisEl && _0x146b62.delAnalysisEl.on('click', function () {
			Ext.get('tkParsing').setStyle('display', 'none');
		});
	},
	'checkResult': function () {
		var _0x553e79 = this, _0x1fae00 = Ext.query('input', _0x553e79.el.dom), _0x309d79 = true, _0x570818 = _0x553e79.renderData, _0x35f0fa = _0x570818.options, _0x402a69 = [], _0x260c10 = _0x553e79.quizErrorReportUrl, _0x28c9fd = _0x553e79.validationUrl2, _0xda4240 = _0x570818.dtype;
		Ext.each(_0x1fae00, function (_0x5e4b38, _0x447adf) {
			(_0x5e4b38.value == 'true' && !_0x5e4b38.checked || _0x5e4b38.value == 'false' && _0x5e4b38.checked) && (_0x309d79 = false);
			_0x5e4b38.checked && _0x402a69.push(_0x35f0fa[_0x447adf].name);
		});
		!_0x309d79 ? _0x570818.errorBackTime && _0x570818.errorBackTime > 0 ? (Ext.get('spanNotBack').setStyle('display', 'block'), Ext.get('videoquiz-submit').setStyle('display', 'none'), _0xda4240 == 'InteractiveQuiz' ? Ext.get('knowledgeBack').setStyle('display', 'block') : Ext.get('videoquiz-continue').setStyle('display', 'block')) : _0xda4240 == 'InteractiveQuiz' && _0x570818.errorBack == 1 && _0x570818.eBstartPoint != '' ? (Ext.get('spanNotBackPoint').setStyle('display', 'block'), Ext.get('knowledgeBack').setStyle('display', 'block')) : Ext.get('spanNot').setStyle('display', 'block') : (Ext.get('spanHas').setStyle('display', 'block'), _0xda4240 == 'InteractiveQuiz' && (Ext.get('videoquiz-continue').setStyle('display', 'block'), Ext.get('knowledgeBack').setStyle('display', 'none'), Ext.get('videoquiz-submit').setStyle('display', 'none'), Ext.get('spanNot').setStyle('display', 'none'), Ext.get('spanNotBack').setStyle('display', 'none'), Ext.get('spanNotBackPoint').setStyle('display', 'none')));
		if (typeof _0x28c9fd != 'undefined') {
			var _0x4f81bb = _0x402a69.join(',');
			Ext.Ajax.request({
				'url': _0x28c9fd,
				'params': {
					'eventid': _0x570818.resourceId,
					'isRight': _0x309d79,
					'memberinfo': _0x570818.memberinfo,
					'answerContent': _0x4f81bb
				},
				'method': 'get',
				'success': function (_0x31940c) {
					_0x570818.answerContent = _0x4f81bb;
					var _0x5527a8 = Ext.decode(_0x31940c.responseText);
					if (_0x5527a8.status) {
						if (_0xda4240 == 'InteractiveQuiz') {
							Ext.get('rightNum').setHTML(_0x5527a8.rightAnswerCount);
							Ext.get('rightAnswerNum').setStyle('display', 'inline-block');
						}
						if (_0x5527a8.isRight && _0xda4240 == 'InteractiveQuiz') {
							typeof _0x5527a8.showTip != 'undefined' && _0x5527a8.showTip ? Ext.get('spanHas').setHTML('<span class="spanHas fr" style=\'display:block\'><span id="InteractiveQuizTip">恭喜你\uFF0C答对了\uFF01你的答题水准超过了' + _0x5527a8.percent + '%的同学</span></span>') : Ext.get('spanHas').setHTML('<span class="spanHas fr" style=\'display:block\'><span id="InteractiveQuizTip">恭喜你\uFF0C答对了\uFF01</span></span>');
							if (_0x5527a8.testAnalysis) {
								Ext.get('tkParsing_con').setHTML('解析\uFF1A' + _0x5527a8.testAnalysis);
								Ext.get('tkParsing').setStyle('display', 'inline-block');
								Ext.get('viewAnalysis').setStyle('display', 'block');
								var _0x35abd9 = _0x553e79.tkParseScrollEl, _0x9685ce = $(_0x35abd9.dom).niceScroll({
									'cursorborder': '',
									'cursorwidth': 6,
									'cursorcolor': '#A5A5A5',
									'boxzoom': false,
									'autohidemode': true
								});
								_0x553e79.tkParseScroll = _0x9685ce;
							}
						}
					}
				}
			});
			!_0x309d79 && _0x553e79.onerror && _0xda4240 != 'InteractiveQuiz' && _0x553e79.onerror();
		} else {
			!_0x309d79 && (Ext.Ajax.request({
				'url': _0x260c10,
				'params': {
					'eventid': _0x570818.resourceId,
					'memberinfo': _0x570818.memberinfo,
					'answerContent': _0x402a69.join(',')
				},
				'method': 'get'
			}), _0x553e79.onerror && _0xda4240 != 'InteractiveQuiz' && _0x553e79.onerror());
		}
		return !_0x309d79 && _0x570818.errorContinue == 1 && (_0x309d79 = true, Ext.get('videoquiz-submit').setStyle('display', 'none'), Ext.get('videoquiz-continue').setStyle('display', 'block')), _0x309d79;
	},
	'continueFun': function () {
		var _0x5d51e7 = this;
		_0x5d51e7.fireEvent('continue');
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
		var _0x2caada = this;
		_0x2caada.callParent(arguments);
		_0x2caada.el.on('click', function () {
			_0x2caada.fireEvent('continue');
		});
		_0x2caada.closeEl.on('click', function () {
			try {
				top.configFullScreen && exitMediumSizeWindow();
			} catch (_0x41b7de) {
				console.log(_0x41b7de);
			}
			_0x2caada.fireEvent('continue');
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
		var _0x15c9fb = this, _0x5dae29 = _0x15c9fb.contentEl;
		_0x15c9fb.callParent(arguments);
		_0x15c9fb.closeEl.on('click', function () {
			_0x15c9fb.fireEvent('continue');
		});
		var _0x344fe8 = $(_0x5dae29.dom).niceScroll({
			'cursorborder': '',
			'cursorwidth': 6,
			'cursorcolor': '#e0e0e0',
			'boxzoom': false,
			'autohidemode': true
		});
		_0x15c9fb.scroller = _0x344fe8;
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
		var _0x3d4040 = this;
		_0x3d4040.callParent(arguments);
		_0x3d4040.pptPicEl.on('click', function (_0x2ddbb4) {
			_0x2ddbb4.stopPropagation();
			_0x3d4040.pptPicEl.toggleCls('sp_ppt_pic_fullScreen');
			if (_0x3d4040.pptPicEl.hasCls('sp_ppt_pic_fullScreen')) {
				Ext.get('sp_size_big').setStyle('display', 'none');
				Ext.get('sp_size_small').setStyle('display', 'block');
				var _0x3909e9 = Ext.get('video').getStyle('height'), _0x3472f9 = Ext.get('sp_video_ppt_pic').getStyle('height'), _0x4154c8 = (parseInt(_0x3909e9) - 60 - parseInt(_0x3472f9)) / 2;
				Ext.get('sp_video_ppt_pic').setStyle('top', _0x4154c8 + 'px');
				Ext.get('sp_video_ppt_pic').setStyle('left', '0');
			} else {
				Ext.get('sp_size_big').setStyle('display', 'block');
				Ext.get('sp_size_small').setStyle('display', 'none');
				Ext.get('sp_video_ppt_pic').setStyle('top', '0px');
				Ext.get('sp_video_ppt_pic').setStyle('left', '0px');
			}
		});
		_0x3d4040.sizeBigEl.on('click', function (_0x1028c3) {
			_0x1028c3.stopPropagation();
			_0x3d4040.pptPicEl.toggleCls('sp_ppt_pic_fullScreen');
			Ext.get('sp_size_big').setStyle('display', 'none');
			Ext.get('sp_size_small').setStyle('display', 'block');
			var _0x34ebc3 = Ext.get('video').getStyle('height'), _0x57a60c = Ext.get('sp_video_ppt_pic').getStyle('height'), _0x1bede7 = (parseInt(_0x34ebc3) - 60 - parseInt(_0x57a60c)) / 2;
			Ext.get('sp_video_ppt_pic').setStyle('top', _0x1bede7 + 'px');
			Ext.get('sp_video_ppt_pic').setStyle('left', '0');
		});
		_0x3d4040.sizeSmallEl.on('click', function (_0x4fce4a) {
			_0x4fce4a.stopPropagation();
			_0x3d4040.pptPicEl.toggleCls('sp_ppt_pic_fullScreen');
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
	'constructor': function (_0x34e24a) {
		var _0x286be4 = this;
		_0x286be4.callParent(arguments);
		_0x286be4.bg = Ext.create('ans.videojs.TimelineObjectsBg', { 'renderTo': _0x34e24a.renderTo });
		_0x286be4.objects = _0x34e24a.objects && _0x34e24a.objects.sort ? _0x286be4.sort_(_0x34e24a.objects) : [];
		_0x286be4.current = 0;
	},
	'showObject': function (_0x127888, _0x549e2e, _0x5643a8) {
		var _0x288f53 = this, _0x56efab = _0x288f53.getBox(), _0x3dd347 = _0x288f53.items.getAt(0), _0x42ffec, _0x3898bc = function () {
			_0x42ffec.destroy();
			_0x288f53.hide();
			_0x127888.play();
		};
		_0x3dd347 != null && _0x3dd347.destroy();
		if (_0x549e2e == 'IMG') {
			var _0x426ea2 = { 'src': _0x5643a8.url.replace(/origin/, _0x56efab.width + '_' + _0x56efab.height) };
			_0x42ffec = _0x288f53.add({
				'xtype': 'videoimg',
				'renderData': _0x426ea2
			});
		}
		if (_0x549e2e == 'QUIZ') {
			var _0xcc3619 = function () {
			};
			if (_0x5643a8.errorBackTime && _0x5643a8.errorBackTime > 0) {
				var _0x470d8c = _0x5643a8.errorBackTime * 60;
				_0xcc3619 = function () {
					var _0x46d1cc = Math.max(_0x127888.currentTime() - _0x470d8c, 0);
					_0x127888.switchStatus = true;
					_0x127888.currentTime(_0x46d1cc);
				};
			}
			_0x42ffec = _0x288f53.add({
				'xtype': 'videoquiz',
				'renderData': _0x5643a8,
				'quizErrorReportUrl': _0x288f53.quizErrorReportUrl,
				'validationUrl2': _0x288f53.validationUrl2,
				'onerror': _0xcc3619
			});
		}
		if (_0x549e2e == 'InteractiveQuiz') {
			var _0xcc3619 = function () {
			};
			if (_0x5643a8.errorBackTime && _0x5643a8.errorBackTime > 0) {
				var _0x470d8c = _0x5643a8.errorBackTime * 60;
				_0xcc3619 = function () {
					var _0x2bfdb6 = Math.max(_0x127888.currentTime() - _0x470d8c, 0);
					_0x127888.switchStatus = true;
					_0x127888.currentTime(_0x2bfdb6);
				};
			}
			if (_0x5643a8.errorBack == 1 && _0x5643a8.eBstartPoint != '') {
				var _0x470d8c = 0, _0x242789 = _0x5643a8.eBstartPoint.split(':'), _0x431da0 = _0x242789.length;
				_0x431da0 > 0 && (_0x431da0 == 1 ? _0x470d8c = parseInt(_0x242789[0]) * 60 : _0x431da0 == 2 && (_0x470d8c = parseInt(_0x242789[0]) * 60 + parseInt(_0x242789[1])));
				_0xcc3619 = function () {
					_0x127888.switchStatus = true;
					_0x127888.currentTime(_0x470d8c);
				};
			}
			_0x5643a8.dtype = 'InteractiveQuiz';
			_0x42ffec = _0x288f53.add({
				'xtype': 'videoquiz',
				'renderData': _0x5643a8,
				'quizErrorReportUrl': _0x288f53.quizErrorReportUrl,
				'validationUrl2': _0x288f53.validationUrl2,
				'quizRightCountUrl': _0x288f53.quizRightCountUrl,
				'onerror': _0xcc3619
			});
		}
		if (_0x549e2e == 'PPT') {
			if (_0x5643a8.fp == 0) {
				return;
			}
			var _0x34613b = _0x5643a8.url;
			_0x5643a8.thumb ? _0x34613b = _0x5643a8.thumb + _0x5643a8.pageNo + '.png' : _0x34613b = _0x34613b.replace(/swfv2\/.*$/, 'thumb/' + _0x5643a8.fp + '.png');
			var _0x426ea2 = { 'src': _0x34613b };
			_0x42ffec = _0x288f53.add({
				'xtype': 'videoppt',
				'renderData': _0x426ea2
			});
		}
		_0x549e2e == 'SyncAnnotationEvent' && (_0x42ffec = _0x288f53.add({
			'xtype': 'videoannotation',
			'renderData': _0x5643a8
		}));
		if (!_0x42ffec) {
			return;
		}
		_0x42ffec.on('continue', function () {
			_0x3898bc();
		});
		var _0x4c6733 = !(_0x42ffec.model === false);
		_0x288f53.showModel(_0x4c6733);
		_0x4c6733 && _0x127888.pause();
	},
	'showModel': function (_0x359e14) {
		try {
			top.configFullScreen && mediumSizeWindow();
		} catch (_0x56497e) {
			console.log(_0x56497e);
		}
		var _0xa1d134 = this;
		_0xa1d134.show();
		_0x359e14 ? (_0xa1d134.removeCls('ans-timelineobjects-autosize'), _0xa1d134.setAutoScroll(true), _0xa1d134.bg.show()) : (_0xa1d134.addCls('ans-timelineobjects-autosize'), _0xa1d134.setAutoScroll(false));
	},
	'hide': function () {
		this.callParent(arguments);
		this.bg.hide.apply(this.bg, arguments);
	},
	'updateTime': function (_0xbb8f49, _0x221c5c) {
		if (this.current >= this.objects.length || _0xbb8f49.scrubbing()) {
			return;
		}
		var _0x867feb = this, _0x3341a3 = _0x867feb.objects[_0x867feb.current], _0x15fa15 = _0x3341a3.style, _0x43595b = _0x3341a3.datas[0];
		if (_0x221c5c >= _0x43595b.startTime) {
			_0x867feb.current++;
			setTimeout(function () {
				_0x867feb.showObject(_0xbb8f49, _0x15fa15, _0x43595b);
			}, 20);
		}
	},
	'resetTime': function (_0x30ab21, _0x5d42b1) {
		var _0x4e12e0 = this, _0x547247;
		for (_0x547247 = 0; _0x547247 < _0x4e12e0.objects.length; _0x547247++) {
			var _0x1afca8 = _0x4e12e0.objects[_0x547247].datas[0].startTime;
			if (_0x5d42b1 <= _0x1afca8) {
				break;
			}
		}
		_0x4e12e0.current = _0x547247;
	},
	'sort_': function (_0x34843a) {
		return _0x34843a && _0x34843a.sort && _0x34843a.sort(function (_0x55c3ae, _0xb79fed) {
			var _0x5656e2 = _0x55c3ae.datas[0].startTime, _0x11232e = _0xb79fed.datas[0].startTime;
			return _0x5656e2 - _0x11232e;
		});
	}
});
(function () {
	var _0xd7ce5 = videojs.getPlugin('plugin'), _0x14231f = videojs.extend(_0xd7ce5, {
		'constructor': function (_0x191cad, _0xedb42b) {
			_0xd7ce5.call(this, _0x191cad, _0xedb42b);
			if (!_0xedb42b.url) {
				return;
			}
			var _0x3c624d = this;
			_0x191cad.eventPoints = [];
			Ext.Ajax.request({
				'url': _0xedb42b.url,
				'async': false,
				'success': function (_0x3abfc6) {
					if (_0x3abfc6.status != 200) {
						return;
					}
					eval('var data=' + _0x3abfc6.responseText);
					if (data && data.length > 0) {
						var _0x1a1dc3 = [];
						for (var _0x5302a8 = 0; _0x5302a8 < data.length; _0x5302a8++) {
							var _0x140748 = data[_0x5302a8];
							if (_0x140748.style == 'InteractiveQuiz') {
								var _0xb09861 = _0x140748.datas;
								if (_0xb09861 && _0xb09861.length > 0) {
									var _0x5f5c11 = {
										'time': _0xb09861[0].startTime,
										'text': '互动测验'
									};
								}
								_0x1a1dc3.push(_0x5f5c11);
							}
						}
						_0x191cad.eventPoints = _0x1a1dc3;
					}
					var _0x5078c = Ext.create('ans.videojs.TimelineObjects', {
						'renderTo': _0x191cad.el_,
						'quizErrorReportUrl': _0xedb42b.quizErrorReportUrl,
						'validationUrl2': _0xedb42b.validationUrl2,
						'quizRightCountUrl': _0xedb42b.quizRightCountUrl,
						'objects': data
					});
					_0x191cad.on('play', function () {
						_0x5078c.resetTime(_0x191cad, _0x191cad.currentTime());
					});
					_0x191cad.on('seekend', function () {
						_0x5078c.resetTime(_0x191cad, _0x191cad.currentTime());
					});
					_0x191cad.on('timeupdate', function () {
						!_0x191cad.paused() && _0x5078c.updateTime(_0x191cad, _0x191cad.currentTime());
					});
				}
			});
		}
	});
	videojs.registerPlugin('timelineObjects', _0x14231f);
}());
(function () {
	var _0x39eeb6 = videojs.getPlugin('plugin'), _0x2a30e5 = videojs.extend(_0x39eeb6, {
		'constructor': function (_0x49e584, _0x16e172) {
			_0x39eeb6.call(this, _0x49e584, _0x16e172);
			if (!_0x16e172.url) {
				return;
			}
			var _0x298bc1 = this;
			Ext.Ajax.request({
				'url': _0x16e172.url,
				'async': false,
				'success': function (_0x14d6bc) {
					if (_0x14d6bc.status != 200) {
						return;
					}
					eval('var data=' + _0x14d6bc.responseText);
					if (!data.status) {
						return;
					}
					var _0x2af7f4 = videojs('video');
					if (_0x2af7f4 && typeof _0x2af7f4.markers === 'function') {
						var _0x289096 = _0x49e584.eventPoints;
						_0x289096.push.apply(_0x289096, data.list);
						_0x2af7f4.markers({
							'markerTip': {
								'display': true,
								'text': function (_0xc992c6) {
									return _0xc992c6.text;
								}
							},
							'markers': _0x289096,
							'onMarkerClick': function (_0x2bc79c) {
								if (_0x16e172.ff != 1) {
									return false;
								}
								var _0x53c3fb = $(this).data('marker-key');
								return _0x49e584.currentTime(_0x2bc79c.time), false;
							}
						});
					}
					if (data.list && data.list.length > 0) {
						var _0x34904d = [], _0x5b5c3a = {
							_0x5e5654: _0x2ef0c3,
							_0x5e5654: _0x58ac73
						};
						for (var _0x2266d7 = 0; _0x2266d7 < data.list.length; _0x2266d7++) {
							var _0xecca = data.list[_0x2266d7], _0x5e5654 = _0xecca.text;
							if (!_0x5b5c3a[_0x5e5654]) {
								var _0x2ef0c3 = [];
								_0x2ef0c3.push(_0xecca);
								_0x34904d.push(_0x5e5654);
							} else {
								var _0x58ac73 = _0x5b5c3a[_0x5e5654];
								_0x58ac73.push(_0xecca);
							}
						}
						function _0x3436e1(_0xfff324) {
							var _0x54fbb5 = '<div class="zsCloud_box"><h2 class="zsCloud_seltime">选择时间</h2><div class="zsCloud_div"><div class="zsCloud_div_list">';
							for (var _0x19df44 = 0; _0x19df44 < _0xfff324.length; _0x19df44++) {
								var _0x50261f = _0xfff324[_0x19df44], _0x3db93f = Ext.fly(_0x1426ad.elements[0]).select('.topicId' + _0x50261f.topicid + ':not(.markertime)'), _0x56c451 = videojs.formatTime(_0x50261f.time);
								_0x3db93f && _0x3db93f.elements[0] && _0x3db93f.elements[0].parentElement.remove();
								_0x54fbb5 += '<div class="zsCloud_item topicId' + _0x50261f.topicid + '" data-marker-time="' + _0x50261f.time + '" title="' + _0x56c451 + '" onclick="markersPlayer(this)">' + _0x56c451 + '</div>';
							}
							return _0x54fbb5 += '</div></div></div>', _0x54fbb5;
						}
						Ext.select('.zsCloud').setStyle('display', 'block');
						var _0x1426ad = Ext.select('.zsCloud_ul');
						if (_0x1426ad && _0x1426ad.elements[0]) {
							var _0x5588e8;
							for (var _0xed906b = 0; _0xed906b < _0x34904d.length; _0xed906b++) {
								var _0xc0f5d5 = _0x34904d[_0xed906b], _0x598d86 = _0x5b5c3a[_0xc0f5d5], _0x1d8cd5 = '';
								if (_0x598d86) {
									if (_0x598d86.length == 1) {
										var _0x4a9ffb = _0x598d86[0], _0x5059dc = Ext.fly(_0x1426ad.elements[0]).select('.topicId' + _0x4a9ffb.topicid + ':not(.markertime)'), _0x422c80 = videojs.formatTime(_0x4a9ffb.time);
										_0x5059dc && _0x5059dc.elements[0] && _0x5059dc.elements[0].parentElement.remove();
										_0x1d8cd5 = '<li><span class=\'topicId' + _0x4a9ffb.topicid + ' markertime\' data-marker-time=\'' + _0x4a9ffb.time + '\' title=\'' + _0x422c80 + '\' onclick=\'markersPlayer(this)\'>' + _0x4a9ffb.text + '</span></li>';
									} else {
										_0x1d8cd5 = '<li class="zsCloud_select"><span class="zsCloud_span">' + _0xc0f5d5 + '</span>';
										_0x598d86 && _0x598d86.length > 0 ? _0x1d8cd5 += _0x3436e1(_0x598d86) : _0x1d8cd5 += '</li>';
									}
								}
								_0x5588e8 ? _0x5588e8 = Ext.DomHelper.insertHtml('afterEnd', _0x5588e8.elements[0], _0x1d8cd5) : _0x5588e8 = Ext.DomHelper.insertHtml('afterBegin', _0x1426ad.elements[0], _0x1d8cd5);
								_0x5588e8 = Ext.fly(_0x5588e8).select('');
							}
						}
						_0x16e172.videoTopicCloud && _0x16e172.videoTopicCloud == 1 && (Ext.select('.zsCloud_down').setStyle('display', 'block'), Ext.select('.zsCloud_body').setStyle('display', 'block'));
					}
					var _0x29cccf = new Map(), _0x489217 = new Array();
					if (data.list && data.list.length > 0) {
						for (var _0x2266d7 = 0; _0x2266d7 < data.list.length; _0x2266d7++) {
							var _0x441d8b = data.list[_0x2266d7].topicid, _0x13720f = _0x29cccf.get(_0x441d8b);
							!_0x13720f && (_0x13720f = {}, _0x13720f.text = data.list[_0x2266d7].text, _0x13720f.time = data.list[_0x2266d7].time, _0x13720f.topicid = data.list[_0x2266d7].topicid, _0x13720f.weight = 0, _0x13720f.html = {
								'data-marker-time': data.list[_0x2266d7].time,
								'onclick': 'markersPlayer(this)'
							}, _0x29cccf.set(_0x441d8b, _0x13720f), _0x489217.push(_0x13720f));
							_0x13720f.weight += 1;
						}
					}
					$(function () {
						_0x489217.length != 0 && $('#word_cloud').jQCloud(_0x489217);
						function _0x5b5bb0(_0x94639b) {
							$(_0x94639b).niceScroll({
								'cursorborder': '',
								'cursorwidth': 8,
								'cursorcolor': '#DADFE6',
								'boxzoom': false,
								'autohidemode': true
							});
							setInterval(function () {
								$(_0x94639b).getNiceScroll().resize();
							}, 300);
						}
						$('.zsCloud_box').each(function (_0x54c841) {
							$(this).find('.zsCloud_div').attr('id', 'zsCloud_div_' + _0x54c841);
							_0x5b5bb0('#zsCloud_div_' + _0x54c841);
						});
					});
					$('.zsCloud_down').click(function () {
						var _0x13bda7 = $('.zsCloud_body');
						_0x13bda7.is(':visible') ? (_0x13bda7.hide(), $(this).addClass('zsCloud_up'), $(this).text('展开')) : (_0x13bda7.show(), $(this).removeClass('zsCloud_up'), $(this).text('收起'));
					});
				}
			});
		}
	});
	videojs.registerPlugin('marker', _0x2a30e5);
}());
(function () {
	var _0x43d7da = videojs.getPlugin('plugin'), _0x3d7e7d = videojs.extend(_0x43d7da, {
		'constructor': function (_0x3e05da, _0x458dde) {
			_0x43d7da.call(this, _0x3e05da, _0x458dde);
			var _0x3a4323 = this, _0x185035 = _0x458dde.subtitleUrl, _0x43375f = function (_0x128709) {
				var _0xe2fcaa = _0x128709.match(/support\/(\w+).\w+/);
				if (_0xe2fcaa) {
					return ServerHosts.PARENT_HOST + '/ananas/video-editor/sub?objectid=' + _0xe2fcaa[1];
				}
			}, _0xed7767 = function (_0x18eb8a, _0x2ee2ce, _0x5ef885) {
				_0x3e05da.addRemoteTextTrack({
					'kind': 'subtitles',
					'srclang': 'cn',
					'label': _0x18eb8a,
					'src': _0x2ee2ce,
					'default': _0x5ef885
				}, true);
			};
			_0x3e05da.ready(function () {
				_0x185035 && Ext.Ajax.request({
					'url': _0x185035,
					'success': function (_0x158fb9) {
						if (_0x158fb9.status != 200) {
							return;
						}
						eval('var subs=' + _0x158fb9.responseText);
						var _0x993274 = 0, _0x43d769 = 0;
						subs.length > 0 && Ext.each(subs, function (_0x33939b) {
							_0x458dde.translate == 1 && _0x33939b.name == 'English' ? (_0x33939b.selected = true, _0x43d769 = _0x993274) : _0x33939b.selected = false;
							_0xed7767(_0x33939b.name, _0x43375f(_0x33939b.url), _0x33939b.selected);
							_0x993274++;
						});
						if (_0x458dde.translate == 1) {
							Ext.select('.vjs-subs-caps-button .vjs-icon-placeholder').setHTML('翻译');
							Ext.select('.vjs-subs-caps-button .vjs-icon-placeholder').addCls('vjs-hide-content');
						}
						setTimeout(function () {
							var _0x2d2b7e = _0x3e05da.textTracks();
							_0x458dde.translate == 1 ? _0x2d2b7e && _0x2d2b7e[_0x43d769] ? _0x2d2b7e[_0x43d769].mode = 'showing' : _0x2d2b7e && _0x2d2b7e[0] && (_0x2d2b7e[0].mode = 'showing') : _0x2d2b7e && _0x2d2b7e[0] && (_0x2d2b7e[0].mode = 'showing');
						}, 500);
					}
				});
				var _0xdc8c91 = _0x3e05da.textTrackSettings;
				_0xdc8c91.setValues({
					'backgroundColor': '#000',
					'backgroundOpacity': '0',
					'edgeStyle': 'uniform'
				});
				_0xdc8c91.updateDisplay();
			});
		}
	});
	videojs.registerPlugin('subtitle', _0x3d7e7d);
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
		var _0x4f99a9 = this;
		_0x4f99a9.callParent(arguments);
		var _0x3a8c3f = Ext.query('input', _0x4f99a9.el.dom);
		Ext.each(_0x3a8c3f, function (_0x167b4f, _0x432ddc) {
			Ext.fly(_0x167b4f).on('click', function () {
				_0x4f99a9.onSelected(_0x432ddc);
			});
		});
		try {
			typeof createVideoTask === 'function' ? createVideoTask() : console.log('createVideoTask函数不存在\uFF01');
		} catch (_0x103946) {
		}
	},
	'setErrorMsg': function (_0x2b0859) {
		Ext.fly(this.errorMsgEl).setHTML(_0x2b0859);
	}
});
Ext.define('ans.videojs.ErrorNote', {
	'extend': 'Ext.Component',
	'cls': 'ans-vjserrdisplay',
	'renderTpl': ['<div class="ans-vjserrdisplay-title">播放出现异常\u3002</div>']
});
(function () {
	var _0x6dc07c = videojs.getComponent('ErrorDisplay'), _0x41bf84 = videojs.extend(_0x6dc07c, {
		'constructor': function (_0x28ca4d, _0xa052d6) {
			_0x6dc07c.call(this, _0x28ca4d, _0xa052d6);
		},
		'colse': function () {
			_0x6dc07c.prototype.colse.call(this);
			me.ansErrorDisplay && (me.ansErrorDisplay.destroy(), me.ansErrorDisplay = null);
		},
		'fill': function () {
			_0x6dc07c.prototype.fill.call(this);
			var _0x202981 = this, _0x135374 = _0x202981.player_, _0x45f0ba = _0x135374.options_.playlines, _0x57361c = Ext.query('.vjs-modal-dialog-content', _0x202981.el_)[0];
			_0x202981.ansErrorDisplay && (_0x202981.ansErrorDisplay.destroy(), delete _0x202981.ansErrorDisplay);
			if (!_0x135374.selectCDN || !_0x45f0ba) {
				_0x202981.ansErrorDisplay = Ext.create('ans.videojs.ErrorNote', { 'renderTo': _0x202981.el_ });
				return;
			}
			var _0x4a1204 = _0x135374.currentPlayline(), _0x224b9d = 0;
			Ext.each(_0x45f0ba, function (_0x309204, _0x4735e2) {
				_0x4a1204 == _0x309204 && (_0x224b9d = _0x4735e2);
			});
			_0x202981.ansErrorDisplay = Ext.create('ans.videojs.ErrorDisplay', {
				'renderTo': _0x202981.el_,
				'onSelected': function (_0x4a859f) {
					_0x135374.selectCDN(_0x4a859f);
					_0x202981.close();
				},
				'renderData': {
					'playlines': _0x45f0ba,
					'errorMsg': _0x202981.content(),
					'selectedIndex': _0x224b9d
				}
			});
		}
	});
	videojs.registerComponent('ErrorDisplay', _0x41bf84);
}());
(function () {
	var _0x21722c = null;
	typeof window.videojs === 'undefined' && typeof require === 'function' ? _0x21722c = require('video.js') : _0x21722c = window.videojs;
	(function (_0x2360c0, _0x3fdc27) {
		var _0x13c52c = {}, _0x4fa30c, _0x5a5a09 = {}, _0x1eaca6 = {};
		function _0x8e20ba(_0x107155, _0x6fd7b0, _0x16f118, _0x5e387c) {
			_0x5a5a09 = {
				'label': _0x16f118,
				'sources': _0x6fd7b0
			};
			if (typeof _0x5e387c === 'function') {
				return _0x5e387c(_0x107155, _0x6fd7b0, _0x16f118);
			}
			return _0x107155.src(_0x6fd7b0.map(function (_0x19fe6d) {
				return {
					'src': _0x19fe6d.src,
					'type': _0x19fe6d.type,
					'res': _0x19fe6d.res
				};
			})), _0x107155;
		}
		var _0x55f2e7 = _0x3fdc27.getComponent('MenuItem'), _0x22ea35 = _0x3fdc27.extend(_0x55f2e7, {
			'constructor': function (_0x3a3415, _0xa8df30, _0x4d2f91, _0x24870) {
				this.onClickListener = _0x4d2f91;
				this.label = _0x24870;
				_0x55f2e7.call(this, _0x3a3415, _0xa8df30);
				this.src = _0xa8df30.src;
				this.on('click', this.onClick);
				this.on('touchstart', this.onClick);
				_0xa8df30.initialySelected && (this.showAsLabel(), this.selected(true), this.addClass('vjs-selected'));
			},
			'showAsLabel': function () {
				this.label && (this.label.innerHTML = this.options_.label);
			},
			'onClick': function (_0x4701e8) {
				this.onClickListener(this);
				var _0x188e69 = this.player_.currentTime(), _0x1f67e9 = this.player_.paused();
				this.showAsLabel();
				this.addClass('vjs-selected');
				!_0x1f67e9 && this.player_.bigPlayButton.hide();
				typeof _0x4701e8 !== 'function' && typeof this.options_.customSourcePicker === 'function' && (_0x4701e8 = this.options_.customSourcePicker);
				var _0x524889 = 'loadeddata';
				this.player_.techName_ !== 'Youtube' && this.player_.preload() === 'none' && this.player_.techName_ !== 'Flash' && (_0x524889 = 'timeupdate');
				_0x8e20ba(this.player_, this.src, this.options_.label, _0x4701e8).one(_0x524889, function () {
					var _0x1c4cd7 = this.player_;
					_0x1c4cd7.switchStatus = true;
					_0x1c4cd7.currentTime(_0x188e69);
					!_0x1f67e9 && _0x1c4cd7.play();
					_0x1c4cd7.trigger('resolutionchange');
				});
			}
		});
		_0x3fdc27.registerComponent('ResolutionMenuItem', _0x22ea35);
		var _0x596ebe = _0x3fdc27.getComponent('MenuButton'), _0x5a23c3 = _0x3fdc27.extend(_0x596ebe, {
			'constructor': function (_0x355191, _0x4fda44, _0x18fbb2, _0x47ad6f) {
				this.sources = _0x4fda44.sources;
				this.label = _0x47ad6f;
				this.label.innerHTML = _0x4fda44.initialySelectedLabel;
				_0x596ebe.call(this, _0x355191, _0x4fda44, _0x18fbb2);
				this.controlText('Quality');
				if (_0x18fbb2.dynamicLabel) {
					this.el().appendChild(_0x47ad6f);
				} else {
					var _0x152240 = document.createElement('span');
					_0x3fdc27.dom.addClass(_0x152240, 'vjs-resolution-button-staticlabel');
					this.el().appendChild(_0x152240);
				}
			},
			'createItems': function () {
				var _0x146dec = [], _0x4c7d59 = this.sources && this.sources.label || {}, _0x5ef407 = function (_0xbe4a89) {
					_0x146dec.map(function (_0x29c0fe) {
						_0x29c0fe.selected(_0x29c0fe === _0xbe4a89);
						_0x29c0fe.removeClass('vjs-selected');
					});
				};
				for (var _0x47c5b8 in _0x4c7d59) {
					_0x4c7d59.hasOwnProperty(_0x47c5b8) && (_0x146dec.push(new _0x22ea35(this.player_, {
						'label': _0x47c5b8,
						'src': _0x4c7d59[_0x47c5b8],
						'initialySelected': _0x47c5b8 === this.options_.initialySelectedLabel,
						'customSourcePicker': this.options_.customSourcePicker
					}, _0x5ef407, this.label)), _0x1eaca6[_0x47c5b8] = _0x146dec[_0x146dec.length - 1]);
				}
				return _0x146dec;
			}
		});
		_0x4fa30c = function (_0x1b1608) {
			var _0x501b2b = _0x3fdc27.mergeOptions(_0x13c52c, _0x1b1608), _0xbb141b = this, _0x399e32 = document.createElement('span'), _0x1d26ff = {};
			_0x3fdc27.dom.addClass(_0x399e32, 'vjs-resolution-button-label');
			_0xbb141b.updateSrc = function (_0x3cc732) {
				if (!_0x3cc732) {
					return _0xbb141b.src();
				}
				_0xbb141b.controlBar.resolutionSwitcher && (_0xbb141b.controlBar.resolutionSwitcher.dispose(), delete _0xbb141b.controlBar.resolutionSwitcher);
				_0x3cc732 = _0x3cc732.sort(_0x22925f);
				_0x1d26ff = _0x2f44e7(_0x3cc732);
				var _0x49f513 = _0x566d4e(_0x1d26ff, _0x3cc732), _0x34e1fd = new _0x5a23c3(_0xbb141b, {
					'sources': _0x1d26ff,
					'initialySelectedLabel': _0x49f513.label,
					'initialySelectedRes': _0x49f513.res,
					'customSourcePicker': _0x501b2b.customSourcePicker
				}, _0x501b2b, _0x399e32);
				return _0x3fdc27.dom.addClass(_0x34e1fd.el(), 'vjs-resolution-button'), _0xbb141b.controlBar.resolutionSwitcher = _0xbb141b.controlBar.el_.insertBefore(_0x34e1fd.el_, _0xbb141b.controlBar.getChild('fullscreenToggle').el_), _0xbb141b.controlBar.resolutionSwitcher.dispose = function () {
					this.parentNode.removeChild(this);
				}, _0x8e20ba(_0xbb141b, _0x49f513.sources, _0x49f513.label, _0x501b2b.customSourcePicker);
			};
			_0xbb141b.currentResolution = function (_0x53f170, _0x33d0bd) {
				if (_0x53f170 == null) {
					return _0x5a5a09;
				}
				return _0x1eaca6[_0x53f170] != null && _0x1eaca6[_0x53f170].onClick(_0x33d0bd), _0xbb141b;
			};
			_0xbb141b.getGroupedSrc = function () {
				return _0x1d26ff;
			};
			function _0x22925f(_0x2350f9, _0x190b05) {
				if (!_0x2350f9.res || !_0x190b05.res) {
					return 0;
				}
				return +_0x190b05.res - +_0x2350f9.res;
			}
			function _0x2f44e7(_0x34f565) {
				var _0x2c13cd = {
					'label': {},
					'res': {},
					'type': {}
				};
				return _0x34f565.map(function (_0x21b6e1) {
					_0x5915ce(_0x2c13cd, 'label', _0x21b6e1);
					_0x5915ce(_0x2c13cd, 'res', _0x21b6e1);
					_0x5915ce(_0x2c13cd, 'type', _0x21b6e1);
					_0x8365d6(_0x2c13cd, 'label', _0x21b6e1);
					_0x8365d6(_0x2c13cd, 'res', _0x21b6e1);
					_0x8365d6(_0x2c13cd, 'type', _0x21b6e1);
				}), _0x2c13cd;
			}
			function _0x5915ce(_0x47a914, _0x1c4cdd, _0x343f07) {
				_0x47a914[_0x1c4cdd][_0x343f07[_0x1c4cdd]] == null && (_0x47a914[_0x1c4cdd][_0x343f07[_0x1c4cdd]] = []);
			}
			function _0x8365d6(_0x19bde0, _0x3cd1ca, _0x2a7dab) {
				_0x19bde0[_0x3cd1ca][_0x2a7dab[_0x3cd1ca]].push(_0x2a7dab);
			}
			function _0x566d4e(_0x7ef210, _0x2dafc1) {
				var _0x4760cf = _0x501b2b.default, _0x1b502e = '';
				return _0x4760cf === 'high' ? (_0x4760cf = _0x2dafc1[0].res, _0x1b502e = _0x2dafc1[0].label) : _0x4760cf === 'low' || _0x4760cf == null || !_0x7ef210.res[_0x4760cf] ? (_0x4760cf = _0x2dafc1[_0x2dafc1.length - 1].res, _0x1b502e = _0x2dafc1[_0x2dafc1.length - 1].label) : _0x7ef210.res[_0x4760cf] && (_0x1b502e = _0x7ef210.res[_0x4760cf][0].label), {
					'res': _0x4760cf,
					'label': _0x1b502e,
					'sources': _0x7ef210.res[_0x4760cf]
				};
			}
			_0xbb141b.ready(function () {
				_0xbb141b.options_.sources.length > 0 && _0xbb141b.setTimeout(function () {
					_0xbb141b.updateSrc(_0xbb141b.options_.sources);
				}, 1);
			});
		};
		_0x3fdc27.registerPlugin('videoJsResolutionSwitcher', _0x4fa30c);
	}(window, _0x21722c));
}());
(function () {
	(function (_0x37d7b9, _0xae1947) {
		var _0x366610 = {}, _0x221564, _0x41d35f = {}, _0x5b2238 = { _0x265813: _0x369fab[_0x369fab.length - 1] };
		function _0x48d3fa(_0x1395f7, _0x408659, _0x151210, _0x3fe2d1) {
			_0x41d35f = _0x408659;
			if (typeof _0x3fe2d1 === 'function') {
				return _0x3fe2d1(_0x1395f7, _0x408659, _0x151210);
			}
			return _0x1395f7;
		}
		var _0x1455d2 = _0xae1947.getComponent('ResolutionMenuItem'), _0x3d44ee = _0xae1947.extend(_0x1455d2, {
			'onClick': function (_0x2fab86) {
				this.onClickListener(this);
				var _0x315d64 = this.player_.currentTime(), _0x292832 = this.player_.paused();
				this.showAsLabel();
				this.addClass('vjs-selected');
				!_0x292832 && this.player_.bigPlayButton.hide();
				typeof _0x2fab86 !== 'function' && typeof this.options_.customSourcePicker === 'function' && (_0x2fab86 = this.options_.customSourcePicker);
				var _0x2bf080 = 'loadeddata';
				this.player_.techName_ !== 'Youtube' && this.player_.preload() === 'none' && this.player_.techName_ !== 'Flash' && (_0x2bf080 = 'timeupdate');
				var _0x3bfcc3 = _0x48d3fa(this.player_, this.src, this.options_.label, _0x2fab86);
				_0x3bfcc3 && _0x3bfcc3.one(_0x2bf080, function () {
					_0x3bfcc3.switchStatus = true;
					_0x3bfcc3.currentTime(_0x315d64);
					!_0x292832 && _0x3bfcc3.play();
					_0x3bfcc3.trigger('playlinechange');
				});
			}
		}), _0x143074 = _0xae1947.getComponent('MenuButton'), _0x353482 = _0xae1947.extend(_0x143074, {
			'constructor': function (_0x4669b4, _0x58dc80, _0x1a9d66, _0x46ee1d) {
				this.playlines = _0x58dc80.playlines;
				this.label = _0x46ee1d;
				this.label.innerHTML = _0x58dc80.initialySelectedLabel;
				_0x143074.call(this, _0x4669b4, _0x58dc80, _0x1a9d66);
				this.controlText('Playline');
				if (_0x1a9d66.dynamicLabel) {
					this.el().appendChild(_0x46ee1d);
				} else {
					var _0x219621 = document.createElement('span');
					_0xae1947.addClass(_0x219621, 'vjs-resolution-button-staticlabel');
					this.el().appendChild(_0x219621);
				}
			},
			'createItems': function () {
				var _0x369fab = [], _0x461a65 = this.playlines || [], _0x13e05e = function (_0x5a0349) {
					_0x369fab.map(function (_0x290d38) {
						_0x290d38.selected(_0x290d38 === _0x5a0349);
						_0x290d38.removeClass('vjs-selected');
					});
				};
				for (var _0x165048 = 0; _0x165048 < _0x461a65.length; _0x165048++) {
					var _0x265813 = _0x461a65[_0x165048].label;
					_0x369fab.push(new _0x3d44ee(this.player_, {
						'label': _0x265813,
						'src': _0x461a65[_0x165048],
						'initialySelected': _0x265813 === this.options_.initialySelectedLabel,
						'customSourcePicker': this.options_.customSourcePicker
					}, _0x13e05e, this.label));
				}
				return _0x369fab;
			}
		});
		_0x221564 = function (_0x1a50eb) {
			var _0x4adc5a = _0xae1947.mergeOptions(_0x366610, _0x1a50eb), _0x4459ab = this, _0x2e6510 = document.createElement('span'), _0x13bc9c = _0x4459ab.options_.playlines;
			_0xae1947.dom.addClass(_0x2e6510, 'vjs-resolution-button-label');
			var _0x2c4b70 = new _0x353482(_0x4459ab, {
				'playlines': _0x13bc9c,
				'initialySelectedLabel': _0x13bc9c[0].label,
				'initialySelectedUrl': _0x13bc9c[0].url,
				'customSourcePicker': _0x4adc5a.customSourcePicker
			}, _0x4adc5a, _0x2e6510);
			_0xae1947.dom.addClass(_0x2c4b70.el(), 'vjs-resolution-button');
			_0xae1947.dom.addClass(_0x2c4b70.el(), 'vjs-playline-button');
			_0x2c4b70.show();
			_0x4459ab.selectCDN = function (_0x1485bd) {
				_0x2c4b70.items[_0x1485bd].onClick(_0x4adc5a.customSourcePicker);
				_0x4459ab.play();
			};
			_0x13bc9c.length > 0 && (_0x41d35f = _0x13bc9c[0]);
			_0x4459ab.currentPlayline = function () {
				return _0x41d35f;
			};
			_0x4459ab.ready(function () {
				_0x4459ab.controlBar.videoJsPlayLine = _0x4459ab.controlBar.el_.insertBefore(_0x2c4b70.el_, _0x4459ab.controlBar.getChild('fullscreenToggle').el_);
				_0x4459ab.controlBar.videoJsPlayLine.dispose = function () {
					this.parentNode.removeChild(this);
				};
			});
		};
		_0xae1947.registerPlugin('videoJsPlayLine', _0x221564);
	}(window, videojs));
}());
Ext.define('ans.AudioJs', {
	'videoJs': null,
	'mixins': { 'observable': 'Ext.util.Observable' },
	'constructor': function (_0x160594) {
		_0x160594 = _0x160594 || {};
		var _0x49cfcf = this;
		_0x49cfcf.addEvents(['seekstart']);
		_0x49cfcf.mixins.observable.constructor.call(_0x49cfcf, _0x160594);
		var _0x9528df = videojs(_0x160594.videojs, _0x49cfcf.params2VideoOpt(_0x160594.params), function () {
		});
		Ext.fly(_0x160594.videojs).on('contextmenu', function (_0x25b75d) {
			_0x25b75d.preventDefault();
		});
		Ext.fly(_0x160594.videojs).on('keydown', function (_0x49f10a) {
			(_0x49f10a.keyCode == 32 || _0x49f10a.keyCode == 37 || _0x49f10a.keyCode == 39) && _0x49f10a.preventDefault();
		});
	},
	'params2VideoOpt': function (_0x2686f8) {
		var _0x398888 = [];
		!_0x2686f8.rootPath && (_0x2686f8.rootPath = '');
		_0x2686f8.http && _0x398888.push({
			'src': _0x2686f8.http,
			'type': 'audio/mp3'
		});
		var _0x4fd337 = function (_0x2ec933, _0x40bbf4, _0x3e4312) {
			var _0x44f8a6 = this;
			!_0x44f8a6.logCount && (_0x44f8a6.logCount = 0);
			videojs.xhr({
				'uri': _0x40bbf4,
				'headers': { 'Content-Type': 'application/json' }
			}, function (_0x3721d4, _0x3bf64c) {
				_0x44f8a6.logCount++;
				if (_0x3bf64c.statusCode == 200) {
					_0x44f8a6.logCount = 0;
					if (_0x3bf64c.body.indexOf('isPassed') < 0) {
						window.parent && window.parent.location.reload();
						return;
					}
					eval('var d=' + _0x3bf64c.body);
					d.isPassed && _0x3e4312();
					return;
				}
				if (_0x44f8a6.logCount >= 4) {
					_0x44f8a6.logCount = 0;
					_0x2ec933.pause();
					_0x3bf64c.statusCode != 0 ? alert('服务繁忙\uFF0C不能保证您能否正常完成任务\uFF0C请您稍后继续...(e: ' + _0x3bf64c.statusCode + ')') : alert('您的网络不稳定\uFF0C请您稍后继续...');
				}
			});
		}, _0x405f61 = function (_0xce46f, _0x10b1a4, _0x40abc3, _0x19458d) {
			if (!_0x2686f8.reportUrl) {
				return;
			}
			var _0x5da35d = (_0x2686f8.startTime || '0') + '_' + (_0x2686f8.endTime || _0x2686f8.duration), _0x1d8f40 = 0, _0xa1171d;
			_0x40abc3.toString().indexOf('-') != -1 ? (_0xa1171d = _0x40abc3.split('-'), _0xa1171d.length == 2 && (_0x1d8f40 = parseInt(_0xa1171d[1]) * 1000)) : _0x1d8f40 = _0x40abc3 * 1000;
			if (_0x1d8f40 == _0x2686f8.duration * 1000 && _0x10b1a4 == 2) {
				return;
			}
			var _0x297c20 = Ext.String.format('[{0}][{1}][{2}][{3}][{4}][{5}][{6}][{7}]', _0x2686f8.clazzId, _0x2686f8.userid, _0x2686f8.jobid ? _0x2686f8.jobid : '', _0x2686f8.objectId, _0x1d8f40, 'd_yHJ!$pdA~5', _0x2686f8.duration * 1000, _0x5da35d), _0x534102 = [
				_0x2686f8.reportUrl,
				'/',
				_0x2686f8.dtoken,
				'?clazzId=',
				_0x2686f8.clazzId,
				'&playingTime=',
				_0x40abc3,
				'&duration=',
				_0x2686f8.duration,
				'&clipTime=',
				_0x5da35d,
				'&objectId=',
				_0x2686f8.objectId,
				'&otherInfo=',
				_0x2686f8.otherInfo,
				'&jobid=',
				_0x2686f8.jobid,
				'&userid=',
				_0x2686f8.userid,
				'&isdrag=',
				_0x10b1a4,
				'&view=pc',
				'&enc=',
				md5(_0x297c20),
				'&rt=',
				_0x2686f8.rt,
				'&dtype=Audio',
				'&_t=',
				new Date().getTime()
			].join('');
			_0x4fd337(_0xce46f, _0x534102, _0x19458d);
		};
		return {
			'language': 'zh-CN',
			'controls': true,
			'preload': 'auto',
			'bigPlayButton': false,
			'sources': _0x398888,
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
				'audioNote': { 'title': _0x2686f8.filename },
				'studyControl': { 'enableSwitchWindow': 1 },
				'seekBarControl': {
					'headOffset': _0x2686f8.headOffset,
					'enableFastForward': _0x2686f8.enableFastForward,
					'isSendLog': true,
					'reportTimeInterval': _0x2686f8.reportTimeInterval,
					'sendLog': function (_0x4803ad, _0x21e0ce, _0x2a2083) {
						if (this.isSendLog !== true) {
							return;
						}
						var _0x3de4f7 = 0;
						switch (_0x21e0ce) {
							case 'play':
								_0x3de4f7 = 3;
								break;
							case 'pause':
								_0x3de4f7 = 2;
								break;
							case 'ended':
								_0x3de4f7 = 4;
								break;
						}
						_0x405f61(_0x4803ad, _0x3de4f7, _0x2a2083, function () {
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
	var _0x41a65a = videojs.getPlugin('plugin'), _0x556a77 = videojs.extend(_0x41a65a, {
		'constructor': function (_0x11c26a, _0x2f1304) {
			_0x41a65a.call(this, _0x11c26a, _0x2f1304);
			Ext.create('ans.videojs.AudioNote', {
				'renderTo': _0x11c26a.el_,
				'html': _0x2f1304.title
			});
		}
	});
	videojs.registerPlugin('audioNote', _0x556a77);
}());