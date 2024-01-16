Ext.define('ananas.ServerHosts', {
	'alternateClassName': 'ServerHosts',
	'singleton': true,
	'constructor': function () {
		var _0x5a9cd0 = this;
		_0x5a9cd0.callParent(arguments);
		var _0x5534dc = document.domain;
		try {
			_0x5a9cd0.MASTER_HOST = location.protocol + '//' + top.location.host;
		} catch (_0x363e9b) {
			_0x5a9cd0.MASTER_HOST = location.protocol + '//' + location.host;
		}
		try {
			_0x5a9cd0.PARENT_HOST = parent.location.host !== '' ? location.protocol + '//' + parent.location.host : _0x5a9cd0.MASTER_HOST;
		} catch (_0x56aa00) {
			_0x5a9cd0.PARENT_HOST = location.protocol + '//' + location.host;
		}
		_0x5a9cd0.P_HOST = location.protocol + '//p.ananas.chaoxing.com';
		_0x5a9cd0.s1_HOST = location.protocol + '//s1.ananas.chaoxing.com';
		_0x5a9cd0.s2_HOST = location.protocol + '//s2.ananas.chaoxing.com';
		_0x5a9cd0.CLOUD_HOST = 'http://cloud.ananas.' + _0x5534dc;
		_0x5a9cd0.NEW_CLOUD_HOST = location.protocol + '//pan-yz.chaoxing.com';
		_0x5a9cd0.CS_HOST = location.protocol + '//cs.ananas.' + _0x5534dc;
		_0x5a9cd0.FANYA_HOST = 'http://course.fanya.' + _0x5534dc;
		_0x5a9cd0.PAN_HOST = 'http://pan.ananas.' + _0x5534dc;
		_0x5a9cd0.CXLIVE_HOST = 'http://cxlive.' + _0x5534dc;
		_0x5a9cd0.ERYA_TSK_HOST = 'http://erya.tsk.' + _0x5534dc;
		_0x5a9cd0.QUESTIONNAIRE_HOST = 'http://surveyapp.fy.' + _0x5534dc;
		_0x5a9cd0.FX_HOST = 'http://www.' + _0x5534dc;
		_0x5a9cd0.PHONE_ZT_HOST = 'https://special.rhky.com';
		_0x5a9cd0.CHAOXING_CLASS_HOST = 'https://k.chaoxing.com';
		_0x5a9cd0.LIVE_HOST = location.protocol + '//live.chaoxing.com';
		_0x5a9cd0.APPCD_HOST = location.protocol + '//appcd.chaoxing.com';
		_0x5a9cd0.ZHIBO_HOST = 'https://zhibo.chaoxing.com';
		_0x5a9cd0.CXCLASSTASL_HOST = location.protocol + '//noteyd.chaoxing.com';
	}
});
(function (_0x3c3960) {
	function _0x541b59(_0x1f9c1e, _0x2160e6) {
		var _0x554252 = (_0x1f9c1e & 65535) + (_0x2160e6 & 65535), _0x514e2f = (_0x1f9c1e >> 16) + (_0x2160e6 >> 16) + (_0x554252 >> 16);
		return _0x514e2f << 16 | _0x554252 & 65535;
	}
	function _0x54dfe7(_0x1e9310, _0x41089) {
		return _0x1e9310 << _0x41089 | _0x1e9310 >>> 32 - _0x41089;
	}
	function _0x5d95f9(_0x5f2bab, _0x55d7c6, _0x48594a, _0x5d0a73, _0x3faaf6, _0x4766d2) {
		return _0x541b59(_0x54dfe7(_0x541b59(_0x541b59(_0x55d7c6, _0x5f2bab), _0x541b59(_0x5d0a73, _0x4766d2)), _0x3faaf6), _0x48594a);
	}
	function _0x1ae024(_0x431a1e, _0x8e6374, _0x5c31cc, _0x24b3bb, _0x18d76a, _0x4766db, _0x2f2f15) {
		return _0x5d95f9(_0x8e6374 & _0x5c31cc | ~_0x8e6374 & _0x24b3bb, _0x431a1e, _0x8e6374, _0x18d76a, _0x4766db, _0x2f2f15);
	}
	function _0x5ef997(_0x47b425, _0x17f725, _0x2fd94c, _0x21a8d5, _0x553dc1, _0x1fd05d, _0x59e767) {
		return _0x5d95f9(_0x17f725 & _0x21a8d5 | _0x2fd94c & ~_0x21a8d5, _0x47b425, _0x17f725, _0x553dc1, _0x1fd05d, _0x59e767);
	}
	function _0x4b8a09(_0x5d17b6, _0xef32a9, _0x2f0d93, _0x88985f, _0x214a82, _0x28f8da, _0x186e4b) {
		return _0x5d95f9(_0xef32a9 ^ _0x2f0d93 ^ _0x88985f, _0x5d17b6, _0xef32a9, _0x214a82, _0x28f8da, _0x186e4b);
	}
	function _0xd5e7ba(_0x47c306, _0x72e7d0, _0x4b8de7, _0xf5f03e, _0xdc04f6, _0xe92ed8, _0x52ca4b) {
		return _0x5d95f9(_0x4b8de7 ^ (_0x72e7d0 | ~_0xf5f03e), _0x47c306, _0x72e7d0, _0xdc04f6, _0xe92ed8, _0x52ca4b);
	}
	function _0x11c01b(_0x3eef1c, _0x2c9db9) {
		_0x3eef1c[_0x2c9db9 >> 5] |= 128 << _0x2c9db9 % 32;
		_0x3eef1c[(_0x2c9db9 + 64 >>> 9 << 4) + 14] = _0x2c9db9;
		var _0x583185, _0x3e319b, _0x28f9b5, _0x576d30, _0x554a17, _0x3c03f7 = 1732584193, _0x336ac2 = -271733879, _0x4603d9 = -1732584194, _0x140375 = 271733878;
		for (_0x583185 = 0; _0x583185 < _0x3eef1c.length; _0x583185 += 16) {
			_0x3e319b = _0x3c03f7;
			_0x28f9b5 = _0x336ac2;
			_0x576d30 = _0x4603d9;
			_0x554a17 = _0x140375;
			_0x3c03f7 = _0x1ae024(_0x3c03f7, _0x336ac2, _0x4603d9, _0x140375, _0x3eef1c[_0x583185], 7, -680876936);
			_0x140375 = _0x1ae024(_0x140375, _0x3c03f7, _0x336ac2, _0x4603d9, _0x3eef1c[_0x583185 + 1], 12, -389564586);
			_0x4603d9 = _0x1ae024(_0x4603d9, _0x140375, _0x3c03f7, _0x336ac2, _0x3eef1c[_0x583185 + 2], 17, 606105819);
			_0x336ac2 = _0x1ae024(_0x336ac2, _0x4603d9, _0x140375, _0x3c03f7, _0x3eef1c[_0x583185 + 3], 22, -1044525330);
			_0x3c03f7 = _0x1ae024(_0x3c03f7, _0x336ac2, _0x4603d9, _0x140375, _0x3eef1c[_0x583185 + 4], 7, -176418897);
			_0x140375 = _0x1ae024(_0x140375, _0x3c03f7, _0x336ac2, _0x4603d9, _0x3eef1c[_0x583185 + 5], 12, 1200080426);
			_0x4603d9 = _0x1ae024(_0x4603d9, _0x140375, _0x3c03f7, _0x336ac2, _0x3eef1c[_0x583185 + 6], 17, -1473231341);
			_0x336ac2 = _0x1ae024(_0x336ac2, _0x4603d9, _0x140375, _0x3c03f7, _0x3eef1c[_0x583185 + 7], 22, -45705983);
			_0x3c03f7 = _0x1ae024(_0x3c03f7, _0x336ac2, _0x4603d9, _0x140375, _0x3eef1c[_0x583185 + 8], 7, 1770035416);
			_0x140375 = _0x1ae024(_0x140375, _0x3c03f7, _0x336ac2, _0x4603d9, _0x3eef1c[_0x583185 + 9], 12, -1958414417);
			_0x4603d9 = _0x1ae024(_0x4603d9, _0x140375, _0x3c03f7, _0x336ac2, _0x3eef1c[_0x583185 + 10], 17, -42063);
			_0x336ac2 = _0x1ae024(_0x336ac2, _0x4603d9, _0x140375, _0x3c03f7, _0x3eef1c[_0x583185 + 11], 22, -1990404162);
			_0x3c03f7 = _0x1ae024(_0x3c03f7, _0x336ac2, _0x4603d9, _0x140375, _0x3eef1c[_0x583185 + 12], 7, 1804603682);
			_0x140375 = _0x1ae024(_0x140375, _0x3c03f7, _0x336ac2, _0x4603d9, _0x3eef1c[_0x583185 + 13], 12, -40341101);
			_0x4603d9 = _0x1ae024(_0x4603d9, _0x140375, _0x3c03f7, _0x336ac2, _0x3eef1c[_0x583185 + 14], 17, -1502002290);
			_0x336ac2 = _0x1ae024(_0x336ac2, _0x4603d9, _0x140375, _0x3c03f7, _0x3eef1c[_0x583185 + 15], 22, 1236535329);
			_0x3c03f7 = _0x5ef997(_0x3c03f7, _0x336ac2, _0x4603d9, _0x140375, _0x3eef1c[_0x583185 + 1], 5, -165796510);
			_0x140375 = _0x5ef997(_0x140375, _0x3c03f7, _0x336ac2, _0x4603d9, _0x3eef1c[_0x583185 + 6], 9, -1069501632);
			_0x4603d9 = _0x5ef997(_0x4603d9, _0x140375, _0x3c03f7, _0x336ac2, _0x3eef1c[_0x583185 + 11], 14, 643717713);
			_0x336ac2 = _0x5ef997(_0x336ac2, _0x4603d9, _0x140375, _0x3c03f7, _0x3eef1c[_0x583185], 20, -373897302);
			_0x3c03f7 = _0x5ef997(_0x3c03f7, _0x336ac2, _0x4603d9, _0x140375, _0x3eef1c[_0x583185 + 5], 5, -701558691);
			_0x140375 = _0x5ef997(_0x140375, _0x3c03f7, _0x336ac2, _0x4603d9, _0x3eef1c[_0x583185 + 10], 9, 38016083);
			_0x4603d9 = _0x5ef997(_0x4603d9, _0x140375, _0x3c03f7, _0x336ac2, _0x3eef1c[_0x583185 + 15], 14, -660478335);
			_0x336ac2 = _0x5ef997(_0x336ac2, _0x4603d9, _0x140375, _0x3c03f7, _0x3eef1c[_0x583185 + 4], 20, -405537848);
			_0x3c03f7 = _0x5ef997(_0x3c03f7, _0x336ac2, _0x4603d9, _0x140375, _0x3eef1c[_0x583185 + 9], 5, 568446438);
			_0x140375 = _0x5ef997(_0x140375, _0x3c03f7, _0x336ac2, _0x4603d9, _0x3eef1c[_0x583185 + 14], 9, -1019803690);
			_0x4603d9 = _0x5ef997(_0x4603d9, _0x140375, _0x3c03f7, _0x336ac2, _0x3eef1c[_0x583185 + 3], 14, -187363961);
			_0x336ac2 = _0x5ef997(_0x336ac2, _0x4603d9, _0x140375, _0x3c03f7, _0x3eef1c[_0x583185 + 8], 20, 1163531501);
			_0x3c03f7 = _0x5ef997(_0x3c03f7, _0x336ac2, _0x4603d9, _0x140375, _0x3eef1c[_0x583185 + 13], 5, -1444681467);
			_0x140375 = _0x5ef997(_0x140375, _0x3c03f7, _0x336ac2, _0x4603d9, _0x3eef1c[_0x583185 + 2], 9, -51403784);
			_0x4603d9 = _0x5ef997(_0x4603d9, _0x140375, _0x3c03f7, _0x336ac2, _0x3eef1c[_0x583185 + 7], 14, 1735328473);
			_0x336ac2 = _0x5ef997(_0x336ac2, _0x4603d9, _0x140375, _0x3c03f7, _0x3eef1c[_0x583185 + 12], 20, -1926607734);
			_0x3c03f7 = _0x4b8a09(_0x3c03f7, _0x336ac2, _0x4603d9, _0x140375, _0x3eef1c[_0x583185 + 5], 4, -378558);
			_0x140375 = _0x4b8a09(_0x140375, _0x3c03f7, _0x336ac2, _0x4603d9, _0x3eef1c[_0x583185 + 8], 11, -2022574463);
			_0x4603d9 = _0x4b8a09(_0x4603d9, _0x140375, _0x3c03f7, _0x336ac2, _0x3eef1c[_0x583185 + 11], 16, 1839030562);
			_0x336ac2 = _0x4b8a09(_0x336ac2, _0x4603d9, _0x140375, _0x3c03f7, _0x3eef1c[_0x583185 + 14], 23, -35309556);
			_0x3c03f7 = _0x4b8a09(_0x3c03f7, _0x336ac2, _0x4603d9, _0x140375, _0x3eef1c[_0x583185 + 1], 4, -1530992060);
			_0x140375 = _0x4b8a09(_0x140375, _0x3c03f7, _0x336ac2, _0x4603d9, _0x3eef1c[_0x583185 + 4], 11, 1272893353);
			_0x4603d9 = _0x4b8a09(_0x4603d9, _0x140375, _0x3c03f7, _0x336ac2, _0x3eef1c[_0x583185 + 7], 16, -155497632);
			_0x336ac2 = _0x4b8a09(_0x336ac2, _0x4603d9, _0x140375, _0x3c03f7, _0x3eef1c[_0x583185 + 10], 23, -1094730640);
			_0x3c03f7 = _0x4b8a09(_0x3c03f7, _0x336ac2, _0x4603d9, _0x140375, _0x3eef1c[_0x583185 + 13], 4, 681279174);
			_0x140375 = _0x4b8a09(_0x140375, _0x3c03f7, _0x336ac2, _0x4603d9, _0x3eef1c[_0x583185], 11, -358537222);
			_0x4603d9 = _0x4b8a09(_0x4603d9, _0x140375, _0x3c03f7, _0x336ac2, _0x3eef1c[_0x583185 + 3], 16, -722521979);
			_0x336ac2 = _0x4b8a09(_0x336ac2, _0x4603d9, _0x140375, _0x3c03f7, _0x3eef1c[_0x583185 + 6], 23, 76029189);
			_0x3c03f7 = _0x4b8a09(_0x3c03f7, _0x336ac2, _0x4603d9, _0x140375, _0x3eef1c[_0x583185 + 9], 4, -640364487);
			_0x140375 = _0x4b8a09(_0x140375, _0x3c03f7, _0x336ac2, _0x4603d9, _0x3eef1c[_0x583185 + 12], 11, -421815835);
			_0x4603d9 = _0x4b8a09(_0x4603d9, _0x140375, _0x3c03f7, _0x336ac2, _0x3eef1c[_0x583185 + 15], 16, 530742520);
			_0x336ac2 = _0x4b8a09(_0x336ac2, _0x4603d9, _0x140375, _0x3c03f7, _0x3eef1c[_0x583185 + 2], 23, -995338651);
			_0x3c03f7 = _0xd5e7ba(_0x3c03f7, _0x336ac2, _0x4603d9, _0x140375, _0x3eef1c[_0x583185], 6, -198630844);
			_0x140375 = _0xd5e7ba(_0x140375, _0x3c03f7, _0x336ac2, _0x4603d9, _0x3eef1c[_0x583185 + 7], 10, 1126891415);
			_0x4603d9 = _0xd5e7ba(_0x4603d9, _0x140375, _0x3c03f7, _0x336ac2, _0x3eef1c[_0x583185 + 14], 15, -1416354905);
			_0x336ac2 = _0xd5e7ba(_0x336ac2, _0x4603d9, _0x140375, _0x3c03f7, _0x3eef1c[_0x583185 + 5], 21, -57434055);
			_0x3c03f7 = _0xd5e7ba(_0x3c03f7, _0x336ac2, _0x4603d9, _0x140375, _0x3eef1c[_0x583185 + 12], 6, 1700485571);
			_0x140375 = _0xd5e7ba(_0x140375, _0x3c03f7, _0x336ac2, _0x4603d9, _0x3eef1c[_0x583185 + 3], 10, -1894986606);
			_0x4603d9 = _0xd5e7ba(_0x4603d9, _0x140375, _0x3c03f7, _0x336ac2, _0x3eef1c[_0x583185 + 10], 15, -1051523);
			_0x336ac2 = _0xd5e7ba(_0x336ac2, _0x4603d9, _0x140375, _0x3c03f7, _0x3eef1c[_0x583185 + 1], 21, -2054922799);
			_0x3c03f7 = _0xd5e7ba(_0x3c03f7, _0x336ac2, _0x4603d9, _0x140375, _0x3eef1c[_0x583185 + 8], 6, 1873313359);
			_0x140375 = _0xd5e7ba(_0x140375, _0x3c03f7, _0x336ac2, _0x4603d9, _0x3eef1c[_0x583185 + 15], 10, -30611744);
			_0x4603d9 = _0xd5e7ba(_0x4603d9, _0x140375, _0x3c03f7, _0x336ac2, _0x3eef1c[_0x583185 + 6], 15, -1560198380);
			_0x336ac2 = _0xd5e7ba(_0x336ac2, _0x4603d9, _0x140375, _0x3c03f7, _0x3eef1c[_0x583185 + 13], 21, 1309151649);
			_0x3c03f7 = _0xd5e7ba(_0x3c03f7, _0x336ac2, _0x4603d9, _0x140375, _0x3eef1c[_0x583185 + 4], 6, -145523070);
			_0x140375 = _0xd5e7ba(_0x140375, _0x3c03f7, _0x336ac2, _0x4603d9, _0x3eef1c[_0x583185 + 11], 10, -1120210379);
			_0x4603d9 = _0xd5e7ba(_0x4603d9, _0x140375, _0x3c03f7, _0x336ac2, _0x3eef1c[_0x583185 + 2], 15, 718787259);
			_0x336ac2 = _0xd5e7ba(_0x336ac2, _0x4603d9, _0x140375, _0x3c03f7, _0x3eef1c[_0x583185 + 9], 21, -343485551);
			_0x3c03f7 = _0x541b59(_0x3c03f7, _0x3e319b);
			_0x336ac2 = _0x541b59(_0x336ac2, _0x28f9b5);
			_0x4603d9 = _0x541b59(_0x4603d9, _0x576d30);
			_0x140375 = _0x541b59(_0x140375, _0x554a17);
		}
		return [
			_0x3c03f7,
			_0x336ac2,
			_0x4603d9,
			_0x140375
		];
	}
	function _0x4c173c(_0x1d0973) {
		var _0x2d0350, _0x3b38eb = '', _0x34db30 = _0x1d0973.length * 32;
		for (_0x2d0350 = 0; _0x2d0350 < _0x34db30; _0x2d0350 += 8) {
			_0x3b38eb += String.fromCharCode(_0x1d0973[_0x2d0350 >> 5] >>> _0x2d0350 % 32 & 255);
		}
		return _0x3b38eb;
	}
	function _0x478bc3(_0x2a2157) {
		var _0x4f1d33, _0x356dc8 = [];
		_0x356dc8[(_0x2a2157.length >> 2) - 1] = undefined;
		for (_0x4f1d33 = 0; _0x4f1d33 < _0x356dc8.length; _0x4f1d33 += 1) {
			_0x356dc8[_0x4f1d33] = 0;
		}
		var _0x3bb194 = _0x2a2157.length * 8;
		for (_0x4f1d33 = 0; _0x4f1d33 < _0x3bb194; _0x4f1d33 += 8) {
			_0x356dc8[_0x4f1d33 >> 5] |= (_0x2a2157.charCodeAt(_0x4f1d33 / 8) & 255) << _0x4f1d33 % 32;
		}
		return _0x356dc8;
	}
	function _0x546746(_0x3f9dbf) {
		return _0x4c173c(_0x11c01b(_0x478bc3(_0x3f9dbf), _0x3f9dbf.length * 8));
	}
	function _0x469215(_0x431770, _0x967bca) {
		var _0x51f51e, _0x359251 = _0x478bc3(_0x431770), _0x1916ae = [], _0x58c268 = [], _0x390507;
		_0x1916ae[15] = _0x58c268[15] = undefined;
		_0x359251.length > 16 && (_0x359251 = _0x11c01b(_0x359251, _0x431770.length * 8));
		for (_0x51f51e = 0; _0x51f51e < 16; _0x51f51e += 1) {
			_0x1916ae[_0x51f51e] = _0x359251[_0x51f51e] ^ 909522486;
			_0x58c268[_0x51f51e] = _0x359251[_0x51f51e] ^ 1549556828;
		}
		return _0x390507 = _0x11c01b(_0x1916ae.concat(_0x478bc3(_0x967bca)), 512 + _0x967bca.length * 8), _0x4c173c(_0x11c01b(_0x58c268.concat(_0x390507), 640));
	}
	function _0xc38a6b(_0x1f551e) {
		var _0x497dba = '0123456789abcdef', _0x55ece3 = '', _0x7374b, _0x489f7c;
		for (_0x489f7c = 0; _0x489f7c < _0x1f551e.length; _0x489f7c += 1) {
			_0x7374b = _0x1f551e.charCodeAt(_0x489f7c);
			_0x55ece3 += _0x497dba.charAt(_0x7374b >>> 4 & 15) + _0x497dba.charAt(_0x7374b & 15);
		}
		return _0x55ece3;
	}
	function _0xdc147b(_0x5a4d54) {
		return unescape(encodeURIComponent(_0x5a4d54));
	}
	function _0x368f18(_0x5f272e) {
		return _0x546746(_0xdc147b(_0x5f272e));
	}
	function _0x36985b(_0x2c2a6a) {
		return _0xc38a6b(_0x368f18(_0x2c2a6a));
	}
	function _0x2f0dc1(_0x3e60c1, _0x2deb52) {
		return _0x469215(_0xdc147b(_0x3e60c1), _0xdc147b(_0x2deb52));
	}
	function _0x3d2c4e(_0x56b1dc, _0x55483a) {
		return _0xc38a6b(_0x2f0dc1(_0x56b1dc, _0x55483a));
	}
	function _0x98d05b(_0x4fbef1, _0x5f27ef, _0x44695d) {
		if (!_0x5f27ef) {
			if (!_0x44695d) {
				return _0x36985b(_0x4fbef1);
			}
			return _0x368f18(_0x4fbef1);
		}
		if (!_0x44695d) {
			return _0x3d2c4e(_0x5f27ef, _0x4fbef1);
		}
		return _0x2f0dc1(_0x5f27ef, _0x4fbef1);
	}
	typeof define === 'function' && define.amd ? define(function () {
		return _0x98d05b;
	}) : typeof module === 'object' && module.exports ? module.exports = _0x98d05b : _0x3c3960.md5 = _0x98d05b;
}(this));
Ext.apply(Ext, {
	'setCookie': function (_0x4160a5, _0x5d174c) {
		var _0x380135 = arguments, _0x175c27 = arguments.length, _0x381b9f = _0x175c27 > 2 ? _0x380135[2] : null, _0x3da6d6 = _0x175c27 > 3 ? _0x380135[3] : '/', _0x53b1fa = _0x175c27 > 4 ? _0x380135[4] : null, _0x4ac790 = _0x175c27 > 5 ? _0x380135[5] : false;
		document.cookie = _0x4160a5 + '=' + escape(_0x5d174c) + (_0x381b9f === null ? '' : '; expires=' + _0x381b9f.toGMTString()) + (_0x3da6d6 === null ? '' : '; path=' + _0x3da6d6) + (_0x53b1fa === null ? '' : '; domain=' + _0x53b1fa) + (_0x4ac790 === true ? '; secure' : '');
	},
	'getCookie': function (_0x4a3a82, _0x271af7) {
		var _0x18b7e6 = _0x4a3a82 + '=', _0x555397 = _0x18b7e6.length, _0xdb25bf = document.cookie.length, _0x25e8f2 = 0, _0x577532 = 0;
		while (_0x25e8f2 < _0xdb25bf) {
			_0x577532 = _0x25e8f2 + _0x555397;
			if (document.cookie.substring(_0x25e8f2, _0x577532) == _0x18b7e6) {
				return this.getCookieVal(_0x577532);
			}
			_0x25e8f2 = document.cookie.indexOf(' ', _0x25e8f2) + 1;
			if (_0x25e8f2 === 0) {
				break;
			}
		}
		return _0x271af7;
	},
	'getCookieVal': function (_0x189e00) {
		var _0x371b70 = document.cookie.indexOf(';', _0x189e00);
		return _0x371b70 == -1 && (_0x371b70 = document.cookie.length), unescape(document.cookie.substring(_0x189e00, _0x371b70));
	}
});
Ext.define('ans.VideoJs', {
	'videoJs': null,
	'mixins': { 'observable': 'Ext.util.Observable' },
	'constructor': function (_0x17a329) {
		_0x17a329 = _0x17a329 || {};
		var _0x5c3e7d = this;
		_0x5c3e7d.addEvents(['seekstart']);
		_0x5c3e7d.mixins.observable.constructor.call(_0x5c3e7d, _0x17a329);
		var _0x5a7bd2 = videojs(_0x17a329.videojs, _0x5c3e7d.params2VideoOpt(_0x17a329.params), function () {
		});
		_0x5a7bd2.eventCount = 0;
		Ext.fly(_0x17a329.videojs).on('contextmenu', function (_0x1796ba) {
			_0x1796ba.preventDefault();
		});
		$('.video-js').attr('tabindex', 1);
		$('.vjs-big-play-button').on('click', function (_0x4687ac) {
			$('.video-js').focus();
		});
		Ext.fly(_0x17a329.videojs).on('keydown', function (_0x29e17c) {
			(_0x29e17c.keyCode == 32 || _0x29e17c.keyCode == 37 || _0x29e17c.keyCode == 39 || _0x29e17c.keyCode == 107) && _0x29e17c.preventDefault();
			_0x29e17c.keyCode == 32 && (_0x5a7bd2.paused() ? _0x5a7bd2.play() : _0x5a7bd2.pause());
		});
		_0x5a7bd2.videoJsResolutionSwitcher && _0x5a7bd2.on('resolutionchange', function () {
			var _0x2937e0 = _0x5a7bd2.currentResolution(), _0x1bc4d4 = _0x2937e0.sources ? _0x2937e0.sources[0].res : false;
			Ext.setCookie('resolution', _0x1bc4d4);
		});
		var _0x379dbc = _0x17a329.params && _0x17a329.params.doublespeed ? 2 : 1, _0x47341d = true;
		_0x5a7bd2.on('ratechange', function () {
			var _0x45a96e = _0x5a7bd2.playbackRate();
			_0x45a96e > _0x379dbc ? (_0x5a7bd2.pause(), _0x5a7bd2.playbackRate(1)) : Ext.setCookie('doubleSpeedValue', _0x45a96e);
			if (typeof aplus_queue != 'undefined' && !_0x47341d) {
				var _0x4126e3 = _0x17a329.params && _0x17a329.params.aplus_video_id ? _0x17a329.params.aplus_video_id : '', _0xdc7788 = _0x17a329.params && _0x17a329.params.aplus_resource_id ? _0x17a329.params.aplus_resource_id : '', _0x2c65f8 = _0x17a329.params && _0x17a329.params.knowledgename ? _0x17a329.params.knowledgename : '', _0x3444ec = _0x17a329.params && _0x17a329.params.coursename ? _0x17a329.params.coursename : '';
				aplus_queue.push({
					'action': 'aplus.record',
					'arguments': [
						'video_speed_click',
						'CLK',
						{
							'video_name': _0x2c65f8,
							'video_id': _0x4126e3,
							'resource_id': _0xdc7788,
							'resource_name': _0x3444ec,
							'speed_type': _0x5a7bd2.playbackRate()
						}
					]
				});
			}
			_0x47341d = false;
		});
		_0x5a7bd2.on('play', function () {
			try {
				$('.video-js').focus();
				if (_0x17a329.params && _0x17a329.params.doublespeed && parseInt(_0x17a329.params.doublespeed) === 1) {
					var _0x4348ea = Ext.getCookie('doubleSpeedValue', 1);
					_0x5a7bd2.playbackRate(_0x4348ea);
				}
			} catch (_0x55839f) {
				console.log(_0x55839f);
			}
		});
		_0x5a7bd2.on('ended', function () {
			try {
				_0x17a329.params.enableFastForward = 1;
				_0x5a7bd2.finished = true;
				_0x5a7bd2.disableSeek(false);
				$('.vjs-progress-control').unbind('click');
			} catch (_0x142c81) {
				console.log(_0x142c81);
			}
		});
	},
	'params2VideoOpt': function (_0x387054) {
		var _0x49ac83 = typeof _0x387054.cpi == 'undefined' ? 0 : _0x387054.cpi, _0x197be8 = false, _0x1c3075 = [
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
		if (_0x387054.cdn) {
			try {
				top.window.app && top.window.app == 2 ? _0x1c3075 = _0x1c3075.concat(_0x387054.cdn) : _0x1c3075 = _0x1c3075.concat(_0x387054.cdn).sort(function (_0x118e0f, _0x167b26) {
					return _0x118e0f.indexorder - _0x167b26.indexorder;
				});
			} catch (_0x43e467) {
				_0x1c3075 = _0x1c3075.concat(_0x387054.cdn);
			}
		}
		function _0xdb4eb9(_0x5cb10a, _0x9e5b85, _0x447e0f) {
			return 'http://hls-ans.chaoxing.com/hls/m3u8/' + _0x5cb10a + '/' + _0x9e5b85 + '.m3u8?cdn=' + encodeURIComponent(_0x447e0f);
		}
		function _0x81b4a8(_0x21205b, _0x4f03d1) {
			var _0x5c99ef = ServerHosts.s1_HOST.replace('http:/', '').replace('https:/', ''), _0x3e9e92 = 0;
			_0x21205b.src.indexOf(_0x5c99ef) > -1 && (_0x3e9e92 = _0x21205b.src.indexOf(_0x5c99ef) + _0x5c99ef.length);
			var _0x2f1b5c = _0x21205b.src.substr(_0x3e9e92);
			if (_0x4f03d1.ispublic && _0x3e9e92 == 0) {
				return {
					'src': _0x2f1b5c,
					'type': 'video/mp4',
					'res': _0x21205b.res
				};
			}
			return _0x4f03d1.ispublic ? _0x197be8 ? {
				'src': _0xdb4eb9(_0x387054.objectId, _0x21205b.resolution, _0x4f03d1.url),
				'type': 'application/x-mpegURL',
				'res': _0x21205b.res
			} : {
				'src': _0x4f03d1.url + _0x2f1b5c,
				'type': 'video/mp4',
				'res': _0x21205b.res
			} : _0x197be8 ? {
				'src': _0xdb4eb9(_0x387054.objectId, _0x21205b.resolution, _0x4f03d1.url + _0x5c99ef),
				'type': 'application/x-mpegURL',
				'res': _0x21205b.res
			} : {
				'src': _0x4f03d1.url + _0x5c99ef + _0x2f1b5c,
				'type': 'video/mp4',
				'res': _0x21205b.res
			};
		}
		var _0x3fcb56 = [], _0x349acc = Ext.getCookie('resolution', 360);
		!_0x387054.rootPath && (_0x387054.rootPath = '');
		_0x387054.http && _0x3fcb56.push({
			'src': _0x387054.http,
			'type': 'video/mp4',
			'label': '标清',
			'resolution': 'sd',
			'res': 360
		});
		_0x387054.httphd && _0x3fcb56.push({
			'src': _0x387054.httphd,
			'type': 'video/mp4',
			'label': '高清',
			'resolution': 'hd',
			'res': 720
		});
		_0x387054.httpshd && _0x3fcb56.push({
			'src': _0x387054.httpshd,
			'type': 'video/mp4',
			'label': '超高清',
			'resolution': 'shd',
			'res': 1080
		});
		_0x387054.httpmd && _0x3fcb56.push({
			'src': _0x387054.httpmd,
			'type': 'video/mp4',
			'label': '极速',
			'resolution': 'md',
			'res': 240
		});
		if (_0x3fcb56.length == 1) {
			var _0x10d2d6 = _0x3fcb56[0];
			_0x10d2d6.label = '高清';
		}
		var _0x37f9fc = false;
		for (var _0x15c343 = 0; _0x15c343 < _0x3fcb56.length; _0x15c343++) {
			if (_0x3fcb56[_0x15c343].res == _0x349acc) {
				_0x37f9fc = true;
				break;
			}
		}
		!_0x37f9fc && (_0x349acc = 360);
		var _0x170ef3 = !Ext.isChaoxing && (Ext.isIos || Ext.isAndroid), _0x4e0d2e = function (_0x3b299b, _0x21354a, _0x1b6070) {
			try {
				if (typeof top.hasJobLimit != 'undefined' && top.hasJobLimit === true && isUnFinishJob()) {
					return;
				}
				if (typeof top.videoTimeLimit != 'undefined' && top.videoTimeLimit === true && isUnFinishJob()) {
					return;
				}
			} catch (_0x2d8063) {
				console.log(_0x2d8063);
			}
			if (_0x170ef3) {
				return;
			}
			var _0x27feec = this;
			!_0x27feec.logCount && (_0x27feec.logCount = 0);
			videojs.xhr({
				'uri': _0x21354a,
				'headers': { 'Content-Type': 'application/json' }
			}, function (_0x578b49, _0x2372b9) {
				_0x27feec.logCount++;
				if (_0x2372b9.statusCode == 200) {
					_0x27feec.logCount = 0;
					if (_0x2372b9.body.indexOf('isPassed') < 0) {
						window.parent && window.parent.location.reload();
						return;
					}
					eval('var d=' + _0x2372b9.body);
					if (d.isPassed) {
						try {
							typeof d.hasJobLimit != 'undefined' && d.hasJobLimit === true && (top.allowNextVideo = false, top.hasJobLimit = true);
							typeof d.videoTimeLimit != 'undefined' && d.videoTimeLimit === true && (top.allowNextVideo = false, top.videoTimeLimit = true);
						} catch (_0x10173e) {
							console.log(_0x10173e);
						}
						_0x1b6070();
					}
					return;
				}
				if (_0x27feec.logCount >= 4) {
					_0x27feec.logCount = 0;
					_0x3b299b.pause();
					if (_0x2372b9.statusCode != 0) {
						if (_0x2372b9.statusCode == 202 || _0x2372b9.statusCode == 302) {
							try {
								parent.location.reload();
							} catch (_0x2df980) {
								console.log(_0x2df980.message);
							}
						} else {
							alert('服务繁忙\uFF0C不能保证您能否正常完成任务\uFF0C请您稍后继续...(e: ' + _0x2372b9.statusCode + ')');
						}
					} else {
						alert('您的网络不稳定\uFF0C请您稍后继续...');
					}
				}
			});
		}, _0x3e5979 = function (_0x2b97b9, _0x4c09da, _0x4656b4, _0x4cbd9b) {
			if (!_0x387054.reportUrl) {
				return;
			}
			if (_0x387054.isFiled == 1 || _0x387054.state == 1) {
				return;
			}
			var _0x237c28 = (_0x387054.startTime || '0') + '_' + (_0x387054.endTime || _0x387054.duration), _0x16be19 = 0, _0x1b4e87;
			_0x4656b4.toString().indexOf('-') != -1 ? (_0x1b4e87 = _0x4656b4.split('-'), _0x1b4e87.length == 2 && (_0x16be19 = parseInt(_0x1b4e87[1]) * 1000)) : _0x16be19 = _0x4656b4 * 1000;
			if (_0x16be19 == _0x387054.duration * 1000 && _0x4c09da == 2) {
				return;
			}
			var _0x2286e7 = Ext.String.format('[{0}][{1}][{2}][{3}][{4}][{5}][{6}][{7}]', _0x387054.clazzId, _0x387054.userid, _0x387054.jobid || '', _0x387054.objectId, _0x16be19, 'd_yHJ!$pdA~5', _0x387054.duration * 1000, _0x237c28), _0x1ffe77 = [
				_0x387054.reportUrl,
				'/',
				_0x387054.dtoken,
				'?clazzId=',
				_0x387054.clazzId,
				'&playingTime=',
				_0x4656b4,
				'&duration=',
				_0x387054.duration,
				'&clipTime=',
				_0x237c28,
				'&objectId=',
				_0x387054.objectId,
				'&otherInfo=',
				_0x387054.otherInfo,
				'&jobid=',
				_0x387054.jobid,
				'&userid=',
				_0x387054.userid,
				'&isdrag=',
				_0x4c09da,
				'&view=pc',
				'&enc=',
				md5(_0x2286e7),
				'&rt=',
				_0x387054.rt,
				'&dtype=Video',
				'&_t=',
				new Date().getTime()
			].join('');
			_0x4e0d2e(_0x2b97b9, _0x1ffe77, _0x4cbd9b);
		};
		return {
			'language': 'zh-CN',
			'poster': _0x387054.screenshot,
			'controls': true,
			'preload': 'none',
			'sources': _0x3fcb56,
			'playlines': _0x1c3075,
			'playbackRates': _0x387054.doublespeed != 0 ? [
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
					'default': _0x349acc,
					'dynamicLabel': true,
					'customSourcePicker': function (_0x25ac66, _0x5d98ee, _0x5e3166) {
						var _0xb22e91 = _0x25ac66.currentPlayline();
						_0x25ac66.src(_0x5d98ee.map(function (_0x393d27) {
							return _0x81b4a8(_0x393d27, _0xb22e91);
						}));
						if (typeof aplus_queue != 'undefined') {
							function _0x101d3a() {
								var _0x4cb875 = '';
								for (var _0x430763 = 1; _0x430763 <= 32; _0x430763++) {
									var _0x3e6c63 = Math.floor(Math.random() * 16).toString(16);
									_0x4cb875 += _0x3e6c63;
									(_0x430763 == 8 || _0x430763 == 12 || _0x430763 == 16 || _0x430763 == 20) && (_0x4cb875 += '-');
								}
								return _0x4cb875;
							}
							typeof aplus_queue != 'undefined' && aplus_queue.push({
								'action': 'aplus.record',
								'arguments': [
									'video_positive_load',
									'CLK',
									{
										'video_name': _0x387054.knowledgename || '',
										'video_id': _0x387054.aplus_video_id || '',
										'resource_id': _0x387054.aplus_resource_id || '',
										'resource_name': _0x387054.coursename || '',
										'video_duration': _0x387054.duration,
										'request_id': _0x101d3a()
									}
								]
							});
						}
						return _0x25ac66;
					}
				},
				'videoJsPlayLine': {
					'dynamicLabel': true,
					'customSourcePicker': function (_0x4d28a1, _0x56cb2d, _0xf5981) {
						var _0x545dc3 = _0x4d28a1.currentResolution().sources[0];
						return _0x4d28a1.src(_0x81b4a8(_0x545dc3, _0x56cb2d)), _0x4d28a1;
					}
				},
				'studyControl': { 'enableSwitchWindow': _0x387054.enableSwitchWindow },
				'seekBarControl': {
					'headOffset': _0x387054.headOffset,
					'enableFastForward': _0x387054.enableFastForward,
					'isSendLog': !!parent.AttachmentSetting && _0x387054.control,
					'reportTimeInterval': _0x387054.reportTimeInterval,
					'isShowDanmu': _0x387054.danmaku,
					'chapterCapture': _0x387054.chapterCapture || 0,
					'captureInterval': _0x387054.captureInterval || 600,
					'chapterCollectionType': _0x387054.chapterCollectionType || 0,
					'startCapture': _0x387054.startCapture,
					'endCapture': _0x387054.endCapture,
					'playAginCapture': _0x387054.playAginCapture,
					'playingCapture': _0x387054.playingCapture,
					'playingLoopCapture': _0x387054.playingLoopCapture,
					'duration': _0x387054.duration,
					'isSupportFace': _0x387054.isSupportFace || false,
					'isShowFaceCollection': _0x387054.isShowFaceCollection,
					'jumpTimePointList': _0x387054.jumpTimePointList,
					'attachmentId': _0x387054.aId,
					'aplusVideoId': _0x387054.aplus_video_id || '',
					'aplusResourseId': _0x387054.aplus_resource_id || '',
					'aplusVideoName': _0x387054.knowledgename || '',
					'aplusResourceName': _0x387054.coursename || '',
					'sendLog': function (_0x186a73, _0x40f1ab, _0x113275, _0xa3c7f0) {
						if (this.isSendLog !== true) {
							return;
						}
						var _0x4d9798 = 0;
						switch (_0x40f1ab) {
							case 'playing':
								_0x4d9798 = 0;
								break;
							case 'drag':
								_0x4d9798 = 1;
								break;
							case 'play':
								_0x4d9798 = 3;
								break;
							case 'pause':
								_0x4d9798 = 2;
								break;
							case 'ended':
								_0x4d9798 = 4;
								break;
						}
						var _0x5b2fb5 = this;
						_0x3e5979(_0x186a73, _0x4d9798, _0x113275, function () {
							try {
								_0x4d9798 === 4 && typeof _0xa3c7f0 != 'undefined' && (_0xa3c7f0.sendDataLog('ended'), _0xa3c7f0.playNextVideo(_0x5b2fb5.attachmentId));
							} catch (_0x44289a) {
								console.log(_0x44289a);
							}
							window.proxy_completed && window.proxy_completed();
						});
					}
				},
				'timelineObjects': {
					'begins': _0x387054.begins,
					'ends': _0x387054.ends,
					'url': _0x387054.rootPath + '/richvideo/initdatawithviewerV2?mid=' + _0x387054.mid + '&cpi=' + _0x387054.cpi + '&classid=' + _0x387054.clazzId,
					'quizErrorReportUrl': _0x387054.rootPath + '/question/addquestionerror?classid=' + _0x387054.clazzId + '&cpi=' + _0x387054.cpi,
					'validationUrl2': _0x387054.rootPath + '/question/quiz-validation?classid=' + _0x387054.clazzId + '&cpi=' + _0x49ac83 + '&objectid=' + _0x387054.objectId,
					'quizRightCountUrl': _0x387054.rootPath + '/question/quiz-rightcount?classid=' + _0x387054.clazzId + '&cpi=' + _0x49ac83
				},
				'customIframePlugin': {
					'eventArray': _0x387054.eventArray,
					'supportHeartbeat': _0x387054.supportHeartbeat,
					'courseid': _0x387054.courseid,
					'clazzId': _0x387054.clazzId,
					'userId': _0x387054.userid,
					'cookieFid': _0x387054.cookieFid,
					'knowledgeid': _0x387054.knowledgeid,
					'objectid': _0x387054.objectid,
					'playTime': _0x387054.playTime,
					'videoEnc': _0x387054.videoEnc,
					'headOffset': _0x387054.headOffset
				},
				'subtitle': {
					'translate': _0x387054.chapterVideoTranslate,
					'subtitleUrl': _0x387054.rootPath + '/richvideo/allsubtitle?mid=' + _0x387054.mid + '&objectid=' + _0x387054.objectId + '&courseid=' + _0x387054.courseid,
					'subtitle': _0x387054.rootPath + '/ananas/video-editor/sub?objectid=' + _0x387054.subobjectid
				},
				'marker': {
					'url': !_0x387054.isNotMark ? _0x387054.rootPath + '/ananas/getpoints?courseid=' + _0x387054.courseid + '&mid=' + _0x387054.mid : '',
					'ff': _0x387054.enableFastForward,
					'videoTopicCloud': _0x387054.videoTopicCloud
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
	var _0x5845c2 = videojs.getPlugin('plugin'), _0x3e63a1 = videojs.extend(_0x5845c2, {
		'constructor': function (_0x5620f4, _0x18f049) {
			_0x5845c2.call(this, _0x5620f4, _0x18f049);
			var _0x22d374 = this, _0x528223 = _0x18f049.mouseElTarget, _0xb12cd1 = 1;
			_0x18f049.enableSwitchWindow !== 1 && (_0xb12cd1 = 0);
			if (!_0x528223) {
				try {
					_0x528223 = window.top ? window.top : window.document;
				} catch (_0x20ddf3) {
					_0x528223 = window.parent ? window.parent : window.document;
				}
			}
			Ext.fly(_0x528223).on('mouseout', function (_0x1d39c2) {
				_0x1d39c2 = _0x1d39c2 ? _0x1d39c2 : window.event;
				var _0x3945cb = _0x1d39c2.relatedTarget || _0x1d39c2.toElement;
				!_0x3945cb && (_0xb12cd1 != 1 && _0x5620f4.pause());
			});
			_0x22d374.singleton(_0x5620f4);
		},
		'singleton': function (_0x3e5bc2) {
			var _0xfe81e2 = this, _0x78f0f6 = parseInt(Math.random() * 9999999);
			_0x3e5bc2.on('play', function () {
				Ext.setCookie('videojs_id', _0x78f0f6);
			});
			_0x3e5bc2.setInterval(function () {
				var _0x193732 = Ext.getCookie('videojs_id');
				typeof _0x193732 != 'undefined' && _0x193732 != _0x78f0f6 && _0x3e5bc2.pause();
			}, 1000);
		}
	});
	videojs.registerPlugin('studyControl', _0x3e63a1);
}());
(function () {
	var _0x22b5f1 = videojs.getComponent('SeekBar'), _0xfa9d2a = videojs.extend(_0x22b5f1, {
		'constructor': function (_0x16f749, _0x2fa228) {
			_0x22b5f1.call(this, _0x16f749, _0x2fa228);
			var _0x3c4b0c = this;
			_0x16f749.ignorePause = false;
			_0x16f749.disableSeek = function (_0x5ef93b) {
				_0x3c4b0c.disableSeek(_0x5ef93b);
			};
			_0x16f749.onlyBackward = function (_0x77bfa4) {
				_0x3c4b0c.onlyBackward(_0x77bfa4);
			};
			_0x16f749.getSeekBar = function () {
				return _0x3c4b0c;
			};
			_0x3c4b0c.on('slideractive', function () {
				_0x16f749.trigger('seekstart');
				_0x16f749.ignorePause = true;
				_0x16f749.ignorePlay = true;
				_0x16f749.ignoreSeek = false;
			});
			_0x3c4b0c.on('sliderinactive', function () {
				_0x16f749.trigger('seekend');
				_0x16f749.ignoreSeek = false;
			});
			_0x3c4b0c.maxPercent = 0;
			_0x16f749.on('timeupdate', function () {
				_0x3c4b0c.maxPercent = Math.max(_0x3c4b0c.getPercent(), _0x3c4b0c.maxPercent);
			});
		},
		'getCurrentTime_': function () {
			return this.player_.currentTime();
		},
		'getMaxPercent': function () {
			return this.maxPercent;
		},
		'isBackward': function (_0x60cb4e) {
			return this.maxPercent > this.calculateDistance(_0x60cb4e);
		},
		'handleMouseDown': function (_0x5cf224) {
			if (this['_onlyBackward']) {
				if (!this.isBackward(_0x5cf224)) {
					return;
				}
			}
			if (this['_disableSeek'] === true) {
				return;
			}
			_0x22b5f1.prototype.handleMouseDown.call(this, _0x5cf224);
		},
		'handleMouseMove': function (_0x2505b8) {
			if (this['_disableSeek'] === true) {
				return;
			}
			if (this['_onlyBackward']) {
				if (!this.isBackward(_0x2505b8)) {
					return;
				}
			}
			_0x22b5f1.prototype.handleMouseMove.call(this, _0x2505b8);
		},
		'handleMouseUp': function (_0x29ffc2) {
			if (this['_disableSeek'] === true) {
				return;
			}
			if (this['_onlyBackward']) {
				if (!this.isBackward(_0x29ffc2)) {
					return;
				}
			}
			_0x22b5f1.prototype.handleMouseUp.call(this, _0x29ffc2);
		},
		'disableSeek': function (_0x25030a) {
			var _0x1da955 = this;
			_0x1da955['_disableSeek'] = _0x25030a !== false;
			_0x1da955['_disableSeek'] ? _0x1da955.disable() : _0x1da955.enable();
		},
		'onlyBackward': function (_0x277efa) {
			var _0x297260 = this;
			_0x297260['_onlyBackward'] = _0x277efa !== false;
		}
	});
	videojs.registerComponent('SeekBar', _0xfa9d2a);
}());
(function () {
	var _0x58f75c = videojs.getPlugin('plugin'), _0x1ab48d = videojs.extend(_0x58f75c, {
		'constructor': function (_0x41d85c, _0x2bf865) {
			_0x58f75c.call(this, _0x41d85c, _0x2bf865);
			var _0x28ca6b = this;
			_0x28ca6b.firstClick = true;
			_0x28ca6b.isSendLog_ = !!_0x2bf865.isSendLog;
			_0x28ca6b.isShowDanmu_ = !!_0x2bf865.isShowDanmu;
			_0x28ca6b.damuLastGetTime = 0;
			_0x28ca6b.firstPlay = true;
			_0x28ca6b.firstPlayFace = true;
			_0x28ca6b.pausePlayFace = false;
			_0x28ca6b.playingFace = false;
			_0x28ca6b.playingFaceTime = 0;
			_0x28ca6b.chapterCapture = _0x2bf865.chapterCapture || 0;
			_0x28ca6b.captureInterval = _0x2bf865.captureInterval * 60 || 600;
			_0x28ca6b.chapterCollectionType = _0x2bf865.chapterCollectionType || 0;
			_0x28ca6b.isSupportFace = _0x2bf865.isSupportFace;
			_0x28ca6b.isAlertTip = false;
			_0x28ca6b.startCapture = _0x2bf865.startCapture;
			_0x28ca6b.endCapture = _0x2bf865.endCapture;
			_0x28ca6b.playAginCapture = _0x2bf865.playAginCapture;
			_0x28ca6b.playingCapture = _0x2bf865.playingCapture;
			_0x28ca6b.playingLoopCapture = _0x2bf865.playingLoopCapture;
			_0x28ca6b.isShowFaceCollection = _0x2bf865.isShowFaceCollection;
			_0x28ca6b.duration = _0x2bf865.duration;
			_0x28ca6b.jumpTimePointList = _0x2bf865.jumpTimePointList;
			_0x28ca6b.loopCaptureInterval = Math.floor(Math.random() * (parseInt(_0x28ca6b.duration) - 0) + 1);
			_0x28ca6b.attachmentId = _0x2bf865.attachmentId;
			_0x28ca6b.aplusVideoId = _0x2bf865.aplusVideoId;
			_0x28ca6b.aplusResourseId = _0x2bf865.aplusResourseId;
			_0x28ca6b.aplusVideoName = _0x2bf865.aplusVideoName;
			_0x28ca6b.aplusResourceName = _0x2bf865.aplusResourceName;
			_0x41d85c.on('ready', function () {
				_0x2bf865.enableFastForward != 1 && _0x41d85c.disableSeek();
			});
			!_0x2bf865.sendLog && (_0x2bf865.sendLog = function () {
			});
			_0x2bf865.headOffset && _0x41d85c.currentTime(_0x2bf865.headOffset);
			function _0x2883d3() {
				typeof aplus_queue != 'undefined' && aplus_queue.push({
					'action': 'aplus.record',
					'arguments': [
						'heartbeat',
						'CLK',
						{
							'video_name': _0x28ca6b.aplusVideoName,
							'video_id': _0x28ca6b.aplusVideoId,
							'resource_id': _0x28ca6b.aplusResourseId,
							'resource_name': _0x28ca6b.aplusResourceName,
							'request_id': _0x28ca6b.getNewGuid()
						}
					]
				});
			}
			var _0x4b849e = null, _0x884521 = 0, _0x1fe64b = 0, _0x5d9074 = _0x2bf865.reportTimeInterval || 60, _0x159d69 = _0x5d9074 * 1000, _0x408d6b = function (_0x459530, _0x4e79a7, _0x5ecfb7) {
				var _0x51d20c = $('.vjs-tip2');
				_0x51d20c.find('.vjs-tip-inner2').text(_0x5ecfb7);
				_0x51d20c.css({
					'left': _0x459530 / _0x4e79a7.duration() * 100 + '%',
					'margin-left': -parseFloat(_0x51d20c.width()) / 2 - 5 + 'px',
					'visibility': 'visible'
				});
				$('.vjs-default-skin').removeClass('vjs-user-inactive');
				$('.vjs-default-skin').addClass('vjs-user-active');
				setTimeout(function () {
					_0x51d20c.css('visibility', 'hidden');
				}, 2000);
			}, _0x246807 = function (_0x48bbf3, _0x231757, _0x4d8705) {
				if (!_0x28ca6b.isSendLog_) {
					return;
				}
				var _0x48c123 = _0x28ca6b.now_() - _0x884521;
				(_0x48c123 > _0x159d69 || _0x231757 === true) && (typeof _0x4d8705 != 'undefined' ? _0x2bf865.sendLog(_0x41d85c, _0x48bbf3, _0x4d8705, _0x28ca6b) : _0x2bf865.sendLog(_0x41d85c, _0x48bbf3, _0x28ca6b.sec_(_0x41d85c), _0x28ca6b), _0x884521 = _0x28ca6b.now_());
			}, _0x4affe8 = function (_0x319ff8) {
				return _0x319ff8 && _0x319ff8.sort && _0x319ff8.sort(function (_0x27345a, _0x3cbb3f) {
					return parseInt(_0x27345a) - parseInt(_0x3cbb3f);
				});
			}, _0x57d542 = function (_0x20d7b0) {
				try {
					var _0x5966d7 = _0x20d7b0.otherPointTimes;
					if (_0x5966d7.length === 0) {
						return -1;
					}
					return _0x5966d7 = _0x4affe8(_0x5966d7), _0x5966d7[0];
				} catch (_0x2bfefa) {
					console.log(_0x2bfefa);
				}
				return -1;
			}, _0x25ecdf = function (_0x365248) {
				try {
					var _0x4264a5 = _0x365248.otherPointTimes, _0x1241c8 = _0x4264a5.length;
					if (_0x1241c8 === 0) {
						return -1;
					}
					return _0x4264a5 = _0x4affe8(_0x4264a5), _0x4264a5[_0x1241c8 - 1];
				} catch (_0x189269) {
					console.log(_0x189269);
				}
				return -1;
			}, _0x2f554b = function (_0x49fe25, _0x551b5f) {
				try {
					if (!_0x49fe25.paused() && typeof _0x49fe25.eventPoints != 'undefined') {
						var _0xbbb47b = _0x49fe25.currentTime(), _0x25ba5e = 0;
						_0x49fe25.eventPoints.forEach(function (_0x2a77c4) {
							_0x2a77c4.text == '片头' && (_0x25ba5e = _0x2a77c4.time);
						});
						if (_0x551b5f.headOffset > 0 && _0x551b5f.headOffset < _0x25ba5e) {
							return;
						}
						if (_0x25ba5e > 0 && parseInt(_0xbbb47b) === 0) {
							var _0x4a42e4 = parseInt(_0x57d542(_0x49fe25));
							if (_0x4a42e4 >= 0 && _0x25ba5e > _0x4a42e4) {
								return;
							}
							_0x49fe25.ignoreSeek = false;
							_0x49fe25.switchStatus = true;
							_0x49fe25.currentTime(_0x25ba5e);
							_0x408d6b(_0x25ba5e, _0x49fe25, '已跳过片头');
						}
					}
				} catch (_0x104154) {
					console.log(_0x104154);
				}
				try {
					var _0x536c47 = 0;
					if (!_0x49fe25.paused() && typeof _0x49fe25.eventPoints != 'undefined') {
						var _0xbbb47b = _0x49fe25.currentTime();
						_0x49fe25.eventPoints.forEach(function (_0x24c555) {
							_0x24c555.text == '片尾' && (_0x536c47 = _0x24c555.time);
						});
						if (_0x551b5f.headOffset > _0x536c47) {
							return;
						}
						var _0x3ef237 = parseInt(_0xbbb47b);
						if (_0x536c47 > 0 && _0x3ef237 === _0x536c47) {
							var _0x587c9d = parseInt(_0x25ecdf(_0x49fe25));
							if (_0x587c9d >= 0 && _0x536c47 < _0x587c9d) {
								return;
							}
							_0x49fe25.ignoreSeek = false;
							_0x49fe25.switchStatus = true;
							_0x49fe25.currentTime(_0x551b5f.duration);
							_0x408d6b(_0x3ef237, _0x49fe25, '已跳过片尾');
						}
					}
				} catch (_0x488589) {
					console.log(_0x488589);
				}
			};
			_0x41d85c.on('play', function () {
				try {
					top.configFullScreen && reSizeVideoWindow();
				} catch (_0x9e3eb2) {
					console.log(_0x9e3eb2);
				}
				_0x28ca6b.firstPlay && (typeof aplus_queue != 'undefined' && aplus_queue.push({
					'action': 'aplus.record',
					'arguments': [
						'video_positive_pybk',
						'OTHER',
						{
							'video_name': _0x28ca6b.aplusVideoName,
							'video_id': _0x28ca6b.aplusVideoId,
							'resource_id': _0x28ca6b.aplusResourseId,
							'resource_name': _0x28ca6b.aplusResourceName,
							'request_id': _0x28ca6b.getNewGuid()
						}
					]
				}));
				try {
					if (typeof top.hasJobLimit != 'undefined' && top.hasJobLimit === true && _0x28ca6b.firstClick && isUnFinishJob()) {
						_0x28ca6b.firstClick = false;
						_0x41d85c.pause();
						checkJobCountLimit(_0x41d85c, 0);
						return;
					}
					if (typeof top.videoTimeLimit != 'undefined' && top.videoTimeLimit === true && _0x28ca6b.firstClick && isUnFinishJob()) {
						_0x28ca6b.firstClick = false;
						_0x41d85c.pause();
						checkJobCountLimit(_0x41d85c, 1);
						return;
					}
				} catch (_0x4850e3) {
					console.log(_0x4850e3);
				}
				_0x28ca6b.isAlertTip = false;
				!_0x41d85c.ignorePlay && !_0x28ca6b.firstPlay && (typeof aplus_queue != 'undefined' && aplus_queue.push({
					'action': 'aplus.record',
					'arguments': [
						'continue_pybk_click',
						'CLK',
						{
							'video_name': _0x28ca6b.aplusVideoName,
							'video_id': _0x28ca6b.aplusVideoId,
							'resource_id': _0x28ca6b.aplusResourseId,
							'resource_name': _0x28ca6b.aplusResourceName
						}
					]
				}));
				if (_0x28ca6b.chapterCapture == 0 || !_0x28ca6b.isSupportFace || !_0x28ca6b.isShowFaceCollection) {
					!_0x41d85c.ignorePlay ? (_0x246807('play', true), _0x41d85c.ignoreSeek = true) : (_0x41d85c.ignorePlay = false, _0x41d85c.ignoreSeek = false);
					_0x28ca6b.sendDataLog('play');
					_0x28ca6b.receiveStudyLog();
					_0x28ca6b.getDanmuList('play', _0x41d85c);
					_0x28ca6b.firstPlay = false;
					_0x28ca6b.pausePlayFace = true;
				} else {
					if (_0x28ca6b.chapterCapture == 1) {
						if (_0x28ca6b.firstPlay) {
							var _0x1d1f93 = _0x28ca6b.sec_(_0x41d85c);
							if (_0x1d1f93 == 0 && (_0x28ca6b.startCapture == 1 || typeof _0x28ca6b.startCapture == 'undefined') && _0x28ca6b.firstPlayFace) {
								_0x28ca6b.playingFaceTime = _0x1d1f93;
								_0x28ca6b.playingFace = false;
								_0x28ca6b.faceCollection('play', _0x41d85c, _0x28ca6b.chapterCollectionType, 0);
								return;
							}
							!_0x41d85c.ignorePlay ? (_0x246807('play', true), _0x41d85c.ignoreSeek = true) : (_0x41d85c.ignorePlay = false, _0x41d85c.ignoreSeek = false);
							_0x28ca6b.sendDataLog('play');
							_0x28ca6b.receiveStudyLog();
							_0x28ca6b.getDanmuList('play', _0x41d85c);
							_0x28ca6b.firstPlay = false;
							_0x28ca6b.pausePlayFace = true;
						} else {
							if (_0x28ca6b.playAginCapture == 1 && !_0x41d85c.ignorePlay && _0x28ca6b.pausePlayFace) {
								_0x28ca6b.playingFaceTime = _0x28ca6b.sec_(_0x41d85c);
								_0x28ca6b.playingFace = false;
								_0x28ca6b.faceCollection('aginPlay', _0x41d85c, _0x28ca6b.chapterCollectionType, -2);
								return;
							}
							_0x28ca6b.pausePlayFace = true;
						}
					}
				}
				typeof aplus_queue != 'undefined' && (_0x4b849e = setInterval(_0x2883d3, 20000));
			});
			_0x41d85c.on('seeked', function () {
				if (_0x2bf865.enableFastForward != 1 && !_0x41d85c.switchStatus && !_0x41d85c.finished) {
					var _0xc15330 = _0x41d85c.currentTime(), _0x193f88 = _0x2bf865.headOffset ? _0x2bf865.headOffset : 0;
					_0xc15330 != 0 && _0xc15330 > _0x193f88 && _0x41d85c.currentTime(_0x193f88);
				}
				!_0x41d85c.ignoreSeek ? (_0x246807('drag', true, _0x1fe64b + '-' + _0x28ca6b.sec_(_0x41d85c)), typeof aplus_queue != 'undefined' && aplus_queue.push({
					'action': 'aplus.record',
					'arguments': [
						'time_shift_click',
						'OTHER',
						{
							'video_name': _0x28ca6b.aplusVideoName,
							'video_id': _0x28ca6b.aplusVideoId,
							'resource_id': _0x28ca6b.aplusResourseId,
							'resource_name': _0x28ca6b.aplusResourceName,
							'time_shift_time': _0x1fe64b + '',
							'time_shift_duration': Math.abs(parseInt(_0x28ca6b.sec_(_0x41d85c)) - parseInt(_0x1fe64b))
						}
					]
				}), typeof aplus_queue != 'undefined' && aplus_queue.push({
					'action': 'aplus.record',
					'arguments': [
						'video_progress_drag',
						'OTHER',
						{
							'video_name': _0x28ca6b.aplusVideoName,
							'video_id': _0x28ca6b.aplusVideoId,
							'resource_id': _0x28ca6b.aplusResourseId,
							'resource_name': _0x28ca6b.aplusResourceName
						}
					]
				})) : _0x41d85c.ignoreSeek = false;
				_0x1fe64b = _0x28ca6b.sec_(_0x41d85c);
				_0x41d85c.ignorePlay = true;
				delete _0x41d85c.switchStatus;
			});
			_0x41d85c.on('pause', function () {
				!_0x41d85c.ignorePause ? (_0x246807('pause', true), _0x41d85c.ignorePlay = false, _0x41d85c.ignoreSeek = false, typeof aplus_queue != 'undefined' && aplus_queue.push({
					'action': 'aplus.record',
					'arguments': [
						'video_pause_click',
						'CLK',
						{
							'video_name': _0x28ca6b.aplusVideoName,
							'video_id': _0x28ca6b.aplusVideoId,
							'resource_id': _0x28ca6b.aplusResourseId,
							'resource_name': _0x28ca6b.aplusResourceName
						}
					]
				})) : _0x41d85c.ignorePause = false;
				_0x28ca6b.sendDataLog('pause');
				_0x28ca6b.getDanmuList('pause', _0x41d85c);
				_0x4b849e && clearInterval(_0x4b849e);
			});
			_0x41d85c.on('timeupdate', function () {
				var _0x27ab51 = _0x28ca6b.sec_(_0x41d85c);
				_0x28ca6b.isSupportFace && _0x28ca6b.isShowFaceCollection && _0x28ca6b.chapterCapture == 1 && _0x28ca6b.playingCapture == 1 && _0x28ca6b.playingFace && (_0x28ca6b.playingFace = false, _0x28ca6b.playingLoopCapture == 1 ? _0x27ab51 == _0x28ca6b.loopCaptureInterval && _0x28ca6b.faceCollection('playing', _0x41d85c, _0x28ca6b.chapterCollectionType, -1) : _0x27ab51 >= _0x28ca6b.captureInterval && _0x27ab51 % _0x28ca6b.captureInterval == 0 && _0x28ca6b.faceCollection('playing', _0x41d85c, _0x28ca6b.chapterCollectionType, _0x27ab51));
				!_0x28ca6b.playingFace && _0x27ab51 - _0x28ca6b.playingFaceTime > 2 && (_0x28ca6b.playingFace = true);
				if (typeof parent.videoTrialDuration != 'undefined' && parent.videoTrialDuration != '-1') {
					var _0x49ca7e = parseInt(parent.videoTrialDuration) * 60;
					if (_0x49ca7e < _0x28ca6b.sec_(_0x41d85c) && !_0x28ca6b.isAlertTip) {
						_0x41d85c.pause();
						alert('视频只允许试看' + parent.videoTrialDuration + '分钟');
						_0x28ca6b.isAlertTip = true;
						return;
					}
				}
				parseInt(_0x41d85c.currentTime()) >= this.damuLastGetTime && _0x28ca6b.getDanmuList('timeupdate', _0x41d85c);
				_0x28ca6b.danmuDisplay(_0x41d85c);
				if (_0x884521 == 0) {
					_0x2f554b(_0x41d85c, _0x2bf865);
					return;
				}
				_0x28ca6b.sec_(_0x41d85c) - _0x1fe64b <= 1 && !_0x41d85c.ignorePlay && (_0x1fe64b = _0x28ca6b.sec_(_0x41d85c));
				_0x246807('playing');
				_0x2f554b(_0x41d85c, _0x2bf865);
			});
			_0x41d85c.on('ended', function () {
				_0x28ca6b.isShowFaceCollection && _0x28ca6b.chapterCapture == 1 && _0x28ca6b.endCapture == 1 && _0x28ca6b.faceCollection('ended', _0x41d85c, _0x28ca6b.chapterCollectionType, _0x28ca6b.duration);
				_0x246807('ended', true);
				typeof aplus_queue != 'undefined' && aplus_queue.push({
					'action': 'aplus.record',
					'arguments': [
						'video_end_click',
						'CLK',
						{
							'video_name': _0x28ca6b.aplusVideoName,
							'video_id': _0x28ca6b.aplusVideoId,
							'resource_id': _0x28ca6b.aplusResourseId,
							'resource_name': _0x28ca6b.aplusResourceName,
							'request_id': _0x28ca6b.getNewGuid(),
							'pybk_duration': _0x28ca6b.duration,
							'full_play_count': 1
						}
					]
				});
				_0x4b849e && clearInterval(_0x4b849e);
			});
		},
		'sec_': function (_0x24776e) {
			return parseInt(_0x24776e.currentTime());
		},
		'now_': function () {
			return new Date().getTime();
		},
		'isSendLog': function (_0x3d805a) {
			return _0x3d805a && (this.isSendLog_ = !!_0x3d805a), this.isSendLog_;
		},
		'sendDataLog': function (_0x172c0e) {
			var _0x1fbf65 = _0x172c0e == 'pause' || _0x172c0e == 'end' ? 2 : 1;
			typeof sendReadZTMediaLog != 'undefined' && sendReadZTMediaLog(_0x1fbf65);
		},
		'receiveStudyLog': function () {
			typeof receiveStudyLog != 'undefined' && setTimeout(function () {
				receiveStudyLog();
			}, 50);
		},
		'getDanmuList': function (_0x2a99a6, _0x4b51e7) {
			if (!this.isShowDanmu_) {
				return;
			}
			var _0xb6bbf3 = this.sec_(_0x4b51e7);
			if (_0x2a99a6 == 'pause') {
				this.damuLastGetTime = 0;
				setTimeout(function () {
					getDanmuByTime(_0x2a99a6, 0);
				}, 200);
				return;
			}
			typeof getDanmuByTime != 'undefined' && setTimeout(function () {
				getDanmuByTime(_0x2a99a6, _0xb6bbf3);
			}, 200);
			if (_0xb6bbf3 < this.damuLastGetTime) {
				return;
			}
			this.damuLastGetTime = _0xb6bbf3 + 59;
		},
		'danmuDisplay': function (_0x4b241d) {
			if (!this.isShowDanmu_) {
				return;
			}
			var _0x3574b1 = this.sec_(_0x4b241d);
			typeof danmuPlay != 'undefined' && danmuPlay(_0x3574b1);
		},
		'timer': function (_0x399715) {
		},
		'faceCollection': function (_0x1a94fd, _0x3b01ef, _0x43b9e1, _0x3e26a1) {
			if (_0x3e26a1 != -2) {
				var _0x511c61 = this.jumpTimePointList;
				if (typeof _0x511c61 != 'undefined') {
					try {
						if (_0x511c61.includes(_0x3e26a1)) {
							this.firstPlayFace = false;
							this.pausePlayFace = false;
							this.playingFace = false;
							return;
						}
					} catch (_0x8cc140) {
					}
				}
			}
			_0x1a94fd == 'play' ? typeof startFaceCollection != 'undefined' && (_0x3b01ef.pause(), startFaceCollection(_0x3b01ef, _0x43b9e1, this, _0x3e26a1)) : _0x1a94fd == 'ended' ? typeof startFaceCollection != 'undefined' && (_0x3b01ef.pause(), startFaceCollection(_0x3b01ef, _0x43b9e1, this, _0x3e26a1)) : _0x1a94fd == 'playing' ? (typeof startFaceCollection != 'undefined' && (_0x3b01ef.pause(), this.playingFaceTime = this.sec_(_0x3b01ef), startFaceCollection(_0x3b01ef, _0x43b9e1, this, _0x3e26a1), this.playingFace = false), this.pausePlayFace = false) : _0x1a94fd == 'aginPlay' && (typeof startFaceCollection != 'undefined' && (_0x3b01ef.pause(), startFaceCollection(_0x3b01ef, _0x43b9e1, this, _0x3e26a1)), this.pausePlayFace = false);
		},
		'playNextVideo': function (_0x1eb8d5) {
			if (typeof chapterPlayNextVideo != 'undefined') {
				if (typeof top.allowNextVideo != 'undefined' && top.allowNextVideo === false) {
					top.hasJobLimit === true ? top.showJobLimitTip() : top.showVideoTimeLimitTip();
					return;
				}
				chapterPlayNextVideo(_0x1eb8d5);
			}
		},
		'getNewGuid': function () {
			var _0x34a07c = '';
			for (var _0x5302d2 = 1; _0x5302d2 <= 32; _0x5302d2++) {
				var _0x11a3c3 = Math.floor(Math.random() * 16).toString(16);
				_0x34a07c += _0x11a3c3;
				(_0x5302d2 == 8 || _0x5302d2 == 12 || _0x5302d2 == 16 || _0x5302d2 == 20) && (_0x34a07c += '-');
			}
			return _0x34a07c;
		}
	});
	videojs.registerPlugin('seekBarControl', _0x1ab48d);
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
			'getChecked': function (_0x1cca79, _0x4e173a, _0x5ba55a) {
				try {
					if (typeof _0x1cca79 != 'undefined') {
						return _0x1cca79.indexOf(_0x4e173a) != -1 && _0x5ba55a == 'InteractiveQuiz' ? 'checked="checked"' : '';
					}
					return '';
				} catch (_0x1b4385) {
					console.log(_0x1b4385);
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
		var _0x40895a = this, _0x3ce6fe = _0x40895a.renderData, _0x15058b = _0x40895a.quizRightCountUrl;
		typeof _0x15058b != 'undefined' && Ext.Ajax.request({
			'url': _0x15058b,
			'params': {
				'eventid': _0x3ce6fe.resourceId,
				'memberinfo': _0x3ce6fe.memberinfo
			},
			'method': 'get',
			'success': function (_0x51bf46) {
				var _0x4cba96 = Ext.decode(_0x51bf46.responseText);
				_0x4cba96.status && (Ext.get('rightNum').setHTML(_0x4cba96.rightAnswerCount), Ext.get('rightAnswerNum').setStyle('display', 'inline-block'));
			}
		});
		_0x40895a.callParent(arguments);
		var _0x21c7f4 = _0x40895a.scrollEl, _0x5ac759 = $(_0x21c7f4.dom).niceScroll({
			'cursorborder': '',
			'cursorwidth': 6,
			'cursorcolor': '#A5A5A5',
			'boxzoom': false,
			'autohidemode': false
		});
		_0x40895a.scroller = _0x5ac759;
		_0x40895a.submitEl.on('click', function () {
			_0x40895a.checkResult();
		});
		_0x40895a.continueEl.on('click', function () {
			try {
				top.configFullScreen && exitMediumSizeWindow();
			} catch (_0x403056) {
				console.log(_0x403056);
			}
			_0x40895a.fireEvent('continue');
		});
		_0x40895a.backEl && _0x40895a.backEl.on('click', function () {
			_0x40895a.onerror && _0x40895a.onerror();
			_0x40895a.fireEvent('continue');
		});
		_0x40895a.viewAnalysisEl && _0x40895a.viewAnalysisEl.on('click', function () {
			Ext.get('tkParsing').setStyle('display', 'inline-block');
		});
		_0x40895a.delAnalysisEl && _0x40895a.delAnalysisEl.on('click', function () {
			Ext.get('tkParsing').setStyle('display', 'none');
		});
	},
	'checkResult': function () {
		var _0x197f2e = this, _0x18766e = Ext.query('input', _0x197f2e.el.dom), _0xbeff42 = true, _0x4abb11 = _0x197f2e.renderData, _0x187c1d = _0x4abb11.options, _0x5e53b8 = [], _0x3d7449 = _0x197f2e.quizErrorReportUrl, _0x327571 = _0x197f2e.validationUrl2, _0x12f3fc = _0x4abb11.dtype;
		if (Ext.get('videoquiz-continue').getStyle('display') == 'none' && window.parent.parent.location.href.indexOf('nodedetailcontroller/visitnodedetail') > -1) {
			try {
				top.configFullScreen && exitMediumSizeWindow();
			} catch (_0x26042c) {
				console.log(_0x26042c);
			}
			_0x197f2e.fireEvent('continue');
			return;
		}
		Ext.each(_0x18766e, function (_0x1e47e5, _0x20d43a) {
			_0x1e47e5.checked && _0x5e53b8.push(_0x187c1d[_0x20d43a].name);
		});
		Ext.get('videoquiz-submit').setStyle('display', 'none');
		Ext.get('videoquiz-submitting').setStyle('display', 'block');
		if (typeof _0x327571 != 'undefined') {
			var _0x1f7542 = _0x5e53b8.join(',');
			Ext.Ajax.request({
				'url': _0x327571,
				'params': {
					'eventid': _0x4abb11.resourceId,
					'memberinfo': _0x4abb11.memberinfo,
					'answerContent': _0x1f7542
				},
				'method': 'get',
				'success': function (_0x1e9201) {
					Ext.get('videoquiz-submit').setStyle('display', 'block');
					Ext.get('videoquiz-submitting').setStyle('display', 'none');
					_0x4abb11.answerContent = _0x1f7542;
					var _0xbfde83 = Ext.decode(_0x1e9201.responseText), _0x3672e4 = typeof _0xbfde83.isRight === 'undefined' ? false : _0xbfde83.isRight;
					!_0x3672e4 ? _0x4abb11.errorBackTime && _0x4abb11.errorBackTime > 0 ? (Ext.get('spanNotBack').setStyle('display', 'block'), Ext.get('videoquiz-submit').setStyle('display', 'none'), _0x12f3fc == 'InteractiveQuiz' ? Ext.get('knowledgeBack').setStyle('display', 'block') : Ext.get('videoquiz-continue').setStyle('display', 'block')) : _0x12f3fc == 'InteractiveQuiz' && _0x4abb11.errorBack == 1 && _0x4abb11.eBstartPoint != '' ? (Ext.get('spanNotBackPoint').setStyle('display', 'block'), Ext.get('knowledgeBack').setStyle('display', 'block')) : Ext.get('spanNot').setStyle('display', 'block') : (Ext.get('spanHas').setStyle('display', 'block'), _0x12f3fc == 'InteractiveQuiz' && (Ext.get('videoquiz-continue').setStyle('display', 'block'), Ext.get('knowledgeBack').setStyle('display', 'none'), Ext.get('videoquiz-submit').setStyle('display', 'none'), Ext.get('spanNot').setStyle('display', 'none'), Ext.get('spanNotBack').setStyle('display', 'none'), Ext.get('spanNotBackPoint').setStyle('display', 'none')));
					if (_0xbfde83.status) {
						if (_0x12f3fc == 'InteractiveQuiz') {
							_0xbfde83.rightAnswerCount && (Ext.get('rightNum').setHTML(_0xbfde83.rightAnswerCount), Ext.get('rightAnswerNum').setStyle('display', 'inline-block'));
							var _0x296b5a = '', _0x32c238 = false;
							_0xbfde83.testAnalysis ? _0xbfde83.showAnswer && _0xbfde83.showAnswer > 0 ? (_0x296b5a += '正确答案\uFF1A' + _0xbfde83.rightContent, _0x296b5a += '</br>解析\uFF1A' + _0xbfde83.testAnalysis, Ext.get('viewAnalysis').setStyle('display', 'block'), _0x32c238 = true) : _0xbfde83.isRight && (_0x296b5a += '解析\uFF1A' + _0xbfde83.testAnalysis, Ext.get('viewAnalysis').setStyle('display', 'block'), _0x32c238 = true) : _0xbfde83.showAnswer && _0xbfde83.showAnswer > 0 ? (Ext.get('tkParsingDele').setStyle('display', 'none'), Ext.get('viewAnalysis').setStyle('display', 'none'), _0x296b5a += '正确答案\uFF1A' + _0xbfde83.rightContent, _0x32c238 = true) : Ext.get('viewAnalysis').setStyle('display', 'none');
							if (_0x32c238) {
								Ext.get('tkParsing_con').setHTML(_0x296b5a);
								Ext.get('tkParsing').setStyle('display', 'inline-block');
								var _0x4968c2 = _0x197f2e.tkParseScrollEl, _0x35583f = $(_0x4968c2.dom).niceScroll({
									'cursorborder': '',
									'cursorwidth': 6,
									'cursorcolor': '#A5A5A5',
									'boxzoom': false,
									'autohidemode': true
								});
								_0x197f2e.tkParseScroll = _0x35583f;
							}
						}
						if (_0xbfde83.isRight && _0x12f3fc == 'InteractiveQuiz') {
							if (typeof _0xbfde83.showTip != 'undefined' && _0xbfde83.showTip) {
								var _0x4e4388 = _0xbfde83.percent;
								try {
									var _0x5aa104 = Ext.getCookie('fid', 0);
									_0x4e4388 = parseInt(_0x4e4388);
									_0x5aa104 == '179952' && _0x4e4388 > 0 && (_0x4e4388 = 90 + _0x4e4388 * 0.1);
								} catch (_0x1c3dc8) {
									console.log(_0x1c3dc8);
								}
								Ext.get('spanHas').setHTML('<span class="spanHas fr" style=\'display:block\'><span id="InteractiveQuizTip">恭喜你\uFF0C答对了\uFF01你的答题水准超过了' + _0x4e4388 + '%的同学</span></span>');
							} else {
								Ext.get('spanHas').setHTML('<span class="spanHas fr" style=\'display:block\'><span id="InteractiveQuizTip">恭喜你\uFF0C答对了\uFF01</span></span>');
							}
						}
					}
					!_0x3672e4 && _0x197f2e.onerror && _0x12f3fc != 'InteractiveQuiz' && _0x197f2e.onerror();
					!_0x3672e4 && _0x4abb11.errorContinue == 1 && (_0xbeff42 = true, Ext.get('videoquiz-submit').setStyle('display', 'none'), Ext.get('videoquiz-continue').setStyle('display', 'block'));
					if (_0x3672e4 && Ext.get('videoquiz-continue').getStyle('display') == 'none') {
						try {
							top.configFullScreen && exitMediumSizeWindow();
						} catch (_0x256292) {
							console.log(_0x256292);
						}
						_0x197f2e.fireEvent('continue');
					}
				},
				'error': function () {
					Ext.get('videoquiz-submit').setStyle('display', 'block');
					Ext.get('videoquiz-submitting').setStyle('display', 'none');
					_0x197f2e.onerror && _0x12f3fc != 'InteractiveQuiz' && _0x197f2e.onerror();
				}
			});
		}
		return _0xbeff42;
	},
	'continueFun': function () {
		var _0x5bc9b9 = this;
		_0x5bc9b9.fireEvent('continue');
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
		var _0x28fd05 = this;
		_0x28fd05.callParent(arguments);
		try {
			var _0x1311cc = document.querySelector('.sp_video_img');
			_0x1311cc.addEventListener('load', function () {
				_0x1311cc.naturalWidth >= _0x1311cc.naturalHeight ? _0x1311cc.naturalWidth >= 400 && (_0x1311cc.style.width = '90%', _0x1311cc.style.height = 'auto') : _0x1311cc.naturalHeight >= 400 && (_0x1311cc.style.height = '90%', _0x1311cc.style.width = 'auto');
			});
		} catch (_0x1438c9) {
			console.log(_0x1438c9);
		}
		_0x28fd05.el.on('click', function () {
			_0x28fd05.fireEvent('continue');
		});
		_0x28fd05.closeEl.on('click', function () {
			try {
				top.configFullScreen && exitMediumSizeWindow();
			} catch (_0x3645c8) {
				console.log(_0x3645c8);
			}
			_0x28fd05.fireEvent('continue');
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
		var _0x546b8c = this, _0x3ccc37 = _0x546b8c.commentOpenEl, _0x1431a0 = _0x546b8c.boxEl;
		_0x546b8c.callParent(arguments);
		var _0x319337 = $('#video_html5_api').height();
		_0x1431a0.setStyle('height', _0x319337 + 'px');
		_0x3ccc37.on('click', function () {
			_0x3ccc37.setStyle('display', 'none');
			_0x1431a0.setStyle('display', 'block');
			$('.comment_con').getNiceScroll().resize();
		});
		_0x546b8c.stowEl.on('click', function () {
			_0x1431a0.setStyle('display', 'none');
			_0x3ccc37.setStyle('display', 'block');
		});
		_0x546b8c.continueEl.on('click', function () {
			_0x546b8c.fireEvent('continue');
		});
		var _0x10739b = $('.comment_con').niceScroll({
			'cursorborder': '',
			'cursorwidth': '8px',
			'cursorcolor': '#ACB4BF',
			'boxzoom': false,
			'autohidemode': true
		});
		_0x546b8c.scroller = _0x10739b;
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
		var _0x5d8ce4 = this;
		_0x5d8ce4.callParent(arguments);
		try {
			dragFn && dragFn('#sp_video_ppt_pic', '#video_html5_api');
		} catch (_0x25061c) {
			console.log(_0x25061c);
		}
		function _0x407521() {
			Ext.get('sp_size_big').setStyle('display', 'none');
			Ext.get('sp_size_small').setStyle('display', 'block');
			var _0xca0255 = Ext.get('video').getStyle('height'), _0x40fad5 = Ext.get('sp_video_ppt_pic').getStyle('height'), _0x4a89f5 = (parseInt(_0xca0255) - 60 - parseInt(_0x40fad5)) / 2;
			Ext.get('sp_video_ppt_pic').setStyle('top', _0x4a89f5 + 'px');
			Ext.get('sp_video_ppt_pic').setStyle('left', '0');
		}
		function _0x379eaa() {
			Ext.get('sp_size_big').setStyle('display', 'block');
			Ext.get('sp_size_small').setStyle('display', 'none');
			Ext.get('sp_video_ppt_pic').setStyle('top', '0px');
			Ext.get('sp_video_ppt_pic').setStyle('left', '0px');
		}
		_0x5d8ce4.sizeBigEl.on('click', function (_0x4ede8a) {
			_0x4ede8a.stopPropagation();
			_0x5d8ce4.pptPicEl.toggleCls('sp_ppt_pic_fullScreen');
			_0x407521();
		});
		_0x5d8ce4.sizeSmallEl.on('click', function (_0x38340f) {
			_0x38340f.stopPropagation();
			_0x5d8ce4.pptPicEl.toggleCls('sp_ppt_pic_fullScreen');
			_0x379eaa();
		});
		_0x5d8ce4.sizeBigEl.on('touchend', function (_0x43be96) {
			_0x43be96.stopPropagation();
			_0x5d8ce4.pptPicEl.toggleCls('sp_ppt_pic_fullScreen');
			_0x407521();
		});
		_0x5d8ce4.sizeSmallEl.on('touchend', function (_0x2522f6) {
			_0x2522f6.stopPropagation();
			_0x5d8ce4.pptPicEl.toggleCls('sp_ppt_pic_fullScreen');
			_0x379eaa();
		});
	}
});
Ext.define('ans.videojs.TimelineObjects', {
	'extend': 'Ext.container.Container',
	'cls': 'ans-timelineobjects',
	'autoScroll': true,
	'hidden': true,
	'hideMode': 'visibility',
	'constructor': function (_0x4eb92f) {
		var _0x1b0860 = this;
		_0x1b0860.callParent(arguments);
		_0x1b0860.bg = Ext.create('ans.videojs.TimelineObjectsBg', { 'renderTo': _0x4eb92f.renderTo });
		_0x1b0860.objects = _0x4eb92f.objects && _0x4eb92f.objects.sort ? _0x1b0860.sort_(_0x4eb92f.objects) : [];
		_0x1b0860.current = 0;
		_0x1b0860.showAnnotation = false;
	},
	'hideTimeline': function () {
		var _0x317871 = this;
		_0x317871.showAnnotation && (_0x317871.hide(), _0x317871.showAnnotation = false);
	},
	'showObject': function (_0x2d0902, _0x33517e, _0x202431) {
		var _0x3150f6 = this, _0x4ca965 = _0x3150f6.getBox(), _0x15cd41 = _0x3150f6.items.getAt(0), _0x208e13, _0x5c3e32 = function () {
			_0x208e13.destroy();
			_0x3150f6.hide();
			_0x2d0902.play();
			try {
				_0x2d0902.eventCount && (_0x2d0902.eventCount = _0x2d0902.eventCount - 1);
			} catch (_0x50dd40) {
				console.log(_0x50dd40);
			}
		};
		_0x15cd41 != null && _0x15cd41.destroy();
		if (_0x202431) {
			_0x202431.description && (_0x202431.description = _0x3150f6.htmlEncodeByRegExp(_0x202431.description));
			if (_0x202431.options && _0x202431.options.length > 0) {
				for (let _0x5b3c52 = 0; _0x5b3c52 < _0x202431.options.length; _0x5b3c52++) {
					_0x202431.options[_0x5b3c52].description && (_0x202431.options[_0x5b3c52].description = _0x3150f6.htmlEncodeByRegExp(_0x202431.options[_0x5b3c52].description));
				}
			}
		}
		if (_0x33517e == 'IMG') {
			var _0x31e381 = { 'src': _0x202431.url.replace(/origin/, _0x4ca965.width + '_' + _0x4ca965.height) };
			_0x208e13 = _0x3150f6.add({
				'xtype': 'videoimg',
				'renderData': _0x31e381
			});
			try {
				_0x2d0902.eventCount && (_0x2d0902.eventCount += 1);
			} catch (_0x5ea7e1) {
				console.log(_0x5ea7e1);
			}
		}
		if (_0x33517e == 'QUIZ') {
			var _0x5276f8 = function () {
			};
			if (_0x202431.errorBackTime && _0x202431.errorBackTime > 0) {
				var _0x4671a7 = _0x202431.errorBackTime * 60;
				_0x5276f8 = function () {
					var _0x6ff59a = Math.max(_0x2d0902.currentTime() - _0x4671a7, 0);
					_0x2d0902.switchStatus = true;
					_0x2d0902.currentTime(_0x6ff59a);
				};
			}
			_0x208e13 = _0x3150f6.add({
				'xtype': 'videoquiz',
				'renderData': _0x202431,
				'quizErrorReportUrl': _0x3150f6.quizErrorReportUrl,
				'validationUrl2': _0x3150f6.validationUrl2,
				'onerror': _0x5276f8
			});
			try {
				_0x2d0902.eventCount && (_0x2d0902.eventCount += 1);
			} catch (_0x310955) {
				console.log(_0x310955);
			}
		}
		if (_0x33517e == 'InteractiveQuiz') {
			var _0x5276f8 = function () {
			};
			if (_0x202431.errorBackTime && _0x202431.errorBackTime > 0) {
				var _0x4671a7 = _0x202431.errorBackTime * 60;
				_0x5276f8 = function () {
					var _0x1064dd = Math.max(_0x2d0902.currentTime() - _0x4671a7, 0);
					_0x2d0902.switchStatus = true;
					_0x2d0902.currentTime(_0x1064dd);
				};
			}
			if (_0x202431.errorBack == 1 && _0x202431.eBstartPoint != '') {
				var _0x4671a7 = 0, _0xf4527c = _0x202431.eBstartPoint.split(':'), _0x17b7a9 = _0xf4527c.length;
				_0x17b7a9 > 0 && (_0x17b7a9 == 1 ? _0x4671a7 = parseInt(_0xf4527c[0]) * 60 : _0x17b7a9 == 2 && (_0x4671a7 = parseInt(_0xf4527c[0]) * 60 + parseInt(_0xf4527c[1])));
				_0x5276f8 = function () {
					_0x2d0902.switchStatus = true;
					_0x2d0902.currentTime(_0x4671a7);
				};
			}
			_0x202431.dtype = 'InteractiveQuiz';
			_0x208e13 = _0x3150f6.add({
				'xtype': 'videoquiz',
				'renderData': _0x202431,
				'quizErrorReportUrl': _0x3150f6.quizErrorReportUrl,
				'validationUrl2': _0x3150f6.validationUrl2,
				'quizRightCountUrl': _0x3150f6.quizRightCountUrl,
				'onerror': _0x5276f8
			});
			try {
				_0x2d0902.eventCount && (_0x2d0902.eventCount += 1);
			} catch (_0x4dfd80) {
				console.log(_0x4dfd80);
			}
		}
		if (_0x33517e == 'PPT') {
			if (_0x202431.fp == 0) {
				return;
			}
			var _0x5f5aae = _0x202431.url;
			_0x202431.thumb ? _0x5f5aae = _0x202431.thumb + _0x202431.pageNo + '.png' : _0x5f5aae = _0x5f5aae.replace(/swfv2\/.*$/, 'thumb/' + _0x202431.fp + '.png');
			var _0x31e381 = { 'src': _0x5f5aae };
			_0x208e13 = _0x3150f6.add({
				'xtype': 'videoppt',
				'renderData': _0x31e381
			});
			try {
				_0x2d0902.eventCount && (_0x2d0902.eventCount += 1);
			} catch (_0x54ae84) {
				console.log(_0x54ae84);
			}
		}
		if (_0x33517e == 'SyncAnnotationEvent') {
			_0x208e13 = _0x3150f6.add({
				'xtype': 'videoannotation',
				'renderData': _0x202431
			});
			try {
				_0x2d0902.eventCount && (_0x2d0902.eventCount += 1);
			} catch (_0x6decf0) {
				console.log(_0x6decf0);
			}
			_0x2d0902.pause();
			_0x3150f6.showAnnotation = true;
		}
		if (!_0x208e13) {
			return;
		}
		_0x208e13.on('continue', function () {
			_0x5c3e32();
		});
		var _0x3affd4 = !(_0x208e13.model === false);
		_0x3150f6.showModel(_0x3affd4);
		_0x3affd4 && _0x2d0902.pause();
	},
	'htmlEncodeByRegExp': function (_0x511870) {
		var _0x301c84 = '';
		if (_0x511870.length == 0) {
			return '';
		}
		return _0x301c84 = _0x511870.replace(/&/g, '&amp;'), _0x301c84 = _0x301c84.replace(/</g, '&lt;'), _0x301c84 = _0x301c84.replace(/>/g, '&gt;'), _0x301c84 = _0x301c84.replace(/\s/g, '&nbsp;'), _0x301c84 = _0x301c84.replace(/\'/g, '&#39;'), _0x301c84 = _0x301c84.replace(/\"/g, '&quot;'), _0x301c84;
	},
	'showModel': function (_0x3da5bf) {
		try {
			top.configFullScreen && mediumSizeWindow();
		} catch (_0x58fec) {
			console.log(_0x58fec);
		}
		var _0xca4532 = this;
		_0xca4532.show();
		_0x3da5bf ? (_0xca4532.removeCls('ans-timelineobjects-autosize'), _0xca4532.setAutoScroll(true), _0xca4532.bg.show()) : (_0xca4532.addCls('ans-timelineobjects-autosize'), _0xca4532.setAutoScroll(false));
	},
	'hide': function () {
		this.callParent(arguments);
		this.bg.hide.apply(this.bg, arguments);
	},
	'updateTime': function (_0x2dc14f, _0x521420) {
		if (this.current >= this.objects.length || _0x2dc14f.scrubbing()) {
			return;
		}
		var _0x15553d = this, _0xadda6c = _0x15553d.objects[_0x15553d.current], _0x4e96ba = _0xadda6c.style, _0x477c2c = _0xadda6c.datas[0];
		if (_0x521420 >= _0x477c2c.startTime) {
			_0x15553d.current++;
			setTimeout(function () {
				_0x15553d.showObject(_0x2dc14f, _0x4e96ba, _0x477c2c);
			}, 20);
		}
	},
	'resetTime': function (_0x14eed5, _0x811cf5) {
		var _0x424610 = this, _0x1fbb7a;
		for (_0x1fbb7a = 0; _0x1fbb7a < _0x424610.objects.length; _0x1fbb7a++) {
			var _0x75c655 = _0x424610.objects[_0x1fbb7a].datas[0].startTime;
			if (_0x811cf5 <= _0x75c655) {
				break;
			}
		}
		_0x424610.current = _0x1fbb7a;
	},
	'sort_': function (_0xc55f76) {
		return _0xc55f76 && _0xc55f76.sort && _0xc55f76.sort(function (_0xb926ef, _0x566fed) {
			var _0x472373 = _0xb926ef.datas[0].startTime, _0x28d2d6 = _0x566fed.datas[0].startTime;
			return _0x472373 - _0x28d2d6;
		});
	}
});
(function () {
	var _0x2855dd = videojs.getPlugin('plugin'), _0x25793b = videojs.extend(_0x2855dd, {
		'constructor': function (_0x20277d, _0x90a50a) {
			_0x2855dd.call(this, _0x20277d, _0x90a50a);
			if (!_0x90a50a.url) {
				return;
			}
			var _0x27d64e = function (_0x3334eb) {
				try {
					var _0x4b581c = _0x3334eb.datas;
					if (_0x4b581c && _0x4b581c.length > 0) {
						return _0x4b581c[0].startTime;
					}
				} catch (_0x53057b) {
					console.log(_0x53057b);
				}
				return -1;
			}, _0x597a86 = this;
			_0x20277d.eventPoints = [];
			_0x20277d.otherPointTimes = [];
			var _0x343d8d = [];
			if (_0x90a50a.begins && _0x90a50a.begins > 0) {
				var _0x215603 = {
					'time': _0x90a50a.begins,
					'text': '片头'
				};
				_0x343d8d.push(_0x215603);
			}
			if (_0x90a50a.ends && _0x90a50a.ends > 0) {
				var _0x215603 = {
					'time': _0x90a50a.ends,
					'text': '片尾'
				};
				_0x343d8d.push(_0x215603);
			}
			_0x20277d.eventPoints = _0x343d8d;
			Ext.Ajax.request({
				'url': _0x90a50a.url,
				'async': false,
				'success': function (_0x4530fe) {
					if (_0x4530fe.status != 200) {
						return;
					}
					eval('var data=' + _0x4530fe.responseText);
					if (data && data.length > 0) {
						var _0x548fc1 = [];
						for (var _0x56c62b = 0; _0x56c62b < data.length; _0x56c62b++) {
							var _0x4be556 = data[_0x56c62b];
							if (_0x4be556.style == 'InteractiveQuiz') {
								var _0x1a8c05 = _0x4be556.datas;
								if (_0x1a8c05 && _0x1a8c05.length > 0) {
									var _0x2509b4 = {
										'time': _0x1a8c05[0].startTime,
										'text': '互动测验'
									};
								}
								_0x548fc1.push(_0x2509b4);
							}
							var _0x3fb85b = _0x27d64e(_0x4be556);
							_0x3fb85b >= 0 && _0x20277d.otherPointTimes.push(_0x3fb85b);
						}
						_0x548fc1.forEach(function (_0x1eb1d3) {
							_0x20277d.eventPoints.push(_0x1eb1d3);
						});
					}
					var _0x2dddbf = Ext.create('ans.videojs.TimelineObjects', {
						'renderTo': _0x20277d.el_,
						'quizErrorReportUrl': _0x90a50a.quizErrorReportUrl,
						'validationUrl2': _0x90a50a.validationUrl2,
						'quizRightCountUrl': _0x90a50a.quizRightCountUrl,
						'objects': data
					});
					_0x20277d.on('play', function () {
						_0x2dddbf.resetTime(_0x20277d, _0x20277d.currentTime());
						_0x2dddbf.hideTimeline();
					});
					_0x20277d.on('seekend', function () {
						_0x2dddbf.resetTime(_0x20277d, _0x20277d.currentTime());
						_0x2dddbf.hideTimeline();
					});
					_0x20277d.on('timeupdate', function () {
						!_0x20277d.paused() && (_0x2dddbf.updateTime(_0x20277d, _0x20277d.currentTime()), _0x2dddbf.hideTimeline());
					});
				}
			});
		}
	});
	videojs.registerPlugin('timelineObjects', _0x25793b);
}());
Ext.define('ans.videojs.customIframe', {
	'extend': 'Ext.Component',
	'xtype': 'customIframe',
	'renderTpl': ['<iframe src="{src}" class="configIframe" style="height: 100%;width: 100%;left: 0;top: 0;right: 0;bottom: 0; background: rgba(0,0,0,.6);"></iframe>'],
	'afterRender': function () {
		var _0x48c564 = this;
		_0x48c564.callParent(arguments);
		window.addEventListener('message', function (_0x433f7d) {
			typeof _0x433f7d.data != 'undefined' && _0x433f7d.data.opType === 'closeIframe' && _0x48c564.fireEvent('continue');
		});
	}
});
Ext.define('ans.videojs.CustomIframe', {
	'extend': 'Ext.container.Container',
	'cls': 'ans-customIframe',
	'autoScroll': true,
	'hidden': true,
	'hideMode': 'visibility',
	'constructor': function (_0x1be0cc) {
		var _0x2da3bd = this;
		_0x2da3bd.callParent(arguments);
		_0x2da3bd.supportHeartbeat = false;
		_0x2da3bd.courseid = '';
		_0x2da3bd.clazzId = '';
		_0x2da3bd.knowledgeid = '';
		_0x2da3bd.objectid = '';
		_0x2da3bd.playTime = 0;
		_0x2da3bd.requesting = false;
		_0x2da3bd.eventArray = [];
		_0x2da3bd.userId = '';
		_0x2da3bd.cookieFid = '';
		_0x2da3bd.headOffset = '';
		typeof _0x1be0cc.userId != 'undefined' && (_0x2da3bd.userId = _0x1be0cc.userId);
		typeof _0x1be0cc.cookieFid != 'undefined' && (_0x2da3bd.cookieFid = _0x1be0cc.cookieFid);
		typeof _0x1be0cc.headOffset != 'undefined' && (_0x2da3bd.headOffset = _0x1be0cc.headOffset);
		typeof _0x1be0cc.eventArray != 'undefined' && (_0x2da3bd.eventArray = _0x1be0cc.eventArray);
		typeof _0x1be0cc.supportHeartbeat != 'undefined' && (_0x2da3bd.supportHeartbeat = _0x1be0cc.supportHeartbeat);
		typeof _0x1be0cc.courseid != 'undefined' && (_0x2da3bd.courseid = _0x1be0cc.courseid);
		typeof _0x1be0cc.clazzId != 'undefined' && (_0x2da3bd.clazzId = _0x1be0cc.clazzId);
		typeof _0x1be0cc.knowledgeid != 'undefined' && (_0x2da3bd.knowledgeid = _0x1be0cc.knowledgeid);
		typeof _0x1be0cc.objectid != 'undefined' && (_0x2da3bd.objectid = _0x1be0cc.objectid);
		_0x2da3bd.lastHeartbeat = 0;
		_0x2da3bd.lastShowIFrame = 0;
		_0x2da3bd.objects = _0x1be0cc.objects && _0x1be0cc.objects.sort ? _0x2da3bd.sort_(_0x1be0cc.objects) : [];
		_0x2da3bd.eventArray.forEach(function (_0x2e1165) {
			var _0x2c2e32 = parseInt(_0x2e1165.eventIntervalType);
			_0x2c2e32 === 0 ? (_0x2e1165.lastHeartbeat = 0, _0x2e1165.pauseTimeRange = 0, _0x2e1165.pauseTimeStamp = -1, _0x2e1165.requesting = false) : _0x2c2e32 === 1 && (_0x2e1165.timeArray = sortArray(_0x2e1165.timeArray), _0x2e1165.index = 0);
		});
	},
	'showIFrame': function (_0xa33cb7, _0x129c88, _0x45779e) {
		try {
			var _0x1fc263 = this;
			parseInt(_0x129c88) === 1 ? _0x1fc263.showObject(_0xa33cb7, 'customIframe', _0x45779e) : parseInt(_0x129c88) === 2 && showPopIframe(_0x45779e, _0xa33cb7);
		} catch (_0x7487af) {
			console.log(_0x7487af);
		}
	},
	'initHeartbeat': function (_0x18888a, _0x358339) {
		var _0x531e6e = this;
		if (typeof _0x18888a == 'undefined' || _0x18888a == '') {
			return;
		}
		Ext.Ajax.request({
			'url': _0x18888a,
			'params': {
				'uid': _0x531e6e.userId,
				'schoolId': _0x531e6e.cookieFid,
				'moocClassId': _0x531e6e.clazzId,
				'moocCourseId': _0x531e6e.courseid,
				'chapterId': _0x531e6e.knowledgeid,
				'objectId': _0x531e6e.objectid,
				'videoProgress': _0x531e6e.headOffset,
				'totalVideoDuration': window.duration,
				'enc': _0x531e6e.videoEnc
			},
			'method': 'get',
			'success': function (_0x2991ec) {
				if (typeof _0x358339 != 'undefined') {
					_0x358339.requesting = false;
					console.log('requesting: false');
				}
			},
			'failure': function () {
				typeof _0x358339 != 'undefined' && (_0x358339.requesting = false);
				console.log('heartbeatUrl request error');
			}
		});
	},
	'seekVideoTime': function (_0x27ead6, _0x91893b) {
		try {
			var _0x4c9514 = this;
			typeof _0x4c9514.cmp != 'undefined' && _0x4c9514.cmp != null && (_0x4c9514.cmp.destroy(), _0x4c9514.hide(), _0x27ead6.eventCount = _0x27ead6.eventCount - 1, _0x27ead6.eventCount <= 0 && (_0x27ead6.currentTime(_0x91893b), _0x27ead6.play()));
		} catch (_0x152934) {
			console.log(_0x152934);
		}
	},
	'showObject': function (_0x26f639, _0x3481bf, _0x2b8e43) {
		var _0x1824ee = this, _0x48c103 = _0x1824ee.items.getAt(0), _0x49f093, _0x74fee0 = function (_0x57a5af) {
			_0x49f093.destroy();
			_0x1824ee.hide();
			_0x57a5af.eventCount = _0x57a5af.eventCount - 1;
			_0x57a5af.eventCount <= 0 && _0x57a5af.play();
		};
		_0x48c103 != null && _0x48c103.destroy();
		_0x1824ee.cmp = null;
		if (_0x3481bf == 'customIframe') {
			_0x49f093 = _0x1824ee.add({
				'xtype': 'customIframe',
				'renderData': { 'src': _0x2b8e43 }
			});
			_0x26f639.eventCount += 1;
		}
		if (!_0x49f093) {
			return;
		}
		_0x49f093.on('continue', function () {
			_0x74fee0(_0x26f639);
		});
		var _0xec5270 = !(_0x49f093.model === false);
		_0x1824ee.showModel(_0xec5270);
		_0x1824ee.cmp = _0x49f093;
		_0xec5270 && _0x26f639.pause();
	},
	'showModel': function (_0x26094e) {
		var _0xeff681 = this;
		_0xeff681.show();
		_0x26094e ? (_0xeff681.removeCls('ans-timelineobjects-autosize'), _0xeff681.setAutoScroll(true)) : (_0xeff681.addCls('ans-timelineobjects-autosize'), _0xeff681.setAutoScroll(false));
	},
	'hide': function () {
		this.callParent(arguments);
	},
	'updateTime': function (_0x2f7593, _0x1f9820) {
		try {
			if (this.supportHeartbeat && isStuViewPage() && !_0x2f7593.paused()) {
				var _0x2797d9 = new Date().getTime(), _0x1c6683 = this, _0x4fc767 = 0;
				for (var _0x121358 = 0; _0x121358 < _0x1c6683.eventArray.length; _0x121358++) {
					var _0x843044 = _0x1c6683.eventArray[_0x121358], _0xba08be = parseInt(_0x843044.eventType), _0x4f62c0 = parseInt(_0x843044.eventIntervalType);
					if (_0x4f62c0 === 0) {
						if (_0x843044.requesting || _0x2f7593.scrubbing()) {
							continue;
						}
						var _0xc3db3f = _0x2797d9 - _0x843044.lastHeartbeat;
						_0x843044.pauseTimeRange > 0 && (_0xc3db3f = _0xc3db3f - _0x843044.pauseTimeRange);
						var _0x37cbb1 = _0xc3db3f / 1000;
						_0x37cbb1 = parseInt(_0x37cbb1);
						if (_0x37cbb1 > _0x843044.eventInterval) {
							if (_0xba08be === 1 || _0xba08be === 2) {
								_0x4fc767++;
								if (_0x4fc767 > 1) {
									break;
								}
							}
							_0x843044.pauseTimeRange = 0;
							_0x843044.lastHeartbeat = _0x2797d9;
							_0xba08be === 0 ? (_0x843044.requesting = true, this.initHeartbeat(_0x843044.url, _0x843044)) : (_0xba08be === 1 || _0xba08be === 2) && _0x1c6683.showIFrame(_0x2f7593, _0xba08be, _0x843044.url);
						}
					} else {
						if (_0x4f62c0 === 1) {
							if (_0x843044.index >= _0x843044.timeArray.length || _0x2f7593.scrubbing()) {
								continue;
							}
							var _0x5d8c91 = _0x843044.timeArray[_0x843044.index];
							if (typeof _0x5d8c91 == 'undefined') {
								continue;
							}
							if (_0x1f9820 >= _0x5d8c91) {
								if (_0xba08be === 1 || _0xba08be === 2) {
									_0x4fc767++;
									if (_0x4fc767 > 1) {
										break;
									}
								}
								_0x843044.index++;
								var _0x5b7123 = _0x843044.url;
								_0xba08be === 0 ? _0x1c6683.initHeartbeat(_0x5b7123) : (_0xba08be === 1 || _0xba08be === 2) && _0x1c6683.showIFrame(_0x2f7593, _0xba08be, _0x5b7123);
							}
						}
					}
				}
			}
		} catch (_0x420fe2) {
			console.log(_0x420fe2);
		}
	},
	'resetTime': function (_0xe57e48, _0x47a705) {
		try {
			var _0x3dd30f = this, _0x4e863f;
			for (_0x4e863f = 0; _0x4e863f < _0x3dd30f.eventArray.length; _0x4e863f++) {
				var _0x3145b6 = _0x3dd30f.eventArray[_0x4e863f];
				if (_0x47a705 <= _0x3145b6.startTime) {
					_0x3dd30f.index = _0x4e863f;
					break;
				}
			}
		} catch (_0x2f66b0) {
			console.log(_0x2f66b0);
		}
	}
});
;
function sortArray(_0x51ad8f) {
	try {
		return _0x51ad8f && _0x51ad8f.sort && _0x51ad8f.sort(function (_0x2d236c, _0x4ee144) {
			return _0x2d236c - _0x4ee144;
		});
	} catch (_0x57c00f) {
		console.log(_0x57c00f);
	}
	return _0x51ad8f;
}
;
;
(function () {
	var _0x1aab76 = videojs.getPlugin('plugin'), _0x301446 = videojs.extend(_0x1aab76, {
		'constructor': function (_0x3d1f67, _0x4052d4) {
			if (typeof _0x4052d4.supportHeartbeat == 'undefined' || !_0x4052d4.supportHeartbeat) {
				return;
			}
			_0x1aab76.call(this, _0x3d1f67, _0x4052d4);
			_0x3d1f67.pauseTimeStamp = 0;
			_0x3d1f67.pauseTimeRange = 0;
			var _0x3607b3 = null;
			try {
				_0x3607b3 = Ext.create('ans.videojs.CustomIframe', {
					'renderTo': _0x3d1f67.el_,
					'supportHeartbeat': _0x4052d4.supportHeartbeat,
					'eventArray': _0x4052d4.eventArray,
					'courseid': _0x4052d4.courseid,
					'clazzId': _0x4052d4.clazzId,
					'knowledgeid': _0x4052d4.knowledgeid,
					'objectid': _0x4052d4.objectid,
					'videoEnc': _0x4052d4.videoEnc,
					'userId': _0x4052d4.userId,
					'cookieFid': _0x4052d4.cookieFid,
					'headOffset': _0x4052d4.headOffset
				});
			} catch (_0x33bd88) {
				console.log(_0x33bd88);
			}
			if (_0x3607b3 == null) {
				return;
			}
			_0x3d1f67.on('play', function () {
				try {
					var _0xe228a9 = new Date().getTime();
					_0x3607b3.eventArray.forEach(function (_0x1e5a4f) {
						var _0x4f3626 = parseInt(_0x1e5a4f.eventIntervalType);
						if (_0x4f3626 === 0) {
							if (_0x1e5a4f.pauseTimeStamp > 0) {
								_0x1e5a4f.pauseTimeStamp < _0x1e5a4f.lastHeartbeat && (_0x1e5a4f.pauseTimeStamp = _0x1e5a4f.lastHeartbeat);
								var _0x3a89a9 = _0xe228a9 - _0x1e5a4f.pauseTimeStamp;
								_0x1e5a4f.pauseTimeRange += _0x3a89a9;
							}
							_0x1e5a4f.pauseTimeStamp = 0;
						}
					});
					_0x3607b3.resetTime(_0x3d1f67, _0x3d1f67.currentTime());
				} catch (_0x4f936c) {
					console.log(_0x4f936c);
				}
			});
			_0x3d1f67.on('seekend', function () {
				_0x3607b3.resetTime(_0x3d1f67, _0x3d1f67.currentTime());
			});
			_0x3d1f67.on('pause', function () {
				try {
					var _0x32420f = new Date().getTime();
					_0x3607b3.eventArray.forEach(function (_0x3e6c14) {
						var _0x1d9613 = parseInt(_0x3e6c14.eventIntervalType);
						_0x1d9613 === 0 && (_0x3e6c14.pauseTimeStamp = _0x32420f);
					});
				} catch (_0x14586f) {
					console.log(_0x14586f);
				}
			});
			_0x3d1f67.on('timeupdate', function () {
				try {
					!_0x3d1f67.paused() && _0x3607b3.updateTime(_0x3d1f67, parseInt(_0x3d1f67.currentTime()));
					_0x3607b3.playTime = _0x3d1f67.currentTime();
				} catch (_0x1d92a4) {
					console.log(_0x1d92a4);
				}
			});
			window.addEventListener('message', function (_0x47e098) {
				try {
					if (!_0x4052d4.supportHeartbeat || !isStuViewPage()) {
						return;
					}
					var _0x3ca803 = _0x47e098.data;
					if (typeof _0x3ca803 == 'undefined') {
						_0x3607b3.resetDiv(_0x3d1f67);
						return;
					}
					var _0x4ae591 = parseInt(_0x4052d4.duration);
					if (_0x3ca803.opType === 'fastForward') {
						var _0x5cd658 = _0x3ca803.value;
						if (typeof _0x5cd658 === 'undefined') {
							_0x3607b3.resetDiv(_0x3d1f67);
							return;
						}
						_0x5cd658 = parseInt(_0x5cd658);
						if (!(_0x5cd658 > 0)) {
							_0x3607b3.resetDiv(_0x3d1f67);
							return;
						}
						_0x3d1f67.ignoreSeek = false;
						_0x3d1f67.switchStatus = true;
						var _0x495d69 = _0x3d1f67.currentTime();
						_0x495d69 = parseInt(_0x495d69);
						var _0x410251 = _0x495d69 + _0x5cd658;
						if (_0x410251 > _0x4ae591) {
							_0x3607b3.resetDiv(_0x3d1f67);
							return;
						}
						_0x3607b3.seekVideoTime(_0x3d1f67, _0x410251);
						return;
					}
					if (_0x3ca803.opType === 'videoStartTime') {
						var _0x5cd658 = _0x3ca803.value;
						if (typeof _0x5cd658 === 'undefined') {
							_0x3607b3.resetDiv(_0x3d1f67);
							return;
						}
						_0x5cd658 = parseInt(_0x5cd658);
						if (!(_0x5cd658 >= 0) || _0x5cd658 > _0x4ae591) {
							_0x3607b3.resetDiv(_0x3d1f67);
							return;
						}
						_0x3d1f67.ignoreSeek = false;
						_0x3d1f67.switchStatus = true;
						_0x3607b3.seekVideoTime(_0x3d1f67, _0x5cd658);
					}
				} catch (_0x1502df) {
					console.log(_0x1502df);
				}
			});
		}
	});
	videojs.registerPlugin('customIframePlugin', _0x301446);
}());
(function () {
	var _0x31889c = videojs.getPlugin('plugin'), _0x2a92e3 = videojs.extend(_0x31889c, {
		'constructor': function (_0x1cc97c, _0x125189) {
			_0x31889c.call(this, _0x1cc97c, _0x125189);
			if (!_0x125189.url) {
				return;
			}
			var _0x21b874 = this;
			Ext.Ajax.request({
				'url': _0x125189.url,
				'async': false,
				'success': function (_0x1fdc97) {
					if (_0x1fdc97.status != 200) {
						return;
					}
					eval('var data=' + _0x1fdc97.responseText);
					if (!data.status) {
						return;
					}
					var _0x1b5e0e = videojs('video');
					if (_0x1b5e0e && typeof _0x1b5e0e.markers === 'function') {
						var _0x53e689 = _0x1cc97c.eventPoints;
						_0x53e689.push.apply(_0x53e689, data.list);
						_0x1b5e0e.markers({
							'markerTip': {
								'display': true,
								'text': function (_0x4a52ef) {
									return _0x4a52ef.text;
								}
							},
							'markers': _0x53e689,
							'onMarkerClick': function (_0x4ca595) {
								if (_0x125189.ff != 1) {
									return false;
								}
								var _0x4719fa = $(this).data('marker-key');
								return _0x1cc97c.currentTime(_0x4ca595.time), false;
							}
						});
					}
					if (data.list && data.list.length > 0) {
						var _0x53cf5b = [], _0x3d8d94 = {
							_0x2b7b7d: _0x354bc1,
							_0x2b7b7d: _0x37eec2
						};
						for (var _0x4d6e82 = 0; _0x4d6e82 < data.list.length; _0x4d6e82++) {
							var _0x4ae143 = data.list[_0x4d6e82], _0x2b7b7d = _0x4ae143.text;
							if (!_0x3d8d94[_0x2b7b7d]) {
								var _0x354bc1 = [];
								_0x354bc1.push(_0x4ae143);
								_0x53cf5b.push(_0x2b7b7d);
							} else {
								var _0x37eec2 = _0x3d8d94[_0x2b7b7d];
								_0x37eec2.push(_0x4ae143);
							}
						}
						function _0x2ec369(_0x48c4e9) {
							var _0x29721e = '<div class="zsCloud_box"><h2 class="zsCloud_seltime">选择时间</h2><div class="zsCloud_div"><div class="zsCloud_div_list">';
							for (var _0xc0be21 = 0; _0xc0be21 < _0x48c4e9.length; _0xc0be21++) {
								var _0x1c5d10 = _0x48c4e9[_0xc0be21], _0x3162b3 = Ext.fly(_0x3304df.elements[0]).select('.topicId' + _0x1c5d10.topicid + ':not(.markertime)'), _0x1bb681 = videojs.formatTime(_0x1c5d10.time);
								_0x3162b3 && _0x3162b3.elements[0] && _0x3162b3.elements[0].parentElement.remove();
								_0x29721e += '<div class="zsCloud_item topicId' + _0x1c5d10.topicid + '" data-marker-time="' + _0x1c5d10.time + '" title="' + _0x1bb681 + '" onclick="markersPlayer(this)">' + _0x1bb681 + '</div>';
							}
							return _0x29721e += '</div></div></div>', _0x29721e;
						}
						Ext.select('.zsCloud').setStyle('display', 'block');
						var _0x3304df = Ext.select('.zsCloud_ul');
						if (_0x3304df && _0x3304df.elements[0]) {
							var _0x44603c;
							for (var _0x34aed1 = 0; _0x34aed1 < _0x53cf5b.length; _0x34aed1++) {
								var _0x5295a6 = _0x53cf5b[_0x34aed1], _0x5a5751 = _0x3d8d94[_0x5295a6], _0x5b3e79 = '';
								if (_0x5a5751) {
									if (_0x5a5751.length == 1) {
										var _0x49e85b = _0x5a5751[0], _0x597d1f = Ext.fly(_0x3304df.elements[0]).select('.topicId' + _0x49e85b.topicid + ':not(.markertime)'), _0x3e9d33 = videojs.formatTime(_0x49e85b.time);
										_0x597d1f && _0x597d1f.elements[0] && _0x597d1f.elements[0].parentElement.remove();
										_0x5b3e79 = '<li><span class=\'topicId' + _0x49e85b.topicid + ' markertime\' data-marker-time=\'' + _0x49e85b.time + '\' title=\'' + _0x3e9d33 + '\' onclick=\'markersPlayer(this)\'>' + _0x49e85b.text + '</span></li>';
									} else {
										_0x5b3e79 = '<li class="zsCloud_select"><span class="zsCloud_span">' + _0x5295a6 + '</span>';
										_0x5a5751 && _0x5a5751.length > 0 ? _0x5b3e79 += _0x2ec369(_0x5a5751) : _0x5b3e79 += '</li>';
									}
								}
								_0x44603c ? _0x44603c = Ext.DomHelper.insertHtml('afterEnd', _0x44603c.elements[0], _0x5b3e79) : _0x44603c = Ext.DomHelper.insertHtml('afterBegin', _0x3304df.elements[0], _0x5b3e79);
								_0x44603c = Ext.fly(_0x44603c).select('');
							}
						}
						_0x125189.videoTopicCloud && _0x125189.videoTopicCloud == 1 && (Ext.select('.zsCloud_down').setStyle('display', 'block'), Ext.select('.zsCloud_body').setStyle('display', 'block'));
					}
					var _0x423d6f = new Map(), _0x24a381 = new Array();
					if (data.list && data.list.length > 0) {
						for (var _0x4d6e82 = 0; _0x4d6e82 < data.list.length; _0x4d6e82++) {
							var _0x2a56c4 = data.list[_0x4d6e82].topicid, _0x4637b5 = _0x423d6f.get(_0x2a56c4);
							!_0x4637b5 && (_0x4637b5 = {}, _0x4637b5.text = data.list[_0x4d6e82].text, _0x4637b5.time = data.list[_0x4d6e82].time, _0x4637b5.topicid = data.list[_0x4d6e82].topicid, _0x4637b5.weight = 0, _0x4637b5.html = {
								'data-marker-time': data.list[_0x4d6e82].time,
								'onclick': 'markersPlayer(this)'
							}, _0x423d6f.set(_0x2a56c4, _0x4637b5), _0x24a381.push(_0x4637b5));
							_0x4637b5.weight += 1;
						}
					}
					$(function () {
						_0x24a381.length != 0 && $('#word_cloud').jQCloud(_0x24a381);
						function _0x195a54(_0x525cf5) {
							$(_0x525cf5).niceScroll({
								'cursorborder': '',
								'cursorwidth': 8,
								'cursorcolor': '#DADFE6',
								'boxzoom': false,
								'autohidemode': true
							});
							setInterval(function () {
								$(_0x525cf5).getNiceScroll().resize();
							}, 300);
						}
						$('.zsCloud_box').each(function (_0x5a06d8) {
							$(this).find('.zsCloud_div').attr('id', 'zsCloud_div_' + _0x5a06d8);
							_0x195a54('#zsCloud_div_' + _0x5a06d8);
						});
					});
					$('.zsCloud_down').click(function () {
						var _0x57b41a = $('.zsCloud_body');
						_0x57b41a.is(':visible') ? (_0x57b41a.hide(), $(this).addClass('zsCloud_up'), $(this).text('展开')) : (_0x57b41a.show(), $(this).removeClass('zsCloud_up'), $(this).text('收起'));
					});
				}
			});
		}
	});
	videojs.registerPlugin('marker', _0x2a92e3);
}());
(function () {
	var _0x358b78 = videojs.getPlugin('plugin'), _0x659711 = videojs.extend(_0x358b78, {
		'constructor': function (_0x5251b5, _0x47c2ec) {
			_0x358b78.call(this, _0x5251b5, _0x47c2ec);
			var _0x51bf9b = this, _0x4e6a7a = _0x47c2ec.subtitleUrl, _0x588a0a = function (_0x57975a) {
				var _0x863356 = _0x57975a.match(/support\/(\w+).\w+/);
				if (_0x863356) {
					return ServerHosts.PARENT_HOST + '/ananas/video-editor/sub?objectid=' + _0x863356[1];
				}
			}, _0x904b61 = function (_0x2582dc, _0x20ba47, _0x314893) {
				_0x5251b5.addRemoteTextTrack({
					'kind': 'subtitles',
					'srclang': 'cn',
					'label': _0x2582dc,
					'src': _0x20ba47,
					'default': _0x314893
				}, true);
			};
			_0x5251b5.ready(function () {
				_0x4e6a7a && Ext.Ajax.request({
					'url': _0x4e6a7a,
					'success': function (_0x2968af) {
						if (_0x2968af.status != 200) {
							return;
						}
						eval('var subs=' + _0x2968af.responseText);
						var _0xac3bde = 0, _0x10e77e = 0;
						subs.length > 0 && Ext.each(subs, function (_0x76b79f) {
							_0x47c2ec.translate == 1 && _0x76b79f.name == 'English' ? (_0x76b79f.selected = true, _0x10e77e = _0xac3bde) : _0x76b79f.selected = false;
							_0x904b61(_0x76b79f.name, _0x588a0a(_0x76b79f.url), _0x76b79f.selected);
							_0xac3bde++;
						});
						if (_0x47c2ec.translate == 1) {
							Ext.select('.vjs-subs-caps-button .vjs-icon-placeholder').setHTML('翻译');
							Ext.select('.vjs-subs-caps-button .vjs-icon-placeholder').addCls('vjs-hide-content');
						}
						setTimeout(function () {
							var _0x54bb5e = _0x5251b5.textTracks();
							_0x47c2ec.translate == 1 ? _0x54bb5e && _0x54bb5e[_0x10e77e] ? _0x54bb5e[_0x10e77e].mode = 'showing' : _0x54bb5e && _0x54bb5e[0] && (_0x54bb5e[0].mode = 'showing') : _0x54bb5e && _0x54bb5e[0] && (_0x54bb5e[0].mode = 'showing');
						}, 500);
					}
				});
				var _0x321458 = _0x5251b5.textTrackSettings;
				_0x321458.setValues({
					'backgroundColor': '#000',
					'backgroundOpacity': '0',
					'edgeStyle': 'uniform'
				});
				_0x321458.updateDisplay();
			});
		}
	});
	videojs.registerPlugin('subtitle', _0x659711);
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
		var _0x59e780 = this;
		_0x59e780.callParent(arguments);
		var _0x24cacd = Ext.query('input', _0x59e780.el.dom);
		Ext.each(_0x24cacd, function (_0x506438, _0x5478c9) {
			Ext.fly(_0x506438).on('click', function () {
				_0x59e780.onSelected(_0x5478c9);
			});
		});
		try {
			typeof createVideoTask === 'function' ? createVideoTask() : console.log('createVideoTask函数不存在\uFF01');
		} catch (_0xdf1bc3) {
		}
		try {
			if (typeof aplus_queue != 'undefined') {
				var _0x3a9775 = parent.AttachmentSetting;
				if (_0x3a9775) {
					var _0x199703 = _0x3a9775.aplus_video_id, _0x4cdb6b = _0x3a9775.aplus_resource_id, _0x1dd6c8 = _0x3a9775.knowledgename, _0x3b2509 = _0x3a9775.coursename;
					aplus_queue.push({
						'action': 'aplus.record',
						'arguments': [
							'pybk_error',
							'OTHER',
							{
								'video_name': _0x1dd6c8,
								'video_id': _0x199703,
								'resource_id': _0x4cdb6b,
								'resource_name': _0x3b2509
							}
						]
					});
				}
			}
		} catch (_0x33a809) {
		}
	},
	'setErrorMsg': function (_0x39e499) {
		Ext.fly(this.errorMsgEl).setHTML(_0x39e499);
	}
});
Ext.define('ans.videojs.ErrorNote', {
	'extend': 'Ext.Component',
	'cls': 'ans-vjserrdisplay',
	'renderTpl': ['<div class="ans-vjserrdisplay-title">播放出现异常\u3002</div>']
});
(function () {
	var _0x1fd930 = videojs.getComponent('ErrorDisplay'), _0x2f65f3 = videojs.extend(_0x1fd930, {
		'constructor': function (_0x385b0d, _0x1cdbb9) {
			_0x1fd930.call(this, _0x385b0d, _0x1cdbb9);
		},
		'colse': function () {
			_0x1fd930.prototype.colse.call(this);
			me.ansErrorDisplay && (me.ansErrorDisplay.destroy(), me.ansErrorDisplay = null);
		},
		'fill': function () {
			_0x1fd930.prototype.fill.call(this);
			var _0x26fa83 = this, _0x5bf4ab = _0x26fa83.player_, _0x4c3e3e = _0x5bf4ab.options_.playlines, _0x979487 = Ext.query('.vjs-modal-dialog-content', _0x26fa83.el_)[0];
			_0x26fa83.ansErrorDisplay && (_0x26fa83.ansErrorDisplay.destroy(), delete _0x26fa83.ansErrorDisplay);
			if (!_0x5bf4ab.selectCDN || !_0x4c3e3e) {
				_0x26fa83.ansErrorDisplay = Ext.create('ans.videojs.ErrorNote', { 'renderTo': _0x26fa83.el_ });
				return;
			}
			var _0x32034c = _0x5bf4ab.currentPlayline(), _0x1ba2a5 = 0;
			Ext.each(_0x4c3e3e, function (_0x5241f5, _0x1f4157) {
				_0x32034c == _0x5241f5 && (_0x1ba2a5 = _0x1f4157);
			});
			_0x26fa83.ansErrorDisplay = Ext.create('ans.videojs.ErrorDisplay', {
				'renderTo': _0x26fa83.el_,
				'onSelected': function (_0x4819c2) {
					_0x5bf4ab.selectCDN(_0x4819c2);
					_0x26fa83.close();
				},
				'renderData': {
					'playlines': _0x4c3e3e,
					'errorMsg': _0x26fa83.content(),
					'selectedIndex': _0x1ba2a5
				}
			});
		}
	});
	videojs.registerComponent('ErrorDisplay', _0x2f65f3);
}());
(function () {
	var _0x48c367 = null;
	typeof window.videojs === 'undefined' && typeof require === 'function' ? _0x48c367 = require('video.js') : _0x48c367 = window.videojs;
	(function (_0x36b294, _0x5379fb) {
		var _0x3a51be = {}, _0x473968, _0x6cb6c5 = {}, _0x419559 = {};
		function _0x41d7fe(_0x2b84dd, _0x4aaa45, _0x503825, _0x8d417b) {
			_0x6cb6c5 = {
				'label': _0x503825,
				'sources': _0x4aaa45
			};
			if (typeof _0x8d417b === 'function') {
				return _0x8d417b(_0x2b84dd, _0x4aaa45, _0x503825);
			}
			return _0x2b84dd.src(_0x4aaa45.map(function (_0x30ba95) {
				return {
					'src': _0x30ba95.src,
					'type': _0x30ba95.type,
					'res': _0x30ba95.res
				};
			})), _0x2b84dd;
		}
		var _0x37a056 = _0x5379fb.getComponent('MenuItem'), _0x236f42 = _0x5379fb.extend(_0x37a056, {
			'constructor': function (_0x48cc87, _0x471d03, _0x3817fc, _0x34f197) {
				this.onClickListener = _0x3817fc;
				this.label = _0x34f197;
				_0x37a056.call(this, _0x48cc87, _0x471d03);
				this.src = _0x471d03.src;
				this.on('click', this.onClick);
				this.on('touchstart', this.onClick);
				_0x471d03.initialySelected && (this.showAsLabel(), this.selected(true), this.addClass('vjs-selected'));
			},
			'showAsLabel': function () {
				this.label && (this.label.innerHTML = this.options_.label);
			},
			'onClick': function (_0x39b93c) {
				this.onClickListener(this);
				var _0x4cc900 = this.player_.currentTime(), _0x584cba = this.player_.paused();
				this.showAsLabel();
				this.addClass('vjs-selected');
				!_0x584cba && this.player_.bigPlayButton.hide();
				typeof _0x39b93c !== 'function' && typeof this.options_.customSourcePicker === 'function' && (_0x39b93c = this.options_.customSourcePicker);
				var _0x4b6c24 = 'loadeddata';
				this.player_.techName_ !== 'Youtube' && this.player_.preload() === 'none' && this.player_.techName_ !== 'Flash' && (_0x4b6c24 = 'timeupdate');
				_0x41d7fe(this.player_, this.src, this.options_.label, _0x39b93c).one(_0x4b6c24, function () {
					var _0x3f2625 = this.player_;
					_0x3f2625.switchStatus = true;
					_0x3f2625.currentTime(_0x4cc900);
					!_0x584cba && _0x3f2625.play();
					_0x3f2625.trigger('resolutionchange');
				});
			}
		});
		_0x5379fb.registerComponent('ResolutionMenuItem', _0x236f42);
		var _0x218ba1 = _0x5379fb.getComponent('MenuButton'), _0x483f45 = _0x5379fb.extend(_0x218ba1, {
			'constructor': function (_0x50902d, _0x50412f, _0x30fbfa, _0x2a2642) {
				this.sources = _0x50412f.sources;
				this.label = _0x2a2642;
				this.label.innerHTML = _0x50412f.initialySelectedLabel;
				_0x218ba1.call(this, _0x50902d, _0x50412f, _0x30fbfa);
				this.controlText('Quality');
				if (_0x30fbfa.dynamicLabel) {
					this.el().appendChild(_0x2a2642);
				} else {
					var _0x345f3d = document.createElement('span');
					_0x5379fb.dom.addClass(_0x345f3d, 'vjs-resolution-button-staticlabel');
					this.el().appendChild(_0x345f3d);
				}
			},
			'createItems': function () {
				var _0x13ea12 = [], _0x5e22b0 = this.sources && this.sources.label || {}, _0x49850f = function (_0x4a6d2b) {
					_0x13ea12.map(function (_0x4c4013) {
						_0x4c4013.selected(_0x4c4013 === _0x4a6d2b);
						_0x4c4013.removeClass('vjs-selected');
					});
				};
				for (var _0x13c174 in _0x5e22b0) {
					_0x5e22b0.hasOwnProperty(_0x13c174) && (_0x13ea12.push(new _0x236f42(this.player_, {
						'label': _0x13c174,
						'src': _0x5e22b0[_0x13c174],
						'initialySelected': _0x13c174 === this.options_.initialySelectedLabel,
						'customSourcePicker': this.options_.customSourcePicker
					}, _0x49850f, this.label)), _0x419559[_0x13c174] = _0x13ea12[_0x13ea12.length - 1]);
				}
				return _0x13ea12;
			}
		});
		_0x473968 = function (_0x10e804) {
			var _0x2d26f1 = _0x5379fb.mergeOptions(_0x3a51be, _0x10e804), _0x4f5a6a = this, _0x92b44e = document.createElement('span'), _0xa512cd = {};
			_0x5379fb.dom.addClass(_0x92b44e, 'vjs-resolution-button-label');
			_0x4f5a6a.updateSrc = function (_0x4b8838) {
				if (!_0x4b8838) {
					return _0x4f5a6a.src();
				}
				_0x4f5a6a.controlBar.resolutionSwitcher && (_0x4f5a6a.controlBar.resolutionSwitcher.dispose(), delete _0x4f5a6a.controlBar.resolutionSwitcher);
				_0x4b8838 = _0x4b8838.sort(_0x51a971);
				_0xa512cd = _0x5b759d(_0x4b8838);
				var _0x22c4b9 = _0x1032f5(_0xa512cd, _0x4b8838), _0x4e3252 = new _0x483f45(_0x4f5a6a, {
					'sources': _0xa512cd,
					'initialySelectedLabel': _0x22c4b9.label,
					'initialySelectedRes': _0x22c4b9.res,
					'customSourcePicker': _0x2d26f1.customSourcePicker
				}, _0x2d26f1, _0x92b44e);
				return _0x5379fb.dom.addClass(_0x4e3252.el(), 'vjs-resolution-button'), _0x4f5a6a.controlBar.resolutionSwitcher = _0x4f5a6a.controlBar.el_.insertBefore(_0x4e3252.el_, _0x4f5a6a.controlBar.getChild('fullscreenToggle').el_), _0x4f5a6a.controlBar.resolutionSwitcher.dispose = function () {
					this.parentNode.removeChild(this);
				}, _0x41d7fe(_0x4f5a6a, _0x22c4b9.sources, _0x22c4b9.label, _0x2d26f1.customSourcePicker);
			};
			_0x4f5a6a.currentResolution = function (_0x198cb9, _0x1c7e8f) {
				if (_0x198cb9 == null) {
					return _0x6cb6c5;
				}
				return _0x419559[_0x198cb9] != null && _0x419559[_0x198cb9].onClick(_0x1c7e8f), _0x4f5a6a;
			};
			_0x4f5a6a.getGroupedSrc = function () {
				return _0xa512cd;
			};
			function _0x51a971(_0x141ec7, _0x5db157) {
				if (!_0x141ec7.res || !_0x5db157.res) {
					return 0;
				}
				return +_0x5db157.res - +_0x141ec7.res;
			}
			function _0x5b759d(_0x3ad4ee) {
				var _0x97a559 = {
					'label': {},
					'res': {},
					'type': {}
				};
				return _0x3ad4ee.map(function (_0x346b91) {
					_0x540eef(_0x97a559, 'label', _0x346b91);
					_0x540eef(_0x97a559, 'res', _0x346b91);
					_0x540eef(_0x97a559, 'type', _0x346b91);
					_0x3046c8(_0x97a559, 'label', _0x346b91);
					_0x3046c8(_0x97a559, 'res', _0x346b91);
					_0x3046c8(_0x97a559, 'type', _0x346b91);
				}), _0x97a559;
			}
			function _0x540eef(_0x45a749, _0xca83c8, _0x1c180e) {
				_0x45a749[_0xca83c8][_0x1c180e[_0xca83c8]] == null && (_0x45a749[_0xca83c8][_0x1c180e[_0xca83c8]] = []);
			}
			function _0x3046c8(_0x21eb84, _0x28dfcb, _0x1ed45d) {
				_0x21eb84[_0x28dfcb][_0x1ed45d[_0x28dfcb]].push(_0x1ed45d);
			}
			function _0x1032f5(_0x21db20, _0x46a43b) {
				var _0x3c1db9 = _0x2d26f1.default, _0x32c3f5 = '';
				return _0x3c1db9 === 'high' ? (_0x3c1db9 = _0x46a43b[0].res, _0x32c3f5 = _0x46a43b[0].label) : _0x3c1db9 === 'low' || _0x3c1db9 == null || !_0x21db20.res[_0x3c1db9] ? (_0x3c1db9 = _0x46a43b[_0x46a43b.length - 1].res, _0x32c3f5 = _0x46a43b[_0x46a43b.length - 1].label) : _0x21db20.res[_0x3c1db9] && (_0x32c3f5 = _0x21db20.res[_0x3c1db9][0].label), {
					'res': _0x3c1db9,
					'label': _0x32c3f5,
					'sources': _0x21db20.res[_0x3c1db9]
				};
			}
			_0x4f5a6a.ready(function () {
				_0x4f5a6a.options_.sources.length > 0 && _0x4f5a6a.setTimeout(function () {
					_0x4f5a6a.updateSrc(_0x4f5a6a.options_.sources);
				}, 1);
			});
		};
		_0x5379fb.registerPlugin('videoJsResolutionSwitcher', _0x473968);
	}(window, _0x48c367));
}());
(function () {
	(function (_0x5e9f67, _0xe5a043) {
		var _0x44e551 = {}, _0x344fab, _0x2ae46a = {}, _0x49326c = { _0x42eb42: _0x235eb3[_0x235eb3.length - 1] };
		function _0x1c5b2a(_0x559e3c, _0x5572e2, _0x39fc8e, _0x242e41) {
			_0x2ae46a = _0x5572e2;
			if (typeof _0x242e41 === 'function') {
				return _0x242e41(_0x559e3c, _0x5572e2, _0x39fc8e);
			}
			return _0x559e3c;
		}
		var _0x178b2f = _0xe5a043.getComponent('ResolutionMenuItem'), _0x3541f0 = _0xe5a043.extend(_0x178b2f, {
			'onClick': function (_0x35eca6) {
				this.onClickListener(this);
				var _0x7d1e0c = this.player_.currentTime(), _0xcf8aac = this.player_.paused();
				this.showAsLabel();
				this.addClass('vjs-selected');
				!_0xcf8aac && this.player_.bigPlayButton.hide();
				typeof _0x35eca6 !== 'function' && typeof this.options_.customSourcePicker === 'function' && (_0x35eca6 = this.options_.customSourcePicker);
				var _0x1cf101 = 'loadeddata';
				this.player_.techName_ !== 'Youtube' && this.player_.preload() === 'none' && this.player_.techName_ !== 'Flash' && (_0x1cf101 = 'timeupdate');
				var _0x10a56b = _0x1c5b2a(this.player_, this.src, this.options_.label, _0x35eca6);
				_0x10a56b && _0x10a56b.one(_0x1cf101, function () {
					_0x10a56b.switchStatus = true;
					_0x10a56b.currentTime(_0x7d1e0c);
					!_0xcf8aac && _0x10a56b.play();
					_0x10a56b.trigger('playlinechange');
				});
			}
		}), _0x28fc98 = _0xe5a043.getComponent('MenuButton'), _0xa61f55 = _0xe5a043.extend(_0x28fc98, {
			'constructor': function (_0x1b7fef, _0x166889, _0xfb8036, _0x4e4e30) {
				this.playlines = _0x166889.playlines;
				this.label = _0x4e4e30;
				this.label.innerHTML = _0x166889.initialySelectedLabel;
				_0x28fc98.call(this, _0x1b7fef, _0x166889, _0xfb8036);
				this.controlText('Playline');
				if (_0xfb8036.dynamicLabel) {
					this.el().appendChild(_0x4e4e30);
				} else {
					var _0x394f94 = document.createElement('span');
					_0xe5a043.addClass(_0x394f94, 'vjs-resolution-button-staticlabel');
					this.el().appendChild(_0x394f94);
				}
			},
			'createItems': function () {
				var _0x235eb3 = [], _0x1f6db6 = this.playlines || [], _0x3328ae = function (_0x222f29) {
					_0x235eb3.map(function (_0x3ee036) {
						_0x3ee036.selected(_0x3ee036 === _0x222f29);
						_0x3ee036.removeClass('vjs-selected');
					});
				};
				for (var _0x3a4b44 = 0; _0x3a4b44 < _0x1f6db6.length; _0x3a4b44++) {
					var _0x42eb42 = _0x1f6db6[_0x3a4b44].label;
					_0x235eb3.push(new _0x3541f0(this.player_, {
						'label': _0x42eb42,
						'src': _0x1f6db6[_0x3a4b44],
						'initialySelected': _0x42eb42 === this.options_.initialySelectedLabel,
						'customSourcePicker': this.options_.customSourcePicker
					}, _0x3328ae, this.label));
				}
				return _0x235eb3;
			}
		});
		_0x344fab = function (_0x3792e6) {
			var _0x15ae3c = _0xe5a043.mergeOptions(_0x44e551, _0x3792e6), _0x554c6c = this, _0x4b7631 = document.createElement('span'), _0x31abb4 = _0x554c6c.options_.playlines;
			_0xe5a043.dom.addClass(_0x4b7631, 'vjs-resolution-button-label');
			var _0x403d4f = new _0xa61f55(_0x554c6c, {
				'playlines': _0x31abb4,
				'initialySelectedLabel': _0x31abb4[0].label,
				'initialySelectedUrl': _0x31abb4[0].url,
				'customSourcePicker': _0x15ae3c.customSourcePicker
			}, _0x15ae3c, _0x4b7631);
			_0xe5a043.dom.addClass(_0x403d4f.el(), 'vjs-resolution-button');
			_0xe5a043.dom.addClass(_0x403d4f.el(), 'vjs-playline-button');
			_0x403d4f.show();
			_0x554c6c.selectCDN = function (_0x18554f) {
				_0x403d4f.items[_0x18554f].onClick(_0x15ae3c.customSourcePicker);
				_0x554c6c.play();
			};
			_0x31abb4.length > 0 && (_0x2ae46a = _0x31abb4[0]);
			_0x554c6c.currentPlayline = function () {
				return _0x2ae46a;
			};
			_0x554c6c.ready(function () {
				_0x554c6c.controlBar.videoJsPlayLine = _0x554c6c.controlBar.el_.insertBefore(_0x403d4f.el_, _0x554c6c.controlBar.getChild('fullscreenToggle').el_);
				_0x554c6c.controlBar.videoJsPlayLine.dispose = function () {
					this.parentNode.removeChild(this);
				};
			});
		};
		_0xe5a043.registerPlugin('videoJsPlayLine', _0x344fab);
	}(window, videojs));
}());
Ext.define('ans.AudioJs', {
	'videoJs': null,
	'mixins': { 'observable': 'Ext.util.Observable' },
	'constructor': function (_0x509d3c) {
		_0x509d3c = _0x509d3c || {};
		var _0x39eaf6 = this;
		_0x39eaf6.addEvents(['seekstart']);
		_0x39eaf6.mixins.observable.constructor.call(_0x39eaf6, _0x509d3c);
		var _0x428722 = videojs(_0x509d3c.videojs, _0x39eaf6.params2VideoOpt(_0x509d3c.params), function () {
		});
		Ext.fly(_0x509d3c.videojs).on('contextmenu', function (_0x546191) {
			_0x546191.preventDefault();
		});
		Ext.fly(_0x509d3c.videojs).on('keydown', function (_0xb26d6d) {
			(_0xb26d6d.keyCode == 32 || _0xb26d6d.keyCode == 37 || _0xb26d6d.keyCode == 39) && _0xb26d6d.preventDefault();
			_0xb26d6d.keyCode == 32 && (_0x428722.paused() ? _0x428722.play() : _0x428722.pause());
		});
	},
	'params2VideoOpt': function (_0x477618) {
		var _0x28f725 = [];
		!_0x477618.rootPath && (_0x477618.rootPath = '');
		_0x477618.http && _0x28f725.push({
			'src': _0x477618.http,
			'type': 'audio/mp3'
		});
		var _0x53ee53 = function (_0xd96914, _0x246568, _0x285523) {
			var _0x8c6a40 = this;
			!_0x8c6a40.logCount && (_0x8c6a40.logCount = 0);
			videojs.xhr({
				'uri': _0x246568,
				'headers': { 'Content-Type': 'application/json' }
			}, function (_0x4aac65, _0x33057f) {
				_0x8c6a40.logCount++;
				if (_0x33057f.statusCode == 200) {
					_0x8c6a40.logCount = 0;
					if (_0x33057f.body.indexOf('isPassed') < 0) {
						window.parent && window.parent.location.reload();
						return;
					}
					eval('var d=' + _0x33057f.body);
					d.isPassed && _0x285523();
					return;
				}
				if (_0x8c6a40.logCount >= 4) {
					_0x8c6a40.logCount = 0;
					_0xd96914.pause();
					_0x33057f.statusCode != 0 ? alert('服务繁忙\uFF0C不能保证您能否正常完成任务\uFF0C请您稍后继续...(e: ' + _0x33057f.statusCode + ')') : alert('您的网络不稳定\uFF0C请您稍后继续...');
				}
			});
		}, _0x46b79b = function (_0x4f5be0, _0x2d79c6, _0x111bb4, _0x39db72) {
			if (!_0x477618.reportUrl) {
				return;
			}
			var _0x178a0c = '[{0}][{1}][{2}][{3}][{4}][{5}][{6}][{7}]', _0x57f8f6 = (_0x477618.startTime || '0') + '_' + (_0x477618.endTime || _0x477618.duration), _0x1550d2 = 0, _0x586333;
			_0x111bb4.toString().indexOf('-') != -1 ? (_0x586333 = _0x111bb4.split('-'), _0x586333.length == 2 && (_0x1550d2 = parseInt(_0x586333[1]) * 1000)) : _0x1550d2 = _0x111bb4 * 1000;
			if (_0x1550d2 == _0x477618.duration * 1000 && _0x2d79c6 == 2) {
				return;
			}
			var _0x502938 = Ext.String.format(_0x178a0c, _0x477618.clazzId, _0x477618.userid, _0x477618.jobid ? _0x477618.jobid : '', _0x477618.objectId, _0x1550d2, 'd_yHJ!$pdA~5', _0x477618.duration * 1000, _0x57f8f6), _0x5bc867 = [
				_0x477618.reportUrl,
				'/',
				_0x477618.dtoken,
				'?clazzId=',
				_0x477618.clazzId,
				'&playingTime=',
				_0x111bb4,
				'&duration=',
				_0x477618.duration,
				'&clipTime=',
				_0x57f8f6,
				'&objectId=',
				_0x477618.objectId,
				'&otherInfo=',
				_0x477618.otherInfo,
				'&jobid=',
				_0x477618.jobid,
				'&userid=',
				_0x477618.userid,
				'&isdrag=',
				_0x2d79c6,
				'&view=pc',
				'&enc=',
				md5(_0x502938),
				'&rt=',
				_0x477618.rt,
				'&dtype=Audio',
				'&_t=',
				new Date().getTime()
			].join('');
			_0x53ee53(_0x4f5be0, _0x5bc867, _0x39db72);
		};
		return {
			'language': 'zh-CN',
			'controls': true,
			'preload': 'auto',
			'bigPlayButton': false,
			'sources': _0x28f725,
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
				'audioNote': { 'title': _0x477618.filename },
				'studyControl': { 'enableSwitchWindow': 1 },
				'seekBarControl': {
					'headOffset': _0x477618.headOffset,
					'enableFastForward': _0x477618.enableFastForward,
					'isSendLog': true,
					'reportTimeInterval': _0x477618.reportTimeInterval,
					'sendLog': function (_0x45a7d7, _0x4b018d, _0x2298bb) {
						if (this.isSendLog !== true) {
							return;
						}
						var _0x3a2c1a = 0;
						switch (_0x4b018d) {
							case 'play':
								_0x3a2c1a = 3;
								break;
							case 'pause':
								_0x3a2c1a = 2;
								break;
							case 'ended':
								_0x3a2c1a = 4;
								break;
						}
						_0x46b79b(_0x45a7d7, _0x3a2c1a, _0x2298bb, function () {
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
	var _0x589762 = videojs.getPlugin('plugin'), _0x54965d = videojs.extend(_0x589762, {
		'constructor': function (_0x2f7fa9, _0x44eb20) {
			_0x589762.call(this, _0x2f7fa9, _0x44eb20);
			Ext.create('ans.videojs.AudioNote', {
				'renderTo': _0x2f7fa9.el_,
				'html': _0x44eb20.title
			});
		}
	});
	videojs.registerPlugin('audioNote', _0x54965d);
}());