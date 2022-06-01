Ext.define("ananas.ServerHosts", {
	alternateClassName: "ServerHosts",
	singleton: true,
	constructor: function () {
		var a = this;
		a.callParent(arguments);
		var b = document.domain;
		try {
			a.MASTER_HOST = location.protocol + "//" + top.location.host
		} catch (c) {
			a.MASTER_HOST = location.protocol + "//" + location.host
		}
		try {
			a.PARENT_HOST = location.protocol + "//" + parent.location.host
		} catch (c) {
			a.MASTER_HOST = location.protocol + "//" + location.host
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
		a.ZHIBO_HOST = "https://zhibo.chaoxing.com"
	}
});
(function (g) {
	function q(v, A) {
		var z = (v & 65535) + (A & 65535);
		var w = (v >> 16) + (A >> 16) + (z >> 16);
		return (w << 16) | (z & 65535)
	}
	function p(v, w) {
		return (v << w) | (v >>> (32 - w))
	}
	function k(B, y, w, v, A, z) {
		return q(p(q(q(y, B), q(v, z)), A), w)
	}
	function a(y, w, C, B, v, A, z) {
		return k((w & C) | ((~w) & B), y, w, v, A, z)
	}
	function h(y, w, C, B, v, A, z) {
		return k((w & B) | (C & (~B)), y, w, v, A, z)
	}
	function n(y, w, C, B, v, A, z) {
		return k(w ^ C ^ B, y, w, v, A, z)
	}
	function t(y, w, C, B, v, A, z) {
		return k(C ^ (w | (~B)), y, w, v, A, z)
	}
	function c(G, B) {
		G[B >> 5] |= 128 << (B % 32);
		G[(((B + 64) >>> 9) << 4) + 14] = B;
		var y;
		var A;
		var z;
		var w;
		var v;
		var F = 1732584193;
		var E = -271733879;
		var D = -1732584194;
		var C = 271733878;
		for (y = 0; y < G.length; y += 16) {
			A = F;
			z = E;
			w = D;
			v = C;
			F = a(F, E, D, C, G[y], 7, -680876936);
			C = a(C, F, E, D, G[y + 1], 12, -389564586);
			D = a(D, C, F, E, G[y + 2], 17, 606105819);
			E = a(E, D, C, F, G[y + 3], 22, -1044525330);
			F = a(F, E, D, C, G[y + 4], 7, -176418897);
			C = a(C, F, E, D, G[y + 5], 12, 1200080426);
			D = a(D, C, F, E, G[y + 6], 17, -1473231341);
			E = a(E, D, C, F, G[y + 7], 22, -45705983);
			F = a(F, E, D, C, G[y + 8], 7, 1770035416);
			C = a(C, F, E, D, G[y + 9], 12, -1958414417);
			D = a(D, C, F, E, G[y + 10], 17, -42063);
			E = a(E, D, C, F, G[y + 11], 22, -1990404162);
			F = a(F, E, D, C, G[y + 12], 7, 1804603682);
			C = a(C, F, E, D, G[y + 13], 12, -40341101);
			D = a(D, C, F, E, G[y + 14], 17, -1502002290);
			E = a(E, D, C, F, G[y + 15], 22, 1236535329);
			F = h(F, E, D, C, G[y + 1], 5, -165796510);
			C = h(C, F, E, D, G[y + 6], 9, -1069501632);
			D = h(D, C, F, E, G[y + 11], 14, 643717713);
			E = h(E, D, C, F, G[y], 20, -373897302);
			F = h(F, E, D, C, G[y + 5], 5, -701558691);
			C = h(C, F, E, D, G[y + 10], 9, 38016083);
			D = h(D, C, F, E, G[y + 15], 14, -660478335);
			E = h(E, D, C, F, G[y + 4], 20, -405537848);
			F = h(F, E, D, C, G[y + 9], 5, 568446438);
			C = h(C, F, E, D, G[y + 14], 9, -1019803690);
			D = h(D, C, F, E, G[y + 3], 14, -187363961);
			E = h(E, D, C, F, G[y + 8], 20, 1163531501);
			F = h(F, E, D, C, G[y + 13], 5, -1444681467);
			C = h(C, F, E, D, G[y + 2], 9, -51403784);
			D = h(D, C, F, E, G[y + 7], 14, 1735328473);
			E = h(E, D, C, F, G[y + 12], 20, -1926607734);
			F = n(F, E, D, C, G[y + 5], 4, -378558);
			C = n(C, F, E, D, G[y + 8], 11, -2022574463);
			D = n(D, C, F, E, G[y + 11], 16, 1839030562);
			E = n(E, D, C, F, G[y + 14], 23, -35309556);
			F = n(F, E, D, C, G[y + 1], 4, -1530992060);
			C = n(C, F, E, D, G[y + 4], 11, 1272893353);
			D = n(D, C, F, E, G[y + 7], 16, -155497632);
			E = n(E, D, C, F, G[y + 10], 23, -1094730640);
			F = n(F, E, D, C, G[y + 13], 4, 681279174);
			C = n(C, F, E, D, G[y], 11, -358537222);
			D = n(D, C, F, E, G[y + 3], 16, -722521979);
			E = n(E, D, C, F, G[y + 6], 23, 76029189);
			F = n(F, E, D, C, G[y + 9], 4, -640364487);
			C = n(C, F, E, D, G[y + 12], 11, -421815835);
			D = n(D, C, F, E, G[y + 15], 16, 530742520);
			E = n(E, D, C, F, G[y + 2], 23, -995338651);
			F = t(F, E, D, C, G[y], 6, -198630844);
			C = t(C, F, E, D, G[y + 7], 10, 1126891415);
			D = t(D, C, F, E, G[y + 14], 15, -1416354905);
			E = t(E, D, C, F, G[y + 5], 21, -57434055);
			F = t(F, E, D, C, G[y + 12], 6, 1700485571);
			C = t(C, F, E, D, G[y + 3], 10, -1894986606);
			D = t(D, C, F, E, G[y + 10], 15, -1051523);
			E = t(E, D, C, F, G[y + 1], 21, -2054922799);
			F = t(F, E, D, C, G[y + 8], 6, 1873313359);
			C = t(C, F, E, D, G[y + 15], 10, -30611744);
			D = t(D, C, F, E, G[y + 6], 15, -1560198380);
			E = t(E, D, C, F, G[y + 13], 21, 1309151649);
			F = t(F, E, D, C, G[y + 4], 6, -145523070);
			C = t(C, F, E, D, G[y + 11], 10, -1120210379);
			D = t(D, C, F, E, G[y + 2], 15, 718787259);
			E = t(E, D, C, F, G[y + 9], 21, -343485551);
			F = q(F, A);
			E = q(E, z);
			D = q(D, w);
			C = q(C, v)
		}
		return [F, E, D, C]
	}
	function o(w) {
		var x;
		var v = "";
		var y = w.length * 32;
		for (x = 0; x < y; x += 8) {
			v += String.fromCharCode((w[x >> 5] >>> (x % 32)) & 255)
		}
		return v
	}
	function j(w) {
		var y;
		var v = [];
		v[(w.length >> 2) - 1] = undefined;
		for (y = 0; y < v.length; y += 1) {
			v[y] = 0
		}
		var x = w.length * 8;
		for (y = 0; y < x; y += 8) {
			v[y >> 5] |= (w.charCodeAt(y / 8) & 255) << (y % 32)
		}
		return v
	}
	function i(v) {
		return o(c(j(v), v.length * 8))
	}
	function u(x, A) {
		var w;
		var z = j(x);
		var v = [];
		var y = [];
		var B;
		v[15] = y[15] = undefined;
		if (z.length > 16) {
			z = c(z, x.length * 8)
		}
		for (w = 0; w < 16; w += 1) {
			v[w] = z[w] ^ 909522486;
			y[w] = z[w] ^ 1549556828
		}
		B = c(v.concat(j(A)), 512 + A.length * 8);
		return o(c(y.concat(B), 512 + 128))
	}
	function s(z) {
		var y = "0123456789abcdef";
		var w = "";
		var v;
		var A;
		for (A = 0; A < z.length; A += 1) {
			v = z.charCodeAt(A);
			w += y.charAt((v >>> 4) & 15) + y.charAt(v & 15)
		}
		return w
	}
	function l(v) {
		return unescape(encodeURIComponent(v))
	}
	function e(v) {
		return i(l(v))
	}
	function m(v) {
		return s(e(v))
	}
	function b(v, w) {
		return u(l(v), l(w))
	}
	function r(v, w) {
		return s(b(v, w))
	}
	function f(w, x, v) {
		if (!x) {
			if (!v) {
				return m(w)
			}
			return e(w)
		}
		if (!v) {
			return r(x, w)
		}
		return b(x, w)
	}
	if (typeof define === "function" && define.amd) {
		define(function () {
			return f
		})
	} else {
		if (typeof module === "object" && module.exports) {
			module.exports = f
		} else {
			g.md5 = f
		}
	}
}
	(this));
Ext.apply(Ext, {
	setCookie: function (c, f) {
		var a = arguments,
			i = arguments.length,
			b = (i > 2) ? a[2] : null,
			h = (i > 3) ? a[3] : "/",
			e = (i > 4) ? a[4] : null,
			g = (i > 5) ? a[5] : false;
		document.cookie = c + "=" + escape(f) + ((b === null) ? "" : ("; expires=" + b.toGMTString())) + ((h === null) ? "" : ("; path=" + h)) + ((e === null) ? "" : ("; domain=" + e)) + ((g === true) ? "; secure" : "")
	},
	getCookie: function (e, h) {
		var b = e + "=",
			g = b.length,
			a = document.cookie.length,
			f = 0,
			c = 0;
		while (f < a) {
			c = f + g;
			if (document.cookie.substring(f, c) == b) {
				return this.getCookieVal(c)
			}
			f = document.cookie.indexOf(" ", f) + 1;
			if (f === 0) {
				break
			}
		}
		return h
	},
	getCookieVal: function (b) {
		var a = document.cookie.indexOf(";", b);
		if (a == -1) {
			a = document.cookie.length
		}
		return unescape(document.cookie.substring(b, a))
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
		e.addEvents(["seekstart"]);
		e.mixins.observable.constructor.call(e, b);
		var c = videojs(b.videojs, e.params2VideoOpt(b.params), function () { });
		Ext.fly(b.videojs).on("contextmenu", function (f) {
			f.preventDefault()
		});
		Ext.fly(b.videojs).on("keydown", function (f) {
			if (f.keyCode == 32 || f.keyCode == 37 || f.keyCode == 39 || f.keyCode == 107) {
				f.preventDefault()
			}
		});
		if (c.videoJsResolutionSwitcher) {
			c.on("resolutionchange", function () {
				var g = c.currentResolution(),
					f = g.sources ? g.sources[0].res : false;
				Ext.setCookie("resolution", f)
			})
		}
		var a = b.params && b.params.doublespeed ? 2 : 1;
		c.on("ratechange", function () {
			var h = c.playbackRate();
			h > a && (c.pause(),
				c.playbackRate(1));
		});
	},
	params2VideoOpt: function (params) {
		var useM3u8 = false;
		var cdn = [{
			indexorder: 0,
			label: "公网1",
			url: ServerHosts.s1_HOST,
			ispublic: true
		}, {
			indexorder: 1,
			label: "公网2",
			url: ServerHosts.s2_HOST,
			ispublic: true
		}
		];
		if (params.cdn) {
			try {
				if (top.window.app && top.window.app == 2) {
					cdn = cdn.concat(params.cdn)
				} else {
					cdn = cdn.concat(params.cdn).sort(function (o1, o2) {
						return o1.indexorder - o2.indexorder
					})
				}
			} catch (e) {
				cdn = cdn.concat(params.cdn)
			}
		}
		function m3u8(objectId, r, cdn) {
			return "http://hls-ans.chaoxing.com/hls/m3u8/" + objectId + "/" + r + ".m3u8?cdn=" + encodeURIComponent(cdn)
		}
		function makeSource(src, r) {
			var sdomain = ServerHosts.s1_HOST.replace("http:/", "").replace("https:/", "");
			var start = 0;
			if (src.src.indexOf(sdomain) > -1) {
				start = src.src.indexOf(sdomain) + sdomain.length
			}
			var file = src.src.substr(start);
			if (r.ispublic && start == 0) {
				return {
					src: file,
					type: "video/mp4",
					res: src.res
				}
			}
			if (r.ispublic) {
				return useM3u8 ? {
					src: m3u8(params.objectId, src.resolution, r.url),
					type: "application/x-mpegURL",
					res: src.res
				}
					: {
						src: r.url + file,
						type: "video/mp4",
						res: src.res
					}
			} else {
				return useM3u8 ? {
					src: m3u8(params.objectId, src.resolution, r.url + sdomain),
					type: "application/x-mpegURL",
					res: src.res
				}
					: {
						src: r.url + sdomain + file,
						type: "video/mp4",
						res: src.res
					}
			}
		}
		var sources = [],
			defaultRes = Ext.getCookie("resolution", 360);
		if (!params.rootPath) {
			params.rootPath = ""
		}
		if (params.http) {
			sources.push({
				src: params.http,
				type: "video/mp4",
				label: "标清",
				resolution: "sd",
				res: 360
			})
		}
		if (params.httphd) {
			sources.push({
				src: params.httphd,
				type: "video/mp4",
				label: "高清",
				resolution: "hd",
				res: 720
			})
		}
		if (params.httpshd) {
			sources.push({
				src: params.httpshd,
				type: "video/mp4",
				label: "超高清",
				resolution: "shd",
				res: 1080
			})
		}
		if (params.httpmd) {
			sources.push({
				src: params.httpmd,
				type: "video/mp4",
				label: "极速",
				resolution: "md",
				res: 240
			})
		}
		if (sources.length == 1) {
			var cdnItem = sources[0];
			cdnItem.label = "高清"
		}
		var findDefaultRes = false;
		for (var i = 0; i < sources.length; i++) {
			if (sources[i].res == defaultRes) {
				findDefaultRes = true;
				break
			}
		}
		if (!findDefaultRes) {
			defaultRes = 360
		}
		var disableLog = !Ext.isChaoxing && (Ext.isIos || Ext.isAndroid);
		var logFunc = function (player, url, callback) {
			try {
				if (typeof top.hasJobLimit != "undefined" && top.hasJobLimit === true && isUnFinishJob()) {
					return
				}
			} catch (e) {
				console.log(e);
			}
			if (disableLog) {
				return
			}
			var me = this;
			if (!me.logCount) {
				me.logCount = 0
			}
			videojs.xhr({
				uri: url,
				headers: {
					"Content-Type": "application/json"
				}
			}, function (err, resp) {
				me.logCount++;
				if (resp.statusCode == 200) {
					me.logCount = 0;
					if (resp.body.indexOf("isPassed") < 0) {
						if (window.parent) {
							window.parent.location.reload()
						}
						return
					}
					eval("var d=" + resp.body);
					if (d.isPassed) {
						try {
							if (typeof d.hasJobLimit != "undefined" && d.hasJobLimit === true) {
								top.allowNextVideo = false;
								top.hasJobLimit = true
							}
						} catch (e) {
							console.log(e)
						}
						callback()
					}
					return
				}
				if (me.logCount >= 4) {
					me.logCount = 0;
					player.pause();
					if (resp.statusCode != 0) {
						alert("服务繁忙，不能保证您能否正常完成任务，请您稍后继续...(e: " + resp.statusCode + ")")
					} else {
						alert("您的网络不稳定，请您稍后继续...")
					}
				}
			})
		};
		var sendLog_ = function (player, isdrag, currentTimeSec, callback) {
			if (!params.reportUrl) {
				return
			}
			if (params.isFiled == 1 || params.state == 1) {
				return
			}
			var format = "[{0}][{1}][{2}][{3}][{4}][{5}][{6}][{7}]",
				clipTime = (params.startTime || "0") + "_" + (params.endTime || params.duration);
			var playTime = 0,
				timeArr;
			if (currentTimeSec.toString().indexOf("-") != -1) {
				timeArr = currentTimeSec.split("-");
				if (timeArr.length == 2) {
					playTime = parseInt(timeArr[1]) * 1000
				}
			}
			if (playTime == params.duration * 1000 && isdrag == 2) {
				return
			}
			var enc = Ext.String.format(format, params.clazzId, params.userid, params.jobid || "", params.objectId, playTime, "d_yHJ!$pdA~5", params.duration * 1000, clipTime);
			var rurl = [params.reportUrl, "/", params.dtoken, "?clazzId=", params.clazzId, "&playingTime=", currentTimeSec, "&duration=", params.duration, "&clipTime=", clipTime, "&objectId=", params.objectId, "&otherInfo=", params.otherInfo, "&jobid=", params.jobid, "&userid=", params.userid, "&isdrag=", isdrag, "&view=pc", "&enc=", md5(enc), "&rt=", params.rt, "&dtype=Video", "&_t=", new Date().getTime()].join("");
			logFunc(player, rurl, callback)
		};
		return {
			language: "zh-CN",
			poster: params.screenshot,
			controls: true,
			preload: "none",
			sources: sources,
			playlines: cdn,
			playbackRates: params.doublespeed != 0 ? [1, 1.25, 1.5, 2] : false,
			textTrackDisplay: true,
			controlBar: {
				volumePanel: {
					inline: false
				},
				children: ["playToggle", "playbackRateMenuButton", "currentTimeDisplay", "timeDivider", "durationDisplay", "progressControl", "volumePanel", "subsCapsButton", "fullscreenToggle", "videoJsPlayLine", "textTrackButton"]
			},
			plugins: {
				videoJsResolutionSwitcher: {
					"default": defaultRes,
					dynamicLabel: true,
					customSourcePicker: function (player, sources, label) {
						var r = player.currentPlayline();
						player.src(sources.map(function (src) {
							return makeSource(src, r)
						}));
						return player
					}
				},
				videoJsPlayLine: {
					dynamicLabel: true,
					customSourcePicker: function (player, r, label) {
						var src = player.currentResolution().sources[0];
						player.src(makeSource(src, r));
						return player
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
					chapterCapture: params.chapterCapture || 0,
					captureInterval: params.captureInterval || 600,
					chapterCollectionType: params.chapterCollectionType || 0,
					startCapture: params.startCapture,
					endCapture: params.endCapture,
					playAginCapture: params.playAginCapture,
					playingCapture: params.playingCapture,
					playingLoopCapture: params.playingLoopCapture,
					duration: params.duration,
					isSupportFace: params.isSupportFace || false,
					isShowFaceCollection: params.isShowFaceCollection,
					attachmentId: params.aId,
					sendLog: function (player, evt, sec, A) {
						if (this.isSendLog !== true) {
							return
						}
						var isdrag = 0;
						switch (evt) {
							case "playing":
								isdrag = 0;
								break;
							case "drag":
								isdrag = 1;
								break;
							case "play":
								isdrag = 3;
								break;
							case "pause":
								isdrag = 2;
								break;
							case "ended":
								isdrag = 4;
								break
						}
						var B = this;
						sendLog_(player, isdrag, sec, function () {
							try {
								if (isdrag === 4 && typeof A != "undefined") {
									A.sendDataLog("ended");
									A.playNextVideo(B.attachmentId);
								}
							} catch (e) {
								console.log(e)
							}
							window.proxy_completed && window.proxy_completed()
						})
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
		}
	}
});
Object.defineProperty(ans.VideoJs.prototype, "params2VideoOpt", {
	configurable: false,
	writable: false
});
Object.freeze(ans.VideoJs.prototype.params2VideoOpt);
(function () {
	var b = videojs.getPlugin("plugin");
	var a = videojs.extend(b, {
		constructor: function (f, c) {
			b.call(this, f, c);
			var g = this,
				j = c.mouseElTarget,
				i = 1;
			if (c.enableSwitchWindow !== 1) {
				i = 0
			}
			if (!j) {
				try {
					j = window.top ? window.top : window.document
				} catch (h) {
					j = window.parent ? window.parent : window.document
				}
			}
			Ext.fly(j).on("mouseout", function (k) {
				k = k ? k : window.event;
				var l = k.relatedTarget || k.toElement;
				if (!l) {
					if (i != 1) {
						f.pause()
					}
				}
			});
			g.singleton(f)
		},
		singleton: function (c) {
			var f = this,
				e = parseInt(Math.random() * 9999999);
			c.on("play", function () {
				Ext.setCookie("videojs_id", e)
			});
			c.setInterval(function () {
				var g = Ext.getCookie("videojs_id");
				if (typeof g != "undefined" && g != e) {
					c.pause()
				}
			}, 1000)
		}
	});
	videojs.registerPlugin("studyControl", a)
})();
(function () {
	var a = videojs.getComponent("SeekBar");
	var b = videojs.extend(a, {
		constructor: function (e, c) {
			a.call(this, e, c);
			var f = this;
			e.ignorePause = false;
			e.disableSeek = function (g) {
				f.disableSeek(g)
			};
			e.onlyBackward = function (g) {
				f.onlyBackward(g)
			};
			e.getSeekBar = function () {
				return f
			};
			f.on("slideractive", function () {
				e.trigger("seekstart");
				e.ignorePause = true;
				e.ignorePlay = true;
				e.ignoreSeek = false
			});
			f.on("sliderinactive", function () {
				e.trigger("seekend");
				e.ignoreSeek = false
			});
			f.maxPercent = 0;
			e.on("timeupdate", function () {
				f.maxPercent = Math.max(f.getPercent(), f.maxPercent)
			})
		},
		getCurrentTime_: function () {
			return this.player_.currentTime()
		},
		getMaxPercent: function () {
			return this.maxPercent
		},
		isBackward: function (c) {
			return this.maxPercent > this.calculateDistance(c)
		},
		handleMouseDown: function (c) {
			if (this._onlyBackward) {
				if (!this.isBackward(c)) {
					return
				}
			}
			if (this._disableSeek === true) {
				return
			}
			a.prototype.handleMouseDown.call(this, c)
		},
		handleMouseMove: function (c) {
			if (this._disableSeek === true) {
				return
			}
			if (this._onlyBackward) {
				if (!this.isBackward(c)) {
					return
				}
			}
			a.prototype.handleMouseMove.call(this, c)
		},
		handleMouseUp: function (c) {
			if (this._disableSeek === true) {
				return
			}
			if (this._onlyBackward) {
				if (!this.isBackward(c)) {
					return
				}
			}
			a.prototype.handleMouseUp.call(this, c)
		},
		disableSeek: function (c) {
			var e = this;
			e._disableSeek = c !== false;
			if (e._disableSeek) {
				e.disable()
			} else {
				e.enable()
			}
		},
		onlyBackward: function (e) {
			var c = this;
			c._onlyBackward = e !== false
		}
	});
	videojs.registerComponent("SeekBar", b)
})();
(function () {
	var a = videojs.getPlugin("plugin");
	var b = videojs.extend(a, {
		constructor: function (g, f) {
			a.call(this, g, f);
			var h = this;
			h.firstClick = true;
			h.isSendLog_ = !!f.isSendLog;
			h.isShowDanmu_ = !!f.isShowDanmu;
			h.damuLastGetTime = 0;
			h.timeCount = 0;
			h.isPlay = false;
			h.isEnd = false;
			h.playTimer,
				h.chapterCapture = f.chapterCapture || 0;
			h.captureInterval = f.captureInterval * 60 || 600;
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
			h.playingFace = false;
			h.loopCaptureInterval = Math.floor(Math.random() * (parseInt(h.duration) - 0) + 1);
			h.isAginFace = false;
			h.againStartTime = 0;
			h.attachmentId = f.attachmentId;
			g.on("ready", function () {
				if (f.enableFastForward != 1) {
					g.disableSeek()
				}
			});
			if (!f.sendLog) {
				f.sendLog = function () { }
			}
			if (f.headOffset) {
				g.currentTime(f.headOffset)
			}
			var k = 0,
				c = 0,
				e = f.reportTimeInterval || 60,
				j = e * 1000;
			var i = function (l, m, o) {
				if (!h.isSendLog_) {
					return
				}
				var n = h.now_() - k;
				if (n > j || m === true) {
					if (typeof o != "undefined") {
						f.sendLog(g, l, o, h);
						h.playTimer && clearInterval(h.playTimer)
					} else {
						f.sendLog(g, l, h.sec_(g), h)
					}
					k = h.now_()
				}
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
						checkJobCountLimit(g);
						return;
					}
				} catch (e) {
					console.log(e);
				}
				h.isAlertTip = false;
				if (h.chapterCapture == 0 || !h.isSupportFace) {
					if (!g.ignorePlay) {
						i("play", true);
						g.ignoreSeek = true
					} else {
						g.ignorePlay = false;
						g.ignoreSeek = false
					}
					h.sendDataLog("play");
					h.receiveStudyLog();
					h.getDanmuList("play", g)
				} else {
					if (h.chapterCapture == 1) {
						if (h.timeCount == 0) {
							if (h.isShowFaceCollection && !h.isPlay && (h.startCapture == 1 || typeof h.startCapture == "undefined")) {
								h.faceCollection("play", g, h.chapterCollectionType);
								g.pause()
							} else {
								if (!g.ignorePlay) {
									i("play", true);
									g.ignoreSeek = true
								} else {
									g.ignorePlay = false;
									g.ignoreSeek = false
								}
								h.sendDataLog("play");
								h.receiveStudyLog();
								h.getDanmuList("play", g);
								if (h.isShowFaceCollection && typeof h.playingCapture == "undefined" || (h.playingCapture == 1 && h.playingLoopCapture == 0)) {
									h.timer(g)
								}
								if (h.isShowFaceCollection && h.playAginCapture == 1 && g.ignorePlay && !h.isAginFace) {
									h.faceCollection("aginPlay", g, h.chapterCollectionType);
									g.pause()
								}
							}
						} else {
							if (h.isShowFaceCollection && typeof h.playingCapture == "undefined" || (h.playingCapture == 1 && h.playingLoopCapture == 1)) {
								h.timer(g)
							}
							if (h.isShowFaceCollection && h.playAginCapture == 1 && !g.ignorePlay && !h.isAginFace) {
								h.faceCollection("aginPlay", g, h.chapterCollectionType);
								g.pause();
								h.againStartTime = h.sec_(g)
							}
						}
					}
				}
			});
			g.on("seeked", function () {
				if (f.enableFastForward != 1 && !g.switchStatus) {
					var l = g.currentTime(),
						m = f.headOffset ? f.headOffset : 0;
					if (l != 0 && l > m) {
						g.currentTime(m)
					}
				}
				if (!g.ignoreSeek) {
					i("drag", true, c + "-" + h.sec_(g))
				} else {
					g.ignoreSeek = false
				}
				c = h.sec_(g);
				g.ignorePlay = true;
				delete g.switchStatus
			});
			g.on("pause", function () {
				if (!g.ignorePause) {
					i("pause", true);
					g.ignorePlay = false;
					g.ignoreSeek = false
				} else {
					g.ignorePause = false
				}
				h.sendDataLog("pause");
				h.getDanmuList("pause", g)
			});
			g.on("timeupdate", function () {
				if (h.sec_(g) - h.againStartTime > 2) {
					h.isAginFace = false
				}
				if (h.isShowFaceCollection && h.chapterCapture == 1 && h.playingCapture == 1 && h.playingLoopCapture == 1 && h.sec_(g) == h.loopCaptureInterval && !h.playingFace) {
					h.faceCollection("playing", g, h.chapterCollectionType);
					g.pause()
				}
				if (typeof parent.videoTrialDuration != "undefined" && parent.videoTrialDuration != "-1") {
					var l = parseInt(parent.videoTrialDuration) * 60;
					if (l < h.sec_(g) && !h.isAlertTip) {
						g.pause();
						alert("视频只允许试看" + parent.videoTrialDuration + "分钟");
						h.isAlertTip = true;
						return
					}
				}
				if (parseInt(g.currentTime()) >= this.damuLastGetTime) {
					h.getDanmuList("timeupdate", g)
				}
				h.danmuDisplay(g);
				if (k == 0) {
					return
				}
				if (h.sec_(g) - c <= 1 && !g.ignorePlay) {
					c = h.sec_(g)
				}
				i("playing");
			});
			g.on("ended", function () {
				h.playTimer && clearInterval(h.playTimer);
				if (h.isShowFaceCollection && !h.isEnd && h.chapterCapture == 1 && h.endCapture == 1) {
					h.faceCollection("ended", g, h.chapterCollectionType)
				}
				i("ended", true);
			})
		},
		sec_: function (c) {
			return parseInt(c.currentTime())
		},
		now_: function () {
			return new Date().getTime()
		},
		isSendLog: function (c) {
			if (c) {
				this.isSendLog_ = !!c
			}
			return this.isSendLog_
		},
		sendDataLog: function (e) {
			var c = (e == "pause" || e == "end") ? 2 : 1;
			if (typeof (sendReadZTMediaLog) != "undefined") {
				sendReadZTMediaLog(c)
			}
		},
		receiveStudyLog: function () {
			if (typeof (receiveStudyLog) != "undefined") {
				setTimeout(function () {
					receiveStudyLog()
				}, 50)
			}
		},
		getDanmuList: function (e, c) {
			if (!this.isShowDanmu_) {
				return
			}
			var f = this.sec_(c);
			if (e == "pause") {
				this.damuLastGetTime = 0;
				setTimeout(function () {
					getDanmuByTime(e, 0)
				}, 200);
				return
			}
			if (typeof (getDanmuByTime) != "undefined") {
				setTimeout(function () {
					getDanmuByTime(e, f)
				}, 200);
			}
			if (f < this.damuLastGetTime) {
				return
			}
			this.damuLastGetTime = f + 59
		},
		danmuDisplay: function (c) {
			if (!this.isShowDanmu_) {
				return
			}
			var e = this.sec_(c);
			if (typeof (danmuPlay) != "undefined") {
				danmuPlay(e)
			}
		},
		timer: function (c) {
			var e = this;
			this.playTimer = setInterval(function () {
				e.timeCount++;
				if (e.timeCount >= e.captureInterval) {
					e.isPlay = false;
					e.faceCollection("pause", c, e.chapterCollectionType)
				}
			}, 1000)
		},
		faceCollection: function (e, c, f) {
			if (e == "play" && this.timeCount == 0 && typeof (startFaceCollection) != "undefined") {
				startFaceCollection(c, f, this)
			} else if (e == "pause") {
				this.playTimer && clearInterval(this.playTimer);
				if (!this.isPlay && this.timeCount >= this.captureInterval) {
					if (typeof (startFaceCollection) != "undefined") {
						startFaceCollection(c, f, this)
					}
					this.timeCount = 0
				}
			} else if (e == "ended") {
				this.playTimer && clearInterval(this.playTimer);
				if (typeof (startFaceCollection) != "undefined") {
					startFaceCollection(c, f, this);
					this.isEnd = true
				}
				this.timeCount = 0
			} else if (e == "playing" && typeof (startFaceCollection) != "undefined") {
				startFaceCollection(c, f, this);
				this.playingFace = true
			} else if (e == "aginPlay" && typeof (startFaceCollection) != "undefined") {
				startFaceCollection(c, f, this);
				this.isAginFace = true
			}
		},
		playNextVideo: function (c) {
			if (typeof (chapterPlayNextVideo) != "undefined") {
				if (typeof top.allowNextVideo != "undefined" && top.allowNextVideo === false) {
					top.showJobLimitTip();
					return
				}
				chapterPlayNextVideo(c)
			}
		}
	});
	videojs.registerPlugin("seekBarControl", b)
})();
Ext.define("ans.videojs.TimelineObjectsBg", {
	extend: "Ext.Component",
	cls: "ans-timelineobjectsbg",
	hidden: true
});
Ext.define("ans.videojs.VideoQuiz", {
	extend: "Ext.Component",
	xtype: "videoquiz",
	cls: "ans-videoquiz",
	renderTpl: ['<div class="tkTopic">', '<tpl if="dtype==\x27InteractiveQuiz\x27">', '<div class="tkTopic_numbar fr">共 {interactiveQuestionCount} 题<span id="rightAnswerNum">，已答对 <i id="rightNum"></i> 题</span></div>', '</tpl>', '<div class="tkTopic_title">[{questionType}]</div>', '<div class="tkTopic_con tkScroll">', '<div class="tkItem">', '<div class="tkItem_title">{description}</div>', '<ul class="tkItem_ul">', '<tpl for="options">', '<li class="ans-videoquiz-opt"><label>', '<span class="tkRadio"><input type="{[parent.questionType=="多选题"?"checkbox":"radio"]}" <tpl if="parent.dtype==\x27InteractiveQuiz\x27">{[this.getChecked(parent.answerContent, values.name, parent.dtype)]}</tpl> name="ans-videoquiz-opt" value="{isRight}"/><i></i></span>', '{name}、{description}', '</label></li>', '</tpl>', '</ul>', '</div>', '</div>', '<div class="tkTopic_oper">', '<a class="ans-videoquiz-submit bntLinear fr" id="videoquiz-submit">提交</a>', '<a class="ans-videoquiz-continue bntLinear fr" id="videoquiz-continue"><tpl if="dtype==\x27InteractiveQuiz\x27">继续学习<tpl else>继续</tpl></a>', '<tpl if="dtype==\x27InteractiveQuiz\x27">', '<a class="bntWhiteBorder ans-videoquiz-back fr" id="knowledgeBack">知识点回看</a>', '</tpl>', '<tpl if="dtype==\x27InteractiveQuiz\x27"><span id="spanHas"></span><tpl else><span class="spanHas fr" id="spanHas">回答正确</span></tpl>', '<span class="spanNot fr" id="spanNot"><tpl if="dtype==\x27InteractiveQuiz\x27">真遗憾，再接再厉！<tpl else>回答错误</tpl></span>', '<span class="spanNotBack fr" id="spanNotBack"><tpl if="dtype==\x27InteractiveQuiz\x27">真遗憾，再接再厉！<tpl else>回答错误，</tpl>回看 {errorBackTime} 分钟</span>', '<tpl if="dtype==\x27InteractiveQuiz\x27">', '<span class="spanNotBack fr" id="spanNotBackPoint">真遗憾，再接再厉！</span>', '<a class="spanHref fl" href="javascript:" id="viewAnalysis">查看解析</a>', '</div>', '<div class="tkParsing" id="tkParsing">', '<a class="tkParsing_dele" href="javascript:"></a>', '<div class="tkParsing_screll tkParsing_con" id="tkParsing_con"></div>', '</tpl>', '</div>', '</div>', {
		getChecked: function (q, w, e) {
			return q.indexOf(w) != -1 && e == "InteractiveQuiz" ? 'checked="checked"' : "";
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
		var b = this;
		var d = b.renderData;
		var e = b.quizRightCountUrl;
		if (typeof e != "undefined") {
			Ext.Ajax.request({
				url: e,
				params: {
					eventid: d.resourceId,
					"memberinfo": d.memberinfo
				},
				method: "get",
				success: function (f) {
					var g = Ext.decode(f.responseText);
					if (g.status) {
						Ext.get("rightNum").setHTML(g.rightAnswerCount);
						Ext.get("rightAnswerNum").setStyle("display", "inline-block")
					}
				}
			});
		}
		b.callParent(arguments);
		var c = b.scrollEl;
		var a = $(c.dom).niceScroll({
			cursorborder: "",
			cursorwidth: 6,
			cursorcolor: "#A5A5A5",
			boxzoom: false,
			autohidemode: true
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
					b.fireEvent("continue")
				}
			}
		});
		b.continueEl.on("click", function () {
			try {
				top.configFullScreen && exitMediumSizeWindow();
			} catch (ERROR) {
				console.log(ERROR);
			}
			b.fireEvent("continue")
		});
		b.backEl && b.backEl.on("click", function () {
			b.onerror && b.onerror();
			b.fireEvent("continue")
		});
		b.viewAnalysisEl && b.viewAnalysisEl.on("click", function () {
			Ext.get("tkParsing").setStyle("display", "inline-block")
		});
		b.delAnalysisEl && b.delAnalysisEl.on("click", function () {
			Ext.get("tkParsing").setStyle("display", "none")
		})
	},
	checkResult: function () {
		var f = this,
			i = Ext.query("input", f.el.dom),
			e = true,
			g = f.renderData,
			b = g.options,
			c = [],
			h = f.quizErrorReportUrl,
			a = f.validationUrl2,
			d = g.dtype;
		Ext.each(i, function (k, j) {
			(k.value == "true" && !k.checked) || (k.value == "false" && k.checked) && (e = false);
			k.checked && c.push(b[j].name);
		});
		if (!e) {
			if (g.errorBackTime && g.errorBackTime > 0) {
				Ext.get("spanNotBack").setStyle("display", "block");
				Ext.get("videoquiz-submit").setStyle("display", "none");
				if (d == "InteractiveQuiz") {
					Ext.get("knowledgeBack").setStyle("display", "block")
				} else {
					Ext.get("videoquiz-continue").setStyle("display", "block")
				}
			} else {
				if (d == "InteractiveQuiz" && g.errorBack == 1 && g.eBstartPoint != "") {
					Ext.get("spanNotBackPoint").setStyle("display", "block");
					Ext.get("knowledgeBack").setStyle("display", "block")
				} else {
					Ext.get("spanNot").setStyle("display", "block")
				}
			}
		} else {
			Ext.get("spanHas").setStyle("display", "block");
			if (d == "InteractiveQuiz") {
				Ext.get("videoquiz-continue").setStyle("display", "block");
				Ext.get("knowledgeBack").setStyle("display", "none");
				Ext.get("videoquiz-submit").setStyle("display", "none");
				Ext.get("spanNot").setStyle("display", "none");
				Ext.get("spanNotBack").setStyle("display", "none");
				Ext.get("spanNotBackPoint").setStyle("display", "none")
			}
		}
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
							Ext.get("rightNum").setHTML(n.rightAnswerCount);
							Ext.get("rightAnswerNum").setStyle("display", "inline-block")
						};
						if (n.isRight && d == "InteractiveQuiz") {
							if (typeof n.showTip != "undefined" && n.showTip) {
								Ext.get("spanHas").setHTML("<span class='spanHas fr' style='display:block'><span id='InteractiveQuizTip'>恭喜你，答对了！你的答题水准超过了" + n.percent + "%的同学</span></span>")
							} else {
								Ext.get("spanHas").setHTML("<span class='spanHas fr' style='display:block'><span id='InteractiveQuizTip'>恭喜你，答对了！</span></span>")
							}
							if (n.testAnalysis) {
								Ext.get("tkParsing_con").setHTML("解析：" + n.testAnalysis);
								Ext.get("tkParsing").setStyle("display", "inline-block");
								Ext.get("viewAnalysis").setStyle("display", "block");
								var o = f.tkParseScrollEl,
									p = $(o.dom).niceScroll({
										cursorborder: "",
										cursorwidth: 6,
										cursorcolor: "#A5A5A5",
										boxzoom: false,
										autohidemode: true
									});
								f.tkParseScroll = p
							}
						}
					}
				}
			});
			if (!e && f.onerror && d != "InteractiveQuiz") {
				f.onerror()
			}
		} else {
			if (!e) {
				Ext.Ajax.request({
					url: h,
					params: {
						eventid: g.resourceId,
						memberinfo: g.memberinfo,
						answerContent: c.join(",")
					},
					method: "get"
				});
				if (f.onerror && d != "InteractiveQuiz") {
					f.onerror()
				}
			}
		}
		if (!e && g.errorContinue == 1) {
			e = true;
			Ext.get("videoquiz-submit").setStyle("display", "none");
			Ext.get("videoquiz-continue").setStyle("display", "block")
		}
		return e
	},
	continueFun: function () {
		var a = this;
		a.fireEvent("continue")
	}
});
Ext.define("ans.videojs.VideoImg", {
	extend: "Ext.Component",
	xtype: "videoimg",
	renderTpl: ['<div class="sp_video_pic">', '<img src="{src}" class="sp_video_img" />', '<a class="sp_video_pic_dele" href="javascript:;"></a>', "</div>"],
	renderSelectors: {
		closeEl: "a.sp_video_pic_dele"
	},
	afterRender: function () {
		var a = this;
		a.callParent(arguments);
		a.el.on("click", function () {
			a.fireEvent("continue")
		});
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
	renderTpl: ['<div class="vidNota">', '<div class="vidNota_title"><h2 class="vidNota_h2">[批注]</h2><a class="vidNota_close" href="javascript:;"></a></div>', '<div class="vidNota_con" id="pizhuScroll" tabindex="1" style="overflow: hidden; outline: none;">', "<p>{description}</p>", "</div>", "</div>"],
	renderSelectors: {
		closeEl: "a.vidNota_close",
		contentEl: "div.vidNota_con"
	},
	afterRender: function () {
		var c = this,
			b = c.contentEl;
		c.callParent(arguments);
		c.closeEl.on("click", function () {
			c.fireEvent("continue")
		});
		var a = $(b.dom).niceScroll({
			cursorborder: "",
			cursorwidth: 6,
			cursorcolor: "#e0e0e0",
			boxzoom: false,
			autohidemode: true
		});
		c.scroller = a
	}
});
Ext.define("ans.videojs.VideoPpt", {
	extend: "Ext.Component",
	xtype: "videoppt",
	cls: "ans-videoppt",
	width: "100%",
	model: false,
	renderTpl: ['<div class="sp_video_ppt_pic" id="sp_video_ppt_pic">', '<img src="{src}" class="sp_video_img" style="width: 100%;"/>', '<a class="sp_size_big" id="sp_size_big" href="javascript:;"></a>', '<a class="sp_size_small" href="javascript:;" style="display:none;" id="sp_size_small"></a>', "</div>"],
	renderSelectors: {
		pptPicEl: "div.sp_video_ppt_pic",
		sizeBigEl: "a.sp_size_big",
		sizeSmallEl: "a.sp_size_small"
	},
	afterRender: function () {
		var a = this;
		a.callParent(arguments);
		a.pptPicEl.on("click", function (g) {
			g.stopPropagation();
			a.pptPicEl.toggleCls("sp_ppt_pic_fullScreen");
			if (a.pptPicEl.hasCls("sp_ppt_pic_fullScreen")) {
				Ext.get("sp_size_big").setStyle("display", "none");
				Ext.get("sp_size_small").setStyle("display", "block");
				var b = Ext.get("video").getStyle("height");
				var f = Ext.get("sp_video_ppt_pic").getStyle("height");
				var c = (parseInt(b) - 60 - parseInt(f)) / 2;
				Ext.get("sp_video_ppt_pic").setStyle("top", c + "px");
				Ext.get("sp_video_ppt_pic").setStyle("left", "0")
			} else {
				Ext.get("sp_size_big").setStyle("display", "block");
				Ext.get("sp_size_small").setStyle("display", "none");
				Ext.get("sp_video_ppt_pic").setStyle("top", "0px");
				Ext.get("sp_video_ppt_pic").setStyle("left", "0px")
			}
		});
		a.sizeBigEl.on("click", function (g) {
			g.stopPropagation();
			a.pptPicEl.toggleCls("sp_ppt_pic_fullScreen");
			Ext.get("sp_size_big").setStyle("display", "none");
			Ext.get("sp_size_small").setStyle("display", "block");
			var b = Ext.get("video").getStyle("height");
			var f = Ext.get("sp_video_ppt_pic").getStyle("height");
			var c = (parseInt(b) - 60 - parseInt(f)) / 2;
			Ext.get("sp_video_ppt_pic").setStyle("top", c + "px");
			Ext.get("sp_video_ppt_pic").setStyle("left", "0")
		});
		a.sizeSmallEl.on("click", function (b) {
			b.stopPropagation();
			a.pptPicEl.toggleCls("sp_ppt_pic_fullScreen");
			Ext.get("sp_size_big").setStyle("display", "block");
			Ext.get("sp_size_small").setStyle("display", "none");
			Ext.get("sp_video_ppt_pic").setStyle("top", "0px");
			Ext.get("sp_video_ppt_pic").setStyle("left", "0px")
		})
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
		b.callParent(arguments);
		b.bg = Ext.create("ans.videojs.TimelineObjectsBg", {
			renderTo: a.renderTo
		});
		b.objects = a.objects && a.objects.sort ? b.sort_(a.objects) : [];
		b.current = 0
	},
	showObject: function (m, b, e) {
		var j = this,
			h = j.getBox(),
			c = j.items.getAt(0),
			l,
			i = function () {
				l.destroy();
				j.hide();
				m.play()
			};
		if (c != null) {
			c.destroy()
		}
		if (b == "IMG") {
			var f = {
				src: e.url.replace(/origin/, h.width + "_" + h.height)
			};
			l = j.add({
				xtype: "videoimg",
				renderData: f
			})
		}
		if (b == "QUIZ") {
			var k = function () { };
			if (e.errorBackTime && e.errorBackTime > 0) {
				var n = e.errorBackTime * 60;
				k = function () {
					var o = Math.max(m.currentTime() - n, 0);
					m.switchStatus = true;
					m.currentTime(o)
				}
			}
			l = j.add({
				xtype: "videoquiz",
				renderData: e,
				quizErrorReportUrl: j.quizErrorReportUrl,
				validationUrl2: j.validationUrl2,
				onerror: k
			})
		}
		if (b == "InteractiveQuiz") {
			var k = function () { };
			if (e.errorBackTime && e.errorBackTime > 0) {
				var o = e.errorBackTime * 60;
				k = function () {
					var z = Math.max(m.currentTime() - o, 0);
					m.switchStatus = true;
					m.currentTime(z)
				}
			}
			if (e.errorBack == 1 && e.eBstartPoint != "") {
				var o = 0,
					y = e.eBstartPoint.split(":"),
					x = y.length;
				if (x > 0) {
					if (x == 1) {
						o = parseInt(y[0]) * 60
					} else if (x == 2) {
						o = parseInt(y[0]) * 60 + parseInt(y[1])
					}
				}
				k = function () {
					m.switchStatus = true;
					m.currentTime(o)
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
			})
		}
		if (b == "PPT") {
			if (e.fp == 0) {
				return
			}
			var a = e.url;
			if (e.thumb) {
				a = e.thumb + e.pageNo + ".png"
			} else {
				a = a.replace(/swfv2\/.*$/, "thumb/" + e.fp + ".png")
			}
			var f = {
				src: a
			};
			l = j.add({
				xtype: "videoppt",
				renderData: f
			})
		}
		if (b == "SyncAnnotationEvent") {
			l = j.add({
				xtype: "videoannotation",
				renderData: e
			})
		}
		if (!l) {
			return
		}
		l.on("continue", function () {
			i()
		});
		var g = !(l.model === false);
		j.showModel(g);
		g && m.pause()
	},
	showModel: function (a) {
		try {
			top.configFullScreen && mediumSizeWindow()
		} catch (ERROR) {
			console.log(ERROR)
		}
		var c = this;
		c.show();
		if (a) {
			c.removeCls("ans-timelineobjects-autosize");
			c.setAutoScroll(true);
			c.bg.show()
		} else {
			c.addCls("ans-timelineobjects-autosize");
			c.setAutoScroll(false)
		}
	},
	hide: function () {
		this.callParent(arguments);
		this.bg.hide.apply(this.bg, arguments)
	},
	updateTime: function (a, e) {
		if (this.current >= this.objects.length || a.scrubbing()) {
			return
		}
		var c = this,
			f = c.objects[c.current],
			b = f.style,
			g = f.datas[0];
		if (e >= g.startTime) {
			c.current++;
			setTimeout(function () { c.showObject(a, b, g) }, 30)
		}
	},
	resetTime: function (b, e) {
		var c = this,
			a;
		for (a = 0; a < c.objects.length; a++) {
			var f = c.objects[a].datas[0].startTime;
			if (e <= f) {
				break
			}
		}
		c.current = a
	},
	sort_: function (a) {
		return a && a.sort && a.sort(function (f, e) {
			var c = f.datas[0].startTime;
			var b = e.datas[0].startTime;
			return c - b
		})
	}
});
(function () {
	var Plugin = videojs.getPlugin("plugin");
	var TimelineObjects = videojs.extend(Plugin, {
		constructor: function (player, options) {
			Plugin.call(this, player, options);
			if (!options.url) {
				return
			}
			var me = this;
			player.eventPoints = [];
			Ext.Ajax.request({
				url: options.url,
				async: false,
				success: function (resp) {
					if (resp.status != 200) {
						return
					}
					eval("var data=" + resp.responseText);
					if (data && data.length > 0) {
						var a = [];
						for (var i = 0; i < data.length; i++) {
							var b = data[i];
							if (b.style == "InteractiveQuiz") {
								var c = b.datas;
								if (c && c.length > 0)
									var d = {
										time: c[0].startTime,
										text: "互动测验"
									};
								a.push(d);
							}
						}
						player.eventPoints = a
					}
					var timeline = Ext.create("ans.videojs.TimelineObjects", {
						renderTo: player.el_,
						quizErrorReportUrl: options.quizErrorReportUrl,
						validationUrl2: options.validationUrl2,
						quizRightCountUrl: options.quizRightCountUrl,
						objects: data
					});
					player.on("play", function () {
						timeline.resetTime(player, player.currentTime())
					});
					player.on("seekend", function () {
						timeline.resetTime(player, player.currentTime())
					});
					player.on("timeupdate", function () {
						if (!player.paused()) {
							timeline.updateTime(player, player.currentTime())
						}
					})
				}
			})
		}
	});
	videojs.registerPlugin("timelineObjects", TimelineObjects)
})();
(function () {
	var Plugin = videojs.getPlugin("plugin");
	var Marker = videojs.extend(Plugin, {
		constructor: function (player, options) {
			Plugin.call(this, player, options);
			if (!options.url) {
				return
			}
			var me = this;
			Ext.Ajax.request({
				url: options.url,
				async: false,
				success: function (resp) {
					if (resp.status != 200) {
						return
					}
					eval("var data=" + resp.responseText);
					if (!data.status) {
						return
					}
					var videoPlayer = videojs("video");
					if (videoPlayer && typeof videoPlayer.markers === "function") {
						var a = player.eventPoints;
						a.push.apply(a, data.list);
						videoPlayer.markers({
							markerTip: {
								display: true,
								text: function (marker) {
									return marker.text
								}
							},
							markers: a,
							onMarkerClick: function (marker) {
								if (options.ff != 1) {
									return false
								}
								var key = $(this).data("marker-key");
								player.currentTime(marker.time);
								return false
							}
						})
					}
					if (data.list && data.list.length > 0) {
						var b = [];
						var c = {};
						for (var i = 0; i < data.list.length; i++) {
							var d = data.list[i];
							var e = d.text;
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
							var j = '<div class="zsCloud_box"><h2 class="zsCloud_seltime">选择时间</h2><div class="zsCloud_div"><div class="zsCloud_div_list">';
							for (var i = 0; i < h.length; i++) {
								var k = h[i],
									tmp_topic = Ext.fly(topicContent.elements[0]).select(".topicId" + k.topicid + ":not(.markertime)"),
									l = videojs.formatTime(k.time);
								tmp_topic && tmp_topic.elements[0] && tmp_topic.elements[0].parentElement.remove();
								j += '<div class="zsCloud_item topicId' + k.topicid + '" data-marker-time="' + k.time + '" title="' + l + '"onclick ="markersPlayer(this)">' + l + "</div>";
							}
							j += "</div></div></div>";
							return j;
						}
						Ext.select(".zsCloud").setStyle("display", "block");
						var topicContent = Ext.select(".zsCloud_ul");
						if (topicContent && topicContent.elements[0]) {
							var insertLocaltion;
							for (var i = 0; i < b.length; i++) {
								var j = b[i];
								var k = c[j];
								var markerHtml = "";
								if (k) {
									if (k.length == 1) {
										var marker = k[0];
										var topic = Ext.fly(topicContent.elements[0]).select(".topicId" + marker.topicid + ":not(.markertime)");
										var title = videojs.formatTime(marker.time);
										if (topic && topic.elements[0]) {
											topic.elements[0].parentElement.remove()
										}
										markerHtml = '<li><span class="topicId' + marker.topicid + ' markertime" data-marker-time="' + marker.time + "' title='" + title + "' onclick='markersPlayer(this)'>" + marker.text + "</span></li>";
									} else {
										markerHtml = '<li class="zsCloud_select"><span class="zsCloud_span">' + j + '</span>';
										if (k && k.length > 0) {
											markerHtml += tmp_F1(k)
										} else {
											markerHtml += "</li>"
										}
									}
								}
								if (insertLocaltion) {
									insertLocaltion = Ext.DomHelper.insertHtml("afterEnd", insertLocaltion.elements[0], markerHtml)
								} else {
									insertLocaltion = Ext.DomHelper.insertHtml("afterBegin", topicContent.elements[0], markerHtml)
								}
								insertLocaltion = Ext.fly(insertLocaltion).select("")
							}
						}
						if (options.videoTopicCloud && options.videoTopicCloud == 1) {
							Ext.select(".zsCloud_down").setStyle("display", "block");
							Ext.select(".zsCloud_body").setStyle("display", "block")
						}
					}
					var dataMap = new Map();
					var wordList = new Array();
					if (data.list && data.list.length > 0) {
						for (var i = 0; i < data.list.length; i++) {
							var topicid = data.list[i].topicid;
							var item = dataMap.get(topicid);
							if (!item) {
								item = {};
								item.text = data.list[i].text;
								item.time = data.list[i].time;
								item.topicid = data.list[i].topicid;
								item.weight = 0;
								item.html = {
									"data-marker-time": data.list[i].time,
									onclick: "markersPlayer(this)"
								};
								dataMap.set(topicid, item);
								wordList.push(item)
							}
							item.weight += 1
						}
					}
					$(function () {
						if (wordList.length != 0) {
							$("#word_cloud").jQCloud(wordList)
						}
						function tmp_F2(a) {
							$(a).niceScroll({
								cursorborder: "",
								cursorwidth: 8,
								cursorcolor: "#DADFE6",
								boxzoom: false,
								autohidemode: true
							});
							setInterval(function () {
								$(a).getNiceScroll().resize()
							}, 300);
						}
						$(".zsCloud_box").each(function (a) {
							$(this).find(".zsCloud_div").attr("id", "zsCloud_div_" + a);
							tmp_F2("#zsCloud_div_" + a);
						});
					});
					$(".zsCloud_down").click(function () {
						var con = $(".zsCloud_body");
						if (con.is(":visible")) {
							con.hide();
							$(this).addClass("zsCloud_up");
							$(this).text("展开")
						} else {
							con.show();
							$(this).removeClass("zsCloud_up");
							$(this).text("收起")
						}
					})
				}
			})
		}
	});
	videojs.registerPlugin("marker", Marker)
})();
(function () {
	var Plugin = videojs.getPlugin("plugin");
	var Subtitle = videojs.extend(Plugin, {
		constructor: function (player, options) {
			Plugin.call(this, player, options);
			var me = this,
				subtitleUrl = options.subtitleUrl,
				toVtt = function (srt) {
					var m = srt.match(/support\/(\w+).\w+/);
					if (m) {
						return ServerHosts.PARENT_HOST + "/ananas/video-editor/sub?objectid=" + m[1]
					}
				},
				addSub = function (name, src, isdefault) {
					player.addRemoteTextTrack({
						kind: "subtitles",
						srclang: "cn",
						label: name,
						src: src,
						"default": isdefault
					}, true)
				};
			player.ready(function () {
				if (subtitleUrl) {
					Ext.Ajax.request({
						url: subtitleUrl,
						success: function (resp) {
							if (resp.status != 200) {
								return
							}
							eval("var subs=" + resp.responseText);
							var index = 0,
								enIndex = 0;
							if (subs.length > 0) {
								Ext.each(subs, function (o) {
									if (options.translate == 1 && o.name == "English") {
										o.selected = true;
										enIndex = index
									} else {
										o.selected = false
									}
									addSub(o.name, toVtt(o.url), o.selected);
									index++
								})
							}
							if (options.translate == 1) {
								Ext.select(".vjs-subs-caps-button .vjs-icon-placeholder").setHTML("翻译");
								Ext.select(".vjs-subs-caps-button .vjs-icon-placeholder").addCls("vjs-hide-content")
							}
							setTimeout(function () {
								var tracks = player.textTracks();
								if (options.translate == 1) {
									if (tracks && tracks[enIndex]) {
										tracks[enIndex].mode = "showing"
									} else {
										if (tracks && tracks[0]) {
											tracks[0].mode = "showing"
										}
									}
								} else {
									if (tracks && tracks[0]) {
										tracks[0].mode = "showing"
									}
								}
							}, 500)
						}
					})
				}
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
	videojs.registerPlugin("subtitle", Subtitle)
})();
Ext.define("ans.videojs.ErrorDisplay", {
	extend: "Ext.Component",
	xtype: "vjserrdisplay",
	cls: "ans-vjserrdisplay",
	renderTpl: ['<div class="ans-vjserrdisplay-title">{errorMsg}</div>', '<ul class="ans-vjserrdisplay-opts">', "您可以尝试其他线路: ", '<tpl for="playlines">', '<li class="ans-vjserrdisplay-opt"><label>', '<input type="radio" name="ans-vjserrdisplay-opt" {[xindex-1 === parent.selectedIndex ? "checked disabled":""]}>', "{label}", "</label></li>", "</tpl> ", "</ul>"],
	renderSelectors: {
		errorMsgEl: "div.ans-vjserrdisplay-title"
	},
	afterRender: function () {
		var b = this;
		b.callParent(arguments);
		var a = Ext.query("input", b.el.dom);
		Ext.each(a, function (f, e) {
			Ext.fly(f).on("click", function () {
				b.onSelected(e)
			})
		});
		try {
			if (typeof (createVideoTask) === "function") {
				createVideoTask()
			} else {
				console.log("createVideoTask函数不存在！")
			}
		} catch (c) { }
	},
	setErrorMsg: function (a) {
		Ext.fly(this.errorMsgEl).setHTML(a)
	}
});
Ext.define("ans.videojs.ErrorNote", {
	extend: "Ext.Component",
	cls: "ans-vjserrdisplay",
	renderTpl: ['<div class="ans-vjserrdisplay-title">播放出现异常。</div>']
});
(function () {
	var b = videojs.getComponent("ErrorDisplay");
	var a = videojs.extend(b, {
		constructor: function (e, c) {
			b.call(this, e, c)
		},
		colse: function () {
			b.prototype.colse.call(this);
			if (me.ansErrorDisplay) {
				me.ansErrorDisplay.destroy();
				me.ansErrorDisplay = null
			}
		},
		fill: function () {
			b.prototype.fill.call(this);
			var g = this,
				i = g.player_,
				h = i.options_.playlines,
				e = Ext.query(".vjs-modal-dialog-content", g.el_)[0];
			if (g.ansErrorDisplay) {
				g.ansErrorDisplay.destroy();
				delete g.ansErrorDisplay
			}
			if (!i.selectCDN || !h) {
				g.ansErrorDisplay = Ext.create("ans.videojs.ErrorNote", {
					renderTo: g.el_
				});
				return
			}
			var f = i.currentPlayline(),
				c = 0;
			Ext.each(h, function (k, j) {
				if (f == k) {
					c = j
				}
			});
			g.ansErrorDisplay = Ext.create("ans.videojs.ErrorDisplay", {
				renderTo: g.el_,
				onSelected: function (j) {
					i.selectCDN(j);
					g.close()
				},
				renderData: {
					playlines: h,
					errorMsg: g.content(),
					selectedIndex: c
				}
			})
		}
	});
	videojs.registerComponent("ErrorDisplay", a)
})();
(function () {
	var a = null;
	if (typeof window.videojs === "undefined" && typeof require === "function") {
		a = require("video.js")
	} else {
		a = window.videojs
	}
	(function (i, h) {
		var g = {},
			c,
			k = {},
			b = {};
		function f(p, o, n, q) {
			k = {
				label: n,
				sources: o
			};
			if (typeof q === "function") {
				return q(p, o, n)
			}
			p.src(o.map(function (r) {
				return {
					src: r.src,
					type: r.type,
					res: r.res
				}
			}));
			return p
		}
		var l = h.getComponent("MenuItem");
		var m = h.extend(l, {
			constructor: function (p, o, q, n) {
				this.onClickListener = q;
				this.label = n;
				l.call(this, p, o);
				this.src = o.src;
				this.on("click", this.onClick);
				this.on("touchstart", this.onClick);
				if (o.initialySelected) {
					this.showAsLabel();
					this.selected(true);
					this.addClass("vjs-selected")
				}
			},
			showAsLabel: function () {
				if (this.label) {
					this.label.innerHTML = this.options_.label
				}
			},
			onClick: function (q) {
				this.onClickListener(this);
				var p = this.player_.currentTime();
				var n = this.player_.paused();
				this.showAsLabel();
				this.addClass("vjs-selected");
				if (!n) {
					this.player_.bigPlayButton.hide()
				}
				if (typeof q !== "function" && typeof this.options_.customSourcePicker === "function") {
					q = this.options_.customSourcePicker
				}
				var o = "loadeddata";
				if (this.player_.techName_ !== "Youtube" && this.player_.preload() === "none" && this.player_.techName_ !== "Flash") {
					o = "timeupdate"
				}
				f(this.player_, this.src, this.options_.label, q).one(o, function () {
					var r = this.player_;
					r.switchStatus = true;
					r.currentTime(p);
					if (!n) {
						r.play()
					}
					r.trigger("resolutionchange")
				})
			}
		});
		h.registerComponent("ResolutionMenuItem", m);
		var j = h.getComponent("MenuButton");
		var e = h.extend(j, {
			constructor: function (q, o, r, n) {
				this.sources = o.sources;
				this.label = n;
				this.label.innerHTML = o.initialySelectedLabel;
				j.call(this, q, o, r);
				this.controlText("Quality");
				if (r.dynamicLabel) {
					this.el().appendChild(n)
				} else {
					var p = document.createElement("span");
					h.dom.addClass(p, "vjs-resolution-button-staticlabel");
					this.el().appendChild(p)
				}
			},
			createItems: function () {
				var o = [];
				var q = (this.sources && this.sources.label) || {};
				var p = function (r) {
					o.map(function (s) {
						s.selected(s === r);
						s.removeClass("vjs-selected")
					})
				};
				for (var n in q) {
					if (q.hasOwnProperty(n)) {
						o.push(new m(this.player_, {
							label: n,
							src: q[n],
							initialySelected: n === this.options_.initialySelectedLabel,
							customSourcePicker: this.options_.customSourcePicker
						}, p, this.label));
						b[n] = o[o.length - 1]
					}
				}
				return o
			}
		});
		c = function (w) {
			var p = h.mergeOptions(g, w),
				u = this,
				t = document.createElement("span"),
				s = {};
			h.dom.addClass(t, "vjs-resolution-button-label");
			u.updateSrc = function (y) {
				if (!y) {
					return u.src()
				}
				if (u.controlBar.resolutionSwitcher) {
					u.controlBar.resolutionSwitcher.dispose();
					delete u.controlBar.resolutionSwitcher
				}
				y = y.sort(r);
				s = q(y);
				var z = o(s, y);
				var x = new e(u, {
					sources: s,
					initialySelectedLabel: z.label,
					initialySelectedRes: z.res,
					customSourcePicker: p.customSourcePicker
				}, p, t);
				h.dom.addClass(x.el(), "vjs-resolution-button");
				u.controlBar.resolutionSwitcher = u.controlBar.el_.insertBefore(x.el_, u.controlBar.getChild("fullscreenToggle").el_);
				u.controlBar.resolutionSwitcher.dispose = function () {
					this.parentNode.removeChild(this)
				};
				return f(u, z.sources, z.label, p.customSourcePicker)
			};
			u.currentResolution = function (x, y) {
				if (x == null) {
					return k
				}
				if (b[x] != null) {
					b[x].onClick(y)
				}
				return u
			};
			u.getGroupedSrc = function () {
				return s
			};
			function r(y, x) {
				if (!y.res || !x.res) {
					return 0
				}
				return (+x.res) - (+y.res)
			}
			function q(y) {
				var x = {
					label: {},
					res: {},
					type: {}
				};
				y.map(function (z) {
					n(x, "label", z);
					n(x, "res", z);
					n(x, "type", z);
					v(x, "label", z);
					v(x, "res", z);
					v(x, "type", z)
				});
				return x
			}
			function n(x, y, z) {
				if (x[y][z[y]] == null) {
					x[y][z[y]] = []
				}
			}
			function v(x, y, z) {
				x[y][z[y]].push(z)
			}
			function o(z, A) {
				var y = p["default"];
				var x = "";
				if (y === "high") {
					y = A[0].res;
					x = A[0].label
				} else {
					if (y === "low" || y == null || !z.res[y]) {
						y = A[A.length - 1].res;
						x = A[A.length - 1].label
					} else {
						if (z.res[y]) {
							x = z.res[y][0].label
						}
					}
				}
				return {
					res: y,
					label: x,
					sources: z.res[y]
				}
			}
			u.ready(function () {
				if (u.options_.sources.length > 0) {
					u.setTimeout(function () {
						u.updateSrc(u.options_.sources)
					}, 1)
				}
			})
		};
		h.registerPlugin("videoJsResolutionSwitcher", c)
	})(window, a)
})();
(function () {
	(function (i, h) {
		var f = {},
			b,
			g = {},
			a = {};
		function c(o, n, m, p) {
			g = n;
			if (typeof p === "function") {
				return p(o, n, m)
			}
			return o
		}
		var l = h.getComponent("ResolutionMenuItem");
		var e = h.extend(l, {
			onClick: function (q) {
				this.onClickListener(this);
				var p = this.player_.currentTime();
				var m = this.player_.paused();
				this.showAsLabel();
				this.addClass("vjs-selected");
				if (!m) {
					this.player_.bigPlayButton.hide()
				}
				if (typeof q !== "function" && typeof this.options_.customSourcePicker === "function") {
					q = this.options_.customSourcePicker
				}
				var o = "loadeddata";
				if (this.player_.techName_ !== "Youtube" && this.player_.preload() === "none" && this.player_.techName_ !== "Flash") {
					o = "timeupdate"
				}
				var n = c(this.player_, this.src, this.options_.label, q);
				if (n) {
					n.one(o, function () {
						n.switchStatus = true;
						n.currentTime(p);
						if (!m) {
							n.play()
						}
						n.trigger("playlinechange")
					})
				}
			}
		});
		var j = h.getComponent("MenuButton");
		var k = h.extend(j, {
			constructor: function (p, n, q, m) {
				this.playlines = n.playlines;
				this.label = m;
				this.label.innerHTML = n.initialySelectedLabel;
				j.call(this, p, n, q);
				this.controlText("Playline");
				if (q.dynamicLabel) {
					this.el().appendChild(m)
				} else {
					var o = document.createElement("span");
					h.addClass(o, "vjs-resolution-button-staticlabel");
					this.el().appendChild(o)
				}
			},
			createItems: function () {
				var o = [];
				var q = this.playlines || [];
				var p = function (r) {
					o.map(function (s) {
						s.selected(s === r);
						s.removeClass("vjs-selected")
					})
				};
				for (var n = 0; n < q.length; n++) {
					var m = q[n].label;
					o.push(new e(this.player_, {
						label: m,
						src: q[n],
						initialySelected: m === this.options_.initialySelectedLabel,
						customSourcePicker: this.options_.customSourcePicker
					}, p, this.label));
					a[m] = o[o.length - 1]
				}
				return o
			}
		});
		b = function (o) {
			var q = h.mergeOptions(f, o),
				p = this,
				n = document.createElement("span"),
				r = p.options_.playlines;
			h.dom.addClass(n, "vjs-resolution-button-label");
			var m = new k(p, {
				playlines: r,
				initialySelectedLabel: r[0].label,
				initialySelectedUrl: r[0].url,
				customSourcePicker: q.customSourcePicker
			}, q, n);
			h.dom.addClass(m.el(), "vjs-resolution-button");
			h.dom.addClass(m.el(), "vjs-playline-button");
			m.show();
			p.selectCDN = function (s) {
				m.items[s].onClick(q.customSourcePicker);
				p.play()
			};
			if (r.length > 0) {
				g = r[0]
			}
			p.currentPlayline = function () {
				return g
			};
			p.ready(function () {
				p.controlBar.videoJsPlayLine = p.controlBar.el_.insertBefore(m.el_, p.controlBar.getChild("fullscreenToggle").el_);
				p.controlBar.videoJsPlayLine.dispose = function () {
					this.parentNode.removeChild(this)
				}
			})
		};
		h.registerPlugin("videoJsPlayLine", b)
	})(window, videojs)
})();
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
			f.preventDefault()
		});
		Ext.fly(a.videojs).on("keydown", function (f) {
			if (f.keyCode == 32 || f.keyCode == 37 || f.keyCode == 39) {
				f.preventDefault()
			}
		})
	},
	params2VideoOpt: function (params) {
		var sources = [];
		if (!params.rootPath) {
			params.rootPath = ""
		}
		if (params.http) {
			sources.push({
				src: params.http,
				type: "audio/mp3"
			})
		}
		var logFunc = function (player, url, callback) {
			var me = this;
			if (!me.logCount) {
				me.logCount = 0
			}
			videojs.xhr({
				uri: url,
				headers: {
					"Content-Type": "application/json"
				}
			}, function (err, resp) {
				me.logCount++;
				if (resp.statusCode == 200) {
					me.logCount = 0;
					if (resp.body.indexOf("isPassed") < 0) {
						if (window.parent) {
							window.parent.location.reload()
						}
						return
					}
					eval("var d=" + resp.body);
					if (d.isPassed) {
						callback()
					}
					return
				}
				if (me.logCount >= 4) {
					me.logCount = 0;
					player.pause();
					if (resp.statusCode != 0) {
						alert("服务繁忙，不能保证您能否正常完成任务，请您稍后继续...(e: " + resp.statusCode + ")")
					} else {
						alert("您的网络不稳定，请您稍后继续...")
					}
				}
			})
		};
		var sendLog_ = function (player, isdrag, currentTimeSec, callback) {
			if (!params.reportUrl) {
				return
			}
			var format = "[{0}][{1}][{2}][{3}][{4}][{5}][{6}][{7}]",
				clipTime = (params.startTime || "0") + "_" + (params.endTime || params.duration);
			var a = 0,
				b;
			currentTimeSec.toString().indexOf("-") != -1 ? (b = currentTimeSec.split("-"),
				b.length == 2 && (a = parseInt(b[1]) * 1000)) : a = currentTimeSec * 1000;
			if (a == params.duration * 1000 && isdrag == 2) {
				return
			}
			var enc = Ext.String.format(format, params.clazzId, params.userid, params.jobid ? params.jobid : "", params.objectId, a, "d_yHJ!$pdA~5", params.duration * 1000, clipTime);
			var rurl = [params.reportUrl, "/", params.dtoken, "?clazzId=", params.clazzId, "&playingTime=", currentTimeSec, "&duration=", params.duration, "&clipTime=", clipTime, "&objectId=", params.objectId, "&otherInfo=", params.otherInfo, "&jobid=", params.jobid, "&userid=", params.userid, "&isdrag=", isdrag, "&view=pc", "&enc=", md5(enc), "&rt=", params.rt, "&dtype=Audio", "&_t=", new Date().getTime()].join("");
			logFunc(player, rurl, callback)
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
					enableSwitchWindow: 1
				},
				seekBarControl: {
					headOffset: params.headOffset,
					enableFastForward: params.enableFastForward,
					isSendLog: true,
					reportTimeInterval: params.reportTimeInterval,
					sendLog: function (player, evt, sec) {
						if (this.isSendLog !== true) {
							return
						}
						var isdrag = 0;
						switch (evt) {
							case "play":
								isdrag = 3;
								break;
							case "pause":
								isdrag = 2;
								break;
							case "ended":
								isdrag = 4;
								break
						}
						sendLog_(player, isdrag, sec, function () {
							window.proxy_completed && window.proxy_completed()
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
	var b = videojs.getPlugin("plugin");
	var a = videojs.extend(b, {
		constructor: function (e, c) {
			b.call(this, e, c);
			Ext.create("ans.videojs.AudioNote", {
				renderTo: e.el_,
				html: c.title
			})
		}
	});
	videojs.registerPlugin("audioNote", a)
})();
