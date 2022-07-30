Ext.define("ananas.ServerHosts", {
	alternateClassName: "ServerHosts",
	singleton: true,
	constructor: function () {
		var a = this;
		a.callParent(arguments);
		var b = document.domain;
		try {
			a.MASTER_HOST = location.protocol + "//" + top.location.host;
		} catch (c) {
			a.MASTER_HOST = location.protocol + "//" + location.host;
		}
		try {
			a.PARENT_HOST = parent.location.host !== "" ? location.protocol + "//" + parent.location.host : a.MASTER_HOST;
		} catch (c) {
			a.PARENT_HOST = location.protocol + "//" + location.host;
		}
		a.P_HOST = location.protocol + "//p.ananas.chaoxing.com";
		a.s1_HOST = location.protocol + "//s1.ananas.chaoxing.com";
		a.s2_HOST = location.protocol + "//s2.ananas.chaoxing.com";
		a.CLOUD_HOST = "http://cloud.ananas." + b;
		a.NEW_CLOUD_HOST = location.protocol + "//pan-yz.chaoxing.com";
		a.CS_HOST = location.protocol + "//cs.ananas." + b;
		a.FANYA_HOST = "http://course.fanya." + b;
		a.PAN_HOST = "http://pan.ananas." + b;
		a.CXLIVE_HOST = "http://cxlive." + b;
		a.ERYA_TSK_HOST = "http://erya.tsk." + b;
		a.QUESTIONNAIRE_HOST = "http://surveyapp.fy." + b;
		a.FX_HOST = "http://www." + b;
		a.PHONE_ZT_HOST = "https://special.rhky.com";
		a.CHAOXING_CLASS_HOST = "https://k.chaoxing.com";
		a.LIVE_HOST = location.protocol + "//live.chaoxing.com";
		a.APPCD_HOST = location.protocol + "//appcd.chaoxing.com";
		a.ZHIBO_HOST = "https://zhibo.chaoxing.com";
		a.CXCLASSTASL_HOST = location.protocol + "//noteyd.chaoxing.com";
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
		var x, v = "", y = w.length * 0x20;
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
	setCookie: function (c, f) {
		var a = arguments, i = arguments.length, b = i > 0x2 ? a[0x2] : null, h = i > 0x3 ? a[0x3] : '/', e = i > 0x4 ? a[0x4] : null, g = i > 0x5 ? a[0x5] : false;
		document.cookie = c + '=' + escape(f) + (b === null ? '' : '; expires=' + b.toGMTString()) + (h === null ? '' : '; path=' + h) + (e === null ? '' : '; domain=' + e) + (g === true ? '; secure' : '');
	},
	getCookie: function (e, h) {
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
	getCookieVal: function (b) {
		var a = document.cookie.indexOf(';', b);
		return a == -0x1 && (a = document.cookie.length),
			unescape(document.cookie.substring(b, a));
	}
});
Ext.define('ans.VideoJs', {
	videoJs: null,
	mixins: {
		observable: 'Ext.util.Observable'
	},
	constructor: function (b) {
		b = b || {};
		var e = this;
		e.addEvents(['seekstart']),
			e.mixins.observable.constructor.call(e, b);
		var c = videojs(b.videojs, e.params2VideoOpt(b.params), function () { });
		Ext.fly(b.videojs).on('contextmenu', function (f) {
			f.preventDefault();
		}),
			Ext.fly(b.videojs).on('keydown', function (f) {
				(f.keyCode == 0x20 || f.keyCode == 0x25 || f.keyCode == 0x27 || f.keyCode == 0x6b) && f.preventDefault();
			});
		c.videoJsResolutionSwitcher && c.on('resolutionchange', function () {
			var g = c.currentResolution(), f = g.sources ? g.sources[0x0].res : false;
			Ext.setCookie('resolution', f);
		});
		var a = b.params && b.params.doublespeed ? 0x2 : 0x1;
		c.on('ratechange', function () {
			var h = c.playbackRate();
			h > a ? (c.pause(), c.playbackRate(0x1)) : Ext.setCookie('doubleSpeedValue', h);	// ====Modified====
		});
		c.on('play', function () {	// ====Modified====
			if (b.params && b.params.doublespeed) {
				var xxx = Ext.getCookie('doubleSpeedValue', 0x1);
				c.playbackRate(xxx);
			}
		});
	},
	params2VideoOpt: function (params) {	// ====Modified====
		var new_var_1 = typeof params.cpi == 'undefined' ? 0x0 : params.cpi, useM3u8 = false, cdn = [{
			indexorder: 0x0,
			label: '公网1',
			url: ServerHosts.s1_HOST,
			ispublic: true
		}, {
			indexorder: 0x1,
			label: '公网2',
			url: ServerHosts.s2_HOST,
			ispublic: true
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
					src: file,
					type: 'video/mp4',
					res: src.res
				};
			return r.ispublic ? useM3u8 ? {
				src: m3u8(params.objectId, src.resolution, r.url),
				type: 'application/x-mpegURL',
				res: src.res
			} : {
				src: r.url + file,
				type: 'video/mp4',
				res: src.res
			} : useM3u8 ? {
				src: m3u8(params.objectId, src.resolution, r.url + sdomain),
				type: 'application/x-mpegURL',
				res: src.res
			} : {
				src: r.url + sdomain + file,
				type: 'video/mp4',
				res: src.res
			};
		}
		var sources = [], defaultRes = Ext.getCookie('resolution', 0x168);
		!params.rootPath && (params.rootPath = '');
		params.http && sources.push({
			src: params.http,
			type: 'video/mp4',
			label: '标清',
			resolution: 'sd',
			res: 0x168
		});
		params.httphd && sources.push({
			src: params.httphd,
			type: 'video/mp4',
			label: '高清',
			resolution: 'hd',
			res: 0x2d0
		});
		params.httpshd && sources.push({
			src: params.httpshd,
			type: 'video/mp4',
			label: '超高清',
			resolution: 'shd',
			res: 0x438
		});
		params.httpmd && sources.push({
			src: params.httpmd,
			type: 'video/mp4',
			label: '极速',
			resolution: 'md',
			res: 0xf0
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
					uri: url,
					headers: {
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
								alert('服务繁忙，不能保证您能否正常完成任务，请您稍后继续...(e: ' + resp.statusCode + ')');
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
			language: 'zh-CN',
			poster: params.screenshot,
			controls: true,
			preload: 'none',
			sources: sources,
			playlines: cdn,
			playbackRates: params.doublespeed != 0x0 ? [0x1, 1.25, 1.5, 0x2] : false,
			textTrackDisplay: true,
			controlBar: {
				volumePanel: {
					inline: false
				},
				children: ['playToggle', 'playbackRateMenuButton', 'currentTimeDisplay', 'timeDivider', 'durationDisplay', 'progressControl', 'volumePanel', 'subsCapsButton', 'fullscreenToggle', 'videoJsPlayLine', 'textTrackButton']
			},
			plugins: {
				videoJsResolutionSwitcher: {
					default: defaultRes,
					dynamicLabel: true,
					customSourcePicker: function (player, sources, label) {
						var r = player.currentPlayline();
						return player.src(sources.map(function (src) {
							return makeSource(src, r);
						})),
							player;
					}
				},
				videoJsPlayLine: {
					dynamicLabel: true,
					customSourcePicker: function (player, r, label) {
						var src = player.currentResolution().sources[0x0];
						return player.src(makeSource(src, r)),
							player;
					}
				},
				studyControl: {
					enableSwitchWindow: params.enableSwitchWindow
				},
				seekBarControl: {
					headOffset: params.headOffset,
					enableFastForward: params.enableFastForward,
					isSendLog: !!parent.AttachmentSetting && params.control,
					reportTimeInterval: params.reportTimeInterval,
					isShowDanmu: params.danmaku,
					chapterCapture: params.chapterCapture || 0x0,
					captureInterval: params.captureInterval || 0x258,
					chapterCollectionType: params.chapterCollectionType || 0x0,
					startCapture: params.startCapture,
					endCapture: params.endCapture,
					playAginCapture: params.playAginCapture,
					playingCapture: params.playingCapture,
					playingLoopCapture: params.playingLoopCapture,
					duration: params.duration,
					isSupportFace: params.isSupportFace || false,
					isShowFaceCollection: params.isShowFaceCollection,
					jumpTimePointList: params.jumpTimePointList,
					attachmentId: params.aId,
					sendLog: function (player, evt, sec, A) {
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
						var B = this;
						sendLog_(player, isdrag, sec, function () {
							try {
								isdrag === 0x4 && typeof A != 'undefined' && (A.sendDataLog('ended'),
									A.playNextVideo(B.attachmentId));
							} catch (e) {
								console.log(e);
							}
							window.proxy_completed && window.proxy_completed();
						});
					}
				},
				timelineObjects: {
					url: params.rootPath + '/richvideo/initdatawithviewerV2?mid=' + params.mid + '&cpi=' + params.cpi + '&classid=' + params.clazzId,
					quizErrorReportUrl: params.rootPath + '/question/addquestionerror?classid=' + params.clazzId + '&cpi=' + params.cpi,
					validationUrl2: params.rootPath + '/question/quiz-validation?classid=' + params.clazzId + '&cpi=' + new_var_1 + '&objectid=' + params.objectId,
					quizRightCountUrl: params.rootPath + '/question/quiz-rightcount?classid=' + params.clazzId + '&cpi=' + new_var_1	// ====Modified====
				},
				subtitle: {
					translate: params.chapterVideoTranslate,
					subtitleUrl: params.rootPath + '/richvideo/allsubtitle?mid=' + params.mid + '&objectid=' + params.objectId + '&courseid=' + params.courseid,
					subtitle: params.rootPath + '/ananas/video-editor/sub?objectid=' + params.subobjectid
				},
				marker: {
					url: !params.isNotMark ? params.rootPath + '/ananas/getpoints?courseid=' + params.courseid + '&mid=' + params.mid : '',
					ff: params.enableFastForward,
					videoTopicCloud: params.videoTopicCloud
				}
			}
		};
	}
});
Object.defineProperty(ans.VideoJs.prototype, 'params2VideoOpt', {
	configurable: false,
	writable: false
});
Object.freeze(ans.VideoJs.prototype.params2VideoOpt);
(function () {
	var b = videojs.getPlugin('plugin'), a = videojs.extend(b, {
		constructor: function (f, c) {
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
		singleton: function (c) {
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
		constructor: function (e, c) {
			a.call(this, e, c);
			var f = this;
			e.ignorePause = false,
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
		getCurrentTime_: function () {
			return this.player_.currentTime();
		},
		getMaxPercent: function () {
			return this.maxPercent;
		},
		isBackward: function (c) {
			return this.maxPercent > this.calculateDistance(c);
		},
		handleMouseDown: function (c) {
			if (this._onlyBackward) {
				if (!this.isBackward(c))
					return;
			}
			if (this._disableSeek === true)
				return;
			a.prototype.handleMouseDown.call(this, c);
		},
		handleMouseMove: function (c) {
			if (this._disableSeek === true)
				return;
			if (this._onlyBackward) {
				if (!this.isBackward(c))
					return;
			}
			a.prototype.handleMouseMove.call(this, c);
		},
		handleMouseUp: function (c) {
			if (this._disableSeek === true)
				return;
			if (this._onlyBackward) {
				if (!this.isBackward(c))
					return;
			}
			a.prototype.handleMouseUp.call(this, c);
		},
		disableSeek: function (c) {
			var e = this;
			e._disableSeek = c !== false,
				e._disableSeek ? e.disable() : e.enable();
		},
		onlyBackward: function (e) {
			var c = this;
			c._onlyBackward = e !== false;
		}
	});
	videojs.registerComponent('SeekBar', b);
}());
(function () {
	var a = videojs.getPlugin('plugin'), b = videojs.extend(a, {
		constructor: function (g, f) {
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
			g.on('ready', function () {
				f.enableFastForward != 0x1 && g.disableSeek();
			});
			!f.sendLog && (f.sendLog = function () { }
			);
			f.headOffset && g.currentTime(f.headOffset);
			var k = 0x0, c = 0x0, e = f.reportTimeInterval || 0x3c, j = e * 0x3e8, i = function (l, m, o) {
				if (!h.isSendLog_)
					return;
				var n = h.now_() - k;
				(n > j || m === true) && (typeof o != 'undefined' ? f.sendLog(g, l, o, h) : f.sendLog(g, l, h.sec_(g), h),
					k = h.now_());
			};
			g.on('play', function () {
				try {
					top.configFullScreen && reSizeVideoWindow();
				} catch (e) {
					console.log(e);
				}
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
				} catch (e) {
					console.log(e);
				}
				h.isAlertTip = false;
				if (h.chapterCapture == 0x0 || !h.isSupportFace || !h.isShowFaceCollection)
					!g.ignorePlay ? (i('play', true),
						g.ignoreSeek = true) : (g.ignorePlay = false,
							g.ignoreSeek = false),
						h.sendDataLog('play'),
						h.receiveStudyLog(),
						h.getDanmuList('play', g),
						h.firstPlay = false,
						h.pausePlayFace = true;
				else {
					if (h.chapterCapture == 0x1) {
						if (h.firstPlay) {
							var New_A = h.sec_(g);
							if (New_A == 0x0 && (h.startCapture == 0x1 || typeof h.startCapture == 'undefined') && h.firstPlayFace) {
								h.playingFaceTime = New_A,
									h.playingFace = false,
									h.faceCollection('play', g, h.chapterCollectionType, 0x0);
								return;
							}
							!g.ignorePlay ? (i('play', true),
								g.ignoreSeek = true) : (g.ignorePlay = false,
									g.ignoreSeek = false),
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
			}),
				g.on("seeked", function () {
					if (f.enableFastForward != 0x1 && !g.switchStatus) {
						var l = g.currentTime(), m = f.headOffset ? f.headOffset : 0x0;
						l != 0x0 && l > m && g.currentTime(m);
					}
					!g.ignoreSeek ? i('drag', true, c + '-' + h.sec_(g)) : g.ignoreSeek = false,
						c = h.sec_(g),
						g.ignorePlay = true,
						delete g.switchStatus;
				}),
				g.on("pause", function () {
					!g.ignorePause ? (i("pause", true),
						g.ignorePlay = false,
						g.ignoreSeek = false) : g.ignorePause = false,
						h.sendDataLog("pause"),
						h.getDanmuList("pause", g);
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
					if (k == 0x0)
						return;
					h.sec_(g) - c <= 0x1 && !g.ignorePlay && (c = h.sec_(g)),
						i('playing');
				}),
				g.on('ended', function () {
					h.isShowFaceCollection && h.chapterCapture == 0x1 && h.endCapture == 0x1 && h.faceCollection('ended', g, h.chapterCollectionType, h.duration),
						i('ended', true);
				});
		},
		sec_: function (c) {
			return parseInt(c.currentTime());
		},
		now_: function () {
			return new Date().getTime();
		},
		isSendLog: function (c) {
			return c && (this.isSendLog_ = !!c),
				this.isSendLog_;
		},
		sendDataLog: function (e) {
			var c = e == "pause" || e == 'end' ? 0x2 : 0x1;
			typeof sendReadZTMediaLog != 'undefined' && sendReadZTMediaLog(c);
		},
		receiveStudyLog: function () {
			typeof receiveStudyLog != 'undefined' && setTimeout(function () {
				receiveStudyLog();
			}, 0x32);
		},
		getDanmuList: function (e, c) {
			if (!this.isShowDanmu_)
				return;
			var f = this.sec_(c);
			if (e == "pause") {
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
		danmuDisplay: function (c) {
			if (!this.isShowDanmu_)
				return;
			var e = this.sec_(c);
			typeof danmuPlay != 'undefined' && danmuPlay(e);
		},
		timer: function (c) { },
		faceCollection: function (e, c, f, New_2) {
			if (New_2 != -0x2) {
				var New_3 = this.jumpTimePointList;
				if (typeof New_3 != 'undefined')
					try {
						if (New_3.includes(New_2)) {
							this.firstPlayFace = false,
								this.pausePlayFace = false,
								this.playingFace = false;
							return;
						}
					} catch (e) { }
			}
			e == 'play' ? typeof startFaceCollection != 'undefined' && (c.pause(),
				startFaceCollection(c, f, this, New_2)) : e == 'ended' ? typeof startFaceCollection != 'undefined' && (c.pause(),
					startFaceCollection(c, f, this, New_2)) : e == 'playing' ? (typeof startFaceCollection != 'undefined' && (c.pause(),
						this.playingFaceTime = this.sec_(c),
						startFaceCollection(c, f, this, New_2),
						this.playingFace = false),
						this.pausePlayFace = false) : e == 'aginPlay' && (typeof startFaceCollection != 'undefined' && (c.pause(),
							startFaceCollection(c, f, this, New_2)),
							this.pausePlayFace = false);
		},
		playNextVideo: function (c) {
			if (typeof chapterPlayNextVideo != 'undefined') {
				if (typeof top.allowNextVideo != 'undefined' && top.allowNextVideo === false) {
					top.hasJobLimit === true ? top.showJobLimitTip() : top.showVideoTimeLimitTip();
					return;
				}
				chapterPlayNextVideo(c);
			}
		}
	});
	videojs.registerPlugin('seekBarControl', b);
}());
Ext.define('ans.videojs.TimelineObjectsBg', {
	extend: 'Ext.Component',
	cls: 'ans-timelineobjectsbg',
	hidden: true
});
Ext.define('ans.videojs.VideoQuiz', {
	extend: 'Ext.Component',
	xtype: 'videoquiz',
	cls: 'ans-videoquiz',
	renderTpl: ['<div class=\x22tkTopic\x22>', '<tpl if=\x22dtype==\x27InteractiveQuiz\x27\x22>', '<div class=\x22tkTopic_numbar fr\x22>共 {interactiveQuestionCount} 题<span id=\x22rightAnswerNum\x22>，已答对 <i id=\x22rightNum\x22></i> 题</span></div>', '</tpl>', '<div class="tkTopic_title">[{questionType}]</div>', '<div class=\x22tkTopic_con tkScroll\x22>', '<div class="tkItem">', '<div class=\x22tkItem_title\x22>{description}</div>', '<ul class=\x22tkItem_ul\x22>', '<tpl for="options">', '<li class=\x22ans-videoquiz-opt\x22><label>', '<span class="tkRadio"><input type="{[parent.questionType=="多选题"?"checkbox":"radio"]}" <tpl if="parent.dtype==\'InteractiveQuiz\'">{[this.getChecked(parent.answerContent, values.name, parent.dtype)]}</tpl> name="ans-videoquiz-opt" value="{isRight}"/><i></i></span>', '{name}、{description}', '</label></li>', '</tpl>', '</ul>', '</div>', '</div>', '<div class=\x22tkTopic_oper\x22>', '<a class=\x22ans-videoquiz-submit bntLinear fr\x22 id=\x22videoquiz-submit\x22>提交</a>', '<a class="ans-videoquiz-submit bntLinear fr" id="videoquiz-submitting" style="display:none">提交中</a>', '<a class="ans-videoquiz-continue bntLinear fr" id="videoquiz-continue"><tpl if="dtype==\'InteractiveQuiz\'">继续学习<tpl else>继续</tpl></a>', "<tpl if=\"dtype=='InteractiveQuiz'\">", '<a class=\x22bntWhiteBorder ans-videoquiz-back fr\x22 id=\x22knowledgeBack\x22>知识点回看</a>', '</tpl>', '<tpl if=\x22dtype==\x27InteractiveQuiz\x27\x22><span id=\x22spanHas\x22 class=\x22rightInfo\x22></span><tpl else><span class=\x22spanHas fr\x22 id=\x22spanHas\x22>回答正确</span></tpl>', '<span class=\x22spanNot fr\x22 id=\x22spanNot\x22><tpl if=\x22dtype==\x27InteractiveQuiz\x27\x22>真遗憾，再接再厉！<tpl else>回答错误</tpl></span>', '<span class=\x22spanNotBack fr\x22 id=\x22spanNotBack\x22><tpl if=\x22dtype==\x27InteractiveQuiz\x27\x22>真遗憾，再接再厉！<tpl else>回答错误，</tpl>回看 {errorBackTime} 分钟</span>', '<tpl if=\x22dtype==\x27InteractiveQuiz\x27\x22>', '<span class=\x22spanNotBack fr\x22 id=\x22spanNotBackPoint\x22>真遗憾，再接再厉！</span>', '<a class="spanHref fl" href="javascript:" id="viewAnalysis">查看解析</a>', '</div>', '<div class="tkParsing" id="tkParsing">', '<a class="tkParsing_dele" id="tkParsingDele" href="javascript:"></a>', '<div class="tkParsing_screll tkParsing_con" id="tkParsing_con"></div>', '</tpl>', '</div>', '</div>', {
		getChecked: function (q, w, e) {
			try {
				if (typeof q != 'undefined')
					return q.indexOf(w) != -0x1 && e == 'InteractiveQuiz' ? 'checked="checked"' : '';
				return '';
			} catch (rr) {
				console.log(rr);
			}
		}
	}],
	renderSelectors: {
		submitEl: 'a.ans-videoquiz-submit',
		continueEl: 'a.ans-videoquiz-continue',
		scrollEl: 'div.tkScroll',
		backEl: 'a.ans-videoquiz-back',
		tkParseScrollEl: 'div.tkParsing_screll',
		viewAnalysisEl: 'a.spanHref',
		delAnalysisEl: 'a.tkParsing_dele'
	},
	afterRender: function () {
		var b = this, d = b.renderData, e = b.quizRightCountUrl;
		typeof e != 'undefined' && Ext.Ajax.request({
			url: e,
			params: {
				eventid: d.resourceId,
				memberinfo: d.memberinfo
			},
			method: 'get',
			success: function (f) {
				var g = Ext.decode(f.responseText);
				g.status && (Ext.get('rightNum').setHTML(g.rightAnswerCount),
					Ext.get('rightAnswerNum').setStyle('display', 'inline-block'));
			}
		});
		b.callParent(arguments);
		var c = b.scrollEl, a = $(c.dom).niceScroll({
			cursorborder: '',
			cursorwidth: 0x6,
			cursorcolor: '#A5A5A5',
			boxzoom: false,
			autohidemode: false
		});
		b.scroller = a,
			b.submitEl.on('click', function () {
				b.checkResult();
			}),
			b.continueEl.on('click', function () {
				try {
					top.configFullScreen && exitMediumSizeWindow();
				} catch (ERROR) {
					console.log(ERROR);
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
	checkResult: function () {
		var _0x516598 = this, _0x2f92e5 = Ext.query('input', _0x516598.el.dom), _0x4a44fb = true, _0x4faa51 = _0x516598.renderData, _0x37ed0a = _0x4faa51.options, _0x5e850b = [], _0x4cf068 = _0x516598.quizErrorReportUrl, _0x2ffbce = _0x516598.validationUrl2, _0x4b2bbf = _0x4faa51.dtype;
		if (Ext.get('videoquiz-continue').getStyle('display') == 'none' && window.parent.parent.location.href.indexOf('nodedetailcontroller/visitnodedetail') > -0x1) {
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
		}),
			Ext.get('videoquiz-submit').setStyle('display', 'none'),
			Ext.get('videoquiz-submitting').setStyle('display', 'block');
		if (typeof _0x2ffbce != 'undefined') {
			var _0x5b5bf0 = _0x5e850b.join(',');
			Ext.Ajax.request({
				url: _0x2ffbce,
				params: {
					eventid: _0x4faa51.resourceId,
					memberinfo: _0x4faa51.memberinfo,
					answerContent: _0x5b5bf0
				},
				method: 'get',
				success: function (_0x18c4d5) {
					Ext.get('videoquiz-submit').setStyle('display', 'block'),
						Ext.get('videoquiz-submitting').setStyle('display', 'none'),
						_0x4faa51.answerContent = _0x5b5bf0;
					var _0x333775 = Ext.decode(_0x18c4d5.responseText), _0xef3ac5 = typeof _0x333775.isRight === 'undefined' ? false : _0x333775.isRight;
					!_0xef3ac5 ? _0x4faa51.errorBackTime && _0x4faa51.errorBackTime > 0x0 ? (Ext.get('spanNotBack').setStyle('display', 'block'),
						Ext.get('videoquiz-submit').setStyle('display', 'none'),
						_0x4b2bbf == 'InteractiveQuiz' ? Ext.get('knowledgeBack').setStyle('display', 'block') : Ext.get('videoquiz-continue').setStyle('display', 'block')) : _0x4b2bbf == 'InteractiveQuiz' && _0x4faa51.errorBack == 0x1 && _0x4faa51.eBstartPoint != '' ? (Ext.get('spanNotBackPoint').setStyle('display', 'block'),
							Ext.get('knowledgeBack').setStyle('display', 'block')) : Ext.get('spanNot').setStyle('display', 'block') : (Ext.get('spanHas').setStyle('display', 'block'),
								_0x4b2bbf == 'InteractiveQuiz' && (Ext.get('videoquiz-continue').setStyle('display', 'block'),
									Ext.get('knowledgeBack').setStyle('display', 'none'),
									Ext.get('videoquiz-submit').setStyle('display', 'none'),
									Ext.get('spanNot').setStyle('display', 'none'),
									Ext.get('spanNotBack').setStyle('display', 'none'),
									Ext.get('spanNotBackPoint').setStyle('display', 'none')));
					if (_0x333775.status) {
						if (_0x4b2bbf == 'InteractiveQuiz') {
							Ext.get('rightNum').setHTML(_0x333775.rightAnswerCount),
								Ext.get('rightAnswerNum').setStyle('display', 'inline-block');
							var _0x53c612 = '', _0x3abec1 = false;
							_0x333775.testAnalysis ? _0x333775.showAnswer && _0x333775.showAnswer > 0x0 ? (_0x53c612 += '正确答案：' + _0x333775.rightContent,
								_0x53c612 += '</br>解析：' + _0x333775.testAnalysis,
								Ext.get('viewAnalysis').setStyle('display', 'block'),
								_0x3abec1 = true) : _0x333775.isRight && (_0x53c612 += '解析：' + _0x333775.testAnalysis,
									Ext.get('viewAnalysis').setStyle('display', 'block'),
									_0x3abec1 = true) : _0x333775.showAnswer && _0x333775.showAnswer > 0x0 ? (Ext.get('tkParsingDele').setStyle('display', 'none'),
										Ext.get('viewAnalysis').setStyle('display', 'none'),
										_0x53c612 += '正确答案：' + _0x333775.rightContent,
										_0x3abec1 = true) : Ext.get('viewAnalysis').setStyle('display', 'none');
							if (_0x3abec1) {
								Ext.get('tkParsing_con').setHTML(_0x53c612),
									Ext.get('tkParsing').setStyle('display', 'inline-block');
								var _0x40024c = _0x516598.tkParseScrollEl, _0x46c1c9 = $(_0x40024c.dom).niceScroll({
									cursorborder: '',
									cursorwidth: 0x6,
									cursorcolor: '#A5A5A5',
									boxzoom: false,
									autohidemode: true
								});
								_0x516598.tkParseScroll = _0x46c1c9;
							}
						}
						if (_0x333775.isRight && _0x4b2bbf == 'InteractiveQuiz') {
							if (typeof _0x333775.showTip != 'undefined' && _0x333775.showTip) {
								var _0x4dffb9 = _0x333775.percent;
								try {
									var _0x44c0e5 = Ext.getCookie('fid', 0x0);
									_0x4dffb9 = parseInt(_0x4dffb9),
										_0x44c0e5 == '179952' && _0x4dffb9 > 0x0 && (_0x4dffb9 = 0x5a + _0x4dffb9 * 0.1);
								} catch (_0x4b81bc) {
									console.log(_0x4b81bc);
								}
								Ext.get('spanHas').setHTML("<span class=\"spanHas fr\" style='display:block'><span id=\"InteractiveQuizTip\">恭喜你，答对了！你的答题水准超过了" + _0x4dffb9 + '%的同学</span></span>');
							} else
								Ext.get('spanHas').setHTML('<span class=\x22spanHas fr\x22 style=\x27display:block\x27><span id=\x22InteractiveQuizTip\x22>恭喜你，答对了！</span></span>');
						}
					}
					!_0xef3ac5 && _0x516598.onerror && _0x4b2bbf != 'InteractiveQuiz' && _0x516598.onerror();
					!_0xef3ac5 && _0x4faa51.errorContinue == 0x1 && (_0x4a44fb = true,
						Ext.get('videoquiz-submit').setStyle('display', 'none'),
						Ext.get('videoquiz-continue').setStyle('display', 'block'));
					if (_0xef3ac5 && Ext.get('videoquiz-continue').getStyle('display') == 'none') {
						try {
							top.configFullScreen && exitMediumSizeWindow();
						} catch (_0x309cd7) {
							console.log(_0x309cd7);
						}
						_0x516598.fireEvent('continue');
					}
				},
				error: function () {
					Ext.get('videoquiz-submit').setStyle('display', 'block'),
						Ext.get('videoquiz-submitting').setStyle('display', 'none'),
						_0x516598.onerror && _0x4b2bbf != 'InteractiveQuiz' && _0x516598.onerror();
				}
			});
		}
		return _0x4a44fb;
	},
	continueFun: function () {
		var _0x57588e = this;
		_0x57588e.fireEvent('continue');
	}
});
Ext.define('ans.videojs.VideoImg', {
	extend: 'Ext.Component',
	xtype: 'videoimg',
	renderTpl: ['<div class="sp_video_pic">', '<img src=\x22{src}\x22 class=\x22sp_video_img\x22 />', '<a class=\x22jb_btn jb_btn_92 fs14 sp_video_pic_dele2\x22 style=\x22position:absolute;bottom:14px;right:20px;z-index:6;\x22 href=\x22javascript:\x22>继续学习</a>', '</div>'],
	renderSelectors: {
		closeEl: 'a.sp_video_pic_dele2'
	},
	afterRender: function () {
		var _0x563cc8 = this;
		_0x563cc8.callParent(arguments);
		try {
			var _0x2fe60e = document.querySelector('.sp_video_img');
			_0x2fe60e.addEventListener('load', function () {
				_0x2fe60e.naturalWidth >= _0x2fe60e.naturalHeight ? _0x2fe60e.naturalWidth >= 0x190 && (_0x2fe60e.style.width = '90%',
					_0x2fe60e.style.height = '80%') : _0x2fe60e.naturalHeight >= 0x190 && (_0x2fe60e.style.height = '90%',
						_0x2fe60e.style.width = '80%');
			});
		} catch (_0x4c9aa7) {
			console.log(_0x4c9aa7);
		}
		_0x563cc8.el.on('click', function () {
			_0x563cc8.fireEvent('continue');
		}),
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
	extend: 'Ext.Component',
	xtype: 'videoannotation',
	cls: 'ans-videoannotation',
	renderTpl: ['<div class="vidNota">', '<div class=\x22vidNota_title\x22><h2 class=\x22vidNota_h2\x22>[批注]</h2><a class=\x22vidNota_close\x22 href=\x22javascript:;\x22></a></div>', '<div class=\x22vidNota_con\x22 id=\x22pizhuScroll\x22 tabindex=\x221\x22 style=\x22overflow: hidden; outline: none;\x22>', "<p>{description}</p>", '</div>', '</div>'],
	renderSelectors: {
		closeEl: 'a.vidNota_close',
		contentEl: 'div.vidNota_con'
	},
	afterRender: function () {
		var _0x489975 = this, _0x52aec2 = _0x489975.contentEl;
		_0x489975.callParent(arguments),
			_0x489975.closeEl.on('click', function () {
				_0x489975.fireEvent('continue');
			});
		var _0x3cbd95 = $(_0x52aec2.dom).niceScroll({
			cursorborder: '',
			cursorwidth: 0x6,
			cursorcolor: '#e0e0e0',
			boxzoom: false,
			autohidemode: true
		});
		_0x489975.scroller = _0x3cbd95;
	}
});
Ext.define('ans.videojs.VideoPpt', {
	extend: 'Ext.Component',
	xtype: 'videoppt',
	cls: 'ans-videoppt',
	width: '100%',
	model: false,
	renderTpl: ['<div class="sp_video_ppt_pic" id="sp_video_ppt_pic">', '<img src="{src}" class="sp_video_img" style="width: 100%;"/>', '<div style=\x22position:absolute;left:0;top:0;right:0;bottom:0;\x22></div>', '<a class="sp_size_big" id="sp_size_big" href="javascript:;"></a>', '<a class="sp_size_small" href="javascript:;" style="display:none;" id="sp_size_small"></a>', '</div>'],
	renderSelectors: {
		pptPicEl: 'div.sp_video_ppt_pic',
		sizeBigEl: 'a.sp_size_big',
		sizeSmallEl: 'a.sp_size_small'
	},
	afterRender: function () {
		var _0x26bda0 = this;
		_0x26bda0.callParent(arguments);
		try {
			dragFn && dragFn('#sp_video_ppt_pic', '#video_html5_api');
		} catch (_0x3fee2b) {
			console.log(_0x3fee2b);
		}
		_0x26bda0.sizeBigEl.on('click', function (_0x56545a) {
			_0x56545a.stopPropagation(),
				_0x26bda0.pptPicEl.toggleCls('sp_ppt_pic_fullScreen'),
				Ext.get('sp_size_big').setStyle('display', 'none'),
				Ext.get('sp_size_small').setStyle('display', 'block');
			var _0x27ae67 = Ext.get('video').getStyle('height'), _0x2026b3 = Ext.get('sp_video_ppt_pic').getStyle('height'), _0x498903 = (parseInt(_0x27ae67) - 0x3c - parseInt(_0x2026b3)) / 0x2;
			Ext.get('sp_video_ppt_pic').setStyle('top', _0x498903 + 'px'),
				Ext.get('sp_video_ppt_pic').setStyle('left', '0');
		}),
			_0x26bda0.sizeSmallEl.on('click', function (_0x394642) {
				_0x394642.stopPropagation(),
					_0x26bda0.pptPicEl.toggleCls('sp_ppt_pic_fullScreen'),
					Ext.get('sp_size_big').setStyle('display', 'block'),
					Ext.get('sp_size_small').setStyle('display', 'none'),
					Ext.get('sp_video_ppt_pic').setStyle('top', '0px'),
					Ext.get('sp_video_ppt_pic').setStyle('left', '0px');
			});
	}
});
Ext.define('ans.videojs.TimelineObjects', {
	extend: 'Ext.container.Container',
	cls: 'ans-timelineobjects',
	autoScroll: true,
	hidden: true,
	hideMode: 'visibility',
	constructor: function (_0x390ca5) {
		var _0x56f88e = this;
		_0x56f88e.callParent(arguments),
			_0x56f88e.bg = Ext.create('ans.videojs.TimelineObjectsBg', {
				renderTo: _0x390ca5.renderTo
			}),
			_0x56f88e.objects = _0x390ca5.objects && _0x390ca5.objects.sort ? _0x56f88e.sort_(_0x390ca5.objects) : [],
			_0x56f88e.current = 0x0;
	},
	showObject: function (_0x4328d0, _0x6606a2, _0x464086) {
		var _0x514856 = this, _0x731a1 = _0x514856.getBox(), _0x207a47 = _0x514856.items.getAt(0x0), _0x2bb194, _0x244570 = function () {
			_0x2bb194.destroy(),
				_0x514856.hide(),
				_0x4328d0.play();
		};
		_0x207a47 != null && _0x207a47.destroy();
		if (_0x6606a2 == 'IMG') {
			var _0x52c609 = {
				src: _0x464086.url.replace(/origin/, _0x731a1.width + '_' + _0x731a1.height)
			};
			_0x2bb194 = _0x514856.add({
				xtype: 'videoimg',
				renderData: _0x52c609
			});
		}
		if (_0x6606a2 == 'QUIZ') {
			var _0x21cae9 = function () { };
			if (_0x464086.errorBackTime && _0x464086.errorBackTime > 0x0) {
				var _0x5c5c12 = _0x464086.errorBackTime * 0x3c;
				_0x21cae9 = function () {
					var _0x52f92f = Math.max(_0x4328d0.currentTime() - _0x5c5c12, 0x0);
					_0x4328d0.switchStatus = true,
						_0x4328d0.currentTime(_0x52f92f);
				};
			}
			_0x2bb194 = _0x514856.add({
				xtype: 'videoquiz',
				renderData: _0x464086,
				quizErrorReportUrl: _0x514856.quizErrorReportUrl,
				validationUrl2: _0x514856.validationUrl2,
				onerror: _0x21cae9
			});
		}
		if (_0x6606a2 == 'InteractiveQuiz') {
			var _0x21cae9 = function () { };
			if (_0x464086.errorBackTime && _0x464086.errorBackTime > 0x0) {
				var _0x5c5c12 = _0x464086.errorBackTime * 0x3c;
				_0x21cae9 = function () {
					var _0x339968 = Math.max(_0x4328d0.currentTime() - _0x5c5c12, 0x0);
					_0x4328d0.switchStatus = true,
						_0x4328d0.currentTime(_0x339968);
				};
			}
			if (_0x464086.errorBack == 0x1 && _0x464086.eBstartPoint != '') {
				var _0x5c5c12 = 0x0, _0x4459d9 = _0x464086.eBstartPoint.split(':'), _0x49e61d = _0x4459d9.length;
				_0x49e61d > 0x0 && (_0x49e61d == 0x1 ? _0x5c5c12 = parseInt(_0x4459d9[0x0]) * 0x3c : _0x49e61d == 0x2 && (_0x5c5c12 = parseInt(_0x4459d9[0x0]) * 0x3c + parseInt(_0x4459d9[0x1]))),
					_0x21cae9 = function () {
						_0x4328d0.switchStatus = true,
							_0x4328d0.currentTime(_0x5c5c12);
					};
			}
			_0x464086.dtype = 'InteractiveQuiz',
				_0x2bb194 = _0x514856.add({
					xtype: 'videoquiz',
					renderData: _0x464086,
					quizErrorReportUrl: _0x514856.quizErrorReportUrl,
					validationUrl2: _0x514856.validationUrl2,
					quizRightCountUrl: _0x514856.quizRightCountUrl,
					onerror: _0x21cae9
				});
		}
		if (_0x6606a2 == 'PPT') {
			if (_0x464086.fp == 0x0)
				return;
			var _0x50b44f = _0x464086.url;
			_0x464086.thumb ? _0x50b44f = _0x464086.thumb + _0x464086.pageNo + '.png' : _0x50b44f = _0x50b44f.replace(/swfv2\/.*$/, 'thumb/' + _0x464086.fp + '.png');
			var _0x52c609 = {
				src: _0x50b44f
			};
			_0x2bb194 = _0x514856.add({
				xtype: 'videoppt',
				renderData: _0x52c609
			});
		}
		_0x6606a2 == 'SyncAnnotationEvent' && (_0x2bb194 = _0x514856.add({
			xtype: 'videoannotation',
			renderData: _0x464086
		}));
		if (!_0x2bb194)
			return;
		_0x2bb194.on('continue', function () {
			_0x244570();
		});
		var _0x4478ad = !(_0x2bb194.model === false);
		_0x514856.showModel(_0x4478ad),
			_0x4478ad && _0x4328d0.pause();
	},
	showModel: function (_0xca296c) {
		try {
			top.configFullScreen && mediumSizeWindow();
		} catch (_0x558a39) {
			console.log(_0x558a39);
		}
		var _0x543433 = this;
		_0x543433.show(),
			_0xca296c ? (_0x543433.removeCls('ans-timelineobjects-autosize'),
				_0x543433.setAutoScroll(true),
				_0x543433.bg.show()) : (_0x543433.addCls('ans-timelineobjects-autosize'),
					_0x543433.setAutoScroll(false));
	},
	hide: function () {
		this.callParent(arguments),
			this.bg.hide.apply(this.bg, arguments);
	},
	updateTime: function (_0x32b2c9, _0x658e37) {
		if (this.current >= this.objects.length || _0x32b2c9.scrubbing())
			return;
		var _0x5a61b2 = this, _0x6dcb48 = _0x5a61b2.objects[_0x5a61b2.current], _0x1dd663 = _0x6dcb48.style, _0x27d4a0 = _0x6dcb48.datas[0x0];
		_0x658e37 >= _0x27d4a0.startTime && (_0x5a61b2.current++,
			setTimeout(function () {
				_0x5a61b2.showObject(_0x32b2c9, _0x1dd663, _0x27d4a0);
			}, 0x14));
	},
	resetTime: function (_0x2bd05d, _0x5e6c33) {
		var _0x56ed1e = this, _0x4fb24f;
		for (_0x4fb24f = 0x0; _0x4fb24f < _0x56ed1e.objects.length; _0x4fb24f++) {
			var _0x5230c9 = _0x56ed1e.objects[_0x4fb24f].datas[0x0].startTime;
			if (_0x5e6c33 <= _0x5230c9)
				break;
		}
		_0x56ed1e.current = _0x4fb24f;
	},
	sort_: function (_0x9e0016) {
		return _0x9e0016 && _0x9e0016.sort && _0x9e0016.sort(function (_0x2207e2, _0x490b18) {
			var _0x15240f = _0x2207e2.datas[0x0].startTime, _0x26dc82 = _0x490b18.datas[0x0].startTime;
			return _0x15240f - _0x26dc82;
		});
	}
});
(function () {
	var _0x49bce7 = videojs.getPlugin('plugin'), _0x3ef0a8 = videojs.extend(_0x49bce7, {
		constructor: function (_0x164813, _0x119922) {
			_0x49bce7.call(this, _0x164813, _0x119922);
			if (!_0x119922.url)
				return;
			var _0xa71aef = this;
			_0x164813.eventPoints = [],
				Ext.Ajax.request({
					url: _0x119922.url,
					async: false,
					success: function (_0x46ed0b) {
						if (_0x46ed0b.status != 0xc8)
							return;
						eval('var data=' + _0x46ed0b.responseText);
						if (data && data.length > 0x0) {
							var _0x1b9b45 = [];
							for (var _0x3bb298 = 0x0; _0x3bb298 < data.length; _0x3bb298++) {
								var _0x11855a = data[_0x3bb298];
								if (_0x11855a.style == 'InteractiveQuiz') {
									var _0x52b2be = _0x11855a.datas;
									if (_0x52b2be && _0x52b2be.length > 0x0)
										var _0x4b7b01 = {
											time: _0x52b2be[0x0].startTime,
											text: '互动测验'
										};
									_0x1b9b45.push(_0x4b7b01);
								}
							}
							_0x164813.eventPoints = _0x1b9b45;
						}
						var _0x5f64ff = Ext.create('ans.videojs.TimelineObjects', {
							renderTo: _0x164813.el_,
							quizErrorReportUrl: _0x119922.quizErrorReportUrl,
							validationUrl2: _0x119922.validationUrl2,
							quizRightCountUrl: _0x119922.quizRightCountUrl,
							objects: data
						});
						_0x164813.on('play', function () {
							_0x5f64ff.resetTime(_0x164813, _0x164813.currentTime());
						}),
							_0x164813.on('seekend', function () {
								_0x5f64ff.resetTime(_0x164813, _0x164813.currentTime());
							}),
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
		constructor: function (_0x58588c, _0x33ea30) {
			_0x3d7ad2.call(this, _0x58588c, _0x33ea30);
			if (!_0x33ea30.url)
				return;
			var _0x2d0366 = this;
			Ext.Ajax.request({
				url: _0x33ea30.url,
				async: false,
				success: function (_0x40239a) {
					if (_0x40239a.status != 0xc8)
						return;
					eval('var data=' + _0x40239a.responseText);
					if (!data.status)
						return;
					var _0xec7d82 = videojs('video');
					if (_0xec7d82 && typeof _0xec7d82.markers === 'function') {
						var _0x102172 = _0x58588c.eventPoints;
						_0x102172.push.apply(_0x102172, data.list),
							_0xec7d82.markers({
								markerTip: {
									display: true,
									text: function (_0x326be1) {
										return _0x326be1.text;
									}
								},
								markers: _0x102172,
								onMarkerClick: function (_0x345dc5) {
									if (_0x33ea30.ff != 0x1)
										return false;
									var _0x39ddc7 = $(this).data('marker-key');
									return _0x58588c.currentTime(_0x345dc5.time),
										false;
								}
							});
					}
					if (data.list && data.list.length > 0x0) {
						var _0x314e5a = [], _0x2d7761 = {};
						for (var _0x481483 = 0x0; _0x481483 < data.list.length; _0x481483++) {
							var _0x3ddc92 = data.list[_0x481483], _0x1115a1 = _0x3ddc92.text;
							if (!_0x2d7761[_0x1115a1]) {
								var _0x5d1ba9 = [];
								_0x5d1ba9.push(_0x3ddc92),
									_0x2d7761[_0x1115a1] = _0x5d1ba9,
									_0x314e5a.push(_0x1115a1);
							} else {
								var _0x1a4973 = _0x2d7761[_0x1115a1];
								_0x1a4973.push(_0x3ddc92),
									_0x2d7761[_0x1115a1] = _0x1a4973;
							}
						}
						function _0x21d25a(_0x19ecf3) {
							var _0x2da0a0 = '<div class=\x22zsCloud_box\x22><h2 class=\x22zsCloud_seltime\x22>选择时间</h2><div class=\x22zsCloud_div\x22><div class=\x22zsCloud_div_list\x22>';
							for (var _0x54e720 = 0x0; _0x54e720 < _0x19ecf3.length; _0x54e720++) {
								var _0x3a2f0e = _0x19ecf3[_0x54e720], _0x24584a = Ext.fly(_0x140df9.elements[0x0]).select('.topicId' + _0x3a2f0e.topicid + ':not(.markertime)'), _0x6f1b25 = videojs.formatTime(_0x3a2f0e.time);
								_0x24584a && _0x24584a.elements[0x0] && _0x24584a.elements[0x0].parentElement.remove(),
									_0x2da0a0 += '<div class="zsCloud_item topicId' + _0x3a2f0e.topicid + '" data-marker-time="' + _0x3a2f0e.time + '" title="' + _0x6f1b25 + '" onclick="markersPlayer(this)">' + _0x6f1b25 + '</div>';
							}
							return _0x2da0a0 += '</div></div></div>',
								_0x2da0a0;
						}
						Ext.select('.zsCloud').setStyle('display', 'block');
						var _0x140df9 = Ext.select('.zsCloud_ul');
						if (_0x140df9 && _0x140df9.elements[0x0]) {
							var _0x39cacc;
							for (var _0x226c90 = 0x0; _0x226c90 < _0x314e5a.length; _0x226c90++) {
								var _0x1191de = _0x314e5a[_0x226c90], _0x534567 = _0x2d7761[_0x1191de], _0xff479e = '';
								if (_0x534567) {
									if (_0x534567.length == 0x1) {
										var _0x14d3bf = _0x534567[0x0], _0x149ba5 = Ext.fly(_0x140df9.elements[0x0]).select('.topicId' + _0x14d3bf.topicid + ':not(.markertime)'), _0x1b3c0a = videojs.formatTime(_0x14d3bf.time);
										_0x149ba5 && _0x149ba5.elements[0x0] && _0x149ba5.elements[0x0].parentElement.remove(),
											_0xff479e = "<li><span class='topicId" + _0x14d3bf.topicid + " markertime' data-marker-time='" + _0x14d3bf.time + "' title='" + _0x1b3c0a + "' onclick='markersPlayer(this)'>" + _0x14d3bf.text + '</span></li>';
									} else
										_0xff479e = '<li class="zsCloud_select"><span class="zsCloud_span">' + _0x1191de + '</span>',
											_0x534567 && _0x534567.length > 0x0 ? _0xff479e += _0x21d25a(_0x534567) : _0xff479e += '</li>';
								}
								_0x39cacc ? _0x39cacc = Ext.DomHelper.insertHtml('afterEnd', _0x39cacc.elements[0x0], _0xff479e) : _0x39cacc = Ext.DomHelper.insertHtml('afterBegin', _0x140df9.elements[0x0], _0xff479e),
									_0x39cacc = Ext.fly(_0x39cacc).select('');
							}
						}
						_0x33ea30.videoTopicCloud && _0x33ea30.videoTopicCloud == 0x1 && (Ext.select('.zsCloud_down').setStyle('display', 'block'),
							Ext.select('.zsCloud_body').setStyle('display', 'block'));
					}
					var _0x31c805 = new Map(), _0x5f45af = new Array();
					if (data.list && data.list.length > 0x0)
						for (var _0x481483 = 0x0; _0x481483 < data.list.length; _0x481483++) {
							var _0x46ba79 = data.list[_0x481483].topicid, _0x355835 = _0x31c805.get(_0x46ba79);
							!_0x355835 && (_0x355835 = {},
								_0x355835.text = data.list[_0x481483].text,
								_0x355835.time = data.list[_0x481483].time,
								_0x355835.topicid = data.list[_0x481483].topicid,
								_0x355835.weight = 0x0,
								_0x355835.html = {
									'data-marker-time': data.list[_0x481483].time,
									onclick: 'markersPlayer(this)'
								},
								_0x31c805.set(_0x46ba79, _0x355835),
								_0x5f45af.push(_0x355835)),
								_0x355835.weight += 0x1;
						}
					$(function () {
						_0x5f45af.length != 0x0 && $('#word_cloud').jQCloud(_0x5f45af);
						function _0x16e275(_0x34e3f4) {
							$(_0x34e3f4).niceScroll({
								cursorborder: '',
								cursorwidth: 0x8,
								cursorcolor: '#DADFE6',
								boxzoom: false,
								autohidemode: true
							}),
								setInterval(function () {
									$(_0x34e3f4).getNiceScroll().resize();
								}, 0x12c);
						}
						$('.zsCloud_box').each(function (_0x1a6373) {
							$(this).find('.zsCloud_div').attr('id', 'zsCloud_div_' + _0x1a6373),
								_0x16e275("#zsCloud_div_" + _0x1a6373);
						});
					}),
						$('.zsCloud_down').click(function () {
							var _0x99575f = $('.zsCloud_body');
							_0x99575f.is(':visible') ? (_0x99575f.hide(),
								$(this).addClass('zsCloud_up'),
								$(this).text('展开')) : (_0x99575f.show(),
									$(this).removeClass('zsCloud_up'),
									$(this).text('收起'));
						});
				}
			});
		}
	});
	videojs.registerPlugin('marker', _0x2fb632);
}());
(function () {
	var _0x447d69 = videojs.getPlugin('plugin'), _0x49c4d3 = videojs.extend(_0x447d69, {
		constructor: function (_0x2c5dc8, _0x92fa48) {
			_0x447d69.call(this, _0x2c5dc8, _0x92fa48);
			var _0x18369e = this, _0x47ca61 = _0x92fa48.subtitleUrl, _0x17d58f = function (_0x35691a) {
				var _0x437a79 = _0x35691a.match(/support\/(\w+).\w+/);
				if (_0x437a79)
					return ServerHosts.PARENT_HOST + '/ananas/video-editor/sub?objectid=' + _0x437a79[0x1];
			}, _0x58194c = function (_0x24a810, _0xc16498, _0x149bdb) {
				_0x2c5dc8.addRemoteTextTrack({
					kind: 'subtitles',
					srclang: 'cn',
					label: _0x24a810,
					src: _0xc16498,
					default: _0x149bdb
				}, true);
			};
			_0x2c5dc8.ready(function () {
				_0x47ca61 && Ext.Ajax.request({
					url: _0x47ca61,
					success: function (_0xdfbecb) {
						if (_0xdfbecb.status != 0xc8)
							return;
						eval('var subs=' + _0xdfbecb.responseText);
						var _0x5898bd = 0x0, _0x4d1db0 = 0x0;
						subs.length > 0x0 && Ext.each(subs, function (_0x2a0171) {
							_0x92fa48.translate == 0x1 && _0x2a0171.name == 'English' ? (_0x2a0171.selected = true,
								_0x4d1db0 = _0x5898bd) : _0x2a0171.selected = false,
								_0x58194c(_0x2a0171.name, _0x17d58f(_0x2a0171.url), _0x2a0171.selected),
								_0x5898bd++;
						}),
							_0x92fa48.translate == 0x1 && (Ext.select('.vjs-subs-caps-button .vjs-icon-placeholder').setHTML('翻译'),
								Ext.select('.vjs-subs-caps-button .vjs-icon-placeholder').addCls('vjs-hide-content')),
							setTimeout(function () {
								var _0x5412e7 = _0x2c5dc8.textTracks();
								_0x92fa48.translate == 0x1 ? _0x5412e7 && _0x5412e7[_0x4d1db0] ? _0x5412e7[_0x4d1db0].mode = 'showing' : _0x5412e7 && _0x5412e7[0x0] && (_0x5412e7[0x0].mode = 'showing') : _0x5412e7 && _0x5412e7[0x0] && (_0x5412e7[0x0].mode = 'showing');
							}, 0x1f4);
					}
				});
				var _0x1ed098 = _0x2c5dc8.textTrackSettings;
				_0x1ed098.setValues({
					backgroundColor: '#000',
					backgroundOpacity: '0',
					edgeStyle: 'uniform'
				}),
					_0x1ed098.updateDisplay();
			});
		}
	});
	videojs.registerPlugin('subtitle', _0x49c4d3);
}());
Ext.define('ans.videojs.ErrorDisplay', {
	extend: 'Ext.Component',
	xtype: 'vjserrdisplay',
	cls: 'ans-vjserrdisplay',
	renderTpl: ['<div class="ans-vjserrdisplay-title">{errorMsg}</div>', '<ul class=\x22ans-vjserrdisplay-opts\x22>', '您可以尝试其他线路: ', '<tpl for="playlines">', '<li class="ans-vjserrdisplay-opt"><label>', '<input type="radio" name="ans-vjserrdisplay-opt" {[xindex-1 === parent.selectedIndex ? "checked disabled":""]}>', '{label}', '</label></li>', '</tpl>', '</ul>'],
	renderSelectors: {
		errorMsgEl: 'div.ans-vjserrdisplay-title'
	},
	afterRender: function () {
		var _0x46e8c8 = this;
		_0x46e8c8.callParent(arguments);
		var _0x2384f5 = Ext.query('input', _0x46e8c8.el.dom);
		Ext.each(_0x2384f5, function (_0x3c377c, _0x22bc06) {
			Ext.fly(_0x3c377c).on('click', function () {
				_0x46e8c8.onSelected(_0x22bc06);
			});
		});
		try {
			typeof createVideoTask === 'function' ? createVideoTask() : console.log('createVideoTask函数不存在！');
		} catch (_0x235fd9) { }
	},
	setErrorMsg: function (_0x26eb65) {
		Ext.fly(this.errorMsgEl).setHTML(_0x26eb65);
	}
});
Ext.define('ans.videojs.ErrorNote', {
	extend: 'Ext.Component',
	cls: 'ans-vjserrdisplay',
	renderTpl: ['<div class="ans-vjserrdisplay-title">播放出现异常。</div>']
});
(function () {
	var _0x42dac1 = videojs.getComponent('ErrorDisplay'), _0x15e147 = videojs.extend(_0x42dac1, {
		constructor: function (_0x3a9408, _0x1b9be0) {
			_0x42dac1.call(this, _0x3a9408, _0x1b9be0);
		},
		colse: function () {
			_0x42dac1.prototype.colse.call(this),
				me.ansErrorDisplay && (me.ansErrorDisplay.destroy(),
					me.ansErrorDisplay = null);
		},
		fill: function () {
			_0x42dac1.prototype.fill.call(this);
			var _0x37242d = this, _0x5a0917 = _0x37242d.player_, _0xb631be = _0x5a0917.options_.playlines, _0x28ea4a = Ext.query('.vjs-modal-dialog-content', _0x37242d.el_)[0x0];
			_0x37242d.ansErrorDisplay && (_0x37242d.ansErrorDisplay.destroy(),
				delete _0x37242d.ansErrorDisplay);
			if (!_0x5a0917.selectCDN || !_0xb631be) {
				_0x37242d.ansErrorDisplay = Ext.create('ans.videojs.ErrorNote', {
					renderTo: _0x37242d.el_
				});
				return;
			}
			var _0x3e3cb2 = _0x5a0917.currentPlayline(), _0x54bc90 = 0x0;
			Ext.each(_0xb631be, function (_0x5ada3f, _0x4aec9f) {
				_0x3e3cb2 == _0x5ada3f && (_0x54bc90 = _0x4aec9f);
			}),
				_0x37242d.ansErrorDisplay = Ext.create('ans.videojs.ErrorDisplay', {
					renderTo: _0x37242d.el_,
					onSelected: function (_0x2885e9) {
						_0x5a0917.selectCDN(_0x2885e9),
							_0x37242d.close();
					},
					renderData: {
						playlines: _0xb631be,
						errorMsg: _0x37242d.content(),
						selectedIndex: _0x54bc90
					}
				});
		}
	});
	videojs.registerComponent('ErrorDisplay', _0x15e147);
}());
(function () {
	var _0x1b611c = null;
	typeof window.videojs === 'undefined' && typeof require === 'function' ? _0x1b611c = require('video.js') : _0x1b611c = window.videojs,
		function (_0x2c0194, _0x3e712) {
			var _0x590f57 = {}, _0x539f8d, _0x45e52f = {}, _0x166e2b = {};
			function _0x1678c1(_0x30cb39, _0x340518, _0x587ad8, _0x3bf438) {
				_0x45e52f = {
					label: _0x587ad8,
					sources: _0x340518
				};
				if (typeof _0x3bf438 === 'function')
					return _0x3bf438(_0x30cb39, _0x340518, _0x587ad8);
				return _0x30cb39.src(_0x340518.map(function (_0x387836) {
					return {
						src: _0x387836.src,
						type: _0x387836.type,
						res: _0x387836.res
					};
				})),
					_0x30cb39;
			}
			var _0x3ccf77 = _0x3e712.getComponent('MenuItem'), _0x5e575f = _0x3e712.extend(_0x3ccf77, {
				constructor: function (_0xb4c9cc, _0x5bf9d4, _0x514d5e, _0x30674d) {
					this.onClickListener = _0x514d5e,
						this.label = _0x30674d,
						_0x3ccf77.call(this, _0xb4c9cc, _0x5bf9d4),
						this.src = _0x5bf9d4.src,
						this.on('click', this.onClick),
						this.on('touchstart', this.onClick),
						_0x5bf9d4.initialySelected && (this.showAsLabel(),
							this.selected(true),
							this.addClass('vjs-selected'));
				},
				showAsLabel: function () {
					this.label && (this.label.innerHTML = this.options_.label);
				},
				onClick: function (_0x4224ef) {
					this.onClickListener(this);
					var _0x50fa7c = this.player_.currentTime(), _0x1173e1 = this.player_.paused();
					this.showAsLabel(),
						this.addClass('vjs-selected');
					!_0x1173e1 && this.player_.bigPlayButton.hide();
					typeof _0x4224ef !== 'function' && typeof this.options_.customSourcePicker === 'function' && (_0x4224ef = this.options_.customSourcePicker);
					var _0xe1349d = 'loadeddata';
					this.player_.techName_ !== 'Youtube' && this.player_.preload() === 'none' && this.player_.techName_ !== 'Flash' && (_0xe1349d = 'timeupdate'),
						_0x1678c1(this.player_, this.src, this.options_.label, _0x4224ef).one(_0xe1349d, function () {
							var _0x10a0b6 = this.player_;
							_0x10a0b6.switchStatus = true,
								_0x10a0b6.currentTime(_0x50fa7c),
								!_0x1173e1 && _0x10a0b6.play(),
								_0x10a0b6.trigger('resolutionchange');
						});
				}
			});
			_0x3e712.registerComponent('ResolutionMenuItem', _0x5e575f);
			var _0x3219e4 = _0x3e712.getComponent('MenuButton'), _0x47b4cf = _0x3e712.extend(_0x3219e4, {
				constructor: function (_0x1a000a, _0x31d858, _0x3694d3, _0x2d9576) {
					this.sources = _0x31d858.sources,
						this.label = _0x2d9576,
						this.label.innerHTML = _0x31d858.initialySelectedLabel,
						_0x3219e4.call(this, _0x1a000a, _0x31d858, _0x3694d3),
						this.controlText('Quality');
					if (_0x3694d3.dynamicLabel)
						this.el().appendChild(_0x2d9576);
					else {
						var _0x18c9ca = document.createElement('span');
						_0x3e712.dom.addClass(_0x18c9ca, 'vjs-resolution-button-staticlabel'),
							this.el().appendChild(_0x18c9ca);
					}
				},
				createItems: function () {
					var _0x191e6a = [], _0x16bfb9 = this.sources && this.sources.label || {}, _0x35a1d0 = function (_0x540d13) {
						_0x191e6a.map(function (_0x1a4709) {
							_0x1a4709.selected(_0x1a4709 === _0x540d13),
								_0x1a4709.removeClass('vjs-selected');
						});
					};
					for (var _0x4d26b8 in _0x16bfb9) {
						_0x16bfb9.hasOwnProperty(_0x4d26b8) && (_0x191e6a.push(new _0x5e575f(this.player_, {
							label: _0x4d26b8,
							src: _0x16bfb9[_0x4d26b8],
							initialySelected: _0x4d26b8 === this.options_.initialySelectedLabel,
							customSourcePicker: this.options_.customSourcePicker
						}, _0x35a1d0, this.label)),
							_0x166e2b[_0x4d26b8] = _0x191e6a[_0x191e6a.length - 0x1]);
					}
					return _0x191e6a;
				}
			});
			_0x539f8d = function (_0x1c46c1) {
				var _0x420f61 = _0x3e712.mergeOptions(_0x590f57, _0x1c46c1), _0x2fcc6a = this, _0x493a4e = document.createElement('span'), _0x21ebc5 = {};
				_0x3e712.dom.addClass(_0x493a4e, 'vjs-resolution-button-label'),
					_0x2fcc6a.updateSrc = function (_0x248ece) {
						if (!_0x248ece)
							return _0x2fcc6a.src();
						_0x2fcc6a.controlBar.resolutionSwitcher && (_0x2fcc6a.controlBar.resolutionSwitcher.dispose(),
							delete _0x2fcc6a.controlBar.resolutionSwitcher);
						_0x248ece = _0x248ece.sort(_0x369b86),
							_0x21ebc5 = _0x10f859(_0x248ece);
						var _0x5b06e6 = _0x21d606(_0x21ebc5, _0x248ece), _0x588aed = new _0x47b4cf(_0x2fcc6a, {
							sources: _0x21ebc5,
							initialySelectedLabel: _0x5b06e6.label,
							initialySelectedRes: _0x5b06e6.res,
							customSourcePicker: _0x420f61.customSourcePicker
						}, _0x420f61, _0x493a4e);
						return _0x3e712.dom.addClass(_0x588aed.el(), 'vjs-resolution-button'),
							_0x2fcc6a.controlBar.resolutionSwitcher = _0x2fcc6a.controlBar.el_.insertBefore(_0x588aed.el_, _0x2fcc6a.controlBar.getChild('fullscreenToggle').el_),
							_0x2fcc6a.controlBar.resolutionSwitcher.dispose = function () {
								this.parentNode.removeChild(this);
							},
							_0x1678c1(_0x2fcc6a, _0x5b06e6.sources, _0x5b06e6.label, _0x420f61.customSourcePicker);
					},
					_0x2fcc6a.currentResolution = function (_0x340383, _0x4eca6f) {
						if (_0x340383 == null)
							return _0x45e52f;
						return _0x166e2b[_0x340383] != null && _0x166e2b[_0x340383].onClick(_0x4eca6f),
							_0x2fcc6a;
					},
					_0x2fcc6a.getGroupedSrc = function () {
						return _0x21ebc5;
					};
				function _0x369b86(_0x84a40f, _0xd38849) {
					if (!_0x84a40f.res || !_0xd38849.res)
						return 0x0;
					return +_0xd38849.res - +_0x84a40f.res;
				}
				function _0x10f859(_0x4de1c6) {
					var _0x2d784a = {
						label: {},
						res: {},
						type: {}
					};
					return _0x4de1c6.map(function (_0x22a854) {
						_0x1a188a(_0x2d784a, 'label', _0x22a854),
							_0x1a188a(_0x2d784a, 'res', _0x22a854),
							_0x1a188a(_0x2d784a, 'type', _0x22a854),
							_0x5b3185(_0x2d784a, 'label', _0x22a854),
							_0x5b3185(_0x2d784a, 'res', _0x22a854),
							_0x5b3185(_0x2d784a, 'type', _0x22a854);
					}),
						_0x2d784a;
				}
				function _0x1a188a(_0x364366, _0xf055ee, _0x30d1bf) {
					_0x364366[_0xf055ee][_0x30d1bf[_0xf055ee]] == null && (_0x364366[_0xf055ee][_0x30d1bf[_0xf055ee]] = []);
				}
				function _0x5b3185(_0x25ae95, _0x2d1ad9, _0x18c438) {
					_0x25ae95[_0x2d1ad9][_0x18c438[_0x2d1ad9]].push(_0x18c438);
				}
				function _0x21d606(_0x3ddf5e, _0x59085b) {
					var _0x256cf4 = _0x420f61.default, _0x54d3fc = '';
					return _0x256cf4 === 'high' ? (_0x256cf4 = _0x59085b[0x0].res,
						_0x54d3fc = _0x59085b[0x0].label) : _0x256cf4 === 'low' || _0x256cf4 == null || !_0x3ddf5e.res[_0x256cf4] ? (_0x256cf4 = _0x59085b[_0x59085b.length - 0x1].res,
							_0x54d3fc = _0x59085b[_0x59085b.length - 0x1].label) : _0x3ddf5e.res[_0x256cf4] && (_0x54d3fc = _0x3ddf5e.res[_0x256cf4][0x0].label),
					{
						res: _0x256cf4,
						label: _0x54d3fc,
						sources: _0x3ddf5e.res[_0x256cf4]
					};
				}
				_0x2fcc6a.ready(function () {
					_0x2fcc6a.options_.sources.length > 0x0 && _0x2fcc6a.setTimeout(function () {
						_0x2fcc6a.updateSrc(_0x2fcc6a.options_.sources);
					}, 0x1);
				});
			},
				_0x3e712.registerPlugin('videoJsResolutionSwitcher', _0x539f8d);
		}(window, _0x1b611c);
}());
(function () {
	(function (_0xb9585d, _0x2de88e) {
		var _0x536066 = {}, _0x509644, _0x1397dc = {}, _0xf85ceb = {};
		function _0x4c6272(_0x46c7a3, _0x507042, _0xff1504, _0x46cec6) {
			_0x1397dc = _0x507042;
			if (typeof _0x46cec6 === 'function')
				return _0x46cec6(_0x46c7a3, _0x507042, _0xff1504);
			return _0x46c7a3;
		}
		var _0x4e98c9 = _0x2de88e.getComponent('ResolutionMenuItem'), _0xa725fe = _0x2de88e.extend(_0x4e98c9, {
			onClick: function (_0x279316) {
				this.onClickListener(this);
				var _0x137094 = this.player_.currentTime(), _0x1d7ebc = this.player_.paused();
				this.showAsLabel(),
					this.addClass('vjs-selected');
				!_0x1d7ebc && this.player_.bigPlayButton.hide();
				typeof _0x279316 !== 'function' && typeof this.options_.customSourcePicker === 'function' && (_0x279316 = this.options_.customSourcePicker);
				var _0x37a317 = 'loadeddata';
				this.player_.techName_ !== 'Youtube' && this.player_.preload() === 'none' && this.player_.techName_ !== 'Flash' && (_0x37a317 = 'timeupdate');
				var _0x9452dc = _0x4c6272(this.player_, this.src, this.options_.label, _0x279316);
				_0x9452dc && _0x9452dc.one(_0x37a317, function () {
					_0x9452dc.switchStatus = true,
						_0x9452dc.currentTime(_0x137094),
						!_0x1d7ebc && _0x9452dc.play(),
						_0x9452dc.trigger('playlinechange');
				});
			}
		}), _0x354259 = _0x2de88e.getComponent('MenuButton'), _0x9781f6 = _0x2de88e.extend(_0x354259, {
			constructor: function (_0x4937ad, _0x518db8, _0x36e07d, _0x35611e) {
				this.playlines = _0x518db8.playlines,
					this.label = _0x35611e,
					this.label.innerHTML = _0x518db8.initialySelectedLabel,
					_0x354259.call(this, _0x4937ad, _0x518db8, _0x36e07d),
					this.controlText('Playline');
				if (_0x36e07d.dynamicLabel)
					this.el().appendChild(_0x35611e);
				else {
					var _0x157eda = document.createElement('span');
					_0x2de88e.addClass(_0x157eda, 'vjs-resolution-button-staticlabel'),
						this.el().appendChild(_0x157eda);
				}
			},
			createItems: function () {
				var _0x5a4488 = [], _0x3ecd93 = this.playlines || [], _0x3cd3cf = function (_0x4c511c) {
					_0x5a4488.map(function (_0xb0160) {
						_0xb0160.selected(_0xb0160 === _0x4c511c),
							_0xb0160.removeClass('vjs-selected');
					});
				};
				for (var _0x2fd05b = 0x0; _0x2fd05b < _0x3ecd93.length; _0x2fd05b++) {
					var _0x3718b0 = _0x3ecd93[_0x2fd05b].label;
					_0x5a4488.push(new _0xa725fe(this.player_, {
						label: _0x3718b0,
						src: _0x3ecd93[_0x2fd05b],
						initialySelected: _0x3718b0 === this.options_.initialySelectedLabel,
						customSourcePicker: this.options_.customSourcePicker
					}, _0x3cd3cf, this.label)),
						_0xf85ceb[_0x3718b0] = _0x5a4488[_0x5a4488.length - 0x1];
				}
				return _0x5a4488;
			}
		});
		_0x509644 = function (_0x44772a) {
			var _0x447a79 = _0x2de88e.mergeOptions(_0x536066, _0x44772a), _0x5b7932 = this, _0x4b2343 = document.createElement('span'), _0x5d75dd = _0x5b7932.options_.playlines;
			_0x2de88e.dom.addClass(_0x4b2343, 'vjs-resolution-button-label');
			var _0x35eb55 = new _0x9781f6(_0x5b7932, {
				playlines: _0x5d75dd,
				initialySelectedLabel: _0x5d75dd[0x0].label,
				initialySelectedUrl: _0x5d75dd[0x0].url,
				customSourcePicker: _0x447a79.customSourcePicker
			}, _0x447a79, _0x4b2343);
			_0x2de88e.dom.addClass(_0x35eb55.el(), 'vjs-resolution-button'),
				_0x2de88e.dom.addClass(_0x35eb55.el(), 'vjs-playline-button'),
				_0x35eb55.show(),
				_0x5b7932.selectCDN = function (_0x2b2549) {
					_0x35eb55.items[_0x2b2549].onClick(_0x447a79.customSourcePicker),
						_0x5b7932.play();
				},
				_0x5d75dd.length > 0x0 && (_0x1397dc = _0x5d75dd[0x0]),
				_0x5b7932.currentPlayline = function () {
					return _0x1397dc;
				},
				_0x5b7932.ready(function () {
					_0x5b7932.controlBar.videoJsPlayLine = _0x5b7932.controlBar.el_.insertBefore(_0x35eb55.el_, _0x5b7932.controlBar.getChild('fullscreenToggle').el_),
						_0x5b7932.controlBar.videoJsPlayLine.dispose = function () {
							this.parentNode.removeChild(this);
						};
				});
		},
			_0x2de88e.registerPlugin('videoJsPlayLine', _0x509644);
	}(window, videojs));
}());
Ext.define('ans.AudioJs', {
	videoJs: null,
	mixins: {
		observable: 'Ext.util.Observable'
	},
	constructor: function (_0x18bee8) {
		_0x18bee8 = _0x18bee8 || {};
		var _0x1e2d4f = this;
		_0x1e2d4f.addEvents(['seekstart']),
			_0x1e2d4f.mixins.observable.constructor.call(_0x1e2d4f, _0x18bee8);
		var _0xb9472 = videojs(_0x18bee8.videojs, _0x1e2d4f.params2VideoOpt(_0x18bee8.params), function () { });
		Ext.fly(_0x18bee8.videojs).on('contextmenu', function (_0x532f6b) {
			_0x532f6b.preventDefault();
		}),
			Ext.fly(_0x18bee8.videojs).on('keydown', function (_0x468e38) {
				(_0x468e38.keyCode == 0x20 || _0x468e38.keyCode == 0x25 || _0x468e38.keyCode == 0x27) && _0x468e38.preventDefault();
			});
	},
	params2VideoOpt: function (params) {
		var _0x222a72 = [];
		!params.rootPath && (params.rootPath = '');
		params.http && _0x222a72.push({
			src: params.http,
			type: 'audio/mp3'
		});
		var _0xa929cb = function (_0x44a461, _0x3acee2, _0x3daabc) {
			var _0x531a64 = this;
			!_0x531a64.logCount && (_0x531a64.logCount = 0x0),
				videojs.xhr({
					uri: _0x3acee2,
					headers: {
						"Content-Type": 'application/json'
					}
				}, function (_0x3312ff, _0x2ea7b6) {
					_0x531a64.logCount++;
					if (_0x2ea7b6.statusCode == 0xc8) {
						_0x531a64.logCount = 0x0;
						if (_0x2ea7b6.body.indexOf('isPassed') < 0x0) {
							window.parent && window.parent.location.reload();
							return;
						}
						eval('var d=' + _0x2ea7b6.body);
						d.isPassed && _0x3daabc();
						return;
					}
					_0x531a64.logCount >= 0x4 && (_0x531a64.logCount = 0x0,
						_0x44a461.pause(),
						_0x2ea7b6.statusCode != 0x0 ? alert('服务繁忙，不能保证您能否正常完成任务，请您稍后继续...(e:' + _0x2ea7b6.statusCode + ')') : alert('您的网络不稳定，请您稍后继续...'));
				});
		}, _0x16bd55 = function (_0x356a71, _0x29ed17, _0x286720, _0x14945b) {
			if (!params.reportUrl)
				return;
			var _0x508fac = '[{0}][{1}][{2}][{3}][{4}][{5}][{6}][{7}]', _0x556efb = (params.startTime || '0') + '_' + (params.endTime || params.duration), _0x3de3cc = 0x0, _0x10fb48;
			_0x286720.toString().indexOf('-') != -0x1 ? (_0x10fb48 = _0x286720.split('-'),
				_0x10fb48.length == 0x2 && (_0x3de3cc = parseInt(_0x10fb48[0x1]) * 0x3e8)) : _0x3de3cc = _0x286720 * 0x3e8;
			if (_0x3de3cc == params.duration * 0x3e8 && _0x29ed17 == 0x2)
				return;
			var _0x1e5899 = Ext.String.format(_0x508fac, params.clazzId, params.userid, params.jobid ? params.jobid : '', params.objectId, _0x3de3cc, 'd_yHJ!$pdA~5', params.duration * 0x3e8, _0x556efb), _0x28c0ff = [params.reportUrl, '/', params.dtoken, '?clazzId=', params.clazzId, '&playingTime=', _0x286720, '&duration=', params.duration, '&clipTime=', _0x556efb, '&objectId=', params.objectId, '&otherInfo=', params.otherInfo, '&jobid=', params.jobid, '&userid=', params.userid, '&isdrag=', _0x29ed17, '&view=pc', '&enc=', md5(_0x1e5899), '&rt=', params.rt, '&dtype=Audio', '&_t=', new Date().getTime()].join('');
			_0xa929cb(_0x356a71, _0x28c0ff, _0x14945b);
		};
		return {
			language: 'zh-CN',
			controls: true,
			preload: 'auto',
			bigPlayButton: false,
			sources: _0x222a72,
			textTrackDisplay: true,
			controlBar: {
				volumePanel: {
					inline: true
				},
				children: ['playToggle', 'currentTimeDisplay', 'timeDivider', 'durationDisplay', 'progressControl', 'volumePanel']
			},
			plugins: {
				audioNote: {
					title: params.filename
				},
				studyControl: {
					enableSwitchWindow: 0x1
				},
				seekBarControl: {
					headOffset: params.headOffset,
					enableFastForward: params.enableFastForward,
					isSendLog: true,
					reportTimeInterval: params.reportTimeInterval,
					sendLog: function (_0x1fa67d, _0x956a6c, _0x1287b0) {
						if (this.isSendLog !== true)
							return;
						var _0xd83862 = 0x0;
						switch (_0x956a6c) {
							case 'play':
								_0xd83862 = 0x3;
								break;
							case "pause":
								_0xd83862 = 0x2;
								break;
							case 'ended':
								_0xd83862 = 0x4;
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
Ext.define("ans.videojs.AudioNote", {
	extend: 'Ext.Component',
	cls: 'ans-audionote'
});
(function () {
	var _0x1946a6 = videojs.getPlugin('plugin'), _0x288244 = videojs.extend(_0x1946a6, {
		constructor: function (_0x518f78, _0x22e6ff) {
			_0x1946a6.call(this, _0x518f78, _0x22e6ff),
				Ext.create('ans.videojs.AudioNote', {
					renderTo: _0x518f78.el_,
					html: _0x22e6ff.title
				});
		}
	});
	videojs.registerPlugin('audioNote', _0x288244);
}());
