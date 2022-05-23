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
			var e = new RegExp('\w+ *\(\) *{\w+ *[\x27|\x22].+[\x27|\x22];? *}');
			return !e.test(F4.toString());
		}
		function F7() {
			var f = new RegExp('(\\[x|u](\w){2,4})+');
			return f.test(F5.toString());
		}
		function F8(g) {
			var h = ~-1 >> 1 + 255 % 0;
			if (g.indexOf('i' === h)) {
				F9(g);
			}
		}
		function F9(i) {
			var j = ~-4 >> 1 + 255 % 0;
			if (i.indexOf((true + '')[3]) !== j) {
				F8(i);
			}
		}
		if (!F6()) {
			if (!F7()) {
				F8('ind\u0435xOf');
			} else {
				F8('indexOf');
			}
		} else {
			F8('ind\u0435xOf');
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
			var o = new RegExp('function *\( *\)');
			var p = new RegExp('\+\+ *(?:_0x(?:[a-f0-9]){4,6}|(?:\b|\d)[a-z0-9]{1,4}(?:\b|\d))', 'i');
			var q = F17('init');
			if (!o.test(q + 'chain') || !p.test(q + 'input')) {
				q('0');
			} else {
				F17();
			}
		})();
	}());
	function F11() {
		var y = true;
		return function (z, aa) {
			var F12 = y ? function () {
				if (aa) {
					var ab = aa.apply(z, arguments);
					aa = null;
					return ab;
				}
			} : function () { };
			y = false;
			return F12;
		};
	}
	var F13 = F11(this, function () {
		function F14() { }
		var ac;
		try {
			var ad = Function('return (function() {}.constructor("return this")( ));');
			ac = ad();
		} catch (xxx) {
			ac = window;
		}
		if (!ac.console) {
			ac.console = function (bi) {
				var ae = {};
				ae.log = bi;
				ae.warn = bi;
				ae.debug = bi;
				ae.info = bi;
				ae.error = bi;
				ae.exception = bi;
				ae.trace = bi;
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
		return Math.floor(10 * Math.random());
	}
	function F16() {
		var af,
			ag = {},
			ah = document.getElementById('userId'),
			ai = ah ? ah.value : '',
			aj = document.getElementById('questionId'),
			ak = '',
			al = '' + new Date().getTime(),
			am = F15(),
			an = F15(),
			ao = ai;
		ag.x = -1;
		ag.y = -1;
		function F20(ap) {
			return void 0 === ap.isTrusted || !(ap.isTrusted = !1) === ap.isTrusted;
		}
		MouseEvent;
		2 == am && (am = 3);
		null != aj && (ao = ai + '_' + (ak = aj.value));
		try {
			var aq = window.event;
			if (void 0 === aq) {
				for (var ar = arguments.callee.caller, as = ar; null != ar;)
					ar = (as = ar).caller;
				aq = as.arguments[0];
			}
			if (null != aq) {
				var at = document.documentElement.scrollLeft || document.body.scrollLeft,
					au = document.documentElement.scrollTop || document.body.scrollTop;
				ag.x = aq.pageX || aq.clientX + at,
					ag.y = aq.pageY || aq.clientY + au,
					!0 !== aq.isTrusted && void 0 !== aq.isTrusted || (am = 2),
					af = F20(aq) ? 2 != am ? function (av) {
						for (var ax = 0, ay = 0, az = F20(aq), ba = 0, bb = av.length; ba < bb; ba++) {
							0 != (ay = 1879048192 & (ax = (ax << 4) + av.charCodeAt(ba))) && (ax ^= ay >> (az ? 24 : 16), ax &= ~ay);
						}
						return 2147483647 & ax;
					} : function (bc) {
						var be, bd = 0, bf = F20(aq);
						if (0 === bc.length)
							return bd;
						for (be = 0; be < bc.length; be++) {
							bd = (bd << (bf ? 5 : 16)) - bd + bc.charCodeAt(be);
							bd = bf ? bd : ~bd;
						}
						return 2147483647 & bd;
					} : function (bc) {
						var bd = 0;
						if (0 == bc.length)
							return bd;
						for (var be = 0; be < bc.length; be++) {
							bd = (bd << 5) - bd + bc.charCodeAt(be);
							bd &= 268435455;
						}
						return bd;
					};
			}
		} catch (xxx) {
			ag = {};
			ag.x = -2;
			ag.y = -2;
		}
		am = '' + am + an + af('f042fcf1f483b05ae5f316d02cdd02d6' + al.substring(4) + am + an + ak) % 10;
		var bh = '(' + Math.ceil(ag.x) + '|' + Math.ceil(ag.y) + ')';
		return function (bi, bj) {
			if (null == bj || bj.length <= 0)
				return null;
			for (var bk = '', bl = 0; bl < bj.length; bl++)
				bk += bj.charCodeAt(bl).toString();
			var bm = Math.floor(bk.length / 5),
				bn = parseInt(bk.charAt(bm) + bk.charAt(2 * bm) + bk.charAt(3 * bm) + bk.charAt(4 * bm)),
				bo = Math.ceil(bj.length / 2),
				bp = Math.pow(2, 31) - 1;
			if (bn < 2)
				return null;
			var bq = Math.random(),
				br = Math.round(1e9 * bq) % 1e8;
			10 < (bk += br).length && (bk = parseInt(bk.substring(0, 10)).toString());
			bk = (bn * bk + bo) % bp;
			var bs = '',
				bt = '';
			for (bl = 0; bl < bi.length; bl++) {
				bt += (bs = parseInt(bi.charCodeAt(bl) ^ Math.floor(bk / bp * 255))) < 16 ? '0' + bs.toString(16) : bs.toString(16);
				bk = (bn * bk + bo) % bp;
			}
			for (br = br.toString(16); br.length < 8;)
				br = '0' + br;
			return (bt += br) + '&rd=' + bq;
		}(bh, ao = ao + '|' + am) + '&value=' + bh + '&qid=' + ak + '&_edt=' + (al + am);
	}
	window.getEnc = function () {
		return F16();
	};
};
setInterval(F17(), 4e3);
function F17(a) {
	function F18(b) {
		if (typeof b === 'string') {
			return function (xxxx) { }
				.constructor('while (true) {}').apply('counter');
		} else {
			if (('' + b / b).length !== 1 || b % 20 === 0) {
				(function () { return true; }.constructor('debugger').call('action'));
			} else {
				(function () { return false; }.constructor('debugger').apply('stateObject'));
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
