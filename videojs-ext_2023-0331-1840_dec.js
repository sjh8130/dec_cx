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
		var _0x5cc364 = b && b.callbackfn ? b.callbackfn : function () { },
			c = videojs(b.videojs, e.params2VideoOpt(b.params), _0x5cc364);
		c.eventCount = 0x0;
		Ext.fly(b.videojs).on('contextmenu', function (f) {
			f.preventDefault();
		}),
			$('.video-js').attr('tabindex', 0x1),
			$('.vjs-big-play-button').on('click', function (f) {
				$('.video-js').focus();
			}),
			Ext.fly(b.videojs).on('keydown', function (f) {
				(f.keyCode == 0x20 || f.keyCode == 0x6b) && f.preventDefault();
				if (f.keyCode == 0x20)
					c.paused() ? c.play() : c.pause();
				else {
					if (f.keyCode == 0x25 || f.keyCode == 0x27) {
						var _0x466544 = b.params.enableFastForward, _0x3d580f = b.params.jobid;
						if (typeof _0x466544 != 'undefined' && _0x466544 === 0x0 && typeof _0x3d580f != 'undefined' && _0x3d580f != '' && window.parent.parent.location.href.indexOf('studentstudy') > -0x1)
							$('.vjs-progress-control').click();
						else {
							if (f.keyCode == 0x25) {
								var _0x55f438 = parseInt(c.currentTime()), _0x29ee17 = _0x55f438 - 0x5 < 0x0 ? 0x0 : _0x55f438 - 0x5;
								c.currentTime(_0x29ee17);
							} else {
								if (f.keyCode == 0x27) {
									var _0x55f438 = parseInt(c.currentTime()), _0x29ee17 = _0x55f438 + 0x5 > duration ? duration : _0x55f438 + 0x5;
									c.currentTime(_0x29ee17);
								}
							}
						}
					}
				}
			});
		c.videoJsResolutionSwitcher && c.on('resolutionchange', function () {
			var g = c.currentResolution(), f = g.sources ? g.sources[0x0].res : false;
			Ext.setCookie('resolution', f);
		});
		c.videoJsPlayLine && c.on('playlinechange', function () {
			var g = c.currentPlayline();
			Ext.setCookie('net', g.net);
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
			'ispublic': true,
			'net': 'p1'
		}, {
			'indexorder': 0x1,
			'label': '公网2',
			'url': ServerHosts.s2_HOST,
			'ispublic': true,
			'net': 'p2'
		}];
		if (params.cdn) {
			for (var i = 0x0; i < params.cdn.length; i++) {
				var cdnItem = params.cdn[i];
				cdnItem.net = 's' + i;
			}
			try {
				top.window.app && top.window.app == 0x2 ? cdn = cdn.concat(params.cdn) : cdn = cdn.concat(params.cdn).sort(function (o1, o2) {
					return o1.indexorder - o2.indexorder;
				});
			} catch (e) {
				cdn = cdn.concat(params.cdn);
			}
		}
		function _0x535d7b(_0x4aa459) {
			var _0x603582 = Ext.getCookie('net', 'p1'), _0x1b6367 = [];
			for (var i = 0x0; i < _0x4aa459.length; i++) {
				if (_0x4aa459[i].net == _0x603582) {
					_0x1b6367 = _0x4aa459[i];
					break;
				}
			}
			return _0x1b6367;
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
		params.httphd && (sources.push({
			'src': params.httphd,
			'type': 'video/mp4',
			'label': '高清',
			'resolution': 'hd',
			'res': 0x2d0
		}),
			defaultRes = Ext.getCookie('resolution', 0x2d0));
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
					'defaults': _0x535d7b(cdn),
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
									player.isFullscreen() && (closeFullScreen && closeFullScreen()),
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
				e.firstSeek = true,
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
			var var_20221104_3 = null, k = 0x0, c = 0x0, e = f.reportTimeInterval || 0x3c, j = e * 0x3e8, _0x1faf91 = function (l, m, o) {
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
			}, _0x40aa91 = function (l, m, o) {
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
					var _0x244b9c = var_20220902_10.otherPointTimes, _0xaeb85e = _0x244b9c.length;
					if (_0xaeb85e === 0x0)
						return -0x1;
					return _0x244b9c = func_20220902_1(_0x244b9c),
						_0x244b9c[_0xaeb85e - 0x1];
				} catch (error) {
					console.log(error);
				}
				return -0x1;
			}, func_20220902_4 = function (var_20220902_13, var_20220902_14) {
				try {
					if (!var_20220902_13.paused() && typeof var_20220902_13.eventPoints != 'undefined') {
						var var_20220902_15 = var_20220902_13.currentTime(), _0x2e1887 = 0x0;
						var_20220902_13.eventPoints.forEach(function (_0x426ae4) {
							_0x426ae4.text == '片头' && (_0x2e1887 = _0x426ae4.time);
						});
						if (var_20220902_14.headOffset > 0x0 && var_20220902_14.headOffset < _0x2e1887)
							return;
						if (_0x2e1887 > 0x0 && parseInt(var_20220902_15) === 0x0) {
							var _0x2420ac = parseInt(func_20220902_2(var_20220902_13));
							if (_0x2420ac >= 0x0 && _0x2e1887 > _0x2420ac)
								return;
							var_20220902_13.ignoreSeek = false,
								var_20220902_13.switchStatus = true,
								var_20220902_13.currentTime(_0x2e1887),
								_0x1faf91(_0x2e1887, var_20220902_13, '已跳过片头');
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
								_0x1faf91(var_20220902_21, var_20220902_13, '已跳过片尾');
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
					!g.ignorePlay ? (_0x40aa91('play', true),
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
									h.playingFace = false;
								var _0x2188f4 = h.faceCollection('play', g, h.chapterCollectionType, 0x0);
								if (_0x2188f4 != 0x1)
									return;
							}
							!g.ignorePlay ? (_0x40aa91('play', true),
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
					!g.seekLog && (g.seekStartTime = c);
					if (!g.ignoreSeek) {
						if (!g.seekLog) {
							g.firstSeek && (_0x40aa91('drag', true, g.seekStartTime + '-' + h.sec_(g)),
								g.firstSeek = false);
							function _0x1808cd() {
								_0x40aa91('drag', true, g.seekStartTime + '-' + h.sec_(g)),
									document.removeEventListener('mouseup', _0x1808cd);
							}
							document.addEventListener('mouseup', _0x1808cd);
						}
						'video' == f.sourcePlayer && (typeof aplus_queue != 'undefined' && aplus_queue.push({
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
							}));
					} else
						g.ignoreSeek = false;
					c = h.sec_(g),
						g.ignorePlay = true,
						g.seekLog = true,
						delete g.switchStatus;
				}),
				g.on('pause', function () {
					!g.ignorePause ? (_0x40aa91('pause', true),
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
						_0x40aa91('playing'),
						func_20220902_4(g, f);
				}),
				g.on('ended', function () {
					h.isShowFaceCollection && h.chapterCapture == 0x1 && h.endCapture == 0x1 && h.faceCollection('ended', g, h.chapterCollectionType, h.duration),
						_0x40aa91('ended', true),
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
						if (var_20220715_6.includes(var_20220715_5))
							return this.firstPlayFace = false,
								this.pausePlayFace = false,
								this.playingFace = false,
								0x1;
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
	'renderTpl': ['<div class="tkTopic">', '<tpl if="dtype==\x27InteractiveQuiz\x27">', '<div class="tkTopic_numbar fr">共 {interactiveQuestionCount} 题<span id="rightAnswerNum">，已答对 <i id="rightNum"></i> 题</span></div>', '</tpl>', '<div class="tkTopic_title">[{questionType}]</div>', '<div class="tkTopic_con tkScroll">', '<div class="tkItem">', '<div class="tkItem_title">{description}</div>', '<ul class=\x22tkItem_ul\x22>', '<tpl for="options">', '<li class="ans-videoquiz-opt"><label>', '<span class="tkRadio"><input type="{[parent.questionType=="多选题"?"checkbox":"radio"]}" <tpl if="parent.dtype==\x27InteractiveQuiz\x27">{[this.getChecked(parent.answerContent, values.name, parent.dtype)]}</tpl> name="ans-videoquiz-opt" value="{isRight}"/><i></i></span>', '{name}、{description}', '</label></li>', '</tpl>', '</ul>', '</div>', '</div>', '<div class="tkTopic_oper">', '<a class="ans-videoquiz-submit bntLinear fr" id="videoquiz-submit">提交</a>', '<a class=\x22ans-videoquiz-submit bntLinear fr\x22 id=\x22videoquiz-submitting\x22 style=\x22display:none\x22>提交中</a>', '<a class=\x22ans-videoquiz-continue bntLinear fr\x22 id=\x22videoquiz-continue\x22><tpl if=\x22dtype==\x27InteractiveQuiz\x27\x22>继续学习<tpl else>继续</tpl></a>', '<tpl if="dtype==\x27InteractiveQuiz\x27">', '<a class="bntWhiteBorder ans-videoquiz-back fr" id="knowledgeBack">知识点回看</a>', '</tpl>', '<tpl if="dtype==\x27InteractiveQuiz\x27"><span id="spanHas" class="rightInfo"></span><tpl else><span class="spanHas fr" id="spanHas">回答正确</span></tpl>', '<span class="spanNot fr" id="spanNot"><tpl if="dtype==\x27InteractiveQuiz\x27">真遗憾，再接再厉！<tpl else>回答错误</tpl></span>', '<span class="spanNotBack fr" id="spanNotBack"><tpl if="dtype==\x27InteractiveQuiz\x27">真遗憾，再接再厉！<tpl else>回答错误，</tpl>回看 {errorBackTime} 分钟</span>', '<tpl if="dtype==\x27InteractiveQuiz\x27">', '<span class="spanNotBack fr" id="spanNotBackPoint">真遗憾，再接再厉！</span>', '<a class="spanHref fl" href="javascript:" id="viewAnalysis">查看解析</a>', '</div>', '<div class="tkParsing" id="tkParsing">', '<a class="tkParsing_dele" id="tkParsingDele" href="javascript:"></a>', '<div class="tkParsing_screll tkParsing_con" id="tkParsing_con"></div>', '</tpl>', '</div>', '</div>', {
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
		setInterval(function () {
			$(c.dom).getNiceScroll().resize();
		}, 0x12c),
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
				b.onerror && b.onerror();
				try {
					top.configFullScreen && exitMediumSizeWindow();
				} catch (error) {
					console.log(error);
				}
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
								Ext.get('spanHas').setHTML('<span class=\x22spanHas fr\x22 style=\x27display:block\x27><span id=\x22InteractiveQuizTip\x22>恭喜你，答对了！你的答题水准超过了' + r + '%的同学</span></span>');
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
	'renderTpl': ['<div class="sp_video_pic">', '<img src=\x22{src}\x22 class=\x22sp_video_img\x22 />', '<a class="jb_btn jb_btn_92 fs14 sp_video_pic_dele2" style="position:absolute;bottom:14px;right:20px;z-index:6;" href="javascript:">继续学习</a>', '</div>'],
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
			try {
				top.configFullScreen && exitMediumSizeWindow();
			} catch (error) {
				console.log(error);
			}
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
	'renderTpl': ['<div class=\x22comment_icon\x22><img src=\x22/ananas/modules/video/pz_icon.png\x22/></div>', '<div class="comment_box" style="display:block">', '<div class="comment_tit"><a href="javascript:;" class="stow_icon fr"><img src="/ananas/modules/video/stow_icon.png" /></a><p class="fl">[批注]</p></div>', '<p class="comment_con">{description}</p>', '<a href="javascript:;" class="continueLearn fr">继续学习</a>', '</div>'],
	'renderSelectors': {
		'stowEl': 'a.stow_icon',
		'commentOpenEl': 'div.comment_icon',
		'boxEl': 'div.comment_box',
		'continueEl': 'a.continueLearn'
	},
	'afterRender': function () {
		var c = this, var_20221104_6 = c.commentOpenEl, var_20221104_7 = c.boxEl;
		c.callParent(arguments);
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
				try {
					top.configFullScreen && exitMediumSizeWindow();
				} catch (error) {
					console.log(error);
				}
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
	'renderTpl': ['<div class="sp_video_ppt_pic" id="sp_video_ppt_pic">', '<img src="{src}" class="sp_video_img" style="width: 100%;"/>', '<a class=\x22sp_size_big\x22 id=\x22sp_size_big\x22 href=\x22javascript:;\x22></a>', '<a class="sp_size_small" href="javascript:;" style="display:none;" id="sp_size_small"></a>', '</div>'],
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
			} catch (error) {
				console.log(error);
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
			} catch (error) {
				console.log(error);
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
			} catch (error) {
				console.log(error);
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
			} catch (error) {
				console.log(error);
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
			} catch (error) {
				console.log(error);
			}
		}
		if (b == 'SyncAnnotationEvent') {
			l = j.add({
				'xtype': 'videoannotation',
				'renderData': e
			});
			try {
				m.eventCount && (m.eventCount += 0x1);
			} catch (error) {
				console.log(error);
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
		j.showModel(g, b),
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
	'showModel': function (a, _0x15c68a) {
		try {
			top.configFullScreen && _0x15c68a != 'PPT' && mediumSizeWindow();
		} catch (error) {
			console.log(error);
		}
		var c = this;
		c.show();
		if (_0x15c68a == 'SyncAnnotationEvent') {
			var _0x241aa2 = $('#video_html5_api').height();
			Ext.select('.comment_box').setStyle('height', _0x241aa2 + 'px');
		}
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
	'resetTime': function (_0x352ed5, _0x991379) {
		var _0x178574 = this, _0x4240c3;
		for (_0x4240c3 = 0x0; _0x4240c3 < _0x178574.objects.length; _0x4240c3++) {
			var _0x464e2c = _0x178574.objects[_0x4240c3].datas[0x0].startTime;
			if (_0x991379 <= _0x464e2c)
				break;
		}
		_0x178574.current = _0x4240c3;
	},
	'sort_': function (_0x2f0750) {
		return _0x2f0750 && _0x2f0750.sort && _0x2f0750.sort(function (_0x5bc31a, _0x45128f) {
			var _0x35c7eb = _0x5bc31a.datas[0x0].startTime, _0x51d9da = _0x45128f.datas[0x0].startTime;
			return _0x35c7eb - _0x51d9da;
		});
	}
}),
	(function () {
		var _0x32b52a = videojs.getPlugin('plugin'), _0x5444af = videojs.extend(_0x32b52a, {
			'constructor': function (_0x1ac055, _0x4021a1) {
				_0x32b52a.call(this, _0x1ac055, _0x4021a1);
				if (!_0x4021a1.url)
					return;
				var _0x43beac = function (_0x33638a) {
					try {
						var _0x51414d = _0x33638a.datas;
						if (_0x51414d && _0x51414d.length > 0x0)
							return _0x51414d[0x0].startTime;
					} catch (_0x582c05) {
						console.log(_0x582c05);
					}
					return -0x1;
				}, _0x51ba79 = this;
				_0x1ac055.eventPoints = [],
					_0x1ac055.otherPointTimes = [];
				var _0x38aa99 = [];
				if (_0x4021a1.begins && _0x4021a1.begins > 0x0) {
					var _0xe48d9a = {
						'time': _0x4021a1.begins,
						'text': '片头'
					};
					_0x38aa99.push(_0xe48d9a);
				}
				if (_0x4021a1.ends && _0x4021a1.ends > 0x0) {
					var _0xe48d9a = {
						'time': _0x4021a1.ends,
						'text': '片尾'
					};
					_0x38aa99.push(_0xe48d9a);
				}
				_0x1ac055.eventPoints = _0x38aa99,
					Ext.Ajax.request({
						'url': _0x4021a1.url,
						'async': false,
						'success': function (_0x380fd) {
							if (_0x380fd.status != 0xc8)
								return;
							eval('var data=' + _0x380fd.responseText);
							if (data && data.length > 0x0) {
								var _0x4833b2 = [];
								for (var _0x15358e = 0x0; _0x15358e < data.length; _0x15358e++) {
									var _0x2f8bfb = data[_0x15358e];
									if (_0x2f8bfb.style == 'InteractiveQuiz') {
										var _0x32a953 = _0x2f8bfb.datas;
										if (_0x32a953 && _0x32a953.length > 0x0)
											var _0x4a4617 = {
												'time': _0x32a953[0x0].startTime,
												'text': '互动测验'
											};
										_0x4833b2.push(_0x4a4617);
									}
									var _0x40adc7 = _0x43beac(_0x2f8bfb);
									_0x40adc7 >= 0x0 && _0x1ac055.otherPointTimes.push(_0x40adc7);
								}
								_0x4833b2.forEach(function (_0x3738bb) {
									_0x1ac055.eventPoints.push(_0x3738bb);
								});
							}
							var _0x4ddbde = Ext.create('ans.videojs.TimelineObjects', {
								'renderTo': _0x1ac055.el_,
								'quizErrorReportUrl': _0x4021a1.quizErrorReportUrl,
								'validationUrl2': _0x4021a1.validationUrl2,
								'quizRightCountUrl': _0x4021a1.quizRightCountUrl,
								'objects': data
							});
							_0x1ac055.on('play', function () {
								_0x4ddbde.resetTime(_0x1ac055, _0x1ac055.currentTime()),
									_0x4ddbde.hideTimeline();
							}),
								_0x1ac055.on('seekend', function () {
									_0x4ddbde.resetTime(_0x1ac055, _0x1ac055.currentTime()),
										_0x4ddbde.hideTimeline();
								}),
								_0x1ac055.on('timeupdate', function () {
									!_0x1ac055.paused() && (_0x4ddbde.updateTime(_0x1ac055, _0x1ac055.currentTime()),
										_0x4ddbde.hideTimeline());
								});
						}
					});
			}
		});
		videojs.registerPlugin('timelineObjects', _0x5444af);
	}()),
	Ext.define('ans.videojs.customIframe', {
		'extend': 'Ext.Component',
		'xtype': 'customIframe',
		'renderTpl': ['<iframe src="{src}" class="configIframe" style="height: 100%;width: 100%;left: 0;top: 0;right: 0;bottom: 0; background: rgba(0,0,0,.6);"></iframe>'],
		'afterRender': function () {
			var _0x2d473e = this;
			_0x2d473e.callParent(arguments),
				window.addEventListener('message', function (_0x278f98) {
					typeof _0x278f98.data != 'undefined' && _0x278f98.data.opType === 'closeIframe' && _0x2d473e.fireEvent('continue');
				});
		}
	}),
	Ext.define('ans.videojs.CustomIframe', {
		'extend': 'Ext.container.Container',
		'cls': 'ans-customIframe',
		'autoScroll': true,
		'hidden': true,
		'hideMode': 'visibility',
		'constructor': function (_0x6ec80f) {
			var _0x509974 = this;
			_0x509974.callParent(arguments),
				_0x509974.supportHeartbeat = false,
				_0x509974.courseid = '',
				_0x509974.clazzId = '',
				_0x509974.knowledgeid = '',
				_0x509974.objectid = '',
				_0x509974.playTime = 0x0,
				_0x509974.requesting = false,
				_0x509974.eventArray = [],
				_0x509974.userId = '',
				_0x509974.cookieFid = '',
				_0x509974.headOffset = '',
				typeof _0x6ec80f.userId != 'undefined' && (_0x509974.userId = _0x6ec80f.userId),
				typeof _0x6ec80f.cookieFid != 'undefined' && (_0x509974.cookieFid = _0x6ec80f.cookieFid),
				typeof _0x6ec80f.headOffset != 'undefined' && (_0x509974.headOffset = _0x6ec80f.headOffset),
				typeof _0x6ec80f.eventArray != 'undefined' && (_0x509974.eventArray = _0x6ec80f.eventArray),
				typeof _0x6ec80f.supportHeartbeat != 'undefined' && (_0x509974.supportHeartbeat = _0x6ec80f.supportHeartbeat),
				typeof _0x6ec80f.courseid != 'undefined' && (_0x509974.courseid = _0x6ec80f.courseid),
				typeof _0x6ec80f.clazzId != 'undefined' && (_0x509974.clazzId = _0x6ec80f.clazzId),
				typeof _0x6ec80f.knowledgeid != 'undefined' && (_0x509974.knowledgeid = _0x6ec80f.knowledgeid),
				typeof _0x6ec80f.objectid != 'undefined' && (_0x509974.objectid = _0x6ec80f.objectid),
				_0x509974.lastHeartbeat = 0x0,
				_0x509974.lastShowIFrame = 0x0,
				_0x509974.objects = _0x6ec80f.objects && _0x6ec80f.objects.sort ? _0x509974.sort_(_0x6ec80f.objects) : [],
				_0x509974.eventArray.forEach(function (_0x48d67a) {
					var _0x4d6547 = parseInt(_0x48d67a.eventIntervalType);
					_0x4d6547 === 0x0 ? (_0x48d67a.lastHeartbeat = 0x0,
						_0x48d67a.pauseTimeRange = 0x0,
						_0x48d67a.pauseTimeStamp = -0x1,
						_0x48d67a.requesting = false) : _0x4d6547 === 0x1 && (_0x48d67a.timeArray = sortArray(_0x48d67a.timeArray),
							_0x48d67a.index = 0x0);
				});
		},
		'showIFrame': function (_0x3d82e3, _0x2b4c79, _0x48985c) {
			try {
				var _0x2b43e3 = this;
				parseInt(_0x2b4c79) === 0x1 ? _0x2b43e3.showObject(_0x3d82e3, 'customIframe', _0x48985c) : parseInt(_0x2b4c79) === 0x2 && showPopIframe(_0x48985c, _0x3d82e3);
			} catch (_0x557035) {
				console.log(_0x557035);
			}
		},
		'deleteTemporaryEvent': function () {
			try {
				this.eventArray.forEach(function (_0x34b328, _0xa930b0, _0x1a6494) {
					typeof _0x34b328.temporaryEvent != 'undefined' && _0x34b328.temporaryEvent && _0x1a6494.splice(_0xa930b0, 0x1);
				});
			} catch (_0x470948) {
				console.log(_0x470948);
			}
		},
		'initHeartbeat': function (_0x110bf1, _0x46bbed, _0x785eb5) {
			var _0x4c1770 = this;
			if (typeof _0x110bf1 == 'undefined' || _0x110bf1 == '')
				return;
			Ext.Ajax.request({
				'url': _0x110bf1,
				'params': {
					'uid': _0x4c1770.userId,
					'schoolId': _0x4c1770.cookieFid,
					'moocClassId': _0x4c1770.clazzId,
					'moocCourseId': _0x4c1770.courseid,
					'chapterId': _0x4c1770.knowledgeid,
					'objectId': _0x4c1770.objectid,
					'videoProgress': _0x4c1770.headOffset,
					'totalVideoDuration': window.duration,
					'enc': _0x4c1770.videoEnc
				},
				'method': 'get',
				'success': function (_0x52d06e) {
					try {
						var _0x26cf8f = eval('(' + _0x52d06e.responseText + ')');
						if (typeof _0x26cf8f.result !== 'undefined' && parseInt(_0x26cf8f.result) === 0x1) {
							if (_0x26cf8f.showPop && typeof _0x26cf8f.event != 'undefined') {
								var _0x47b835 = _0x26cf8f.event.url + '?uid=' + _0x4c1770.userId + '&schoolId=' + _0x4c1770.cookieFid + '&moocClassId=' + _0x4c1770.clazzId + '&moocCourseId=' + _0x4c1770.courseid + '&chapterId=' + _0x4c1770.knowledgeid + '&objectId=' + _0x4c1770.objectid + '&videoProgress=' + _0x4c1770.headOffset + '&totalVideoDuration=' + window.duration + '&enc=' + _0x4c1770.videoEnc, _0x16a530 = {
									'url': _0x47b835,
									'temporaryEvent': true,
									'eventInterval': 0x0,
									'eventType': _0x26cf8f.event.eventType,
									'eventIntervalType': 0x0,
									'requesting': false,
									'lastHeartbeat': 0x0
								};
								_0x4c1770.eventArray.push(_0x16a530);
							}
						} else
							typeof _0x26cf8f.errorCode != 'undefined' && alert('同步学习数据失败，错误码：' + _0x26cf8f.errorCode);
						typeof _0x785eb5 != 'undefined' && (_0x785eb5.requesting = false,
							console.log('requesting: false'));
					} catch (_0x1443cd) {
						console.log(_0x1443cd);
					}
				},
				'failure': function () {
					typeof _0x785eb5 != 'undefined' && (_0x785eb5.requesting = false),
						console.log('heartbeatUrl request error');
				}
			});
		},
		'seekVideoTime': function (_0x1f9edb, _0x3bcb7a) {
			try {
				var _0x29e981 = this;
				typeof _0x29e981.cmp != 'undefined' && _0x29e981.cmp != null && (_0x29e981.cmp.destroy(),
					_0x29e981.hide(),
					_0x1f9edb.eventCount = _0x1f9edb.eventCount - 0x1,
					_0x1f9edb.eventCount <= 0x0 && (_0x1f9edb.currentTime(_0x3bcb7a),
						_0x1f9edb.play()));
			} catch (_0x518435) {
				console.log(_0x518435);
			}
		},
		'showObject': function (_0x4a53f0, _0x362c2d, _0x13a36d) {
			var _0x4fc657 = this, _0xa22b4e = _0x4fc657.items.getAt(0x0), _0xd3671b, _0x3fd3a3 = function (_0x510be7) {
				_0xd3671b.destroy(),
					_0x4fc657.hide(),
					_0x510be7.eventCount = _0x510be7.eventCount - 0x1,
					_0x510be7.eventCount <= 0x0 && _0x510be7.play();
			};
			_0xa22b4e != null && _0xa22b4e.destroy();
			_0x4fc657.cmp = null;
			_0x362c2d == 'customIframe' && (_0xd3671b = _0x4fc657.add({
				'xtype': 'customIframe',
				'renderData': {
					'src': _0x13a36d
				}
			}),
				_0x4a53f0.eventCount += 0x1);
			if (!_0xd3671b)
				return;
			_0xd3671b.on('continue', function () {
				_0x3fd3a3(_0x4a53f0);
			});
			var _0x58249e = !(_0xd3671b.model === false);
			_0x4fc657.showModel(_0x58249e),
				_0x4fc657.cmp = _0xd3671b,
				_0x58249e && _0x4a53f0.pause();
		},
		'showModel': function (_0x22da93) {
			var _0x5639b5 = this;
			_0x5639b5.show(),
				_0x22da93 ? (_0x5639b5.removeCls('ans-timelineobjects-autosize'),
					_0x5639b5.setAutoScroll(true)) : (_0x5639b5.addCls('ans-timelineobjects-autosize'),
						_0x5639b5.setAutoScroll(false));
		},
		'hide': function () {
			this.callParent(arguments);
		},
		'updateTime': function (_0x44ea8d, _0x450c44) {
			try {
				if (this.supportHeartbeat && isStuViewPage() && !_0x44ea8d.paused()) {
					var _0x496d3e = new Date().getTime(), _0x35b774 = this, _0x21d78b = 0x0;
					for (var _0x126acc = 0x0; _0x126acc < _0x35b774.eventArray.length; _0x126acc++) {
						var _0x1d483e = _0x35b774.eventArray[_0x126acc], _0x22835b = parseInt(_0x1d483e.eventType), _0x2041e1 = parseInt(_0x1d483e.eventIntervalType);
						if (_0x2041e1 === 0x0) {
							if (_0x22835b === 0x0 && _0x1d483e.requesting || _0x44ea8d.scrubbing())
								continue;
							var _0x46e21a = _0x496d3e - _0x1d483e.lastHeartbeat;
							_0x1d483e.pauseTimeRange > 0x0 && (_0x46e21a = _0x46e21a - _0x1d483e.pauseTimeRange);
							var _0x5771b2 = _0x46e21a / 0x3e8;
							_0x5771b2 = parseInt(_0x5771b2);
							if (_0x5771b2 > _0x1d483e.eventInterval) {
								if (_0x22835b === 0x1 || _0x22835b === 0x2) {
									_0x21d78b++;
									if (_0x21d78b > 0x1)
										break;
								}
								_0x1d483e.pauseTimeRange = 0x0,
									_0x1d483e.lastHeartbeat = _0x496d3e,
									_0x22835b === 0x0 ? (_0x1d483e.requesting = true,
										_0x35b774.initHeartbeat(_0x1d483e.url, _0x44ea8d, _0x1d483e)) : (_0x22835b === 0x1 || _0x22835b === 0x2) && (_0x35b774.showIFrame(_0x44ea8d, _0x22835b, _0x1d483e.url),
											typeof _0x1d483e.temporaryEvent != 'undefined' && _0x1d483e.temporaryEvent && _0x35b774.deleteTemporaryEvent());
							}
						} else {
							if (_0x2041e1 === 0x1) {
								if (_0x1d483e.index >= _0x1d483e.timeArray.length || _0x44ea8d.scrubbing())
									continue;
								var _0x154874 = _0x1d483e.timeArray[_0x1d483e.index];
								if (typeof _0x154874 == 'undefined')
									continue;
								if (_0x450c44 >= parseInt(_0x154874)) {
									if (_0x22835b === 0x1 || _0x22835b === 0x2) {
										_0x21d78b++;
										if (_0x21d78b > 0x1)
											break;
									}
									_0x1d483e.index++;
									var _0x5b4718 = _0x1d483e.url;
									_0x22835b === 0x0 ? _0x35b774.initHeartbeat(_0x5b4718, _0x44ea8d) : (_0x22835b === 0x1 || _0x22835b === 0x2) && _0x35b774.showIFrame(_0x44ea8d, _0x22835b, _0x5b4718);
								}
							}
						}
					}
				}
			} catch (_0x4d0cc8) {
				console.log(_0x4d0cc8);
			}
		},
		'resetTime': function (_0x288496, _0x11dca9) {
			try {
				var _0x2168aa = this, _0x5710b0;
				for (_0x5710b0 = 0x0; _0x5710b0 < _0x2168aa.eventArray.length; _0x5710b0++) {
					var _0x549516 = _0x2168aa.eventArray[_0x5710b0];
					if (parseInt(_0x549516.eventIntervalType) === 0x1) {
						for (var _0x1d7858 = 0x0; _0x1d7858 < _0x549516.timeArray.length; _0x1d7858++) {
							var _0x5cb4dd = _0x549516.timeArray[_0x1d7858];
							if (_0x11dca9 <= _0x5cb4dd)
								break;
						}
						_0x549516.index = _0x1d7858;
					}
				}
			} catch (_0x17b0b2) {
				console.log(_0x17b0b2);
			}
		}
	});
function sortArray(_0x259c57) {
	try {
		return _0x259c57 && _0x259c57.sort && _0x259c57.sort(function (_0x36ef7a, _0x570db8) {
			return _0x36ef7a - _0x570db8;
		});
	} catch (_0x378203) {
		console.log(_0x378203);
	}
	return _0x259c57;
}
(function () {
	var _0x53cd7c = videojs.getPlugin('plugin'), _0x32a648 = videojs.extend(_0x53cd7c, {
		'constructor': function (_0x18ec38, _0x2a294e) {
			if (typeof _0x2a294e.supportHeartbeat == 'undefined' || !_0x2a294e.supportHeartbeat)
				return;
			_0x53cd7c.call(this, _0x18ec38, _0x2a294e),
				_0x18ec38.pauseTimeStamp = 0x0,
				_0x18ec38.pauseTimeRange = 0x0;
			var _0x1ec820 = null;
			try {
				_0x1ec820 = Ext.create('ans.videojs.CustomIframe', {
					'renderTo': _0x18ec38.el_,
					'supportHeartbeat': _0x2a294e.supportHeartbeat,
					'eventArray': _0x2a294e.eventArray,
					'courseid': _0x2a294e.courseid,
					'clazzId': _0x2a294e.clazzId,
					'knowledgeid': _0x2a294e.knowledgeid,
					'objectid': _0x2a294e.objectid,
					'videoEnc': _0x2a294e.videoEnc,
					'userId': _0x2a294e.userId,
					'cookieFid': _0x2a294e.cookieFid,
					'headOffset': _0x2a294e.headOffset
				});
			} catch (_0xe7e84) {
				console.log(_0xe7e84);
			}
			if (_0x1ec820 == null)
				return;
			_0x18ec38.on('play', function () {
				try {
					var _0x2e0966 = new Date().getTime();
					_0x1ec820.eventArray.forEach(function (_0x1e3947) {
						var _0x39ad03 = parseInt(_0x1e3947.eventIntervalType);
						if (_0x39ad03 === 0x0) {
							if (_0x1e3947.pauseTimeStamp > 0x0) {
								_0x1e3947.pauseTimeStamp < _0x1e3947.lastHeartbeat && (_0x1e3947.pauseTimeStamp = _0x1e3947.lastHeartbeat);
								var _0x7a92a1 = _0x2e0966 - _0x1e3947.pauseTimeStamp;
								_0x1e3947.pauseTimeRange += _0x7a92a1;
							}
							_0x1e3947.pauseTimeStamp = 0x0;
						}
					}),
						_0x1ec820.resetTime(_0x18ec38, _0x18ec38.currentTime());
				} catch (_0xe5975) {
					console.log(_0xe5975);
				}
			}),
				_0x18ec38.on('seekend', function () {
					_0x1ec820.resetTime(_0x18ec38, _0x18ec38.currentTime());
				}),
				_0x18ec38.on('pause', function () {
					try {
						var _0x359fcb = new Date().getTime();
						_0x1ec820.eventArray.forEach(function (_0x1886da) {
							var _0x289d42 = parseInt(_0x1886da.eventIntervalType);
							_0x289d42 === 0x0 && (_0x1886da.pauseTimeStamp = _0x359fcb);
						});
					} catch (_0x41848f) {
						console.log(_0x41848f);
					}
				}),
				_0x18ec38.on('timeupdate', function () {
					try {
						!_0x18ec38.paused() && _0x1ec820.updateTime(_0x18ec38, parseInt(_0x18ec38.currentTime())),
							_0x1ec820.playTime = _0x18ec38.currentTime();
					} catch (_0x882a9b) {
						console.log(_0x882a9b);
					}
				}),
				window.addEventListener('message', function (_0x2b53ac) {
					try {
						if (!_0x2a294e.supportHeartbeat || !isStuViewPage())
							return;
						var _0x569365 = _0x2b53ac.data;
						if (typeof _0x569365 == 'undefined') {
							_0x1ec820.resetDiv(_0x18ec38);
							return;
						}
						var _0x1339fb = parseInt(_0x2a294e.duration);
						if (_0x569365.opType === 'fastForward') {
							var _0xacd88d = _0x569365.value;
							if (typeof _0xacd88d === 'undefined') {
								_0x1ec820.resetDiv(_0x18ec38);
								return;
							}
							_0xacd88d = parseInt(_0xacd88d);
							if (!(_0xacd88d > 0x0)) {
								_0x1ec820.resetDiv(_0x18ec38);
								return;
							}
							_0x18ec38.ignoreSeek = false,
								_0x18ec38.switchStatus = true;
							var _0x528ee6 = _0x18ec38.currentTime();
							_0x528ee6 = parseInt(_0x528ee6);
							var _0x2124fe = _0x528ee6 + _0xacd88d;
							if (_0x2124fe > _0x1339fb) {
								_0x1ec820.resetDiv(_0x18ec38);
								return;
							}
							_0x1ec820.seekVideoTime(_0x18ec38, _0x2124fe);
							return;
						}
						if (_0x569365.opType === 'videoStartTime') {
							var _0xacd88d = _0x569365.value;
							if (typeof _0xacd88d === 'undefined') {
								_0x1ec820.resetDiv(_0x18ec38);
								return;
							}
							_0xacd88d = parseInt(_0xacd88d);
							if (!(_0xacd88d >= 0x0) || _0xacd88d > _0x1339fb) {
								_0x1ec820.resetDiv(_0x18ec38);
								return;
							}
							_0x18ec38.ignoreSeek = false,
								_0x18ec38.switchStatus = true,
								_0x1ec820.seekVideoTime(_0x18ec38, _0xacd88d);
						}
					} catch (_0xc79a89) {
						console.log(_0xc79a89);
					}
				});
		}
	});
	videojs.registerPlugin('customIframePlugin', _0x32a648);
}()),
	(function () {
		var _0x3150fa = videojs.getPlugin('plugin'), _0x387229 = videojs.extend(_0x3150fa, {
			'constructor': function (_0x38f013, _0x2c02f6) {
				_0x3150fa.call(this, _0x38f013, _0x2c02f6);
				if (!_0x2c02f6.url)
					return;
				var _0x495d98 = this;
				Ext.Ajax.request({
					'url': _0x2c02f6.url,
					'async': false,
					'success': function (_0x47a3fb) {
						if (_0x47a3fb.status != 0xc8)
							return;
						eval('var data=' + _0x47a3fb.responseText);
						if (!data.status)
							return;
						var _0x17fcae = videojs('video');
						if (_0x17fcae && typeof _0x17fcae.markers === 'function') {
							var _0x7cf7dc = _0x38f013.eventPoints;
							_0x7cf7dc.push.apply(_0x7cf7dc, data.list),
								_0x17fcae.markers({
									'markerTip': {
										'display': true,
										'text': function (_0x17d0db) {
											return _0x17d0db.text;
										}
									},
									'markers': _0x7cf7dc,
									'onMarkerClick': function (_0x17377d) {
										if (_0x2c02f6.ff != 0x1)
											return false;
										var _0xf7468a = $(this).data('marker-key');
										return _0x38f013.currentTime(_0x17377d.time),
											false;
									}
								});
						}
						if (data.list && data.list.length > 0x0) {
							var _0xcb5626 = [], _0x5718e0 = {};
							for (var _0x218073 = 0x0; _0x218073 < data.list.length; _0x218073++) {
								var _0x441a14 = data.list[_0x218073], _0x445317 = _0x441a14.text;
								if (!_0x5718e0[_0x445317]) {
									var _0x3053c2 = [];
									_0x3053c2.push(_0x441a14),
										_0x5718e0[_0x445317] = _0x3053c2,
										_0xcb5626.push(_0x445317);
								} else {
									var _0x38450d = _0x5718e0[_0x445317];
									_0x38450d.push(_0x441a14),
										_0x5718e0[_0x445317] = _0x38450d;
								}
							}
							function _0x3112a3(_0x377e5f) {
								var _0x29d275 = '<div class=\x22zsCloud_box\x22><h2 class=\x22zsCloud_seltime\x22>选择时间</h2><div class=\x22zsCloud_div\x22><div class=\x22zsCloud_div_list\x22>';
								for (var _0x35dfa4 = 0x0; _0x35dfa4 < _0x377e5f.length; _0x35dfa4++) {
									var _0x15685c = _0x377e5f[_0x35dfa4], _0x2318fe = Ext.fly(_0x3b4180.elements[0x0]).select('.topicId' + _0x15685c.topicid + ':not(.markertime)'), _0x1c6826 = videojs.formatTime(_0x15685c.time);
									_0x2318fe && _0x2318fe.elements[0x0] && _0x2318fe.elements[0x0].parentElement.remove(),
										_0x29d275 += '<div class="zsCloud_item topicId' + _0x15685c.topicid + '" data-marker-time="' + _0x15685c.time + '" title="' + _0x1c6826 + '\x22 onclick=\x22markersPlayer(this)\x22>' + _0x1c6826 + '</div>';
								}
								return _0x29d275 += '</div></div></div>',
									_0x29d275;
							}
							Ext.select('.zsCloud').setStyle('display', 'block');
							var _0x3b4180 = Ext.select('.zsCloud_ul');
							if (_0x3b4180 && _0x3b4180.elements[0x0]) {
								var _0x1e817e;
								for (var _0x570588 = 0x0; _0x570588 < _0xcb5626.length; _0x570588++) {
									var _0x3f6bb3 = _0xcb5626[_0x570588], _0x1667ab = _0x5718e0[_0x3f6bb3], _0x56f18f = '';
									if (_0x1667ab) {
										if (_0x1667ab.length == 0x1) {
											var _0x3c14b7 = _0x1667ab[0x0], _0x51a120 = Ext.fly(_0x3b4180.elements[0x0]).select('.topicId' + _0x3c14b7.topicid + ':not(.markertime)'), _0x5e68b0 = videojs.formatTime(_0x3c14b7.time);
											_0x51a120 && _0x51a120.elements[0x0] && _0x51a120.elements[0x0].parentElement.remove(),
												_0x56f18f = '<li><span class=\x27topicId' + _0x3c14b7.topicid + ' markertime\x27 data-marker-time=\x27' + _0x3c14b7.time + '\x27 title=\x27' + _0x5e68b0 + '\x27 onclick=\x27markersPlayer(this)\x27>' + _0x3c14b7.text + '</span></li>';
										} else
											_0x56f18f = '<li class="zsCloud_select"><span class="zsCloud_span">' + _0x3f6bb3 + '</span>',
												_0x1667ab && _0x1667ab.length > 0x0 ? _0x56f18f += _0x3112a3(_0x1667ab) : _0x56f18f += '</li>';
									}
									_0x1e817e ? _0x1e817e = Ext.DomHelper.insertHtml('afterEnd', _0x1e817e.elements[0x0], _0x56f18f) : _0x1e817e = Ext.DomHelper.insertHtml('afterBegin', _0x3b4180.elements[0x0], _0x56f18f),
										_0x1e817e = Ext.fly(_0x1e817e).select('');
								}
							}
							_0x2c02f6.videoTopicCloud && _0x2c02f6.videoTopicCloud == 0x1 && (Ext.select('.zsCloud_down').setStyle('display', 'block'),
								Ext.select('.zsCloud_body').setStyle('display', 'block'));
						}
						var _0x3abacb = new Map(), _0x498f9e = new Array();
						if (data.list && data.list.length > 0x0)
							for (var _0x218073 = 0x0; _0x218073 < data.list.length; _0x218073++) {
								var _0x3b2246 = data.list[_0x218073].topicid, _0x3e0e0f = _0x3abacb.get(_0x3b2246);
								!_0x3e0e0f && (_0x3e0e0f = {},
									_0x3e0e0f.text = data.list[_0x218073].text,
									_0x3e0e0f.time = data.list[_0x218073].time,
									_0x3e0e0f.topicid = data.list[_0x218073].topicid,
									_0x3e0e0f.weight = 0x0,
									_0x3e0e0f.html = {
										'data-marker-time': data.list[_0x218073].time,
										'onclick': 'markersPlayer(this)'
									},
									_0x3abacb.set(_0x3b2246, _0x3e0e0f),
									_0x498f9e.push(_0x3e0e0f)),
									_0x3e0e0f.weight += 0x1;
							}
						$(function () {
							_0x498f9e.length != 0x0 && $('#word_cloud').jQCloud(_0x498f9e);
							function _0x27d309(_0x2181b9) {
								$(_0x2181b9).niceScroll({
									'cursorborder': '',
									'cursorwidth': 0x8,
									'cursorcolor': '#DADFE6',
									'boxzoom': false,
									'autohidemode': true
								}),
									setInterval(function () {
										$(_0x2181b9).getNiceScroll().resize();
									}, 0x12c);
							}
							$('.zsCloud_box').each(function (_0x3b7f95) {
								$(this).find('.zsCloud_div').attr('id', 'zsCloud_div_' + _0x3b7f95),
									_0x27d309('#zsCloud_div_' + _0x3b7f95);
							});
						}),
							$('.zsCloud_down').click(function () {
								var _0x4c1a81 = $('.zsCloud_body');
								_0x4c1a81.is(':visible') ? (_0x4c1a81.hide(),
									$(this).addClass('zsCloud_up'),
									$(this).text('展开')) : (_0x4c1a81.show(),
										$(this).removeClass('zsCloud_up'),
										$(this).text('收起'));
							});
					}
				});
			}
		});
		videojs.registerPlugin('marker', _0x387229);
	}()),
	(function () {
		var _0x1307d0 = videojs.getPlugin('plugin'), _0x381765 = videojs.extend(_0x1307d0, {
			'constructor': function (_0x21abf4, _0x3147d3) {
				_0x1307d0.call(this, _0x21abf4, _0x3147d3);
				var _0xedb578 = this, _0x4ebbe3 = _0x3147d3.subtitleUrl, _0x3d0158 = function (_0x59ce0b) {
					var _0x5cd7ea = _0x59ce0b.match(/support\/(\w+).\w+/);
					if (_0x5cd7ea)
						return ServerHosts.PARENT_HOST + '/ananas/video-editor/sub?objectid=' + _0x5cd7ea[0x1];
				}, _0x55861a = function (_0x1271b0, _0x33288c, _0x7a899e) {
					_0x21abf4.addRemoteTextTrack({
						'kind': 'subtitles',
						'srclang': 'cn',
						'label': _0x1271b0,
						'src': _0x33288c,
						'default': _0x7a899e
					}, true);
				};
				_0x21abf4.ready(function () {
					_0x4ebbe3 && Ext.Ajax.request({
						'url': _0x4ebbe3,
						'success': function (_0x18e8a7) {
							if (_0x18e8a7.status != 0xc8)
								return;
							eval('var subs=' + _0x18e8a7.responseText);
							var _0x364134 = 0x0, _0x3f2fed = 0x0;
							subs.length > 0x0 && Ext.each(subs, function (_0x3a8763) {
								_0x3147d3.translate == 0x1 && _0x3a8763.name == 'English' ? (_0x3a8763.selected = true,
									_0x3f2fed = _0x364134) : _0x3a8763.selected = false,
									_0x55861a(_0x3a8763.name, _0x3d0158(_0x3a8763.url), _0x3a8763.selected),
									_0x364134++;
							}),
								_0x3147d3.translate == 0x1 && (Ext.select('.vjs-subs-caps-button .vjs-icon-placeholder').setHTML('翻译'),
									Ext.select('.vjs-subs-caps-button .vjs-icon-placeholder').addCls('vjs-hide-content')),
								setTimeout(function () {
									_0x3147d3.translate == 0x1 ? _0x4a2d7a && _0x4a2d7a[_0x3f2fed] ? _0x4a2d7a[_0x3f2fed].mode = 'showing' : _0x4a2d7a && _0x4a2d7a[0x0] && (_0x4a2d7a[0x0].mode = 'showing') : _0x4a2d7a && _0x4a2d7a[0x0] && (_0x4a2d7a[0x0].mode = 'showing');
								}, 0x1f4);
						}
					});
					var _0x391119 = _0x21abf4.textTrackSettings;
					_0x391119.setValues({
						'backgroundColor': '#000',
						'backgroundOpacity': '0',
						'edgeStyle': 'uniform'
					}),
						_0x391119.updateDisplay();
				});
			}
		});
		videojs.registerPlugin('subtitle', _0x381765);
	}()),
	Ext.define('ans.videojs.ErrorDisplay', {
		'extend': 'Ext.Component',
		'xtype': 'vjserrdisplay',
		'cls': 'ans-vjserrdisplay',
		'renderTpl': ['<div class=\x22ans-vjserrdisplay-title\x22>{errorMsg}</div>', '<ul class="ans-vjserrdisplay-opts">', '您可以尝试其他线路:', '<tpl for=\x22playlines\x22>', '<li class="ans-vjserrdisplay-opt"><label>', '<input type="radio" name="ans-vjserrdisplay-opt" {[xindex-1 === parent.selectedIndex ? "checked disabled":""]}>', '{label}', '</label></li>', '</tpl>', '</ul>'],
		'renderSelectors': {
			'errorMsgEl': 'div.ans-vjserrdisplay-title'
		},
		'afterRender': function () {
			var _0x4e5eb1 = this;
			_0x4e5eb1.callParent(arguments);
			var _0x422496 = Ext.query('input', _0x4e5eb1.el.dom);
			Ext.each(_0x422496, function (_0x27bac4, _0x4e3415) {
				Ext.fly(_0x27bac4).on('click', function () {
					_0x4e5eb1.onSelected(_0x4e3415);
				});
			});
			try {
				typeof createVideoTask === 'function' ? createVideoTask() : console.log('createVideoTask函数不存在！');
			} catch (_0x4635c4) { }
			try {
				if (typeof aplus_queue != 'undefined') {
					var _0x5ae634 = parent.AttachmentSetting;
					if (_0x5ae634) {
						var _0x215082 = _0x5ae634.aplus_video_id, _0x223ee1 = _0x5ae634.aplus_resource_id, _0xefa2a3 = _0x5ae634.knowledgename, _0x41c8ec = _0x5ae634.coursename;
						aplus_queue.push({
							'action': 'aplus.record',
							'arguments': ['pybk_error', 'OTHER', {
								'video_name': _0xefa2a3,
								'video_id': _0x215082,
								'resource_id': _0x223ee1,
								'resource_name': _0x41c8ec
							}]
						});
					}
				}
			} catch (_0x22fcb4) { }
		},
		'setErrorMsg': function (_0x54249d) {
			Ext.fly(this.errorMsgEl).setHTML(_0x54249d);
		}
	}),
	Ext.define('ans.videojs.ErrorNote', {
		'extend': 'Ext.Component',
		'cls': 'ans-vjserrdisplay',
		'renderTpl': ['<div class="ans-vjserrdisplay-title">播放出现异常。</div>']
	}),
	(function () {
		var _0x2c5f1b = videojs.getComponent('ErrorDisplay'), _0x521e82 = videojs.extend(_0x2c5f1b, {
			'constructor': function (_0x52f929, _0x2c7d4c) {
				_0x2c5f1b.call(this, _0x52f929, _0x2c7d4c);
			},
			'colse': function () {
				_0x2c5f1b.prototype.colse.call(this),
					me.ansErrorDisplay && (me.ansErrorDisplay.destroy(),
						me.ansErrorDisplay = null);
			},
			'fill': function () {
				_0x2c5f1b.prototype.fill.call(this);
				var _0x152284 = this, _0x103dc0 = _0x152284.player_, _0x5ef1f0 = _0x103dc0.options_.playlines, _0x5a1541 = Ext.query('.vjs-modal-dialog-content', _0x152284.el_)[0x0];
				_0x152284.ansErrorDisplay && (_0x152284.ansErrorDisplay.destroy(),
					delete _0x152284.ansErrorDisplay);
				if (!_0x103dc0.selectCDN || !_0x5ef1f0) {
					_0x152284.ansErrorDisplay = Ext.create('ans.videojs.ErrorNote', {
						'renderTo': _0x152284.el_
					});
					return;
				}
				var _0x2d6f72 = _0x103dc0.currentPlayline(), _0x9234ab = 0x0;
				Ext.each(_0x5ef1f0, function (_0x16c821, _0x41b88e) {
					_0x2d6f72 == _0x16c821 && (_0x9234ab = _0x41b88e);
				}),
					_0x152284.ansErrorDisplay = Ext.create('ans.videojs.ErrorDisplay', {
						'renderTo': _0x152284.el_,
						'onSelected': function (_0x33ed0a) {
							_0x103dc0.selectCDN(_0x33ed0a),
								_0x152284.close();
						},
						'renderData': {
							'playlines': _0x5ef1f0,
							'errorMsg': _0x152284.content(),
							'selectedIndex': _0x9234ab
						}
					});
			}
		});
		videojs.registerComponent('ErrorDisplay', _0x521e82);
	}()),
	(function () {
		var _0x374e65 = null;
		typeof window.videojs === 'undefined' && typeof require === 'function' ? _0x374e65 = require('video.js') : _0x374e65 = window.videojs,
			function (_0x199c28, _0x1b2081) {
				var _0x2a9511 = {}, _0x34215e, _0x55a248 = {}, _0x472f8d = {};
				function _0x5507b1(_0x55d4ce, _0x3f43eb, _0x2b173a, _0x8afc53) {
					_0x55a248 = {
						'label': _0x2b173a,
						'sources': _0x3f43eb
					};
					if (typeof _0x8afc53 === 'function')
						return _0x8afc53(_0x55d4ce, _0x3f43eb, _0x2b173a);
					return _0x55d4ce.src(_0x3f43eb.map(function (_0x16fe40) {
						return {
							'src': _0x16fe40.src,
							'type': _0x16fe40.type,
							'res': _0x16fe40.res
						};
					})),
						_0x55d4ce;
				}
				var _0xa58a5d = _0x1b2081.getComponent('MenuItem'), _0x24c399 = _0x1b2081.extend(_0xa58a5d, {
					'constructor': function (_0x21b76c, _0x233b25, _0x96ce51, _0x4b0a78) {
						this.onClickListener = _0x96ce51,
							this.label = _0x4b0a78,
							_0xa58a5d.call(this, _0x21b76c, _0x233b25),
							this.src = _0x233b25.src,
							this.on('click', this.onClick),
							this.on('touchstart', this.onClick),
							_0x233b25.initialySelected && (this.showAsLabel(),
								this.selected(true),
								this.addClass('vjs-selected'));
					},
					'showAsLabel': function () {
						this.label && (this.label.innerHTML = this.options_.label);
					},
					'onClick': function (_0x5aaa46) {
						this.onClickListener(this);
						var _0x5966bc = this.player_.currentTime(), _0x5e1b51 = this.player_.paused();
						this.showAsLabel(),
							this.addClass('vjs-selected');
						!_0x5e1b51 && this.player_.bigPlayButton.hide();
						typeof _0x5aaa46 !== 'function' && typeof this.options_.customSourcePicker === 'function' && (_0x5aaa46 = this.options_.customSourcePicker);
						var _0x45402e = 'loadeddata';
						this.player_.techName_ !== 'Youtube' && this.player_.preload() === 'none' && this.player_.techName_ !== 'Flash' && (_0x45402e = 'timeupdate'),
							_0x5507b1(this.player_, this.src, this.options_.label, _0x5aaa46).one(_0x45402e, function () {
								var _0x22cb11 = this.player_;
								_0x22cb11.switchStatus = true,
									_0x22cb11.currentTime(_0x5966bc),
									!_0x5e1b51 && _0x22cb11.play(),
									_0x22cb11.trigger('resolutionchange');
							});
					}
				});
				_0x1b2081.registerComponent('ResolutionMenuItem', _0x24c399);
				var _0x494348 = _0x1b2081.getComponent('MenuButton'), _0x17d40f = _0x1b2081.extend(_0x494348, {
					'constructor': function (_0x4f5b4f, _0x53211b, _0x4c5ef2, _0x4f8c12) {
						this.sources = _0x53211b.sources,
							this.label = _0x4f8c12,
							this.label.innerHTML = _0x53211b.initialySelectedLabel,
							_0x494348.call(this, _0x4f5b4f, _0x53211b, _0x4c5ef2),
							this.controlText('Quality');
						if (_0x4c5ef2.dynamicLabel)
							this.el().appendChild(_0x4f8c12);
						else {
							var _0x137fac = document.createElement('span');
							_0x1b2081.dom.addClass(_0x137fac, 'vjs-resolution-button-staticlabel'),
								this.el().appendChild(_0x137fac);
						}
					},
					'createItems': function () {
						var _0x568a86 = [], _0x2c09ef = this.sources && this.sources.label || {}, _0x1a136b = function (_0x4e64e8) {
							_0x568a86.map(function (_0x19a372) {
								_0x19a372.selected(_0x19a372 === _0x4e64e8),
									_0x19a372.removeClass('vjs-selected');
							});
						};
						for (var _0x137096 in _0x2c09ef) {
							_0x2c09ef.hasOwnProperty(_0x137096) && (_0x568a86.push(new _0x24c399(this.player_, {
								'label': _0x137096,
								'src': _0x2c09ef[_0x137096],
								'initialySelected': _0x137096 === this.options_.initialySelectedLabel,
								'customSourcePicker': this.options_.customSourcePicker
							}, _0x1a136b, this.label)),
								_0x472f8d[_0x137096] = _0x568a86[_0x568a86.length - 0x1]);
						}
						return _0x568a86;
					}
				});
				_0x34215e = function (_0x5960bf) {
					var _0x5101a3 = _0x1b2081.mergeOptions(_0x2a9511, _0x5960bf), _0x1c53ff = this, _0x2186ae = document.createElement('span'), _0x4e9c9d = {};
					_0x1b2081.dom.addClass(_0x2186ae, 'vjs-resolution-button-label'),
						_0x1c53ff.updateSrc = function (_0x150f3a) {
							if (!_0x150f3a)
								return _0x1c53ff.src();
							_0x1c53ff.controlBar.resolutionSwitcher && (_0x1c53ff.controlBar.resolutionSwitcher.dispose(),
								delete _0x1c53ff.controlBar.resolutionSwitcher);
							_0x150f3a = _0x150f3a.sort(_0x27a1ad),
								_0x4e9c9d = _0x590c96(_0x150f3a);
							var _0x295fa7 = _0x162274(_0x4e9c9d, _0x150f3a), _0x348fac = new _0x17d40f(_0x1c53ff, {
								'sources': _0x4e9c9d,
								'initialySelectedLabel': _0x295fa7.label,
								'initialySelectedRes': _0x295fa7.res,
								'customSourcePicker': _0x5101a3.customSourcePicker
							}, _0x5101a3, _0x2186ae);
							return _0x1b2081.dom.addClass(_0x348fac.el(), 'vjs-resolution-button'),
								_0x1c53ff.controlBar.resolutionSwitcher = _0x1c53ff.controlBar.el_.insertBefore(_0x348fac.el_, _0x1c53ff.controlBar.getChild('fullscreenToggle').el_),
								_0x1c53ff.controlBar.resolutionSwitcher.dispose = function () {
									this.parentNode.removeChild(this);
								},
								_0x5507b1(_0x1c53ff, _0x295fa7.sources, _0x295fa7.label, _0x5101a3.customSourcePicker);
						},
						_0x1c53ff.currentResolution = function (_0x4a7f35, _0x2c03d9) {
							if (_0x4a7f35 == null)
								return _0x55a248;
							return _0x472f8d[_0x4a7f35] != null && _0x472f8d[_0x4a7f35].onClick(_0x2c03d9),
								_0x1c53ff;
						},
						_0x1c53ff.getGroupedSrc = function () {
							return _0x4e9c9d;
						};
					function _0x27a1ad(_0x164424, _0x19eb72) {
						if (!_0x164424.res || !_0x19eb72.res)
							return 0x0;
						return +_0x19eb72.res - +_0x164424.res;
					}
					function _0x590c96(_0x7c6f65) {
						var _0x18bcc7 = {
							'label': {},
							'res': {},
							'type': {}
						};
						return _0x7c6f65.map(function (_0x2413fa) {
							_0x25bda4(_0x18bcc7, 'label', _0x2413fa),
								_0x25bda4(_0x18bcc7, 'res', _0x2413fa),
								_0x25bda4(_0x18bcc7, 'type', _0x2413fa),
								_0x50070a(_0x18bcc7, 'label', _0x2413fa),
								_0x50070a(_0x18bcc7, 'res', _0x2413fa),
								_0x50070a(_0x18bcc7, 'type', _0x2413fa);
						}),
							_0x18bcc7;
					}
					function _0x25bda4(_0x2fc26c, _0x476f43, _0x58cc11) {
						_0x2fc26c[_0x476f43][_0x58cc11[_0x476f43]] == null && (_0x2fc26c[_0x476f43][_0x58cc11[_0x476f43]] = []);
					}
					function _0x50070a(_0x2325a9, _0x5cf096, _0x1fe09f) {
						_0x2325a9[_0x5cf096][_0x1fe09f[_0x5cf096]].push(_0x1fe09f);
					}
					function _0x162274(_0x255572, _0x1a9f3a) {
						var _0x1fbd99 = _0x5101a3.default, _0x1fea46 = '';
						return _0x1fbd99 === 'high' ? (_0x1fbd99 = _0x1a9f3a[0x0].res,
							_0x1fea46 = _0x1a9f3a[0x0].label) : _0x1fbd99 === 'low' || _0x1fbd99 == null || !_0x255572.res[_0x1fbd99] ? (_0x1fbd99 = _0x1a9f3a[_0x1a9f3a.length - 0x1].res,
								_0x1fea46 = _0x1a9f3a[_0x1a9f3a.length - 0x1].label) : _0x255572.res[_0x1fbd99] && (_0x1fea46 = _0x255572.res[_0x1fbd99][0x0].label),
						{
							'res': _0x1fbd99,
							'label': _0x1fea46,
							'sources': _0x255572.res[_0x1fbd99]
						};
					}
					_0x1c53ff.ready(function () {
						_0x1c53ff.options_.sources.length > 0x0 && _0x1c53ff.setTimeout(function () {
							_0x1c53ff.updateSrc(_0x1c53ff.options_.sources);
						}, 0x1);
					});
				},
					_0x1b2081.registerPlugin('videoJsResolutionSwitcher', _0x34215e);
			}(window, _0x374e65);
	}()),
	(function () {
		(function (_0x33a764, _0x19a816) {
			var _0x2cabf4 = {}, _0x40033c, _0x55cacb = {}, _0x100017 = {};
			function _0x360645(_0x290e0f, _0x2d8ce7, _0x1e321e, _0x20678e) {
				_0x55cacb = _0x2d8ce7;
				if (typeof _0x20678e === 'function')
					return _0x20678e(_0x290e0f, _0x2d8ce7, _0x1e321e);
				return _0x290e0f;
			}
			var _0x174178 = _0x19a816.getComponent('ResolutionMenuItem'), _0x39ab35 = _0x19a816.extend(_0x174178, {
				'onClick': function (_0x27ed4e) {
					this.onClickListener(this);
					var _0x206aff = this.player_.currentTime(), _0x23eb72 = this.player_.paused();
					this.showAsLabel(),
						this.addClass('vjs-selected');
					!_0x23eb72 && this.player_.bigPlayButton.hide();
					typeof _0x27ed4e !== 'function' && typeof this.options_.customSourcePicker === 'function' && (_0x27ed4e = this.options_.customSourcePicker);
					var _0x34e1f6 = 'loadeddata';
					this.player_.techName_ !== 'Youtube' && this.player_.preload() === 'none' && this.player_.techName_ !== 'Flash' && (_0x34e1f6 = 'timeupdate');
					var _0x54eade = _0x360645(this.player_, this.src, this.options_.label, _0x27ed4e);
					_0x54eade && _0x54eade.one(_0x34e1f6, function () {
						_0x54eade.switchStatus = true,
							_0x54eade.currentTime(_0x206aff),
							!_0x23eb72 && _0x54eade.play(),
							_0x54eade.trigger('playlinechange');
					});
				}
			}), _0x452b2e = _0x19a816.getComponent('MenuButton'), _0x1084d0 = _0x19a816.extend(_0x452b2e, {
				'constructor': function (_0x339fb5, _0xf33252, _0x365b37, _0x1c322a) {
					this.playlines = _0xf33252.playlines,
						this.label = _0x1c322a,
						this.label.innerHTML = _0xf33252.initialySelectedLabel,
						_0x452b2e.call(this, _0x339fb5, _0xf33252, _0x365b37),
						this.controlText('Playline');
					if (_0x365b37.dynamicLabel)
						this.el().appendChild(_0x1c322a);
					else {
						var _0x20d8f2 = document.createElement('span');
						_0x19a816.addClass(_0x20d8f2, 'vjs-resolution-button-staticlabel'),
							this.el().appendChild(_0x20d8f2);
					}
				},
				'createItems': function () {
					var _0x712e0a = [], _0x128bf7 = this.playlines || [], _0x5e761c = function (_0x354414) {
						_0x712e0a.map(function (_0x1c033b) {
							_0x1c033b.selected(_0x1c033b === _0x354414),
								_0x1c033b.removeClass('vjs-selected');
						});
					};
					for (var _0x2329e5 = 0x0; _0x2329e5 < _0x128bf7.length; _0x2329e5++) {
						var _0x29c521 = _0x128bf7[_0x2329e5].label;
						_0x712e0a.push(new _0x39ab35(this.player_, {
							'label': _0x29c521,
							'src': _0x128bf7[_0x2329e5],
							'initialySelected': _0x29c521 === this.options_.initialySelectedLabel,
							'customSourcePicker': this.options_.customSourcePicker
						}, _0x5e761c, this.label)),
							_0x100017[_0x29c521] = _0x712e0a[_0x712e0a.length - 0x1];
					}
					return _0x712e0a;
				}
			});
			_0x40033c = function (_0x2927d3) {
				var _0x456a98 = _0x19a816.mergeOptions(_0x523b42, _0x2927d3), _0x19b8c5 = this, _0x21583a = document.createElement('span'), _0x452b86 = _0x19b8c5.options_.playlines, _0x523b42 = _0x456a98.defaults;
				_0x19a816.dom.addClass(_0x21583a, 'vjs-resolution-button-label');
				var _0x1613d1 = new _0x1084d0(_0x19b8c5, {
					'playlines': _0x452b86,
					'initialySelectedLabel': _0x523b42 ? _0x523b42.label : _0x452b86[0x0].label,
					'initialySelectedUrl': _0x523b42 ? _0x523b42.url : _0x452b86[0x0].url,
					'customSourcePicker': _0x456a98.customSourcePicker
				}, _0x456a98, _0x21583a);
				_0x19a816.dom.addClass(_0x1613d1.el(), 'vjs-resolution-button'),
					_0x19a816.dom.addClass(_0x1613d1.el(), 'vjs-playline-button'),
					_0x1613d1.show(),
					_0x19b8c5.selectCDN = function (_0x40ceef) {
						_0x1613d1.items[_0x40ceef].onClick(_0x456a98.customSourcePicker),
							_0x19b8c5.play();
					},
					_0x452b86.length > 0x0 && (_0x523b42 ? _0x55cacb = _0x523b42 : _0x55cacb = _0x452b86[0x0]),
					_0x19b8c5.currentPlayline = function () {
						return _0x55cacb;
					},
					_0x19b8c5.ready(function () {
						_0x19b8c5.controlBar.videoJsPlayLine = _0x19b8c5.controlBar.el_.insertBefore(_0x1613d1.el_, _0x19b8c5.controlBar.getChild('fullscreenToggle').el_),
							_0x19b8c5.controlBar.videoJsPlayLine.dispose = function () {
								this.parentNode.removeChild(this);
							};
					});
			},
				_0x19a816.registerPlugin('videoJsPlayLine', _0x40033c);
		}(window, videojs));
	}()),
	Ext.define('ans.AudioJs', {
		'videoJs': null,
		'mixins': {
			'observable': 'Ext.util.Observable'
		},
		'constructor': function (_0x3414b4) {
			_0x3414b4 = _0x3414b4 || {};
			var _0x2b156a = this;
			_0x2b156a.addEvents(['seekstart']),
				_0x2b156a.mixins.observable.constructor.call(_0x2b156a, _0x3414b4);
			var _0xcebb13 = videojs(_0x3414b4.videojs, _0x2b156a.params2VideoOpt(_0x3414b4.params), function () { });
			Ext.fly(_0x3414b4.videojs).on('contextmenu', function (_0x596e9c) {
				_0x596e9c.preventDefault();
			}),
				Ext.fly(_0x3414b4.videojs).on('keydown', function (_0x480e19) {
					(_0x480e19.keyCode == 0x20 || _0x480e19.keyCode == 0x25 || _0x480e19.keyCode == 0x27) && _0x480e19.preventDefault(),
						_0x480e19.keyCode == 0x20 && (_0xcebb13.paused() ? _0xcebb13.play() : _0xcebb13.pause());
				});
		},
		'params2VideoOpt': function (_0x35bbdd) {
			var _0x30e6cc = [];
			!_0x35bbdd.rootPath && (_0x35bbdd.rootPath = '');
			_0x35bbdd.http && _0x30e6cc.push({
				'src': _0x35bbdd.http,
				'type': 'audio/mp3'
			});
			var _0x56eabd = function (_0x3a703c, _0x4c2301, _0x1e97a6) {
				var _0x4d7e4c = this;
				!_0x4d7e4c.logCount && (_0x4d7e4c.logCount = 0x0),
					videojs.xhr({
						'uri': _0x4c2301,
						'headers': {
							'Content-Type': 'application/json'
						}
					}, function (_0x572791, _0x368eef) {
						_0x4d7e4c.logCount++;
						if (_0x368eef.statusCode == 0xc8) {
							_0x4d7e4c.logCount = 0x0;
							if (_0x368eef.body.indexOf('isPassed') < 0x0) {
								window.parent && window.parent.location.reload();
								return;
							}
							eval('var d=' + _0x368eef.body);
							d.isPassed && _0x1e97a6();
							return;
						}
						_0x4d7e4c.logCount >= 0x4 && (_0x4d7e4c.logCount = 0x0,
							_0x3a703c.pause(),
							_0x368eef.statusCode != 0x0 ? alert('服务繁忙，不能保证您能否正常完成任务，请您稍后继续...(e:' + _0x368eef.statusCode + ')') : alert('您的网络不稳定，请您稍后继续...'));
					});
			}, _0x5dac98 = function (_0xee52fb, _0x281d55, _0xedaac7, _0xcd9774) {
				if (!_0x35bbdd.reportUrl)
					return;
				if (_0x35bbdd.isFiled == 0x1 || _0x35bbdd.state == 0x1)
					return;
				var _0x3c0b70 = '[{0}][{1}][{2}][{3}][{4}][{5}][{6}][{7}]', _0x1bf577 = (_0x35bbdd.startTime || '0') + '_' + (_0x35bbdd.endTime || _0x35bbdd.duration), _0x13702d = 0x0, _0x28bd61;
				_0xedaac7.toString().indexOf('-') != -0x1 ? (_0x28bd61 = _0xedaac7.split('-'),
					_0x28bd61.length == 0x2 && (_0x13702d = parseInt(_0x28bd61[0x1]) * 0x3e8)) : _0x13702d = _0xedaac7 * 0x3e8;
				if (_0x13702d == _0x35bbdd.duration * 0x3e8 && _0x281d55 == 0x2)
					return;
				var _0x18bb4b = Ext.String.format(_0x3c0b70, _0x35bbdd.clazzId, _0x35bbdd.userid, _0x35bbdd.jobid ? _0x35bbdd.jobid : '', _0x35bbdd.objectId, _0x13702d, 'd_yHJ!$pdA~5', _0x35bbdd.duration * 0x3e8, _0x1bf577), _0x24b3f0 = [_0x35bbdd.reportUrl, '/', _0x35bbdd.dtoken, '?clazzId=', _0x35bbdd.clazzId, '&playingTime=', _0xedaac7, '&duration=', _0x35bbdd.duration, '&clipTime=', _0x1bf577, '&objectId=', _0x35bbdd.objectId, '&otherInfo=', _0x35bbdd.otherInfo, '&jobid=', _0x35bbdd.jobid, '&userid=', _0x35bbdd.userid, '&isdrag=', _0x281d55, '&view=pc', '&enc=', md5(_0x18bb4b), '&rt=', _0x35bbdd.rt, '&dtype=Audio', '&_t=', new Date().getTime()].join('');
				_0x56eabd(_0xee52fb, _0x24b3f0, _0xcd9774);
			};
			return {
				'language': 'zh-CN',
				'controls': true,
				'preload': 'auto',
				'bigPlayButton': false,
				'sources': _0x30e6cc,
				'textTrackDisplay': true,
				'controlBar': {
					'volumePanel': {
						'inline': true
					},
					'children': ['playToggle', 'currentTimeDisplay', 'timeDivider', 'durationDisplay', 'progressControl', 'volumePanel']
				},
				'plugins': {
					'audioNote': {
						'title': _0x35bbdd.filename
					},
					'studyControl': {
						'enableSwitchWindow': 0x1
					},
					'seekBarControl': {
						'headOffset': _0x35bbdd.headOffset,
						'enableFastForward': _0x35bbdd.enableFastForward,
						'isSendLog': !!parent.AttachmentSetting && _0x35bbdd.control,
						'reportTimeInterval': _0x35bbdd.reportTimeInterval,
						'sourcePlayer': 'audio',
						'sendLog': function (_0x297d80, _0x5b2216, _0x12c16d) {
							if (this.isSendLog !== true)
								return;
							var _0x499509 = 0x0;
							switch (_0x5b2216) {
								case 'playing':
									_0x499509 = 0x0;
									break;
								case 'drag':
									_0x499509 = 0x1;
									break;
								case 'play':
									_0x499509 = 0x3;
									break;
								case 'pause':
									_0x499509 = 0x2;
									break;
								case 'ended':
									_0x499509 = 0x4;
									break;
							}
							_0x5dac98(_0x297d80, _0x499509, _0x12c16d, function () {
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
