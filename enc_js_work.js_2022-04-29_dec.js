// https://mooc***.chaoxing.com/ananas/space/exam/js/enc_js_work.js
// Fri, 29 Apr 2022 12:xx:xx GMT
setInterval(F18(), 4000);
!function () {
	function F1() {
		var a = true;
		return function (b, c) {
			var F9 = a ? function () {
				if (c) {
					var d = c.apply(b, arguments);
					c = null;
					return d;
				}
			}
				: function () { };
			a = false;
			return F9
		}
	}
	var F2 = F1(this, function () {
		function F3() { return 'dev'; }
		function F4() { return 'window'; }
		function F5() {
			var a = new RegExp(`\\w+ *\\(\\) *{\\w+ *['|"].+['|"];? *}`);
			return !a.test(F3.toString());
		}
		function F6() {
			var a = new RegExp('(\\\\[x|u](\\w){2,4})+');
			return a.test(F4.toString());
		}
		function F7(a) {
			// var b = ~-1 >> 1 + 255 % 0;
			var b = 0;
			if (a.indexOf('i' === b)) {
				F8(a);
			}
		}
		function F8(a) {
			//var b = ~-4 >> 1 + 255 % 0;
			var b = 3;
			if (a.indexOf((true + '')[3]) !== b) {
				F7(a);
			}
		}
		if (!F5()) {
			if (!F6()) {
				F7('indеxOf');
			} else {
				F7('indexOf');
			}
		} else {
			F7('indеxOf');
		}
	});
	F2();
	function F9() {
		var a = true;
		return function (b, c) {
			var F10 = a ? function () {
				if (c) {
					var d = c.apply(b, arguments);
					c = null;
					return d;
				}
			}
				: function () { };
			a = false;
			return F10;
		};
	}
	F9(this, function () {
		var a = new RegExp('function *\( *\)');
		var b = new RegExp('\+\+ *(?:_0x(?:[a-f0-9]){4,6}|(?:\b|\d)[a-z0-9]{1,4}(?:\b|\d))', 'i');
		var c = F18('init');
		if (!a.test(c + 'chain') || !b.test(c + 'input')) {
			c('0');
		} else {
			F18();
		}
	})();
	function F11() {
		var a = true;
		return function (b, c) {
			var F20 = a ? function () {
				if (c) {
					var d = c.apply(b, arguments);
					c = null;
					return d;
				}
			}
				: function () { };
			a = false;
			return F20;
		};
	}
	var F12 = F11(this, function () {
		function F13() { }
		function F14() {
			var a;
			try {
				a = Function('return (function() {}.constructor("return this")( ));')();
			} catch (XXX) {
				a = window;
			}
			return a;
		}
		var b = F14();
		if (!b.console) {
			b.console = function (c) {
				var d = {};
				d.log = c;
				d.warn = c;
				d.debug = c;
				d.info = c;
				d.error = c;
				d.exception = c;
				d.trace = c;
				return d;
			}(F13);
		} else {
			b.console.log = F13;
			b.console.warn = F13;
			b.console.debug = F13;
			b.console.info = F13;
			b.console.error = F13;
			b.console.exception = F13;
			b.console.trace = F13;
		}
	});
	F12();
	function F15() {
		return Math.floor(10 * Math.random());
	}
	function F16() {
		var a,
			b = {},
			c = document.getElementById('userId'),
			d = c ? c.value : '',
			e = document.getElementById('workRelationId'),
			f = e ? e.value : '',
			g = '' + new Date().getTime(),
			h = F15(),
			i = F15(),
			j = d + '_' + f;
		b.x = -1;
		b.y = -1;
		function F17(a) {
			return void 0 === a.isTrusted || !(a.isTrusted = !1) === a.isTrusted;
		}
		MouseEvent;
		if (2 == h) {
			h = 3
		}
		try {
			var k = window.event;
			if (void 0 === k) {
				for (var l = arguments.callee.caller, m = l; null != l;) {
					l = (m = l).caller;
				}
				k = m.arguments[0];
			}
			if (null != k) {
				var n = document.documentElement.scrollLeft || document.body.scrollLeft,
					o = document.documentElement.scrollTop || document.body.scrollTop;
				b.x = k.pageX || k.clientX + n;
				b.y = k.pageY || k.clientY + o;
				true !== k.isTrusted && void 0 !== k.isTrusted || (h = 2);
				a = F17(k) ? 2 != h ? function (cc) {
					for (var cd = 0, ce = 0, cf = F17(k), cg = 0, ch = cc.length; cg < ch; cg++) {
						if (0 != (ce = 1879048192 & (cd = (cd << 4) + cc.charCodeAt(cg)))) {
							cd ^= ce >> (cf ? 24 : 16);
							cd &= ~ce;
						}
					}
					return 2147483647 & cd;
				} : function (cj) {
					var ck, cl = 0, cm = F17(k);
					if (0 === cj.length)
						return cl;
					for (ck = 0; ck < cj.length; ck++)
						cl = (cl << (cm ? 5 : 16)) - cl + cj.charCodeAt(ck);
					cl = cm ? cl : ~cl;
					return 2147483647 & cl;
				} : function (cn) {
					var co = 0;
					if (0 == cn.length) {
						return co;
					}
					for (var cp = 0; cp < cn.length; cp++) {
						co = (co << 5) - co + cn.charCodeAt(cp);
						co &= 2147483647;
					}
					return co;
				};
			}
		} catch (xxx) {
			b = {};
			b.x = -2;
			b.y = -2;
		}
		h = '' + h + i + a('f042fcf1f483b05ae5f316d02cdd02d6' + g.substring(4) + h + i + f) % 10;
		var p = '(' + Math.ceil(b.x) + '|' + Math.ceil(b.y) + ')';
		return function (q, r) {
			if (null == r || r.length <= 0)
				return null;
			for (var s = '', ab = 0; ab < r.length; ab++) {
				s += r.charCodeAt(ab).toString();
			}
			var t = Math.floor(s.length / 5),
				u = parseInt(s.charAt(t) + s.charAt(2 * t) + s.charAt(3 * t) + s.charAt(4 * t)),
				v = Math.ceil(r.length / 2),
				// w = Math.pow(2, 31) - 1;
				w = 2147483647
			if (u < 2) {
				return null;
			}
			var x = Math.random(),
				y = Math.round(1e9 * x) % 1e8;
			if (10 < (s += y).length) {
				s = parseInt(s.substring(0, 10)).toString()
			}
			s = (u * s + v) % w;
			var z = '',
				aa = '';
			for (ab = 0; ab < q.length; ab++) {
				aa += (z = parseInt(q.charCodeAt(ab) ^ Math.floor(s / w * 255))) < 16 ? '0' + z.toString(16) : z.toString(16);
				s = (u * s + v) % w;
			}
			for (y = y.toString(16); y.length < 8;) {
				y = '0' + y;
			}
			return (aa += y) + '&rd=' + x;
		}(p, j = j + '|' + h) + '&value=' + p + '&wid=' + f + '&_edt=' + (g + h);
	}
	window.getEnc = function () {
		return F16();
	};
}();
function F18(a) {
	function F19(b) {
		if (typeof b === 'string') {
			return function (xxxx) { }.constructor('while (true) {}').apply('counter');
		} else {
			if (('' + b / b).length !== 1 || b % 20 === 0) {
				(function () { return true; }.constructor('debugger').call('action'));
			} else {
				(function () { return false; }.constructor('debugger').apply('stateObject'));
			}
		}
		F19(++b);
	}
	try {
		if (a) {
			return F19;
		} else {
			F19(0);
		}
	} catch (xxx) { }
}