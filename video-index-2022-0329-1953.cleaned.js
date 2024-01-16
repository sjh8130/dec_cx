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
		var _0x2a44f7 = Ext.fly(window.frameElement).prev();
		if (_0x2a44f7 && _0x2a44f7.hasCls('ans-job-icon')) {
			return !Ext.fly(window.frameElement).parent().hasCls('ans-job-finished');
		}
		return false;
	} catch (_0x3b3bc7) {
		console.log(_0x3b3bc7);
	}
	return false;
}
var isViturlEdit = false, ff = 1;
function proxy_completed() {
	ed_complete && (greenligth(), ed_complete());
}
function config(_0x2f633b) {
	return window.frameElement.getAttribute(_0x2f633b);
}
function getCookie(_0x553e18) {
	var _0x47468a = document.cookie.split('; ');
	for (var _0x55f700 = 0; _0x55f700 < _0x47468a.length; _0x55f700++) {
		var _0x5887e4 = _0x47468a[_0x55f700].split('=');
		if (_0x5887e4[0] == _0x553e18) {
			return unescape(_0x5887e4[1]);
		}
	}
}
function showMoocPlayer(_0xb851b2) {
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
			var _0x6f7b5f = new MoocPlayer({
				'isSendLog': !!parent.AttachmentSetting && parent.AttachmentSetting.control,
				'data': _0xb851b2,
				'height': 540,
				'width': 676
			});
		});
	});
}
function showHTML5Player(_0x3449fd) {
	Ext.get('reader').setHTML('<video id="video" class="video-js vjs-default-skin vjs-big-play-centered"></video>');
	new ans.VideoJs({
		'videojs': 'video',
		'params': _0x3449fd
	});
	document.getElementsByTagName('video')[0].addEventListener('play', function () {
		var _0x185116 = parent.document.getElementsByTagName('iframe');
		for (var _0x43ec91 = 0; _0x43ec91 < _0x185116.length; _0x43ec91++) {
			if (_0x185116[_0x43ec91].getAttribute('src').indexOf('microCourse') != -1) {
				var _0x509717 = _0x185116[_0x43ec91].contentWindow.document.getElementsByTagName('iframe')[0].contentWindow;
				_0x509717.PageView.stopAll && _0x509717.PageView.stopAll();
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
	function _0x19c9a3() {
		var _0xfe7022 = $('#video').height(), _0x5e50c1 = $('#sp_video_ppt_pic').height(), _0x541723 = (parseInt(_0xfe7022) - 60 - parseInt(_0x5e50c1)) / 2;
		$('#sp_video_ppt_pic').length > 0 && $('#sp_video_ppt_pic').hasClass('sp_ppt_pic_fullScreen') ? ($('#sp_video_ppt_pic').css('top', _0x541723 + 'px'), $('#sp_video_ppt_pic').css('left', '0')) : ($('#sp_video_ppt_pic').css('top', '0px'), $('#sp_video_ppt_pic').css('left', '0px'));
	}
	$('.vjs-fullscreen-control').click(function () {
		setTimeout(_0x19c9a3, 300);
	});
	$(window).resize(function () {
		setTimeout(_0x19c9a3, 500);
	});
}
var wrongObj = '', videoName = '', videoJobId = '', videoObjectId = '';
function loadVideo() {
	var _0x3ba76d = config('objectid'), _0x1821fb = Ext.get('reader');
	if (!_0x3ba76d) {
		_0x1821fb.setHTML('未找到该文件');
		return;
	}
	wrongObj = _0x3ba76d;
	videoObjectId = _0x3ba76d;
	var _0x4c5bec = window.frameElement, _0x49f7cc = Ext.decode(_0x4c5bec.getAttribute('data')), _0xf50325 = parent.AttachmentSetting, _0x3341fa = config('mid'), _0x59ddb4 = 0, _0x400657 = config('vbegin'), _0x2b6e95 = config('vend'), _0x382d57 = config('jobid') || '', _0x4143c9 = _0x49f7cc ? _0x49f7cc.danmaku == null ? 0 : _0x49f7cc.danmaku : 0, _0x36eb8b = _0xf50325 && _0xf50325.videoTopicCloud, _0x276dc5 = config('fastforward') == 'true' ? true : false, _0xaefce8 = config('switchwindow') == 'true' ? true : false, _0x501bc6 = Ext.get('note'), _0x34fa11 = Ext.get('hl'), _0x40bd74 = Ext.get('note1-wrap'), _0x19cf18 = Ext.get('note1'), _0x2750bc = null, _0x31df54 = _0x49f7cc ? _0x49f7cc.rt ? _0x49f7cc.rt : 0.9 : 0.9;
	_0x382d57 == '' ? videoJobId = _0x49f7cc && _0x49f7cc['_jobid'] ? _0x49f7cc['_jobid'] : '' : videoJobId = _0x382d57;
	var _0x1820bf = flashChecker().hasFlash;
	try {
		isTeacher = top.location.href.indexOf('teacherstudy') > 0 || top.location.href.indexOf('course/phone/chapterdata') > 0;
	} catch (_0x4746dd) {
	}
	var _0x30d59d = parent.isVideoVisibleName, _0x4ac149 = _0x49f7cc ? _0x49f7cc.doublespeed != 0 ? 1 : 0 : 1;
	_0x49f7cc.v_begin && _0x49f7cc.v_end && _0x49f7cc.pobjectid && (isViturlEdit = true);
	function _0x3bf3dd(_0x2cdd68) {
		if (_0x2cdd68 && _0x2cdd68.length == 0) {
			return;
		}
		if (Ext.select('.zsCloud_ul') != null) {
			var _0x199546 = '';
			for (var _0x4e1852 = 0, _0x3b10a8 = _0x2cdd68.length; _0x4e1852 < _0x3b10a8; _0x4e1852++) {
				_0x199546 += '<li><span class=\'zsCloud_span topicId' + _0x2cdd68[_0x4e1852].id + '\' onclick=\'markersPlayer(this)\'>' + _0x2cdd68[_0x4e1852].name + ' </span></li>';
			}
			Ext.select('.zsCloud_ul').setHTML(_0x199546);
			Ext.select('.zsCloud').setStyle('display', 'block');
		}
	}
	function _0x2f4ef2() {
		_0x59ddb4 <= 100 && _0x34fa11.setWidth((_0x59ddb4 += 5) + '%');
		var _0x119049 = getCookie('fid') || '';
		Ext.Ajax.request({
			'url': '/ananas/status/' + _0x3ba76d + '?k=' + _0x119049 + '&flag=normal',
			'success': function (_0x2e2621) {
				var _0x416529 = eval('(' + _0x2e2621.responseText + ')');
				Ext.get('loading').hide();
				switch (_0x416529.status) {
					case 'success':
						_0x40bd74.remove(), videoName = _0x49f7cc && _0x49f7cc.name || '';
						_0x30d59d != 'false' && (Ext.fly(window.frameElement).parent().first('.ans-job-icon') != null ? top.location.href.indexOf('nodedetailcontroller/visitnodedetail') > -1 ? Ext.fly(window.frameElement).parent().insertHtml('afterBegin', '<div title="' + videoName + '" style="width: 500px;display: inline-block;line-height: 23px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">' + videoName + '</div>') : Ext.fly(window.frameElement).parent().first('.ans-job-icon').insertHtml('beforeEnd', '<span title="' + videoName + '" style="width: 500px;margin-left: 120px;display: inline-block;height: 23px;line-height: 23px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">' + videoName + '</span>') : Ext.fly(window.frameElement).parent().insertHtml('afterBegin', '<div title="' + videoName + '" style="width: 500px;display: inline-block;line-height: 23px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">' + videoName + '</div>'));
						var _0x48356d = _0x416529.duration, _0x10da0a = {
							'enableFastForward': _0x276dc5 ? 0 : 1,
							'enableSwitchWindow': _0xaefce8 ? 0 : 1,
							'duration': _0x48356d,
							'httpmd': _0x416529.httpmd,
							'http': _0x416529.http,
							'httphd': _0x416529.httphd,
							'httpshd': _0x416529.httpshd,
							'filename': _0x416529.filename,
							'dtoken': _0x416529.dtoken,
							'videoTopicCloud': _0x36eb8b
						};
						window.duration = _0x48356d;
						_0x416529.cdn && (_0x10da0a.cdn = _0x416529.cdn);
						if (document.cookie.length > 0) {
							_0x10da0a.memberinfo = getCookie('memberinfo');
							_0x10da0a.questionErrorLogUrl = ServerHosts.MASTER_HOST + '/question/addquestionerror';
						}
						_0x3341fa && (_0x10da0a.mid = _0x3341fa);
						_0x416529.duration && (_0x10da0a.videoTotalTime = _0x416529.duration);
						if (_0xf50325 && _0xf50325.isErya == 1) {
							_0x10da0a.screenshot = 'https://p.ananas.chaoxing.com/star3/origin/a26e16b5ac8e769bba6bda57343b7d57.png';
						} else {
							_0x416529.screenshot && (_0x10da0a.screenshot = _0x416529.screenshot);
						}
						_0xf50325 && (_0x10da0a.chapterVideoTranslate = _0xf50325.chapterVideoTranslate);
						_0x416529.thumbnails && (_0x10da0a.thumbnails = _0x416529.thumbnails);
						_0x416529.subobjectid && (_0x10da0a.subobjectid = _0x416529.subobjectid);
						_0x400657 && (_0x10da0a.startTime = _0x400657);
						_0x2b6e95 && (_0x10da0a.endTime = _0x2b6e95);
						_0x10da0a.rt = _0x31df54, _0x10da0a.control = _0xf50325 && _0xf50325.control;
						isTeacher && (_0x10da0a.control = false);
						var _0x252fdf = {}, _0x1ab8bd, _0x599f3f, _0x4e84f7;
						if (_0xf50325 && _0xf50325.control) {
							var _0xfaeffe = _0xf50325.attachments, _0x48cfc6 = _0xf50325.defaults, _0x235b70 = _0x416529.objectid + '-' + (_0x400657 ? _0x400657 : 0) + '-' + (_0x2b6e95 ? _0x2b6e95 : _0x48356d) + '-' + _0x382d57;
							_0x48cfc6 && (_0x10da0a.userid = _0x48cfc6.userid || '', _0x10da0a.fid = _0x48cfc6.fid || '');
							for (var _0xecb318 = 0; _0xecb318 < _0xfaeffe.length; _0xecb318++) {
								_0x252fdf = _0xfaeffe[_0xecb318];
								_0x599f3f = 0;
								_0x4e84f7 = _0x48356d;
								_0x252fdf.property && (_0x252fdf.property.vbegin && (_0x599f3f = _0x252fdf.property.vbegin), _0x252fdf.property.vend && (_0x4e84f7 = _0x252fdf.property.vend));
								!_0x252fdf.jobid && (_0x252fdf.jobid = '');
								_0x1ab8bd = _0x252fdf.objectId + '-' + _0x599f3f + '-' + _0x4e84f7 + '-' + _0x252fdf.jobid;
								if (_0x235b70 == _0x1ab8bd) {
									Ext.apply(_0x10da0a, _0xf50325.defaults);
									_0x10da0a.headOffset = _0x252fdf.headOffset ? Math.floor(parseInt(_0x252fdf.headOffset) / 1000) : 0;
									_0x10da0a.objectId = _0x252fdf.objectId;
									_0x10da0a.otherInfo = _0x252fdf.otherInfo;
									_0x10da0a.isPassed = _0x252fdf.isPassed;
									_0x10da0a.aId = _0x252fdf.aid;
									_0x10da0a.danmaku = _0x4143c9;
									_0x252fdf.topicList && _0x3bf3dd(_0x252fdf.topicList);
									_0x252fdf.property && _0x252fdf.property.fastforward && _0x252fdf.property.fastforward == 'true' && (_0x10da0a.enableFastForward = 0);
									_0x252fdf.property && typeof _0x252fdf.property.doublespeed != 'undefined' && _0x252fdf.property.doublespeed == 0 && (_0x10da0a.doublespeed = 0, _0x4ac149 = 0);
									var _0x43940c = _0x10da0a.schooldoublespeed;
									typeof _0x43940c == 'undefined' || _0x43940c == 2 ? _0x10da0a.doublespeed = _0x4ac149 : _0x10da0a.doublespeed = _0x43940c;
									_0x382d57 && (_0x10da0a.jobid = _0x382d57, !_0x252fdf.job && (!isTeacher && greenligth(), ed_complete = false, _0x10da0a.enableFastForward = 1, _0x10da0a.enableSwitchWindow = 1, _0x10da0a.headOffset = 0));
									_0x10da0a.reportUrl = _0x10da0a.reportUrl && _0x10da0a.reportUrl.replace('http://', window.location.protocol + '//');
									window['_jobindex'] = _0xecb318;
									break;
								}
							}
						} else {
							var _0x43940c = _0x10da0a.schooldoublespeed;
							typeof _0x43940c == 'undefined' || _0x43940c == 2 ? _0x10da0a.doublespeed = _0x4ac149 : _0x10da0a.doublespeed = _0x43940c;
						}
						if (_0x10da0a.ignoreVideoCtrl == 1) {
							_0x10da0a.enableFastForward = 1;
							_0x10da0a.enableSwitchWindow = 1;
						}
						(!_0x10da0a.control || isTeacher) && (ed_complete = false, _0x10da0a.enableFastForward = 1, _0x10da0a.enableSwitchWindow = 1, _0x10da0a.headOffset = 0);
						(_0x10da0a.isPassed || _0x10da0a.headOffset > _0x10da0a.videoTotalTime * 0.95) && (_0x10da0a.headOffset = 0);
						_0x2750bc && clearInterval(_0x2750bc), _0x10da0a.isSupportFace = $('.maskDiv1', top.document).length > 0 && /\/studentstudy/.test(top.location.pathname) ? true : false, _0x10da0a.isShowFaceCollection = /\/studentstudy/.test(top.location.pathname) && !Ext.fly(window.frameElement).parent().hasCls('ans-job-finished');
						if (supportH5Video()) {
							_0x49f7cc.danmaku && (loadMultiFile([{
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
							ff = _0x10da0a.enableFastForward;
							showHTML5Player(_0x10da0a);
						} else {
							if (!_0x1820bf) {
								var _0x5060d4 = 'http://www.adobe.com/go/getflashplayer';
								Ext.get('reader').setHTML('您没有安装flashplayer\uFF0C请到<a href="' + _0x5060d4 + '" target="_blank">www.adobe.com</a>下载安装\u3002<br/>如果已经安装请点击此处启用\uFF1A<object id="swf_jlxl1lfb" height="50" width="100" type="application/x-shockwave-flash" data="/ananas/modules/video/cxplayer/player_4.0.11.swf?v=20161025" style="border:#ccc 1px solid"><param name="quality" value="high"><param name="allowScriptAccess" value="always"><param name="wMode" value="transparent"><param name="align" value="middle"><param name="bgcolor" value="#000000"><param name="swLiveConnect" value="true"><param name="loop" value="true"><param name="play" value="true"><param name="DeviceFont" value="false"><param name="allowFullScreen" value="true"><param name="menu" value="true"></object>');
								return;
							}
							showMoocPlayer(_0x10da0a);
						}
						sendReadZTMediaLog(0);
						break;
					case 'failed':
						_0x2750bc && clearInterval(_0x2750bc), _0x40bd74.remove(), _0x501bc6.show();
						break;
					case 'waiting':
						_0x40bd74.update('<div class="line1"><div class="line3"></div></div><p class="tipStyle making">视频正在转码\uFF0C您无需在此页面等待\u30109001\u3011</p>');
						break;
					case 'converting':
					case 'transfer':
						_0x40bd74.update('<div class="line1"><div class="line2"></div></div><p class="tipStyle">视频上传中\u30109002\u3011</p>');
						break;
				}
			},
			'failure': function (_0xef7372) {
				_0xef7372.status == 0 ? (_0x2750bc && clearInterval(_0x2750bc), _0x40bd74.update('<div class="line1"><div class="line2"></div></div><p class="tipStyle">视频加载超时\uFF0C请刷新页面重试\u30109003\u3011</p>'), Ext.get('loading').hide()) : (_0x2750bc && clearInterval(_0x2750bc), _0x40bd74.update('<div class="line1"><div class="line3"></div></div><p class="tipStyle">视频加载失败\uFF0C请稍后再试\u30109004\u3011</p>'), Ext.get('loading').hide());
			}
		});
	}
	_0x2f4ef2();
}
function supportH5Video() {
	var _0x837f55 = function () {
		var _0x113f66 = document.createElement('video');
		if (typeof _0x113f66.canPlayType == 'function') {
			var _0x31a031 = _0x113f66.canPlayType('video/mp4;codecs="avc1.42E01E,mp4a.40.2"');
			if (_0x31a031.toLowerCase() == 'maybe' || _0x31a031.toLowerCase() == 'probably') {
				return true;
			}
			var _0x31a031 = _0x113f66.canPlayType('video/mp4;codecs="avc1.64001E,mp4a.40.2"');
			if (_0x31a031.toLowerCase() == 'maybe' || _0x31a031.toLowerCase() == 'probably') {
				return true;
			}
		}
		return false;
	};
	if (Ext.isIE && Ext.isIE10m) {
		return false;
	}
	return _0x837f55();
}
var playLogTimer;
function sendReadZTMediaLog(_0x34f8bc) {
	try {
		var _0x2bb074 = function (_0x12972a) {
			var _0x3e88be = new RegExp('(^|&)' + _0x12972a + '=([^&]*)(&|$)'), _0x5f3b9d = parent.location.search.substr(1).match(_0x3e88be);
			if (_0x5f3b9d != null) {
				return unescape(_0x5f3b9d[2]);
			}
			return null;
		}, _0x27023e = parent.AttachmentSetting, _0x1187df = window.frameElement, _0x3924c0 = _0x1187df.parentElement.parentElement.parentElement.getAttribute('kid');
		if (_0x3924c0) {
			var _0x3f1cd4 = 'marg-' + _0x3924c0;
			_0x27023e = top[_0x3f1cd4];
			typeof _0x27023e == 'string' && (_0x27023e = eval('(' + _0x27023e + ')'));
		}
		if (!_0x27023e) {
			return;
		}
		var _0x60452f = _0x27023e.defaults.isFiled, _0x1f959e = _0x27023e.defaults.state;
		if (_0x60452f == 1 || _0x1f959e == 1) {
			return;
		}
		var _0x3efc85 = top.dtype || 'Course';
		if (_0x3efc85 == 'ZT' || _0x3efc85 == 'HB' || _0x3efc85 == 'MAG') {
			var _0x1b197c = parent.location.search || '', _0x46bc74 = getCookie('UID'), _0x32d81c = config('objectid'), _0x2c96a8 = 0, _0x40cdbb = _0x27023e.defaults.courseid, _0xdd6ffe = _0x27023e.defaults.knowledgeid, _0x2ccf6b = window.duration, _0x18d4e0 = _0x2bb074('_from_'), _0x37a58d = _0x27023e.attachments, _0xc077ac = '';
			if (_0x37a58d.length > 0) {
				for (var _0x49a4c0 = 0, _0x2dbc58 = _0x37a58d.length; _0x49a4c0 < _0x2dbc58; _0x49a4c0++) {
					var _0x309b36 = _0x37a58d[_0x49a4c0], _0x5bdca8 = _0x309b36.objectId;
					if (_0x5bdca8 == _0x32d81c) {
						if (_0x34f8bc == 0) {
							_0xc077ac = _0x309b36.enc0;
						} else {
							_0x34f8bc == 1 ? _0xc077ac = _0x309b36.enc1 : _0xc077ac = _0x309b36.enc2;
						}
						break;
					}
				}
			}
			var _0x5b97dd = location.protocol + '//data-xxt.aichaoxing.com/analysis/datalog?s=' + _0x40cdbb + '&c=' + _0xdd6ffe + '&o=' + _0x32d81c + '&st=' + _0x34f8bc + '&m=' + _0x2c96a8 + '&d=' + _0x2ccf6b * 1000 + '&u=' + _0x46bc74 + '&_from_=' + _0x18d4e0 + '&enc=' + _0xc077ac, _0x28124b = function () {
				Ext.Ajax.request({
					'url': _0x5b97dd,
					'success': function (_0x167762) {
					}
				});
			};
			_0x28124b();
			if (_0x34f8bc == 1) {
				playLogTimer && clearInterval(playLogTimer);
				playLogTimer = setInterval(function () {
					_0x28124b();
				}, 5000);
			} else {
				_0x34f8bc == 2 && (playLogTimer && clearInterval(playLogTimer));
			}
		}
	} catch (_0x1b5aa7) {
	}
}
function receiveStudyLog() {
	try {
		var _0x41ed26 = parent.AttachmentSetting;
		if (!_0x41ed26) {
			return;
		}
		if (_0x41ed26 && _0x41ed26.defaults) {
			var _0x5e4e15 = _0x41ed26.defaults;
			if (_0x5e4e15.chapterCapture != 1) {
				return;
			}
			var _0x10b056 = '/keeper/api/receive-studylog', _0x8eb090 = new Date().getTime(), _0x3b791e = _0x5e4e15.courseid, _0x40cddb = _0x5e4e15.clazzId, _0x2bce65 = _0x5e4e15.cpi, _0x32a988 = _0x5e4e15.userid, _0x294d32 = _0x5e4e15.knowledgeid, _0x2ef1f3 = _0x5e4e15.fid, _0x2e3ad4 = '', _0x59b90f = config('objectid'), _0x42b0f3 = config('jobid') || '', _0x31c185 = _0x41ed26.attachments;
			if (_0x31c185.length > 0) {
				for (var _0x3c1450 = 0, _0x267ebc = _0x31c185.length; _0x3c1450 < _0x267ebc; _0x3c1450++) {
					var _0x17c653 = _0x31c185[_0x3c1450], _0x458e27 = _0x17c653.objectId;
					if (_0x458e27 == _0x59b90f) {
						_0x2e3ad4 = _0x17c653.aid;
						break;
					}
				}
			}
			var _0x7357d1 = {
				'relationId': _0x2e3ad4,
				'objectId': _0x59b90f,
				'userId': _0x32a988,
				'knowledgeId': _0x294d32,
				'fid': _0x2ef1f3,
				'jobId': _0x42b0f3
			}, _0x2ba937 = {
				'courseId': _0x3b791e,
				'clazzId': _0x40cddb,
				'personId': _0x2bce65,
				'eventType': 4,
				'eventTime': _0x8eb090,
				'data': _0x7357d1
			}, _0x3e6b33 = _0x5e4e15.mtEnc;
			Ext.Ajax.request({
				'method': 'post',
				'url': _0x10b056,
				'params': {
					'log': JSON.stringify(_0x2ba937),
					'enc': _0x3e6b33
				},
				'success': function (_0xf75185) {
				}
			});
		}
	} catch (_0x34885b) {
	}
}
function createVideoTask() {
	if (isViturlEdit) {
		return;
	}
	var _0x56636b = location.protocol + '//convertservice.chaoxing.com/video/createVideoTask?objectid=' + wrongObj;
	Ext.Ajax.request({
		'timeout': 3000,
		'type': 'get',
		'async': false,
		'url': _0x56636b,
		'dataType': 'jsonp',
		'jsonp': 'jsoncallback',
		'success': function (_0x24ce67) {
		},
		'failure': function (_0x57b466) {
			console.log('创建任务失败');
		}
	});
}
Ext.onReady(function () {
	var _0x246009 = parent.requestSatusResourceDownGrade;
	if (_0x246009 && _0x246009 == 1) {
		var _0x3180e4 = '<img src="/ananas/css/downgradeBlueTip.jpg" width="676" height="540">';
		Ext.select('body').setHTML(_0x3180e4);
		return;
	}
	loadVideo();
});
var danmaku = {};
function getDanmuByTime(_0x2ac378, _0x1e2dfe) {
	var _0x1d2101 = parent.AttachmentSetting;
	if (!_0x1d2101) {
		return;
	}
	if (_0x1d2101 && _0x1d2101.defaults) {
		var _0x73ab5e = _0x1d2101.defaults, _0x3f75e4 = _0x73ab5e.courseid, _0x1fa83b = _0x73ab5e.clazzId;
	} else {
		return;
	}
	if (_0x2ac378 == 'pause') {
		danmaku = {};
		return;
	}
	_0x2ac378 == 'play' && (danmaku = {});
	var _0x1e6948 = config('mid'), _0x324aa1 = {
		'courseid': _0x3f75e4,
		'classid': _0x1fa83b,
		'mid': _0x1e6948,
		'timebegin': parseInt(_0x1e2dfe),
		'timeend': parseInt(_0x1e2dfe) + 59
	};
	Ext.Ajax.request({
		'url': '/videodanmaku/timerange-danmakulist',
		'method': 'get',
		'params': _0x324aa1,
		'success': function (_0xc77d1b) {
			var _0xc4a8e5 = eval('(' + _0xc77d1b.responseText + ')');
			if (_0xc4a8e5.status == 1) {
				var _0x36f3f0 = _0xc4a8e5.data;
				for (var _0x100fb9 = 0; _0x100fb9 < _0x36f3f0.length; _0x100fb9++) {
					var _0x10c5a7 = _0x36f3f0[_0x100fb9].timeline;
					!danmaku[_0x10c5a7] && (danmaku[_0x10c5a7] = new Array());
					danmaku[_0x10c5a7].push(_0x36f3f0[_0x100fb9].content);
				}
				_0x1e2dfe == 0 && danmuPlay(0);
			} else {
				alert('服务异常,稍后再试!');
			}
		},
		'failure': function (_0x48e061) {
			alert('服务异常,稍后再试!');
		}
	});
}
var count = 0, timeFlag = -1, currentTime = 0;
function shotdanmu(_0xed1317) {
	var _0x1c79a9 = _0xed1317.clientWidth;
	_0x1c79a9 = -parseInt(_0x1c79a9);
	var _0x47b448 = 'translateX(' + _0x1c79a9 + 'px)';
	setTimeout(function () {
		_0xed1317.style.transform = _0x47b448;
		_0xed1317.className = 'danmuItem left';
	}, 500);
}
function danmuPlay(_0x531c85) {
	currentTime = _0x531c85;
	if (timeFlag == _0x531c85) {
		return;
	}
	timeFlag = _0x531c85;
	var _0x27640d = danmaku[_0x531c85];
	if (!_0x27640d) {
		return;
	}
	if (!$('.mui-switch').hasClass('checked')) {
		return;
	}
	var _0x2d9cb1 = '<div class="danmuItem right">';
	for (var _0x152731 = 0; _0x152731 < _0x27640d.length; _0x152731++) {
		if (_0x27640d[_0x152731] == '@zan@') {
			_0x2d9cb1 += '<span><i class="zanIcon"></i>赞</span>';
		} else {
			if (_0x27640d[_0x152731] == '@不赞同@') {
				_0x2d9cb1 += '<span><i class="noZanIcon"></i>不赞同</span>';
			} else {
				if (_0x27640d[_0x152731] == '@感动@') {
					_0x2d9cb1 += '<span><i class="moveIcon"></i>感动</span>';
				} else {
					if (_0x27640d[_0x152731] == '@疑惑@') {
						_0x2d9cb1 += '<span><i class="doubtIcon"></i>疑惑</span>';
					} else {
						if (_0x27640d[_0x152731] == '@献花@') {
							_0x2d9cb1 += '<span><i class="huaIcon"></i>献花</span>';
						} else {
							if (_0x27640d[_0x152731] == '@鼓掌@') {
								_0x2d9cb1 += '<span><i class="clapIcon"></i>鼓掌</span>';
							} else {
								_0x27640d[_0x152731] == '@有趣@' ? _0x2d9cb1 += '<span><i class="interestingIcon"></i>有趣</span>' : _0x2d9cb1 += '<span>' + _0x27640d[_0x152731] + '</span>';
							}
						}
					}
				}
			}
		}
	}
	_0x2d9cb1 += '</div>';
	var _0x59f69c = count % 3, _0x234ed3 = new Ext.XTemplate(_0x2d9cb1).append('channel_' + _0x59f69c);
	shotdanmu(_0x234ed3);
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
function checkJobCountLimit(_0x22e528) {
	/\/studentstudy/.test(top.location.pathname) && (top.showJobLimitTip(), playStateV2 = setInterval(function () {
		top.resumePlay && (clearStateV2Interval(), _0x22e528.play(), top.resumePlay = false);
	}, 300));
}
function startFaceCollection(_0x50e77a, _0xfa24f3, _0x12574d) {
	if (/\/studentstudy/.test(top.location.pathname)) {
		var _0x274a5c = $('.maskDiv1', top.document).length;
		if (_0x274a5c > 0) {
			$('#videoJobId', top.document).val(videoJobId);
			$('#chapterVideoObjectId', top.document).val(videoObjectId);
			top.getQRCodeURLShow1 && top.getQRCodeURLShow1();
			$('.maskDiv1', top.document).css('display', 'block');
			getPlayState = setInterval(function () {
				top.playerState && (clearStateInterval(), _0x12574d.isPlay = true, _0x50e77a.play(), top.playerState = false);
			}, 1000);
		}
	}
}
function chapterPlayNextVideo(_0x6ffec0) {
	/\/studentstudy/.test(top.location.pathname) && (top.getChapterNextVideo && top.getChapterNextVideo(_0x6ffec0));
}
function markersPlayer(_0x59238b) {
	var _0x23b3a7 = _0x59238b.getAttribute('data-marker-time');
	if (_0x23b3a7) {
		return playerTime(_0x23b3a7);
	}
}
function getMarkers() {
	return videojs('video').markers;
}
function playerTime(_0x41775e) {
	if (ff != 1) {
		return;
	}
	var _0x509f74 = videojs('video');
	return _0x509f74.currentTime(_0x41775e);
}
function playVideo() {
	var _0x159462 = videojs('video');
	player.volume(0);
	player.on('loadstart', function () {
		_0x159462.play().catch(Ext.emptyFn);
	});
}
function reSizeIframe() {
	try {
		var _0x348f1d = Ext.fly(Ext.select('.main').elements[0]).getHeight();
		Ext.fly(window.frameElement).setHeight(_0x348f1d + 'px');
	} catch (_0x30acd3) {
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
		var _0x5955e4 = videojs('video'), _0x594ed5 = parseInt(_0x5955e4.currentTime()), _0x145c09 = parseInt(_0x594ed5 / 60);
		_0x145c09 < 10 && (_0x145c09 = '0' + _0x145c09.toString());
		var _0x40a196 = parseInt(_0x594ed5 % 60);
		_0x40a196 < 10 && (_0x40a196 = '0' + _0x40a196.toString());
		$('.Note_name', parent.parent.document).html(videoName + ' ' + _0x145c09 + ':' + _0x40a196);
		$('.Note_name', parent.parent.document).css('display', 'block');
		$('#noteVideoTime', parent.parent.document).val(_0x594ed5);
		$('#noteVideoJobId', parent.parent.document).val(videoJobId);
		$('#noteVideoObjectId', parent.parent.document).val(videoObjectId);
		parent.parent.getClazzNote && parent.parent.getClazzNote();
		parent.parent.changePan && parent.parent.changePan('3');
		$('.formTopic', parent.parent.document).size() > 0 && $('.formTopic', parent.parent.document).css('display', 'block');
	});
});