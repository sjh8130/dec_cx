Ext.define('ananas.ServerHosts', {
	'alternateClassName': 'ServerHosts',
	'singleton': true,
	'constructor': function () {
		var a = this;
		a.callParent(arguments);
		var b = document.domain;
		try {
			a.MASTER_HOST = location.protocol + '//' + top.location.host;
		} catch (c) {
			a.MASTER_HOST = location.protocol + '//' + location.host;
		}
		try {
			a.PARENT_HOST = parent.location.host !== '' ? location.protocol + '//' + parent.location.host : a.MASTER_HOST;
		} catch (c) {
			a.PARENT_HOST = location.protocol + '//' + location.host;
		}
		a.P_HOST = location.protocol + '//p.ananas.chaoxing.com';
		a.s1_HOST = location.protocol + '//s1.ananas.chaoxing.com';
		a.s2_HOST = location.protocol + '//s2.ananas.chaoxing.com';
		a.CLOUD_HOST = 'http://cloud.ananas.' + b;
		a.NEW_CLOUD_HOST = location.protocol + '//pan-yz.chaoxing.com';
		a.CS_HOST = location.protocol + '//cs.ananas.' + b;
		a.FANYA_HOST = 'http://course.fanya.' + b;
		a.PAN_HOST = 'http://pan.ananas.' + b;
		a.CXLIVE_HOST = 'http://cxlive.' + b;
		a.ERYA_TSK_HOST = 'http://erya.tsk.' + b;
		a.QUESTIONNAIRE_HOST = 'http://surveyapp.fy.' + b;
		a.FX_HOST = 'http://www.' + b;
		a.PHONE_ZT_HOST = 'https://special.rhky.com';
		a.CHAOXING_CLASS_HOST = 'https://k.chaoxing.com';
		a.LIVE_HOST = location.protocol + '//live.chaoxing.com';
		a.APPCD_HOST = location.protocol + '//appcd.chaoxing.com';
		a.ZHIBO_HOST = 'https://zhibo.chaoxing.com';
		a.CXCLASSTASL_HOST = location.protocol + '//noteyd.chaoxing.com';
	}
});
(function (g) {
	function q(v, A) {
		var z = (v & 0xffff) + (A & 0xffff), w = (v >> 0x10) + (A >> 0x10) + (z >> 0x10);
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
		G[B >> 0x5] |= 0x80 << B % 0x20;
		G[(B + 0x40 >>> 0x9 << 0x4) + 0xe] = B;
		var y, A, z, w, v, F = 0x67452301, E = -0x10325477, D = -0x67452302, C = 0x10325476;
		for (y = 0x0; y < G.length; y += 0x10) {
			A = F;
			z = E;
			w = D;
			v = C;
			F = a(F, E, D, C, G[y], 0x7, -0x28955b88);
			C = a(C, F, E, D, G[y + 0x1], 0xc, -0x173848aa);
			D = a(D, C, F, E, G[y + 0x2], 0x11, 0x242070db);
			E = a(E, D, C, F, G[y + 0x3], 0x16, -0x3e423112);
			F = a(F, E, D, C, G[y + 0x4], 0x7, -0xa83f051);
			C = a(C, F, E, D, G[y + 0x5], 0xc, 0x4787c62a);
			D = a(D, C, F, E, G[y + 0x6], 0x11, -0x57cfb9ed);
			E = a(E, D, C, F, G[y + 0x7], 0x16, -0x2b96aff);
			F = a(F, E, D, C, G[y + 0x8], 0x7, 0x698098d8);
			C = a(C, F, E, D, G[y + 0x9], 0xc, -0x74bb0851);
			D = a(D, C, F, E, G[y + 0xa], 0x11, -0xa44f);
			E = a(E, D, C, F, G[y + 0xb], 0x16, -0x76a32842);
			F = a(F, E, D, C, G[y + 0xc], 0x7, 0x6b901122);
			C = a(C, F, E, D, G[y + 0xd], 0xc, -0x2678e6d);
			D = a(D, C, F, E, G[y + 0xe], 0x11, -0x5986bc72);
			E = a(E, D, C, F, G[y + 0xf], 0x16, 0x49b40821);
			F = h(F, E, D, C, G[y + 0x1], 0x5, -0x9e1da9e);
			C = h(C, F, E, D, G[y + 0x6], 0x9, -0x3fbf4cc0);
			D = h(D, C, F, E, G[y + 0xb], 0xe, 0x265e5a51);
			E = h(E, D, C, F, G[y], 0x14, -0x16493856);
			F = h(F, E, D, C, G[y + 0x5], 0x5, -0x29d0efa3);
			C = h(C, F, E, D, G[y + 0xa], 0x9, 0x2441453);
			D = h(D, C, F, E, G[y + 0xf], 0xe, -0x275e197f);
			E = h(E, D, C, F, G[y + 0x4], 0x14, -0x182c0438);
			F = h(F, E, D, C, G[y + 0x9], 0x5, 0x21e1cde6);
			C = h(C, F, E, D, G[y + 0xe], 0x9, -0x3cc8f82a);
			D = h(D, C, F, E, G[y + 0x3], 0xe, -0xb2af279);
			E = h(E, D, C, F, G[y + 0x8], 0x14, 0x455a14ed);
			F = h(F, E, D, C, G[y + 0xd], 0x5, -0x561c16fb);
			C = h(C, F, E, D, G[y + 0x2], 0x9, -0x3105c08);
			D = h(D, C, F, E, G[y + 0x7], 0xe, 0x676f02d9);
			E = h(E, D, C, F, G[y + 0xc], 0x14, -0x72d5b376);
			F = n(F, E, D, C, G[y + 0x5], 0x4, -0x5c6be);
			C = n(C, F, E, D, G[y + 0x8], 0xb, -0x788e097f);
			D = n(D, C, F, E, G[y + 0xb], 0x10, 0x6d9d6122);
			E = n(E, D, C, F, G[y + 0xe], 0x17, -0x21ac7f4);
			F = n(F, E, D, C, G[y + 0x1], 0x4, -0x5b4115bc);
			C = n(C, F, E, D, G[y + 0x4], 0xb, 0x4bdecfa9);
			D = n(D, C, F, E, G[y + 0x7], 0x10, -0x944b4a0);
			E = n(E, D, C, F, G[y + 0xa], 0x17, -0x41404390);
			F = n(F, E, D, C, G[y + 0xd], 0x4, 0x289b7ec6);
			C = n(C, F, E, D, G[y], 0xb, -0x155ed806);
			D = n(D, C, F, E, G[y + 0x3], 0x10, -0x2b10cf7b);
			E = n(E, D, C, F, G[y + 0x6], 0x17, 0x4881d05);
			F = n(F, E, D, C, G[y + 0x9], 0x4, -0x262b2fc7);
			C = n(C, F, E, D, G[y + 0xc], 0xb, -0x1924661b);
			D = n(D, C, F, E, G[y + 0xf], 0x10, 0x1fa27cf8);
			E = n(E, D, C, F, G[y + 0x2], 0x17, -0x3b53a99b);
			F = t(F, E, D, C, G[y], 0x6, -0xbd6ddbc);
			C = t(C, F, E, D, G[y + 0x7], 0xa, 0x432aff97);
			D = t(D, C, F, E, G[y + 0xe], 0xf, -0x546bdc59);
			E = t(E, D, C, F, G[y + 0x5], 0x15, -0x36c5fc7);
			F = t(F, E, D, C, G[y + 0xc], 0x6, 0x655b59c3);
			C = t(C, F, E, D, G[y + 0x3], 0xa, -0x70f3336e);
			D = t(D, C, F, E, G[y + 0xa], 0xf, -0x100b83);
			E = t(E, D, C, F, G[y + 0x1], 0x15, -0x7a7ba22f);
			F = t(F, E, D, C, G[y + 0x8], 0x6, 0x6fa87e4f);
			C = t(C, F, E, D, G[y + 0xf], 0xa, -0x1d31920);
			D = t(D, C, F, E, G[y + 0x6], 0xf, -0x5cfebcec);
			E = t(E, D, C, F, G[y + 0xd], 0x15, 0x4e0811a1);
			F = t(F, E, D, C, G[y + 0x4], 0x6, -0x8ac817e);
			C = t(C, F, E, D, G[y + 0xb], 0xa, -0x42c50dcb);
			D = t(D, C, F, E, G[y + 0x2], 0xf, 0x2ad7d2bb);
			E = t(E, D, C, F, G[y + 0x9], 0x15, -0x14792c6f);
			F = q(F, A);
			E = q(E, z);
			D = q(D, w);
			C = q(C, v);
		}
		return [F, E, D, C];
	}
	function o(w) {
		var x, v = '', y = w.length * 0x20;
		for (x = 0x0; x < y; x += 0x8) {
			v += String.fromCharCode(w[x >> 0x5] >>> x % 0x20 & 0xff);
		}
		return v;
	}
	function j(w) {
		var y, v = [];
		v[(w.length >> 0x2) - 0x1] = undefined;
		for (y = 0x0; y < v.length; y += 0x1) {
			v[y] = 0x0;
		}
		var x = w.length * 0x8;
		for (y = 0x0; y < x; y += 0x8) {
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
		for (w = 0x0; w < 0x10; w += 0x1) {
			v[w] = z[w] ^ 0x36363636,
				y[w] = z[w] ^ 0x5c5c5c5c;
		}
		return B = c(v.concat(j(A)), 0x200 + A.length * 0x8),
			o(c(y.concat(B), 0x200 + 0x80));
	}
	function s(z) {
		var y = '0123456789abcdef', w = '', v, A;
		for (A = 0x0; A < z.length; A += 0x1) {
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
	}) : typeof module === 'object' && module.exports ? module.exports = f : g.md5 = f;
}(this));
Ext.apply(Ext, {
	'setCookie': function (c, f) {
		var a = arguments, i = arguments.length, b = i > 0x2 ? a[0x2] : null, h = i > 0x3 ? a[0x3] : '/', e = i > 0x4 ? a[0x4] : null, g = i > 0x5 ? a[0x5] : false;
		document.cookie = c + '=' + escape(f) + (b === null ? '' : '; expires=' + b.toGMTString()) + (h === null ? '' : '; path=' + h) + (e === null ? '' : '; domain=' + e) + (g === true ? '; secure' : '');
	},
	'getCookie': function (e, h) {
		var b = e + '=', g = b.length, a = document.cookie.length, f = 0x0, c = 0x0;
		while (f < a) {
			c = f + g;
			if (document.cookie.substring(f, c) == b)
				return this.getCookieVal(c);
			f = document.cookie.indexOf(' ', f) + 0x1;
			if (f === 0x0)
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
			f.preventDefault();
		}),
			$('.video-js').attr('tabindex', 0x1),
			$('.vjs-big-play-button').on('click', function (f) {
				$('.video-js').focus();
			}),
			Ext.fly(b.videojs).on('keydown', function (f) {
				(f.keyCode == 0x20 || f.keyCode == 0x25 || f.keyCode == 0x27 || f.keyCode == 0x6b) && f.preventDefault(),
					f.keyCode == 0x20 && (c.paused() ? c.play() : c.pause());
			});
		c.videoJsResolutionSwitcher && c.on('resolutionchange', function () {
			var g = c.currentResolution(), f = g.sources ? g.sources[0x0].res : false;
			Ext.setCookie('resolution', f);
		});
		var a = b.params && b.params.doublespeed ? 0x2 : 0x1;
		c.on('ratechange', function () {
			var h = c.playbackRate();
			h > a ? (c.pause(), c.playbackRate(0x1)) : Ext.setCookie('doubleSpeedValue', h);
		});
		c.on('play', function () {
			try {
				$('.video-js').focus();
				if (b.params && b.params.doublespeed && parseInt(b.params.doublespeed) === 0x1) {
					var xxx = Ext.getCookie('doubleSpeedValue', 0x1);
					c.playbackRate(xxx);
				}
			} catch (e) {
				console.log(e);
			}
		});
		c.on('ended', function () {
			try {
				b.params.enableFastForward = 0x1,
					c.finished = true,
					c.disableSeek(false),
					$('.vjs-progress-control').unbind('click');
			} catch (e) {
				console.log(e);
			}
		});
	},
	'params2VideoOpt': function (params) {
		var var_20220727_6 = typeof params.cpi == 'undefined' ? 0x0 : params.cpi, useM3u8 = false, cdn = [{
			'indexorder': 0x0,
			'label': '公网1',
			'url': ServerHosts.s1_HOST,
			'ispublic': true
		}, {
			'indexorder': 0x1,
			'label': '公网2',
			'url': ServerHosts.s2_HOST,
			'ispublic': true
		}];
		if (params.cdn)
			try {
				top.window.app && top.window.app == 0x2 ? cdn = cdn.concat(params.cdn) : cdn = cdn.concat(params.cdn).sort(function (o1, o2) {
					return o1.indexorder - o2.indexorder;
				});
			} catch (e) {
				cdn = cdn.concat(params.cdn);
			}
		function m3u8(objectId, r, cdn) {
			return 'http://hls-ans.chaoxing.com/hls/m3u8/' + objectId + '/' + r + '.m3u8?cdn=' + encodeURIComponent(cdn);
		}
		function makeSource(src, r) {
			var sdomain = ServerHosts.s1_HOST.replace('http:/', '').replace('https:/', ''), start = 0x0;
			src.src.indexOf(sdomain) > -0x1 && (start = src.src.indexOf(sdomain) + sdomain.length);
			var file = src.src.substr(start);
			if (r.ispublic && start == 0x0)
				return {
					'src': file,
					'type': 'video/mp4',
					'res': src.res
				};
			return r.ispublic ? useM3u8 ? {
				'src': m3u8(params.objectId, src.resolution, r.url),
				'type': 'application/x-mpegURL',
				'res': src.res
			} : {
				'src': r.url + file,
				'type': 'video/mp4',
				'res': src.res
			} : useM3u8 ? {
				'src': m3u8(params.objectId, src.resolution, r.url + sdomain),
				'type': 'application/x-mpegURL',
				'res': src.res
			} : {
				'src': r.url + sdomain + file,
				'type': 'video/mp4',
				'res': src.res
			};
		}
		var sources = [], defaultRes = Ext.getCookie('resolution', 0x168);
		!params.rootPath && (params.rootPath = '');
		params.http && sources.push({
			'src': params.http,
			'type': 'video/mp4',
			'label': '标清',
			'resolution': 'sd',
			'res': 0x168
		});
		params.httphd && sources.push({
			'src': params.httphd,
			'type': 'video/mp4',
			'label': '高清',
			'resolution': 'hd',
			'res': 0x2d0
		});
		params.httpshd && sources.push({
			'src': params.httpshd,
			'type': 'video/mp4',
			'label': '超高清',
			'resolution': 'shd',
			'res': 0x438
		});
		params.httpmd && sources.push({
			'src': params.httpmd,
			'type': 'video/mp4',
			'label': '极速',
			'resolution': 'md',
			'res': 0xf0
		});
		if (sources.length == 0x1) {
			var cdnItem = sources[0x0];
			cdnItem.label = '高清';
		}
		var findDefaultRes = false;
		for (var i = 0x0; i < sources.length; i++) {
			if (sources[i].res == defaultRes) {
				findDefaultRes = true;
				break;
			}
		}
		!findDefaultRes && (defaultRes = 0x168);
		var disableLog = !Ext.isChaoxing && (Ext.isIos || Ext.isAndroid), logFunc = function (player, url, callback) {
			try {
				if (typeof top.hasJobLimit != 'undefined' && top.hasJobLimit === true && isUnFinishJob())
					return;
				if (typeof top.videoTimeLimit != 'undefined' && top.videoTimeLimit === true && isUnFinishJob())
					return;
			} catch (e) {
				console.log(e);
			}
			if (disableLog)
				return;
			var me = this;
			!me.logCount && (me.logCount = 0x0),
				videojs.xhr({
					'uri': url,
					'headers': {
						'Content-Type': 'application/json'
					}
				}, function (err, resp) {
					me.logCount++;
					if (resp.statusCode == 0xc8) {
						me.logCount = 0x0;
						if (resp.body.indexOf('isPassed') < 0x0) {
							window.parent && window.parent.location.reload();
							return;
						}
						eval('var d=' + resp.body);
						if (d.isPassed) {
							try {
								typeof d.hasJobLimit != 'undefined' && d.hasJobLimit === true && (top.allowNextVideo = false,
									top.hasJobLimit = true),
									typeof d.videoTimeLimit != 'undefined' && d.videoTimeLimit === true && (top.allowNextVideo = false,
										top.videoTimeLimit = true);
							} catch (e) {
								console.log(e);
							}
							callback();
						}
						return;
					}
					if (me.logCount >= 0x4) {
						me.logCount = 0x0,
							player.pause();
						if (resp.statusCode != 0x0) {
							if (resp.statusCode == 0xca || resp.statusCode == 0x12e)
								try {
									parent.location.reload();
								} catch (e) {
									console.log(e.message);
								}
							else
								alert('服务繁忙，不能保证您能否正常完成任务，请您稍后继续...(e:' + resp.statusCode + ')');
						} else
							alert('您的网络不稳定，请您稍后继续...');
					}
				});
		}, sendLog_ = function (player, isdrag, currentTimeSec, callback) {
			if (!params.reportUrl)
				return;
			if (params.isFiled == 0x1 || params.state == 0x1)
				return;
			var format = '[{0}][{1}][{2}][{3}][{4}][{5}][{6}][{7}]', clipTime = (params.startTime || '0') + '_' + (params.endTime || params.duration), playTime = 0x0, timeArr;
			currentTimeSec.toString().indexOf('-') != -0x1 ? (timeArr = currentTimeSec.split('-'),
				timeArr.length == 0x2 && (playTime = parseInt(timeArr[0x1]) * 0x3e8)) : playTime = currentTimeSec * 0x3e8;
			if (playTime == params.duration * 0x3e8 && isdrag == 0x2)
				return;
			var enc = Ext.String.format(format, params.clazzId, params.userid, params.jobid || '', params.objectId, playTime, 'd_yHJ!$pdA~5', params.duration * 0x3e8, clipTime), rurl = [params.reportUrl, '/', params.dtoken, '?clazzId=', params.clazzId, '&playingTime=', currentTimeSec, '&duration=', params.duration, '&clipTime=', clipTime, '&objectId=', params.objectId, '&otherInfo=', params.otherInfo, '&jobid=', params.jobid, '&userid=', params.userid, '&isdrag=', isdrag, '&view=pc', '&enc=', md5(enc), '&rt=', params.rt, '&dtype=Video', '&_t=', new Date().getTime()].join('');
			logFunc(player, rurl, callback);
		};
		return {
			'language': 'zh-CN',
			'poster': params.screenshot,
			'controls': true,
			'preload': 'none',
			'sources': sources,
			'playlines': cdn,
			'playbackRates': params.doublespeed != 0x0 ? [0x1, 1.25, 1.5, 0x2] : false,
			'textTrackDisplay': true,
			'controlBar': {
				'volumePanel': {
					'inline': false
				},
				'children': ['playToggle', 'playbackRateMenuButton', 'currentTimeDisplay', 'timeDivider', 'durationDisplay', 'progressControl', 'volumePanel', 'subsCapsButton', 'fullscreenToggle', 'videoJsPlayLine', 'textTrackButton']
			},
			'plugins': {
				'videoJsResolutionSwitcher': {
					'default': defaultRes,
					'dynamicLabel': true,
					'customSourcePicker': function (player, sources, label) {
						var r = player['currentPlayline']();
						return player['src'](sources['map'](function (src) {
							return makeSource(src, r);
						})),
							player;
					}
				},
				'videoJsPlayLine': {
					'dynamicLabel': true,
					'customSourcePicker': function (player, r, label) {
						var src = player['currentResolution']()['sources'][0x0];
						return player['src'](makeSource(src, r)),
							player;
					}
				},
				'studyControl': {
					'enableSwitchWindow': params['enableSwitchWindow']
				},
				'seekBarControl': {
					'headOffset': params['headOffset'],
					'enableFastForward': params['enableFastForward'],
					'isSendLog': !!parent['AttachmentSetting'] && params['control'],
					'reportTimeInterval': params['reportTimeInterval'],
					'isShowDanmu': params['danmaku'],
					'chapterCapture': params['chapterCapture'] || 0x0,
					'captureInterval': params['captureInterval'] || 0x258,
					'chapterCollectionType': params['chapterCollectionType'] || 0x0,
					'startCapture': params['startCapture'],
					'endCapture': params['endCapture'],
					'playAginCapture': params['playAginCapture'],
					'playingCapture': params['playingCapture'],
					'playingLoopCapture': params['playingLoopCapture'],
					'duration': params['duration'],
					'isSupportFace': params['isSupportFace'] || false,
					'isShowFaceCollection': params['isShowFaceCollection'],
					'jumpTimePointList': params['jumpTimePointList'],
					'attachmentId': params['aId'],
					'sendLog': function (player, evt, sec, var_20220324_1) {
						if (this['isSendLog'] !== true)
							return;
						var isdrag = 0x0;
						switch (evt) {
							case 'playing':
								isdrag = 0x0;
								break;
							case 'drag':
								isdrag = 0x1;
								break;
							case 'play':
								isdrag = 0x3;
								break;
							case 'pause':
								isdrag = 0x2;
								break;
							case 'ended':
								isdrag = 0x4;
								break;
						}
						var var_20220324_2 = this;
						sendLog_(player, isdrag, sec, function () {
							try {
								isdrag === 0x4 && typeof var_20220324_1 != 'undefined' && (var_20220324_1['sendDataLog']('ended'),
									var_20220324_1['playNextVideo'](var_20220324_2['attachmentId']));
							} catch (e) {
								console['log'](e);
							}
							window['proxy_completed'] && window['proxy_completed']();
						});
					}
				},
				'timelineObjects': {
					'begins': params['begins'],
					'ends': params['ends'],
					'url': params['rootPath'] + '/richvideo/initdatawithviewerV2?mid=' + params['mid'] + '&cpi=' + params['cpi'] + '&classid=' + params['clazzId'],
					'quizErrorReportUrl': params['rootPath'] + '/question/addquestionerror?classid=' + params['clazzId'] + '&cpi=' + params['cpi'],
					'validationUrl2': params['rootPath'] + '/question/quiz-validation?classid=' + params['clazzId'] + '&cpi=' + var_20220727_6 + '&objectid=' + params['objectId'],
					'quizRightCountUrl': params['rootPath'] + '/question/quiz-rightcount?classid=' + params['clazzId'] + '&cpi=' + var_20220727_6
				},
				'subtitle': {
					'translate': params['chapterVideoTranslate'],
					'subtitleUrl': params['rootPath'] + '/richvideo/allsubtitle?mid=' + params['mid'] + '&objectid=' + params['objectId'] + '&courseid=' + params['courseid'],
					'subtitle': params['rootPath'] + '/ananas/video-editor/sub?objectid=' + params['subobjectid']
				},
				'marker': {
					'url': !params['isNotMark'] ? params['rootPath'] + '/ananas/getpoints?courseid=' + params['courseid'] + '&mid=' + params['mid'] : '',
					'ff': params['enableFastForward'],
					'videoTopicCloud': params['videoTopicCloud']
				}
			}
		};
	}
});
(Object['defineProperty'](ans['VideoJs']['prototype'], 'params2VideoOpt', {
	'configurable': false,
	'writable': false
}),
	Object['freeze'](ans['VideoJs']['prototype']['params2VideoOpt']));
(function () {
	var b = videojs['getPlugin']('plugin'), a = videojs['extend'](b, {
		'constructor': function (f, c) {
			b['call'](this, f, c);
			var g = this, j = c['mouseElTarget'], i = 0x1;
			c['enableSwitchWindow'] !== 0x1 && (i = 0x0);
			if (!j)
				try {
					j = window['top'] ? window['top'] : window['document'];
				} catch (h) {
					j = window['parent'] ? window['parent'] : window['document'];
				}
			Ext['fly'](j)['on']('mouseout', function (k) {
				k = k ? k : window['event'];
				var l = k['relatedTarget'] || k['toElement'];
				!l && (i != 0x1 && f['pause']());
			}),
				g['singleton'](f);
		},
		'singleton': function (c) {
			var f = this, e = parseInt(Math['random']() * 0x98967f);
			c['on']('play', function () {
				Ext.setCookie('videojs_id', e);
			}),
				c['setInterval'](function () {
					var g = Ext['getCookie']('videojs_id');
					typeof g != 'undefined' && g != e && c['pause']();
				}, 0x3e8);
		}
	});
	videojs['registerPlugin']('studyControl', a);
}());
(function () {
	var a = videojs['getComponent']('SeekBar'), b = videojs['extend'](a, {
		'constructor': function (e, c) {
			a['call'](this, e, c);
			var f = this;
			e['ignorePause'] = false,
				e['disableSeek'] = function (g) {
					f['disableSeek'](g);
				},
				e['onlyBackward'] = function (g) {
					f['onlyBackward'](g);
				},
				e['getSeekBar'] = function () {
					return f;
				},
				f['on']('slideractive', function () {
					e['trigger']('seekstart'),
						e['ignorePause'] = true,
						e['ignorePlay'] = true,
						e['ignoreSeek'] = false;
				}),
				f['on']('sliderinactive', function () {
					e['trigger']('seekend'),
						e['ignoreSeek'] = false;
				}),
				f['maxPercent'] = 0x0,
				e['on']('timeupdate', function () {
					f['maxPercent'] = Math['max'](f['getPercent'](), f['maxPercent']);
				});
		},
		'getCurrentTime_': function () {
			return this['player_']['currentTime']();
		},
		'getMaxPercent': function () {
			return this['maxPercent'];
		},
		'isBackward': function (c) {
			return this['maxPercent'] > this['calculateDistance'](c);
		},
		'handleMouseDown': function (c) {
			if (this['_onlyBackward']) {
				if (!this['isBackward'](c))
					return;
			}
			if (this['_disableSeek'] === true)
				return;
			a['prototype']['handleMouseDown']['call'](this, c);
		},
		'handleMouseMove': function (c) {
			if (this['_disableSeek'] === true)
				return;
			if (this['_onlyBackward']) {
				if (!this['isBackward'](c))
					return;
			}
			a['prototype']['handleMouseMove']['call'](this, c);
		},
		'handleMouseUp': function (c) {
			if (this['_disableSeek'] === true)
				return;
			if (this['_onlyBackward']) {
				if (!this['isBackward'](c))
					return;
			}
			a['prototype']['handleMouseUp']['call'](this, c);
		},
		'disableSeek': function (c) {
			var e = this;
			e['_disableSeek'] = c !== false,
				e['_disableSeek'] ? e['disable']() : e['enable']();
		},
		'onlyBackward': function (e) {
			var c = this;
			c['_onlyBackward'] = e !== false;
		}
	});
	videojs['registerComponent']('SeekBar', b);
}());
(function () {
	var a = videojs['getPlugin']('plugin'), b = videojs['extend'](a, {
		'constructor': function (g, f) {
			a['call'](this, g, f);
			var h = this;
			h['firstClick'] = true;
			h['isSendLog_'] = !!f['isSendLog'];
			h['isShowDanmu_'] = !!f['isShowDanmu'];
			h['damuLastGetTime'] = 0x0;
			h['firstPlay'] = true;
			h['firstPlayFace'] = true;
			h['pausePlayFace'] = false;
			h['playingFace'] = false;
			h['playingFaceTime'] = 0x0;
			h['chapterCapture'] = f['chapterCapture'] || 0x0;
			h['captureInterval'] = f['captureInterval'] * 0x3c || 0x258;
			h['chapterCollectionType'] = f['chapterCollectionType'] || 0x0;
			h['isSupportFace'] = f['isSupportFace'];
			h['isAlertTip'] = false;
			h['startCapture'] = f['startCapture'];
			h['endCapture'] = f['endCapture'];
			h['playAginCapture'] = f['playAginCapture'];
			h['playingCapture'] = f['playingCapture'];
			h['playingLoopCapture'] = f['playingLoopCapture'];
			h['isShowFaceCollection'] = f['isShowFaceCollection'];
			h['duration'] = f['duration'];
			h['jumpTimePointList'] = f['jumpTimePointList'];
			h['loopCaptureInterval'] = Math['floor'](Math['random']() * (parseInt(h['duration']) - 0x0) + 0x1);
			h['attachmentId'] = f['attachmentId'];
			g['on']('ready', function () {
				f['enableFastForward'] != 0x1 && g['disableSeek']();
			});
			!f['sendLog'] && (f['sendLog'] = function () { }
			);
			f['headOffset'] && g['currentTime'](f['headOffset']);
			var k = 0x0, c = 0x0, e = f['reportTimeInterval'] || 0x3c, j = e * 0x3e8, i = function (l, m, o) {
				var var_20220902_1 = $('.vjs-tip2');
				var_20220902_1['find']('.vjs-tip-inner2')['text'](o),
					var_20220902_1['css']({
						'left': l / m['duration']() * 0x64 + '%',
						'margin-left': -parseFloat(var_20220902_1['width']()) / 0x2 - 0x5 + 'px',
						'visibility': 'visible'
					}),
					$('.vjs-default-skin')['removeClass']('vjs-user-inactive'),
					$('.vjs-default-skin')['addClass']('vjs-user-active'),
					setTimeout(function () {
						var_20220902_1['css']('visibility', 'hidden');
					}, 0x7d0);
			}, i = function (l, m, o) {
				if (!h['isSendLog_'])
					return;
				var n = h['now_']() - k;
				(n > j || m === true) && (typeof o != 'undefined' ? f['sendLog'](g, l, o, h) : f['sendLog'](g, l, h['sec_'](g), h),
					k = h['now_']());
			}, var_20220902_1 = function (var_20220902_5) {
				return var_20220902_5 && var_20220902_5['sort'] && var_20220902_5['sort'](function (var_20220902_6, var_20220902_7) {
					return parseInt(var_20220902_6) - parseInt(var_20220902_7);
				});
			}, var_20220902_2 = function (var_20220902_8) {
				try {
					var var_20220902_9 = var_20220902_8['otherPointTimes'];
					if (var_20220902_9['length'] === 0x0)
						return -0x1;
					return var_20220902_9 = var_20220902_1(var_20220902_9),
						var_20220902_9[0x0];
				} catch (err) {
					console['log'](err);
				}
				return -0x1;
			}, var_20220902_3 = function (var_20220902_10) {
				try {
					var var_20220902_11 = var_20220902_10['otherPointTimes'], var_20220902_12 = var_20220902_11['length'];
					if (var_20220902_12 === 0x0)
						return -0x1;
					return var_20220902_11 = var_20220902_1(var_20220902_11),
						var_20220902_11[var_20220902_12 - 0x1];
				} catch (err) {
					console['log'](err);
				}
				return -0x1;
			}, var_20220902_4 = function (var_20220902_13, var_20220902_14) {
				try {
					if (!var_20220902_13['paused']()) {
						var var_20220902_15 = var_20220902_13['currentTime'](), var_20220902_16 = 0x0;
						var_20220902_13['eventPoints']['forEach'](function (var_20220902_17) {
							var_20220902_17['text'] == '片头' && (var_20220902_16 = var_20220902_17['time']);
						});
						if (var_20220902_14['headOffset'] > 0x0 && var_20220902_14['headOffset'] < var_20220902_16)
							return;
						if (var_20220902_16 > 0x0 && parseInt(var_20220902_15) === 0x0) {
							var var_20220902_18 = parseInt(var_20220902_2(var_20220902_13));
							if (var_20220902_18 >= 0x0 && var_20220902_16 > var_20220902_18)
								return;
							var_20220902_13['ignoreSeek'] = false,
								var_20220902_13['switchStatus'] = true,
								var_20220902_13['currentTime'](var_20220902_16),
								i(var_20220902_16, var_20220902_13, '已跳过片头');
						}
					}
				} catch (err) {
					console['log'](err);
				}
				try {
					var var_20220902_19 = 0x0;
					if (!var_20220902_13['paused']()) {
						var var_20220902_15 = var_20220902_13['currentTime']();
						var_20220902_13['eventPoints']['forEach'](function (var_20220902_20) {
							var_20220902_20['text'] == '片尾' && (var_20220902_19 = var_20220902_20['time']);
						});
						if (var_20220902_14['headOffset'] > var_20220902_19)
							return;
						var var_20220902_21 = parseInt(var_20220902_15);
						if (var_20220902_19 > 0x0 && var_20220902_21 === var_20220902_19) {
							var var_20220902_22 = parseInt(var_20220902_3(var_20220902_13));
							if (var_20220902_22 >= 0x0 && var_20220902_19 < var_20220902_22)
								return;
							var_20220902_13['ignoreSeek'] = false,
								var_20220902_13['switchStatus'] = true,
								var_20220902_13['currentTime'](var_20220902_14['duration']),
								i(var_20220902_21, var_20220902_13, '已跳过片尾');
						}
					}
				} catch (err) {
					console['log'](err);
				}
			};
			g['on']('play', function () {
				try {
					top['configFullScreen'] && reSizeVideoWindow();
				} catch (e) {
					console['log'](e);
				}
				try {
					if (typeof top['hasJobLimit'] != 'undefined' && top['hasJobLimit'] === true && h['firstClick'] && isUnFinishJob()) {
						h['firstClick'] = false,
							g['pause'](),
							checkJobCountLimit(g, 0x0);
						return;
					}
					if (typeof top['videoTimeLimit'] != 'undefined' && top['videoTimeLimit'] === true && h['firstClick'] && isUnFinishJob()) {
						h['firstClick'] = false,
							g['pause'](),
							checkJobCountLimit(g, 0x1);
						return;
					}
				} catch (e) {
					console['log'](e);
				}
				h['isAlertTip'] = false;
				if (h['chapterCapture'] == 0x0 || !h['isSupportFace'] || !h['isShowFaceCollection'])
					!g['ignorePlay'] ? (i('play', true),
						g['ignoreSeek'] = true) : (g['ignorePlay'] = false,
							g['ignoreSeek'] = false),
						h['sendDataLog']('play'),
						h['receiveStudyLog'](),
						h['getDanmuList']('play', g),
						h['firstPlay'] = false,
						h['pausePlayFace'] = true;
				else {
					if (h['chapterCapture'] == 0x1) {
						if (h['firstPlay']) {
							var var_20220715_1 = h['sec_'](g);
							if (var_20220715_1 == 0x0 && (h['startCapture'] == 0x1 || typeof h['startCapture'] == 'undefined') && h['firstPlayFace']) {
								h['playingFaceTime'] = var_20220715_1,
									h['playingFace'] = false,
									h['faceCollection']('play', g, h['chapterCollectionType'], 0x0);
								return;
							}
							!g['ignorePlay'] ? (i('play', true),
								g['ignoreSeek'] = true) : (g['ignorePlay'] = false,
									g['ignoreSeek'] = false),
								h['sendDataLog']('play'),
								h['receiveStudyLog'](),
								h['getDanmuList']('play', g),
								h['firstPlay'] = false,
								h['pausePlayFace'] = true;
						} else {
							if (h['playAginCapture'] == 0x1 && !g['ignorePlay'] && h['pausePlayFace']) {
								h['playingFaceTime'] = h['sec_'](g),
									h['playingFace'] = false,
									h['faceCollection']('aginPlay', g, h['chapterCollectionType'], -0x2);
								return;
							}
							h['pausePlayFace'] = true;
						}
					}
				}
			}),
				g['on']('seeked', function () {
					if (f['enableFastForward'] != 0x1 && !g['switchStatus'] && !g['finished']) {
						var l = g['currentTime'](), m = f['headOffset'] ? f['headOffset'] : 0x0;
						l != 0x0 && l > m && g['currentTime'](m);
					}
					!g['ignoreSeek'] ? i('drag', true, c + '-' + h['sec_'](g)) : g['ignoreSeek'] = false,
						c = h['sec_'](g),
						g['ignorePlay'] = true,
						delete g['switchStatus'];
				}),
				g['on']('pause', function () {
					!g['ignorePause'] ? (i('pause', true),
						g['ignorePlay'] = false,
						g['ignoreSeek'] = false) : g['ignorePause'] = false,
						h['sendDataLog']('pause'),
						h['getDanmuList']('pause', g);
				}),
				g['on']('timeupdate', function () {
					var c = h['sec_'](g);
					h['isSupportFace'] && h['isShowFaceCollection'] && h['chapterCapture'] == 0x1 && h['playingCapture'] == 0x1 && h['playingFace'] && (h['playingFace'] = false,
						h['playingLoopCapture'] == 0x1 ? c == h['loopCaptureInterval'] && h['faceCollection']('playing', g, h['chapterCollectionType'], -0x1) : c >= h['captureInterval'] && c % h['captureInterval'] == 0x0 && h['faceCollection']('playing', g, h['chapterCollectionType'], c));
					!h['playingFace'] && c - h['playingFaceTime'] > 0x2 && (h['playingFace'] = true);
					if (typeof parent['videoTrialDuration'] != 'undefined' && parent['videoTrialDuration'] != '-1') {
						var l = parseInt(parent['videoTrialDuration']) * 0x3c;
						if (l < h['sec_'](g) && !h['isAlertTip']) {
							g['pause'](),
								alert('视频只允许试看' + parent['videoTrialDuration'] + '分钟'),
								h['isAlertTip'] = true;
							return;
						}
					}
					parseInt(g['currentTime']()) >= this['damuLastGetTime'] && h['getDanmuList']('timeupdate', g);
					h['danmuDisplay'](g);
					if (k == 0x0) {
						var_20220902_4(g, f);
						return;
					}
					h['sec_'](g) - c <= 0x1 && !g['ignorePlay'] && (c = h['sec_'](g)),
						i('playing'),
						var_20220902_4(g, f);
				}),
				g['on']('ended', function () {
					h['isShowFaceCollection'] && h['chapterCapture'] == 0x1 && h['endCapture'] == 0x1 && h['faceCollection']('ended', g, h['chapterCollectionType'], h['duration']),
						i('ended', true);
				});
		},
		'sec_': function (c) {
			return parseInt(c['currentTime']());
		},
		'now_': function () {
			return new Date()['getTime']();
		},
		'isSendLog': function (c) {
			return c && (this['isSendLog_'] = !!c),
				this['isSendLog_'];
		},
		'sendDataLog': function (e) {
			var c = e == 'pause' || e == 'end' ? 0x2 : 0x1;
			typeof sendReadZTMediaLog != 'undefined' && sendReadZTMediaLog(c);
		},
		'receiveStudyLog': function () {
			typeof receiveStudyLog != 'undefined' && setTimeout(function () {
				receiveStudyLog();
			}, 0x32);
		},
		'getDanmuList': function (e, c) {
			if (!this['isShowDanmu_'])
				return;
			var f = this['sec_'](c);
			if (e == 'pause') {
				this['damuLastGetTime'] = 0x0,
					setTimeout(function () {
						getDanmuByTime(e, 0x0);
					}, 0xc8);
				return;
			}
			typeof getDanmuByTime != 'undefined' && setTimeout(function () {
				getDanmuByTime(e, f);
			}, 0xc8);
			if (f < this['damuLastGetTime'])
				return;
			this['damuLastGetTime'] = f + 0x3b;
		},
		'danmuDisplay': function (c) {
			if (!this['isShowDanmu_'])
				return;
			var e = this['sec_'](c);
			typeof danmuPlay != 'undefined' && danmuPlay(e);
		},
		'timer': function (c) { },
		'faceCollection': function (e, c, f, var_20220715_5) {
			if (var_20220715_5 != -0x2) {
				var var_20220715_6 = this['jumpTimePointList'];
				if (typeof var_20220715_6 != 'undefined')
					try {
						if (var_20220715_6['includes'](var_20220715_5)) {
							this['firstPlayFace'] = false,
								this['pausePlayFace'] = false,
								this['playingFace'] = false;
							return;
						}
					} catch (err) { }
			}
			e == 'play' ? typeof startFaceCollection != 'undefined' && (c['pause'](),
				startFaceCollection(c, f, this, var_20220715_5)) : e == 'ended' ? typeof startFaceCollection != 'undefined' && (c['pause'](),
					startFaceCollection(c, f, this, var_20220715_5)) : e == 'playing' ? (typeof startFaceCollection != 'undefined' && (c['pause'](),
						this['playingFaceTime'] = this['sec_'](c),
						startFaceCollection(c, f, this, var_20220715_5),
						this['playingFace'] = false),
						this['pausePlayFace'] = false) : e == 'aginPlay' && (typeof startFaceCollection != 'undefined' && (c['pause'](),
							startFaceCollection(c, f, this, var_20220715_5)),
							this['pausePlayFace'] = false);
		},
		'playNextVideo': function (c) {
			if (typeof chapterPlayNextVideo != 'undefined') {
				if (typeof top['allowNextVideo'] != 'undefined' && top['allowNextVideo'] === false) {
					top['hasJobLimit'] === true ? top['showJobLimitTip']() : top['showVideoTimeLimitTip']();
					return;
				}
				chapterPlayNextVideo(c);
			}
		}
	});
	videojs['registerPlugin']('seekBarControl', b);
}());
Ext['define']('ans.videojs.TimelineObjectsBg', {
	'extend': 'Ext.Component',
	'cls': 'ans-timelineobjectsbg',
	'hidden': true
});
Ext['define']('ans.videojs.VideoQuiz', {
	'extend': 'Ext.Component',
	'xtype': 'videoquiz',
	'cls': 'ans-videoquiz',
	'renderTpl': ['<div class="tkTopic">', '<tpl if="dtype==\'InteractiveQuiz\'">', '<div class="tkTopic_numbar fr">共 {interactiveQuestionCount} 题<span id="rightAnswerNum">，已答对 <i id="rightNum"></i> 题</span></div>', '</tpl> ', '<div class="tkTopic_title">[{questionType}]</div>', '<div class="tkTopic_con tkScroll">', '<div class=\x22tkItem\x22>', '<div class="tkItem_title">{description}</div>', '<ul class="tkItem_ul">', '<tpl for=\x22options\x22>', '<li class="ans-videoquiz-opt"><label>', '<span class=\x22tkRadio\x22><input type=\x22{[parent.questionType==\x22多选题\x22?\x22checkbox\x22:\x22radio\x22]}\x22 <tpl if=\x22parent.dtype==\x27InteractiveQuiz\x27\x22>{[this.getChecked(parent.answerContent, values.name, parent.dtype)]}</tpl> name=\x22ans-videoquiz-opt\x22 value=\x22{isRight}\x22/><i></i></span>', '{name}、{description}', '</label></li>', '</tpl>', '</ul>', '</div>', '</div>', '<div class="tkTopic_oper">', '<a class="ans-videoquiz-submit bntLinear fr" id="videoquiz-submit">提交</a>', '<a class="ans-videoquiz-submit bntLinear fr" id="videoquiz-submitting" style="display:none">提交中</a>', '<a class="ans-videoquiz-continue bntLinear fr" id="videoquiz-continue"><tpl if="dtype==\'InteractiveQuiz\'">继续学习<tpl else>继续</tpl></a>', '<tpl if="dtype==\'InteractiveQuiz\'">', '<a class=\x22bntWhiteBorder ans-videoquiz-back fr\x22 id=\x22knowledgeBack\x22>知识点回看</a>', '</tpl>', '<tpl if="dtype==\'InteractiveQuiz\'"><span id="spanHas" class="rightInfo"></span><tpl else><span class="spanHas fr" id="spanHas">回答正确</span></tpl>', '<span class="spanNot fr" id="spanNot"><tpl if="dtype==\'InteractiveQuiz\'">真遗憾，再接再厉！<tpl else>回答错误</tpl></span>', '<span class="spanNotBack fr" id="spanNotBack"><tpl if="dtype==\'InteractiveQuiz\'">真遗憾，再接再厉！<tpl else>回答错误，</tpl>回看 {errorBackTime} 分钟</span>', '<tpl if="dtype==\'InteractiveQuiz\'">', '<span class="spanNotBack fr" id="spanNotBackPoint">真遗憾，再接再厉！</span>', '<a class="spanHref fl" href="javascript:" id="viewAnalysis">查看解析</a>', '</div>', '<div class="tkParsing" id="tkParsing">', '<a class=\x22tkParsing_dele\x22 id=\x22tkParsingDele\x22 href=\x22javascript:\x22></a>', '<div class="tkParsing_screll tkParsing_con" id="tkParsing_con"></div>', '</tpl>', '</div>', '</div>', {
		'getChecked': function (q, w, e) {
			try {
				if (typeof q != 'undefined')
					return q['indexOf'](w) != -0x1 && e == 'InteractiveQuiz' ? 'checked="checked"' : '';
				return '';
			} catch (err) {
				console['log'](err);
			}
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
		var b = this, d = b['renderData'], e = b['quizRightCountUrl'];
		typeof e != 'undefined' && Ext['Ajax']['request']({
			'url': e,
			'params': {
				'eventid': d['resourceId'],
				'memberinfo': d['memberinfo']
			},
			'method': 'get',
			'success': function (f) {
				var g = Ext['decode'](f['responseText']);
				g['status'] && (Ext['get']('rightNum')['setHTML'](g['rightAnswerCount']),
					Ext['get']('rightAnswerNum')['setStyle']('display', 'inline-block'));
			}
		});
		b['callParent'](arguments);
		var c = b['scrollEl'], a = $(c['dom'])['niceScroll']({
			'cursorborder': '',
			'cursorwidth': 0x6,
			'cursorcolor': '#A5A5A5',
			'boxzoom': false,
			'autohidemode': false
		});
		b['scroller'] = a,
			b['submitEl']['on']('click', function () {
				b['checkResult']();
			}),
			b['continueEl']['on']('click', function () {
				try {
					top['configFullScreen'] && exitMediumSizeWindow();
				} catch (err) {
					console['log'](err);
				}
				b['fireEvent']('continue');
			}),
			b['backEl'] && b['backEl']['on']('click', function () {
				b['onerror'] && b['onerror'](),
					b['fireEvent']('continue');
			}),
			b['viewAnalysisEl'] && b['viewAnalysisEl']['on']('click', function () {
				Ext['get']('tkParsing')['setStyle']('display', 'inline-block');
			}),
			b['delAnalysisEl'] && b['delAnalysisEl']['on']('click', function () {
				Ext['get']('tkParsing')['setStyle']('display', 'none');
			});
	},
	'checkResult': function () {
		var f = this, i = Ext['query']('input', f['el']['dom']), e = true, g = f['renderData'], b = g['options'], c = [], h = f['quizErrorReportUrl'], a = f['validationUrl2'], d = g['dtype'];
		if (Ext['get']('videoquiz-continue')['getStyle']('display') == 'none' && window['parent']['parent']['location']['href']['indexOf']('nodedetailcontroller/visitnodedetail') > -0x1) {
			try {
				top['configFullScreen'] && exitMediumSizeWindow();
			} catch (err) {
				console['log'](err);
			}
			f['fireEvent']('continue');
			return;
		}
		Ext['each'](i, function (var_20220727_3, var_20220727_4) {
			var_20220727_3['checked'] && c['push'](b[var_20220727_4]['name']);
		}),
			Ext['get']('videoquiz-submit')['setStyle']('display', 'none'),
			Ext['get']('videoquiz-submitting')['setStyle']('display', 'block');
		if (typeof a != 'undefined') {
			var l = c['join'](',');
			Ext['Ajax']['request']({
				'url': a,
				'params': {
					'eventid': g['resourceId'],
					'memberinfo': g['memberinfo'],
					'answerContent': l
				},
				'method': 'get',
				'success': function (m) {
					Ext['get']('videoquiz-submit')['setStyle']('display', 'block'),
						Ext['get']('videoquiz-submitting')['setStyle']('display', 'none'),
						g['answerContent'] = l;
					var n = Ext['decode'](m['responseText']), var_20220727_2 = typeof n['isRight'] === 'undefined' ? false : n['isRight'];
					!var_20220727_2 ? g['errorBackTime'] && g['errorBackTime'] > 0x0 ? (Ext['get']('spanNotBack')['setStyle']('display', 'block'),
						Ext['get']('videoquiz-submit')['setStyle']('display', 'none'),
						d == 'InteractiveQuiz' ? Ext['get']('knowledgeBack')['setStyle']('display', 'block') : Ext['get']('videoquiz-continue')['setStyle']('display', 'block')) : d == 'InteractiveQuiz' && g['errorBack'] == 0x1 && g['eBstartPoint'] != '' ? (Ext['get']('spanNotBackPoint')['setStyle']('display', 'block'),
							Ext['get']('knowledgeBack')['setStyle']('display', 'block')) : Ext['get']('spanNot')['setStyle']('display', 'block') : (Ext['get']('spanHas')['setStyle']('display', 'block'),
								d == 'InteractiveQuiz' && (Ext['get']('videoquiz-continue')['setStyle']('display', 'block'),
									Ext['get']('knowledgeBack')['setStyle']('display', 'none'),
									Ext['get']('videoquiz-submit')['setStyle']('display', 'none'),
									Ext['get']('spanNot')['setStyle']('display', 'none'),
									Ext['get']('spanNotBack')['setStyle']('display', 'none'),
									Ext['get']('spanNotBackPoint')['setStyle']('display', 'none')));
					if (n['status']) {
						if (d == 'InteractiveQuiz') {
							n['rightAnswerCount'] && (Ext['get']('rightNum')['setHTML'](n['rightAnswerCount']),
								Ext['get']('rightAnswerNum')['setStyle']('display', 'inline-block'));
							var q = '', var_20220727_1 = false;
							n['testAnalysis'] ? n['showAnswer'] && n['showAnswer'] > 0x0 ? (q += '正确答案：' + n['rightContent'],
								q += '</br>解析：' + n['testAnalysis'],
								Ext['get']('viewAnalysis')['setStyle']('display', 'block'),
								var_20220727_1 = true) : n['isRight'] && (q += '解析：' + n['testAnalysis'],
									Ext['get']('viewAnalysis')['setStyle']('display', 'block'),
									var_20220727_1 = true) : n['showAnswer'] && n['showAnswer'] > 0x0 ? (Ext['get']('tkParsingDele')['setStyle']('display', 'none'),
										Ext['get']('viewAnalysis')['setStyle']('display', 'none'),
										q += '正确答案：' + n['rightContent'],
										var_20220727_1 = true) : Ext['get']('viewAnalysis')['setStyle']('display', 'none');
							if (var_20220727_1) {
								Ext['get']('tkParsing_con')['setHTML'](q),
									Ext['get']('tkParsing')['setStyle']('display', 'inline-block');
								var o = f['tkParseScrollEl'], p = $(o['dom'])['niceScroll']({
									'cursorborder': '',
									'cursorwidth': 0x6,
									'cursorcolor': '#A5A5A5',
									'boxzoom': false,
									'autohidemode': true
								});
								f['tkParseScroll'] = p;
							}
						}
						if (n['isRight'] && d == 'InteractiveQuiz') {
							if (typeof n['showTip'] != 'undefined' && n['showTip']) {
								var r = n['percent'];
								try {
									var s = Ext['getCookie']('fid', 0x0);
									r = parseInt(r),
										s == '179952' && r > 0x0 && (r = 0x5a + r * 0.1);
								} catch (err) {
									console['log'](err);
								}
								Ext['get']('spanHas')['setHTML']('<span class="spanHas fr" style=\'display:block\'><span id="InteractiveQuizTip">恭喜你，答对了！你的答题水准超过了' + r + '%的同学</span></span>');
							} else
								Ext['get']('spanHas')['setHTML']('<span class=\x22spanHas fr\x22 style=\x27display:block\x27><span id=\x22InteractiveQuizTip\x22>恭喜你，答对了！</span></span>');
						}
					}
					!var_20220727_2 && f['onerror'] && d != 'InteractiveQuiz' && f['onerror']();
					!var_20220727_2 && g['errorContinue'] == 0x1 && (e = true,
						Ext['get']('videoquiz-submit')['setStyle']('display', 'none'),
						Ext['get']('videoquiz-continue')['setStyle']('display', 'block'));
					if (var_20220727_2 && Ext['get']('videoquiz-continue')['getStyle']('display') == 'none') {
						try {
							top['configFullScreen'] && exitMediumSizeWindow();
						} catch (err) {
							console['log'](err);
						}
						f['fireEvent']('continue');
					}
				},
				'error': function () {
					Ext['get']('videoquiz-submit')['setStyle']('display', 'block'),
						Ext['get']('videoquiz-submitting')['setStyle']('display', 'none'),
						f['onerror'] && d != 'InteractiveQuiz' && f['onerror']();
				}
			});
		}
		return e;
	},
	'continueFun': function () {
		var a = this;
		a['fireEvent']('continue');
	}
});
Ext['define']('ans.videojs.VideoImg', {
	'extend': 'Ext.Component',
	'xtype': 'videoimg',
	'renderTpl': ['<div class="sp_video_pic">', '<img src="{src}" class="sp_video_img" />', '<a class=\x22jb_btn jb_btn_92 fs14 sp_video_pic_dele2\x22 style=\x22position:absolute;bottom:14px;right:20px;z-index:6;\x22 href=\x22javascript:\x22>继续学习</a>', '</div>'],
	'renderSelectors': {
		'closeEl': 'a.sp_video_pic_dele2'
	},
	'afterRender': function () {
		var a = this;
		a['callParent'](arguments);
		try {
			var var_20220715_2 = document['querySelector']('.sp_video_img');
			var_20220715_2['addEventListener']('load', function () {
				var_20220715_2['naturalWidth'] >= var_20220715_2['naturalHeight'] ? var_20220715_2['naturalWidth'] >= 0x190 && (var_20220715_2['style']['width'] = '90%',
					var_20220715_2['style']['height'] = '80%') : var_20220715_2['naturalHeight'] >= 0x190 && (var_20220715_2['style']['height'] = '90%',
						var_20220715_2['style']['width'] = '80%');
			});
		} catch (err) {
			console['log'](err);
		}
		a['el']['on']('click', function () {
			a['fireEvent']('continue');
		}),
			a['closeEl']['on']('click', function () {
				try {
					top['configFullScreen'] && exitMediumSizeWindow();
				} catch (err) {
					console['log'](err);
				}
				a['fireEvent']('continue');
			});
	}
});
Ext['define']('ans.videojs.VideoAnnotation', {
	'extend': 'Ext.Component',
	'xtype': 'videoannotation',
	'cls': 'ans-videoannotation',
	'renderTpl': ['<div class="vidNota">', '<div class="vidNota_title"><h2 class="vidNota_h2">[批注]</h2><a class="vidNota_close" href="javascript:;"></a></div>', '<div class="vidNota_con" id="pizhuScroll" tabindex="1" style="overflow: hidden; outline: none;">', '<p>{description}</p>', '</div>', '</div>'],
	'renderSelectors': {
		'closeEl': 'a.vidNota_close',
		'contentEl': 'div.vidNota_con'
	},
	'afterRender': function () {
		var c = this, b = c['contentEl'];
		c['callParent'](arguments),
			c['closeEl']['on']('click', function () {
				c['fireEvent']('continue');
			});
		var a = $(b['dom'])['niceScroll']({
			'cursorborder': '',
			'cursorwidth': 0x6,
			'cursorcolor': '#e0e0e0',
			'boxzoom': false,
			'autohidemode': true
		});
		c['scroller'] = a;
	}
});
Ext['define']('ans.videojs.VideoPpt', {
	'extend': 'Ext.Component',
	'xtype': 'videoppt',
	'cls': 'ans-videoppt',
	'width': '100%',
	'model': false,
	'renderTpl': ['<div class="sp_video_ppt_pic" id="sp_video_ppt_pic">', '<img src="{src}" class="sp_video_img" style="width: 100%;"/>', '<div style=\x22position:absolute;left:0;top:0;right:0;bottom:0;\x22></div>', '<a class=\x22sp_size_big\x22 id=\x22sp_size_big\x22 href=\x22javascript:;\x22></a>', '<a class=\x22sp_size_small\x22 href=\x22javascript:;\x22 style=\x22display:none;\x22 id=\x22sp_size_small\x22></a>', '</div>'],
	'renderSelectors': {
		'pptPicEl': 'div.sp_video_ppt_pic',
		'sizeBigEl': 'a.sp_size_big',
		'sizeSmallEl': 'a.sp_size_small'
	},
	'afterRender': function () {
		var a = this;
		a['callParent'](arguments);
		try {
			dragFn && dragFn('#sp_video_ppt_pic', '#video_html5_api');
		} catch (err) {
			console['log'](err);
		}
		a['sizeBigEl']['on']('click', function (g) {
			g['stopPropagation'](),
				a['pptPicEl']['toggleCls']('sp_ppt_pic_fullScreen'),
				Ext['get']('sp_size_big')['setStyle']('display', 'none'),
				Ext['get']('sp_size_small')['setStyle']('display', 'block');
			var b = Ext['get']('video')['getStyle']('height'), c = Ext['get']('sp_video_ppt_pic')['getStyle']('height'), f = (parseInt(b) - 0x3c - parseInt(c)) / 0x2;
			Ext['get']('sp_video_ppt_pic')['setStyle']('top', f + 'px'),
				Ext['get']('sp_video_ppt_pic')['setStyle']('left', '0');
		}),
			a['sizeSmallEl']['on']('click', function (g) {
				g['stopPropagation'](),
					a['pptPicEl']['toggleCls']('sp_ppt_pic_fullScreen'),
					Ext['get']('sp_size_big')['setStyle']('display', 'block'),
					Ext['get']('sp_size_small')['setStyle']('display', 'none'),
					Ext['get']('sp_video_ppt_pic')['setStyle']('top', '0px'),
					Ext['get']('sp_video_ppt_pic')['setStyle']('left', '0px');
			});
	}
});
Ext['define']('ans.videojs.TimelineObjects', {
	'extend': 'Ext.container.Container',
	'cls': 'ans-timelineobjects',
	'autoScroll': true,
	'hidden': true,
	'hideMode': 'visibility',
	'constructor': function (a) {
		var b = this;
		b['callParent'](arguments),
			b['bg'] = Ext['create']('ans.videojs.TimelineObjectsBg', {
				'renderTo': a['renderTo']
			}),
			b['objects'] = a['objects'] && a['objects']['sort'] ? b['sort_'](a['objects']) : [],
			b['current'] = 0x0;
	},
	'showObject': function (m, b, e) {
		var j = this, h = j['getBox'](), c = j['items']['getAt'](0x0), l, i = function () {
			l['destroy'](),
				j['hide'](),
				m['play']();
		};
		c != null && c['destroy']();
		if (e) {
			e['description'] && (e['description'] = j['htmlEncodeByRegExp'](e['description']));
			if (e['options'] && e['options']['length'] > 0x0)
				for (let var_20220902_23 = 0x0; var_20220902_23 < e['options']['length']; var_20220902_23++) {
					e['options'][var_20220902_23]['description'] && (e['options'][var_20220902_23]['description'] = j['htmlEncodeByRegExp'](e['options'][var_20220902_23]['description']));
				}
		}
		if (b == 'IMG') {
			var f = {
				'src': e['url']['replace'](/origin/, h['width'] + '_' + h['height'])
			};
			l = j['add']({
				'xtype': 'videoimg',
				'renderData': f
			});
		}
		if (b == 'QUIZ') {
			var k = function () { };
			if (e['errorBackTime'] && e['errorBackTime'] > 0x0) {
				var n = e['errorBackTime'] * 0x3c;
				k = function () {
					var o = Math['max'](m['currentTime']() - n, 0x0);
					m['switchStatus'] = true,
						m['currentTime'](o);
				}
					;
			}
			l = j['add']({
				'xtype': 'videoquiz',
				'renderData': e,
				'quizErrorReportUrl': j['quizErrorReportUrl'],
				'validationUrl2': j['validationUrl2'],
				'onerror': k
			});
		}
		if (b == 'InteractiveQuiz') {
			var k = function () { };
			if (e['errorBackTime'] && e['errorBackTime'] > 0x0) {
				var n = e['errorBackTime'] * 0x3c;
				k = function () {
					var z = Math['max'](m['currentTime']() - n, 0x0);
					m['switchStatus'] = true,
						m['currentTime'](z);
				};
			}
			if (e['errorBack'] == 0x1 && e['eBstartPoint'] != '') {
				var n = 0x0, y = e['eBstartPoint']['split'](':'), x = y['length'];
				x > 0x0 && (x == 0x1 ? n = parseInt(y[0x0]) * 0x3c : x == 0x2 && (n = parseInt(y[0x0]) * 0x3c + parseInt(y[0x1]))),
					k = function () {
						m['switchStatus'] = true,
							m['currentTime'](n);
					};
			}
			e['dtype'] = 'InteractiveQuiz',
				l = j['add']({
					'xtype': 'videoquiz',
					'renderData': e,
					'quizErrorReportUrl': j['quizErrorReportUrl'],
					'validationUrl2': j['validationUrl2'],
					'quizRightCountUrl': j['quizRightCountUrl'],
					'onerror': k
				});
		}
		if (b == 'PPT') {
			if (e['fp'] == 0x0)
				return;
			var a = e['url'];
			e['thumb'] ? a = e['thumb'] + e['pageNo'] + '.png' : a = a['replace'](/swfv2\/.*$/, 'thumb/' + e['fp'] + '.png');
			var f = {
				'src': a
			};
			l = j['add']({
				'xtype': 'videoppt',
				'renderData': f
			});
		}
		b == 'SyncAnnotationEvent' && (l = j['add']({
			'xtype': 'videoannotation',
			'renderData': e
		}));
		if (!l)
			return;
		l['on']('continue', function () {
			i();
		});
		var g = !(l['model'] === false);
		j['showModel'](g),
			g && m['pause']();
	},
	'htmlEncodeByRegExp': function (var_20220902_24) {
		var var_20220902_25 = '';
		if (var_20220902_24['length'] == 0x0)
			return '';
		return var_20220902_25 = var_20220902_24['replace'](/&/g, '&amp;'),
			var_20220902_25 = var_20220902_25['replace'](/</g, '&lt;'),
			var_20220902_25 = var_20220902_25['replace'](/>/g, '&gt;'),
			var_20220902_25 = var_20220902_25['replace'](/\s/g, '&nbsp;'),
			var_20220902_25 = var_20220902_25['replace'](/\'/g, '&#39;'),
			var_20220902_25 = var_20220902_25['replace'](/\"/g, '&quot;'),
			var_20220902_25;
	},
	'showModel': function (a) {
		try {
			top['configFullScreen'] && mediumSizeWindow();
		} catch (err) {
			console['log'](err);
		}
		var c = this;
		c['show'](),
			a ? (c['removeCls']('ans-timelineobjects-autosize'),
				c['setAutoScroll'](true),
				c['bg']['show']()) : (c['addCls']('ans-timelineobjects-autosize'),
					c['setAutoScroll'](false));
	},
	'hide': function () {
		this['callParent'](arguments),
			this['bg']['hide']['apply'](this['bg'], arguments);
	},
	'updateTime': function (a, e) {
		if (this['current'] >= this['objects']['length'] || a['scrubbing']())
			return;
		var c = this, f = c['objects'][c['current']], b = f['style'], g = f['datas'][0x0];
		e >= g['startTime'] && (c['current']++,
			setTimeout(function () {
				c['showObject'](a, b, g);
			}, 0x14));
	},
	'resetTime': function (b, e) {
		var c = this, a;
		for (a = 0x0; a < c['objects']['length']; a++) {
			var f = c['objects'][a]['datas'][0x0]['startTime'];
			if (e <= f)
				break;
		}
		c['current'] = a;
	},
	'sort_': function (a) {
		return a && a['sort'] && a['sort'](function (f, e) {
			var c = f['datas'][0x0]['startTime'], b = e['datas'][0x0]['startTime'];
			return c - b;
		});
	}
}),
	(function () {
		var Plugin = videojs['getPlugin']('plugin'), TimelineObjects = videojs['extend'](Plugin, {
			'constructor': function (player, options) {
				Plugin['call'](this, player, options);
				if (!options['url'])
					return;
				var var_20220902_26 = function (var_20220902_27) {
					try {
						var var_20220902_28 = var_20220902_27['datas'];
						if (var_20220902_28 && var_20220902_28['length'] > 0x0)
							return var_20220902_28[0x0]['startTime'];
					} catch (err) {
						console['log'](err);
					}
					return -0x1;
				}, me = this;
				player['eventPoints'] = [],
					player['otherPointTimes'] = [];
				var var_20220902_29 = [];
				if (options['begins'] && options['begins'] > 0x0) {
					var var_20220902_30 = {
						'time': options['begins'],
						'text': '片头'
					};
					var_20220902_29['push'](var_20220902_30);
				}
				if (options['ends'] && options['ends'] > 0x0) {
					var var_20220902_30 = {
						'time': options['ends'],
						'text': '片尾'
					};
					var_20220902_29['push'](var_20220902_30);
				}
				player['eventPoints'] = var_20220902_29,
					Ext['Ajax']['request']({
						'url': options['url'],
						'async': false,
						'success': function (resp) {
							if (resp['status'] != 0xc8)
								return;
							eval('var data=' + resp['responseText']);
							if (data && data['length'] > 0x0) {
								var a = [];
								for (var i = 0x0; i < data['length']; i++) {
									var b = data[i];
									if (b['style'] == 'InteractiveQuiz') {
										var c = b['datas'];
										if (c && c['length'] > 0x0)
											var d = {
												'time': c[0x0]['startTime'],
												'text': '互动测验'
											};
										a['push'](d);
									}
									var var_20220902_31 = var_20220902_26(b);
									var_20220902_31 >= 0x0 && player['otherPointTimes']['push'](var_20220902_31);
								}
								a['forEach'](function (var_20220902_32) {
									player['eventPoints']['push'](var_20220902_32);
								});
							}
							var timeline = Ext['create']('ans.videojs.TimelineObjects', {
								'renderTo': player['el_'],
								'quizErrorReportUrl': options['quizErrorReportUrl'],
								'validationUrl2': options['validationUrl2'],
								'quizRightCountUrl': options['quizRightCountUrl'],
								'objects': data
							});
							player['on']('play', function () {
								timeline['resetTime'](player, player['currentTime']());
							}),
								player['on']('seekend', function () {
									timeline['resetTime'](player, player['currentTime']());
								}),
								player['on']('timeupdate', function () {
									!player['paused']() && timeline['updateTime'](player, player['currentTime']());
								});
						}
					});
			}
		});
		videojs['registerPlugin']('timelineObjects', TimelineObjects);
	}()),
	(function () {
		var Plugin = videojs['getPlugin']('plugin'), Marker = videojs['extend'](Plugin, {
			'constructor': function (player, options) {
				Plugin['call'](this, player, options);
				if (!options['url'])
					return;
				var me = this;
				Ext['Ajax']['request']({
					'url': options['url'],
					'async': false,
					'success': function (resp) {
						if (resp['status'] != 0xc8)
							return;
						eval('var data=' + resp['responseText']);
						if (!data['status'])
							return;
						var videoPlayer = videojs('video');
						if (videoPlayer && typeof videoPlayer['markers'] === 'function') {
							var var_20220324_3 = player['eventPoints'];
							var_20220324_3['push']['apply'](var_20220324_3, data['list']),
								videoPlayer['markers']({
									'markerTip': {
										'display': true,
										'text': function (marker) {
											return marker['text'];
										}
									},
									'markers': var_20220324_3,
									'onMarkerClick': function (marker) {
										if (options['ff'] != 0x1)
											return false;
										var key = $(this)['data']('marker-key');
										return player['currentTime'](marker['time']),
											false;
									}
								});
						}
						if (data['list'] && data['list']['length'] > 0x0) {
							var var_20220324_4 = [], var_20220324_5 = {};
							for (var i = 0x0; i < data['list']['length']; i++) {
								var var_20220324_6 = data['list'][i], var_20220324_7 = var_20220324_6['text'];
								if (!var_20220324_5[var_20220324_7]) {
									var var_20220324_8 = [];
									var_20220324_8['push'](var_20220324_6),
										var_20220324_5[var_20220324_7] = var_20220324_8,
										var_20220324_4['push'](var_20220324_7);
								} else {
									var var_20220324_8 = var_20220324_5[var_20220324_7];
									var_20220324_8['push'](var_20220324_6),
										var_20220324_5[var_20220324_7] = var_20220324_8;
								}
							}
							function func_20220324_1(var_20220324_9) {
								var var_20220324_10 = '<div class="zsCloud_box"><h2 class="zsCloud_seltime">选择时间</h2><div class="zsCloud_div"><div class="zsCloud_div_list">';
								for (var i = 0x0; i < var_20220324_9['length']; i++) {
									var var_20220324_11 = var_20220324_9[i], var_20220324_12 = Ext['fly'](topicContent['elements'][0x0])['select']('.topicId' + var_20220324_11['topicid'] + ':not(.markertime)'), var_20220324_13 = videojs['formatTime'](var_20220324_11['time']);
									var_20220324_12 && var_20220324_12['elements'][0x0] && var_20220324_12['elements'][0x0]['parentElement']['remove'](),
										var_20220324_10 += '<div class="zsCloud_item topicId' + var_20220324_11['topicid'] + '\x22 data-marker-time=\x22' + var_20220324_11['time'] + '\x22 title=\x22' + var_20220324_13 + '\x22 onclick=\x22markersPlayer(this)\x22>' + var_20220324_13 + '</div>';
								}
								return var_20220324_10 += '</div></div></div>',
									var_20220324_10;
							}
							Ext['select']('.zsCloud')['setStyle']('display', 'block');
							var topicContent = Ext['select']('.zsCloud_ul');
							if (topicContent && topicContent['elements'][0x0]) {
								var insertLocaltion;
								for (var i = 0x0; i < var_20220324_4['length']; i++) {
									var var_20220324_14 = var_20220324_4[i], var_20220324_15 = var_20220324_5[var_20220324_14], markerHtml = '';
									if (var_20220324_15) {
										if (var_20220324_15['length'] == 0x1) {
											var marker = var_20220324_15[0x0], topic = Ext['fly'](topicContent['elements'][0x0])['select']('.topicId' + marker['topicid'] + ':not(.markertime)'), title = videojs['formatTime'](marker['time']);
											topic && topic['elements'][0x0] && topic['elements'][0x0]['parentElement']['remove'](),
												markerHtml = '<li><span class=\'topicId' + marker['topicid'] + ' markertime\' data-marker-time=\'' + marker['time'] + '\' title=\'' + title + '\x27 onclick=\x27markersPlayer(this)\x27>' + marker['text'] + '</span></li>';
										} else
											markerHtml = '<li class="zsCloud_select"><span class="zsCloud_span">' + var_20220324_14 + '</span>',
												var_20220324_15 && var_20220324_15['length'] > 0x0 ? markerHtml += func_20220324_1(var_20220324_15) : markerHtml += '</li>';
									}
									insertLocaltion ? insertLocaltion = Ext['DomHelper']['insertHtml']('afterEnd', insertLocaltion['elements'][0x0], markerHtml) : insertLocaltion = Ext['DomHelper']['insertHtml']('afterBegin', topicContent['elements'][0x0], markerHtml),
										insertLocaltion = Ext['fly'](insertLocaltion)['select']('');
								}
							}
							options['videoTopicCloud'] && options['videoTopicCloud'] == 0x1 && (Ext['select']('.zsCloud_down')['setStyle']('display', 'block'),
								Ext['select']('.zsCloud_body')['setStyle']('display', 'block'));
						}
						var dataMap = new Map(), wordList = new Array();
						if (data['list'] && data['list']['length'] > 0x0)
							for (var i = 0x0; i < data['list']['length']; i++) {
								var topicid = data['list'][i]['topicid'], item = dataMap['get'](topicid);
								!item && (item = {},
									item['text'] = data['list'][i]['text'],
									item['time'] = data['list'][i]['time'],
									item['topicid'] = data['list'][i]['topicid'],
									item['weight'] = 0x0,
									item['html'] = {
										'data-marker-time': data['list'][i]['time'],
										'onclick': 'markersPlayer(this)'
									},
									dataMap['set'](topicid, item),
									wordList['push'](item)),
									item['weight'] += 0x1;
							}
						$(function () {
							wordList['length'] != 0x0 && $('#word_cloud')['jQCloud'](wordList);
							function func_20220324_2(var_20220324_16) {
								$(var_20220324_16)['niceScroll']({
									'cursorborder': '',
									'cursorwidth': 0x8,
									'cursorcolor': '#DADFE6',
									'boxzoom': false,
									'autohidemode': true
								}),
									setInterval(function () {
										$(var_20220324_16)['getNiceScroll']()['resize']();
									}, 0x12c);
							}
							$('.zsCloud_box')['each'](function (var_20220324_17) {
								$(this)['find']('.zsCloud_div')['attr']('id', 'zsCloud_div_' + var_20220324_17),
									func_20220324_2('#zsCloud_div_' + var_20220324_17);
							});
						}),
							$('.zsCloud_down')['click'](function () {
								var con = $('.zsCloud_body');
								con['is'](':visible') ? (con['hide'](),
									$(this)['addClass']('zsCloud_up'),
									$(this)['text']('展开')) : (con['show'](),
										$(this)['removeClass']('zsCloud_up'),
										$(this)['text']('收起'));
							});
					}
				});
			}
		});
		videojs['registerPlugin']('marker', Marker);
	}()),
	(function () {
		var Plugin = videojs['getPlugin']('plugin'), Subtitle = videojs['extend'](Plugin, {
			'constructor': function (player, options) {
				Plugin['call'](this, player, options);
				var me = this, subtitleUrl = options['subtitleUrl'], toVtt = function (srt) {
					var m = srt['match'](/support\/(\w+).\w+/);
					if (m)
						return ServerHosts['PARENT_HOST'] + '/ananas/video-editor/sub?objectid=' + m[0x1];
				}, addSub = function (name, src, isdefault) {
					player['addRemoteTextTrack']({
						'kind': 'subtitles',
						'srclang': 'cn',
						'label': name,
						'src': src,
						'default': isdefault
					}, true);
				};
				player['ready'](function () {
					subtitleUrl && Ext['Ajax']['request']({
						'url': subtitleUrl,
						'success': function (resp) {
							if (resp['status'] != 0xc8)
								return;
							eval('var subs=' + resp['responseText']);
							var index = 0x0, enIndex = 0x0;
							subs['length'] > 0x0 && Ext['each'](subs, function (o) {
								options['translate'] == 0x1 && o['name'] == 'English' ? (o['selected'] = true,
									enIndex = index) : o['selected'] = false,
									addSub(o['name'], toVtt(o['url']), o['selected']),
									index++;
							}),
								options['translate'] == 0x1 && (Ext['select']('.vjs-subs-caps-button .vjs-icon-placeholder')['setHTML']('翻译'),
									Ext['select']('.vjs-subs-caps-button .vjs-icon-placeholder')['addCls']('vjs-hide-content')),
								setTimeout(function () {
									var tracks = player['textTracks']();
									options['translate'] == 0x1 ? tracks && tracks[enIndex] ? tracks[enIndex]['mode'] = 'showing' : tracks && tracks[0x0] && (tracks[0x0]['mode'] = 'showing') : tracks && tracks[0x0] && (tracks[0x0]['mode'] = 'showing');
								}, 0x1f4);
						}
					});
					var settings = player['textTrackSettings'];
					settings['setValues']({
						'backgroundColor': '#000',
						'backgroundOpacity': '0',
						'edgeStyle': 'uniform'
					}),
						settings['updateDisplay']();
				});
			}
		});
		videojs['registerPlugin']('subtitle', Subtitle);
	}()),
	Ext['define']('ans.videojs.ErrorDisplay', {
		'extend': 'Ext.Component',
		'xtype': 'vjserrdisplay',
		'cls': 'ans-vjserrdisplay',
		'renderTpl': ['<div class="ans-vjserrdisplay-title">{errorMsg}</div>', '<ul class="ans-vjserrdisplay-opts">', '您可以尝试其他线路:', '<tpl for="playlines">', '<li class="ans-vjserrdisplay-opt"><label>', '<input type="radio" name="ans-vjserrdisplay-opt" {[xindex-1 === parent.selectedIndex ? "checked disabled":""]}>', '{label}', '</label></li>', '</tpl>', '</ul>'],
		'renderSelectors': {
			'errorMsgEl': 'div.ans-vjserrdisplay-title'
		},
		'afterRender': function () {
			var b = this;
			b['callParent'](arguments);
			var a = Ext['query']('input', b['el']['dom']);
			Ext['each'](a, function (f, e) {
				Ext['fly'](f)['on']('click', function () {
					b['onSelected'](e);
				});
			});
			try {
				typeof createVideoTask === 'function' ? createVideoTask() : console['log']('createVideoTask函数不存在！');
			} catch (c) { }
		},
		'setErrorMsg': function (a) {
			Ext['fly'](this['errorMsgEl'])['setHTML'](a);
		}
	}),
	Ext['define']('ans.videojs.ErrorNote', {
		'extend': 'Ext.Component',
		'cls': 'ans-vjserrdisplay',
		'renderTpl': ['<div class=\x22ans-vjserrdisplay-title\x22>播放出现异常。</div>']
	}),
	(function () {
		var b = videojs['getComponent']('ErrorDisplay'), a = videojs['extend'](b, {
			'constructor': function (e, c) {
				b['call'](this, e, c);
			},
			'colse': function () {
				b['prototype']['colse']['call'](this),
					me['ansErrorDisplay'] && (me['ansErrorDisplay']['destroy'](),
						me['ansErrorDisplay'] = null);
			},
			'fill': function () {
				b['prototype']['fill']['call'](this);
				var g = this, i = g['player_'], h = i['options_']['playlines'], e = Ext['query']('.vjs-modal-dialog-content', g['el_'])[0x0];
				g['ansErrorDisplay'] && (g['ansErrorDisplay']['destroy'](),
					delete g['ansErrorDisplay']);
				if (!i['selectCDN'] || !h) {
					g['ansErrorDisplay'] = Ext['create']('ans.videojs.ErrorNote', {
						'renderTo': g['el_']
					});
					return;
				}
				var f = i['currentPlayline'](), c = 0x0;
				Ext['each'](h, function (k, j) {
					f == k && (c = j);
				}),
					g['ansErrorDisplay'] = Ext['create']('ans.videojs.ErrorDisplay', {
						'renderTo': g['el_'],
						'onSelected': function (j) {
							i['selectCDN'](j),
								g['close']();
						},
						'renderData': {
							'playlines': h,
							'errorMsg': g['content'](),
							'selectedIndex': c
						}
					});
			}
		});
		videojs['registerComponent']('ErrorDisplay', a);
	}()),
	(function () {
		var a = null;
		typeof window['videojs'] === 'undefined' && typeof require === 'function' ? a = require('video.js') : a = window['videojs'],
			function (i, h) {
				var g = {}, c, k = {}, b = {};
				function f(p, o, n, q) {
					k = {
						'label': n,
						'sources': o
					};
					if (typeof q === 'function')
						return q(p, o, n);
					return p['src'](o['map'](function (r) {
						return {
							'src': r['src'],
							'type': r['type'],
							'res': r['res']
						};
					})),
						p;
				}
				var l = h['getComponent']('MenuItem'), m = h['extend'](l, {
					'constructor': function (p, o, n, q) {
						this['onClickListener'] = n,
							this['label'] = q,
							l['call'](this, p, o),
							this['src'] = o['src'],
							this['on']('click', this['onClick']),
							this['on']('touchstart', this['onClick']),
							o['initialySelected'] && (this['showAsLabel'](),
								this['selected'](true),
								this['addClass']('vjs-selected'));
					},
					'showAsLabel': function () {
						this['label'] && (this['label']['innerHTML'] = this['options_']['label']);
					},
					'onClick': function (q) {
						this['onClickListener'](this);
						var p = this['player_']['currentTime'](), n = this['player_']['paused']();
						this['showAsLabel'](),
							this['addClass']('vjs-selected');
						!n && this['player_']['bigPlayButton']['hide']();
						typeof q !== 'function' && typeof this['options_']['customSourcePicker'] === 'function' && (q = this['options_']['customSourcePicker']);
						var o = 'loadeddata';
						this['player_']['techName_'] !== 'Youtube' && this['player_']['preload']() === 'none' && this['player_']['techName_'] !== 'Flash' && (o = 'timeupdate'),
							f(this['player_'], this['src'], this['options_']['label'], q)['one'](o, function () {
								var r = this['player_'];
								r['switchStatus'] = true,
									r['currentTime'](p),
									!n && r['play'](),
									r['trigger']('resolutionchange');
							});
					}
				});
				h['registerComponent']('ResolutionMenuItem', m);
				var j = h['getComponent']('MenuButton'), e = h['extend'](j, {
					'constructor': function (q, o, r, n) {
						this['sources'] = o['sources'],
							this['label'] = n,
							this['label']['innerHTML'] = o['initialySelectedLabel'],
							j['call'](this, q, o, r),
							this['controlText']('Quality');
						if (r['dynamicLabel'])
							this['el']()['appendChild'](n);
						else {
							var p = document['createElement']('span');
							h['dom']['addClass'](p, 'vjs-resolution-button-staticlabel'),
								this['el']()['appendChild'](p);
						}
					},
					'createItems': function () {
						var o = [], q = this['sources'] && this['sources']['label'] || {}, p = function (r) {
							o['map'](function (s) {
								s['selected'](s === r),
									s['removeClass']('vjs-selected');
							});
						};
						for (var n in q) {
							q['hasOwnProperty'](n) && (o['push'](new m(this['player_'], {
								'label': n,
								'src': q[n],
								'initialySelected': n === this['options_']['initialySelectedLabel'],
								'customSourcePicker': this['options_']['customSourcePicker']
							}, p, this['label'])),
								b[n] = o[o['length'] - 0x1]);
						}
						return o;
					}
				});
				c = function (w) {
					var p = h['mergeOptions'](g, w), u = this, t = document['createElement']('span'), s = {};
					h['dom']['addClass'](t, 'vjs-resolution-button-label'),
						u['updateSrc'] = function (y) {
							if (!y)
								return u['src']();
							u['controlBar']['resolutionSwitcher'] && (u['controlBar']['resolutionSwitcher']['dispose'](),
								delete u['controlBar']['resolutionSwitcher']);
							y = y['sort'](r),
								s = q(y);
							var z = o(s, y), x = new e(u, {
								'sources': s,
								'initialySelectedLabel': z['label'],
								'initialySelectedRes': z['res'],
								'customSourcePicker': p['customSourcePicker']
							}, p, t);
							return h['dom']['addClass'](x['el'](), 'vjs-resolution-button'),
								u['controlBar']['resolutionSwitcher'] = u['controlBar']['el_']['insertBefore'](x['el_'], u['controlBar']['getChild']('fullscreenToggle')['el_']),
								u['controlBar']['resolutionSwitcher']['dispose'] = function () {
									this['parentNode']['removeChild'](this);
								},
								f(u, z['sources'], z['label'], p['customSourcePicker']);
						},
						u['currentResolution'] = function (x, y) {
							if (x == null)
								return k;
							return b[x] != null && b[x]['onClick'](y),
								u;
						},
						u['getGroupedSrc'] = function () {
							return s;
						}
						;
					function r(y, x) {
						if (!y['res'] || !x['res'])
							return 0x0;
						return +x['res'] - +y['res'];
					}
					function q(y) {
						var x = {
							'label': {},
							'res': {},
							'type': {}
						};
						return y['map'](function (z) {
							n(x, 'label', z),
								n(x, 'res', z),
								n(x, 'type', z),
								v(x, 'label', z),
								v(x, 'res', z),
								v(x, 'type', z);
						}),
							x;
					}
					function n(x, y, z) {
						x[y][z[y]] == null && (x[y][z[y]] = []);
					}
					function v(x, y, z) {
						x[y][z[y]]['push'](z);
					}
					function o(z, A) {
						var y = p['default'], x = '';
						return y === 'high' ? (y = A[0x0]['res'],
							x = A[0x0]['label']) : y === 'low' || y == null || !z['res'][y] ? (y = A[A['length'] - 0x1]['res'],
								x = A[A['length'] - 0x1]['label']) : z['res'][y] && (x = z['res'][y][0x0]['label']),
						{
							'res': y,
							'label': x,
							'sources': z['res'][y]
						};
					}
					u['ready'](function () {
						u['options_']['sources']['length'] > 0x0 && u['setTimeout'](function () {
							u['updateSrc'](u['options_']['sources']);
						}, 0x1);
					});
				},
					h['registerPlugin']('videoJsResolutionSwitcher', c);
			}(window, a);
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
			var l = h['getComponent']('ResolutionMenuItem'), e = h['extend'](l, {
				'onClick': function (q) {
					this['onClickListener'](this);
					var p = this['player_']['currentTime'](), m = this['player_']['paused']();
					this['showAsLabel'](),
						this['addClass']('vjs-selected');
					!m && this['player_']['bigPlayButton']['hide']();
					typeof q !== 'function' && typeof this['options_']['customSourcePicker'] === 'function' && (q = this['options_']['customSourcePicker']);
					var o = 'loadeddata';
					this['player_']['techName_'] !== 'Youtube' && this['player_']['preload']() === 'none' && this['player_']['techName_'] !== 'Flash' && (o = 'timeupdate');
					var n = c(this['player_'], this['src'], this['options_']['label'], q);
					n && n['one'](o, function () {
						n['switchStatus'] = true,
							n['currentTime'](p),
							!m && n['play'](),
							n['trigger']('playlinechange');
					});
				}
			}), j = h['getComponent']('MenuButton'), k = h['extend'](j, {
				'constructor': function (p, n, q, m) {
					this['playlines'] = n['playlines'],
						this['label'] = m,
						this['label']['innerHTML'] = n['initialySelectedLabel'],
						j['call'](this, p, n, q),
						this['controlText']('Playline');
					if (q['dynamicLabel'])
						this['el']()['appendChild'](m);
					else {
						var o = document['createElement']('span');
						h['addClass'](o, 'vjs-resolution-button-staticlabel'),
							this['el']()['appendChild'](o);
					}
				},
				'createItems': function () {
					var o = [], q = this['playlines'] || [], p = function (r) {
						o['map'](function (s) {
							s['selected'](s === r),
								s['removeClass']('vjs-selected');
						});
					};
					for (var n = 0x0; n < q['length']; n++) {
						var m = q[n]['label'];
						o['push'](new e(this['player_'], {
							'label': m,
							'src': q[n],
							'initialySelected': m === this['options_']['initialySelectedLabel'],
							'customSourcePicker': this['options_']['customSourcePicker']
						}, p, this['label'])),
							a[m] = o[o['length'] - 0x1];
					}
					return o;
				}
			});
			b = function (o) {
				var q = h['mergeOptions'](f, o), p = this, n = document['createElement']('span'), r = p['options_']['playlines'];
				h['dom']['addClass'](n, 'vjs-resolution-button-label');
				var m = new k(p, {
					'playlines': r,
					'initialySelectedLabel': r[0x0]['label'],
					'initialySelectedUrl': r[0x0]['url'],
					'customSourcePicker': q['customSourcePicker']
				}, q, n);
				h['dom']['addClass'](m['el'](), 'vjs-resolution-button'),
					h['dom']['addClass'](m['el'](), 'vjs-playline-button'),
					m['show'](),
					p['selectCDN'] = function (s) {
						m['items'][s]['onClick'](q['customSourcePicker']),
							p['play']();
					},
					r['length'] > 0x0 && (g = r[0x0]),
					p['currentPlayline'] = function () {
						return g;
					},
					p['ready'](function () {
						p['controlBar']['videoJsPlayLine'] = p['controlBar']['el_']['insertBefore'](m['el_'], p['controlBar']['getChild']('fullscreenToggle')['el_']),
							p['controlBar']['videoJsPlayLine']['dispose'] = function () {
								this['parentNode']['removeChild'](this);
							}
							;
					});
			},
				h['registerPlugin']('videoJsPlayLine', b);
		}(window, videojs));
	}()),
	Ext['define']('ans.AudioJs', {
		'videoJs': null,
		'mixins': {
			'observable': 'Ext.util.Observable'
		},
		'constructor': function (a) {
			a = a || {};
			var c = this;
			c['addEvents'](['seekstart']),
				c['mixins']['observable']['constructor']['call'](c, a);
			var b = videojs(a['videojs'], c['params2VideoOpt'](a['params']), function () { });
			Ext['fly'](a['videojs'])['on']('contextmenu', function (f) {
				f['preventDefault']();
			}),
				Ext['fly'](a['videojs'])['on']('keydown', function (f) {
					(f['keyCode'] == 0x20 || f['keyCode'] == 0x25 || f['keyCode'] == 0x27) && f['preventDefault'](),
						f['keyCode'] == 0x20 && (b['paused']() ? b['play']() : b['pause']());
				});
		},
		'params2VideoOpt': function (params) {
			var sources = [];
			!params['rootPath'] && (params['rootPath'] = '');
			params['http'] && sources['push']({
				'src': params['http'],
				'type': 'audio/mp3'
			});
			var logFunc = function (player, url, callback) {
				var me = this;
				!me['logCount'] && (me['logCount'] = 0x0),
					videojs['xhr']({
						'uri': url,
						'headers': {
							'Content-Type': 'application/json'
						}
					}, function (err, resp) {
						me['logCount']++;
						if (resp['statusCode'] == 0xc8) {
							me['logCount'] = 0x0;
							if (resp['body']['indexOf']('isPassed') < 0x0) {
								window['parent'] && window['parent']['location']['reload']();
								return;
							}
							eval('var d=' + resp['body']);
							d['isPassed'] && callback();
							return;
						}
						me['logCount'] >= 0x4 && (me['logCount'] = 0x0,
							player['pause'](),
							resp['statusCode'] != 0x0 ? alert('服务繁忙，不能保证您能否正常完成任务，请您稍后继续...(e:' + resp['statusCode'] + ')') : alert('您的网络不稳定，请您稍后继续...'));
					});
			}, sendLog_ = function (player, isdrag, currentTimeSec, callback) {
				if (!params['reportUrl'])
					return;
				var format = '[{0}][{1}][{2}][{3}][{4}][{5}][{6}][{7}]', clipTime = (params['startTime'] || '0') + '_' + (params['endTime'] || params['duration']), var_20220210_1 = 0x0, var_20220210_2;
				currentTimeSec['toString']()['indexOf']('-') != -0x1 ? (var_20220210_2 = currentTimeSec['split']('-'),
					var_20220210_2['length'] == 0x2 && (var_20220210_1 = parseInt(var_20220210_2[0x1]) * 0x3e8)) : var_20220210_1 = currentTimeSec * 0x3e8;
				if (var_20220210_1 == params['duration'] * 0x3e8 && isdrag == 0x2)
					return;
				var enc = Ext['String']['format'](format, params['clazzId'], params['userid'], params['jobid'] ? params['jobid'] : '', params['objectId'], var_20220210_1, 'd_yHJ!$pdA~5', params['duration'] * 0x3e8, clipTime), rurl = [params['reportUrl'], '/', params['dtoken'], '?clazzId=', params['clazzId'], '&playingTime=', currentTimeSec, '&duration=', params['duration'], '&clipTime=', clipTime, '&objectId=', params['objectId'], '&otherInfo=', params['otherInfo'], '&jobid=', params['jobid'], '&userid=', params['userid'], '&isdrag=', isdrag, '&view=pc', '&enc=', md5(enc), '&rt=', params['rt'], '&dtype=Audio', '&_t=', new Date()['getTime']()]['join']('');
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
						'enableFastForward': params['enableFastForward'],
						'isSendLog': true,
						'reportTimeInterval': params['reportTimeInterval'],
						'sendLog': function (player, evt, sec) {
							if (this['isSendLog'] !== true)
								return;
							var isdrag = 0x0;
							switch (evt) {
								case 'play':
									isdrag = 0x3;
									break;
								case 'pause':
									isdrag = 0x2;
									break;
								case 'ended':
									isdrag = 0x4;
									break;
							}
							sendLog_(player, isdrag, sec, function () {
								window['proxy_completed'] && window['proxy_completed']();
							});
						}
					}
				}
			};
		}
	});
Ext['define']('ans.videojs.AudioNote', {
	'extend': 'Ext.Component',
	'cls': 'ans-audionote'
});
(function () {
	var b = videojs['getPlugin']('plugin'), a = videojs['extend'](b, {
		'constructor': function (e, c) {
			b['call'](this, e, c),
				Ext['create']('ans.videojs.AudioNote', {
					'renderTo': e['el_'],
					'html': c['title']
				});
		}
	});
	videojs['registerPlugin']('audioNote', a);
}());
