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
			var f = c.playbackRate();
			f > a && (c.pause(),
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
		}];
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
					"src": file,
					"type": "video/mp4",
					"res": src.res
				}
			}
			return r.ispublic ? useM3u8 ? {
				"src": m3u8(params.objectId, src.resolution, r.url),
				"type": "application/x-mpegURL",
				"res": src.res
			} : {
				"src": r.url + file,
				"type": "video/mp4",
				"res": src.res
			} : useM3u8 ? {
				"src": m3u8(params.objectId, src.resolution, r.url + sdomain),
				"type": "application/x-mpegURL",
				"res": src.res
			} : {
				"src": r.url + sdomain + file,
				"type": "video/mp4",
				"res": src.res
			};
		}
		var sources = [],
			defaultRes = Ext.getCookie("resolution", 0x168);
		!params.rootPath && (params.rootPath = "");
		params.http && sources.push({
			"src": params.http,
			"type": "video/mp4",
			"label": "标清",
			"resolution": "sd",
			"res": 0x168
		});
		params["httphd"] && sources.push({
			"src": params["httphd"],
			"type": "video/mp4",
			"label": "高清",
			"resolution": "hd",
			"res": 0x2d0
		});
		params["httpshd"] && sources.push({
			"src": params["httpshd"],
			"type": "video/mp4",
			"label": "超高清",
			"resolution": "shd",
			"res": 0x438
		});
		params["httpmd"] && sources.push({
			"src": params["httpmd"],
			"type": "video/mp4",
			"label": "极速",
			"resolution": "md",
			"res": 0xf0
		});
		if (sources.length == 1) {
			var cdnItem = sources[0];
			cdnItem.label = "高清";
		}
		var findDefaultRes = false;
		for (var i = 0; i < sources.length; i++) {
			if (sources[i].res == defaultRes) {
				findDefaultRes = true;
				break;
			}
		}
		!findDefaultRes && (defaultRes = 0x168);
		var disableLog = !Ext.isChaoxing && (Ext.isIos || Ext.isAndroid),
			logFunc = function (player, url, callback) {
				try {
					if (typeof top.hasJobLimit != "undefined" && top.hasJobLimit === true && isUnFinishJob())
						return;
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
					"uri": url,
					"headers": {
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
									top.hasJobLimit = true);
							} catch (e) {
								console.log(e);
							}
							callback()
						}
						return;
					}
					me.logCount >= 4 && (me.logCount = 0,
						player.pause(),
						resp.statusCode != 0 ? alert("服务繁忙，不能保证您能否正常完成任务，请您稍后继续...(e:" + resp.statusCode + ")") : alert("您的网络不稳定，请您稍后继续..."));
				});
			}, sendLog_ = function (player, isdrag, currentTimeSec, callback) {
				if (!params.reportUrl)
					return;
				if (params.isFiled == 1 || params.state == 1)
					return;
				var format = "[{0}][{1}][{2}][{3}][{4}][{5}][{6}][{7}]",
					clipTime = (params.startTime || "0") + "_" + (params.endTime || params.duration),
					playTime = 0,
					timeArr;
				currentTimeSec.toString().indexOf("-") != -1 ? (timeArr = currentTimeSec.split("-"),
					timeArr.length == 2 && (playTime = parseInt(timeArr1) * 0x3e8)) : playTime = currentTimeSec * 0x3e8;
				if (playTime == params.duration * 0x3e8 && isdrag == 2)
					return;
				var enc = Ext.String.format(format, params.clazzId, params.userid, params.jobid || "", params.objectId, playTime, "d_yHJ!$pdA~5", params.duration * 0x3e8, clipTime),
					rurl = [params.reportUrl, "/", params.dtoken, "?clazzId=", params.clazzId, "&playingTime=", currentTimeSec, "&duration=", params.duration, "&clipTime=", clipTime, "&objectId=", params.objectId, "&otherInfo=", params.otherInfo, "&jobid=", params.jobid, "&userid=", params.userid, "&isdrag=", isdrag, "&view=pc", "&enc=", md5(enc), "&rt=", params.rt, "&dtype=Video", "&_t=", new Date().getTime()].join("");
				logFunc(player, rurl, callback);
			};
		return {
			"language": "zh-CN",
			"poster": params.screenshot,
			"controls": true,
			"preload": "none",
			"sources": sources,
			"playlines": cdn,
			"playbackRates": params.doublespeed != 0 ? [1, 1.25, 1.5, 2] : false,
			"textTrackDisplay": true,
			"controlBar": {
				"volumePanel": {
					"inline": false
				},
				"children": ["playToggle", "playbackRateMenuButton", "currentTimeDisplay", "timeDivider", "durationDisplay", "progressControl", "volumePanel", "subsCapsButton", "fullscreenToggle", "videoJsPlayLine", "textTrackButton"]
			},
			"plugins": {
				"videoJsResolutionSwitcher": {
					"default": defaultRes,
					"dynamicLabel": true,
					"customSourcePicker": function (player, sources, label) {
						var r = player["currentPlayline"]();
						return player.src(sources.map(function (src) {
							return makeSource(src, r);
						})),
							player;
					}
				},
				"videoJsPlayLine": {
					"dynamicLabel": true,
					"customSourcePicker": function (player, r, label) {
						var src = player.currentResolution().sources[0];
						return player.src(makeSource(src, r)),
							player;
					}
				},
				"studyControl": {
					"enableSwitchWindow": params["enableSwitchWindow"]
				},
				"seekBarControl": {
					"headOffset": params.headOffset,
					"enableFastForward": params["enableFastForward"],
					"isSendLog": !!parent["AttachmentSetting"] && params["control"],
					"reportTimeInterval": params["reportTimeInterval"],
					"isShowDanmu": params["danmaku"],
					"chapterCapture": params["chapterCapture"] || 0,
					"captureInterval": params["captureInterval"] || 0x258,
					"chapterCollectionType": params.chapterCollectionType || 0,
					"startCapture": params["startCapture"],
					"endCapture": params["endCapture"],
					"playAginCapture": params["playAginCapture"],
					"playingCapture": params["playingCapture"],
					"playingLoopCapture": params["playingLoopCapture"],
					"duration": params.duration,
					"isSupportFace": params["isSupportFace"] || false,
					"isShowFaceCollection": params["isShowFaceCollection"],
					"attachmentId": params["aId"],
					"sendLog": function (player, evt, sec, tmp_AA) {
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
								break;
						}
						var tmp_BB = this;
						sendLog_(player, isdrag, sec, function () {
							try {
								isdrag === 4 && typeof tmp_AA != "undefined" && (tmp_AA.sendDataLog("ended"),
									tmp_AA.playNextVideo(tmp_BB.attachmentId));
							} catch (e) {
								console.log(e)
							}
							window["proxy_completed"] && window["proxy_completed"]();
						});
					}
				},
				"timelineObjects": {
					"url": params.rootPath + "/richvideo/initdatawithviewer?mid=" + params.mid + "&cpi=" + params.cpi + "&classid=" + params.clazzId,
					"quizErrorReportUrl": params.rootPath + "/question/addquestionerror?classid=" + params.clazzId + "&cpi=" + params.cpi,
					"validationUrl2": params.rootPath + "/question/quiz-validation?classid=" + params.clazzId + "&cpi=" + params.cpi + "&objectid=" + params.objectId,
					"quizRightCountUrl": params.rootPath + "/question/quiz-rightcount?classid=" + params.clazzId + "&cpi=" + params.cpi
				},
				"subtitle": {
					"translate": params["chapterVideoTranslate"],
					"subtitleUrl": params.rootPath + "/richvideo/allsubtitle?mid=" + params.mid + "&objectid=" + params.objectId + "&courseid=" + params.courseid,
					"subtitle": params.rootPath + "/ananas/video-editor/sub?objectid=" + params["subobjectid"]
				},
				"marker": {
					"url": !params["isNotMark"] ? params.rootPath + "/ananas/getpoints?courseid=" + params.courseid + "&mid=" + params.mid : "",
					"ff": params["enableFastForward"],
					"videoTopicCloud": params.videoTopicCloud
				}
			}
		};
	}
});
(Object.defineProperty(ans.VideoJs.prototype, "params2VideoOpt", {
	"configurable": false,
	"writable": false
}),
	Object["freeze"](ans.VideoJs.prototype.params2VideoOpt));
(function () {
	var b = videojs.getPlugin("plugin"),
		a = videojs.extend(b, {
			"constructor": function (f, c) {
				b.call(this, f, c);
				var g = this,
					j = c["mouseElTarget"],
					i = 1;
				c["enableSwitchWindow"] !== 1 && (i = 0);
				if (!j)
					try {
						j = window["top"] ? window["top"] : window["document"];
					} catch (h) {
						j = window.parent ? window.parent : window["document"];
					}
				Ext.fly(j).on("mouseout", function (k) {
					k = k ? k : window["event"];
					var l = k["relatedTarget"] || k["toElement"];
					!l && (i != 1 && f.pause());
				}),
					g["singleton"](f);
			},
			"singleton": function (c) {
				var f = this, e = parseInt(Math.random() * 0x98967f);
				c.on("play", function () {
					Ext.setCookie("videojs_id", e);
				}),
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
			"constructor": function (e, c) {
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
					f.on("slideractive", function () {
						e.trigger("seekstart"),
							e.ignorePause = true,
							e.ignorePlay = true,
							e.ignoreSeek = false;
					}),
					f.on("sliderinactive", function () {
						e.trigger("seekend"),
							e.ignoreSeek = false;
					}),
					f.maxPercent = 0,
					e.on("timeupdate", function () {
						f.maxPercent = Math.max(f.getPercent(), f.maxPercent);
					});
			},
			"getCurrentTime_": function () {
				return this.player_.currentTime();
			},
			"getMaxPercent": function () {
				return this.maxPercent;
			},
			"isBackward": function (c) {
				return this.maxPercent > this.calculateDistance(c);
			},
			"handleMouseDown": function (c) {
				if (this._onlyBackward) {
					if (!this.isBackward(c))
						return;
				}
				if (this._disableSeek === true)
					return;
				a.prototype.handleMouseDown.call(this, c);
			},
			"handleMouseMove": function (c) {
				if (this._disableSeek === true)
					return;
				if (this._onlyBackward) {
					if (!this.isBackward(c))
						return;
				}
				a.prototype.handleMouseMove.call(this, c);
			},
			"handleMouseUp": function (c) {
				if (this._disableSeek === true)
					return;
				if (this._onlyBackward) {
					if (!this.isBackward(c))
						return;
				}
				a.prototype["handleMouseUp"].call(this, c);
			},
			"disableSeek": function (c) {
				var e = this;
				e._disableSeek = c !== false,
					e._disableSeek ? e.disable() : e.enable();
			},
			"onlyBackward": function (e) {
				var c = this;
				c._onlyBackward = e !== false;
			}
		});
	videojs.registerComponent("SeekBar", b);
}());
(function () {
	var a = videojs.getPlugin("plugin"),
		b = videojs.extend(a, {
			"constructor": function (g, f) {
				a.call(this, g, f);
				var h = this;
				h.firstClick = true,
					h["isSendLog_"] = !!f.isSendLog,
					h["isShowDanmu_"] = !!f["isShowDanmu"],
					h["damuLastGetTime"] = 0,
					h["timeCount"] = 0,
					h["isPlay"] = false,
					h["isEnd"] = false,
					(h.playTimer,
						h["chapterCapture"] = f["chapterCapture"] || 0),
					h["captureInterval"] = f["captureInterval"] * 0x3c || 0x258,
					h.chapterCollectionType = f.chapterCollectionType || 0,
					h["isSupportFace"] = f["isSupportFace"],
					h["isAlertTip"] = false,
					h["startCapture"] = f["startCapture"],
					h["endCapture"] = f["endCapture"],
					h["playAginCapture"] = f["playAginCapture"],
					h["playingCapture"] = f["playingCapture"],
					h["playingLoopCapture"] = f["playingLoopCapture"],
					h["isShowFaceCollection"] = f["isShowFaceCollection"],
					h.duration = f.duration,
					h["playingFace"] = false,
					h["loopCaptureInterval"] = Math["floor"](Math.random() * (parseInt(h.duration) - 0) + 1),
					h["isAginFace"] = false,
					h["againStartTime"] = 0,
					h.attachmentId = f.attachmentId,
					g.on("ready", function () {
						f["enableFastForward"] != 1 && g.disableSeek();
					});
				!f.sendLog && (f.sendLog = function () { }
				);
				f.headOffset && g.currentTime(f.headOffset);
				var k = 0,
					c = 0,
					e = f["reportTimeInterval"] || 0x3c,
					f = e * 0x3e8,
					i = function (l, m, o) {
						if (!h["isSendLog_"])
							return;
						var n = h["now_"]() - k;
						(n > f || m === true) && (typeof o != "undefined" ? (f.sendLog(g, l, o, h),
							h.playTimer && clearInterval(h.playTimer)) : f.sendLog(g, l, h.sec_(g), h),
							k = h["now_"]());
					};
				g.on("play", function () {
					try {
						top.configFullScreen && reSizeVideoWindow();
					} catch (e) {
						console.log(e);
					}
					try {
						if (typeof top.hasJobLimit != "undefined" && top.hasJobLimit === true && h.firstClick && isUnFinishJob()) {
							h.firstClick = false,
								g.pause(),
								checkJobCountLimit(g);
							return;
						}
					} catch (e) {
						console.log(e);
					}
					h["isAlertTip"] = false,
						h["chapterCapture"] == 0 || !h["isSupportFace"] ? (!g.ignorePlay ? (i("play", true),
							g.ignoreSeek = true) : (g.ignorePlay = false,
								g.ignoreSeek = false),
							h.sendDataLog("play"),
							h["receiveStudyLog"](),
							h["getDanmuList"]("play", g)) : h["chapterCapture"] == 1 && (h["timeCount"] == 0 ? h["isShowFaceCollection"] && !h["isPlay"] && (h["startCapture"] == 1 || typeof h["startCapture"] == "undefined") ? (h["faceCollection"]("play", g, h.chapterCollectionType),
								g.pause()) : (!g.ignorePlay ? (i("play", true),
									g.ignoreSeek = true) : (g.ignorePlay = false,
										g.ignoreSeek = false),
									h.sendDataLog("play"),
									h["receiveStudyLog"](),
									h["getDanmuList"]("play", g),
									(h["isShowFaceCollection"] && typeof h["playingCapture"] == "undefined" || h["playingCapture"] == 1 && h["playingLoopCapture"] == 0) && h["timer"](g),
									h["isShowFaceCollection"] && h["playAginCapture"] == 1 && g.ignorePlay && !h["isAginFace"] && (h["faceCollection"]("aginPlay", g, h.chapterCollectionType),
										g.pause())) : ((h["isShowFaceCollection"] && typeof h["playingCapture"] == "undefined" || h["playingCapture"] == 1 && h["playingLoopCapture"] == 1) && h["timer"](g),
											h["isShowFaceCollection"] && h["playAginCapture"] == 1 && !g.ignorePlay && !h["isAginFace"] && (h["faceCollection"]("aginPlay", g, h.chapterCollectionType),
												g.pause(),
												h["againStartTime"] = h.sec_(g))));
				}),
					g.on("seeked", function () {
						if (f["enableFastForward"] != 1 && !g["switchStatus"]) {
							var l = g.currentTime(),
								m = f.headOffset ? f.headOffset : 0;
							l != 0 && l > m && g.currentTime(m);
						}
						!g.ignoreSeek ? i("drag", true, c + "-" + h.sec_(g)) : g.ignoreSeek = false,
							c = h.sec_(g),
							g.ignorePlay = true,
							delete g["switchStatus"];
					}),
					g.on("pause", function () {
						!g.ignorePause ? (i("pause", true),
							g.ignorePlay = false,
							g.ignoreSeek = false) : g.ignorePause = false,
							h.sendDataLog("pause"),
							h["getDanmuList"]("pause", g);
					}),
					g.on("timeupdate", function () {
						h.sec_(g) - h["againStartTime"] > 2 && (h["isAginFace"] = false);
						h["isShowFaceCollection"] && h["chapterCapture"] == 1 && h["playingCapture"] == 1 && h["playingLoopCapture"] == 1 && h.sec_(g) == h["loopCaptureInterval"] && !h["playingFace"] && (h["faceCollection"]("playing", g, h.chapterCollectionType),
							g.pause());
						if (typeof parent["videoTrialDuration"] != "undefined" && parent["videoTrialDuration"] != "-1") {
							var l = parseInt(parent["videoTrialDuration"]) * 0x3c;
							if (l < h.sec_(g) && !h["isAlertTip"]) {
								g.pause(),
									alert("视频只允许试看" + parent["videoTrialDuration"] + "分钟"),
									h["isAlertTip"] = true;
								return;
							}
						}
						parseInt(g.currentTime()) >= this["damuLastGetTime"] && h["getDanmuList"]("timeupdate", g);
						h["danmuDisplay"](g);
						if (k == 0)
							return;
						h.sec_(g) - c <= 1 && !g.ignorePlay && (c = h.sec_(g)),
							i("playing");
					}),
					g.on("ended", function () {
						h.playTimer && clearInterval(h.playTimer),
							h["isShowFaceCollection"] && !h["isEnd"] && h["chapterCapture"] == 1 && h["endCapture"] == 1 && h["faceCollection"]("ended", g, h.chapterCollectionType),
							i("ended", true);
					});
			},
			"sec_": function (c) {
				return parseInt(c.currentTime());
			},
			"now_": function () {
				return new Date().getTime();
			},
			"isSendLog": function (c) {
				return c && (this["isSendLog_"] = !!c),
					this["isSendLog_"];
			},
			"sendDataLog": function (e) {
				var c = e == "pause" || e == "end" ? 2 : 1;
				typeof sendReadZTMediaLog != "undefined" && sendReadZTMediaLog(c);
			},
			"receiveStudyLog": function () {
				typeof receiveStudyLog != "undefined" && setTimeout(function () {
					receiveStudyLog();
				}, 0x32);
			},
			"getDanmuList": function (e, c) {
				if (!this["isShowDanmu_"])
					return;
				var f = this.sec_(c);
				if (e == "pause") {
					this["damuLastGetTime"] = 0,
						setTimeout(function () {
							getDanmuByTime(e, 0);
						}, 0xc8);
					return;
				}
				typeof getDanmuByTime != "undefined" && setTimeout(function () {
					getDanmuByTime(e, f);
				}, 0xc8);
				if (f < this["damuLastGetTime"])
					return;
				this["damuLastGetTime"] = f + 0x3b;
			},
			"danmuDisplay": function (c) {
				if (!this["isShowDanmu_"])
					return;
				var e = this.sec_(c);
				typeof danmuPlay != "undefined" && danmuPlay(e);
			},
			"timer": function (c) {
				var e = this;
				this.playTimer = setInterval(function () {
					e["timeCount"]++,
						e["timeCount"] >= e["captureInterval"] && (e["isPlay"] = false,
							c.pause(),
							e["faceCollection"]("pause", c, e.chapterCollectionType));
				}, 0x3e8);
			},
			"faceCollection": function (e, c, f) {
				e == "play" && this["timeCount"] == 0 ? typeof startFaceCollection != "undefined" && startFaceCollection(c, f, this) : e == "pause" ? (this.playTimer && clearInterval(this.playTimer),
					!this["isPlay"] && this["timeCount"] >= this["captureInterval"] && (typeof startFaceCollection != "undefined" && startFaceCollection(c, f, this),
						this["timeCount"] = 0)) : e == "ended" ? (this.playTimer && clearInterval(this.playTimer),
							typeof startFaceCollection != "undefined" && (startFaceCollection(c, f, this),
								this["isEnd"] = true),
							this["timeCount"] = 0) : e == "playing" ? typeof startFaceCollection != "undefined" && (startFaceCollection(c, f, this),
								this["playingFace"] = true) : e == "aginPlay" && (typeof startFaceCollection != "undefined" && (startFaceCollection(c, f, this),
									this["isAginFace"] = true));
			},
			"playNextVideo": function (c) {
				if (typeof chapterPlayNextVideo != "undefined") {
					if (typeof top.allowNextVideo != "undefined" && top.allowNextVideo === false) {
						top["showJobLimitTip"]();
						return;
					}
					chapterPlayNextVideo(c);
				}
			}
		});
	videojs.registerPlugin("seekBarControl", b);
}());
Ext.define("ans.videojs.TimelineObjectsBg", {
	"extend": "Ext.Component",
	"cls": "ans-timelineobjectsbg",
	"hidden": true
});
Ext.define("ans.videojs.VideoQuiz", {
	"extend": "Ext.Component",
	"xtype": "videoquiz",
	"cls": "ans-videoquiz",
	"renderTpl": ["<div class=\x22tkTopic\x22>", "<tpl if=\x22dtype==\x27InteractiveQuiz\x27\x22>", "<div class=\x22tkTopic_numbar fr\x22>共 {interactiveQuestionCount} 题<span id=\x22rightAnswerNum\x22>，已答对 <i id=\x22rightNum\x22></i> 题</span></div>", "</tpl>", "<div class=\x22tkTopic_title\x22>[{questionType}]</div>", "<div class=\x22tkTopic_con tkScroll\x22>", "<div class=\x22tkItem\x22>", "<div class=\x22tkItem_title\x22>{description}</div>", "<ul class=\x22tkItem_ul\x22>", "<tpl for=\x22options\x22>", "<li class=\x22ans-videoquiz-opt\x22><label>", "<span class=\x22tkRadio\x22><input type=\x22{[parent.questionType==\x22多选题\x22?\x22checkbox\x22:\x22radio\x22]}\x22 <tpl if=\x22parent.dtype==\x27InteractiveQuiz\x27\x22>{[this.getChecked(parent.answerContent, values.name, parent.dtype)]}</tpl> name=\x22ans-videoquiz-opt\x22 value=\x22{isRight}\x22/><i></i></span>", "{name}、{description}", "</label></li>", "</tpl>", "</ul>", "</div>", "</div>", "<div class=\x22tkTopic_oper\x22>", "<a class=\x22ans-videoquiz-submit bntLinear fr\x22 id=\x22videoquiz-submit\x22>提交</a>", "<a class=\x22ans-videoquiz-continue bntLinear fr\x22 id=\x22videoquiz-continue\x22><tpl if=\x22dtype==\x27InteractiveQuiz\x27\x22>继续学习<tpl else>继续</tpl></a>", "<tpl if=\x22dtype==\x27InteractiveQuiz\x27\x22>", "<a class=\x22bntWhiteBorder ans-videoquiz-back fr\x22 id=\x22knowledgeBack\x22>知识点回看</a>", "</tpl>", "<tpl if=\x22dtype==\x27InteractiveQuiz\x27\x22><span id=\x22spanHas\x22></span><tpl else><span class=\x22spanHas fr\x22 id=\x22spanHas\x22>回答正确</span></tpl>", "<span class=\x22spanNot fr\x22 id=\x22spanNot\x22><tpl if=\x22dtype==\x27InteractiveQuiz\x27\x22>真遗憾，再接再厉！<tpl else>回答错误</tpl></span>", "<span class=\x22spanNotBack fr\x22 id=\x22spanNotBack\x22><tpl if=\x22dtype==\x27InteractiveQuiz\x27\x22>真遗憾，再接再厉！<tpl else>回答错误，</tpl>回看 {errorBackTime} 分钟</span>", "<tpl if=\x22dtype==\x27InteractiveQuiz\x27\x22>", "<span class=\x22spanNotBack fr\x22 id=\x22spanNotBackPoint\x22>真遗憾，再接再厉！</span>", "<a class=\x22spanHref fl\x22 href=\x22javascript:\x22 id=\x22viewAnalysis\x22>查看解析</a>", "</div>", "<div class=\x22tkParsing\x22 id=\x22tkParsing\x22>", "<a class=\x22tkParsing_dele\x22 href=\x22javascript:\x22></a>", "<div class=\x22tkParsing_screll tkParsing_con\x22 id=\x22tkParsing_con\x22></div>", "</tpl>", "</div>", "</div>", {
		"getChecked": function (a, b, c) {
			return a.indexOf(b) != -1 && c == "InteractiveQuiz" ? "checked=\x22checked\x22" : "";
		}
	}],
	"renderSelectors": {
		"submitEl": "a.ans-videoquiz-submit",
		"continueEl": "a.ans-videoquiz-continue",
		"scrollEl": "div.tkScroll",
		"backEl": "a.ans-videoquiz-back",
		"tkParseScrollEl": "div.tkParsing_screll",
		"viewAnalysisEl": "a.spanHref",
		"delAnalysisEl": "a.tkParsing_dele"
	},
	"afterRender": function () {
		var b = this,
			tmp_aaa = b.renderData,
			tmp_bbb = b["quizRightCountUrl"];
		typeof tmp_bbb != "undefined" && Ext.Ajax.request({
			"url": tmp_bbb,
			"params": {
				"eventid": tmp_aaa["resourceId"],
				"memberinfo": tmp_aaa.memberinfo
			},
			"method": "get",
			"success": function (tmp_ccc) {
				var tmp_ddd = Ext.decode(tmp_ccc.responseText);
				tmp_ddd.status && (Ext.get("rightNum")["setHTML"](tmp_ddd["rightAnswerCount"]),
					Ext.get("rightAnswerNum").setStyle("display", "inline-block"));
			}
		});
		b.callParent(arguments);
		var c = b.scrollEl, a = $(c.dom).niceScroll({
			"cursorborder": "",
			"cursorwidth": 6,
			"cursorcolor": "#A5A5A5",
			"boxzoom": false,
			"autohidemode": true
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
	"checkResult": function () {
		var f = this,
			i = Ext["query"]("input", f.el.dom),
			e = true,
			g = f.renderData,
			b = g["options"],
			c = [],
			h = f["quizErrorReportUrl"],
			a = f["validationUrl2"],
			tmp_AAAA = g["dtype"];
		Ext.each(i, function (k, j) {
			(k.value == "true" && !k.checked || k.value == "false" && k.checked) && (e = false),
				k.checked && c.push(b[j].name);
		});
		!e ? g.errorBackTime && g.errorBackTime > 0 ? (Ext.get("spanNotBack").setStyle("display", "block"),
			Ext.get("videoquiz-submit").setStyle("display", "none"),
			tmp_AAAA == "InteractiveQuiz" ? Ext.get("knowledgeBack").setStyle("display", "block") : Ext.get("videoquiz-continue").setStyle("display", "block")) : tmp_AAAA == "InteractiveQuiz" && g.errorBack == 1 && g["eBstartPoint"] != "" ? (Ext.get("spanNotBackPoint").setStyle("display", "block"),
				Ext.get("knowledgeBack").setStyle("display", "block")) : Ext.get("spanNot").setStyle("display", "block") : (Ext.get("spanHas").setStyle("display", "block"),
					tmp_AAAA == "InteractiveQuiz" && (Ext.get("videoquiz-continue").setStyle("display", "block"),
						Ext.get("knowledgeBack").setStyle("display", "none"),
						Ext.get("videoquiz-submit").setStyle("display", "none"),
						Ext.get("spanNot").setStyle("display", "none"),
						Ext.get("spanNotBack").setStyle("display", "none"),
						Ext.get("spanNotBackPoint").setStyle("display", "none")));
		if (typeof a != "undefined") {
			var tmp_BBBB = c.join(",");
			Ext.Ajax.request({
				"url": a,
				"params": {
					"eventid": g["resourceId"],
					"isRight": e,
					"memberinfo": g.memberinfo,
					"answerContent": tmp_BBBB
				},
				"method": "get",
				"success": function (tmp_CCC) {
					g["answerContent"] = tmp_BBBB;
					var tmp_DDDD = Ext.decode(tmp_CCC.responseText);
					if (tmp_DDDD.status) {
						tmp_AAAA == "InteractiveQuiz" && (Ext.get("rightNum")["setHTML"](tmp_DDDD["rightAnswerCount"]),
							Ext.get("rightAnswerNum").setStyle("display", "inline-block"));
						if (tmp_DDDD["isRight"] && tmp_AAAA == "InteractiveQuiz") {
							typeof tmp_DDDD["showTip"] != "undefined" && tmp_DDDD["showTip"] ? Ext.get("spanHas")["setHTML"]("<span class=\x22spanHas fr\x22 style=\x27display:block\x27><span id=\x22InteractiveQuizTip\x22>恭喜你，答对了！你的答题水准超过了" + tmp_DDDD["percent"] + "%的同学</span></span>") : Ext.get("spanHas")["setHTML"]("<span class=\x22spanHas fr\x22 style=\x27display:block\x27><span id=\x22InteractiveQuizTip\x22>恭喜你，答对了！</span></span>");
							if (tmp_DDDD["testAnalysis"]) {
								Ext.get("tkParsing_con")["setHTML"]("解析：" + tmp_DDDD["testAnalysis"]),
									Ext.get("tkParsing").setStyle("display", "inline-block"),
									Ext.get("viewAnalysis").setStyle("display", "block");
								var tmp_EEEE = f["tkParseScrollEl"],
									tmp_FFFF = $(tmp_EEEE.dom).niceScroll({
										"cursorborder": "",
										"cursorwidth": 6,
										"cursorcolor": "#A5A5A5",
										"boxzoom": false,
										"autohidemode": true
									});
								f["tkParseScroll"] = tmp_FFFF;
							}
						}
					}
				}
			}),
				!e && f.onerror && tmp_AAAA != "InteractiveQuiz" && f.onerror();
		} else
			!e && (Ext.Ajax.request({
				"url": h,
				"params": {
					"eventid": g["resourceId"],
					"memberinfo": g.memberinfo,
					"answerContent": c.join(",")
				},
				"method": "get"
			}),
				f.onerror && tmp_AAAA != "InteractiveQuiz" && f.onerror());
		return !e && g["errorContinue"] == 1 && (e = true,
			Ext.get("videoquiz-submit").setStyle("display", "none"),
			Ext.get("videoquiz-continue").setStyle("display", "block")),
			e;
	},
	"continueFun": function () {
		var a = this;
		a.fireEvent("continue");
	}
});
Ext.define("ans.videojs.VideoImg", {
	"extend": "Ext.Component",
	"xtype": "videoimg",
	"renderTpl": ["<div class=\x22sp_video_pic\x22>", "<img src=\x22{src}\x22 class=\x22sp_video_img\x22 />", "<a class=\x22sp_video_pic_dele\x22 href=\x22javascript:;\x22></a>", "</div>"],
	"renderSelectors": {
		"closeEl": "a.sp_video_pic_dele"
	},
	"afterRender": function () {
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
		});
	}
});
Ext.define("ans.videojs.VideoAnnotation", {
	"extend": "Ext.Component",
	"xtype": "videoannotation",
	"cls": "ans-videoannotation",
	"renderTpl": ["<div class=\x22vidNota\x22>", "<div class=\x22vidNota_title\x22><h2 class=\x22vidNota_h2\x22>[批注]</h2><a class=\x22vidNota_close\x22 href=\x22javascript:;\x22></a></div>", "<div class=\x22vidNota_con\x22 id=\x22pizhuScroll\x22 tabindex=\x221\x22 style=\x22overflow: hidden; outline: none;\x22>", "<p>{description}</p>", "</div>", "</div>"],
	"renderSelectors": {
		"closeEl": "a.vidNota_close",
		"contentEl": "div.vidNota_con"
	},
	"afterRender": function () {
		var c = this,
			b = c["contentEl"];
		c.callParent(arguments),
			c.closeEl.on("click", function () {
				c.fireEvent("continue");
			});
		var a = $(b.dom).niceScroll({
			"cursorborder": "",
			"cursorwidth": 6,
			"cursorcolor": "#e0e0e0",
			"boxzoom": false,
			"autohidemode": true
		});
		c.scroller = a;
	}
});
Ext.define("ans.videojs.VideoPpt", {
	"extend": "Ext.Component",
	"xtype": "videoppt",
	"cls": "ans-videoppt",
	"width": "100%",
	"model": false,
	"renderTpl": ["<div class=\x22sp_video_ppt_pic\x22 id=\x22sp_video_ppt_pic\x22>", "<img src=\x22{src}\x22 class=\x22sp_video_img\x22 style=\x22width: 100%;\x22/>", "<a class=\x22sp_size_big\x22 id=\x22sp_size_big\x22 href=\x22javascript:;\x22></a>", "<a class=\x22sp_size_small\x22 href=\x22javascript:;\x22 style=\x22display:none;\x22 id=\x22sp_size_small\x22></a>", "</div>"],
	"renderSelectors": {
		"pptPicEl": "div.sp_video_ppt_pic",
		"sizeBigEl": "a.sp_size_big",
		"sizeSmallEl": "a.sp_size_small"
	},
	"afterRender": function () {
		var a = this;
		a.callParent(arguments),
			a.pptPicEl.on("click", function (g) {
				g.stopPropagation(),
					a.pptPicEl["toggleCls"]("sp_ppt_pic_fullScreen");
				if (a.pptPicEl["hasCls"]("sp_ppt_pic_fullScreen")) {
					Ext.get("sp_size_big").setStyle("display", "none"),
						Ext.get("sp_size_small").setStyle("display", "block");
					var b = Ext.get("video").getStyle("height"),
						f = Ext.get("sp_video_ppt_pic").getStyle("height"),
						c = (parseInt(b) - 0x3c - parseInt(f)) / 2;
					Ext.get("sp_video_ppt_pic").setStyle("top", c + "px"),
						Ext.get("sp_video_ppt_pic").setStyle("left", "0");
				} else
					Ext.get("sp_size_big").setStyle("display", "block"),
						Ext.get("sp_size_small").setStyle("display", "none"),
						Ext.get("sp_video_ppt_pic").setStyle("top", "0px"),
						Ext.get("sp_video_ppt_pic").setStyle("left", "0px");
			}),
			a["sizeBigEl"].on("click", function (g) {
				g.stopPropagation();
				a.pptPicEl["toggleCls"]("sp_ppt_pic_fullScreen"),
					Ext.get("sp_size_big").setStyle("display", "none"),
					Ext.get("sp_size_small").setStyle("display", "block");
				var b = Ext.get("video").getStyle("height"),
					f = Ext.get("sp_video_ppt_pic").getStyle("height"),
					c = (parseInt(b) - 0x3c - parseInt(f)) / 2;
				Ext.get("sp_video_ppt_pic").setStyle("top", c + "px"),
					Ext.get("sp_video_ppt_pic").setStyle("left", "0");
			}),
			a["sizeSmallEl"].on("click", function (b) {
				b.stopPropagation();
				a.pptPicEl["toggleCls"]("sp_ppt_pic_fullScreen"),
					Ext.get("sp_size_big").setStyle("display", "block"),
					Ext.get("sp_size_small").setStyle("display", "none"),
					Ext.get("sp_video_ppt_pic").setStyle("top", "0px"),
					Ext.get("sp_video_ppt_pic").setStyle("left", "0px");
			});
	}
});
Ext.define("ans.videojs.TimelineObjects", {
	"extend": "Ext.container.Container",
	"cls": "ans-timelineobjects",
	"autoScroll": true,
	"hidden": true,
	"hideMode": "visibility",
	"constructor": function (a) {
		var b = this;
		b.callParent(arguments);
		b["bg"] = Ext["create"]("ans.videojs.TimelineObjectsBg", {
			"renderTo": a["renderTo"]
		});
		b.objects = a.objects && a.objects.sort ? b["sort_"](a.objects) : [];
		b["current"] = 0;
	},
	"showObject": function (m, b, e) {
		var j = this,
			h = j["getBox"](),
			c = j["items"]["getAt"](0),
			l,
			i = function () {
				l["destroy"](),
					j["hide"](),
					m["play"]();
			};
		c != null && c["destroy"]();
		if (b == "IMG") {
			var f = {
				"src": e.url.replace(/origin/, h.width + "_" + h["height"])
			};
			l = j["add"]({
				"xtype": "videoimg",
				"renderData": f
			});
		}
		if (b == "QUIZ") {
			var k = function () { };
			if (e.errorBackTime && e.errorBackTime > 0) {
				var n = e.errorBackTime * 0x3c;
				k = function () {
					var o = Math.max(m.currentTime() - n, 0);
					m["switchStatus"] = true,
						m.currentTime(o);
				};
			}
			l = j["add"]({
				"xtype": "videoquiz",
				"renderData": e,
				"quizErrorReportUrl": j["quizErrorReportUrl"],
				"validationUrl2": j["validationUrl2"],
				"onerror": k
			});
		}
		if (b == "InteractiveQuiz") {
			var k = function () { };
			if (e.errorBackTime && e.errorBackTime > 0) {
				var n = e.errorBackTime * 0x3c;
				k = function () {
					var o = Math.max(m.currentTime() - n, 0);
					m["switchStatus"] = true,
						m.currentTime(o);
				};
			}
			if (e.errorBack == 1 && e["eBstartPoint"] != "") {
				var n = 0,
					tmp_0009 = e["eBstartPoint"].split(":"),
					tmp_0010 = tmp_0009.length;
				tmp_0010 > 0 && (tmp_0010 == 1 ? n = parseInt(tmp_0009[0]) * 0x3c : tmp_0010 == 2 && (n = parseInt(tmp_0009[0]) * 0x3c + parseInt(tmp_00091))),
					k = function () {
						m["switchStatus"] = true,
							m.currentTime(n);
					};
			}
			e["dtype"] = "InteractiveQuiz",
				l = j["add"]({
					"xtype": "videoquiz",
					"renderData": e,
					"quizErrorReportUrl": j["quizErrorReportUrl"],
					"validationUrl2": j["validationUrl2"],
					"quizRightCountUrl": j["quizRightCountUrl"],
					"onerror": k
				});
		}
		if (b == "PPT") {
			if (e["fp"] == 0)
				return;
			var a = e.url;
			e["thumb"] ? a = e["thumb"] + e["pageNo"] + ".png" : a = a.replace(/swfv2\/.*$/, "thumb/" + e["fp"] + ".png");
			var f = {
				"src": a
			};
			l = j["add"]({
				"xtype": "videoppt",
				"renderData": f
			});
		}
		b == "SyncAnnotationEvent" && (l = j["add"]({
			"xtype": "videoannotation",
			"renderData": e
		}));
		if (!l)
			return;
		l.on("continue", function () {
			i();
		});
		var g = !(l["model"] === false);
		j["showModel"](g),
			g && m.pause();
	},
	"showModel": function (a) {
		try {
			top.configFullScreen && mediumSizeWindow()
		} catch (ERROR) {
			console.log(ERROR)
		}
		var c = this;
		c["show"](),
			a ? (c["removeCls"]("ans-timelineobjects-autosize"),
				c["setAutoScroll"](true),
				c["bg"]["show"]()) : (c["addCls"]("ans-timelineobjects-autosize"),
					c["setAutoScroll"](false));
	},
	"hide": function () {
		this.callParent(arguments),
			this["bg"]["hide"].apply(this["bg"], arguments);
	},
	"updateTime": function (a, e) {
		if (this["current"] >= this.objects.length || a["scrubbing"]())
			return;
		var c = this,
			f = c.objects[c["current"]],
			b = f["style"],
			g = f.datas[0];
		e >= g.startTime && (c["current"]++,
			setTimeout(function () {
				c["showObject"](a, b, g);
			}, 0x14));
	},
	"resetTime": function (b, e) {
		var c = this, a;
		for (a = 0; a < c.objects.length; a++) {
			var f = c.objects[a].datas[0].startTime;
			if (e <= f)
				break;
		}
		c["current"] = a;
	},
	"sort_": function (a) {
		return a && a.sort && a.sort(function (f, e) {
			var c = f.datas[0].startTime,
				b = e.datas[0].startTime;
			return c - b;
		});
	}
});
(function () {
	var Plugin = videojs.getPlugin("plugin"),
		TimelineObjects = videojs.extend(Plugin, {
			"constructor": function (player, options) {
				Plugin.call(this, player, options);
				if (!options.url)
					return;
				var me = this;
				player.eventPoints = [],
					Ext.Ajax.request({
						"url": options.url,
						"async": false,
						"success": function (resp) {
							if (resp.status != 0xc8)
								return;
							eval("var data=" + resp.responseText);
							if (data && data.length > 0) {
								var tmp_0011 = [];
								for (var i = 0; i < data.length; i++) {
									var j = data[i];
									if (j["style"] == "InteractiveQuiz") {
										var k = j.datas;
										if (k && k.length > 0)
											var l = {
												"time": k[0].startTime,
												"text": "互动测验"
											};
										tmp_0011.push(l);
									}
								}
								player.eventPoints = tmp_0011;
							}
							var timeline = Ext["create"]("ans.videojs.TimelineObjects", {
								"renderTo": player["el_"],
								"quizErrorReportUrl": options["quizErrorReportUrl"],
								"validationUrl2": options["validationUrl2"],
								"quizRightCountUrl": options["quizRightCountUrl"],
								"objects": data
							});
							player.on("play", function () {
								timeline["resetTime"](player, player.currentTime());
							}),
								player.on("seekend", function () {
									timeline["resetTime"](player, player.currentTime());
								}),
								player.on("timeupdate", function () {
									!player["paused"]() && timeline["updateTime"](player, player.currentTime());
								});
						}
					});
			}
		});
	videojs.registerPlugin("timelineObjects", TimelineObjects);
}());
(function () {
	var Plugin = videojs.getPlugin("plugin"),
		Marker = videojs.extend(Plugin, {
			"constructor": function (player, options) {
				Plugin.call(this, player, options);
				if (!options.url)
					return;
				var me = this;
				Ext.Ajax.request({
					"url": options.url,
					"async": false,
					"success": function (resp) {
						if (resp.status != 0xc8)
							return;
						eval("var data=" + resp.responseText);
						if (!data.status)
							return;
						var videoPlayer = videojs("video");
						if (videoPlayer && typeof videoPlayer.markers === "function") {
							var tmp_A = player.eventPoints;
							tmp_A.push.apply(tmp_A, data.list),
								videoPlayer.markers({
									"markerTip": {
										"display": true,
										"text": function (marker) {
											return marker.text;
										}
									},
									"markers": tmp_A,
									"onMarkerClick": function (marker) {
										if (options["ff"] != 1) {
											return false
										}
										var key = $(this).data("marker-key");
										player.currentTime(marker.time);
										return false
									}
								})
						}
						if (data.list && data.list.length > 0) {
							var tmp_B = [],
								tmp_C = {};
							for (var i = 0; i < data.list.length; i++) {
								var tmp_D = data.list[i],
									tmp_E = tmp_D.text;
								if (!tmp_C[tmp_E]) {
									var tmp_F = [];
									tmp_F.push(tmp_D),
										tmp_C[tmp_E] = tmp_F,
										tmp_B.push(tmp_E);
								} else {
									var tmp_G = tmp_C[tmp_E];
									tmp_G.push(tmp_D);
									tmp_C[tmp_E] = tmp_G;
								}
							}
							function tmp_F1(tmp_H) {
								var tmp_K = "<div class=\x22zsCloud_box\x22><h2 class=\x22zsCloud_seltime\x22>选择时间</h2><div class=\x22zsCloud_div\x22><div class=\x22zsCloud_div_list\x22>";
								for (var i = 0; i < tmp_H.length; i++) {
									var tmp_I = tmp_H[i],
										tmp_topic = Ext.fly(topicContent.elements[0]).select(".topicId" + tmp_I.topicid + ":not(.markertime)"),
										tmp_J = videojs.formatTime(tmp_I.time);
									tmp_topic && tmp_topic.elements[0] && tmp_topic.elements[0].parentElement.remove(),
										tmp_K += "<div class=\x22zsCloud_item topicId" + tmp_I.topicid + "\x22 data-marker-time=\x22" + tmp_I.time + "\x22 title=\x22" + tmp_J + "\x22 onclick=\x22markersPlayer(this)\x22>" + tmp_J + "</div>";
								}
								return tmp_K += "</div></div></div>",
									tmp_K;
							}
							Ext.select(".zsCloud").setStyle("display", "block");
							var topicContent = Ext.select(".zsCloud_ul");
							if (topicContent && topicContent.elements[0]) {
								var insertLocaltion;
								for (var i = 0; i < tmp_B.length; i++) {
									var tmp_L = tmp_B[i],
										tmp_M = tmp_C[tmp_L],
										markerHtml = "";
									if (tmp_M) {
										if (tmp_M.length == 1) {
											var marker = tmp_M[0],
												topic = Ext.fly(topicContent.elements[0]).select(".topicId" + marker.topicid + ":not(.markertime)"),
												title = videojs.formatTime(marker.time);
											topic && topic.elements[0] && topic.elements[0].parentElement.remove(),
												markerHtml = "<li><span class=\x27topicId" + marker.topicid + " markertime\x27 data-marker-time=\x27" + marker.time + "\x27 title=\x27" + title + "\x27 onclick=\x27markersPlayer(this)\x27>" + marker.text + "</span></li>";
										} else
											markerHtml = "<li class=\x22zsCloud_select\x22><span class=\x22zsCloud_span\x22>" + tmp_L + "</span>",
												tmp_M && tmp_M.length > 0 ? markerHtml += tmp_F1(tmp_M) : markerHtml += "</li>";
									}
									insertLocaltion ? insertLocaltion = Ext.DomHelper.insertHtml("afterEnd", insertLocaltion.elements[0], markerHtml) : insertLocaltion = Ext.DomHelper.insertHtml("afterBegin", topicContent.elements[0], markerHtml),
										insertLocaltion = Ext.fly(insertLocaltion).select("");
								}
							}
							options.videoTopicCloud && options.videoTopicCloud == 1 && (Ext.select(".zsCloud_down").setStyle("display", "block"),
								Ext.select(".zsCloud_body").setStyle("display", "block"));
						}
						var dataMap = new Map();
						var wordList = new Array();
						if (data.list && data.list.length > 0)
							for (var i = 0; i < data.list.length; i++) {
								var topicid = data.list[i].topicid,
									item = dataMap.get(topicid);
								!item && (item = {},
									item.text = data.list[i].text,
									item.time = data.list[i].time,
									item.topicid = data.list[i].topicid,
									item.weight = 0,
									item.html = {
										"data-marker-time": data.list[i].time,
										"onclick": "markersPlayer(this)"
									},
									dataMap.set(topicid, item),
									wordList.push(item)),
									item.weight += 1;
							}
						$(function () {
							wordList.length != 0 && $("#word_cloud")["jQCloud"](wordList);
							function tmp_F2(tmp_a) {
								$(tmp_a).niceScroll({
									"cursorborder": "",
									"cursorwidth": 8,
									"cursorcolor": "#DADFE6",
									"boxzoom": false,
									"autohidemode": true
								}),
									setInterval(function () {
										$(tmp_a)["getNiceScroll"]().resize();
									}, 0x12c);
							}
							$(".zsCloud_box").each(function (a) {
								$(this)["find"](".zsCloud_div")["attr"]("id", "zsCloud_div_" + a),
									tmp_F2("#zsCloud_div_" + a);
							});
						}),
							$(".zsCloud_down").click(function () {
								var con = $(".zsCloud_body");
								con["is"](":visible") ? (con["hide"](),
									$(this)["addClass"]("zsCloud_up"),
									$(this).text("展开")) : (con["show"](),
										$(this)["removeClass"]("zsCloud_up"),
										$(this).text("收起"));
							});
					}
				});
			}
		});
	videojs.registerPlugin("marker", Marker);
}());
(function () {
	var Plugin = videojs.getPlugin("plugin"),
		Subtitle = videojs.extend(Plugin, {
			"constructor": function (player, options) {
				Plugin.call(this, player, options);
				var me = this,
					subtitleUrl = options["subtitleUrl"],
					toVtt = function (srt) {
						var m = srt.match(/support\/(\w+).\w+/);
						if (m)
							return ServerHosts["PARENT_HOST"] + "/ananas/video-editor/sub?objectid=" + m1;
					},
					addSub = function (name, src, isdefault) {
						player["addRemoteTextTrack"]({
							"kind": "subtitles",
							"srclang": "cn",
							"label": name,
							"src": src,
							"default": isdefault
						}, true);
					};
				player.ready(function () {
					subtitleUrl && Ext.Ajax.request({
						"url": subtitleUrl,
						"success": function (resp) {
							if (resp.status != 0xc8)
								return;
							eval("var subs=" + resp.responseText);
							var index = 0,
								enIndex = 0;
							subs.length > 0 && Ext.each(subs, function (o) {
								options.translate == 1 && o.name == "English" ? (o.selected = true,
									enIndex = index) : o.selected = false,
									addSub(o.name, toVtt(o.url), o.selected),
									index++;
							}),
								options.translate == 1 && (Ext.select(".vjs-subs-caps-button .vjs-icon-placeholder")["setHTML"]("翻译"),
									Ext.select(".vjs-subs-caps-button .vjs-icon-placeholder")["addCls"]("vjs-hide-content")),
								setTimeout(function () {
									var tracks = player["textTracks"]();
									options.translate == 1 ? tracks && tracks[enIndex] ? tracks[enIndex]["mode"] = "showing" : tracks && tracks[0] && (tracks[0]["mode"] = "showing") : tracks && tracks[0] && (tracks[0]["mode"] = "showing");
								}, 0x1f4);
						}
					});
					var settings = player["textTrackSettings"];
					settings.setValues({
						"backgroundColor": "#000",
						"backgroundOpacity": "0",
						"edgeStyle": "uniform"
					}),
						settings["updateDisplay"]();
				});
			}
		});
	videojs.registerPlugin("subtitle", Subtitle);
}());
Ext.define("ans.videojs.ErrorDisplay", {
	"extend": "Ext.Component",
	"xtype": "vjserrdisplay",
	"cls": "ans-vjserrdisplay",
	"renderTpl": ["<div class=\x22ans-vjserrdisplay-title\x22>{errorMsg}</div>", "<ul class=\x22ans-vjserrdisplay-opts\x22>", "您可以尝试其他线路:", "<tpl for=\x22playlines\x22>", "<li class=\x22ans-vjserrdisplay-opt\x22><label>", "<input type=\x22radio\x22 name=\x22ans-vjserrdisplay-opt\x22 {[xindex-1 === parent.selectedIndex ? \x22checked disabled\x22:\x22\x22]}>", "{label}", "</label></li>", "</tpl>", "</ul>"],
	"renderSelectors": {
		"errorMsgEl": "div.ans-vjserrdisplay-title"
	},
	"afterRender": function () {
		var b = this;
		b.callParent(arguments);
		var a = Ext["query"]("input", b.el.dom);
		Ext.each(a, function (f, e) {
			Ext.fly(f).on("click", function () {
				b["onSelected"](e);
			});
		});
		try {
			typeof createVideoTask === "function" ? createVideoTask() : console.log("createVideoTask函数不存在！");
		} catch (c) { }
	},
	"setErrorMsg": function (a) {
		Ext.fly(this["errorMsgEl"])["setHTML"](a);
	}
});
Ext.define("ans.videojs.ErrorNote", {
	"extend": "Ext.Component",
	"cls": "ans-vjserrdisplay",
	"renderTpl": ["<div class=\x22ans-vjserrdisplay-title\x22>播放出现异常。</div>"]
});
(function () {
	var b = videojs.getComponent("ErrorDisplay"),
		a = videojs.extend(b, {
			"constructor": function (e, c) {
				b.call(this, e, c);
			},
			"colse": function () {
				b.prototype["colse"].call(this),
					me["ansErrorDisplay"] && (me["ansErrorDisplay"]["destroy"](),
						me["ansErrorDisplay"] = null);
			},
			"fill": function () {
				b.prototype["fill"].call(this);
				var g = this,
					i = g.player_,
					h = i["options_"]["playlines"],
					e = Ext["query"](".vjs-modal-dialog-content", g["el_"])[0];
				g["ansErrorDisplay"] && (g["ansErrorDisplay"]["destroy"](),
					delete g["ansErrorDisplay"]);
				if (!i["selectCDN"] || !h) {
					g["ansErrorDisplay"] = Ext["create"]("ans.videojs.ErrorNote", {
						"renderTo": g["el_"]
					});
					return;
				}
				var f = i["currentPlayline"](),
					c = 0;
				Ext.each(h, function (k, j) {
					f == k && (c = j);
				}),
					g["ansErrorDisplay"] = Ext["create"]("ans.videojs.ErrorDisplay", {
						"renderTo": g["el_"],
						"onSelected": function (j) {
							i["selectCDN"](j),
								g["close"]();
						},
						"renderData": {
							"playlines": h,
							"errorMsg": g["content"](),
							"selectedIndex": c
						}
					});
			}
		});
	videojs.registerComponent("ErrorDisplay", a);
}());
(function () {
	var a = null;
	typeof window["videojs"] === "undefined" && typeof require === "function" ? a = require("video.js") : a = window.videojs,
		function (i, h) {
			var g = {},
				c,
				k = {},
				b = {};
			function f(p, o, n, q) {
				k = {
					"label": n,
					"sources": o
				};
				if (typeof q === "function")
					return q(p, o, n);
				p.src(o.map(function (r) {
					return {
						"src": r.src,
						"type": r.type,
						"res": r.res
					};
				}));
				return p;
			}
			var l = h.getComponent("MenuItem"),
				m = h.extend(l, {
					"constructor": function (p, o, q, n) {
						this.onClickListener = q,
							this.label = n,
							l.call(this, p, o),
							this.src = o.src,
							this.on("click", this["onClick"]),
							this.on("touchstart", this["onClick"]),
							o["initialySelected"] && (this["showAsLabel"](),
								this.selected(true),
								this["addClass"]("vjs-selected"));
					},
					"showAsLabel": function () {
						this.label && (this.label["innerHTML"] = this["options_"].label);
					},
					"onClick": function (q) {
						this.onClickListener(this);
						var p = this.player_.currentTime(),
							n = this.player_["paused"]();
						this["showAsLabel"](),
							this["addClass"]("vjs-selected");
						!n && this.player_["bigPlayButton"]["hide"]();
						typeof q !== "function" && typeof this["options_"]["customSourcePicker"] === "function" && (q = this["options_"]["customSourcePicker"]);
						var o = "loadeddata";
						this.player_["techName_"] !== "Youtube" && this.player_["preload"]() === "none" && this.player_["techName_"] !== "Flash" && (o = "timeupdate"),
							f(this.player_, this.src, this["options_"].label, q)["one"](o, function () {
								var r = this.player_;
								r["switchStatus"] = true,
									r.currentTime(p),
									!n && r["play"](),
									r.trigger("resolutionchange");
							});
					}
				});
			h.registerComponent("ResolutionMenuItem", m);
			var j = h.getComponent("MenuButton"),
				e = h["extend"](j, {
					"constructor": function (q, o, r, n) {
						this.sources = o.sources,
							this.label = n,
							this.label["innerHTML"] = o["initialySelectedLabel"],
							j.call(this, q, o, r),
							this["controlText"]("Quality");
						if (r["dynamicLabel"])
							this.el()["appendChild"](n);
						else {
							var p = document["createElement"]("span");
							h.dom["addClass"](p, "vjs-resolution-button-staticlabel"),
								this.el()["appendChild"](p);
						}
					},
					"createItems": function () {
						var o = [],
							q = this.sources && this.sources.label || {},
							p = function (r) {
								o.map(function (s) {
									s.selected(s === r),
										s["removeClass"]("vjs-selected");
								});
							};
						for (var n in q) {
							q["hasOwnProperty"](n) && (o.push(new m(this.player_, {
								"label": n,
								"src": q[n],
								"initialySelected": n === this["options_"]["initialySelectedLabel"],
								"customSourcePicker": this["options_"]["customSourcePicker"]
							}, p, this.label)),
								b[n] = o[o.length - 1]);
						}
						return o;
					}
				});
			c = function (w) {
				var p = h["mergeOptions"](g, w),
					u = this,
					t = document["createElement"]("span"),
					s = {};
				h.dom["addClass"](t, "vjs-resolution-button-label"),
					u["updateSrc"] = function (y) {
						if (!y)
							return u.src();
						u.controlBar["resolutionSwitcher"] && (u.controlBar["resolutionSwitcher"]["dispose"](),
							delete u.controlBar["resolutionSwitcher"]);
						y = y.sort(r),
							s = q(y);
						var z = o(s, y),
							x = new e(u, {
								"sources": s,
								"initialySelectedLabel": z.label,
								"initialySelectedRes": z.res,
								"customSourcePicker": p["customSourcePicker"]
							}, p, t);
						return h["dom"]["addClass"](x.el(), "vjs-resolution-button"),
							u.controlBar["resolutionSwitcher"] = u.controlBar["el_"]["insertBefore"](x["el_"], u.controlBar["getChild"]("fullscreenToggle")["el_"]),
							u.controlBar["resolutionSwitcher"]["dispose"] = function () {
								this["parentNode"]["removeChild"](this);
							},
							f(u, z.sources, z.label, p["customSourcePicker"]);
					},
					u.currentResolution = function (x, y) {
						if (x == null)
							return k;
						return b[x] != null && b[x]["onClick"](y),
							u;
					},
					u["getGroupedSrc"] = function () {
						return s;
					};
				function r(y, x) {
					if (!y.res || !x.res)
						return 0;
					return +x.res - +y.res;
				}
				function q(y) {
					var x = {
						"label": {},
						"res": {},
						"type": {}
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
					x[y][z[y]].push(z)
				}
				function o(z, A) {
					var y = p["default"],
						x = "";
					y === "high" ? (y = A[0].res,
						x = A[0].label) : y === "low" || y == null || !z.res[y] ? (y = A[A.length - 1].res,
							x = A[A.length - 1].label) : z.res[y] && (x = z.res[y][0].label)
					return {
						"res": y,
						"label": x,
						"sources": z.res[y]
					};
				}
				u.ready(function () {
					u["options_"].sources.length > 0 && u["setTimeout"](function () {
						u["updateSrc"](u["options_"].sources);
					}, 1);
				});
			},
				h.registerPlugin("videoJsResolutionSwitcher", c);
		}(window, a);
}());
(function () {
	(function (i, h) {
		var f = {},
			b,
			g = {},
			a = {};
		function c(o, n, m, p) {
			g = n;
			if (typeof p === "function")
				return p(o, n, m);
			return o;
		}
		var l = h.getComponent("ResolutionMenuItem"),
			e = h.extend(l, {
				"onClick": function (q) {
					this.onClickListener(this);
					var p = this.player_.currentTime(),
						m = this.player_["paused"]();
					this["showAsLabel"](),
						this["addClass"]("vjs-selected");
					!m && this.player_["bigPlayButton"]["hide"]();
					typeof q !== "function" && typeof this["options_"]["customSourcePicker"] === "function" && (q = this["options_"]["customSourcePicker"]);
					var o = "loadeddata";
					this.player_["techName_"] !== "Youtube" && this.player_["preload"]() === "none" && this.player_["techName_"] !== "Flash" && (o = "timeupdate");
					var n = c(this.player_, this.src, this["options_"].label, q);
					n && n["one"](o, function () {
						n["switchStatus"] = true,
							n.currentTime(p),
							!m && n["play"](),
							n.trigger("playlinechange");
					});
				}
			}),
			j = h.getComponent("MenuButton"),
			k = h.extend(j, {
				"constructor": function (p, n, q, m) {
					this["playlines"] = n["playlines"],
						this.label = m,
						this.label["innerHTML"] = n["initialySelectedLabel"],
						j.call(this, p, n, q),
						this["controlText"]("Playline");
					if (q["dynamicLabel"])
						this.el()["appendChild"](m);
					else {
						var o = document["createElement"]("span");
						h["addClass"](o, "vjs-resolution-button-staticlabel"),
							this.el()["appendChild"](o);
					}
				},
				"createItems": function () {
					var o = [],
						q = this["playlines"] || [],
						p = function (r) {
							o.map(function (s) {
								s.selected(s === r),
									s["removeClass"]("vjs-selected");
							});
						};
					for (var n = 0; n < q.length; n++) {
						var m = q[n].label;
						o.push(new e(this.player_, {
							"label": m,
							"src": q[n],
							"initialySelected": m === this["options_"]["initialySelectedLabel"],
							"customSourcePicker": this["options_"]["customSourcePicker"]
						}, p, this.label)),
							a[m] = o[o.length - 1];
					}
					return o;
				}
			});
		b = function (o) {
			var q = h["mergeOptions"](f, o),
				p = this,
				n = document["createElement"]("span"),
				r = p["options_"]["playlines"];
			h["dom"]["addClass"](n, "vjs-resolution-button-label");
			var m = new k(p, {
				"playlines": r,
				"initialySelectedLabel": r[0].label,
				"initialySelectedUrl": r[0].url,
				"customSourcePicker": q["customSourcePicker"]
			}, q, n);
			h.dom["addClass"](m.el(), "vjs-resolution-button"),
				h.dom["addClass"](m.el(), "vjs-playline-button"),
				m["show"](),
				p["selectCDN"] = function (s) {
					m["items"][s]["onClick"](q["customSourcePicker"]),
						p["play"]();
				},
				r.length > 0 && (g = r[0]),
				p["currentPlayline"] = function () {
					return g;
				},
				p.ready(function () {
					p.controlBar["videoJsPlayLine"] = p.controlBar["el_"]["insertBefore"](m["el_"], p.controlBar["getChild"]("fullscreenToggle")["el_"]),
						p.controlBar["videoJsPlayLine"]["dispose"] = function () {
							this["parentNode"]["removeChild"](this);
						};
				});
		},
			h.registerPlugin("videoJsPlayLine", b);
	}(window, videojs));
}());
Ext.define("ans.AudioJs", {
	"videoJs": null,
	"mixins": {
		"observable": "Ext.util.Observable"
	},
	"constructor": function (a) {
		a = a || {};
		var c = this;
		c.addEvents(["seekstart"]),
			c.mixins.observable.constructor.call(c, a);
		var b = videojs(a.videojs, c.params2VideoOpt(a.params), function () { });
		Ext.fly(a.videojs).on("contextmenu", function (f) {
			f.preventDefault();
		}),
			Ext.fly(a.videojs).on("keydown", function (f) {
				(f.keyCode == 0x20 || f.keyCode == 0x25 || f["keyCode"] == 0x27) && f.preventDefault();
			});
	},
	"params2VideoOpt": function (params) {
		var sources = [];
		!params.rootPath && (params.rootPath = "");
		params.http && sources.push({
			"src": params.http,
			"type": "audio/mp3"
		});
		var logFunc = function (player, url, callback) {
			var me = this;
			!me.logCount && (me.logCount = 0),
				videojs.xhr({
					"uri": url,
					"headers": {
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
						d.isPassed && callback();
						return;
					}
					me.logCount >= 4 && (me.logCount = 0,
						player.pause(),
						resp.statusCode != 0 ? alert("服务繁忙，不能保证您能否正常完成任务，请您稍后继续...(e:" + resp.statusCode + ")") : alert("您的网络不稳定，请您稍后继续..."));
				});
		}, sendLog_ = function (player, isdrag, currentTimeSec, callback) {
			if (!params.reportUrl)
				return;
			var format = "[{0}][{1}][{2}][{3}][{4}][{5}][{6}][{7}]", clipTime = (params.startTime || "0") + "_" + (params.endTime || params.duration),
				tmp_aa = 0,
				tmp_bb;
			currentTimeSec.toString().indexOf("-") != -1 ? (tmp_bb = currentTimeSec.split("-"),
				tmp_bb.length == 2 && (tmp_aa = parseInt(tmp_bb1) * 0x3e8)) : tmp_aa = currentTimeSec * 0x3e8;
			if (tmp_aa == params.duration * 0x3e8 && isdrag == 2)
				return;
			var enc = Ext.String.format(format, params.clazzId, params.userid, params.jobid ? params.jobid : "", params.objectId, tmp_aa, "d_yHJ!$pdA~5", params.duration * 0x3e8, clipTime),
				rurl = [params.reportUrl, "/", params.dtoken, "?clazzId=", params.clazzId, "&playingTime=", currentTimeSec, "&duration=", params.duration, "&clipTime=", clipTime, "&objectId=", params.objectId, "&otherInfo=", params.otherInfo, "&jobid=", params.jobid, "&userid=", params.userid, "&isdrag=", isdrag, "&view=pc", "&enc=", md5(enc), "&rt=", params.rt, "&dtype=Audio", "&_t=", new Date().getTime()].join("");
			logFunc(player, rurl, callback);
		};
		return {
			"language": "zh-CN",
			"controls": true,
			"preload": "auto",
			"bigPlayButton": false,
			"sources": sources,
			"textTrackDisplay": true,
			"controlBar": {
				"volumePanel": {
					"inline": true
				},
				"children": ["playToggle", "currentTimeDisplay", "timeDivider", "durationDisplay", "progressControl", "volumePanel"]
			},
			"plugins": {
				"audioNote": {
					"title": params["filename"]
				},
				"studyControl": {
					"enableSwitchWindow": 1
				},
				"seekBarControl": {
					"headOffset": params.headOffset,
					"enableFastForward": params["enableFastForward"],
					"isSendLog": true,
					"reportTimeInterval": params["reportTimeInterval"],
					"sendLog": function (player, evt, sec) {
						if (this.isSendLog !== true)
							return;
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
								break;
						}
						sendLog_(player, isdrag, sec, function () {
							window["proxy_completed"] && window["proxy_completed"]();
						});
					}
				}
			}
		};
	}
});
Ext.define("ans.videojs.AudioNote", {
	"extend": "Ext.Component",
	"cls": "ans-audionote"
});
(function () {
	var b = videojs.getPlugin("plugin"),
		a = videojs.extend(b, {
			"constructor": function (e, c) {
				b.call(this, e, c),
					Ext["create"]("ans.videojs.AudioNote", {
						"renderTo": e["el_"],
						"html": c["title"]
					});
			}
		});
	videojs.registerPlugin("audioNote", a);
}());