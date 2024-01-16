Ext.Ajax.autoAbort = false;
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
		var _0x3acbbd = Ext.fly(window.frameElement).prev();
		if (_0x3acbbd && _0x3acbbd.hasCls('ans-job-icon')) {
			return !Ext.fly(window.frameElement).parent().hasCls('ans-job-finished');
		}
		return false;
	} catch (_0x365c30) {
		console.log(_0x365c30);
	}
	return false;
}
var isViturlEdit = false, ff = 1;
function proxy_completed() {
	ed_complete && (greenligth(), ed_complete());
}
function config(_0xc49a3d) {
	return window.frameElement.getAttribute(_0xc49a3d);
}
function getCookie(_0x7503f1) {
	var _0x250048 = document.cookie.split('; ');
	for (var _0x12beac = 0; _0x12beac < _0x250048.length; _0x12beac++) {
		var _0x48066f = _0x250048[_0x12beac].split('=');
		if (_0x48066f[0] == _0x7503f1) {
			return unescape(_0x48066f[1]);
		}
	}
}
function showMoocPlayer(_0x48a1b2) {
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
			var _0x179bf5 = new MoocPlayer({
				'isSendLog': !!parent.AttachmentSetting && parent.AttachmentSetting.control,
				'data': _0x48a1b2,
				'height': 540,
				'width': 676
			});
		});
	});
}
function bindVjsClick(_0x5d4ae1) {
	try {
		var _0x4e6e0f = _0x5d4ae1.enableFastForward, _0x4a33a0 = _0x5d4ae1.jobid;
		if (typeof _0x4e6e0f != 'undefined' && _0x4e6e0f === 0 && typeof _0x4a33a0 != 'undefined' && _0x4a33a0 != '' && window.parent.parent.location.href.indexOf('studentstudy') > -1) {
			var _0x3e48dd = $('.video-js .toolTipBox1'), _0x26e77a = $('#tipDiv');
			_0x3e48dd.length === 0 && _0x26e77a.length > 0 && ($('.video-js').prepend(_0x26e77a.html()), $('.vjs-progress-control').on('click', function () {
				if (!$('.toolTipBox1').is(':visible')) {
					$('.toolTipBox1').html($('#tipDiv .toolTipBox1').html());
					var _0x25609d = $('#video_html5_api').height();
					$('.toolTipBox1').css('top', parseInt(_0x25609d / 2) + 'px');
					$('.toolTipBox1').show();
					setTimeout(function () {
						$('.toolTipBox1').hide();
					}, 800);
				}
			}));
		}
	} catch (_0x8cea6b) {
		console.log(_0x8cea6b);
	}
}
function bindVjsRateClick() {
	try {
		var _0x275e68 = $('.video-js .toolTipBox1'), _0x470c6c = $('#tipDiv'), _0x5eaa09 = '<div class="toolTipBox1" style="display: none"><i class="loadicon"><img width="100%" height="100%" src="/ananas/videoeditor/images/tips_pop.png"/></i>该视频教师已关闭倍速功能\uFF0C任务点完成后可倍速播放</div>', _0x1be6cc = '<i class="loadicon"><img width="100%" height="100%" src="/ananas/videoeditor/images/tips_pop.png"/></i>该视频教师已关闭倍速功能\uFF0C任务点完成后可倍速播放';
		_0x275e68.length === 0 && _0x470c6c.length > 0 ? $('.video-js').prepend(_0x5eaa09) : $(_0x275e68).html(_0x1be6cc);
		if (!$('.toolTipBox1').is(':visible')) {
			var _0x306476 = $('#video_html5_api').height();
			$('.toolTipBox1').css('top', parseInt(_0x306476 / 2) + 'px');
			$('.toolTipBox1').show();
			setTimeout(function () {
				$('.toolTipBox1').hide();
			}, 800);
		}
	} catch (_0x51523b) {
		console.log(_0x51523b);
	}
}
function showHTML5Player(_0x55db80) {
	var _0x12bfd7 = '<div class="watermark"><p class="uname">' + _0x55db80.studentName + '</p>' + '<p style="margin-top: 10px;" class="loginName">' + _0x55db80.studentLoginName + '</p>' + '</div>';
	!_0x55db80.showWatermark && (_0x12bfd7 = '');
	Ext.get('reader').setHTML('<video id="video" class="video-js vjs-default-skin vjs-big-play-centered"></video>' + _0x12bfd7);
	new ans.VideoJs({
		'videojs': 'video',
		'params': _0x55db80
	});
	if (typeof aplus_queue != 'undefined') {
		var _0x4b8942 = parent.AttachmentSetting;
		if (_0x4b8942) {
			var _0x410cd4 = _0x4b8942.aplus_video_id, _0x47e5fa = _0x4b8942.aplus_resource_id, _0x2de78d = _0x4b8942.knowledgename, _0x251cc6 = _0x4b8942.coursename, _0x4f8d61 = {
				'video_name': _0x2de78d,
				'video_id': _0x410cd4,
				'resource_id': _0x47e5fa,
				'resource_name': _0x251cc6
			};
			$('.vjs-big-play-button')[0].addEventListener('click', function () {
				typeof aplus_queue != 'undefined' && aplus_queue.push({
					'action': 'aplus.record',
					'arguments': [
						'video_pybk_click',
						'CLK',
						_0x4f8d61
					]
				});
			});
			$('.vjs-mute-control')[0].addEventListener('click', function () {
				!$(this).hasClass('vjs-vol-0') ? typeof aplus_queue != 'undefined' && aplus_queue.push({
					'action': 'aplus.record',
					'arguments': [
						'no_sound_click',
						'CLK',
						_0x4f8d61
					]
				}) : typeof aplus_queue != 'undefined' && aplus_queue.push({
					'action': 'aplus.record',
					'arguments': [
						'enable_sound_click',
						'CLK',
						_0x4f8d61
					]
				});
			});
			$('.vjs-volume-level')[0].addEventListener('mouseup', function () {
				typeof aplus_queue != 'undefined' && aplus_queue.push({
					'action': 'aplus.record',
					'arguments': [
						'volume_control_drag',
						'OTHER',
						_0x4f8d61
					]
				});
			});
			$('.vjs-fullscreen-control')[0].addEventListener('click', function () {
				$(this).attr('title') == '全屏' ? typeof aplus_queue != 'undefined' && aplus_queue.push({
					'action': 'aplus.record',
					'arguments': [
						'full_screen_click',
						'CLK',
						_0x4f8d61
					]
				}) : typeof aplus_queue != 'undefined' && aplus_queue.push({
					'action': 'aplus.record',
					'arguments': [
						'small_screen_click',
						'CLK',
						_0x4f8d61
					]
				});
			});
		}
	}
	document.getElementsByTagName('video')[0].addEventListener('play', function () {
		var _0x1b6ab6 = parent.document.getElementsByTagName('iframe');
		for (var _0x1b3c03 = 0; _0x1b3c03 < _0x1b6ab6.length; _0x1b3c03++) {
			if (_0x1b6ab6[_0x1b3c03].getAttribute('src').indexOf('microCourse') != -1) {
				var _0x59fa58 = _0x1b6ab6[_0x1b3c03].contentWindow.document.getElementsByTagName('iframe')[0].contentWindow;
				_0x59fa58.PageView.stopAll && _0x59fa58.PageView.stopAll();
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
		document.getElementsByClassName('vjs-playback-rate').length > 0 && document.getElementsByClassName('vjs-playback-rate')[0].addEventListener('click', function () {
			$('.vjs-playback-rate .vjs-menu .vjs-menu-content li').length == 0 && bindVjsRateClick();
		});
		document.getElementsByClassName('vjs-fullscreen-control').length > 0 && document.getElementsByClassName('vjs-fullscreen-control')[0].addEventListener('click', function () {
			$(this).parents('#reader').find('.watermark').remove();
			$(this).parents('#video').append(_0x12bfd7);
		});
	});
	function _0x2ac745() {
		var _0x1357d8 = $('#video').height(), _0x1802ea = $('#sp_video_ppt_pic').height(), _0x3e364d = (parseInt(_0x1357d8) - 60 - parseInt(_0x1802ea)) / 2;
		$('#sp_video_ppt_pic').length > 0 && $('#sp_video_ppt_pic').hasClass('sp_ppt_pic_fullScreen') ? ($('#sp_video_ppt_pic').css('top', _0x3e364d + 'px'), $('#sp_video_ppt_pic').css('left', '0')) : ($('#sp_video_ppt_pic').css('top', '0px'), $('#sp_video_ppt_pic').css('left', '0px'));
	}
	$('.vjs-fullscreen-control').click(function () {
		setTimeout(_0x2ac745, 300);
	});
	$(window).resize(function () {
		setTimeout(_0x2ac745, 500);
	});
	bindVjsClick(_0x55db80);
}
var wrongObj = '', videoName = '', videoJobId = '', videoObjectId = '', mid = '';
function loadVideo() {
	var _0x12ff2a = config('objectid'), _0x3bec03 = Ext.get('reader');
	if (!_0x12ff2a) {
		_0x3bec03.setHTML('未找到该文件');
		return;
	}
	wrongObj = _0x12ff2a;
	videoObjectId = _0x12ff2a;
	var _0x26b09b = window.frameElement, _0x1a5531 = Ext.decode(_0x26b09b.getAttribute('data')), _0x1b23ee = parent.AttachmentSetting, _0x2ca376 = parent.previewAttachments;
	mid = config('mid');
	var _0x58e44d = 0, _0x3f6601 = config('vbegin'), _0x181fde = config('vend'), _0x2c301b = config('jobid') || '', _0xac84b6 = _0x1a5531 ? _0x1a5531.danmaku == null ? 0 : _0x1a5531.danmaku : 0, _0x1a6224 = _0x1b23ee && _0x1b23ee.videoTopicCloud, _0x1f8660 = _0x1b23ee && _0x1b23ee.supportHeartbeat, _0x4f37d9 = _0x1b23ee && _0x1b23ee.requestConfigUrl, _0x5c20ea = config('fastforward') == 'true' ? true : false, _0x4bfdcc = config('switchwindow') == 'true' ? true : false, _0x295567 = Ext.get('note'), _0x1202d3 = Ext.get('hl'), _0x3da7ce = Ext.get('note1-wrap'), _0x277738 = Ext.get('note1'), _0x5317ae = null, _0x593f50 = _0x1a5531 ? _0x1a5531.rt ? _0x1a5531.rt : 0.9 : 0.9;
	_0x2c301b == '' ? videoJobId = _0x1a5531 && _0x1a5531['_jobid'] ? _0x1a5531['_jobid'] : '' : videoJobId = _0x2c301b;
	var _0x32b307 = flashChecker().hasFlash, _0x59c9aa = _0x1b23ee && _0x1b23ee.defaults && _0x1b23ee.defaults.isForScreen == 1;
	try {
		isTeacher = top.location.href.indexOf('teacherstudy') > 0 || top.location.href.indexOf('course/phone/chapterdata') > 0 || _0x59c9aa;
	} catch (_0x542215) {
	}
	var _0x38ecff = parent.isVideoVisibleName, _0x4b5a6b = _0x1a5531 ? _0x1a5531.doublespeed != 0 ? 1 : 0 : 1;
	_0x1a5531.v_begin && _0x1a5531.v_end && _0x1a5531.pobjectid && (isViturlEdit = true);
	function _0x5ddce9(_0x6f0ae7) {
		if (_0x6f0ae7 && _0x6f0ae7.length == 0) {
			return;
		}
		if (Ext.select('.zsCloud_ul') != null) {
			var _0xdefcb7 = '';
			for (var _0x40a5cb = 0, _0x267833 = _0x6f0ae7.length; _0x40a5cb < _0x267833; _0x40a5cb++) {
				_0xdefcb7 += '<li><span class=\'zsCloud_span topicId' + _0x6f0ae7[_0x40a5cb].id + '\' onclick=\'markersPlayer(this)\'>' + _0x6f0ae7[_0x40a5cb].name + ' </span></li>';
			}
			Ext.select('.zsCloud_ul').setHTML(_0xdefcb7);
			Ext.select('.zsCloud').setStyle('display', 'block');
		}
	}
	function _0x1f8065() {
		_0x58e44d <= 100 && _0x1202d3.setWidth((_0x58e44d += 5) + '%');
		var _0x5e2134 = getCookie('fid') || '';
		Ext.Ajax.request({
			'url': '/ananas/status/' + _0x12ff2a + '?k=' + _0x5e2134 + '&flag=normal',
			'success': function (_0x1ec6dd) {
				var _0x660ac8 = eval('(' + _0x1ec6dd.responseText + ')');
				Ext.get('loading').hide();
				switch (_0x660ac8.status) {
					case 'success':
						_0x3da7ce.remove(), videoName = _0x1a5531 && _0x1a5531.name || '';
						var _0x53ac66 = 0;
						try {
							var _0x2095b6 = _0x660ac8.duration;
							if (_0x2ca376 && top.location.href.indexOf('nodedetailcontroller/visitnodedetail') > -1) {
								var _0x13f5ff = _0x660ac8.objectid + '-' + (_0x3f6601 ? _0x3f6601 : 0) + '-' + (_0x181fde ? _0x181fde : _0x2095b6) + '-' + _0x2c301b;
								for (var _0x590634 = 0; _0x590634 < _0x2ca376.length; _0x590634++) {
									var _0x54e255 = _0x2ca376[_0x590634], _0x162535 = 0, _0x5325e5 = _0x2095b6;
									_0x54e255.property && (_0x54e255.property.vbegin && (_0x162535 = _0x54e255.property.vbegin), _0x54e255.property.vend && (_0x5325e5 = _0x54e255.property.vend));
									!_0x54e255.jobid && (_0x54e255.jobid = '');
									var _0xdab46a = _0x54e255.objectId + '-' + _0x162535 + '-' + _0x5325e5 + '-' + _0x54e255.jobid;
									_0x13f5ff == _0xdab46a && (_0x53ac66 = _0x54e255.customType);
								}
							}
						} catch (_0x7a3973) {
							console.log(_0x7a3973);
						}
						var _0xced6ec = _0x660ac8.duration, _0x102222 = {
							'enableFastForward': _0x5c20ea ? 0 : 1,
							'enableSwitchWindow': _0x4bfdcc ? 0 : 1,
							'duration': _0xced6ec,
							'httpmd': _0x660ac8.httpmd,
							'http': _0x660ac8.http,
							'httphd': _0x660ac8.httphd,
							'httpshd': _0x660ac8.httpshd,
							'filename': _0x660ac8.filename,
							'dtoken': _0x660ac8.dtoken,
							'videoTopicCloud': _0x1a6224
						};
						window.duration = _0xced6ec;
						_0x660ac8.cdn && (_0x102222.cdn = _0x660ac8.cdn);
						if (document.cookie.length > 0) {
							_0x102222.memberinfo = getCookie('memberinfo');
							_0x102222.questionErrorLogUrl = ServerHosts.MASTER_HOST + '/question/addquestionerror';
						}
						mid && (_0x102222.mid = mid);
						_0x660ac8.duration && (_0x102222.videoTotalTime = _0x660ac8.duration);
						if (_0x1b23ee && _0x1b23ee.isErya == 1) {
							_0x102222.screenshot = 'https://p.ananas.chaoxing.com/star3/origin/a26e16b5ac8e769bba6bda57343b7d57.png';
						} else {
							_0x660ac8.screenshot && (_0x102222.screenshot = _0x660ac8.screenshot);
						}
						_0x1b23ee && (_0x102222.chapterVideoTranslate = _0x1b23ee.chapterVideoTranslate);
						_0x660ac8.thumbnails && (_0x102222.thumbnails = _0x660ac8.thumbnails);
						_0x660ac8.subobjectid && (_0x102222.subobjectid = _0x660ac8.subobjectid);
						_0x3f6601 && (_0x102222.startTime = _0x3f6601);
						_0x181fde && (_0x102222.endTime = _0x181fde);
						_0x102222.objectid = _0x12ff2a, _0x102222.rt = _0x593f50, _0x102222.control = _0x1b23ee && _0x1b23ee.control;
						isTeacher && (_0x102222.control = false);
						var _0x52bf2f = {}, _0x6a9d39, _0xa9cc23, _0x28b04e, _0x5151fe = '', _0x1d6f09 = '';
						if (_0x1b23ee && _0x1b23ee.control) {
							var _0x5a2f8b = _0x1b23ee.attachments, _0x3957c4 = _0x1b23ee.defaults, _0x1c3728 = _0x660ac8.objectid + '-' + (_0x3f6601 ? _0x3f6601 : 0) + '-' + (_0x181fde ? _0x181fde : _0xced6ec) + '-' + _0x2c301b;
							_0x3957c4 && (_0x102222.userid = _0x3957c4.userid || '', _0x102222.fid = _0x3957c4.fid || '', _0x102222.courseid = _0x3957c4.courseid || '', _0x102222.clazzId = _0x3957c4.clazzId || '', _0x102222.knowledgeid = _0x3957c4.knowledgeid || '', _0x102222.cookieFid = _0x3957c4.cookieFid || '', _0x5151fe = _0x3957c4.username || '', _0x1d6f09 = _0x3957c4.loginName || '');
							!isTeacher && (_0x102222.studentName = _0x5151fe, _0x102222.studentLoginName = _0x1d6f09, _0x102222.showWatermark = true);
							for (var _0x123227 = 0; _0x123227 < _0x5a2f8b.length; _0x123227++) {
								_0x52bf2f = _0x5a2f8b[_0x123227];
								_0xa9cc23 = 0;
								_0x28b04e = _0xced6ec;
								_0x52bf2f.property && (_0x52bf2f.property.vbegin && (_0xa9cc23 = _0x52bf2f.property.vbegin), _0x52bf2f.property.vend && (_0x28b04e = _0x52bf2f.property.vend));
								!_0x52bf2f.jobid && (_0x52bf2f.jobid = '');
								_0x6a9d39 = _0x52bf2f.objectId + '-' + _0xa9cc23 + '-' + _0x28b04e + '-' + _0x52bf2f.jobid;
								if (_0x1c3728 == _0x6a9d39) {
									_0x102222.videoEnc = _0x52bf2f.videoEnc || '';
									Ext.apply(_0x102222, _0x1b23ee.defaults);
									_0x53ac66 = _0x52bf2f.customType;
									var _0x208ee4 = _0x52bf2f.begins ? parseInt(_0x52bf2f.begins) : 0;
									_0x208ee4 > 0 && _0x660ac8.duration ? _0x102222.begins = _0x208ee4 > _0x660ac8.duration ? 0 : _0x208ee4 : _0x102222.begins = 0;
									var _0x530e33 = _0x52bf2f.ends ? parseInt(_0x52bf2f.ends) : 0;
									if (_0x530e33 > 0 && _0x660ac8.duration) {
										var _0x37bca3 = _0x660ac8.duration - _0x530e33;
										_0x102222.ends = _0x37bca3 < 0 ? 0 : _0x37bca3;
									} else {
										_0x102222.ends = 0;
									}
									if (_0x102222.ends < _0x102222.begins) {
										_0x102222.begins = 0;
										_0x102222.ends = 0;
									}
									_0x102222.headOffset = _0x52bf2f.headOffset ? Math.floor(parseInt(_0x52bf2f.headOffset) / 1000) : 0;
									_0x102222.objectId = _0x52bf2f.objectId;
									_0x102222.otherInfo = _0x52bf2f.otherInfo;
									_0x102222.isPassed = _0x52bf2f.isPassed;
									_0x102222.aId = _0x52bf2f.aid;
									_0x102222.danmaku = _0xac84b6;
									_0x52bf2f.topicList && _0x5ddce9(_0x52bf2f.topicList);
									_0x102222.jumpTimePointList = _0x52bf2f.jumpTimePointList;
									_0x52bf2f.property && _0x52bf2f.property.fastforward && _0x52bf2f.property.fastforward == 'true' && (_0x102222.enableFastForward = 0);
									_0x52bf2f.property && typeof _0x52bf2f.property.doublespeed != 'undefined' && _0x52bf2f.property.doublespeed == 0 && (_0x102222.doublespeed = 0, _0x4b5a6b = 0);
									var _0xbbf1df = _0x102222.schooldoublespeed;
									typeof _0xbbf1df == 'undefined' || _0xbbf1df == 2 ? _0x102222.doublespeed = _0x4b5a6b : _0x102222.doublespeed = _0xbbf1df;
									(!_0x52bf2f.job || isTeacher) && (_0x102222.doublespeed = 1);
									_0x2c301b && (_0x102222.jobid = _0x2c301b, !_0x52bf2f.job && (!isTeacher && greenligth(), ed_complete = false, _0x102222.enableFastForward = 1, _0x102222.enableSwitchWindow = 1, _0x102222.headOffset = 0));
									try {
										if (_0x1f8660 && top.location.href.indexOf('/studentstudy') > -1) {
											var _0x3efb17 = _0x102222.courseid || 0, _0x200482 = _0x102222.clazzId || 0, _0x233984 = _0x102222.knowledgeid || 0, _0x1c2e97 = _0x102222.cookieFid || 0, _0x5b2479 = _0x102222.headOffset || 0, _0x35cdcc = _0x102222.userid || 0;
											Ext.Ajax.request({
												'url': _0x4f37d9,
												'async': false,
												'params': {
													'uid': _0x35cdcc,
													'schoolId': _0x1c2e97,
													'moocClassId': _0x200482,
													'moocCourseId': _0x3efb17,
													'chapterId': _0x233984,
													'objectId': _0x12ff2a,
													'videoProgress': _0x5b2479,
													'totalVideoDuration': _0x2095b6,
													'enc': _0x102222.videoEnc
												},
												'method': 'get',
												'success': function (_0x136743) {
													var _0xe343a = eval('(' + _0x136743.responseText + ')');
													_0xe343a.result === 1 ? (_0x102222.eventArray = _0xe343a.eventArray, _0x102222.supportHeartbeat = true) : _0x102222.supportHeartbeat = false;
												},
												'failure': function () {
													_0x102222.supportHeartbeat = false;
												}
											});
										}
									} catch (_0x29a1c0) {
										console.log(_0x29a1c0);
									}
									_0x102222.reportUrl = _0x102222.reportUrl && _0x102222.reportUrl.replace('http://', window.location.protocol + '//');
									window['_jobindex'] = _0x123227;
									break;
								}
							}
						} else {
							var _0xbbf1df = _0x102222.schooldoublespeed;
							typeof _0xbbf1df == 'undefined' || _0xbbf1df == 2 ? _0x102222.doublespeed = _0x4b5a6b : _0x102222.doublespeed = _0xbbf1df;
						}
						var _0x276e15 = '', _0xd07384 = '';
						(top.location.href.indexOf('nodedetailcontroller/visitnodedetail') > -1 || top.location.href.indexOf('mycourse/teacherstudy') > -1) && parseInt(_0x53ac66) === 2 && (_0x276e15 = '<span style = "display: inline-block;width: 40px; height: 20px;font-size: 12px;background:#F9F9FA;border:1px solid #D5E2F1;border-radius:4px;text-align:center;line-height:20px;color: #6B89B3;position: absolute;right: 0; top: 0px;">动画</span>', _0xd07384 = '<span style ="display: inline-block;overflow: hidden;float: right;text-overflow: ellipsis;white-space: nowrap;width: 40px;height: 20px;font-size: 12px;background: #F9F9FA;border:1px solid #D5E2F1;border-radius:4px;text-align: center;line-height:20px;color:#6B89B3;right:0;top:0;">动画</span>');
						if (_0x38ecff != 'false') {
							Ext.fly(window.frameElement).parent().first('.ans-job-icon') != null ? top.location.href.indexOf('nodedetailcontroller/visitnodedetail') > -1 ? Ext.fly(window.frameElement).parent().insertHtml('afterBegin', '<div title="' + videoName + '" style="width: 500px;display: inline-block;line-height: 23px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">' + videoName + '</div>' + _0xd07384) : (Ext.fly(window.frameElement).parent().first('.ans-job-icon').insertHtml('beforeEnd', '<span title="' + videoName + '" style="width: 500px;margin-left: 120px;display: inline-block;height: 23px;line-height: 23px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">' + videoName + '</span>' + _0x276e15), _0x276e15 != '' && Ext.fly(window.frameElement).parent().addCls('relativeClass')) : (Ext.fly(window.frameElement).parent().insertHtml('afterBegin', '<div title="' + videoName + '" style="width: 500px;display: inline-block;line-height: 23px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">' + videoName + '</div>' + _0xd07384), _0xd07384 != '' && Ext.fly(window.frameElement).parent().addCls('relativeClass'));
						} else {
							try {
								Ext.fly(window.frameElement).parent().first('.ans-job-icon') != null ? top.location.href.indexOf('nodedetailcontroller/visitnodedetail') > -1 ? _0xd07384 != '' && Ext.fly(window.frameElement).parent().insertHtml('afterBegin', _0xd07384) : _0x276e15 != '' && (Ext.fly(window.frameElement).parent().first('.ans-job-icon').insertHtml('beforeEnd', _0x276e15), Ext.fly(window.frameElement).parent().addCls('relativeClass')) : _0xd07384 != '' && (Ext.fly(window.frameElement).parent().insertHtml('afterBegin', _0xd07384), Ext.fly(window.frameElement).parent().addCls('relativeClass'));
							} catch (_0xa1ed78) {
								console.log(_0xa1ed78);
							}
						}
						if (_0x102222.ignoreVideoCtrl == 1) {
							_0x102222.enableFastForward = 1;
							_0x102222.enableSwitchWindow = 1;
						}
						(!_0x102222.control || isTeacher) && (ed_complete = false, _0x102222.enableFastForward = 1, _0x102222.enableSwitchWindow = 1, _0x102222.headOffset = 0);
						(_0x102222.isPassed || _0x102222.headOffset > _0x102222.videoTotalTime * 0.95) && (_0x102222.headOffset = 0);
						_0x5317ae && clearInterval(_0x5317ae), _0x102222.isSupportFace = $('.maskDiv1', top.document).length > 0 && /\/studentstudy/.test(top.location.pathname) ? true : false, _0x102222.isShowFaceCollection = /\/studentstudy/.test(top.location.pathname) && !Ext.fly(window.frameElement).parent().hasCls('ans-job-finished');
						if (supportH5Video()) {
							_0x1a5531.danmaku && (loadMultiFile([{
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
										'src': 'cxplayer/videodanmu.js?v=3',
										'tag': 'script',
										'type': 'text/javascript',
										'defer': 'defer'
									}]);
								});
							}), Ext.select('.danmuDiv').setStyle('display', 'inline-block'), Ext.select('.sp_function').setStyle('height', '66px'));
							ff = _0x102222.enableFastForward;
							if (typeof aplus_queue != 'undefined') {
								_0x102222.aplus_video_id = _0x1b23ee.aplus_video_id;
								_0x102222.aplus_resource_id = _0x1b23ee.aplus_resource_id;
								_0x102222.knowledgename = _0x1b23ee.knowledgename;
								_0x102222.coursename = _0x1b23ee.coursename;
							}
							showHTML5Player(_0x102222);
						} else {
							if (!_0x32b307) {
								var _0x315c33 = 'http://www.adobe.com/go/getflashplayer';
								Ext.get('reader').setHTML('您没有安装flashplayer\uFF0C请到<a href="' + _0x315c33 + '" target="_blank">www.adobe.com</a>下载安装\u3002<br/>如果已经安装请点击此处启用\uFF1A<object id="swf_jlxl1lfb" height="50" width="100" type="application/x-shockwave-flash" data="/ananas/modules/video/cxplayer/player_4.0.11.swf?v=20161025" style="border:#ccc 1px solid"><param name="quality" value="high"><param name="allowScriptAccess" value="always"><param name="wMode" value="transparent"><param name="align" value="middle"><param name="bgcolor" value="#000000"><param name="swLiveConnect" value="true"><param name="loop" value="true"><param name="play" value="true"><param name="DeviceFont" value="false"><param name="allowFullScreen" value="true"><param name="menu" value="true"></object>');
								return;
							}
							showMoocPlayer(_0x102222);
						}
						sendReadZTMediaLog(0);
						break;
					case 'failed':
						_0x5317ae && clearInterval(_0x5317ae), _0x3da7ce.remove(), _0x295567.show();
						break;
					case 'waiting':
						_0x3da7ce.update('<div class="line1"><div class="line3"></div></div><p class="tipStyle making">视频正在转码\uFF0C您无需在此页面等待\u30109001\u3011</p>');
						break;
					case 'converting':
					case 'transfer':
						_0x3da7ce.update('<div class="line1"><div class="line2"></div></div><p class="tipStyle">视频上传中\u30109002\u3011</p>');
						break;
				}
			},
			'failure': function (_0x365b9d) {
				_0x365b9d.status == 0 ? (_0x5317ae && clearInterval(_0x5317ae), _0x3da7ce.update('<div class="line1"><div class="line2"></div></div><p class="tipStyle">视频加载超时\uFF0C请刷新页面重试\u30109003\u3011</p>'), Ext.get('loading').hide()) : (_0x5317ae && clearInterval(_0x5317ae), _0x3da7ce.update('<div class="line1"><div class="line3"></div></div><p class="tipStyle">视频加载失败\uFF0C请稍后再试\u30109004\u3011</p>'), Ext.get('loading').hide());
			}
		});
	}
	_0x1f8065();
}
function supportH5Video() {
	var _0x325a8a = function () {
		var _0x55775e = document.createElement('video');
		if (typeof _0x55775e.canPlayType == 'function') {
			var _0x45bd83 = _0x55775e.canPlayType('video/mp4;codecs="avc1.42E01E,mp4a.40.2"');
			if (_0x45bd83.toLowerCase() == 'maybe' || _0x45bd83.toLowerCase() == 'probably') {
				return true;
			}
			var _0x45bd83 = _0x55775e.canPlayType('video/mp4;codecs="avc1.64001E,mp4a.40.2"');
			if (_0x45bd83.toLowerCase() == 'maybe' || _0x45bd83.toLowerCase() == 'probably') {
				return true;
			}
		}
		return false;
	};
	if (Ext.isIE && Ext.isIE10m) {
		return false;
	}
	return _0x325a8a();
}
var playLogTimer;
function sendReadZTMediaLog(_0xc97912) {
	try {
		var _0x2dabed = function (_0x4f2e82) {
			var _0x2bc276 = new RegExp('(^|&)' + _0x4f2e82 + '=([^&]*)(&|$)'), _0x15c202 = parent.location.search.substr(1).match(_0x2bc276);
			if (_0x15c202 != null) {
				return unescape(_0x15c202[2]);
			}
			return null;
		}, _0x56ac29 = parent.AttachmentSetting, _0x32a50b = window.frameElement, _0xd52c66 = _0x32a50b.parentElement.parentElement.parentElement.getAttribute('kid');
		if (_0xd52c66) {
			var _0x3a4ef1 = 'marg-' + _0xd52c66;
			_0x56ac29 = top[_0x3a4ef1];
			typeof _0x56ac29 == 'string' && (_0x56ac29 = eval('(' + _0x56ac29 + ')'));
		}
		if (!_0x56ac29) {
			return;
		}
		var _0x4c9778 = _0x56ac29.defaults.isFiled, _0x3beced = _0x56ac29.defaults.state;
		if (_0x4c9778 == 1 || _0x3beced == 1) {
			return;
		}
		var _0xb8ccbb = top.dtype || 'Course';
		if (_0xb8ccbb == 'ZT' || _0xb8ccbb == 'HB' || _0xb8ccbb == 'MAG') {
			var _0x5b23fd = parent.location.search || '', _0x419ac4 = getCookie('UID'), _0xb852ec = config('objectid'), _0x5db476 = 0, _0x4c1a1a = _0x56ac29.defaults.courseid, _0x74133b = _0x56ac29.defaults.knowledgeid, _0x2d59f1 = window.duration, _0x4669dc = _0x2dabed('_from_'), _0x2331a1 = _0x56ac29.attachments, _0x3dfd3a = '';
			if (_0x2331a1.length > 0) {
				for (var _0x45737f = 0, _0x33db14 = _0x2331a1.length; _0x45737f < _0x33db14; _0x45737f++) {
					var _0xf2ee2a = _0x2331a1[_0x45737f], _0x1f575f = _0xf2ee2a.objectId;
					if (_0x1f575f == _0xb852ec) {
						if (_0xc97912 == 0) {
							_0x3dfd3a = _0xf2ee2a.enc0;
						} else {
							_0xc97912 == 1 ? _0x3dfd3a = _0xf2ee2a.enc1 : _0x3dfd3a = _0xf2ee2a.enc2;
						}
						break;
					}
				}
			}
			var _0x14da67 = location.protocol + '//data-xxt.aichaoxing.com/analysis/datalog?s=' + _0x4c1a1a + '&c=' + _0x74133b + '&o=' + _0xb852ec + '&st=' + _0xc97912 + '&m=' + _0x5db476 + '&d=' + _0x2d59f1 * 1000 + '&u=' + _0x419ac4 + '&_from_=' + _0x4669dc + '&enc=' + _0x3dfd3a, _0x193f70 = function () {
				Ext.Ajax.request({
					'url': _0x14da67,
					'success': function (_0x1bc1a3) {
					}
				});
			};
			_0x193f70();
			if (_0xc97912 == 1) {
				playLogTimer && clearInterval(playLogTimer);
				playLogTimer = setInterval(function () {
					_0x193f70();
				}, 5000);
			} else {
				_0xc97912 == 2 && (playLogTimer && clearInterval(playLogTimer));
			}
		}
	} catch (_0x1345b7) {
	}
}
function receiveStudyLog() {
	try {
		var _0x42e78b = parent.AttachmentSetting;
		if (!_0x42e78b) {
			return;
		}
		if (_0x42e78b && _0x42e78b.defaults) {
			var _0x5277fd = _0x42e78b.defaults;
			if (_0x5277fd.chapterCapture != 1) {
				return;
			}
			var _0x52559b = new Date().getTime(), _0x174726 = _0x5277fd.courseid, _0x40c831 = _0x5277fd.clazzId, _0x534604 = _0x5277fd.cpi, _0x568569 = _0x5277fd.userid, _0x56129b = _0x5277fd.knowledgeid, _0x3d0dea = _0x5277fd.fid, _0xabc8a5 = '', _0x31dd45 = config('objectid'), _0x5ba320 = config('jobid') || '', _0x1d6272 = _0x42e78b.attachments;
			if (_0x1d6272.length > 0) {
				for (var _0x518e31 = 0, _0x288b31 = _0x1d6272.length; _0x518e31 < _0x288b31; _0x518e31++) {
					var _0x22bfc5 = _0x1d6272[_0x518e31], _0x10e7e6 = _0x22bfc5.objectId;
					if (_0x10e7e6 == _0x31dd45) {
						_0xabc8a5 = _0x22bfc5.aid;
						break;
					}
				}
			}
			var _0x1c0f3f = {
				'relationId': _0xabc8a5,
				'objectId': _0x31dd45,
				'userId': _0x568569,
				'knowledgeId': _0x56129b,
				'fid': _0x3d0dea,
				'jobId': _0x5ba320
			}, _0x374cf8 = {
				'courseId': _0x174726,
				'clazzId': _0x40c831,
				'personId': _0x534604,
				'eventType': 4,
				'eventTime': _0x52559b,
				'data': _0x1c0f3f
			}, _0x1de7e4 = _0x5277fd.mtEnc;
			Ext.Ajax.request({
				'method': 'post',
				'url': '/keeper/api/receive-studylog',
				'params': {
					'log': JSON.stringify(_0x374cf8),
					'enc': _0x1de7e4
				},
				'success': function (_0x40f694) {
				}
			});
		}
	} catch (_0x2581cc) {
	}
}
function createVideoTask() {
	if (isViturlEdit) {
		return;
	}
	var _0x560e03 = location.protocol + '//convertservice.chaoxing.com/video/createVideoTask?objectid=' + wrongObj;
	Ext.Ajax.request({
		'timeout': 3000,
		'type': 'get',
		'async': false,
		'url': _0x560e03,
		'dataType': 'jsonp',
		'jsonp': 'jsoncallback',
		'success': function (_0x2af349) {
		},
		'failure': function (_0x529058) {
			console.log('创建任务失败');
		}
	});
}
Ext.onReady(function () {
	var _0x227848 = parent.requestSatusResourceDownGrade;
	if (_0x227848 && _0x227848 == 1) {
		var _0x151ac1 = '<img src="/ananas/css/downgradeBlueTip.jpg" width="676" height="540">';
		Ext.select('body').setHTML(_0x151ac1);
		return;
	}
	loadVideo();
});
var danmaku = {};
function getDanmuByTime(_0x722695, _0x45209e) {
	var _0x552bab = parent.AttachmentSetting;
	if (!_0x552bab) {
		return;
	}
	if (_0x552bab && _0x552bab.defaults) {
		var _0x37ae00 = _0x552bab.defaults, _0x39bc8b = _0x37ae00.courseid, _0x416631 = _0x37ae00.clazzId;
	} else {
		return;
	}
	if (_0x722695 == 'pause') {
		danmaku = {};
		return;
	}
	_0x722695 == 'play' && (danmaku = {});
	var _0x52ccf5 = config('mid'), _0x3f0ada = {
		'courseid': _0x39bc8b,
		'classid': _0x416631,
		'mid': _0x52ccf5,
		'timebegin': parseInt(_0x45209e),
		'timeend': parseInt(_0x45209e) + 59
	};
	Ext.Ajax.request({
		'url': '/videodanmaku/timerange-danmakulist',
		'method': 'get',
		'params': _0x3f0ada,
		'success': function (_0x43773c) {
			var _0x13042f = eval('(' + _0x43773c.responseText + ')');
			if (_0x13042f.status == 1) {
				var _0x49ca17 = _0x13042f.data;
				for (var _0x16047d = 0; _0x16047d < _0x49ca17.length; _0x16047d++) {
					var _0x3aab95 = _0x49ca17[_0x16047d].timeline;
					!danmaku[_0x3aab95] && (danmaku[_0x3aab95] = new Array());
					danmaku[_0x3aab95].push(_0x49ca17[_0x16047d].content);
				}
				_0x45209e == 0 && danmuPlay(0);
			} else {
				alert('服务异常,稍后再试!');
			}
		},
		'failure': function (_0x10b9a9) {
			alert('服务异常,稍后再试!');
		}
	});
}
var count = 0, timeFlag = -1, currentTime = 0;
function shotdanmu(_0x49b1df) {
	var _0x5e1b2e = _0x49b1df.clientWidth;
	_0x5e1b2e = -parseInt(_0x5e1b2e);
	var _0x561dd1 = 'translateX(' + _0x5e1b2e + 'px)';
	setTimeout(function () {
		_0x49b1df.style.transform = _0x561dd1;
		_0x49b1df.className = 'danmuItem left';
	}, 500);
}
function danmuPlay(_0x223115) {
	currentTime = _0x223115;
	if (timeFlag == _0x223115) {
		return;
	}
	timeFlag = _0x223115;
	var _0x581b24 = danmaku[_0x223115];
	if (!_0x581b24) {
		return;
	}
	if (!$('.sp_tanmu').hasClass('sp_tanmu_blue')) {
		return;
	}
	var _0xa6efac = '<div class="danmuItem right">';
	for (var _0x30e468 = 0; _0x30e468 < _0x581b24.length; _0x30e468++) {
		if (_0x581b24[_0x30e468] == '@zan@') {
			_0xa6efac += '<span><i class="zanIcon"></i>赞</span>';
		} else {
			if (_0x581b24[_0x30e468] == '@不赞同@') {
				_0xa6efac += '<span><i class="noZanIcon"></i>不赞同</span>';
			} else {
				if (_0x581b24[_0x30e468] == '@感动@') {
					_0xa6efac += '<span><i class="moveIcon"></i>感动</span>';
				} else {
					if (_0x581b24[_0x30e468] == '@疑惑@') {
						_0xa6efac += '<span><i class="doubtIcon"></i>疑惑</span>';
					} else {
						if (_0x581b24[_0x30e468] == '@献花@') {
							_0xa6efac += '<span><i class="huaIcon"></i>献花</span>';
						} else {
							if (_0x581b24[_0x30e468] == '@鼓掌@') {
								_0xa6efac += '<span><i class="clapIcon"></i>鼓掌</span>';
							} else {
								_0x581b24[_0x30e468] == '@有趣@' ? _0xa6efac += '<span><i class="interestingIcon"></i>有趣</span>' : _0xa6efac += '<span>' + _0x581b24[_0x30e468] + '</span>';
							}
						}
					}
				}
			}
		}
	}
	_0xa6efac += '</div>';
	var _0x54066e = count % 3, _0x4178ec = new Ext.XTemplate(_0xa6efac).append('channel_' + _0x54066e);
	shotdanmu(_0x4178ec);
	count++;
}
var popPlayState;
function clearPopStateInterval() {
	popPlayState && clearInterval(popPlayState);
}
var getPlayState;
function clearStateInterval() {
	getPlayState && clearInterval(getPlayState);
}
var playStateV2;
function clearStateV2Interval() {
	playStateV2 && clearInterval(playStateV2);
}
function checkJobCountLimit(_0xaa2823, _0x134080) {
	/\/studentstudy/.test(top.location.pathname) && (_0x134080 == 0 ? top.showJobLimitTip() : top.showVideoTimeLimitTip(), playStateV2 = setInterval(function () {
		top.resumePlay && (clearStateV2Interval(), _0xaa2823.play(), top.resumePlay = false);
	}, 300));
}
function isStuViewPage() {
	return /\/studentstudy/.test(top.location.pathname);
}
function showPopIframe(_0x2ad3d3, _0x2b5a7d) {
	try {
		top.showCustomPop && (_0x2b5a7d.pause(), top.showCustomPop(_0x2ad3d3), popPlayState = setInterval(function () {
			top.popPlayState && (top.popPlayState = false, clearPopStateInterval(), _0x2b5a7d.eventCount <= 0 && _0x2b5a7d.play());
		}, 1000));
	} catch (_0x328693) {
		console.log(_0x328693);
	}
}
function startFaceCollection(_0x33431a, _0x438574, _0x3b6efb, _0x5f4326) {
	if (/\/studentstudy/.test(top.location.pathname)) {
		var _0x58696e = $('.maskDiv1', top.document).length;
		if (_0x58696e > 0) {
			$('#videoJobId', top.document).val(videoJobId);
			$('#chapterVideoObjectId', top.document).val(videoObjectId);
			$('#collectionTime', top.document).val(_0x5f4326);
			$('#mid', top.document).val(mid);
			top.getQRCodeURLShow1 && top.getQRCodeURLShow1();
			$('.maskDiv1', top.document).css('display', 'block');
			getPlayState = setInterval(function () {
				if (top.playerState) {
					clearStateInterval();
					_0x33431a.play();
					_0x3b6efb.firstPlayFace = false;
					top.playerState = false;
					var _0x51e8ca = _0x3b6efb.jumpTimePointList;
					_0x5f4326 != -2 && typeof _0x51e8ca != 'undefined' && (_0x51e8ca.push(_0x5f4326), _0x3b6efb.jumpTimePointList = _0x51e8ca);
				}
			}, 1000);
		}
	}
}
function chapterPlayNextVideo(_0x3a67ed) {
	/\/studentstudy/.test(top.location.pathname) && (top.getChapterNextVideo && top.getChapterNextVideo(_0x3a67ed));
}
function markersPlayer(_0x46f388) {
	var _0x13071e = _0x46f388.getAttribute('data-marker-time');
	if (_0x13071e) {
		return playerTime(_0x13071e);
	}
}
function closeFullScreen() {
	$('.vjs-fullscreen-control').click();
}
function getMarkers() {
	return videojs('video').markers;
}
function playerTime(_0x36b6d2) {
	if (ff != 1) {
		return;
	}
	var _0x3bbc65 = videojs('video');
	return _0x3bbc65.currentTime(_0x36b6d2);
}
function playVideo() {
	var _0x4f437b = videojs('video');
	player.volume(0);
	player.on('loadstart', function () {
		_0x4f437b.play().catch(Ext.emptyFn);
	});
}
function reSizeIframe() {
	try {
		var _0x1bbbf6 = parseInt(Ext.fly(Ext.select('.main').elements[0]).getWidth()), _0xbfa14c = parseInt(_0x1bbbf6 / 16 * 9);
		Ext.fly('reader').setHeight(_0xbfa14c + 'px');
		var _0x144f06 = Ext.fly(Ext.select('.main').elements[0]).getHeight();
		Ext.fly(window.frameElement).setHeight(_0x144f06 + 'px');
	} catch (_0x234498) {
		console.log(_0x234498.message);
	}
}
function removeDownloadBtn() {
	Ext.select('.xl-chrome-ext-bar').remove();
}
Ext.onReady(function () {
	window.setInterval('reSizeIframe()', 200);
	window.setInterval('removeDownloadBtn()', 500);
	/\/studentstudy/.test(top.location.pathname) && ($('.writeNote').css('display', 'block'), $('.writeNote_vid').css('display', 'block'), Ext.select('.sp_function').setStyle('height', '66px'));
	$('.writeNote_vid_edit').click(function () {
		$('#type', parent.parent.document).val(1);
		$('#noteVideoName', parent.parent.document).val(videoName);
		var _0x388b16 = videojs('video'), _0x49a2d9 = parseInt(_0x388b16.currentTime()), _0x471fea = parseInt(_0x49a2d9 / 60);
		_0x471fea < 10 && (_0x471fea = '0' + _0x471fea.toString());
		var _0x4c7173 = parseInt(_0x49a2d9 % 60);
		_0x4c7173 < 10 && (_0x4c7173 = '0' + _0x4c7173.toString());
		$('.Note_name', parent.parent.document).html(videoName + ' ' + _0x471fea + ':' + _0x4c7173);
		$('.Note_name', parent.parent.document).css('display', 'block');
		$('#noteVideoTime', parent.parent.document).val(_0x49a2d9);
		$('#noteVideoJobId', parent.parent.document).val(videoJobId);
		$('#noteVideoObjectId', parent.parent.document).val(videoObjectId);
		parent.parent.getClazzNote && parent.parent.getClazzNote();
		parent.parent.changePan && parent.parent.changePan('3');
		$('.formTopic', parent.parent.document).size() > 0 && $('.formTopic', parent.parent.document).css('display', 'block');
	});
});