(function (global, factory) {
	"use strict";
	if (typeof define === "function" && define.amd) {
		define([], factory);
	} else {
		global._readlogaddpoint = factory(document.getElementsByClassName("reader")[0]);
		global.setSetting = factory();
	}
}(
	typeof window !== "undefined" ? window : this, function (a) {
		//dom当前滚动条所处的dom，默认为document
		"use strict";
		var b;
		var c = true;
		var d = false;
		var NUM_Text_Length = 0;
		var NUM_Image_Count = 0;
		var isDEBUG = window.location.search && window.location.search.indexOf("&debug") > 0;
		function FF01(input) {
			d = FF2(input);
			if (!d) {
				return;
			}
			b = input;
			NUM_Text_Length = Func_All_Text_Length();
			NUM_Image_Count = Func_Count_Images();
			FF5(1);
			if (c) {
				var t = new Date().getTime();
				var scrollTop = Func_Currect_Position();
				setInterval(function () {
					var l = Func_Currect_Position();
					if (scrollTop !== l) {
						FF5(2);
						scrollTop = l;
						t = new Date().getTime();
					} else {
						var newT = new Date().getTime();
						if (newT - t >= 30000) {
							FF5(2);
							t = newT;
						}
					}
				}, 5000);
				window.onbeforeunload = function (xxxx) {
					FF5(0);
				};
				c = false;
			}
		}
		function FF2(input) {
			if (!input) {
				if (isDEBUG) {
					console.log("缺少阅读配置setting");
				}
				return false;
			}
			if (!input.resourceID) {
				if (isDEBUG) {
					console.log("缺少必传参数resourceID，资源唯一ID");
				}
				return false;
			}
			if (!input.resourceType) {
				if (isDEBUG) {
					console.log("缺少必传参数resourceType，资源类型");
				}
				return false;
			}
			if (!input.passportUID) {
				if (isDEBUG) {
					console.log("缺少必传参数passportUID,用户ID");
				}
				return false;
			}
			if (!input.t || (input.t + "").length !== 14 || !Func_Compare_5Hour(input.t)) {
				if (isDEBUG) {
					console.log("缺少必传参数t,时间戳或t超时");
				}
				return false;
			}
			if (!input.token) {
				if (isDEBUG) {
					console.log("缺少必传参数token");
				}
				return false;
			}
			var f;
			if (input.excludeFields) {
				f = input.excludeFields.split(",");
			}
			var g = [];
			for (var h in input) {
				if (h !== "token" && typeof input[h] !== "undefined" && (!f || f.indexOf(h) < 0)) {
					g.push(h);
				}
			}
			g.sort();
			var j = "";
			for (var i = 0; i < g.length; i++) {
				j += input[g[i]];
			}
			var k = MD5_entry(j + "uWrVfLhv#1TW!@QA");
			if (input.token.toUpperCase() !== k.toUpperCase()) {
				if (isDEBUG) {
					console.log("token验证失败");
				}
				return false;
			}
			return true;
		}
		function Func_Compare_5Hour(input) {
			input = input  + "";
			var f = new Date();
			f.setFullYear(parseInt(input.substring(0, 4)));
			f.setMonth(parseInt(input.substring(4, 6)) - 1);
			f.setDate(parseInt(input.substring(6, 8)));
			f.setHours(parseInt(input.substring(8, 10)));
			f.setMinutes(parseInt(input.substring(10, 12)));
			f.setSeconds(parseInt(input.substring(12, 14)));
			return (Math.abs(new Date().getTime() - f.getTime()) <= 5 * 60 * 60 * 1000);
		}
		function FF4(input) {
			if (b._from_) {
				if (!input.ext) {
					input.ext = {};
				}
				input.ext._from_ = b._from_;
			}
			if (b.rtag) {
				if (!input.ext) {
					input.ext = {};
				}
				input.ext.rtag = b.rtag;
			}
			if (b.ext) {
				input.ext = decodeURIComponent(b.ext);
			}
			if (!input.ext) {
				var f = window.location.search.substring(1).split("&");
				for (var i = 0; i < f.length; i++) {
					var g = f[i].split("=");
					if (g.length === 2) {
						if (g[0] === "_from_" || g[0] === "rtag") {
							if (!input.ext) {
								input.ext = {};
							}
							input.ext[g[0]] = g[1];
						} else if (g[0] === "ext") {
							input[g[0]] = decodeURIComponent(g[1]);
						}
					}
				}
			}
			if (typeof input.ext === "object") {
				input.ext = JSON.stringify(input.ext);
			}
		}
		function FF5(input) {
			if (isDEBUG) {
				console.log("当前窗口是否可视：" + !document.hidden);
			}
			if (document && document.hidden) {
				return;
			}
			if (!d) {
				return;
			}
			var f = {
				r: b.resourceID,
				t: b.resourceType,
				l: b.location || 1,
				f: b.from || 0,
				p: b.curPage,
				tp: b.totalPage,
				wc: b.wordCount || NUM_Text_Length,
				ic: b.imgCount || NUM_Image_Count,
				v: 2,
				s: input,
				h: Func_Currect_Position()
			};
			FF4(f);
			var g = {
				f: "readPoint",
				u: b.passportUID,
				pid: b.pid,
				s: b.sessionID,
				d: encodeURIComponent(JSON.stringify(f)),
				t: Func_Currect_DateTime()
			};
			var url = "https://data-xxt.aichaoxing.com/analysis/ac_mark?";
			var dataKeys = [];
			for (var ad in g) {
				if (typeof g[ad] !== "undefined") {
					dataKeys.push(ad);
					url += "&" + ad + "=" + g[ad];
				}
			}
			dataKeys.sort();
			var h = "";
			for (var i = 0; i < dataKeys.length; i++) {
				h += g[dataKeys[i]];
			}
			url += "&enc=" + MD5_entry(h + "NrRzLDpWB2JkeodIVAn4");
			if (window.jQuery && window.jQuery.ajax) {
				window.jQuery.support.cors = true;
				window.jQuery.ajaxSetup({
					xhr: function () {
						if (window.ActiveXObject) {
							return new window.ActiveXObject("Microsoft.XMLHTTP");
						} else {
							return new window.XMLHttpRequest();
						}
					}
				});
				window.jQuery.ajax({
					method: "get",
					url: url,
					success: function () {
						if (isDEBUG) {
							console.log("jquery打点请求成功");
						}
					},
					error: function () {
						if (isDEBUG) {
							console.log("jquery打点请求失败");
						}
					}
				});
			} else {
				var xhr = new XMLHttpRequest();
				xhr.open("GET", url, true);
				xhr.onreadystatechange = function () {
					if (xhr.readyState === 4 || xhr.readyState === 2) {
						if (isDEBUG) {
							console.log("xhr打点请求状态：" + xhr.status);
						}
					}
				};
				xhr.send();
			}
		}
		function Func_Currect_DateTime() {
			var f = new Date();
			return "" + f.getFullYear() + Func_Padding_Numbers_to_10(f.getMonth() + 1) + Func_Padding_Numbers_to_10(f.getDate()) + Func_Padding_Numbers_to_10(f.getHours()) + Func_Padding_Numbers_to_10(f.getMinutes()) + Func_Padding_Numbers_to_10(f.getSeconds()) + Func_Padding_Numbers_to_100(f.getMilliseconds());
		}
		function Func_All_Text_Length() {
			try {
				return document.body.innerText.trim().length;
			} catch (err) {
				if (isDEBUG) {
					console.log(err);
				}
				return 0;
			}
		}
		function Func_Count_Images() {
			try {
				return document.getElementsByTagName("img").length;
			} catch (err) {
				if (isDEBUG) {
					console.log(err);
				}
				return 0;
			}
		}
		function Func_Padding_Numbers_to_10(input) {
			return input < 10 ? "0" + input : input;
		}
		function Func_Padding_Numbers_to_100(input) {
			return input < 10 ? "00" + input : input < 100 ? "0" + input : input;
		}
		function Func_Currect_Position() {
			try {
				if (b.resourceType === "note") {
					var USER_AGENT = navigator.userAgent, f = navigator.appVersion;
					var g = USER_AGENT.indexOf("Android") > -1 || USER_AGENT.indexOf("Linux") > -1;
					if (g && typeof javaJs !== "undefined" && typeof javaJs.getScrollTop !== "undefined") {
						return javaJs.getScrollTop();
					}
				}
				if (a) {
					return (a.scrollTop || document.documentElement.scrollTop || document.body.scrollTop);
				} else {
					return document.documentElement.scrollTop || document.body.scrollTop;
				}
			} catch (err) {
				if (isDEBUG) {
					console.log(err);
				}
				return 0;
			}
		}
		function MD5_safeAdd(x, y) {
			var lsw = x & 0xffff + y & 0xffff;
			var msw = x >> 16 + y >> 16 + lsw >> 16;
			return msw << 16 | lsw & 0xffff;
		}
		function MD5_bitRotateLeft(num, cnt) {
			return num << cnt | num >>> (32 - cnt);
		}
		function md5cmn(q, a, b, x, s, t) {
			return MD5_safeAdd(MD5_bitRotateLeft(MD5_safeAdd(MD5_safeAdd(a, q), MD5_safeAdd(x, t)), s), b);
		}
		function md5ff(a, b, c, d, x, s, t) {
			return md5cmn(b & c | ~b & d, a, b, x, s, t);
		}
		function md5gg(a, b, c, d, x, s, t) {
			return md5cmn(b & d | c & ~d, a, b, x, s, t);
		}
		function md5hh(a, b, c, d, x, s, t) {
			return md5cmn(b ^ c ^ d, a, b, x, s, t);
		}
		function md5ii(a, b, c, d, x, s, t) {
			return md5cmn(c ^ b | ~d, a, b, x, s, t);
		}
		function core_md5(x, len) {
			x[len >> 5] |= 0x80 << len % 32;
			x[len + 64 >>> 9 << 4 + 14] = len;
			var MD5_i;
			var MD5_olda;
			var MD5_oldb;
			var MD5_oldc;
			var MD5_oldd;
			var MDA_A = 0x67452301;
			var MD5_B = -0x10325477;
			var MD5_C = -0x67452302;
			var MD5_D = 0x10325476;
			for (MD5_i = 0; MD5_i < x.length; MD5_i += 16) {
				MD5_olda = MDA_A;
				MD5_oldb = MD5_B;
				MD5_oldc = MD5_C;
				MD5_oldd = MD5_D;
				MDA_A = md5ff(MDA_A, MD5_B, MD5_C, MD5_D, x[MD5_i + 0x0], 7, -0x28955b88);
				MD5_D = md5ff(MD5_D, MDA_A, MD5_B, MD5_C, x[MD5_i + 0x1], 12, -0x173848aa);
				MD5_C = md5ff(MD5_C, MD5_D, MDA_A, MD5_B, x[MD5_i + 0x2], 17, 0x242070db);
				MD5_B = md5ff(MD5_B, MD5_C, MD5_D, MDA_A, x[MD5_i + 0x3], 0x16, -0x3e423112);
				MDA_A = md5ff(MDA_A, MD5_B, MD5_C, MD5_D, x[MD5_i + 0x4], 7, -0xa83f051);
				MD5_D = md5ff(MD5_D, MDA_A, MD5_B, MD5_C, x[MD5_i + 0x5], 12, 0x4787c62a);
				MD5_C = md5ff(MD5_C, MD5_D, MDA_A, MD5_B, x[MD5_i + 0x6], 17, -0x57cfb9ed);
				MD5_B = md5ff(MD5_B, MD5_C, MD5_D, MDA_A, x[MD5_i + 0x7], 0x16, -0x2b96aff);
				MDA_A = md5ff(MDA_A, MD5_B, MD5_C, MD5_D, x[MD5_i + 0x8], 7, 0x698098d8);
				MD5_D = md5ff(MD5_D, MDA_A, MD5_B, MD5_C, x[MD5_i + 0x9], 12, -0x74bb0851);
				MD5_C = md5ff(MD5_C, MD5_D, MDA_A, MD5_B, x[MD5_i + 0xa], 17, -0xa44f);
				MD5_B = md5ff(MD5_B, MD5_C, MD5_D, MDA_A, x[MD5_i + 0xb], 0x16, -0x76a32842);
				MDA_A = md5ff(MDA_A, MD5_B, MD5_C, MD5_D, x[MD5_i + 0xc], 7, 0x6b901122);
				MD5_D = md5ff(MD5_D, MDA_A, MD5_B, MD5_C, x[MD5_i + 0xd], 12, -0x2678e6d);
				MD5_C = md5ff(MD5_C, MD5_D, MDA_A, MD5_B, x[MD5_i + 0xe], 17, -0x5986bc72);
				MD5_B = md5ff(MD5_B, MD5_C, MD5_D, MDA_A, x[MD5_i + 0xf], 0x16, 0x49b40821);
				MDA_A = md5gg(MDA_A, MD5_B, MD5_C, MD5_D, x[MD5_i + 0x1], 5, -0x9e1da9e);
				MD5_D = md5gg(MD5_D, MDA_A, MD5_B, MD5_C, x[MD5_i + 0x6], 9, -0x3fbf4cc0);
				MD5_C = md5gg(MD5_C, MD5_D, MDA_A, MD5_B, x[MD5_i + 0xb], 14, 0x265e5a51);
				MD5_B = md5gg(MD5_B, MD5_C, MD5_D, MDA_A, x[MD5_i + 0x0], 20, -0x16493856);
				MDA_A = md5gg(MDA_A, MD5_B, MD5_C, MD5_D, x[MD5_i + 0x5], 5, -0x29d0efa3);
				MD5_D = md5gg(MD5_D, MDA_A, MD5_B, MD5_C, x[MD5_i + 0xa], 9, 0x2441453);
				MD5_C = md5gg(MD5_C, MD5_D, MDA_A, MD5_B, x[MD5_i + 0xf], 14, -0x275e197f);
				MD5_B = md5gg(MD5_B, MD5_C, MD5_D, MDA_A, x[MD5_i + 0x4], 20, -0x182c0438);
				MDA_A = md5gg(MDA_A, MD5_B, MD5_C, MD5_D, x[MD5_i + 0x9], 5, 0x21e1cde6);
				MD5_D = md5gg(MD5_D, MDA_A, MD5_B, MD5_C, x[MD5_i + 0xe], 9, -0x3cc8f82a);
				MD5_C = md5gg(MD5_C, MD5_D, MDA_A, MD5_B, x[MD5_i + 0x3], 14, -0xb2af279);
				MD5_B = md5gg(MD5_B, MD5_C, MD5_D, MDA_A, x[MD5_i + 0x8], 20, 0x455a14ed);
				MDA_A = md5gg(MDA_A, MD5_B, MD5_C, MD5_D, x[MD5_i + 0xd], 5, -0x561c16fb);
				MD5_D = md5gg(MD5_D, MDA_A, MD5_B, MD5_C, x[MD5_i + 0x2], 9, -0x3105c08);
				MD5_C = md5gg(MD5_C, MD5_D, MDA_A, MD5_B, x[MD5_i + 0x7], 14, 0x676f02d9);
				MD5_B = md5gg(MD5_B, MD5_C, MD5_D, MDA_A, x[MD5_i + 0xc], 20, -0x72d5b376);
				MDA_A = md5hh(MDA_A, MD5_B, MD5_C, MD5_D, x[MD5_i + 0x5], 4, -0x5c6be);
				MD5_D = md5hh(MD5_D, MDA_A, MD5_B, MD5_C, x[MD5_i + 0x8], 11, -0x788e097f);
				MD5_C = md5hh(MD5_C, MD5_D, MDA_A, MD5_B, x[MD5_i + 0xb], 16, 0x6d9d6122);
				MD5_B = md5hh(MD5_B, MD5_C, MD5_D, MDA_A, x[MD5_i + 0xe], 0x17, -0x21ac7f4);
				MDA_A = md5hh(MDA_A, MD5_B, MD5_C, MD5_D, x[MD5_i + 0x1], 4, -0x5b4115bc);
				MD5_D = md5hh(MD5_D, MDA_A, MD5_B, MD5_C, x[MD5_i + 0x4], 11, 0x4bdecfa9);
				MD5_C = md5hh(MD5_C, MD5_D, MDA_A, MD5_B, x[MD5_i + 0x7], 16, -0x944b4a0);
				MD5_B = md5hh(MD5_B, MD5_C, MD5_D, MDA_A, x[MD5_i + 0xa], 0x17, -0x41404390);
				MDA_A = md5hh(MDA_A, MD5_B, MD5_C, MD5_D, x[MD5_i + 0xd], 4, 0x289b7ec6);
				MD5_D = md5hh(MD5_D, MDA_A, MD5_B, MD5_C, x[MD5_i + 0x0], 11, -0x155ed806);
				MD5_C = md5hh(MD5_C, MD5_D, MDA_A, MD5_B, x[MD5_i + 0x3], 16, -0x2b10cf7b);
				MD5_B = md5hh(MD5_B, MD5_C, MD5_D, MDA_A, x[MD5_i + 0x6], 0x17, 0x4881d05);
				MDA_A = md5hh(MDA_A, MD5_B, MD5_C, MD5_D, x[MD5_i + 0x9], 4, -0x262b2fc7);
				MD5_D = md5hh(MD5_D, MDA_A, MD5_B, MD5_C, x[MD5_i + 0xc], 11, -0x1924661b);
				MD5_C = md5hh(MD5_C, MD5_D, MDA_A, MD5_B, x[MD5_i + 0xf], 16, 0x1fa27cf8);
				MD5_B = md5hh(MD5_B, MD5_C, MD5_D, MDA_A, x[MD5_i + 0x2], 0x17, -0x3b53a99b);
				MDA_A = md5ii(MDA_A, MD5_B, MD5_C, MD5_D, x[MD5_i + 0x0], 6, -0xbd6ddbc);
				MD5_D = md5ii(MD5_D, MDA_A, MD5_B, MD5_C, x[MD5_i + 0x7], 10, 0x432aff97);
				MD5_C = md5ii(MD5_C, MD5_D, MDA_A, MD5_B, x[MD5_i + 0xe], 15, -0x546bdc59);
				MD5_B = md5ii(MD5_B, MD5_C, MD5_D, MDA_A, x[MD5_i + 0x5], 21, -0x36c5fc7);
				MDA_A = md5ii(MDA_A, MD5_B, MD5_C, MD5_D, x[MD5_i + 0xc], 6, 0x655b59c3);
				MD5_D = md5ii(MD5_D, MDA_A, MD5_B, MD5_C, x[MD5_i + 0x3], 10, -0x70f3336e);
				MD5_C = md5ii(MD5_C, MD5_D, MDA_A, MD5_B, x[MD5_i + 0xa], 15, -0x100b83);
				MD5_B = md5ii(MD5_B, MD5_C, MD5_D, MDA_A, x[MD5_i + 0x1], 21, -0x7a7ba22f);
				MDA_A = md5ii(MDA_A, MD5_B, MD5_C, MD5_D, x[MD5_i + 0x8], 6, 0x6fa87e4f);
				MD5_D = md5ii(MD5_D, MDA_A, MD5_B, MD5_C, x[MD5_i + 0xf], 10, -0x1d31920);
				MD5_C = md5ii(MD5_C, MD5_D, MDA_A, MD5_B, x[MD5_i + 0x6], 15, -0x5cfebcec);
				MD5_B = md5ii(MD5_B, MD5_C, MD5_D, MDA_A, x[MD5_i + 0xd], 21, 0x4e0811a1);
				MDA_A = md5ii(MDA_A, MD5_B, MD5_C, MD5_D, x[MD5_i + 0x4], 6, -0x8ac817e);
				MD5_D = md5ii(MD5_D, MDA_A, MD5_B, MD5_C, x[MD5_i + 0xb], 10, -0x42c50dcb);
				MD5_C = md5ii(MD5_C, MD5_D, MDA_A, MD5_B, x[MD5_i + 0x2], 15, 0x2ad7d2bb);
				MD5_B = md5ii(MD5_B, MD5_C, MD5_D, MDA_A, x[MD5_i + 0x9], 21, -0x14792c6f);
				MDA_A = MD5_safeAdd(MDA_A, MD5_olda);
				MD5_B = MD5_safeAdd(MD5_B, MD5_oldb);
				MD5_C = MD5_safeAdd(MD5_C, MD5_oldc);
				MD5_D = MD5_safeAdd(MD5_D, MD5_oldd);
			}
			return [MDA_A, MD5_B, MD5_C, MD5_D];
		}
		function binl2rstr(bin) {
			var i;
			var str = "";
			var k = bin.length * 32;
			for (i = 0; i < k; i += 8) {
				str += String.fromCharCode(bin[i >> 5] >>> i % 32 & 0xff);
			}
			return str;
		}
		function rstr2binl(input) {
			var i;
			var output = [];
			output[input.length >> 2 - 1] = undefined;
			for (i = 0; i < output.length; i++) {
				output[i] = 0;
			}
			var length8 = input.length * 8;
			for (i = 0; i < length8; i += 8) {
				output[i >> 5] |= input.charCodeAt(i / 8) & 0xff << i % 32;
			}
			return output;
		}
		function rstrMD5(string) {
			return binl2rstr(core_md5(rstr2binl(string), string.length * 8));
		}
		function strHMACMD5(key, data) {
			var i;
			var bkey = rstr2binl(key);
			var ipad = [];
			var opad = [];
			var _0x2dd1ec;
			ipad[15] = opad[15] = undefined;
			if (bkey.length > 16) {
				bkey = core_md5(bkey, key.length * 8);
			}
			for (i = 0; i < 16; i++) {
				ipad[i] = bkey[i] ^ 0x36363636;
				opad[i] = bkey[i] ^ 0x5c5c5c5c;
			}
			_0x2dd1ec = core_md5(ipad.concat(rstr2binl(data)), 0x200 + data.length * 8);
			return binl2rstr(core_md5(opad.concat(_0x2dd1ec), 0x200 + 0x80));
		}
		function rstr2hex(input) {
			var MD5_hexTab = "0123456789abcdef";
			var output = "";
			var x;
			var i;
			for (i = 0; i < input.length; i++) {
				x = input.charCodeAt(i);
				output += MD5_hexTab.charAt(x >>> 4 & 15) + MD5_hexTab.charAt(x & 15);
			}
			return output;
		}
		function str2rstrUTF8(unicodeString) {
			return unescape(encodeURIComponent(unicodeString));
		}
		function rawMD5(s) {
			return rstrMD5(str2rstrUTF8(s));
		}
		function hexMD5(s) {
			return rstr2hex(rawMD5(s));
		}
		function rawHMACMD5(k, d) {
			return strHMACMD5(str2rstrUTF8(k), str2rstrUTF8(d));
		}
		function hexHMACMD5(k, d) {
			return rstr2hex(rawHMACMD5(k, d));
		}
		function MD5_entry(string, key, raw) {
			if (!key) {
				if (!raw) {
					return hexMD5(string);
				}
				return rawMD5(string);
			}
			if (!raw) {
				return hexHMACMD5(key, string);
			}
			return rawHMACMD5(key, string);
		}
		return FF01;
	}));
