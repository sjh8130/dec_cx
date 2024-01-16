Ext.define('ananas.ServerHosts', {
	'alternateClassName': 'ServerHosts',
	'singleton': true,
	'constructor': function () {
		var _0x16b574 = this;
		_0x16b574.callParent(arguments);
		var _0x4b0c81 = document.domain;
		try {
			_0x16b574.MASTER_HOST = location.protocol + '//' + top.location.host;
		} catch (_0x36ae85) {
			_0x16b574.MASTER_HOST = location.protocol + '//' + location.host;
		}
		try {
			_0x16b574.PARENT_HOST = parent.location.host !== '' ? location.protocol + '//' + parent.location.host : _0x16b574.MASTER_HOST;
		} catch (_0x49e0e3) {
			_0x16b574.PARENT_HOST = location.protocol + '//' + location.host;
		}
		_0x16b574.P_HOST = location.protocol + '//p.ananas.chaoxing.com';
		_0x16b574.s1_HOST = location.protocol + '//s1.ananas.chaoxing.com';
		_0x16b574.s2_HOST = location.protocol + '//s2.ananas.chaoxing.com';
		_0x16b574.CLOUD_HOST = 'http://cloud.ananas.' + _0x4b0c81;
		_0x16b574.NEW_CLOUD_HOST = location.protocol + '//pan-yz.chaoxing.com';
		_0x16b574.CS_HOST = location.protocol + '//cs.ananas.' + _0x4b0c81;
		_0x16b574.FANYA_HOST = 'http://course.fanya.' + _0x4b0c81;
		_0x16b574.PAN_HOST = 'http://pan.ananas.' + _0x4b0c81;
		_0x16b574.CXLIVE_HOST = 'http://cxlive.' + _0x4b0c81;
		_0x16b574.ERYA_TSK_HOST = 'http://erya.tsk.' + _0x4b0c81;
		_0x16b574.QUESTIONNAIRE_HOST = 'http://surveyapp.fy.' + _0x4b0c81;
		_0x16b574.FX_HOST = 'http://www.' + _0x4b0c81;
		_0x16b574.PHONE_ZT_HOST = 'https://special.rhky.com';
		_0x16b574.CHAOXING_CLASS_HOST = 'https://k.chaoxing.com';
		_0x16b574.LIVE_HOST = location.protocol + '//live.chaoxing.com';
		_0x16b574.APPCD_HOST = location.protocol + '//appcd.chaoxing.com';
		_0x16b574.ZHIBO_HOST = 'https://zhibo.chaoxing.com';
		_0x16b574.CXCLASSTASL_HOST = location.protocol + '//noteyd.chaoxing.com';
	}
});
(function (_0x239fcf) {
	function _0x3f4287(_0x116648, _0x17032a) {
		var _0x54582d = (_0x116648 & 65535) + (_0x17032a & 65535), _0x5d8dcb = (_0x116648 >> 16) + (_0x17032a >> 16) + (_0x54582d >> 16);
		return _0x5d8dcb << 16 | _0x54582d & 65535;
	}
	function _0x36337b(_0x34b2e8, _0x2f2cee) {
		return _0x34b2e8 << _0x2f2cee | _0x34b2e8 >>> 32 - _0x2f2cee;
	}
	function _0x570aae(_0x491f38, _0x3b6abd, _0xbab368, _0x28b5d8, _0x56f7e7, _0x5e4bba) {
		return _0x3f4287(_0x36337b(_0x3f4287(_0x3f4287(_0x3b6abd, _0x491f38), _0x3f4287(_0x28b5d8, _0x5e4bba)), _0x56f7e7), _0xbab368);
	}
	function _0x1a85fa(_0x22ba27, _0x524826, _0x3e0487, _0x51fe1b, _0x57aa93, _0x4ab039, _0x17bf65) {
		return _0x570aae(_0x524826 & _0x3e0487 | ~_0x524826 & _0x51fe1b, _0x22ba27, _0x524826, _0x57aa93, _0x4ab039, _0x17bf65);
	}
	function _0x1925f5(_0x1baf79, _0x50695d, _0x2c8f14, _0x5e825a, _0x41bb60, _0x24c5ae, _0x3a8f9e) {
		return _0x570aae(_0x50695d & _0x5e825a | _0x2c8f14 & ~_0x5e825a, _0x1baf79, _0x50695d, _0x41bb60, _0x24c5ae, _0x3a8f9e);
	}
	function _0xe0f75a(_0xab9556, _0x127685, _0x965f07, _0x34f816, _0xa4797f, _0xb319e1, _0x442615) {
		return _0x570aae(_0x127685 ^ _0x965f07 ^ _0x34f816, _0xab9556, _0x127685, _0xa4797f, _0xb319e1, _0x442615);
	}
	function _0x407ef0(_0x5d758b, _0x551669, _0x4bf299, _0x5854f4, _0x50241b, _0x2b4868, _0x23bedd) {
		return _0x570aae(_0x4bf299 ^ (_0x551669 | ~_0x5854f4), _0x5d758b, _0x551669, _0x50241b, _0x2b4868, _0x23bedd);
	}
	function _0x2e80a7(_0x59d1a2, _0x59efc7) {
		_0x59d1a2[_0x59efc7 >> 5] |= 128 << _0x59efc7 % 32;
		_0x59d1a2[(_0x59efc7 + 64 >>> 9 << 4) + 14] = _0x59efc7;
		var _0x616ae7, _0x1f4d1c, _0x158368, _0x2c4d80, _0x4b7391, _0x3a6fc7 = 1732584193, _0x5107fe = -271733879, _0xde48a1 = -1732584194, _0x440ec0 = 271733878;
		for (_0x616ae7 = 0; _0x616ae7 < _0x59d1a2.length; _0x616ae7 += 16) {
			_0x1f4d1c = _0x3a6fc7;
			_0x158368 = _0x5107fe;
			_0x2c4d80 = _0xde48a1;
			_0x4b7391 = _0x440ec0;
			_0x3a6fc7 = _0x1a85fa(_0x3a6fc7, _0x5107fe, _0xde48a1, _0x440ec0, _0x59d1a2[_0x616ae7], 7, -680876936);
			_0x440ec0 = _0x1a85fa(_0x440ec0, _0x3a6fc7, _0x5107fe, _0xde48a1, _0x59d1a2[_0x616ae7 + 1], 12, -389564586);
			_0xde48a1 = _0x1a85fa(_0xde48a1, _0x440ec0, _0x3a6fc7, _0x5107fe, _0x59d1a2[_0x616ae7 + 2], 17, 606105819);
			_0x5107fe = _0x1a85fa(_0x5107fe, _0xde48a1, _0x440ec0, _0x3a6fc7, _0x59d1a2[_0x616ae7 + 3], 22, -1044525330);
			_0x3a6fc7 = _0x1a85fa(_0x3a6fc7, _0x5107fe, _0xde48a1, _0x440ec0, _0x59d1a2[_0x616ae7 + 4], 7, -176418897);
			_0x440ec0 = _0x1a85fa(_0x440ec0, _0x3a6fc7, _0x5107fe, _0xde48a1, _0x59d1a2[_0x616ae7 + 5], 12, 1200080426);
			_0xde48a1 = _0x1a85fa(_0xde48a1, _0x440ec0, _0x3a6fc7, _0x5107fe, _0x59d1a2[_0x616ae7 + 6], 17, -1473231341);
			_0x5107fe = _0x1a85fa(_0x5107fe, _0xde48a1, _0x440ec0, _0x3a6fc7, _0x59d1a2[_0x616ae7 + 7], 22, -45705983);
			_0x3a6fc7 = _0x1a85fa(_0x3a6fc7, _0x5107fe, _0xde48a1, _0x440ec0, _0x59d1a2[_0x616ae7 + 8], 7, 1770035416);
			_0x440ec0 = _0x1a85fa(_0x440ec0, _0x3a6fc7, _0x5107fe, _0xde48a1, _0x59d1a2[_0x616ae7 + 9], 12, -1958414417);
			_0xde48a1 = _0x1a85fa(_0xde48a1, _0x440ec0, _0x3a6fc7, _0x5107fe, _0x59d1a2[_0x616ae7 + 10], 17, -42063);
			_0x5107fe = _0x1a85fa(_0x5107fe, _0xde48a1, _0x440ec0, _0x3a6fc7, _0x59d1a2[_0x616ae7 + 11], 22, -1990404162);
			_0x3a6fc7 = _0x1a85fa(_0x3a6fc7, _0x5107fe, _0xde48a1, _0x440ec0, _0x59d1a2[_0x616ae7 + 12], 7, 1804603682);
			_0x440ec0 = _0x1a85fa(_0x440ec0, _0x3a6fc7, _0x5107fe, _0xde48a1, _0x59d1a2[_0x616ae7 + 13], 12, -40341101);
			_0xde48a1 = _0x1a85fa(_0xde48a1, _0x440ec0, _0x3a6fc7, _0x5107fe, _0x59d1a2[_0x616ae7 + 14], 17, -1502002290);
			_0x5107fe = _0x1a85fa(_0x5107fe, _0xde48a1, _0x440ec0, _0x3a6fc7, _0x59d1a2[_0x616ae7 + 15], 22, 1236535329);
			_0x3a6fc7 = _0x1925f5(_0x3a6fc7, _0x5107fe, _0xde48a1, _0x440ec0, _0x59d1a2[_0x616ae7 + 1], 5, -165796510);
			_0x440ec0 = _0x1925f5(_0x440ec0, _0x3a6fc7, _0x5107fe, _0xde48a1, _0x59d1a2[_0x616ae7 + 6], 9, -1069501632);
			_0xde48a1 = _0x1925f5(_0xde48a1, _0x440ec0, _0x3a6fc7, _0x5107fe, _0x59d1a2[_0x616ae7 + 11], 14, 643717713);
			_0x5107fe = _0x1925f5(_0x5107fe, _0xde48a1, _0x440ec0, _0x3a6fc7, _0x59d1a2[_0x616ae7], 20, -373897302);
			_0x3a6fc7 = _0x1925f5(_0x3a6fc7, _0x5107fe, _0xde48a1, _0x440ec0, _0x59d1a2[_0x616ae7 + 5], 5, -701558691);
			_0x440ec0 = _0x1925f5(_0x440ec0, _0x3a6fc7, _0x5107fe, _0xde48a1, _0x59d1a2[_0x616ae7 + 10], 9, 38016083);
			_0xde48a1 = _0x1925f5(_0xde48a1, _0x440ec0, _0x3a6fc7, _0x5107fe, _0x59d1a2[_0x616ae7 + 15], 14, -660478335);
			_0x5107fe = _0x1925f5(_0x5107fe, _0xde48a1, _0x440ec0, _0x3a6fc7, _0x59d1a2[_0x616ae7 + 4], 20, -405537848);
			_0x3a6fc7 = _0x1925f5(_0x3a6fc7, _0x5107fe, _0xde48a1, _0x440ec0, _0x59d1a2[_0x616ae7 + 9], 5, 568446438);
			_0x440ec0 = _0x1925f5(_0x440ec0, _0x3a6fc7, _0x5107fe, _0xde48a1, _0x59d1a2[_0x616ae7 + 14], 9, -1019803690);
			_0xde48a1 = _0x1925f5(_0xde48a1, _0x440ec0, _0x3a6fc7, _0x5107fe, _0x59d1a2[_0x616ae7 + 3], 14, -187363961);
			_0x5107fe = _0x1925f5(_0x5107fe, _0xde48a1, _0x440ec0, _0x3a6fc7, _0x59d1a2[_0x616ae7 + 8], 20, 1163531501);
			_0x3a6fc7 = _0x1925f5(_0x3a6fc7, _0x5107fe, _0xde48a1, _0x440ec0, _0x59d1a2[_0x616ae7 + 13], 5, -1444681467);
			_0x440ec0 = _0x1925f5(_0x440ec0, _0x3a6fc7, _0x5107fe, _0xde48a1, _0x59d1a2[_0x616ae7 + 2], 9, -51403784);
			_0xde48a1 = _0x1925f5(_0xde48a1, _0x440ec0, _0x3a6fc7, _0x5107fe, _0x59d1a2[_0x616ae7 + 7], 14, 1735328473);
			_0x5107fe = _0x1925f5(_0x5107fe, _0xde48a1, _0x440ec0, _0x3a6fc7, _0x59d1a2[_0x616ae7 + 12], 20, -1926607734);
			_0x3a6fc7 = _0xe0f75a(_0x3a6fc7, _0x5107fe, _0xde48a1, _0x440ec0, _0x59d1a2[_0x616ae7 + 5], 4, -378558);
			_0x440ec0 = _0xe0f75a(_0x440ec0, _0x3a6fc7, _0x5107fe, _0xde48a1, _0x59d1a2[_0x616ae7 + 8], 11, -2022574463);
			_0xde48a1 = _0xe0f75a(_0xde48a1, _0x440ec0, _0x3a6fc7, _0x5107fe, _0x59d1a2[_0x616ae7 + 11], 16, 1839030562);
			_0x5107fe = _0xe0f75a(_0x5107fe, _0xde48a1, _0x440ec0, _0x3a6fc7, _0x59d1a2[_0x616ae7 + 14], 23, -35309556);
			_0x3a6fc7 = _0xe0f75a(_0x3a6fc7, _0x5107fe, _0xde48a1, _0x440ec0, _0x59d1a2[_0x616ae7 + 1], 4, -1530992060);
			_0x440ec0 = _0xe0f75a(_0x440ec0, _0x3a6fc7, _0x5107fe, _0xde48a1, _0x59d1a2[_0x616ae7 + 4], 11, 1272893353);
			_0xde48a1 = _0xe0f75a(_0xde48a1, _0x440ec0, _0x3a6fc7, _0x5107fe, _0x59d1a2[_0x616ae7 + 7], 16, -155497632);
			_0x5107fe = _0xe0f75a(_0x5107fe, _0xde48a1, _0x440ec0, _0x3a6fc7, _0x59d1a2[_0x616ae7 + 10], 23, -1094730640);
			_0x3a6fc7 = _0xe0f75a(_0x3a6fc7, _0x5107fe, _0xde48a1, _0x440ec0, _0x59d1a2[_0x616ae7 + 13], 4, 681279174);
			_0x440ec0 = _0xe0f75a(_0x440ec0, _0x3a6fc7, _0x5107fe, _0xde48a1, _0x59d1a2[_0x616ae7], 11, -358537222);
			_0xde48a1 = _0xe0f75a(_0xde48a1, _0x440ec0, _0x3a6fc7, _0x5107fe, _0x59d1a2[_0x616ae7 + 3], 16, -722521979);
			_0x5107fe = _0xe0f75a(_0x5107fe, _0xde48a1, _0x440ec0, _0x3a6fc7, _0x59d1a2[_0x616ae7 + 6], 23, 76029189);
			_0x3a6fc7 = _0xe0f75a(_0x3a6fc7, _0x5107fe, _0xde48a1, _0x440ec0, _0x59d1a2[_0x616ae7 + 9], 4, -640364487);
			_0x440ec0 = _0xe0f75a(_0x440ec0, _0x3a6fc7, _0x5107fe, _0xde48a1, _0x59d1a2[_0x616ae7 + 12], 11, -421815835);
			_0xde48a1 = _0xe0f75a(_0xde48a1, _0x440ec0, _0x3a6fc7, _0x5107fe, _0x59d1a2[_0x616ae7 + 15], 16, 530742520);
			_0x5107fe = _0xe0f75a(_0x5107fe, _0xde48a1, _0x440ec0, _0x3a6fc7, _0x59d1a2[_0x616ae7 + 2], 23, -995338651);
			_0x3a6fc7 = _0x407ef0(_0x3a6fc7, _0x5107fe, _0xde48a1, _0x440ec0, _0x59d1a2[_0x616ae7], 6, -198630844);
			_0x440ec0 = _0x407ef0(_0x440ec0, _0x3a6fc7, _0x5107fe, _0xde48a1, _0x59d1a2[_0x616ae7 + 7], 10, 1126891415);
			_0xde48a1 = _0x407ef0(_0xde48a1, _0x440ec0, _0x3a6fc7, _0x5107fe, _0x59d1a2[_0x616ae7 + 14], 15, -1416354905);
			_0x5107fe = _0x407ef0(_0x5107fe, _0xde48a1, _0x440ec0, _0x3a6fc7, _0x59d1a2[_0x616ae7 + 5], 21, -57434055);
			_0x3a6fc7 = _0x407ef0(_0x3a6fc7, _0x5107fe, _0xde48a1, _0x440ec0, _0x59d1a2[_0x616ae7 + 12], 6, 1700485571);
			_0x440ec0 = _0x407ef0(_0x440ec0, _0x3a6fc7, _0x5107fe, _0xde48a1, _0x59d1a2[_0x616ae7 + 3], 10, -1894986606);
			_0xde48a1 = _0x407ef0(_0xde48a1, _0x440ec0, _0x3a6fc7, _0x5107fe, _0x59d1a2[_0x616ae7 + 10], 15, -1051523);
			_0x5107fe = _0x407ef0(_0x5107fe, _0xde48a1, _0x440ec0, _0x3a6fc7, _0x59d1a2[_0x616ae7 + 1], 21, -2054922799);
			_0x3a6fc7 = _0x407ef0(_0x3a6fc7, _0x5107fe, _0xde48a1, _0x440ec0, _0x59d1a2[_0x616ae7 + 8], 6, 1873313359);
			_0x440ec0 = _0x407ef0(_0x440ec0, _0x3a6fc7, _0x5107fe, _0xde48a1, _0x59d1a2[_0x616ae7 + 15], 10, -30611744);
			_0xde48a1 = _0x407ef0(_0xde48a1, _0x440ec0, _0x3a6fc7, _0x5107fe, _0x59d1a2[_0x616ae7 + 6], 15, -1560198380);
			_0x5107fe = _0x407ef0(_0x5107fe, _0xde48a1, _0x440ec0, _0x3a6fc7, _0x59d1a2[_0x616ae7 + 13], 21, 1309151649);
			_0x3a6fc7 = _0x407ef0(_0x3a6fc7, _0x5107fe, _0xde48a1, _0x440ec0, _0x59d1a2[_0x616ae7 + 4], 6, -145523070);
			_0x440ec0 = _0x407ef0(_0x440ec0, _0x3a6fc7, _0x5107fe, _0xde48a1, _0x59d1a2[_0x616ae7 + 11], 10, -1120210379);
			_0xde48a1 = _0x407ef0(_0xde48a1, _0x440ec0, _0x3a6fc7, _0x5107fe, _0x59d1a2[_0x616ae7 + 2], 15, 718787259);
			_0x5107fe = _0x407ef0(_0x5107fe, _0xde48a1, _0x440ec0, _0x3a6fc7, _0x59d1a2[_0x616ae7 + 9], 21, -343485551);
			_0x3a6fc7 = _0x3f4287(_0x3a6fc7, _0x1f4d1c);
			_0x5107fe = _0x3f4287(_0x5107fe, _0x158368);
			_0xde48a1 = _0x3f4287(_0xde48a1, _0x2c4d80);
			_0x440ec0 = _0x3f4287(_0x440ec0, _0x4b7391);
		}
		return [
			_0x3a6fc7,
			_0x5107fe,
			_0xde48a1,
			_0x440ec0
		];
	}
	function _0x3d60a3(_0x4d56b5) {
		var _0x34a5e6, _0x3ea139 = '', _0x40a243 = _0x4d56b5.length * 32;
		for (_0x34a5e6 = 0; _0x34a5e6 < _0x40a243; _0x34a5e6 += 8) {
			_0x3ea139 += String.fromCharCode(_0x4d56b5[_0x34a5e6 >> 5] >>> _0x34a5e6 % 32 & 255);
		}
		return _0x3ea139;
	}
	function _0x731b10(_0x203def) {
		var _0x4a1677, _0x29d42d = [];
		_0x29d42d[(_0x203def.length >> 2) - 1] = undefined;
		for (_0x4a1677 = 0; _0x4a1677 < _0x29d42d.length; _0x4a1677 += 1) {
			_0x29d42d[_0x4a1677] = 0;
		}
		var _0x208199 = _0x203def.length * 8;
		for (_0x4a1677 = 0; _0x4a1677 < _0x208199; _0x4a1677 += 8) {
			_0x29d42d[_0x4a1677 >> 5] |= (_0x203def.charCodeAt(_0x4a1677 / 8) & 255) << _0x4a1677 % 32;
		}
		return _0x29d42d;
	}
	function _0x2befba(_0x295b09) {
		return _0x3d60a3(_0x2e80a7(_0x731b10(_0x295b09), _0x295b09.length * 8));
	}
	function _0x230c32(_0x4ae14a, _0x3d7d62) {
		var _0x22e2ed, _0x3466a6 = _0x731b10(_0x4ae14a), _0x423b1b = [], _0xad7c2c = [], _0x51b557;
		_0x423b1b[15] = _0xad7c2c[15] = undefined;
		_0x3466a6.length > 16 && (_0x3466a6 = _0x2e80a7(_0x3466a6, _0x4ae14a.length * 8));
		for (_0x22e2ed = 0; _0x22e2ed < 16; _0x22e2ed += 1) {
			_0x423b1b[_0x22e2ed] = _0x3466a6[_0x22e2ed] ^ 909522486;
			_0xad7c2c[_0x22e2ed] = _0x3466a6[_0x22e2ed] ^ 1549556828;
		}
		return _0x51b557 = _0x2e80a7(_0x423b1b.concat(_0x731b10(_0x3d7d62)), 512 + _0x3d7d62.length * 8), _0x3d60a3(_0x2e80a7(_0xad7c2c.concat(_0x51b557), 640));
	}
	function _0x2c75ee(_0x10e93b) {
		var _0x173c9d = '', _0x38c9da, _0x355fe9;
		for (_0x355fe9 = 0; _0x355fe9 < _0x10e93b.length; _0x355fe9 += 1) {
			_0x38c9da = _0x10e93b.charCodeAt(_0x355fe9);
			_0x173c9d += '0123456789abcdef'.charAt(_0x38c9da >>> 4 & 15) + '0123456789abcdef'.charAt(_0x38c9da & 15);
		}
		return _0x173c9d;
	}
	function _0x44c7d9(_0x3607f7) {
		return unescape(encodeURIComponent(_0x3607f7));
	}
	function _0x4c091d(_0x545c4a) {
		return _0x2befba(_0x44c7d9(_0x545c4a));
	}
	function _0x58eb36(_0x1380a3) {
		return _0x2c75ee(_0x4c091d(_0x1380a3));
	}
	function _0x55987f(_0x1b3d75, _0x2e9623) {
		return _0x230c32(_0x44c7d9(_0x1b3d75), _0x44c7d9(_0x2e9623));
	}
	function _0x1d5dfc(_0x322237, _0x161cbd) {
		return _0x2c75ee(_0x55987f(_0x322237, _0x161cbd));
	}
	function _0x3ff718(_0x536ff6, _0x2900b4, _0x565cdb) {
		if (!_0x2900b4) {
			if (!_0x565cdb) {
				return _0x58eb36(_0x536ff6);
			}
			return _0x4c091d(_0x536ff6);
		}
		if (!_0x565cdb) {
			return _0x1d5dfc(_0x2900b4, _0x536ff6);
		}
		return _0x55987f(_0x2900b4, _0x536ff6);
	}
	typeof define === 'function' && define.amd ? define(function () {
		return _0x3ff718;
	}) : typeof module === 'object' && module.exports ? module.exports = _0x3ff718 : _0x239fcf.md5 = _0x3ff718;
}(this));
Ext.apply(Ext, {
	'setCookie': function (_0x4f3956, _0x21ee4b) {
		var _0x16f386 = arguments, _0x24c2f0 = arguments.length, _0x467041 = _0x24c2f0 > 2 ? _0x16f386[2] : null, _0x4e5e18 = _0x24c2f0 > 3 ? _0x16f386[3] : '/', _0x20d1cd = _0x24c2f0 > 4 ? _0x16f386[4] : null, _0x3329bc = _0x24c2f0 > 5 ? _0x16f386[5] : false;
		document.cookie = _0x4f3956 + '=' + escape(_0x21ee4b) + (_0x467041 === null ? '' : '; expires=' + _0x467041.toGMTString()) + (_0x4e5e18 === null ? '' : '; path=' + _0x4e5e18) + (_0x20d1cd === null ? '' : '; domain=' + _0x20d1cd) + (_0x3329bc === true ? '; secure' : '');
	},
	'getCookie': function (_0xe8919d, _0x2e755c) {
		var _0x52c2d5 = _0xe8919d + '=', _0x4ff95e = _0x52c2d5.length, _0xba5fc2 = document.cookie.length, _0xce197a = 0, _0x300dde = 0;
		while (_0xce197a < _0xba5fc2) {
			_0x300dde = _0xce197a + _0x4ff95e;
			if (document.cookie.substring(_0xce197a, _0x300dde) == _0x52c2d5) {
				return this.getCookieVal(_0x300dde);
			}
			_0xce197a = document.cookie.indexOf(' ', _0xce197a) + 1;
			if (_0xce197a === 0) {
				break;
			}
		}
		return _0x2e755c;
	},
	'getCookieVal': function (_0x5d2673) {
		var _0x185f21 = document.cookie.indexOf(';', _0x5d2673);
		return _0x185f21 == -1 && (_0x185f21 = document.cookie.length), unescape(document.cookie.substring(_0x5d2673, _0x185f21));
	}
});
Ext.define('ans.VideoJs', {
	'videoJs': null,
	'mixins': { 'observable': 'Ext.util.Observable' },
	'constructor': function (_0x4bb4cb) {
		_0x4bb4cb = _0x4bb4cb || {};
		var _0x27a6a4 = this;
		_0x27a6a4.addEvents(['seekstart']);
		_0x27a6a4.mixins.observable.constructor.call(_0x27a6a4, _0x4bb4cb);
		var _0x164112 = videojs(_0x4bb4cb.videojs, _0x27a6a4.params2VideoOpt(_0x4bb4cb.params), function () {
		});
		Ext.fly(_0x4bb4cb.videojs).on('contextmenu', function (_0x40ef0f) {
			_0x40ef0f.preventDefault();
		});
		$('.video-js').attr('tabindex', 1);
		$('.vjs-big-play-button').on('click', function (_0x280149) {
			$('.video-js').focus();
		});
		Ext.fly(_0x4bb4cb.videojs).on('keydown', function (_0x5c8dca) {
			(_0x5c8dca.keyCode == 32 || _0x5c8dca.keyCode == 37 || _0x5c8dca.keyCode == 39 || _0x5c8dca.keyCode == 107) && _0x5c8dca.preventDefault();
			_0x5c8dca.keyCode == 32 && (_0x164112.paused() ? _0x164112.play() : _0x164112.pause());
		});
		_0x164112.videoJsResolutionSwitcher && _0x164112.on('resolutionchange', function () {
			var _0x1db45b = _0x164112.currentResolution(), _0x2f17aa = _0x1db45b.sources ? _0x1db45b.sources[0].res : false;
			Ext.setCookie('resolution', _0x2f17aa);
		});
		var _0x17782b = _0x4bb4cb.params && _0x4bb4cb.params.doublespeed ? 2 : 1;
		_0x164112.on('ratechange', function () {
			var _0x4a13ef = _0x164112.playbackRate();
			_0x4a13ef > _0x17782b ? (_0x164112.pause(), _0x164112.playbackRate(1)) : Ext.setCookie('doubleSpeedValue', _0x4a13ef);
		});
		_0x164112.on('play', function () {
			try {
				$('.video-js').focus();
				if (_0x4bb4cb.params && _0x4bb4cb.params.doublespeed && parseInt(_0x4bb4cb.params.doublespeed) === 1) {
					var _0x3e68a9 = Ext.getCookie('doubleSpeedValue', 1);
					_0x164112.playbackRate(_0x3e68a9);
				}
			} catch (_0x148fa3) {
				console.log(_0x148fa3);
			}
		});
		_0x164112.on('ended', function () {
			try {
				_0x4bb4cb.params.enableFastForward = 1;
				_0x164112.finished = true;
				_0x164112.disableSeek(false);
				$('.vjs-progress-control').unbind('click');
			} catch (_0x5bd6ff) {
				console.log(_0x5bd6ff);
			}
		});
	},
	'params2VideoOpt': function (_0x57e6bd) {
		var _0x40e93e = typeof _0x57e6bd.cpi == 'undefined' ? 0 : _0x57e6bd.cpi, _0x5d26cb = false, _0x329023 = [
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
		if (_0x57e6bd.cdn) {
			try {
				top.window.app && top.window.app == 2 ? _0x329023 = _0x329023.concat(_0x57e6bd.cdn) : _0x329023 = _0x329023.concat(_0x57e6bd.cdn).sort(function (_0x325926, _0x2d1925) {
					return _0x325926.indexorder - _0x2d1925.indexorder;
				});
			} catch (_0x2a9a63) {
				_0x329023 = _0x329023.concat(_0x57e6bd.cdn);
			}
		}
		function _0x42aed9(_0x36a6df, _0x47e2ec, _0x2fa34e) {
			return 'http://hls-ans.chaoxing.com/hls/m3u8/' + _0x36a6df + '/' + _0x47e2ec + '.m3u8?cdn=' + encodeURIComponent(_0x2fa34e);
		}
		function _0x375179(_0x450822, _0x34e998) {
			var _0x398792 = ServerHosts.s1_HOST.replace('http:/', '').replace('https:/', ''), _0x270546 = 0;
			_0x450822.src.indexOf(_0x398792) > -1 && (_0x270546 = _0x450822.src.indexOf(_0x398792) + _0x398792.length);
			var _0x33c245 = _0x450822.src.substr(_0x270546);
			if (_0x34e998.ispublic && _0x270546 == 0) {
				return {
					'src': _0x33c245,
					'type': 'video/mp4',
					'res': _0x450822.res
				};
			}
			return _0x34e998.ispublic ? _0x5d26cb ? {
				'src': _0x42aed9(_0x57e6bd.objectId, _0x450822.resolution, _0x34e998.url),
				'type': 'application/x-mpegURL',
				'res': _0x450822.res
			} : {
				'src': _0x34e998.url + _0x33c245,
				'type': 'video/mp4',
				'res': _0x450822.res
			} : _0x5d26cb ? {
				'src': _0x42aed9(_0x57e6bd.objectId, _0x450822.resolution, _0x34e998.url + _0x398792),
				'type': 'application/x-mpegURL',
				'res': _0x450822.res
			} : {
				'src': _0x34e998.url + _0x398792 + _0x33c245,
				'type': 'video/mp4',
				'res': _0x450822.res
			};
		}
		var _0x2b37bd = [], _0x3fb3dd = Ext.getCookie('resolution', 360);
		!_0x57e6bd.rootPath && (_0x57e6bd.rootPath = '');
		_0x57e6bd.http && _0x2b37bd.push({
			'src': _0x57e6bd.http,
			'type': 'video/mp4',
			'label': '标清',
			'resolution': 'sd',
			'res': 360
		});
		_0x57e6bd.httphd && _0x2b37bd.push({
			'src': _0x57e6bd.httphd,
			'type': 'video/mp4',
			'label': '高清',
			'resolution': 'hd',
			'res': 720
		});
		_0x57e6bd.httpshd && _0x2b37bd.push({
			'src': _0x57e6bd.httpshd,
			'type': 'video/mp4',
			'label': '超高清',
			'resolution': 'shd',
			'res': 1080
		});
		_0x57e6bd.httpmd && _0x2b37bd.push({
			'src': _0x57e6bd.httpmd,
			'type': 'video/mp4',
			'label': '极速',
			'resolution': 'md',
			'res': 240
		});
		if (_0x2b37bd.length == 1) {
			var _0x404d16 = _0x2b37bd[0];
			_0x404d16.label = '高清';
		}
		var _0x246476 = false;
		for (var _0xf229ac = 0; _0xf229ac < _0x2b37bd.length; _0xf229ac++) {
			if (_0x2b37bd[_0xf229ac].res == _0x3fb3dd) {
				_0x246476 = true;
				break;
			}
		}
		!_0x246476 && (_0x3fb3dd = 360);
		var _0x1ab89e = !Ext.isChaoxing && (Ext.isIos || Ext.isAndroid), _0x4ee139 = function (_0x54c8bc, _0x520a56, _0x1a8d89) {
			try {
				if (typeof top.hasJobLimit != 'undefined' && top.hasJobLimit === true && isUnFinishJob()) {
					return;
				}
				if (typeof top.videoTimeLimit != 'undefined' && top.videoTimeLimit === true && isUnFinishJob()) {
					return;
				}
			} catch (_0x31a627) {
				console.log(_0x31a627);
			}
			if (_0x1ab89e) {
				return;
			}
			var _0x50a963 = this;
			!_0x50a963.logCount && (_0x50a963.logCount = 0);
			videojs.xhr({
				'uri': _0x520a56,
				'headers': { 'Content-Type': 'application/json' }
			}, function (_0x261392, _0x97901f) {
				_0x50a963.logCount++;
				if (_0x97901f.statusCode == 200) {
					_0x50a963.logCount = 0;
					if (_0x97901f.body.indexOf('isPassed') < 0) {
						window.parent && window.parent.location.reload();
						return;
					}
					eval('var d=' + _0x97901f.body);
					if (d.isPassed) {
						try {
							typeof d.hasJobLimit != 'undefined' && d.hasJobLimit === true && (top.allowNextVideo = false, top.hasJobLimit = true);
							typeof d.videoTimeLimit != 'undefined' && d.videoTimeLimit === true && (top.allowNextVideo = false, top.videoTimeLimit = true);
						} catch (_0x1712df) {
							console.log(_0x1712df);
						}
						_0x1a8d89();
					}
					return;
				}
				if (_0x50a963.logCount >= 4) {
					_0x50a963.logCount = 0;
					_0x54c8bc.pause();
					if (_0x97901f.statusCode != 0) {
						if (_0x97901f.statusCode == 202 || _0x97901f.statusCode == 302) {
							try {
								parent.location.reload();
							} catch (_0x5d6e01) {
								console.log(_0x5d6e01.message);
							}
						} else {
							alert('服务繁忙\uFF0C不能保证您能否正常完成任务\uFF0C请您稍后继续...(e: ' + _0x97901f.statusCode + ')');
						}
					} else {
						alert('您的网络不稳定\uFF0C请您稍后继续...');
					}
				}
			});
		}, _0x2f4fc0 = function (_0x4d4841, _0x34136e, _0x130715, _0x559534) {
			if (!_0x57e6bd.reportUrl) {
				return;
			}
			if (_0x57e6bd.isFiled == 1 || _0x57e6bd.state == 1) {
				return;
			}
			var _0xd2540 = '[{0}][{1}][{2}][{3}][{4}][{5}][{6}][{7}]', _0x20fd1f = (_0x57e6bd.startTime || '0') + '_' + (_0x57e6bd.endTime || _0x57e6bd.duration), _0xd38c05 = 0, _0x1c0de0;
			_0x130715.toString().indexOf('-') != -1 ? (_0x1c0de0 = _0x130715.split('-'), _0x1c0de0.length == 2 && (_0xd38c05 = parseInt(_0x1c0de0[1]) * 1000)) : _0xd38c05 = _0x130715 * 1000;
			if (_0xd38c05 == _0x57e6bd.duration * 1000 && _0x34136e == 2) {
				return;
			}
			var _0x4444b1 = Ext.String.format(_0xd2540, _0x57e6bd.clazzId, _0x57e6bd.userid, _0x57e6bd.jobid || '', _0x57e6bd.objectId, _0xd38c05, 'd_yHJ!$pdA~5', _0x57e6bd.duration * 1000, _0x20fd1f), _0x484b5d = [
				_0x57e6bd.reportUrl,
				'/',
				_0x57e6bd.dtoken,
				'?clazzId=',
				_0x57e6bd.clazzId,
				'&playingTime=',
				_0x130715,
				'&duration=',
				_0x57e6bd.duration,
				'&clipTime=',
				_0x20fd1f,
				'&objectId=',
				_0x57e6bd.objectId,
				'&otherInfo=',
				_0x57e6bd.otherInfo,
				'&jobid=',
				_0x57e6bd.jobid,
				'&userid=',
				_0x57e6bd.userid,
				'&isdrag=',
				_0x34136e,
				'&view=pc',
				'&enc=',
				md5(_0x4444b1),
				'&rt=',
				_0x57e6bd.rt,
				'&dtype=Video',
				'&_t=',
				new Date().getTime()
			].join('');
			_0x4ee139(_0x4d4841, _0x484b5d, _0x559534);
		};
		return {
			'language': 'zh-CN',
			'poster': _0x57e6bd.screenshot,
			'controls': true,
			'preload': 'none',
			'sources': _0x2b37bd,
			'playlines': _0x329023,
			'playbackRates': _0x57e6bd.doublespeed != 0 ? [
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
					'default': _0x3fb3dd,
					'dynamicLabel': true,
					'customSourcePicker': function (_0x2b0640, _0x3358d8, _0x323f87) {
						var _0x1a91e3 = _0x2b0640.currentPlayline();
						return _0x2b0640.src(_0x3358d8.map(function (_0x348b3c) {
							return _0x375179(_0x348b3c, _0x1a91e3);
						})), _0x2b0640;
					}
				},
				'videoJsPlayLine': {
					'dynamicLabel': true,
					'customSourcePicker': function (_0x49a8d6, _0x1d82d4, _0x31049c) {
						var _0x2586cf = _0x49a8d6.currentResolution().sources[0];
						return _0x49a8d6.src(_0x375179(_0x2586cf, _0x1d82d4)), _0x49a8d6;
					}
				},
				'studyControl': { 'enableSwitchWindow': _0x57e6bd.enableSwitchWindow },
				'seekBarControl': {
					'headOffset': _0x57e6bd.headOffset,
					'enableFastForward': _0x57e6bd.enableFastForward,
					'isSendLog': !!parent.AttachmentSetting && _0x57e6bd.control,
					'reportTimeInterval': _0x57e6bd.reportTimeInterval,
					'isShowDanmu': _0x57e6bd.danmaku,
					'chapterCapture': _0x57e6bd.chapterCapture || 0,
					'captureInterval': _0x57e6bd.captureInterval || 600,
					'chapterCollectionType': _0x57e6bd.chapterCollectionType || 0,
					'startCapture': _0x57e6bd.startCapture,
					'endCapture': _0x57e6bd.endCapture,
					'playAginCapture': _0x57e6bd.playAginCapture,
					'playingCapture': _0x57e6bd.playingCapture,
					'playingLoopCapture': _0x57e6bd.playingLoopCapture,
					'duration': _0x57e6bd.duration,
					'isSupportFace': _0x57e6bd.isSupportFace || false,
					'isShowFaceCollection': _0x57e6bd.isShowFaceCollection,
					'jumpTimePointList': _0x57e6bd.jumpTimePointList,
					'attachmentId': _0x57e6bd.aId,
					'sendLog': function (_0x454af0, _0x1b20ec, _0x11aab3, _0x5c56bb) {
						if (this.isSendLog !== true) {
							return;
						}
						var _0x561c8b = 0;
						switch (_0x1b20ec) {
							case 'playing':
								_0x561c8b = 0;
								break;
							case 'drag':
								_0x561c8b = 1;
								break;
							case 'play':
								_0x561c8b = 3;
								break;
							case 'pause':
								_0x561c8b = 2;
								break;
							case 'ended':
								_0x561c8b = 4;
								break;
						}
						var _0x3cb644 = this;
						_0x2f4fc0(_0x454af0, _0x561c8b, _0x11aab3, function () {
							try {
								_0x561c8b === 4 && typeof _0x5c56bb != 'undefined' && (_0x5c56bb.sendDataLog('ended'), _0x5c56bb.playNextVideo(_0x3cb644.attachmentId));
							} catch (_0x4243f0) {
								console.log(_0x4243f0);
							}
							window.proxy_completed && window.proxy_completed();
						});
					}
				},
				'timelineObjects': {
					'begins': _0x57e6bd.begins,
					'ends': _0x57e6bd.ends,
					'url': _0x57e6bd.rootPath + '/richvideo/initdatawithviewerV2?mid=' + _0x57e6bd.mid + '&cpi=' + _0x57e6bd.cpi + '&classid=' + _0x57e6bd.clazzId,
					'quizErrorReportUrl': _0x57e6bd.rootPath + '/question/addquestionerror?classid=' + _0x57e6bd.clazzId + '&cpi=' + _0x57e6bd.cpi,
					'validationUrl2': _0x57e6bd.rootPath + '/question/quiz-validation?classid=' + _0x57e6bd.clazzId + '&cpi=' + _0x40e93e + '&objectid=' + _0x57e6bd.objectId,
					'quizRightCountUrl': _0x57e6bd.rootPath + '/question/quiz-rightcount?classid=' + _0x57e6bd.clazzId + '&cpi=' + _0x40e93e
				},
				'subtitle': {
					'translate': _0x57e6bd.chapterVideoTranslate,
					'subtitleUrl': _0x57e6bd.rootPath + '/richvideo/allsubtitle?mid=' + _0x57e6bd.mid + '&objectid=' + _0x57e6bd.objectId + '&courseid=' + _0x57e6bd.courseid,
					'subtitle': _0x57e6bd.rootPath + '/ananas/video-editor/sub?objectid=' + _0x57e6bd.subobjectid
				},
				'marker': {
					'url': !_0x57e6bd.isNotMark ? _0x57e6bd.rootPath + '/ananas/getpoints?courseid=' + _0x57e6bd.courseid + '&mid=' + _0x57e6bd.mid : '',
					'ff': _0x57e6bd.enableFastForward,
					'videoTopicCloud': _0x57e6bd.videoTopicCloud
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
	var _0x197575 = videojs.getPlugin('plugin'), _0xa1454e = videojs.extend(_0x197575, {
		'constructor': function (_0x4ad8dd, _0x8d59c2) {
			_0x197575.call(this, _0x4ad8dd, _0x8d59c2);
			var _0x469639 = this, _0x40d3d3 = _0x8d59c2.mouseElTarget, _0x1d9b30 = 1;
			_0x8d59c2.enableSwitchWindow !== 1 && (_0x1d9b30 = 0);
			if (!_0x40d3d3) {
				try {
					_0x40d3d3 = window.top ? window.top : window.document;
				} catch (_0xa2f1cb) {
					_0x40d3d3 = window.parent ? window.parent : window.document;
				}
			}
			Ext.fly(_0x40d3d3).on('mouseout', function (_0x48ac65) {
				_0x48ac65 = _0x48ac65 ? _0x48ac65 : window.event;
				var _0x3d3162 = _0x48ac65.relatedTarget || _0x48ac65.toElement;
				!_0x3d3162 && (_0x1d9b30 != 1 && _0x4ad8dd.pause());
			});
			_0x469639.singleton(_0x4ad8dd);
		},
		'singleton': function (_0x389eaa) {
			var _0x36abd9 = this, _0x4705df = parseInt(Math.random() * 9999999);
			_0x389eaa.on('play', function () {
				Ext.setCookie('videojs_id', _0x4705df);
			});
			_0x389eaa.setInterval(function () {
				var _0x10de2b = Ext.getCookie('videojs_id');
				typeof _0x10de2b != 'undefined' && _0x10de2b != _0x4705df && _0x389eaa.pause();
			}, 1000);
		}
	});
	videojs.registerPlugin('studyControl', _0xa1454e);
}());
(function () {
	var _0xd2349f = videojs.getComponent('SeekBar'), _0xc8c4c6 = videojs.extend(_0xd2349f, {
		'constructor': function (_0x2961ca, _0x15cb7b) {
			_0xd2349f.call(this, _0x2961ca, _0x15cb7b);
			var _0x25444a = this;
			_0x2961ca.ignorePause = false;
			_0x2961ca.disableSeek = function (_0x4a007f) {
				_0x25444a.disableSeek(_0x4a007f);
			};
			_0x2961ca.onlyBackward = function (_0x4b1c4e) {
				_0x25444a.onlyBackward(_0x4b1c4e);
			};
			_0x2961ca.getSeekBar = function () {
				return _0x25444a;
			};
			_0x25444a.on('slideractive', function () {
				_0x2961ca.trigger('seekstart');
				_0x2961ca.ignorePause = true;
				_0x2961ca.ignorePlay = true;
				_0x2961ca.ignoreSeek = false;
			});
			_0x25444a.on('sliderinactive', function () {
				_0x2961ca.trigger('seekend');
				_0x2961ca.ignoreSeek = false;
			});
			_0x25444a.maxPercent = 0;
			_0x2961ca.on('timeupdate', function () {
				_0x25444a.maxPercent = Math.max(_0x25444a.getPercent(), _0x25444a.maxPercent);
			});
		},
		'getCurrentTime_': function () {
			return this.player_.currentTime();
		},
		'getMaxPercent': function () {
			return this.maxPercent;
		},
		'isBackward': function (_0x3e6efc) {
			return this.maxPercent > this.calculateDistance(_0x3e6efc);
		},
		'handleMouseDown': function (_0x34f0cb) {
			if (this['_onlyBackward']) {
				if (!this.isBackward(_0x34f0cb)) {
					return;
				}
			}
			if (this['_disableSeek'] === true) {
				return;
			}
			_0xd2349f.prototype.handleMouseDown.call(this, _0x34f0cb);
		},
		'handleMouseMove': function (_0x46ebf3) {
			if (this['_disableSeek'] === true) {
				return;
			}
			if (this['_onlyBackward']) {
				if (!this.isBackward(_0x46ebf3)) {
					return;
				}
			}
			_0xd2349f.prototype.handleMouseMove.call(this, _0x46ebf3);
		},
		'handleMouseUp': function (_0x1714df) {
			if (this['_disableSeek'] === true) {
				return;
			}
			if (this['_onlyBackward']) {
				if (!this.isBackward(_0x1714df)) {
					return;
				}
			}
			_0xd2349f.prototype.handleMouseUp.call(this, _0x1714df);
		},
		'disableSeek': function (_0x59f05c) {
			var _0x42967b = this;
			_0x42967b['_disableSeek'] = _0x59f05c !== false;
			_0x42967b['_disableSeek'] ? _0x42967b.disable() : _0x42967b.enable();
		},
		'onlyBackward': function (_0x51ea24) {
			var _0x3b1f3e = this;
			_0x3b1f3e['_onlyBackward'] = _0x51ea24 !== false;
		}
	});
	videojs.registerComponent('SeekBar', _0xc8c4c6);
}());
(function () {
	var _0x56345d = videojs.getPlugin('plugin'), _0x1a212b = videojs.extend(_0x56345d, {
		'constructor': function (_0x5513d7, _0x2ff354) {
			_0x56345d.call(this, _0x5513d7, _0x2ff354);
			var _0x41beca = this;
			_0x41beca.firstClick = true;
			_0x41beca.isSendLog_ = !!_0x2ff354.isSendLog;
			_0x41beca.isShowDanmu_ = !!_0x2ff354.isShowDanmu;
			_0x41beca.damuLastGetTime = 0;
			_0x41beca.firstPlay = true;
			_0x41beca.firstPlayFace = true;
			_0x41beca.pausePlayFace = false;
			_0x41beca.playingFace = false;
			_0x41beca.playingFaceTime = 0;
			_0x41beca.chapterCapture = _0x2ff354.chapterCapture || 0;
			_0x41beca.captureInterval = _0x2ff354.captureInterval * 60 || 600;
			_0x41beca.chapterCollectionType = _0x2ff354.chapterCollectionType || 0;
			_0x41beca.isSupportFace = _0x2ff354.isSupportFace;
			_0x41beca.isAlertTip = false;
			_0x41beca.startCapture = _0x2ff354.startCapture;
			_0x41beca.endCapture = _0x2ff354.endCapture;
			_0x41beca.playAginCapture = _0x2ff354.playAginCapture;
			_0x41beca.playingCapture = _0x2ff354.playingCapture;
			_0x41beca.playingLoopCapture = _0x2ff354.playingLoopCapture;
			_0x41beca.isShowFaceCollection = _0x2ff354.isShowFaceCollection;
			_0x41beca.duration = _0x2ff354.duration;
			_0x41beca.jumpTimePointList = _0x2ff354.jumpTimePointList;
			_0x41beca.loopCaptureInterval = Math.floor(Math.random() * (parseInt(_0x41beca.duration) - 0) + 1);
			_0x41beca.attachmentId = _0x2ff354.attachmentId;
			_0x5513d7.on('ready', function () {
				_0x2ff354.enableFastForward != 1 && _0x5513d7.disableSeek();
			});
			!_0x2ff354.sendLog && (_0x2ff354.sendLog = function () {
			});
			_0x2ff354.headOffset && _0x5513d7.currentTime(_0x2ff354.headOffset);
			var _0x29269d = 0, _0xd876b1 = 0, _0x242c82 = _0x2ff354.reportTimeInterval || 60, _0x560ace = _0x242c82 * 1000, _0x5e776a = function (_0x56ca53, _0x11ab45, _0x15b551) {
				var _0x40a9d5 = $('.vjs-tip2');
				_0x40a9d5.find('.vjs-tip-inner2').text(_0x15b551);
				_0x40a9d5.css({
					'left': _0x56ca53 / _0x11ab45.duration() * 100 + '%',
					'margin-left': -parseFloat(_0x40a9d5.width()) / 2 - 5 + 'px',
					'visibility': 'visible'
				});
				$('.vjs-default-skin').removeClass('vjs-user-inactive');
				$('.vjs-default-skin').addClass('vjs-user-active');
				setTimeout(function () {
					_0x40a9d5.css('visibility', 'hidden');
				}, 2000);
			}, _0x2516c1 = function (_0x34923a, _0x28c8f7, _0x4340a4) {
				if (!_0x41beca.isSendLog_) {
					return;
				}
				var _0x195258 = _0x41beca.now_() - _0x29269d;
				(_0x195258 > _0x560ace || _0x28c8f7 === true) && (typeof _0x4340a4 != 'undefined' ? _0x2ff354.sendLog(_0x5513d7, _0x34923a, _0x4340a4, _0x41beca) : _0x2ff354.sendLog(_0x5513d7, _0x34923a, _0x41beca.sec_(_0x5513d7), _0x41beca), _0x29269d = _0x41beca.now_());
			}, _0x122fbd = function (_0x203c04) {
				return _0x203c04 && _0x203c04.sort && _0x203c04.sort(function (_0x3048de, _0x11df5f) {
					return parseInt(_0x3048de) - parseInt(_0x11df5f);
				});
			}, _0x6bd475 = function (_0x4f2ed5) {
				try {
					var _0x3ea652 = _0x4f2ed5.otherPointTimes;
					if (_0x3ea652.length === 0) {
						return -1;
					}
					return _0x3ea652 = _0x122fbd(_0x3ea652), _0x3ea652[0];
				} catch (_0x1b263f) {
					console.log(_0x1b263f);
				}
				return -1;
			}, _0x5ed0eb = function (_0x1ccfcf) {
				try {
					var _0x1f281e = _0x1ccfcf.otherPointTimes, _0x1b28bf = _0x1f281e.length;
					if (_0x1b28bf === 0) {
						return -1;
					}
					return _0x1f281e = _0x122fbd(_0x1f281e), _0x1f281e[_0x1b28bf - 1];
				} catch (_0x3b5be4) {
					console.log(_0x3b5be4);
				}
				return -1;
			}, _0x48a5e4 = function (_0x5a4504, _0x53174c) {
				try {
					if (!_0x5a4504.paused()) {
						var _0x21eb81 = _0x5a4504.currentTime(), _0x5470fb = 0;
						_0x5a4504.eventPoints.forEach(function (_0xc771eb) {
							_0xc771eb.text == '片头' && (_0x5470fb = _0xc771eb.time);
						});
						if (_0x53174c.headOffset > 0 && _0x53174c.headOffset < _0x5470fb) {
							return;
						}
						if (_0x5470fb > 0 && parseInt(_0x21eb81) === 0) {
							var _0x170ad1 = parseInt(_0x6bd475(_0x5a4504));
							if (_0x170ad1 >= 0 && _0x5470fb > _0x170ad1) {
								return;
							}
							_0x5a4504.ignoreSeek = false;
							_0x5a4504.switchStatus = true;
							_0x5a4504.currentTime(_0x5470fb);
							_0x5e776a(_0x5470fb, _0x5a4504, '已跳过片头');
						}
					}
				} catch (_0xb2705d) {
					console.log(_0xb2705d);
				}
				try {
					var _0x5aa97b = 0;
					if (!_0x5a4504.paused()) {
						var _0x21eb81 = _0x5a4504.currentTime();
						_0x5a4504.eventPoints.forEach(function (_0x4ce58e) {
							_0x4ce58e.text == '片尾' && (_0x5aa97b = _0x4ce58e.time);
						});
						if (_0x53174c.headOffset > _0x5aa97b) {
							return;
						}
						var _0x52d962 = parseInt(_0x21eb81);
						if (_0x5aa97b > 0 && _0x52d962 === _0x5aa97b) {
							var _0x37781e = parseInt(_0x5ed0eb(_0x5a4504));
							if (_0x37781e >= 0 && _0x5aa97b < _0x37781e) {
								return;
							}
							_0x5a4504.ignoreSeek = false;
							_0x5a4504.switchStatus = true;
							_0x5a4504.currentTime(_0x53174c.duration);
							_0x5e776a(_0x52d962, _0x5a4504, '已跳过片尾');
						}
					}
				} catch (_0x1e3365) {
					console.log(_0x1e3365);
				}
			};
			_0x5513d7.on('play', function () {
				try {
					top.configFullScreen && reSizeVideoWindow();
				} catch (_0x1bb0a1) {
					console.log(_0x1bb0a1);
				}
				try {
					if (typeof top.hasJobLimit != 'undefined' && top.hasJobLimit === true && _0x41beca.firstClick && isUnFinishJob()) {
						_0x41beca.firstClick = false;
						_0x5513d7.pause();
						checkJobCountLimit(_0x5513d7, 0);
						return;
					}
					if (typeof top.videoTimeLimit != 'undefined' && top.videoTimeLimit === true && _0x41beca.firstClick && isUnFinishJob()) {
						_0x41beca.firstClick = false;
						_0x5513d7.pause();
						checkJobCountLimit(_0x5513d7, 1);
						return;
					}
				} catch (_0x445f1a) {
					console.log(_0x445f1a);
				}
				_0x41beca.isAlertTip = false;
				if (_0x41beca.chapterCapture == 0 || !_0x41beca.isSupportFace || !_0x41beca.isShowFaceCollection) {
					!_0x5513d7.ignorePlay ? (_0x2516c1('play', true), _0x5513d7.ignoreSeek = true) : (_0x5513d7.ignorePlay = false, _0x5513d7.ignoreSeek = false);
					_0x41beca.sendDataLog('play');
					_0x41beca.receiveStudyLog();
					_0x41beca.getDanmuList('play', _0x5513d7);
					_0x41beca.firstPlay = false;
					_0x41beca.pausePlayFace = true;
				} else {
					if (_0x41beca.chapterCapture == 1) {
						if (_0x41beca.firstPlay) {
							var _0x4d0209 = _0x41beca.sec_(_0x5513d7);
							if (_0x4d0209 == 0 && (_0x41beca.startCapture == 1 || typeof _0x41beca.startCapture == 'undefined') && _0x41beca.firstPlayFace) {
								_0x41beca.playingFaceTime = _0x4d0209;
								_0x41beca.playingFace = false;
								_0x41beca.faceCollection('play', _0x5513d7, _0x41beca.chapterCollectionType, 0);
								return;
							}
							!_0x5513d7.ignorePlay ? (_0x2516c1('play', true), _0x5513d7.ignoreSeek = true) : (_0x5513d7.ignorePlay = false, _0x5513d7.ignoreSeek = false);
							_0x41beca.sendDataLog('play');
							_0x41beca.receiveStudyLog();
							_0x41beca.getDanmuList('play', _0x5513d7);
							_0x41beca.firstPlay = false;
							_0x41beca.pausePlayFace = true;
						} else {
							if (_0x41beca.playAginCapture == 1 && !_0x5513d7.ignorePlay && _0x41beca.pausePlayFace) {
								_0x41beca.playingFaceTime = _0x41beca.sec_(_0x5513d7);
								_0x41beca.playingFace = false;
								_0x41beca.faceCollection('aginPlay', _0x5513d7, _0x41beca.chapterCollectionType, -2);
								return;
							}
							_0x41beca.pausePlayFace = true;
						}
					}
				}
			});
			_0x5513d7.on('seeked', function () {
				if (_0x2ff354.enableFastForward != 1 && !_0x5513d7.switchStatus && !_0x5513d7.finished) {
					var _0x5cd000 = _0x5513d7.currentTime(), _0xee1ff1 = _0x2ff354.headOffset ? _0x2ff354.headOffset : 0;
					_0x5cd000 != 0 && _0x5cd000 > _0xee1ff1 && _0x5513d7.currentTime(_0xee1ff1);
				}
				!_0x5513d7.ignoreSeek ? _0x2516c1('drag', true, _0xd876b1 + '-' + _0x41beca.sec_(_0x5513d7)) : _0x5513d7.ignoreSeek = false;
				_0xd876b1 = _0x41beca.sec_(_0x5513d7);
				_0x5513d7.ignorePlay = true;
				delete _0x5513d7.switchStatus;
			});
			_0x5513d7.on('pause', function () {
				!_0x5513d7.ignorePause ? (_0x2516c1('pause', true), _0x5513d7.ignorePlay = false, _0x5513d7.ignoreSeek = false) : _0x5513d7.ignorePause = false;
				_0x41beca.sendDataLog('pause');
				_0x41beca.getDanmuList('pause', _0x5513d7);
			});
			_0x5513d7.on('timeupdate', function () {
				var _0x53fe49 = _0x41beca.sec_(_0x5513d7);
				_0x41beca.isSupportFace && _0x41beca.isShowFaceCollection && _0x41beca.chapterCapture == 1 && _0x41beca.playingCapture == 1 && _0x41beca.playingFace && (_0x41beca.playingFace = false, _0x41beca.playingLoopCapture == 1 ? _0x53fe49 == _0x41beca.loopCaptureInterval && _0x41beca.faceCollection('playing', _0x5513d7, _0x41beca.chapterCollectionType, -1) : _0x53fe49 >= _0x41beca.captureInterval && _0x53fe49 % _0x41beca.captureInterval == 0 && _0x41beca.faceCollection('playing', _0x5513d7, _0x41beca.chapterCollectionType, _0x53fe49));
				!_0x41beca.playingFace && _0x53fe49 - _0x41beca.playingFaceTime > 2 && (_0x41beca.playingFace = true);
				if (typeof parent.videoTrialDuration != 'undefined' && parent.videoTrialDuration != '-1') {
					var _0xb14ad2 = parseInt(parent.videoTrialDuration) * 60;
					if (_0xb14ad2 < _0x41beca.sec_(_0x5513d7) && !_0x41beca.isAlertTip) {
						_0x5513d7.pause();
						alert('视频只允许试看' + parent.videoTrialDuration + '分钟');
						_0x41beca.isAlertTip = true;
						return;
					}
				}
				parseInt(_0x5513d7.currentTime()) >= this.damuLastGetTime && _0x41beca.getDanmuList('timeupdate', _0x5513d7);
				_0x41beca.danmuDisplay(_0x5513d7);
				if (_0x29269d == 0) {
					_0x48a5e4(_0x5513d7, _0x2ff354);
					return;
				}
				_0x41beca.sec_(_0x5513d7) - _0xd876b1 <= 1 && !_0x5513d7.ignorePlay && (_0xd876b1 = _0x41beca.sec_(_0x5513d7));
				_0x2516c1('playing');
				_0x48a5e4(_0x5513d7, _0x2ff354);
			});
			_0x5513d7.on('ended', function () {
				_0x41beca.isShowFaceCollection && _0x41beca.chapterCapture == 1 && _0x41beca.endCapture == 1 && _0x41beca.faceCollection('ended', _0x5513d7, _0x41beca.chapterCollectionType, _0x41beca.duration);
				_0x2516c1('ended', true);
			});
		},
		'sec_': function (_0x167c97) {
			return parseInt(_0x167c97.currentTime());
		},
		'now_': function () {
			return new Date().getTime();
		},
		'isSendLog': function (_0x22f0a1) {
			return _0x22f0a1 && (this.isSendLog_ = !!_0x22f0a1), this.isSendLog_;
		},
		'sendDataLog': function (_0x21b0af) {
			var _0x56f964 = _0x21b0af == 'pause' || _0x21b0af == 'end' ? 2 : 1;
			typeof sendReadZTMediaLog != 'undefined' && sendReadZTMediaLog(_0x56f964);
		},
		'receiveStudyLog': function () {
			typeof receiveStudyLog != 'undefined' && setTimeout(function () {
				receiveStudyLog();
			}, 50);
		},
		'getDanmuList': function (_0x3d807e, _0x351a33) {
			if (!this.isShowDanmu_) {
				return;
			}
			var _0x436152 = this.sec_(_0x351a33);
			if (_0x3d807e == 'pause') {
				this.damuLastGetTime = 0;
				setTimeout(function () {
					getDanmuByTime(_0x3d807e, 0);
				}, 200);
				return;
			}
			typeof getDanmuByTime != 'undefined' && setTimeout(function () {
				getDanmuByTime(_0x3d807e, _0x436152);
			}, 200);
			if (_0x436152 < this.damuLastGetTime) {
				return;
			}
			this.damuLastGetTime = _0x436152 + 59;
		},
		'danmuDisplay': function (_0x137089) {
			if (!this.isShowDanmu_) {
				return;
			}
			var _0x5bc9cc = this.sec_(_0x137089);
			typeof danmuPlay != 'undefined' && danmuPlay(_0x5bc9cc);
		},
		'timer': function (_0x2492d7) {
		},
		'faceCollection': function (_0xa47ad5, _0x28285a, _0x1513f9, _0x4fa416) {
			if (_0x4fa416 != -2) {
				var _0x28b177 = this.jumpTimePointList;
				if (typeof _0x28b177 != 'undefined') {
					try {
						if (_0x28b177.includes(_0x4fa416)) {
							this.firstPlayFace = false;
							this.pausePlayFace = false;
							this.playingFace = false;
							return;
						}
					} catch (_0x4869de) {
					}
				}
			}
			_0xa47ad5 == 'play' ? typeof startFaceCollection != 'undefined' && (_0x28285a.pause(), startFaceCollection(_0x28285a, _0x1513f9, this, _0x4fa416)) : _0xa47ad5 == 'ended' ? typeof startFaceCollection != 'undefined' && (_0x28285a.pause(), startFaceCollection(_0x28285a, _0x1513f9, this, _0x4fa416)) : _0xa47ad5 == 'playing' ? (typeof startFaceCollection != 'undefined' && (_0x28285a.pause(), this.playingFaceTime = this.sec_(_0x28285a), startFaceCollection(_0x28285a, _0x1513f9, this, _0x4fa416), this.playingFace = false), this.pausePlayFace = false) : _0xa47ad5 == 'aginPlay' && (typeof startFaceCollection != 'undefined' && (_0x28285a.pause(), startFaceCollection(_0x28285a, _0x1513f9, this, _0x4fa416)), this.pausePlayFace = false);
		},
		'playNextVideo': function (_0x2fb907) {
			if (typeof chapterPlayNextVideo != 'undefined') {
				if (typeof top.allowNextVideo != 'undefined' && top.allowNextVideo === false) {
					top.hasJobLimit === true ? top.showJobLimitTip() : top.showVideoTimeLimitTip();
					return;
				}
				chapterPlayNextVideo(_0x2fb907);
			}
		}
	});
	videojs.registerPlugin('seekBarControl', _0x1a212b);
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
			'getChecked': function (_0x49d77e, _0x39a396, _0x3b8c) {
				try {
					if (typeof _0x49d77e != 'undefined') {
						return _0x49d77e.indexOf(_0x39a396) != -1 && _0x3b8c == 'InteractiveQuiz' ? 'checked="checked"' : '';
					}
					return '';
				} catch (_0x558a93) {
					console.log(_0x558a93);
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
		var _0xd50dba = this, _0x5b04d8 = _0xd50dba.renderData, _0x1923dd = _0xd50dba.quizRightCountUrl;
		typeof _0x1923dd != 'undefined' && Ext.Ajax.request({
			'url': _0x1923dd,
			'params': {
				'eventid': _0x5b04d8.resourceId,
				'memberinfo': _0x5b04d8.memberinfo
			},
			'method': 'get',
			'success': function (_0x538185) {
				var _0x59c6e6 = Ext.decode(_0x538185.responseText);
				_0x59c6e6.status && (Ext.get('rightNum').setHTML(_0x59c6e6.rightAnswerCount), Ext.get('rightAnswerNum').setStyle('display', 'inline-block'));
			}
		});
		_0xd50dba.callParent(arguments);
		var _0x46abde = _0xd50dba.scrollEl, _0xb3d886 = $(_0x46abde.dom).niceScroll({
			'cursorborder': '',
			'cursorwidth': 6,
			'cursorcolor': '#A5A5A5',
			'boxzoom': false,
			'autohidemode': false
		});
		_0xd50dba.scroller = _0xb3d886;
		_0xd50dba.submitEl.on('click', function () {
			_0xd50dba.checkResult();
		});
		_0xd50dba.continueEl.on('click', function () {
			try {
				top.configFullScreen && exitMediumSizeWindow();
			} catch (_0x550c6e) {
				console.log(_0x550c6e);
			}
			_0xd50dba.fireEvent('continue');
		});
		_0xd50dba.backEl && _0xd50dba.backEl.on('click', function () {
			_0xd50dba.onerror && _0xd50dba.onerror();
			_0xd50dba.fireEvent('continue');
		});
		_0xd50dba.viewAnalysisEl && _0xd50dba.viewAnalysisEl.on('click', function () {
			Ext.get('tkParsing').setStyle('display', 'inline-block');
		});
		_0xd50dba.delAnalysisEl && _0xd50dba.delAnalysisEl.on('click', function () {
			Ext.get('tkParsing').setStyle('display', 'none');
		});
	},
	'checkResult': function () {
		var _0x592ab3 = this, _0x236ac2 = Ext.query('input', _0x592ab3.el.dom), _0x4e473f = true, _0x3a73e7 = _0x592ab3.renderData, _0x58eef1 = _0x3a73e7.options, _0x4c1fc1 = [], _0x12c534 = _0x592ab3.quizErrorReportUrl, _0x30c817 = _0x592ab3.validationUrl2, _0x4e73bc = _0x3a73e7.dtype;
		if (Ext.get('videoquiz-continue').getStyle('display') == 'none' && window.parent.parent.location.href.indexOf('nodedetailcontroller/visitnodedetail') > -1) {
			try {
				top.configFullScreen && exitMediumSizeWindow();
			} catch (_0x33e4b4) {
				console.log(_0x33e4b4);
			}
			_0x592ab3.fireEvent('continue');
			return;
		}
		Ext.each(_0x236ac2, function (_0x2ec228, _0x35d3ad) {
			_0x2ec228.checked && _0x4c1fc1.push(_0x58eef1[_0x35d3ad].name);
		});
		Ext.get('videoquiz-submit').setStyle('display', 'none');
		Ext.get('videoquiz-submitting').setStyle('display', 'block');
		if (typeof _0x30c817 != 'undefined') {
			var _0x2727c6 = _0x4c1fc1.join(',');
			Ext.Ajax.request({
				'url': _0x30c817,
				'params': {
					'eventid': _0x3a73e7.resourceId,
					'memberinfo': _0x3a73e7.memberinfo,
					'answerContent': _0x2727c6
				},
				'method': 'get',
				'success': function (_0x2ccdcc) {
					Ext.get('videoquiz-submit').setStyle('display', 'block');
					Ext.get('videoquiz-submitting').setStyle('display', 'none');
					_0x3a73e7.answerContent = _0x2727c6;
					var _0x3cbe7a = Ext.decode(_0x2ccdcc.responseText), _0x1ae07b = typeof _0x3cbe7a.isRight === 'undefined' ? false : _0x3cbe7a.isRight;
					!_0x1ae07b ? _0x3a73e7.errorBackTime && _0x3a73e7.errorBackTime > 0 ? (Ext.get('spanNotBack').setStyle('display', 'block'), Ext.get('videoquiz-submit').setStyle('display', 'none'), _0x4e73bc == 'InteractiveQuiz' ? Ext.get('knowledgeBack').setStyle('display', 'block') : Ext.get('videoquiz-continue').setStyle('display', 'block')) : _0x4e73bc == 'InteractiveQuiz' && _0x3a73e7.errorBack == 1 && _0x3a73e7.eBstartPoint != '' ? (Ext.get('spanNotBackPoint').setStyle('display', 'block'), Ext.get('knowledgeBack').setStyle('display', 'block')) : Ext.get('spanNot').setStyle('display', 'block') : (Ext.get('spanHas').setStyle('display', 'block'), _0x4e73bc == 'InteractiveQuiz' && (Ext.get('videoquiz-continue').setStyle('display', 'block'), Ext.get('knowledgeBack').setStyle('display', 'none'), Ext.get('videoquiz-submit').setStyle('display', 'none'), Ext.get('spanNot').setStyle('display', 'none'), Ext.get('spanNotBack').setStyle('display', 'none'), Ext.get('spanNotBackPoint').setStyle('display', 'none')));
					if (_0x3cbe7a.status) {
						if (_0x4e73bc == 'InteractiveQuiz') {
							_0x3cbe7a.rightAnswerCount && (Ext.get('rightNum').setHTML(_0x3cbe7a.rightAnswerCount), Ext.get('rightAnswerNum').setStyle('display', 'inline-block'));
							var _0x9ed301 = '', _0x53e908 = false;
							_0x3cbe7a.testAnalysis ? _0x3cbe7a.showAnswer && _0x3cbe7a.showAnswer > 0 ? (_0x9ed301 += '正确答案\uFF1A' + _0x3cbe7a.rightContent, _0x9ed301 += '</br>解析\uFF1A' + _0x3cbe7a.testAnalysis, Ext.get('viewAnalysis').setStyle('display', 'block'), _0x53e908 = true) : _0x3cbe7a.isRight && (_0x9ed301 += '解析\uFF1A' + _0x3cbe7a.testAnalysis, Ext.get('viewAnalysis').setStyle('display', 'block'), _0x53e908 = true) : _0x3cbe7a.showAnswer && _0x3cbe7a.showAnswer > 0 ? (Ext.get('tkParsingDele').setStyle('display', 'none'), Ext.get('viewAnalysis').setStyle('display', 'none'), _0x9ed301 += '正确答案\uFF1A' + _0x3cbe7a.rightContent, _0x53e908 = true) : Ext.get('viewAnalysis').setStyle('display', 'none');
							if (_0x53e908) {
								Ext.get('tkParsing_con').setHTML(_0x9ed301);
								Ext.get('tkParsing').setStyle('display', 'inline-block');
								var _0x409994 = _0x592ab3.tkParseScrollEl, _0x5e3f26 = $(_0x409994.dom).niceScroll({
									'cursorborder': '',
									'cursorwidth': 6,
									'cursorcolor': '#A5A5A5',
									'boxzoom': false,
									'autohidemode': true
								});
								_0x592ab3.tkParseScroll = _0x5e3f26;
							}
						}
						if (_0x3cbe7a.isRight && _0x4e73bc == 'InteractiveQuiz') {
							if (typeof _0x3cbe7a.showTip != 'undefined' && _0x3cbe7a.showTip) {
								var _0x228142 = _0x3cbe7a.percent;
								try {
									var _0x540f52 = Ext.getCookie('fid', 0);
									_0x228142 = parseInt(_0x228142);
									_0x540f52 == '179952' && _0x228142 > 0 && (_0x228142 = 90 + _0x228142 * 0.1);
								} catch (_0x543bd6) {
									console.log(_0x543bd6);
								}
								Ext.get('spanHas').setHTML('<span class="spanHas fr" style=\'display:block\'><span id="InteractiveQuizTip">恭喜你\uFF0C答对了\uFF01你的答题水准超过了' + _0x228142 + '%的同学</span></span>');
							} else {
								Ext.get('spanHas').setHTML('<span class="spanHas fr" style=\'display:block\'><span id="InteractiveQuizTip">恭喜你\uFF0C答对了\uFF01</span></span>');
							}
						}
					}
					!_0x1ae07b && _0x592ab3.onerror && _0x4e73bc != 'InteractiveQuiz' && _0x592ab3.onerror();
					!_0x1ae07b && _0x3a73e7.errorContinue == 1 && (_0x4e473f = true, Ext.get('videoquiz-submit').setStyle('display', 'none'), Ext.get('videoquiz-continue').setStyle('display', 'block'));
					if (_0x1ae07b && Ext.get('videoquiz-continue').getStyle('display') == 'none') {
						try {
							top.configFullScreen && exitMediumSizeWindow();
						} catch (_0x4039ee) {
							console.log(_0x4039ee);
						}
						_0x592ab3.fireEvent('continue');
					}
				},
				'error': function () {
					Ext.get('videoquiz-submit').setStyle('display', 'block');
					Ext.get('videoquiz-submitting').setStyle('display', 'none');
					_0x592ab3.onerror && _0x4e73bc != 'InteractiveQuiz' && _0x592ab3.onerror();
				}
			});
		}
		return _0x4e473f;
	},
	'continueFun': function () {
		var _0x12abcf = this;
		_0x12abcf.fireEvent('continue');
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
		var _0x309cb4 = this;
		_0x309cb4.callParent(arguments);
		try {
			var _0x1efb61 = document.querySelector('.sp_video_img');
			_0x1efb61.addEventListener('load', function () {
				_0x1efb61.naturalWidth >= _0x1efb61.naturalHeight ? _0x1efb61.naturalWidth >= 400 && (_0x1efb61.style.width = '90%', _0x1efb61.style.height = '80%') : _0x1efb61.naturalHeight >= 400 && (_0x1efb61.style.height = '90%', _0x1efb61.style.width = '80%');
			});
		} catch (_0x9c5b3e) {
			console.log(_0x9c5b3e);
		}
		_0x309cb4.el.on('click', function () {
			_0x309cb4.fireEvent('continue');
		});
		_0x309cb4.closeEl.on('click', function () {
			try {
				top.configFullScreen && exitMediumSizeWindow();
			} catch (_0x3e35df) {
				console.log(_0x3e35df);
			}
			_0x309cb4.fireEvent('continue');
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
		var _0x596aa6 = this, _0x1e46c1 = _0x596aa6.contentEl;
		_0x596aa6.callParent(arguments);
		_0x596aa6.closeEl.on('click', function () {
			_0x596aa6.fireEvent('continue');
		});
		var _0x31cea8 = $(_0x1e46c1.dom).niceScroll({
			'cursorborder': '',
			'cursorwidth': 6,
			'cursorcolor': '#e0e0e0',
			'boxzoom': false,
			'autohidemode': true
		});
		_0x596aa6.scroller = _0x31cea8;
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
		var _0x2366fc = this;
		_0x2366fc.callParent(arguments);
		try {
			dragFn && dragFn('#sp_video_ppt_pic', '#video_html5_api');
		} catch (_0xdc3c8e) {
			console.log(_0xdc3c8e);
		}
		_0x2366fc.sizeBigEl.on('click', function (_0x9fbe7a) {
			_0x9fbe7a.stopPropagation();
			_0x2366fc.pptPicEl.toggleCls('sp_ppt_pic_fullScreen');
			Ext.get('sp_size_big').setStyle('display', 'none');
			Ext.get('sp_size_small').setStyle('display', 'block');
			var _0x21bb08 = Ext.get('video').getStyle('height'), _0xcce713 = Ext.get('sp_video_ppt_pic').getStyle('height'), _0x5a2696 = (parseInt(_0x21bb08) - 60 - parseInt(_0xcce713)) / 2;
			Ext.get('sp_video_ppt_pic').setStyle('top', _0x5a2696 + 'px');
			Ext.get('sp_video_ppt_pic').setStyle('left', '0');
		});
		_0x2366fc.sizeSmallEl.on('click', function (_0x4c12bd) {
			_0x4c12bd.stopPropagation();
			_0x2366fc.pptPicEl.toggleCls('sp_ppt_pic_fullScreen');
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
	'constructor': function (_0x2dc29e) {
		var _0x2d152b = this;
		_0x2d152b.callParent(arguments);
		_0x2d152b.bg = Ext.create('ans.videojs.TimelineObjectsBg', { 'renderTo': _0x2dc29e.renderTo });
		_0x2d152b.objects = _0x2dc29e.objects && _0x2dc29e.objects.sort ? _0x2d152b.sort_(_0x2dc29e.objects) : [];
		_0x2d152b.current = 0;
	},
	'showObject': function (_0x4305f6, _0x11292c, _0x14424b) {
		var _0x5258b3 = this, _0x58fc83 = _0x5258b3.getBox(), _0x3f2338 = _0x5258b3.items.getAt(0), _0x2b8d6c, _0x3e8a14 = function () {
			_0x2b8d6c.destroy();
			_0x5258b3.hide();
			_0x4305f6.play();
		};
		_0x3f2338 != null && _0x3f2338.destroy();
		if (_0x14424b) {
			_0x14424b.description && (_0x14424b.description = _0x5258b3.htmlEncodeByRegExp(_0x14424b.description));
			if (_0x14424b.options && _0x14424b.options.length > 0) {
				for (let _0x6d25d2 = 0; _0x6d25d2 < _0x14424b.options.length; _0x6d25d2++) {
					_0x14424b.options[_0x6d25d2].description && (_0x14424b.options[_0x6d25d2].description = _0x5258b3.htmlEncodeByRegExp(_0x14424b.options[_0x6d25d2].description));
				}
			}
		}
		if (_0x11292c == 'IMG') {
			var _0x3e1de5 = { 'src': _0x14424b.url.replace(/origin/, _0x58fc83.width + '_' + _0x58fc83.height) };
			_0x2b8d6c = _0x5258b3.add({
				'xtype': 'videoimg',
				'renderData': _0x3e1de5
			});
		}
		if (_0x11292c == 'QUIZ') {
			var _0xca99b3 = function () {
			};
			if (_0x14424b.errorBackTime && _0x14424b.errorBackTime > 0) {
				var _0x50b25c = _0x14424b.errorBackTime * 60;
				_0xca99b3 = function () {
					var _0x5a7fbb = Math.max(_0x4305f6.currentTime() - _0x50b25c, 0);
					_0x4305f6.switchStatus = true;
					_0x4305f6.currentTime(_0x5a7fbb);
				};
			}
			_0x2b8d6c = _0x5258b3.add({
				'xtype': 'videoquiz',
				'renderData': _0x14424b,
				'quizErrorReportUrl': _0x5258b3.quizErrorReportUrl,
				'validationUrl2': _0x5258b3.validationUrl2,
				'onerror': _0xca99b3
			});
		}
		if (_0x11292c == 'InteractiveQuiz') {
			var _0xca99b3 = function () {
			};
			if (_0x14424b.errorBackTime && _0x14424b.errorBackTime > 0) {
				var _0x50b25c = _0x14424b.errorBackTime * 60;
				_0xca99b3 = function () {
					var _0x27143f = Math.max(_0x4305f6.currentTime() - _0x50b25c, 0);
					_0x4305f6.switchStatus = true;
					_0x4305f6.currentTime(_0x27143f);
				};
			}
			if (_0x14424b.errorBack == 1 && _0x14424b.eBstartPoint != '') {
				var _0x50b25c = 0, _0xb22ba = _0x14424b.eBstartPoint.split(':'), _0x5a5a3a = _0xb22ba.length;
				_0x5a5a3a > 0 && (_0x5a5a3a == 1 ? _0x50b25c = parseInt(_0xb22ba[0]) * 60 : _0x5a5a3a == 2 && (_0x50b25c = parseInt(_0xb22ba[0]) * 60 + parseInt(_0xb22ba[1])));
				_0xca99b3 = function () {
					_0x4305f6.switchStatus = true;
					_0x4305f6.currentTime(_0x50b25c);
				};
			}
			_0x14424b.dtype = 'InteractiveQuiz';
			_0x2b8d6c = _0x5258b3.add({
				'xtype': 'videoquiz',
				'renderData': _0x14424b,
				'quizErrorReportUrl': _0x5258b3.quizErrorReportUrl,
				'validationUrl2': _0x5258b3.validationUrl2,
				'quizRightCountUrl': _0x5258b3.quizRightCountUrl,
				'onerror': _0xca99b3
			});
		}
		if (_0x11292c == 'PPT') {
			if (_0x14424b.fp == 0) {
				return;
			}
			var _0x48d318 = _0x14424b.url;
			_0x14424b.thumb ? _0x48d318 = _0x14424b.thumb + _0x14424b.pageNo + '.png' : _0x48d318 = _0x48d318.replace(/swfv2\/.*$/, 'thumb/' + _0x14424b.fp + '.png');
			var _0x3e1de5 = { 'src': _0x48d318 };
			_0x2b8d6c = _0x5258b3.add({
				'xtype': 'videoppt',
				'renderData': _0x3e1de5
			});
		}
		_0x11292c == 'SyncAnnotationEvent' && (_0x2b8d6c = _0x5258b3.add({
			'xtype': 'videoannotation',
			'renderData': _0x14424b
		}));
		if (!_0x2b8d6c) {
			return;
		}
		_0x2b8d6c.on('continue', function () {
			_0x3e8a14();
		});
		var _0x404e53 = !(_0x2b8d6c.model === false);
		_0x5258b3.showModel(_0x404e53);
		_0x404e53 && _0x4305f6.pause();
	},
	'htmlEncodeByRegExp': function (_0x9192f0) {
		var _0x134941 = '';
		if (_0x9192f0.length == 0) {
			return '';
		}
		return _0x134941 = _0x9192f0.replace(/&/g, '&amp;'), _0x134941 = _0x134941.replace(/</g, '&lt;'), _0x134941 = _0x134941.replace(/>/g, '&gt;'), _0x134941 = _0x134941.replace(/\s/g, '&nbsp;'), _0x134941 = _0x134941.replace(/\'/g, '&#39;'), _0x134941 = _0x134941.replace(/\"/g, '&quot;'), _0x134941;
	},
	'showModel': function (_0xc82fc3) {
		try {
			top.configFullScreen && mediumSizeWindow();
		} catch (_0x6ae44d) {
			console.log(_0x6ae44d);
		}
		var _0x22f62d = this;
		_0x22f62d.show();
		_0xc82fc3 ? (_0x22f62d.removeCls('ans-timelineobjects-autosize'), _0x22f62d.setAutoScroll(true), _0x22f62d.bg.show()) : (_0x22f62d.addCls('ans-timelineobjects-autosize'), _0x22f62d.setAutoScroll(false));
	},
	'hide': function () {
		this.callParent(arguments);
		this.bg.hide.apply(this.bg, arguments);
	},
	'updateTime': function (_0x53bac5, _0x21508d) {
		if (this.current >= this.objects.length || _0x53bac5.scrubbing()) {
			return;
		}
		var _0x291eff = this, _0x311646 = _0x291eff.objects[_0x291eff.current], _0x59abad = _0x311646.style, _0x37fb2d = _0x311646.datas[0];
		if (_0x21508d >= _0x37fb2d.startTime) {
			_0x291eff.current++;
			setTimeout(function () {
				_0x291eff.showObject(_0x53bac5, _0x59abad, _0x37fb2d);
			}, 20);
		}
	},
	'resetTime': function (_0x377a0e, _0x57a27e) {
		var _0xeca0d7 = this, _0x2f69f6;
		for (_0x2f69f6 = 0; _0x2f69f6 < _0xeca0d7.objects.length; _0x2f69f6++) {
			var _0x3a1b34 = _0xeca0d7.objects[_0x2f69f6].datas[0].startTime;
			if (_0x57a27e <= _0x3a1b34) {
				break;
			}
		}
		_0xeca0d7.current = _0x2f69f6;
	},
	'sort_': function (_0x1e0ce3) {
		return _0x1e0ce3 && _0x1e0ce3.sort && _0x1e0ce3.sort(function (_0x38a733, _0x2a4b8f) {
			var _0x1a1621 = _0x38a733.datas[0].startTime, _0x290256 = _0x2a4b8f.datas[0].startTime;
			return _0x1a1621 - _0x290256;
		});
	}
});
(function () {
	var _0x53b71d = videojs.getPlugin('plugin'), _0x1d3863 = videojs.extend(_0x53b71d, {
		'constructor': function (_0x2c96e4, _0x43c11b) {
			_0x53b71d.call(this, _0x2c96e4, _0x43c11b);
			if (!_0x43c11b.url) {
				return;
			}
			var _0x1c5a84 = function (_0x559f2e) {
				try {
					var _0xd666fa = _0x559f2e.datas;
					if (_0xd666fa && _0xd666fa.length > 0) {
						return _0xd666fa[0].startTime;
					}
				} catch (_0x2e74f9) {
					console.log(_0x2e74f9);
				}
				return -1;
			}, _0x1eeae6 = this;
			_0x2c96e4.eventPoints = [];
			_0x2c96e4.otherPointTimes = [];
			var _0x5c5a56 = [];
			if (_0x43c11b.begins && _0x43c11b.begins > 0) {
				var _0x32a363 = {
					'time': _0x43c11b.begins,
					'text': '片头'
				};
				_0x5c5a56.push(_0x32a363);
			}
			if (_0x43c11b.ends && _0x43c11b.ends > 0) {
				var _0x32a363 = {
					'time': _0x43c11b.ends,
					'text': '片尾'
				};
				_0x5c5a56.push(_0x32a363);
			}
			_0x2c96e4.eventPoints = _0x5c5a56;
			Ext.Ajax.request({
				'url': _0x43c11b.url,
				'async': false,
				'success': function (_0x23eca3) {
					if (_0x23eca3.status != 200) {
						return;
					}
					eval('var data=' + _0x23eca3.responseText);
					if (data && data.length > 0) {
						var _0x4b513f = [];
						for (var _0x433e24 = 0; _0x433e24 < data.length; _0x433e24++) {
							var _0x47186f = data[_0x433e24];
							if (_0x47186f.style == 'InteractiveQuiz') {
								var _0x401145 = _0x47186f.datas;
								if (_0x401145 && _0x401145.length > 0) {
									var _0x2e608d = {
										'time': _0x401145[0].startTime,
										'text': '互动测验'
									};
								}
								_0x4b513f.push(_0x2e608d);
							}
							var _0x425483 = _0x1c5a84(_0x47186f);
							_0x425483 >= 0 && _0x2c96e4.otherPointTimes.push(_0x425483);
						}
						_0x4b513f.forEach(function (_0x83bee) {
							_0x2c96e4.eventPoints.push(_0x83bee);
						});
					}
					var _0x346375 = Ext.create('ans.videojs.TimelineObjects', {
						'renderTo': _0x2c96e4.el_,
						'quizErrorReportUrl': _0x43c11b.quizErrorReportUrl,
						'validationUrl2': _0x43c11b.validationUrl2,
						'quizRightCountUrl': _0x43c11b.quizRightCountUrl,
						'objects': data
					});
					_0x2c96e4.on('play', function () {
						_0x346375.resetTime(_0x2c96e4, _0x2c96e4.currentTime());
					});
					_0x2c96e4.on('seekend', function () {
						_0x346375.resetTime(_0x2c96e4, _0x2c96e4.currentTime());
					});
					_0x2c96e4.on('timeupdate', function () {
						!_0x2c96e4.paused() && _0x346375.updateTime(_0x2c96e4, _0x2c96e4.currentTime());
					});
				}
			});
		}
	});
	videojs.registerPlugin('timelineObjects', _0x1d3863);
}());
(function () {
	var _0x8e3e9b = videojs.getPlugin('plugin'), _0x1d1705 = videojs.extend(_0x8e3e9b, {
		'constructor': function (_0x486803, _0x286ae3) {
			_0x8e3e9b.call(this, _0x486803, _0x286ae3);
			if (!_0x286ae3.url) {
				return;
			}
			var _0x27f059 = this;
			Ext.Ajax.request({
				'url': _0x286ae3.url,
				'async': false,
				'success': function (_0x4ecdc2) {
					if (_0x4ecdc2.status != 200) {
						return;
					}
					eval('var data=' + _0x4ecdc2.responseText);
					if (!data.status) {
						return;
					}
					var _0x2c33d3 = videojs('video');
					if (_0x2c33d3 && typeof _0x2c33d3.markers === 'function') {
						var _0x4f0d6c = _0x486803.eventPoints;
						_0x4f0d6c.push.apply(_0x4f0d6c, data.list);
						_0x2c33d3.markers({
							'markerTip': {
								'display': true,
								'text': function (_0x4c9d79) {
									return _0x4c9d79.text;
								}
							},
							'markers': _0x4f0d6c,
							'onMarkerClick': function (_0x15de7e) {
								if (_0x286ae3.ff != 1) {
									return false;
								}
								var _0x53120a = $(this).data('marker-key');
								return _0x486803.currentTime(_0x15de7e.time), false;
							}
						});
					}
					if (data.list && data.list.length > 0) {
						var _0x355a34 = [], _0x54c897 = {
							_0x288d07: _0x49190c,
							_0x288d07: _0x2d1999
						};
						for (var _0x3e9128 = 0; _0x3e9128 < data.list.length; _0x3e9128++) {
							var _0x3c490b = data.list[_0x3e9128], _0x288d07 = _0x3c490b.text;
							if (!_0x54c897[_0x288d07]) {
								var _0x49190c = [];
								_0x49190c.push(_0x3c490b);
								_0x355a34.push(_0x288d07);
							} else {
								var _0x2d1999 = _0x54c897[_0x288d07];
								_0x2d1999.push(_0x3c490b);
							}
						}
						function _0x5bea5c(_0x30953e) {
							var _0x5b3658 = '<div class="zsCloud_box"><h2 class="zsCloud_seltime">选择时间</h2><div class="zsCloud_div"><div class="zsCloud_div_list">';
							for (var _0x5c4ec4 = 0; _0x5c4ec4 < _0x30953e.length; _0x5c4ec4++) {
								var _0x3b838a = _0x30953e[_0x5c4ec4], _0x446f9b = Ext.fly(_0x468f03.elements[0]).select('.topicId' + _0x3b838a.topicid + ':not(.markertime)'), _0x2da8a3 = videojs.formatTime(_0x3b838a.time);
								_0x446f9b && _0x446f9b.elements[0] && _0x446f9b.elements[0].parentElement.remove();
								_0x5b3658 += '<div class="zsCloud_item topicId' + _0x3b838a.topicid + '" data-marker-time="' + _0x3b838a.time + '" title="' + _0x2da8a3 + '" onclick="markersPlayer(this)">' + _0x2da8a3 + '</div>';
							}
							return _0x5b3658 += '</div></div></div>', _0x5b3658;
						}
						Ext.select('.zsCloud').setStyle('display', 'block');
						var _0x468f03 = Ext.select('.zsCloud_ul');
						if (_0x468f03 && _0x468f03.elements[0]) {
							var _0x4d4dae;
							for (var _0x5ba6dc = 0; _0x5ba6dc < _0x355a34.length; _0x5ba6dc++) {
								var _0x1ae3b2 = _0x355a34[_0x5ba6dc], _0x247295 = _0x54c897[_0x1ae3b2], _0x2cd757 = '';
								if (_0x247295) {
									if (_0x247295.length == 1) {
										var _0x2fa53d = _0x247295[0], _0x77e704 = Ext.fly(_0x468f03.elements[0]).select('.topicId' + _0x2fa53d.topicid + ':not(.markertime)'), _0x55914a = videojs.formatTime(_0x2fa53d.time);
										_0x77e704 && _0x77e704.elements[0] && _0x77e704.elements[0].parentElement.remove();
										_0x2cd757 = '<li><span class=\'topicId' + _0x2fa53d.topicid + ' markertime\' data-marker-time=\'' + _0x2fa53d.time + '\' title=\'' + _0x55914a + '\' onclick=\'markersPlayer(this)\'>' + _0x2fa53d.text + '</span></li>';
									} else {
										_0x2cd757 = '<li class="zsCloud_select"><span class="zsCloud_span">' + _0x1ae3b2 + '</span>';
										_0x247295 && _0x247295.length > 0 ? _0x2cd757 += _0x5bea5c(_0x247295) : _0x2cd757 += '</li>';
									}
								}
								_0x4d4dae ? _0x4d4dae = Ext.DomHelper.insertHtml('afterEnd', _0x4d4dae.elements[0], _0x2cd757) : _0x4d4dae = Ext.DomHelper.insertHtml('afterBegin', _0x468f03.elements[0], _0x2cd757);
								_0x4d4dae = Ext.fly(_0x4d4dae).select('');
							}
						}
						_0x286ae3.videoTopicCloud && _0x286ae3.videoTopicCloud == 1 && (Ext.select('.zsCloud_down').setStyle('display', 'block'), Ext.select('.zsCloud_body').setStyle('display', 'block'));
					}
					var _0x2c2d20 = new Map(), _0x49f0ee = new Array();
					if (data.list && data.list.length > 0) {
						for (var _0x3e9128 = 0; _0x3e9128 < data.list.length; _0x3e9128++) {
							var _0x1eaaf1 = data.list[_0x3e9128].topicid, _0x37b7e1 = _0x2c2d20.get(_0x1eaaf1);
							!_0x37b7e1 && (_0x37b7e1 = {}, _0x37b7e1.text = data.list[_0x3e9128].text, _0x37b7e1.time = data.list[_0x3e9128].time, _0x37b7e1.topicid = data.list[_0x3e9128].topicid, _0x37b7e1.weight = 0, _0x37b7e1.html = {
								'data-marker-time': data.list[_0x3e9128].time,
								'onclick': 'markersPlayer(this)'
							}, _0x2c2d20.set(_0x1eaaf1, _0x37b7e1), _0x49f0ee.push(_0x37b7e1));
							_0x37b7e1.weight += 1;
						}
					}
					$(function () {
						_0x49f0ee.length != 0 && $('#word_cloud').jQCloud(_0x49f0ee);
						function _0x5ec0bb(_0x36ee59) {
							$(_0x36ee59).niceScroll({
								'cursorborder': '',
								'cursorwidth': 8,
								'cursorcolor': '#DADFE6',
								'boxzoom': false,
								'autohidemode': true
							});
							setInterval(function () {
								$(_0x36ee59).getNiceScroll().resize();
							}, 300);
						}
						$('.zsCloud_box').each(function (_0x2d79eb) {
							$(this).find('.zsCloud_div').attr('id', 'zsCloud_div_' + _0x2d79eb);
							_0x5ec0bb('#zsCloud_div_' + _0x2d79eb);
						});
					});
					$('.zsCloud_down').click(function () {
						var _0xa9028a = $('.zsCloud_body');
						_0xa9028a.is(':visible') ? (_0xa9028a.hide(), $(this).addClass('zsCloud_up'), $(this).text('展开')) : (_0xa9028a.show(), $(this).removeClass('zsCloud_up'), $(this).text('收起'));
					});
				}
			});
		}
	});
	videojs.registerPlugin('marker', _0x1d1705);
}());
(function () {
	var _0x125c5d = videojs.getPlugin('plugin'), _0x4e1657 = videojs.extend(_0x125c5d, {
		'constructor': function (_0x2439f1, _0x1d8b74) {
			_0x125c5d.call(this, _0x2439f1, _0x1d8b74);
			var _0x56815d = this, _0x203020 = _0x1d8b74.subtitleUrl, _0x59cb73 = function (_0x3e34f8) {
				var _0xaa6ac4 = _0x3e34f8.match(/support\/(\w+).\w+/);
				if (_0xaa6ac4) {
					return ServerHosts.PARENT_HOST + '/ananas/video-editor/sub?objectid=' + _0xaa6ac4[1];
				}
			}, _0x40e09c = function (_0x27be15, _0x53d920, _0xccca65) {
				_0x2439f1.addRemoteTextTrack({
					'kind': 'subtitles',
					'srclang': 'cn',
					'label': _0x27be15,
					'src': _0x53d920,
					'default': _0xccca65
				}, true);
			};
			_0x2439f1.ready(function () {
				_0x203020 && Ext.Ajax.request({
					'url': _0x203020,
					'success': function (_0x27c00c) {
						if (_0x27c00c.status != 200) {
							return;
						}
						eval('var subs=' + _0x27c00c.responseText);
						var _0xb08d78 = 0, _0x558137 = 0;
						subs.length > 0 && Ext.each(subs, function (_0x2ca9c3) {
							_0x1d8b74.translate == 1 && _0x2ca9c3.name == 'English' ? (_0x2ca9c3.selected = true, _0x558137 = _0xb08d78) : _0x2ca9c3.selected = false;
							_0x40e09c(_0x2ca9c3.name, _0x59cb73(_0x2ca9c3.url), _0x2ca9c3.selected);
							_0xb08d78++;
						});
						if (_0x1d8b74.translate == 1) {
							Ext.select('.vjs-subs-caps-button .vjs-icon-placeholder').setHTML('翻译');
							Ext.select('.vjs-subs-caps-button .vjs-icon-placeholder').addCls('vjs-hide-content');
						}
						setTimeout(function () {
							var _0x1095ca = _0x2439f1.textTracks();
							_0x1d8b74.translate == 1 ? _0x1095ca && _0x1095ca[_0x558137] ? _0x1095ca[_0x558137].mode = 'showing' : _0x1095ca && _0x1095ca[0] && (_0x1095ca[0].mode = 'showing') : _0x1095ca && _0x1095ca[0] && (_0x1095ca[0].mode = 'showing');
						}, 500);
					}
				});
				var _0x5b7b7d = _0x2439f1.textTrackSettings;
				_0x5b7b7d.setValues({
					'backgroundColor': '#000',
					'backgroundOpacity': '0',
					'edgeStyle': 'uniform'
				});
				_0x5b7b7d.updateDisplay();
			});
		}
	});
	videojs.registerPlugin('subtitle', _0x4e1657);
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
		var _0x5934c1 = this;
		_0x5934c1.callParent(arguments);
		var _0x4d3ef1 = Ext.query('input', _0x5934c1.el.dom);
		Ext.each(_0x4d3ef1, function (_0x3e588d, _0x26f2f3) {
			Ext.fly(_0x3e588d).on('click', function () {
				_0x5934c1.onSelected(_0x26f2f3);
			});
		});
		try {
			typeof createVideoTask === 'function' ? createVideoTask() : console.log('createVideoTask函数不存在\uFF01');
		} catch (_0x573370) {
		}
	},
	'setErrorMsg': function (_0x3e1705) {
		Ext.fly(this.errorMsgEl).setHTML(_0x3e1705);
	}
});
Ext.define('ans.videojs.ErrorNote', {
	'extend': 'Ext.Component',
	'cls': 'ans-vjserrdisplay',
	'renderTpl': ['<div class="ans-vjserrdisplay-title">播放出现异常\u3002</div>']
});
(function () {
	var _0x322748 = videojs.getComponent('ErrorDisplay'), _0xc90a1c = videojs.extend(_0x322748, {
		'constructor': function (_0x4bbd1f, _0x433b12) {
			_0x322748.call(this, _0x4bbd1f, _0x433b12);
		},
		'colse': function () {
			_0x322748.prototype.colse.call(this);
			me.ansErrorDisplay && (me.ansErrorDisplay.destroy(), me.ansErrorDisplay = null);
		},
		'fill': function () {
			_0x322748.prototype.fill.call(this);
			var _0x5882dc = this, _0x31d2c0 = _0x5882dc.player_, _0x1aae80 = _0x31d2c0.options_.playlines, _0x17d906 = Ext.query('.vjs-modal-dialog-content', _0x5882dc.el_)[0];
			_0x5882dc.ansErrorDisplay && (_0x5882dc.ansErrorDisplay.destroy(), delete _0x5882dc.ansErrorDisplay);
			if (!_0x31d2c0.selectCDN || !_0x1aae80) {
				_0x5882dc.ansErrorDisplay = Ext.create('ans.videojs.ErrorNote', { 'renderTo': _0x5882dc.el_ });
				return;
			}
			var _0x28484a = _0x31d2c0.currentPlayline(), _0x497242 = 0;
			Ext.each(_0x1aae80, function (_0x1cd7c4, _0x211353) {
				_0x28484a == _0x1cd7c4 && (_0x497242 = _0x211353);
			});
			_0x5882dc.ansErrorDisplay = Ext.create('ans.videojs.ErrorDisplay', {
				'renderTo': _0x5882dc.el_,
				'onSelected': function (_0x100399) {
					_0x31d2c0.selectCDN(_0x100399);
					_0x5882dc.close();
				},
				'renderData': {
					'playlines': _0x1aae80,
					'errorMsg': _0x5882dc.content(),
					'selectedIndex': _0x497242
				}
			});
		}
	});
	videojs.registerComponent('ErrorDisplay', _0xc90a1c);
}());
(function () {
	var _0x211f2b = null;
	typeof window.videojs === 'undefined' && typeof require === 'function' ? _0x211f2b = require('video.js') : _0x211f2b = window.videojs;
	(function (_0x3aa632, _0x451cf8) {
		var _0x507716 = {}, _0x5d9c12, _0x2b971f = {}, _0x5660e7 = {};
		function _0x156eb1(_0x514e8c, _0x57ba0a, _0x907d3a, _0x532e49) {
			_0x2b971f = {
				'label': _0x907d3a,
				'sources': _0x57ba0a
			};
			if (typeof _0x532e49 === 'function') {
				return _0x532e49(_0x514e8c, _0x57ba0a, _0x907d3a);
			}
			return _0x514e8c.src(_0x57ba0a.map(function (_0x52c08c) {
				return {
					'src': _0x52c08c.src,
					'type': _0x52c08c.type,
					'res': _0x52c08c.res
				};
			})), _0x514e8c;
		}
		var _0x2b64cb = _0x451cf8.getComponent('MenuItem'), _0x2d3986 = _0x451cf8.extend(_0x2b64cb, {
			'constructor': function (_0x45da03, _0x337585, _0x26b71f, _0xfc1e47) {
				this.onClickListener = _0x26b71f;
				this.label = _0xfc1e47;
				_0x2b64cb.call(this, _0x45da03, _0x337585);
				this.src = _0x337585.src;
				this.on('click', this.onClick);
				this.on('touchstart', this.onClick);
				_0x337585.initialySelected && (this.showAsLabel(), this.selected(true), this.addClass('vjs-selected'));
			},
			'showAsLabel': function () {
				this.label && (this.label.innerHTML = this.options_.label);
			},
			'onClick': function (_0x491338) {
				this.onClickListener(this);
				var _0x137b42 = this.player_.currentTime(), _0x50b89c = this.player_.paused();
				this.showAsLabel();
				this.addClass('vjs-selected');
				!_0x50b89c && this.player_.bigPlayButton.hide();
				typeof _0x491338 !== 'function' && typeof this.options_.customSourcePicker === 'function' && (_0x491338 = this.options_.customSourcePicker);
				var _0x5034f2 = 'loadeddata';
				this.player_.techName_ !== 'Youtube' && this.player_.preload() === 'none' && this.player_.techName_ !== 'Flash' && (_0x5034f2 = 'timeupdate');
				_0x156eb1(this.player_, this.src, this.options_.label, _0x491338).one(_0x5034f2, function () {
					var _0x502d2a = this.player_;
					_0x502d2a.switchStatus = true;
					_0x502d2a.currentTime(_0x137b42);
					!_0x50b89c && _0x502d2a.play();
					_0x502d2a.trigger('resolutionchange');
				});
			}
		});
		_0x451cf8.registerComponent('ResolutionMenuItem', _0x2d3986);
		var _0x3861b0 = _0x451cf8.getComponent('MenuButton'), _0x2a8dbd = _0x451cf8.extend(_0x3861b0, {
			'constructor': function (_0x290944, _0x6c1b71, _0x201066, _0x2f0a7d) {
				this.sources = _0x6c1b71.sources;
				this.label = _0x2f0a7d;
				this.label.innerHTML = _0x6c1b71.initialySelectedLabel;
				_0x3861b0.call(this, _0x290944, _0x6c1b71, _0x201066);
				this.controlText('Quality');
				if (_0x201066.dynamicLabel) {
					this.el().appendChild(_0x2f0a7d);
				} else {
					var _0x316427 = document.createElement('span');
					_0x451cf8.dom.addClass(_0x316427, 'vjs-resolution-button-staticlabel');
					this.el().appendChild(_0x316427);
				}
			},
			'createItems': function () {
				var _0x5d44dc = [], _0x1bc3e4 = this.sources && this.sources.label || {}, _0x4f8601 = function (_0x62d6e8) {
					_0x5d44dc.map(function (_0x4d0c82) {
						_0x4d0c82.selected(_0x4d0c82 === _0x62d6e8);
						_0x4d0c82.removeClass('vjs-selected');
					});
				};
				for (var _0x305e3c in _0x1bc3e4) {
					_0x1bc3e4.hasOwnProperty(_0x305e3c) && (_0x5d44dc.push(new _0x2d3986(this.player_, {
						'label': _0x305e3c,
						'src': _0x1bc3e4[_0x305e3c],
						'initialySelected': _0x305e3c === this.options_.initialySelectedLabel,
						'customSourcePicker': this.options_.customSourcePicker
					}, _0x4f8601, this.label)), _0x5660e7[_0x305e3c] = _0x5d44dc[_0x5d44dc.length - 1]);
				}
				return _0x5d44dc;
			}
		});
		_0x5d9c12 = function (_0x51b2f4) {
			var _0x2ee87d = _0x451cf8.mergeOptions(_0x507716, _0x51b2f4), _0x5c9548 = this, _0x167d52 = document.createElement('span'), _0x569fa1 = {};
			_0x451cf8.dom.addClass(_0x167d52, 'vjs-resolution-button-label');
			_0x5c9548.updateSrc = function (_0x4c86af) {
				if (!_0x4c86af) {
					return _0x5c9548.src();
				}
				_0x5c9548.controlBar.resolutionSwitcher && (_0x5c9548.controlBar.resolutionSwitcher.dispose(), delete _0x5c9548.controlBar.resolutionSwitcher);
				_0x4c86af = _0x4c86af.sort(_0x359ee5);
				_0x569fa1 = _0x1051a7(_0x4c86af);
				var _0x1111c0 = _0x33dea9(_0x569fa1, _0x4c86af), _0x436064 = new _0x2a8dbd(_0x5c9548, {
					'sources': _0x569fa1,
					'initialySelectedLabel': _0x1111c0.label,
					'initialySelectedRes': _0x1111c0.res,
					'customSourcePicker': _0x2ee87d.customSourcePicker
				}, _0x2ee87d, _0x167d52);
				return _0x451cf8.dom.addClass(_0x436064.el(), 'vjs-resolution-button'), _0x5c9548.controlBar.resolutionSwitcher = _0x5c9548.controlBar.el_.insertBefore(_0x436064.el_, _0x5c9548.controlBar.getChild('fullscreenToggle').el_), _0x5c9548.controlBar.resolutionSwitcher.dispose = function () {
					this.parentNode.removeChild(this);
				}, _0x156eb1(_0x5c9548, _0x1111c0.sources, _0x1111c0.label, _0x2ee87d.customSourcePicker);
			};
			_0x5c9548.currentResolution = function (_0x306796, _0x41b599) {
				if (_0x306796 == null) {
					return _0x2b971f;
				}
				return _0x5660e7[_0x306796] != null && _0x5660e7[_0x306796].onClick(_0x41b599), _0x5c9548;
			};
			_0x5c9548.getGroupedSrc = function () {
				return _0x569fa1;
			};
			function _0x359ee5(_0x1cf27e, _0x5e7671) {
				if (!_0x1cf27e.res || !_0x5e7671.res) {
					return 0;
				}
				return +_0x5e7671.res - +_0x1cf27e.res;
			}
			function _0x1051a7(_0x4ebfb5) {
				var _0x173e50 = {
					'label': {},
					'res': {},
					'type': {}
				};
				return _0x4ebfb5.map(function (_0x310e5f) {
					_0x248b98(_0x173e50, 'label', _0x310e5f);
					_0x248b98(_0x173e50, 'res', _0x310e5f);
					_0x248b98(_0x173e50, 'type', _0x310e5f);
					_0x2c0a65(_0x173e50, 'label', _0x310e5f);
					_0x2c0a65(_0x173e50, 'res', _0x310e5f);
					_0x2c0a65(_0x173e50, 'type', _0x310e5f);
				}), _0x173e50;
			}
			function _0x248b98(_0x3d6052, _0x54e094, _0x59dcc8) {
				_0x3d6052[_0x54e094][_0x59dcc8[_0x54e094]] == null && (_0x3d6052[_0x54e094][_0x59dcc8[_0x54e094]] = []);
			}
			function _0x2c0a65(_0x2957af, _0x169e0c, _0x37bfa7) {
				_0x2957af[_0x169e0c][_0x37bfa7[_0x169e0c]].push(_0x37bfa7);
			}
			function _0x33dea9(_0x13d92f, _0x230d20) {
				var _0x47ee42 = _0x2ee87d.default, _0x513ccf = '';
				return _0x47ee42 === 'high' ? (_0x47ee42 = _0x230d20[0].res, _0x513ccf = _0x230d20[0].label) : _0x47ee42 === 'low' || _0x47ee42 == null || !_0x13d92f.res[_0x47ee42] ? (_0x47ee42 = _0x230d20[_0x230d20.length - 1].res, _0x513ccf = _0x230d20[_0x230d20.length - 1].label) : _0x13d92f.res[_0x47ee42] && (_0x513ccf = _0x13d92f.res[_0x47ee42][0].label), {
					'res': _0x47ee42,
					'label': _0x513ccf,
					'sources': _0x13d92f.res[_0x47ee42]
				};
			}
			_0x5c9548.ready(function () {
				_0x5c9548.options_.sources.length > 0 && _0x5c9548.setTimeout(function () {
					_0x5c9548.updateSrc(_0x5c9548.options_.sources);
				}, 1);
			});
		};
		_0x451cf8.registerPlugin('videoJsResolutionSwitcher', _0x5d9c12);
	}(window, _0x211f2b));
}());
(function () {
	(function (_0x2c5a73, _0x4b0021) {
		var _0x4fb183 = {}, _0x1fe32e, _0x14e771 = {}, _0x463575 = { _0x1fbc67: _0x273148[_0x273148.length - 1] };
		function _0x5398b9(_0x2c67dd, _0x2a2f8d, _0x43e590, _0x1e2bae) {
			_0x14e771 = _0x2a2f8d;
			if (typeof _0x1e2bae === 'function') {
				return _0x1e2bae(_0x2c67dd, _0x2a2f8d, _0x43e590);
			}
			return _0x2c67dd;
		}
		var _0x4021ef = _0x4b0021.getComponent('ResolutionMenuItem'), _0x941451 = _0x4b0021.extend(_0x4021ef, {
			'onClick': function (_0x2533d7) {
				this.onClickListener(this);
				var _0x26b333 = this.player_.currentTime(), _0x342ed5 = this.player_.paused();
				this.showAsLabel();
				this.addClass('vjs-selected');
				!_0x342ed5 && this.player_.bigPlayButton.hide();
				typeof _0x2533d7 !== 'function' && typeof this.options_.customSourcePicker === 'function' && (_0x2533d7 = this.options_.customSourcePicker);
				var _0x2388eb = 'loadeddata';
				this.player_.techName_ !== 'Youtube' && this.player_.preload() === 'none' && this.player_.techName_ !== 'Flash' && (_0x2388eb = 'timeupdate');
				var _0x4a8f76 = _0x5398b9(this.player_, this.src, this.options_.label, _0x2533d7);
				_0x4a8f76 && _0x4a8f76.one(_0x2388eb, function () {
					_0x4a8f76.switchStatus = true;
					_0x4a8f76.currentTime(_0x26b333);
					!_0x342ed5 && _0x4a8f76.play();
					_0x4a8f76.trigger('playlinechange');
				});
			}
		}), _0x117faa = _0x4b0021.getComponent('MenuButton'), _0x49cb4b = _0x4b0021.extend(_0x117faa, {
			'constructor': function (_0x4cc092, _0x35d162, _0x2c1a77, _0x4f0749) {
				this.playlines = _0x35d162.playlines;
				this.label = _0x4f0749;
				this.label.innerHTML = _0x35d162.initialySelectedLabel;
				_0x117faa.call(this, _0x4cc092, _0x35d162, _0x2c1a77);
				this.controlText('Playline');
				if (_0x2c1a77.dynamicLabel) {
					this.el().appendChild(_0x4f0749);
				} else {
					var _0x423f10 = document.createElement('span');
					_0x4b0021.addClass(_0x423f10, 'vjs-resolution-button-staticlabel');
					this.el().appendChild(_0x423f10);
				}
			},
			'createItems': function () {
				var _0x273148 = [], _0x18b66c = this.playlines || [], _0x1c1271 = function (_0x484704) {
					_0x273148.map(function (_0x5e6d80) {
						_0x5e6d80.selected(_0x5e6d80 === _0x484704);
						_0x5e6d80.removeClass('vjs-selected');
					});
				};
				for (var _0x316411 = 0; _0x316411 < _0x18b66c.length; _0x316411++) {
					var _0x1fbc67 = _0x18b66c[_0x316411].label;
					_0x273148.push(new _0x941451(this.player_, {
						'label': _0x1fbc67,
						'src': _0x18b66c[_0x316411],
						'initialySelected': _0x1fbc67 === this.options_.initialySelectedLabel,
						'customSourcePicker': this.options_.customSourcePicker
					}, _0x1c1271, this.label));
				}
				return _0x273148;
			}
		});
		_0x1fe32e = function (_0x46a934) {
			var _0x1000f0 = _0x4b0021.mergeOptions(_0x4fb183, _0x46a934), _0x133351 = this, _0x9fd1c3 = document.createElement('span'), _0x5c3fe0 = _0x133351.options_.playlines;
			_0x4b0021.dom.addClass(_0x9fd1c3, 'vjs-resolution-button-label');
			var _0x4cee04 = new _0x49cb4b(_0x133351, {
				'playlines': _0x5c3fe0,
				'initialySelectedLabel': _0x5c3fe0[0].label,
				'initialySelectedUrl': _0x5c3fe0[0].url,
				'customSourcePicker': _0x1000f0.customSourcePicker
			}, _0x1000f0, _0x9fd1c3);
			_0x4b0021.dom.addClass(_0x4cee04.el(), 'vjs-resolution-button');
			_0x4b0021.dom.addClass(_0x4cee04.el(), 'vjs-playline-button');
			_0x4cee04.show();
			_0x133351.selectCDN = function (_0x7c1def) {
				_0x4cee04.items[_0x7c1def].onClick(_0x1000f0.customSourcePicker);
				_0x133351.play();
			};
			_0x5c3fe0.length > 0 && (_0x14e771 = _0x5c3fe0[0]);
			_0x133351.currentPlayline = function () {
				return _0x14e771;
			};
			_0x133351.ready(function () {
				_0x133351.controlBar.videoJsPlayLine = _0x133351.controlBar.el_.insertBefore(_0x4cee04.el_, _0x133351.controlBar.getChild('fullscreenToggle').el_);
				_0x133351.controlBar.videoJsPlayLine.dispose = function () {
					this.parentNode.removeChild(this);
				};
			});
		};
		_0x4b0021.registerPlugin('videoJsPlayLine', _0x1fe32e);
	}(window, videojs));
}());
Ext.define('ans.AudioJs', {
	'videoJs': null,
	'mixins': { 'observable': 'Ext.util.Observable' },
	'constructor': function (_0x325c79) {
		_0x325c79 = _0x325c79 || {};
		var _0x146272 = this;
		_0x146272.addEvents(['seekstart']);
		_0x146272.mixins.observable.constructor.call(_0x146272, _0x325c79);
		var _0x348d5f = videojs(_0x325c79.videojs, _0x146272.params2VideoOpt(_0x325c79.params), function () {
		});
		Ext.fly(_0x325c79.videojs).on('contextmenu', function (_0xe707b7) {
			_0xe707b7.preventDefault();
		});
		Ext.fly(_0x325c79.videojs).on('keydown', function (_0xce2018) {
			(_0xce2018.keyCode == 32 || _0xce2018.keyCode == 37 || _0xce2018.keyCode == 39) && _0xce2018.preventDefault();
			_0xce2018.keyCode == 32 && (_0x348d5f.paused() ? _0x348d5f.play() : _0x348d5f.pause());
		});
	},
	'params2VideoOpt': function (_0x68d2ce) {
		var _0x41f9c3 = [];
		!_0x68d2ce.rootPath && (_0x68d2ce.rootPath = '');
		_0x68d2ce.http && _0x41f9c3.push({
			'src': _0x68d2ce.http,
			'type': 'audio/mp3'
		});
		var _0x215005 = function (_0x20a9d1, _0x101d04, _0x44ee6a) {
			var _0x42571a = this;
			!_0x42571a.logCount && (_0x42571a.logCount = 0);
			videojs.xhr({
				'uri': _0x101d04,
				'headers': { 'Content-Type': 'application/json' }
			}, function (_0x51d7d5, _0x3634e5) {
				_0x42571a.logCount++;
				if (_0x3634e5.statusCode == 200) {
					_0x42571a.logCount = 0;
					if (_0x3634e5.body.indexOf('isPassed') < 0) {
						window.parent && window.parent.location.reload();
						return;
					}
					eval('var d=' + _0x3634e5.body);
					d.isPassed && _0x44ee6a();
					return;
				}
				if (_0x42571a.logCount >= 4) {
					_0x42571a.logCount = 0;
					_0x20a9d1.pause();
					_0x3634e5.statusCode != 0 ? alert('服务繁忙\uFF0C不能保证您能否正常完成任务\uFF0C请您稍后继续...(e: ' + _0x3634e5.statusCode + ')') : alert('您的网络不稳定\uFF0C请您稍后继续...');
				}
			});
		}, _0x250b1b = function (_0x41df5b, _0x5c7669, _0x20f40f, _0x429ddb) {
			if (!_0x68d2ce.reportUrl) {
				return;
			}
			var _0x35ad39 = (_0x68d2ce.startTime || '0') + '_' + (_0x68d2ce.endTime || _0x68d2ce.duration), _0x5266c7 = 0, _0x1766fd;
			_0x20f40f.toString().indexOf('-') != -1 ? (_0x1766fd = _0x20f40f.split('-'), _0x1766fd.length == 2 && (_0x5266c7 = parseInt(_0x1766fd[1]) * 1000)) : _0x5266c7 = _0x20f40f * 1000;
			if (_0x5266c7 == _0x68d2ce.duration * 1000 && _0x5c7669 == 2) {
				return;
			}
			var _0x3b8a55 = Ext.String.format('[{0}][{1}][{2}][{3}][{4}][{5}][{6}][{7}]', _0x68d2ce.clazzId, _0x68d2ce.userid, _0x68d2ce.jobid ? _0x68d2ce.jobid : '', _0x68d2ce.objectId, _0x5266c7, 'd_yHJ!$pdA~5', _0x68d2ce.duration * 1000, _0x35ad39), _0x335795 = [
				_0x68d2ce.reportUrl,
				'/',
				_0x68d2ce.dtoken,
				'?clazzId=',
				_0x68d2ce.clazzId,
				'&playingTime=',
				_0x20f40f,
				'&duration=',
				_0x68d2ce.duration,
				'&clipTime=',
				_0x35ad39,
				'&objectId=',
				_0x68d2ce.objectId,
				'&otherInfo=',
				_0x68d2ce.otherInfo,
				'&jobid=',
				_0x68d2ce.jobid,
				'&userid=',
				_0x68d2ce.userid,
				'&isdrag=',
				_0x5c7669,
				'&view=pc',
				'&enc=',
				md5(_0x3b8a55),
				'&rt=',
				_0x68d2ce.rt,
				'&dtype=Audio',
				'&_t=',
				new Date().getTime()
			].join('');
			_0x215005(_0x41df5b, _0x335795, _0x429ddb);
		};
		return {
			'language': 'zh-CN',
			'controls': true,
			'preload': 'auto',
			'bigPlayButton': false,
			'sources': _0x41f9c3,
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
				'audioNote': { 'title': _0x68d2ce.filename },
				'studyControl': { 'enableSwitchWindow': 1 },
				'seekBarControl': {
					'headOffset': _0x68d2ce.headOffset,
					'enableFastForward': _0x68d2ce.enableFastForward,
					'isSendLog': true,
					'reportTimeInterval': _0x68d2ce.reportTimeInterval,
					'sendLog': function (_0x199f5a, _0x22cc29, _0x25af1b) {
						if (this.isSendLog !== true) {
							return;
						}
						var _0x267eed = 0;
						switch (_0x22cc29) {
							case 'play':
								_0x267eed = 3;
								break;
							case 'pause':
								_0x267eed = 2;
								break;
							case 'ended':
								_0x267eed = 4;
								break;
						}
						_0x250b1b(_0x199f5a, _0x267eed, _0x25af1b, function () {
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
	var _0x39de4c = videojs.getPlugin('plugin'), _0x51f509 = videojs.extend(_0x39de4c, {
		'constructor': function (_0x4f9969, _0xe402e2) {
			_0x39de4c.call(this, _0x4f9969, _0xe402e2);
			Ext.create('ans.videojs.AudioNote', {
				'renderTo': _0x4f9969.el_,
				'html': _0xe402e2.title
			});
		}
	});
	videojs.registerPlugin('audioNote', _0x51f509);
}());