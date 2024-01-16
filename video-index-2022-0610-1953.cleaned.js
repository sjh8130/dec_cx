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
		var _0x219438 = Ext.fly(window.frameElement).prev();
		if (_0x219438 && _0x219438.hasCls('ans-job-icon')) {
			return !Ext.fly(window.frameElement).parent().hasCls('ans-job-finished');
		}
		return false;
	} catch (_0x2e6cc7) {
		console.log(_0x2e6cc7);
	}
	return false;
}
var isViturlEdit = false, ff = 1;
function proxy_completed() {
	ed_complete && (greenligth(), ed_complete());
}
function config(_0x1e8e13) {
	return window.frameElement.getAttribute(_0x1e8e13);
}
function getCookie(_0x469a46) {
	var _0x20c6c5 = document.cookie.split('; ');
	for (var _0x3b909d = 0; _0x3b909d < _0x20c6c5.length; _0x3b909d++) {
		var _0x4404cf = _0x20c6c5[_0x3b909d].split('=');
		if (_0x4404cf[0] == _0x469a46) {
			return unescape(_0x4404cf[1]);
		}
	}
}
function showMoocPlayer(_0x2c3e33) {
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
			var _0x1cfc39 = new MoocPlayer({
				'isSendLog': !!parent.AttachmentSetting && parent.AttachmentSetting.control,
				'data': _0x2c3e33,
				'height': 540,
				'width': 676
			});
		});
	});
}
function showHTML5Player(_0x3728e2) {
	Ext.get('reader').setHTML('<video id="video" class="video-js vjs-default-skin vjs-big-play-centered"></video>');
	new ans.VideoJs({
		'videojs': 'video',
		'params': _0x3728e2
	});
	document.getElementsByTagName('video')[0].addEventListener('play', function () {
		var _0xbcf1d9 = parent.document.getElementsByTagName('iframe');
		for (var _0x1a6717 = 0; _0x1a6717 < _0xbcf1d9.length; _0x1a6717++) {
			if (_0xbcf1d9[_0x1a6717].getAttribute('src').indexOf('microCourse') != -1) {
				var _0x4e47b9 = _0xbcf1d9[_0x1a6717].contentWindow.document.getElementsByTagName('iframe')[0].contentWindow;
				_0x4e47b9.PageView.stopAll && _0x4e47b9.PageView.stopAll();
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
	function _0xdd678d() {
		var _0x50f4c3 = $('#video').height(), _0x3f939f = $('#sp_video_ppt_pic').height(), _0x5eac14 = (parseInt(_0x50f4c3) - 60 - parseInt(_0x3f939f)) / 2;
		$('#sp_video_ppt_pic').length > 0 && $('#sp_video_ppt_pic').hasClass('sp_ppt_pic_fullScreen') ? ($('#sp_video_ppt_pic').css('top', _0x5eac14 + 'px'), $('#sp_video_ppt_pic').css('left', '0')) : ($('#sp_video_ppt_pic').css('top', '0px'), $('#sp_video_ppt_pic').css('left', '0px'));
	}
	$('.vjs-fullscreen-control').click(function () {
		setTimeout(_0xdd678d, 300);
	});
	$(window).resize(function () {
		setTimeout(_0xdd678d, 500);
	});
}
var wrongObj = '', videoName = '', videoJobId = '', videoObjectId = '';
function loadVideo() {
	var _0x973bab = config('objectid'), _0x4627f2 = Ext.get('reader');
	if (!_0x973bab) {
		_0x4627f2.setHTML('未找到该文件');
		return;
	}
	wrongObj = _0x973bab;
	videoObjectId = _0x973bab;
	var _0x282604 = window.frameElement, _0x2772f6 = Ext.decode(_0x282604.getAttribute('data')), _0x4a0a3a = parent.AttachmentSetting, _0x5136c3 = config('mid'), _0x1427c1 = 0, _0x498602 = config('vbegin'), _0x171675 = config('vend'), _0x5a52e1 = config('jobid') || '', _0x4efa5b = _0x2772f6 ? _0x2772f6.danmaku == null ? 0 : _0x2772f6.danmaku : 0, _0x49fc36 = _0x4a0a3a && _0x4a0a3a.videoTopicCloud, _0x34a420 = config('fastforward') == 'true' ? true : false, _0x5ecaed = config('switchwindow') == 'true' ? true : false, _0x46b34f = Ext.get('note'), _0x415313 = Ext.get('hl'), _0x23cc26 = Ext.get('note1-wrap'), _0x5a6097 = Ext.get('note1'), _0x4d65c3 = null, _0x3f0d31 = _0x2772f6 ? _0x2772f6.rt ? _0x2772f6.rt : 0.9 : 0.9;
	_0x5a52e1 == '' ? videoJobId = _0x2772f6 && _0x2772f6['_jobid'] ? _0x2772f6['_jobid'] : '' : videoJobId = _0x5a52e1;
	var _0x45d94f = flashChecker().hasFlash;
	try {
		isTeacher = top.location.href.indexOf('teacherstudy') > 0 || top.location.href.indexOf('course/phone/chapterdata') > 0;
	} catch (_0x48247a) {
	}
	var _0x405aae = parent.isVideoVisibleName, _0x102080 = _0x2772f6 ? _0x2772f6.doublespeed != 0 ? 1 : 0 : 1;
	_0x2772f6.v_begin && _0x2772f6.v_end && _0x2772f6.pobjectid && (isViturlEdit = true);
	function _0x537ff3(_0x56099b) {
		if (_0x56099b && _0x56099b.length == 0) {
			return;
		}
		if (Ext.select('.zsCloud_ul') != null) {
			var _0x4f48dc = '';
			for (var _0x4d2dea = 0, _0x569670 = _0x56099b.length; _0x4d2dea < _0x569670; _0x4d2dea++) {
				_0x4f48dc += '<li><span class=\'zsCloud_span topicId' + _0x56099b[_0x4d2dea].id + '\' onclick=\'markersPlayer(this)\'>' + _0x56099b[_0x4d2dea].name + ' </span></li>';
			}
			Ext.select('.zsCloud_ul').setHTML(_0x4f48dc);
			Ext.select('.zsCloud').setStyle('display', 'block');
		}
	}
	function _0x2e46da() {
		_0x1427c1 <= 100 && _0x415313.setWidth((_0x1427c1 += 5) + '%');
		var _0x3d4914 = getCookie('fid') || '';
		Ext.Ajax.request({
			'url': '/ananas/status/' + _0x973bab + '?k=' + _0x3d4914 + '&flag=normal',
			'success': function (_0xda4056) {
				var _0x30c3bd = eval('(' + _0xda4056.responseText + ')');
				Ext.get('loading').hide();
				switch (_0x30c3bd.status) {
					case 'success':
						_0x23cc26.remove(), videoName = _0x2772f6 && _0x2772f6.name || '';
						_0x405aae != 'false' && (Ext.fly(window.frameElement).parent().first('.ans-job-icon') != null ? top.location.href.indexOf('nodedetailcontroller/visitnodedetail') > -1 ? Ext.fly(window.frameElement).parent().insertHtml('afterBegin', '<div title="' + videoName + '" style="width: 500px;display: inline-block;line-height: 23px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">' + videoName + '</div>') : Ext.fly(window.frameElement).parent().first('.ans-job-icon').insertHtml('beforeEnd', '<span title="' + videoName + '" style="width: 500px;margin-left: 120px;display: inline-block;height: 23px;line-height: 23px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">' + videoName + '</span>') : Ext.fly(window.frameElement).parent().insertHtml('afterBegin', '<div title="' + videoName + '" style="width: 500px;display: inline-block;line-height: 23px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">' + videoName + '</div>'));
						var _0x10300a = _0x30c3bd.duration, _0x53a52c = {
							'enableFastForward': _0x34a420 ? 0 : 1,
							'enableSwitchWindow': _0x5ecaed ? 0 : 1,
							'duration': _0x10300a,
							'httpmd': _0x30c3bd.httpmd,
							'http': _0x30c3bd.http,
							'httphd': _0x30c3bd.httphd,
							'httpshd': _0x30c3bd.httpshd,
							'filename': _0x30c3bd.filename,
							'dtoken': _0x30c3bd.dtoken,
							'videoTopicCloud': _0x49fc36
						};
						window.duration = _0x10300a;
						_0x30c3bd.cdn && (_0x53a52c.cdn = _0x30c3bd.cdn);
						if (document.cookie.length > 0) {
							_0x53a52c.memberinfo = getCookie('memberinfo');
							_0x53a52c.questionErrorLogUrl = ServerHosts.MASTER_HOST + '/question/addquestionerror';
						}
						_0x5136c3 && (_0x53a52c.mid = _0x5136c3);
						_0x30c3bd.duration && (_0x53a52c.videoTotalTime = _0x30c3bd.duration);
						if (_0x4a0a3a && _0x4a0a3a.isErya == 1) {
							_0x53a52c.screenshot = 'https://p.ananas.chaoxing.com/star3/origin/a26e16b5ac8e769bba6bda57343b7d57.png';
						} else {
							_0x30c3bd.screenshot && (_0x53a52c.screenshot = _0x30c3bd.screenshot);
						}
						_0x4a0a3a && (_0x53a52c.chapterVideoTranslate = _0x4a0a3a.chapterVideoTranslate);
						_0x30c3bd.thumbnails && (_0x53a52c.thumbnails = _0x30c3bd.thumbnails);
						_0x30c3bd.subobjectid && (_0x53a52c.subobjectid = _0x30c3bd.subobjectid);
						_0x498602 && (_0x53a52c.startTime = _0x498602);
						_0x171675 && (_0x53a52c.endTime = _0x171675);
						_0x53a52c.rt = _0x3f0d31, _0x53a52c.control = _0x4a0a3a && _0x4a0a3a.control;
						isTeacher && (_0x53a52c.control = false);
						var _0x660a59 = {}, _0x3dfcd8, _0x8cae46, _0x33e7e7;
						if (_0x4a0a3a && _0x4a0a3a.control) {
							var _0x54a712 = _0x4a0a3a.attachments, _0x1e31d2 = _0x4a0a3a.defaults, _0x352915 = _0x30c3bd.objectid + '-' + (_0x498602 ? _0x498602 : 0) + '-' + (_0x171675 ? _0x171675 : _0x10300a) + '-' + _0x5a52e1;
							_0x1e31d2 && (_0x53a52c.userid = _0x1e31d2.userid || '', _0x53a52c.fid = _0x1e31d2.fid || '');
							for (var _0x5da020 = 0; _0x5da020 < _0x54a712.length; _0x5da020++) {
								_0x660a59 = _0x54a712[_0x5da020];
								_0x8cae46 = 0;
								_0x33e7e7 = _0x10300a;
								_0x660a59.property && (_0x660a59.property.vbegin && (_0x8cae46 = _0x660a59.property.vbegin), _0x660a59.property.vend && (_0x33e7e7 = _0x660a59.property.vend));
								!_0x660a59.jobid && (_0x660a59.jobid = '');
								_0x3dfcd8 = _0x660a59.objectId + '-' + _0x8cae46 + '-' + _0x33e7e7 + '-' + _0x660a59.jobid;
								if (_0x352915 == _0x3dfcd8) {
									Ext.apply(_0x53a52c, _0x4a0a3a.defaults);
									_0x53a52c.headOffset = _0x660a59.headOffset ? Math.floor(parseInt(_0x660a59.headOffset) / 1000) : 0;
									_0x53a52c.objectId = _0x660a59.objectId;
									_0x53a52c.otherInfo = _0x660a59.otherInfo;
									_0x53a52c.isPassed = _0x660a59.isPassed;
									_0x53a52c.aId = _0x660a59.aid;
									_0x53a52c.danmaku = _0x4efa5b;
									_0x660a59.topicList && _0x537ff3(_0x660a59.topicList);
									_0x660a59.property && _0x660a59.property.fastforward && _0x660a59.property.fastforward == 'true' && (_0x53a52c.enableFastForward = 0);
									_0x660a59.property && typeof _0x660a59.property.doublespeed != 'undefined' && _0x660a59.property.doublespeed == 0 && (_0x53a52c.doublespeed = 0, _0x102080 = 0);
									var _0x479e80 = _0x53a52c.schooldoublespeed;
									typeof _0x479e80 == 'undefined' || _0x479e80 == 2 ? _0x53a52c.doublespeed = _0x102080 : _0x53a52c.doublespeed = _0x479e80;
									_0x5a52e1 && (_0x53a52c.jobid = _0x5a52e1, !_0x660a59.job && (!isTeacher && greenligth(), ed_complete = false, _0x53a52c.enableFastForward = 1, _0x53a52c.enableSwitchWindow = 1, _0x53a52c.headOffset = 0));
									_0x53a52c.reportUrl = _0x53a52c.reportUrl && _0x53a52c.reportUrl.replace('http://', window.location.protocol + '//');
									window['_jobindex'] = _0x5da020;
									break;
								}
							}
						} else {
							var _0x479e80 = _0x53a52c.schooldoublespeed;
							typeof _0x479e80 == 'undefined' || _0x479e80 == 2 ? _0x53a52c.doublespeed = _0x102080 : _0x53a52c.doublespeed = _0x479e80;
						}
						if (_0x53a52c.ignoreVideoCtrl == 1) {
							_0x53a52c.enableFastForward = 1;
							_0x53a52c.enableSwitchWindow = 1;
						}
						(!_0x53a52c.control || isTeacher) && (ed_complete = false, _0x53a52c.enableFastForward = 1, _0x53a52c.enableSwitchWindow = 1, _0x53a52c.headOffset = 0);
						(_0x53a52c.isPassed || _0x53a52c.headOffset > _0x53a52c.videoTotalTime * 0.95) && (_0x53a52c.headOffset = 0);
						_0x4d65c3 && clearInterval(_0x4d65c3), _0x53a52c.isSupportFace = $('.maskDiv1', top.document).length > 0 && /\/studentstudy/.test(top.location.pathname) ? true : false, _0x53a52c.isShowFaceCollection = /\/studentstudy/.test(top.location.pathname) && !Ext.fly(window.frameElement).parent().hasCls('ans-job-finished');
						if (supportH5Video()) {
							_0x2772f6.danmaku && (loadMultiFile([{
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
							ff = _0x53a52c.enableFastForward;
							showHTML5Player(_0x53a52c);
						} else {
							if (!_0x45d94f) {
								var _0x7155b7 = 'http://www.adobe.com/go/getflashplayer';
								Ext.get('reader').setHTML('您没有安装flashplayer\uFF0C请到<a href="' + _0x7155b7 + '" target="_blank">www.adobe.com</a>下载安装\u3002<br/>如果已经安装请点击此处启用\uFF1A<object id="swf_jlxl1lfb" height="50" width="100" type="application/x-shockwave-flash" data="/ananas/modules/video/cxplayer/player_4.0.11.swf?v=20161025" style="border:#ccc 1px solid"><param name="quality" value="high"><param name="allowScriptAccess" value="always"><param name="wMode" value="transparent"><param name="align" value="middle"><param name="bgcolor" value="#000000"><param name="swLiveConnect" value="true"><param name="loop" value="true"><param name="play" value="true"><param name="DeviceFont" value="false"><param name="allowFullScreen" value="true"><param name="menu" value="true"></object>');
								return;
							}
							showMoocPlayer(_0x53a52c);
						}
						sendReadZTMediaLog(0);
						break;
					case 'failed':
						_0x4d65c3 && clearInterval(_0x4d65c3), _0x23cc26.remove(), _0x46b34f.show();
						break;
					case 'waiting':
						_0x23cc26.update('<div class="line1"><div class="line3"></div></div><p class="tipStyle making">视频正在转码\uFF0C您无需在此页面等待\u30109001\u3011</p>');
						break;
					case 'converting':
					case 'transfer':
						_0x23cc26.update('<div class="line1"><div class="line2"></div></div><p class="tipStyle">视频上传中\u30109002\u3011</p>');
						break;
				}
			},
			'failure': function (_0x203009) {
				_0x203009.status == 0 ? (_0x4d65c3 && clearInterval(_0x4d65c3), _0x23cc26.update('<div class="line1"><div class="line2"></div></div><p class="tipStyle">视频加载超时\uFF0C请刷新页面重试\u30109003\u3011</p>'), Ext.get('loading').hide()) : (_0x4d65c3 && clearInterval(_0x4d65c3), _0x23cc26.update('<div class="line1"><div class="line3"></div></div><p class="tipStyle">视频加载失败\uFF0C请稍后再试\u30109004\u3011</p>'), Ext.get('loading').hide());
			}
		});
	}
	_0x2e46da();
}
function supportH5Video() {
	var _0x136881 = function () {
		var _0x262734 = document.createElement('video');
		if (typeof _0x262734.canPlayType == 'function') {
			var _0x15ead9 = _0x262734.canPlayType('video/mp4;codecs="avc1.42E01E,mp4a.40.2"');
			if (_0x15ead9.toLowerCase() == 'maybe' || _0x15ead9.toLowerCase() == 'probably') {
				return true;
			}
			var _0x15ead9 = _0x262734.canPlayType('video/mp4;codecs="avc1.64001E,mp4a.40.2"');
			if (_0x15ead9.toLowerCase() == 'maybe' || _0x15ead9.toLowerCase() == 'probably') {
				return true;
			}
		}
		return false;
	};
	if (Ext.isIE && Ext.isIE10m) {
		return false;
	}
	return _0x136881();
}
var playLogTimer;
function sendReadZTMediaLog(_0x13acff) {
	try {
		var _0xdc99e = function (_0x52a596) {
			var _0x19041e = new RegExp('(^|&)' + _0x52a596 + '=([^&]*)(&|$)'), _0x118df8 = parent.location.search.substr(1).match(_0x19041e);
			if (_0x118df8 != null) {
				return unescape(_0x118df8[2]);
			}
			return null;
		}, _0x5d062e = parent.AttachmentSetting, _0x5466f9 = window.frameElement, _0x449e06 = _0x5466f9.parentElement.parentElement.parentElement.getAttribute('kid');
		if (_0x449e06) {
			var _0x1bf5a0 = 'marg-' + _0x449e06;
			_0x5d062e = top[_0x1bf5a0];
			typeof _0x5d062e == 'string' && (_0x5d062e = eval('(' + _0x5d062e + ')'));
		}
		if (!_0x5d062e) {
			return;
		}
		var _0x48221c = _0x5d062e.defaults.isFiled, _0x26779f = _0x5d062e.defaults.state;
		if (_0x48221c == 1 || _0x26779f == 1) {
			return;
		}
		var _0x2a142b = top.dtype || 'Course';
		if (_0x2a142b == 'ZT' || _0x2a142b == 'HB' || _0x2a142b == 'MAG') {
			var _0x28a459 = parent.location.search || '', _0x223e92 = getCookie('UID'), _0x5d1ddb = config('objectid'), _0x3455e3 = 0, _0x43b163 = _0x5d062e.defaults.courseid, _0x39d82b = _0x5d062e.defaults.knowledgeid, _0x3e8d57 = window.duration, _0x49b272 = _0xdc99e('_from_'), _0x58c4e1 = _0x5d062e.attachments, _0x26e888 = '';
			if (_0x58c4e1.length > 0) {
				for (var _0x451873 = 0, _0x3ad91e = _0x58c4e1.length; _0x451873 < _0x3ad91e; _0x451873++) {
					var _0x284942 = _0x58c4e1[_0x451873], _0x37b07b = _0x284942.objectId;
					if (_0x37b07b == _0x5d1ddb) {
						if (_0x13acff == 0) {
							_0x26e888 = _0x284942.enc0;
						} else {
							_0x13acff == 1 ? _0x26e888 = _0x284942.enc1 : _0x26e888 = _0x284942.enc2;
						}
						break;
					}
				}
			}
			var _0x1b70d1 = location.protocol + '//data-xxt.aichaoxing.com/analysis/datalog?s=' + _0x43b163 + '&c=' + _0x39d82b + '&o=' + _0x5d1ddb + '&st=' + _0x13acff + '&m=' + _0x3455e3 + '&d=' + _0x3e8d57 * 1000 + '&u=' + _0x223e92 + '&_from_=' + _0x49b272 + '&enc=' + _0x26e888, _0x4d1084 = function () {
				Ext.Ajax.request({
					'url': _0x1b70d1,
					'success': function (_0x468d3b) {
					}
				});
			};
			_0x4d1084();
			if (_0x13acff == 1) {
				playLogTimer && clearInterval(playLogTimer);
				playLogTimer = setInterval(function () {
					_0x4d1084();
				}, 5000);
			} else {
				_0x13acff == 2 && (playLogTimer && clearInterval(playLogTimer));
			}
		}
	} catch (_0x34a741) {
	}
}
function receiveStudyLog() {
	try {
		var _0x25329d = parent.AttachmentSetting;
		if (!_0x25329d) {
			return;
		}
		if (_0x25329d && _0x25329d.defaults) {
			var _0x256fbe = _0x25329d.defaults;
			if (_0x256fbe.chapterCapture != 1) {
				return;
			}
			var _0x21e70a = '/keeper/api/receive-studylog', _0x473c8d = new Date().getTime(), _0x4b7e5b = _0x256fbe.courseid, _0x2f244d = _0x256fbe.clazzId, _0x131edc = _0x256fbe.cpi, _0x59639e = _0x256fbe.userid, _0x572152 = _0x256fbe.knowledgeid, _0x19a9d5 = _0x256fbe.fid, _0x27a695 = '', _0xd3a770 = config('objectid'), _0x17de70 = config('jobid') || '', _0x53da3b = _0x25329d.attachments;
			if (_0x53da3b.length > 0) {
				for (var _0x283787 = 0, _0x262b9a = _0x53da3b.length; _0x283787 < _0x262b9a; _0x283787++) {
					var _0x27575d = _0x53da3b[_0x283787], _0xda8316 = _0x27575d.objectId;
					if (_0xda8316 == _0xd3a770) {
						_0x27a695 = _0x27575d.aid;
						break;
					}
				}
			}
			var _0x6dc5d1 = {
				'relationId': _0x27a695,
				'objectId': _0xd3a770,
				'userId': _0x59639e,
				'knowledgeId': _0x572152,
				'fid': _0x19a9d5,
				'jobId': _0x17de70
			}, _0x49f98c = {
				'courseId': _0x4b7e5b,
				'clazzId': _0x2f244d,
				'personId': _0x131edc,
				'eventType': 4,
				'eventTime': _0x473c8d,
				'data': _0x6dc5d1
			}, _0x3d86f3 = _0x256fbe.mtEnc;
			Ext.Ajax.request({
				'method': 'post',
				'url': _0x21e70a,
				'params': {
					'log': JSON.stringify(_0x49f98c),
					'enc': _0x3d86f3
				},
				'success': function (_0x7cb9c) {
				}
			});
		}
	} catch (_0x475375) {
	}
}
function createVideoTask() {
	if (isViturlEdit) {
		return;
	}
	var _0x33be25 = location.protocol + '//convertservice.chaoxing.com/video/createVideoTask?objectid=' + wrongObj;
	Ext.Ajax.request({
		'timeout': 3000,
		'type': 'get',
		'async': false,
		'url': _0x33be25,
		'dataType': 'jsonp',
		'jsonp': 'jsoncallback',
		'success': function (_0x58d30d) {
		},
		'failure': function (_0x24166a) {
			console.log('创建任务失败');
		}
	});
}
Ext.onReady(function () {
	var _0x11c5b7 = parent.requestSatusResourceDownGrade;
	if (_0x11c5b7 && _0x11c5b7 == 1) {
		var _0x4b804c = '<img src="/ananas/css/downgradeBlueTip.jpg" width="676" height="540">';
		Ext.select('body').setHTML(_0x4b804c);
		return;
	}
	loadVideo();
});
var danmaku = {};
function getDanmuByTime(_0x2091b2, _0x3ce2fb) {
	var _0x5e3ddf = parent.AttachmentSetting;
	if (!_0x5e3ddf) {
		return;
	}
	if (_0x5e3ddf && _0x5e3ddf.defaults) {
		var _0x56d16e = _0x5e3ddf.defaults, _0x236325 = _0x56d16e.courseid, _0x33dbc3 = _0x56d16e.clazzId;
	} else {
		return;
	}
	if (_0x2091b2 == 'pause') {
		danmaku = {};
		return;
	}
	_0x2091b2 == 'play' && (danmaku = {});
	var _0x69b59 = config('mid'), _0x23ef84 = {
		'courseid': _0x236325,
		'classid': _0x33dbc3,
		'mid': _0x69b59,
		'timebegin': parseInt(_0x3ce2fb),
		'timeend': parseInt(_0x3ce2fb) + 59
	};
	Ext.Ajax.request({
		'url': '/videodanmaku/timerange-danmakulist',
		'method': 'get',
		'params': _0x23ef84,
		'success': function (_0x3ebca7) {
			var _0x1bdfaf = eval('(' + _0x3ebca7.responseText + ')');
			if (_0x1bdfaf.status == 1) {
				var _0x91225b = _0x1bdfaf.data;
				for (var _0x25c3d1 = 0; _0x25c3d1 < _0x91225b.length; _0x25c3d1++) {
					var _0x1aa0b6 = _0x91225b[_0x25c3d1].timeline;
					!danmaku[_0x1aa0b6] && (danmaku[_0x1aa0b6] = new Array());
					danmaku[_0x1aa0b6].push(_0x91225b[_0x25c3d1].content);
				}
				_0x3ce2fb == 0 && danmuPlay(0);
			} else {
				alert('服务异常,稍后再试!');
			}
		},
		'failure': function (_0x5d2e2f) {
			alert('服务异常,稍后再试!');
		}
	});
}
var count = 0, timeFlag = -1, currentTime = 0;
function shotdanmu(_0x155b73) {
	var _0x176007 = _0x155b73.clientWidth;
	_0x176007 = -parseInt(_0x176007);
	var _0x24af24 = 'translateX(' + _0x176007 + 'px)';
	setTimeout(function () {
		_0x155b73.style.transform = _0x24af24;
		_0x155b73.className = 'danmuItem left';
	}, 500);
}
function danmuPlay(_0x21ff58) {
	currentTime = _0x21ff58;
	if (timeFlag == _0x21ff58) {
		return;
	}
	timeFlag = _0x21ff58;
	var _0x5dac1b = danmaku[_0x21ff58];
	if (!_0x5dac1b) {
		return;
	}
	if (!$('.mui-switch').hasClass('checked')) {
		return;
	}
	var _0x1abb3d = '<div class="danmuItem right">';
	for (var _0x21c444 = 0; _0x21c444 < _0x5dac1b.length; _0x21c444++) {
		if (_0x5dac1b[_0x21c444] == '@zan@') {
			_0x1abb3d += '<span><i class="zanIcon"></i>赞</span>';
		} else {
			if (_0x5dac1b[_0x21c444] == '@不赞同@') {
				_0x1abb3d += '<span><i class="noZanIcon"></i>不赞同</span>';
			} else {
				if (_0x5dac1b[_0x21c444] == '@感动@') {
					_0x1abb3d += '<span><i class="moveIcon"></i>感动</span>';
				} else {
					if (_0x5dac1b[_0x21c444] == '@疑惑@') {
						_0x1abb3d += '<span><i class="doubtIcon"></i>疑惑</span>';
					} else {
						if (_0x5dac1b[_0x21c444] == '@献花@') {
							_0x1abb3d += '<span><i class="huaIcon"></i>献花</span>';
						} else {
							if (_0x5dac1b[_0x21c444] == '@鼓掌@') {
								_0x1abb3d += '<span><i class="clapIcon"></i>鼓掌</span>';
							} else {
								_0x5dac1b[_0x21c444] == '@有趣@' ? _0x1abb3d += '<span><i class="interestingIcon"></i>有趣</span>' : _0x1abb3d += '<span>' + _0x5dac1b[_0x21c444] + '</span>';
							}
						}
					}
				}
			}
		}
	}
	_0x1abb3d += '</div>';
	var _0x44027 = count % 3, _0x54f69e = new Ext.XTemplate(_0x1abb3d).append('channel_' + _0x44027);
	shotdanmu(_0x54f69e);
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
function checkJobCountLimit(_0x2a0f4b, _0x1fc509) {
	/\/studentstudy/.test(top.location.pathname) && (_0x1fc509 == 0 ? top.showJobLimitTip() : top.showVideoTimeLimitTip(), playStateV2 = setInterval(function () {
		top.resumePlay && (clearStateV2Interval(), _0x2a0f4b.play(), top.resumePlay = false);
	}, 300));
}
function startFaceCollection(_0x2a24ba, _0x41e7e7, _0x3dba93) {
	if (/\/studentstudy/.test(top.location.pathname)) {
		var _0x10e311 = $('.maskDiv1', top.document).length;
		if (_0x10e311 > 0) {
			$('#videoJobId', top.document).val(videoJobId);
			$('#chapterVideoObjectId', top.document).val(videoObjectId);
			top.getQRCodeURLShow1 && top.getQRCodeURLShow1();
			$('.maskDiv1', top.document).css('display', 'block');
			getPlayState = setInterval(function () {
				top.playerState && (clearStateInterval(), _0x3dba93.isPlay = true, _0x2a24ba.play(), top.playerState = false);
			}, 1000);
		}
	}
}
function chapterPlayNextVideo(_0x53e824) {
	/\/studentstudy/.test(top.location.pathname) && (top.getChapterNextVideo && top.getChapterNextVideo(_0x53e824));
}
function markersPlayer(_0x301886) {
	var _0x179fb6 = _0x301886.getAttribute('data-marker-time');
	if (_0x179fb6) {
		return playerTime(_0x179fb6);
	}
}
function getMarkers() {
	return videojs('video').markers;
}
function playerTime(_0x198b2e) {
	if (ff != 1) {
		return;
	}
	var _0x502836 = videojs('video');
	return _0x502836.currentTime(_0x198b2e);
}
function playVideo() {
	var _0x478276 = videojs('video');
	player.volume(0);
	player.on('loadstart', function () {
		_0x478276.play().catch(Ext.emptyFn);
	});
}
function reSizeIframe() {
	try {
		var _0x146f68 = Ext.fly(Ext.select('.main').elements[0]).getHeight();
		Ext.fly(window.frameElement).setHeight(_0x146f68 + 'px');
	} catch (_0x33fb78) {
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
		var _0x3e7984 = videojs('video'), _0x4f2019 = parseInt(_0x3e7984.currentTime()), _0x12b98a = parseInt(_0x4f2019 / 60);
		_0x12b98a < 10 && (_0x12b98a = '0' + _0x12b98a.toString());
		var _0x20e3a5 = parseInt(_0x4f2019 % 60);
		_0x20e3a5 < 10 && (_0x20e3a5 = '0' + _0x20e3a5.toString());
		$('.Note_name', parent.parent.document).html(videoName + ' ' + _0x12b98a + ':' + _0x20e3a5);
		$('.Note_name', parent.parent.document).css('display', 'block');
		$('#noteVideoTime', parent.parent.document).val(_0x4f2019);
		$('#noteVideoJobId', parent.parent.document).val(videoJobId);
		$('#noteVideoObjectId', parent.parent.document).val(videoObjectId);
		parent.parent.getClazzNote && parent.parent.getClazzNote();
		parent.parent.changePan && parent.parent.changePan('3');
		$('.formTopic', parent.parent.document).size() > 0 && $('.formTopic', parent.parent.document).css('display', 'block');
	});
});