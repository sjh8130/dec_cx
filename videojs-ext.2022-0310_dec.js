Ext.define('ananas.ServerHosts', {
	'alternateClassName': 'ServerHosts',
	'singleton': true,
	'constructor': function () {
		var a = this;
		a.callParent(arguments);
		var b = document.domain;
		try {
			a.MASTER_HOST = location.protocol + '//' + top.location.host;
		} catch (_0x4e950b) {
			a.MASTER_HOST = location.protocol + '//' + location.host;
		}
		try {
			a.PARENT_HOST = location.protocol + '//' + parent.location.host;
		} catch (_0x4b8cda) {
			a.MASTER_HOST = location.protocol + '//' + location.host;
		}
		a['P_HOST'] = location.protocol + '//p.ananas.chaoxing.com',
			a.s1_HOST = location.protocol + '//s1.ananas.chaoxing.com',
			a.s2_HOST = location.protocol + '//s2.ananas.chaoxing.com',
			a['CLOUD_HOST'] = 'http://cloud.ananas.' + b,
			a['NEW_CLOUD_HOST'] = location.protocol + '//pan-yz.chaoxing.com',
			a['CS_HOST'] = location.protocol + '//cs.ananas.' + b,
			a['FANYA_HOST'] = 'http://course.fanya.' + b,
			a['PAN_HOST'] = 'http://pan.ananas.' + b,
			a['CXLIVE_HOST'] = 'http://cxlive.' + b,
			a['ERYA_TSK_HOST'] = 'http://erya.tsk.' + b,
			a['QUESTIONNAIRE_HOST'] = 'http://surveyapp.fy.' + b,
			a['FX_HOST'] = 'http://www.' + b,
			a['PHONE_ZT_HOST'] = 'https://special.rhky.com',
			a['CHAOXING_CLASS_HOST'] = 'https://k.chaoxing.com',
			a['LIVE_HOST'] = location.protocol + '//live.chaoxing.com',
			a['APPCD_HOST'] = location.protocol + '//appcd.chaoxing.com',
			a['ZHIBO_HOST'] = 'https://zhibo.chaoxing.com';
	}
});
(function (g) {
	function q(v, A) {
		var z = (v & 0xffff) + (A & 0xffff)
			, w = (v >> 0x10) + (A >> 0x10) + (z >> 0x10);
		return w << 0x10 | z & 0xffff;
	}
	function p(v, w) {
		return v << w | v >>> 0x20 - w;
	}
	function k(B, y, w, v, A, z) {
		return q(p(q(q(y, B), q(v, z)), A), w);
	}
	function a(y, w, C, B, v, A, z) {
		return k(w & C | ~w & B, y, w, v, A, z);
	}
	function h(y, w, C, B, v, A, z) {
		return k(w & B | C & ~B, y, w, v, A, z);
	}
	function n(y, w, C, B, v, A, z) {
		return k(w ^ C ^ B, y, w, v, A, z);
	}
	function t(y, w, C, B, v, A, z) {
		return k(C ^ (w | ~B), y, w, v, A, z);
	}
	function c(G, B) {
		G[B >> 0x5] |= 0x80 << B % 0x20,
			G[(B + 0x40 >>> 0x9 << 0x4) + 0xe] = B;
		var y, A, z, w, v, F = 0x67452301, E = -0x10325477, D = -0x67452302, C = 0x10325476;
		for (y = 0; y < G.length; y += 0x10) {
			A = F,
				z = E,
				w = D,
				v = C,
				F = a(F, E, D, C, G[y], 0x7, -0x28955b88),
				C = a(C, F, E, D, G[y + 0x1], 0xc, -0x173848aa),
				D = a(D, C, F, E, G[y + 0x2], 0x11, 0x242070db),
				E = a(E, D, C, F, G[y + 0x3], 0x16, -0x3e423112),
				F = a(F, E, D, C, G[y + 0x4], 0x7, -0xa83f051),
				C = a(C, F, E, D, G[y + 0x5], 0xc, 0x4787c62a),
				D = a(D, C, F, E, G[y + 0x6], 0x11, -0x57cfb9ed),
				E = a(E, D, C, F, G[y + 0x7], 0x16, -0x2b96aff),
				F = a(F, E, D, C, G[y + 0x8], 0x7, 0x698098d8),
				C = a(C, F, E, D, G[y + 0x9], 0xc, -0x74bb0851),
				D = a(D, C, F, E, G[y + 0xa], 0x11, -0xa44f),
				E = a(E, D, C, F, G[y + 0xb], 0x16, -0x76a32842),
				F = a(F, E, D, C, G[y + 0xc], 0x7, 0x6b901122),
				C = a(C, F, E, D, G[y + 0xd], 0xc, -0x2678e6d),
				D = a(D, C, F, E, G[y + 0xe], 0x11, -0x5986bc72),
				E = a(E, D, C, F, G[y + 0xf], 0x16, 0x49b40821),
				F = h(F, E, D, C, G[y + 0x1], 0x5, -0x9e1da9e),
				C = h(C, F, E, D, G[y + 0x6], 0x9, -0x3fbf4cc0),
				D = h(D, C, F, E, G[y + 0xb], 0xe, 0x265e5a51),
				E = h(E, D, C, F, G[y], 0x14, -0x16493856),
				F = h(F, E, D, C, G[y + 0x5], 0x5, -0x29d0efa3),
				C = h(C, F, E, D, G[y + 0xa], 0x9, 0x2441453),
				D = h(D, C, F, E, G[y + 0xf], 0xe, -0x275e197f),
				E = h(E, D, C, F, G[y + 0x4], 0x14, -0x182c0438),
				F = h(F, E, D, C, G[y + 0x9], 0x5, 0x21e1cde6),
				C = h(C, F, E, D, G[y + 0xe], 0x9, -0x3cc8f82a),
				D = h(D, C, F, E, G[y + 0x3], 0xe, -0xb2af279),
				E = h(E, D, C, F, G[y + 0x8], 0x14, 0x455a14ed),
				F = h(F, E, D, C, G[y + 0xd], 0x5, -0x561c16fb),
				C = h(C, F, E, D, G[y + 0x2], 0x9, -0x3105c08),
				D = h(D, C, F, E, G[y + 0x7], 0xe, 0x676f02d9),
				E = h(E, D, C, F, G[y + 0xc], 0x14, -0x72d5b376),
				F = n(F, E, D, C, G[y + 0x5], 0x4, -0x5c6be),
				C = n(C, F, E, D, G[y + 0x8], 0xb, -0x788e097f),
				D = n(D, C, F, E, G[y + 0xb], 0x10, 0x6d9d6122),
				E = n(E, D, C, F, G[y + 0xe], 0x17, -0x21ac7f4),
				F = n(F, E, D, C, G[y + 0x1], 0x4, -0x5b4115bc),
				C = n(C, F, E, D, G[y + 0x4], 0xb, 0x4bdecfa9),
				D = n(D, C, F, E, G[y + 0x7], 0x10, -0x944b4a0),
				E = n(E, D, C, F, G[y + 0xa], 0x17, -0x41404390),
				F = n(F, E, D, C, G[y + 0xd], 0x4, 0x289b7ec6),
				C = n(C, F, E, D, G[y], 0xb, -0x155ed806),
				D = n(D, C, F, E, G[y + 0x3], 0x10, -0x2b10cf7b),
				E = n(E, D, C, F, G[y + 0x6], 0x17, 0x4881d05),
				F = n(F, E, D, C, G[y + 0x9], 0x4, -0x262b2fc7),
				C = n(C, F, E, D, G[y + 0xc], 0xb, -0x1924661b),
				D = n(D, C, F, E, G[y + 0xf], 0x10, 0x1fa27cf8),
				E = n(E, D, C, F, G[y + 0x2], 0x17, -0x3b53a99b),
				F = t(F, E, D, C, G[y], 0x6, -0xbd6ddbc),
				C = t(C, F, E, D, G[y + 0x7], 0xa, 0x432aff97),
				D = t(D, C, F, E, G[y + 0xe], 0xf, -0x546bdc59),
				E = t(E, D, C, F, G[y + 0x5], 0x15, -0x36c5fc7),
				F = t(F, E, D, C, G[y + 0xc], 0x6, 0x655b59c3),
				C = t(C, F, E, D, G[y + 0x3], 0xa, -0x70f3336e),
				D = t(D, C, F, E, G[y + 0xa], 0xf, -0x100b83),
				E = t(E, D, C, F, G[y + 0x1], 0x15, -0x7a7ba22f),
				F = t(F, E, D, C, G[y + 0x8], 0x6, 0x6fa87e4f),
				C = t(C, F, E, D, G[y + 0xf], 0xa, -0x1d31920),
				D = t(D, C, F, E, G[y + 0x6], 0xf, -0x5cfebcec),
				E = t(E, D, C, F, G[y + 0xd], 0x15, 0x4e0811a1),
				F = t(F, E, D, C, G[y + 0x4], 0x6, -0x8ac817e),
				C = t(C, F, E, D, G[y + 0xb], 0xa, -0x42c50dcb),
				D = t(D, C, F, E, G[y + 0x2], 0xf, 0x2ad7d2bb),
				E = t(E, D, C, F, G[y + 0x9], 0x15, -0x14792c6f),
				F = q(F, A),
				E = q(E, z),
				D = q(D, w),
				C = q(C, v);
		}
		return [F, E, D, C];
	}
	function o(w) {
		var x, v = '', y = w.length * 0x20;
		for (x = 0; x < y; x += 0x8) {
			v += String['fromCharCode'](w[x >> 0x5] >>> x % 0x20 & 0xff);
		}
		return v;
	}
	function j(w) {
		var y, v = [];
		v[(w.length >> 0x2) - 0x1] = undefined;
		for (y = 0; y < v.length; y += 0x1) {
			v[y] = 0;
		}
		var x = w.length * 0x8;
		for (y = 0; y < x; y += 0x8) {
			v[y >> 0x5] |= (w.charCodeAt(y / 0x8) & 0xff) << y % 0x20;
		}
		return v;
	}
	function i(v) {
		return o(c(j(v), v.length * 0x8));
	}
	function u(x, A) {
		var w, z = j(x), v = [], y = [], B;
		v[0xf] = y[0xf] = undefined;
		z.length > 0x10 && (z = c(z, x.length * 0x8));
		for (w = 0; w < 0x10; w += 0x1) {
			v[w] = z[w] ^ 0x36363636,
				y[w] = z[w] ^ 0x5c5c5c5c;
		}
		return B = c(v.concat(j(A)), 0x200 + A.length * 0x8),
			o(c(y.concat(B), 0x200 + 0x80));
	}
	function s(z) {
		var y = '0123456789abcdef', w = '', v, A;
		for (A = 0; A < z.length; A += 0x1) {
			v = z.charCodeAt(A),
				w += y.charAt(v >>> 0x4 & 0xf) + y.charAt(v & 0xf);
		}
		return w;
	}
	function l(v) {
		return unescape(encodeURIComponent(v));
	}
	function e(v) {
		return i(l(v));
	}
	function m(v) {
		return s(e(v));
	}
	function b(v, w) {
		return u(l(v), l(w));
	}
	function r(v, w) {
		return s(b(v, w));
	}
	function f(w, x, v) {
		if (!x) {
			if (!v)
				return m(w);
			return e(w);
		}
		if (!v)
			return r(x, w);
		return b(x, w);
	}
	typeof define === 'function' && define.amd ? define(function () {
		return f;
	}) : typeof module === 'object' && module.exports ? module.exports = f : g['md5'] = f;
}(this));
Ext.apply(Ext, {
	'setCookie': function (c, f) {
		var a = arguments
			, i = arguments.length
			, b = i > 0x2 ? a[0x2] : null
			, h = i > 0x3 ? a[0x3] : '/'
			, e = i > 0x4 ? a[0x4] : null
			, g = i > 0x5 ? a[0x5] : false;
		document.cookie = c + '=' + escape(f) + (b === null ? '' : '; expires=' + b['toGMTString']()) + (h === null ? '' : '; path=' + h) + (e === null ? '' : '; domain=' + e) + (g === true ? '; secure' : '');
	},
	'getCookie': function (e, h) {
		var b = e + '='
			, g = b.length
			, a = document.cookie.length
			, f = 0
			, c = 0;
		while (f < a) {
			c = f + g;
			if (document.cookie.substring(f, c) == b)
				return this.getCookieVal(c);
			f = document.cookie.indexOf(' ', f) + 0x1;
			if (f === 0)
				break;
		}
		return h;
	},
	'getCookieVal': function (b) {
		var a = document.cookie.indexOf(';', b);
		return a == -0x1 && (a = document.cookie.length),
			unescape(document.cookie.substring(b, a));
	}
});
Ext.define('ans.VideoJs', {
	'videoJs': null,
	'mixins': {
		'observable': 'Ext.util.Observable'
	},
	'constructor': function (b) {
		b = b || {};
		var e = this;
		e.addEvents(['seekstart']),
			e.mixins.observable.constructor.call(e, b);
		var c = videojs(b.videojs, e.params2VideoOpt(b.params), function () { });
		Ext.fly(b.videojs).on('contextmenu', function (f) {
			f['preventDefault']();
		}),
			Ext.fly(b.videojs).on('keydown', function (f) {
				(f.keyCode == 0x20 || f.keyCode == 0x25 || f.keyCode == 0x27 || f.keyCode == 0x6b) && f['preventDefault']();
			});
		c.videoJsResolutionSwitcher && c.on('resolutionchange', function () {
			var g = c.currentResolution()
				, _0x219400 = g.sources ? g.sources[0].res : false;
			Ext.setCookie('resolution', _0x219400);
		});
		var _0x4f4e2c = b.params && b.params.doublespeed ? 0x2 : 0x1;
		c.on('ratechange', function () {
			var _0xfc3f0 = c.playbackRate();
			_0xfc3f0 > _0x4f4e2c && (c.pause(),
				c.playbackRate(0x1));
		});
	},
	'params2VideoOpt': function (params) {
		var useM3u8 = false
			, cdn = [{
				'indexorder': 0,
				'label': '公网1',
				'url': ServerHosts.s1_HOST,
				'ispublic': true
			}, {
				'indexorder': 1,
				'label': '公网2',
				'url': ServerHosts.s2_HOST,
				'ispublic': true
			}];
		if (params.cdn)
			try {
				top.window.app && top.window.app == 0x2 ? cdn = cdn.concat(params.cdn) : cdn = cdn.concat(params.cdn).sort(function (_0x579774, _0x159bdf) {
					return _0x579774.indexorder - _0x159bdf.indexorder;
				});
			} catch (_0x4bb4f1) {
				cdn = cdn.concat(params.cdn);
			}
		function _0x2a9b1b(_0x1b73e0, _0x23ce69, _0xeabce1) {
			return 'http://hls-ans.chaoxing.com/hls/m3u8/' + _0x1b73e0 + '/' + _0x23ce69 + '.m3u8?cdn=' + encodeURIComponent(_0xeabce1);
		}
		function _0x42b1ee(_0x12ceb8, _0x15854e) {
			var _0x2da2a9 = ServerHosts.s1_HOST.replace('http:/', '').replace('https:/', '')
				, _0x32a614 = 0;
			_0x12ceb8.src.indexOf(_0x2da2a9) > -0x1 && (_0x32a614 = _0x12ceb8.src.indexOf(_0x2da2a9) + _0x2da2a9.length);
			var _0x36a678 = _0x12ceb8.src.substr(_0x32a614);
			if (_0x15854e.ispublic && _0x32a614 == 0)
				return {
					'src': _0x36a678,
					'type': 'video/mp4',
					'res': _0x12ceb8.res
				};
			return _0x15854e.ispublic ? useM3u8 ? {
				'src': _0x2a9b1b(params.objectId, _0x12ceb8.resolution, _0x15854e.url),
				'type': 'application/x-mpegURL',
				'res': _0x12ceb8.res
			} : {
				'src': _0x15854e.url + _0x36a678,
				'type': 'video/mp4',
				'res': _0x12ceb8.res
			} : useM3u8 ? {
				'src': _0x2a9b1b(params.objectId, _0x12ceb8.resolution, _0x15854e.url + _0x2da2a9),
				'type': 'application/x-mpegURL',
				'res': _0x12ceb8.res
			} : {
				'src': _0x15854e.url + _0x2da2a9 + _0x36a678,
				'type': 'video/mp4',
				'res': _0x12ceb8.res
			};
		}
		var _0x3fe4bf = []
			, _0x386bbc = Ext['getCookie']('resolution', 0x168);
		!params.rootPath && (params.rootPath = '');
		params['http'] && _0x3fe4bf.push({
			'src': params['http'],
			'type': 'video/mp4',
			'label': '标清',
			'resolution': 'sd',
			'res': 0x168
		});
		params['httphd'] && _0x3fe4bf.push({
			'src': params['httphd'],
			'type': 'video/mp4',
			'label': '高清',
			'resolution': 'hd',
			'res': 0x2d0
		});
		params['httpshd'] && _0x3fe4bf.push({
			'src': params['httpshd'],
			'type': 'video/mp4',
			'label': '超高清',
			'resolution': 'shd',
			'res': 0x438
		});
		params['httpmd'] && _0x3fe4bf.push({
			'src': params['httpmd'],
			'type': 'video/mp4',
			'label': '极速',
			'resolution': 'md',
			'res': 0xf0
		});
		if (_0x3fe4bf.length == 0x1) {
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
		!_0x27f166 && (_0x386bbc = 0x168);
		var _0x40fee0 = !Ext['isChaoxing'] && (Ext['isIos'] || Ext['isAndroid'])
			, _0x370677 = function (_0x244249, _0x1a8b18, _0x349b0c) {
				if (_0x40fee0)
					return;
				var _0x15efba = this;
				!_0x15efba.logCount && (_0x15efba.logCount = 0),
					videojs['xhr']({
						'uri': _0x1a8b18,
						'headers': {
							'Content-Type': 'application/json'
						}
					}, function (_0x32351d, _0x3f818d) {
						_0x15efba.logCount++;
						if (_0x3f818d.statusCode == 0xc8) {
							_0x15efba.logCount = 0;
							if (_0x3f818d.body.indexOf('isPassed') < 0) {
								window.parent && window.parent.location.reload();
								return;
							}
							eval('var d=' + _0x3f818d.body);
							d['isPassed'] && _0x349b0c();
							return;
						}
						_0x15efba.logCount >= 0x4 && (_0x15efba.logCount = 0,
							_0x244249.pause(),
							_0x3f818d.statusCode != 0 ? alert('服务繁忙，不能保证您能否正常完成任务，请您稍后继续...(e: ' + _0x3f818d.statusCode + ')') : alert('您的网络不稳定，请您稍后继续...'));
					});
			}
			, _0x2d0688 = function (_0x22db72, _0x28f545, _0x44b076, _0x355c77) {
				if (!params.reportUrl)
					return;
				if (params.isFiled == 0x1 || params['state'] == 0x1)
					return;
				var _0x22d226 = '[{0}][{1}][{2}][{3}][{4}][{5}][{6}][{7}]', _0x3b94e4 = (params['startTime'] || '0') + '_' + (params['endTime'] || params['duration']), _0x1b0c0d = 0, _0x2a5a8a;
				_0x44b076['toString']().indexOf('-') != -0x1 ? (_0x2a5a8a = _0x44b076['split']('-'),
					_0x2a5a8a.length == 0x2 && (_0x1b0c0d = parseInt(_0x2a5a8a[0x1]) * 0x3e8)) : _0x1b0c0d = _0x44b076 * 0x3e8;
				if (_0x1b0c0d == params['duration'] * 0x3e8 && _0x28f545 == 0x2)
					return;
				var _0x503e11 = Ext['String']['format'](_0x22d226, params.clazzId, params['userid'], params['jobid'] || '', params.objectId, _0x1b0c0d, 'd_yHJ!$pdA~5', params['duration'] * 0x3e8, _0x3b94e4)
					, _0x404482 = [params.reportUrl, '/', params['dtoken'], '?clazzId=', params.clazzId, '&playingTime=', _0x44b076, '&duration=', params['duration'], '&clipTime=', _0x3b94e4, '&objectId=', params.objectId, '&otherInfo=', params['otherInfo'], '&jobid=', params['jobid'], '&userid=', params['userid'], '&isdrag=', _0x28f545, '&view=pc', '&enc=', md5(_0x503e11), '&rt=', params.rt, '&dtype=Video', '&_t=', new Date()['getTime']()].join('');
				_0x370677(_0x22db72, _0x404482, _0x355c77);
			};
		return {
			'language': 'zh-CN',
			'poster': params['screenshot'],
			'controls': true,
			'preload': 'none',
			'sources': _0x3fe4bf,
			'playlines': cdn,
			'playbackRates': params.doublespeed != 0 ? [1, 1.25, 1.5, 0x2] : false,
			'textTrackDisplay': true,
			'controlBar': {
				'volumePanel': {
					'inline': false
				},
				'children': ['playToggle', 'playbackRateMenuButton', 'currentTimeDisplay', 'timeDivider', 'durationDisplay', 'progressControl', 'volumePanel', 'subsCapsButton', 'fullscreenToggle', 'videoJsPlayLine', 'textTrackButton']
			},
			'plugins': {
				'videoJsResolutionSwitcher': {
					'default': _0x386bbc,
					'dynamicLabel': true,
					'customSourcePicker': function (_0x430890, _0x108f1b, _0x2889a8) {
						var _0x2cca9b = _0x430890.currentPlayline();
						return _0x430890.src(_0x108f1b.map(function (_0x1fc53b) {
							return _0x42b1ee(_0x1fc53b, _0x2cca9b);
						})),
							_0x430890;
					}
				},
				'videoJsPlayLine': {
					'dynamicLabel': true,
					'customSourcePicker': function (_0x379e9b, _0x34fbce, _0x4b24d6) {
						var _0xe7810a = _0x379e9b.currentResolution().sources[0];
						return _0x379e9b.src(_0x42b1ee(_0xe7810a, _0x34fbce)),
							_0x379e9b;
					}
				},
				'studyControl': {
					'enableSwitchWindow': params.enableSwitchWindow
				},
				'seekBarControl': {
					'headOffset': params['headOffset'],
					'enableFastForward': params.enableFastForward,
					'isSendLog': !!parent.AttachmentSetting && params['control'],
					'reportTimeInterval': params['reportTimeInterval'],
					'isShowDanmu': params['danmaku'],
					'chapterCapture': params['chapterCapture'] || 0,
					'captureInterval': params['captureInterval'] || 0x258,
					'chapterCollectionType': params['chapterCollectionType'] || 0,
					'startCapture': params['startCapture'],
					'endCapture': params['endCapture'],
					'playAginCapture': params['playAginCapture'],
					'playingCapture': params['playingCapture'],
					'playingLoopCapture': params['playingLoopCapture'],
					'duration': params['duration'],
					'isSupportFace': params['isSupportFace'] || false,
					'isShowFaceCollection': params['isShowFaceCollection'],
					'attachmentId': params['aId'],
					'sendLog': function (_0x2f4df4, _0x3990f5, _0x22e963) {
						if (this['isSendLog'] !== true)
							return;
						var _0x1531bb = 0;
						switch (_0x3990f5) {
							case 'playing':
								_0x1531bb = 0;
								break;
							case 'drag':
								_0x1531bb = 0x1;
								break;
							case 'play':
								_0x1531bb = 0x3;
								break;
							case 'pause':
								_0x1531bb = 2;
								break;
							case 'ended':
								_0x1531bb = 0x4;
								break;
						}
						_0x2d0688(_0x2f4df4, _0x1531bb, _0x22e963, function () {
							window.proxy_completed && window.proxy_completed();
						});
					}
				},
				'timelineObjects': {
					'url': params.rootPath + '/richvideo/initdatawithviewer?mid=' + params.mid + '&cpi=' + params.cpi + '&classid=' + params.clazzId,
					'quizErrorReportUrl': params.rootPath + '/question/addquestionerror?classid=' + params.clazzId + '&cpi=' + params.cpi,
					'validationUrl2': params.rootPath + '/question/quiz-validation?classid=' + params.clazzId + '&cpi=' + params.cpi + '&objectid=' + params.objectId,
					'quizRightCountUrl': params.rootPath + '/question/quiz-rightcount?classid=' + params.clazzId + '&cpi=' + params.cpi
				},
				'subtitle': {
					'translate': params.chapterVideoTranslate,
					'subtitleUrl': params.rootPath + '/richvideo/allsubtitle?mid=' + params.mid + '&objectid=' + params.objectId + '&courseid=' + params.courseid,
					'subtitle': params.rootPath + '/ananas/video-editor/sub?objectid=' + params['subobjectid']
				},
				'marker': {
					'url': !params['isNotMark'] ? params.rootPath + '/ananas/getpoints?courseid=' + params.courseid + '&mid=' + params.mid : '',
					'ff': params.enableFastForward,
					'videoTopicCloud': params.videoTopicCloud
				}
			}
		};
	}
}),
	(Object['defineProperty'](ans.VideoJs.prototype, 'params2VideoOpt', {
		'configurable': false,
		'writable': false
	}),
		Object.freeze(ans.VideoJs.prototype.params2VideoOpt)),
	(function () {
		var b = videojs.getPlugin('plugin')
			, a = videojs.extend(b, {
				'constructor': function (f, c) {
					b.call(this, f, c);
					var g = this
						, j = c['mouseElTarget']
						, i = 0x1;
					c.enableSwitchWindow !== 0x1 && (i = 0);
					if (!j)
						try {
							j = window.top ? window.top : window.document;
						} catch (h) {
							j = window.parent ? window.parent : window.document;
						}
					Ext.fly(j).on('mouseout', function (k) {
						k = k ? k : window.event;
						var l = k.relatedTarget || k['toElement'];
						!l && (i != 0x1 && f.pause());
					}),
						g['singleton'](f);
				},
				'singleton': function (c) {
					var _0x46bfe9 = this
						, e = parseInt(Math['random']() * 0x98967f);
					c.on('play', function () {
						Ext.setCookie('videojs_id', e);
					}),
						c.setInterval(function () {
							var g = Ext['getCookie']('videojs_id');
							typeof g != 'undefined' && g != e && c.pause();
						}, 0x3e8);
				}
			});
		videojs.registerPlugin('studyControl', a);
	}()),
	(function () {
		var a = videojs.getComponent('SeekBar')
			, b = videojs.extend(a, {
				'constructor': function (e, c) {
					a.call(this, e, c);
					var f = this;
					e.ignorePause = false,
						e.disableSeek = function (g) {
							f.disableSeek(g);
						}
						,
						e.onlyBackward = function (g) {
							f.onlyBackward(g);
						}
						,
						e.getSeekBar = function () {
							return f;
						}
						,
						f.on('slideractive', function () {
							e.trigger('seekstart'),
								e.ignorePause = true,
								e.ignorePlay = true,
								e.ignoreSeek = false;
						}),
						f.on('sliderinactive', function () {
							e.trigger('seekend'),
								e.ignoreSeek = false;
						}),
						_0x2033be.maxPercent = 0,
						e.on('timeupdate', function () {
							f.maxPercent = Math.max(f.getPercent(), f.maxPercent);
						});
				},
				'getCurrentTime_': function () {
					return this['player_'].currentTime();
				},
				'getMaxPercent': function () {
					return this.maxPercent;
				},
				'isBackward': function (_0x4cec78) {
					return this.maxPercent > this['calculateDistance'](_0x4cec78);
				},
				'handleMouseDown': function (c) {
					if (this._onlyBackward) {
						if (!this.isBackward(c))
							return;
					}
					if (this._disableSeek === true)
						return;
					a.prototype.handleMouseDown.call(this, c);
				},
				'handleMouseMove': function (c) {
					if (this._disableSeek === true)
						return;
					if (this._onlyBackward) {
						if (!this.isBackward(c))
							return;
					}
					a.prototype['handleMouseMove'].call(this, c);
				},
				'handleMouseUp': function (_0x871d7) {
					if (this._disableSeek === true)
						return;
					if (this._onlyBackward) {
						if (!this.isBackward(_0x871d7))
							return;
					}
					a.prototype['handleMouseUp'].call(this, _0x871d7);
				},
				'disableSeek': function (c) {
					var e = this;
					e._disableSeek = c !== false,
						e._disableSeek ? e.disable() : e.enable();
				},
				'onlyBackward': function (_0xc378e) {
					var _0x2f70d0 = this;
					_0x2f70d0._onlyBackward = _0xc378e !== false;
				}
			});
		videojs['registerComponent']('SeekBar', b);
	}()),
	(function () {
		var _0x3d9f57 = videojs.getPlugin('plugin')
			, _0xaad5df = videojs.extend(_0x3d9f57, {
				'constructor': function (_0xb600a0, _0x445bec) {
					_0x3d9f57.call(this, _0xb600a0, _0x445bec);
					var _0xe603ad = this;
					_0xe603ad['isSendLog_'] = !!_0x445bec['isSendLog'],
						_0xe603ad['isShowDanmu_'] = !!_0x445bec['isShowDanmu'],
						_0xe603ad['damuLastGetTime'] = 0,
						_0xe603ad['timeCount'] = 0,
						_0xe603ad['isPlay'] = false,
						_0xe603ad['isEnd'] = false,
						(_0xe603ad['playTimer'],
							_0xe603ad['chapterCapture'] = _0x445bec['chapterCapture'] || 0),
						_0xe603ad['captureInterval'] = _0x445bec['captureInterval'] * 0x3c || 0x258,
						_0xe603ad['chapterCollectionType'] = _0x445bec['chapterCollectionType'] || 0,
						_0xe603ad['isSupportFace'] = _0x445bec['isSupportFace'],
						_0xe603ad['isAlertTip'] = false,
						_0xe603ad['startCapture'] = _0x445bec['startCapture'],
						_0xe603ad['endCapture'] = _0x445bec['endCapture'],
						_0xe603ad['playAginCapture'] = _0x445bec['playAginCapture'],
						_0xe603ad['playingCapture'] = _0x445bec['playingCapture'],
						_0xe603ad['playingLoopCapture'] = _0x445bec['playingLoopCapture'],
						_0xe603ad['isShowFaceCollection'] = _0x445bec['isShowFaceCollection'],
						_0xe603ad['duration'] = _0x445bec['duration'],
						_0xe603ad['playingFace'] = false,
						_0xe603ad['loopCaptureInterval'] = Math['floor'](Math['random']() * (parseInt(_0xe603ad['duration']) - 0) + 0x1),
						_0xe603ad['isAginFace'] = false,
						_0xe603ad['againStartTime'] = 0,
						_0xe603ad['attachmentId'] = _0x445bec['attachmentId'],
						_0xb600a0.on('ready', function () {
							_0x445bec.enableFastForward != 0x1 && _0xb600a0.disableSeek();
						});
					!_0x445bec['sendLog'] && (_0x445bec['sendLog'] = function () { }
					);
					_0x445bec['headOffset'] && _0xb600a0.currentTime(_0x445bec['headOffset']);
					var _0x40e881 = 0
						, _0x5df628 = 0
						, _0x6ee7c9 = _0x445bec['reportTimeInterval'] || 0x3c
						, _0x38d1b9 = _0x6ee7c9 * 0x3e8
						, _0x44de03 = function (_0x2adb61, _0x3514fd, _0x30101d) {
							if (!_0xe603ad['isSendLog_'])
								return;
							var _0x32981a = _0xe603ad['now_']() - _0x40e881;
							(_0x32981a > _0x38d1b9 || _0x3514fd === true) && (typeof _0x30101d != 'undefined' ? (_0x445bec['sendLog'](_0xb600a0, _0x2adb61, _0x30101d),
								_0xe603ad['playTimer'] && clearInterval(_0xe603ad['playTimer'])) : _0x445bec['sendLog'](_0xb600a0, _0x2adb61, _0xe603ad['sec_'](_0xb600a0)),
								_0x40e881 = _0xe603ad['now_']());
						};
					_0xb600a0.on('play', function () {
						_0xe603ad['isAlertTip'] = false,
							_0xe603ad['chapterCapture'] == 0 || !_0xe603ad['isSupportFace'] ? (!_0xb600a0.ignorePlay ? (_0x44de03('play', true),
								_0xb600a0.ignoreSeek = true) : (_0xb600a0.ignorePlay = false,
									_0xb600a0.ignoreSeek = false),
								_0xe603ad['sendDataLog']('play'),
								_0xe603ad['receiveStudyLog'](),
								_0xe603ad['getDanmuList']('play', _0xb600a0)) : _0xe603ad['chapterCapture'] == 0x1 && (_0xe603ad['timeCount'] == 0 ? _0xe603ad['isShowFaceCollection'] && !_0xe603ad['isPlay'] && (_0xe603ad['startCapture'] == 0x1 || typeof _0xe603ad['startCapture'] == 'undefined') ? (_0xe603ad['faceCollection']('play', _0xb600a0, _0xe603ad['chapterCollectionType']),
									_0xb600a0.pause()) : (!_0xb600a0.ignorePlay ? (_0x44de03('play', true),
										_0xb600a0.ignoreSeek = true) : (_0xb600a0.ignorePlay = false,
											_0xb600a0.ignoreSeek = false),
										_0xe603ad['sendDataLog']('play'),
										_0xe603ad['receiveStudyLog'](),
										_0xe603ad['getDanmuList']('play', _0xb600a0),
										(_0xe603ad['isShowFaceCollection'] && typeof _0xe603ad['playingCapture'] == 'undefined' || _0xe603ad['playingCapture'] == 0x1 && _0xe603ad['playingLoopCapture'] == 0) && _0xe603ad['timer'](_0xb600a0),
										_0xe603ad['isShowFaceCollection'] && _0xe603ad['playAginCapture'] == 0x1 && _0xb600a0.ignorePlay && !_0xe603ad['isAginFace'] && (_0xe603ad['faceCollection']('aginPlay', _0xb600a0, _0xe603ad['chapterCollectionType']),
											_0xb600a0.pause())) : ((_0xe603ad['isShowFaceCollection'] && typeof _0xe603ad['playingCapture'] == 'undefined' || _0xe603ad['playingCapture'] == 0x1 && _0xe603ad['playingLoopCapture'] == 0x1) && _0xe603ad['timer'](_0xb600a0),
												_0xe603ad['isShowFaceCollection'] && _0xe603ad['playAginCapture'] == 0x1 && !_0xb600a0.ignorePlay && !_0xe603ad['isAginFace'] && (_0xe603ad['faceCollection']('aginPlay', _0xb600a0, _0xe603ad['chapterCollectionType']),
													_0xb600a0.pause(),
													_0xe603ad['againStartTime'] = _0xe603ad['sec_'](_0xb600a0))));
					}),
						_0xb600a0.on('seeked', function () {
							if (_0x445bec.enableFastForward != 0x1 && !_0xb600a0['switchStatus']) {
								var _0x5d5402 = _0xb600a0.currentTime()
									, _0x315cfc = _0x445bec['headOffset'] ? _0x445bec['headOffset'] : 0;
								_0x5d5402 != 0 && _0x5d5402 > _0x315cfc && _0xb600a0.currentTime(_0x315cfc);
							}
							!_0xb600a0.ignoreSeek ? _0x44de03('drag', true, _0x5df628 + '-' + _0xe603ad['sec_'](_0xb600a0)) : _0xb600a0.ignoreSeek = false,
								_0x5df628 = _0xe603ad['sec_'](_0xb600a0),
								_0xb600a0.ignorePlay = true,
								delete _0xb600a0['switchStatus'];
						}),
						_0xb600a0.on('pause', function () {
							!_0xb600a0.ignorePause ? (_0x44de03('pause', true),
								_0xb600a0.ignorePlay = false,
								_0xb600a0.ignoreSeek = false) : _0xb600a0.ignorePause = false,
								_0xe603ad['sendDataLog']('pause'),
								_0xe603ad['getDanmuList']('pause', _0xb600a0);
						}),
						_0xb600a0.on('timeupdate', function () {
							_0xe603ad['sec_'](_0xb600a0) - _0xe603ad['againStartTime'] > 0x2 && (_0xe603ad['isAginFace'] = false);
							_0xe603ad['isShowFaceCollection'] && _0xe603ad['chapterCapture'] == 0x1 && _0xe603ad['playingCapture'] == 0x1 && _0xe603ad['playingLoopCapture'] == 0x1 && _0xe603ad['sec_'](_0xb600a0) == _0xe603ad['loopCaptureInterval'] && !_0xe603ad['playingFace'] && (_0xe603ad['faceCollection']('playing', _0xb600a0, _0xe603ad['chapterCollectionType']),
								_0xb600a0.pause());
							if (typeof parent['videoTrialDuration'] != 'undefined' && parent['videoTrialDuration'] != '-1') {
								var _0x9581ca = parseInt(parent['videoTrialDuration']) * 0x3c;
								if (_0x9581ca < _0xe603ad['sec_'](_0xb600a0) && !_0xe603ad['isAlertTip']) {
									_0xb600a0.pause(),
										alert('视频只允许试看' + parent['videoTrialDuration'] + '分钟'),
										_0xe603ad['isAlertTip'] = true;
									return;
								}
							}
							parseInt(_0xb600a0.currentTime()) >= this['damuLastGetTime'] && _0xe603ad['getDanmuList']('timeupdate', _0xb600a0);
							_0xe603ad['danmuDisplay'](_0xb600a0);
							if (_0x40e881 == 0)
								return;
							_0xe603ad['sec_'](_0xb600a0) - _0x5df628 <= 0x1 && !_0xb600a0.ignorePlay && (_0x5df628 = _0xe603ad['sec_'](_0xb600a0)),
								_0x44de03('playing');
						}),
						_0xb600a0.on('ended', function () {
							_0xe603ad['playTimer'] && clearInterval(_0xe603ad['playTimer']),
								_0xe603ad['isShowFaceCollection'] && !_0xe603ad['isEnd'] && _0xe603ad['chapterCapture'] == 0x1 && _0xe603ad['endCapture'] == 0x1 && _0xe603ad['faceCollection']('ended', _0xb600a0, _0xe603ad['chapterCollectionType']),
								_0x44de03('ended', true),
								_0xe603ad['sendDataLog']('ended'),
								_0xe603ad['playNextVideo'](_0xe603ad['attachmentId']);
						});
				},
				'sec_': function (_0x8146d5) {
					return parseInt(_0x8146d5.currentTime());
				},
				'now_': function () {
					return new Date()['getTime']();
				},
				'isSendLog': function (_0x28854b) {
					return _0x28854b && (this['isSendLog_'] = !!_0x28854b),
						this['isSendLog_'];
				},
				'sendDataLog': function (e) {
					var c = e == 'pause' || e == 'end' ? 0x2 : 0x1;
					typeof sendReadZTMediaLog != "undefined" && sendReadZTMediaLog(c);
				},
				'receiveStudyLog': function () {
					typeof receiveStudyLog != 'undefined' && setTimeout(function () {
						receiveStudyLog();
					}, 0x32);
				},
				'getDanmuList': function (_0x1d1ad1, _0x13598b) {
					if (!this['isShowDanmu_'])
						return;
					var _0x22ad28 = this['sec_'](_0x13598b);
					if (_0x1d1ad1 == 'pause') {
						this['damuLastGetTime'] = 0,
							setTimeout(function () {
								getDanmuByTime(_0x1d1ad1, 0);
							}, 0xc8);
						return;
					}
					typeof getDanmuByTime != 'undefined' && setTimeout(function () {
						getDanmuByTime(_0x1d1ad1, _0x22ad28);
					}, 0xc8);
					if (_0x22ad28 < this['damuLastGetTime'])
						return;
					this['damuLastGetTime'] = _0x22ad28 + 0x3b;
				},
				'danmuDisplay': function (_0x32a89e) {
					if (!this['isShowDanmu_'])
						return;
					var _0x73b8cc = this['sec_'](_0x32a89e);
					typeof danmuPlay != 'undefined' && danmuPlay(_0x73b8cc);
				},
				'timer': function (_0x8fa830) {
					var _0x70dccb = this;
					this['playTimer'] = setInterval(function () {
						_0x70dccb['timeCount']++,
							_0x70dccb['timeCount'] >= _0x70dccb['captureInterval'] && (_0x70dccb['isPlay'] = false,
								_0x8fa830.pause(),
								_0x70dccb['faceCollection']('pause', _0x8fa830, _0x70dccb['chapterCollectionType']));
					}, 0x3e8);
				},
				'faceCollection': function (_0x579c0f, _0x1a9df4, _0x20480b) {
					_0x579c0f == 'play' && this['timeCount'] == 0 ? typeof startFaceCollection != 'undefined' && startFaceCollection(_0x1a9df4, _0x20480b, this) : _0x579c0f == 'pause' ? (this['playTimer'] && clearInterval(this['playTimer']),
						!this['isPlay'] && this['timeCount'] >= this['captureInterval'] && (typeof startFaceCollection != 'undefined' && startFaceCollection(_0x1a9df4, _0x20480b, this),
							this['timeCount'] = 0)) : _0x579c0f == 'ended' ? (this['playTimer'] && clearInterval(this['playTimer']),
								typeof startFaceCollection != 'undefined' && (startFaceCollection(_0x1a9df4, _0x20480b, this),
									this['isEnd'] = true),
								this['timeCount'] = 0) : _0x579c0f == 'playing' ? typeof startFaceCollection != 'undefined' && (startFaceCollection(_0x1a9df4, _0x20480b, this),
									this['playingFace'] = true) : _0x579c0f == 'aginPlay' && (typeof startFaceCollection != 'undefined' && (startFaceCollection(_0x1a9df4, _0x20480b, this),
										this['isAginFace'] = true));
				},
				'playNextVideo': function (_0x1a89d2) {
					typeof chapterPlayNextVideo != 'undefined' && chapterPlayNextVideo(_0x1a89d2);
				}
			});
		videojs.registerPlugin('seekBarControl', _0xaad5df);
	}()),
	Ext.define('ans.videojs.TimelineObjectsBg', {
		'extend': 'Ext.Component',
		'cls': 'ans-timelineobjectsbg',
		'hidden': true
	}),
	Ext.define('ans.videojs.VideoQuiz', {
		'extend': 'Ext.Component',
		'xtype': 'videoquiz',
		'cls': 'ans-videoquiz',
		'renderTpl': ['<div class=\x22tkTopic\x22>', `<tpl if="dtype=='InteractiveQuiz'">`, '<div class="tkTopic_numbar fr">共 {interactiveQuestionCount} 题<span id="rightAnswerNum">，已答对 <i id="rightNum"></i> 题</span></div>', '</tpl> ', '<div class="tkTopic_title">[{questionType}]</div>', '<div class="tkTopic_con tkScroll">', '<div class=\x22tkItem\x22>', '<div class="tkItem_title">{description}</div>', '<ul class="tkItem_ul">', '<tpl for="options">', '<li class=\x22ans-videoquiz-opt\x22><label>', `<span class="tkRadio"><input type="{[parent.questionType=="多选题"?"checkbox":"radio"]}" <tpl if="parent.dtype=='InteractiveQuiz'">{[this.getChecked(parent.answerContent, values.name, parent.dtype)]}</tpl> name="ans-videoquiz-opt" value="{isRight}"/><i></i></span>`, '{name}、{description}', '</label></li>', '</tpl> ', '</ul>', '</div>', '</div>', '<div class="tkTopic_oper">', '<a class="ans-videoquiz-submit bntLinear fr" id="videoquiz-submit">提交</a>', `<a class="ans-videoquiz-continue bntLinear fr" id="videoquiz-continue"><tpl if="dtype=='InteractiveQuiz'">继续学习<tpl else>继续</tpl></a>`, `<tpl if="dtype=='InteractiveQuiz'">`, '<a class="bntWhiteBorder ans-videoquiz-back fr" id="knowledgeBack">知识点回看</a>', '</tpl>', `<span class="spanHas fr" id="spanHas"><tpl if="dtype=='InteractiveQuiz'">恭喜你，答对了！<tpl else>回答正确</tpl></span>`, `<span class="spanNot fr" id="spanNot"><tpl if="dtype=='InteractiveQuiz'">真遗憾，再接再厉！<tpl else>回答错误</tpl></span>`, `<span class="spanNotBack fr" id="spanNotBack"><tpl if="dtype=='InteractiveQuiz'">真遗憾，再接再厉！<tpl else>回答错误，</tpl>回看 {errorBackTime} 分钟</span>`, `<tpl if="dtype=='InteractiveQuiz'">`, '<span class="spanNotBack fr" id="spanNotBackPoint">真遗憾，再接再厉！</span>', '<a class="spanHref fl" href="javascript:" id="viewAnalysis">查看解析</a>', '</div>', '<div class="tkParsing" id="tkParsing">', '<a class=\x22tkParsing_dele\x22 href=\x22javascript:\x22></a>', '<div class=\x22tkParsing_screll tkParsing_con\x22 id=\x22tkParsing_con\x22></div>', '</tpl>', '</div>', '</div>', {
			'getChecked': function (_0xfbd625, _0x251c15, _0x4914ea) {
				return _0xfbd625.indexOf(_0x251c15) != -0x1 && _0x4914ea == 'InteractiveQuiz' ? 'checked=\x22checked\x22' : '';
			}
		}],
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
			var _0x4ebfb1 = this
				, _0x397d4f = _0x4ebfb1['renderData']
				, _0x5a356b = _0x4ebfb1['quizRightCountUrl'];
			typeof _0x5a356b != 'undefined' && Ext.Ajax.request({
				'url': _0x5a356b,
				'params': {
					'eventid': _0x397d4f['resourceId'],
					'memberinfo': _0x397d4f['memberinfo']
				},
				'method': 'get',
				'success': function (_0xc4533e) {
					var _0x140eaf = Ext.decode(_0xc4533e['responseText']);
					_0x140eaf['status'] && (Ext.get('rightNum')['setHTML'](_0x140eaf['rightAnswerCount']),
						Ext.get('rightAnswerNum').setStyle('display', 'inline-block'));
				}
			});
			_0x4ebfb1.callParent(arguments);
			var _0x133f59 = _0x4ebfb1['scrollEl']
				, _0x243c65 = $(_0x133f59['dom'])['niceScroll']({
					'cursorborder': '',
					'cursorwidth': 0x6,
					'cursorcolor': '#A5A5A5',
					'boxzoom': false,
					'autohidemode': true
				});
			_0x4ebfb1['scroller'] = _0x243c65,
				_0x4ebfb1['submitEl'].on('click', function () {
					_0x4ebfb1['checkResult']() && (Ext.get('videoquiz-continue')['getStyle']('display') == 'none' && _0x4ebfb1.fireEvent('continue'));
				}),
				_0x4ebfb1['continueEl'].on('click', function () {
					_0x4ebfb1.fireEvent('continue');
				}),
				_0x4ebfb1['backEl'] && _0x4ebfb1['backEl'].on('click', function () {
					_0x4ebfb1['onerror'] && _0x4ebfb1['onerror'](),
						_0x4ebfb1.fireEvent('continue');
				}),
				_0x4ebfb1['viewAnalysisEl'] && _0x4ebfb1['viewAnalysisEl'].on('click', function () {
					Ext.get('tkParsing').setStyle('display', 'inline-block');
				}),
				_0x4ebfb1['delAnalysisEl'] && _0x4ebfb1['delAnalysisEl'].on('click', function () {
					Ext.get('tkParsing').setStyle('display', 'none');
				});
		},
		'checkResult': function () {
			var _0x29856b = this
				, _0xe03c08 = Ext['query']('input', _0x29856b['el']['dom'])
				, _0x3e8a9b = true
				, _0x3bc17a = _0x29856b['renderData']
				, _0x70be56 = _0x3bc17a['options']
				, _0x243ef2 = []
				, _0x4c5bbf = _0x29856b['quizErrorReportUrl']
				, _0x4abeb2 = _0x29856b['validationUrl2']
				, _0x308d6a = _0x3bc17a['dtype'];
			Ext['each'](_0xe03c08, function (_0x5a7514, _0x3a14b0) {
				(_0x5a7514['value'] == 'true' && !_0x5a7514['checked'] || _0x5a7514['value'] == 'false' && _0x5a7514['checked']) && (_0x3e8a9b = false),
					_0x5a7514['checked'] && _0x243ef2.push(_0x70be56[_0x3a14b0].name);
			});
			!_0x3e8a9b ? _0x3bc17a['errorBackTime'] && _0x3bc17a['errorBackTime'] > 0 ? (Ext.get('spanNotBack').setStyle('display', 'block'),
				Ext.get('videoquiz-submit').setStyle('display', 'none'),
				_0x308d6a == 'InteractiveQuiz' ? Ext.get('knowledgeBack').setStyle('display', 'block') : Ext.get('videoquiz-continue').setStyle('display', 'block')) : _0x308d6a == 'InteractiveQuiz' && _0x3bc17a['errorBack'] == 0x1 && _0x3bc17a['eBstartPoint'] != '' ? (Ext.get('spanNotBackPoint').setStyle('display', 'block'),
					Ext.get('knowledgeBack').setStyle('display', 'block')) : Ext.get('spanNot').setStyle('display', 'block') : (Ext.get('spanHas').setStyle('display', 'block'),
						_0x308d6a == 'InteractiveQuiz' && (Ext.get('videoquiz-continue').setStyle('display', 'block'),
							Ext.get('knowledgeBack').setStyle('display', 'none'),
							Ext.get('videoquiz-submit').setStyle('display', 'none'),
							Ext.get('spanNot').setStyle('display', 'none'),
							Ext.get('spanNotBack').setStyle('display', 'none'),
							Ext.get('spanNotBackPoint').setStyle('display', 'none')));
			if (typeof _0x4abeb2 != 'undefined') {
				var _0x2f292e = _0x243ef2.join(',');
				Ext.Ajax.request({
					'url': _0x4abeb2,
					'params': {
						'eventid': _0x3bc17a['resourceId'],
						'isRight': _0x3e8a9b,
						'memberinfo': _0x3bc17a['memberinfo'],
						'answerContent': _0x2f292e
					},
					'method': 'get',
					'success': function (_0xa93b46) {
						_0x3bc17a['answerContent'] = _0x2f292e;
						var _0x19857b = Ext.decode(_0xa93b46['responseText']);
						if (_0x19857b['status']) {
							_0x308d6a == 'InteractiveQuiz' && (Ext.get('rightNum')['setHTML'](_0x19857b['rightAnswerCount']),
								Ext.get('rightAnswerNum').setStyle('display', 'inline-block'));
							if (_0x19857b['isRight'] && _0x308d6a == 'InteractiveQuiz') {
								if (_0x19857b['testAnalysis']) {
									Ext.get('tkParsing_con')['setHTML']('解析：' + _0x19857b['testAnalysis']),
										Ext.get('tkParsing').setStyle('display', 'inline-block'),
										Ext.get('viewAnalysis').setStyle('display', 'block');
									var _0x4e9bc1 = _0x29856b['tkParseScrollEl']
										, _0xbdd6c8 = $(_0x4e9bc1['dom'])['niceScroll']({
											'cursorborder': '',
											'cursorwidth': 0x6,
											'cursorcolor': '#A5A5A5',
											'boxzoom': false,
											'autohidemode': true
										});
									_0x29856b['tkParseScroll'] = _0xbdd6c8;
								}
							}
						}
					}
				}),
					!_0x3e8a9b && _0x29856b['onerror'] && _0x308d6a != 'InteractiveQuiz' && _0x29856b['onerror']();
			} else
				!_0x3e8a9b && (Ext.Ajax.request({
					'url': _0x4c5bbf,
					'params': {
						'eventid': _0x3bc17a['resourceId'],
						'memberinfo': _0x3bc17a['memberinfo'],
						'answerContent': _0x243ef2.join(',')
					},
					'method': 'get'
				}),
					_0x29856b['onerror'] && _0x308d6a != 'InteractiveQuiz' && _0x29856b['onerror']());
			return !_0x3e8a9b && _0x3bc17a['errorContinue'] == 0x1 && (_0x3e8a9b = true,
				Ext.get('videoquiz-submit').setStyle('display', 'none'),
				Ext.get('videoquiz-continue').setStyle('display', 'block')),
				_0x3e8a9b;
		},
		'continueFun': function () {
			var _0x376724 = this;
			_0x376724.fireEvent('continue');
		}
	}),
	Ext.define('ans.videojs.VideoImg', {
		'extend': 'Ext.Component',
		'xtype': 'videoimg',
		'renderTpl': ['<div class="sp_video_pic">', '<img src="{src}" class="sp_video_img" />', '<a class="sp_video_pic_dele" href="javascript:;"></a>', '</div>'],
		'renderSelectors': {
			'closeEl': 'a.sp_video_pic_dele'
		},
		'afterRender': function () {
			var _0x4ed36e = this;
			_0x4ed36e.callParent(arguments),
				_0x4ed36e['el'].on('click', function () {
					_0x4ed36e.fireEvent('continue');
				}),
				_0x4ed36e['closeEl'].on('click', function () {
					_0x4ed36e.fireEvent('continue');
				});
		}
	}),
	Ext.define('ans.videojs.VideoAnnotation', {
		'extend': 'Ext.Component',
		'xtype': 'videoannotation',
		'cls': 'ans-videoannotation',
		'renderTpl': ['<div class="vidNota">', '<div class=\x22vidNota_title\x22><h2 class=\x22vidNota_h2\x22>[批注]</h2><a class=\x22vidNota_close\x22 href=\x22javascript:;\x22></a></div>', '<div class=\x22vidNota_con\x22 id=\x22pizhuScroll\x22 tabindex=\x221\x22 style=\x22overflow: hidden; outline: none;\x22>', '<p>{description}</p>', '</div>', '</div>'],
		'renderSelectors': {
			'closeEl': 'a.vidNota_close',
			'contentEl': 'div.vidNota_con'
		},
		'afterRender': function () {
			var _0x5b8f58 = this
				, _0x1de232 = _0x5b8f58['contentEl'];
			_0x5b8f58.callParent(arguments),
				_0x5b8f58['closeEl'].on('click', function () {
					_0x5b8f58.fireEvent('continue');
				});
			var _0xae0109 = $(_0x1de232['dom']).niceScroll({
				'cursorborder': '',
				'cursorwidth': 0x6,
				'cursorcolor': '#e0e0e0',
				'boxzoom': false,
				'autohidemode': true
			});
			_0x5b8f58['scroller'] = _0xae0109;
		}
	}),
	Ext.define('ans.videojs.VideoPpt', {
		'extend': 'Ext.Component',
		'xtype': 'videoppt',
		'cls': 'ans-videoppt',
		'width': '100%',
		'model': false,
		'renderTpl': ['<div class="sp_video_ppt_pic" id="sp_video_ppt_pic">', '<img src="{src}" class="sp_video_img" style="width: 100%;"/>', '<a class="sp_size_big" id="sp_size_big" href="javascript:;"></a>', '<a class="sp_size_small" href="javascript:;" style="display:none;" id="sp_size_small"></a>', '</div>'],
		'renderSelectors': {
			'pptPicEl': 'div.sp_video_ppt_pic',
			'sizeBigEl': 'a.sp_size_big',
			'sizeSmallEl': 'a.sp_size_small'
		},
		'afterRender': function () {
			var _0x47f7db = this;
			_0x47f7db.callParent(arguments),
				_0x47f7db['pptPicEl'].on('click', function (_0x24d4be) {
					_0x24d4be['stopPropagation'](),
						_0x47f7db['pptPicEl']['toggleCls']('sp_ppt_pic_fullScreen');
					if (_0x47f7db['pptPicEl']['hasCls']('sp_ppt_pic_fullScreen')) {
						Ext.get('sp_size_big').setStyle('display', 'none'),
							Ext.get('sp_size_small').setStyle('display', 'block');
						var _0x2161c3 = Ext.get('video')['getStyle']('height')
							, _0x16e3e5 = Ext.get('sp_video_ppt_pic')['getStyle']('height')
							, _0x42a887 = (parseInt(_0x2161c3) - 0x3c - parseInt(_0x16e3e5)) / 2;
						Ext.get('sp_video_ppt_pic').setStyle('top', _0x42a887 + 'px'),
							Ext.get('sp_video_ppt_pic').setStyle('left', '0');
					} else
						Ext.get('sp_size_big').setStyle('display', 'block'),
							Ext.get('sp_size_small').setStyle('display', 'none'),
							Ext.get('sp_video_ppt_pic').setStyle('top', '0px'),
							Ext.get('sp_video_ppt_pic').setStyle('left', '0px');
				}),
				_0x47f7db['sizeBigEl'].on('click', function (_0x170753) {
					_0x170753['stopPropagation'](),
						_0x47f7db['pptPicEl']['toggleCls']('sp_ppt_pic_fullScreen'),
						Ext.get('sp_size_big').setStyle('display', 'none'),
						Ext.get('sp_size_small').setStyle('display', 'block');
					var _0x31a653 = Ext.get('video')['getStyle']('height')
						, _0x3e75f4 = Ext.get('sp_video_ppt_pic')['getStyle']('height')
						, _0x31d956 = (parseInt(_0x31a653) - 0x3c - parseInt(_0x3e75f4)) / 2;
					Ext.get('sp_video_ppt_pic').setStyle('top', _0x31d956 + 'px'),
						Ext.get('sp_video_ppt_pic').setStyle('left', '0');
				}),
				_0x47f7db['sizeSmallEl'].on('click', function (_0x546dfc) {
					_0x546dfc['stopPropagation'](),
						_0x47f7db['pptPicEl']['toggleCls']('sp_ppt_pic_fullScreen'),
						Ext.get('sp_size_big').setStyle('display', 'block'),
						Ext.get('sp_size_small').setStyle('display', 'none'),
						Ext.get('sp_video_ppt_pic').setStyle('top', '0px'),
						Ext.get('sp_video_ppt_pic').setStyle('left', '0px');
				});
		}
	}),
	Ext.define('ans.videojs.TimelineObjects', {
		'extend': 'Ext.container.Container',
		'cls': 'ans-timelineobjects',
		'autoScroll': true,
		'hidden': true,
		'hideMode': 'visibility',
		'constructor': function (_0x77adfb) {
			var _0x27a352 = this;
			_0x27a352.callParent(arguments),
				_0x27a352['bg'] = Ext['create']('ans.videojs.TimelineObjectsBg', {
					'renderTo': _0x77adfb['renderTo']
				}),
				_0x27a352['objects'] = _0x77adfb['objects'] && _0x77adfb['objects'].sort ? _0x27a352['sort_'](_0x77adfb['objects']) : [],
				_0x27a352['current'] = 0;
		},
		'showObject': function (_0x2c63a4, _0x2dcaaf, _0x433cc3) {
			var _0x2a5d41 = this, _0x4f7287 = _0x2a5d41['getBox'](), _0x27247f = _0x2a5d41['items']['getAt'](0), _0x2b52fa, _0x567fb8 = function () {
				_0x2b52fa['destroy'](),
					_0x2a5d41['hide'](),
					_0x2c63a4['play']();
			};
			_0x27247f != null && _0x27247f['destroy']();
			if (_0x2dcaaf == 'IMG') {
				var _0x1ff17d = {
					'src': _0x433cc3.url.replace(/origin/, _0x4f7287['width'] + '_' + _0x4f7287['height'])
				};
				_0x2b52fa = _0x2a5d41['add']({
					'xtype': 'videoimg',
					'renderData': _0x1ff17d
				});
			}
			if (_0x2dcaaf == 'QUIZ') {
				var _0x476147 = function () { };
				if (_0x433cc3['errorBackTime'] && _0x433cc3['errorBackTime'] > 0) {
					var _0xb1c946 = _0x433cc3['errorBackTime'] * 0x3c;
					_0x476147 = function () {
						var _0x5f23c0 = Math.max(_0x2c63a4.currentTime() - _0xb1c946, 0);
						_0x2c63a4.currentTime(_0x5f23c0);
					}
						;
				}
				_0x2b52fa = _0x2a5d41['add']({
					'xtype': 'videoquiz',
					'renderData': _0x433cc3,
					'quizErrorReportUrl': _0x2a5d41['quizErrorReportUrl'],
					'validationUrl2': _0x2a5d41['validationUrl2'],
					'onerror': _0x476147
				});
			}
			if (_0x2dcaaf == 'InteractiveQuiz') {
				var _0x476147 = function () { };
				if (_0x433cc3['errorBackTime'] && _0x433cc3['errorBackTime'] > 0) {
					var _0xb1c946 = _0x433cc3['errorBackTime'] * 0x3c;
					_0x476147 = function () {
						var _0x3c9c65 = Math.max(_0x2c63a4.currentTime() - _0xb1c946, 0);
						_0x2c63a4.currentTime(_0x3c9c65);
					}
						;
				}
				if (_0x433cc3['errorBack'] == 0x1 && _0x433cc3['eBstartPoint'] != '') {
					var _0xb1c946 = 0
						, _0x573e86 = _0x433cc3['eBstartPoint'].split(':')
						, _0x555ea8 = _0x573e86.length;
					_0x555ea8 > 0 && (_0x555ea8 == 0x1 ? _0xb1c946 = parseInt(_0x573e86[0]) * 0x3c : _0x555ea8 == 0x2 && (_0xb1c946 = parseInt(_0x573e86[0]) * 0x3c + parseInt(_0x573e86[0x1]))),
						_0x476147 = function () {
							_0x2c63a4.currentTime(_0xb1c946);
						}
						;
				}
				_0x433cc3['dtype'] = 'InteractiveQuiz',
					_0x2b52fa = _0x2a5d41['add']({
						'xtype': 'videoquiz',
						'renderData': _0x433cc3,
						'quizErrorReportUrl': _0x2a5d41['quizErrorReportUrl'],
						'validationUrl2': _0x2a5d41['validationUrl2'],
						'quizRightCountUrl': _0x2a5d41['quizRightCountUrl'],
						'onerror': _0x476147
					});
			}
			if (_0x2dcaaf == 'PPT') {
				if (_0x433cc3['fp'] == 0)
					return;
				var _0x2e7433 = _0x433cc3.url;
				_0x433cc3['thumb'] ? _0x2e7433 = _0x433cc3['thumb'] + _0x433cc3['pageNo'] + '.png' : _0x2e7433 = _0x2e7433.replace(/swfv2\/.*$/, 'thumb/' + _0x433cc3['fp'] + '.png');
				var _0x1ff17d = {
					'src': _0x2e7433
				};
				_0x2b52fa = _0x2a5d41['add']({
					'xtype': 'videoppt',
					'renderData': _0x1ff17d
				});
			}
			_0x2dcaaf == 'SyncAnnotationEvent' && (_0x2b52fa = _0x2a5d41['add']({
				'xtype': 'videoannotation',
				'renderData': _0x433cc3
			}));
			if (!_0x2b52fa)
				return;
			_0x2b52fa.on('continue', function () {
				_0x567fb8();
			});
			var _0x5cd143 = !(_0x2b52fa['model'] === false);
			_0x2a5d41['showModel'](_0x5cd143),
				_0x5cd143 && _0x2c63a4.pause();
		},
		'showModel': function (_0x1fbfc9) {
			var _0x314015 = this;
			_0x314015['show'](),
				_0x1fbfc9 ? (_0x314015['removeCls']('ans-timelineobjects-autosize'),
					_0x314015['setAutoScroll'](true),
					_0x314015['bg']['show']()) : (_0x314015['addCls']('ans-timelineobjects-autosize'),
						_0x314015['setAutoScroll'](false));
		},
		'hide': function () {
			this.callParent(arguments),
				this['bg']['hide'].apply(this['bg'], arguments);
		},
		'updateTime': function (_0x108d19, _0x4dc3d0) {
			if (this['current'] >= this['objects'].length || _0x108d19['scrubbing']())
				return;
			var _0x24c4d2 = this
				, _0x5466cd = _0x24c4d2['objects'][_0x24c4d2['current']]
				, _0xe71297 = _0x5466cd['style']
				, _0x343e42 = _0x5466cd['datas'][0];
			_0x4dc3d0 >= _0x343e42['startTime'] && (_0x24c4d2['current']++,
				_0x24c4d2['showObject'](_0x108d19, _0xe71297, _0x343e42));
		},
		'resetTime': function (_0xd55dec, _0x153b0f) {
			var _0x1140ee = this, _0x1182fa;
			for (_0x1182fa = 0; _0x1182fa < _0x1140ee['objects'].length; _0x1182fa++) {
				var _0x4f69c6 = _0x1140ee['objects'][_0x1182fa]['datas'][0]['startTime'];
				if (_0x153b0f <= _0x4f69c6)
					break;
			}
			_0x1140ee['current'] = _0x1182fa;
		},
		'sort_': function (_0x4622c7) {
			return _0x4622c7 && _0x4622c7.sort && _0x4622c7.sort(function (_0x1fa436, _0x2a7533) {
				var _0x582860 = _0x1fa436['datas'][0]['startTime']
					, _0x1cdad7 = _0x2a7533['datas'][0]['startTime'];
				return _0x582860 - _0x1cdad7;
			});
		}
	}),
	(function () {
		var _0x1b35eb = videojs.getPlugin('plugin')
			, _0x26ebd0 = videojs.extend(_0x1b35eb, {
				'constructor': function (_0x4a2f45, _0x4fe0d9) {
					_0x1b35eb.call(this, _0x4a2f45, _0x4fe0d9);
					if (!_0x4fe0d9.url)
						return;
					var _0x12bc5a = this;
					Ext.Ajax.request({
						'url': _0x4fe0d9.url,
						'async': false,
						'success': function (_0x2180b3) {
							if (_0x2180b3['status'] != 0xc8)
								return;
							eval('var data=' + _0x2180b3['responseText']);
							if (data && data.length > 0) {
								var _0x225d3f = [];
								for (var _0x19b366 = 0; _0x19b366 < data.length; _0x19b366++) {
									var _0xf6a46f = data[_0x19b366];
									if (_0xf6a46f['style'] == 'InteractiveQuiz') {
										var _0x3297fe = _0xf6a46f['datas'];
										if (_0x3297fe && _0x3297fe.length > 0)
											var _0x3ac51d = {
												'time': _0x3297fe[0]['startTime'],
												'text': '互动测验'
											};
									}
									_0x225d3f.push(_0x3ac51d);
								}
								if (_0x225d3f.length > 0) {
									var _0x529e35 = videojs('video');
									_0x529e35 && typeof _0x529e35['markers'] === 'function' && _0x529e35['markers']({
										'markerTip': {
											'display': true,
											'text': function (_0x4aa40d) {
												return _0x4aa40d['text'];
											}
										},
										'markers': _0x225d3f
									});
								}
							}
							var _0x172198 = Ext['create']('ans.videojs.TimelineObjects', {
								'renderTo': _0x4a2f45['el_'],
								'quizErrorReportUrl': _0x4fe0d9['quizErrorReportUrl'],
								'validationUrl2': _0x4fe0d9['validationUrl2'],
								'quizRightCountUrl': _0x4fe0d9['quizRightCountUrl'],
								'objects': data
							});
							_0x4a2f45.on('play', function () {
								_0x172198['resetTime'](_0x4a2f45, _0x4a2f45.currentTime());
							}),
								_0x4a2f45.on('seekend', function () {
									_0x172198['resetTime'](_0x4a2f45, _0x4a2f45.currentTime());
								}),
								_0x4a2f45.on('timeupdate', function () {
									!_0x4a2f45['paused']() && _0x172198['updateTime'](_0x4a2f45, _0x4a2f45.currentTime());
								});
						}
					});
				}
			});
		videojs.registerPlugin('timelineObjects', _0x26ebd0);
	}()),
	(function () {
		var _0x26cc1b = videojs.getPlugin('plugin')
			, _0x470dd9 = videojs.extend(_0x26cc1b, {
				'constructor': function (_0x169e48, _0x3386f7) {
					_0x26cc1b.call(this, _0x169e48, _0x3386f7);
					if (!_0x3386f7.url)
						return;
					var _0x1abe1f = this;
					Ext.Ajax.request({
						'url': _0x3386f7.url,
						'async': false,
						'success': function (_0xf05c6e) {
							if (_0xf05c6e['status'] != 0xc8)
								return;
							eval('var data=' + _0xf05c6e['responseText']);
							if (!data['status'])
								return;
							var _0x462f6e = videojs('video');
							_0x462f6e && typeof _0x462f6e['markers'] === 'function' && _0x462f6e['markers']({
								'markerTip': {
									'display': true,
									'text': function (_0x40c604) {
										return _0x40c604['text'];
									}
								},
								'markers': data['list'],
								'onMarkerClick': function (_0x4a4433) {
									if (_0x3386f7['ff'] != 0x1)
										return false;
									var _0x14c1f1 = $(this)['data']('marker-key');
									return _0x169e48.currentTime(_0x4a4433['time']),
										false;
								}
							});
							if (data['list'] && data['list'].length > 0) {
								Ext['select']('.zsCloud').setStyle('display', 'block');
								var _0x53430f = Ext['select']('.zsCloud_ul');
								if (_0x53430f && _0x53430f['elements'][0]) {
									var _0x1a5686;
									for (var _0x189c53 = 0; _0x189c53 < data['list'].length; _0x189c53++) {
										var _0x55c679 = data['list'][_0x189c53]
											, _0x5079f6 = Ext.fly(_0x53430f['elements'][0])['select']('.topicId' + _0x55c679['topicid'] + ':not(.markertime)')
											, _0x35ab0b = videojs['formatTime'](_0x55c679['time']);
										_0x5079f6 && _0x5079f6['elements'][0] && _0x5079f6['elements'][0]['parentElement']['remove']();
										var _0x38358a = "<li><span class='topicId" + _0x55c679['topicid'] + ' markertime\x27 data-marker-time=\x27' + _0x55c679['time'] + "' title='" + _0x35ab0b + '\x27 onclick=\x27markersPlayer(this)\x27>' + _0x55c679['text'] + '</span></li>';
										_0x1a5686 ? _0x1a5686 = Ext['DomHelper']['insertHtml']('afterEnd', _0x1a5686['elements'][0], _0x38358a) : _0x1a5686 = Ext['DomHelper']['insertHtml']('afterBegin', _0x53430f['elements'][0], _0x38358a),
											_0x1a5686 = Ext.fly(_0x1a5686)['select']('');
									}
								}
								_0x3386f7.videoTopicCloud && _0x3386f7.videoTopicCloud == 0x1 && (Ext['select']('.zsCloud_down').setStyle('display', 'block'),
									Ext['select']('.zsCloud_body').setStyle('display', 'block'));
							}
							var _0x4ec443 = new Map()
								, _0x484c83 = new Array();
							if (data['list'] && data['list'].length > 0)
								for (var _0x189c53 = 0; _0x189c53 < data['list'].length; _0x189c53++) {
									var _0x33ae22 = data['list'][_0x189c53]['topicid']
										, _0x5e5cde = _0x4ec443.get(_0x33ae22);
									!_0x5e5cde && (_0x5e5cde = {},
										_0x5e5cde['text'] = data['list'][_0x189c53]['text'],
										_0x5e5cde['time'] = data['list'][_0x189c53]['time'],
										_0x5e5cde['topicid'] = data['list'][_0x189c53]['topicid'],
										_0x5e5cde['weight'] = 0,
										_0x5e5cde['html'] = {
											'data-marker-time': data['list'][_0x189c53]['time'],
											'onclick': 'markersPlayer(this)'
										},
										_0x4ec443['set'](_0x33ae22, _0x5e5cde),
										_0x484c83.push(_0x5e5cde)),
										_0x5e5cde['weight'] += 0x1;
								}
							$(function () {
								_0x484c83.length != 0 && $('#word_cloud')['jQCloud'](_0x484c83);
							}),
								$('.zsCloud_down').click(function () {
									var _0x4836e8 = $('.zsCloud_body');
									_0x4836e8['is'](':visible') ? (_0x4836e8['hide'](),
										$(this)['addClass']('zsCloud_up'),
										$(this)['text']('展开')) : (_0x4836e8['show'](),
											$(this)['removeClass']('zsCloud_up'),
											$(this)['text']('收起'));
								});
						}
					});
				}
			});
		videojs.registerPlugin('marker', _0x470dd9);
	}()),
	(function () {
		var _0x22cd05 = videojs.getPlugin('plugin')
			, _0x2d01c5 = videojs.extend(_0x22cd05, {
				'constructor': function (TT, _0x8c5fbf) {
					_0x22cd05.call(this, TT, _0x8c5fbf);
					var _0xaa8d6e = this
						, _0xc1e33f = _0x8c5fbf['subtitleUrl']
						, _0x4a3d2d = function (_0x5077bb) {
							var _0x136590 = _0x5077bb['match'](/support\/(\w+).\w+/);
							if (_0x136590)
								return ServerHosts.PARENT_HOST + '/ananas/video-editor/sub?objectid=' + _0x136590[0x1];
						}
						, _0xe49a27 = function (_0x879f2e, _0x31a0c0, _0x1bdfcb) {
							TT['addRemoteTextTrack']({
								'kind': 'subtitles',
								'srclang': 'cn',
								'label': _0x879f2e,
								'src': _0x31a0c0,
								'default': _0x1bdfcb
							}, true);
						};
					TT['ready'](function () {
						_0xc1e33f && Ext.Ajax.request({
							'url': _0xc1e33f,
							'success': function (_0x2bfe33) {
								if (_0x2bfe33['status'] != 0xc8)
									return;
								eval('var subs=' + _0x2bfe33['responseText']);
								var _0x4d7648 = 0
									, _0x250178 = 0;
								subs.length > 0 && Ext['each'](subs, function (_0x262c48) {
									_0x8c5fbf['translate'] == 0x1 && _0x262c48.name == 'English' ? (_0x262c48['selected'] = true,
										_0x250178 = _0x4d7648) : _0x262c48['selected'] = false,
										_0xe49a27(_0x262c48.name, _0x4a3d2d(_0x262c48.url), _0x262c48['selected']),
										_0x4d7648++;
								}),
									_0x8c5fbf['translate'] == 0x1 && (Ext['select']('.vjs-subs-caps-button .vjs-icon-placeholder')['setHTML']('翻译'),
										Ext['select']('.vjs-subs-caps-button .vjs-icon-placeholder')['addCls']('vjs-hide-content')),
									setTimeout(function () {
										var _0x2ee4f9 = TT['textTracks']();
										_0x8c5fbf['translate'] == 0x1 ? _0x2ee4f9 && _0x2ee4f9[_0x250178] ? _0x2ee4f9[_0x250178]['mode'] = 'showing' : _0x2ee4f9 && _0x2ee4f9[0] && (_0x2ee4f9[0]['mode'] = 'showing') : _0x2ee4f9 && _0x2ee4f9[0] && (_0x2ee4f9[0]['mode'] = 'showing');
									}, 0x1f4);
							}
						});
						var _0x2f568d = TT['textTrackSettings'];
						_0x2f568d['setValues']({
							'backgroundColor': '#000',
							'backgroundOpacity': '0',
							'edgeStyle': 'uniform'
						}),
							_0x2f568d['updateDisplay']();
					});
				}
			});
		videojs.registerPlugin('subtitle', _0x2d01c5);
	}()),
	Ext.define('ans.videojs.ErrorDisplay', {
		'extend': 'Ext.Component',
		'xtype': 'vjserrdisplay',
		'cls': 'ans-vjserrdisplay',
		'renderTpl': ['<div class="ans-vjserrdisplay-title">{errorMsg}</div>', '<ul class="ans-vjserrdisplay-opts">', '您可以尝试其他线路: ', '<tpl for="playlines">', '<li class="ans-vjserrdisplay-opt"><label>', '<input type="radio" name="ans-vjserrdisplay-opt" {[xindex-1 === parent.selectedIndex ? "checked disabled":""]}>', '{label}', '</label></li>', '</tpl> ', '</ul>'],
		'renderSelectors': {
			'errorMsgEl': 'div.ans-vjserrdisplay-title'
		},
		'afterRender': function () {
			var _0x43a4f2 = this;
			_0x43a4f2.callParent(arguments);
			var _0x339fc6 = Ext['query']('input', _0x43a4f2['el']['dom']);
			Ext['each'](_0x339fc6, function (_0x92c77c, _0x460ec8) {
				Ext.fly(_0x92c77c).on('click', function () {
					_0x43a4f2['onSelected'](_0x460ec8);
				});
			});
			try {
				typeof createVideoTask === 'function' ? createVideoTask() : console['log']('createVideoTask函数不存在！');
			} catch (_0x579130) { }
		},
		'setErrorMsg': function (_0x46affa) {
			Ext.fly(this['errorMsgEl'])['setHTML'](_0x46affa);
		}
	}),
	Ext.define('ans.videojs.ErrorNote', {
		'extend': 'Ext.Component',
		'cls': 'ans-vjserrdisplay',
		'renderTpl': ['<div class=\x22ans-vjserrdisplay-title\x22>播放出现异常。</div>']
	}),
	(function () {
		var _0x2752fb = videojs.getComponent('ErrorDisplay')
			, _0x5bdfb3 = videojs.extend(_0x2752fb, {
				'constructor': function (_0x1317e7, _0x2b7fff) {
					_0x2752fb.call(this, _0x1317e7, _0x2b7fff);
				},
				'colse': function () {
					_0x2752fb.prototype['colse'].call(this),
						me['ansErrorDisplay'] && (me['ansErrorDisplay']['destroy'](),
							me['ansErrorDisplay'] = null);
				},
				'fill': function () {
					_0x2752fb.prototype['fill'].call(this);
					var _0x794f80 = this
						, _0x2b4db4 = _0x794f80['player_']
						, _0x5c1064 = _0x2b4db4['options_']['playlines']
						, _0x46384c = Ext['query']('.vjs-modal-dialog-content', _0x794f80['el_'])[0];
					_0x794f80['ansErrorDisplay'] && (_0x794f80['ansErrorDisplay']['destroy'](),
						delete _0x794f80['ansErrorDisplay']);
					if (!_0x2b4db4['selectCDN'] || !_0x5c1064) {
						_0x794f80['ansErrorDisplay'] = Ext['create']('ans.videojs.ErrorNote', {
							'renderTo': _0x794f80['el_']
						});
						return;
					}
					var _0x103675 = _0x2b4db4.currentPlayline()
						, _0x1fd65a = 0;
					Ext['each'](_0x5c1064, function (_0x1e1579, _0x5bccfa) {
						_0x103675 == _0x1e1579 && (_0x1fd65a = _0x5bccfa);
					}),
						_0x794f80['ansErrorDisplay'] = Ext['create']('ans.videojs.ErrorDisplay', {
							'renderTo': _0x794f80['el_'],
							'onSelected': function (_0x2102dc) {
								_0x2b4db4['selectCDN'](_0x2102dc),
									_0x794f80['close']();
							},
							'renderData': {
								'playlines': _0x5c1064,
								'errorMsg': _0x794f80['content'](),
								'selectedIndex': _0x1fd65a
							}
						});
				}
			});
		videojs['registerComponent']('ErrorDisplay', _0x5bdfb3);
	}()),
	(function () {
		var _0x43d444 = null;
		typeof window.videojs === 'undefined' && typeof require === 'function' ? _0x43d444 = require('video.js') : _0x43d444 = window.videojs,
			function (_0x1fce89, _0x3670aa) {
				var _0x3c5449 = {}, _0x3bb88b, _0x4c3dba = {}, _0x3ea221 = {};
				function _0x44ed46(_0x3c8120, _0xf9ff6b, _0x4a2777, _0x496bce) {
					_0x4c3dba = {
						'label': _0x4a2777,
						'sources': _0xf9ff6b
					};
					if (typeof _0x496bce === 'function')
						return _0x496bce(_0x3c8120, _0xf9ff6b, _0x4a2777);
					return _0x3c8120.src(_0xf9ff6b.map(function (_0x14568f) {
						return {
							'src': _0x14568f.src,
							'type': _0x14568f['type'],
							'res': _0x14568f.res
						};
					})),
						_0x3c8120;
				}
				var _0x708f8e = _0x3670aa.getComponent('MenuItem')
					, _0x577c82 = _0x3670aa.extend(_0x708f8e, {
						'constructor': function (_0x32531d, _0x4c07cc, _0x1f9f48, _0x246212) {
							this['onClickListener'] = _0x1f9f48,
								this.label = _0x246212,
								_0x708f8e.call(this, _0x32531d, _0x4c07cc),
								this.src = _0x4c07cc.src,
								this.on('click', this['onClick']),
								this.on('touchstart', this['onClick']),
								_0x4c07cc['initialySelected'] && (this['showAsLabel'](),
									this['selected'](true),
									this['addClass']('vjs-selected'));
						},
						'showAsLabel': function () {
							this.label && (this.label['innerHTML'] = this['options_'].label);
						},
						'onClick': function (_0x14ad90) {
							this['onClickListener'](this);
							var _0x477598 = this['player_'].currentTime()
								, _0x37e711 = this['player_']['paused']();
							this['showAsLabel'](),
								this['addClass']('vjs-selected');
							!_0x37e711 && this['player_']['bigPlayButton']['hide']();
							typeof _0x14ad90 !== 'function' && typeof this['options_']['customSourcePicker'] === 'function' && (_0x14ad90 = this['options_']['customSourcePicker']);
							var _0x1ed698 = 'loadeddata';
							this['player_']['techName_'] !== 'Youtube' && this['player_']['preload']() === 'none' && this['player_']['techName_'] !== 'Flash' && (_0x1ed698 = 'timeupdate'),
								_0x44ed46(this['player_'], this.src, this['options_'].label, _0x14ad90)['one'](_0x1ed698, function () {
									var _0x5234e5 = this['player_'];
									_0x5234e5['switchStatus'] = true,
										_0x5234e5.currentTime(_0x477598),
										!_0x37e711 && _0x5234e5['play'](),
										_0x5234e5.trigger('resolutionchange');
								});
						}
					});
				_0x3670aa['registerComponent']('ResolutionMenuItem', _0x577c82);
				var _0x9f55b6 = _0x3670aa.getComponent('MenuButton')
					, _0x1e60ee = _0x3670aa.extend(_0x9f55b6, {
						'constructor': function (_0x195f68, _0x34535b, _0x4b0002, _0x392259) {
							this.sources = _0x34535b.sources,
								this.label = _0x392259,
								this.label['innerHTML'] = _0x34535b['initialySelectedLabel'],
								_0x9f55b6.call(this, _0x195f68, _0x34535b, _0x4b0002),
								this['controlText']('Quality');
							if (_0x4b0002['dynamicLabel'])
								this['el']()['appendChild'](_0x392259);
							else {
								var _0x457f79 = document['createElement']('span');
								_0x3670aa['dom']['addClass'](_0x457f79, 'vjs-resolution-button-staticlabel'),
									this['el']()['appendChild'](_0x457f79);
							}
						},
						'createItems': function () {
							var _0x2dc258 = []
								, _0x269ec8 = this.sources && this.sources.label || {}
								, _0x28a2bc = function (_0x4c91aa) {
									_0x2dc258.map(function (_0x3f7e2d) {
										_0x3f7e2d['selected'](_0x3f7e2d === _0x4c91aa),
											_0x3f7e2d['removeClass']('vjs-selected');
									});
								};
							for (var _0x3e2e7a in _0x269ec8) {
								_0x269ec8['hasOwnProperty'](_0x3e2e7a) && (_0x2dc258.push(new _0x577c82(this['player_'], {
									'label': _0x3e2e7a,
									'src': _0x269ec8[_0x3e2e7a],
									'initialySelected': _0x3e2e7a === this['options_']['initialySelectedLabel'],
									'customSourcePicker': this['options_']['customSourcePicker']
								}, _0x28a2bc, this.label)),
									_0x3ea221[_0x3e2e7a] = _0x2dc258[_0x2dc258.length - 0x1]);
							}
							return _0x2dc258;
						}
					});
				_0x3bb88b = function (_0x29c076) {
					var _0x1800df = _0x3670aa['mergeOptions'](_0x3c5449, _0x29c076)
						, _0x53c833 = this
						, _0x3845af = document['createElement']('span')
						, _0x430138 = {};
					_0x3670aa['dom']['addClass'](_0x3845af, 'vjs-resolution-button-label'),
						_0x53c833['updateSrc'] = function (_0x51924e) {
							if (!_0x51924e)
								return _0x53c833.src();
							_0x53c833['controlBar']['resolutionSwitcher'] && (_0x53c833['controlBar']['resolutionSwitcher']['dispose'](),
								delete _0x53c833['controlBar']['resolutionSwitcher']);
							_0x51924e = _0x51924e.sort(_0x4bb4b4),
								_0x430138 = _0x544662(_0x51924e);
							var _0x5c5048 = _0x346661(_0x430138, _0x51924e)
								, _0x13098e = new _0x1e60ee(_0x53c833, {
									'sources': _0x430138,
									'initialySelectedLabel': _0x5c5048.label,
									'initialySelectedRes': _0x5c5048.res,
									'customSourcePicker': _0x1800df['customSourcePicker']
								}, _0x1800df, _0x3845af);
							return _0x3670aa['dom']['addClass'](_0x13098e['el'](), 'vjs-resolution-button'),
								_0x53c833['controlBar']['resolutionSwitcher'] = _0x53c833['controlBar']['el_']['insertBefore'](_0x13098e['el_'], _0x53c833['controlBar']['getChild']('fullscreenToggle')['el_']),
								_0x53c833['controlBar']['resolutionSwitcher']['dispose'] = function () {
									this['parentNode']['removeChild'](this);
								}
								,
								_0x44ed46(_0x53c833, _0x5c5048.sources, _0x5c5048.label, _0x1800df['customSourcePicker']);
						}
						,
						_0x53c833.currentResolution = function (_0x41bb2c, _0x16b8ca) {
							if (_0x41bb2c == null)
								return _0x4c3dba;
							return _0x3ea221[_0x41bb2c] != null && _0x3ea221[_0x41bb2c]['onClick'](_0x16b8ca),
								_0x53c833;
						}
						,
						_0x53c833['getGroupedSrc'] = function () {
							return _0x430138;
						}
						;
					function _0x4bb4b4(_0x18e852, _0x41ff10) {
						if (!_0x18e852.res || !_0x41ff10.res)
							return 0;
						return +_0x41ff10.res - +_0x18e852.res;
					}
					function _0x544662(_0x1ae3bb) {
						var _0x1b4a17 = {
							'label': {},
							'res': {},
							'type': {}
						};
						return _0x1ae3bb.map(function (_0x2cbc10) {
							_0x4dde84(_0x1b4a17, 'label', _0x2cbc10),
								_0x4dde84(_0x1b4a17, 'res', _0x2cbc10),
								_0x4dde84(_0x1b4a17, 'type', _0x2cbc10),
								_0x376e92(_0x1b4a17, 'label', _0x2cbc10),
								_0x376e92(_0x1b4a17, 'res', _0x2cbc10),
								_0x376e92(_0x1b4a17, 'type', _0x2cbc10);
						}),
							_0x1b4a17;
					}
					function _0x4dde84(_0x1bd1fc, _0x1f17fa, _0x212221) {
						_0x1bd1fc[_0x1f17fa][_0x212221[_0x1f17fa]] == null && (_0x1bd1fc[_0x1f17fa][_0x212221[_0x1f17fa]] = []);
					}
					function _0x376e92(_0x3aac1d, _0x1b960a, _0x186cba) {
						_0x3aac1d[_0x1b960a][_0x186cba[_0x1b960a]].push(_0x186cba);
					}
					function _0x346661(_0x2e5a39, _0x3cb7fb) {
						var _0x49333a = _0x1800df['default']
							, _0x459330 = '';
						return _0x49333a === 'high' ? (_0x49333a = _0x3cb7fb[0].res,
							_0x459330 = _0x3cb7fb[0].label) : _0x49333a === 'low' || _0x49333a == null || !_0x2e5a39.res[_0x49333a] ? (_0x49333a = _0x3cb7fb[_0x3cb7fb.length - 0x1].res,
								_0x459330 = _0x3cb7fb[_0x3cb7fb.length - 0x1].label) : _0x2e5a39.res[_0x49333a] && (_0x459330 = _0x2e5a39.res[_0x49333a][0].label),
						{
							'res': _0x49333a,
							'label': _0x459330,
							'sources': _0x2e5a39.res[_0x49333a]
						};
					}
					_0x53c833['ready'](function () {
						_0x53c833['options_'].sources.length > 0 && _0x53c833['setTimeout'](function () {
							_0x53c833['updateSrc'](_0x53c833['options_'].sources);
						}, 0x1);
					});
				}
					,
					_0x3670aa.registerPlugin('videoJsResolutionSwitcher', _0x3bb88b);
			}(window, _0x43d444);
	}()),
	(function () {
		(function (i, h) {
			var f = {}, b, g = {}, a = {};
			function c(o, n, m, p) {
				g = n;
				if (typeof p === 'function')
					return p(o, n, m);
				return o;
			}
			var l = h.getComponent('ResolutionMenuItem')
				, e = h.extend(l, {
					'onClick': function (q) {
						this['onClickListener'](this);
						var p = this['player_'].currentTime()
							, m = this['player_']['paused']();
						this['showAsLabel'](),
							this['addClass']('vjs-selected');
						!m && this['player_']['bigPlayButton']['hide']();
						typeof q !== 'function' && typeof this['options_']['customSourcePicker'] === 'function' && (q = this['options_']['customSourcePicker']);
						var o = 'loadeddata';
						this['player_']['techName_'] !== 'Youtube' && this['player_']['preload']() === 'none' && this['player_']['techName_'] !== 'Flash' && (o = 'timeupdate');
						var n = c(this['player_'], this.src, this['options_'].label, q);
						n && n['one'](o, function () {
							n['switchStatus'] = true,
								n.currentTime(p),
								!m && n['play'](),
								n.trigger('playlinechange');
						});
					}
				})
				, j = h.getComponent('MenuButton')
				, k = h.extend(j, {
					'constructor': function (p, n, q, n) {
						this['playlines'] = n['playlines'],
							this.label = n,
							this.label['innerHTML'] = n['initialySelectedLabel'],
							j.call(this, p, n, q),
							this['controlText']('Playline');
						if (q['dynamicLabel'])
							this['el']()['appendChild'](n);
						else {
							var _0x156cc8 = document['createElement']('span');
							h['addClass'](_0x156cc8, 'vjs-resolution-button-staticlabel'),
								this['el']()['appendChild'](_0x156cc8);
						}
					},
					'createItems': function () {
						var o = []
							, q = this['playlines'] || []
							, p = function (r) {
								o.map(function (s) {
									s['selected'](s === r),
										s['removeClass']('vjs-selected');
								});
							};
						for (var n = 0; n < q.length; n++) {
							var m = q[n].label;
							o.push(new e(this['player_'], {
								'label': m,
								'src': q[n],
								'initialySelected': m === this['options_']['initialySelectedLabel'],
								'customSourcePicker': this['options_']['customSourcePicker']
							}, p, this.label)),
								a[m] = o[o.length - 0x1];
						}
						return o;
					}
				});
			b = function (o) {
				var q = h['mergeOptions'](f, o)
					, p = this
					, n = document['createElement']('span')
					, r = p['options_']['playlines'];
				h['dom']['addClass'](n, 'vjs-resolution-button-label');
				var m = new k(p, {
					'playlines': r,
					'initialySelectedLabel': r[0].label,
					'initialySelectedUrl': r[0].url,
					'customSourcePicker': q['customSourcePicker']
				}, q, n);
				h['dom']['addClass'](m['el'](), 'vjs-resolution-button'),
					h['dom']['addClass'](m['el'](), 'vjs-playline-button'),
					m['show'](),
					p['selectCDN'] = function (s) {
						m['items'][s]['onClick'](q['customSourcePicker']),
							p['play']();
					}
					,
					r.length > 0 && (g = r[0]),
					p.currentPlayline = function () {
						return g;
					}
					,
					p['ready'](function () {
						p['controlBar']['videoJsPlayLine'] = p['controlBar']['el_']['insertBefore'](m['el_'], p['controlBar']['getChild']('fullscreenToggle')['el_']),
							p['controlBar']['videoJsPlayLine']['dispose'] = function () {
								this['parentNode']['removeChild'](this);
							}
							;
					});
			}
				,
				h.registerPlugin('videoJsPlayLine', b);
		}(window, videojs));
	}()),
	Ext.define('ans.AudioJs', {
		'videoJs': null,
		'mixins': {
			'observable': 'Ext.util.Observable'
		},
		'constructor': function (a) {
			a = a || {};
			var c = this;
			c.addEvents(['seekstart']),
				c.mixins.observable.constructor.call(c, a);
			var _0x5ea6c1 = videojs(a.videojs, c.params2VideoOpt(a.params), function () { });
			Ext.fly(a.videojs).on('contextmenu', function (f) {
				f['preventDefault']();
			}),
				Ext.fly(a.videojs).on('keydown', function (f) {
					(f.keyCode == 0x20 || f.keyCode == 0x25 || f.keyCode == 0x27) && f['preventDefault']();
				});
		},
		'params2VideoOpt': function (params) {
			var sources = [];
			!params.rootPath && (params.rootPath = '');
			params['http'] && sources.push({
				'src': params['http'],
				'type': 'audio/mp3'
			});
			var logFunc = function (player, url, callback) {
				var me = this;
				!me.logCount && (me.logCount = 0),
					videojs['xhr']({
						'uri': url,
						'headers': {
							'Content-Type': 'application/json'
						}
					}, function (_0x20468a, resp) {
						me.logCount++;
						if (resp.statusCode == 0xc8) {
							me.logCount = 0;
							if (resp.body.indexOf('isPassed') < 0) {
								window.parent && window.parent.location.reload();
								return;
							}
							eval('var d=' + resp.body);
							d['isPassed'] && callback();
							return;
						}
						me.logCount >= 0x4 && (me.logCount = 0,
							player.pause(),
							resp.statusCode != 0 ? alert('服务繁忙，不能保证您能否正常完成任务，请您稍后继续...(e: ' + resp.statusCode + ')') : alert('您的网络不稳定，请您稍后继续...'));
					});
			}
				, sendLog_ = function (player, isdrag, currentTimeSec, callback) {
					if (!params.reportUrl)
						return;
					var format = '[{0}][{1}][{2}][{3}][{4}][{5}][{6}][{7}]',
						clipTime = (params['startTime'] || '0') + '_' + (params['endTime'] || params['duration']),
						_0x2c1fc1 = 0,
						_0x3f3a76;
					currentTimeSec['toString']().indexOf('-') != -0x1 ? (_0x3f3a76 = currentTimeSec['split']('-'),
						_0x3f3a76.length == 0x2 && (_0x2c1fc1 = parseInt(_0x3f3a76[0x1]) * 0x3e8)) : _0x2c1fc1 = currentTimeSec * 0x3e8;
					if (_0x2c1fc1 == params['duration'] * 0x3e8 && isdrag == 0x2)
						return;
					var enc = Ext['String']['format'](format, params.clazzId, params['userid'], params['jobid'] ? params['jobid'] : '', params.objectId, _0x2c1fc1, 'd_yHJ!$pdA~5', params['duration'] * 0x3e8, clipTime);
					var rurl = [params.reportUrl, '/', params['dtoken'], '?clazzId=', params.clazzId, '&playingTime=', currentTimeSec, '&duration=', params['duration'], '&clipTime=', clipTime, '&objectId=', params.objectId, '&otherInfo=', params['otherInfo'], '&jobid=', params['jobid'], '&userid=', params['userid'], '&isdrag=', isdrag, '&view=pc', '&enc=', md5(enc), '&rt=', params.rt, '&dtype=Audio', '&_t=', new Date()['getTime']()].join('');
					logFunc(player, rurl, callback);
				};
			return {
				'language': 'zh-CN',
				'controls': true,
				'preload': 'auto',
				'bigPlayButton': false,
				'sources': sources,
				'textTrackDisplay': true,
				'controlBar': {
					'volumePanel': {
						'inline': true
					},
					'children': ['playToggle', 'currentTimeDisplay', 'timeDivider', 'durationDisplay', 'progressControl', 'volumePanel']
				},
				'plugins': {
					'audioNote': {
						'title': params['filename']
					},
					'studyControl': {
						'enableSwitchWindow': 0x1
					},
					'seekBarControl': {
						'headOffset': params['headOffset'],
						'enableFastForward': params.enableFastForward,
						'isSendLog': true,
						'reportTimeInterval': params['reportTimeInterval'],
						'sendLog': function (player, evt, sec) {
							if (this['isSendLog'] !== true)
								return;
							var isdrag = 0;
							switch (evt) {
								case 'play':
									isdrag = 0x3;
									break;
								case 'pause':
									isdrag = 2;
									break;
								case 'ended':
									isdrag = 0x4;
									break;
							}
							sendLog_(player, isdrag, sec, function () {
								window.proxy_completed && window.proxy_completed();
							});
						}
					}
				}
			};
		}
	}),
	Ext.define('ans.videojs.AudioNote', {
		'extend': 'Ext.Component',
		'cls': 'ans-audionote'
	}),
	(function () {
		var b = videojs.getPlugin('plugin')
			, a = videojs.extend(b, {
				'constructor': function (e, c) {
					b.call(this, e, c),
						Ext['create']('ans.videojs.AudioNote', {
							'renderTo': e['el_'],
							'html': c['title']
						});
				}
			});
		videojs.registerPlugin('audioNote', a);
	}())