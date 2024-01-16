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
		var _0x38d07a = Ext.fly(window.frameElement).prev();
		if (_0x38d07a && _0x38d07a.hasCls('ans-job-icon')) {
			return !Ext.fly(window.frameElement).parent().hasCls('ans-job-finished');
		}
		return false;
	} catch (_0x102b69) {
		console.log(_0x102b69);
	}
	return false;
}
var isViturlEdit = false, ff = 1;
function proxy_completed() {
	ed_complete && (greenligth(), ed_complete());
}
function config(_0x48e50b) {
	return window.frameElement.getAttribute(_0x48e50b);
}
function getCookie(_0x14ca6a) {
	var _0xd285f6 = document.cookie.split('; ');
	for (var _0x2e581e = 0; _0x2e581e < _0xd285f6.length; _0x2e581e++) {
		var _0x21aa90 = _0xd285f6[_0x2e581e].split('=');
		if (_0x21aa90[0] == _0x14ca6a) {
			return unescape(_0x21aa90[1]);
		}
	}
}
function showMoocPlayer(_0x486d24) {
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
			var _0x1dceae = new MoocPlayer({
				'isSendLog': !!parent.AttachmentSetting && parent.AttachmentSetting.control,
				'data': _0x486d24,
				'height': 540,
				'width': 676
			});
		});
	});
}
function bindVjsClick(_0x41356d) {
	try {
		var _0x32a10b = _0x41356d.enableFastForward, _0x3b62c4 = _0x41356d.jobid;
		if (typeof _0x32a10b != 'undefined' && _0x32a10b === 0 && typeof _0x3b62c4 != 'undefined' && _0x3b62c4 != '' && window.parent.parent.location.href.indexOf('studentstudy') > -1) {
			var _0x15cd42 = $('.video-js .toolTipBox1'), _0x531b2a = $('#tipDiv');
			_0x15cd42.length === 0 && _0x531b2a.length > 0 && ($('.video-js').prepend(_0x531b2a.html()), $('.vjs-progress-control').on('click', function () {
				!$('.toolTipBox1').is(':visible') && ($('.toolTipBox1').show(), setTimeout(function () {
					$('.toolTipBox1').hide();
				}, 800));
			}));
		}
	} catch (_0x34eb92) {
		console.log(_0x34eb92);
	}
}
function showHTML5Player(_0x30cb34) {
	Ext.get('reader').setHTML('<video id="video" class="video-js vjs-default-skin vjs-big-play-centered"></video>');
	new ans.VideoJs({
		'videojs': 'video',
		'params': _0x30cb34
	});
	document.getElementsByTagName('video')[0].addEventListener('play', function () {
		var _0x19c683 = parent.document.getElementsByTagName('iframe');
		for (var _0x456a97 = 0; _0x456a97 < _0x19c683.length; _0x456a97++) {
			if (_0x19c683[_0x456a97].getAttribute('src').indexOf('microCourse') != -1) {
				var _0x4c74fd = _0x19c683[_0x456a97].contentWindow.document.getElementsByTagName('iframe')[0].contentWindow;
				_0x4c74fd.PageView.stopAll && _0x4c74fd.PageView.stopAll();
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
	function _0x129b29() {
		var _0x3823be = $('#video').height(), _0x425a4b = $('#sp_video_ppt_pic').height(), _0x3ab49d = (parseInt(_0x3823be) - 60 - parseInt(_0x425a4b)) / 2;
		$('#sp_video_ppt_pic').length > 0 && $('#sp_video_ppt_pic').hasClass('sp_ppt_pic_fullScreen') ? ($('#sp_video_ppt_pic').css('top', _0x3ab49d + 'px'), $('#sp_video_ppt_pic').css('left', '0')) : ($('#sp_video_ppt_pic').css('top', '0px'), $('#sp_video_ppt_pic').css('left', '0px'));
	}
	$('.vjs-fullscreen-control').click(function () {
		setTimeout(_0x129b29, 300);
	});
	$(window).resize(function () {
		setTimeout(_0x129b29, 500);
	});
	bindVjsClick(_0x30cb34);
}
var wrongObj = '', videoName = '', videoJobId = '', videoObjectId = '', mid = '';
function loadVideo() {
	var _0x3e5980 = config('objectid'), _0x20cb61 = Ext.get('reader');
	if (!_0x3e5980) {
		_0x20cb61.setHTML('未找到该文件');
		return;
	}
	wrongObj = _0x3e5980;
	videoObjectId = _0x3e5980;
	var _0x547b2f = window.frameElement, _0x45fa3f = Ext.decode(_0x547b2f.getAttribute('data')), _0x3ba069 = parent.AttachmentSetting;
	mid = config('mid');
	var _0x562e1b = 0, _0x3d5b4c = config('vbegin'), _0x2ff281 = config('vend'), _0xee9a4e = config('jobid') || '', _0x29c0b1 = _0x45fa3f ? _0x45fa3f.danmaku == null ? 0 : _0x45fa3f.danmaku : 0, _0x18072d = _0x3ba069 && _0x3ba069.videoTopicCloud, _0x21ce09 = config('fastforward') == 'true' ? true : false, _0x323c83 = config('switchwindow') == 'true' ? true : false, _0x528482 = Ext.get('note'), _0x5bcb79 = Ext.get('hl'), _0x14067b = Ext.get('note1-wrap'), _0x2bd43e = Ext.get('note1'), _0x4dc2c8 = null, _0x132163 = _0x45fa3f ? _0x45fa3f.rt ? _0x45fa3f.rt : 0.9 : 0.9;
	_0xee9a4e == '' ? videoJobId = _0x45fa3f && _0x45fa3f['_jobid'] ? _0x45fa3f['_jobid'] : '' : videoJobId = _0xee9a4e;
	var _0x83ba9 = flashChecker().hasFlash;
	try {
		isTeacher = top.location.href.indexOf('teacherstudy') > 0 || top.location.href.indexOf('course/phone/chapterdata') > 0;
	} catch (_0x3478c0) {
	}
	var _0x3002b6 = parent.isVideoVisibleName, _0x21089b = _0x45fa3f ? _0x45fa3f.doublespeed != 0 ? 1 : 0 : 1;
	_0x45fa3f.v_begin && _0x45fa3f.v_end && _0x45fa3f.pobjectid && (isViturlEdit = true);
	function _0x5ef00c(_0x5403cc) {
		if (_0x5403cc && _0x5403cc.length == 0) {
			return;
		}
		if (Ext.select('.zsCloud_ul') != null) {
			var _0x4a0bc8 = '';
			for (var _0x1b2493 = 0, _0x3ff008 = _0x5403cc.length; _0x1b2493 < _0x3ff008; _0x1b2493++) {
				_0x4a0bc8 += '<li><span class=\'zsCloud_span topicId' + _0x5403cc[_0x1b2493].id + '\' onclick=\'markersPlayer(this)\'>' + _0x5403cc[_0x1b2493].name + ' </span></li>';
			}
			Ext.select('.zsCloud_ul').setHTML(_0x4a0bc8);
			Ext.select('.zsCloud').setStyle('display', 'block');
		}
	}
	function _0x55db82() {
		_0x562e1b <= 100 && _0x5bcb79.setWidth((_0x562e1b += 5) + '%');
		var _0x3d204f = getCookie('fid') || '';
		Ext.Ajax.request({
			'url': '/ananas/status/' + _0x3e5980 + '?k=' + _0x3d204f + '&flag=normal',
			'success': function (_0x4ab431) {
				var _0x3add53 = eval('(' + _0x4ab431.responseText + ')');
				Ext.get('loading').hide();
				switch (_0x3add53.status) {
					case 'success':
						_0x14067b.remove(), videoName = _0x45fa3f && _0x45fa3f.name || '';
						_0x3002b6 != 'false' && (Ext.fly(window.frameElement).parent().first('.ans-job-icon') != null ? top.location.href.indexOf('nodedetailcontroller/visitnodedetail') > -1 ? Ext.fly(window.frameElement).parent().insertHtml('afterBegin', '<div title="' + videoName + '" style="width: 500px;display: inline-block;line-height: 23px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">' + videoName + '</div>') : Ext.fly(window.frameElement).parent().first('.ans-job-icon').insertHtml('beforeEnd', '<span title="' + videoName + '" style="width: 500px;margin-left: 120px;display: inline-block;height: 23px;line-height: 23px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">' + videoName + '</span>') : Ext.fly(window.frameElement).parent().insertHtml('afterBegin', '<div title="' + videoName + '" style="width: 500px;display: inline-block;line-height: 23px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">' + videoName + '</div>'));
						var _0x25edd8 = _0x3add53.duration, _0x41cb9a = {
							'enableFastForward': _0x21ce09 ? 0 : 1,
							'enableSwitchWindow': _0x323c83 ? 0 : 1,
							'duration': _0x25edd8,
							'httpmd': _0x3add53.httpmd,
							'http': _0x3add53.http,
							'httphd': _0x3add53.httphd,
							'httpshd': _0x3add53.httpshd,
							'filename': _0x3add53.filename,
							'dtoken': _0x3add53.dtoken,
							'videoTopicCloud': _0x18072d
						};
						window.duration = _0x25edd8;
						_0x3add53.cdn && (_0x41cb9a.cdn = _0x3add53.cdn);
						if (document.cookie.length > 0) {
							_0x41cb9a.memberinfo = getCookie('memberinfo');
							_0x41cb9a.questionErrorLogUrl = ServerHosts.MASTER_HOST + '/question/addquestionerror';
						}
						mid && (_0x41cb9a.mid = mid);
						_0x3add53.duration && (_0x41cb9a.videoTotalTime = _0x3add53.duration);
						if (_0x3ba069 && _0x3ba069.isErya == 1) {
							_0x41cb9a.screenshot = 'https://p.ananas.chaoxing.com/star3/origin/a26e16b5ac8e769bba6bda57343b7d57.png';
						} else {
							_0x3add53.screenshot && (_0x41cb9a.screenshot = _0x3add53.screenshot);
						}
						_0x3ba069 && (_0x41cb9a.chapterVideoTranslate = _0x3ba069.chapterVideoTranslate);
						_0x3add53.thumbnails && (_0x41cb9a.thumbnails = _0x3add53.thumbnails);
						_0x3add53.subobjectid && (_0x41cb9a.subobjectid = _0x3add53.subobjectid);
						_0x3d5b4c && (_0x41cb9a.startTime = _0x3d5b4c);
						_0x2ff281 && (_0x41cb9a.endTime = _0x2ff281);
						_0x41cb9a.rt = _0x132163, _0x41cb9a.control = _0x3ba069 && _0x3ba069.control;
						isTeacher && (_0x41cb9a.control = false);
						var _0x1b3884 = {}, _0x175d2d, _0x44c176, _0x47194f;
						if (_0x3ba069 && _0x3ba069.control) {
							var _0x3d2f6a = _0x3ba069.attachments, _0x3815cf = _0x3ba069.defaults, _0x2f0016 = _0x3add53.objectid + '-' + (_0x3d5b4c ? _0x3d5b4c : 0) + '-' + (_0x2ff281 ? _0x2ff281 : _0x25edd8) + '-' + _0xee9a4e;
							_0x3815cf && (_0x41cb9a.userid = _0x3815cf.userid || '', _0x41cb9a.fid = _0x3815cf.fid || '');
							for (var _0x33e084 = 0; _0x33e084 < _0x3d2f6a.length; _0x33e084++) {
								_0x1b3884 = _0x3d2f6a[_0x33e084];
								_0x44c176 = 0;
								_0x47194f = _0x25edd8;
								_0x1b3884.property && (_0x1b3884.property.vbegin && (_0x44c176 = _0x1b3884.property.vbegin), _0x1b3884.property.vend && (_0x47194f = _0x1b3884.property.vend));
								!_0x1b3884.jobid && (_0x1b3884.jobid = '');
								_0x175d2d = _0x1b3884.objectId + '-' + _0x44c176 + '-' + _0x47194f + '-' + _0x1b3884.jobid;
								if (_0x2f0016 == _0x175d2d) {
									Ext.apply(_0x41cb9a, _0x3ba069.defaults);
									_0x41cb9a.headOffset = _0x1b3884.headOffset ? Math.floor(parseInt(_0x1b3884.headOffset) / 1000) : 0;
									_0x41cb9a.objectId = _0x1b3884.objectId;
									_0x41cb9a.otherInfo = _0x1b3884.otherInfo;
									_0x41cb9a.isPassed = _0x1b3884.isPassed;
									_0x41cb9a.aId = _0x1b3884.aid;
									_0x41cb9a.danmaku = _0x29c0b1;
									_0x1b3884.topicList && _0x5ef00c(_0x1b3884.topicList);
									_0x41cb9a.jumpTimePointList = _0x1b3884.jumpTimePointList;
									_0x1b3884.property && _0x1b3884.property.fastforward && _0x1b3884.property.fastforward == 'true' && (_0x41cb9a.enableFastForward = 0);
									_0x1b3884.property && typeof _0x1b3884.property.doublespeed != 'undefined' && _0x1b3884.property.doublespeed == 0 && (_0x41cb9a.doublespeed = 0, _0x21089b = 0);
									var _0x1661ae = _0x41cb9a.schooldoublespeed;
									typeof _0x1661ae == 'undefined' || _0x1661ae == 2 ? _0x41cb9a.doublespeed = _0x21089b : _0x41cb9a.doublespeed = _0x1661ae;
									_0xee9a4e && (_0x41cb9a.jobid = _0xee9a4e, !_0x1b3884.job && (!isTeacher && greenligth(), ed_complete = false, _0x41cb9a.enableFastForward = 1, _0x41cb9a.enableSwitchWindow = 1, _0x41cb9a.headOffset = 0));
									_0x41cb9a.reportUrl = _0x41cb9a.reportUrl && _0x41cb9a.reportUrl.replace('http://', window.location.protocol + '//');
									window['_jobindex'] = _0x33e084;
									break;
								}
							}
						} else {
							var _0x1661ae = _0x41cb9a.schooldoublespeed;
							typeof _0x1661ae == 'undefined' || _0x1661ae == 2 ? _0x41cb9a.doublespeed = _0x21089b : _0x41cb9a.doublespeed = _0x1661ae;
						}
						if (_0x41cb9a.ignoreVideoCtrl == 1) {
							_0x41cb9a.enableFastForward = 1;
							_0x41cb9a.enableSwitchWindow = 1;
						}
						(!_0x41cb9a.control || isTeacher) && (ed_complete = false, _0x41cb9a.enableFastForward = 1, _0x41cb9a.enableSwitchWindow = 1, _0x41cb9a.headOffset = 0);
						(_0x41cb9a.isPassed || _0x41cb9a.headOffset > _0x41cb9a.videoTotalTime * 0.95) && (_0x41cb9a.headOffset = 0);
						_0x4dc2c8 && clearInterval(_0x4dc2c8), _0x41cb9a.isSupportFace = $('.maskDiv1', top.document).length > 0 && /\/studentstudy/.test(top.location.pathname) ? true : false, _0x41cb9a.isShowFaceCollection = /\/studentstudy/.test(top.location.pathname) && !Ext.fly(window.frameElement).parent().hasCls('ans-job-finished');
						if (supportH5Video()) {
							_0x45fa3f.danmaku && (loadMultiFile([{
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
							ff = _0x41cb9a.enableFastForward;
							showHTML5Player(_0x41cb9a);
						} else {
							if (!_0x83ba9) {
								var _0x10d33e = 'http://www.adobe.com/go/getflashplayer';
								Ext.get('reader').setHTML('您没有安装flashplayer\uFF0C请到<a href="' + _0x10d33e + '" target="_blank">www.adobe.com</a>下载安装\u3002<br/>如果已经安装请点击此处启用\uFF1A<object id="swf_jlxl1lfb" height="50" width="100" type="application/x-shockwave-flash" data="/ananas/modules/video/cxplayer/player_4.0.11.swf?v=20161025" style="border:#ccc 1px solid"><param name="quality" value="high"><param name="allowScriptAccess" value="always"><param name="wMode" value="transparent"><param name="align" value="middle"><param name="bgcolor" value="#000000"><param name="swLiveConnect" value="true"><param name="loop" value="true"><param name="play" value="true"><param name="DeviceFont" value="false"><param name="allowFullScreen" value="true"><param name="menu" value="true"></object>');
								return;
							}
							showMoocPlayer(_0x41cb9a);
						}
						sendReadZTMediaLog(0);
						break;
					case 'failed':
						_0x4dc2c8 && clearInterval(_0x4dc2c8), _0x14067b.remove(), _0x528482.show();
						break;
					case 'waiting':
						_0x14067b.update('<div class="line1"><div class="line3"></div></div><p class="tipStyle making">视频正在转码\uFF0C您无需在此页面等待\u30109001\u3011</p>');
						break;
					case 'converting':
					case 'transfer':
						_0x14067b.update('<div class="line1"><div class="line2"></div></div><p class="tipStyle">视频上传中\u30109002\u3011</p>');
						break;
				}
			},
			'failure': function (_0x11b19f) {
				_0x11b19f.status == 0 ? (_0x4dc2c8 && clearInterval(_0x4dc2c8), _0x14067b.update('<div class="line1"><div class="line2"></div></div><p class="tipStyle">视频加载超时\uFF0C请刷新页面重试\u30109003\u3011</p>'), Ext.get('loading').hide()) : (_0x4dc2c8 && clearInterval(_0x4dc2c8), _0x14067b.update('<div class="line1"><div class="line3"></div></div><p class="tipStyle">视频加载失败\uFF0C请稍后再试\u30109004\u3011</p>'), Ext.get('loading').hide());
			}
		});
	}
	_0x55db82();
}
function supportH5Video() {
	var _0x3f8019 = function () {
		var _0xbb8245 = document.createElement('video');
		if (typeof _0xbb8245.canPlayType == 'function') {
			var _0x55322e = _0xbb8245.canPlayType('video/mp4;codecs="avc1.42E01E,mp4a.40.2"');
			if (_0x55322e.toLowerCase() == 'maybe' || _0x55322e.toLowerCase() == 'probably') {
				return true;
			}
			var _0x55322e = _0xbb8245.canPlayType('video/mp4;codecs="avc1.64001E,mp4a.40.2"');
			if (_0x55322e.toLowerCase() == 'maybe' || _0x55322e.toLowerCase() == 'probably') {
				return true;
			}
		}
		return false;
	};
	if (Ext.isIE && Ext.isIE10m) {
		return false;
	}
	return _0x3f8019();
}
var playLogTimer;
function sendReadZTMediaLog(_0x17ea39) {
	try {
		var _0x48a8d3 = function (_0x3ff476) {
			var _0x41b762 = new RegExp('(^|&)' + _0x3ff476 + '=([^&]*)(&|$)'), _0x4aea64 = parent.location.search.substr(1).match(_0x41b762);
			if (_0x4aea64 != null) {
				return unescape(_0x4aea64[2]);
			}
			return null;
		}, _0x5bcdf2 = parent.AttachmentSetting, _0x342611 = window.frameElement, _0x108031 = _0x342611.parentElement.parentElement.parentElement.getAttribute('kid');
		if (_0x108031) {
			var _0x29ed81 = 'marg-' + _0x108031;
			_0x5bcdf2 = top[_0x29ed81];
			typeof _0x5bcdf2 == 'string' && (_0x5bcdf2 = eval('(' + _0x5bcdf2 + ')'));
		}
		if (!_0x5bcdf2) {
			return;
		}
		var _0x16629e = _0x5bcdf2.defaults.isFiled, _0x393729 = _0x5bcdf2.defaults.state;
		if (_0x16629e == 1 || _0x393729 == 1) {
			return;
		}
		var _0x1a7510 = top.dtype || 'Course';
		if (_0x1a7510 == 'ZT' || _0x1a7510 == 'HB' || _0x1a7510 == 'MAG') {
			var _0x3f4504 = parent.location.search || '', _0x1504dc = getCookie('UID'), _0x254751 = config('objectid'), _0x8f108e = 0, _0x417c83 = _0x5bcdf2.defaults.courseid, _0x58af1c = _0x5bcdf2.defaults.knowledgeid, _0x141d87 = window.duration, _0x42507b = _0x48a8d3('_from_'), _0x19b9c7 = _0x5bcdf2.attachments, _0x1adb0c = '';
			if (_0x19b9c7.length > 0) {
				for (var _0x582b30 = 0, _0x2f4fa9 = _0x19b9c7.length; _0x582b30 < _0x2f4fa9; _0x582b30++) {
					var _0x5e6c4f = _0x19b9c7[_0x582b30], _0x600556 = _0x5e6c4f.objectId;
					if (_0x600556 == _0x254751) {
						if (_0x17ea39 == 0) {
							_0x1adb0c = _0x5e6c4f.enc0;
						} else {
							_0x17ea39 == 1 ? _0x1adb0c = _0x5e6c4f.enc1 : _0x1adb0c = _0x5e6c4f.enc2;
						}
						break;
					}
				}
			}
			var _0x2d4478 = location.protocol + '//data-xxt.aichaoxing.com/analysis/datalog?s=' + _0x417c83 + '&c=' + _0x58af1c + '&o=' + _0x254751 + '&st=' + _0x17ea39 + '&m=' + _0x8f108e + '&d=' + _0x141d87 * 1000 + '&u=' + _0x1504dc + '&_from_=' + _0x42507b + '&enc=' + _0x1adb0c, _0x539cc0 = function () {
				Ext.Ajax.request({
					'url': _0x2d4478,
					'success': function (_0x39a060) {
					}
				});
			};
			_0x539cc0();
			if (_0x17ea39 == 1) {
				playLogTimer && clearInterval(playLogTimer);
				playLogTimer = setInterval(function () {
					_0x539cc0();
				}, 5000);
			} else {
				_0x17ea39 == 2 && (playLogTimer && clearInterval(playLogTimer));
			}
		}
	} catch (_0x4bf4ab) {
	}
}
function receiveStudyLog() {
	try {
		var _0x28180a = parent.AttachmentSetting;
		if (!_0x28180a) {
			return;
		}
		if (_0x28180a && _0x28180a.defaults) {
			var _0x42438 = _0x28180a.defaults;
			if (_0x42438.chapterCapture != 1) {
				return;
			}
			var _0x2c90c7 = new Date().getTime(), _0x450f6a = _0x42438.courseid, _0x29f6bd = _0x42438.clazzId, _0x58beb4 = _0x42438.cpi, _0x1a9c2a = _0x42438.userid, _0x4bcff7 = _0x42438.knowledgeid, _0x342d4e = _0x42438.fid, _0x536e06 = '', _0x296c32 = config('objectid'), _0x367ccf = config('jobid') || '', _0x348f5b = _0x28180a.attachments;
			if (_0x348f5b.length > 0) {
				for (var _0x559ab8 = 0, _0x351bed = _0x348f5b.length; _0x559ab8 < _0x351bed; _0x559ab8++) {
					var _0xafa7ae = _0x348f5b[_0x559ab8], _0x45f5d8 = _0xafa7ae.objectId;
					if (_0x45f5d8 == _0x296c32) {
						_0x536e06 = _0xafa7ae.aid;
						break;
					}
				}
			}
			var _0x491996 = {
				'relationId': _0x536e06,
				'objectId': _0x296c32,
				'userId': _0x1a9c2a,
				'knowledgeId': _0x4bcff7,
				'fid': _0x342d4e,
				'jobId': _0x367ccf
			}, _0x328d82 = {
				'courseId': _0x450f6a,
				'clazzId': _0x29f6bd,
				'personId': _0x58beb4,
				'eventType': 4,
				'eventTime': _0x2c90c7,
				'data': _0x491996
			}, _0x1b0438 = _0x42438.mtEnc;
			Ext.Ajax.request({
				'method': 'post',
				'url': '/keeper/api/receive-studylog',
				'params': {
					'log': JSON.stringify(_0x328d82),
					'enc': _0x1b0438
				},
				'success': function (_0x55bca6) {
				}
			});
		}
	} catch (_0x27d535) {
	}
}
function createVideoTask() {
	if (isViturlEdit) {
		return;
	}
	var _0x2407b5 = location.protocol + '//convertservice.chaoxing.com/video/createVideoTask?objectid=' + wrongObj;
	Ext.Ajax.request({
		'timeout': 3000,
		'type': 'get',
		'async': false,
		'url': _0x2407b5,
		'dataType': 'jsonp',
		'jsonp': 'jsoncallback',
		'success': function (_0x44a18f) {
		},
		'failure': function (_0x12477e) {
			console.log('创建任务失败');
		}
	});
}
Ext.onReady(function () {
	var _0x306740 = parent.requestSatusResourceDownGrade;
	if (_0x306740 && _0x306740 == 1) {
		var _0x1f1dd4 = '<img src="/ananas/css/downgradeBlueTip.jpg" width="676" height="540">';
		Ext.select('body').setHTML(_0x1f1dd4);
		return;
	}
	loadVideo();
});
var danmaku = {};
function getDanmuByTime(_0x2ac41c, _0x247993) {
	var _0x28761b = parent.AttachmentSetting;
	if (!_0x28761b) {
		return;
	}
	if (_0x28761b && _0x28761b.defaults) {
		var _0x29ccd9 = _0x28761b.defaults, _0x3cff12 = _0x29ccd9.courseid, _0x4a68e4 = _0x29ccd9.clazzId;
	} else {
		return;
	}
	if (_0x2ac41c == 'pause') {
		danmaku = {};
		return;
	}
	_0x2ac41c == 'play' && (danmaku = {});
	var _0x23a157 = config('mid'), _0x346f8a = {
		'courseid': _0x3cff12,
		'classid': _0x4a68e4,
		'mid': _0x23a157,
		'timebegin': parseInt(_0x247993),
		'timeend': parseInt(_0x247993) + 59
	};
	Ext.Ajax.request({
		'url': '/videodanmaku/timerange-danmakulist',
		'method': 'get',
		'params': _0x346f8a,
		'success': function (_0x5afe04) {
			var _0x4269d5 = eval('(' + _0x5afe04.responseText + ')');
			if (_0x4269d5.status == 1) {
				var _0x3e50d5 = _0x4269d5.data;
				for (var _0x410288 = 0; _0x410288 < _0x3e50d5.length; _0x410288++) {
					var _0x3acec8 = _0x3e50d5[_0x410288].timeline;
					!danmaku[_0x3acec8] && (danmaku[_0x3acec8] = new Array());
					danmaku[_0x3acec8].push(_0x3e50d5[_0x410288].content);
				}
				_0x247993 == 0 && danmuPlay(0);
			} else {
				alert('服务异常,稍后再试!');
			}
		},
		'failure': function (_0x3f8933) {
			alert('服务异常,稍后再试!');
		}
	});
}
var count = 0, timeFlag = -1, currentTime = 0;
function shotdanmu(_0x1a4d0b) {
	var _0x2709cb = _0x1a4d0b.clientWidth;
	_0x2709cb = -parseInt(_0x2709cb);
	var _0x3469c3 = 'translateX(' + _0x2709cb + 'px)';
	setTimeout(function () {
		_0x1a4d0b.style.transform = _0x3469c3;
		_0x1a4d0b.className = 'danmuItem left';
	}, 500);
}
function danmuPlay(_0x2d72d1) {
	currentTime = _0x2d72d1;
	if (timeFlag == _0x2d72d1) {
		return;
	}
	timeFlag = _0x2d72d1;
	var _0x3f89fe = danmaku[_0x2d72d1];
	if (!_0x3f89fe) {
		return;
	}
	if (!$('.mui-switch').hasClass('checked')) {
		return;
	}
	var _0x5203a6 = '<div class="danmuItem right">';
	for (var _0x1cabb9 = 0; _0x1cabb9 < _0x3f89fe.length; _0x1cabb9++) {
		if (_0x3f89fe[_0x1cabb9] == '@zan@') {
			_0x5203a6 += '<span><i class="zanIcon"></i>赞</span>';
		} else {
			if (_0x3f89fe[_0x1cabb9] == '@不赞同@') {
				_0x5203a6 += '<span><i class="noZanIcon"></i>不赞同</span>';
			} else {
				if (_0x3f89fe[_0x1cabb9] == '@感动@') {
					_0x5203a6 += '<span><i class="moveIcon"></i>感动</span>';
				} else {
					if (_0x3f89fe[_0x1cabb9] == '@疑惑@') {
						_0x5203a6 += '<span><i class="doubtIcon"></i>疑惑</span>';
					} else {
						if (_0x3f89fe[_0x1cabb9] == '@献花@') {
							_0x5203a6 += '<span><i class="huaIcon"></i>献花</span>';
						} else {
							if (_0x3f89fe[_0x1cabb9] == '@鼓掌@') {
								_0x5203a6 += '<span><i class="clapIcon"></i>鼓掌</span>';
							} else {
								_0x3f89fe[_0x1cabb9] == '@有趣@' ? _0x5203a6 += '<span><i class="interestingIcon"></i>有趣</span>' : _0x5203a6 += '<span>' + _0x3f89fe[_0x1cabb9] + '</span>';
							}
						}
					}
				}
			}
		}
	}
	_0x5203a6 += '</div>';
	var _0x43ef19 = count % 3, _0xbc7b9f = new Ext.XTemplate(_0x5203a6).append('channel_' + _0x43ef19);
	shotdanmu(_0xbc7b9f);
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
function checkJobCountLimit(_0x4a952d, _0x1a8dd9) {
	/\/studentstudy/.test(top.location.pathname) && (_0x1a8dd9 == 0 ? top.showJobLimitTip() : top.showVideoTimeLimitTip(), playStateV2 = setInterval(function () {
		top.resumePlay && (clearStateV2Interval(), _0x4a952d.play(), top.resumePlay = false);
	}, 300));
}
function startFaceCollection(_0x5ddb09, _0xa98be0, _0x22efee, _0x290faa) {
	if (/\/studentstudy/.test(top.location.pathname)) {
		var _0x2c30b2 = $('.maskDiv1', top.document).length;
		if (_0x2c30b2 > 0) {
			$('#videoJobId', top.document).val(videoJobId);
			$('#chapterVideoObjectId', top.document).val(videoObjectId);
			$('#collectionTime', top.document).val(_0x290faa);
			$('#mid', top.document).val(mid);
			top.getQRCodeURLShow1 && top.getQRCodeURLShow1();
			$('.maskDiv1', top.document).css('display', 'block');
			getPlayState = setInterval(function () {
				if (top.playerState) {
					clearStateInterval();
					_0x5ddb09.play();
					_0x22efee.firstPlayFace = false;
					top.playerState = false;
					var _0x340cd6 = _0x22efee.jumpTimePointList;
					_0x290faa != -2 && typeof _0x340cd6 != 'undefined' && (_0x340cd6.push(_0x290faa), _0x22efee.jumpTimePointList = _0x340cd6);
				}
			}, 1000);
		}
	}
}
function chapterPlayNextVideo(_0x143499) {
	/\/studentstudy/.test(top.location.pathname) && (top.getChapterNextVideo && top.getChapterNextVideo(_0x143499));
}
function markersPlayer(_0x3aa5b9) {
	var _0x56d1c0 = _0x3aa5b9.getAttribute('data-marker-time');
	if (_0x56d1c0) {
		return playerTime(_0x56d1c0);
	}
}
function getMarkers() {
	return videojs('video').markers;
}
function playerTime(_0x42b877) {
	if (ff != 1) {
		return;
	}
	var _0x57b2db = videojs('video');
	return _0x57b2db.currentTime(_0x42b877);
}
function playVideo() {
	var _0x4ea08a = videojs('video');
	player.volume(0);
	player.on('loadstart', function () {
		_0x4ea08a.play().catch(Ext.emptyFn);
	});
}
function reSizeIframe() {
	try {
		var _0xaf6ea0 = Ext.fly(Ext.select('.main').elements[0]).getHeight();
		Ext.fly(window.frameElement).setHeight(_0xaf6ea0 + 'px');
	} catch (_0x12df2b) {
		console.log(_0x12df2b.message);
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
		var _0x418dc7 = videojs('video'), _0x47fe44 = parseInt(_0x418dc7.currentTime()), _0x29179c = parseInt(_0x47fe44 / 60);
		_0x29179c < 10 && (_0x29179c = '0' + _0x29179c.toString());
		var _0x32089e = parseInt(_0x47fe44 % 60);
		_0x32089e < 10 && (_0x32089e = '0' + _0x32089e.toString());
		$('.Note_name', parent.parent.document).html(videoName + ' ' + _0x29179c + ':' + _0x32089e);
		$('.Note_name', parent.parent.document).css('display', 'block');
		$('#noteVideoTime', parent.parent.document).val(_0x47fe44);
		$('#noteVideoJobId', parent.parent.document).val(videoJobId);
		$('#noteVideoObjectId', parent.parent.document).val(videoObjectId);
		parent.parent.getClazzNote && parent.parent.getClazzNote();
		parent.parent.changePan && parent.parent.changePan('3');
		$('.formTopic', parent.parent.document).size() > 0 && $('.formTopic', parent.parent.document).css('display', 'block');
	});
});