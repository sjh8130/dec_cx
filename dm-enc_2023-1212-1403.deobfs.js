(function () {
	var hGWmjbOf1 = window.jQuery;
	try {
		if (typeof (hGWmjbOf1) != 'function') {
			hGWmjbOf1 = parent.jQuery
		}
		function decode(str) {
			if (!str || str.length == 0) {
				return
			}
			return str.replace(/\\x(\w{2})/g, function (T2, AlyL$31) {
				return window.String.fromCharCode(window.parseInt(AlyL$31, 16))
			})
		}
		if (typeof (hGWmjbOf1) == 'function') {
			var Crr4 = setInterval(function () {
				hGWmjbOf1('a,div').each(function () {
					var $FDr$AGm5 = hGWmjbOf1(this);
					var AsgOWLUm6 = $FDr$AGm5.prop('onclick');
					if (AsgOWLUm6 && typeof (AsgOWLUm6) == 'function') {
						AsgOWLUm6 = AsgOWLUm6.toString();
						AsgOWLUm6 = decode(AsgOWLUm6);
						if (AsgOWLUm6.indexOf('createElement') > 0 && AsgOWLUm6.indexOf('appendChild') > 0 && AsgOWLUm6.indexOf('iframe') > 0) {
							$FDr$AGm5.hide()
						}
						if (AsgOWLUm6.indexOf('cs-ans.chaoxing.com/download') > 0) {
							$FDr$AGm5.hide()
						}
					}
					if ($FDr$AGm5 && $FDr$AGm5.attr('href') && $FDr$AGm5.attr('href').indexOf('cs-ans.chaoxing.com/download') > 0 && $FDr$AGm5.attr('class').indexOf('underline') == -1) {
						$FDr$AGm5.hide()
					}
				});
				hGWmjbOf1('iframe').each(function () {
					var Dj7 = "";
					try {
						Dj7 = hGWmjbOf1(this).contents()
					} catch (e) { return }
					if (typeof Dj7 == 'undefined' || Dj7 === "") { return }
					var zacMBhXcf8 = Dj7.find('body').find('a');
					if (zacMBhXcf8 && zacMBhXcf8.attr('href') && zacMBhXcf8.attr('href').indexOf('cs-ans.chaoxing.com/download') > 0 && zacMBhXcf8.attr('class').indexOf('underline') == -1) {
						zacMBhXcf8.hide()
					}
					var XyQcK$wjL9 = hGWmjbOf1(this).contents().find('body').find('div');
					XyQcK$wjL9.each(function () {
						var Ck10 = hGWmjbOf1(this);
						var iYXj11 = Ck10.prop('onclick');
						if (iYXj11 && typeof (iYXj11) == 'function') {
							iYXj11 = iYXj11.toString();
							iYXj11 = decode(iYXj11);
							if (iYXj11 && iYXj11.indexOf('cs-ans.chaoxing.com/download') > 0) {
								Ck10.hide()
							}
						}
					})
				})
			}, 30);
			setTimeout(function () { clearInterval(Crr4) }, 60000)
		}
	} catch (err) { }
})();