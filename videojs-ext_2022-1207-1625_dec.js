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
		c.eventCount = 0x0;
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
		var a = b.params && b.params.doublespeed ? 0x2 : 0x1, i = true;
		c.on('ratechange', function () {
			var h = c.playbackRate();
			h > a ? (c.pause(), c.playbackRate(0x1)) : Ext.setCookie('doubleSpeedValue', h);
			if (typeof aplus_queue != 'undefined' && !i) {
				var j = b.params && b.params.aplus_video_id ? b.params.aplus_video_id : '', k = b.params && b.params.aplus_resource_id ? b.params.aplus_resource_id : '', l = b.params && b.params.knowledgename ? b.params.knowledgename : '', m = b.params && b.params.coursename ? b.params.coursename : '';
				aplus_queue.push({
					'action': 'aplus.record',
					'arguments': ['video_speed_click', 'CLK', {
						'video_name': l,
						'video_id': j,
						'resource_id': k,
						'resource_name': m,
						'speed_type': c.playbackRate()
					}]
				});
			}
			i = false;
		}),
			c.on('play', function () {
				try {
					$('.video-js').focus();
					if (b.params && b.params.doublespeed && parseInt(b.params.doublespeed) === 0x1) {
						var var_20220727_7 = Ext.getCookie('doubleSpeedValue', 0x1);
						c.playbackRate(var_20220727_7);
					}
					$('.vjs-playback-rate').removeClass('vjs-hidden'),
						$('.vjs-playback-rate .vjs-menu .vjs-menu-content li').length == 0x0 && $('.vjs-playback-rate-value').css('opacity', '0.4');
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
		var disableLog = !Ext.isChaoxing && (Ext.isIos || Ext.isAndroid), logFunc = function (player, url, _jobid, callback) {
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
						} else {
							!_jobid && callback();
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
			logFunc(player, rurl, params.jobid, callback);
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
						var r = player.currentPlayline();
						player.src(sources.map(function (src) {
							return makeSource(src, r);
						}));
						if (typeof aplus_queue != 'undefined') {
							function func_20221104_1() {
								var var_20221104_1 = '';
								for (var i = 0x1; i <= 0x20; i++) {
									var var_20221104_2 = Math.floor(Math.random() * 0x10).toString(0x10);
									var_20221104_1 += var_20221104_2,
										(i == 0x8 || i == 0xc || i == 0x10 || i == 0x14) && (var_20221104_1 += '-');
								}
								return var_20221104_1;
							}
							typeof aplus_queue != 'undefined' && aplus_queue.push({
								'action': 'aplus.record',
								'arguments': ['video_positive_load', 'CLK', {
									'video_name': params.knowledgename || '',
									'video_id': params.aplus_video_id || '',
									'resource_id': params.aplus_resource_id || '',
									'resource_name': params.coursename || '',
									'video_duration': params.duration,
									'request_id': func_20221104_1()
								}]
							});
						}
						return player;
					}
				},
				'videoJsPlayLine': {
					'dynamicLabel': true,
					'customSourcePicker': function (player, r, label) {
						var src = player.currentResolution().sources[0x0];
						return player.src(makeSource(src, r)),
							player;
					}
				},
				'studyControl': {
					'enableSwitchWindow': params.enableSwitchWindow
				},
				'seekBarControl': {
					'headOffset': params.headOffset,
					'enableFastForward': params.enableFastForward,
					'isSendLog': !!parent.AttachmentSetting && params.control,
					'reportTimeInterval': params.reportTimeInterval,
					'isShowDanmu': params.danmaku,
					'chapterCapture': params.chapterCapture || 0x0,
					'captureInterval': params.captureInterval || 0x258,
					'chapterCollectionType': params.chapterCollectionType || 0x0,
					'startCapture': params.startCapture,
					'endCapture': params.endCapture,
					'playAginCapture': params.playAginCapture,
					'playingCapture': params.playingCapture,
					'playingLoopCapture': params.playingLoopCapture,
					'duration': params.duration,
					'isSupportFace': params.isSupportFace || false,
					'isShowFaceCollection': params.isShowFaceCollection,
					'jumpTimePointList': params.jumpTimePointList,
					'attachmentId': params.aId,
					'aplusVideoId': params.aplus_video_id || '',
					'aplusResourseId': params.aplus_resource_id || '',
					'aplusVideoName': params.knowledgename || '',
					'aplusResourceName': params.coursename || '',
					'sourcePlayer': 'video',
					'sendLog': function (player, evt, sec, var_20220324_1) {
						if (this.isSendLog !== true)
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
								isdrag === 0x4 && typeof var_20220324_1 != 'undefined' && (var_20220324_1.sendDataLog('ended'),
									var_20220324_1.playNextVideo(var_20220324_2.attachmentId));
							} catch (e) {
								console.log(e);
							}
							window.proxy_completed && window.proxy_completed();
						});
					}
				},
				'timelineObjects': {
					'begins': params.begins,
					'ends': params.ends,
					'url': params.rootPath + '/richvideo/initdatawithviewerV2?mid=' + params.mid + '&cpi=' + params.cpi + '&classid=' + params.clazzId,
					'quizErrorReportUrl': params.rootPath + '/question/addquestionerror?classid=' + params.clazzId + '&cpi=' + params.cpi,
					'validationUrl2': params.rootPath + '/question/quiz-validation?classid=' + params.clazzId + '&cpi=' + var_20220727_6 + '&objectid=' + params.objectId,
					'quizRightCountUrl': params.rootPath + '/question/quiz-rightcount?classid=' + params.clazzId + '&cpi=' + var_20220727_6
				},
				'customIframePlugin': {
					'eventArray': params.eventArray,
					'supportHeartbeat': params.supportHeartbeat,
					'courseid': params.courseid,
					'clazzId': params.clazzId,
					'userId': params.userid,
					'cookieFid': params.cookieFid,
					'knowledgeid': params.knowledgeid,
					'objectid': params.objectid,
					'playTime': params.playTime,
					'videoEnc': params.videoEnc,
					'headOffset': params.headOffset
				},
				'subtitle': {
					'translate': params.chapterVideoTranslate,
					'subtitleUrl': params.rootPath + '/richvideo/allsubtitle?mid=' + params.mid + '&objectid=' + params.objectId + '&courseid=' + params.courseid,
					'subtitle': params.rootPath + '/ananas/video-editor/sub?objectid=' + params.subobjectid
				},
				'marker': {
					'url': !params.isNotMark ? params.rootPath + '/ananas/getpoints?courseid=' + params.courseid + '&mid=' + params.mid : '',
					'ff': params.enableFastForward,
					'videoTopicCloud': params.videoTopicCloud
				}
			}
		};
	}
});
(Object.defineProperty(ans.VideoJs.prototype, 'params2VideoOpt', {
	'configurable': false,
	'writable': false
}),
	Object.freeze(ans.VideoJs.prototype.params2VideoOpt));
(function () {
	var b = videojs.getPlugin('plugin'), a = videojs.extend(b, {
		'constructor': function (f, c) {
			b.call(this, f, c);
			var g = this, j = c.mouseElTarget, i = 0x1;
			c.enableSwitchWindow !== 0x1 && (i = 0x0);
			if (!j)
				try {
					j = window.top ? window.top : window.document;
				} catch (h) {
					j = window.parent ? window.parent : window.document;
				}
			Ext.fly(j).on('mouseout', function (k) {
				k = k ? k : window.event;
				var l = k.relatedTarget || k.toElement;
				!l && (i != 0x1 && f.pause());
			}),
				g.singleton(f);
		},
		'singleton': function (c) {
			var f = this, e = parseInt(Math.random() * 0x98967f);
			c.on('play', function () {
				Ext.setCookie('videojs_id', e);
			}),
				c.setInterval(function () {
					var g = Ext.getCookie('videojs_id');
					typeof g != 'undefined' && g != e && c.pause();
				}, 0x3e8);
		}
	});
	videojs.registerPlugin('studyControl', a);
}());
(function () {
	var a = videojs.getComponent('SeekBar'), b = videojs.extend(a, {
		'constructor': function (e, c) {
			a.call(this, e, c);
			var f = this;
			e.ignorePause = false,
				e.seekLog = false,
				e.disableSeek = function (g) {
					f.disableSeek(g);
				},
				e.onlyBackward = function (g) {
					f.onlyBackward(g);
				},
				e.getSeekBar = function () {
					return f;
				},
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
				f.maxPercent = 0x0,
				e.on('timeupdate', function () {
					f.maxPercent = Math.max(f.getPercent(), f.maxPercent);
				});
		},
		'getCurrentTime_': function () {
			return this.player_.currentTime();
		},
		'getMaxPercent': function () {
			return this.maxPercent;
		},
		'isBackward': function (c) {
			return this.maxPercent > this.calculateDistance(c);
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
			a.prototype.handleMouseMove.call(this, c);
		},
		'handleMouseUp': function (c) {
			if (this._disableSeek === true)
				return;
			if (this._onlyBackward) {
				if (!this.isBackward(c))
					return;
			}
			a.prototype.handleMouseUp.call(this, c);
		},
		'disableSeek': function (c) {
			var e = this;
			e._disableSeek = c !== false,
				e._disableSeek ? e.disable() : e.enable();
		},
		'onlyBackward': function (e) {
			var c = this;
			c._onlyBackward = e !== false;
		}
	});
	videojs.registerComponent('SeekBar', b);
}());
(function () {
	var a = videojs.getPlugin('plugin'), b = videojs.extend(a, {
		'constructor': function (g, f) {
			a.call(this, g, f);
			var h = this;
			h.firstClick = true;
			h.isSendLog_ = !!f.isSendLog;
			h.isShowDanmu_ = !!f.isShowDanmu;
			h.damuLastGetTime = 0x0;
			h.firstPlay = true;
			h.firstPlayFace = true;
			h.pausePlayFace = false;
			h.playingFace = false;
			h.playingFaceTime = 0x0;
			h.chapterCapture = f.chapterCapture || 0x0;
			h.captureInterval = f.captureInterval * 0x3c || 0x258;
			h.chapterCollectionType = f.chapterCollectionType || 0x0;
			h.isSupportFace = f.isSupportFace;
			h.isAlertTip = false;
			h.startCapture = f.startCapture;
			h.endCapture = f.endCapture;
			h.playAginCapture = f.playAginCapture;
			h.playingCapture = f.playingCapture;
			h.playingLoopCapture = f.playingLoopCapture;
			h.isShowFaceCollection = f.isShowFaceCollection;
			h.duration = f.duration;
			h.jumpTimePointList = f.jumpTimePointList;
			h.loopCaptureInterval = Math.floor(Math.random() * (parseInt(h.duration) - 0x0) + 0x1);
			h.attachmentId = f.attachmentId;
			h.aplusVideoId = f.aplusVideoId;
			h.aplusResourseId = f.aplusResourseId;
			h.aplusVideoName = f.aplusVideoName;
			h.aplusResourceName = f.aplusResourceName,
				g.on('ready', function () {
					f.enableFastForward != 0x1 && g.disableSeek();
				});
			!f.sendLog && (f.sendLog = function () { }
			);
			f.headOffset && g.currentTime(f.headOffset);
			function func_20221104_2() {
				typeof aplus_queue != 'undefined' && aplus_queue.push({
					'action': 'aplus.record',
					'arguments': ['heartbeat', 'CLK', {
						'video_name': h.aplusVideoName,
						'video_id': h.aplusVideoId,
						'resource_id': h.aplusResourseId,
						'resource_name': h.aplusResourceName,
						'request_id': h.getNewGuid()
					}]
				});
			}
			var var_20221104_3 = null, k = 0x0, c = 0x0, e = f.reportTimeInterval || 0x3c, j = e * 0x3e8, i = function (l, m, o) {
				var var_20220902_1 = $('.vjs-tip2');
				var_20220902_1.find('.vjs-tip-inner2').text(o),
					var_20220902_1.css({
						'left': l / m.duration() * 0x64 + '%',
						'margin-left': -parseFloat(var_20220902_1.width()) / 0x2 - 0x5 + 'px',
						'visibility': 'visible'
					}),
					$('.vjs-default-skin').removeClass('vjs-user-inactive'),
					$('.vjs-default-skin').addClass('vjs-user-active'),
					setTimeout(function () {
						var_20220902_1.css('visibility', 'hidden');
					}, 0x7d0);
			}, _0x3406ac = function (l, m, o) {
				if (!h.isSendLog_)
					return;
				var n = h.now_() - k;
				(n > j || m === true) && (typeof o != 'undefined' ? f.sendLog(g, l, o, h) : f.sendLog(g, l, h.sec_(g), h),
					k = h.now_());
			}, func_20220902_1 = function (var_20220902_5) {
				return var_20220902_5 && var_20220902_5.sort && var_20220902_5.sort(function (var_20220902_6, var_20220902_7) {
					return parseInt(var_20220902_6) - parseInt(var_20220902_7);
				});
			}, func_20220902_2 = function (var_20220902_8) {
				try {
					var var_20220902_9 = var_20220902_8.otherPointTimes;
					if (var_20220902_9.length === 0x0)
						return -0x1;
					return var_20220902_9 = func_20220902_1(var_20220902_9),
						var_20220902_9[0x0];
				} catch (error) {
					console.log(error);
				}
				return -0x1;
			}, func_20220902_3 = function (var_20220902_10) {
				try {
					var _0x4acbe7 = var_20220902_10.otherPointTimes, _0x3a21fd = _0x4acbe7.length;
					if (_0x3a21fd === 0x0)
						return -0x1;
					return _0x4acbe7 = func_20220902_1(_0x4acbe7),
						_0x4acbe7[_0x3a21fd - 0x1];
				} catch (error) {
					console.log(error);
				}
				return -0x1;
			}, func_20220902_4 = function (var_20220902_13, var_20220902_14) {
				try {
					if (!var_20220902_13.paused() && typeof var_20220902_13.eventPoints != 'undefined') {
						var var_20220902_15 = var_20220902_13.currentTime(), _0x13e202 = 0x0;
						var_20220902_13.eventPoints.forEach(function (_0x4cd880) {
							_0x4cd880.text == '片头' && (_0x13e202 = _0x4cd880.time);
						});
						if (var_20220902_14.headOffset > 0x0 && var_20220902_14.headOffset < _0x13e202)
							return;
						if (_0x13e202 > 0x0 && parseInt(var_20220902_15) === 0x0) {
							var _0xe6ca14 = parseInt(func_20220902_2(var_20220902_13));
							if (_0xe6ca14 >= 0x0 && _0x13e202 > _0xe6ca14)
								return;
							var_20220902_13.ignoreSeek = false,
								var_20220902_13.switchStatus = true,
								var_20220902_13.currentTime(_0x13e202),
								i(_0x13e202, var_20220902_13, '已跳过片头');
						}
					}
				} catch (error) {
					console.log(error);
				}
				try {
					var var_20220902_19 = 0x0;
					if (!var_20220902_13.paused() && typeof var_20220902_13.eventPoints != 'undefined') {
						var var_20220902_15 = var_20220902_13.currentTime();
						var_20220902_13.eventPoints.forEach(function (var_20220902_20) {
							var_20220902_20.text == '片尾' && (var_20220902_19 = var_20220902_20.time);
						});
						if (var_20220902_14.headOffset > var_20220902_19)
							return;
						var var_20220902_21 = parseInt(var_20220902_15);
						if (var_20220902_19 > 0x0 && var_20220902_21 === var_20220902_19) {
							var var_20220902_22 = parseInt(func_20220902_3(var_20220902_13));
							if (var_20220902_22 >= 0x0 && var_20220902_19 < var_20220902_22)
								return;
							var_20220902_13.ignoreSeek = false,
								var_20220902_13.switchStatus = true,
								var_20220902_13.currentTime(var_20220902_14.duration),
								i(var_20220902_21, var_20220902_13, '已跳过片尾');
						}
					}
				} catch (error) {
					console.log(error);
				}
			};
			g.on('play', function () {
				try {
					top.configFullScreen && reSizeVideoWindow();
				} catch (error) {
					console.log(error);
				}
				h.firstPlay && (typeof aplus_queue != 'undefined' && aplus_queue.push({
					'action': 'aplus.record',
					'arguments': ['video_positive_pybk', 'OTHER', {
						'video_name': h.aplusVideoName,
						'video_id': h.aplusVideoId,
						'resource_id': h.aplusResourseId,
						'resource_name': h.aplusResourceName,
						'request_id': h.getNewGuid()
					}]
				}));
				try {
					if (typeof top.hasJobLimit != 'undefined' && top.hasJobLimit === true && h.firstClick && isUnFinishJob()) {
						h.firstClick = false,
							g.pause(),
							checkJobCountLimit(g, 0x0);
						return;
					}
					if (typeof top.videoTimeLimit != 'undefined' && top.videoTimeLimit === true && h.firstClick && isUnFinishJob()) {
						h.firstClick = false,
							g.pause(),
							checkJobCountLimit(g, 0x1);
						return;
					}
				} catch (error) {
					console.log(error);
				}
				h.isAlertTip = false;
				!g.ignorePlay && !h.firstPlay && (typeof aplus_queue != 'undefined' && aplus_queue.push({
					'action': 'aplus.record',
					'arguments': ['continue_pybk_click', 'CLK', {
						'video_name': h.aplusVideoName,
						'video_id': h.aplusVideoId,
						'resource_id': h.aplusResourseId,
						'resource_name': h.aplusResourceName
					}]
				}));
				if (h.chapterCapture == 0x0 || !h.isSupportFace || !h.isShowFaceCollection)
					!g.ignorePlay ? (_0x3406ac('play', true),
						g.ignoreSeek = true) : (g.ignorePlay = false,
							g.ignoreSeek = false,
							g.seekLog = false),
						h.sendDataLog('play'),
						h.receiveStudyLog(),
						h.getDanmuList('play', g),
						h.firstPlay = false,
						h.pausePlayFace = true;
				else {
					if (h.chapterCapture == 0x1) {
						if (h.firstPlay) {
							var var_20220715_1 = h.sec_(g);
							if (var_20220715_1 == 0x0 && (h.startCapture == 0x1 || typeof h.startCapture == 'undefined') && h.firstPlayFace) {
								h.playingFaceTime = var_20220715_1,
									h.playingFace = false,
									h.faceCollection('play', g, h.chapterCollectionType, 0x0);
								return;
							}
							!g.ignorePlay ? (_0x3406ac('play', true),
								g.ignoreSeek = true) : (g.ignorePlay = false,
									g.ignoreSeek = false,
									g.seekLog = false),
								h.sendDataLog('play'),
								h.receiveStudyLog(),
								h.getDanmuList('play', g),
								h.firstPlay = false,
								h.pausePlayFace = true;
						} else {
							if (h.playAginCapture == 0x1 && !g.ignorePlay && h.pausePlayFace) {
								h.playingFaceTime = h.sec_(g),
									h.playingFace = false,
									h.faceCollection('aginPlay', g, h.chapterCollectionType, -0x2);
								return;
							}
							h.pausePlayFace = true;
						}
					}
				}
				typeof aplus_queue != 'undefined' && (var_20221104_3 = setInterval(func_20221104_2, 0x4e20)),
					h.seekLog = false;
			}),
				g.on('seeked', function () {
					if (f.enableFastForward != 0x1 && !g.switchStatus && !g.finished) {
						var l = g.currentTime(), m = f.headOffset ? f.headOffset : 0x0;
						l != 0x0 && l > m && g.currentTime(m);
					}
					'audio' == f.sourcePlayer && !g.seekLog && (g.seekStartTime = c);
					if (!g.ignoreSeek) {
						if ('audio' == f.sourcePlayer) {
							if (!g.seekLog) {
								function _0x1ba873() {
									_0x3406ac('drag', true, g.seekStartTime + '-' + h.sec_(g)),
										document.removeEventListener('mouseup', _0x1ba873);
								}
								document.addEventListener('mouseup', _0x1ba873);
							}
						} else
							_0x3406ac('drag', true, c + '-' + h.sec_(g)),
								typeof aplus_queue != 'undefined' && aplus_queue.push({
									'action': 'aplus.record',
									'arguments': ['time_shift_click', 'OTHER', {
										'video_name': h.aplusVideoName,
										'video_id': h.aplusVideoId,
										'resource_id': h.aplusResourseId,
										'resource_name': h.aplusResourceName,
										'time_shift_time': c + '',
										'time_shift_duration': Math.abs(parseInt(h.sec_(g)) - parseInt(c))
									}]
								}),
								typeof aplus_queue != 'undefined' && aplus_queue.push({
									'action': 'aplus.record',
									'arguments': ['video_progress_drag', 'OTHER', {
										'video_name': h.aplusVideoName,
										'video_id': h.aplusVideoId,
										'resource_id': h.aplusResourseId,
										'resource_name': h.aplusResourceName
									}]
								});
					} else
						g.ignoreSeek = false;
					c = h.sec_(g),
						g.ignorePlay = true,
						g.seekLog = true,
						delete g.switchStatus;
				}),
				g.on('pause', function () {
					!g.ignorePause ? (_0x3406ac('pause', true),
						g.ignorePlay = false,
						g.ignoreSeek = false,
						g.seekLog = false,
						typeof aplus_queue != 'undefined' && aplus_queue.push({
							'action': 'aplus.record',
							'arguments': ['video_pause_click', 'CLK', {
								'video_name': h.aplusVideoName,
								'video_id': h.aplusVideoId,
								'resource_id': h.aplusResourseId,
								'resource_name': h.aplusResourceName
							}]
						})) : g.ignorePause = false,
						h.sendDataLog('pause'),
						h.getDanmuList('pause', g),
						var_20221104_3 && clearInterval(var_20221104_3);
				}),
				g.on('timeupdate', function () {
					var c = h.sec_(g);
					h.isSupportFace && h.isShowFaceCollection && h.chapterCapture == 0x1 && h.playingCapture == 0x1 && h.playingFace && (h.playingFace = false,
						h.playingLoopCapture == 0x1 ? c == h.loopCaptureInterval && h.faceCollection('playing', g, h.chapterCollectionType, -0x1) : c >= h.captureInterval && c % h.captureInterval == 0x0 && h.faceCollection('playing', g, h.chapterCollectionType, c));
					!h.playingFace && c - h.playingFaceTime > 0x2 && (h.playingFace = true);
					if (typeof parent.videoTrialDuration != 'undefined' && parent.videoTrialDuration != '-1') {
						var l = parseInt(parent.videoTrialDuration) * 0x3c;
						if (l < h.sec_(g) && !h.isAlertTip) {
							g.pause(),
								alert('视频只允许试看' + parent.videoTrialDuration + '分钟'),
								h.isAlertTip = true;
							return;
						}
					}
					parseInt(g.currentTime()) >= this.damuLastGetTime && h.getDanmuList('timeupdate', g);
					h.danmuDisplay(g);
					if (k == 0x0) {
						func_20220902_4(g, f);
						return;
					}
					h.sec_(g) - c <= 0x1 && !g.ignorePlay && (c = h.sec_(g)),
						_0x3406ac('playing'),
						func_20220902_4(g, f);
				}),
				g.on('ended', function () {
					h.isShowFaceCollection && h.chapterCapture == 0x1 && h.endCapture == 0x1 && h.faceCollection('ended', g, h.chapterCollectionType, h.duration),
						_0x3406ac('ended', true),
						typeof aplus_queue != 'undefined' && aplus_queue.push({
							'action': 'aplus.record',
							'arguments': ['video_end_click', 'CLK', {
								'video_name': h.aplusVideoName,
								'video_id': h.aplusVideoId,
								'resource_id': h.aplusResourseId,
								'resource_name': h.aplusResourceName,
								'request_id': h.getNewGuid(),
								'pybk_duration': h.duration,
								'full_play_count': 0x1
							}]
						}),
						var_20221104_3 && clearInterval(var_20221104_3),
						g.seekLog = false;
				});
		},
		'sec_': function (c) {
			return parseInt(c.currentTime());
		},
		'now_': function () {
			return new Date().getTime();
		},
		'isSendLog': function (c) {
			return c && (this.isSendLog_ = !!c),
				this.isSendLog_;
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
			if (!this.isShowDanmu_)
				return;
			var f = this.sec_(c);
			if (e == 'pause') {
				this.damuLastGetTime = 0x0,
					setTimeout(function () {
						getDanmuByTime(e, 0x0);
					}, 0xc8);
				return;
			}
			typeof getDanmuByTime != 'undefined' && setTimeout(function () {
				getDanmuByTime(e, f);
			}, 0xc8);
			if (f < this.damuLastGetTime)
				return;
			this.damuLastGetTime = f + 0x3b;
		},
		'danmuDisplay': function (c) {
			if (!this.isShowDanmu_)
				return;
			var e = this.sec_(c);
			typeof danmuPlay != 'undefined' && danmuPlay(e);
		},
		'timer': function (c) { },
		'faceCollection': function (e, c, f, var_20220715_5) {
			if (var_20220715_5 != -0x2) {
				var var_20220715_6 = this.jumpTimePointList;
				if (typeof var_20220715_6 != 'undefined')
					try {
						if (var_20220715_6.includes(var_20220715_5)) {
							this.firstPlayFace = false,
								this.pausePlayFace = false,
								this.playingFace = false;
							return;
						}
					} catch (error) { }
			}
			e == 'play' ? typeof startFaceCollection != 'undefined' && (c.pause(),
				startFaceCollection(c, f, this, var_20220715_5)) : e == 'ended' ? typeof startFaceCollection != 'undefined' && (c.pause(),
					startFaceCollection(c, f, this, var_20220715_5)) : e == 'playing' ? (typeof startFaceCollection != 'undefined' && (c.pause(),
						this.playingFaceTime = this.sec_(c),
						startFaceCollection(c, f, this, var_20220715_5),
						this.playingFace = false),
						this.pausePlayFace = false) : e == 'aginPlay' && (typeof startFaceCollection != 'undefined' && (c.pause(),
							startFaceCollection(c, f, this, var_20220715_5)),
							this.pausePlayFace = false);
		},
		'playNextVideo': function (c) {
			if (typeof chapterPlayNextVideo != 'undefined') {
				if (typeof top.allowNextVideo != 'undefined' && top.allowNextVideo === false) {
					top.hasJobLimit === true ? top.showJobLimitTip() : top.showVideoTimeLimitTip();
					return;
				}
				chapterPlayNextVideo(c);
			}
		},
		'getNewGuid': function () {
			var var_20221104_4 = '';
			for (var i = 0x1; i <= 0x20; i++) {
				var var_20221104_5 = Math.floor(Math.random() * 0x10).toString(0x10);
				var_20221104_4 += var_20221104_5,
					(i == 0x8 || i == 0xc || i == 0x10 || i == 0x14) && (var_20221104_4 += '-');
			}
			return var_20221104_4;
		}
	});
	videojs.registerPlugin('seekBarControl', b);
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
	'renderTpl': ['<div class="tkTopic">', '<tpl if="dtype==\'InteractiveQuiz\'">', '<div class="tkTopic_numbar fr">共 {interactiveQuestionCount} 题<span id="rightAnswerNum">，已答对 <i id="rightNum"></i> 题</span></div>', '</tpl>', '<div class="tkTopic_title">[{questionType}]</div>', '<div class="tkTopic_con tkScroll">', '<div class="tkItem">', '<div class="tkItem_title">{description}</div>', '<ul class="tkItem_ul">', '<tpl for="options">', '<li class="ans-videoquiz-opt"><label>', '<span class="tkRadio"><input type="{[parent.questionType=="多选题"?"checkbox":"radio"]}" <tpl if="parent.dtype==\'InteractiveQuiz\'">{[this.getChecked(parent.answerContent, values.name, parent.dtype)]}</tpl> name="ans-videoquiz-opt" value="{isRight}"/><i></i></span>', '{name}、{description}', '</label></li>', '</tpl>', '</ul>', '</div>', '</div>', '<div class="tkTopic_oper">', '<a class="ans-videoquiz-submit bntLinear fr" id="videoquiz-submit">提交</a>', '<a class="ans-videoquiz-submit bntLinear fr" id="videoquiz-submitting" style="display:none">提交中</a>', '<a class="ans-videoquiz-continue bntLinear fr" id="videoquiz-continue"><tpl if="dtype==\'InteractiveQuiz\'">继续学习<tpl else>继续</tpl></a>', '<tpl if="dtype==\'InteractiveQuiz\'">', '<a class="bntWhiteBorder ans-videoquiz-back fr" id="knowledgeBack">知识点回看</a>', '</tpl>', '<tpl if="dtype==\'InteractiveQuiz\'"><span id="spanHas" class="rightInfo"></span><tpl else><span class="spanHas fr" id="spanHas">回答正确</span></tpl>', '<span class="spanNot fr" id="spanNot"><tpl if="dtype==\'InteractiveQuiz\'">真遗憾，再接再厉！<tpl else>回答错误</tpl></span>', '<span class="spanNotBack fr" id="spanNotBack"><tpl if="dtype==\'InteractiveQuiz\'">真遗憾，再接再厉！<tpl else>回答错误，</tpl>回看 {errorBackTime} 分钟</span>', '<tpl if="dtype==\'InteractiveQuiz\'">', '<span class="spanNotBack fr" id="spanNotBackPoint">真遗憾，再接再厉！</span>', '<a class="spanHref fl" href="javascript:" id="viewAnalysis">查看解析</a>', '</div>', '<div class="tkParsing" id="tkParsing">', '<a class="tkParsing_dele" id="tkParsingDele" href="javascript:"></a>', '<div class="tkParsing_screll tkParsing_con" id="tkParsing_con"></div>', '</tpl>', '</div>', '</div>', {
		'getChecked': function (q, w, e) {
			try {
				if (typeof q != 'undefined')
					return q.indexOf(w) != -0x1 && e == 'InteractiveQuiz' ? 'checked="checked"' : '';
				return '';
			} catch (error) {
				console.log(error);
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
		var b = this, d = b.renderData, e = b.quizRightCountUrl;
		typeof e != 'undefined' && Ext.Ajax.request({
			'url': e,
			'params': {
				'eventid': d.resourceId,
				'memberinfo': d.memberinfo
			},
			'method': 'get',
			'success': function (f) {
				var g = Ext.decode(f.responseText);
				g.status && (Ext.get('rightNum').setHTML(g.rightAnswerCount),
					Ext.get('rightAnswerNum').setStyle('display', 'inline-block'));
			}
		});
		b.callParent(arguments);
		var c = b.scrollEl, a = $(c.dom).niceScroll({
			'cursorborder': '',
			'cursorwidth': 0x6,
			'cursorcolor': '#A5A5A5',
			'boxzoom': false,
			'autohidemode': false
		});
		b.scroller = a,
			b.submitEl.on('click', function () {
				b.checkResult();
			}),
			b.continueEl.on('click', function () {
				try {
					top.configFullScreen && exitMediumSizeWindow();
				} catch (error) {
					console.log(error);
				}
				b.fireEvent('continue');
			}),
			b.backEl && b.backEl.on('click', function () {
				b.onerror && b.onerror(),
					b.fireEvent('continue');
			}),
			b.viewAnalysisEl && b.viewAnalysisEl.on('click', function () {
				Ext.get('tkParsing').setStyle('display', 'inline-block');
			}),
			b.delAnalysisEl && b.delAnalysisEl.on('click', function () {
				Ext.get('tkParsing').setStyle('display', 'none');
			});
	},
	'checkResult': function () {
		var f = this, i = Ext.query('input', f.el.dom), e = true, g = f.renderData, b = g.options, c = [], h = f.quizErrorReportUrl, a = f.validationUrl2, d = g.dtype;
		if (Ext.get('videoquiz-continue').getStyle('display') == 'none' && window.parent.parent.location.href.indexOf('nodedetailcontroller/visitnodedetail') > -0x1) {
			try {
				top.configFullScreen && exitMediumSizeWindow();
			} catch (error) {
				console.log(error);
			}
			f.fireEvent('continue');
			return;
		}
		Ext.each(i, function (var_20220727_3, var_20220727_4) {
			var_20220727_3.checked && c.push(b[var_20220727_4].name);
		}),
			Ext.get('videoquiz-submit').setStyle('display', 'none'),
			Ext.get('videoquiz-submitting').setStyle('display', 'block');
		if (typeof a != 'undefined') {
			var l = c.join(',');
			Ext.Ajax.request({
				'url': a,
				'params': {
					'eventid': g.resourceId,
					'memberinfo': g.memberinfo,
					'answerContent': l
				},
				'method': 'get',
				'success': function (m) {
					Ext.get('videoquiz-submit').setStyle('display', 'block'),
						Ext.get('videoquiz-submitting').setStyle('display', 'none'),
						g.answerContent = l;
					var n = Ext.decode(m.responseText), var_20220727_2 = typeof n.isRight === 'undefined' ? false : n.isRight;
					!var_20220727_2 ? g.errorBackTime && g.errorBackTime > 0x0 ? (Ext.get('spanNotBack').setStyle('display', 'block'),
						Ext.get('videoquiz-submit').setStyle('display', 'none'),
						d == 'InteractiveQuiz' ? Ext.get('knowledgeBack').setStyle('display', 'block') : Ext.get('videoquiz-continue').setStyle('display', 'block')) : d == 'InteractiveQuiz' && g.errorBack == 0x1 && g.eBstartPoint != '' ? (Ext.get('spanNotBackPoint').setStyle('display', 'block'),
							Ext.get('knowledgeBack').setStyle('display', 'block')) : Ext.get('spanNot').setStyle('display', 'block') : (Ext.get('spanHas').setStyle('display', 'block'),
								d == 'InteractiveQuiz' && (Ext.get('videoquiz-continue').setStyle('display', 'block'),
									Ext.get('knowledgeBack').setStyle('display', 'none'),
									Ext.get('videoquiz-submit').setStyle('display', 'none'),
									Ext.get('spanNot').setStyle('display', 'none'),
									Ext.get('spanNotBack').setStyle('display', 'none'),
									Ext.get('spanNotBackPoint').setStyle('display', 'none')));
					if (n.status) {
						if (d == 'InteractiveQuiz') {
							n.rightAnswerCount && (Ext.get('rightNum').setHTML(n.rightAnswerCount),
								Ext.get('rightAnswerNum').setStyle('display', 'inline-block'));
							var q = '', var_20220727_1 = false;
							n.testAnalysis ? n.showAnswer && n.showAnswer > 0x0 ? (q += '正确答案：' + n.rightContent,
								q += '</br>解析：' + n.testAnalysis,
								Ext.get('viewAnalysis').setStyle('display', 'block'),
								var_20220727_1 = true) : n.isRight && (q += '解析：' + n.testAnalysis,
									Ext.get('viewAnalysis').setStyle('display', 'block'),
									var_20220727_1 = true) : n.showAnswer && n.showAnswer > 0x0 ? (Ext.get('tkParsingDele').setStyle('display', 'none'),
										Ext.get('viewAnalysis').setStyle('display', 'none'),
										q += '正确答案：' + n.rightContent,
										var_20220727_1 = true) : Ext.get('viewAnalysis').setStyle('display', 'none');
							if (var_20220727_1) {
								Ext.get('tkParsing_con').setHTML(q),
									Ext.get('tkParsing').setStyle('display', 'inline-block');
								var o = f.tkParseScrollEl, p = $(o.dom).niceScroll({
									'cursorborder': '',
									'cursorwidth': 0x6,
									'cursorcolor': '#A5A5A5',
									'boxzoom': false,
									'autohidemode': true
								});
								f.tkParseScroll = p;
							}
						}
						if (n.isRight && d == 'InteractiveQuiz') {
							if (typeof n.showTip != 'undefined' && n.showTip) {
								var r = n.percent;
								try {
									var s = Ext.getCookie('fid', 0x0);
									r = parseInt(r),
										s == '179952' && r > 0x0 && (r = 0x5a + r * 0.1);
								} catch (error) {
									console.log(error);
								}
								Ext.get('spanHas').setHTML('<span class="spanHas fr" style=\'display:block\'><span id="InteractiveQuizTip">恭喜你，答对了！你的答题水准超过了' + r + '%的同学</span></span>');
							} else
								Ext.get('spanHas').setHTML('<span class="spanHas fr" style=\'display:block\'><span id="InteractiveQuizTip">恭喜你，答对了！</span></span>');
						}
					}
					!var_20220727_2 && f.onerror && d != 'InteractiveQuiz' && f.onerror();
					!var_20220727_2 && g.errorContinue == 0x1 && (e = true,
						Ext.get('videoquiz-submit').setStyle('display', 'none'),
						Ext.get('videoquiz-continue').setStyle('display', 'block'));
					if (var_20220727_2 && Ext.get('videoquiz-continue').getStyle('display') == 'none') {
						try {
							top.configFullScreen && exitMediumSizeWindow();
						} catch (error) {
							console.log(error);
						}
						f.fireEvent('continue');
					}
				},
				'error': function () {
					Ext.get('videoquiz-submit').setStyle('display', 'block'),
						Ext.get('videoquiz-submitting').setStyle('display', 'none'),
						f.onerror && d != 'InteractiveQuiz' && f.onerror();
				}
			});
		}
		return e;
	},
	'continueFun': function () {
		var a = this;
		a.fireEvent('continue');
	}
});
Ext.define('ans.videojs.VideoImg', {
	'extend': 'Ext.Component',
	'xtype': 'videoimg',
	'renderTpl': ['<div class="sp_video_pic">', '<img src="{src}" class="sp_video_img" />', '<a class="jb_btn jb_btn_92 fs14 sp_video_pic_dele2" style="position:absolute;bottom:14px;right:20px;z-index:6;" href="javascript:">继续学习</a>', '</div>'],
	'renderSelectors': {
		'closeEl': 'a.sp_video_pic_dele2'
	},
	'afterRender': function () {
		var a = this;
		a.callParent(arguments);
		try {
			var var_20220715_2 = document.querySelector('.sp_video_img');
			var_20220715_2.addEventListener('load', function () {
				var_20220715_2.naturalWidth >= var_20220715_2.naturalHeight ? var_20220715_2.naturalWidth >= 0x190 && (var_20220715_2.style.maxWidth = '70%',
					var_20220715_2.style.maxHeight = '70%',
					var_20220715_2.style.height = 'auto') : var_20220715_2.naturalHeight >= 0x190 && (var_20220715_2.style.maxHeight = '70%',
						var_20220715_2.style.maxWidth = '70%',
						var_20220715_2.style.width = 'auto');
			});
		} catch (error) {
			console.log(error);
		}
		a.el.on('click', function () {
			a.fireEvent('continue');
		}),
			a.closeEl.on('click', function () {
				try {
					top.configFullScreen && exitMediumSizeWindow();
				} catch (error) {
					console.log(error);
				}
				a.fireEvent('continue');
			});
	}
});
Ext.define('ans.videojs.VideoAnnotation', {
	'extend': 'Ext.Component',
	'xtype': 'videoannotation',
	'cls': 'ans-videoannotation',
	'width': '259px',
	'model': false,
	'renderTpl': ['<div class="comment_icon"><img src="/ananas/modules/video/pz_icon.png"/></div>', '<div class="comment_box" style="display:block">', '<div class="comment_tit"><a href="javascript:;" class="stow_icon fr"><img src="/ananas/modules/video/stow_icon.png" /></a><p class="fl">[批注]</p></div>', '<p class="comment_con">{description}</p>', '<a href="javascript:;" class="continueLearn fr">继续学习</a>', '</div>'],
	'renderSelectors': {
		'stowEl': 'a.stow_icon',
		'commentOpenEl': 'div.comment_icon',
		'boxEl': 'div.comment_box',
		'continueEl': 'a.continueLearn'
	},
	'afterRender': function () {
		var c = this, var_20221104_6 = c.commentOpenEl, var_20221104_7 = c.boxEl;
		c.callParent(arguments);
		var var_20221104_8 = $('#video_html5_api').height();
		var_20221104_7.setStyle('height', var_20221104_8 + 'px'),
			var_20221104_6.on('click', function () {
				var_20221104_6.setStyle('display', 'none'),
					var_20221104_7.setStyle('display', 'block'),
					$('.comment_con').getNiceScroll().resize();
			}),
			c.stowEl.on('click', function () {
				var_20221104_7.setStyle('display', 'none'),
					var_20221104_6.setStyle('display', 'block');
			}),
			c.continueEl.on('click', function () {
				c.fireEvent('continue');
			});
		var a = $('.comment_con').niceScroll({
			'cursorborder': '',
			'cursorwidth': '8px',
			'cursorcolor': '#ACB4BF',
			'boxzoom': false,
			'autohidemode': true
		});
		c.scroller = a;
	}
});
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
		var a = this;
		a.callParent(arguments);
		try {
			dragFn && dragFn('#sp_video_ppt_pic', '#video_html5_api');
		} catch (error) {
			console.log(error);
		}
		var h = Ext.get('video_html5_api').getStyle('height'),
			i = Ext.get('video_html5_api').getStyle('width'),
			j = parseInt(h) > parseInt(i);
		j ? Ext.get('sp_video_ppt_pic').addCls('sp_video_ppt_pic_w') : Ext.get('sp_video_ppt_pic').addCls('sp_video_ppt_pic_h');
		function func_20221104_3() {
			Ext.get('sp_size_big').setStyle('display', 'none'),
				Ext.get('sp_size_small').setStyle('display', 'block');
		}
		function func_20221104_4() {
			Ext.get('sp_size_big').setStyle('display', 'block'),
				Ext.get('sp_size_small').setStyle('display', 'none');
		}
		a.sizeBigEl.on('click', function (g) {
			g.stopPropagation(),
				j ? a.pptPicEl.toggleCls('sp_ppt_pic_fullScreen1') : a.pptPicEl.toggleCls('sp_ppt_pic_fullScreen'),
				func_20221104_3();
		}),
			a.sizeSmallEl.on('click', function (g) {
				g.stopPropagation(),
					j ? a.pptPicEl.toggleCls('sp_ppt_pic_fullScreen1') : a.pptPicEl.toggleCls('sp_ppt_pic_fullScreen'),
					func_20221104_4();
			}),
			a.sizeBigEl.on('touchend', function (g) {
				g.stopPropagation(),
					j ? a.pptPicEl.toggleCls('sp_ppt_pic_fullScreen1') : a.pptPicEl.toggleCls('sp_ppt_pic_fullScreen'),
					func_20221104_3();
			}),
			a.sizeSmallEl.on('touchend', function (g) {
				g.stopPropagation(),
					j ? a.pptPicEl.toggleCls('sp_ppt_pic_fullScreen1') : a.pptPicEl.toggleCls('sp_ppt_pic_fullScreen'),
					func_20221104_4();
			});
	}
});
Ext.define('ans.videojs.TimelineObjects', {
	'extend': 'Ext.container.Container',
	'cls': 'ans-timelineobjects',
	'autoScroll': true,
	'hidden': true,
	'hideMode': 'visibility',
	'constructor': function (a) {
		var b = this;
		b.callParent(arguments),
			b.bg = Ext.create('ans.videojs.TimelineObjectsBg', {
				'renderTo': a.renderTo
			}),
			b.objects = a.objects && a.objects.sort ? b.sort_(a.objects) : [],
			b.current = 0x0,
			b.showAnnotation = false;
	},
	'hideTimeline': function () {
		var var_20221104_9 = this;
		var_20221104_9.showAnnotation && (var_20221104_9.hide(),
			var_20221104_9.showAnnotation = false);
	},
	'showObject': function (m, b, e) {
		var j = this, h = j.getBox(), c = j.items.getAt(0x0), l, i = function () {
			l.destroy(),
				j.hide(),
				m.play();
			try {
				m.eventCount && (m.eventCount = m.eventCount - 0x1);
			} catch (err) {
				console.log(err);
			}
		};
		c != null && c.destroy();
		if (e) {
			e.description && (e.description = j.htmlEncodeByRegExp(e.description));
			if (e.options && e.options.length > 0x0)
				for (let ii = 0x0; ii < e.options.length; ii++) {
					e.options[ii].description && (e.options[ii].description = j.htmlEncodeByRegExp(e.options[ii].description));
				}
		}
		if (b == 'IMG') {
			var f = {
				'src': e.url.replace(/origin/, h.width + '_' + h.height)
			};
			l = j.add({
				'xtype': 'videoimg',
				'renderData': f
			});
			try {
				m.eventCount && (m.eventCount += 0x1);
			} catch (err) {
				console.log(err);
			}
		}
		if (b == 'QUIZ') {
			var k = function () { };
			if (e.errorBackTime && e.errorBackTime > 0x0) {
				var n = e.errorBackTime * 0x3c;
				k = function () {
					var o = Math.max(m.currentTime() - n, 0x0);
					m.switchStatus = true,
						m.currentTime(o);
				};
			}
			l = j.add({
				'xtype': 'videoquiz',
				'renderData': e,
				'quizErrorReportUrl': j.quizErrorReportUrl,
				'validationUrl2': j.validationUrl2,
				'onerror': k
			});
			try {
				m.eventCount && (m.eventCount += 0x1);
			} catch (err) {
				console.log(err);
			}
		}
		if (b == 'InteractiveQuiz') {
			var k = function () { };
			if (e.errorBackTime && e.errorBackTime > 0x0) {
				var n = e.errorBackTime * 0x3c;
				k = function () {
					var z = Math.max(m.currentTime() - n, 0x0);
					m.switchStatus = true,
						m.currentTime(z);
				};
			}
			if (e.errorBack == 0x1 && e.eBstartPoint != '') {
				var n = 0x0, y = e.eBstartPoint.split(':'), x = y.length;
				x > 0x0 && (x == 0x1 ? n = parseInt(y[0x0]) * 0x3c : x == 0x2 && (n = parseInt(y[0x0]) * 0x3c + parseInt(y[0x1]))),
					k = function () {
						m.switchStatus = true,
							m.currentTime(n);
					};
			}
			e.dtype = 'InteractiveQuiz',
				l = j.add({
					'xtype': 'videoquiz',
					'renderData': e,
					'quizErrorReportUrl': j.quizErrorReportUrl,
					'validationUrl2': j.validationUrl2,
					'quizRightCountUrl': j.quizRightCountUrl,
					'onerror': k
				});
			try {
				m.eventCount && (m.eventCount += 0x1);
			} catch (err) {
				console.log(err);
			}
		}
		if (b == 'PPT') {
			if (e.fp == 0x0)
				return;
			var a = e.url;
			e.thumb ? a = e.thumb + e.pageNo + '.png' : a = a.replace(/swfv2\/.*$/, 'thumb/' + e.fp + '.png');
			var f = {
				'src': a
			};
			l = j.add({
				'xtype': 'videoppt',
				'renderData': f
			});
			try {
				m.eventCount && (m.eventCount += 0x1);
			} catch (err) {
				console.log(err);
			}
		}
		if (b == 'SyncAnnotationEvent') {
			l = j.add({
				'xtype': 'videoannotation',
				'renderData': e
			});
			try {
				m.eventCount && (m.eventCount += 0x1);
			} catch (err) {
				console.log(err);
			}
			m.pause(),
				j.showAnnotation = true;
		}
		if (!l)
			return;
		l.on('continue', function () {
			i();
		});
		var g = !(l.model === false);
		j.showModel(g),
			g && m.pause(),
			b == 'PPT' ? Ext.select('.ans-timelineobjects').setStyle('position', 'unset') : Ext.select('.ans-timelineobjects').setStyle('position', 'absolute');
	},
	'htmlEncodeByRegExp': function (string_in) {
		var string_out = '';
		if (string_in.length == 0x0)
			return '';
		return string_out = string_in.replace(/&/g, '&amp;'),
			string_out = string_out.replace(/</g, '&lt;'),
			string_out = string_out.replace(/>/g, '&gt;'),
			string_out = string_out.replace(/\s/g, '&nbsp;'),
			string_out = string_out.replace(/\'/g, '&#39;'),
			string_out = string_out.replace(/\"/g, '&quot;'),
			string_out;
	},
	'showModel': function (a) {
		try {
			top.configFullScreen && mediumSizeWindow();
		} catch (err) {
			console.log(err);
		}
		var c = this;
		c.show(),
			a ? (c.removeCls('ans-timelineobjects-autosize'),
				c.setAutoScroll(true),
				c.bg.show()) : (c.addCls('ans-timelineobjects-autosize'),
					c.setAutoScroll(false));
	},
	'hide': function () {
		this.callParent(arguments),
			this.bg.hide.apply(this.bg, arguments);
	},
	'updateTime': function (a, e) {
		if (this.current >= this.objects.length || a.scrubbing())
			return;
		var c = this, f = c.objects[c.current], b = f.style, g = f.datas[0x0];
		e >= g.startTime && (c.current++,
			setTimeout(function () {
				c.showObject(a, b, g);
			}, 0x14));
	},
	'resetTime': function (b, e) {
		var c = this, a;
		for (a = 0x0; a < c.objects.length; a++) {
			var f = c.objects[a].datas[0x0].startTime;
			if (e <= f)
				break;
		}
		c.current = a;
	},
	'sort_': function (a) {
		return a && a.sort && a.sort(function (f, e) {
			var c = f.datas[0x0].startTime, b = e.datas[0x0].startTime;
			return c - b;
		});
	}
});
(function () {
	var Plugin = videojs.getPlugin('plugin'), TimelineObjects = videojs.extend(Plugin, {
		'constructor': function (player, options) {
			Plugin.call(this, player, options);
			if (!options.url)
				return;
			var var_20220902_26 = function (var_20220902_27) {
				try {
					var var_20220902_28 = var_20220902_27.datas;
					if (var_20220902_28 && var_20220902_28.length > 0x0)
						return var_20220902_28[0x0].startTime;
				} catch (err) {
					console.log(err);
				}
				return -0x1;
			}, me = this;
			player.eventPoints = [],
				player.otherPointTimes = [];
			var var_20220902_29 = [];
			if (options.begins && options.begins > 0x0) {
				var var_20220902_30 = {
					'time': options.begins,
					'text': '片头'
				};
				var_20220902_29.push(var_20220902_30);
			}
			if (options.ends && options.ends > 0x0) {
				var var_20220902_30 = {
					'time': options.ends,
					'text': '片尾'
				};
				var_20220902_29.push(var_20220902_30);
			}
			player.eventPoints = var_20220902_29,
				Ext.Ajax.request({
					'url': options.url,
					'async': false,
					'success': function (resp) {
						if (resp.status != 0xc8)
							return;
						eval('var data=' + resp.responseText);
						if (data && data.length > 0x0) {
							var a = [];
							for (var i = 0x0; i < data.length; i++) {
								var b = data[i];
								if (b.style == 'InteractiveQuiz') {
									var c = b.datas;
									if (c && c.length > 0x0)
										var d = {
											'time': c[0x0].startTime,
											'text': '互动测验'
										};
									a.push(d);
								}
								var _0xa5af04 = var_20220902_26(b);
								_0xa5af04 >= 0x0 && player.otherPointTimes.push(_0xa5af04);
							}
							a.forEach(function (_0x425160) {
								player.eventPoints.push(_0x425160);
							});
						}
						var timeline = Ext.create('ans.videojs.TimelineObjects', {
							'renderTo': player.el_,
							'quizErrorReportUrl': options.quizErrorReportUrl,
							'validationUrl2': options.validationUrl2,
							'quizRightCountUrl': options.quizRightCountUrl,
							'objects': data
						});
						player.on('play', function () {
							timeline.resetTime(player, player.currentTime()),
								timeline.hideTimeline();
						}),
							player.on('seekend', function () {
								timeline.resetTime(player, player.currentTime()),
									timeline.hideTimeline();
							}),
							player.on('timeupdate', function () {
								!player.paused() && (timeline.updateTime(player, player.currentTime()),
									timeline.hideTimeline());
							});
					}
				});
		}
	});
	videojs.registerPlugin('timelineObjects', TimelineObjects);
}());
Ext.define('ans.videojs.customIframe', {
	'extend': 'Ext.Component',
	'xtype': 'customIframe',
	'renderTpl': ['<iframe src="{src}" class="configIframe" style="height: 100%;width: 100%;left: 0;top: 0;right: 0;bottom: 0; background: rgba(0,0,0,.6);"></iframe>'],
	'afterRender': function () {
		var me = this;
		me.callParent(arguments),
			window.addEventListener('message', function (var_20221104_11) {
				typeof var_20221104_11.data != 'undefined' && var_20221104_11.data.opType === 'closeIframe' && me.fireEvent('continue');
			});
	}
});
Ext.define('ans.videojs.CustomIframe', {
	'extend': 'Ext.container.Container',
	'cls': 'ans-customIframe',
	'autoScroll': true,
	'hidden': true,
	'hideMode': 'visibility',
	'constructor': function (options) {
		var me = this;
		me.callParent(arguments),
			me.supportHeartbeat = false,
			me.courseid = '',
			me.clazzId = '',
			me.knowledgeid = '',
			me.objectid = '',
			me.playTime = 0x0,
			me.requesting = false,
			me.eventArray = [],
			me.userId = '',
			me.cookieFid = '',
			me.headOffset = '',
			typeof options.userId != 'undefined' && (me.userId = options.userId),
			typeof options.cookieFid != 'undefined' && (me.cookieFid = options.cookieFid),
			typeof options.headOffset != 'undefined' && (me.headOffset = options.headOffset),
			typeof options.eventArray != 'undefined' && (me.eventArray = options.eventArray),
			typeof options.supportHeartbeat != 'undefined' && (me.supportHeartbeat = options.supportHeartbeat),
			typeof options.courseid != 'undefined' && (me.courseid = options.courseid),
			typeof options.clazzId != 'undefined' && (me.clazzId = options.clazzId),
			typeof options.knowledgeid != 'undefined' && (me.knowledgeid = options.knowledgeid),
			typeof options.objectid != 'undefined' && (me.objectid = options.objectid),
			me.lastHeartbeat = 0x0,
			me.lastShowIFrame = 0x0,
			me.objects = options.objects && options.objects.sort ? me.sort_(options.objects) : [],
			me.eventArray.forEach(function (_0x37bfeb) {
				var _0x1bbf1b = parseInt(_0x37bfeb.eventIntervalType);
				_0x1bbf1b === 0x0 ? (_0x37bfeb.lastHeartbeat = 0x0,
					_0x37bfeb.pauseTimeRange = 0x0,
					_0x37bfeb.pauseTimeStamp = -0x1,
					_0x37bfeb.requesting = false) : _0x1bbf1b === 0x1 && (_0x37bfeb.timeArray = sortArray(_0x37bfeb.timeArray),
						_0x37bfeb.index = 0x0);
			});
	},
	'showIFrame': function (_0x104db4, _0x3ff838, _0x4efcad) {
		try {
			var me = this;
			parseInt(_0x3ff838) === 0x1 ? me.showObject(_0x104db4, 'customIframe', _0x4efcad) : parseInt(_0x3ff838) === 0x2 && showPopIframe(_0x4efcad, _0x104db4);
		} catch (err) {
			console.log(err);
		}
	},
	'initHeartbeat': function (_0x1f6162, _0x48e93a) {
		var me = this;
		if (typeof _0x1f6162 == 'undefined' || _0x1f6162 == '')
			return;
		Ext.Ajax.request({
			'url': _0x1f6162,
			'params': {
				'uid': me.userId,
				'schoolId': me.cookieFid,
				'moocClassId': me.clazzId,
				'moocCourseId': me.courseid,
				'chapterId': me.knowledgeid,
				'objectId': me.objectid,
				'videoProgress': me.headOffset,
				'totalVideoDuration': window.duration,
				'enc': me.videoEnc
			},
			'method': 'get',
			'success': function (_0x35f2b1) {
				typeof _0x48e93a != 'undefined' && (_0x48e93a.requesting = false,
					console.log('requesting: false'));
			},
			'failure': function () {
				typeof _0x48e93a != 'undefined' && (_0x48e93a.requesting = false),
					console.log('heartbeatUrl request error');
			}
		});
	},
	'seekVideoTime': function (_0x44e914, _0x225e93) {
		try {
			var me = this;
			typeof me.cmp != 'undefined' && me.cmp != null && (me.cmp.destroy(),
				me.hide(),
				_0x44e914.eventCount = _0x44e914.eventCount - 0x1,
				_0x44e914.eventCount <= 0x0 && (_0x44e914.currentTime(_0x225e93),
					_0x44e914.play()));
		} catch (err) {
			console.log(err);
		}
	},
	'showObject': function (_0x6f7561, _0x54fc2c, _0x2548c5) {
		var me = this, _0x3db957 = me.items.getAt(0x0), _0x506dea, _0x553533 = function (_0x4e0ff8) {
			_0x506dea.destroy(),
				me.hide(),
				_0x4e0ff8.eventCount = _0x4e0ff8.eventCount - 0x1,
				_0x4e0ff8.eventCount <= 0x0 && _0x4e0ff8.play();
		};
		_0x3db957 != null && _0x3db957.destroy();
		me.cmp = null;
		_0x54fc2c == 'customIframe' && (_0x506dea = me.add({
			'xtype': 'customIframe',
			'renderData': {
				'src': _0x2548c5
			}
		}),
			_0x6f7561.eventCount += 0x1);
		if (!_0x506dea)
			return;
		_0x506dea.on('continue', function () {
			_0x553533(_0x6f7561);
		});
		var _0xa626b3 = !(_0x506dea.model === false);
		me.showModel(_0xa626b3),
			me.cmp = _0x506dea,
			_0xa626b3 && _0x6f7561.pause();
	},
	'showModel': function (_0x48beca) {
		var me = this;
		me.show(),
			_0x48beca ? (me.removeCls('ans-timelineobjects-autosize'),
				me.setAutoScroll(true)) : (me.addCls('ans-timelineobjects-autosize'),
					me.setAutoScroll(false));
	},
	'hide': function () {
		this.callParent(arguments);
	},
	'updateTime': function (_0x3f3cf8, _0x4b0798) {
		try {
			if (this.supportHeartbeat && isStuViewPage() && !_0x3f3cf8.paused()) {
				var _0x43df34 = new Date().getTime(), _0x4e1423 = this, _0x3fb3b3 = 0x0;
				for (var i = 0x0; i < _0x4e1423.eventArray.length; i++) {
					var _0x41e298 = _0x4e1423.eventArray[i], _0x546e7b = parseInt(_0x41e298.eventType), _0x3a91e2 = parseInt(_0x41e298.eventIntervalType);
					if (_0x3a91e2 === 0x0) {
						if (_0x41e298.requesting || _0x3f3cf8.scrubbing())
							continue;
						var _0x59c914 = _0x43df34 - _0x41e298.lastHeartbeat;
						_0x41e298.pauseTimeRange > 0x0 && (_0x59c914 = _0x59c914 - _0x41e298.pauseTimeRange);
						var _0x270641 = _0x59c914 / 0x3e8;
						_0x270641 = parseInt(_0x270641);
						if (_0x270641 > _0x41e298.eventInterval) {
							if (_0x546e7b === 0x1 || _0x546e7b === 0x2) {
								_0x3fb3b3++;
								if (_0x3fb3b3 > 0x1)
									break;
							}
							_0x41e298.pauseTimeRange = 0x0,
								_0x41e298.lastHeartbeat = _0x43df34,
								_0x546e7b === 0x0 ? (_0x41e298.requesting = true,
									this.initHeartbeat(_0x41e298.url, _0x41e298)) : (_0x546e7b === 0x1 || _0x546e7b === 0x2) && _0x4e1423.showIFrame(_0x3f3cf8, _0x546e7b, _0x41e298.url);
						}
					} else {
						if (_0x3a91e2 === 0x1) {
							if (_0x41e298.index >= _0x41e298.timeArray.length || _0x3f3cf8.scrubbing())
								continue;
							var _0x59c366 = _0x41e298.timeArray[_0x41e298.index];
							if (typeof _0x59c366 == 'undefined')
								continue;
							if (_0x4b0798 >= _0x59c366) {
								if (_0x546e7b === 0x1 || _0x546e7b === 0x2) {
									_0x3fb3b3++;
									if (_0x3fb3b3 > 0x1)
										break;
								}
								_0x41e298.index++;
								var _0x1f2a4f = _0x41e298.url;
								_0x546e7b === 0x0 ? _0x4e1423.initHeartbeat(_0x1f2a4f) : (_0x546e7b === 0x1 || _0x546e7b === 0x2) && _0x4e1423.showIFrame(_0x3f3cf8, _0x546e7b, _0x1f2a4f);
							}
						}
					}
				}
			}
		} catch (err) {
			console.log(err);
		}
	},
	'resetTime': function (_0x370da5, _0x26aff6) {
		try {
			var me = this, i;
			for (i = 0x0; i < me.eventArray.length; i++) {
				var _0xcb3b9c = me.eventArray[i];
				if (_0x26aff6 <= _0xcb3b9c.startTime) {
					me.index = i;
					break;
				}
			}
		} catch (err) {
			console.log(err);
		}
	}
});
function sortArray(_0x55dae1) {
	try {
		return _0x55dae1 && _0x55dae1.sort && _0x55dae1.sort(function (_0x571e25, _0x224877) {
			return _0x571e25 - _0x224877;
		});
	} catch (err) {
		console.log(err);
	}
	return _0x55dae1;
}
(function () {
	var b = videojs.getPlugin('plugin'), a = videojs.extend(b, {
		'constructor': function (player, options) {
			if (typeof options.supportHeartbeat == 'undefined' || !options.supportHeartbeat)
				return;
			b.call(this, player, options),
				player.pauseTimeStamp = 0x0,
				player.pauseTimeRange = 0x0;
			var d = null;
			try {
				d = Ext.create('ans.videojs.CustomIframe', {
					'renderTo': player.el_,
					'supportHeartbeat': options.supportHeartbeat,
					'eventArray': options.eventArray,
					'courseid': options.courseid,
					'clazzId': options.clazzId,
					'knowledgeid': options.knowledgeid,
					'objectid': options.objectid,
					'videoEnc': options.videoEnc,
					'userId': options.userId,
					'cookieFid': options.cookieFid,
					'headOffset': options.headOffset
				});
			} catch (err) {
				console.log(err);
			}
			if (d == null)
				return;
			player.on('play', function () {
				try {
					var h = new Date().getTime();
					d.eventArray.forEach(function (e) {
						var f = parseInt(e.eventIntervalType);
						if (f === 0x0) {
							if (e.pauseTimeStamp > 0x0) {
								e.pauseTimeStamp < e.lastHeartbeat && (e.pauseTimeStamp = e.lastHeartbeat);
								var g = h - e.pauseTimeStamp;
								e.pauseTimeRange += g;
							}
							e.pauseTimeStamp = 0x0;
						}
					}),
						d.resetTime(player, player.currentTime());
				} catch (err) {
					console.log(err);
				}
			}),
				player.on('seekend', function () {
					d.resetTime(player, player.currentTime());
				}),
				player.on('pause', function () {
					try {
						var j = new Date().getTime();
						d.eventArray.forEach(function (k) {
							var l = parseInt(k.eventIntervalType);
							l === 0x0 && (k.pauseTimeStamp = j);
						});
					} catch (err) {
						console.log(err);
					}
				}),
				player.on('timeupdate', function () {
					try {
						!player.paused() && d.updateTime(player, parseInt(player.currentTime())),
							d.playTime = player.currentTime();
					} catch (err) {
						console.log(err);
					}
				}),
				window.addEventListener('message', function (m) {
					try {
						if (!options.supportHeartbeat || !isStuViewPage())
							return;
						var n = m.data;
						if (typeof n == 'undefined') {
							d.resetDiv(player);
							return;
						}
						var o = parseInt(options.duration);
						if (n.opType === 'fastForward') {
							var p = n.value;
							if (typeof p === 'undefined') {
								d.resetDiv(player);
								return;
							}
							p = parseInt(p);
							if (!(p > 0x0)) {
								d.resetDiv(player);
								return;
							}
							player.ignoreSeek = false,
								player.switchStatus = true;
							var q = player.currentTime();
							q = parseInt(q);
							var r = q + p;
							if (r > o) {
								d.resetDiv(player);
								return;
							}
							d.seekVideoTime(player, r);
							return;
						}
						if (n.opType === 'videoStartTime') {
							var p = n.value;
							if (typeof p === 'undefined') {
								d.resetDiv(player);
								return;
							}
							p = parseInt(p);
							if (!(p >= 0x0) || p > o) {
								d.resetDiv(player);
								return;
							}
							player.ignoreSeek = false,
								player.switchStatus = true,
								d.seekVideoTime(player, p);
						}
					} catch (err) {
						console.log(err);
					}
				});
		}
	});
	videojs.registerPlugin('customIframePlugin', a);
}());
(function () {
	var Plugin = videojs.getPlugin('plugin'), Marker = videojs.extend(Plugin, {
		'constructor': function (player, options) {
			Plugin.call(this, player, options);
			if (!options.url)
				return;
			var me = this;
			Ext.Ajax.request({
				'url': options.url,
				'async': false,
				'success': function (resp) {
					if (resp.status != 0xc8)
						return;
					eval('var data=' + resp.responseText);
					if (!data.status)
						return;
					var videoPlayer = videojs('video');
					if (videoPlayer && typeof videoPlayer.markers === 'function') {
						var _0x546785 = player.eventPoints;
						_0x546785.push.apply(_0x546785, data.list),
							videoPlayer.markers({
								'markerTip': {
									'display': true,
									'text': function (marker) {
										return marker.text;
									}
								},
								'markers': _0x546785,
								'onMarkerClick': function (marker) {
									if (options.ff != 0x1)
										return false;
									var _0x7cd138 = $(this).data('marker-key');
									return player.currentTime(marker.time),
										false;
								}
							});
					}
					if (data.list && data.list.length > 0x0) {
						var _0x75a52c = [], _0x2d8612 = {};
						for (var i = 0x0; i < data.list.length; i++) {
							var _0x1dd3d8 = data.list[i], _0x269a35 = _0x1dd3d8.text;
							if (!_0x2d8612[_0x269a35]) {
								var _0x7cdac7 = [];
								_0x7cdac7.push(_0x1dd3d8),
									_0x2d8612[_0x269a35] = _0x7cdac7,
									_0x75a52c.push(_0x269a35);
							} else {
								var _0x3e102a = _0x2d8612[_0x269a35];
								_0x3e102a.push(_0x1dd3d8),
									_0x2d8612[_0x269a35] = _0x3e102a;
							}
						}
						function _0x5379bb(_0x253cd1) {
							var _0x4d0da8 = '<div class="zsCloud_box"><h2 class="zsCloud_seltime">选择时间</h2><div class="zsCloud_div"><div class="zsCloud_div_list">';
							for (var i = 0x0; i < _0x253cd1.length; i++) {
								var _0x5dda42 = _0x253cd1[i], _0x4423cc = Ext.fly(topicContent.elements[0x0]).select('.topicId' + _0x5dda42.topicid + ':not(.markertime)'), _0x3116e6 = videojs.formatTime(_0x5dda42.time);
								_0x4423cc && _0x4423cc.elements[0x0] && _0x4423cc.elements[0x0].parentElement.remove(),
									_0x4d0da8 += '<div class="zsCloud_item topicId' + _0x5dda42.topicid + '" data-marker-time="' + _0x5dda42.time + '" title="' + _0x3116e6 + '" onclick="markersPlayer(this)">' + _0x3116e6 + '</div>';
							}
							return _0x4d0da8 += '</div></div></div>',
								_0x4d0da8;
						}
						Ext.select('.zsCloud').setStyle('display', 'block');
						var topicContent = Ext.select('.zsCloud_ul');
						if (topicContent && topicContent.elements[0x0]) {
							var insertLocaltion;
							for (var i = 0x0; i < _0x75a52c.length; i++) {
								var _0x2675df = _0x75a52c[i], _0x29f92d = _0x2d8612[_0x2675df], markerHtml = '';
								if (_0x29f92d) {
									if (_0x29f92d.length == 0x1) {
										var marker = _0x29f92d[0x0], topic = Ext.fly(topicContent.elements[0x0]).select('.topicId' + marker.topicid + ':not(.markertime)'), title = videojs.formatTime(marker.time);
										topic && topic.elements[0x0] && topic.elements[0x0].parentElement.remove(),
											markerHtml = '<li><span class=\'topicId' + marker.topicid + ' markertime\' data-marker-time=\'' + marker.time + '\' title=\'' + title + '\' onclick=\'markersPlayer(this)\'>' + marker.text + '</span></li>';
									} else
										markerHtml = '<li class="zsCloud_select"><span class="zsCloud_span">' + _0x2675df + '</span>',
											_0x29f92d && _0x29f92d.length > 0x0 ? markerHtml += _0x5379bb(_0x29f92d) : markerHtml += '</li>';
								}
								insertLocaltion ? insertLocaltion = Ext.DomHelper.insertHtml('afterEnd', insertLocaltion.elements[0x0], markerHtml) : insertLocaltion = Ext.DomHelper.insertHtml('afterBegin', topicContent.elements[0x0], markerHtml),
									insertLocaltion = Ext.fly(insertLocaltion).select('');
							}
						}
						options.videoTopicCloud && options.videoTopicCloud == 0x1 && (Ext.select('.zsCloud_down').setStyle('display', 'block'),
							Ext.select('.zsCloud_body').setStyle('display', 'block'));
					}
					var dataMap = new Map(), wordList = new Array();
					if (data.list && data.list.length > 0x0)
						for (var i = 0x0; i < data.list.length; i++) {
							var topicid = data.list[i].topicid, item = dataMap.get(topicid);
							!item && (item = {},
								item.text = data.list[i].text,
								item.time = data.list[i].time,
								item.topicid = data.list[i].topicid,
								item.weight = 0x0,
								item.html = {
									'data-marker-time': data.list[i].time,
									'onclick': 'markersPlayer(this)'
								},
								dataMap.set(topicid, item),
								wordList.push(item)),
								item.weight += 0x1;
						}
					$(function () {
						wordList.length != 0x0 && $('#word_cloud').jQCloud(wordList);
						function _0x1f7c84(_0x4ecaf7) {
							$(_0x4ecaf7).niceScroll({
								'cursorborder': '',
								'cursorwidth': 0x8,
								'cursorcolor': '#DADFE6',
								'boxzoom': false,
								'autohidemode': true
							}),
								setInterval(function () {
									$(_0x4ecaf7).getNiceScroll().resize();
								}, 0x12c);
						}
						$('.zsCloud_box').each(function (_0x575dc7) {
							$(this).find('.zsCloud_div').attr('id', 'zsCloud_div_' + _0x575dc7),
								_0x1f7c84('#zsCloud_div_' + _0x575dc7);
						});
					}),
						$('.zsCloud_down').click(function () {
							var con = $('.zsCloud_body');
							con.is(':visible') ? (con.hide(),
								$(this).addClass('zsCloud_up'),
								$(this).text('展开')) : (con.show(),
									$(this).removeClass('zsCloud_up'),
									$(this).text('收起'));
						});
				}
			});
		}
	});
	videojs.registerPlugin('marker', Marker);
}());
(function () {
	var Plugin = videojs.getPlugin('plugin'), Subtitle = videojs.extend(Plugin, {
		'constructor': function (player, options) {
			Plugin.call(this, player, options);
			var me = this, subtitleUrl = options.subtitleUrl, toVtt = function (srt) {
				var m = srt.match(/support\/(\w+).\w+/);
				if (m)
					return ServerHosts.PARENT_HOST + '/ananas/video-editor/sub?objectid=' + m[0x1];
			}, addSub = function (name, src, isdefault) {
				player.addRemoteTextTrack({
					'kind': 'subtitles',
					'srclang': 'cn',
					'label': name,
					'src': src,
					'default': isdefault
				}, true);
			};
			player.ready(function () {
				subtitleUrl && Ext.Ajax.request({
					'url': subtitleUrl,
					'success': function (resp) {
						if (resp.status != 0xc8)
							return;
						eval('var subs=' + resp.responseText);
						var index = 0x0, enIndex = 0x0;
						subs.length > 0x0 && Ext.each(subs, function (o) {
							options.translate == 0x1 && o.name == 'English' ? (o.selected = true,
								enIndex = index) : o.selected = false,
								addSub(o.name, toVtt(o.url), o.selected),
								index++;
						}),
							options.translate == 0x1 && (Ext.select('.vjs-subs-caps-button .vjs-icon-placeholder').setHTML('翻译'),
								Ext.select('.vjs-subs-caps-button .vjs-icon-placeholder').addCls('vjs-hide-content')),
							setTimeout(function () {
								var tracks = player.textTracks();
								options.translate == 0x1 ? tracks && tracks[enIndex] ? tracks[enIndex].mode = 'showing' : tracks && tracks[0x0] && (tracks[0x0].mode = 'showing') : tracks && tracks[0x0] && (tracks[0x0].mode = 'showing');
							}, 0x1f4);
					}
				});
				var settings = player.textTrackSettings;
				settings.setValues({
					'backgroundColor': '#000',
					'backgroundOpacity': '0',
					'edgeStyle': 'uniform'
				}),
					settings.updateDisplay();
			});
		}
	});
	videojs.registerPlugin('subtitle', Subtitle);
}());
Ext.define('ans.videojs.ErrorDisplay', {
	'extend': 'Ext.Component',
	'xtype': 'vjserrdisplay',
	'cls': 'ans-vjserrdisplay',
	'renderTpl': ['<div class="ans-vjserrdisplay-title">{errorMsg}</div>', '<ul class="ans-vjserrdisplay-opts">', '您可以尝试其他线路:', '<tpl for="playlines">', '<li class="ans-vjserrdisplay-opt"><label>', '<input type="radio" name="ans-vjserrdisplay-opt" {[xindex-1 === parent.selectedIndex ? "checked disabled":""]}>', '{label}', '</label></li>', '</tpl>', '</ul>'],
	'renderSelectors': {
		'errorMsgEl': 'div.ans-vjserrdisplay-title'
	},
	'afterRender': function () {
		var b = this;
		b.callParent(arguments);
		var a = Ext.query('input', b.el.dom);
		Ext.each(a, function (f, e) {
			Ext.fly(f).on('click', function () {
				b.onSelected(e);
			});
		});
		try {
			typeof createVideoTask === 'function' ? createVideoTask() : console.log('createVideoTask函数不存在！');
		} catch (c) { }
		try {
			if (typeof aplus_queue != 'undefined') {
				var _0x53f711 = parent.AttachmentSetting;
				if (_0x53f711) {
					var _0x2b781d = _0x53f711.aplus_video_id, _0x387656 = _0x53f711.aplus_resource_id, _0x46f7df = _0x53f711.knowledgename, _0x522538 = _0x53f711.coursename;
					aplus_queue.push({
						'action': 'aplus.record',
						'arguments': ['pybk_error', 'OTHER', {
							'video_name': _0x46f7df,
							'video_id': _0x2b781d,
							'resource_id': _0x387656,
							'resource_name': _0x522538
						}]
					});
				}
			}
		} catch (c) { }
	},
	'setErrorMsg': function (a) {
		Ext.fly(this.errorMsgEl).setHTML(a);
	}
});
Ext.define('ans.videojs.ErrorNote', {
	'extend': 'Ext.Component',
	'cls': 'ans-vjserrdisplay',
	'renderTpl': ['<div class="ans-vjserrdisplay-title">播放出现异常。</div>']
});
(function () {
	var b = videojs.getComponent('ErrorDisplay'), a = videojs.extend(b, {
		'constructor': function (e, c) {
			b.call(this, e, c);
		},
		'colse': function () {
			b.prototype.colse.call(this),
				me.ansErrorDisplay && (me.ansErrorDisplay.destroy(),
					me.ansErrorDisplay = null);
		},
		'fill': function () {
			b.prototype.fill.call(this);
			var g = this, i = g.player_, h = i.options_.playlines, e = Ext.query('.vjs-modal-dialog-content', g.el_)[0x0];
			g.ansErrorDisplay && (g.ansErrorDisplay.destroy(),
				delete g.ansErrorDisplay);
			if (!i.selectCDN || !h) {
				g.ansErrorDisplay = Ext.create('ans.videojs.ErrorNote', {
					'renderTo': g.el_
				});
				return;
			}
			var f = i.currentPlayline(), c = 0x0;
			Ext.each(h, function (k, j) {
				f == k && (c = j);
			}),
				g.ansErrorDisplay = Ext.create('ans.videojs.ErrorDisplay', {
					'renderTo': g.el_,
					'onSelected': function (j) {
						i.selectCDN(j),
							g.close();
					},
					'renderData': {
						'playlines': h,
						'errorMsg': g.content(),
						'selectedIndex': c
					}
				});
		}
	});
	videojs.registerComponent('ErrorDisplay', a);
}());
(function () {
	var a = null;
	typeof window.videojs === 'undefined' && typeof require === 'function' ? a = require('video.js') : a = window.videojs,
		function (i, h) {
			var g = {}, c, k = {}, b = {};
			function f(p, o, n, q) {
				k = {
					'label': n,
					'sources': o
				};
				if (typeof q === 'function')
					return q(p, o, n);
				return p.src(o.map(function (r) {
					return {
						'src': r.src,
						'type': r.type,
						'res': r.res
					};
				})),
					p;
			}
			var l = h.getComponent('MenuItem'), m = h.extend(l, {
				'constructor': function (p, o, n, q) {
					this.onClickListener = n,
						this.label = q,
						l.call(this, p, o),
						this.src = o.src,
						this.on('click', this.onClick),
						this.on('touchstart', this.onClick),
						o.initialySelected && (this.showAsLabel(),
							this.selected(true),
							this.addClass('vjs-selected'));
				},
				'showAsLabel': function () {
					this.label && (this.label.innerHTML = this.options_.label);
				},
				'onClick': function (q) {
					this.onClickListener(this);
					var p = this.player_.currentTime(), n = this.player_.paused();
					this.showAsLabel(),
						this.addClass('vjs-selected');
					!n && this.player_.bigPlayButton.hide();
					typeof q !== 'function' && typeof this.options_.customSourcePicker === 'function' && (q = this.options_.customSourcePicker);
					var o = 'loadeddata';
					this.player_.techName_ !== 'Youtube' && this.player_.preload() === 'none' && this.player_.techName_ !== 'Flash' && (o = 'timeupdate'),
						f(this.player_, this.src, this.options_.label, q).one(o, function () {
							var r = this.player_;
							r.switchStatus = true,
								r.currentTime(p),
								!n && r.play(),
								r.trigger('resolutionchange');
						});
				}
			});
			h.registerComponent('ResolutionMenuItem', m);
			var j = h.getComponent('MenuButton'), e = h.extend(j, {
				'constructor': function (q, o, r, n) {
					this.sources = o.sources,
						this.label = n,
						this.label.innerHTML = o.initialySelectedLabel,
						j.call(this, q, o, r),
						this.controlText('Quality');
					if (r.dynamicLabel)
						this.el().appendChild(n);
					else {
						var p = document.createElement('span');
						h.dom.addClass(p, 'vjs-resolution-button-staticlabel'),
							this.el().appendChild(p);
					}
				},
				'createItems': function () {
					var o = [], q = this.sources && this.sources.label || {}, p = function (r) {
						o.map(function (s) {
							s.selected(s === r),
								s.removeClass('vjs-selected');
						});
					};
					for (var n in q) {
						q.hasOwnProperty(n) && (o.push(new m(this.player_, {
							'label': n,
							'src': q[n],
							'initialySelected': n === this.options_.initialySelectedLabel,
							'customSourcePicker': this.options_.customSourcePicker
						}, p, this.label)),
							b[n] = o[o.length - 0x1]);
					}
					return o;
				}
			});
			c = function (w) {
				var p = h.mergeOptions(g, w), u = this, t = document.createElement('span'), s = {};
				h.dom.addClass(t, 'vjs-resolution-button-label'),
					u.updateSrc = function (y) {
						if (!y)
							return u.src();
						u.controlBar.resolutionSwitcher && (u.controlBar.resolutionSwitcher.dispose(),
							delete u.controlBar.resolutionSwitcher);
						y = y.sort(r),
							s = q(y);
						var z = o(s, y), x = new e(u, {
							'sources': s,
							'initialySelectedLabel': z.label,
							'initialySelectedRes': z.res,
							'customSourcePicker': p.customSourcePicker
						}, p, t);
						return h.dom.addClass(x.el(), 'vjs-resolution-button'),
							u.controlBar.resolutionSwitcher = u.controlBar.el_.insertBefore(x.el_, u.controlBar.getChild('fullscreenToggle').el_),
							u.controlBar.resolutionSwitcher.dispose = function () {
								this.parentNode.removeChild(this);
							},
							f(u, z.sources, z.label, p.customSourcePicker);
					},
					u.currentResolution = function (x, y) {
						if (x == null)
							return k;
						return b[x] != null && b[x].onClick(y),
							u;
					},
					u.getGroupedSrc = function () {
						return s;
					};
				function r(y, x) {
					if (!y.res || !x.res)
						return 0x0;
					return +x.res - +y.res;
				}
				function q(y) {
					var x = {
						'label': {},
						'res': {},
						'type': {}
					};
					return y.map(function (z) {
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
					x[y][z[y]].push(z);
				}
				function o(z, A) {
					var y = p.default, x = '';
					return y === 'high' ? (y = A[0x0].res,
						x = A[0x0].label) : y === 'low' || y == null || !z.res[y] ? (y = A[A.length - 0x1].res,
							x = A[A.length - 0x1].label) : z.res[y] && (x = z.res[y][0x0].label),
					{
						'res': y,
						'label': x,
						'sources': z.res[y]
					};
				}
				u.ready(function () {
					u.options_.sources.length > 0x0 && u.setTimeout(function () {
						u.updateSrc(u.options_.sources);
					}, 0x1);
				});
			},
				h.registerPlugin('videoJsResolutionSwitcher', c);
		}(window, a);
}());
(function () {
	(function (i, h) {
		var f = {}, b, g = {}, a = {};
		function c(o, n, m, p) {
			g = n;
			if (typeof p === 'function')
				return p(o, n, m);
			return o;
		}
		var l = h.getComponent('ResolutionMenuItem'), e = h.extend(l, {
			'onClick': function (q) {
				this.onClickListener(this);
				var p = this.player_.currentTime(), m = this.player_.paused();
				this.showAsLabel(),
					this.addClass('vjs-selected');
				!m && this.player_.bigPlayButton.hide();
				typeof q !== 'function' && typeof this.options_.customSourcePicker === 'function' && (q = this.options_.customSourcePicker);
				var o = 'loadeddata';
				this.player_.techName_ !== 'Youtube' && this.player_.preload() === 'none' && this.player_.techName_ !== 'Flash' && (o = 'timeupdate');
				var n = c(this.player_, this.src, this.options_.label, q);
				n && n.one(o, function () {
					n.switchStatus = true,
						n.currentTime(p),
						!m && n.play(),
						n.trigger('playlinechange');
				});
			}
		}), j = h.getComponent('MenuButton'), k = h.extend(j, {
			'constructor': function (p, n, q, m) {
				this.playlines = n.playlines,
					this.label = m,
					this.label.innerHTML = n.initialySelectedLabel,
					j.call(this, p, n, q),
					this.controlText('Playline');
				if (q.dynamicLabel)
					this.el().appendChild(m);
				else {
					var o = document.createElement('span');
					h.addClass(o, 'vjs-resolution-button-staticlabel'),
						this.el().appendChild(o);
				}
			},
			'createItems': function () {
				var o = [], q = this.playlines || [], p = function (r) {
					o.map(function (s) {
						s.selected(s === r),
							s.removeClass('vjs-selected');
					});
				};
				for (var n = 0x0; n < q.length; n++) {
					var m = q[n].label;
					o.push(new e(this.player_, {
						'label': m,
						'src': q[n],
						'initialySelected': m === this.options_.initialySelectedLabel,
						'customSourcePicker': this.options_.customSourcePicker
					}, p, this.label)),
						a[m] = o[o.length - 0x1];
				}
				return o;
			}
		});
		b = function (o) {
			var q = h.mergeOptions(f, o), p = this, n = document.createElement('span'), r = p.options_.playlines;
			h.dom.addClass(n, 'vjs-resolution-button-label');
			var m = new k(p, {
				'playlines': r,
				'initialySelectedLabel': r[0x0].label,
				'initialySelectedUrl': r[0x0].url,
				'customSourcePicker': q.customSourcePicker
			}, q, n);
			h.dom.addClass(m.el(), 'vjs-resolution-button'),
				h.dom.addClass(m.el(), 'vjs-playline-button'),
				m.show(),
				p.selectCDN = function (s) {
					m.items[s].onClick(q.customSourcePicker),
						p.play();
				},
				r.length > 0x0 && (g = r[0x0]),
				p.currentPlayline = function () {
					return g;
				},
				p.ready(function () {
					p.controlBar.videoJsPlayLine = p.controlBar.el_.insertBefore(m.el_, p.controlBar.getChild('fullscreenToggle').el_),
						p.controlBar.videoJsPlayLine.dispose = function () {
							this.parentNode.removeChild(this);
						};
				});
		},
			h.registerPlugin('videoJsPlayLine', b);
	}(window, videojs));
}());
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
		var b = videojs(a.videojs, c.params2VideoOpt(a.params), function () { });
		Ext.fly(a.videojs).on('contextmenu', function (f) {
			f.preventDefault();
		}),
			Ext.fly(a.videojs).on('keydown', function (f) {
				(f.keyCode == 0x20 || f.keyCode == 0x25 || f.keyCode == 0x27) && f.preventDefault(),
					f.keyCode == 0x20 && (b.paused() ? b.play() : b.pause());
			});
	},
	'params2VideoOpt': function (params) {
		var sources = [];
		!params.rootPath && (params.rootPath = '');
		params.http && sources.push({
			'src': params.http,
			'type': 'audio/mp3'
		});
		var logFunc = function (player, url, callback) {
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
						d.isPassed && callback();
						return;
					}
					me.logCount >= 0x4 && (me.logCount = 0x0,
						player.pause(),
						resp.statusCode != 0x0 ? alert('服务繁忙，不能保证您能否正常完成任务，请您稍后继续...(e: ' + resp.statusCode + ')') : alert('您的网络不稳定，请您稍后继续...'));
				});
		}, sendLog_ = function (player, isdrag, currentTimeSec, callback) {
			if (!params.reportUrl)
				return;
			if (params.isFiled == 0x1 || params.state == 0x1)
				return;
			var format = '[{0}][{1}][{2}][{3}][{4}][{5}][{6}][{7}]', clipTime = (params.startTime || '0') + '_' + (params.endTime || params.duration), var_20220210_1 = 0x0, var_20220210_2;
			currentTimeSec.toString().indexOf('-') != -0x1 ? (var_20220210_2 = currentTimeSec.split('-'),
				var_20220210_2.length == 0x2 && (var_20220210_1 = parseInt(var_20220210_2[0x1]) * 0x3e8)) : var_20220210_1 = currentTimeSec * 0x3e8;
			if (var_20220210_1 == params.duration * 0x3e8 && isdrag == 0x2)
				return;
			var enc = Ext.String.format(format, params.clazzId, params.userid, params.jobid ? params.jobid : '', params.objectId, var_20220210_1, 'd_yHJ!$pdA~5', params.duration * 0x3e8, clipTime), rurl = [params.reportUrl, '/', params.dtoken, '?clazzId=', params.clazzId, '&playingTime=', currentTimeSec, '&duration=', params.duration, '&clipTime=', clipTime, '&objectId=', params.objectId, '&otherInfo=', params.otherInfo, '&jobid=', params.jobid, '&userid=', params.userid, '&isdrag=', isdrag, '&view=pc', '&enc=', md5(enc), '&rt=', params.rt, '&dtype=Audio', '&_t=', new Date().getTime()].join('');
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
					'title': params.filename
				},
				'studyControl': {
					'enableSwitchWindow': 0x1
				},
				'seekBarControl': {
					'headOffset': params.headOffset,
					'enableFastForward': params.enableFastForward,
					'isSendLog': !!parent.AttachmentSetting && params.control,
					'reportTimeInterval': params.reportTimeInterval,
					'sourcePlayer': 'audio',
					'sendLog': function (player, evt, sec) {
						if (this.isSendLog !== true)
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
						sendLog_(player, isdrag, sec, function () {
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
	var b = videojs.getPlugin('plugin'), a = videojs.extend(b, {
		'constructor': function (e, c) {
			b.call(this, e, c),
				Ext.create('ans.videojs.AudioNote', {
					'renderTo': e.el_,
					'html': c.title
				});
		}
	});
	videojs.registerPlugin('audioNote', a);
}());
