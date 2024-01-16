Ext.Ajax.autoAbort = true;
Ext.isIpad = navigator.userAgent.indexOf('iPad') > -1;
Ext.isIos = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
Ext.isAndroid = navigator.userAgent.indexOf('Android') > -1;
Ext.isSogou = !!navigator.userAgent.match(/metasr/i);
Ext.isChaoxing = navigator.userAgent.indexOf('ChaoXingStudy') > -1;
function greenligth() {
	Ext.fly(window.frameElement).parent().addCls('ans-job-finished');
}
function isUnFinishJob() {
	try {
		var _0xb12f1b = Ext.fly(window.frameElement).prev();
		if (_0xb12f1b && _0xb12f1b.hasCls('ans-job-icon')) {
			return !Ext.fly(window.frameElement).parent().hasCls('ans-job-finished');
		}
		return false;
	} catch (_0xed312) {
		console.log(_0xed312);
	}
	return false;
}
var isViturlEdit = false, ff = 1;
function proxy_completed() {
	ed_complete && (greenligth(), ed_complete());
}
function config(_0x11aec7) {
	return window.frameElement.getAttribute(_0x11aec7);
}
function getCookie(_0x3a64b2) {
	var _0x32e2e5 = document.cookie.split('; ');
	for (var _0x24560c = 0; _0x24560c < _0x32e2e5.length; _0x24560c++) {
		var _0x568b32 = _0x32e2e5[_0x24560c].split('=');
		if (_0x568b32[0] == _0x3a64b2) {
			return unescape(_0x568b32[1]);
		}
	}
}
function showMoocPlayer(_0x43d66b) {
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
			var _0x39b35e = new MoocPlayer({
				'isSendLog': !!parent.AttachmentSetting && parent.AttachmentSetting.control,
				'data': _0x43d66b,
				'height': 540,
				'width': 676
			});
		});
	});
}
function showHTML5Player(_0x578a26) {
	Ext.get('reader').setHTML('<video id="video" class="video-js vjs-default-skin vjs-big-play-centered"></video>');
	new ans.VideoJs({
		'videojs': 'video',
		'params': _0x578a26
	});
	document.getElementsByTagName('video')[0].addEventListener('play', function () {
		var _0x5ab6a1 = parent.document.getElementsByTagName('iframe');
		for (var _0x97f1c = 0; _0x97f1c < _0x5ab6a1.length; _0x97f1c++) {
			if (_0x5ab6a1[_0x97f1c].getAttribute('src').indexOf('microCourse') != -1) {
				var _0x4a332b = _0x5ab6a1[_0x97f1c].contentWindow.document.getElementsByTagName('iframe')[0].contentWindow;
				_0x4a332b.PageView.stopAll && _0x4a332b.PageView.stopAll();
			}
		}
		$('.vjs-subs-caps-button .vjs-icon-placeholder').hover(function () {
			if ($('.vjs-subs-caps-button .vjs-menu-content').length > 0) {
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
	function _0xd5d132() {
		var _0x325c23 = $('#video').height(), _0x24a87d = $('#sp_video_ppt_pic').height(), _0x345588 = (parseInt(_0x325c23) - 60 - parseInt(_0x24a87d)) / 2;
		$('#sp_video_ppt_pic').length > 0 && $('#sp_video_ppt_pic').hasClass('sp_ppt_pic_fullScreen') ? ($('#sp_video_ppt_pic').css('top', _0x345588 + 'px'), $('#sp_video_ppt_pic').css('left', '0')) : ($('#sp_video_ppt_pic').css('top', '0px'), $('#sp_video_ppt_pic').css('left', '0px'));
	}
	$('.vjs-fullscreen-control').click(function () {
		setTimeout(_0xd5d132, 300);
	});
	$(window).resize(function () {
		setTimeout(_0xd5d132, 500);
	});
}
var wrongObj = '', videoName = '', videoJobId = '', videoObjectId = '';
function loadVideo() {
	var _0x306c39 = config('objectid'), _0x3e6818 = Ext.get('reader');
	if (!_0x306c39) {
		_0x3e6818.setHTML('未找到该文件');
		return;
	}
	wrongObj = _0x306c39;
	videoObjectId = _0x306c39;
	var _0x467a2e = window.frameElement, _0x24a37f = Ext.decode(_0x467a2e.getAttribute('data')), _0xff3232 = parent.AttachmentSetting, _0x16183b = config('mid'), _0x133c83 = 0, _0x35a9fe = config('vbegin'), _0x11630a = config('vend'), _0x2cc93f = config('jobid') || '', _0x185d82 = _0x24a37f ? _0x24a37f.danmaku == null ? 0 : _0x24a37f.danmaku : 0, _0x1daec2 = _0xff3232 && _0xff3232.videoTopicCloud, _0x2869c0 = config('fastforward') == 'true' ? true : false, _0x263ce1 = config('switchwindow') == 'true' ? true : false, _0x1191ff = Ext.get('note'), _0x5e61d9 = Ext.get('hl'), _0xbb7e6b = Ext.get('note1-wrap'), _0x28e764 = Ext.get('note1'), _0x1b67ac = null, _0x5d15d1 = _0x24a37f ? _0x24a37f.rt ? _0x24a37f.rt : 0.9 : 0.9;
	_0x2cc93f == '' ? videoJobId = _0x24a37f && _0x24a37f['_jobid'] ? _0x24a37f['_jobid'] : '' : videoJobId = _0x2cc93f;
	var _0x252475 = flashChecker().hasFlash;
	try {
		isTeacher = top.location.href.indexOf('teacherstudy') > 0 || top.location.href.indexOf('course/phone/chapterdata') > 0;
	} catch (_0x17b9ee) {
	}
	var _0x450601 = parent.isVideoVisibleName, _0x5ee972 = _0x24a37f ? _0x24a37f.doublespeed != 0 ? 1 : 0 : 1;
	_0x24a37f.v_begin && _0x24a37f.v_end && _0x24a37f.pobjectid && (isViturlEdit = true);
	function _0x7c05fd(_0x5f35c6) {
		if (_0x5f35c6 && _0x5f35c6.length == 0) {
			return;
		}
		if (Ext.select('.zsCloud_ul') != null) {
			var _0x317b94 = '';
			for (var _0x3941b2 = 0, _0x107dc7 = _0x5f35c6.length; _0x3941b2 < _0x107dc7; _0x3941b2++) {
				_0x317b94 += '<li><span class=\'zsCloud_span topicId' + _0x5f35c6[_0x3941b2].id + '\' onclick=\'markersPlayer(this)\'>' + _0x5f35c6[_0x3941b2].name + ' </span></li>';
			}
			Ext.select('.zsCloud_ul').setHTML(_0x317b94);
			Ext.select('.zsCloud').setStyle('display', 'block');
		}
	}
	function _0x42f64a() {
		_0x133c83 <= 100 && _0x5e61d9.setWidth((_0x133c83 += 5) + '%');
		var _0x5c5bbe = getCookie('fid') || '';
		Ext.Ajax.request({
			'url': '/ananas/status/' + _0x306c39 + '?k=' + _0x5c5bbe + '&flag=normal',
			'success': function (_0x4e1d69) {
				var _0x17cde3 = eval('(' + _0x4e1d69.responseText + ')');
				Ext.get('loading').hide();
				switch (_0x17cde3.status) {
					case 'success':
						_0xbb7e6b.remove(), videoName = _0x24a37f && _0x24a37f.name || '';
						_0x450601 != 'false' && (Ext.fly(window.frameElement).parent().first('.ans-job-icon') != null ? Ext.fly(window.frameElement).parent().first('.ans-job-icon').insertHtml('beforeEnd', '<span title="' + videoName + '" style="width: 500px;margin-left: 120px;display: inline-block;height: 23px;line-height: 23px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">' + videoName + '</span>') : Ext.fly(window.frameElement).parent().insertHtml('afterBegin', '<div title="' + videoName + '" style="width: 500px;display: inline-block;line-height: 23px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">' + videoName + '</div>'));
						var _0x26222e = _0x17cde3.duration, _0x47bf50 = {
							'enableFastForward': _0x2869c0 ? 0 : 1,
							'enableSwitchWindow': _0x263ce1 ? 0 : 1,
							'duration': _0x26222e,
							'httpmd': _0x17cde3.httpmd,
							'http': _0x17cde3.http,
							'httphd': _0x17cde3.httphd,
							'httpshd': _0x17cde3.httpshd,
							'filename': _0x17cde3.filename,
							'dtoken': _0x17cde3.dtoken,
							'videoTopicCloud': _0x1daec2
						};
						window.duration = _0x26222e;
						_0x17cde3.cdn && (_0x47bf50.cdn = _0x17cde3.cdn);
						if (document.cookie.length > 0) {
							_0x47bf50.memberinfo = getCookie('memberinfo');
							_0x47bf50.questionErrorLogUrl = ServerHosts.MASTER_HOST + '/question/addquestionerror';
						}
						_0x16183b && (_0x47bf50.mid = _0x16183b);
						_0x17cde3.duration && (_0x47bf50.videoTotalTime = _0x17cde3.duration);
						if (_0xff3232 && _0xff3232.isErya == 1) {
							_0x47bf50.screenshot = 'https://p.ananas.chaoxing.com/star3/origin/a26e16b5ac8e769bba6bda57343b7d57.png';
						} else {
							_0x17cde3.screenshot && (_0x47bf50.screenshot = _0x17cde3.screenshot);
						}
						_0xff3232 && (_0x47bf50.chapterVideoTranslate = _0xff3232.chapterVideoTranslate);
						_0x17cde3.thumbnails && (_0x47bf50.thumbnails = _0x17cde3.thumbnails);
						_0x17cde3.subobjectid && (_0x47bf50.subobjectid = _0x17cde3.subobjectid);
						_0x35a9fe && (_0x47bf50.startTime = _0x35a9fe);
						_0x11630a && (_0x47bf50.endTime = _0x11630a);
						_0x47bf50.rt = _0x5d15d1, _0x47bf50.control = _0xff3232 && _0xff3232.control;
						isTeacher && (_0x47bf50.control = false);
						var _0x2652e6 = {}, _0x22b723, _0x4b190b, _0x3402ae;
						if (_0xff3232 && _0xff3232.control) {
							var _0x398bc7 = _0xff3232.attachments, _0x5eb051 = _0xff3232.defaults, _0x2c1bb7 = _0x17cde3.objectid + '-' + (_0x35a9fe ? _0x35a9fe : 0) + '-' + (_0x11630a ? _0x11630a : _0x26222e) + '-' + _0x2cc93f;
							_0x5eb051 && (_0x47bf50.userid = _0x5eb051.userid || '', _0x47bf50.fid = _0x5eb051.fid || '');
							for (var _0x54a0ca = 0; _0x54a0ca < _0x398bc7.length; _0x54a0ca++) {
								_0x2652e6 = _0x398bc7[_0x54a0ca];
								_0x4b190b = 0;
								_0x3402ae = _0x26222e;
								_0x2652e6.property && (_0x2652e6.property.vbegin && (_0x4b190b = _0x2652e6.property.vbegin), _0x2652e6.property.vend && (_0x3402ae = _0x2652e6.property.vend));
								!_0x2652e6.jobid && (_0x2652e6.jobid = '');
								_0x22b723 = _0x2652e6.objectId + '-' + _0x4b190b + '-' + _0x3402ae + '-' + _0x2652e6.jobid;
								if (_0x2c1bb7 == _0x22b723) {
									Ext.apply(_0x47bf50, _0xff3232.defaults);
									_0x47bf50.headOffset = _0x2652e6.headOffset ? Math.floor(parseInt(_0x2652e6.headOffset) / 1000) : 0;
									_0x47bf50.objectId = _0x2652e6.objectId;
									_0x47bf50.otherInfo = _0x2652e6.otherInfo;
									_0x47bf50.isPassed = _0x2652e6.isPassed;
									_0x47bf50.aId = _0x2652e6.aid;
									_0x47bf50.danmaku = _0x185d82;
									_0x2652e6.topicList && _0x7c05fd(_0x2652e6.topicList);
									_0x2652e6.property && _0x2652e6.property.fastforward && _0x2652e6.property.fastforward == 'true' && (_0x47bf50.enableFastForward = 0);
									_0x2652e6.property && typeof _0x2652e6.property.doublespeed != 'undefined' && _0x2652e6.property.doublespeed == 0 && (_0x47bf50.doublespeed = 0, _0x5ee972 = 0);
									var _0x5a5feb = _0x47bf50.schooldoublespeed;
									typeof _0x5a5feb == 'undefined' || _0x5a5feb == 2 ? _0x47bf50.doublespeed = _0x5ee972 : _0x47bf50.doublespeed = _0x5a5feb;
									_0x2cc93f && (_0x47bf50.jobid = _0x2cc93f, !_0x2652e6.job && (!isTeacher && greenligth(), ed_complete = false, _0x47bf50.enableFastForward = 1, _0x47bf50.enableSwitchWindow = 1, _0x47bf50.headOffset = 0));
									_0x47bf50.reportUrl = _0x47bf50.reportUrl && _0x47bf50.reportUrl.replace('http://', window.location.protocol + '//');
									window['_jobindex'] = _0x54a0ca;
									break;
								}
							}
						} else {
							var _0x5a5feb = _0x47bf50.schooldoublespeed;
							typeof _0x5a5feb == 'undefined' || _0x5a5feb == 2 ? _0x47bf50.doublespeed = _0x5ee972 : _0x47bf50.doublespeed = _0x5a5feb;
						}
						if (_0x47bf50.ignoreVideoCtrl == 1) {
							_0x47bf50.enableFastForward = 1;
							_0x47bf50.enableSwitchWindow = 1;
						}
						(!_0x47bf50.control || isTeacher) && (ed_complete = false, _0x47bf50.enableFastForward = 1, _0x47bf50.enableSwitchWindow = 1, _0x47bf50.headOffset = 0);
						(_0x47bf50.isPassed || _0x47bf50.headOffset > _0x47bf50.videoTotalTime * 0.95) && (_0x47bf50.headOffset = 0);
						_0x1b67ac && clearInterval(_0x1b67ac), _0x47bf50.isSupportFace = $('.maskDiv1', top.document).length > 0 && /\/studentstudy/.test(top.location.pathname) ? true : false, _0x47bf50.isShowFaceCollection = /\/studentstudy/.test(top.location.pathname) && !Ext.fly(window.frameElement).parent().hasCls('ans-job-finished');
						if (supportH5Video()) {
							_0x24a37f.danmaku && (loadMultiFile([{
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
							ff = _0x47bf50.enableFastForward;
							showHTML5Player(_0x47bf50);
						} else {
							if (!_0x252475) {
								var _0x234d82 = 'http://www.adobe.com/go/getflashplayer';
								Ext.get('reader').setHTML('您没有安装flashplayer\uFF0C请到<a href="' + _0x234d82 + '" target="_blank">www.adobe.com</a>下载安装\u3002<br/>如果已经安装请点击此处启用\uFF1A<object id="swf_jlxl1lfb" height="50" width="100" type="application/x-shockwave-flash" data="/ananas/modules/video/cxplayer/player_4.0.11.swf?v=20161025" style="border:#ccc 1px solid"><param name="quality" value="high"><param name="allowScriptAccess" value="always"><param name="wMode" value="transparent"><param name="align" value="middle"><param name="bgcolor" value="#000000"><param name="swLiveConnect" value="true"><param name="loop" value="true"><param name="play" value="true"><param name="DeviceFont" value="false"><param name="allowFullScreen" value="true"><param name="menu" value="true"></object>');
								return;
							}
							showMoocPlayer(_0x47bf50);
						}
						sendReadZTMediaLog(0);
						break;
					case 'failed':
						_0x1b67ac && clearInterval(_0x1b67ac), _0xbb7e6b.remove(), _0x1191ff.show();
						break;
					case 'waiting':
						_0xbb7e6b.update('<div class="line1"><div class="line3"></div></div><p class="tipStyle making">视频正在转码\uFF0C您无需在此页面等待\u30109001\u3011</p>');
						break;
					case 'converting':
					case 'transfer':
						_0xbb7e6b.update('<div class="line1"><div class="line2"></div></div><p class="tipStyle">视频上传中\u30109002\u3011</p>');
						break;
				}
			},
			'failure': function (_0x22bf0c) {
				_0x22bf0c.status == 0 ? (_0x1b67ac && clearInterval(_0x1b67ac), _0xbb7e6b.update('<div class="line1"><div class="line2"></div></div><p class="tipStyle">视频加载超时\uFF0C请刷新页面重试\u30109003\u3011</p>'), Ext.get('loading').hide()) : (_0x1b67ac && clearInterval(_0x1b67ac), _0xbb7e6b.update('<div class="line1"><div class="line3"></div></div><p class="tipStyle">视频加载失败\uFF0C请稍后再试\u30109004\u3011</p>'), Ext.get('loading').hide());
			}
		});
	}
	_0x42f64a();
}
function supportH5Video() {
	var _0x41d5d6 = function () {
		var _0x5b8d9b = document.createElement('video');
		if (typeof _0x5b8d9b.canPlayType == 'function') {
			var _0x3dec52 = _0x5b8d9b.canPlayType('video/mp4;codecs="avc1.42E01E,mp4a.40.2"');
			if (_0x3dec52.toLowerCase() == 'maybe' || _0x3dec52.toLowerCase() == 'probably') {
				return true;
			}
			var _0x3dec52 = _0x5b8d9b.canPlayType('video/mp4;codecs="avc1.64001E,mp4a.40.2"');
			if (_0x3dec52.toLowerCase() == 'maybe' || _0x3dec52.toLowerCase() == 'probably') {
				return true;
			}
		}
		return false;
	};
	if (Ext.isIE && Ext.isIE10m) {
		return false;
	}
	return _0x41d5d6();
}
var playLogTimer;
function sendReadZTMediaLog(_0x55a62a) {
	try {
		var _0x240a9e = function (_0x5385b5) {
			var _0x431889 = new RegExp('(^|&)' + _0x5385b5 + '=([^&]*)(&|$)'), _0x4ca9ed = parent.location.search.substr(1).match(_0x431889);
			if (_0x4ca9ed != null) {
				return unescape(_0x4ca9ed[2]);
			}
			return null;
		}, _0x5a68b3 = parent.AttachmentSetting, _0x3b1e39 = window.frameElement, _0x7482c7 = _0x3b1e39.parentElement.parentElement.parentElement.getAttribute('kid');
		if (_0x7482c7) {
			var _0x3e217a = 'marg-' + _0x7482c7;
			_0x5a68b3 = top[_0x3e217a];
			typeof _0x5a68b3 == 'string' && (_0x5a68b3 = eval('(' + _0x5a68b3 + ')'));
		}
		if (!_0x5a68b3) {
			return;
		}
		var _0x5f449f = _0x5a68b3.defaults.isFiled, _0x5dfdac = _0x5a68b3.defaults.state;
		if (_0x5f449f == 1 || _0x5dfdac == 1) {
			return;
		}
		var _0x1d4536 = top.dtype || 'Course';
		if (_0x1d4536 == 'ZT' || _0x1d4536 == 'HB' || _0x1d4536 == 'MAG') {
			var _0x4d7e7c = parent.location.search || '', _0x599fb0 = getCookie('UID'), _0x4237fa = config('objectid'), _0x3ab824 = 0, _0x4cdaaa = _0x5a68b3.defaults.courseid, _0x28d9e2 = _0x5a68b3.defaults.knowledgeid, _0x5bce32 = window.duration, _0x233352 = _0x240a9e('_from_'), _0x386360 = _0x5a68b3.attachments, _0x1fa814 = '';
			if (_0x386360.length > 0) {
				for (var _0x4612c6 = 0, _0x443b90 = _0x386360.length; _0x4612c6 < _0x443b90; _0x4612c6++) {
					var _0x3c3c35 = _0x386360[_0x4612c6], _0x5b2f15 = _0x3c3c35.objectId;
					if (_0x5b2f15 == _0x4237fa) {
						if (_0x55a62a == 0) {
							_0x1fa814 = _0x3c3c35.enc0;
						} else {
							_0x55a62a == 1 ? _0x1fa814 = _0x3c3c35.enc1 : _0x1fa814 = _0x3c3c35.enc2;
						}
						break;
					}
				}
			}
			var _0x1ddb39 = location.protocol + '//data-xxt.aichaoxing.com/analysis/datalog?s=' + _0x4cdaaa + '&c=' + _0x28d9e2 + '&o=' + _0x4237fa + '&st=' + _0x55a62a + '&m=' + _0x3ab824 + '&d=' + _0x5bce32 * 1000 + '&u=' + _0x599fb0 + '&_from_=' + _0x233352 + '&enc=' + _0x1fa814, _0xd823a9 = function () {
				Ext.Ajax.request({
					'url': _0x1ddb39,
					'success': function (_0x240839) {
					}
				});
			};
			_0xd823a9();
			if (_0x55a62a == 1) {
				playLogTimer && clearInterval(playLogTimer);
				playLogTimer = setInterval(function () {
					_0xd823a9();
				}, 5000);
			} else {
				_0x55a62a == 2 && (playLogTimer && clearInterval(playLogTimer));
			}
		}
	} catch (_0x19c485) {
	}
}
function receiveStudyLog() {
	try {
		var _0xf900b6 = parent.AttachmentSetting;
		if (!_0xf900b6) {
			return;
		}
		if (_0xf900b6 && _0xf900b6.defaults) {
			var _0x3e337b = _0xf900b6.defaults;
			if (_0x3e337b.chapterCapture != 1) {
				return;
			}
			var _0x256406 = '/keeper/api/receive-studylog', _0x424c84 = new Date().getTime(), _0x4c2abc = _0x3e337b.courseid, _0x14e74f = _0x3e337b.clazzId, _0x1abaf7 = _0x3e337b.cpi, _0x462bf2 = _0x3e337b.userid, _0xcd418d = _0x3e337b.knowledgeid, _0x2e789 = _0x3e337b.fid, _0x4880af = '', _0x424407 = config('objectid'), _0x43eda9 = config('jobid') || '', _0x5bd41e = _0xf900b6.attachments;
			if (_0x5bd41e.length > 0) {
				for (var _0x3852fe = 0, _0x3f1f48 = _0x5bd41e.length; _0x3852fe < _0x3f1f48; _0x3852fe++) {
					var _0x21b374 = _0x5bd41e[_0x3852fe], _0x4cbe76 = _0x21b374.objectId;
					if (_0x4cbe76 == _0x424407) {
						_0x4880af = _0x21b374.aid;
						break;
					}
				}
			}
			var _0x1d7b9d = {
				'relationId': _0x4880af,
				'objectId': _0x424407,
				'userId': _0x462bf2,
				'knowledgeId': _0xcd418d,
				'fid': _0x2e789,
				'jobId': _0x43eda9
			}, _0x2701d6 = {
				'courseId': _0x4c2abc,
				'clazzId': _0x14e74f,
				'personId': _0x1abaf7,
				'eventType': 4,
				'eventTime': _0x424c84,
				'data': _0x1d7b9d
			}, _0x2234d8 = _0x3e337b.mtEnc;
			Ext.Ajax.request({
				'method': 'post',
				'url': _0x256406,
				'params': {
					'log': JSON.stringify(_0x2701d6),
					'enc': _0x2234d8
				},
				'success': function (_0x313be6) {
				}
			});
		}
	} catch (_0x1d8ed7) {
	}
}
function createVideoTask() {
	if (isViturlEdit) {
		return;
	}
	var _0x4cbb74 = location.protocol + '//convertservice.chaoxing.com/video/createVideoTask?objectid=' + wrongObj;
	Ext.Ajax.request({
		'timeout': 3000,
		'type': 'get',
		'async': false,
		'url': _0x4cbb74,
		'dataType': 'jsonp',
		'jsonp': 'jsoncallback',
		'success': function (_0x257aea) {
		},
		'failure': function (_0x456b51) {
			console.log('创建任务失败');
		}
	});
}
Ext.onReady(function () {
	var _0xdb141 = parent.requestSatusResourceDownGrade;
	if (_0xdb141 && _0xdb141 == 1) {
		Ext.select('body').setHTML('<img src="/ananas/css/downgradeBlueTip.jpg" width="676" height="540">');
		return;
	}
	loadVideo();
});
var danmaku = {};
function getDanmuByTime(_0x2a49da, _0x1f4711) {
	var _0x394887 = parent.AttachmentSetting;
	if (!_0x394887) {
		return;
	}
	if (_0x394887 && _0x394887.defaults) {
		var _0x529a8f = _0x394887.defaults, _0x22ce18 = _0x529a8f.courseid, _0x4842b6 = _0x529a8f.clazzId;
	} else {
		return;
	}
	if (_0x2a49da == 'pause') {
		danmaku = {};
		return;
	}
	_0x2a49da == 'play' && (danmaku = {});
	var _0x556ec0 = config('mid'), _0x1c0ee9 = {
		'courseid': _0x22ce18,
		'classid': _0x4842b6,
		'mid': _0x556ec0,
		'timebegin': parseInt(_0x1f4711),
		'timeend': parseInt(_0x1f4711) + 59
	};
	Ext.Ajax.request({
		'url': '/videodanmaku/timerange-danmakulist',
		'method': 'get',
		'params': _0x1c0ee9,
		'success': function (_0x2dd350) {
			var _0x53686b = eval('(' + _0x2dd350.responseText + ')');
			if (_0x53686b.status == 1) {
				var _0x4880d5 = _0x53686b.data;
				for (var _0x2da19b = 0; _0x2da19b < _0x4880d5.length; _0x2da19b++) {
					var _0x429f9a = _0x4880d5[_0x2da19b].timeline;
					!danmaku[_0x429f9a] && (danmaku[_0x429f9a] = new Array());
					danmaku[_0x429f9a].push(_0x4880d5[_0x2da19b].content);
				}
				_0x1f4711 == 0 && danmuPlay(0);
			} else {
				alert('服务异常,稍后再试!');
			}
		},
		'failure': function (_0x468c5c) {
			alert('服务异常,稍后再试!');
		}
	});
}
var count = 0, timeFlag = -1, currentTime = 0;
function shotdanmu(_0x47ccc5) {
	var _0x16913f = _0x47ccc5.clientWidth;
	_0x16913f = -parseInt(_0x16913f);
	var _0x131276 = 'translateX(' + _0x16913f + 'px)';
	setTimeout(function () {
		_0x47ccc5.style.transform = _0x131276;
		_0x47ccc5.className = 'danmuItem left';
	}, 500);
}
function danmuPlay(_0x2ba751) {
	currentTime = _0x2ba751;
	if (timeFlag == _0x2ba751) {
		return;
	}
	timeFlag = _0x2ba751;
	var _0x5bfbc2 = danmaku[_0x2ba751];
	if (!_0x5bfbc2) {
		return;
	}
	if (!$('.mui-switch').hasClass('checked')) {
		return;
	}
	var _0x5338f = '<div class="danmuItem right">';
	for (var _0x199141 = 0; _0x199141 < _0x5bfbc2.length; _0x199141++) {
		if (_0x5bfbc2[_0x199141] == '@zan@') {
			_0x5338f += '<span><i class="zanIcon"></i>赞</span>';
		} else {
			if (_0x5bfbc2[_0x199141] == '@不赞同@') {
				_0x5338f += '<span><i class="noZanIcon"></i>不赞同</span>';
			} else {
				if (_0x5bfbc2[_0x199141] == '@感动@') {
					_0x5338f += '<span><i class="moveIcon"></i>感动</span>';
				} else {
					if (_0x5bfbc2[_0x199141] == '@疑惑@') {
						_0x5338f += '<span><i class="doubtIcon"></i>疑惑</span>';
					} else {
						if (_0x5bfbc2[_0x199141] == '@献花@') {
							_0x5338f += '<span><i class="huaIcon"></i>献花</span>';
						} else {
							if (_0x5bfbc2[_0x199141] == '@鼓掌@') {
								_0x5338f += '<span><i class="clapIcon"></i>鼓掌</span>';
							} else {
								_0x5bfbc2[_0x199141] == '@有趣@' ? _0x5338f += '<span><i class="interestingIcon"></i>有趣</span>' : _0x5338f += '<span>' + _0x5bfbc2[_0x199141] + '</span>';
							}
						}
					}
				}
			}
		}
	}
	_0x5338f += '</div>';
	var _0x5908e5 = count % 3, _0xc8a527 = new Ext.XTemplate(_0x5338f).append('channel_' + _0x5908e5);
	shotdanmu(_0xc8a527);
	count++;
}
var getPlayState;
function clearStateInterval() {
	getPlayState && clearInterval(getPlayState);
}
var playStateV2;
function clearStateV2Interval() {
	playStateV2 && clearInterval(playStateV2);
}
function checkJobCountLimit(_0x22e0cd) {
	/\/studentstudy/.test(top.location.pathname) && (top.showJobLimitTip(), playStateV2 = setInterval(function () {
		top.resumePlay && (clearStateV2Interval(), _0x22e0cd.play(), top.resumePlay = false);
	}, 300));
}
function startFaceCollection(_0x47459d, _0x2b332c, _0x3d484d) {
	if (/\/studentstudy/.test(top.location.pathname)) {
		var _0x3be050 = $('.maskDiv1', top.document).length;
		if (_0x3be050 > 0) {
			$('#videoJobId', top.document).val(videoJobId);
			$('#chapterVideoObjectId', top.document).val(videoObjectId);
			top.getQRCodeURLShow1 && top.getQRCodeURLShow1();
			$('.maskDiv1', top.document).css('display', 'block');
			getPlayState = setInterval(function () {
				top.playerState && (clearStateInterval(), _0x3d484d.isPlay = true, _0x47459d.play(), top.playerState = false);
			}, 1000);
		}
	}
}
function chapterPlayNextVideo(_0x5e63cb) {
	/\/studentstudy/.test(top.location.pathname) && (top.getChapterNextVideo && top.getChapterNextVideo(_0x5e63cb));
}
function markersPlayer(_0x33102b) {
	var _0x5a339a = _0x33102b.getAttribute('data-marker-time');
	if (_0x5a339a) {
		return playerTime(_0x5a339a);
	}
}
function getMarkers() {
	return videojs('video').markers;
}
function playerTime(_0x2a4fe2) {
	if (ff != 1) {
		return;
	}
	var _0x14e984 = videojs('video');
	return _0x14e984.currentTime(_0x2a4fe2);
}
function playVideo() {
	var _0x3b456f = videojs('video');
	player.volume(0);
	player.on('loadstart', function () {
		_0x3b456f.play().catch(Ext.emptyFn);
	});
}
function reSizeIframe() {
	try {
		var _0x5eed9d = Ext.fly(Ext.select('.main').elements[0]).getHeight();
		Ext.fly(window.frameElement).setHeight(_0x5eed9d + 'px');
	} catch (_0x4b6c16) {
		console.log(e.message);
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
		var _0x28f6d6 = videojs('video'), _0x787b9 = parseInt(_0x28f6d6.currentTime()), _0x4fdf46 = parseInt(_0x787b9 / 60);
		_0x4fdf46 < 10 && (_0x4fdf46 = '0' + _0x4fdf46.toString());
		var _0x416473 = parseInt(_0x787b9 % 60);
		_0x416473 < 10 && (_0x416473 = '0' + _0x416473.toString());
		$('.Note_name', parent.parent.document).html(videoName + ' ' + _0x4fdf46 + ':' + _0x416473);
		$('.Note_name', parent.parent.document).css('display', 'block');
		$('#noteVideoTime', parent.parent.document).val(_0x787b9);
		$('#noteVideoJobId', parent.parent.document).val(videoJobId);
		$('#noteVideoObjectId', parent.parent.document).val(videoObjectId);
		parent.parent.getClazzNote && parent.parent.getClazzNote();
		parent.parent.changePan && parent.parent.changePan('3');
		$('.formTopic', parent.parent.document).size() > 0 && $('.formTopic', parent.parent.document).css('display', 'block');
	});
});