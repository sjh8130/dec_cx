!function () {
	function F4() {
		var a = true;
		return function (b, c) {
			var e = a ? function () {
				if (c) {
					var d = c.apply(b, arguments);
					c = null;
					return d;
				}
			}
				: function () { };
			a = false;
			return e;
		};
	}
	var a = F4(this, function () {
		function F7() {
			return 'dev';
		}
		function F8() {
			return 'window';
		}
		function F9() {
			var e = new RegExp('\\w+ *\\(\\) *{\\w+ *[\'|\"].+[\'|\"];? *}');
			return !e.test(F7.toString());
		}
		function F10() {
			var f = new RegExp('(\\\\[x|u](\\w){2,4})+');
			return f.test(F8.toString());
		}
		function F11(g) {
			var h = ~-0x1 >> 0x1 + 0xff % 0;
			if (g.indexOf('i' === h)) {
				F12(g);
			}
		}
		function F12(i) {
			var j = ~-0x4 >> 0x1 + 0xff % 0;
			if (i.indexOf((true + '')[0x3]) !== j) {
				F11(i);
			}
		}
		if (!F9()) {
			if (!F10()) {
				F11('indеxOf');
			} else {
				F11('indexOf');
			}
		} else {
			F11('indеxOf');
		}
	});
	a();
	var F13 = function () {
		var k = true;
		return function (l, m) {
			var F14 = k ? function () {
				if (m) {
					var n = m.apply(l, arguments);
					m = null;
					return n;
				}
			} : function () { };
			k = false;
			return F14;
		};
	}();
	(function () {
		F13(this, function () {
			var p = new RegExp('function *\\( *\\)');
			var q = new RegExp('\\+\\+ *(?:_0x(?:[a-f0-9]){4,6}|(?:\\b|\\d)[a-z0-9]{1,4}(?:\\b|\\d))', 'i');
			var r = F22('init');
			if (!p.test(r + 'chain') || !q.test(r + 'input')) {
				r('0');
			} else {
				F22();
			}
		})();
	}());
	function F15() {
		var w = true;
		return function (x, y) {
			var F16 = w ? function () {
				if (y) {
					var z = y.apply(x, arguments);
					y = null;
					return z;
				}
			} : function () { };
			w = false;
			return F16;
		};
	}
	var F18 = F15(this, function () {
		var F19 = function () { };
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
			}(F19);
		} else {
			ac.console.log = F19;
			ac.console.warn = F19;
			ac.console.debug = F19;
			ac.console.info = F19;
			ac.console.error = F19;
			ac.console.exception = F19;
			ac.console.trace = F19;
		}
	});
	F18();
	function F20() {
		return Math.floor(0xa * Math.random());
	}
	function F21() {
		var ag,
			ah = {},
			ai = document.getElementById('userId'),
			aj = ai ? ai.value : '',
			ak = document.getElementById('questionId'),
			al = '',
			am = '' + new Date().getTime(),
			an = F20(),
			ao = F20(),
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
					for (bd = 0; bd < bc.length; bd++) be = (be << (bf ? 0x5 : 0x10)) - be + bc.charCodeAt(bd), be = bf ? be : ~be;
					return 0x7fffffff & be;
				} : function (bc) {
					var bd = 0;
					if (0 == bc.length) return bd;
					for (var be = 0; be < bc.length; be++) {
						bd = (bd << 0x5) - bd + bc.charCodeAt(be),
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
		an = '' + an + ao + ag(be.join('') + am.substring(0x4) + an + ao + al) % 0xa;
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
	var be = ['f', '0', '4', '2', 'f', 'c', 'f', '1', 'f', '4', '8', '3', 'b', '0', '5', 'a', 'e', '5', 'f', '3', '1', '6', 'd', '0', '2', 'c', 'd', 'd', '0', '2', 'd', '6'];
	window.getEnc = function () {
		return F21();
	};
}();
setInterval(function () {
	F22();
}, 0xfa0);
function F22(a) {
	function F23(b) {
		if (typeof b === 'string') {
			return function (xxxx) { }
			['constructor']('while (true) {}').apply('counter');
		} else {
			if (('' + b / b).length !== 1 || b % 0x14 === 0) {
				(function () {
					return true;
				}['constructor']('debugger').call('action'));
			} else {
				(function () {
					return false;
				}['constructor']('debugger').apply('stateObject'));
			}
		}
		F23(++b);
	}
	try {
		if (a) {
			return F23;
		} else {
			F23(0);
		}
	} catch (xxx) { }
}