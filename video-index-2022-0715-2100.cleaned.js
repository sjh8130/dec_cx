function greenligth() {
	Ext.fly(window.frameElement).parent().addCls('ans-job-finished');
}
function isUnFinishJob() {
	try {
		var _0x37f1ab = Ext.fly(window.frameElement).prev();
		return _0x37f1ab && _0x37f1ab.hasCls('ans-job-icon') ? !Ext.fly(window.frameElement).parent().hasCls('ans-job-finished') : false;
	} catch (_0x4a26e4) {
		console.log(_0x4a26e4);
	}
	return false;
}
Ext.Ajax.autoAbort = true;
Ext.isIpad = -1 < navigator.userAgent.indexOf('iPad');
Ext.isIos = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
Ext.isAndroid = -1 < navigator.userAgent.indexOf('Android');
Ext.isSogou = !!navigator.userAgent.match(/metasr/i);
Ext.isChaoxing = -1 < navigator.userAgent.indexOf('ChaoXingStudy');
;
var isViturlEdit = false, ff = 1;
function proxy_completed() {
	ed_complete && (greenligth(), ed_complete());
}
function config(_0x275447) {
	return window.frameElement.getAttribute(_0x275447);
}
function getCookie(_0x51a24a) {
	for (var _0x5bd6fa = document.cookie.split('; '), _0x545920 = 0; _0x545920 < _0x5bd6fa.length; _0x545920++) {
		var _0x548324 = _0x5bd6fa[_0x545920].split('=');
		if (_0x548324[0] == _0x51a24a) {
			return unescape(_0x548324[1]);
		}
	}
}
function showMoocPlayer(_0x4f7dae) {
	loadMultiFile([
		{
			'src': 'cxplayer/jquery.min.js',
			'tag': 'script',
			'type': 'text/javascript',
			'defer': 'defer'
		},
		{
			'src': '/ananas/swfobject/swfobject.js',
			'tag': 'script',
			'type': 'text/javascript',
			'defer': 'defer'
		},
		{
			'src': 'cxplayer/json.util.js',
			'tag': 'script',
			'type': 'text/javascript',
			'defer': 'defer'
		}
	], function () {
		loadMultiFile([
			{
				'src': 'cxplayer/scroll.js',
				'tag': 'script',
				'type': 'text/javascript',
				'defer': 'defer'
			},
			{
				'src': 'cxplayer/cxplayer.4.0.5.js?v=20160405',
				'tag': 'script',
				'type': 'text/javascript',
				'defer': 'defer'
			},
			{
				'src': 'cxplayer/moocplayer_4.0.11.js?v=2020-1016-2010',
				'tag': 'script',
				'type': 'text/javascript',
				'defer': 'defer'
			}
		], function () {
			new MoocPlayer({
				'isSendLog': !!parent.AttachmentSetting && parent.AttachmentSetting.control,
				'data': _0x4f7dae,
				'height': 540,
				'width': 676
			});
		});
	});
}
function bindVjsClick(_0x96b6a4) {
	try {
		var _0x8fac5f, _0x4ecb6e, _0x56a51c = _0x96b6a4.enableFastForward, _0x4bb1d9 = _0x96b6a4.jobid;
		void 0 !== _0x56a51c && 0 === _0x56a51c && void 0 !== _0x4bb1d9 && '' != _0x4bb1d9 && -1 < window.parent.parent.location.href.indexOf('studentstudy') && (_0x8fac5f = $('.video-js .toolTipBox1'), _0x4ecb6e = $('#tipDiv'), 0 === _0x8fac5f.length && 0 < _0x4ecb6e.length && ($('.video-js').prepend(_0x4ecb6e.html()), $('.vjs-control').on('click', function () {
			$('.toolTipBox1').is(':visible') || ($('.toolTipBox1').show(), setTimeout(function () {
				$('.toolTipBox1').hide();
			}, 800));
		})));
	} catch (_0xde0524) {
		console.log(_0xde0524);
	}
}
function showHTML5Player(_0x69e574) {
	function _0x13691d() {
		var _0x50a4a4 = $('#video').height(), _0x528739 = $('#sp_video_ppt_pic').height(), _0x50a4a4 = (parseInt(_0x50a4a4) - 60 - parseInt(_0x528739)) / 2;
		0 < $('#sp_video_ppt_pic').length && $('#sp_video_ppt_pic').hasClass('sp_ppt_pic_fullScreen') ? ($('#sp_video_ppt_pic').css('top', _0x50a4a4 + 'px'), $('#sp_video_ppt_pic').css('left', '0')) : ($('#sp_video_ppt_pic').css('top', '0px'), $('#sp_video_ppt_pic').css('left', '0px'));
	}
	Ext.get('reader').setHTML('<video id="video" class="video-js vjs-default-skin vjs-big-play-centered"></video>');
	new ans.VideoJs({
		'videojs': 'video',
		'params': _0x69e574
	});
	document.getElementsByTagName('video')[0].addEventListener('play', function () {
		for (var _0x1cc801, _0x18feaf = parent.document.getElementsByTagName('iframe'), _0x4b717f = 0; _0x4b717f < _0x18feaf.length; _0x4b717f++) {
			-1 != _0x18feaf[_0x4b717f].getAttribute('src').indexOf('microCourse') && (_0x1cc801 = _0x18feaf[_0x4b717f].contentWindow.document.getElementsByTagName('iframe')[0].contentWindow).PageView.stopAll && _0x1cc801.PageView.stopAll();
		}
		$('.vjs-subs-caps-button .vjs-icon-placeholder').hover(function () {
			if (0 < $('.vjs-subs-caps-button .vjs-menu-content').length) {
				$('.vjs-subs-caps-button .vjs-menu-content').niceScroll({
					'cursorborder': '',
					'cursorwidth': 8,
					'cursorcolor': '#CAD5E6',
					'boxzoom': false,
					'autohidemode': true
				});
				$('.vjs-subs-caps-button .vjs-menu-content').getNiceScroll().resize();
			}
		});
	});
	$('.vjs-fullscreen-control').click(function () {
		setTimeout(_0x13691d, 300);
	});
	$(window).resize(function () {
		setTimeout(_0x13691d, 500);
	});
	bindVjsClick(_0x69e574);
}
var wrongObj = '', videoName = '', videoJobId = '', videoObjectId = '', mid = '', playLogTimer;
function loadVideo() {
	var _0x362357 = config('objectid'), _0x121dcc = Ext.get('reader');
	if (_0x362357) {
		wrongObj = _0x362357;
		videoObjectId = _0x362357;
		var _0x558706 = window.frameElement, _0xb51fce = Ext.decode(_0x558706.getAttribute('data')), _0x262c32 = parent.AttachmentSetting, _0x5bc21d = (mid = config('mid'), 0), _0x5239ad = config('vbegin'), _0x209ba1 = config('vend'), _0x1a6a04 = config('jobid') || '', _0x4bd213 = !_0xb51fce || null == _0xb51fce.danmaku ? 0 : _0xb51fce.danmaku, _0x40ef0a = _0x262c32 && _0x262c32.videoTopicCloud, _0x3be084 = 'true' == config('fastforward'), _0x149e17 = 'true' == config('switchwindow'), _0x4f20da = Ext.get('note'), _0x4df264 = Ext.get('hl'), _0x1ff8f5 = Ext.get('note1-wrap'), _0x5616c1 = Ext.get('note1'), _0x391b3d = null, _0x24c424 = _0xb51fce && _0xb51fce.rt || 0.9, _0x5da7ca = (videoJobId = '' == _0x1a6a04 ? _0xb51fce && _0xb51fce['_jobid'] ? _0xb51fce['_jobid'] : '' : _0x1a6a04, flashChecker().hasFlash);
		try {
			isTeacher = 0 < top.location.href.indexOf('teacherstudy') || 0 < top.location.href.indexOf('course/phone/chapterdata');
		} catch (_0x2e4d32) {
		}
		var _0x455571 = parent.isVideoVisibleName, _0x4257d4 = !_0xb51fce || 0 != _0xb51fce.doublespeed ? 1 : 0;
		_0xb51fce.v_begin && _0xb51fce.v_end && _0xb51fce.pobjectid && (isViturlEdit = true);
		_0x1d2046();
	} else {
		_0x121dcc.setHTML('未找到该文件');
	}
	function _0x1887ad(_0x9d29bb) {
		if ((!_0x9d29bb || 0 != _0x9d29bb.length) && null != Ext.select('.zsCloud_ul')) {
			for (var _0x587737 = '', _0x14ba8b = 0, _0x1e1ffe = _0x9d29bb.length; _0x14ba8b < _0x1e1ffe; _0x14ba8b++) {
				_0x587737 += '<li><span class=\'zsCloud_span topicId' + _0x9d29bb[_0x14ba8b].id + '\' onclick=\'markersPlayer(this)\'>' + _0x9d29bb[_0x14ba8b].name + ' </span></li>';
			}
			Ext.select('.zsCloud_ul').setHTML(_0x587737);
			Ext.select('.zsCloud').setStyle('display', 'block');
		}
	}
	function _0x1d2046() {
		_0x5bc21d <= 100 && _0x4df264.setWidth((_0x5bc21d += 5) + '%');
		var _0x24202e = getCookie('fid') || '';
		Ext.Ajax.request({
			'url': '/ananas/status/' + _0x362357 + '?k=' + _0x24202e + '&flag=normal',
			'success': function (_0x268251) {
				var _0x2afb90 = eval('(' + _0x268251.responseText + ')');
				switch (Ext.get('loading').hide(), _0x2afb90.status) {
					case 'success':
						_0x1ff8f5.remove(), videoName = _0xb51fce && _0xb51fce.name || '', 'false' != _0x455571 && (null == Ext.fly(window.frameElement).parent().first('.ans-job-icon') || -1 < top.location.href.indexOf('nodedetailcontroller/visitnodedetail') ? Ext.fly(window.frameElement).parent().insertHtml('afterBegin', '<div title="' + videoName + '" style="width: 500px;display: inline-block;line-height: 23px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">' + videoName + '</div>') : Ext.fly(window.frameElement).parent().first('.ans-job-icon').insertHtml('beforeEnd', '<span title="' + videoName + '" style="width: 500px;margin-left: 120px;display: inline-block;height: 23px;line-height: 23px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">' + videoName + '</span>'));
						var _0xf18f67 = _0x2afb90.duration, _0x5bdcbd = {
							'enableFastForward': _0x3be084 ? 0 : 1,
							'enableSwitchWindow': _0x149e17 ? 0 : 1,
							'duration': _0xf18f67,
							'httpmd': _0x2afb90.httpmd,
							'http': _0x2afb90.http,
							'httphd': _0x2afb90.httphd,
							'httpshd': _0x2afb90.httpshd,
							'filename': _0x2afb90.filename,
							'dtoken': _0x2afb90.dtoken,
							'videoTopicCloud': _0x40ef0a
						}, _0x4b374a = (window.duration = _0xf18f67, _0x2afb90.cdn && (_0x5bdcbd.cdn = _0x2afb90.cdn), 0 < document.cookie.length && (_0x5bdcbd.memberinfo = getCookie('memberinfo'), _0x5bdcbd.questionErrorLogUrl = ServerHosts.MASTER_HOST + '/question/addquestionerror'), mid && (_0x5bdcbd.mid = mid), _0x2afb90.duration && (_0x5bdcbd.videoTotalTime = _0x2afb90.duration), _0x262c32 && 1 == _0x262c32.isErya ? _0x5bdcbd.screenshot = 'https://p.ananas.chaoxing.com/star3/origin/a26e16b5ac8e769bba6bda57343b7d57.png' : _0x2afb90.screenshot && (_0x5bdcbd.screenshot = _0x2afb90.screenshot), _0x262c32 && (_0x5bdcbd.chapterVideoTranslate = _0x262c32.chapterVideoTranslate), _0x2afb90.thumbnails && (_0x5bdcbd.thumbnails = _0x2afb90.thumbnails), _0x2afb90.subobjectid && (_0x5bdcbd.subobjectid = _0x2afb90.subobjectid), _0x5239ad && (_0x5bdcbd.startTime = _0x5239ad), _0x209ba1 && (_0x5bdcbd.endTime = _0x209ba1), _0x5bdcbd.rt = _0x24c424, _0x5bdcbd.control = _0x262c32 && _0x262c32.control, isTeacher && (_0x5bdcbd.control = false), {}), _0x104bf3, _0x5bb97f, _0x498f17, _0x155695;
						if (_0x262c32 && _0x262c32.control) {
							var _0x1ede05 = _0x262c32.attachments, _0x2a55e6 = _0x262c32.defaults, _0x59d7fc = _0x2afb90.objectid + '-' + (_0x5239ad || 0) + '-' + (_0x209ba1 || _0xf18f67) + '-' + _0x1a6a04;
							_0x2a55e6 && (_0x5bdcbd.userid = _0x2a55e6.userid || '', _0x5bdcbd.fid = _0x2a55e6.fid || '');
							for (var _0x27a3a0 = 0; _0x27a3a0 < _0x1ede05.length; _0x27a3a0++) {
								if (_0x4b374a = _0x1ede05[_0x27a3a0], _0x5bb97f = 0, _0x498f17 = _0xf18f67, _0x4b374a.property && (_0x4b374a.property.vbegin && (_0x5bb97f = _0x4b374a.property.vbegin), _0x4b374a.property.vend && (_0x498f17 = _0x4b374a.property.vend)), _0x4b374a.jobid || (_0x4b374a.jobid = ''), _0x104bf3 = _0x4b374a.objectId + '-' + _0x5bb97f + '-' + _0x498f17 + '-' + _0x4b374a.jobid, _0x59d7fc == _0x104bf3) {
									Ext.apply(_0x5bdcbd, _0x262c32.defaults);
									_0x5bdcbd.headOffset = _0x4b374a.headOffset ? Math.floor(parseInt(_0x4b374a.headOffset) / 1000) : 0;
									_0x5bdcbd.objectId = _0x4b374a.objectId;
									_0x5bdcbd.otherInfo = _0x4b374a.otherInfo;
									_0x5bdcbd.isPassed = _0x4b374a.isPassed;
									_0x5bdcbd.aId = _0x4b374a.aid;
									_0x5bdcbd.danmaku = _0x4bd213;
									_0x4b374a.topicList && _0x1887ad(_0x4b374a.topicList);
									_0x5bdcbd.jumpTimePointList = _0x4b374a.jumpTimePointList;
									_0x4b374a.property && _0x4b374a.property.fastforward && 'true' == _0x4b374a.property.fastforward && (_0x5bdcbd.enableFastForward = 0);
									_0x4b374a.property && void 0 !== _0x4b374a.property.doublespeed && 0 == _0x4b374a.property.doublespeed && (_0x5bdcbd.doublespeed = 0, _0x4257d4 = 0);
									var _0x492bc6 = _0x5bdcbd.schooldoublespeed;
									_0x5bdcbd.doublespeed = void 0 === _0x492bc6 || 2 == _0x492bc6 ? _0x4257d4 : _0x492bc6;
									_0x1a6a04 && (_0x5bdcbd.jobid = _0x1a6a04, _0x4b374a.job || (isTeacher || greenligth(), ed_complete = false, _0x5bdcbd.enableFastForward = 1, _0x5bdcbd.enableSwitchWindow = 1, _0x5bdcbd.headOffset = 0));
									_0x5bdcbd.reportUrl = _0x5bdcbd.reportUrl && _0x5bdcbd.reportUrl.replace('http://', window.location.protocol + '//');
									window['_jobindex'] = _0x27a3a0;
									break;
								}
							}
						} else {
							var _0x492bc6 = _0x5bdcbd.schooldoublespeed;
							_0x5bdcbd.doublespeed = void 0 === _0x492bc6 || 2 == _0x492bc6 ? _0x4257d4 : _0x492bc6;
						}
						if (1 == _0x5bdcbd.ignoreVideoCtrl && (_0x5bdcbd.enableFastForward = 1, _0x5bdcbd.enableSwitchWindow = 1), _0x5bdcbd.control && !isTeacher || (ed_complete = false, _0x5bdcbd.enableFastForward = 1, _0x5bdcbd.enableSwitchWindow = 1, _0x5bdcbd.headOffset = 0), (_0x5bdcbd.isPassed || _0x5bdcbd.headOffset > 0.95 * _0x5bdcbd.videoTotalTime) && (_0x5bdcbd.headOffset = 0), _0x391b3d && clearInterval(_0x391b3d), _0x5bdcbd.isSupportFace = !!(0 < $('.maskDiv1', top.document).length && /\/studentstudy/.test(top.location.pathname)), _0x5bdcbd.isShowFaceCollection = /\/studentstudy/.test(top.location.pathname) && !Ext.fly(window.frameElement).parent().hasCls('ans-job-finished'), supportH5Video()) {
							_0xb51fce.danmaku && (loadMultiFile([{
								'src': 'cxplayer/jquery.min.js',
								'tag': 'script',
								'type': 'text/javascript',
								'defer': 'defer'
							}], function () {
								loadMultiFile([{
									'src': 'cxplayer/scroll.js',
									'tag': 'script',
									'type': 'text/javascript',
									'defer': 'defer'
								}], function () {
									loadMultiFile([{
										'src': 'cxplayer/videodanmu.js',
										'tag': 'script',
										'type': 'text/javascript',
										'defer': 'defer'
									}]);
								});
							}), Ext.select('.rage_bd').setStyle('display', 'block'), Ext.select('.sp_function').setStyle('height', '66px'));
							ff = _0x5bdcbd.enableFastForward;
							showHTML5Player(_0x5bdcbd);
						} else {
							if (!_0x5da7ca) {
								return _0x155695 = 'http://www.adobe.com/go/getflashplayer', void Ext.get('reader').setHTML('您没有安装flashplayer\uFF0C请到<a href="' + _0x155695 + '" target="_blank">www.adobe.com</a>下载安装\u3002<br/>如果已经安装请点击此处启用\uFF1A<object id="swf_jlxl1lfb" height="50" width="100" type="application/x-shockwave-flash" data="/ananas/modules/video/cxplayer/player_4.0.11.swf?v=20161025" style="border:#ccc 1px solid"><param name="quality" value="high"><param name="allowScriptAccess" value="always"><param name="wMode" value="transparent"><param name="align" value="middle"><param name="bgcolor" value="#000000"><param name="swLiveConnect" value="true"><param name="loop" value="true"><param name="play" value="true"><param name="DeviceFont" value="false"><param name="allowFullScreen" value="true"><param name="menu" value="true"></object>');
							}
							showMoocPlayer(_0x5bdcbd);
						}
						sendReadZTMediaLog(0);
						break;
					case 'failed':
						_0x391b3d && clearInterval(_0x391b3d), _0x1ff8f5.remove(), _0x4f20da.show();
						break;
					case 'waiting':
						_0x1ff8f5.update('<div class="line1"><div class="line3"></div></div><p class="tipStyle making">视频正在转码\uFF0C您无需在此页面等待\u30109001\u3011</p>');
						break;
					case 'converting':
					case 'transfer':
						_0x1ff8f5.update('<div class="line1"><div class="line2"></div></div><p class="tipStyle">视频上传中\u30109002\u3011</p>');
				}
			},
			'failure': function (_0x13352a) {
				0 == _0x13352a.status ? (_0x391b3d && clearInterval(_0x391b3d), _0x1ff8f5.update('<div class="line1"><div class="line2"></div></div><p class="tipStyle">视频加载超时\uFF0C请刷新页面重试\u30109003\u3011</p>')) : (_0x391b3d && clearInterval(_0x391b3d), _0x1ff8f5.update('<div class="line1"><div class="line3"></div></div><p class="tipStyle">视频加载失败\uFF0C请稍后再试\u30109004\u3011</p>'));
				Ext.get('loading').hide();
			}
		});
	}
}
function supportH5Video() {
	if (Ext.isIE && Ext.isIE10m) {
		return false;
	}
	var _0xb501e4 = document.createElement('video');
	if ('function' == typeof _0xb501e4.canPlayType) {
		var _0x5ddeb7 = _0xb501e4.canPlayType('video/mp4;codecs="avc1.42E01E,mp4a.40.2"');
		if ('maybe' == _0x5ddeb7.toLowerCase() || 'probably' == _0x5ddeb7.toLowerCase()) {
			return true;
		}
		if ('maybe' == (_0x5ddeb7 = _0xb501e4.canPlayType('video/mp4;codecs="avc1.64001E,mp4a.40.2"')).toLowerCase() || 'probably' == _0x5ddeb7.toLowerCase()) {
			return true;
		}
	}
	return false;
}
function sendReadZTMediaLog(_0x5916e6) {
	try {
		var _0x3d908d = function (_0x4663bb) {
			return _0x4663bb = new RegExp('(^|&)' + _0x4663bb + '=([^&]*)(&|$)'), _0x4663bb = parent.location.search.substr(1).match(_0x4663bb), null != _0x4663bb ? unescape(_0x4663bb[2]) : null;
		}, _0x1e6245 = parent.AttachmentSetting, _0xf4f724 = window.frameElement, _0x124e5e = _0xf4f724.parentElement.parentElement.parentElement.getAttribute('kid'), _0x1413f3, _0x1e6245;
		if (_0x124e5e && (_0x1413f3 = 'marg-' + _0x124e5e, _0x1e6245 = top[_0x1413f3], 'string' == typeof _0x1e6245 && (_0x1e6245 = eval('(' + _0x1e6245 + ')'))), !_0x1e6245) {
			return;
		}
		var _0xc8fcd8 = _0x1e6245.defaults.isFiled, _0x6e86b3 = _0x1e6245.defaults.state;
		if (1 == _0xc8fcd8 || 1 == _0x6e86b3) {
			return;
		}
		var _0x152354 = top.dtype || 'Course';
		if ('ZT' == _0x152354 || 'HB' == _0x152354 || 'MAG' == _0x152354) {
			var _0xdf6a9d = parent.location.search || '', _0x599fab = getCookie('UID'), _0x260735 = config('objectid'), _0x5cded0 = 0, _0x1e986b = _0x1e6245.defaults.courseid, _0x4f7f8a = _0x1e6245.defaults.knowledgeid, _0x15be0b = window.duration, _0x49fcef = _0x3d908d('_from_'), _0x69e9dd = _0x1e6245.attachments, _0x40d4dd = '';
			if (0 < _0x69e9dd.length) {
				for (var _0x1e993b = 0, _0x31b866 = _0x69e9dd.length; _0x1e993b < _0x31b866; _0x1e993b++) {
					var _0x80b8a = _0x69e9dd[_0x1e993b], _0x52482f = _0x80b8a.objectId;
					if (_0x52482f == _0x260735) {
						_0x40d4dd = 0 == _0x5916e6 ? _0x80b8a.enc0 : 1 == _0x5916e6 ? _0x80b8a.enc1 : _0x80b8a.enc2;
						break;
					}
				}
			}
			var _0x1caa73 = location.protocol + '//data-xxt.aichaoxing.com/analysis/datalog?s=' + _0x1e986b + '&c=' + _0x4f7f8a + '&o=' + _0x260735 + '&st=' + _0x5916e6 + '&m=' + _0x5cded0 + '&d=' + 1000 * _0x15be0b + '&u=' + _0x599fab + '&_from_=' + _0x49fcef + '&enc=' + _0x40d4dd, _0xa2886f = function () {
				Ext.Ajax.request({
					'url': _0x1caa73,
					'success': function (_0x107f1b) {
					}
				});
			};
			_0xa2886f();
			1 == _0x5916e6 ? (playLogTimer && clearInterval(playLogTimer), playLogTimer = setInterval(function () {
				_0xa2886f();
			}, 5000)) : 2 == _0x5916e6 && playLogTimer && clearInterval(playLogTimer);
		}
	} catch (_0x11edf4) {
	}
}
function receiveStudyLog() {
	try {
		var _0x477f30 = parent.AttachmentSetting;
		if (!_0x477f30) {
			return;
		}
		if (_0x477f30 && _0x477f30.defaults) {
			var _0x2d48ed = _0x477f30.defaults;
			if (1 != _0x2d48ed.chapterCapture) {
				return;
			}
			var _0x392402 = new Date().getTime(), _0x38bd50 = _0x2d48ed.courseid, _0x53fdb3 = _0x2d48ed.clazzId, _0x422402 = _0x2d48ed.cpi, _0x1efb4a = _0x2d48ed.userid, _0x133825 = _0x2d48ed.knowledgeid, _0x2c1f04 = _0x2d48ed.fid, _0x37d35e = '', _0x729d8b = config('objectid'), _0x1d0f4f = config('jobid') || '', _0x5811e4 = _0x477f30.attachments;
			if (0 < _0x5811e4.length) {
				for (var _0x3ee686 = 0, _0x3d4f8d = _0x5811e4.length; _0x3ee686 < _0x3d4f8d; _0x3ee686++) {
					var _0x48bb0d = _0x5811e4[_0x3ee686];
					if (_0x48bb0d.objectId == _0x729d8b) {
						_0x37d35e = _0x48bb0d.aid;
						break;
					}
				}
			}
			var _0x4f9ffa = {
				'courseId': _0x38bd50,
				'clazzId': _0x53fdb3,
				'personId': _0x422402,
				'eventType': 4,
				'eventTime': _0x392402,
				'data': {
					'relationId': _0x37d35e,
					'objectId': _0x729d8b,
					'userId': _0x1efb4a,
					'knowledgeId': _0x133825,
					'fid': _0x2c1f04,
					'jobId': _0x1d0f4f
				}
			}, _0x1a9ae1 = _0x2d48ed.mtEnc;
			Ext.Ajax.request({
				'method': 'post',
				'url': '/keeper/api/receive-studylog',
				'params': {
					'log': JSON.stringify(_0x4f9ffa),
					'enc': _0x1a9ae1
				},
				'success': function (_0x4e5940) {
				}
			});
		}
	} catch (_0x429c41) {
	}
}
function createVideoTask() {
	var _0x1cc24f;
	isViturlEdit || (_0x1cc24f = location.protocol + '//convertservice.chaoxing.com/video/createVideoTask?objectid=' + wrongObj, Ext.Ajax.request({
		'timeout': 3000,
		'type': 'get',
		'async': false,
		'url': _0x1cc24f,
		'dataType': 'jsonp',
		'jsonp': 'jsoncallback',
		'success': function (_0x2df23) {
		},
		'failure': function (_0x3242f7) {
			console.log('创建任务失败');
		}
	}));
}
Ext.onReady(function () {
	var _0x4e6aab = parent.requestSatusResourceDownGrade;
	if (_0x4e6aab && 1 == _0x4e6aab) {
		return void Ext.select('body').setHTML('<img src="/ananas/css/downgradeBlueTip.jpg" width="676" height="540">');
	}
	loadVideo();
});
var danmaku = {};
function getDanmuByTime(_0x1e2467, _0x37911f) {
	var _0x3cf05a = parent.AttachmentSetting, _0x29527f, _0x1cc126, _0x2a8f1c, _0x9e3beb, _0x5a8922;
	_0x3cf05a && _0x3cf05a.defaults && (_0x29527f = _0x3cf05a.defaults, _0x1cc126 = _0x29527f.courseid, _0x2a8f1c = _0x29527f.clazzId, 'pause' == _0x1e2467 ? danmaku = {} : ('play' == _0x1e2467 && (danmaku = {}), _0x9e3beb = config('mid'), _0x5a8922 = {
		'courseid': _0x1cc126,
		'classid': _0x2a8f1c,
		'mid': _0x9e3beb,
		'timebegin': parseInt(_0x37911f),
		'timeend': parseInt(_0x37911f) + 59
	}, Ext.Ajax.request({
		'url': '/videodanmaku/timerange-danmakulist',
		'method': 'get',
		'params': _0x5a8922,
		'success': function (_0x14a226) {
			var _0x2eef9a = eval('(' + _0x14a226.responseText + ')');
			if (1 == _0x2eef9a.status) {
				for (var _0x32af71 = _0x2eef9a.data, _0x1b87ec = 0; _0x1b87ec < _0x32af71.length; _0x1b87ec++) {
					var _0x289834 = _0x32af71[_0x1b87ec].timeline;
					danmaku[_0x289834] || (danmaku[_0x289834] = new Array());
					danmaku[_0x289834].push(_0x32af71[_0x1b87ec].content);
				}
				0 == _0x37911f && danmuPlay(0);
			} else {
				alert('服务异常,稍后再试!');
			}
		},
		'failure': function (_0x550c60) {
			alert('服务异常,稍后再试!');
		}
	})));
}
var count = 0, timeFlag = -1, currentTime = 0, getPlayState, playStateV2;
function shotdanmu(_0x240f4e) {
	var _0x5c4973 = _0x240f4e.clientWidth, _0x40c867 = 'translateX(' + -parseInt(_0x5c4973) + 'px)';
	setTimeout(function () {
		_0x240f4e.style.transform = _0x40c867;
		_0x240f4e.className = 'danmuItem left';
	}, 500);
}
function danmuPlay(_0x3e5610) {
	if (timeFlag != (currentTime = _0x3e5610)) {
		var _0x965f0d = danmaku[timeFlag = _0x3e5610];
		if (_0x965f0d && $('.mui-switch').hasClass('checked')) {
			for (var _0xb621a4 = '<div class="danmuItem right">', _0x3f6b3c = 0; _0x3f6b3c < _0x965f0d.length; _0x3f6b3c++) {
				'@zan@' == _0x965f0d[_0x3f6b3c] ? _0xb621a4 += '<span><i class="zanIcon"></i>赞</span>' : '@不赞同@' == _0x965f0d[_0x3f6b3c] ? _0xb621a4 += '<span><i class="noZanIcon"></i>不赞同</span>' : '@感动@' == _0x965f0d[_0x3f6b3c] ? _0xb621a4 += '<span><i class="moveIcon"></i>感动</span>' : '@疑惑@' == _0x965f0d[_0x3f6b3c] ? _0xb621a4 += '<span><i class="doubtIcon"></i>疑惑</span>' : '@献花@' == _0x965f0d[_0x3f6b3c] ? _0xb621a4 += '<span><i class="huaIcon"></i>献花</span>' : '@鼓掌@' == _0x965f0d[_0x3f6b3c] ? _0xb621a4 += '<span><i class="clapIcon"></i>鼓掌</span>' : '@有趣@' == _0x965f0d[_0x3f6b3c] ? _0xb621a4 += '<span><i class="interestingIcon"></i>有趣</span>' : _0xb621a4 += '<span>' + _0x965f0d[_0x3f6b3c] + '</span>';
			}
			_0xb621a4 += '</div>';
			_0x3e5610 = count % 3;
			shotdanmu(new Ext.XTemplate(_0xb621a4).append('channel_' + _0x3e5610));
			count++;
			;
		}
	}
}
function clearStateInterval() {
	getPlayState && clearInterval(getPlayState);
}
function clearStateV2Interval() {
	playStateV2 && clearInterval(playStateV2);
}
function checkJobCountLimit(_0x2d90d4, _0x1e70ed) {
	/\/studentstudy/.test(top.location.pathname) && (0 == _0x1e70ed ? top.showJobLimitTip() : top.showVideoTimeLimitTip(), playStateV2 = setInterval(function () {
		top.resumePlay && (clearStateV2Interval(), _0x2d90d4.play(), top.resumePlay = false);
	}, 300));
}
function startFaceCollection(_0x2e2739, _0x1c6f91, _0x5a622c, _0x5042e4) {
	/\/studentstudy/.test(top.location.pathname) && 0 < $('.maskDiv1', top.document).length && ($('#videoJobId', top.document).val(videoJobId), $('#chapterVideoObjectId', top.document).val(videoObjectId), $('#collectionTime', top.document).val(_0x5042e4), $('#mid', top.document).val(mid), top.getQRCodeURLShow1 && top.getQRCodeURLShow1(), $('.maskDiv1', top.document).css('display', 'block'), getPlayState = setInterval(function () {
		var _0x19b777;
		top.playerState && (clearStateInterval(), _0x2e2739.play(), _0x5a622c.firstPlayFace = false, top.playerState = false, _0x19b777 = _0x5a622c.jumpTimePointList, -2 != _0x5042e4 && void 0 !== _0x19b777 && (_0x19b777.push(_0x5042e4), _0x5a622c.jumpTimePointList = _0x19b777));
	}, 1000));
}
function chapterPlayNextVideo(_0x3476eb) {
	/\/studentstudy/.test(top.location.pathname) && top.getChapterNextVideo && top.getChapterNextVideo(_0x3476eb);
}
function markersPlayer(_0xf14ff5) {
	_0xf14ff5 = _0xf14ff5.getAttribute('data-marker-time');
	if (_0xf14ff5) {
		return playerTime(_0xf14ff5);
	}
}
function getMarkers() {
	return videojs('video').markers;
}
function playerTime(_0x4d9dad) {
	if (1 == ff) {
		return videojs('video').currentTime(_0x4d9dad);
	}
}
function playVideo() {
	var _0xdf8f8d = videojs('video');
	player.volume(0);
	player.on('loadstart', function () {
		_0xdf8f8d.play().catch(Ext.emptyFn);
	});
}
function reSizeIframe() {
	try {
		var _0x591b7f = Ext.fly(Ext.select('.main').elements[0]).getHeight();
		Ext.fly(window.frameElement).setHeight(_0x591b7f + 'px');
	} catch (_0x94aaaf) {
		console.log(_0x94aaaf.message);
	}
}
function removeDownloadBtn() {
	Ext.select('.xl-chrome-ext-bar').remove();
}
Ext.onReady(function () {
	window.setInterval('reSizeIframe()', 200);
	window.setInterval('removeDownloadBtn()', 500);
	/\/studentstudy/.test(top.location.pathname) && ($('.writeNote').css('display', 'block'), Ext.select('.sp_function').setStyle('height', '66px'));
	$('.writeNote').click(function () {
		$('#type', parent.parent.document).val(1);
		$('#noteVideoName', parent.parent.document).val(videoName);
		var _0x1049e6 = videojs('video'), _0x1049e6 = parseInt(_0x1049e6.currentTime()), _0xcba32 = parseInt(_0x1049e6 / 60), _0x213e99 = (_0xcba32 < 10 && (_0xcba32 = '0' + _0xcba32.toString()), parseInt(_0x1049e6 % 60));
		_0x213e99 < 10 && (_0x213e99 = '0' + _0x213e99.toString());
		$('.Note_name', parent.parent.document).html(videoName + ' ' + _0xcba32 + ':' + _0x213e99);
		$('.Note_name', parent.parent.document).css('display', 'block');
		$('#noteVideoTime', parent.parent.document).val(_0x1049e6);
		$('#noteVideoJobId', parent.parent.document).val(videoJobId);
		$('#noteVideoObjectId', parent.parent.document).val(videoObjectId);
		parent.parent.getClazzNote && parent.parent.getClazzNote();
		parent.parent.changePan && parent.parent.changePan('3');
		0 < $('.formTopic', parent.parent.document).size() && $('.formTopic', parent.parent.document).css('display', 'block');
	});
});