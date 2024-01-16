!function () {
	function F1() {
		var a = true;
		return function (b, c) {
			var F2 = a ? function () {
				if (c) {
					var d = c.apply(b, arguments);
					c = null;
					return d;
				}
			} : function () { };
			a = false;
			return F2;
		};
	}
	var F3 = F1(this, function () {
		function F4() {
			return 'dev';
		}
		function F5() {
			return 'window';
		}
		function F6() {
			var e = new RegExp('\\w+ *\\(\\) *{\\w+ *[\'|\"].+[\'|\"];? *}');
			return !e.test(F4.toString());
		}
		function F7() {
			var f = new RegExp('(\\\\[x|u](\\w){2,4})+');
			return f.test(F5.toString());
		}
		function F8(g) {
			var h = ~-0x1 >> 0x1 + 0xff % 0;
			if (g.indexOf('i' === h)) {
				F9(g);
			}
		}
		function F9(i) {
			var j = ~-0x4 >> 0x1 + 0xff % 0;
			if (i.indexOf((true + '')[0x3]) !== j) {
				F8(i);
			}
		}
		if (!F6()) {
			if (!F7()) {
				F8('indеxOf');
			} else {
				F8('indexOf');
			}
		} else {
			F8('indеxOf');
		}
	});
	F3();
	var F10 = function () {
		var k = true;
		return function (l, m) {
			var F24 = k ? function () {
				if (m) {
					var n = m.apply(l, arguments);
					m = null;
					return n;
				}
			} : function () { };
			k = false;
			return F24;
		};
	}();
	(function () {
		F10(this, function () {
			var p = new RegExp('function *\\( *\\)');
			var q = new RegExp('\\+\\+ *(?:_0x(?:[a-f0-9]){4,6}|(?:\\b|\\d)[a-z0-9]{1,4}(?:\\b|\\d))', 'i');
			var r = F17('init');
			if (!p.test(r + 'chain') || !q.test(r + 'input')) {
				r('0');
			} else {
				F17();
			}
		})();
	}());
	function F11() {
		var w = true;
		return function (x, y) {
			var F12 = w ? function () {
				if (y) {
					var z = y.apply(x, arguments);
					y = null;
					return z;
				}
			} : function () { };
			w = false;
			return F12;
		};
	}
	var F13 = F11(this, function () {
		var F14 = function () { };
		var ac;
		try {
			var ad = Function('return (function() {}.constructor("return this")( ));');
			ac = ad();
		} catch (xxx) {
			ac = window;
		}
		if (!ac.console) {
			ac.console = function (af) {
				var ae = {};
				ae.log = af;
				ae.warn = af;
				ae.debug = af;
				ae.info = af;
				ae.error = af;
				ae.exception = af;
				ae.trace = af;
				return ae;
			}(F14);
		} else {
			ac.console.log = F14;
			ac.console.warn = F14;
			ac.console.debug = F14;
			ac.console.info = F14;
			ac.console.error = F14;
			ac.console.exception = F14;
			ac.console.trace = F14;
		}
	});
	F13();
	function F15() {
		return Math.floor(0xa * Math.random());
	}
	function F16() {
		var ag,
			ah = {},
			ai = document.getElementById('userId'),
			aj = ai ? ai.value : '',
			ak = document.getElementById('questionId'),
			al = '',
			am = '' + new Date().getTime(),
			an = F15(),
			ao = F15(),
			ap = aj;
		ah.x = -0x1;
		ah.y = -0x1;
		function F22(aq) {
			return void 0 === aq.isTrusted || !(aq.isTrusted = !0x1) === aq.isTrusted;
		}
		MouseEvent,
			0x2 == an && (an = 0x3),
			null != ak && (ap = aj + '_' + (al = ak.value));
		try {
			var ar = window.event;
			if (void 0 === ar) {
				for (var as = arguments.callee.caller, at = as; null != as;) as = (at = as).caller;
				ar = at.arguments[0];
			}
			if (null != ar) {
				var au = document.documentElement.scrollLeft || document.body.scrollLeft,
					av = document.documentElement.scrollTop || document.body.scrollTop;
				ah.x = ar.pageX || ar.clientX + au, ah.y = ar.pageY || ar.clientY + av, !0 !== ar.isTrusted && void 0 !== ar.isTrusted || (an = 0x2), ag = F22(ar) ? 0x2 != an ? function (aw) {
					for (var ax = 0, ay = 0, az = F22(ar), ba = 0, bb = aw.length; ba < bb; ba++) 0 != (ay = 0x70000000 & (ax = (ax << 0x4) + aw.charCodeAt(ba))) && (ax ^= ay >> (az ? 0x18 : 0x10), ax &= ~ay);
					return 0x7fffffff & ax;
				} : function (bc) {
					var bd, be = 0, bf = F22(ar);
					if (0 === bc.length) return be;
					for (bd = 0; bd < bc.length; bd++) be = (be << (bf ? 5 : 16)) - be + bc.charCodeAt(bd), be = bf ? be : ~be;
					return 0x7fffffff & be;
				} : function (bc) {
					var bd = 0;
					if (0 == bc.length) return bd;
					for (var be = 0; be < bc.length; be++) {
						bd = (bd << 5) - bd + bc.charCodeAt(be),
							bd &= 0xfffffff;
					}
					return bd;
				};
			}
		} catch (xxx) {
			ah = {};
			ah.x = -0x2;
			ah.y = -0x2;
		}
		an = '' + an + ao + ag('f042fcf1f483b05ae5f316d02cdd02d6' + am.substring(0x4) + an + ao + al) % 0xa;
		var bh = '(' + Math.ceil(ah.x) + '|' + Math.ceil(ah.y) + ')';
		return function (bi, bj) {
			if (null == bj || bj.length <= 0)
				return null;
			for (var bk = '', bl = 0; bl < bj.length; bl++)
				bk += bj.charCodeAt(bl).toString();
			var bm = Math.floor(bk.length / 0x5),
				bn = parseInt(bk.charAt(bm) + bk.charAt(0x2 * bm) + bk.charAt(0x3 * bm) + bk.charAt(0x4 * bm)),
				bo = Math.ceil(bj.length / 0x2),
				bp = Math.pow(0x2, 0x1f) - 0x1;
			if (bn < 0x2)
				return null;
			var bq = Math.random(),
				br = Math.round(0x3b9aca00 * bq) % 0x5f5e100;
			0xa < (bk += br).length && (bk = parseInt(bk.substring(0, 0xa)).toString()), bk = (bn * bk + bo) % bp;
			var bs = '',
				bt = '';
			for (bl = 0; bl < bi.length; bl++) bt += (bs = parseInt(bi.charCodeAt(bl) ^ Math.floor(bk / bp * 0xff))) < 0x10 ? '0' + bs.toString(0x10) : bs.toString(0x10), bk = (bn * bk + bo) % bp;
			for (br = br.toString(0x10); br.length < 0x8;) br = '0' + br;
			return (bt += br) + '&rd=' + bq;
		}(bh, ap = ap + '|' + an) + '&value=' + bh + '&qid=' + al + '&_edt=' + (am + an);
	}
	window.getEnc = function () {
		return F16();
	};
}();
setInterval(function () {F17();}, 4000);
function F17(a) {
	function F18(b) {
		if (typeof b === 'string') {
			return function (xxxx) { }
			['constructor']('while (true) {}').apply('counter');
		} else {
			if (('' + b / b).length !== 1 || b % 20 === 0) {
				(function () {
					return true;
				}['constructor']('debugger').call('action'));
			} else {
				(function () {
					return false;
				}['constructor']('debugger').apply('stateObject'));
			}
		}
		F18(++b);
	}
	try {
		if (a) {
			return F18;
		} else {
			F18(0);
		}
	} catch (xxx) { }
}