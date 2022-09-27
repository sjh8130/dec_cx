'use strict';
(function (a, b, c) {
	var d = {
		'markerStyle': {
			'width': "7px",
			'border-radius': "30%",
			'background': "url(/ananas/modules/video/marker/point.png) no-repeat center center",
			'background-size': "100%"
		},
		'markerStyle2': {
			'width': '7px',
			'border-radius': '30%',
			'background': "url(/ananas/modules/video/marker/point2.png) no-repeat center center",
			'background-size': "100%"
		},
		'markerTip': {
			'display': !![],
			'text': function func29(e) {
				return "Break:" + e.text;
			},
			'time': function func30(f) {
				return f.time;
			}
		},
		'breakOverlay': {
			'display': ![],
			'displayTime': 3,
			'text': function func31(g) {
				return "Break overlay:" + g.overlayText;
			},
			'style': {
				'width': "100%",
				'height': '20%',
				'background-color': "rgba(0,0,0,0.7)",
				'color': "white",
				'font-size': "17px"
			}
		},
		'onMarkerClick': function func27(d1) { },
		'onMarkerReached': function func28(d2, d3) { },
		'markers': []
	};
	function func1() {
		var h = new Date().getTime();
		var i = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (j) {
			var k = (h + Math.random() * 16) % 16 | 0;
			return h = Math.floor(h / 16),
				(j == 'x' ? k : k & 3 | 8).toString(16);
		});
		return i;
	};
	var l = -1;
	function func2(m) {
		var n = a.extend(!![], {}, d, m),
			o = {},
			p = [],
			q = a(this.el()),
			r = l,
			s = this,
			t = null,
			u = null,
			v = l;
		function func3() {
			p.sort(function (w, x) {
				return n.markerTip.time(w) - n.markerTip.time(x);
			});
		}
		function func4(y) {
			y.forEach(function (z) {
				z.key = func1();
				q.find(".vjs-progress-holder").append(func6(z));
				o[z.key] = z;
				p.push(z);
			}), func3();
		}
		function func5(aa) {
			return n.markerTip.time(aa) / s.duration() * 100;
		}
		function func6(ab) {
			var ac = a('<div\x20class=\x27vjs-marker\x27></div>'),
				ad = n.markerStyle;
			return (ab.text == '片头' || ab.text == '片尾') && (ad = n.markerStyle2),
				ac.css(ad).css({
					'margin-left': -parseFloat(ac.css("width")) / 2 + 'px',
					'left': func5(ab) + '%'
				}).attr("data-marker-key", ab.key).attr("data-marker-time", n.markerTip.time(ab)),
				ab.class && ac.addClass(ab.class),
				ac.on("click", function (ae) {
					var af = ![];
					typeof n.onMarkerClick === 'function' && (af = n.onMarkerClick(ab) === ![]);
					if (!af) {
						var ag = a(this).data("marker-key");
						s.currentTime(n.markerTip.time(o[ag]));
					}
				}),
				n.markerTip.display && func9(ac),
				ac;
		}
		function func7() {
			p.forEach(function (ah) {
				var ai = q.find(".vjs-marker[data-marker-key='" + ah.key + '\x27]'),
					ak = n.markerTip.time(ah);
				ai.data("marker-time") !== ak && ai.css({ 'left': func5(ah) + '%' }).attr("data-marker-time", ak);
			}), func3();
		}
		function func8(al) {
			!!u && (v = l, u.css('visibility', 'hidden'));
			r = l;
			var am = [];
			al.forEach(function (an) {
				var ao = p[an];
				ao && (delete o[ao.key], am.push(an), q.find(".vjs-marker[data-marker-key='" + ao.key + '\x27]').remove());
			});
			am.reverse();
			am.forEach(function (ap) { p.splice(ap, 1); });
			func3();
		}
		function func9(aq) {
			aq.on("mouseover", function () {
				var ar = o[a(aq).data("marker-key")];
				!!t && (t.find('.vjs-tip-inner').text(n.markerTip.text(ar)),
					t.css({
						'left': func5(ar) + '%',
						'margin-left': -parseFloat(t.width()) / 2 - 5 + 'px',
						'visibility': "visible"
					}));
			});
			aq.on("mouseout", function () { !!t && t.css("visibility", "hidden"); });
		}
		function func10() {
			t = a("<div class='vjs-tip'><div class='vjs-tip-arrow'></div><div class='vjs-tip-inner'></div></div>");
			q.find(".vjs-progress-holder").append(t);
			var as = a("<div class='vjs-tip2'><div class='vjs-tip-arrow2'></div><div class='vjs-tip-inner2'></div></div>");
			q.find(".vjs-progress-holder").append(as);
		}
		function func11() {
			if (!n.breakOverlay.display || r < 0)
				return;
			var at = s.currentTime(),
				au = p[r],
				av = n.markerTip.time(au);
			if (at >= av && at <= av + n.breakOverlay.displayTime) {
				v !== r && (v = r, u && u.find(".vjs-break-overlay-text").html(n.breakOverlay.text(au)));
				u && u.css('visibility', "visible")
			} else {
				v = l;
				u && u.css('visibility', 'hidden')
			};
		}
		function func12() {
			u = a("<div class='vjs-break-overlay'><div class='vjs-break-overlay-text'></div></div>").css(n.breakOverlay.style);
			q.append(u);
			v = l;
		}
		function func13() {
			func14();
			func11();
			m.onTimeUpdateAfterMarkerUpdate && m.onTimeUpdateAfterMarkerUpdate();
		}
		function func14() {
			if (!p.length)
				return;
			var func15 = function func26(aw) {
				if (aw < p.length - 1)
					return n.markerTip.time(p[aw + 1]);
				return s.duration();
			},
				ax = s.currentTime(),
				ay = l;
			if (r !== l) {
				var az = func15(r);
				if (ax >= n.markerTip.time(p[r]) && ax < az)
					return;
				if (r === p.length - 1 && ax === s.duration())
					return;
			}
			if (ax < n.markerTip.time(p[0]))
				ay = l;
			else
				for (var ba = 0; ba < p.length; ba++) {
					az = func15(ba);
					if (ax >= n.markerTip.time(p[ba]) && ax < az) {
						ay = ba;
						break;
					}
				}
			ay !== r && (ay !== l && m.onMarkerReached && m.onMarkerReached(p[ay], ay), r = ay);
		}
		function func16() {
			n.markerTip.display && func10();
			s.markers.removeAll();
			func4(m.markers);
			n.breakOverlay.display && func12();
			func13();
			s.on("timeupdate", func13);
		}
		s.on("loadedmetadata", function () { func16(); });
		s.markers = {
			'getMarkers': function func17() {
				return p;
			},
			'next': function func18() {
				var bb = s.currentTime();
				for (var bc = 0; bc < p.length; bc++) {
					var bd = n.markerTip.time(p[bc]);
					if (bd > bb) {
						s.currentTime(bd);
						break;
					}
				}
			},
			'prev': function func19() {
				var be = s.currentTime();
				for (var bf = p.length - 1; bf >= 0; bf--) {
					var bg = n.markerTip.time(p[bf]);
					if (bg + 0.5 < be) {
						s.currentTime(bg);
						return;
					}
				}
			},
			'add': function func20(bh) {
				func4(bh);
			},
			'remove': function func21(bi) {
				func8(bi);
			},
			'removeAll': function func22() {
				var bj = [];
				for (var bk = 0; bk < p.length; bk++) {
					bj.push(bk);
				}
				func8(bj);
			},
			'updateTime': function func23() {
				func7();
			},
			'reset': function func24(bl) {
				s.markers.removeAll();
				func4(bl);
			},
			'destroy': function func25() {
				s.markers.removeAll();
				u && u.remove();
				t && t.remove();
				s.off("timeupdate", func11);
				delete s.markers;
			}
		};
	}
	b.registerPlugin("markers", func2);
}(jQuery, window.videojs));
