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
(function ($) {
	function safeAdd(x, y) {
		var lsw = (x & 65535) + (y & 65535);
		var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
		return (msw << 16) | (lsw & 65535)
	}
	function bitRotateLeft(num, cnt) {
		return (num << cnt) | (num >>> (32 - cnt))
	}
	function md5cmn(q, a, b, x, s, t) {
		return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b)
	}
	function md5ff(a, b, c, d, x, s, t) {
		return md5cmn((b & c) | ((~b) & d), a, b, x, s, t)
	}
	function md5gg(a, b, c, d, x, s, t) {
		return md5cmn((b & d) | (c & (~d)), a, b, x, s, t)
	}
	function md5hh(a, b, c, d, x, s, t) {
		return md5cmn(b ^ c ^ d, a, b, x, s, t)
	}
	function md5ii(a, b, c, d, x, s, t) {
		return md5cmn(c ^ (b | (~d)), a, b, x, s, t)
	}
	function binlMD5(x, len) {
		x[len >> 5] |= 128 << (len % 32);
		x[(((len + 64) >>> 9) << 4) + 14] = len;
		var i;
		var olda;
		var oldb;
		var oldc;
		var oldd;
		var a = 1732584193;
		var b = -271733879;
		var c = -1732584194;
		var d = 271733878;
		for (i = 0; i < x.length; i += 16) {
			olda = a;
			oldb = b;
			oldc = c;
			oldd = d;
			a = md5ff(a, b, c, d, x[i], 7, -680876936);
			d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
			c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
			b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
			a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
			d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
			c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
			b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
			a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
			d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
			c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
			b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
			a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
			d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
			c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
			b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
			a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
			d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
			c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
			b = md5gg(b, c, d, a, x[i], 20, -373897302);
			a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
			d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
			c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
			b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
			a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
			d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
			c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
			b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
			a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
			d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
			c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
			b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
			a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
			d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
			c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
			b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
			a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
			d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
			c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
			b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
			a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
			d = md5hh(d, a, b, c, x[i], 11, -358537222);
			c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
			b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
			a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
			d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
			c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
			b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
			a = md5ii(a, b, c, d, x[i], 6, -198630844);
			d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
			c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
			b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
			a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
			d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
			c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
			b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
			a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
			d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
			c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
			b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
			a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
			d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
			c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
			b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
			a = safeAdd(a, olda);
			b = safeAdd(b, oldb);
			c = safeAdd(c, oldc);
			d = safeAdd(d, oldd)
		}
		return [a, b, c, d]
	}
	function binl2rstr(input) {
		var x;
		var output = "";
		var length32 = input.length * 32;
		for (x = 0; x < length32; x += 8) {
			output += String.fromCharCode((input[x >> 5] >>> (x % 32)) & 255)
		}
		return output
	}
	function rstr2binl(input) {
		var i;
		var output = [];
		output[(input.length >> 2) - 1] = undefined;
		for (i = 0; i < output.length; i += 1) {
			output[i] = 0
		}
		var length8 = input.length * 8;
		for (i = 0; i < length8; i += 8) {
			output[i >> 5] |= (input.charCodeAt(i / 8) & 255) << (i % 32)
		}
		return output
	}
	function rstrMD5(s) {
		return binl2rstr(binlMD5(rstr2binl(s), s.length * 8))
	}
	function rstrHMACMD5(key, data) {
		var i;
		var bkey = rstr2binl(key);
		var ipad = [];
		var opad = [];
		var hash;
		ipad[15] = opad[15] = undefined;
		if (bkey.length > 16) {
			bkey = binlMD5(bkey, key.length * 8)
		}
		for (i = 0; i < 16; i += 1) {
			ipad[i] = bkey[i] ^ 909522486;
			opad[i] = bkey[i] ^ 1549556828
		}
		hash = binlMD5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
		return binl2rstr(binlMD5(opad.concat(hash), 512 + 128))
	}
	function rstr2hex(input) {
		var hexTab = "0123456789abcdef";
		var output = "";
		var x;
		var i;
		for (i = 0; i < input.length; i += 1) {
			x = input.charCodeAt(i);
			output += hexTab.charAt((x >>> 4) & 15) + hexTab.charAt(x & 15)
		}
		return output
	}
	function str2rstrUTF8(input) {
		return unescape(encodeURIComponent(input))
	}
	function rawMD5(v) {
		return rstrMD5(str2rstrUTF8(v))
	}
	function hexMD5(v) {
		return rstr2hex(rawMD5(v))
	}
	function rawHMACMD5(k, d) {
		return rstrHMACMD5(str2rstrUTF8(k), str2rstrUTF8(d))
	}
	function hexHMACMD5(k, d) {
		return rstr2hex(rawHMACMD5(k, d))
	}
	function md5(string, key, raw) {
		if (!key) {
			if (!raw) {
				return hexMD5(string)
			}
			return rawMD5(string)
		}
		if (!raw) {
			return hexHMACMD5(key, string)
		}
		return rawHMACMD5(key, string)
	}
	if (typeof define === "function" && define.amd) {
		define(function () {
			return md5
		})
	} else {
		if (typeof module === "object" && module.exports) {
			module.exports = md5
		} else {
			$.md5 = md5
		}
	}
}(this));
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
			if (f > a) {
				c.pause();
				c.playbackRate(1)
			}
		})
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
			var enc = Ext.String.format(format, params.clazzId, params.userid, params.jobid || "", params.objectId, currentTimeSec * 1000, "d_yHJ!$pdA~5", params.duration * 1000, clipTime);
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
			playbackRates: params.doublespeed != 0 ? [1, 2, 16] : false,
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
					isSendLog: !!parent.AttachmentSetting && parent.AttachmentSetting.control,
					reportTimeInterval: params.reportTimeInterval,
					isShowDanmu: params.danmaku,
					chapterCapture: params.chapterCapture || 0,
					captureInterval: params.captureInterval || 600,
					chapterCollectionType: params.chapterCollectionType || 0,
					isSupportFace: params.isSupportFace || false,
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
				},
				timelineObjects: {
					url: params.rootPath + "/richvideo/initdatawithviewer?mid=" + params.mid + "&cpi=" + params.cpi + "&classid=" + params.clazzId,
					quizErrorReportUrl: params.rootPath + "/question/addquestionerror?classid=" + params.clazzId + "&cpi=" + params.cpi,
					validationUrl2: params.rootPath + "/question/quiz-validation?classid=" + params.clazzId + "&cpi=" + params.cpi + "&objectid=" + params.objectId
				},
				subtitle: {
					translate: params.chapterVideoTranslate,
					subtitleUrl: params.rootPath + "/richvideo/allsubtitle?mid=" + params.mid + "&objectid=" + params.objectId + "&courseid=" + params.courseid,
					subtitle: params.rootPath + +"/ananas/video-editor/sub?objectid=" + params.subobjectid
				}
			}
		}
	}
});
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
					if (i != 1) { }
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
				if (typeof g != "undefined" && g != e) { }
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
				e.trigger("seekstart")
			});
			f.on("sliderinactive", function () {
				e.trigger("seekend")
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
		constructor: function (f, e) {
			a.call(this, f, e);
			var g = this;
			g.isSendLog_ = !!e.isSendLog;
			g.isShowDanmu_ = !!e.isShowDanmu;
			g.damuLastGetTime = 0;
			g.timeCount = 0;
			g.isPlay = false;
			g.playTimer,
				g.chapterCapture = e.chapterCapture || 0;
			g.captureInterval = e.captureInterval * 60 || 600;
			g.chapterCollectionType = e.chapterCollectionType || 0;
			g.isSupportFace = e.isSupportFace;
			f.on("ready", function () {
				if (e.enableFastForward != 1) {
					f.disableSeek()
				}
			});
			if (!e.sendLog) {
				e.sendLog = function () { }
			}
			if (e.headOffset) {
				f.currentTime(e.headOffset)
			}
			var j = 0,
				c = e.reportTimeInterval || 60,
				i = c * 1000;
			var h = function (k, l) {
				if (!g.isSendLog_) {
					return
				}
				var m = g.now_() - j;
				if (m > i || l === true) {
					e.sendLog(f, k, g.sec_(f));
					j = g.now_()
				}
			};
			f.on("play", function () {
				if (g.chapterCapture == 0 || !g.isSupportFace) {
					h("log");
					g.sendDataLog("play");
					g.receiveStudyLog();
					g.getDanmuList("play", f)
				} else {
					if (g.chapterCapture == 1) {
						if (g.timeCount == 0) {
							if (!g.isPlay) {
								g.faceCollection("play", f, g.chapterCollectionType);
							} else {
								h("log");
								g.sendDataLog("play");
								g.receiveStudyLog();
								g.getDanmuList("play", f);
								g.timer(f)
							}
						} else {
							g.timer(f)
						}
					}
				}
			});
			f.on("seeked", function () {
				if (e.enableFastForward != 1 && !f.switchStatus) {
					var k = f.currentTime(),
						l = e.headOffset ? e.headOffset : 0;
					if (k != 0 && k > l) {
						f.currentTime(l)
					}
				}
				delete f.switchStatus
			});
			f.on("pause", function () {
				h("log");
				g.sendDataLog("pause");
				g.getDanmuList("pause", f);
				g.playTimer && clearInterval(g.playTimer)
			});
			f.on("timeupdate", function () {
				if (j == 0) {
					return
				}
				h("log");
				if (parseInt(f.currentTime()) >= this.damuLastGetTime) {
					g.getDanmuList("timeupdate", f)
				}
				g.danmuDisplay(f)
			});
			f.on("ended", function () {
				h("ended", true);
				g.sendDataLog("ended")
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
			if (f < this.damuLastGetTime) {
				return
			}
			if (typeof (getDanmuByTime) != "undefined") {
				setTimeout(function () {
					getDanmuByTime(e, f)
				}, 200);
				this.damuLastGetTime = f + 59
			}
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
			if (e == "play" && this.timeCount == 0) {
				if (typeof (startFaceCollection) != "undefined") {
					startFaceCollection(c, f, this)
				}
			} else {
				if (e == "pause") {
					this.playTimer && clearInterval(this.playTimer);
					if (!this.isPlay && this.timeCount >= this.captureInterval) {
						if (typeof (startFaceCollection) != "undefined") {
							startFaceCollection(c, f, this)
						}
						this.timeCount = 0
					}
				}
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
	renderTpl: ['<div class="ans-videoquiz-title">[{questionType}] {description}</div>', '<ul class="ans-videoquiz-opts">', '<tpl for="options">', '<li class="ans-videoquiz-opt"><label>', '<input type="{[parent.questionType=="多选题"?"checkbox":"radio"]}" name="ans-videoquiz-opt" value="{isRight}">', "{name} {description}", "</label></li>", "</tpl> ", "</ul>", '<div class="ans-videoquiz-submit">提交</div>'],
	renderSelectors: {
		submitEl: "div.ans-videoquiz-submit"
	},
	afterRender: function () {
		var a = this;
		a.callParent(arguments);
		a.submitEl.on("click", function () {
			if (a.checkResult()) {
				a.fireEvent("continue")
			}
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
			a = f.validationUrl2;
		Ext.each(i, function (k, j) {
			if ((k.value == "true" && !k.checked) || (k.value == "false" && k.checked)) {
				e = false
			}
			if (k.checked) {
				c.push(b[j].name)
			}
		});
		if (!e) {
			alert("回答有错误")
		}
		if (typeof a != "undefined") {
			Ext.Ajax.request({
				url: a,
				params: {
					eventid: g.resourceId,
					isRight: e,
					memberinfo: g.memberinfo,
					answerContent: c.join(",")
				},
				method: "get"
			});
			if (!e && f.onerror) {
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
				if (f.onerror) {
					f.onerror()
				}
			}
		}
		return e
	}
});
Ext.define("ans.videojs.VideoImg", {
	extend: "Ext.Img",
	xtype: "videoimg",
	afterRender: function () {
		var a = this;
		a.callParent(arguments);
		a.el.on("click", function () {
			a.fireEvent("continue")
		})
	}
});
Ext.define("ans.videojs.VideoPpt", {
	extend: "Ext.Img",
	xtype: "videoppt",
	cls: "ans-videoppt",
	width: "30%",
	model: false,
	afterRender: function () {
		var a = this;
		a.callParent(arguments);
		a.el.on("click", function () {
			a.el.toggleCls("ans-videoppt-fullscreen")
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
	showObject: function (l, b, e) {
		var i = this,
			g = i.getBox(),
			c = i.items.getAt(0),
			k,
			h = function () {
				k.destroy();
				i.hide();
				l.play()
			};
		if (c != null) {
			c.destroy()
		}
		if (b == "IMG") {
			k = i.add({
				xtype: "videoimg",
				src: e.url.replace(/origin/, g.width + "_" + g.height)
			})
		}
		if (b == "QUIZ") {
			var j = function () { };
			if (e.errorBackTime && e.errorBackTime > 0) {
				var m = e.errorBackTime * 60;
				j = function () {
					var n = Math.max(l.currentTime() - m, 0);
					l.currentTime(n);
					h()
				}
			}
			k = i.add({
				xtype: "videoquiz",
				renderData: e,
				quizErrorReportUrl: i.quizErrorReportUrl,
				validationUrl2: i.validationUrl2,
				onerror: j
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
			k = i.add({
				xtype: "videoppt",
				src: a
			})
		}
		if (!k) {
			return
		}
		k.on("continue", function () {
			h()
		});
		var f = !(k.model === false);
		i.showModel(f);
	},
	showModel: function (a) {
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
			c.showObject(a, b, g)
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
			Ext.Ajax.request({
				url: options.url,
				async: false,
				success: function (resp) {
					if (resp.status != 200) {
						return
					}
					eval("var data=" + resp.responseText);
					var timeline = Ext.create("ans.videojs.TimelineObjects", {
						renderTo: player.el_,
						quizErrorReportUrl: options.quizErrorReportUrl,
						validationUrl2: options.validationUrl2,
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
							if (subs.length > 0) {
								Ext.each(subs, function (o) {
									addSub(o.name, toVtt(o.url), o.selected)
								})
							}
							if (options.translate == 1) {
								Ext.select(".vjs-subs-caps-button .vjs-icon-placeholder").setHTML("翻译");
								Ext.select(".vjs-subs-caps-button .vjs-icon-placeholder").addCls("vjs-hide-content")
							}
							setTimeout(function () {
								var tracks = player.textTracks();
								if (tracks && tracks[0]) {
									tracks[0].mode = "showing"
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
/*! videojs-resolution-switcher - 2015-7-26
 * Copyright (c) 2016 Kasper Moskwiak
 * Modified by Pierre Kraft
 * Licensed under the Apache-2.0 license. */
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
			var enc = Ext.String.format(format, params.clazzId, params.userid, params.jobid ? params.jobid : "", params.objectId, currentTimeSec * 1000, "d_yHJ!$pdA~5", params.duration * 1000, clipTime);
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
