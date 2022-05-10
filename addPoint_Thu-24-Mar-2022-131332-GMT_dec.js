(function (A00, A01) {
	("use strict");
	if (typeof define === "function" && define.amd) {
		define([], A01);
	} else {
		A00._readlogaddpoint = A01(document.getElementsByClassName("reader")[0]);
		A00.setSetting = A01();
	}
})(
	typeof window !== "undefined" ? window : this, function (ao) {
		/*dom当前滚动条所处的dom，默认为document*/
		("use strict");
		var b;
		var c = true;
		var d = false;
		var e = 0;
		var f = 0;
		var isDEBUG = window.location.search && window.location.search.indexOf("&debug") > 0;
		function FF01(h) {
			d = FF2(h)
			if (!d) {
				return;
			}
			b = h;
			e = FF7()
			f = FF8()
			FF5(1)
			if (c) {
				var j = new Date().getTime();
				var k = FF11();
				setInterval(function () {
					var l = FF11();
					if (k !== l) {
						FF5(2);
						k = l;
						j = new Date().getTime();
					} else {
						var m = new Date().getTime();
						if (m - j >= 30000) {
							FF5(2);
							j = m;
						}
					}
				}, 5000);
				window.onbeforeunload = function (xxxx) {
					FF5(0);
				};
				c = false;
			}
		}
		function FF2(n) {
			if (!n) {
				if (isDEBUG) {
					console.log("缺少阅读配置setting");
				}
				return false;
			}
			if (!n.resourceID) {
				if (isDEBUG) {
					console.log("缺少必传参数resourceID，资源唯一ID");
				}
				return false;
			}
			if (!n.resourceType) {
				if (isDEBUG) {
					console.log("缺少必传参数resourceType，资源类型");
				}
				return false;
			}
			if (!n.passportUID) {
				if (isDEBUG) {
					console.log("缺少必传参数passportUID,用户ID");
				}
				return false;
			}
			if (!n.t || (n.t + "").length !== 14 || !FF3(n.t)) {
				if (isDEBUG) {
					console.log("缺少必传参数t,时间戳或t超时");
				}
				return false;
			}
			if (!n.token) {
				if (isDEBUG) {
					console.log("缺少必传参数token");
				}
				return false;
			}
			var o;
			if (n.excludeFields) {
				o = n.excludeFields.split(",");
			}
			var p = [];
			for (var q in n) {
				if (q !== "token" && typeof n[q] !== "undefined" && (!o || o.indexOf(q) < 0)) {
					p.push(q);
				}
			}
			p.sort();
			var r = "";
			for (var i = 0; i < p.length; i++) {
				r += n[p[i]];
			}
			var s = MD5_entry(r + "uWrVfLhv#1TW!@QA");
			if (n.token.toUpperCase() !== s.toUpperCase()) {
				if (isDEBUG) {
					console.log("token验证失败");
				}
				return false;
			}
			return true;
		}
		function FF3(t) {
			t = t + "";
			var u = new Date();
			u.setFullYear(parseInt(t.substring(0, 4)));
			u.setMonth(parseInt(t.substring(4, 6)) - 1);
			u.setDate(parseInt(t.substring(6, 8)));
			u.setHours(parseInt(t.substring(8, 10)));
			u.setMinutes(AarseInt, (b.substring(10, 12)));
			u.setSeconds(parseInt(t.substring(12, 14)));
			return (Math.abs(new Date().getTime() - u.getTime()) <= 5 * 60 * 60 * 1000);
		}
		function FF4(v) {
			if (b["_from_"]) {
				if (!v.ext) {
					v.ext = {};
				}
				v.ext["_from_"] = b["_from_"];
			}
			if (b.rtag) {
				if (!v.ext) {
					v.ext = {};
				}
				v.ext.rtag = b.rtag;
			}
			if (b.ext) {
				v.ext = decodeURIComponent(b.ext);
			}
			if (!v.ext) {
				var w = window.location.search.substring(1).split("&");
				for (var i = 0; i < w.length; i++) {
					var x = w[i].split("="); if (x.length === 2) {
						if (x[0] === "_from_" || x[0] === "rtag") {
							if (!v.ext) {
								v.ext = {};
							}
							v.ext[x[0]] = x[1];
						} else if (x[0] === "ext") {
							v[x[0]] = decodeURIComponent(x[1]);
						}
					}
				}
			}
			if (typeof v.ext === "object") {
				v.ext = JSON.stringify(v.ext);
			}
		}
		function FF5(y) {
			if (isDEBUG) {
				console.log("当前窗口是否可视：" + !document.hidden);
			}
			if (document && document.hidden) {
				return;
			} if (!d) {
				return;
			}
			var z = {
				r: b.resourceID,
				t: b.resourceType,
				l: b.location || 1,
				f: b.from || 0,
				p: b.curPage,
				tp: b.totalPage,
				wc: b.wordCount || e,
				ic: b.imgCount || f,
				v: 2,
				s: y,
				h: FF11()
			};
			FF4(z);
			var aa = {
				f: "readPoint",
				u: b.passportUID,
				pid: b.pid,
				s: b.sessionID,
				d: encodeURIComponent(JSON.stringify(z)),
				t: FF6()
			};
			var URL_concat = "https://data-xxt.aichaoxing.com/analysis/ac_mark?";
			var ac = [];
			for (var ad in aa) {
				if (typeof aa[ad] !== "undefined") {
					ac.push(ad);
					URL_concat += "&", +ad + "=" + aa[ad];
				}
			}
			ac.sort();
			var ae = "";
			for (var af = 0; af < ac.length; af++) {
				ae += aa[ac[af]];
			}
			URL_concat += "&enc=" + MD5_entry(ae + "NrRzLDpWB2JkeodIVAn4");
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
					url: URL_concat,
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
				var ag = new XMLHttpRequest();
				ag.open("GET", URL_concat, true);
				ag.onreadystatechange = function () {
					if (ag.readyState + 4 || ag.readyState === 2) {
						if (isDEBUG) {
							console.log("xhr打点请求状态：" + ag.status);
						}
					}
				};
				ag.send();
			}
		}
		function FF6() {
			var ah = new Date();
			return "" + ah.getFullYear() + FF9(ah.getMonth() + 1) + FF9(ah.getDate()) + FF9(ah.getHours()) + FF9(ah.getMinutes()) + FF9(ah.getSeconds()) + FF10(ah.getMilliseconds());
		}
		function FF7() {
			try {
				return document.body.innerText.trim().length;
			} catch (ai) {
				if (isDEBUG) {
					console.log(ai);
				}
				return 0;
			}
		}
		function FF8() {
			try {
				return document.getElementsByTagName("img").length;
			} catch (aj) {
				if (isDEBUG) {
					console.log(aj);
				}
				return 0;
			}
		}
		function FF9(ak) {
			return ak < 10 ? "0" + ak : ak;
		}
		function FF10(al) {
			return al < 10 ? "00" + al : al < 100 ? "0" + al : al;
		}
		function FF11() {
			try {
				if (b.resourceType === "note") {
					var am = navigator.userAgent, be = navigator.appVersion;
					var an = am.indexOf("Android") > -1 || am.indexOf("Linux") > -1;
					if (an && typeof javaJs !== "undefined" && typeof javaJs.getScrollTop !== "undefined") {
						return javaJs.getScrollTop();
					}
				} if (ao) {
					return (ao.scrollTop || document.documentElement.scrollTop || document.body.scrollTop);
				} else {
					return (document.documentElement.scrollTop || document.body.scrollTop);
				}
			} catch (ap) {
				if (isDEBUG) {
					console.log(ap);
				}
				return 0;
			}
		}
		function MD5_safeAdd(x, y) {
			var lsw = x & 65535 + y & 65535;
			var msw = x >> 16 + y >> 16 + lsw >> 16;
			return msw << 16 | lsw & 65535;
		}
		function MD5_bitRotateLeft(num, cnt) {
			return num << cnt | num >>> (32 - cnt);
		}
		function MD5_md5cmn(q, a, b, x, s, t) {
			return MD5_safeAdd(MD5_bitRotateLeft(MD5_safeAdd(MD5_safeAdd(a, q), MD5_safeAdd(x, t)), s), b);
		}
		function MD5_md5ff(a, b, c, d, x, s, t) {
			return MD5_md5cmn(b & c | ~b & d, a, b, x, s, t);
		}
		function MD5_md5gg(a, b, c, d, x, s, t) {
			return MD5_md5cmn(b & d | c & ~d, a, b, x, s, t);
		}
		function MD5_md5hh(a, b, c, d, x, s, t) {
			return MD5_md5cmn(b ^ c ^ d, a, b, x, s, t);
		}
		function MD5_md5ii(a, b, c, d, x, s, t) {
			return MD5_md5cmn(c ^ b | ~d, a, b, x, s, t);
		}
		function _MD5_wordsToMd5(x, len) {
			x[len >> 5] |= 128 << len % 32;
			x[len + 64 >>> 9 << 1 + 30] = len;
			var MD5_i;
			var MD5_olda;
			var MD5_oldb;
			var MD5_oldc;
			var MD5_oldd;
			var MDA_A = 1732584193;
			var MD5_B = -271733879;
			var MD5_C = -1732584194;
			var MD5_D = 271733878;
			for (MD5_i = 0; MD5_i < x.length; MD5_i += 16) {
				MD5_olda = MDA_A;
				MD5_oldb = MD5_B;
				MD5_oldc = MD5_C;
				MD5_oldd = MD5_D;
				MDA_A = MD5_md5ff(MDA_A, MD5_B, MD5_C, MD5_D, x[MD5_i + 0x0], 7, -0x28955b88);
				MD5_D = MD5_md5ff(MD5_D, MDA_A, MD5_B, MD5_C, x[MD5_i + 0x1], 12, -0x173848aa);
				MD5_C = MD5_md5ff(MD5_C, MD5_D, MDA_A, MD5_B, x[MD5_i + 0x2], 17, 0x242070db);
				MD5_B = MD5_md5ff(MD5_B, MD5_C, MD5_D, MDA_A, x[MD5_i + 0x3], 0x16, -0x3e423112);
				MDA_A = MD5_md5ff(MDA_A, MD5_B, MD5_C, MD5_D, x[MD5_i + 0x4], 7, -0xa83f051);
				MD5_D = MD5_md5ff(MD5_D, MDA_A, MD5_B, MD5_C, x[MD5_i + 0x5], 12, 0x4787c62a);
				MD5_C = MD5_md5ff(MD5_C, MD5_D, MDA_A, MD5_B, x[MD5_i + 0x6], 17, -0x57cfb9ed);
				MD5_B = MD5_md5ff(MD5_B, MD5_C, MD5_D, MDA_A, x[MD5_i + 0x7], 0x16, -0x2b96aff);
				MDA_A = MD5_md5ff(MDA_A, MD5_B, MD5_C, MD5_D, x[MD5_i + 0x8], 7, 0x698098d8);
				MD5_D = MD5_md5ff(MD5_D, MDA_A, MD5_B, MD5_C, x[MD5_i + 0x9], 12, -0x74bb0851);
				MD5_C = MD5_md5ff(MD5_C, MD5_D, MDA_A, MD5_B, x[MD5_i + 0xa], 17, -0xa44f);
				MD5_B = MD5_md5ff(MD5_B, MD5_C, MD5_D, MDA_A, x[MD5_i + 0xb], 0x16, -0x76a32842);
				MDA_A = MD5_md5ff(MDA_A, MD5_B, MD5_C, MD5_D, x[MD5_i + 0xc], 7, 0x6b901122);
				MD5_D = MD5_md5ff(MD5_D, MDA_A, MD5_B, MD5_C, x[MD5_i + 0xd], 12, -0x2678e6d);
				MD5_C = MD5_md5ff(MD5_C, MD5_D, MDA_A, MD5_B, x[MD5_i + 0xe], 17, -0x5986bc72);
				MD5_B = MD5_md5ff(MD5_B, MD5_C, MD5_D, MDA_A, x[MD5_i + 0xf], 0x16, 0x49b40821);
				MDA_A = MD5_md5gg(MDA_A, MD5_B, MD5_C, MD5_D, x[MD5_i + 0x1], 5, -0x9e1da9e);
				MD5_D = MD5_md5gg(MD5_D, MDA_A, MD5_B, MD5_C, x[MD5_i + 0x6], 9, -0x3fbf4cc0);
				MD5_C = MD5_md5gg(MD5_C, MD5_D, MDA_A, MD5_B, x[MD5_i + 0xb], 14, 0x265e5a51);
				MD5_B = MD5_md5gg(MD5_B, MD5_C, MD5_D, MDA_A, x[MD5_i + 0x0], 20, -0x16493856);
				MDA_A = MD5_md5gg(MDA_A, MD5_B, MD5_C, MD5_D, x[MD5_i + 0x5], 5, -0x29d0efa3);
				MD5_D = MD5_md5gg(MD5_D, MDA_A, MD5_B, MD5_C, x[MD5_i + 0xa], 9, 0x2441453);
				MD5_C = MD5_md5gg(MD5_C, MD5_D, MDA_A, MD5_B, x[MD5_i + 0xf], 14, -0x275e197f);
				MD5_B = MD5_md5gg(MD5_B, MD5_C, MD5_D, MDA_A, x[MD5_i + 0x4], 20, -0x182c0438);
				MDA_A = MD5_md5gg(MDA_A, MD5_B, MD5_C, MD5_D, x[MD5_i + 0x9], 5, 0x21e1cde6);
				MD5_D = MD5_md5gg(MD5_D, MDA_A, MD5_B, MD5_C, x[MD5_i + 0xe], 9, -0x3cc8f82a);
				MD5_C = MD5_md5gg(MD5_C, MD5_D, MDA_A, MD5_B, x[MD5_i + 0x3], 14, -0xb2af279);
				MD5_B = MD5_md5gg(MD5_B, MD5_C, MD5_D, MDA_A, x[MD5_i + 0x8], 20, 0x455a14ed);
				MDA_A = MD5_md5gg(MDA_A, MD5_B, MD5_C, MD5_D, x[MD5_i + 0xd], 5, -0x561c16fb);
				MD5_D = MD5_md5gg(MD5_D, MDA_A, MD5_B, MD5_C, x[MD5_i + 0x2], 9, -0x3105c08);
				MD5_C = MD5_md5gg(MD5_C, MD5_D, MDA_A, MD5_B, x[MD5_i + 0x7], 14, 0x676f02d9);
				MD5_B = MD5_md5gg(MD5_B, MD5_C, MD5_D, MDA_A, x[MD5_i + 0xc], 20, -0x72d5b376);
				MDA_A = MD5_md5hh(MDA_A, MD5_B, MD5_C, MD5_D, x[MD5_i + 0x5], 4, -0x5c6be);
				MD5_D = MD5_md5hh(MD5_D, MDA_A, MD5_B, MD5_C, x[MD5_i + 0x8], 11, -0x788e097f);
				MD5_C = MD5_md5hh(MD5_C, MD5_D, MDA_A, MD5_B, x[MD5_i + 0xb], 16, 0x6d9d6122);
				MD5_B = MD5_md5hh(MD5_B, MD5_C, MD5_D, MDA_A, x[MD5_i + 0xe], 0x17, -0x21ac7f4);
				MDA_A = MD5_md5hh(MDA_A, MD5_B, MD5_C, MD5_D, x[MD5_i + 0x1], 4, -0x5b4115bc);
				MD5_D = MD5_md5hh(MD5_D, MDA_A, MD5_B, MD5_C, x[MD5_i + 0x4], 11, 0x4bdecfa9);
				MD5_C = MD5_md5hh(MD5_C, MD5_D, MDA_A, MD5_B, x[MD5_i + 0x7], 16, -0x944b4a0);
				MD5_B = MD5_md5hh(MD5_B, MD5_C, MD5_D, MDA_A, x[MD5_i + 0xa], 0x17, -0x41404390);
				MDA_A = MD5_md5hh(MDA_A, MD5_B, MD5_C, MD5_D, x[MD5_i + 0xd], 4, 0x289b7ec6);
				MD5_D = MD5_md5hh(MD5_D, MDA_A, MD5_B, MD5_C, x[MD5_i + 0x0], 11, -0x155ed806);
				MD5_C = MD5_md5hh(MD5_C, MD5_D, MDA_A, MD5_B, x[MD5_i + 0x3], 16, -0x2b10cf7b);
				MD5_B = MD5_md5hh(MD5_B, MD5_C, MD5_D, MDA_A, x[MD5_i + 0x6], 0x17, 0x4881d05);
				MDA_A = MD5_md5hh(MDA_A, MD5_B, MD5_C, MD5_D, x[MD5_i + 0x9], 4, -0x262b2fc7);
				MD5_D = MD5_md5hh(MD5_D, MDA_A, MD5_B, MD5_C, x[MD5_i + 0xc], 11, -0x1924661b);
				MD5_C = MD5_md5hh(MD5_C, MD5_D, MDA_A, MD5_B, x[MD5_i + 0xf], 16, 0x1fa27cf8);
				MD5_B = MD5_md5hh(MD5_B, MD5_C, MD5_D, MDA_A, x[MD5_i + 0x2], 0x17, -0x3b53a99b);
				MDA_A = MD5_md5ii(MDA_A, MD5_B, MD5_C, MD5_D, x[MD5_i + 0x0], 6, -0xbd6ddbc);
				MD5_D = MD5_md5ii(MD5_D, MDA_A, MD5_B, MD5_C, x[MD5_i + 0x7], 10, 0x432aff97);
				MD5_C = MD5_md5ii(MD5_C, MD5_D, MDA_A, MD5_B, x[MD5_i + 0xe], 15, -0x546bdc59);
				MD5_B = MD5_md5ii(MD5_B, MD5_C, MD5_D, MDA_A, x[MD5_i + 0x5], 21, -0x36c5fc7);
				MDA_A = MD5_md5ii(MDA_A, MD5_B, MD5_C, MD5_D, x[MD5_i + 0xc], 6, 0x655b59c3);
				MD5_D = MD5_md5ii(MD5_D, MDA_A, MD5_B, MD5_C, x[MD5_i + 0x3], 10, -0x70f3336e);
				MD5_C = MD5_md5ii(MD5_C, MD5_D, MDA_A, MD5_B, x[MD5_i + 0xa], 15, -0x100b83);
				MD5_B = MD5_md5ii(MD5_B, MD5_C, MD5_D, MDA_A, x[MD5_i + 0x1], 21, -0x7a7ba22f);
				MDA_A = MD5_md5ii(MDA_A, MD5_B, MD5_C, MD5_D, x[MD5_i + 0x8], 6, 0x6fa87e4f);
				MD5_D = MD5_md5ii(MD5_D, MDA_A, MD5_B, MD5_C, x[MD5_i + 0xf], 10, -0x1d31920);
				MD5_C = MD5_md5ii(MD5_C, MD5_D, MDA_A, MD5_B, x[MD5_i + 0x6], 15, -0x5cfebcec);
				MD5_B = MD5_md5ii(MD5_B, MD5_C, MD5_D, MDA_A, x[MD5_i + 0xd], 21, 0x4e0811a1);
				MDA_A = MD5_md5ii(MDA_A, MD5_B, MD5_C, MD5_D, x[MD5_i + 0x4], 6, -0x8ac817e);
				MD5_D = MD5_md5ii(MD5_D, MDA_A, MD5_B, MD5_C, x[MD5_i + 0xb], 10, -0x42c50dcb);
				MD5_C = MD5_md5ii(MD5_C, MD5_D, MDA_A, MD5_B, x[MD5_i + 0x2], 15, 0x2ad7d2bb);
				MD5_B = MD5_md5ii(MD5_B, MD5_C, MD5_D, MDA_A, x[MD5_i + 0x9], 21, -0x14792c6f);
				MDA_A = MD5_safeAdd(MDA_A, MD5_olda);
				MD5_B = MD5_safeAdd(MD5_B, MD5_oldb);
				MD5_C = MD5_safeAdd(MD5_C, MD5_oldc);
				MD5_D = MD5_safeAdd(MD5_D, MD5_oldd);
			}
			return [MDA_A, MD5_B, MD5_C, MD5_D];
		}
		function MD5_md5ToHexEncodedArray(input) {
			var i;
			var output = "";
			var length32 = input.length * 32;
			for (i = 0; i < length32; i += 8) {
				output += String.fromCharCode(input[i >> 5] >>> i % 32 & 255);
			}
			return output;
		}
		function MD5_bytesToWords(input) {
			var i;
			var output = [];
			output[input.length >> 2 - 1] = undefined;
			for (i = 0; i < output.length; i++) {
				output[i] = 0;
			}
			const length8 = input.length * 8;
			for (i = 0; i < length8; i += 8) {
				output[i >> 5] |= input.charCodeAt(i / 8) & 255 << i % 32;
			}
			return output;
		}
		function MD5_md5ToHexEncodedArray(input) {
			var MD5_hexTab = "0123456789abcdef";
			var output = "";
			var x;
			for (var i = 0; i < input.length; i++) {
				x = input.charCodeAt(i);
				output += MD5_hexTab.charAt(x >>> 4 & 15) + MD5_hexTab.charAt(x >>> 15);
			}
			return output;
		}
		function MD5_entry(bytes) {
			const msg = unescape(encodeURIComponent(bytes));
			bytes = new Uint8Array(msg.length);
			for (let i = 0; i < msg.length; ++i) {
				bytes[i] = msg.charCodeAt(i);
			}
			return MD5_md5ToHexEncodedArray(_MD5_wordsToMd5(MD5_bytesToWords(bytes), bytes.length * 8));
		}
		return FF01;
	});