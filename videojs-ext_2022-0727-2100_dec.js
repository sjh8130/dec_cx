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
			h > a ? (c.pause(), c.playbackRate(0x1)) : Ext.setCookie('doubleSpeedValue', h);
		});
		c.on('play', function () {
			if (b.params && b.params.doublespeed) {
				var var_20220727_7 = Ext.getCookie('doubleSpeedValue', 0x1);
				c.playbackRate(var_20220727_7);
			}
		});
	},
	params2VideoOpt: function (params) {
		var var_20220727_6 = typeof params.cpi == 'undefined' ? 0x0 : params.cpi, useM3u8 = false, cdn = [{
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
			}
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
							} catch (error) {
								console.log(error);
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
								} catch (error) {
									console.log(error.message);
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
					sendLog: function (player, evt, sec, var_20220324_1) {
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
				timelineObjects: {
					url: params.rootPath + '/richvideo/initdatawithviewerV2?mid=' + params.mid + '&cpi=' + params.cpi + '&classid=' + params.clazzId,
					quizErrorReportUrl: params.rootPath + '/question/addquestionerror?classid=' + params.clazzId + '&cpi=' + params.cpi,
					validationUrl2: params.rootPath + '/question/quiz-validation?classid=' + params.clazzId + '&cpi=' + var_20220727_6 + '&objectid=' + params.objectId,
					quizRightCountUrl: params.rootPath + '/question/quiz-rightcount?classid=' + params.clazzId + '&cpi=' + var_20220727_6
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
							var var_20220715_1 = h.sec_(g);
							if (var_20220715_1 == 0x0 && (h.startCapture == 0x1 || typeof h.startCapture == 'undefined') && h.firstPlayFace) {
								h.playingFaceTime = var_20220715_1,
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
		faceCollection: function (e, c, f, var_20220715_5) {
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
					} catch (e) { }
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
			} catch (err) {
				console.log(err);
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
				} catch (err) {
					console.log(err);
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
		var f = this, i = Ext.query('input', f.el.dom), e = true, g = f.renderData, b = g.options, c = [], h = f.quizErrorReportUrl, a = f.validationUrl2, d = g.dtype;
		if (Ext.get('videoquiz-continue').getStyle('display') == 'none' && window.parent.parent.location.href.indexOf('nodedetailcontroller/visitnodedetail') > -0x1) {
			try {
				top.configFullScreen && exitMediumSizeWindow();
			} catch (err) {
				console.log(err);
			}
			f.fireEvent('continue');
			return;
		}
		Ext.each(i, function (var_20220727_4, var_20220727_5) {
			var_20220727_4.checked && c.push(b[var_20220727_5].name);
		}),
			Ext.get('videoquiz-submit').setStyle('display', 'none'),
			Ext.get('videoquiz-submitting').setStyle('display', 'block');
		if (typeof a != 'undefined') {
			var l = c.join(',');
			Ext.Ajax.request({
				url: a,
				params: {
					eventid: g.resourceId,
					memberinfo: g.memberinfo,
					answerContent: l
				},
				method: 'get',
				success: function (m) {
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
							Ext.get('rightNum').setHTML(n.rightAnswerCount),
								Ext.get('rightAnswerNum').setStyle('display', 'inline-block');
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
									cursorborder: '',
									cursorwidth: 0x6,
									cursorcolor: '#A5A5A5',
									boxzoom: false,
									autohidemode: true
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
								} catch (err) {
									console.log(err);
								}
								Ext.get('spanHas').setHTML("<span class=\"spanHas fr\" style='display:block'><span id=\"InteractiveQuizTip\">恭喜你，答对了！你的答题水准超过了" + r + '%的同学</span></span>');
							} else
								Ext.get('spanHas').setHTML('<span class=\x22spanHas fr\x22 style=\x27display:block\x27><span id=\x22InteractiveQuizTip\x22>恭喜你，答对了！</span></span>');
						}
					}
					!var_20220727_2 && f.onerror && d != 'InteractiveQuiz' && f.onerror();
					!var_20220727_2 && g.errorContinue == 0x1 && (e = true,
						Ext.get('videoquiz-submit').setStyle('display', 'none'),
						Ext.get('videoquiz-continue').setStyle('display', 'block'));
					if (var_20220727_2 && Ext.get('videoquiz-continue').getStyle('display') == 'none') {
						try {
							top.configFullScreen && exitMediumSizeWindow();
						} catch (err) {
							console.log(err);
						}
						f.fireEvent('continue');
					}
				},
				error: function () {
					Ext.get('videoquiz-submit').setStyle('display', 'block'),
						Ext.get('videoquiz-submitting').setStyle('display', 'none'),
						f.onerror && d != 'InteractiveQuiz' && f.onerror();
				}
			});
		}
		return e;
	},
	continueFun: function () {
		var a = this;
		a.fireEvent('continue');
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
		var a = this;
		a.callParent(arguments);
		try {
			var var_20220715_2 = document.querySelector('.sp_video_img');
			var_20220715_2.addEventListener('load', function () {
				var_20220715_2.naturalWidth >= var_20220715_2.naturalHeight ? var_20220715_2.naturalWidth >= 0x190 && (var_20220715_2.style.width = '90%',
					var_20220715_2.style.height = '80%') : var_20220715_2.naturalHeight >= 0x190 && (var_20220715_2.style.height = '90%',
						var_20220715_2.style.width = '80%');
			});
		} catch (err) {
			console.log(err);
		}
		a.el.on('click', function () {
			a.fireEvent('continue');
		}),
			a.closeEl.on('click', function () {
				try {
					top.configFullScreen && exitMediumSizeWindow();
				} catch (err) {
					console.log(err);
				}
				a.fireEvent('continue');
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
		var c = this, b = c.contentEl;
		c.callParent(arguments),
			c.closeEl.on('click', function () {
				c.fireEvent('continue');
			});
		var a = $(b.dom).niceScroll({
			cursorborder: '',
			cursorwidth: 0x6,
			cursorcolor: '#e0e0e0',
			boxzoom: false,
			autohidemode: true
		});
		c.scroller = a;
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
		var a = this;
		a.callParent(arguments);
		try {
			dragFn && dragFn('#sp_video_ppt_pic', '#video_html5_api');
		} catch (err) {
			console.log(err);
		}
		a.sizeBigEl.on('click', function (g) {
			g.stopPropagation(),
				a.pptPicEl.toggleCls('sp_ppt_pic_fullScreen'),
				Ext.get('sp_size_big').setStyle('display', 'none'),
				Ext.get('sp_size_small').setStyle('display', 'block');
			var b = Ext.get('video').getStyle('height'), c = Ext.get('sp_video_ppt_pic').getStyle('height'), f = (parseInt(b) - 0x3c - parseInt(c)) / 0x2;
			Ext.get('sp_video_ppt_pic').setStyle('top', f + 'px'),
				Ext.get('sp_video_ppt_pic').setStyle('left', '0');
		}),
			a.sizeSmallEl.on('click', function (g) {
				g.stopPropagation(),
					a.pptPicEl.toggleCls('sp_ppt_pic_fullScreen'),
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
	constructor: function (a) {
		var b = this;
		b.callParent(arguments),
			b.bg = Ext.create('ans.videojs.TimelineObjectsBg', {
				renderTo: a.renderTo
			}),
			b.objects = a.objects && a.objects.sort ? b.sort_(a.objects) : [],
			b.current = 0x0;
	},
	showObject: function (m, b, e) {
		var j = this, h = j.getBox(), c = j.items.getAt(0x0), l, i = function () {
			l.destroy(),
				j.hide(),
				m.play();
		};
		c != null && c.destroy();
		if (b == 'IMG') {
			var f = {
				src: e.url.replace(/origin/, h.width + '_' + h.height)
			};
			l = j.add({
				xtype: 'videoimg',
				renderData: f
			});
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
				xtype: 'videoquiz',
				renderData: e,
				quizErrorReportUrl: j.quizErrorReportUrl,
				validationUrl2: j.validationUrl2,
				onerror: k
			});
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
					xtype: 'videoquiz',
					renderData: e,
					quizErrorReportUrl: j.quizErrorReportUrl,
					validationUrl2: j.validationUrl2,
					quizRightCountUrl: j.quizRightCountUrl,
					onerror: k
				});
		}
		if (b == 'PPT') {
			if (e.fp == 0x0)
				return;
			var a = e.url;
			e.thumb ? a = e.thumb + e.pageNo + '.png' : a = a.replace(/swfv2\/.*$/, 'thumb/' + e.fp + '.png');
			var f = {
				src: a
			};
			l = j.add({
				xtype: 'videoppt',
				renderData: f
			});
		}
		b == 'SyncAnnotationEvent' && (l = j.add({
			xtype: 'videoannotation',
			renderData: e
		}));
		if (!l)
			return;
		l.on('continue', function () {
			i();
		});
		var g = !(l.model === false);
		j.showModel(g),
			g && m.pause();
	},
	showModel: function (a) {
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
	hide: function () {
		this.callParent(arguments),
			this.bg.hide.apply(this.bg, arguments);
	},
	updateTime: function (a, e) {
		if (this.current >= this.objects.length || a.scrubbing())
			return;
		var c = this, f = c.objects[c.current], b = f.style, g = f.datas[0x0];
		e >= g.startTime && (c.current++,
			setTimeout(function () {
				c.showObject(a, b, g);
			}, 0x14));
	},
	resetTime: function (b, e) {
		var c = this, a;
		for (a = 0x0; a < c.objects.length; a++) {
			var f = c.objects[a].datas[0x0].startTime;
			if (e <= f)
				break;
		}
		c.current = a;
	},
	sort_: function (a) {
		return a && a.sort && a.sort(function (f, e) {
			var c = f.datas[0x0].startTime, b = e.datas[0x0].startTime;
			return c - b;
		});
	}
});
(function () {
	var Plugin = videojs.getPlugin('plugin'), TimelineObjects = videojs.extend(Plugin, {
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
						eval('var data=' + resp.responseText);
						if (data && data.length > 0x0) {
							var a = [];
							for (var i = 0x0; i < data.length; i++) {
								var b = data[i];
								if (b.style == 'InteractiveQuiz') {
									var c = b.datas;
									if (c && c.length > 0x0)
										var d = {
											time: c[0x0].startTime,
											text: '互动测验'
										};
									a.push(d);
								}
							}
							player.eventPoints = a;
						}
						var timeline = Ext.create('ans.videojs.TimelineObjects', {
							renderTo: player.el_,
							quizErrorReportUrl: options.quizErrorReportUrl,
							validationUrl2: options.validationUrl2,
							quizRightCountUrl: options.quizRightCountUrl,
							objects: data
						});
						player.on('play', function () {
							timeline.resetTime(player, player.currentTime());
						}),
							player.on('seekend', function () {
								timeline.resetTime(player, player.currentTime());
							}),
							player.on('timeupdate', function () {
								!player.paused() && timeline.updateTime(player, player.currentTime());
							});
					}
				});
		}
	});
	videojs.registerPlugin('timelineObjects', TimelineObjects);
}());
(function () {
	var Plugin = videojs.getPlugin('plugin'), Marker = videojs.extend(Plugin, {
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
					eval('var data=' + resp.responseText);
					if (!data.status)
						return;
					var videoPlayer = videojs('video');
					if (videoPlayer && typeof videoPlayer.markers === 'function') {
						var var_20220324_3 = player.eventPoints;
						var_20220324_3.push.apply(var_20220324_3, data.list),
							videoPlayer.markers({
								markerTip: {
									display: true,
									text: function (marker) {
										return marker.text;
									}
								},
								markers: var_20220324_3,
								onMarkerClick: function (marker) {
									if (options.ff != 0x1)
										return false;
									var key = $(this).data('marker-key');
									return player.currentTime(marker.time),
										false;
								}
							});
					}
					if (data.list && data.list.length > 0x0) {
						var var_20220324_4 = [], var_20220324_5 = {};
						for (var i = 0x0; i < data.list.length; i++) {
							var var_20220324_6 = data.list[i], var_20220324_7 = var_20220324_6.text;
							if (!var_20220324_5[var_20220324_7]) {
								var var_20220324_8 = [];
								var_20220324_8.push(var_20220324_6),
									var_20220324_5[var_20220324_7] = var_20220324_8,
									var_20220324_4.push(var_20220324_7);
							} else {
								var var_20220324_8 = var_20220324_5[var_20220324_7];
								var_20220324_8.push(var_20220324_6),
									var_20220324_5[var_20220324_7] = var_20220324_8;
							}
						}
						function func_20220324_1(var_20220324_9) {
							var var_20220324_10 = '<div class=\x22zsCloud_box\x22><h2 class=\x22zsCloud_seltime\x22>选择时间</h2><div class=\x22zsCloud_div\x22><div class=\x22zsCloud_div_list\x22>';
							for (var i = 0x0; i < var_20220324_9.length; i++) {
								var var_20220324_11 = var_20220324_9[i], var_20220324_12 = Ext.fly(topicContent.elements[0x0]).select('.topicId' + var_20220324_11.topicid + ':not(.markertime)'), var_20220324_13 = videojs.formatTime(var_20220324_11.time);
								var_20220324_12 && var_20220324_12.elements[0x0] && var_20220324_12.elements[0x0].parentElement.remove(),
									var_20220324_10 += '<div class="zsCloud_item topicId' + var_20220324_11.topicid + '" data-marker-time="' + var_20220324_11.time + '" title="' + var_20220324_13 + '" onclick="markersPlayer(this)">' + var_20220324_13 + '</div>';
							}
							return var_20220324_10 += '</div></div></div>',
								var_20220324_10;
						}
						Ext.select('.zsCloud').setStyle('display', 'block');
						var topicContent = Ext.select('.zsCloud_ul');
						if (topicContent && topicContent.elements[0x0]) {
							var insertLocaltion;
							for (var i = 0x0; i < var_20220324_4.length; i++) {
								var var_20220324_14 = var_20220324_4[i], var_20220324_15 = var_20220324_5[var_20220324_14], markerHtml = '';
								if (var_20220324_15) {
									if (var_20220324_15.length == 0x1) {
										var marker = var_20220324_15[0x0], topic = Ext.fly(topicContent.elements[0x0]).select('.topicId' + marker.topicid + ':not(.markertime)'), title = videojs.formatTime(marker.time);
										topic && topic.elements[0x0] && topic.elements[0x0].parentElement.remove(),
											markerHtml = "<li><span class='topicId" + marker.topicid + " markertime' data-marker-time='" + marker.time + "' title='" + title + "' onclick='markersPlayer(this)'>" + marker.text + '</span></li>';
									} else
										markerHtml = '<li class="zsCloud_select"><span class="zsCloud_span">' + var_20220324_14 + '</span>',
											var_20220324_15 && var_20220324_15.length > 0x0 ? markerHtml += func_20220324_1(var_20220324_15) : markerHtml += '</li>';
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
									onclick: 'markersPlayer(this)'
								},
								dataMap.set(topicid, item),
								wordList.push(item)),
								item.weight += 0x1;
						}
					$(function () {
						wordList.length != 0x0 && $('#word_cloud').jQCloud(wordList);
						function func_20220324_2(var_20220324_16) {
							$(var_20220324_16).niceScroll({
								cursorborder: '',
								cursorwidth: 0x8,
								cursorcolor: '#DADFE6',
								boxzoom: false,
								autohidemode: true
							}),
								setInterval(function () {
									$(var_20220324_16).getNiceScroll().resize();
								}, 0x12c);
						}
						$('.zsCloud_box').each(function (var_20220324_17) {
							$(this).find('.zsCloud_div').attr('id', 'zsCloud_div_' + var_20220324_17),
								func_20220324_2("#zsCloud_div_" + var_20220324_17);
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
		constructor: function (player, options) {
			Plugin.call(this, player, options);
			var me = this, subtitleUrl = options.subtitleUrl, toVtt = function (srt) {
				var m = srt.match(/support\/(\w+).\w+/);
				if (m)
					return ServerHosts.PARENT_HOST + '/ananas/video-editor/sub?objectid=' + m[0x1];
			}, addSub = function (name, src, isdefault) {
				player.addRemoteTextTrack({
					kind: 'subtitles',
					srclang: 'cn',
					label: name,
					src: src,
					default: isdefault
				}, true);
			};
			player.ready(function () {
				subtitleUrl && Ext.Ajax.request({
					url: subtitleUrl,
					success: function (resp) {
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
					backgroundColor: '#000',
					backgroundOpacity: '0',
					edgeStyle: 'uniform'
				}),
					settings.updateDisplay();
			});
		}
	});
	videojs.registerPlugin('subtitle', Subtitle);
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
	},
	setErrorMsg: function (a) {
		Ext.fly(this.errorMsgEl).setHTML(a);
	}
});
Ext.define('ans.videojs.ErrorNote', {
	extend: 'Ext.Component',
	cls: 'ans-vjserrdisplay',
	renderTpl: ['<div class="ans-vjserrdisplay-title">播放出现异常。</div>']
});
(function () {
	var b = videojs.getComponent('ErrorDisplay'), a = videojs.extend(b, {
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
			var g = this, i = g.player_, h = i.options_.playlines, e = Ext.query('.vjs-modal-dialog-content', g.el_)[0x0];
			g.ansErrorDisplay && (g.ansErrorDisplay.destroy(),
				delete g.ansErrorDisplay);
			if (!i.selectCDN || !h) {
				g.ansErrorDisplay = Ext.create('ans.videojs.ErrorNote', {
					renderTo: g.el_
				});
				return;
			}
			var f = i.currentPlayline(), c = 0x0;
			Ext.each(h, function (k, j) {
				f == k && (c = j);
			}),
				g.ansErrorDisplay = Ext.create('ans.videojs.ErrorDisplay', {
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
	videojs.registerComponent('ErrorDisplay', a);
}());
(function () {
	var a = null;
	typeof window.videojs === 'undefined' && typeof require === 'function' ? a = require('video.js') : a = window.videojs,
		function (i, h) {
			var g = {}, c, k = {}, b = {};
			function f(p, o, n, q) {
				k = {
					label: n,
					sources: o
				};
				if (typeof q === 'function')
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
			var l = h.getComponent('MenuItem'), m = h.extend(l, {
				constructor: function (p, o, n, q) {
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
				showAsLabel: function () {
					this.label && (this.label.innerHTML = this.options_.label);
				},
				onClick: function (q) {
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
				constructor: function (q, o, r, n) {
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
				createItems: function () {
					var o = [], q = this.sources && this.sources.label || {}, p = function (r) {
						o.map(function (s) {
							s.selected(s === r),
								s.removeClass('vjs-selected');
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
							sources: s,
							initialySelectedLabel: z.label,
							initialySelectedRes: z.res,
							customSourcePicker: p.customSourcePicker
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
						label: {},
						res: {},
						type: {}
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
			onClick: function (q) {
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
			constructor: function (p, n, q, m) {
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
			createItems: function () {
				var o = [], q = this.playlines || [], p = function (r) {
					o.map(function (s) {
						s.selected(s === r),
							s.removeClass('vjs-selected');
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
			var q = h.mergeOptions(f, o), p = this, n = document.createElement('span'), r = p.options_.playlines;
			h.dom.addClass(n, 'vjs-resolution-button-label');
			var m = new k(p, {
				playlines: r,
				initialySelectedLabel: r[0x0].label,
				initialySelectedUrl: r[0x0].url,
				customSourcePicker: q.customSourcePicker
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
	videoJs: null,
	mixins: {
		observable: 'Ext.util.Observable'
	},
	constructor: function (a) {
		a = a || {};
		var c = this;
		c.addEvents(['seekstart']),
			c.mixins.observable.constructor.call(c, a);
		var b = videojs(a.videojs, c.params2VideoOpt(a.params), function () { });
		Ext.fly(a.videojs).on('contextmenu', function (f) {
			f.preventDefault();
		}),
			Ext.fly(a.videojs).on('keydown', function (f) {
				(f.keyCode == 0x20 || f.keyCode == 0x25 || f.keyCode == 0x27) && f.preventDefault();
			});
	},
	params2VideoOpt: function (params) {
		var sources = [];
		!params.rootPath && (params.rootPath = '');
		params.http && sources.push({
			src: params.http,
			type: 'audio/mp3'
		});
		var logFunc = function (player, url, callback) {
			var me = this;
			!me.logCount && (me.logCount = 0x0),
				videojs.xhr({
					uri: url,
					headers: {
						"Content-Type": 'application/json'
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
						resp.statusCode != 0x0 ? alert('服务繁忙，不能保证您能否正常完成任务，请您稍后继续...(e:' + resp.statusCode + ')') : alert('您的网络不稳定，请您稍后继续...'));
				});
		}, sendLog_ = function (player, isdrag, currentTimeSec, callback) {
			if (!params.reportUrl)
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
			language: 'zh-CN',
			controls: true,
			preload: 'auto',
			bigPlayButton: false,
			sources: sources,
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
					sendLog: function (player, evt, sec) {
						if (this.isSendLog !== true)
							return;
						var isdrag = 0x0;
						switch (evt) {
							case 'play':
								isdrag = 0x3;
								break;
							case "pause":
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
Ext.define("ans.videojs.AudioNote", {
	extend: 'Ext.Component',
	cls: 'ans-audionote'
});
(function () {
	var b = videojs.getPlugin('plugin'), a = videojs.extend(b, {
		constructor: function (e, c) {
			b.call(this, e, c),
				Ext.create('ans.videojs.AudioNote', {
					renderTo: e.el_,
					html: c.title
				});
		}
	});
	videojs.registerPlugin('audioNote', a);
}());
