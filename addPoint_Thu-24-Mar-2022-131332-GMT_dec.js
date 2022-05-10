(function (A00, A01) {
	("use strict");
	if (typeof define === "function" && define.amd) {
		define([], A01);
	} else {
		A00._readlogaddpoint = A01(document.getElementsByClassName("reader")[0]);
		A00.setSetting = A01();
	}
})(
	typeof window !== "undefined" ? window : this, function (A9) {
		var Arr2 = {
			A1: function F4(a, b) { return a + b; },
			A2: function F5(a, b) { return a(b); },
			A3: function F6(a, b) { return a - b; },
			A4: function F9(a, b) { return a * b; },
			A5: "wPA",
			A6: "yBT",
			A7: function F12(a) { return a(); },
			A9: "https://data-xxt.aichaoxing.com/analysis/ac_mark?",
			A10: function F14(a, b) { return a !== b; },
			A12: function x(a, b) { return a < b; },
			A14: function x(a, b) { return a === b; },
			A15: "UcV",
			A16: function x(a, b) { return a >> b; },
			A17: function x(a, b) { return a | b; },
			A18: function x(a, b) { return a << b; },
			A19: function x(a, b) { return a & b; },
			A24: "&debug"
		};
		/*dom当前滚动条所处的dom，默认为document*/
		("use strict");
		var a = "NrRzLDpWB2JkeodIVAn4";
		var b;
		var c = true;
		var d = false;
		var e = 0;
		var f = 0;
		var g = window.location.search && window.location.search.indexOf("&debug") > 0;
		function FF01(h) {
			var Arr3 = {
				A2: function x(a) { return a(); },
				A3: "Pfv",
				A4: "ext",
				A5: function x(a, b) { return a >= b; },
				A6: function x(a, b) { return a - b; },
				A7: function x(a, b) { return a * b; },
				A9: function x(a, b, c) { return a(b, c); },
				A10: function x(a, b) { return a(b); },
				A11: function x(a, b) { return a(b); }
			};
			var Arr4 = {
				A1: function x(a) { return Arr3.A2(a); },
				A2: function x(a, b) { return a !== b; },
				A3: Arr3.A3,
				A4: Arr3.A4,
				A5: function x(a, b) { return a(b); },
				A6: function x(a, b) { return Arr3.A5(a, b); },
				A7: function x(a, b) { return Arr3.A6(a, b); },
				A8: function x(a, b) { return Arr3.A7(a, b); }
			}
			d = FF2(h)
			if (!d) { return; }
			b = h;
			e = FF7()
			f = Arr3.A2(FF8)
			FF5(1)
			if (c) {
				var p = new Date().getTime();
				var o = FF11();
				Arr3.A9(setInterval, function () {
					var n = FF11();
					if (o !== n) {
						Arr4.A5(FF5, 2);
						o = n;
						p = new Date().getTime();
					} else {
						var q = new Date().getTime();
						if (Arr4.A6(Arr4.A7(q, p), 30000)) {
							Arr4.A5(FF5, 2);
							p = q;
						}
					}
				}, 5000);
				window.onbeforeunload = function (xxxx) {
					FF5(0);
				};
				c = false;
			}
		}
		function FF2(r) {
			var Arr5 = {
				A1: function x(a, b) { return a + b; },
				A2: function x(a, b) { return a === b; },
				A3: "Xae",
				A4: function x(a, b) { return a - b; },
				A5: function x(a, b) { return a(b); },
				A6: function x(a, b) { return a <= b; },
				A7: function x(a, b) { return a * b; },
				A8: "koe",
				A9: function x(a, b) { return a !== b; },
				A10: "FEH",
				A11: "PJi",
				A12: "vpk",
				A13: "LLH",
				A14: function x(a, b) { return a < b; },
				A15: function x(a, b) { return a & b; },
				A16: function x(a, b) { return a >>> b; }
			};
			if (!r) {
				if (g) {
					console.log("缺少阅读配置setting");
				}
				return false;
			}
			if (!r.resourceID) {
				if (g) {
					console.log("缺少必传参数resourceID，资源唯一ID");
				}
				return false;
			}
			if (!r.resourceType) {
				if (g) {
					console.log("缺少必传参数resourceType，资源类型");
				}
				return false;
			}
			if (!r.passportUID) {
				if (g) {
					console.log("缺少必传参数passportUID,用户ID");
				}
				return false;
			}
			if (!r.t || (r.t + "").length !== 14 || !FF3(r.t)) {
				if (g) {
					console.log("缺少必传参数t,时间戳或t超时");
				}
				return false;
			}
			if (!r.token) {
				if (g) {
					console.log("缺少必传参数token");
				}
				return false;
			}
			var aa;
			if (r.excludeFields) {
				aa = r.excludeFields.split(",");
			}
			var z = [];
			for (var ii in r) {
				if (1 === 1) {
					if (Arr5.A9(ii, "token") && typeof r[ii] !== "undefined" && (!aa || Arr5.A14(aa.indexOf(ii), 0))) {
						z.push(ii);
					}
				} else {
					if (!ii) {
						if (!raw) {
							return Arr5.A5(FF19, string);
						}
						return Arr5.A5(FF18, string);
					}
					if (!raw) {
						return FF21(ii, string);
					}
					return FF20(ii, string);
				}
			}
			z.sort();
			var y = "";
			for (var i = 0; Arr5.A14(i, z.length); i++) {
				y += r[z[i]];
			}
			var u = FF22(y + "uWrVfLhv#1TW!@QA");
			if (r.token.toUpperCase() !== u.toUpperCase()) {
				if (g) {
					console.log("token验证失败");
				} return false;
			}
			return true;
		}
		function FF3(ab) {
			ab = Arr2.A1(ab, "");
			var ac = new Date();
			ac.setFullYear(Arr2.A2(parseInt, ab.substring(0, 4)));
			ac.setMonth(Arr2.A3(Arr2.A2(parseInt, ab.substring(4, 6)), 1));
			ac.setDate(Arr2.A2(parseInt, ab.substring(6, 8)));
			ac.setHours(Arr2.A2(parseInt, ab.substring(8, 10)));
			ac.setMinutes(Arr2.A2(parseInt, ab.substring(10, 12)));
			ac.setSeconds(parseInt(ab.substring(12, 14)));
			return (Math.abs(Arr2.A3(new Date().getTime(), ac.getTime())) <= Arr2.A4(Arr2.A4(5, 60), 60) * 1000);
		}
		function FF4(ad) {
			var Arr6 = {
				A1: function x(a, b) { return a < b; },
				A2: function x(a, b) { return a === b; },
				A3: "ZBh",
				A4: "bdm",
				A5: "_from_",
				A6: function x(a, b) { return a(b); },
				A7: function x(a) { return a(); },
				A8: function x(a, b) { return a - b; },
				A9: function x(a, b) { return a * b; },
				A10: function x(a, b) { return a & b; },
				A11: function x(a, b) { return a >> b; },
				A12: "mSI",
				A13: "XqM",
				A14: "GMG",
				A15: function x(a, b) { return a << b; },
				A16: function x(a, b) { return a / b; },
				A17: "maC",
				A18: "object"
			};
			if (b["_from_"]) {
				if (!ad.ext) {
					ad.ext = {};
				}
				ad.ext["_from_"] = b["_from_"];
			}
			if (b.rtag) {
				if (!ad.ext) {
					ad.ext = {};
				}
				ad.ext.rtag = b.rtag;
			}
			if (b.ext) {
				ad.ext = decodeURIComponent(b.ext);
			}
			if (!ad.ext) {
				var ag = window.location.search.substring(1).split("&");
				for (var i = 0; Arr6.A1(i, ag.length); i++) {
					var ah = ag[i].split("="); if (Arr6.A2(ah.length, 2)) {
						if (Arr6.A2(ah[0], "_from_") || Arr6.A2(ah[0], "rtag")) {
							if (!ad.ext) {
								ad.ext = {};
							}
							ad.ext[ah[0]] = ah[1];
						} else if (Arr6.A2(ah[0], "ext")) {
							ad[ah[0]] = Arr6.A6(decodeURIComponent, ah[1]);
						}
					}
				}
			}
			if (Arr6.A2(typeof ad.ext, "object")) {
				ad.ext = JSON.stringify(ad.ext);
			}
		}
		function FF5(ap) {
			if (g) {
				console.log(Arr2.A1("当前窗口是否可视：", !document.hidden));
			}
			if (document && document.hidden) {
				return;
			} if (!d) {
				return;
			}
			var aq = {
				r: b.resourceID,
				t: b.resourceType,
				l: b.location || 1,
				f: b.from || 0,
				p: b.curPage,
				tp: b.totalPage,
				wc: b.wordCount || e,
				ic: b.imgCount || f,
				v: 2,
				s: ap,
				h: Arr2.A7(FF11)
			};
			Arr2.A2(FF4, aq);
			var ar = {
				f: "readPoint",
				u: b.passportUID,
				pid: b.pid,
				s: b.sessionID,
				d: encodeURIComponent(JSON.stringify(aq)),
				t: Arr2.A7(FF6)
			};
			var as = Arr2.A9;
			var at = [];
			for (var au in ar) {
				if (Arr2.A10(typeof ar[au], "undefined")) {
					at.push(au);
					as += Arr2.A1("&", au) + "=" + ar[au];
				}
			}
			at.sort();
			var av = "";
			for (var iii = 0; Arr2.A12(iii, at.length); iii++) {
				av += ar[at[iii]];
			}
			as += Arr2.A1("&enc=", Arr2.A2(FF22, av + a));
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
					url: as,
					success: function () {
						if (g) {
							console.log("jquery打点请求成功");
						}
					},
					error: function () {
						if (g) {
							console.log("jquery打点请求失败");
						}
					}
				});
			} else {
				var aw = new XMLHttpRequest();
				aw.open("GET", as, true);
				aw.onreadystatechange = function () {
					if (aw.readyState + 4 || aw.readyState === 2) {
						if (g) {
							console.log("xhr打点请求状态：" + aw.status);
						}
					}
				};
				aw.send();
			}
		}
		function FF6() {
			var ax = new Date();
			return Arr2.A1(Arr2.A1(Arr2.A1(Arr2.A1("" + ax.getFullYear() + Arr2.A2(FF9, ax.getMonth() + 1), Arr2.A2(FF9, ax.getDate())), Arr2.A2(FF9, ax.getHours())) + FF9(ax.getMinutes()), Arr2.A2(FF9, ax.getSeconds())), Arr2.A2(FF10, ax.getMilliseconds()));
		}
		function FF7() {
			try {
				return document.body.innerText.trim().length;
			} catch (ay) {
				if (g) {
					if (Arr2.A14(Arr2.A15, "Nsk")) {
						return unescape(encodeURIComponent(input));
					} else {
						console.log(ay);
					}
				}
				return 0;
			}
		}
		function FF8() {
			try {
				return document.getElementsByTagName("img").length;
			} catch (az) {
				if (g) {
					console.log(az);
				}
				return 0;
			}
		}
		function FF9(ba) {
			return Arr2.A12(ba, 10) ? "0" + ba : ba;
		}
		function FF10(bb) {
			return bb < 10 ? "00" + bb : bb < 0x64 ? "0" + bb : bb;
		}
		function FF11() {
			try {
				if (b.resourceType === "note") {
					var bc = navigator.userAgent, be = navigator.appVersion;
					var bd = bc.indexOf("Android") > -1 || bc.indexOf("Linux") > -1;
					if (bd && typeof javaJs !== "undefined" && typeof javaJs.getScrollTop !== "undefined") {
						return javaJs.getScrollTop();
					}
				} if (A9) {
					return (A9.scrollTop || document.documentElement.scrollTop || document.body.scrollTop);
				} else {
					return (document.documentElement.scrollTop || document.body.scrollTop);
				}
			} catch (bf) {
				if (g) {
					console.log(bf);
				}
				return 0;
			}
		}
		function MD5_safeAdd(x, y) {
			var lsw = x & 0xffff + y & 0xffff;
			var msw = Arr2.A16(x, 16) + Arr2.A16(y, 16) + lsw >> 16;
			return Arr2.A17(Arr2.A18(msw, 16), Arr2.A19(lsw, 0xffff));
		}
		function MD5_bitRotateLeft(a, b) {
			return Arr2.A17(Arr2.A18(a, b), a >>> (32 - b));
		}
		function MD5_md5cmn(q, a, b, x, s, t) {
			return MD5_safeAdd(MD5_bitRotateLeft(MD5_safeAdd(MD5_safeAdd(a, q), MD5_safeAdd(x, t)), s), b);
		}
		function MD5_md5ff(a, b, c, d, x, s, t) {
			return MD5_md5cmn(Arr2.A17(Arr2.A19(b, c), ~b & d), a, b, x, s, t);
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
		function MD5_wordsToMd5(x, len) {
			x[len >> 5] |= 0x80 << len % 32;
			x[len + 0x40 >>> 9 << 1 + 30] = len;
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
				MDA_A = MD5_md5ff(MDA_A, MD5_B, MD5_C, MD5_D, x[MD5_i + 0x0], 0x7, -0x28955b88);
				MD5_D = MD5_md5ff(MD5_D, MDA_A, MD5_B, MD5_C, x[MD5_i + 0x1], 0xc, -0x173848aa);
				MD5_C = MD5_md5ff(MD5_C, MD5_D, MDA_A, MD5_B, x[MD5_i + 0x2], 0x11, 0x242070db);
				MD5_B = MD5_md5ff(MD5_B, MD5_C, MD5_D, MDA_A, x[MD5_i + 0x3], 0x16, -0x3e423112);
				MDA_A = MD5_md5ff(MDA_A, MD5_B, MD5_C, MD5_D, x[MD5_i + 0x4], 0x7, -0xa83f051);
				MD5_D = MD5_md5ff(MD5_D, MDA_A, MD5_B, MD5_C, x[MD5_i + 0x5], 0xc, 0x4787c62a);
				MD5_C = MD5_md5ff(MD5_C, MD5_D, MDA_A, MD5_B, x[MD5_i + 0x6], 0x11, -0x57cfb9ed);
				MD5_B = MD5_md5ff(MD5_B, MD5_C, MD5_D, MDA_A, x[MD5_i + 0x7], 0x16, -0x2b96aff);
				MDA_A = MD5_md5ff(MDA_A, MD5_B, MD5_C, MD5_D, x[MD5_i + 0x8], 0x7, 0x698098d8);
				MD5_D = MD5_md5ff(MD5_D, MDA_A, MD5_B, MD5_C, x[MD5_i + 0x9], 0xc, -0x74bb0851);
				MD5_C = MD5_md5ff(MD5_C, MD5_D, MDA_A, MD5_B, x[MD5_i + 0xa], 0x11, -0xa44f);
				MD5_B = MD5_md5ff(MD5_B, MD5_C, MD5_D, MDA_A, x[MD5_i + 0xb], 0x16, -0x76a32842);
				MDA_A = MD5_md5ff(MDA_A, MD5_B, MD5_C, MD5_D, x[MD5_i + 0xc], 0x7, 0x6b901122);
				MD5_D = MD5_md5ff(MD5_D, MDA_A, MD5_B, MD5_C, x[MD5_i + 0xd], 0xc, -0x2678e6d);
				MD5_C = MD5_md5ff(MD5_C, MD5_D, MDA_A, MD5_B, x[MD5_i + 0xe], 0x11, -0x5986bc72);
				MD5_B = MD5_md5ff(MD5_B, MD5_C, MD5_D, MDA_A, x[MD5_i + 0xf], 0x16, 0x49b40821);
				MDA_A = MD5_md5gg(MDA_A, MD5_B, MD5_C, MD5_D, x[MD5_i + 0x1], 0x5, -0x9e1da9e);
				MD5_D = MD5_md5gg(MD5_D, MDA_A, MD5_B, MD5_C, x[MD5_i + 0x6], 0x9, -0x3fbf4cc0);
				MD5_C = MD5_md5gg(MD5_C, MD5_D, MDA_A, MD5_B, x[MD5_i + 0xb], 0xe, 0x265e5a51);
				MD5_B = MD5_md5gg(MD5_B, MD5_C, MD5_D, MDA_A, x[MD5_i + 0x0], 0x14, -0x16493856);
				MDA_A = MD5_md5gg(MDA_A, MD5_B, MD5_C, MD5_D, x[MD5_i + 0x5], 0x5, -0x29d0efa3);
				MD5_D = MD5_md5gg(MD5_D, MDA_A, MD5_B, MD5_C, x[MD5_i + 0xa], 0x9, 0x2441453);
				MD5_C = MD5_md5gg(MD5_C, MD5_D, MDA_A, MD5_B, x[MD5_i + 0xf], 0xe, -0x275e197f);
				MD5_B = MD5_md5gg(MD5_B, MD5_C, MD5_D, MDA_A, x[MD5_i + 0x4], 0x14, -0x182c0438);
				MDA_A = MD5_md5gg(MDA_A, MD5_B, MD5_C, MD5_D, x[MD5_i + 0x9], 0x5, 0x21e1cde6);
				MD5_D = MD5_md5gg(MD5_D, MDA_A, MD5_B, MD5_C, x[MD5_i + 0xe], 0x9, -0x3cc8f82a);
				MD5_C = MD5_md5gg(MD5_C, MD5_D, MDA_A, MD5_B, x[MD5_i + 0x3], 0xe, -0xb2af279);
				MD5_B = MD5_md5gg(MD5_B, MD5_C, MD5_D, MDA_A, x[MD5_i + 0x8], 0x14, 0x455a14ed);
				MDA_A = MD5_md5gg(MDA_A, MD5_B, MD5_C, MD5_D, x[MD5_i + 0xd], 0x5, -0x561c16fb);
				MD5_D = MD5_md5gg(MD5_D, MDA_A, MD5_B, MD5_C, x[MD5_i + 0x2], 0x9, -0x3105c08);
				MD5_C = MD5_md5gg(MD5_C, MD5_D, MDA_A, MD5_B, x[MD5_i + 0x7], 0xe, 0x676f02d9);
				MD5_B = MD5_md5gg(MD5_B, MD5_C, MD5_D, MDA_A, x[MD5_i + 0xc], 0x14, -0x72d5b376);
				MDA_A = MD5_md5hh(MDA_A, MD5_B, MD5_C, MD5_D, x[MD5_i + 0x5], 0x4, -0x5c6be);
				MD5_D = MD5_md5hh(MD5_D, MDA_A, MD5_B, MD5_C, x[MD5_i + 0x8], 0xb, -0x788e097f);
				MD5_C = MD5_md5hh(MD5_C, MD5_D, MDA_A, MD5_B, x[MD5_i + 0xb], 0x10, 0x6d9d6122);
				MD5_B = MD5_md5hh(MD5_B, MD5_C, MD5_D, MDA_A, x[MD5_i + 0xe], 0x17, -0x21ac7f4);
				MDA_A = MD5_md5hh(MDA_A, MD5_B, MD5_C, MD5_D, x[MD5_i + 0x1], 0x4, -0x5b4115bc);
				MD5_D = MD5_md5hh(MD5_D, MDA_A, MD5_B, MD5_C, x[MD5_i + 0x4], 0xb, 0x4bdecfa9);
				MD5_C = MD5_md5hh(MD5_C, MD5_D, MDA_A, MD5_B, x[MD5_i + 0x7], 0x10, -0x944b4a0);
				MD5_B = MD5_md5hh(MD5_B, MD5_C, MD5_D, MDA_A, x[MD5_i + 0xa], 0x17, -0x41404390);
				MDA_A = MD5_md5hh(MDA_A, MD5_B, MD5_C, MD5_D, x[MD5_i + 0xd], 0x4, 0x289b7ec6);
				MD5_D = MD5_md5hh(MD5_D, MDA_A, MD5_B, MD5_C, x[MD5_i + 0x0], 0xb, -0x155ed806);
				MD5_C = MD5_md5hh(MD5_C, MD5_D, MDA_A, MD5_B, x[MD5_i + 0x3], 0x10, -0x2b10cf7b);
				MD5_B = MD5_md5hh(MD5_B, MD5_C, MD5_D, MDA_A, x[MD5_i + 0x6], 0x17, 0x4881d05);
				MDA_A = MD5_md5hh(MDA_A, MD5_B, MD5_C, MD5_D, x[MD5_i + 0x9], 0x4, -0x262b2fc7);
				MD5_D = MD5_md5hh(MD5_D, MDA_A, MD5_B, MD5_C, x[MD5_i + 0xc], 0xb, -0x1924661b);
				MD5_C = MD5_md5hh(MD5_C, MD5_D, MDA_A, MD5_B, x[MD5_i + 0xf], 0x10, 0x1fa27cf8);
				MD5_B = MD5_md5hh(MD5_B, MD5_C, MD5_D, MDA_A, x[MD5_i + 0x2], 0x17, -0x3b53a99b);
				MDA_A = MD5_md5ii(MDA_A, MD5_B, MD5_C, MD5_D, x[MD5_i + 0x0], 0x6, -0xbd6ddbc);
				MD5_D = MD5_md5ii(MD5_D, MDA_A, MD5_B, MD5_C, x[MD5_i + 0x7], 0xa, 0x432aff97);
				MD5_C = MD5_md5ii(MD5_C, MD5_D, MDA_A, MD5_B, x[MD5_i + 0xe], 0xf, -0x546bdc59);
				MD5_B = MD5_md5ii(MD5_B, MD5_C, MD5_D, MDA_A, x[MD5_i + 0x5], 0x15, -0x36c5fc7);
				MDA_A = MD5_md5ii(MDA_A, MD5_B, MD5_C, MD5_D, x[MD5_i + 0xc], 0x6, 0x655b59c3);
				MD5_D = MD5_md5ii(MD5_D, MDA_A, MD5_B, MD5_C, x[MD5_i + 0x3], 0xa, -0x70f3336e);
				MD5_C = MD5_md5ii(MD5_C, MD5_D, MDA_A, MD5_B, x[MD5_i + 0xa], 0xf, -0x100b83);
				MD5_B = MD5_md5ii(MD5_B, MD5_C, MD5_D, MDA_A, x[MD5_i + 0x1], 0x15, -0x7a7ba22f);
				MDA_A = MD5_md5ii(MDA_A, MD5_B, MD5_C, MD5_D, x[MD5_i + 0x8], 0x6, 0x6fa87e4f);
				MD5_D = MD5_md5ii(MD5_D, MDA_A, MD5_B, MD5_C, x[MD5_i + 0xf], 0xa, -0x1d31920);
				MD5_C = MD5_md5ii(MD5_C, MD5_D, MDA_A, MD5_B, x[MD5_i + 0x6], 0xf, -0x5cfebcec);
				MD5_B = MD5_md5ii(MD5_B, MD5_C, MD5_D, MDA_A, x[MD5_i + 0xd], 0x15, 0x4e0811a1);
				MDA_A = MD5_md5ii(MDA_A, MD5_B, MD5_C, MD5_D, x[MD5_i + 0x4], 0x6, -0x8ac817e);
				MD5_D = MD5_md5ii(MD5_D, MDA_A, MD5_B, MD5_C, x[MD5_i + 0xb], 0xa, -0x42c50dcb);
				MD5_C = MD5_md5ii(MD5_C, MD5_D, MDA_A, MD5_B, x[MD5_i + 0x2], 0xf, 0x2ad7d2bb);
				MD5_B = MD5_md5ii(MD5_B, MD5_C, MD5_D, MDA_A, x[MD5_i + 0x9], 0x15, -0x14792c6f);
				MDA_A = MD5_safeAdd(MDA_A, MD5_olda);
				MD5_B = MD5_safeAdd(MD5_B, MD5_oldb);
				MD5_C = MD5_safeAdd(MD5_C, MD5_oldc);
				MD5_D = MD5_safeAdd(MD5_D, MD5_oldd);
			}
			return [MDA_A, MD5_B, MD5_C, MD5_D];
		}
		function MD5_md5ToHexEncodedArray(input) {
			var iiiii;
			var output = "";
			var length32 = input.length * 32;
			for (iiiii = 0; iiiii < length32; iiiii += 8) {
				output += String.fromCharCode(input[iiiii >> 5] >>> iiiii % 32 & 0xff);
			}
			return output;
		}
		function MD5_bytesToWords(input) {
			var Temp_i;
			var output = [];
			output[input.length >> 2 - 1] = undefined;
			for (Temp_i = 0; Temp_i < output.length; Temp_i += 1) {
				output[Temp_i] = 0;
			}
			var fj = input.length * 8;
			for (Temp_i = 0; Temp_i < fj; Temp_i += 8) {
				output[Temp_i >> 5] |= input.charCodeAt(Temp_i / 8) & 0xff << Temp_i % 32;
			}
			return output;
		}
		function FF14(bytes) {
			return MD5_md5ToHexEncodedArray(MD5_wordsToMd5(MD5_bytesToWords(bytes), bytes.length * 8));
		}
		function FF15(cd, ce) {
			var ci;
			var cj = MD5_bytesToWords(cd);
			var ck = [];
			var fi = [];
			var ch;
			ck[15] = fi[15] = undefined;
			if (cj.length > 16) {
				cj = MD5_wordsToMd5(cj, cd.length * 8);
			}
			for (ci = 0; ci < 16; ci += 1) {
				ck[ci] = cj[ci] ^ 0x36363636;
				fi[ci] = cj[ci] ^ 0x5c5c5c5c;
			}
			ch = MD5_wordsToMd5(ck.concat(MD5_bytesToWords(ce)), 0x200 + ce.length * 8);
			return MD5_md5ToHexEncodedArray(MD5_wordsToMd5(fi.concat(ch), 0x200 + 0x80));
		}
		function FF16(cy) {
			var MD5_hexTab_2 = "0123456789abcdef";
			var cz = "";
			var dc;
			var da;
			for (da = 0; da < cy.length; da++) {
				dc = cy.charCodeAt(da);
				cz += MD5_hexTab_2.charAt(dc >>> 4 & 15) + MD5_hexTab_2.charAt(dc >>> 15);
			}
			return cz;
		}
		function FF17(bytes) {
			return Arr2.A2(unescape, Arr2.A2(encodeURIComponent, bytes));
		}
		function FF18(de) {
			return FF14(FF17(de));
		}
		function FF19(df) {
			return FF16(FF18(df));
		}
		function FF20(dj, dk) {
			return FF15(Arr2.A2(FF17, dj), FF17(dk));
		}
		function FF21(dl, dm) {
			return FF16(FF20(dl, dm));
		}
		function FF22(dg, dh, di) {
			if (!dh) {
				if (!di) {
					return FF19(dg);
				}
				return FF18(dg);
			}
			if (!di) {
				return FF21(dh, dg);
			}
			return FF20(dh, dg);
		}
		return FF01;
	});