(function (A, B) {
	var C = A();
	while (true) {
		try {
			var D = parseInt(TT(0x16a)) / 0x1 + -parseInt(TT(0x1e8)) / 0x2 + -parseInt(TT(0x137)) / 0x3 + -parseInt(TT(0x18a)) / 0x4 * (-parseInt(TT(0x178)) / 0x5) + -parseInt(TT(0xf8)) / 0x6 * (parseInt(TT(0x1ff)) / 0x7) + parseInt(TT(0x15d)) / 0x8 + parseInt(TT(0x175)) / 0x9 * (parseInt(TT(0x126)) / 0xa);
			if (D === B)
				break;
			else
				C['push'](C['shift']());
		} catch (_0x288080) {
			C['push'](C['shift']());
		}
	}
}(TTTT, 0xf12cd),
	Ext[TT(0x108)][TT(0x128)] = true,
	Ext['isIpad'] = navigator[TT(0x179)][TT(0x12f)](TT(0x1ec)) > -0x1,
	Ext[TT(0x18d)] = !!navigator[TT(0x179)][TT(0x18e)](/\(i[^;]+;( U;)? CPU.+Mac OS X/),
	Ext['isAndroid'] = navigator[TT(0x179)][TT(0x12f)](TT(0x10d)) > -0x1,
	Ext[TT(0x1fb)] = !!navigator['userAgent'][TT(0x18e)](/metasr/i),
	Ext['isChaoxing'] = navigator[TT(0x179)]['indexOf'](TT(0x127)) > -0x1);
function greenligth() {
	Ext[TT(0x1db)](window[TT(0xfa)])['parent']()['addCls']('ans-job-finished');
}
function isUnFinishJob() {
	try {
		var _0x2a44f7 = Ext[TT(0x1db)](window[TT(0xfa)])[TT(0x17a)]();
		if (_0x2a44f7 && _0x2a44f7[TT(0xf6)]('ans-job-icon'))
			return !Ext['fly'](window[TT(0xfa)])[TT(0x116)]()[TT(0xf6)](TT(0x1f5));
		return false;
	} catch (_0x3b3bc7) {
		console[TT(0x14f)](_0x3b3bc7);
	}
	return false;
}
var isViturlEdit = false
	, ff = 0x1;
function proxy_completed() {
	ed_complete && (greenligth(),
		ed_complete());
}
function config(_0x2f633b) {
	return window[TT(0xfa)]['getAttribute'](_0x2f633b);
}
function getCookie(objname) {
	var _0x47468a = document['cookie'][TT(0x10c)](';\x20');
	for (var _0x55f700 = 0x0; _0x55f700 < _0x47468a[TT(0x1f2)]; _0x55f700++) {
		var _0x5887e4 = _0x47468a[_0x55f700][TT(0x10c)]('=');
		if (_0x5887e4[0x0] == objname)
			return unescape(_0x5887e4[0x1]);
	}
}
function showMoocPlayer(_0xb851b2) {
	loadMultiFile([{
		'src': TT(0x17b),
		'tag': TT(0x11d),
		'type': TT(0x18b),
		'defer': TT(0x15f)
	}, {
		'src': TT(0x194),
		'tag': 'script',
		'type': TT(0x18b),
		'defer': TT(0x15f)
	}, {
		'src': TT(0x1d9),
		'tag': 'script',
		'type': TT(0x18b),
		'defer': TT(0x15f)
	}], function () {
		loadMultiFile([{
			'src': TT(0xed),
			'tag': TT(0x11d),
			'type': TT(0x18b),
			'defer': TT(0x15f)
		}, {
			'src': TT(0x124),
			'tag': TT(0x11d),
			'type': 'text/javascript',
			'defer': TT(0x15f)
		}, {
			'src': TT(0x1b0),
			'tag': TT(0x11d),
			'type': TT(0x18b),
			'defer': TT(0x15f)
		}], function () {
			var _0x6f7b5f = new MoocPlayer({
				'isSendLog': !!parent['AttachmentSetting'] && parent['AttachmentSetting']['control'],
				'data': _0xb851b2,
				'height': 0x21c,
				'width': 0x2a4
			});
		});
	});
}
function showHTML5Player(_0x3449fd) {
	Ext[TT(0x12e)]('reader')['setHTML'](TT(0x1cc)),
		new ans[(TT(0x177))]({
			'videojs': TT(0x1e1),
			'params': _0x3449fd
		}),
		document[TT(0xfd)](TT(0x1e1))[0x0][TT(0x1f3)](TT(0x16e), function () {
			var _0x185116 = parent[TT(0xff)][TT(0xfd)](TT(0x13e));
			for (var _0x43ec91 = 0x0; _0x43ec91 < _0x185116[TT(0x1f2)]; _0x43ec91++) {
				if (_0x185116[_0x43ec91]['getAttribute'](TT(0x1bd))[TT(0x12f)]('microCourse') != -0x1) {
					var _0x509717 = _0x185116[_0x43ec91]['contentWindow'][TT(0xff)][TT(0xfd)](TT(0x13e))[0x0][TT(0x131)];
					_0x509717[TT(0x19f)][TT(0x1a1)] && _0x509717['PageView'][TT(0x1a1)]();
				}
			}
			$('.vjs-subs-caps-button\x20.vjs-icon-placeholder')[TT(0x14a)](function () {
				$(TT(0x1e3))['length'] > 0x0 && ($(TT(0x1e3))[TT(0x143)]({
					'cursorborder': '',
					'cursorwidth': 0x8,
					'cursorcolor': '#CAD5E6',
					'boxzoom': false,
					'autohidemode': true
				}),
					$(TT(0x1e3))[TT(0x1da)]()[TT(0x11a)]());
			});
		});
	function _0x19c9a3() {
		var _0xfe7022 = $('#video')[TT(0x120)]()
			, _0x5e50c1 = $(TT(0x12a))[TT(0x120)]()
			, _0x541723 = (parseInt(_0xfe7022) - 0x3c - parseInt(_0x5e50c1)) / 0x2;
		$('#sp_video_ppt_pic')['length'] > 0x0 && $(TT(0x12a))[TT(0x1d8)](TT(0x1dd)) ? ($(TT(0x12a))[TT(0x1e2)](TT(0x164), _0x541723 + 'px'),
			$('#sp_video_ppt_pic')[TT(0x1e2)](TT(0x1a6), '0')) : ($(TT(0x12a))[TT(0x1e2)](TT(0x164), '0px'),
				$(TT(0x12a))[TT(0x1e2)](TT(0x1a6), TT(0x139)));
	}
	$(TT(0xef))[TT(0x10b)](function () {
		setTimeout(_0x19c9a3, 0x12c);
	}),
		$(window)[TT(0x11a)](function () {
			setTimeout(_0x19c9a3, 0x1f4);
		});
}
var wrongObj = ''
	, videoName = ''
	, videoJobId = ''
	, videoObjectId = '';
function loadVideo() {
	var _0x3ba76d = config(TT(0x10f))
		, _0x1821fb = Ext['get'](TT(0x106));
	if (!_0x3ba76d) {
		_0x1821fb[TT(0x1aa)](TT(0x111));
		return;
	}
	wrongObj = _0x3ba76d,
		videoObjectId = _0x3ba76d;
	var _0x4c5bec = window[TT(0xfa)]
		, _0x49f7cc = Ext['decode'](_0x4c5bec[TT(0xf0)](TT(0x1bb)))
		, _0xf50325 = parent[TT(0x165)]
		, _0x3341fa = config(TT(0x1fe))
		, _0x59ddb4 = 0x0
		, _0x400657 = config(TT(0x1f8))
		, _0x2b6e95 = config('vend')
		, _0x382d57 = config(TT(0xf4)) || ''
		, _0x4143c9 = _0x49f7cc ? _0x49f7cc[TT(0x1ab)] == null ? 0x0 : _0x49f7cc[TT(0x1ab)] : 0x0
		, _0x36eb8b = _0xf50325 && _0xf50325[TT(0x169)]
		, _0x276dc5 = config(TT(0x105)) == TT(0x19e) ? true : false
		, _0xaefce8 = config(TT(0x16c)) == 'true' ? true : false
		, _0x501bc6 = Ext[TT(0x12e)](TT(0x174))
		, _0x34fa11 = Ext[TT(0x12e)]('hl')
		, _0x40bd74 = Ext[TT(0x12e)](TT(0x1de))
		, _0x19cf18 = Ext[TT(0x12e)](TT(0xf2))
		, _0x2750bc = null
		, _0x31df54 = _0x49f7cc ? _0x49f7cc['rt'] ? _0x49f7cc['rt'] : 0.9 : 0.9;
	_0x382d57 == '' ? videoJobId = _0x49f7cc && _0x49f7cc[TT(0x147)] ? _0x49f7cc[TT(0x147)] : '' : videoJobId = _0x382d57;
	var _0x1820bf = flashChecker()[TT(0x149)];
	try {
		isTeacher = top['location'][TT(0x163)][TT(0x12f)](TT(0x1c5)) > 0x0 || top[TT(0x1f4)][TT(0x163)][TT(0x12f)](TT(0x103)) > 0x0;
	} catch (_0x4746dd) { }
	var _0x30d59d = parent[TT(0x160)]
		, _0x4ac149 = _0x49f7cc ? _0x49f7cc['doublespeed'] != 0x0 ? 0x1 : 0x0 : 0x1;
	_0x49f7cc[TT(0x1c0)] && _0x49f7cc[TT(0xfb)] && _0x49f7cc[TT(0x100)] && (isViturlEdit = true);
	function _0x3bf3dd(_0x2cdd68) {
		if (_0x2cdd68 && _0x2cdd68['length'] == 0x0)
			return;
		if (Ext[TT(0x134)](TT(0x145)) != null) {
			var _0x199546 = '';
			for (var _0x4e1852 = 0x0, _0x3b10a8 = _0x2cdd68[TT(0x1f2)]; _0x4e1852 < _0x3b10a8; _0x4e1852++) {
				_0x199546 += TT(0x1c3) + _0x2cdd68[_0x4e1852]['id'] + TT(0xee) + _0x2cdd68[_0x4e1852]['name'] + TT(0x13f);
			}
			Ext[TT(0x134)](TT(0x145))[TT(0x1aa)](_0x199546),
				Ext['select'](TT(0x129))[TT(0x1f7)](TT(0x114), 'block');
		}
	}
	function _0x2f4ef2() {
		_0x59ddb4 <= 0x64 && _0x34fa11[TT(0x1f1)]((_0x59ddb4 += 0x5) + '%');
		var _0x119049 = getCookie(TT(0x183)) || '';
		Ext[TT(0x108)][TT(0x161)]({
			'url': TT(0x110) + _0x3ba76d + '?k=' + _0x119049 + TT(0x195),
			'success': function (_0x2e2621) {
				var _0x416529 = eval('(' + _0x2e2621[TT(0x1a0)] + ')');
				Ext[TT(0x12e)]('loading')[TT(0x142)]();
				switch (_0x416529[TT(0x11c)]) {
					case TT(0x167):
						_0x40bd74['remove'](),
							videoName = _0x49f7cc && _0x49f7cc[TT(0x138)] || '';
						_0x30d59d != 'false' && (Ext[TT(0x1db)](window[TT(0xfa)])['parent']()[TT(0x107)](TT(0x135)) != null ? top[TT(0x1f4)][TT(0x163)][TT(0x12f)](TT(0x1ad)) > -0x1 ? Ext[TT(0x1db)](window['frameElement'])['parent']()['insertHtml'](TT(0x1c9), '<div\x20title=\x22' + videoName + TT(0x1e9) + videoName + TT(0x1d1)) : Ext['fly'](window[TT(0xfa)])[TT(0x116)]()[TT(0x107)](TT(0x135))['insertHtml']('beforeEnd', '<span\x20title=\x22' + videoName + TT(0x1df) + videoName + TT(0x182)) : Ext['fly'](window[TT(0xfa)])[TT(0x116)]()[TT(0x16f)](TT(0x1c9), TT(0x172) + videoName + TT(0x1e9) + videoName + TT(0x1d1)));
						var _0x48356d = _0x416529['duration']
							, _0x10da0a = {
								'enableFastForward': _0x276dc5 ? 0x0 : 0x1,
								'enableSwitchWindow': _0xaefce8 ? 0x0 : 0x1,
								'duration': _0x48356d,
								'httpmd': _0x416529[TT(0x112)],
								'http': _0x416529['http'],
								'httphd': _0x416529[TT(0x1ba)],
								'httpshd': _0x416529[TT(0x162)],
								'filename': _0x416529['filename'],
								'dtoken': _0x416529[TT(0x1cf)],
								'videoTopicCloud': _0x36eb8b
							};
						window['duration'] = _0x48356d;
						_0x416529[TT(0xf3)] && (_0x10da0a[TT(0xf3)] = _0x416529[TT(0xf3)]);
						document['cookie'][TT(0x1f2)] > 0x0 && (_0x10da0a['memberinfo'] = getCookie(TT(0x1fc)),
							_0x10da0a['questionErrorLogUrl'] = ServerHosts[TT(0x197)] + TT(0x1f6));
						_0x3341fa && (_0x10da0a[TT(0x1fe)] = _0x3341fa);
						_0x416529['duration'] && (_0x10da0a[TT(0x1b1)] = _0x416529[TT(0x1d7)]);
						if (_0xf50325 && _0xf50325[TT(0x1c4)] == 0x1)
							_0x10da0a[TT(0x156)] = 'https://p.ananas.chaoxing.com/star3/origin/a26e16b5ac8e769bba6bda57343b7d57.png';
						else
							_0x416529[TT(0x156)] && (_0x10da0a[TT(0x156)] = _0x416529[TT(0x156)]);
						_0xf50325 && (_0x10da0a[TT(0x15a)] = _0xf50325[TT(0x15a)]);
						_0x416529[TT(0x198)] && (_0x10da0a[TT(0x198)] = _0x416529[TT(0x198)]);
						_0x416529[TT(0x150)] && (_0x10da0a[TT(0x150)] = _0x416529['subobjectid']);
						_0x400657 && (_0x10da0a[TT(0x15e)] = _0x400657);
						_0x2b6e95 && (_0x10da0a['endTime'] = _0x2b6e95);
						_0x10da0a['rt'] = _0x31df54,
							_0x10da0a[TT(0x171)] = _0xf50325 && _0xf50325[TT(0x171)];
						isTeacher && (_0x10da0a[TT(0x171)] = false);
						var _0x252fdf = {}, _0x1ab8bd, _0x599f3f, _0x4e84f7;
						if (_0xf50325 && _0xf50325['control']) {
							var _0xfaeffe = _0xf50325['attachments']
								, _0x48cfc6 = _0xf50325[TT(0x1d3)]
								, _0x235b70 = _0x416529[TT(0x10f)] + '-' + (_0x400657 ? _0x400657 : 0x0) + '-' + (_0x2b6e95 ? _0x2b6e95 : _0x48356d) + '-' + _0x382d57;
							_0x48cfc6 && (_0x10da0a[TT(0x17e)] = _0x48cfc6[TT(0x17e)] || '',
								_0x10da0a[TT(0x183)] = _0x48cfc6[TT(0x183)] || '');
							for (var _0xecb318 = 0x0; _0xecb318 < _0xfaeffe[TT(0x1f2)]; _0xecb318++) {
								_0x252fdf = _0xfaeffe[_0xecb318],
									_0x599f3f = 0x0,
									_0x4e84f7 = _0x48356d;
								_0x252fdf[TT(0x119)] && (_0x252fdf[TT(0x119)][TT(0x1f8)] && (_0x599f3f = _0x252fdf[TT(0x119)][TT(0x1f8)]),
									_0x252fdf[TT(0x119)][TT(0x187)] && (_0x4e84f7 = _0x252fdf[TT(0x119)][TT(0x187)]));
								!_0x252fdf['jobid'] && (_0x252fdf[TT(0xf4)] = '');
								_0x1ab8bd = _0x252fdf[TT(0x19d)] + '-' + _0x599f3f + '-' + _0x4e84f7 + '-' + _0x252fdf['jobid'];
								if (_0x235b70 == _0x1ab8bd) {
									Ext['apply'](_0x10da0a, _0xf50325[TT(0x1d3)]),
										_0x10da0a[TT(0x117)] = _0x252fdf['headOffset'] ? Math[TT(0x202)](parseInt(_0x252fdf[TT(0x117)]) / 0x3e8) : 0x0,
										_0x10da0a[TT(0x19d)] = _0x252fdf[TT(0x19d)],
										_0x10da0a['otherInfo'] = _0x252fdf[TT(0x11e)],
										_0x10da0a['isPassed'] = _0x252fdf[TT(0x14e)],
										_0x10da0a[TT(0x1c7)] = _0x252fdf[TT(0x113)],
										_0x10da0a[TT(0x1ab)] = _0x4143c9;
									_0x252fdf[TT(0x1a3)] && _0x3bf3dd(_0x252fdf[TT(0x1a3)]);
									_0x252fdf[TT(0x119)] && _0x252fdf[TT(0x119)]['fastforward'] && _0x252fdf['property']['fastforward'] == TT(0x19e) && (_0x10da0a[TT(0x1f0)] = 0x0);
									_0x252fdf[TT(0x119)] && typeof _0x252fdf[TT(0x119)][TT(0x1d4)] != 'undefined' && _0x252fdf[TT(0x119)][TT(0x1d4)] == 0x0 && (_0x10da0a['doublespeed'] = 0x0,
										_0x4ac149 = 0x0);
									var _0x43940c = _0x10da0a[TT(0x170)];
									typeof _0x43940c == TT(0x122) || _0x43940c == 0x2 ? _0x10da0a['doublespeed'] = _0x4ac149 : _0x10da0a[TT(0x1d4)] = _0x43940c;
									_0x382d57 && (_0x10da0a[TT(0xf4)] = _0x382d57,
										!_0x252fdf['job'] && (!isTeacher && greenligth(),
											ed_complete = false,
											_0x10da0a[TT(0x1f0)] = 0x1,
											_0x10da0a[TT(0x1ed)] = 0x1,
											_0x10da0a[TT(0x117)] = 0x0));
									_0x10da0a['reportUrl'] = _0x10da0a[TT(0x14d)] && _0x10da0a['reportUrl'][TT(0x1cd)](TT(0x192), window[TT(0x1f4)][TT(0x1be)] + '//'),
										window['_jobindex'] = _0xecb318;
									break;
								}
							}
						} else {
							var _0x43940c = _0x10da0a['schooldoublespeed'];
							typeof _0x43940c == 'undefined' || _0x43940c == 0x2 ? _0x10da0a[TT(0x1d4)] = _0x4ac149 : _0x10da0a[TT(0x1d4)] = _0x43940c;
						}
						_0x10da0a['ignoreVideoCtrl'] == 0x1 && (_0x10da0a[TT(0x1f0)] = 0x1,
							_0x10da0a[TT(0x1ed)] = 0x1);
						(!_0x10da0a[TT(0x171)] || isTeacher) && (ed_complete = false,
							_0x10da0a[TT(0x1f0)] = 0x1,
							_0x10da0a[TT(0x1ed)] = 0x1,
							_0x10da0a[TT(0x117)] = 0x0);
						(_0x10da0a[TT(0x14e)] || _0x10da0a[TT(0x117)] > _0x10da0a[TT(0x1b1)] * 0.95) && (_0x10da0a['headOffset'] = 0x0);
						_0x2750bc && clearInterval(_0x2750bc),
							_0x10da0a[TT(0xf1)] = $('.maskDiv1', top[TT(0xff)])[TT(0x1f2)] > 0x0 && /\/studentstudy/['test'](top[TT(0x1f4)]['pathname']) ? true : false,
							_0x10da0a[TT(0x136)] = /\/studentstudy/[TT(0x141)](top[TT(0x1f4)][TT(0x1ce)]) && !Ext[TT(0x1db)](window[TT(0xfa)])[TT(0x116)]()[TT(0xf6)](TT(0x1f5));
						if (supportH5Video())
							_0x49f7cc[TT(0x1ab)] && (loadMultiFile([{
								'src': TT(0x17b),
								'tag': TT(0x11d),
								'type': TT(0x18b),
								'defer': TT(0x15f)
							}], function () {
								loadMultiFile([{
									'src': TT(0xed),
									'tag': 'script',
									'type': 'text/javascript',
									'defer': 'defer'
								}], function () {
									loadMultiFile([{
										'src': TT(0x186),
										'tag': TT(0x11d),
										'type': 'text/javascript',
										'defer': TT(0x15f)
									}]);
								});
							}),
								Ext['select'](TT(0x17c))[TT(0x1f7)](TT(0x114), TT(0x121)),
								Ext[TT(0x134)]('.sp_function')[TT(0x1f7)]('height', TT(0x13c))),
								ff = _0x10da0a['enableFastForward'],
								showHTML5Player(_0x10da0a);
						else {
							if (!_0x1820bf) {
								var _0x5060d4 = TT(0x1c6);
								Ext[TT(0x12e)](TT(0x106))['setHTML'](TT(0x102) + _0x5060d4 + TT(0x1c2));
								return;
							}
							showMoocPlayer(_0x10da0a);
						}
						sendReadZTMediaLog(0x0);
						break;
					case TT(0x155):
						_0x2750bc && clearInterval(_0x2750bc),
							_0x40bd74[TT(0x180)](),
							_0x501bc6[TT(0x125)]();
						break;
					case 'waiting':
						_0x40bd74[TT(0x1a8)](TT(0x1e6));
						break;
					case TT(0x152):
					case TT(0x1b4):
						_0x40bd74[TT(0x1a8)](TT(0x1ee));
						break;
				}
			},
			'failure': function (_0xef7372) {
				_0xef7372['status'] == 0x0 ? (_0x2750bc && clearInterval(_0x2750bc),
					_0x40bd74['update']('<div\x20class=\x22line1\x22><div\x20class=\x22line2\x22></div></div><p\x20class=\x22tipStyle\x22>视频加载超时，请刷新页面重试【9003】</p>'),
					Ext[TT(0x12e)](TT(0x16b))['hide']()) : (_0x2750bc && clearInterval(_0x2750bc),
						_0x40bd74[TT(0x1a8)](TT(0x123)),
						Ext['get'](TT(0x16b))[TT(0x142)]());
			}
		});
	}
	_0x2f4ef2();
}
function supportH5Video() {
	var _0x837f55 = function () {
		var _0x113f66 = document['createElement'](TT(0x1e1));
		if (typeof _0x113f66['canPlayType'] == TT(0x133)) {
			var _0x31a031 = _0x113f66['canPlayType'](TT(0x154));
			if (_0x31a031[TT(0x14b)]() == 'maybe' || _0x31a031[TT(0x14b)]() == TT(0x130))
				return true;
			var _0x31a031 = _0x113f66['canPlayType']('video/mp4;codecs=\x22avc1.64001E,mp4a.40.2\x22');
			if (_0x31a031[TT(0x14b)]() == TT(0x173) || _0x31a031['toLowerCase']() == TT(0x130))
				return true;
		}
		return false;
	};
	if (Ext[TT(0x185)] && Ext[TT(0x146)])
		return false;
	return _0x837f55();
}
var playLogTimer;
function sendReadZTMediaLog(_0x34f8bc) {
	try {
		var _0x2bb074 = function (_0x12972a) {
			var _0x3e88be = new RegExp('(^|&)' + _0x12972a + TT(0x193))
				, _0x5f3b9d = parent[TT(0x1f4)][TT(0x1a7)][TT(0x17f)](0x1)[TT(0x18e)](_0x3e88be);
			if (_0x5f3b9d != null)
				return unescape(_0x5f3b9d[0x2]);
			return null;
		}
			, _0x27023e = parent[TT(0x165)]
			, _0x1187df = window[TT(0xfa)]
			, _0x3924c0 = _0x1187df[TT(0x12c)][TT(0x12c)][TT(0x12c)][TT(0xf0)]('kid');
		if (_0x3924c0) {
			var _0x3f1cd4 = TT(0x101) + _0x3924c0;
			_0x27023e = top[_0x3f1cd4],
				typeof _0x27023e == TT(0x104) && (_0x27023e = eval('(' + _0x27023e + ')'));
		}
		if (!_0x27023e)
			return;
		var _0x60452f = _0x27023e[TT(0x1d3)][TT(0x166)]
			, _0x1f959e = _0x27023e[TT(0x1d3)]['state'];
		if (_0x60452f == 0x1 || _0x1f959e == 0x1)
			return;
		var _0x3efc85 = top[TT(0x12b)] || TT(0xf9);
		if (_0x3efc85 == 'ZT' || _0x3efc85 == 'HB' || _0x3efc85 == TT(0x15c)) {
			var _0x1b197c = parent[TT(0x1f4)][TT(0x1a7)] || ''
				, _0x46bc74 = getCookie(TT(0x1e7))
				, _0x32d81c = config('objectid')
				, _0x2c96a8 = 0x0
				, _0x40cdbb = _0x27023e[TT(0x1d3)]['courseid']
				, _0xdd6ffe = _0x27023e[TT(0x1d3)][TT(0x157)]
				, _0x2ccf6b = window[TT(0x1d7)]
				, _0x18d4e0 = _0x2bb074('_from_')
				, _0x37a58d = _0x27023e[TT(0x1b9)]
				, _0xc077ac = '';
			if (_0x37a58d[TT(0x1f2)] > 0x0)
				for (var _0x49a4c0 = 0x0, _0x2dbc58 = _0x37a58d[TT(0x1f2)]; _0x49a4c0 < _0x2dbc58; _0x49a4c0++) {
					var _0x309b36 = _0x37a58d[_0x49a4c0]
						, _0x5bdca8 = _0x309b36['objectId'];
					if (_0x5bdca8 == _0x32d81c) {
						if (_0x34f8bc == 0x0)
							_0xc077ac = _0x309b36[TT(0x1ac)];
						else
							_0x34f8bc == 0x1 ? _0xc077ac = _0x309b36[TT(0x1e5)] : _0xc077ac = _0x309b36[TT(0x190)];
						break;
					}
				}
			var _0x5b97dd = location['protocol'] + TT(0x1f9) + _0x40cdbb + TT(0x196) + _0xdd6ffe + TT(0x18f) + _0x32d81c + '&st=' + _0x34f8bc + TT(0x1d6) + _0x2c96a8 + TT(0x115) + _0x2ccf6b * 0x3e8 + TT(0x1d0) + _0x46bc74 + '&_from_=' + _0x18d4e0 + TT(0x10e) + _0xc077ac
				, _0x28124b = function () {
					Ext['Ajax'][TT(0x161)]({
						'url': _0x5b97dd,
						'success': function (_0x167762) { }
					});
				};
			_0x28124b();
			if (_0x34f8bc == 0x1)
				playLogTimer && clearInterval(playLogTimer),
					playLogTimer = setInterval(function () {
						_0x28124b();
					}, 0x1388);
			else
				_0x34f8bc == 0x2 && (playLogTimer && clearInterval(playLogTimer));
		}
	} catch (_0x1b5aa7) { }
}
function receiveStudyLog() {
	try {
		var _0x41ed26 = parent[TT(0x165)];
		if (!_0x41ed26)
			return;
		if (_0x41ed26 && _0x41ed26[TT(0x1d3)]) {
			var _0x5e4e15 = _0x41ed26[TT(0x1d3)];
			if (_0x5e4e15[TT(0x140)] != 0x1)
				return;
			var _0x10b056 = TT(0x17d)
				, _0x8eb090 = new Date()[TT(0x1d5)]()
				, _0x3b791e = _0x5e4e15[TT(0x19c)]
				, _0x40cddb = _0x5e4e15['clazzId']
				, _0x2bce65 = _0x5e4e15['cpi']
				, _0x32a988 = _0x5e4e15[TT(0x17e)]
				, _0x294d32 = _0x5e4e15[TT(0x157)]
				, _0x2ef1f3 = _0x5e4e15[TT(0x183)]
				, _0x2e3ad4 = ''
				, _0x59b90f = config(TT(0x10f))
				, _0x42b0f3 = config(TT(0xf4)) || ''
				, _0x31c185 = _0x41ed26[TT(0x1b9)];
			if (_0x31c185['length'] > 0x0)
				for (var _0x3c1450 = 0x0, _0x267ebc = _0x31c185[TT(0x1f2)]; _0x3c1450 < _0x267ebc; _0x3c1450++) {
					var _0x17c653 = _0x31c185[_0x3c1450]
						, _0x458e27 = _0x17c653[TT(0x19d)];
					if (_0x458e27 == _0x59b90f) {
						_0x2e3ad4 = _0x17c653[TT(0x113)];
						break;
					}
				}
			var _0x7357d1 = {
				'relationId': _0x2e3ad4,
				'objectId': _0x59b90f,
				'userId': _0x32a988,
				'knowledgeId': _0x294d32,
				'fid': _0x2ef1f3,
				'jobId': _0x42b0f3
			}
				, _0x2ba937 = {
					'courseId': _0x3b791e,
					'clazzId': _0x40cddb,
					'personId': _0x2bce65,
					'eventType': 0x4,
					'eventTime': _0x8eb090,
					'data': _0x7357d1
				}
				, _0x3e6b33 = _0x5e4e15['mtEnc'];
			Ext[TT(0x108)][TT(0x161)]({
				'method': TT(0x1a2),
				'url': _0x10b056,
				'params': {
					'log': JSON[TT(0x19a)](_0x2ba937),
					'enc': _0x3e6b33
				},
				'success': function (_0xf75185) { }
			});
		}
	} catch (_0x34885b) { }
}
function createVideoTask() {
	if (isViturlEdit)
		return;
	var _0x56636b = location[TT(0x1be)] + '//convertservice.chaoxing.com/video/createVideoTask?objectid=' + wrongObj;
	Ext[TT(0x108)][TT(0x161)]({
		'timeout': 0xbb8,
		'type': TT(0x12e),
		'async': false,
		'url': _0x56636b,
		'dataType': 'jsonp',
		'jsonp': TT(0x118),
		'success': function (_0x24ce67) { },
		'failure': function (_0x57b466) {
			console[TT(0x14f)]('创建任务失败');
		}
	});
}
function TTTT() {
	var A = ['/keeper/api/receive-studylog', 'userid', 'substr', 'remove', '.mui-switch', '</span>', 'fid', 'channel_', 'isIE', 'cxplayer/videodanmu.js', 'vend', '<span>', 'className', '48184WueLwh', 'text/javascript', 'clazzId', 'isIos', 'match', '&o=', 'enc2', '/videodanmaku/timerange-danmakulist', 'http://', '=([^&]*)(&|$)', '/ananas/swfobject/swfobject.js', '&flag=normal', '&c=', 'MASTER_HOST', 'thumbnails', '#noteVideoName', 'stringify', 'clientWidth', 'courseid', 'objectId', 'true', 'PageView', 'responseText', 'stopAll', 'post', 'topicList', '服务异常,稍后再试!', 'html', 'left', 'search', 'update', 'val', 'setHTML', 'danmaku', 'enc0', 'nodedetailcontroller/visitnodedetail', '@有趣@', '<span><i\x20class=\x22interestingIcon\x22></i>有趣</span>', 'cxplayer/moocplayer_4.0.11.js?v=2020-1016-2010', 'videoTotalTime', '.Note_name', 'getClazzNote', 'transfer', 'getChapterNextVideo', 'append', '<span><i\x20class=\x22huaIcon\x22></i>献花</span>', '@疑惑@', 'attachments', 'httphd', 'data', 'catch', 'src', 'protocol', '.writeNote', 'v_begin', 'danmuItem\x20left', '\x22\x20target=\x22_blank\x22>www.adobe.com</a>下载安装。<br/>如果已经安装请点击此处启用：<object\x20id=\x22swf_jlxl1lfb\x22\x20height=\x2250\x22\x20width=\x22100\x22\x20type=\x22application/x-shockwave-flash\x22\x20data=\x22/ananas/modules/video/cxplayer/player_4.0.11.swf?v=20161025\x22\x20style=\x22border:#ccc\x201px\x20solid\x22><param\x20name=\x22quality\x22\x20value=\x22high\x22><param\x20name=\x22allowScriptAccess\x22\x20value=\x22always\x22><param\x20name=\x22wMode\x22\x20value=\x22transparent\x22><param\x20name=\x22align\x22\x20value=\x22middle\x22><param\x20name=\x22bgcolor\x22\x20value=\x22#000000\x22><param\x20name=\x22swLiveConnect\x22\x20value=\x22true\x22><param\x20name=\x22loop\x22\x20value=\x22true\x22><param\x20name=\x22play\x22\x20value=\x22true\x22><param\x20name=\x22DeviceFont\x22\x20value=\x22false\x22><param\x20name=\x22allowFullScreen\x22\x20value=\x22true\x22><param\x20name=\x22menu\x22\x20value=\x22true\x22></object>', '<li><span\x20class=\x27zsCloud_span\x20topicId', 'isErya', 'teacherstudy', 'http://www.adobe.com/go/getflashplayer', 'aId', 'resumePlay', 'afterBegin', '<span><i\x20class=\x22doubtIcon\x22></i>疑惑</span>', '.formTopic', '<video\x20id=\x22video\x22\x20class=\x22video-js\x20vjs-default-skin\x20vjs-big-play-centered\x22></video>', 'replace', 'pathname', 'dtoken', '&u=', '</div>', 'playerState', 'defaults', 'doublespeed', 'getTime', '&m=', 'duration', 'hasClass', 'cxplayer/json.util.js', 'getNiceScroll', 'fly', '<span><i\x20class=\x22noZanIcon\x22></i>不赞同</span>', 'sp_ppt_pic_fullScreen', 'note1-wrap', '\x22\x20style=\x22width:\x20500px;margin-left:\x20120px;display:\x20inline-block;height:\x2023px;line-height:\x2023px;overflow:\x20hidden;text-overflow:\x20ellipsis;white-space:\x20nowrap;\x22>', 'getQRCodeURLShow1', 'video', 'css', '.vjs-subs-caps-button\x20.vjs-menu-content', 'content', 'enc1', '<div\x20class=\x22line1\x22><div\x20class=\x22line3\x22></div></div><p\x20class=\x22tipStyle\x20making\x22>视频正在转码，您无需在此页面等待【9001】</p>', 'UID', '3945130GfogTE', '\x22\x20style=\x22width:\x20500px;display:\x20inline-block;line-height:\x2023px;overflow:\x20hidden;text-overflow:\x20ellipsis;white-space:\x20nowrap;\x22>', '#noteVideoJobId', '<div\x20class=\x22danmuItem\x20right\x22>', 'iPad', 'enableSwitchWindow', '<div\x20class=\x22line1\x22><div\x20class=\x22line2\x22></div></div><p\x20class=\x22tipStyle\x22>视频上传中【9002】</p>', '@感动@', 'enableFastForward', 'setWidth', 'length', 'addEventListener', 'location', 'ans-job-finished', '/question/addquestionerror', 'setStyle', 'vbegin', '//data-xxt.aichaoxing.com/analysis/datalog?s=', 'timeline', 'isSogou', 'memberinfo', 'isPlay', 'mid', '234010YtSFoR', '.main', 'body', 'floor', 'cxplayer/scroll.js', '\x27\x20onclick=\x27markersPlayer(this)\x27>', '.vjs-fullscreen-control', 'getAttribute', 'isSupportFace', 'note1', 'cdn', 'jobid', 'elements', 'hasCls', 'setHeight', '126PboNmI', 'Course', 'frameElement', 'v_end', '.maskDiv1', 'getElementsByTagName', 'push', 'document', 'pobjectid', 'marg-', '您没有安装flashplayer，请到<a\x20href=\x22', 'course/phone/chapterdata', 'string', 'fastforward', 'reader', 'first', 'Ajax', '#type', 'showJobLimitTip', 'click', 'split', 'Android', '&enc=', 'objectid', '/ananas/status/', '未找到该文件', 'httpmd', 'aid', 'display', '&d=', 'parent', 'headOffset', 'jsoncallback', 'property', 'resize', 'toString', 'status', 'script', 'otherInfo', 'message', 'height', 'block', 'undefined', '<div\x20class=\x22line1\x22><div\x20class=\x22line3\x22></div></div><p\x20class=\x22tipStyle\x22>视频加载失败，请稍后再试【9004】</p>', 'cxplayer/cxplayer.4.0.5.js?v=20160405', 'show', '11690wPdKdq', 'ChaoXingStudy', 'autoAbort', '.zsCloud', '#sp_video_ppt_pic', 'dtype', 'parentElement', 'changePan', 'get', 'indexOf', 'probably', 'contentWindow', 'size', 'function', 'select', '.ans-job-icon', 'isShowFaceCollection', '2226027ZbQxGv', 'name', '0px', 'markers', 'setInterval', '66px', '<span><i\x20class=\x22moveIcon\x22></i>感动</span>', 'iframe', '\x20</span></li>', 'chapterCapture', 'test', 'hide', 'niceScroll', '<img\x20src=\x22/ananas/css/downgradeBlueTip.jpg\x22\x20width=\x22676\x22\x20height=\x22540\x22>', '.zsCloud_ul', 'isIE10m', '_jobid', '@献花@', 'hasFlash', 'hover', 'toLowerCase', '#noteVideoTime', 'reportUrl', 'isPassed', 'log', 'subobjectid', 'checked', 'converting', 'data-marker-time', 'video/mp4;codecs=\x22avc1.42E01E,mp4a.40.2\x22', 'failed', 'screenshot', 'knowledgeid', 'currentTime', '<span><i\x20class=\x22clapIcon\x22></i>鼓掌</span>', 'chapterVideoTranslate', 'onReady', 'MAG', '14072120GpnLtY', 'startTime', 'defer', 'isVideoVisibleName', 'request', 'httpshd', 'href', 'top', 'AttachmentSetting', 'isFiled', 'success', 'getHeight', 'videoTopicCloud', '80035QauSif', 'loading', 'switchwindow', '@鼓掌@', 'play', 'insertHtml', 'schooldoublespeed', 'control', '<div\x20title=\x22', 'maybe', 'note', '15021YByYiX', '<span><i\x20class=\x22zanIcon\x22></i>赞</span>', 'VideoJs', '255Pajqqj', 'userAgent', 'prev', 'cxplayer/jquery.min.js', '.rage_bd'];
	TTTT = function () {
		return A;
	}
		;
	return TTTT();
}
Ext[TT(0x15b)](function () {
	var _0x246009 = parent['requestSatusResourceDownGrade'];
	if (_0x246009 && _0x246009 == 0x1) {
		var _0x3180e4 = TT(0x144);
		Ext[TT(0x134)](TT(0x201))[TT(0x1aa)](_0x3180e4);
		return;
	}
	loadVideo();
});
var danmaku = {};
function getDanmuByTime(_0x2ac378, _0x1e2dfe) {
	var _0x1d2101 = parent[TT(0x165)];
	if (!_0x1d2101)
		return;
	if (_0x1d2101 && _0x1d2101[TT(0x1d3)])
		var _0x73ab5e = _0x1d2101[TT(0x1d3)]
			, _0x3f75e4 = _0x73ab5e[TT(0x19c)]
			, _0x1fa83b = _0x73ab5e[TT(0x18c)];
	else
		return;
	if (_0x2ac378 == 'pause') {
		danmaku = {};
		return;
	}
	_0x2ac378 == TT(0x16e) && (danmaku = {});
	var _0x1e6948 = config(TT(0x1fe))
		, _0x324aa1 = {
			'courseid': _0x3f75e4,
			'classid': _0x1fa83b,
			'mid': _0x1e6948,
			'timebegin': parseInt(_0x1e2dfe),
			'timeend': parseInt(_0x1e2dfe) + 0x3b
		};
	Ext['Ajax'][TT(0x161)]({
		'url': TT(0x191),
		'method': TT(0x12e),
		'params': _0x324aa1,
		'success': function (_0xc77d1b) {
			var _0xc4a8e5 = eval('(' + _0xc77d1b[TT(0x1a0)] + ')');
			if (_0xc4a8e5[TT(0x11c)] == 0x1) {
				var _0x36f3f0 = _0xc4a8e5[TT(0x1bb)];
				for (var _0x100fb9 = 0x0; _0x100fb9 < _0x36f3f0[TT(0x1f2)]; _0x100fb9++) {
					var _0x10c5a7 = _0x36f3f0[_0x100fb9][TT(0x1fa)];
					!danmaku[_0x10c5a7] && (danmaku[_0x10c5a7] = new Array()),
						danmaku[_0x10c5a7][TT(0xfe)](_0x36f3f0[_0x100fb9][TT(0x1e4)]);
				}
				_0x1e2dfe == 0x0 && danmuPlay(0x0);
			} else
				alert(TT(0x1a4));
		},
		'failure': function (_0x48e061) {
			alert(TT(0x1a4));
		}
	});
}
var count = 0x0
	, timeFlag = -0x1
	, currentTime = 0x0;
function shotdanmu(_0xed1317) {
	var _0x1c79a9 = _0xed1317[TT(0x19b)];
	_0x1c79a9 = -parseInt(_0x1c79a9);
	var _0x47b448 = 'translateX(' + _0x1c79a9 + 'px)';
	setTimeout(function () {
		_0xed1317['style']['transform'] = _0x47b448,
			_0xed1317[TT(0x189)] = TT(0x1c1);
	}, 0x1f4);
}
function danmuPlay(_0x531c85) {
	currentTime = _0x531c85;
	if (timeFlag == _0x531c85)
		return;
	timeFlag = _0x531c85;
	var _0x27640d = danmaku[_0x531c85];
	if (!_0x27640d)
		return;
	if (!$(TT(0x181))[TT(0x1d8)](TT(0x151)))
		return;
	var _0x2d9cb1 = TT(0x1eb);
	for (var _0x152731 = 0x0; _0x152731 < _0x27640d[TT(0x1f2)]; _0x152731++) {
		if (_0x27640d[_0x152731] == '@zan@')
			_0x2d9cb1 += TT(0x176);
		else {
			if (_0x27640d[_0x152731] == '@不赞同@')
				_0x2d9cb1 += TT(0x1dc);
			else {
				if (_0x27640d[_0x152731] == TT(0x1ef))
					_0x2d9cb1 += TT(0x13d);
				else {
					if (_0x27640d[_0x152731] == TT(0x1b8))
						_0x2d9cb1 += TT(0x1ca);
					else {
						if (_0x27640d[_0x152731] == TT(0x148))
							_0x2d9cb1 += TT(0x1b7);
						else {
							if (_0x27640d[_0x152731] == TT(0x16d))
								_0x2d9cb1 += TT(0x159);
							else
								_0x27640d[_0x152731] == TT(0x1ae) ? _0x2d9cb1 += TT(0x1af) : _0x2d9cb1 += TT(0x188) + _0x27640d[_0x152731] + TT(0x182);
						}
					}
				}
			}
		}
	}
	_0x2d9cb1 += TT(0x1d1);
	var _0x59f69c = count % 0x3
		, _0x234ed3 = new Ext['XTemplate'](_0x2d9cb1)[TT(0x1b6)](TT(0x184) + _0x59f69c);
	shotdanmu(_0x234ed3),
		count++;
}
var getPlayState;

function TT(A, B) {
	var C = TTTT();
	return TT = function (D, E) {
		D = D - 0xed;
		var F = C[D];
		return F;
	}
		,
		TT(A, B);
}
function clearStateInterval() {
	getPlayState && clearInterval(getPlayState);
}
var playStateV2;
function clearStateV2Interval() {
	playStateV2 && clearInterval(playStateV2);
}
function checkJobCountLimit(_0x22e528) {
	/\/studentstudy/['test'](top[TT(0x1f4)][TT(0x1ce)]) && (top[TT(0x10a)](),
		playStateV2 = setInterval(function () {
			top[TT(0x1c8)] && (clearStateV2Interval(),
				_0x22e528['play'](),
				top[TT(0x1c8)] = false);
		}, 0x12c));
}
function startFaceCollection(_0x50e77a, _0xfa24f3, _0x12574d) {
	if (/\/studentstudy/[TT(0x141)](top[TT(0x1f4)][TT(0x1ce)])) {
		var _0x274a5c = $(TT(0xfc), top[TT(0xff)])[TT(0x1f2)];
		_0x274a5c > 0x0 && ($('#videoJobId', top['document'])[TT(0x1a9)](videoJobId),
			$('#chapterVideoObjectId', top['document'])[TT(0x1a9)](videoObjectId),
			top[TT(0x1e0)] && top['getQRCodeURLShow1'](),
			$(TT(0xfc), top['document'])[TT(0x1e2)](TT(0x114), TT(0x121)),
			getPlayState = setInterval(function () {
				top[TT(0x1d2)] && (clearStateInterval(),
					_0x12574d[TT(0x1fd)] = true,
					_0x50e77a[TT(0x16e)](),
					top[TT(0x1d2)] = false);
			}, 0x3e8));
	}
}
function chapterPlayNextVideo(_0x6ffec0) {
	/\/studentstudy/[TT(0x141)](top[TT(0x1f4)][TT(0x1ce)]) && (top[TT(0x1b5)] && top['getChapterNextVideo'](_0x6ffec0));
}
function markersPlayer(_0x59238b) {
	var _0x23b3a7 = _0x59238b[TT(0xf0)](TT(0x153));
	if (_0x23b3a7)
		return playerTime(_0x23b3a7);
}
function getMarkers() {
	return videojs(TT(0x1e1))[TT(0x13a)];
}
function playerTime(_0x41775e) {
	if (ff != 0x1)
		return;
	var _0x509f74 = videojs('video');
	return _0x509f74[TT(0x158)](_0x41775e);
}
function playVideo() {
	var _0x159462 = videojs(TT(0x1e1));
	player['volume'](0x0),
		player['on']('loadstart', function () {
			_0x159462[TT(0x16e)]()[TT(0x1bc)](Ext['emptyFn']);
		});
}
function reSizeIframe() {
	try {
		var _0x348f1d = Ext[TT(0x1db)](Ext[TT(0x134)](TT(0x200))[TT(0xf5)][0x0])[TT(0x168)]();
		Ext[TT(0x1db)](window['frameElement'])[TT(0xf7)](_0x348f1d + 'px');
	} catch (_0x30acd3) {
		console[TT(0x14f)](e[TT(0x11f)]);
	}
}
function removeDownloadBtn() {
	Ext[TT(0x134)]('.xl-chrome-ext-bar')[TT(0x180)]();
}
Ext['onReady'](function () {
	window['setInterval']('reSizeIframe()', 0xc8),
		window[TT(0x13b)]('removeDownloadBtn()', 0x1f4),
		/\/studentstudy/[TT(0x141)](top[TT(0x1f4)][TT(0x1ce)]) && ($('.writeNote')[TT(0x1e2)](TT(0x114), TT(0x121)),
			Ext['select']('.sp_function')[TT(0x1f7)](TT(0x120), TT(0x13c))),
		$(TT(0x1bf))[TT(0x10b)](function () {
			$(TT(0x109), parent[TT(0x116)][TT(0xff)])[TT(0x1a9)](0x1),
				$(TT(0x199), parent[TT(0x116)][TT(0xff)])[TT(0x1a9)](videoName);
			var _0x5955e4 = videojs(TT(0x1e1))
				, _0x594ed5 = parseInt(_0x5955e4[TT(0x158)]())
				, _0x145c09 = parseInt(_0x594ed5 / 0x3c);
			_0x145c09 < 0xa && (_0x145c09 = '0' + _0x145c09[TT(0x11b)]());
			var _0x40a196 = parseInt(_0x594ed5 % 0x3c);
			_0x40a196 < 0xa && (_0x40a196 = '0' + _0x40a196['toString']()),
				$(TT(0x1b2), parent[TT(0x116)][TT(0xff)])[TT(0x1a5)](videoName + '\x20' + _0x145c09 + ':' + _0x40a196),
				$(TT(0x1b2), parent[TT(0x116)]['document'])['css']('display', TT(0x121)),
				$(TT(0x14c), parent['parent'][TT(0xff)])[TT(0x1a9)](_0x594ed5),
				$(TT(0x1ea), parent[TT(0x116)][TT(0xff)])[TT(0x1a9)](videoJobId),
				$('#noteVideoObjectId', parent[TT(0x116)][TT(0xff)])[TT(0x1a9)](videoObjectId),
				parent[TT(0x116)][TT(0x1b3)] && parent[TT(0x116)][TT(0x1b3)](),
				parent[TT(0x116)]['changePan'] && parent[TT(0x116)][TT(0x12d)]('3'),
				$(TT(0x1cb), parent['parent'][TT(0xff)])[TT(0x132)]() > 0x0 && $('.formTopic', parent[TT(0x116)][TT(0xff)])[TT(0x1e2)](TT(0x114), TT(0x121));
		});
});
/*
237 'cxplayer/scroll.js'
238 "' onclick='markersPlayer(this)'>"
239 '.vjs-fullscreen-control'
240 'getAttribute'
241 'isSupportFace'
242 'note1'
243 'cdn'
244 'jobid'
245 'elements'
246 'hasCls'
247 'setHeight'
248 '126PboNmI'
249 'Course'
250 'frameElement'
251 'v_end'
252 '.maskDiv1'
253 'getElementsByTagName'
254 'push'
255 'document'
256 'pobjectid'
257 'marg-'
258 '您没有安装flashplayer，请到<a href="'
259 'course/phone/chapterdata'
260 'string'
261 'fastforward'
262 'reader'
263 'first'
264 'Ajax'
265 '#type'
266 'showJobLimitTip'
267 'click'
268 'split'
269 'Android'
270 '&enc='
271 'objectid'
272 '/ananas/status/'
273 '未找到该文件'
274 'httpmd'
275 'aid'
276 'display'
277 '&d='
278 'parent'
279 'headOffset'
280 'jsoncallback'
281 'property'
282 'resize'
283 'toString'
284 'status'
285 'script'
286 'otherInfo'
287 'message'
288 'height'
289 'block'
290 'undefined'
291 '<div class="line1"><div class="line3"></div></div><p class="tipStyle">视频加载失败，请稍后再试【9004】</p>'
292 'cxplayer/cxplayer.4.0.5.js?v=20160405'
293 'show'
294 '11690wPdKdq'
295 'ChaoXingStudy'
296 'autoAbort'
297 '.zsCloud'
298 '#sp_video_ppt_pic'
299 'dtype'
300 'parentElement'
301 'changePan'
302 'get'
303 'indexOf'
304 'probably'
305 'contentWindow'
306 'size'
307 'function'
308 'select'
309 '.ans-job-icon'
310 'isShowFaceCollection'
311 '2226027ZbQxGv'
312 'name'
313 '0px'
314 'markers'
315 'setInterval'
316 '66px'
317 '<span><i class="moveIcon"></i>感动</span>'
318 'iframe'
319 ' </span></li>'
320 'chapterCapture'
321 'test'
322 'hide'
323 'niceScroll'
324 '<img src="/ananas/css/downgradeBlueTip.jpg" width="676" height="540">'
325 '.zsCloud_ul'
326 'isIE10m'
327 '_jobid'
328 '@献花@'
329 'hasFlash'
330 'hover'
331 'toLowerCase'
332 '#noteVideoTime'
333 'reportUrl'
334 'isPassed'
335 'log'
336 'subobjectid'
337 'checked'
338 'converting'
339 'data-marker-time'
340 'video/mp4;codecs="avc1.42E01E,mp4a.40.2"'
341 'failed'
342 'screenshot'
343 'knowledgeid'
344 'currentTime'
345 '<span><i class="clapIcon"></i>鼓掌</span>'
346 'chapterVideoTranslate'
347 'onReady'
348 'MAG'
349 '14072120GpnLtY'
350 'startTime'
351 'defer'
352 'isVideoVisibleName'
353 'request'
354 'httpshd'
355 'href'
356 'top'
357 'AttachmentSetting'
358 'isFiled'
359 'success'
360 'getHeight'
361 'videoTopicCloud'
362 '80035QauSif'
363 'loading'
364 'switchwindow'
365 '@鼓掌@'
366 'play'
367 'insertHtml'
368 'schooldoublespeed'
369 'control'
370 '<div title="'
371 'maybe'
372 'note'
373 '15021YByYiX'
374 '<span><i class="zanIcon"></i>赞</span>'
375 'VideoJs'
376 '255Pajqqj'
377 'userAgent'
378 'prev'
379 'cxplayer/jquery.min.js'
380 '.rage_bd'
381 '/keeper/api/receive-studylog'
382 'userid'
383 'substr'
384 'remove'
385 '.mui-switch'
386 '</span>'
387 'fid'
388 'channel_'
389 'isIE'
390 'cxplayer/videodanmu.js'
391 'vend'
392 '<span>'
393 'className'
394 '48184WueLwh'
395 'text/javascript'
396 'clazzId'
397 'isIos'
398 'match'
399 '&o='
400 'enc2'
401 '/videodanmaku/timerange-danmakulist'
402 'http://'
403 '=([^&]*)(&|$)'
404 '/ananas/swfobject/swfobject.js'
405 '&flag=normal'
406 '&c='
407 'MASTER_HOST'
408 'thumbnails'
409 '#noteVideoName'
410 'stringify'
411 'clientWidth'
412 'courseid'
413 'objectId'
414 'true'
415 'PageView'
416 'responseText'
417 'stopAll'
418 'post'
419 'topicList'
420 '服务异常,稍后再试!'
421 'html'
422 'left'
423 'search'
424 'update'
425 'val'
426 'setHTML'
427 'danmaku'
428 'enc0'
429 'nodedetailcontroller/visitnodedetail'
430 '@有趣@'
431 '<span><i class="interestingIcon"></i>有趣</span>'
432 'cxplayer/moocplayer_4.0.11.js?v=2020-1016-2010'
433 'videoTotalTime'
434 '.Note_name'
435 'getClazzNote'
436 'transfer'
437 'getChapterNextVideo'
438 'append'
439 '<span><i class="huaIcon"></i>献花</span>'
440 '@疑惑@'
441 'attachments'
442 'httphd'
443 'data'
444 'catch'
445 'src'
446 'protocol'
447 '.writeNote'
448 'v_begin'
449 'danmuItem left'
450 '" target="_blank">www.adobe.com</a>下载安装。<br/>如果已经安装请点击此处启用：<object id="swf_jlxl1lfb" height="50" width="100" type="application/x-shockwave-flash" data="/ananas/modules/video/cxplayer/player_4.0.11.swf?v=20161025" style="border:#ccc 1px solid"><param name="quality" value="high"><param name="allowScriptAccess" value="always"><param name="wMode" value="transparent"><param name="align" value="middle"><param name="bgcolor" value="#000000"><param name="swLiveConnect" value="true"><param name="loop" value="true"><param name="play" value="true"><param name="DeviceFont" value="false"><param name="allowFullScreen" value="true"><param name="menu" value="true"></object>'
451 "<li><span class='zsCloud_span topicId"
452 'isErya'
453 'teacherstudy'
454 'http://www.adobe.com/go/getflashplayer'
455 'aId'
456 'resumePlay'
457 'afterBegin'
458 '<span><i class="doubtIcon"></i>疑惑</span>'
459 '.formTopic'
460 '<video id="video" class="video-js vjs-default-skin vjs-big-play-centered"></video>'
461 'replace'
462 'pathname'
463 'dtoken'
464 '&u='
465 '</div>'
466 'playerState'
467 'defaults'
468 'doublespeed'
469 'getTime'
470 '&m='
471 'duration'
472 'hasClass'
473 'cxplayer/json.util.js'
474 'getNiceScroll'
475 'fly'
476 '<span><i class="noZanIcon"></i>不赞同</span>'
477 'sp_ppt_pic_fullScreen'
478 'note1-wrap'
479 '" style="width: 500px;margin-left: 120px;display: inline-block;height: 23px;line-height: 23px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">'
480 'getQRCodeURLShow1'
481 'video'
482 'css'
483 '.vjs-subs-caps-button .vjs-menu-content'
484 'content'
485 'enc1'
486 '<div class="line1"><div class="line3"></div></div><p class="tipStyle making">视频正在转码，您无需在此页面等待【9001】</p>'
487 'UID'
488 '3945130GfogTE'
489 '" style="width: 500px;display: inline-block;line-height: 23px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">'
490 '#noteVideoJobId'
491 '<div class="danmuItem right">'
492 'iPad'
493 'enableSwitchWindow'
494 '<div class="line1"><div class="line2"></div></div><p class="tipStyle">视频上传中【9002】</p>'
495 '@感动@'
496 'enableFastForward'
497 'setWidth'
498 'length'
499 'addEventListener'
500 'location'
501 'ans-job-finished'
502 '/question/addquestionerror'
503 'setStyle'
504 'vbegin'
505 '//data-xxt.aichaoxing.com/analysis/datalog?s='
506 'timeline'
507 'isSogou'
508 'memberinfo'
509 'isPlay'
510 'mid'
511 '234010YtSFoR'
512 '.main'
513 'body'
514 'floor'
 */