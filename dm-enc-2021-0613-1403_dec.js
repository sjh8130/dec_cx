; (function () {
	var A = window.jQuery;
	try {
		if (typeof (A) != 'function') {
			A = parent.jQuery
		}
		function decode(str) {
			if (!str || str.length == 0) {
				return
			}
			return str.replace(/\\x(\w{2})/g, function (I, B) {
				return window.String.fromCharCode(window.parseInt(B, 16))
			})
		}
		if (typeof (A) == 'function') {
			var C = setInterval(function () {
				A('a,div').each(function () {
					var D = A(this);
					var E = D.prop('onclick');
					if (E && typeof (E) == 'function') {
						E = E.toString();
						E = decode(E);
						if (E.indexOf('createElement') > 0 && E.indexOf('appendChild') > 0 && E.indexOf('iframe') > 0) {
							D.hide()
						}
						if (E.indexOf('cs-ans.chaoxing.com/download') > 0) {
							D.hide()
						}
					}
					if (D && D.attr('href') && D.attr('href').indexOf('cs-ans.chaoxing.com/download') > 0 && D.attr('class').indexOf('underline') == -1) {
						D.hide()
					}
				});
				A("iframe").each(function () {
					var F = A(this).contents().find('body').find('a');
					if (F && F.attr('href') && F.attr('href').indexOf('cs-ans.chaoxing.com/download') > 0 && F.attr('class').indexOf('underline') == -1) {
						F.hide()
					}
					var G = A(this).contents().find('body').find('div');
					G.each(function () {
						var H = A(this);
						var CsX10 = H.prop('onclick');
						if (CsX10 && typeof (CsX10) == 'function') {
							CsX10 = CsX10.toString();
							CsX10 = decode(CsX10);
							if (CsX10 && CsX10.indexOf('cs-ans.chaoxing.com/download') > 0) {
								H.hide()
							}
						}
					})
				})
			}, 30);
			setTimeout(function () {
				clearInterval(C)
			}, 60000)
		}
	} catch (err) { }
}
)();
