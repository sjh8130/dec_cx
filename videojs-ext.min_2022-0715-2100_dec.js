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
			a.PARENT_HOST = parent.location.host !== "" ? location.protocol + "//" + parent.location.host : a.MASTER_HOST;	// ====Modified====
		} catch (c) {
			a.PARENT_HOST = location.protocol + "//" + location.host;	// ====Modified====
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
		a.CXCLASSTASL_HOST = location.protocol + "//noteyd.chaoxing.com";	// ====Modified====
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
		var y = "0123456789abcdef", w = "", v, A;
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
	typeof define === "function" && define.amd ? define(function () {
		return f;
	}) : typeof module === "object" && module.exports ? module.exports = f : g.md5 = f;
}(this));
Ext.apply(Ext, {
	setCookie: function (c, f) {
		var a = arguments, i = arguments.length, b = i > 0x2 ? a[0x2] : null, h = i > 0x3 ? a[0x3] : "/", e = i > 0x4 ? a[0x4] : null, g = i > 0x5 ? a[0x5] : false;
		document.cookie = c + "=" + escape(f) + (b === null ? "" : "; expires=" + b.toGMTString()) + (h === null ? "" : "; path=" + h) + (e === null ? "" : "; domain=" + e) + (g === true ? "; secure" : "");
	},
	getCookie: function (e, h) {
		var b = e + "=", g = b.length, a = document.cookie.length, f = 0x0, c = 0x0;
		while (f < a) {
			c = f + g;
			if (document.cookie.substring(f, c) == b)
				return this.getCookieVal(c);
			f = document.cookie.indexOf(" ", f) + 0x1;
			if (f === 0x0)
				break;
		}
		return h;
	},
	getCookieVal: function (b) {
		var a = document.cookie.indexOf(";", b);
		return a == -0x1 && (a = document.cookie.length),
			unescape(document.cookie.substring(b, a));
	}
});
Ext.define("ans.VideoJs", {
	videoJs: null,
	mixins: {
		observable: "Ext.util.Observable"
	},
	constructor: function (b) {
		b = b || {};
		var e = this;
		e.addEvents(["seekstart"]),
			e.mixins.observable.constructor.call(e, b);
		var c = videojs(b.videojs, e.params2VideoOpt(b.params), function () { });
		Ext.fly(b.videojs).on("contextmenu", function (f) {
			f.preventDefault();
		});
		Ext.fly(b.videojs).on("keydown", function (f) {
			(f.keyCode == 0x20 || f.keyCode == 0x25 || f.keyCode == 0x27 || f.keyCode == 0x6b) && f.preventDefault();
		});
		c.videoJsResolutionSwitcher && c.on("resolutionchange", function () {
			var g = c.currentResolution(), f = g.sources ? g.sources[0].res : false;
			Ext.setCookie("resolution", f);
		});
		var a = b.params && b.params.doublespeed ? 0x2 : 0x1;
		c.on("ratechange", function () {
			var h = c.playbackRate();
			h > a && (c.pause(),
				c.playbackRate(0x1));
		});
	},
	params2VideoOpt: function (params) {
		var useM3u8 = false, cdn = [{
			indexorder: 0x0,
			label: "??????1",
			url: ServerHosts.s1_HOST,
			ispublic: true
		}, {
			indexorder: 0x1,
			label: "??????2",
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
			return "http://hls-ans.chaoxing.com/hls/m3u8/" + objectId + "/" + r + ".m3u8?cdn=" + encodeURIComponent(cdn);
		}
		function makeSource(src, r) {
			var sdomain = ServerHosts.s1_HOST.replace("http:/", "").replace("https:/", ""), start = 0x0;
			src.src.indexOf(sdomain) > -0x1 && (start = src.src.indexOf(sdomain) + sdomain.length);
			var file = src.src.substr(start);
			if (r.ispublic && start == 0x0)
				return {
					src: file,
					type: "video/mp4",
					res: src.res
				};
			return r.ispublic ? useM3u8 ? {
				src: m3u8(params.objectId, src.resolution, r.url),
				type: "application/x-mpegURL",
				res: src.res
			} : {
				src: r.url + file,
				type: "video/mp4",
				res: src.res
			} : useM3u8 ? {
				src: m3u8(params.objectId, src.resolution, r.url + sdomain),
				type: "application/x-mpegURL",
				res: src.res
			} : {
				src: r.url + sdomain + file,
				type: "video/mp4",
				res: src.res
			};
		}
		var sources = [], defaultRes = Ext.getCookie("resolution", 0x168);
		!params.rootPath && (params.rootPath = "");
		params.http && sources.push({
			src: params.http,
			type: "video/mp4",
			label: "??????",
			resolution: "sd",
			res: 0x168
		});
		params.httphd && sources.push({
			src: params.httphd,
			type: "video/mp4",
			label: "??????",
			resolution: "hd",
			res: 0x2d0
		});
		params.httpshd && sources.push({
			src: params.httpshd,
			type: "video/mp4",
			label: "?????????",
			resolution: "shd",
			res: 0x438
		});
		params.httpmd && sources.push({
			src: params.httpmd,
			type: "video/mp4",
			label: "??????",
			resolution: "md",
			res: 0xf0
		});
		if (sources.length == 0x1) {
			var cdnItem = sources[0];
			cdnItem.label = "??????";
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
				if (typeof top.hasJobLimit != "undefined" && top.hasJobLimit === true && isUnFinishJob())
					return;
				if (typeof top.videoTimeLimit != "undefined" && top.videoTimeLimit === true && isUnFinishJob())
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
						"Content-Type": "application/json"
					}
				}, function (err, resp) {
					me.logCount++;
					if (resp.statusCode == 0xc8) {
						me.logCount = 0;
						if (resp.body.indexOf("isPassed") < 0) {
							window.parent && window.parent.location.reload();
							return;
						}
						eval("var d=" + resp.body);
						if (d.isPassed) {
							try {
								typeof d.hasJobLimit != "undefined" && d.hasJobLimit === true && (top.allowNextVideo = false,
									top.hasJobLimit = true),
									typeof d.videoTimeLimit != "undefined" && d.videoTimeLimit === true && (top.allowNextVideo = false,
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
							if (resp.statusCode == 0xca || resp.statusCode == 0x12e) {	// ====Modified====
								try {
									parent.location.reload();
								} catch (e) {
									console.log(e.message);
								}
							} else {
								alert("???????????????????????????????????????????????????????????????????????????...(e:" + resp.statusCode + ")")
							}
						} else {
							alert("??????????????????????????????????????????...")
						}
					}
				});
		}, sendLog_ = function (player, isdrag, currentTimeSec, callback) {
			if (!params.reportUrl)
				return;
			if (params.isFiled == 0x1 || params.state == 0x1)
				return;
			var format = "[{0}][{1}][{2}][{3}][{4}][{5}][{6}][{7}]",
				clipTime = (params.startTime || "0") + "_" + (params.endTime || params.duration),
				playTime = 0x0,
				timeArr;
			currentTimeSec.toString().indexOf("-") != -0x1 ? (timeArr = currentTimeSec.split("-"),
				timeArr.length == 0x2 && (playTime = parseInt(timeArr[0x1]) * 0x3e8)) : playTime = currentTimeSec * 0x3e8;
			if (playTime == params.duration * 0x3e8 && isdrag == 0x2)
				return;
			var enc = Ext.String.format(format, params.clazzId, params.userid, params.jobid || "", params.objectId, playTime, "d_yHJ!$pdA~5", params.duration * 0x3e8, clipTime),
				rurl = [params.reportUrl, "/", params.dtoken, "?clazzId=", params.clazzId, "&playingTime=", currentTimeSec, "&duration=", params.duration, "&clipTime=", clipTime, "&objectId=", params.objectId, "&otherInfo=", params.otherInfo, "&jobid=", params.jobid, "&userid=", params.userid, "&isdrag=", isdrag, "&view=pc", "&enc=", md5(enc), "&rt=", params.rt, "&dtype=Video", "&_t=", new Date().getTime()].join("");
			logFunc(player, rurl, callback);
		};
		return {
			language: "zh-CN",
			poster: params.screenshot,
			controls: true,
			preload: "none",
			sources: sources,
			playlines: cdn,
			playbackRates: params.doublespeed != 0x0 ? [0x1, 1.25, 1.5, 0x2] : false,
			textTrackDisplay: true,
			controlBar: {
				volumePanel: {
					inline: false
				},
				children: ["playToggle", "playbackRateMenuButton", "currentTimeDisplay", "timeDivider", "durationDisplay", "progressControl", "volumePanel", "subsCapsButton", "fullscreenToggle", "videoJsPlayLine", "textTrackButton"]
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
						var src = player.currentResolution().sources[0];
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
							case "playing":
								isdrag = 0x0;
								break;
							case "drag":
								isdrag = 0x1;
								break;
							case "play":
								isdrag = 0x3;
								break;
							case "pause":
								isdrag = 0x2;
								break;
							case "ended":
								isdrag = 0x4;
								break;
						}
						var B = this;
						sendLog_(player, isdrag, sec, function () {
							try {
								isdrag === 0x4 && typeof A != "undefined" && (A.sendDataLog("ended"),
									A.playNextVideo(B.attachmentId));
							} catch (e) {
								console.log(e);
							}
							window.proxy_completed && window.proxy_completed();
						});
					}
				},
				timelineObjects: {
					url: params.rootPath + "/richvideo/initdatawithviewer?mid=" + params.mid + "&cpi=" + params.cpi + "&classid=" + params.clazzId,
					quizErrorReportUrl: params.rootPath + "/question/addquestionerror?classid=" + params.clazzId + "&cpi=" + params.cpi,
					validationUrl2: params.rootPath + "/question/quiz-validation?classid=" + params.clazzId + "&cpi=" + params.cpi + "&objectid=" + params.objectId,
					quizRightCountUrl: params.rootPath + "/question/quiz-rightcount?classid=" + params.clazzId + "&cpi=" + params.cpi
				},
				subtitle: {
					translate: params.chapterVideoTranslate,
					subtitleUrl: params.rootPath + "/richvideo/allsubtitle?mid=" + params.mid + "&objectid=" + params.objectId + "&courseid=" + params.courseid,
					subtitle: params.rootPath + "/ananas/video-editor/sub?objectid=" + params.subobjectid
				},
				marker: {
					url: !params.isNotMark ? params.rootPath + "/ananas/getpoints?courseid=" + params.courseid + "&mid=" + params.mid : "",
					ff: params.enableFastForward,
					videoTopicCloud: params.videoTopicCloud
				}
			}
		};
	}
});
Object.defineProperty(ans.VideoJs.prototype, "params2VideoOpt", {
	configurable: false,
	writable: false
});
Object.freeze(ans.VideoJs.prototype.params2VideoOpt);
(function () {
	var b = videojs.getPlugin("plugin"), a = videojs.extend(b, {
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
			Ext.fly(j).on("mouseout", function (k) {
				k = k ? k : window.event;
				var l = k.relatedTarget || k.toElement;
				!l && (i != 0x1 && f.pause());
			});
			g.singleton(f);
		},
		singleton: function (c) {
			var f = this, e = parseInt(Math.random() * 0x98967f);
			c.on("play", function () {
				Ext.setCookie("videojs_id", e);
			});
			c.setInterval(function () {
				var g = Ext.getCookie("videojs_id");
				typeof g != "undefined" && g != e && c.pause();
			}, 0x3e8);
		}
	});
	videojs.registerPlugin("studyControl", a);
}());
(function () {
	var a = videojs.getComponent("SeekBar"),
		b = videojs.extend(a, {
			constructor: function (e, c) {
				a.call(this, e, c);
				var f = this;
				e.ignorePause = false;
				e.disableSeek = function (g) {
					f.disableSeek(g);
				};
				e.onlyBackward = function (g) {
					f.onlyBackward(g);
				};
				e.getSeekBar = function () {
					return f;
				};
				f.on("slideractive", function () {
					e.trigger("seekstart"),
						e.ignorePause = true,
						e.ignorePlay = true,
						e.ignoreSeek = false;
				});
				f.on("sliderinactive", function () {
					e.trigger("seekend"),
						e.ignoreSeek = false;
				});
				f.maxPercent = 0x0;
				e.on("timeupdate", function () {
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
	videojs.registerComponent("SeekBar", b);
}());
(function () {
	var a = videojs.getPlugin("plugin"), b = videojs.extend(a, {
		constructor: function (g, f) {
			a.call(this, g, f);
			var h = this;
			h.firstClick = true;
			h.isSendLog_ = !!f.isSendLog;
			h.isShowDanmu_ = !!f.isShowDanmu;
			h.damuLastGetTime = 0;
			h.firstPlay = true;	// ====Modified====
			h.firstPlayFace = true;	// ====Modified====
			h.pausePlayFace = false;	// ====Modified====
			h.playingFace = false;
			h.playingFaceTime = 0;	// ====Modified====
			h.chapterCapture = f.chapterCapture || 0;
			h.captureInterval = f.captureInterval * 0x3c || 0x258;
			h.chapterCollectionType = f.chapterCollectionType || 0;
			h.isSupportFace = f.isSupportFace;
			h.isAlertTip = false;
			h.startCapture = f.startCapture;
			h.endCapture = f.endCapture;
			h.playAginCapture = f.playAginCapture;
			h.playingCapture = f.playingCapture;
			h.playingLoopCapture = f.playingLoopCapture;
			h.isShowFaceCollection = f.isShowFaceCollection;
			h.duration = f.duration;
			h.jumpTimePointList = f.jumpTimePointList;	// ====Modified====
			h.loopCaptureInterval = Math.floor(Math.random() * (parseInt(h.duration) - 0x0) + 0x1);
			h.attachmentId = f.attachmentId;
			g.on("ready", function () {
				f.enableFastForward != 0x1 && g.disableSeek();
			});
			!f.sendLog && (f.sendLog = function () { }
			);
			f.headOffset && g.currentTime(f.headOffset);
			var k = 0x0, c = 0x0, e = f.reportTimeInterval || 0x3c, j = e * 0x3e8,
				i = function (l, m, o) {
					if (!h.isSendLog_)
						return;
					var n = h.now_() - k;
					(n > j || m === true) && (typeof o != "undefined" ? f.sendLog(g, l, o, h) : f.sendLog(g, l, h.sec_(g), h),
						k = h.now_());	// ====Modified====
				};
			g.on("play", function () {
				try {
					top.configFullScreen && reSizeVideoWindow();
				} catch (e) {
					console.log(e);
				}
				try {
					if (typeof top.hasJobLimit != "undefined" && top.hasJobLimit === true && h.firstClick && isUnFinishJob()) {
						h.firstClick = false;
						g.pause();
						checkJobCountLimit(g, 0x0);
						return;
					}
					if (typeof top.videoTimeLimit != "undefined" && top.videoTimeLimit === true && h.firstClick && isUnFinishJob()) {
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
					!g.ignorePlay ? (i("play", true),
						g.ignoreSeek = true) : (g.ignorePlay = false, g.ignoreSeek = false),
						h.sendDataLog("play"),
						h.receiveStudyLog(),
						h.getDanmuList("play", g),
						h.firstPlay = false,	// ====Modified====
						h.pausePlayFace = true;	// ====Modified====
				else {
					if (h.chapterCapture == 1) {	// ====Modified====
						if (h.firstPlay) {	// ====Modified====
							var New_A = h.sec_(g);	// ====Modified====
							if (New_A == 0 && (h.startCapture == 1 || typeof h.startCapture == "undefined") && h.firstPlayFace) {	// ====Modified====
								h.playingFaceTime = New_A,	// ====Modified====
									h.playingFace = false,	// ====Modified====
									h.faceCollection("play", g, h.chapterCollectionType, 0);	// ====Modified====
								return;	// ====Modified====
							}	// ====Modified====
							!g.ignorePlay ? (i("play", true),
								g.ignoreSeek = true) : (g.ignorePlay = false,
									g.ignoreSeek = false),
								h.sendDataLog("play"),
								h.receiveStudyLog(),
								h.getDanmuList("play", g),
								h.firstPlay = false,
								h.pausePlayFace = true;
						} else {
							if (h.playAginCapture == 0x1 && !g.ignorePlay && h.pausePlayFace) {
								h.playingFaceTime = h.sec_(g),
									h.playingFace = false,
									h.faceCollection("aginPlay", g, h.chapterCollectionType, -2);
								return;
							}
							h.pausePlayFace = true;
						}
					}
				}
			});
			g.on("seeked", function () {
				if (f.enableFastForward != 1 && !g.switchStatus) {
					var l = g.currentTime(), m = f.headOffset ? f.headOffset : 0;
					l != 0 && l > m && g.currentTime(m);
				}
				!g.ignoreSeek ? i("drag", true, c + "-" + h.sec_(g)) : g.ignoreSeek = false,
					c = h.sec_(g),
					g.ignorePlay = true,
					delete g.switchStatus;
			});
			g.on("pause", function () {
				!g.ignorePause ? (i("pause", true),
					g.ignorePlay = false,
					g.ignoreSeek = false) : g.ignorePause = false,
					h.sendDataLog("pause"),
					h.getDanmuList("pause", g);
			});
			g.on("timeupdate", function () {	// ====Modified====
				var c = h.sec_(g);
				h.isSupportFace && h.isShowFaceCollection && h.chapterCapture == 1 && h.playingCapture == 1 && h.playingFace && (h.playingFace = false,
					h.playingLoopCapture == 1 ? c == h.loopCaptureInterval && h.faceCollection("playing", g, h.chapterCollectionType, -1) : c >= h.captureInterval && c % h.captureInterval == 0 && h.faceCollection("playing", g, h.chapterCollectionType, c));
				!h.playingFace && c - h.playingFaceTime > 0x2 && (h.playingFace = true);
				if (typeof parent.videoTrialDuration != "undefined" && parent.videoTrialDuration != "-1") {
					var l = parseInt(parent.videoTrialDuration) * 0x3c;
					if (l < h.sec_(g) && !h.isAlertTip) {
						g.pause(),
							alert("?????????????????????" + parent.videoTrialDuration + "??????"),
							h.isAlertTip = true;
						return;
					}
				}
				parseInt(g.currentTime()) >= this.damuLastGetTime && h.getDanmuList("timeupdate", g);
				h.danmuDisplay(g);
				if (k == 0)
					return;
				h.sec_(g) - c <= 1 && !g.ignorePlay && (c = h.sec_(g)),
					i("playing");
			});
			g.on("ended", function () {	// ====Modified====
				h.isShowFaceCollection && h.chapterCapture == 1 && h.endCapture == 1 && h.faceCollection("ended", g, h.chapterCollectionType, h.duration),
					i("ended", true);
			})
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
			var c = e == "pause" || e == "end" ? 0x2 : 0x1;
			typeof sendReadZTMediaLog != "undefined" && sendReadZTMediaLog(c);
		},
		receiveStudyLog: function () {
			typeof receiveStudyLog != "undefined" && setTimeout(function () {
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
			typeof getDanmuByTime != "undefined" && setTimeout(function () {
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
			typeof danmuPlay != "undefined" && danmuPlay(e)
		},
		timer: function (c) { },
		faceCollection: function (e, c, f, New_2) {	// ====Modified====
			if (New_2 != -0x2) {	// ====Modified====
				var New_3 = this.jumpTimePointList;	// ====Modified====
				if (typeof New_3 != "undefined")	// ====Modified====
					try {	// ====Modified====
						if (New_3.includes(New_2)) {	// ====Modified====
							this.firstPlayFace = false;	// ====Modified====
							this.pausePlayFace = false;	// ====Modified====
							this.playingFace = false;	// ====Modified====
							return;	// ====Modified====
						}	// ====Modified====
					} catch (e) { }	// ====Modified====
			}	// ====Modified====
			e == "play" ? typeof startFaceCollection != "undefined" && (c.pause(),
				startFaceCollection(c, f, this, New_2)) : e == "ended" ? typeof startFaceCollection != "undefined" && (c.pause(),
					startFaceCollection(c, f, this, New_2)) : e == "playing" ? (typeof startFaceCollection != "undefined" && (c.pause(),
						this.playingFaceTime = this.sec_(c),
						startFaceCollection(c, f, this, New_2),
						this.playingFace = false),
						this.pausePlayFace = false) : e == "aginPlay" && (typeof startFaceCollection != "undefined" && (c.pause(),
							startFaceCollection(c, f, this, New_2)),
							this.pausePlayFace = false);
		},
		playNextVideo: function (c) {
			if (typeof chapterPlayNextVideo != "undefined") {
				if (typeof top.allowNextVideo != "undefined" && top.allowNextVideo === false) {
					top.hasJobLimit === true ? top.showJobLimitTip() : top.showVideoTimeLimitTip();
					return
				}
				chapterPlayNextVideo(c)
			}
		}
	});
	videojs.registerPlugin("seekBarControl", b);
}());
Ext.define("ans.videojs.TimelineObjectsBg", {
	extend: "Ext.Component",
	cls: "ans-timelineobjectsbg",
	hidden: true
});
Ext.define("ans.videojs.VideoQuiz", {
	extend: "Ext.Component",
	xtype: "videoquiz",
	cls: "ans-videoquiz",
	renderTpl: ['<div class=tkTopic">', `<tpl if="dtype=='InteractiveQuiz'">`, '<div class="tkTopic_numbar fr">??? {interactiveQuestionCount} ???<span id="rightAnswerNum">???????????? <i id="rightNum"></i> ???</span></div>', '</tpl> ', '<div class=\x22tkTopic_title\x22>[{questionType}]</div>', '<div class="tkTopic_con tkScroll">', '<div class="tkItem">', '<div class="tkItem_title">{description}</div>', '<ul class="tkItem_ul">', '<tpl for="options">', '<li class="ans-videoquiz-opt"><label>', `<span class="tkRadio"><input type="{[parent.questionType=="?????????"?"checkbox:"radio"]}" <tpl if="parent.dtype=='InteractiveQuiz'">{[this.getChecked(parent.answerContent, values.name, parent.dtype)]}</tpl> name="ans-videoquiz-opt" value="{isRight}"/><i></i></span>`, '{name}???{description}', '</label></li>', '</tpl>', '</ul>', '</div>', '</div>', '<div class="tkTopic_oper">', '<a class=\x22ans-videoquiz-submit bntLinear fr\x22 id=\x22videoquiz-submit\x22>??????</a>', `<a class="ans-videoquiz-continue bntLinear fr" id="videoquiz-continue"><tpl if="dtype=='InteractiveQuiz'">????????????<tpl else>??????</tpl></a>`, `<tpl if="dtype=='InteractiveQuiz'">`, '<a class=\x22bntWhiteBorder ans-videoquiz-back fr\x22 id=\x22knowledgeBack\x22>???????????????</a>', '</tpl>', `<tpl if="dtype=='InteractiveQuiz'"><span id="spanHas" class="rightInfo"></span><tpl else><span class="spanHas fr" id="spanHas">????????????</span></tpl>`, `<span class="spanNot fr" id="spanNot"><tpl if="dtype=='InteractiveQuiz'">???????????????????????????<tpl else>????????????</tpl></span>`, `<span class="spanNotBack fr" id="spanNotBack"><tpl if="dtype=='InteractiveQuiz'">???????????????????????????<tpl else>???????????????</tpl>?????? {errorBackTime} ??????</span>`, `<tpl if="dtype=='InteractiveQuiz'">`, '<span class=\x22spanNotBack fr\x22 id=\x22spanNotBackPoint\x22>???????????????????????????</span>', '<a class="spanHref fl" href="javascript:" id="viewAnalysis">????????????</a>', '</div>', '<div class=\x22tkParsing\x22 id=\x22tkParsing\x22>', '<a class=\x22tkParsing_dele\x22 href=\x22javascript:\x22></a>', '<div class=\x22tkParsing_screll tkParsing_con\x22 id=\x22tkParsing_con\x22></div>', "</tpl>", "</div>", "</div>", {
		getChecked: function (q, w, e) {	// ====Modified====
			try {
				if (typeof q != "undefined")
					return q.indexOf(w) != -1 && e == "InteractiveQuiz" ? 'checked="checked"' : "";
				return "";
			} catch (rr) {
				console.log(rr);
			}
		}
	}],
	renderSelectors: {
		submitEl: "a.ans-videoquiz-submit",
		continueEl: "a.ans-videoquiz-continue",
		scrollEl: "div.tkScroll",
		backEl: "a.ans-videoquiz-back",
		tkParseScrollEl: "div.tkParsing_screll",
		viewAnalysisEl: "a.spanHref",
		delAnalysisEl: "a.tkParsing_dele"
	},
	afterRender: function () {
		var b = this, d = b.renderData, e = b.quizRightCountUrl;
		typeof e != "undefined" && Ext.Ajax.request({
			url: e,
			params: {
				eventid: d.resourceId,
				memberinfo: d.memberinfo
			},
			method: "get",
			success: function (f) {
				var g = Ext.decode(f.responseText);
				g.status && (Ext.get("rightNum").setHTML(g.rightAnswerCount),
					Ext.get("rightAnswerNum").setStyle("display", "inline-block"));
			}
		});
		b.callParent(arguments);
		var c = b.scrollEl, a = $(c.dom).niceScroll({
			cursorborder: "",
			cursorwidth: 6,
			cursorcolor: "#A5A5A5",
			boxzoom: false,
			autohidemode: false
		});
		b.scroller = a;
		b.submitEl.on("click", function () {
			if (b.checkResult()) {
				if (Ext.get("videoquiz-continue").getStyle("display") == "none") {
					try {
						top.configFullScreen && exitMediumSizeWindow();
					} catch (ERROR) {
						console.log(ERROR);
					}
					b.fireEvent("continue");
				}
			}
		});
		b.continueEl.on("click", function () {
			try {
				top.configFullScreen && exitMediumSizeWindow();
			} catch (ERROR) {
				console.log(ERROR);
			}
			b.fireEvent("continue");
		});
		b.backEl && b.backEl.on("click", function () {
			b.onerror && b.onerror(),
				b.fireEvent("continue");
		});
		b.viewAnalysisEl && b.viewAnalysisEl.on("click", function () {
			Ext.get("tkParsing").setStyle("display", "inline-block");
		});
		b.delAnalysisEl && b.delAnalysisEl.on("click", function () {
			Ext.get("tkParsing").setStyle("display", "none");
		});
	},
	checkResult: function () {
		var f = this, i = Ext.query("input", f.el.dom), e = true, g = f.renderData, b = g.options, c = [], h = f.quizErrorReportUrl, a = f.validationUrl2, d = g.dtype;
		Ext.each(i, function (k, j) {
			(k.value == "true" && !k.checked || k.value == "false" && k.checked) && (e = false),
				k.checked && c.push(b[j].name);
		});
		!e ? g.errorBackTime && g.errorBackTime > 0x0 ? (Ext.get("spanNotBack").setStyle("display", "block"),
			Ext.get("videoquiz-submit").setStyle("display", "none"),
			d == "InteractiveQuiz" ? Ext.get("knowledgeBack").setStyle("display", "block") : Ext.get("videoquiz-continue").setStyle("display", "block")) : d == "InteractiveQuiz" && g.errorBack == 0x1 && g.eBstartPoint != "" ? (Ext.get("spanNotBackPoint").setStyle("display", "block"),
				Ext.get("knowledgeBack").setStyle("display", "block")) : Ext.get("spanNot").setStyle("display", "block") : (Ext.get("spanHas").setStyle("display", "block"),
					d == "InteractiveQuiz" && (Ext.get("videoquiz-continue").setStyle("display", "block"),
						Ext.get("knowledgeBack").setStyle("display", "none"),
						Ext.get("videoquiz-submit").setStyle("display", "none"),
						Ext.get("spanNot").setStyle("display", "none"),
						Ext.get("spanNotBack").setStyle("display", "none"),
						Ext.get("spanNotBackPoint").setStyle("display", "none")));
		if (typeof a != "undefined") {
			var l = c.join(",");
			Ext.Ajax.request({
				url: a,
				params: {
					eventid: g.resourceId,
					isRight: e,
					memberinfo: g.memberinfo,
					answerContent: l
				},
				method: "get",
				success: function (m) {
					g.answerContent = l;
					var n = Ext.decode(m.responseText);
					if (n.status) {
						if (d == "InteractiveQuiz") {
							Ext.get("rightNum").setHTML(n.rightAnswerCount),
								Ext.get("rightAnswerNum").setStyle("display", "inline-block");
							var q = "";	// ====Modified====
							n.showAnswer && n.showAnswer > 0x0 && (q += "???????????????" + n.rightContent);
							if (n.showAnswer && n.showAnswer > 0x0 || n.isRight) {
								n.testAnalysis && (q += "</br>?????????" + n.testAnalysis);
								Ext.get("tkParsing_con").setHTML(q),
									Ext.get("tkParsing").setStyle("display", "inline-block"),
									Ext.get("viewAnalysis").setStyle("display", "block");
								var o = f.tkParseScrollEl, p = $(o.dom).niceScroll({
									cursorborder: "",
									cursorwidth: 6,
									cursorcolor: "#A5A5A5",
									boxzoom: false,
									autohidemode: true
								});
								f.tkParseScroll = p;
							}
						}
						if (n.isRight && d == "InteractiveQuiz") {	// ====Modified====
							if (typeof n.showTip != "undefined" && n.showTip) {
								var r = n.percent;
								try {
									var s = Ext.getCookie("fid", 0);
									r = parseInt(r),
										s == "179952" && r > 0 && (r = 0x5a + r * 0.1);
								} catch (Error) {
									console.log(Error);
								}
								Ext.get("spanHas").setHTML(`<span class="spanHas fr" style="display:block"><span id="InteractiveQuizTip">???????????????????????????????????????????????????` + r + "%?????????</span></span>");
							} else
								Ext.get("spanHas").setHTML('<span class=\x22spanHas fr\x22 style=\x27display:block\x27><span id=\x22InteractiveQuizTip\x22>????????????????????????</span></span>');
						}
					}
				}
			}),
				!e && f.onerror && d != "InteractiveQuiz" && f.onerror();
		} else
			!e && (Ext.Ajax.request({
				url: h,
				params: {
					eventid: g.resourceId,
					memberinfo: g.memberinfo,
					answerContent: c.join(",")
				},
				method: "get"
			}),
				f.onerror && d != "InteractiveQuiz" && f.onerror());
		return !e && g.errorContinue == 0x1 && (e = true,
			Ext.get("videoquiz-submit").setStyle("display", "none"),
			Ext.get("videoquiz-continue").setStyle("display", "block")),
			e;
	},
	continueFun: function () {
		var a = this;
		a.fireEvent("continue");
	}
});
Ext.define("ans.videojs.VideoImg", {
	extend: "Ext.Component",
	xtype: "videoimg",
	renderTpl: ['<div class="sp_video_pic">', '<img src="{src}" class="sp_video_img" />', '<a class="jb_btn jb_btn_92 fs14 sp_video_pic_dele2" style="position:absolute;bottom:14px;right:20px;z-index:6;" href="javascript:">????????????</a>', "</div>"],
	renderSelectors: {
		closeEl: "a.sp_video_pic_dele2"
	},
	afterRender: function () {
		var a = this;
		a.callParent(arguments);
		try {	// ====Modified====
			var b = document.querySelector(".sp_video_img");
			b.addEventListener("load", function () {
				b.naturalWidth >= b.naturalHeight ? b.naturalWidth >= 0x190 && (b.style.width = "90%",
					b.style.height = "80%") : b.naturalHeight >= 0x190 && (b.style.height = "90%",
						b.style.width = "80%");
			});
		} catch (ERROR) {
			console.log(ERROR)
		}
		a.el.on("click", function () {
			a.fireEvent("continue")
		})
		a.closeEl.on("click", function () {
			try {
				top.configFullScreen && exitMediumSizeWindow()
			} catch (ERROR) {
				console.log(ERROR)
			}
			a.fireEvent("continue")
		})
	}
});
Ext.define("ans.videojs.VideoAnnotation", {
	extend: "Ext.Component",
	xtype: "videoannotation",
	cls: "ans-videoannotation",
	renderTpl: ['<div class="vidNota">', '<div class="vidNota_title"><h2 class="vidNota_h2">[??????]</h2><a class="vidNota_close" href="javascript:;"></a></div>', '<div class="vidNota_con" id="pizhuScroll" tabindex="1" style="overflow: hidden; outline: none;">', "<p>{description}</p>", "</div>", "</div>"],
	renderSelectors: {
		closeEl: "a.vidNota_close",
		contentEl: "div.vidNota_con"
	},
	afterRender: function () {
		var c = this, b = c.contentEl;
		c.callParent(arguments),
			c.closeEl.on("click", function () {
				c.fireEvent("continue");
			});
		var a = $(b.dom).niceScroll({
			cursorborder: "",
			cursorwidth: 0x6,
			cursorcolor: "#e0e0e0",
			boxzoom: false,
			autohidemode: true
		});
		c.scroller = a;
	}
});
Ext.define("ans.videojs.VideoPpt", {
	extend: "Ext.Component",
	xtype: "videoppt",
	cls: "ans-videoppt",
	width: "100%",
	model: false,
	renderTpl: ['<div class=\x22sp_video_ppt_pic\x22 id=\x22sp_video_ppt_pic\x22>', '<img src="{src}" class="sp_video_img" style="width: 100%;"/>', '<div style="position:absolute;left:0;top:0;right:0;bottom:0;"></div>', '<a class="sp_size_big" id="sp_size_big" href="javascript:;"></a>', '<a class="sp_size_small" href="javascript:;" style="display:none;" id="sp_size_small"></a>', "</div>"],
	renderSelectors: {
		pptPicEl: "div.sp_video_ppt_pic",
		sizeBigEl: "a.sp_size_big",
		sizeSmallEl: "a.sp_size_small"
	},
	afterRender: function () {
		var a = this;
		a.callParent(arguments);
		try {	// ====Modified====
			dragFn && dragFn("#sp_video_ppt_pic", "#video_html5_api");
		} catch (ERROR) {
			console.log(ERROR);
		};
		a.sizeBigEl.on("click", function (g) {
			g.stopPropagation();
			a.pptPicEl.toggleCls("sp_ppt_pic_fullScreen");
			Ext.get("sp_size_big").setStyle("display", "none");
			Ext.get("sp_size_small").setStyle("display", "block");
			var b = Ext.get("video").getStyle("height"), c = Ext.get("sp_video_ppt_pic").getStyle("height"), f = (parseInt(b) - 0x3c - parseInt(c)) / 2;
			Ext.get("sp_video_ppt_pic").setStyle("top", f + "px"),
				Ext.get("sp_video_ppt_pic").setStyle("left", "0");
		});
		a.sizeSmallEl.on("click", function (g) {
			g.stopPropagation();
			a.pptPicEl.toggleCls("sp_ppt_pic_fullScreen");
			Ext.get("sp_size_big").setStyle("display", "block");
			Ext.get("sp_size_small").setStyle("display", "none");
			Ext.get("sp_video_ppt_pic").setStyle("top", "0px");
			Ext.get("sp_video_ppt_pic").setStyle("left", "0px");
		});
	}
});
Ext.define("ans.videojs.TimelineObjects", {
	extend: "Ext.container.Container",
	cls: "ans-timelineobjects",
	autoScroll: true,
	hidden: true,
	hideMode: "visibility",
	constructor: function (a) {
		var b = this;
		b.callParent(arguments),
			b.bg = Ext.create("ans.videojs.TimelineObjectsBg", {
				renderTo: a.renderTo
			}),
			b.objects = a.objects && a.objects.sort ? b.sort_(a.objects) : [],
			b.current = 0;
	},
	showObject: function (m, b, e) {
		var j = this, h = j.getBox(), c = j.items.getAt(0), l, i = function () {
			l.destroy(),
				j.hide(),
				m.play();
		};
		c != null && c.destroy();
		if (b == "IMG") {
			var f = {
				src: e.url.replace(/origin/, h.width + "_" + h.height)
			};
			l = j.add({
				xtype: "videoimg",
				renderData: f
			});
		}
		if (b == "QUIZ") {
			var k = function () { };
			if (e.errorBackTime && e.errorBackTime > 0x0) {
				var n = e.errorBackTime * 0x3c;
				k = function () {
					var o = Math.max(m.currentTime() - n, 0x0);
					m.switchStatus = true,
						m.currentTime(o);
				}
			}
			l = j.add({
				xtype: "videoquiz",
				renderData: e,
				quizErrorReportUrl: j.quizErrorReportUrl,
				validationUrl2: j.validationUrl2,
				onerror: k
			});
		}
		if (b == "InteractiveQuiz") {
			var k = function () { };
			if (e.errorBackTime && e.errorBackTime > 0x0) {
				var n = e.errorBackTime * 0x3c;
				k = function () {
					var z = Math.max(m.currentTime() - n, 0x0);
					m.switchStatus = true,
						m.currentTime(z);
				}
			}
			if (e.errorBack == 0x1 && e.eBstartPoint != "") {
				var n = 0x0, y = e.eBstartPoint.split(":"), x = y.length;
				x > 0x0 && (x == 0x1 ? n = parseInt(y[0]) * 0x3c : x == 0x2 && (n = parseInt(y[0]) * 0x3c + parseInt(y[0x1]))),
					k = function () {
						m.switchStatus = true;
						m.currentTime(n)
					}
			}
			e.dtype = "InteractiveQuiz";
			l = j.add({
				xtype: "videoquiz",
				renderData: e,
				quizErrorReportUrl: j.quizErrorReportUrl,
				validationUrl2: j.validationUrl2,
				quizRightCountUrl: j.quizRightCountUrl,
				onerror: k
			});
		}
		if (b == "PPT") {
			if (e.fp == 0)
				return;
			var a = e.url;
			e.thumb ? a = e.thumb + e.pageNo + ".png" : a = a.replace(/swfv2\/.*$/, "thumb/" + e.fp + ".png");
			var f = {
				src: a
			};
			l = j.add({
				xtype: "videoppt",
				renderData: f
			});
		}
		b == "SyncAnnotationEvent" && (l = j.add({
			xtype: "videoannotation",
			renderData: e
		}));
		if (!l)
			return;
		l.on("continue", function () {
			i();
		});
		var g = !(l.model === false);
		j.showModel(g),
			g && m.pause();
	},
	showModel: function (a) {
		try {
			top.configFullScreen && mediumSizeWindow();
		} catch (ERROR) {
			console.log(ERROR);
		}
		var c = this;
		c.show();
		a ? (c.removeCls("ans-timelineobjects-autosize"),
			c.setAutoScroll(true),
			c.bg.show()) : (c.addCls("ans-timelineobjects-autosize"),
				c.setAutoScroll(false));
	},
	hide: function () {
		this.callParent(arguments);
		this.bg.hide.apply(this.bg, arguments);
	},
	updateTime: function (a, e) {
		if (this.current >= this.objects.length || a.scrubbing())
			return;
		var c = this, f = c.objects[c.current], b = f.style, g = f.datas[0];
		e >= g.startTime && (c.current++,
			setTimeout(function () {
				c.showObject(a, b, g);
			}, 0x14));
	},
	resetTime: function (b, e) {
		var c = this, a;
		for (a = 0x0; a < c.objects.length; a++) {
			var f = c.objects[a].datas[0].startTime;
			if (e <= f)
				break;
		}
		c.current = a;
	},
	sort_: function (a) {
		return a && a.sort && a.sort(function (f, e) {
			var c = f.datas[0].startTime, b = e.datas[0].startTime;
			return c - b;
		});
	}
});
(function () {
	var Plugin = videojs.getPlugin("plugin"), TimelineObjects = videojs.extend(Plugin, {
		constructor: function (player, options) {
			Plugin.call(this, player, options);
			if (!options.url)
				return;
			var me = this;
			player.eventPoints = [],
				Ext.Ajax.request({
					url: options.url,
					async: false,
					success: function (resp) {
						if (resp.status != 0xc8)
							return;
						eval("var data=" + resp.responseText);
						if (data && data.length > 0x0) {
							var a = [];
							for (var i = 0x0; i < data.length; i++) {
								var b = data[i];
								if (b.style == "InteractiveQuiz") {
									var c = b.datas;
									if (c && c.length > 0x0)
										var d = {
											time: c[0].startTime,
											text: "????????????"
										};
									a.push(d);
								}
							}
							player.eventPoints = a;
						}
						var timeline = Ext.create("ans.videojs.TimelineObjects", {
							renderTo: player.el_,
							quizErrorReportUrl: options.quizErrorReportUrl,
							validationUrl2: options.validationUrl2,
							quizRightCountUrl: options.quizRightCountUrl,
							objects: data
						});
						player.on("play", function () {
							timeline.resetTime(player, player.currentTime());
						});
						player.on("seekend", function () {
							timeline.resetTime(player, player.currentTime());
						});
						player.on("timeupdate", function () {
							!player.paused() && timeline.updateTime(player, player.currentTime());
						});
					}
				});
		}
	});
	videojs.registerPlugin("timelineObjects", TimelineObjects);
}());
(function () {
	var Plugin = videojs.getPlugin("plugin"), Marker = videojs.extend(Plugin, {
		constructor: function (player, options) {
			Plugin.call(this, player, options);
			if (!options.url)
				return;
			var me = this;
			Ext.Ajax.request({
				url: options.url,
				async: false,
				success: function (resp) {
					if (resp.status != 0xc8)
						return;
					eval("var data=" + resp.responseText);
					if (!data.status)
						return;
					var videoPlayer = videojs("video");
					if (videoPlayer && typeof videoPlayer.markers === "function") {
						var a = player.eventPoints;
						a.push.apply(a, data.list),
							videoPlayer.markers({
								markerTip: {
									display: true,
									text: function (marker) {
										return marker.text;
									}
								},
								markers: a,
								onMarkerClick: function (marker) {
									if (options.ff != 1)
										return false;
									var key = $(this).data("marker-key");
									return player.currentTime(marker.time),
										false;
								}
							})
					}
					if (data.list && data.list.length > 0) {
						var b = [], c = {};
						for (var i = 0; i < data.list.length; i++) {
							var d = data.list[i], e = d.text;
							if (!c[e]) {
								var f = [];
								f.push(d);
								c[e] = f;
								b.push(e);
							} else {
								var g = c[e];
								g.push(d);
								c[e] = g;
							}
						}
						function tmp_F1(h) {
							var j = '<div class=\x22zsCloud_box\x22><h2 class=\x22zsCloud_seltime\x22>????????????</h2><div class=\x22zsCloud_div\x22><div class=\x22zsCloud_div_list\x22>';
							for (var i = 0; i < h.length; i++) {
								var k = h[i], tmp_topic = Ext.fly(topicContent.elements[0]).select(".topicId" + k.topicid + ":not(.markertime)"), l = videojs.formatTime(k.time);
								tmp_topic && tmp_topic.elements[0] && tmp_topic.elements[0].parentElement.remove(),
									j += '<div class="zsCloud_item topicId' + k.topicid + '" data-marker-time="' + k.time + '" title="' + l + '" onclick="markersPlayer(this)">' + l + "</div>";
							}
							return j += "</div></div></div>",
								j;
						}
						Ext.select(".zsCloud").setStyle("display", "block");
						var topicContent = Ext.select(".zsCloud_ul");
						if (topicContent && topicContent.elements[0]) {
							var insertLocaltion;
							for (var i = 0; i < b.length; i++) {
								var j = b[i], k = c[j], markerHtml = "";
								if (k) {
									if (k.length == 1) {
										var marker = k[0], topic = Ext.fly(topicContent.elements[0]).select(".topicId" + marker.topicid + ":not(.markertime)"), title = videojs.formatTime(marker.time);
										topic && topic.elements[0] && topic.elements[0].parentElement.remove(),
											markerHtml = '<li><span class=\x27topicId' + marker.topicid + ` markertime' data-marker-time='` + marker.time + '\x27 title=\x27' + title + `' onclick='markersPlayer(this)'>` + marker.text + '</span></li>';
									} else
										markerHtml = '<li class="zsCloud_select"><span class="zsCloud_span">' + j + '</span>',
											k && k.length > 0x0 ? markerHtml += tmp_F1(k) : markerHtml += '</li>';
								}
								insertLocaltion ? insertLocaltion = Ext.DomHelper.insertHtml("afterEnd", insertLocaltion.elements[0], markerHtml) : insertLocaltion = Ext.DomHelper.insertHtml("afterBegin", topicContent.elements[0], markerHtml),
									insertLocaltion = Ext.fly(insertLocaltion).select("");
							}
						}
						options.videoTopicCloud && options.videoTopicCloud == 0x1 && (Ext.select(".zsCloud_down").setStyle("display", "block"),
							Ext.select(".zsCloud_body").setStyle("display", "block"));
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
									"data-marker-time": data.list[i].time,
									onclick: "markersPlayer(this)"
								},
								dataMap.set(topicid, item),
								wordList.push(item)),
								item.weight += 0x1;
						}
					$(function () {
						wordList.length != 0x0 && $("#word_cloud").jQCloud(wordList);
						function tmp_F2(a) {
							$(a).niceScroll({
								cursorborder: "",
								cursorwidth: 0x8,
								cursorcolor: "#DADFE6",
								boxzoom: false,
								autohidemode: true
							}),
								setInterval(function () {
									$(a).getNiceScroll().resize();
								}, 0x12c);
						}
						$(".zsCloud_box").each(function (a) {
							$(this).find(".zsCloud_div").attr("id", "zsCloud_div_" + a),
								tmp_F2("#zsCloud_div_" + a);
						});
					});
					$(".zsCloud_down").click(function () {
						var con = $(".zsCloud_body");
						con.is(":visible") ? (con.hide(),
							$(this).addClass("zsCloud_up"),
							$(this).text("??????")) : (con.show(),
								$(this).removeClass("zsCloud_up"),
								$(this).text("??????"));
					});
				}
			});
		}
	});
	videojs.registerPlugin("marker", Marker);
}());
(function () {
	var Plugin = videojs.getPlugin("plugin"), Subtitle = videojs.extend(Plugin, {
		constructor: function (player, options) {
			Plugin.call(this, player, options);
			var me = this, subtitleUrl = options.subtitleUrl, toVtt = function (srt) {
				var m = srt.match(/support\/(\w+).\w+/);
				if (m)
					return ServerHosts.PARENT_HOST + "/ananas/video-editor/sub?objectid=" + m[0x1];
			}, addSub = function (name, src, isdefault) {
				player.addRemoteTextTrack({
					kind: "subtitles",
					srclang: "cn",
					label: name,
					src: src,
					"default": isdefault
				}, true);
			};
			player.ready(function () {
				subtitleUrl && Ext.Ajax.request({
					url: subtitleUrl,
					success: function (resp) {
						if (resp.status != 0xc8)
							return;
						eval("var subs=" + resp.responseText);
						var index = 0x0, enIndex = 0x0;
						subs.length > 0x0 && Ext.each(subs, function (o) {
							options.translate == 0x1 && o.name == "English" ? (o.selected = true,
								enIndex = index) : o.selected = false,
								addSub(o.name, toVtt(o.url), o.selected),
								index++;
						});
						options.translate == 0x1 && (Ext.select(".vjs-subs-caps-button .vjs-icon-placeholder").setHTML("??????"),
							Ext.select(".vjs-subs-caps-button .vjs-icon-placeholder").addCls("vjs-hide-content"));
						setTimeout(function () {
							var tracks = player.textTracks();
							options.translate == 0x1 ? tracks && tracks[enIndex] ? tracks[enIndex].mode = "showing" : tracks && tracks[0] && (tracks[0].mode = "showing") : tracks && tracks[0] && (tracks[0].mode = "showing");
						}, 0x1f4);
					}
				})
				var settings = player.textTrackSettings;
				settings.setValues({
					backgroundColor: "#000",
					backgroundOpacity: "0",
					edgeStyle: "uniform"
				});
				settings.updateDisplay()
			})
		}
	});
	videojs.registerPlugin("subtitle", Subtitle);
}());
Ext.define("ans.videojs.ErrorDisplay", {
	extend: "Ext.Component",
	xtype: "vjserrdisplay",
	cls: "ans-vjserrdisplay",
	renderTpl: ['<div class="ans-vjserrdisplay-title">{errorMsg}</div>', '<ul class=\x22ans-vjserrdisplay-opts\x22>', '???????????????????????????:', '<tpl for="playlines">', '<li class="ans-vjserrdisplay-opt"><label>', '<input type="radio" name="ans-vjserrdisplay-opt" {[xindex-1 === parent.selectedIndex ? "checked disabled":""]}>', "{label}", "</label></li>", "</tpl>", "</ul>"],
	renderSelectors: {
		errorMsgEl: "div.ans-vjserrdisplay-title"
	},
	afterRender: function () {
		var b = this;
		b.callParent(arguments);
		var a = Ext.query("input", b.el.dom);
		Ext.each(a, function (f, e) {
			Ext.fly(f).on("click", function () {
				b.onSelected(e);
			});
		});
		try {
			typeof createVideoTask === "function" ? createVideoTask() : console.log("createVideoTask??????????????????");
		} catch (c) { }
	},
	setErrorMsg: function (a) {
		Ext.fly(this.errorMsgEl).setHTML(a);
	}
});
Ext.define("ans.videojs.ErrorNote", {
	extend: "Ext.Component",
	cls: "ans-vjserrdisplay",
	renderTpl: ['<div class="ans-vjserrdisplay-title">?????????????????????</div>']
});
(function () {
	var b = videojs.getComponent("ErrorDisplay"), a = videojs.extend(b, {
		constructor: function (e, c) {
			b.call(this, e, c);
		},
		colse: function () {
			b.prototype.colse.call(this),
				me.ansErrorDisplay && (me.ansErrorDisplay.destroy(),
					me.ansErrorDisplay = null);
		},
		fill: function () {
			b.prototype.fill.call(this);
			var g = this, i = g.player_, h = i.options_.playlines, e = Ext.query(".vjs-modal-dialog-content", g.el_)[0];
			g.ansErrorDisplay && (g.ansErrorDisplay.destroy(),
				delete g.ansErrorDisplay);
			if (!i.selectCDN || !h) {
				g.ansErrorDisplay = Ext.create("ans.videojs.ErrorNote", {
					renderTo: g.el_
				});
				return;
			}
			var f = i.currentPlayline(), c = 0x0;
			Ext.each(h, function (k, j) {
				f == k && (c = j);
			});
			g.ansErrorDisplay = Ext.create("ans.videojs.ErrorDisplay", {
				renderTo: g.el_,
				onSelected: function (j) {
					i.selectCDN(j),
						g.close();
				},
				renderData: {
					playlines: h,
					errorMsg: g.content(),
					selectedIndex: c
				}
			});
		}
	});
	videojs.registerComponent("ErrorDisplay", a);
}());
(function () {
	var a = null;
	typeof window.videojs === "undefined" && typeof require === "function" ? a = require("video.js") : a = window.videojs,
		function (i, h) {
			var g = {}, c, k = {}, b = {};
			function f(p, o, n, q) {
				k = {
					label: n,
					sources: o
				};
				if (typeof q === "function")
					return q(p, o, n);
				return p.src(o.map(function (r) {
					return {
						src: r.src,
						type: r.type,
						res: r.res
					};
				})),
					p;
			}
			var l = h.getComponent("MenuItem"), m = h.extend(l, {
				constructor: function (p, o, q, n) {
					this.onClickListener = q,
						this.label = n,
						l.call(this, p, o),
						this.src = o.src,
						this.on("click", this.onClick),
						this.on("touchstart", this.onClick),
						o.initialySelected && (this.showAsLabel(),
							this.selected(true),
							this.addClass("vjs-selected"));
				},
				showAsLabel: function () {
					this.label && (this.label.innerHTML = this.options_.label);
				},
				onClick: function (q) {
					this.onClickListener(this);
					var p = this.player_.currentTime(), n = this.player_.paused();
					this.showAsLabel(),
						this.addClass("vjs-selected");
					!n && this.player_.bigPlayButton.hide();
					typeof q !== "function" && typeof this.options_.customSourcePicker === "function" && (q = this.options_.customSourcePicker);
					var o = "loadeddata";
					this.player_.techName_ !== "Youtube" && this.player_.preload() === "none" && this.player_.techName_ !== "Flash" && (o = "timeupdate"),
						f(this.player_, this.src, this.options_.label, q).one(o, function () {
							var r = this.player_;
							r.switchStatus = true,
								r.currentTime(p),
								!n && r.play(),
								r.trigger("resolutionchange");
						});
				}
			});
			h.registerComponent("ResolutionMenuItem", m);
			var j = h.getComponent("MenuButton"), e = h.extend(j, {
				constructor: function (q, o, r, n) {
					this.sources = o.sources,
						this.label = n,
						this.label.innerHTML = o.initialySelectedLabel,
						j.call(this, q, o, r),
						this.controlText("Quality");
					if (r.dynamicLabel)
						this.el().appendChild(n);
					else {
						var p = document.createElement("span");
						h.dom.addClass(p, "vjs-resolution-button-staticlabel"),
							this.el().appendChild(p);
					}
				},
				createItems: function () {
					var o = [], q = this.sources && this.sources.label || {}, p = function (r) {
						o.map(function (s) {
							s.selected(s === r),
								s.removeClass("vjs-selected");
						});
					};
					for (var n in q) {
						q.hasOwnProperty(n) && (o.push(new m(this.player_, {
							label: n,
							src: q[n],
							initialySelected: n === this.options_.initialySelectedLabel,
							customSourcePicker: this.options_.customSourcePicker
						}, p, this.label)),
							b[n] = o[o.length - 0x1]);
					}
					return o;
				}
			});
			c = function (w) {
				var p = h.mergeOptions(g, w), u = this, t = document.createElement("span"), s = {};
				h.dom.addClass(t, "vjs-resolution-button-label"),
					u.updateSrc = function (y) {
						if (!y)
							return u.src();
						u.controlBar.resolutionSwitcher && (u.controlBar.resolutionSwitcher.dispose(),
							delete u.controlBar.resolutionSwitcher);
						y = y.sort(r),
							s = q(y);
						var z = o(s, y), x = new e(u, {
							sources: s,
							initialySelectedLabel: z.label,
							initialySelectedRes: z.res,
							customSourcePicker: p.customSourcePicker
						}, p, t);
						return h.dom.addClass(x.el(), "vjs-resolution-button"),
							u.controlBar.resolutionSwitcher = u.controlBar.el_.insertBefore(x.el_, u.controlBar.getChild("fullscreenToggle").el_),
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
					}
					;
				function r(y, x) {
					if (!y.res || !x.res)
						return 0x0;
					return +x.res - +y.res;
				}
				function q(y) {
					var x = {
						label: {},
						res: {},
						type: {}
					};
					return y.map(function (z) {
						n(x, "label", z),
							n(x, "res", z),
							n(x, "type", z),
							v(x, "label", z),
							v(x, "res", z),
							v(x, "type", z);
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
					var y = p.default, x = "";
					return y === "high" ? (y = A[0].res,
						x = A[0].label) : y === "low" || y == null || !z.res[y] ? (y = A[A.length - 0x1].res,
							x = A[A.length - 0x1].label) : z.res[y] && (x = z.res[y][0].label),
					{
						res: y,
						label: x,
						sources: z.res[y]
					};
				}
				u.ready(function () {
					u.options_.sources.length > 0x0 && u.setTimeout(function () {
						u.updateSrc(u.options_.sources);
					}, 0x1);
				});
			},
				h.registerPlugin("videoJsResolutionSwitcher", c);
		}(window, a);
}());
(function () {
	(function (i, h) {
		var f = {}, b, g = {}, a = {};
		function c(o, n, m, p) {
			g = n;
			if (typeof p === "function")
				return p(o, n, m);
			return o;
		}
		var l = h.getComponent("ResolutionMenuItem"), e = h.extend(l, {
			onClick: function (q) {
				this.onClickListener(this);
				var p = this.player_.currentTime(), m = this.player_.paused();
				this.showAsLabel(),
					this.addClass("vjs-selected");
				!m && this.player_.bigPlayButton.hide();
				typeof q !== "function" && typeof this.options_.customSourcePicker === "function" && (q = this.options_.customSourcePicker);
				var o = "loadeddata";
				this.player_.techName_ !== "Youtube" && this.player_.preload() === "none" && this.player_.techName_ !== "Flash" && (o = "timeupdate");
				var n = c(this.player_, this.src, this.options_.label, q);
				n && n.one(o, function () {
					n.switchStatus = true,
						n.currentTime(p),
						!m && n.play(),
						n.trigger("playlinechange");
				});
			}
		}), j = h.getComponent("MenuButton"), k = h.extend(j, {
			constructor: function (p, n, q, m) {
				this.playlines = n.playlines,
					this.label = m,
					this.label.innerHTML = n.initialySelectedLabel,
					j.call(this, p, n, q),
					this.controlText("Playline");
				if (q.dynamicLabel)
					this.el().appendChild(m);
				else {
					var o = document.createElement("span");
					h.addClass(o, "vjs-resolution-button-staticlabel"),
						this.el().appendChild(o);
				}
			},
			createItems: function () {
				var o = [], q = this.playlines || [], p = function (r) {
					o.map(function (s) {
						s.selected(s === r);
						s.removeClass("vjs-selected");
					});
				};
				for (var n = 0x0; n < q.length; n++) {
					var m = q[n].label;
					o.push(new e(this.player_, {
						label: m,
						src: q[n],
						initialySelected: m === this.options_.initialySelectedLabel,
						customSourcePicker: this.options_.customSourcePicker
					}, p, this.label)),
						a[m] = o[o.length - 0x1];
				}
				return o;
			}
		});
		b = function (o) {
			var q = h.mergeOptions(f, o), p = this, n = document.createElement("span"), r = p.options_.playlines;
			h.dom.addClass(n, "vjs-resolution-button-label");
			var m = new k(p, {
				playlines: r,
				initialySelectedLabel: r[0].label,
				initialySelectedUrl: r[0].url,
				customSourcePicker: q.customSourcePicker
			}, q, n);
			h.dom.addClass(m.el(), "vjs-resolution-button"),
				h.dom.addClass(m.el(), "vjs-playline-button"),
				m.show(),
				p.selectCDN = function (s) {
					m.items[s].onClick(q.customSourcePicker),
						p.play();
				},
				r.length > 0x0 && (g = r[0]),
				p.currentPlayline = function () {
					return g;
				},
				p.ready(function () {
					p.controlBar.videoJsPlayLine = p.controlBar.el_.insertBefore(m.el_, p.controlBar.getChild("fullscreenToggle").el_),
						p.controlBar.videoJsPlayLine.dispose = function () {
							this.parentNode.removeChild(this);
						}
						;
				});
		};
		h.registerPlugin("videoJsPlayLine", b)
	}(window, videojs));
}());
Ext.define("ans.AudioJs", {
	videoJs: null,
	mixins: {
		observable: "Ext.util.Observable"
	},
	constructor: function (a) {
		a = a || {};
		var c = this;
		c.addEvents(["seekstart"]);
		c.mixins.observable.constructor.call(c, a);
		var b = videojs(a.videojs, c.params2VideoOpt(a.params), function () { });
		Ext.fly(a.videojs).on("contextmenu", function (f) {
			f.preventDefault();
		});
		Ext.fly(a.videojs).on("keydown", function (f) {
			(f.keyCode == 0x20 || f.keyCode == 0x25 || f.keyCode == 0x27) && f.preventDefault();
		});
	},
	params2VideoOpt: function (params) {
		var sources = [];
		!params.rootPath && (params.rootPath = "");
		params.http && sources.push({
			src: params.http,
			type: "audio/mp3"
		});
		var logFunc = function (player, url, callback) {
			var me = this;
			!me.logCount && (me.logCount = 0x0),
				videojs.xhr({
					uri: url,
					headers: {
						"Content-Type": "application/json"
					}
				}, function (err, resp) {
					me.logCount++;
					if (resp.statusCode == 0xc8) {
						me.logCount = 0x0;
						if (resp.body.indexOf("isPassed") < 0x0) {
							window.parent && window.parent.location.reload();
							return;
						}
						eval("var d=" + resp.body);
						d.isPassed && callback();
						return;
					}
					me.logCount >= 0x4 && (me.logCount = 0x0,
						player.pause(),
						resp.statusCode != 0x0 ? alert("???????????????????????????????????????????????????????????????????????????...(e:" + resp.statusCode + ")") : alert("??????????????????????????????????????????..."));
				});
		}, sendLog_ = function (player, isdrag, currentTimeSec, callback) {
			if (!params.reportUrl)
				return;
			var format = "[{0}][{1}][{2}][{3}][{4}][{5}][{6}][{7}]",
				clipTime = (params.startTime || "0") + "_" + (params.endTime || params.duration),
				a = 0x0,
				b;
			currentTimeSec.toString().indexOf("-") != -0x1 ? (b = currentTimeSec.split("-"),
				b.length == 0x2 && (a = parseInt(b[0x1]) * 0x3e8)) : a = currentTimeSec * 0x3e8;
			if (a == params.duration * 0x3e8 && isdrag == 0x2)
				return;
			var enc = Ext.String.format(format, params.clazzId, params.userid, params.jobid ? params.jobid : "", params.objectId, a, "d_yHJ!$pdA~5", params.duration * 0x3e8, clipTime),
				rurl = [params.reportUrl, "/", params.dtoken, "?clazzId=", params.clazzId, "&playingTime=", currentTimeSec, "&duration=", params.duration, "&clipTime=", clipTime, "&objectId=", params.objectId, "&otherInfo=", params.otherInfo, "&jobid=", params.jobid, "&userid=", params.userid, "&isdrag=", isdrag, "&view=pc", "&enc=", md5(enc), "&rt=", params.rt, "&dtype=Audio", "&_t=", new Date().getTime()].join("");
			logFunc(player, rurl, callback);
		};
		return {
			language: "zh-CN",
			controls: true,
			preload: "auto",
			bigPlayButton: false,
			sources: sources,
			textTrackDisplay: true,
			controlBar: {
				volumePanel: {
					inline: true
				},
				children: ["playToggle", "currentTimeDisplay", "timeDivider", "durationDisplay", "progressControl", "volumePanel"]
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
					sendLog: function (player, evt, sec) {
						if (this.isSendLog !== true)
							return;
						var isdrag = 0x0;
						switch (evt) {
							case "play":
								isdrag = 0x3;
								break;
							case "pause":
								isdrag = 0x2;
								break;
							case "ended":
								isdrag = 0x4;
								break;
						}
						sendLog_(player, isdrag, sec, function () {
							window.proxy_completed && window.proxy_completed();
						})
					}
				}
			}
		}
	}
});
Ext.define("ans.videojs.AudioNote", {
	extend: "Ext.Component",
	cls: "ans-audionote"
});
(function () {
	var b = videojs.getPlugin("plugin"), a = videojs.extend(b, {
		constructor: function (e, c) {
			b.call(this, e, c);
			Ext.create("ans.videojs.AudioNote", {
				renderTo: e.el_,
				html: c.title
			})
		}
	});
	videojs.registerPlugin("audioNote", a)
}());
