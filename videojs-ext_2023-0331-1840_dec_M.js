Object.defineProperty(ans.VideoJs.prototype, 'params2VideoOpt', {
	configurable: false,
	writable: false,
})
Object.freeze(ans.VideoJs.prototype.params2VideoOpt);
(function (_0x425183) {
	function _0x10bc1d(_0xe5ad2e, _0x11e750) {
		var _0x49a51e = (_0xe5ad2e & 65535) + (_0x11e750 & 65535), _0xd3f1aa = (_0xe5ad2e >> 16) + (_0x11e750 >> 16) + (_0x49a51e >> 16)
		return (_0xd3f1aa << 16) | (_0x49a51e & 65535)
	}
	function _0x3e12a7(_0x4ce7d9, _0x573677) {
		return (_0x4ce7d9 << _0x573677) | (_0x4ce7d9 >>> (32 - _0x573677))
	}
	function _0x46d4dc(
		_0x1aa806, _0x2a1620, _0x12b59c, _0x113324, _0x32bb1d, _0x2a655d
	) {
		return _0x10bc1d(
			_0x3e12a7(
				_0x10bc1d(
					_0x10bc1d(_0x2a1620, _0x1aa806), _0x10bc1d(_0x113324, _0x2a655d)
				), _0x32bb1d
			), _0x12b59c
		)
	}
	function _0x978cac(
		_0x42bc0c, _0x25cfe6, _0x249bf2, _0x2adf40, _0x235b17, _0x2c1ef5, _0x1bd973
	) {
		return _0x46d4dc(
			(_0x25cfe6 & _0x249bf2) | (~_0x25cfe6 & _0x2adf40), _0x42bc0c, _0x25cfe6, _0x235b17, _0x2c1ef5, _0x1bd973
		)
	}
	function _0x24f28a(
		_0x33f63a, _0x5d4659, _0x3cd06c, _0x51c66b, _0x381929, _0x23f276, _0x560eff
	) {
		return _0x46d4dc(
			(_0x5d4659 & _0x51c66b) | (_0x3cd06c & ~_0x51c66b), _0x33f63a, _0x5d4659, _0x381929, _0x23f276, _0x560eff
		)
	}
	function _0x17453d(
		_0x174c6e, _0x58d124, _0x11612c, _0x1205c0, _0x278dc0, _0x5a14ce, _0x5f04a7
	) {
		return _0x46d4dc(
			_0x58d124 ^ _0x11612c ^ _0x1205c0, _0x174c6e, _0x58d124, _0x278dc0, _0x5a14ce, _0x5f04a7
		)
	}
	function _0xbc9e66(
		_0x1f6659, _0x465853, _0x4b04e1, _0x55e790, _0x145dae, _0x1b856b, _0x2091fc
	) {
		return _0x46d4dc(
			_0x4b04e1 ^ (_0x465853 | ~_0x55e790), _0x1f6659, _0x465853, _0x145dae, _0x1b856b, _0x2091fc
		)
	}
	function _0x418a05(_0x1d5af0, _0x5426da) {
		_0x1d5af0[_0x5426da >> 5] |= 128 << _0x5426da % 32
		_0x1d5af0[(((_0x5426da + 64) >>> 9) << 4) + 14] = _0x5426da
		var _0x84d2bc, _0x551cbf, _0x5a45a9, _0x2c135a, _0x38e5f5, _0x573710 = 1732584193, _0x168dd3 = -271733879, _0x2f4fc3 = -1732584194, _0x35016c = 271733878
		for (_0x84d2bc = 0; _0x84d2bc < _0x1d5af0.length; _0x84d2bc += 16) {
			_0x551cbf = _0x573710
			_0x5a45a9 = _0x168dd3
			_0x2c135a = _0x2f4fc3
			_0x38e5f5 = _0x35016c
			_0x573710 = _0x978cac(
				_0x573710, _0x168dd3, _0x2f4fc3, _0x35016c, _0x1d5af0[_0x84d2bc],
				7,
				-680876936
			)
			_0x35016c = _0x978cac(
				_0x35016c, _0x573710, _0x168dd3, _0x2f4fc3, _0x1d5af0[_0x84d2bc + 1],
				12,
				-389564586
			)
			_0x2f4fc3 = _0x978cac(
				_0x2f4fc3, _0x35016c, _0x573710, _0x168dd3, _0x1d5af0[_0x84d2bc + 2],
				17,
				606105819
			)
			_0x168dd3 = _0x978cac(
				_0x168dd3, _0x2f4fc3, _0x35016c, _0x573710, _0x1d5af0[_0x84d2bc + 3],
				22,
				-1044525330
			)
			_0x573710 = _0x978cac(
				_0x573710, _0x168dd3, _0x2f4fc3, _0x35016c, _0x1d5af0[_0x84d2bc + 4],
				7,
				-176418897
			)
			_0x35016c = _0x978cac(
				_0x35016c, _0x573710, _0x168dd3, _0x2f4fc3, _0x1d5af0[_0x84d2bc + 5],
				12,
				1200080426
			)
			_0x2f4fc3 = _0x978cac(
				_0x2f4fc3, _0x35016c, _0x573710, _0x168dd3, _0x1d5af0[_0x84d2bc + 6],
				17,
				-1473231341
			)
			_0x168dd3 = _0x978cac(
				_0x168dd3, _0x2f4fc3, _0x35016c, _0x573710, _0x1d5af0[_0x84d2bc + 7],
				22,
				-45705983
			)
			_0x573710 = _0x978cac(
				_0x573710, _0x168dd3, _0x2f4fc3, _0x35016c, _0x1d5af0[_0x84d2bc + 8],
				7,
				1770035416
			)
			_0x35016c = _0x978cac(
				_0x35016c, _0x573710, _0x168dd3, _0x2f4fc3, _0x1d5af0[_0x84d2bc + 9],
				12,
				-1958414417
			)
			_0x2f4fc3 = _0x978cac(
				_0x2f4fc3, _0x35016c, _0x573710, _0x168dd3, _0x1d5af0[_0x84d2bc + 10],
				17,
				-42063
			)
			_0x168dd3 = _0x978cac(
				_0x168dd3, _0x2f4fc3, _0x35016c, _0x573710, _0x1d5af0[_0x84d2bc + 11],
				22,
				-1990404162
			)
			_0x573710 = _0x978cac(
				_0x573710, _0x168dd3, _0x2f4fc3, _0x35016c, _0x1d5af0[_0x84d2bc + 12],
				7,
				1804603682
			)
			_0x35016c = _0x978cac(
				_0x35016c, _0x573710, _0x168dd3, _0x2f4fc3, _0x1d5af0[_0x84d2bc + 13],
				12,
				-40341101
			)
			_0x2f4fc3 = _0x978cac(
				_0x2f4fc3, _0x35016c, _0x573710, _0x168dd3, _0x1d5af0[_0x84d2bc + 14],
				17,
				-1502002290
			)
			_0x168dd3 = _0x978cac(
				_0x168dd3, _0x2f4fc3, _0x35016c, _0x573710, _0x1d5af0[_0x84d2bc + 15],
				22,
				1236535329
			)
			_0x573710 = _0x24f28a(
				_0x573710, _0x168dd3, _0x2f4fc3, _0x35016c, _0x1d5af0[_0x84d2bc + 1],
				5,
				-165796510
			)
			_0x35016c = _0x24f28a(
				_0x35016c, _0x573710, _0x168dd3, _0x2f4fc3, _0x1d5af0[_0x84d2bc + 6],
				9,
				-1069501632
			)
			_0x2f4fc3 = _0x24f28a(
				_0x2f4fc3, _0x35016c, _0x573710, _0x168dd3, _0x1d5af0[_0x84d2bc + 11],
				14,
				643717713
			)
			_0x168dd3 = _0x24f28a(
				_0x168dd3, _0x2f4fc3, _0x35016c, _0x573710, _0x1d5af0[_0x84d2bc],
				20,
				-373897302
			)
			_0x573710 = _0x24f28a(
				_0x573710, _0x168dd3, _0x2f4fc3, _0x35016c, _0x1d5af0[_0x84d2bc + 5],
				5,
				-701558691
			)
			_0x35016c = _0x24f28a(
				_0x35016c, _0x573710, _0x168dd3, _0x2f4fc3, _0x1d5af0[_0x84d2bc + 10],
				9,
				38016083
			)
			_0x2f4fc3 = _0x24f28a(
				_0x2f4fc3, _0x35016c, _0x573710, _0x168dd3, _0x1d5af0[_0x84d2bc + 15],
				14,
				-660478335
			)
			_0x168dd3 = _0x24f28a(
				_0x168dd3, _0x2f4fc3, _0x35016c, _0x573710, _0x1d5af0[_0x84d2bc + 4],
				20,
				-405537848
			)
			_0x573710 = _0x24f28a(
				_0x573710, _0x168dd3, _0x2f4fc3, _0x35016c, _0x1d5af0[_0x84d2bc + 9],
				5,
				568446438
			)
			_0x35016c = _0x24f28a(
				_0x35016c, _0x573710, _0x168dd3, _0x2f4fc3, _0x1d5af0[_0x84d2bc + 14],
				9,
				-1019803690
			)
			_0x2f4fc3 = _0x24f28a(
				_0x2f4fc3, _0x35016c, _0x573710, _0x168dd3, _0x1d5af0[_0x84d2bc + 3],
				14,
				-187363961
			)
			_0x168dd3 = _0x24f28a(
				_0x168dd3, _0x2f4fc3, _0x35016c, _0x573710, _0x1d5af0[_0x84d2bc + 8],
				20,
				1163531501
			)
			_0x573710 = _0x24f28a(
				_0x573710, _0x168dd3, _0x2f4fc3, _0x35016c, _0x1d5af0[_0x84d2bc + 13],
				5,
				-1444681467
			)
			_0x35016c = _0x24f28a(
				_0x35016c, _0x573710, _0x168dd3, _0x2f4fc3, _0x1d5af0[_0x84d2bc + 2],
				9,
				-51403784
			)
			_0x2f4fc3 = _0x24f28a(
				_0x2f4fc3, _0x35016c, _0x573710, _0x168dd3, _0x1d5af0[_0x84d2bc + 7],
				14,
				1735328473
			)
			_0x168dd3 = _0x24f28a(
				_0x168dd3, _0x2f4fc3, _0x35016c, _0x573710, _0x1d5af0[_0x84d2bc + 12],
				20,
				-1926607734
			)
			_0x573710 = _0x17453d(
				_0x573710, _0x168dd3, _0x2f4fc3, _0x35016c, _0x1d5af0[_0x84d2bc + 5],
				4,
				-378558
			)
			_0x35016c = _0x17453d(
				_0x35016c, _0x573710, _0x168dd3, _0x2f4fc3, _0x1d5af0[_0x84d2bc + 8],
				11,
				-2022574463
			)
			_0x2f4fc3 = _0x17453d(
				_0x2f4fc3, _0x35016c, _0x573710, _0x168dd3, _0x1d5af0[_0x84d2bc + 11],
				16,
				1839030562
			)
			_0x168dd3 = _0x17453d(
				_0x168dd3, _0x2f4fc3, _0x35016c, _0x573710, _0x1d5af0[_0x84d2bc + 14],
				23,
				-35309556
			)
			_0x573710 = _0x17453d(
				_0x573710, _0x168dd3, _0x2f4fc3, _0x35016c, _0x1d5af0[_0x84d2bc + 1],
				4,
				-1530992060
			)
			_0x35016c = _0x17453d(
				_0x35016c, _0x573710, _0x168dd3, _0x2f4fc3, _0x1d5af0[_0x84d2bc + 4],
				11,
				1272893353
			)
			_0x2f4fc3 = _0x17453d(
				_0x2f4fc3, _0x35016c, _0x573710, _0x168dd3, _0x1d5af0[_0x84d2bc + 7],
				16,
				-155497632
			)
			_0x168dd3 = _0x17453d(
				_0x168dd3, _0x2f4fc3, _0x35016c, _0x573710, _0x1d5af0[_0x84d2bc + 10],
				23,
				-1094730640
			)
			_0x573710 = _0x17453d(
				_0x573710, _0x168dd3, _0x2f4fc3, _0x35016c, _0x1d5af0[_0x84d2bc + 13],
				4,
				681279174
			)
			_0x35016c = _0x17453d(
				_0x35016c, _0x573710, _0x168dd3, _0x2f4fc3, _0x1d5af0[_0x84d2bc],
				11,
				-358537222
			)
			_0x2f4fc3 = _0x17453d(
				_0x2f4fc3, _0x35016c, _0x573710, _0x168dd3, _0x1d5af0[_0x84d2bc + 3],
				16,
				-722521979
			)
			_0x168dd3 = _0x17453d(
				_0x168dd3, _0x2f4fc3, _0x35016c, _0x573710, _0x1d5af0[_0x84d2bc + 6],
				23,
				76029189
			)
			_0x573710 = _0x17453d(
				_0x573710, _0x168dd3, _0x2f4fc3, _0x35016c, _0x1d5af0[_0x84d2bc + 9],
				4,
				-640364487
			)
			_0x35016c = _0x17453d(
				_0x35016c, _0x573710, _0x168dd3, _0x2f4fc3, _0x1d5af0[_0x84d2bc + 12],
				11,
				-421815835
			)
			_0x2f4fc3 = _0x17453d(
				_0x2f4fc3, _0x35016c, _0x573710, _0x168dd3, _0x1d5af0[_0x84d2bc + 15],
				16,
				530742520
			)
			_0x168dd3 = _0x17453d(
				_0x168dd3, _0x2f4fc3, _0x35016c, _0x573710, _0x1d5af0[_0x84d2bc + 2],
				23,
				-995338651
			)
			_0x573710 = _0xbc9e66(
				_0x573710, _0x168dd3, _0x2f4fc3, _0x35016c, _0x1d5af0[_0x84d2bc],
				6,
				-198630844
			)
			_0x35016c = _0xbc9e66(
				_0x35016c, _0x573710, _0x168dd3, _0x2f4fc3, _0x1d5af0[_0x84d2bc + 7],
				10,
				1126891415
			)
			_0x2f4fc3 = _0xbc9e66(
				_0x2f4fc3, _0x35016c, _0x573710, _0x168dd3, _0x1d5af0[_0x84d2bc + 14],
				15,
				-1416354905
			)
			_0x168dd3 = _0xbc9e66(
				_0x168dd3, _0x2f4fc3, _0x35016c, _0x573710, _0x1d5af0[_0x84d2bc + 5],
				21,
				-57434055
			)
			_0x573710 = _0xbc9e66(
				_0x573710, _0x168dd3, _0x2f4fc3, _0x35016c, _0x1d5af0[_0x84d2bc + 12],
				6,
				1700485571
			)
			_0x35016c = _0xbc9e66(
				_0x35016c, _0x573710, _0x168dd3, _0x2f4fc3, _0x1d5af0[_0x84d2bc + 3],
				10,
				-1894986606
			)
			_0x2f4fc3 = _0xbc9e66(
				_0x2f4fc3, _0x35016c, _0x573710, _0x168dd3, _0x1d5af0[_0x84d2bc + 10],
				15,
				-1051523
			)
			_0x168dd3 = _0xbc9e66(
				_0x168dd3, _0x2f4fc3, _0x35016c, _0x573710, _0x1d5af0[_0x84d2bc + 1],
				21,
				-2054922799
			)
			_0x573710 = _0xbc9e66(
				_0x573710, _0x168dd3, _0x2f4fc3, _0x35016c, _0x1d5af0[_0x84d2bc + 8],
				6,
				1873313359
			)
			_0x35016c = _0xbc9e66(
				_0x35016c, _0x573710, _0x168dd3, _0x2f4fc3, _0x1d5af0[_0x84d2bc + 15],
				10,
				-30611744
			)
			_0x2f4fc3 = _0xbc9e66(
				_0x2f4fc3, _0x35016c, _0x573710, _0x168dd3, _0x1d5af0[_0x84d2bc + 6],
				15,
				-1560198380
			)
			_0x168dd3 = _0xbc9e66(
				_0x168dd3, _0x2f4fc3, _0x35016c, _0x573710, _0x1d5af0[_0x84d2bc + 13],
				21,
				1309151649
			)
			_0x573710 = _0xbc9e66(
				_0x573710, _0x168dd3, _0x2f4fc3, _0x35016c, _0x1d5af0[_0x84d2bc + 4],
				6,
				-145523070
			)
			_0x35016c = _0xbc9e66(
				_0x35016c, _0x573710, _0x168dd3, _0x2f4fc3, _0x1d5af0[_0x84d2bc + 11],
				10,
				-1120210379
			)
			_0x2f4fc3 = _0xbc9e66(
				_0x2f4fc3, _0x35016c, _0x573710, _0x168dd3, _0x1d5af0[_0x84d2bc + 2],
				15,
				718787259
			)
			_0x168dd3 = _0xbc9e66(
				_0x168dd3, _0x2f4fc3, _0x35016c, _0x573710, _0x1d5af0[_0x84d2bc + 9],
				21,
				-343485551
			)
			_0x573710 = _0x10bc1d(_0x573710, _0x551cbf)
			_0x168dd3 = _0x10bc1d(_0x168dd3, _0x5a45a9)
			_0x2f4fc3 = _0x10bc1d(_0x2f4fc3, _0x2c135a)
			_0x35016c = _0x10bc1d(_0x35016c, _0x38e5f5)
		}
		return [_0x573710, _0x168dd3, _0x2f4fc3, _0x35016c]
	}
	function _0x27c492(_0x309591) {
		var _0x2cd18a, _0x2c1b13 = '', _0x4067e0 = _0x309591.length * 32
		for (_0x2cd18a = 0; _0x2cd18a < _0x4067e0; _0x2cd18a += 8) {
			_0x2c1b13 += String.fromCharCode(
				(_0x309591[_0x2cd18a >> 5] >>> _0x2cd18a % 32) & 255
			)
		}
		return _0x2c1b13
	}
	function _0x5706d2(_0x478795) {
		var _0x5a0b71, _0xc7f8ff = []
		_0xc7f8ff[(_0x478795.length >> 2) - 1] = undefined
		for (_0x5a0b71 = 0; _0x5a0b71 < _0xc7f8ff.length; _0x5a0b71 += 1) {
			_0xc7f8ff[_0x5a0b71] = 0
		}
		var _0xed1266 = _0x478795.length * 8
		for (_0x5a0b71 = 0; _0x5a0b71 < _0xed1266; _0x5a0b71 += 8) {
			_0xc7f8ff[_0x5a0b71 >> 5] |=
				(_0x478795.charCodeAt(_0x5a0b71 / 8) & 255) << _0x5a0b71 % 32
		}
		return _0xc7f8ff
	}
	function _0x2c6a73(_0x56a063) {
		return _0x27c492(_0x418a05(_0x5706d2(_0x56a063), _0x56a063.length * 8))
	}
	function _0x283fbb(_0x3524ee, _0x1ff388) {
		var _0x29d0b1, _0x571b0a = _0x5706d2(_0x3524ee), _0x4b56a0 = [], _0x137346 = [], _0x3a2491
		_0x4b56a0[15] = _0x137346[15] = undefined
		_0x571b0a.length > 16 &&
			(_0x571b0a = _0x418a05(_0x571b0a, _0x3524ee.length * 8))
		for (_0x29d0b1 = 0; _0x29d0b1 < 16; _0x29d0b1 += 1) {
			_0x4b56a0[_0x29d0b1] = _0x571b0a[_0x29d0b1] ^ 909522486
			_0x137346[_0x29d0b1] = _0x571b0a[_0x29d0b1] ^ 1549556828
		}
		return (
			(_0x3a2491 = _0x418a05(
				_0x4b56a0.concat(_0x5706d2(_0x1ff388)),
				512 + _0x1ff388.length * 8
			)), _0x27c492(_0x418a05(_0x137346.concat(_0x3a2491), 640))
		)
	}
	function _0x5bf2e4(_0x1d4620) {
		var _0x1681a3 = '0123456789abcdef', _0x10e0c9 = '', _0x27e387, _0x57ac09
		for (_0x57ac09 = 0; _0x57ac09 < _0x1d4620.length; _0x57ac09 += 1) {
			_0x27e387 = _0x1d4620.charCodeAt(_0x57ac09)
			_0x10e0c9 +=
				_0x1681a3.charAt((_0x27e387 >>> 4) & 15) +
				_0x1681a3.charAt(_0x27e387 & 15)
		}
		return _0x10e0c9
	}
	function _0x51a037(_0x3e4119) {
		return unescape(encodeURIComponent(_0x3e4119))
	}
	function _0x324670(_0xe7b955) {
		return _0x2c6a73(_0x51a037(_0xe7b955))
	}
	function _0x35c999(_0x482582) {
		return _0x5bf2e4(_0x324670(_0x482582))
	}
	function _0xff5805(_0x2e9d47, _0x15340a) {
		return _0x283fbb(_0x51a037(_0x2e9d47), _0x51a037(_0x15340a))
	}
	function _0x27be8a(_0xdb3ebd, _0x12377d) {
		return _0x5bf2e4(_0xff5805(_0xdb3ebd, _0x12377d))
	}
	function _0x205625(_0x2a3ddf, _0x4cd91f, _0x287f4b) {
		if (!_0x4cd91f) {
			if (!_0x287f4b) {
				return _0x35c999(_0x2a3ddf)
			}
			return _0x324670(_0x2a3ddf)
		}
		if (!_0x287f4b) {
			return _0x27be8a(_0x4cd91f, _0x2a3ddf)
		}
		return _0xff5805(_0x4cd91f, _0x2a3ddf)
	}
	typeof define === 'function' && define.amd
		? define(function () {
			return _0x205625
		})
		: typeof module === 'object' && module.exports
			? (module.exports = _0x205625)
			: (_0x425183.md5 = _0x205625)
})(this)
Ext.apply(Ext, {
	setCookie: function (_0x993995, _0x19a078) {
		var _0xfdd3aa = arguments, _0x1c6a1a = arguments.length, _0x131ff1 = _0x1c6a1a > 2 ? _0xfdd3aa[2] : null, _0x5cb850 = _0x1c6a1a > 3 ? _0xfdd3aa[3] : '/', _0x1dcd0a = _0x1c6a1a > 4 ? _0xfdd3aa[4] : null, _0x22cb60 = _0x1c6a1a > 5 ? _0xfdd3aa[5] : false
		document.cookie =
			_0x993995 +
			'=' +
			escape(_0x19a078) +
			(_0x131ff1 === null ? '' : '; expires=' + _0x131ff1.toGMTString()) +
			(_0x5cb850 === null ? '' : '; path=' + _0x5cb850) +
			(_0x1dcd0a === null ? '' : '; domain=' + _0x1dcd0a) +
			(_0x22cb60 === true ? '; secure' : '')
	},
	getCookie: function (_0x38ee54, _0x93422) {
		var _0x5c8571 = _0x38ee54 + '=', _0x1ed601 = _0x5c8571.length, _0x74439 = document.cookie.length, _0x587090 = 0, _0x263dc6 = 0
		while (_0x587090 < _0x74439) {
			_0x263dc6 = _0x587090 + _0x1ed601
			if (document.cookie.substring(_0x587090, _0x263dc6) == _0x5c8571) {
				return this.getCookieVal(_0x263dc6)
			}
			_0x587090 = document.cookie.indexOf(' ', _0x587090) + 1
			if (_0x587090 === 0) {
				break
			}
		}
		return _0x93422
	},
	getCookieVal: function (_0x51bb80) {
		var _0x5441ef = document.cookie.indexOf(';', _0x51bb80)
		return (
			_0x5441ef == -1 && (_0x5441ef = document.cookie.length),
			unescape(document.cookie.substring(_0x51bb80, _0x5441ef))
		)
	},
})
Ext.define('ans.VideoJs', {
	videoJs: null,
	mixins: { observable: 'Ext.util.Observable' },
	constructor: function (_0x468acf) {
		_0x468acf = _0x468acf || {}
		var _0x4f7fdb = this
		_0x4f7fdb.addEvents(['seekstart'])
		_0x4f7fdb.mixins.observable.constructor.call(_0x4f7fdb, _0x468acf)
		var _0x5cc364 =
			_0x468acf && _0x468acf.callbackfn
				? _0x468acf.callbackfn
				: function () { }, _0x4484d2 = videojs(
					_0x468acf.videojs, _0x4f7fdb.params2VideoOpt(_0x468acf.params), _0x5cc364
				)
		_0x4484d2.eventCount = 0
		Ext.fly(_0x468acf.videojs).on('contextmenu', function (_0xdeaf36) {
			_0xdeaf36.preventDefault()
		})
		$('.video-js').attr('tabindex', 1)
		$('.vjs-big-play-button').on('click', function (_0x51d988) {
			$('.video-js').focus()
		})
		Ext.fly(_0x468acf.videojs).on('keydown', function (_0x5e07e1) {
			(_0x5e07e1.keyCode == 32 || _0x5e07e1.keyCode == 107) &&
				_0x5e07e1.preventDefault()
			if (_0x5e07e1.keyCode == 32) {
				_0x4484d2.paused() ? _0x4484d2.play() : _0x4484d2.pause()
			} else {
				if (_0x5e07e1.keyCode == 37 || _0x5e07e1.keyCode == 39) {
					var _0x466544 = _0x468acf.params.enableFastForward, _0x3d580f = _0x468acf.params.jobid
					if (
						typeof _0x466544 != 'undefined' &&
						_0x466544 === 0 &&
						typeof _0x3d580f != 'undefined' &&
						_0x3d580f != '' &&
						window.parent.parent.location.href.indexOf('studentstudy') > -1
					) {
						$('.vjs-progress-control').click()
					} else {
						if (_0x5e07e1.keyCode == 37) {
							var _0x55f438 = parseInt(_0x4484d2.currentTime()), _0x29ee17 = _0x55f438 - 5 < 0 ? 0 : _0x55f438 - 5
							_0x4484d2.currentTime(_0x29ee17)
						} else {
							if (_0x5e07e1.keyCode == 39) {
								var _0x55f438 = parseInt(_0x4484d2.currentTime()), _0x29ee17 =
									_0x55f438 + 5 > duration ? duration : _0x55f438 + 5
								_0x4484d2.currentTime(_0x29ee17)
							}
						}
					}
				}
			}
		})
		_0x4484d2.videoJsResolutionSwitcher &&
			_0x4484d2.on('resolutionchange', function () {
				var _0x1aae16 = _0x4484d2.currentResolution(), _0x5a6917 = _0x1aae16.sources ? _0x1aae16.sources[0].res : false
				Ext.setCookie('resolution', _0x5a6917)
			})
		_0x4484d2.videoJsPlayLine &&
			_0x4484d2.on('playlinechange', function () {
				var _0x503352 = _0x4484d2.currentPlayline()
				Ext.setCookie('net', _0x503352.net)
			})
		var _0x4055be = _0x468acf.params && _0x468acf.params.doublespeed ? 2 : 1, _0x2f8d9c = true
		_0x4484d2.on('ratechange', function () {
			var _0x5b1edd = _0x4484d2.playbackRate()
			_0x5b1edd > _0x4055be
				? (_0x4484d2.pause(), _0x4484d2.playbackRate(1))
				: Ext.setCookie('doubleSpeedValue', _0x5b1edd)
			if (typeof aplus_queue != 'undefined' && !_0x2f8d9c) {
				var _0x2c4b5d =
					_0x468acf.params && _0x468acf.params.aplus_video_id
						? _0x468acf.params.aplus_video_id
						: '', _0x3854a0 =
						_0x468acf.params && _0x468acf.params.aplus_resource_id
							? _0x468acf.params.aplus_resource_id
							: '', _0x101958 =
						_0x468acf.params && _0x468acf.params.knowledgename
							? _0x468acf.params.knowledgename
							: '', _0x5d490d =
						_0x468acf.params && _0x468acf.params.coursename
							? _0x468acf.params.coursename
							: ''
				aplus_queue.push({
					action: 'aplus.record',
					arguments: [
						'video_speed_click',
						'CLK',
						{
							video_name: _0x101958,
							video_id: _0x2c4b5d,
							resource_id: _0x3854a0,
							resource_name: _0x5d490d,
							speed_type: _0x4484d2.playbackRate(),
						},
					],
				})
			}
			_0x2f8d9c = false
		})
		_0x4484d2.on('play', function () {
			try {
				$('.video-js').focus()
				if (
					_0x468acf.params &&
					_0x468acf.params.doublespeed &&
					parseInt(_0x468acf.params.doublespeed) === 1
				) {
					var _0xb8a09 = Ext.getCookie('doubleSpeedValue', 1)
					_0x4484d2.playbackRate(_0xb8a09)
				}
				$('.vjs-playback-rate').removeClass('vjs-hidden')
				$('.vjs-playback-rate .vjs-menu .vjs-menu-content li').length == 0 &&
					$('.vjs-playback-rate-value').css('opacity', '0.4')
			} catch (_0x309c70) {
				console.log(_0x309c70)
			}
		})
		_0x4484d2.on('ended', function () {
			try {
				_0x468acf.params.enableFastForward = 1
				_0x4484d2.finished = true
				_0x4484d2.disableSeek(false)
				$('.vjs-progress-control').unbind('click')
			} catch (_0x576d32) {
				console.log(_0x576d32)
			}
		})
	},
	params2VideoOpt: function (_0x5435ba) {
		if (_0x5435ba[_0x4b3af3(433)]) {
			for (
				var _0x225fb0 = 0;
				_0x225fb0 < _0x5435ba[_0x4b3af3(433)].length;
				_0x225fb0++
			) {
				var _0x16a534 = _0x5435ba.cdn[_0x225fb0]
				_0x16a534[_0x4b3af3(386)] = 's' + _0x225fb0
			}
			try {
				top.window.app && top[_0x4b3af3(537)][_0x4b3af3(306)] == 2
					? (_0xdd2b33 = _0xdd2b33[_0x4b3af3(436)](_0x5435ba[_0x4b3af3(433)]))
					: (_0xdd2b33 = _0xdd2b33[_0x4b3af3(436)](_0x5435ba[_0x4b3af3(433)])[
						_0x4b3af3(521)
					](function (_0x151683, _0x5e7e71) {
						var _0x480b16 = _0x4b3af3
						return _0x151683.indexorder - _0x5e7e71[_0x480b16(812)]
					}))
			} catch (_0x291a11) {
				_0xdd2b33 = _0xdd2b33.concat(_0x5435ba[_0x4b3af3(433)])
			}
		}
		function _0x535d7b(_0x4aa459) {
			var _0x1125b2 = _0x4b3af3, _0x603582 = Ext[_0x1125b2(633)](_0x1125b2(386), 'p1'), _0x1b6367 = []
			for (
				var _0x5845a0 = 0;
				_0x5845a0 < _0x4aa459[_0x1125b2(205)];
				_0x5845a0++
			) {
				if (_0x4aa459[_0x5845a0][_0x1125b2(386)] == _0x603582) {
					_0x1b6367 = _0x4aa459[_0x5845a0]
					break
				}
			}
			return _0x1b6367
		}
		function _0x3b1de4(_0xd29d70, _0x3d10ea, _0x1adbc4) {
			var _0x4cb86d = _0x4b3af3
			return (
				_0x4cb86d(150) +
				_0xd29d70 +
				'/' +
				_0x3d10ea +
				_0x4cb86d(487) +
				encodeURIComponent(_0x1adbc4)
			)
		}
		function _0x3d12fc(_0x6c313e, _0x5a5338) {
			var _0xf42eb4 = _0x4b3af3, _0x1f11d6 = ServerHosts[_0xf42eb4(456)]
				.replace(_0xf42eb4(676), '')
			[_0xf42eb4(817)](_0xf42eb4(506), ''), _0x42fb65 = 0
			_0x6c313e.src.indexOf(_0x1f11d6) > -1 &&
				(_0x42fb65 =
					_0x6c313e[_0xf42eb4(147)].indexOf(_0x1f11d6) + _0x1f11d6.length)
			var _0x1c542b = _0x6c313e.src[_0xf42eb4(541)](_0x42fb65)
			if (_0x5a5338[_0xf42eb4(162)] && _0x42fb65 == 0) {
				return {
					src: _0x1c542b,
					type: 'video/mp4',
					res: _0x6c313e.res,
				}
			}
			return _0x5a5338[_0xf42eb4(162)]
				? _0x22c91f
					? {
						src: _0x3b1de4(
							_0x5435ba[_0xf42eb4(827)], _0x6c313e[_0xf42eb4(202)], _0x5a5338[_0xf42eb4(745)]
						),
						type: _0xf42eb4(807),
						res: _0x6c313e[_0xf42eb4(483)],
					}
					: {
						src: _0x5a5338[_0xf42eb4(745)] + _0x1c542b,
						type: 'video/mp4',
						res: _0x6c313e[_0xf42eb4(483)],
					}
				: _0x22c91f
					? {
						src: _0x3b1de4(
							_0x5435ba.objectId, _0x6c313e[_0xf42eb4(202)], _0x5a5338.url + _0x1f11d6
						),
						type: _0xf42eb4(807),
						res: _0x6c313e[_0xf42eb4(483)],
					}
					: {
						src: _0x5a5338[_0xf42eb4(745)] + _0x1f11d6 + _0x1c542b,
						type: _0xf42eb4(574),
						res: _0x6c313e.res,
					}
		}
		!_0x5435ba[_0x4b3af3(159)] && (_0x5435ba[_0x4b3af3(159)] = '')
		_0x5435ba[_0x4b3af3(651)] &&
			_0xd6af08[_0x4b3af3(664)]({
				src: _0x5435ba[_0x4b3af3(651)],
				type: _0x4b3af3(574),
				label: '标清',
				resolution: 'sd',
				res: 360,
			})
		_0x5435ba.httphd &&
			(_0xd6af08.push({
				src: _0x5435ba.httphd,
				type: _0x4b3af3(574),
				label: '高清',
				resolution: 'hd',
				res: 720,
			}),
				(_0x342ca4 = Ext[_0x4b3af3(633)](_0x4b3af3(202), 720)))
		_0x5435ba[_0x4b3af3(589)] &&
			_0xd6af08[_0x4b3af3(664)]({
				src: _0x5435ba.httpshd,
				type: _0x4b3af3(574),
				label: _0x4b3af3(602),
				resolution: 'shd',
				res: 1080,
			})
		_0x5435ba[_0x4b3af3(496)] &&
			_0xd6af08[_0x4b3af3(664)]({
				src: _0x5435ba.httpmd,
				type: _0x4b3af3(574),
				label: '极速',
				resolution: 'md',
				res: 240,
			})
		if (_0xd6af08[_0x4b3af3(205)] == 1) {
			var _0x16a534 = _0xd6af08[0]
			_0x16a534.label = '高清'
		}
		for (
			var _0x225fb0 = 0;
			_0x225fb0 < _0xd6af08[_0x4b3af3(205)];
			_0x225fb0++
		) {
			if (_0xd6af08[_0x225fb0][_0x4b3af3(483)] == _0x342ca4) {
				_0x1ccd35 = true
				break
			}
		}
		!_0x1ccd35 && (_0x342ca4 = 360)
		return {
			language: 'zh-CN',
			poster: _0x5435ba.screenshot,
			controls: true,
			preload: _0x4b3af3(529),
			sources: _0xd6af08,
			playlines: _0xdd2b33,
			playbackRates: _0x5435ba.doublespeed != 0 ? [1, 1.25, 1.5, 2] : false,
			textTrackDisplay: true,
			controlBar: {
				volumePanel: { inline: false },
				children: [
					'playToggle',
					'playbackRateMenuButton', _0x4b3af3(457), _0x4b3af3(393), _0x4b3af3(647), _0x4b3af3(839), _0x4b3af3(518), _0x4b3af3(848), _0x4b3af3(238), _0x4b3af3(327), _0x4b3af3(719),
				],
			},
			plugins: {
				videoJsResolutionSwitcher: {
					default: _0x342ca4,
					dynamicLabel: true,
					customSourcePicker: function (_0x373d46, _0x2b3ba7, _0x253589) {
						var _0x395f27 = _0x4b3af3, _0x5bb091 = _0x373d46[_0x395f27(838)]()
						_0x373d46.src(
							_0x2b3ba7[_0x395f27(199)](function (_0x2c5587) {
								return _0x3d12fc(_0x2c5587, _0x5bb091)
							})
						)
						if (typeof aplus_queue != _0x395f27(730)) {
							function _0x2677ae() {
								var _0x4b67b2 = _0x395f27, _0x304f11 = ''
								for (var _0x3ef7d8 = 1; _0x3ef7d8 <= 32; _0x3ef7d8++) {
									var _0x189afe = Math[_0x4b67b2(742)](Math.random() * 16)[
										_0x4b67b2(283)
									](16)
									_0x304f11 += _0x189afe;
									(_0x3ef7d8 == 8 ||
										_0x3ef7d8 == 12 ||
										_0x3ef7d8 == 16 ||
										_0x3ef7d8 == 20) &&
										(_0x304f11 += '-')
								}
								return _0x304f11
							}
							typeof aplus_queue != _0x395f27(730) &&
								aplus_queue[_0x395f27(664)]({
									action: _0x395f27(865),
									arguments: [
										_0x395f27(394),
										'CLK',
										{
											video_name: _0x5435ba[_0x395f27(766)] || '',
											video_id: _0x5435ba[_0x395f27(695)] || '',
											resource_id: _0x5435ba[_0x395f27(596)] || '',
											resource_name: _0x5435ba[_0x395f27(316)] || '',
											video_duration: _0x5435ba[_0x395f27(768)],
											request_id: _0x2677ae(),
										},
									],
								})
						}
						return _0x373d46
					},
				},
				videoJsPlayLine: {
					defaults: _0x535d7b(_0xdd2b33),
					dynamicLabel: true,
					customSourcePicker: function (_0x404b8b, _0x3b28fe, _0x176097) {
						var _0x1f83e8 = _0x4b3af3, _0x5d189e = _0x404b8b[_0x1f83e8(712)]().sources[0]
						return (
							_0x404b8b[_0x1f83e8(147)](_0x3d12fc(_0x5d189e, _0x3b28fe)), _0x404b8b
						)
					},
				},
				studyControl: { enableSwitchWindow: _0x5435ba[_0x4b3af3(610)] },
				seekBarControl: {
					headOffset: _0x5435ba[_0x4b3af3(370)],
					enableFastForward: _0x5435ba[_0x4b3af3(540)],
					isSendLog: !!parent[_0x4b3af3(332)] && _0x5435ba[_0x4b3af3(659)],
					reportTimeInterval: _0x5435ba[_0x4b3af3(871)],
					isShowDanmu: _0x5435ba[_0x4b3af3(340)],
					chapterCapture: _0x5435ba[_0x4b3af3(322)] || 0,
					captureInterval: _0x5435ba[_0x4b3af3(577)] || 600,
					chapterCollectionType: _0x5435ba.chapterCollectionType || 0,
					startCapture: _0x5435ba[_0x4b3af3(432)],
					endCapture: _0x5435ba.endCapture,
					playAginCapture: _0x5435ba.playAginCapture,
					playingCapture: _0x5435ba[_0x4b3af3(806)],
					playingLoopCapture: _0x5435ba[_0x4b3af3(673)],
					duration: _0x5435ba.duration,
					isSupportFace: _0x5435ba[_0x4b3af3(792)] || false,
					isShowFaceCollection: _0x5435ba[_0x4b3af3(308)],
					jumpTimePointList: _0x5435ba[_0x4b3af3(545)],
					attachmentId: _0x5435ba[_0x4b3af3(611)],
					aplusVideoId: _0x5435ba[_0x4b3af3(695)] || '',
					aplusResourseId: _0x5435ba.aplus_resource_id || '',
					aplusVideoName: _0x5435ba[_0x4b3af3(766)] || '',
					aplusResourceName: _0x5435ba[_0x4b3af3(316)] || '',
					sourcePlayer: _0x4b3af3(739),
					sendLog: function (_0x1d42b9, _0x10018b, _0x4d242f, _0x48b13a) {
						var _0xef11c9 = _0x4b3af3
						if (this[_0xef11c9(779)] !== true) {
							return
						}
						var _0x2e6984 = 0
						switch (_0x10018b) {
							case 'playing':
								_0x2e6984 = 0
								break
							case 'drag':
								_0x2e6984 = 1
								break
							case _0xef11c9(657):
								_0x2e6984 = 3
								break
							case _0xef11c9(552):
								_0x2e6984 = 2
								break
							case 'ended':
								_0x2e6984 = 4
								break
						}
						var _0x3aac5c = this
						_0x21e7fd(_0x1d42b9, _0x2e6984, _0x4d242f, function () {
							var _0x2b9d18 = _0xef11c9
							try {
								_0x2e6984 === 4 &&
									typeof _0x48b13a != _0x2b9d18(730) &&
									(_0x48b13a[_0x2b9d18(822)]('ended'), _0x1d42b9[_0x2b9d18(846)]() &&
										closeFullScreen && closeFullScreen(), _0x48b13a.playNextVideo(_0x3aac5c[_0x2b9d18(355)]))
							} catch (_0x15b4b4) {
								console[_0x2b9d18(442)](_0x15b4b4)
							}
							window[_0x2b9d18(556)] && window.proxy_completed()
						})
					},
				},
				timelineObjects: {
					begins: _0x5435ba.begins,
					ends: _0x5435ba[_0x4b3af3(629)],
					url:
						_0x5435ba.rootPath +
						_0x4b3af3(249) +
						_0x5435ba.mid +
						_0x4b3af3(353) +
						_0x5435ba[_0x4b3af3(590)] +
						'&classid=' +
						_0x5435ba.clazzId,
					quizErrorReportUrl:
						_0x5435ba[_0x4b3af3(159)] +
						'/question/addquestionerror?classid=' +
						_0x5435ba[_0x4b3af3(760)] +
						_0x4b3af3(353) +
						_0x5435ba[_0x4b3af3(590)],
					validationUrl2:
						_0x5435ba.rootPath +
						_0x4b3af3(404) +
						_0x5435ba[_0x4b3af3(760)] +
						_0x4b3af3(353) +
						_0x2b4022 +
						'&objectid=' +
						_0x5435ba[_0x4b3af3(827)],
					quizRightCountUrl:
						_0x5435ba[_0x4b3af3(159)] +
						_0x4b3af3(802) +
						_0x5435ba[_0x4b3af3(760)] +
						'&cpi=' +
						_0x2b4022,
				},
				customIframePlugin: {
					eventArray: _0x5435ba.eventArray,
					supportHeartbeat: _0x5435ba[_0x4b3af3(562)],
					courseid: _0x5435ba[_0x4b3af3(620)],
					clazzId: _0x5435ba.clazzId,
					userId: _0x5435ba[_0x4b3af3(359)],
					cookieFid: _0x5435ba.cookieFid,
					knowledgeid: _0x5435ba[_0x4b3af3(148)],
					objectid: _0x5435ba[_0x4b3af3(212)],
					playTime: _0x5435ba[_0x4b3af3(464)],
					videoEnc: _0x5435ba[_0x4b3af3(385)],
					headOffset: _0x5435ba[_0x4b3af3(370)],
				},
				subtitle: {
					translate: _0x5435ba[_0x4b3af3(471)],
					subtitleUrl:
						_0x5435ba[_0x4b3af3(159)] +
						_0x4b3af3(782) +
						_0x5435ba[_0x4b3af3(230)] +
						_0x4b3af3(490) +
						_0x5435ba[_0x4b3af3(827)] +
						_0x4b3af3(866) +
						_0x5435ba[_0x4b3af3(620)],
					subtitle:
						_0x5435ba.rootPath + _0x4b3af3(595) + _0x5435ba[_0x4b3af3(493)],
				},
				marker: {
					url: !_0x5435ba[_0x4b3af3(275)]
						? _0x5435ba[_0x4b3af3(159)] +
						_0x4b3af3(489) +
						_0x5435ba.courseid +
						_0x4b3af3(373) +
						_0x5435ba[_0x4b3af3(230)]
						: '',
					ff: _0x5435ba[_0x4b3af3(540)],
					videoTopicCloud: _0x5435ba[_0x4b3af3(400)],
				},
			},
		}
	},
})
Object.defineProperty(ans.VideoJs.prototype, 'params2VideoOpt', {
	configurable: false,
	writable: false,
}),
	Object.freeze(ans.VideoJs.prototype.params2VideoOpt);
(function () {
	var _0x4fbd91 = videojs.getPlugin('plugin'), _0x43981f = videojs.extend(_0x4fbd91, {
		constructor: function (_0x39f009, _0x5de830) {
			_0x4fbd91.call(this, _0x39f009, _0x5de830)
			var _0x70bad6 = this, _0x4e767f = _0x5de830.mouseElTarget, _0x193b4 = 1
			_0x5de830.enableSwitchWindow !== 1 && (_0x193b4 = 0)
			if (!_0x4e767f) {
				try {
					_0x4e767f = window.top ? window.top : window.document
				} catch (_0x5496d1) {
					_0x4e767f = window.parent ? window.parent : window.document
				}
			}
			Ext.fly(_0x4e767f).on('mouseout', function (_0x4cfc9a) {
				_0x4cfc9a = _0x4cfc9a ? _0x4cfc9a : window.event
				var _0x1a487a = _0x4cfc9a.relatedTarget || _0x4cfc9a.toElement
				!_0x1a487a && _0x193b4 != 1 && _0x39f009.pause()
			})
			_0x70bad6.singleton(_0x39f009)
		},
		singleton: function (_0x13581f) {
			var _0x5f2bb8 = this, _0x1fcc16 = parseInt(Math.random() * 9999999)
			_0x13581f.on('play', function () {
				Ext.setCookie('videojs_id', _0x1fcc16)
			})
			_0x13581f.setInterval(function () {
				var _0x36f524 = Ext.getCookie('videojs_id')
				typeof _0x36f524 != 'undefined' &&
					_0x36f524 != _0x1fcc16 &&
					_0x13581f.pause()
			}, 1000)
		},
	})
	videojs.registerPlugin('studyControl', _0x43981f)
})();
(function () {
	var _0x55af5b = videojs.getComponent('SeekBar'), _0x1ed961 = videojs.extend(_0x55af5b, {
		constructor: function (_0x430bb8, _0x2c6922) {
			_0x55af5b.call(this, _0x430bb8, _0x2c6922)
			var _0x49efe6 = this
			_0x430bb8.ignorePause = false
			_0x430bb8.seekLog = false
			_0x430bb8.firstSeek = true
			_0x430bb8.disableSeek = function (_0x496470) {
				_0x49efe6.disableSeek(_0x496470)
			}
			_0x430bb8.onlyBackward = function (_0x44816e) {
				_0x49efe6.onlyBackward(_0x44816e)
			}
			_0x430bb8.getSeekBar = function () {
				return _0x49efe6
			}
			_0x49efe6.on('slideractive', function () {
				_0x430bb8.trigger('seekstart')
				_0x430bb8.ignorePause = true
				_0x430bb8.ignorePlay = true
				_0x430bb8.ignoreSeek = false
			})
			_0x49efe6.on('sliderinactive', function () {
				_0x430bb8.trigger('seekend')
				_0x430bb8.ignoreSeek = false
			})
			_0x49efe6.maxPercent = 0
			_0x430bb8.on('timeupdate', function () {
				_0x49efe6.maxPercent = Math.max(
					_0x49efe6.getPercent(), _0x49efe6.maxPercent
				)
			})
		},
		getCurrentTime_: function () {
			return this.player_.currentTime()
		},
		getMaxPercent: function () {
			return this.maxPercent
		},
		isBackward: function (_0x22e6e3) {
			return this.maxPercent > this.calculateDistance(_0x22e6e3)
		},
		handleMouseDown: function (_0x2353f2) {
			if (this['_onlyBackward']) {
				if (!this.isBackward(_0x2353f2)) {
					return
				}
			}
			if (this['_disableSeek'] === true) {
				return
			}
			_0x55af5b.prototype.handleMouseDown.call(this, _0x2353f2)
		},
		handleMouseMove: function (_0x11aae9) {
			if (this['_disableSeek'] === true) {
				return
			}
			if (this['_onlyBackward']) {
				if (!this.isBackward(_0x11aae9)) {
					return
				}
			}
			_0x55af5b.prototype.handleMouseMove.call(this, _0x11aae9)
		},
		handleMouseUp: function (_0x5b6f3d) {
			if (this['_disableSeek'] === true) {
				return
			}
			if (this['_onlyBackward']) {
				if (!this.isBackward(_0x5b6f3d)) {
					return
				}
			}
			_0x55af5b.prototype.handleMouseUp.call(this, _0x5b6f3d)
		},
		disableSeek: function (_0x540a69) {
			var _0x1b58c9 = this
			_0x1b58c9['_disableSeek'] = _0x540a69 !== false
			_0x1b58c9['_disableSeek'] ? _0x1b58c9.disable() : _0x1b58c9.enable()
		},
		onlyBackward: function (_0x5e26f1) {
			var _0x2f0ee5 = this
			_0x2f0ee5['_onlyBackward'] = _0x5e26f1 !== false
		},
	})
	videojs.registerComponent('SeekBar', _0x1ed961)
})();
(function () {
	var _0x32a048 = videojs.getPlugin('plugin'), _0x593f1b = videojs.extend(_0x32a048, {
		constructor: function (_0x2425b7, _0x4a34f7) {
			_0x32a048.call(this, _0x2425b7, _0x4a34f7)
			var _0x3e6f8f = this
			_0x3e6f8f.firstClick = true
			_0x3e6f8f.isSendLog_ = !!_0x4a34f7.isSendLog
			_0x3e6f8f.isShowDanmu_ = !!_0x4a34f7.isShowDanmu
			_0x3e6f8f.damuLastGetTime = 0
			_0x3e6f8f.firstPlay = true
			_0x3e6f8f.firstPlayFace = true
			_0x3e6f8f.pausePlayFace = false
			_0x3e6f8f.playingFace = false
			_0x3e6f8f.playingFaceTime = 0
			_0x3e6f8f.chapterCapture = _0x4a34f7.chapterCapture || 0
			_0x3e6f8f.captureInterval = _0x4a34f7.captureInterval * 60 || 600
			_0x3e6f8f.chapterCollectionType = _0x4a34f7.chapterCollectionType || 0
			_0x3e6f8f.isSupportFace = _0x4a34f7.isSupportFace
			_0x3e6f8f.isAlertTip = false
			_0x3e6f8f.startCapture = _0x4a34f7.startCapture
			_0x3e6f8f.endCapture = _0x4a34f7.endCapture
			_0x3e6f8f.playAginCapture = _0x4a34f7.playAginCapture
			_0x3e6f8f.playingCapture = _0x4a34f7.playingCapture
			_0x3e6f8f.playingLoopCapture = _0x4a34f7.playingLoopCapture
			_0x3e6f8f.isShowFaceCollection = _0x4a34f7.isShowFaceCollection
			_0x3e6f8f.duration = _0x4a34f7.duration
			_0x3e6f8f.jumpTimePointList = _0x4a34f7.jumpTimePointList
			_0x3e6f8f.loopCaptureInterval = Math.floor(
				Math.random() * (parseInt(_0x3e6f8f.duration) - 0) + 1
			)
			_0x3e6f8f.attachmentId = _0x4a34f7.attachmentId
			_0x3e6f8f.aplusVideoId = _0x4a34f7.aplusVideoId
			_0x3e6f8f.aplusResourseId = _0x4a34f7.aplusResourseId
			_0x3e6f8f.aplusVideoName = _0x4a34f7.aplusVideoName
			_0x3e6f8f.aplusResourceName = _0x4a34f7.aplusResourceName
			_0x2425b7.on('ready', function () {
				_0x4a34f7.enableFastForward != 1 && _0x2425b7.disableSeek()
			})
			!_0x4a34f7.sendLog && (_0x4a34f7.sendLog = function () { })
			_0x4a34f7.headOffset && _0x2425b7.currentTime(_0x4a34f7.headOffset)
			function _0x33a109() {
				typeof aplus_queue != 'undefined' &&
					aplus_queue.push({
						action: 'aplus.record',
						arguments: [
							'heartbeat',
							'CLK',
							{
								video_name: _0x3e6f8f.aplusVideoName,
								video_id: _0x3e6f8f.aplusVideoId,
								resource_id: _0x3e6f8f.aplusResourseId,
								resource_name: _0x3e6f8f.aplusResourceName,
								request_id: _0x3e6f8f.getNewGuid(),
							},
						],
					})
			}
			var _0x533074 = null, _0x259135 = 0, _0x274ffb = 0, _0x1b3294 = _0x4a34f7.reportTimeInterval || 60, _0x48dfd2 = _0x1b3294 * 1000, _0x1faf91 = function (_0x4744e2, _0x228dd7, _0x5d698c) {
				var _0x1174f7 = $('.vjs-tip2')
				_0x1174f7.find('.vjs-tip-inner2').text(_0x5d698c)
				_0x1174f7.css({
					left: (_0x4744e2 / _0x228dd7.duration()) * 100 + '%',
					'margin-left': -parseFloat(_0x1174f7.width()) / 2 - 5 + 'px',
					visibility: 'visible',
				})
				$('.vjs-default-skin').removeClass('vjs-user-inactive')
				$('.vjs-default-skin').addClass('vjs-user-active')
				setTimeout(function () {
					_0x1174f7.css('visibility', 'hidden')
				}, 2000)
			}, _0x40aa91 = function (_0x4ac291, _0x40c0a8, _0x9173e) {
				if (!_0x3e6f8f.isSendLog_) {
					return
				}
				var _0x505fa8 = _0x3e6f8f.now_() - _0x259135;
				(_0x505fa8 > _0x48dfd2 || _0x40c0a8 === true) &&
					(typeof _0x9173e != 'undefined'
						? _0x4a34f7.sendLog(_0x2425b7, _0x4ac291, _0x9173e, _0x3e6f8f)
						: _0x4a34f7.sendLog(
							_0x2425b7, _0x4ac291, _0x3e6f8f.sec_(_0x2425b7), _0x3e6f8f
						),
						(_0x259135 = _0x3e6f8f.now_()))
			}, _0x3b0f90 = function (_0x533787) {
				return (
					_0x533787 &&
					_0x533787.sort &&
					_0x533787.sort(function (_0x3de22f, _0x293175) {
						return parseInt(_0x3de22f) - parseInt(_0x293175)
					})
				)
			}, _0x66d608 = function (_0x267b79) {
				try {
					var _0x256ca8 = _0x267b79.otherPointTimes
					if (_0x256ca8.length === 0) {
						return -1
					}
					return (_0x256ca8 = _0x3b0f90(_0x256ca8)), _0x256ca8[0]
				} catch (_0x3730d3) {
					console.log(_0x3730d3)
				}
				return -1
			}, _0x48f0c4 = function (_0x473923) {
				try {
					var _0x244b9c = _0x473923.otherPointTimes, _0xaeb85e = _0x244b9c.length
					if (_0xaeb85e === 0) {
						return -1
					}
					return (
						(_0x244b9c = _0x3b0f90(_0x244b9c)), _0x244b9c[_0xaeb85e - 1]
					)
				} catch (_0x127f48) {
					console.log(_0x127f48)
				}
				return -1
			}, _0xe1a7e9 = function (_0x420a01, _0x57fd54) {
				try {
					if (
						!_0x420a01.paused() &&
						typeof _0x420a01.eventPoints != 'undefined'
					) {
						var _0x53dd7f = _0x420a01.currentTime(), _0x2e1887 = 0
						_0x420a01.eventPoints.forEach(function (_0x426ae4) {
							_0x426ae4.text == '片头' && (_0x2e1887 = _0x426ae4.time)
						})
						if (
							_0x57fd54.headOffset > 0 &&
							_0x57fd54.headOffset < _0x2e1887
						) {
							return
						}
						if (_0x2e1887 > 0 && parseInt(_0x53dd7f) === 0) {
							var _0x2420ac = parseInt(_0x66d608(_0x420a01))
							if (_0x2420ac >= 0 && _0x2e1887 > _0x2420ac) {
								return
							}
							_0x420a01.ignoreSeek = false
							_0x420a01.switchStatus = true
							_0x420a01.currentTime(_0x2e1887)
							_0x1faf91(_0x2e1887, _0x420a01, '已跳过片头')
						}
					}
				} catch (_0x540e7a) {
					console.log(_0x540e7a)
				}
				try {
					var _0x222732 = 0
					if (
						!_0x420a01.paused() &&
						typeof _0x420a01.eventPoints != 'undefined'
					) {
						var _0x53dd7f = _0x420a01.currentTime()
						_0x420a01.eventPoints.forEach(function (_0x4b7a24) {
							_0x4b7a24.text == '片尾' && (_0x222732 = _0x4b7a24.time)
						})
						if (_0x57fd54.headOffset > _0x222732) {
							return
						}
						var _0x95d414 = parseInt(_0x53dd7f)
						if (_0x222732 > 0 && _0x95d414 === _0x222732) {
							var _0x150ec6 = parseInt(_0x48f0c4(_0x420a01))
							if (_0x150ec6 >= 0 && _0x222732 < _0x150ec6) {
								return
							}
							_0x420a01.ignoreSeek = false
							_0x420a01.switchStatus = true
							_0x420a01.currentTime(_0x57fd54.duration)
							_0x1faf91(_0x95d414, _0x420a01, '已跳过片尾')
						}
					}
				} catch (_0x322480) {
					console.log(_0x322480)
				}
			}
			_0x2425b7.on('play', function () {
				try {
					top.configFullScreen && reSizeVideoWindow()
				} catch (_0x323c3a) {
					console.log(_0x323c3a)
				}
				_0x3e6f8f.firstPlay &&
					typeof aplus_queue != 'undefined' &&
					aplus_queue.push({
						action: 'aplus.record',
						arguments: [
							'video_positive_pybk',
							'OTHER',
							{
								video_name: _0x3e6f8f.aplusVideoName,
								video_id: _0x3e6f8f.aplusVideoId,
								resource_id: _0x3e6f8f.aplusResourseId,
								resource_name: _0x3e6f8f.aplusResourceName,
								request_id: _0x3e6f8f.getNewGuid(),
							},
						],
					})
				try {
					if (
						typeof top.hasJobLimit != 'undefined' &&
						top.hasJobLimit === true &&
						_0x3e6f8f.firstClick &&
						isUnFinishJob()
					) {
						_0x3e6f8f.firstClick = false
						_0x2425b7.pause()
						checkJobCountLimit(_0x2425b7, 0)
						return
					}
					if (
						typeof top.videoTimeLimit != 'undefined' &&
						top.videoTimeLimit === true &&
						_0x3e6f8f.firstClick &&
						isUnFinishJob()
					) {
						_0x3e6f8f.firstClick = false
						_0x2425b7.pause()
						checkJobCountLimit(_0x2425b7, 1)
						return
					}
				} catch (_0x5436d5) {
					console.log(_0x5436d5)
				}
				_0x3e6f8f.isAlertTip = false
				!_0x2425b7.ignorePlay &&
					!_0x3e6f8f.firstPlay &&
					typeof aplus_queue != 'undefined' &&
					aplus_queue.push({
						action: 'aplus.record',
						arguments: [
							'continue_pybk_click',
							'CLK',
							{
								video_name: _0x3e6f8f.aplusVideoName,
								video_id: _0x3e6f8f.aplusVideoId,
								resource_id: _0x3e6f8f.aplusResourseId,
								resource_name: _0x3e6f8f.aplusResourceName,
							},
						],
					})
				if (
					_0x3e6f8f.chapterCapture == 0 ||
					!_0x3e6f8f.isSupportFace ||
					!_0x3e6f8f.isShowFaceCollection
				) {
					!_0x2425b7.ignorePlay
						? (_0x40aa91('play', true), (_0x2425b7.ignoreSeek = true))
						: ((_0x2425b7.ignorePlay = false),
							(_0x2425b7.ignoreSeek = false),
							(_0x2425b7.seekLog = false))
					_0x3e6f8f.sendDataLog('play')
					_0x3e6f8f.receiveStudyLog()
					_0x3e6f8f.getDanmuList('play', _0x2425b7)
					_0x3e6f8f.firstPlay = false
					_0x3e6f8f.pausePlayFace = true
				} else {
					if (_0x3e6f8f.chapterCapture == 1) {
						if (_0x3e6f8f.firstPlay) {
							var _0x194849 = _0x3e6f8f.sec_(_0x2425b7)
							if (
								_0x194849 == 0 &&
								(_0x3e6f8f.startCapture == 1 ||
									typeof _0x3e6f8f.startCapture == 'undefined') &&
								_0x3e6f8f.firstPlayFace
							) {
								_0x3e6f8f.playingFaceTime = _0x194849
								_0x3e6f8f.playingFace = false
								var _0x2188f4 = _0x3e6f8f.faceCollection(
									'play', _0x2425b7, _0x3e6f8f.chapterCollectionType,
									0
								)
								if (_0x2188f4 != 1) {
									return
								}
							}
							!_0x2425b7.ignorePlay
								? (_0x40aa91('play', true), (_0x2425b7.ignoreSeek = true))
								: ((_0x2425b7.ignorePlay = false),
									(_0x2425b7.ignoreSeek = false),
									(_0x2425b7.seekLog = false))
							_0x3e6f8f.sendDataLog('play')
							_0x3e6f8f.receiveStudyLog()
							_0x3e6f8f.getDanmuList('play', _0x2425b7)
							_0x3e6f8f.firstPlay = false
							_0x3e6f8f.pausePlayFace = true
						} else {
							if (
								_0x3e6f8f.playAginCapture == 1 &&
								!_0x2425b7.ignorePlay &&
								_0x3e6f8f.pausePlayFace
							) {
								_0x3e6f8f.playingFaceTime = _0x3e6f8f.sec_(_0x2425b7)
								_0x3e6f8f.playingFace = false
								_0x3e6f8f.faceCollection(
									'aginPlay', _0x2425b7, _0x3e6f8f.chapterCollectionType,
									-2
								)
								return
							}
							_0x3e6f8f.pausePlayFace = true
						}
					}
				}
				typeof aplus_queue != 'undefined' &&
					(_0x533074 = setInterval(_0x33a109, 20000))
				_0x3e6f8f.seekLog = false
			})
			_0x2425b7.on('seeked', function () {
				if (
					_0x4a34f7.enableFastForward != 1 &&
					!_0x2425b7.switchStatus &&
					!_0x2425b7.finished
				) {
					var _0x4367a9 = _0x2425b7.currentTime(), _0x5aec4c = _0x4a34f7.headOffset ? _0x4a34f7.headOffset : 0
					_0x4367a9 != 0 &&
						_0x4367a9 > _0x5aec4c &&
						_0x2425b7.currentTime(_0x5aec4c)
				}
				!_0x2425b7.seekLog && (_0x2425b7.seekStartTime = _0x274ffb)
				if (!_0x2425b7.ignoreSeek) {
					if (!_0x2425b7.seekLog) {
						_0x2425b7.firstSeek &&
							(_0x40aa91(
								'drag',
								true, _0x2425b7.seekStartTime + '-' + _0x3e6f8f.sec_(_0x2425b7)
							),
								(_0x2425b7.firstSeek = false))
						function _0x1808cd() {
							_0x40aa91(
								'drag',
								true, _0x2425b7.seekStartTime + '-' + _0x3e6f8f.sec_(_0x2425b7)
							)
							document.removeEventListener('mouseup', _0x1808cd)
						}
						document.addEventListener('mouseup', _0x1808cd)
					}
					'video' == _0x4a34f7.sourcePlayer &&
						(typeof aplus_queue != 'undefined' &&
							aplus_queue.push({
								action: 'aplus.record',
								arguments: [
									'time_shift_click',
									'OTHER',
									{
										video_name: _0x3e6f8f.aplusVideoName,
										video_id: _0x3e6f8f.aplusVideoId,
										resource_id: _0x3e6f8f.aplusResourseId,
										resource_name: _0x3e6f8f.aplusResourceName,
										time_shift_time: _0x274ffb + '',
										time_shift_duration: Math.abs(
											parseInt(_0x3e6f8f.sec_(_0x2425b7)) -
											parseInt(_0x274ffb)
										),
									},
								],
							}),
							typeof aplus_queue != 'undefined' &&
							aplus_queue.push({
								action: 'aplus.record',
								arguments: [
									'video_progress_drag',
									'OTHER',
									{
										video_name: _0x3e6f8f.aplusVideoName,
										video_id: _0x3e6f8f.aplusVideoId,
										resource_id: _0x3e6f8f.aplusResourseId,
										resource_name: _0x3e6f8f.aplusResourceName,
									},
								],
							}))
				} else {
					_0x2425b7.ignoreSeek = false
				}
				_0x274ffb = _0x3e6f8f.sec_(_0x2425b7)
				_0x2425b7.ignorePlay = true
				_0x2425b7.seekLog = true
				delete _0x2425b7.switchStatus
			})
			_0x2425b7.on('pause', function () {
				!_0x2425b7.ignorePause
					? (_0x40aa91('pause', true),
						(_0x2425b7.ignorePlay = false),
						(_0x2425b7.ignoreSeek = false),
						(_0x2425b7.seekLog = false),
						typeof aplus_queue != 'undefined' &&
						aplus_queue.push({
							action: 'aplus.record',
							arguments: [
								'video_pause_click',
								'CLK',
								{
									video_name: _0x3e6f8f.aplusVideoName,
									video_id: _0x3e6f8f.aplusVideoId,
									resource_id: _0x3e6f8f.aplusResourseId,
									resource_name: _0x3e6f8f.aplusResourceName,
								},
							],
						}))
					: (_0x2425b7.ignorePause = false)
				_0x3e6f8f.sendDataLog('pause')
				_0x3e6f8f.getDanmuList('pause', _0x2425b7)
				_0x533074 && clearInterval(_0x533074)
			})
			_0x2425b7.on('timeupdate', function () {
				var _0x2b7993 = _0x3e6f8f.sec_(_0x2425b7)
				_0x3e6f8f.isSupportFace &&
					_0x3e6f8f.isShowFaceCollection &&
					_0x3e6f8f.chapterCapture == 1 &&
					_0x3e6f8f.playingCapture == 1 &&
					_0x3e6f8f.playingFace &&
					((_0x3e6f8f.playingFace = false), _0x3e6f8f.playingLoopCapture == 1
						? _0x2b7993 == _0x3e6f8f.loopCaptureInterval &&
						_0x3e6f8f.faceCollection(
							'playing', _0x2425b7, _0x3e6f8f.chapterCollectionType,
							-1
						)
						: _0x2b7993 >= _0x3e6f8f.captureInterval &&
						_0x2b7993 % _0x3e6f8f.captureInterval == 0 &&
						_0x3e6f8f.faceCollection(
							'playing', _0x2425b7, _0x3e6f8f.chapterCollectionType, _0x2b7993
						))
				!_0x3e6f8f.playingFace &&
					_0x2b7993 - _0x3e6f8f.playingFaceTime > 2 &&
					(_0x3e6f8f.playingFace = true)
				if (
					typeof parent.videoTrialDuration != 'undefined' &&
					parent.videoTrialDuration != '-1'
				) {
					var _0x8e8aa9 = parseInt(parent.videoTrialDuration) * 60
					if (
						_0x8e8aa9 < _0x3e6f8f.sec_(_0x2425b7) &&
						!_0x3e6f8f.isAlertTip
					) {
						_0x2425b7.pause()
						alert('视频只允许试看' + parent.videoTrialDuration + '分钟')
						_0x3e6f8f.isAlertTip = true
						return
					}
				}
				parseInt(_0x2425b7.currentTime()) >= this.damuLastGetTime &&
					_0x3e6f8f.getDanmuList('timeupdate', _0x2425b7)
				_0x3e6f8f.danmuDisplay(_0x2425b7)
				if (_0x259135 == 0) {
					_0xe1a7e9(_0x2425b7, _0x4a34f7)
					return
				}
				_0x3e6f8f.sec_(_0x2425b7) - _0x274ffb <= 1 &&
					!_0x2425b7.ignorePlay &&
					(_0x274ffb = _0x3e6f8f.sec_(_0x2425b7))
				_0x40aa91('playing')
				_0xe1a7e9(_0x2425b7, _0x4a34f7)
			})
			_0x2425b7.on('ended', function () {
				_0x3e6f8f.isShowFaceCollection &&
					_0x3e6f8f.chapterCapture == 1 &&
					_0x3e6f8f.endCapture == 1 &&
					_0x3e6f8f.faceCollection(
						'ended', _0x2425b7, _0x3e6f8f.chapterCollectionType, _0x3e6f8f.duration
					)
				_0x40aa91('ended', true)
				typeof aplus_queue != 'undefined' &&
					aplus_queue.push({
						action: 'aplus.record',
						arguments: [
							'video_end_click',
							'CLK',
							{
								video_name: _0x3e6f8f.aplusVideoName,
								video_id: _0x3e6f8f.aplusVideoId,
								resource_id: _0x3e6f8f.aplusResourseId,
								resource_name: _0x3e6f8f.aplusResourceName,
								request_id: _0x3e6f8f.getNewGuid(),
								pybk_duration: _0x3e6f8f.duration,
								full_play_count: 1,
							},
						],
					})
				_0x533074 && clearInterval(_0x533074)
				_0x2425b7.seekLog = false
			})
		},
		sec_: function (_0xa0f8c) {
			return parseInt(_0xa0f8c.currentTime())
		},
		now_: function () {
			return new Date().getTime()
		},
		isSendLog: function (_0x373e21) {
			return _0x373e21 && (this.isSendLog_ = !!_0x373e21), this.isSendLog_
		},
		sendDataLog: function (_0x133404) {
			var _0x501261 = _0x133404 == 'pause' || _0x133404 == 'end' ? 2 : 1
			typeof sendReadZTMediaLog != 'undefined' &&
				sendReadZTMediaLog(_0x501261)
		},
		receiveStudyLog: function () {
			typeof receiveStudyLog != 'undefined' &&
				setTimeout(function () {
					receiveStudyLog()
				}, 50)
		},
		getDanmuList: function (_0x56cf27, _0xc92fb3) {
			if (!this.isShowDanmu_) {
				return
			}
			var _0x31943c = this.sec_(_0xc92fb3)
			if (_0x56cf27 == 'pause') {
				this.damuLastGetTime = 0
				setTimeout(function () {
					getDanmuByTime(_0x56cf27, 0)
				}, 200)
				return
			}
			typeof getDanmuByTime != 'undefined' &&
				setTimeout(function () {
					getDanmuByTime(_0x56cf27, _0x31943c)
				}, 200)
			if (_0x31943c < this.damuLastGetTime) {
				return
			}
			this.damuLastGetTime = _0x31943c + 59
		},
		danmuDisplay: function (_0x4b7efa) {
			if (!this.isShowDanmu_) {
				return
			}
			var _0x3a513b = this.sec_(_0x4b7efa)
			typeof danmuPlay != 'undefined' && danmuPlay(_0x3a513b)
		},
		timer: function (_0xd805ac) { },
		faceCollection: function (_0x52d2df, _0x2748d3, _0x24021e, _0x46c494) {
			if (_0x46c494 != -2) {
				var _0x1a3ef7 = this.jumpTimePointList
				if (typeof _0x1a3ef7 != 'undefined') {
					try {
						if (_0x1a3ef7.includes(_0x46c494)) {
							return (
								(this.firstPlayFace = false),
								(this.pausePlayFace = false),
								(this.playingFace = false),
								1
							)
						}
					} catch (_0x204dc4) { }
				}
			}
			_0x52d2df == 'play'
				? typeof startFaceCollection != 'undefined' &&
				(_0x2748d3.pause(),
					startFaceCollection(_0x2748d3, _0x24021e, this, _0x46c494))
				: _0x52d2df == 'ended'
					? typeof startFaceCollection != 'undefined' &&
					(_0x2748d3.pause(),
						startFaceCollection(_0x2748d3, _0x24021e, this, _0x46c494))
					: _0x52d2df == 'playing'
						? (typeof startFaceCollection != 'undefined' &&
							(_0x2748d3.pause(),
								(this.playingFaceTime = this.sec_(_0x2748d3)),
								startFaceCollection(_0x2748d3, _0x24021e, this, _0x46c494),
								(this.playingFace = false)),
							(this.pausePlayFace = false))
						: _0x52d2df == 'aginPlay' &&
						(typeof startFaceCollection != 'undefined' &&
							(_0x2748d3.pause(),
								startFaceCollection(_0x2748d3, _0x24021e, this, _0x46c494)),
							(this.pausePlayFace = false))
		},
		playNextVideo: function (_0xa5726a) {
			if (typeof chapterPlayNextVideo != 'undefined') {
				if (
					typeof top.allowNextVideo != 'undefined' &&
					top.allowNextVideo === false
				) {
					top.hasJobLimit === true
						? top.showJobLimitTip()
						: top.showVideoTimeLimitTip()
					return
				}
				chapterPlayNextVideo(_0xa5726a)
			}
		},
		getNewGuid: function () {
			var _0x5a388d = ''
			for (var _0x5d05b3 = 1; _0x5d05b3 <= 32; _0x5d05b3++) {
				var _0x42b85d = Math.floor(Math.random() * 16).toString(16)
				_0x5a388d += _0x42b85d;
				(_0x5d05b3 == 8 ||
					_0x5d05b3 == 12 ||
					_0x5d05b3 == 16 ||
					_0x5d05b3 == 20) &&
					(_0x5a388d += '-')
			}
			return _0x5a388d
		},
	})
	videojs.registerPlugin('seekBarControl', _0x593f1b)
})()
Ext.define('ans.videojs.TimelineObjectsBg', {
	extend: 'Ext.Component',
	cls: 'ans-timelineobjectsbg',
	hidden: true,
})
Ext.define('ans.videojs.VideoQuiz', {
	extend: 'Ext.Component',
	xtype: 'videoquiz',
	cls: 'ans-videoquiz',
	renderTpl: [
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
			getChecked: function (_0xfda42b, _0x122660, _0x1c6d1e) {
				try {
					if (typeof _0xfda42b != 'undefined') {
						return _0xfda42b.indexOf(_0x122660) != -1 &&
							_0x1c6d1e == 'InteractiveQuiz'
							? 'checked="checked"'
							: ''
					}
					return ''
				} catch (_0x4b0561) {
					console.log(_0x4b0561)
				}
			},
		},
	],
	renderSelectors: {
		submitEl: 'a.ans-videoquiz-submit',
		continueEl: 'a.ans-videoquiz-continue',
		scrollEl: 'div.tkScroll',
		backEl: 'a.ans-videoquiz-back',
		tkParseScrollEl: 'div.tkParsing_screll',
		viewAnalysisEl: 'a.spanHref',
		delAnalysisEl: 'a.tkParsing_dele',
	},
	afterRender: function () {
		var _0x3bf97c = this, _0x33aebe = _0x3bf97c.renderData, _0x1b013d = _0x3bf97c.quizRightCountUrl
		typeof _0x1b013d != 'undefined' &&
			Ext.Ajax.request({
				url: _0x1b013d,
				params: {
					eventid: _0x33aebe.resourceId,
					memberinfo: _0x33aebe.memberinfo,
				},
				method: 'get',
				success: function (_0x58df07) {
					var _0x2b4ac4 = Ext.decode(_0x58df07.responseText)
					_0x2b4ac4.status &&
						(Ext.get('rightNum').setHTML(_0x2b4ac4.rightAnswerCount),
							Ext.get('rightAnswerNum').setStyle('display', 'inline-block'))
				},
			})
		_0x3bf97c.callParent(arguments)
		var _0x46bb82 = _0x3bf97c.scrollEl, _0x32ca3d = $(_0x46bb82.dom).niceScroll({
			cursorborder: '',
			cursorwidth: 6,
			cursorcolor: '#A5A5A5',
			boxzoom: false,
			autohidemode: false,
		})
		setInterval(function () {
			$(_0x46bb82.dom).getNiceScroll().resize()
		}, 300)
		_0x3bf97c.scroller = _0x32ca3d
		_0x3bf97c.submitEl.on('click', function () {
			_0x3bf97c.checkResult()
		})
		_0x3bf97c.continueEl.on('click', function () {
			try {
				top.configFullScreen && exitMediumSizeWindow()
			} catch (_0x5ee169) {
				console.log(_0x5ee169)
			}
			_0x3bf97c.fireEvent('continue')
		})
		_0x3bf97c.backEl &&
			_0x3bf97c.backEl.on('click', function () {
				_0x3bf97c.onerror && _0x3bf97c.onerror()
				try {
					top.configFullScreen && exitMediumSizeWindow()
				} catch (_0x4d7794) {
					console.log(_0x4d7794)
				}
				_0x3bf97c.fireEvent('continue')
			})
		_0x3bf97c.viewAnalysisEl &&
			_0x3bf97c.viewAnalysisEl.on('click', function () {
				Ext.get('tkParsing').setStyle('display', 'inline-block')
			})
		_0x3bf97c.delAnalysisEl &&
			_0x3bf97c.delAnalysisEl.on('click', function () {
				Ext.get('tkParsing').setStyle('display', 'none')
			})
	},
	checkResult: function () {
		var _0x4baa81 = this, _0x349bf4 = Ext.query('input', _0x4baa81.el.dom), _0x395b77 = true, _0x18b386 = _0x4baa81.renderData, _0x591581 = _0x18b386.options, _0x2cd91d = [], _0x416f4d = _0x4baa81.quizErrorReportUrl, _0x51d8eb = _0x4baa81.validationUrl2, _0x4bfbc7 = _0x18b386.dtype
		if (
			Ext.get('videoquiz-continue').getStyle('display') == 'none' &&
			window.parent.parent.location.href.indexOf(
				'nodedetailcontroller/visitnodedetail'
			) > -1
		) {
			try {
				top.configFullScreen && exitMediumSizeWindow()
			} catch (_0x4f6767) {
				console.log(_0x4f6767)
			}
			_0x4baa81.fireEvent('continue')
			return
		}
		Ext.each(_0x349bf4, function (_0x4f6518, _0x14c8a1) {
			_0x4f6518.checked && _0x2cd91d.push(_0x591581[_0x14c8a1].name)
		})
		Ext.get('videoquiz-submit').setStyle('display', 'none')
		Ext.get('videoquiz-submitting').setStyle('display', 'block')
		if (typeof _0x51d8eb != 'undefined') {
			var _0x33d85b = _0x2cd91d.join(',')
			Ext.Ajax.request({
				url: _0x51d8eb,
				params: {
					eventid: _0x18b386.resourceId,
					memberinfo: _0x18b386.memberinfo,
					answerContent: _0x33d85b,
				},
				method: 'get',
				success: function (_0x29e75b) {
					Ext.get('videoquiz-submit').setStyle('display', 'block')
					Ext.get('videoquiz-submitting').setStyle('display', 'none')
					_0x18b386.answerContent = _0x33d85b
					var _0x23b3d9 = Ext.decode(_0x29e75b.responseText), _0x365352 =
						typeof _0x23b3d9.isRight === 'undefined'
							? false
							: _0x23b3d9.isRight
					!_0x365352
						? _0x18b386.errorBackTime && _0x18b386.errorBackTime > 0
							? (Ext.get('spanNotBack').setStyle('display', 'block'),
								Ext.get('videoquiz-submit').setStyle('display', 'none'), _0x4bfbc7 == 'InteractiveQuiz'
									? Ext.get('knowledgeBack').setStyle('display', 'block')
									: Ext.get('videoquiz-continue').setStyle('display', 'block'))
							: _0x4bfbc7 == 'InteractiveQuiz' &&
								_0x18b386.errorBack == 1 &&
								_0x18b386.eBstartPoint != ''
								? (Ext.get('spanNotBackPoint').setStyle('display', 'block'),
									Ext.get('knowledgeBack').setStyle('display', 'block'))
								: Ext.get('spanNot').setStyle('display', 'block')
						: (Ext.get('spanHas').setStyle('display', 'block'), _0x4bfbc7 == 'InteractiveQuiz' &&
							(Ext.get('videoquiz-continue').setStyle('display', 'block'),
								Ext.get('knowledgeBack').setStyle('display', 'none'),
								Ext.get('videoquiz-submit').setStyle('display', 'none'),
								Ext.get('spanNot').setStyle('display', 'none'),
								Ext.get('spanNotBack').setStyle('display', 'none'),
								Ext.get('spanNotBackPoint').setStyle('display', 'none')))
					if (_0x23b3d9.status) {
						if (_0x4bfbc7 == 'InteractiveQuiz') {
							_0x23b3d9.rightAnswerCount &&
								(Ext.get('rightNum').setHTML(_0x23b3d9.rightAnswerCount),
									Ext.get('rightAnswerNum').setStyle('display', 'inline-block'))
							var _0x21fa97 = '', _0x40b437 = false
							_0x23b3d9.testAnalysis
								? _0x23b3d9.showAnswer && _0x23b3d9.showAnswer > 0
									? ((_0x21fa97 += '正确答案\uFF1A' + _0x23b3d9.rightContent),
										(_0x21fa97 += '</br>解析\uFF1A' + _0x23b3d9.testAnalysis),
										Ext.get('viewAnalysis').setStyle('display', 'block'),
										(_0x40b437 = true))
									: _0x23b3d9.isRight &&
									((_0x21fa97 += '解析\uFF1A' + _0x23b3d9.testAnalysis),
										Ext.get('viewAnalysis').setStyle('display', 'block'),
										(_0x40b437 = true))
								: _0x23b3d9.showAnswer && _0x23b3d9.showAnswer > 0
									? (Ext.get('tkParsingDele').setStyle('display', 'none'),
										Ext.get('viewAnalysis').setStyle('display', 'none'),
										(_0x21fa97 += '正确答案\uFF1A' + _0x23b3d9.rightContent),
										(_0x40b437 = true))
									: Ext.get('viewAnalysis').setStyle('display', 'none')
							if (_0x40b437) {
								Ext.get('tkParsing_con').setHTML(_0x21fa97)
								Ext.get('tkParsing').setStyle('display', 'inline-block')
								var _0xfebcbd = _0x4baa81.tkParseScrollEl, _0x334a20 = $(_0xfebcbd.dom).niceScroll({
									cursorborder: '',
									cursorwidth: 6,
									cursorcolor: '#A5A5A5',
									boxzoom: false,
									autohidemode: true,
								})
								_0x4baa81.tkParseScroll = _0x334a20
							}
						}
						if (_0x23b3d9.isRight && _0x4bfbc7 == 'InteractiveQuiz') {
							if (
								typeof _0x23b3d9.showTip != 'undefined' &&
								_0x23b3d9.showTip
							) {
								var _0x4f156b = _0x23b3d9.percent
								try {
									var _0x3f9ac1 = Ext.getCookie('fid', 0)
									_0x4f156b = parseInt(_0x4f156b)
									_0x3f9ac1 == '179952' &&
										_0x4f156b > 0 &&
										(_0x4f156b = 90 + _0x4f156b * 0.1)
								} catch (_0x39059d) {
									console.log(_0x39059d)
								}
								Ext.get('spanHas').setHTML(
									'<span class="spanHas fr" style=\'display:block\'><span id="InteractiveQuizTip">恭喜你\uFF0C答对了\uFF01你的答题水准超过了' +
									_0x4f156b +
									'%的同学</span></span>'
								)
							} else {
								Ext.get('spanHas').setHTML(
									'<span class="spanHas fr" style=\'display:block\'><span id="InteractiveQuizTip">恭喜你\uFF0C答对了\uFF01</span></span>'
								)
							}
						}
					}
					!_0x365352 &&
						_0x4baa81.onerror &&
						_0x4bfbc7 != 'InteractiveQuiz' &&
						_0x4baa81.onerror()
					!_0x365352 &&
						_0x18b386.errorContinue == 1 &&
						((_0x395b77 = true),
							Ext.get('videoquiz-submit').setStyle('display', 'none'),
							Ext.get('videoquiz-continue').setStyle('display', 'block'))
					if (
						_0x365352 &&
						Ext.get('videoquiz-continue').getStyle('display') == 'none'
					) {
						try {
							top.configFullScreen && exitMediumSizeWindow()
						} catch (_0xc18830) {
							console.log(_0xc18830)
						}
						_0x4baa81.fireEvent('continue')
					}
				},
				error: function () {
					Ext.get('videoquiz-submit').setStyle('display', 'block')
					Ext.get('videoquiz-submitting').setStyle('display', 'none')
					_0x4baa81.onerror &&
						_0x4bfbc7 != 'InteractiveQuiz' &&
						_0x4baa81.onerror()
				},
			})
		}
		return _0x395b77
	},
	continueFun: function () {
		var _0x1d2af6 = this
		_0x1d2af6.fireEvent('continue')
	},
})
Ext.define('ans.videojs.VideoImg', {
	extend: 'Ext.Component',
	xtype: 'videoimg',
	renderTpl: [
		'<div class="sp_video_pic">',
		'<img src="{src}" class="sp_video_img" />',
		'<a class="jb_btn jb_btn_92 fs14 sp_video_pic_dele2" style="position:absolute;bottom:14px;right:20px;z-index:6;" href="javascript:">继续学习</a>',
		'</div>',
	],
	renderSelectors: { closeEl: 'a.sp_video_pic_dele2' },
	afterRender: function () {
		var _0x288bee = this
		_0x288bee.callParent(arguments)
		try {
			var _0x14b73d = document.querySelector('.sp_video_img')
			_0x14b73d.addEventListener('load', function () {
				_0x14b73d.naturalWidth >= _0x14b73d.naturalHeight
					? _0x14b73d.naturalWidth >= 400 &&
					((_0x14b73d.style.maxWidth = '70%'),
						(_0x14b73d.style.maxHeight = '70%'),
						(_0x14b73d.style.height = 'auto'))
					: _0x14b73d.naturalHeight >= 400 &&
					((_0x14b73d.style.maxHeight = '70%'),
						(_0x14b73d.style.maxWidth = '70%'),
						(_0x14b73d.style.width = 'auto'))
			})
		} catch (_0x3a3d1d) {
			console.log(_0x3a3d1d)
		}
		_0x288bee.el.on('click', function () {
			try {
				top.configFullScreen && exitMediumSizeWindow()
			} catch (_0x51c8ab) {
				console.log(_0x51c8ab)
			}
			_0x288bee.fireEvent('continue')
		})
		_0x288bee.closeEl.on('click', function () {
			try {
				top.configFullScreen && exitMediumSizeWindow()
			} catch (_0x1ed540) {
				console.log(_0x1ed540)
			}
			_0x288bee.fireEvent('continue')
		})
	},
})
Ext.define('ans.videojs.VideoAnnotation', {
	extend: 'Ext.Component',
	xtype: 'videoannotation',
	cls: 'ans-videoannotation',
	width: '259px',
	model: false,
	renderTpl: [
		'<div class="comment_icon"><img src="/ananas/modules/video/pz_icon.png"/></div>',
		'<div class="comment_box" style="display:block">',
		'<div class="comment_tit"><a href="javascript:;" class="stow_icon fr"><img src="/ananas/modules/video/stow_icon.png" /></a><p class="fl">[批注]</p></div>',
		'<p class="comment_con">{description}</p>',
		'<a href="javascript:;" class="continueLearn fr">继续学习</a>',
		'</div>',
	],
	renderSelectors: {
		stowEl: 'a.stow_icon',
		commentOpenEl: 'div.comment_icon',
		boxEl: 'div.comment_box',
		continueEl: 'a.continueLearn',
	},
	afterRender: function () {
		var _0x537340 = this, _0x4b985b = _0x537340.commentOpenEl, _0x309c7b = _0x537340.boxEl
		_0x537340.callParent(arguments)
		_0x4b985b.on('click', function () {
			_0x4b985b.setStyle('display', 'none')
			_0x309c7b.setStyle('display', 'block')
			$('.comment_con').getNiceScroll().resize()
		})
		_0x537340.stowEl.on('click', function () {
			_0x309c7b.setStyle('display', 'none')
			_0x4b985b.setStyle('display', 'block')
		})
		_0x537340.continueEl.on('click', function () {
			try {
				top.configFullScreen && exitMediumSizeWindow()
			} catch (_0x139bde) {
				console.log(_0x139bde)
			}
			_0x537340.fireEvent('continue')
		})
		var _0x3eeac4 = $('.comment_con').niceScroll({
			cursorborder: '',
			cursorwidth: '8px',
			cursorcolor: '#ACB4BF',
			boxzoom: false,
			autohidemode: true,
		})
		_0x537340.scroller = _0x3eeac4
	},
})
Ext.define('ans.videojs.VideoPpt', {
	extend: 'Ext.Component',
	xtype: 'videoppt',
	cls: 'ans-videoppt',
	width: '100%',
	model: false,
	renderTpl: [
		'<div class="sp_video_ppt_pic" id="sp_video_ppt_pic">',
		'<img src="{src}" class="sp_video_img" style="width: 100%;"/>',
		'<a class="sp_size_big" id="sp_size_big" href="javascript:;"></a>',
		'<a class="sp_size_small" href="javascript:;" style="display:none;" id="sp_size_small"></a>',
		'</div>',
	],
	renderSelectors: {
		pptPicEl: 'div.sp_video_ppt_pic',
		sizeBigEl: 'a.sp_size_big',
		sizeSmallEl: 'a.sp_size_small',
	},
	afterRender: function () {
		var _0x4fc685 = this
		_0x4fc685.callParent(arguments)
		try {
			dragFn && dragFn('#sp_video_ppt_pic', '#video_html5_api')
		} catch (_0x205c30) {
			console.log(_0x205c30)
		}
		var _0xf56689 = Ext.get('video_html5_api').getStyle('height'), _0x28b558 = Ext.get('video_html5_api').getStyle('width'), _0x3aaf31 = parseInt(_0xf56689) > parseInt(_0x28b558)
		_0x3aaf31
			? Ext.get('sp_video_ppt_pic').addCls('sp_video_ppt_pic_w')
			: Ext.get('sp_video_ppt_pic').addCls('sp_video_ppt_pic_h')
		function _0x3fb79b() {
			Ext.get('sp_size_big').setStyle('display', 'none')
			Ext.get('sp_size_small').setStyle('display', 'block')
		}
		function _0x4cb767() {
			Ext.get('sp_size_big').setStyle('display', 'block')
			Ext.get('sp_size_small').setStyle('display', 'none')
		}
		_0x4fc685.sizeBigEl.on('click', function (_0x499594) {
			_0x499594.stopPropagation()
			_0x3aaf31
				? _0x4fc685.pptPicEl.toggleCls('sp_ppt_pic_fullScreen1')
				: _0x4fc685.pptPicEl.toggleCls('sp_ppt_pic_fullScreen')
			_0x3fb79b()
		})
		_0x4fc685.sizeSmallEl.on('click', function (_0x65f603) {
			_0x65f603.stopPropagation()
			_0x3aaf31
				? _0x4fc685.pptPicEl.toggleCls('sp_ppt_pic_fullScreen1')
				: _0x4fc685.pptPicEl.toggleCls('sp_ppt_pic_fullScreen')
			_0x4cb767()
		})
		_0x4fc685.sizeBigEl.on('touchend', function (_0x5a6339) {
			_0x5a6339.stopPropagation()
			_0x3aaf31
				? _0x4fc685.pptPicEl.toggleCls('sp_ppt_pic_fullScreen1')
				: _0x4fc685.pptPicEl.toggleCls('sp_ppt_pic_fullScreen')
			_0x3fb79b()
		})
		_0x4fc685.sizeSmallEl.on('touchend', function (_0x1b206f) {
			_0x1b206f.stopPropagation()
			_0x3aaf31
				? _0x4fc685.pptPicEl.toggleCls('sp_ppt_pic_fullScreen1')
				: _0x4fc685.pptPicEl.toggleCls('sp_ppt_pic_fullScreen')
			_0x4cb767()
		})
	},
})
Ext.define('ans.videojs.TimelineObjects', {
	extend: 'Ext.container.Container',
	cls: 'ans-timelineobjects',
	autoScroll: true,
	hidden: true,
	hideMode: 'visibility',
	constructor: function (_0x750512) {
		var _0x4ee714 = this
		_0x4ee714.callParent(arguments)
		_0x4ee714.bg = Ext.create('ans.videojs.TimelineObjectsBg', {
			renderTo: _0x750512.renderTo,
		})
		_0x4ee714.objects =
			_0x750512.objects && _0x750512.objects.sort
				? _0x4ee714.sort_(_0x750512.objects)
				: []
		_0x4ee714.current = 0
		_0x4ee714.showAnnotation = false
	},
	hideTimeline: function () {
		var _0x3c1787 = this
		_0x3c1787.showAnnotation &&
			(_0x3c1787.hide(), (_0x3c1787.showAnnotation = false))
	},
	showObject: function (_0x516580, _0x2d476a, _0x2f7c24) {
		var _0x1e0e37 = this, _0x13e36c = _0x1e0e37.getBox(), _0x597e4c = _0x1e0e37.items.getAt(0), _0x310f5a, _0x25f6f7 = function () {
			_0x310f5a.destroy()
			_0x1e0e37.hide()
			_0x516580.play()
			try {
				_0x516580.eventCount &&
					(_0x516580.eventCount = _0x516580.eventCount - 1)
			} catch (_0x116ee2) {
				console.log(_0x116ee2)
			}
		}
		_0x597e4c != null && _0x597e4c.destroy()
		if (_0x2f7c24) {
			_0x2f7c24.description &&
				(_0x2f7c24.description = _0x1e0e37.htmlEncodeByRegExp(
					_0x2f7c24.description
				))
			if (_0x2f7c24.options && _0x2f7c24.options.length > 0) {
				for (
					let _0x3b3d90 = 0;
					_0x3b3d90 < _0x2f7c24.options.length;
					_0x3b3d90++
				) {
					_0x2f7c24.options[_0x3b3d90].description &&
						(_0x2f7c24.options[_0x3b3d90].description =
							_0x1e0e37.htmlEncodeByRegExp(
								_0x2f7c24.options[_0x3b3d90].description
							))
				}
			}
		}
		if (_0x2d476a == 'IMG') {
			var _0x248bc3 = {
				src: _0x2f7c24.url.replace(
					/origin/, _0x13e36c.width + '_' + _0x13e36c.height
				),
			}
			_0x310f5a = _0x1e0e37.add({
				xtype: 'videoimg',
				renderData: _0x248bc3,
			})
			try {
				_0x516580.eventCount && (_0x516580.eventCount += 1)
			} catch (_0x5d0d63) {
				console.log(_0x5d0d63)
			}
		}
		if (_0x2d476a == 'QUIZ') {
			var _0x14313a = function () { }
			if (_0x2f7c24.errorBackTime && _0x2f7c24.errorBackTime > 0) {
				var _0x41b415 = _0x2f7c24.errorBackTime * 60
				_0x14313a = function () {
					var _0x2ef80f = Math.max(_0x516580.currentTime() - _0x41b415, 0)
					_0x516580.switchStatus = true
					_0x516580.currentTime(_0x2ef80f)
				}
			}
			_0x310f5a = _0x1e0e37.add({
				xtype: 'videoquiz',
				renderData: _0x2f7c24,
				quizErrorReportUrl: _0x1e0e37.quizErrorReportUrl,
				validationUrl2: _0x1e0e37.validationUrl2,
				onerror: _0x14313a,
			})
			try {
				_0x516580.eventCount && (_0x516580.eventCount += 1)
			} catch (_0x393f49) {
				console.log(_0x393f49)
			}
		}
		if (_0x2d476a == 'InteractiveQuiz') {
			var _0x14313a = function () { }
			if (_0x2f7c24.errorBackTime && _0x2f7c24.errorBackTime > 0) {
				var _0x41b415 = _0x2f7c24.errorBackTime * 60
				_0x14313a = function () {
					var _0x59a56c = Math.max(_0x516580.currentTime() - _0x41b415, 0)
					_0x516580.switchStatus = true
					_0x516580.currentTime(_0x59a56c)
				}
			}
			if (_0x2f7c24.errorBack == 1 && _0x2f7c24.eBstartPoint != '') {
				var _0x41b415 = 0, _0x4242a6 = _0x2f7c24.eBstartPoint.split(':'), _0x4259f4 = _0x4242a6.length
				_0x4259f4 > 0 &&
					(_0x4259f4 == 1
						? (_0x41b415 = parseInt(_0x4242a6[0]) * 60)
						: _0x4259f4 == 2 &&
						(_0x41b415 =
							parseInt(_0x4242a6[0]) * 60 + parseInt(_0x4242a6[1])))
				_0x14313a = function () {
					_0x516580.switchStatus = true
					_0x516580.currentTime(_0x41b415)
				}
			}
			_0x2f7c24.dtype = 'InteractiveQuiz'
			_0x310f5a = _0x1e0e37.add({
				xtype: 'videoquiz',
				renderData: _0x2f7c24,
				quizErrorReportUrl: _0x1e0e37.quizErrorReportUrl,
				validationUrl2: _0x1e0e37.validationUrl2,
				quizRightCountUrl: _0x1e0e37.quizRightCountUrl,
				onerror: _0x14313a,
			})
			try {
				_0x516580.eventCount && (_0x516580.eventCount += 1)
			} catch (_0x427691) {
				console.log(_0x427691)
			}
		}
		if (_0x2d476a == 'PPT') {
			if (_0x2f7c24.fp == 0) {
				return
			}
			var _0x4f0b4a = _0x2f7c24.url
			_0x2f7c24.thumb
				? (_0x4f0b4a = _0x2f7c24.thumb + _0x2f7c24.pageNo + '.png')
				: (_0x4f0b4a = _0x4f0b4a.replace(
					/swfv2\/.*$/,
					'thumb/' + _0x2f7c24.fp + '.png'
				))
			var _0x248bc3 = { src: _0x4f0b4a }
			_0x310f5a = _0x1e0e37.add({
				xtype: 'videoppt',
				renderData: _0x248bc3,
			})
			try {
				_0x516580.eventCount && (_0x516580.eventCount += 1)
			} catch (_0x5a3f35) {
				console.log(_0x5a3f35)
			}
		}
		if (_0x2d476a == 'SyncAnnotationEvent') {
			_0x310f5a = _0x1e0e37.add({
				xtype: 'videoannotation',
				renderData: _0x2f7c24,
			})
			try {
				_0x516580.eventCount && (_0x516580.eventCount += 1)
			} catch (_0x35e367) {
				console.log(_0x35e367)
			}
			_0x516580.pause()
			_0x1e0e37.showAnnotation = true
		}
		if (!_0x310f5a) {
			return
		}
		_0x310f5a.on('continue', function () {
			_0x25f6f7()
		})
		var _0x23fe9f = !(_0x310f5a.model === false)
		_0x1e0e37.showModel(_0x23fe9f, _0x2d476a)
		_0x23fe9f && _0x516580.pause()
		_0x2d476a == 'PPT'
			? Ext.select('.ans-timelineobjects').setStyle('position', 'unset')
			: Ext.select('.ans-timelineobjects').setStyle('position', 'absolute')
	},
	htmlEncodeByRegExp: function (_0x414a35) {
		var _0x306454 = ''
		if (_0x414a35.length == 0) {
			return ''
		}
		return (
			(_0x306454 = _0x414a35.replace(/&/g, '&amp;')),
			(_0x306454 = _0x306454.replace(/</g, '&lt;')),
			(_0x306454 = _0x306454.replace(/>/g, '&gt;')),
			(_0x306454 = _0x306454.replace(/\s/g, '&nbsp;')),
			(_0x306454 = _0x306454.replace(/\'/g, '&#39;')),
			(_0x306454 = _0x306454.replace(/\"/g, '&quot;')), _0x306454
		)
	},
	showModel: function (_0x24b906, _0x15c68a) {
		try {
			top.configFullScreen && _0x15c68a != 'PPT' && mediumSizeWindow()
		} catch (_0x2bbb0b) {
			console.log(_0x2bbb0b)
		}
		var _0x184f9e = this
		_0x184f9e.show()
		if (_0x15c68a == 'SyncAnnotationEvent') {
			var _0x241aa2 = $('#video_html5_api').height()
			Ext.select('.comment_box').setStyle('height', _0x241aa2 + 'px')
		}
		_0x24b906
			? (_0x184f9e.removeCls('ans-timelineobjects-autosize'), _0x184f9e.setAutoScroll(true), _0x184f9e.bg.show())
			: (_0x184f9e.addCls('ans-timelineobjects-autosize'), _0x184f9e.setAutoScroll(false))
	},
	hide: function () {
		this.callParent(arguments)
		this.bg.hide.apply(this.bg, arguments)
	},
	updateTime: function (_0x4362e3, _0x2f10a6) {
		if (this.current >= this.objects.length || _0x4362e3.scrubbing()) {
			return
		}
		var _0x4f5f76 = this, _0x3e02d3 = _0x4f5f76.objects[_0x4f5f76.current], _0x427bf9 = _0x3e02d3.style, _0xb5d920 = _0x3e02d3.datas[0]
		_0x2f10a6 >= _0xb5d920.startTime &&
			(_0x4f5f76.current++,
				setTimeout(function () {
					_0x4f5f76.showObject(_0x4362e3, _0x427bf9, _0xb5d920)
				}, 20))
	},
	resetTime: function (_0x352ed5, _0x991379) {
		var _0x178574 = this, _0x4240c3
		for (_0x4240c3 = 0; _0x4240c3 < _0x178574.objects.length; _0x4240c3++) {
			var _0x464e2c = _0x178574.objects[_0x4240c3].datas[0].startTime
			if (_0x991379 <= _0x464e2c) {
				break
			}
		}
		_0x178574.current = _0x4240c3
	},
	sort_: function (_0x2f0750) {
		return (
			_0x2f0750 &&
			_0x2f0750.sort &&
			_0x2f0750.sort(function (_0x5bc31a, _0x45128f) {
				var _0x35c7eb = _0x5bc31a.datas[0].startTime, _0x51d9da = _0x45128f.datas[0].startTime
				return _0x35c7eb - _0x51d9da
			})
		)
	},
});
(function () {
	videojs[_0x4d91d8(445)](_0x4d91d8(223), _0x5444af)
})()
Ext.define('ans.videojs.customIframe', {
	extend: 'Ext.Component',
	xtype: 'customIframe',
	renderTpl: [
		'<iframe src="{src}" class="configIframe" style="height: 100%;width: 100%;left: 0;top: 0;right: 0;bottom: 0; background: rgba(0,0,0,.6);"></iframe>',
	],
	afterRender: function () {
		var _0x2d473e = this
		_0x2d473e.callParent(arguments)
		window.addEventListener('message', function (_0x278f98) {
			typeof _0x278f98.data != 'undefined' &&
				_0x278f98.data.opType === 'closeIframe' &&
				_0x2d473e.fireEvent('continue')
		})
	},
})
Ext.define('ans.videojs.CustomIframe', {
	extend: 'Ext.container.Container',
	cls: 'ans-customIframe',
	autoScroll: true,
	hidden: true,
	hideMode: 'visibility',
	constructor: function (_0x6ec80f) {
		var _0x509974 = this
		_0x509974.callParent(arguments)
		_0x509974.supportHeartbeat = false
		_0x509974.courseid = ''
		_0x509974.clazzId = ''
		_0x509974.knowledgeid = ''
		_0x509974.objectid = ''
		_0x509974.playTime = 0
		_0x509974.requesting = false
		_0x509974.eventArray = []
		_0x509974.userId = ''
		_0x509974.cookieFid = ''
		_0x509974.headOffset = ''
		typeof _0x6ec80f.userId != 'undefined' &&
			(_0x509974.userId = _0x6ec80f.userId)
		typeof _0x6ec80f.cookieFid != 'undefined' &&
			(_0x509974.cookieFid = _0x6ec80f.cookieFid)
		typeof _0x6ec80f.headOffset != 'undefined' &&
			(_0x509974.headOffset = _0x6ec80f.headOffset)
		typeof _0x6ec80f.eventArray != 'undefined' &&
			(_0x509974.eventArray = _0x6ec80f.eventArray)
		typeof _0x6ec80f.supportHeartbeat != 'undefined' &&
			(_0x509974.supportHeartbeat = _0x6ec80f.supportHeartbeat)
		typeof _0x6ec80f.courseid != 'undefined' &&
			(_0x509974.courseid = _0x6ec80f.courseid)
		typeof _0x6ec80f.clazzId != 'undefined' &&
			(_0x509974.clazzId = _0x6ec80f.clazzId)
		typeof _0x6ec80f.knowledgeid != 'undefined' &&
			(_0x509974.knowledgeid = _0x6ec80f.knowledgeid)
		typeof _0x6ec80f.objectid != 'undefined' &&
			(_0x509974.objectid = _0x6ec80f.objectid)
		_0x509974.lastHeartbeat = 0
		_0x509974.lastShowIFrame = 0
		_0x509974.objects =
			_0x6ec80f.objects && _0x6ec80f.objects.sort
				? _0x509974.sort_(_0x6ec80f.objects)
				: []
		_0x509974.eventArray.forEach(function (_0x48d67a) {
			var _0x4d6547 = parseInt(_0x48d67a.eventIntervalType)
			_0x4d6547 === 0
				? ((_0x48d67a.lastHeartbeat = 0),
					(_0x48d67a.pauseTimeRange = 0),
					(_0x48d67a.pauseTimeStamp = -1),
					(_0x48d67a.requesting = false))
				: _0x4d6547 === 1 &&
				((_0x48d67a.timeArray = sortArray(_0x48d67a.timeArray)),
					(_0x48d67a.index = 0))
		})
	},
	showIFrame: function (_0x3d82e3, _0x2b4c79, _0x48985c) {
		try {
			var _0x2b43e3 = this
			parseInt(_0x2b4c79) === 1
				? _0x2b43e3.showObject(_0x3d82e3, 'customIframe', _0x48985c)
				: parseInt(_0x2b4c79) === 2 && showPopIframe(_0x48985c, _0x3d82e3)
		} catch (_0x557035) {
			console.log(_0x557035)
		}
	},
	deleteTemporaryEvent: function () {
		try {
			this.eventArray.forEach(function (_0x34b328, _0xa930b0, _0x1a6494) {
				typeof _0x34b328.temporaryEvent != 'undefined' &&
					_0x34b328.temporaryEvent &&
					_0x1a6494.splice(_0xa930b0, 1)
			})
		} catch (_0x470948) {
			console.log(_0x470948)
		}
	},
	initHeartbeat: function (_0x110bf1, _0x46bbed, _0x785eb5) {
		if (typeof _0x110bf1 == _0x245302(730) || _0x110bf1 == '') {
			return
		}
		Ext[_0x245302(790)][_0x245302(628)]({
			url: _0x110bf1,
			params: {
				uid: _0x4c1770[_0x245302(449)],
				schoolId: _0x4c1770.cookieFid,
				moocClassId: _0x4c1770[_0x245302(760)],
				moocCourseId: _0x4c1770[_0x245302(620)],
				chapterId: _0x4c1770[_0x245302(148)],
				objectId: _0x4c1770[_0x245302(212)],
				videoProgress: _0x4c1770.headOffset,
				totalVideoDuration: window[_0x245302(768)],
				enc: _0x4c1770[_0x245302(385)],
			},
			method: _0x245302(845),
			success: function (_0x52d06e) {
				try {
					if (
						typeof _0x26cf8f[_0x6d5e38(661)] !== _0x6d5e38(730) &&
						parseInt(_0x26cf8f.result) === 1
					) {
						if (
							_0x26cf8f.showPop &&
							typeof _0x26cf8f[_0x6d5e38(347)] != 'undefined'
						) {
							_0x4c1770[_0x6d5e38(407)].push(_0x16a530)
						}
					} else {
						typeof _0x26cf8f[_0x6d5e38(392)] != _0x6d5e38(730) &&
							alert(_0x6d5e38(522) + _0x26cf8f.errorCode)
					}
					typeof _0x785eb5 != _0x6d5e38(730) &&
						((_0x785eb5[_0x6d5e38(410)] = false),
							console[_0x6d5e38(442)](_0x6d5e38(182)))
				} catch (_0x1443cd) {
					console.log(_0x1443cd)
				}
			},
			failure: function () {
				var _0x316435 = _0x245302
				typeof _0x785eb5 != _0x316435(730) &&
					(_0x785eb5[_0x316435(410)] = false)
				console[_0x316435(442)](_0x316435(718))
			},
		})
	},
	seekVideoTime: function (_0x1f9edb, _0x3bcb7a) {
		try {
			var _0x29e981 = this
			typeof _0x29e981.cmp != 'undefined' &&
				_0x29e981.cmp != null &&
				(_0x29e981.cmp.destroy(), _0x29e981.hide(),
					(_0x1f9edb.eventCount = _0x1f9edb.eventCount - 1), _0x1f9edb.eventCount <= 0 &&
					(_0x1f9edb.currentTime(_0x3bcb7a), _0x1f9edb.play()))
		} catch (_0x518435) {
			console.log(_0x518435)
		}
	},
	showObject: function (_0x4a53f0, _0x362c2d, _0x13a36d) {
		var _0x4fc657 = this, _0xa22b4e = _0x4fc657.items.getAt(0), _0xd3671b, _0x3fd3a3 = function (_0x510be7) {
			_0xd3671b.destroy()
			_0x4fc657.hide()
			_0x510be7.eventCount = _0x510be7.eventCount - 1
			_0x510be7.eventCount <= 0 && _0x510be7.play()
		}
		_0xa22b4e != null && _0xa22b4e.destroy()
		_0x4fc657.cmp = null
		_0x362c2d == 'customIframe' &&
			((_0xd3671b = _0x4fc657.add({
				xtype: 'customIframe',
				renderData: { src: _0x13a36d },
			})),
				(_0x4a53f0.eventCount += 1))
		if (!_0xd3671b) {
			return
		}
		_0xd3671b.on('continue', function () {
			_0x3fd3a3(_0x4a53f0)
		})
		var _0x58249e = !(_0xd3671b.model === false)
		_0x4fc657.showModel(_0x58249e)
		_0x4fc657.cmp = _0xd3671b
		_0x58249e && _0x4a53f0.pause()
	},
	showModel: function (_0x22da93) {
		var _0x5639b5 = this
		_0x5639b5.show()
		_0x22da93
			? (_0x5639b5.removeCls('ans-timelineobjects-autosize'), _0x5639b5.setAutoScroll(true))
			: (_0x5639b5.addCls('ans-timelineobjects-autosize'), _0x5639b5.setAutoScroll(false))
	},
	hide: function () {
		this.callParent(arguments)
	},
	updateTime: function (_0x44ea8d, _0x450c44) {
		try {
			if (this.supportHeartbeat && isStuViewPage() && !_0x44ea8d.paused()) {
				var _0x496d3e = new Date().getTime(), _0x35b774 = this, _0x21d78b = 0
				for (
					var _0x126acc = 0;
					_0x126acc < _0x35b774.eventArray.length;
					_0x126acc++
				) {
					var _0x1d483e = _0x35b774.eventArray[_0x126acc], _0x22835b = parseInt(_0x1d483e.eventType), _0x2041e1 = parseInt(_0x1d483e.eventIntervalType)
					if (_0x2041e1 === 0) {
						if (
							(_0x22835b === 0 && _0x1d483e.requesting) ||
							_0x44ea8d.scrubbing()
						) {
							continue
						}
						var _0x46e21a = _0x496d3e - _0x1d483e.lastHeartbeat
						_0x1d483e.pauseTimeRange > 0 &&
							(_0x46e21a = _0x46e21a - _0x1d483e.pauseTimeRange)
						var _0x5771b2 = _0x46e21a / 1000
						_0x5771b2 = parseInt(_0x5771b2)
						if (_0x5771b2 > _0x1d483e.eventInterval) {
							if (_0x22835b === 1 || _0x22835b === 2) {
								_0x21d78b++
								if (_0x21d78b > 1) {
									break
								}
							}
							_0x1d483e.pauseTimeRange = 0
							_0x1d483e.lastHeartbeat = _0x496d3e
							_0x22835b === 0
								? ((_0x1d483e.requesting = true), _0x35b774.initHeartbeat(_0x1d483e.url, _0x44ea8d, _0x1d483e))
								: (_0x22835b === 1 || _0x22835b === 2) &&
								(_0x35b774.showIFrame(_0x44ea8d, _0x22835b, _0x1d483e.url),
									typeof _0x1d483e.temporaryEvent != 'undefined' &&
									_0x1d483e.temporaryEvent &&
									_0x35b774.deleteTemporaryEvent())
						}
					} else {
						if (_0x2041e1 === 1) {
							if (
								_0x1d483e.index >= _0x1d483e.timeArray.length ||
								_0x44ea8d.scrubbing()
							) {
								continue
							}
							var _0x154874 = _0x1d483e.timeArray[_0x1d483e.index]
							if (typeof _0x154874 == 'undefined') {
								continue
							}
							if (_0x450c44 >= parseInt(_0x154874)) {
								if (_0x22835b === 1 || _0x22835b === 2) {
									_0x21d78b++
									if (_0x21d78b > 1) {
										break
									}
								}
								_0x1d483e.index++
								var _0x5b4718 = _0x1d483e.url
								_0x22835b === 0
									? _0x35b774.initHeartbeat(_0x5b4718, _0x44ea8d)
									: (_0x22835b === 1 || _0x22835b === 2) &&
									_0x35b774.showIFrame(_0x44ea8d, _0x22835b, _0x5b4718)
							}
						}
					}
				}
			}
		} catch (_0x4d0cc8) {
			console.log(_0x4d0cc8)
		}
	},
	resetTime: function (_0x288496, _0x11dca9) {
		try {
			var _0x2168aa = this, _0x5710b0
			for (
				_0x5710b0 = 0;
				_0x5710b0 < _0x2168aa.eventArray.length;
				_0x5710b0++
			) {
				var _0x549516 = _0x2168aa.eventArray[_0x5710b0]
				if (parseInt(_0x549516.eventIntervalType) === 1) {
					for (
						var _0x1d7858 = 0;
						_0x1d7858 < _0x549516.timeArray.length;
						_0x1d7858++
					) {
						var _0x5cb4dd = _0x549516.timeArray[_0x1d7858]
						if (_0x11dca9 <= _0x5cb4dd) {
							break
						}
					}
					_0x549516.index = _0x1d7858
				}
			}
		} catch (_0x17b0b2) {
			console.log(_0x17b0b2)
		}
	},
})
function sortArray(_0x259c57) {
	try {
		return (
			_0x259c57 &&
			_0x259c57.sort &&
			_0x259c57.sort(function (_0x36ef7a, _0x570db8) {
				return _0x36ef7a - _0x570db8
			})
		)
	} catch (_0x378203) {
		console.log(_0x378203)
	}
	return _0x259c57
};
(function () {
	var _0x53cd7c = videojs.getPlugin('plugin'), _0x32a648 = videojs.extend(_0x53cd7c, {
		constructor: function (_0x18ec38, _0x2a294e) {
			if (
				typeof _0x2a294e.supportHeartbeat == 'undefined' ||
				!_0x2a294e.supportHeartbeat
			) {
				return
			}
			_0x53cd7c.call(this, _0x18ec38, _0x2a294e)
			_0x18ec38.pauseTimeStamp = 0
			_0x18ec38.pauseTimeRange = 0
			var _0x1ec820 = null
			try {
				_0x1ec820 = Ext.create('ans.videojs.CustomIframe', {
					renderTo: _0x18ec38.el_,
					supportHeartbeat: _0x2a294e.supportHeartbeat,
					eventArray: _0x2a294e.eventArray,
					courseid: _0x2a294e.courseid,
					clazzId: _0x2a294e.clazzId,
					knowledgeid: _0x2a294e.knowledgeid,
					objectid: _0x2a294e.objectid,
					videoEnc: _0x2a294e.videoEnc,
					userId: _0x2a294e.userId,
					cookieFid: _0x2a294e.cookieFid,
					headOffset: _0x2a294e.headOffset,
				})
			} catch (_0xe7e84) {
				console.log(_0xe7e84)
			}
			if (_0x1ec820 == null) {
				return
			}
			_0x18ec38.on('play', function () {
				try {
					var _0x2e0966 = new Date().getTime()
					_0x1ec820.eventArray.forEach(function (_0x1e3947) {
						var _0x39ad03 = parseInt(_0x1e3947.eventIntervalType)
						if (_0x39ad03 === 0) {
							if (_0x1e3947.pauseTimeStamp > 0) {
								_0x1e3947.pauseTimeStamp < _0x1e3947.lastHeartbeat &&
									(_0x1e3947.pauseTimeStamp = _0x1e3947.lastHeartbeat)
								var _0x7a92a1 = _0x2e0966 - _0x1e3947.pauseTimeStamp
								_0x1e3947.pauseTimeRange += _0x7a92a1
							}
							_0x1e3947.pauseTimeStamp = 0
						}
					})
					_0x1ec820.resetTime(_0x18ec38, _0x18ec38.currentTime())
				} catch (_0xe5975) {
					console.log(_0xe5975)
				}
			})
			_0x18ec38.on('seekend', function () {
				_0x1ec820.resetTime(_0x18ec38, _0x18ec38.currentTime())
			})
			_0x18ec38.on('pause', function () {
				try {
					var _0x359fcb = new Date().getTime()
					_0x1ec820.eventArray.forEach(function (_0x1886da) {
						var _0x289d42 = parseInt(_0x1886da.eventIntervalType)
						_0x289d42 === 0 && (_0x1886da.pauseTimeStamp = _0x359fcb)
					})
				} catch (_0x41848f) {
					console.log(_0x41848f)
				}
			})
			_0x18ec38.on('timeupdate', function () {
				try {
					!_0x18ec38.paused() &&
						_0x1ec820.updateTime(_0x18ec38, parseInt(_0x18ec38.currentTime()))
					_0x1ec820.playTime = _0x18ec38.currentTime()
				} catch (_0x882a9b) {
					console.log(_0x882a9b)
				}
			})
			window.addEventListener('message', function (_0x2b53ac) {
				try {
					if (!_0x2a294e.supportHeartbeat || !isStuViewPage()) {
						return
					}
					var _0x569365 = _0x2b53ac.data
					if (typeof _0x569365 == 'undefined') {
						_0x1ec820.resetDiv(_0x18ec38)
						return
					}
					var _0x1339fb = parseInt(_0x2a294e.duration)
					if (_0x569365.opType === 'fastForward') {
						var _0xacd88d = _0x569365.value
						if (typeof _0xacd88d === 'undefined') {
							_0x1ec820.resetDiv(_0x18ec38)
							return
						}
						_0xacd88d = parseInt(_0xacd88d)
						if (!(_0xacd88d > 0)) {
							_0x1ec820.resetDiv(_0x18ec38)
							return
						}
						_0x18ec38.ignoreSeek = false
						_0x18ec38.switchStatus = true
						var _0x528ee6 = _0x18ec38.currentTime()
						_0x528ee6 = parseInt(_0x528ee6)
						var _0x2124fe = _0x528ee6 + _0xacd88d
						if (_0x2124fe > _0x1339fb) {
							_0x1ec820.resetDiv(_0x18ec38)
							return
						}
						_0x1ec820.seekVideoTime(_0x18ec38, _0x2124fe)
						return
					}
					if (_0x569365.opType === 'videoStartTime') {
						var _0xacd88d = _0x569365.value
						if (typeof _0xacd88d === 'undefined') {
							_0x1ec820.resetDiv(_0x18ec38)
							return
						}
						_0xacd88d = parseInt(_0xacd88d)
						if (!(_0xacd88d >= 0) || _0xacd88d > _0x1339fb) {
							_0x1ec820.resetDiv(_0x18ec38)
							return
						}
						_0x18ec38.ignoreSeek = false
						_0x18ec38.switchStatus = true
						_0x1ec820.seekVideoTime(_0x18ec38, _0xacd88d)
					}
				} catch (_0xc79a89) {
					console.log(_0xc79a89)
				}
			})
		},
	})
	videojs.registerPlugin('customIframePlugin', _0x32a648)
})();
(function () {
	videojs[_0x564b5e(445)](_0x564b5e(272), _0x387229)
})();
(function () {
	videojs[_0x24ec50(445)]('subtitle', _0x381765)
})()
Ext.define('ans.videojs.ErrorDisplay', {
	extend: 'Ext.Component',
	xtype: 'vjserrdisplay',
	cls: 'ans-vjserrdisplay',
	renderTpl: [
		'<div class="ans-vjserrdisplay-title">{errorMsg}</div>',
		'<ul class="ans-vjserrdisplay-opts">',
		'您可以尝试其他线路: ',
		'<tpl for="playlines">',
		'<li class="ans-vjserrdisplay-opt"><label>',
		'<input type="radio" name="ans-vjserrdisplay-opt" {[xindex-1 === parent.selectedIndex ? "checked disabled":""]}>',
		'{label}',
		'</label></li>',
		'</tpl> ',
		'</ul>',
	],
	renderSelectors: { errorMsgEl: 'div.ans-vjserrdisplay-title' },
	afterRender: function () {
		var _0x4e5eb1 = this
		_0x4e5eb1.callParent(arguments)
		var _0x422496 = Ext.query('input', _0x4e5eb1.el.dom)
		Ext.each(_0x422496, function (_0x27bac4, _0x4e3415) {
			Ext.fly(_0x27bac4).on('click', function () {
				_0x4e5eb1.onSelected(_0x4e3415)
			})
		})
		try {
			typeof createVideoTask === 'function'
				? createVideoTask()
				: console.log('createVideoTask函数不存在\uFF01')
		} catch (_0x4635c4) { }
		try {
			if (typeof aplus_queue != 'undefined') {
				var _0x5ae634 = parent.AttachmentSetting
				if (_0x5ae634) {
					var _0x215082 = _0x5ae634.aplus_video_id, _0x223ee1 = _0x5ae634.aplus_resource_id, _0xefa2a3 = _0x5ae634.knowledgename, _0x41c8ec = _0x5ae634.coursename
					aplus_queue.push({
						action: 'aplus.record',
						arguments: [
							'pybk_error',
							'OTHER',
							{
								video_name: _0xefa2a3,
								video_id: _0x215082,
								resource_id: _0x223ee1,
								resource_name: _0x41c8ec,
							},
						],
					})
				}
			}
		} catch (_0x22fcb4) { }
	},
	setErrorMsg: function (_0x54249d) {
		Ext.fly(this.errorMsgEl).setHTML(_0x54249d)
	},
})
Ext.define('ans.videojs.ErrorNote', {
	extend: 'Ext.Component',
	cls: 'ans-vjserrdisplay',
	renderTpl: ['<div class="ans-vjserrdisplay-title">播放出现异常\u3002</div>'],
});
(function () {
	var _0x2c5f1b = videojs.getComponent('ErrorDisplay'), _0x521e82 = videojs.extend(_0x2c5f1b, {
		constructor: function (_0x52f929, _0x2c7d4c) {
			_0x2c5f1b.call(this, _0x52f929, _0x2c7d4c)
		},
		colse: function () {
			_0x2c5f1b.prototype.colse.call(this)
			me.ansErrorDisplay &&
				(me.ansErrorDisplay.destroy(), (me.ansErrorDisplay = null))
		},
		fill: function () {
			_0x2c5f1b.prototype.fill.call(this)
			var _0x152284 = this, _0x103dc0 = _0x152284.player_, _0x5ef1f0 = _0x103dc0.options_.playlines, _0x5a1541 = Ext.query('.vjs-modal-dialog-content', _0x152284.el_)[0]
			_0x152284.ansErrorDisplay &&
				(_0x152284.ansErrorDisplay.destroy(),
					delete _0x152284.ansErrorDisplay)
			if (!_0x103dc0.selectCDN || !_0x5ef1f0) {
				_0x152284.ansErrorDisplay = Ext.create('ans.videojs.ErrorNote', {
					renderTo: _0x152284.el_,
				})
				return
			}
			var _0x2d6f72 = _0x103dc0.currentPlayline(), _0x9234ab = 0
			Ext.each(_0x5ef1f0, function (_0x16c821, _0x41b88e) {
				_0x2d6f72 == _0x16c821 && (_0x9234ab = _0x41b88e)
			})
			_0x152284.ansErrorDisplay = Ext.create('ans.videojs.ErrorDisplay', {
				renderTo: _0x152284.el_,
				onSelected: function (_0x33ed0a) {
					_0x103dc0.selectCDN(_0x33ed0a)
					_0x152284.close()
				},
				renderData: {
					playlines: _0x5ef1f0,
					errorMsg: _0x152284.content(),
					selectedIndex: _0x9234ab,
				},
			})
		},
	})
	videojs.registerComponent('ErrorDisplay', _0x521e82)
})();
(function () {
	var _0x374e65 = null
	typeof window.videojs === 'undefined' && typeof require === 'function' ? (_0x374e65 = require('video.js')) : (_0x374e65 = window.videojs);
	(function (_0x199c28, _0x1b2081) {
		var _0x2a9511 = {}, _0x34215e, _0x55a248 = {}, _0x472f8d = {}
		function _0x5507b1(_0x55d4ce, _0x3f43eb, _0x2b173a, _0x8afc53) {
			_0x55a248 = {
				label: _0x2b173a,
				sources: _0x3f43eb,
			}
			if (typeof _0x8afc53 === 'function') {
				return _0x8afc53(_0x55d4ce, _0x3f43eb, _0x2b173a)
			}
			return (
				_0x55d4ce.src(
					_0x3f43eb.map(function (_0x16fe40) {
						return {
							src: _0x16fe40.src,
							type: _0x16fe40.type,
							res: _0x16fe40.res,
						}
					})
				), _0x55d4ce
			)
		}
		var _0xa58a5d = _0x1b2081.getComponent('MenuItem'), _0x24c399 = _0x1b2081.extend(_0xa58a5d, {
			constructor: function (_0x21b76c, _0x233b25, _0x96ce51, _0x4b0a78) {
				this.onClickListener = _0x96ce51
				this.label = _0x4b0a78
				_0xa58a5d.call(this, _0x21b76c, _0x233b25)
				this.src = _0x233b25.src
				this.on('click', this.onClick)
				this.on('touchstart', this.onClick)
				_0x233b25.initialySelected &&
					(this.showAsLabel(),
						this.selected(true),
						this.addClass('vjs-selected'))
			},
			showAsLabel: function () {
				this.label && (this.label.innerHTML = this.options_.label)
			},
			onClick: function (_0x5aaa46) {
				this.onClickListener(this)
				var _0x5966bc = this.player_.currentTime(), _0x5e1b51 = this.player_.paused()
				this.showAsLabel()
				this.addClass('vjs-selected')
				!_0x5e1b51 && this.player_.bigPlayButton.hide()
				typeof _0x5aaa46 !== 'function' &&
					typeof this.options_.customSourcePicker === 'function' &&
					(_0x5aaa46 = this.options_.customSourcePicker)
				var _0x45402e = 'loadeddata'
				this.player_.techName_ !== 'Youtube' &&
					this.player_.preload() === 'none' &&
					this.player_.techName_ !== 'Flash' &&
					(_0x45402e = 'timeupdate')
				_0x5507b1(this.player_, this.src, this.options_.label, _0x5aaa46).one(
					_0x45402e,
					function () {
						var _0x22cb11 = this.player_
						_0x22cb11.switchStatus = true
						_0x22cb11.currentTime(_0x5966bc)
						!_0x5e1b51 && _0x22cb11.play()
						_0x22cb11.trigger('resolutionchange')
					}
				)
			},
		})
		_0x1b2081.registerComponent('ResolutionMenuItem', _0x24c399)
		var _0x494348 = _0x1b2081.getComponent('MenuButton'), _0x17d40f = _0x1b2081.extend(_0x494348, {
			constructor: function (_0x4f5b4f, _0x53211b, _0x4c5ef2, _0x4f8c12) {
				this.sources = _0x53211b.sources
				this.label = _0x4f8c12
				this.label.innerHTML = _0x53211b.initialySelectedLabel
				_0x494348.call(this, _0x4f5b4f, _0x53211b, _0x4c5ef2)
				this.controlText('Quality')
				if (_0x4c5ef2.dynamicLabel) {
					this.el().appendChild(_0x4f8c12)
				} else {
					var _0x137fac = document.createElement('span')
					_0x1b2081.dom.addClass(
						_0x137fac,
						'vjs-resolution-button-staticlabel'
					)
					this.el().appendChild(_0x137fac)
				}
			},
			createItems: function () {
				var _0x568a86 = [], _0x2c09ef = (this.sources && this.sources.label) || {}, _0x1a136b = function (_0x4e64e8) {
					_0x568a86.map(function (_0x19a372) {
						_0x19a372.selected(_0x19a372 === _0x4e64e8)
						_0x19a372.removeClass('vjs-selected')
					})
				}
				for (var _0x137096 in _0x2c09ef) {
					_0x2c09ef.hasOwnProperty(_0x137096) &&
						(_0x568a86.push(
							new _0x24c399(
								this.player_,
								{
									label: _0x137096,
									src: _0x2c09ef[_0x137096],
									initialySelected:
										_0x137096 === this.options_.initialySelectedLabel,
									customSourcePicker: this.options_.customSourcePicker,
								}, _0x1a136b,
								this.label
							)
						),
							(_0x472f8d[_0x137096] = _0x568a86[_0x568a86.length - 1]))
				}
				return _0x568a86
			},
		})
		_0x34215e = function (_0x5960bf) {
			var _0x5101a3 = _0x1b2081.mergeOptions(_0x2a9511, _0x5960bf), _0x1c53ff = this, _0x2186ae = document.createElement('span'), _0x4e9c9d = {}
			_0x1b2081.dom.addClass(_0x2186ae, 'vjs-resolution-button-label')
			_0x1c53ff.updateSrc = function (_0x150f3a) {
				if (!_0x150f3a) {
					return _0x1c53ff.src()
				}
				_0x1c53ff.controlBar.resolutionSwitcher &&
					(_0x1c53ff.controlBar.resolutionSwitcher.dispose(),
						delete _0x1c53ff.controlBar.resolutionSwitcher)
				_0x150f3a = _0x150f3a.sort(_0x27a1ad)
				_0x4e9c9d = _0x590c96(_0x150f3a)
				var _0x295fa7 = _0x162274(_0x4e9c9d, _0x150f3a), _0x348fac = new _0x17d40f(
					_0x1c53ff,
					{
						sources: _0x4e9c9d,
						initialySelectedLabel: _0x295fa7.label,
						initialySelectedRes: _0x295fa7.res,
						customSourcePicker: _0x5101a3.customSourcePicker,
					}, _0x5101a3, _0x2186ae
				)
				return (
					_0x1b2081.dom.addClass(_0x348fac.el(), 'vjs-resolution-button'),
					(_0x1c53ff.controlBar.resolutionSwitcher =
						_0x1c53ff.controlBar.el_.insertBefore(
							_0x348fac.el_, _0x1c53ff.controlBar.getChild('fullscreenToggle').el_
						)),
					(_0x1c53ff.controlBar.resolutionSwitcher.dispose = function () {
						this.parentNode.removeChild(this)
					}), _0x5507b1(
						_0x1c53ff, _0x295fa7.sources, _0x295fa7.label, _0x5101a3.customSourcePicker
					)
				)
			}
			_0x1c53ff.currentResolution = function (_0x4a7f35, _0x2c03d9) {
				if (_0x4a7f35 == null) {
					return _0x55a248
				}
				return (
					_0x472f8d[_0x4a7f35] != null &&
					_0x472f8d[_0x4a7f35].onClick(_0x2c03d9), _0x1c53ff
				)
			}
			_0x1c53ff.getGroupedSrc = function () {
				return _0x4e9c9d
			}
			function _0x27a1ad(_0x164424, _0x19eb72) {
				if (!_0x164424.res || !_0x19eb72.res) {
					return 0
				}
				return +_0x19eb72.res - +_0x164424.res
			}
			function _0x590c96(_0x7c6f65) {
				var _0x18bcc7 = {
					label: {},
					res: {},
					type: {},
				}
				return (
					_0x7c6f65.map(function (_0x2413fa) {
						_0x25bda4(_0x18bcc7, 'label', _0x2413fa)
						_0x25bda4(_0x18bcc7, 'res', _0x2413fa)
						_0x25bda4(_0x18bcc7, 'type', _0x2413fa)
						_0x50070a(_0x18bcc7, 'label', _0x2413fa)
						_0x50070a(_0x18bcc7, 'res', _0x2413fa)
						_0x50070a(_0x18bcc7, 'type', _0x2413fa)
					}), _0x18bcc7
				)
			}
			function _0x25bda4(_0x2fc26c, _0x476f43, _0x58cc11) {
				_0x2fc26c[_0x476f43][_0x58cc11[_0x476f43]] == null &&
					(_0x2fc26c[_0x476f43][_0x58cc11[_0x476f43]] = [])
			}
			function _0x50070a(_0x2325a9, _0x5cf096, _0x1fe09f) {
				_0x2325a9[_0x5cf096][_0x1fe09f[_0x5cf096]].push(_0x1fe09f)
			}
			function _0x162274(_0x255572, _0x1a9f3a) {
				var _0x1fbd99 = _0x5101a3.default, _0x1fea46 = ''
				return (
					_0x1fbd99 === 'high'
						? ((_0x1fbd99 = _0x1a9f3a[0].res), (_0x1fea46 = _0x1a9f3a[0].label))
						: _0x1fbd99 === 'low' ||
							_0x1fbd99 == null ||
							!_0x255572.res[_0x1fbd99]
							? ((_0x1fbd99 = _0x1a9f3a[_0x1a9f3a.length - 1].res),
								(_0x1fea46 = _0x1a9f3a[_0x1a9f3a.length - 1].label))
							: _0x255572.res[_0x1fbd99] &&
							(_0x1fea46 = _0x255572.res[_0x1fbd99][0].label),
					{
						res: _0x1fbd99,
						label: _0x1fea46,
						sources: _0x255572.res[_0x1fbd99],
					}
				)
			}
			_0x1c53ff.ready(function () {
				_0x1c53ff.options_.sources.length > 0 &&
					_0x1c53ff.setTimeout(function () {
						_0x1c53ff.updateSrc(_0x1c53ff.options_.sources)
					}, 1)
			})
		}
		_0x1b2081.registerPlugin('videoJsResolutionSwitcher', _0x34215e)
	})(window, _0x374e65)
})();
(function () {
	(function (_0x33a764, _0x19a816) {
		var _0x2cabf4 = {}, _0x40033c, _0x55cacb = {}, _0x100017 = { _0x29c521: _0x712e0a[_0x712e0a.length - 1] }
		function _0x360645(_0x290e0f, _0x2d8ce7, _0x1e321e, _0x20678e) {
			_0x55cacb = _0x2d8ce7
			if (typeof _0x20678e === 'function') {
				return _0x20678e(_0x290e0f, _0x2d8ce7, _0x1e321e)
			}
			return _0x290e0f
		}
		var _0x174178 = _0x19a816.getComponent('ResolutionMenuItem'), _0x39ab35 = _0x19a816.extend(_0x174178, {
			onClick: function (_0x27ed4e) {
				this.onClickListener(this)
				var _0x206aff = this.player_.currentTime(), _0x23eb72 = this.player_.paused()
				this.showAsLabel()
				this.addClass('vjs-selected')
				!_0x23eb72 && this.player_.bigPlayButton.hide()
				typeof _0x27ed4e !== 'function' &&
					typeof this.options_.customSourcePicker === 'function' &&
					(_0x27ed4e = this.options_.customSourcePicker)
				var _0x34e1f6 = 'loadeddata'
				this.player_.techName_ !== 'Youtube' &&
					this.player_.preload() === 'none' &&
					this.player_.techName_ !== 'Flash' &&
					(_0x34e1f6 = 'timeupdate')
				var _0x54eade = _0x360645(
					this.player_,
					this.src,
					this.options_.label, _0x27ed4e
				)
				_0x54eade &&
					_0x54eade.one(_0x34e1f6, function () {
						_0x54eade.switchStatus = true
						_0x54eade.currentTime(_0x206aff)
						!_0x23eb72 && _0x54eade.play()
						_0x54eade.trigger('playlinechange')
					})
			},
		}), _0x452b2e = _0x19a816.getComponent('MenuButton'), _0x1084d0 = _0x19a816.extend(_0x452b2e, {
			constructor: function (_0x339fb5, _0xf33252, _0x365b37, _0x1c322a) {
				this.playlines = _0xf33252.playlines
				this.label = _0x1c322a
				this.label.innerHTML = _0xf33252.initialySelectedLabel
				_0x452b2e.call(this, _0x339fb5, _0xf33252, _0x365b37)
				this.controlText('Playline')
				if (_0x365b37.dynamicLabel) {
					this.el().appendChild(_0x1c322a)
				} else {
					var _0x20d8f2 = document.createElement('span')
					_0x19a816.addClass(_0x20d8f2, 'vjs-resolution-button-staticlabel')
					this.el().appendChild(_0x20d8f2)
				}
			},
			createItems: function () {
				var _0x712e0a = [], _0x128bf7 = this.playlines || [], _0x5e761c = function (_0x354414) {
					_0x712e0a.map(function (_0x1c033b) {
						_0x1c033b.selected(_0x1c033b === _0x354414)
						_0x1c033b.removeClass('vjs-selected')
					})
				}
				for (var _0x2329e5 = 0; _0x2329e5 < _0x128bf7.length; _0x2329e5++) {
					var _0x29c521 = _0x128bf7[_0x2329e5].label
					_0x712e0a.push(
						new _0x39ab35(
							this.player_,
							{
								label: _0x29c521,
								src: _0x128bf7[_0x2329e5],
								initialySelected:
									_0x29c521 === this.options_.initialySelectedLabel,
								customSourcePicker: this.options_.customSourcePicker,
							}, _0x5e761c,
							this.label
						)
					)
				}
				return _0x712e0a
			},
		})
		_0x40033c = function (_0x2927d3) {
			var _0x456a98 = _0x19a816.mergeOptions(_0x523b42, _0x2927d3), _0x19b8c5 = this, _0x21583a = document.createElement('span'), _0x452b86 = _0x19b8c5.options_.playlines, _0x523b42 = _0x456a98.defaults
			_0x19a816.dom.addClass(_0x21583a, 'vjs-resolution-button-label')
			var _0x1613d1 = new _0x1084d0(
				_0x19b8c5,
				{
					playlines: _0x452b86,
					initialySelectedLabel: _0x523b42
						? _0x523b42.label
						: _0x452b86[0].label,
					initialySelectedUrl: _0x523b42 ? _0x523b42.url : _0x452b86[0].url,
					customSourcePicker: _0x456a98.customSourcePicker,
				}, _0x456a98, _0x21583a
			)
			_0x19a816.dom.addClass(_0x1613d1.el(), 'vjs-resolution-button')
			_0x19a816.dom.addClass(_0x1613d1.el(), 'vjs-playline-button')
			_0x1613d1.show()
			_0x19b8c5.selectCDN = function (_0x40ceef) {
				_0x1613d1.items[_0x40ceef].onClick(_0x456a98.customSourcePicker)
				_0x19b8c5.play()
			}
			_0x452b86.length > 0 &&
				(_0x523b42 ? (_0x55cacb = _0x523b42) : (_0x55cacb = _0x452b86[0]))
			_0x19b8c5.currentPlayline = function () {
				return _0x55cacb
			}
			_0x19b8c5.ready(function () {
				_0x19b8c5.controlBar.videoJsPlayLine =
					_0x19b8c5.controlBar.el_.insertBefore(
						_0x1613d1.el_, _0x19b8c5.controlBar.getChild('fullscreenToggle').el_
					)
				_0x19b8c5.controlBar.videoJsPlayLine.dispose = function () {
					this.parentNode.removeChild(this)
				}
			})
		}
		_0x19a816.registerPlugin('videoJsPlayLine', _0x40033c)
	})(window, videojs)
})()
Ext.define('ans.AudioJs', {
	videoJs: null,
	mixins: { observable: 'Ext.util.Observable' },
	constructor: function (_0x3414b4) {
		_0x3414b4 = _0x3414b4 || {}
		var _0x2b156a = this
		_0x2b156a.addEvents(['seekstart'])
		_0x2b156a.mixins.observable.constructor.call(_0x2b156a, _0x3414b4)
		var _0xcebb13 = videojs(
			_0x3414b4.videojs, _0x2b156a.params2VideoOpt(_0x3414b4.params),
			function () { }
		)
		Ext.fly(_0x3414b4.videojs).on('contextmenu', function (_0x596e9c) {
			_0x596e9c.preventDefault()
		})
		Ext.fly(_0x3414b4.videojs).on('keydown', function (_0x480e19) {
			(_0x480e19.keyCode == 32 ||
				_0x480e19.keyCode == 37 ||
				_0x480e19.keyCode == 39) &&
				_0x480e19.preventDefault()
			_0x480e19.keyCode == 32 &&
				(_0xcebb13.paused() ? _0xcebb13.play() : _0xcebb13.pause())
		})
	},
	params2VideoOpt: function (_0x35bbdd) {
		!_0x35bbdd[_0x2e1e0f(159)] && (_0x35bbdd[_0x2e1e0f(159)] = '')
		_0x35bbdd[_0x2e1e0f(651)] &&
			_0x30e6cc[_0x2e1e0f(664)]({
				src: _0x35bbdd.http,
				type: 'audio/mp3',
			})
		return {
			language: _0x2e1e0f(206),
			controls: true,
			preload: _0x2e1e0f(211),
			bigPlayButton: false,
			sources: _0x30e6cc,
			textTrackDisplay: true,
			controlBar: {
				volumePanel: { inline: true },
				children: [
					_0x2e1e0f(231), _0x2e1e0f(457), _0x2e1e0f(393), _0x2e1e0f(647), _0x2e1e0f(839), _0x2e1e0f(518),
				],
			},
			plugins: {
				audioNote: { title: _0x35bbdd[_0x2e1e0f(551)] },
				studyControl: { enableSwitchWindow: 1 },
				seekBarControl: {
					headOffset: _0x35bbdd[_0x2e1e0f(370)],
					enableFastForward: _0x35bbdd[_0x2e1e0f(540)],
					isSendLog: !!parent[_0x2e1e0f(332)] && _0x35bbdd.control,
					reportTimeInterval: _0x35bbdd[_0x2e1e0f(871)],
					sourcePlayer: 'audio',
					sendLog: function (_0x297d80, _0x5b2216, _0x12c16d) {
						var _0x41ee0c = _0x2e1e0f
						if (this[_0x41ee0c(779)] !== true) {
							return
						}
						var _0x499509 = 0
						switch (_0x5b2216) {
							case _0x41ee0c(421):
								_0x499509 = 0
								break
							case _0x41ee0c(644):
								_0x499509 = 1
								break
							case _0x41ee0c(657):
								_0x499509 = 3
								break
							case _0x41ee0c(552):
								_0x499509 = 2
								break
							case _0x41ee0c(579):
								_0x499509 = 4
								break
						}
						_0x5dac98(_0x297d80, _0x499509, _0x12c16d, function () {
							var _0xc7a404 = _0x41ee0c
							window[_0xc7a404(556)] && window.proxy_completed()
						})
					},
				},
			},
		}
	},
})
Ext.define('ans.videojs.AudioNote', {
	extend: 'Ext.Component',
	cls: 'ans-audionote',
});
(function () {
	var _0x2f8613 = videojs.getPlugin('plugin'), _0x2e7014 = videojs.extend(_0x2f8613, {
		constructor: function (_0x35b796, _0x4809a9) {
			_0x2f8613.call(this, _0x35b796, _0x4809a9)
			Ext.create('ans.videojs.AudioNote', {
				renderTo: _0x35b796.el_,
				html: _0x4809a9.title,
			})
		},
	})
	videojs.registerPlugin('audioNote', _0x2e7014)
})()
