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
		var _0x1259b5 = Ext.fly(window.frameElement).prev();
		if (_0x1259b5 && _0x1259b5.hasCls('ans-job-icon')) {
			return !Ext.fly(window.frameElement).parent().hasCls('ans-job-finished');
		}
		return false;
	} catch (_0x12f86f) {
		console.log(_0x12f86f);
	}
	return false;
}
var isViturlEdit = false, ff = 1;
function proxy_completed() {
	ed_complete && (greenligth(), ed_complete());
}
function config(_0x2ccc34) {
	return window.frameElement.getAttribute(_0x2ccc34);
}
function getCookie(_0x5cb42c) {
	var _0x24e90a = document.cookie.split('; ');
	for (var _0x4ed5b4 = 0; _0x4ed5b4 < _0x24e90a.length; _0x4ed5b4++) {
		var _0x3c5456 = _0x24e90a[_0x4ed5b4].split('=');
		if (_0x3c5456[0] == _0x5cb42c) {
			return unescape(_0x3c5456[1]);
		}
	}
}
function showMoocPlayer(_0x6404bc) {
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
			var _0x1b2c58 = new MoocPlayer({
				'isSendLog': !!parent.AttachmentSetting && parent.AttachmentSetting.control,
				'data': _0x6404bc,
				'height': 540,
				'width': 676
			});
		});
	});
}
function bindVjsClick() {
	try {
		var _0x1ed1b5 = config('jobid') || '';
		if (_0x1ed1b5 != '' && window.parent.parent.location.href.indexOf('studentstudy') > -1) {
			var _0x55560b = $('.video-js .toolTipBox1'), _0x2b5830 = $('#tipDiv');
			_0x55560b.length === 0 && _0x2b5830.length > 0 && $('.video-js').prepend(_0x2b5830.html());
			if (!$('.toolTipBox1').is(':visible')) {
				$('.toolTipBox1').html($('#tipDiv .toolTipBox1').html());
				var _0x1b8e1e = $('#video_html5_api').height();
				$('.toolTipBox1').css('top', parseInt(_0x1b8e1e / 2) + 'px');
				$('.toolTipBox1').show();
				setTimeout(function () {
					$('.toolTipBox1').hide();
				}, 800);
			}
		}
	} catch (_0x15f244) {
		console.log(_0x15f244);
	}
}
function bindVjsRateClick() {
	try {
		var _0x2fd0e2 = $('.video-js .toolTipBox1'), _0x734316 = $('#tipDiv'), _0x2c1254 = '<div class="toolTipBox1" style="display: none"><i class="loadicon"><img width="100%" height="100%" src="/ananas/videoeditor/images/tips_pop.png"/></i>该视频教师已关闭倍速功能\uFF0C任务点完成后可倍速播放</div>', _0x5ecc69 = '<i class="loadicon"><img width="100%" height="100%" src="/ananas/videoeditor/images/tips_pop.png"/></i>该视频教师已关闭倍速功能\uFF0C任务点完成后可倍速播放';
		_0x2fd0e2.length === 0 && _0x734316.length > 0 ? $('.video-js').prepend(_0x2c1254) : $(_0x2fd0e2).html(_0x5ecc69);
		if (!$('.toolTipBox1').is(':visible')) {
			var _0x1c9c63 = $('#video_html5_api').height();
			$('.toolTipBox1').css('top', parseInt(_0x1c9c63 / 2) + 'px');
			$('.toolTipBox1').show();
			setTimeout(function () {
				$('.toolTipBox1').hide();
			}, 800);
		}
	} catch (_0x501ec3) {
		console.log(_0x501ec3);
	}
}
function showHTML5Player(_0x5617fd) {
	var _0x253f5e = '<div class="watermark"><p class="uname">' + _0x5617fd.studentName + '</p>' + '<p style="margin-top: 10px;" class="loginName">' + _0x5617fd.studentLoginName + '</p>' + '</div>';
	!_0x5617fd.showWatermark && (_0x253f5e = '');
	Ext.get('reader').setHTML('<video id="video" class="video-js vjs-default-skin vjs-big-play-centered"></video>' + _0x253f5e);
	new ans.VideoJs({
		'videojs': 'video',
		'params': _0x5617fd
	});
	if (typeof aplus_queue != 'undefined') {
		var _0x7fc6d4 = parent.AttachmentSetting;
		if (_0x7fc6d4) {
			var _0x2da1a7 = _0x7fc6d4.aplus_video_id, _0x362166 = _0x7fc6d4.aplus_resource_id, _0x5cb1ea = _0x7fc6d4.knowledgename, _0x44eb4e = _0x7fc6d4.coursename, _0x48fad0 = {
				'video_name': _0x5cb1ea,
				'video_id': _0x2da1a7,
				'resource_id': _0x362166,
				'resource_name': _0x44eb4e
			};
			$('.vjs-big-play-button')[0].addEventListener('click', function () {
				typeof aplus_queue != 'undefined' && aplus_queue.push({
					'action': 'aplus.record',
					'arguments': [
						'video_pybk_click',
						'CLK',
						_0x48fad0
					]
				});
			});
			$('.vjs-mute-control')[0].addEventListener('click', function () {
				!$(this).hasClass('vjs-vol-0') ? typeof aplus_queue != 'undefined' && aplus_queue.push({
					'action': 'aplus.record',
					'arguments': [
						'no_sound_click',
						'CLK',
						_0x48fad0
					]
				}) : typeof aplus_queue != 'undefined' && aplus_queue.push({
					'action': 'aplus.record',
					'arguments': [
						'enable_sound_click',
						'CLK',
						_0x48fad0
					]
				});
			});
			$('.vjs-volume-level')[0].addEventListener('mouseup', function () {
				typeof aplus_queue != 'undefined' && aplus_queue.push({
					'action': 'aplus.record',
					'arguments': [
						'volume_control_drag',
						'OTHER',
						_0x48fad0
					]
				});
			});
			$('.vjs-fullscreen-control')[0].addEventListener('click', function () {
				$(this).attr('title') == '全屏' ? typeof aplus_queue != 'undefined' && aplus_queue.push({
					'action': 'aplus.record',
					'arguments': [
						'full_screen_click',
						'CLK',
						_0x48fad0
					]
				}) : typeof aplus_queue != 'undefined' && aplus_queue.push({
					'action': 'aplus.record',
					'arguments': [
						'small_screen_click',
						'CLK',
						_0x48fad0
					]
				});
			});
		}
	}
	document.getElementsByTagName('video')[0].addEventListener('play', function () {
		var _0x437e56 = parent.document.getElementsByTagName('iframe');
		for (var _0x334ead = 0; _0x334ead < _0x437e56.length; _0x334ead++) {
			if (_0x437e56[_0x334ead].getAttribute('src').indexOf('microCourse') != -1) {
				var _0x8d633d = _0x437e56[_0x334ead].contentWindow.document.getElementsByTagName('iframe')[0].contentWindow;
				_0x8d633d.PageView.stopAll && _0x8d633d.PageView.stopAll();
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
			$(this).parents('#video').append(_0x253f5e);
		});
	});
	function _0x55e768() {
		var _0xd39e8d = $('#video').height(), _0x228205 = $('#sp_video_ppt_pic').height(), _0x129eb2 = (parseInt(_0xd39e8d) - 60 - parseInt(_0x228205)) / 2;
		$('#sp_video_ppt_pic').length > 0 && $('#sp_video_ppt_pic').hasClass('sp_ppt_pic_fullScreen') ? ($('#sp_video_ppt_pic').css('top', _0x129eb2 + 'px'), $('#sp_video_ppt_pic').css('left', '0')) : ($('#sp_video_ppt_pic').css('top', '0px'), $('#sp_video_ppt_pic').css('left', '0px'));
	}
	$('.vjs-fullscreen-control').click(function () {
		setTimeout(_0x55e768, 300);
	});
	$(window).resize(function () {
		setTimeout(_0x55e768, 500);
	});
}
var wrongObj = '', videoName = '', videoJobId = '', videoObjectId = '', mid = '';
function loadVideo() {
	var _0x120db1 = config('objectid'), _0x310e8a = Ext.get('reader');
	if (!_0x120db1) {
		_0x310e8a.setHTML('未找到该文件');
		return;
	}
	wrongObj = _0x120db1;
	videoObjectId = _0x120db1;
	var _0xe86676 = window.frameElement, _0x283b2b = Ext.decode(_0xe86676.getAttribute('data')), _0x2380d1 = parent.AttachmentSetting, _0xd200dc = parent.previewAttachments;
	mid = config('mid');
	var _0x10d7a = 0, _0x320b94 = config('vbegin'), _0xf1ac8c = config('vend'), _0x4a4e93 = config('jobid') || '', _0x5ac272 = _0x283b2b ? _0x283b2b.danmaku == null ? 0 : _0x283b2b.danmaku : 0, _0x688f1e = _0x2380d1 && _0x2380d1.videoTopicCloud, _0x33600a = _0x2380d1 && _0x2380d1.supportHeartbeat, _0x413353 = _0x2380d1 && _0x2380d1.requestConfigUrl, _0x39bbea = config('fastforward') == 'true' ? true : false, _0x238179 = config('switchwindow') == 'true' ? true : false, _0x5a13ce = Ext.get('note'), _0x2322df = Ext.get('hl'), _0x373b16 = Ext.get('note1-wrap'), _0x3b6f5b = Ext.get('note1'), _0x219d18 = null, _0x5404ef = _0x283b2b ? _0x283b2b.rt ? _0x283b2b.rt : 0.9 : 0.9;
	_0x4a4e93 == '' ? videoJobId = _0x283b2b && _0x283b2b['_jobid'] ? _0x283b2b['_jobid'] : '' : videoJobId = _0x4a4e93;
	var _0x27d000 = flashChecker().hasFlash, _0x51be88 = _0x2380d1 && _0x2380d1.defaults && _0x2380d1.defaults.isForScreen == 1;
	try {
		isTeacher = top.location.href.indexOf('teacherstudy') > 0 || top.location.href.indexOf('course/phone/chapterdata') > 0 || _0x51be88;
	} catch (_0x43b5b8) {
	}
	var _0x1f8491 = parent.isVideoVisibleName, _0x296e6e = _0x283b2b ? _0x283b2b.doublespeed != 0 ? 1 : 0 : 1;
	_0x283b2b.v_begin && _0x283b2b.v_end && _0x283b2b.pobjectid && (isViturlEdit = true);
	function _0x56d5c4(_0x4832d7) {
		if (_0x4832d7 && _0x4832d7.length == 0) {
			return;
		}
		if (Ext.select('.zsCloud_ul') != null) {
			var _0x4b4feb = '';
			for (var _0x5329af = 0, _0x24d99b = _0x4832d7.length; _0x5329af < _0x24d99b; _0x5329af++) {
				_0x4b4feb += '<li><span class=\'zsCloud_span topicId' + _0x4832d7[_0x5329af].id + '\' onclick=\'markersPlayer(this)\'>' + _0x4832d7[_0x5329af].name + ' </span></li>';
			}
			Ext.select('.zsCloud_ul').setHTML(_0x4b4feb);
			Ext.select('.zsCloud').setStyle('display', 'block');
		}
	}
	function _0x133710() {
		_0x10d7a <= 100 && _0x2322df.setWidth((_0x10d7a += 5) + '%');
		var _0x16e03e = getCookie('fid') || '';
		Ext.Ajax.request({
			'url': '/ananas/status/' + _0x120db1 + '?k=' + _0x16e03e + '&flag=normal',
			'success': function (_0x3ea7cb) {
				var _0x49ad31 = eval('(' + _0x3ea7cb.responseText + ')');
				Ext.get('loading').hide();
				switch (_0x49ad31.status) {
					case 'success':
						_0x373b16.remove(), videoName = _0x283b2b && _0x283b2b.name || '';
						var _0x5beff6 = 0;
						try {
							var _0x1dfa52 = _0x49ad31.duration;
							if (_0xd200dc && top.location.href.indexOf('nodedetailcontroller/visitnodedetail') > -1) {
								var _0x12a351 = _0x49ad31.objectid + '-' + (_0x320b94 ? _0x320b94 : 0) + '-' + (_0xf1ac8c ? _0xf1ac8c : _0x1dfa52) + '-' + _0x4a4e93;
								for (var _0x32d271 = 0; _0x32d271 < _0xd200dc.length; _0x32d271++) {
									var _0x481c17 = _0xd200dc[_0x32d271], _0x156a2e = 0, _0x11474e = _0x1dfa52;
									_0x481c17.property && (_0x481c17.property.vbegin && (_0x156a2e = _0x481c17.property.vbegin), _0x481c17.property.vend && (_0x11474e = _0x481c17.property.vend));
									!_0x481c17.jobid && (_0x481c17.jobid = '');
									var _0x2b79ee = _0x481c17.objectId + '-' + _0x156a2e + '-' + _0x11474e + '-' + _0x481c17.jobid;
									_0x12a351 == _0x2b79ee && (_0x5beff6 = _0x481c17.customType);
								}
							}
						} catch (_0xa32fa5) {
							console.log(_0xa32fa5);
						}
						var _0x285c68 = _0x49ad31.duration, _0x221d56 = {
							'enableFastForward': _0x39bbea ? 0 : 1,
							'enableSwitchWindow': _0x238179 ? 0 : 1,
							'duration': _0x285c68,
							'httpmd': _0x49ad31.httpmd,
							'http': _0x49ad31.http,
							'httphd': _0x49ad31.httphd,
							'httpshd': _0x49ad31.httpshd,
							'filename': _0x49ad31.filename,
							'dtoken': _0x49ad31.dtoken,
							'videoTopicCloud': _0x688f1e
						};
						window.duration = _0x285c68;
						_0x49ad31.cdn && (_0x221d56.cdn = _0x49ad31.cdn);
						if (document.cookie.length > 0) {
							_0x221d56.memberinfo = getCookie('memberinfo');
							_0x221d56.questionErrorLogUrl = ServerHosts.MASTER_HOST + '/question/addquestionerror';
						}
						mid && (_0x221d56.mid = mid);
						_0x49ad31.duration && (_0x221d56.videoTotalTime = _0x49ad31.duration);
						if (_0x2380d1 && _0x2380d1.isErya == 1) {
							_0x221d56.screenshot = 'https://p.ananas.chaoxing.com/star3/origin/a26e16b5ac8e769bba6bda57343b7d57.png';
						} else {
							_0x49ad31.screenshot && (_0x221d56.screenshot = _0x49ad31.screenshot);
						}
						_0x2380d1 && (_0x221d56.chapterVideoTranslate = _0x2380d1.chapterVideoTranslate);
						_0x49ad31.thumbnails && (_0x221d56.thumbnails = _0x49ad31.thumbnails);
						_0x49ad31.subobjectid && (_0x221d56.subobjectid = _0x49ad31.subobjectid);
						_0x320b94 && (_0x221d56.startTime = _0x320b94);
						_0xf1ac8c && (_0x221d56.endTime = _0xf1ac8c);
						_0x221d56.objectid = _0x120db1, _0x221d56.rt = _0x5404ef, _0x221d56.control = _0x2380d1 && _0x2380d1.control;
						isTeacher && (_0x221d56.control = false);
						var _0x22251d = {}, _0xac687e, _0x2c261b, _0x411a84, _0x31a3cf = '', _0x4f5e95 = '';
						if (_0x2380d1 && _0x2380d1.control) {
							var _0x2be8dd = _0x2380d1.attachments, _0x4d06b3 = _0x2380d1.defaults, _0x5a95d6 = _0x49ad31.objectid + '-' + (_0x320b94 ? _0x320b94 : 0) + '-' + (_0xf1ac8c ? _0xf1ac8c : _0x285c68) + '-' + _0x4a4e93;
							_0x4d06b3 && (_0x221d56.userid = _0x4d06b3.userid || '', _0x221d56.fid = _0x4d06b3.fid || '', _0x221d56.courseid = _0x4d06b3.courseid || '', _0x221d56.clazzId = _0x4d06b3.clazzId || '', _0x221d56.knowledgeid = _0x4d06b3.knowledgeid || '', _0x221d56.cookieFid = _0x4d06b3.cookieFid || '', _0x31a3cf = _0x4d06b3.username || '', _0x4f5e95 = _0x4d06b3.loginName || '');
							!isTeacher && (_0x221d56.studentName = _0x31a3cf, _0x221d56.studentLoginName = _0x4f5e95, _0x221d56.showWatermark = true);
							for (var _0x12f127 = 0; _0x12f127 < _0x2be8dd.length; _0x12f127++) {
								_0x22251d = _0x2be8dd[_0x12f127];
								_0x2c261b = 0;
								_0x411a84 = _0x285c68;
								_0x22251d.property && (_0x22251d.property.vbegin && (_0x2c261b = _0x22251d.property.vbegin), _0x22251d.property.vend && (_0x411a84 = _0x22251d.property.vend));
								!_0x22251d.jobid && (_0x22251d.jobid = '');
								_0xac687e = _0x22251d.objectId + '-' + _0x2c261b + '-' + _0x411a84 + '-' + _0x22251d.jobid;
								if (_0x5a95d6 == _0xac687e) {
									_0x221d56.videoEnc = _0x22251d.videoEnc || '';
									Ext.apply(_0x221d56, _0x2380d1.defaults);
									_0x5beff6 = _0x22251d.customType;
									var _0x54db9e = _0x22251d.begins ? parseInt(_0x22251d.begins) : 0;
									_0x54db9e > 0 && _0x49ad31.duration ? _0x221d56.begins = _0x54db9e > _0x49ad31.duration ? 0 : _0x54db9e : _0x221d56.begins = 0;
									var _0x3a3622 = _0x22251d.ends ? parseInt(_0x22251d.ends) : 0;
									if (_0x3a3622 > 0 && _0x49ad31.duration) {
										var _0x2d17de = _0x49ad31.duration - _0x3a3622;
										_0x221d56.ends = _0x2d17de < 0 ? 0 : _0x2d17de;
									} else {
										_0x221d56.ends = 0;
									}
									if (_0x221d56.ends < _0x221d56.begins) {
										_0x221d56.begins = 0;
										_0x221d56.ends = 0;
									}
									_0x221d56.headOffset = _0x22251d.headOffset ? Math.floor(parseInt(_0x22251d.headOffset) / 1000) : 0;
									_0x221d56.objectId = _0x22251d.objectId;
									_0x221d56.otherInfo = _0x22251d.otherInfo;
									_0x221d56.isPassed = _0x22251d.isPassed;
									_0x221d56.aId = _0x22251d.aid;
									_0x221d56.danmaku = _0x5ac272;
									_0x22251d.topicList && _0x56d5c4(_0x22251d.topicList);
									_0x221d56.jumpTimePointList = _0x22251d.jumpTimePointList;
									_0x22251d.property && _0x22251d.property.fastforward && _0x22251d.property.fastforward == 'true' && (_0x221d56.enableFastForward = 0);
									_0x22251d.property && typeof _0x22251d.property.doublespeed != 'undefined' && _0x22251d.property.doublespeed == 0 && (_0x221d56.doublespeed = 0, _0x296e6e = 0);
									var _0x1638c9 = _0x221d56.schooldoublespeed;
									typeof _0x1638c9 == 'undefined' || _0x1638c9 == 2 ? _0x221d56.doublespeed = _0x296e6e : _0x221d56.doublespeed = _0x1638c9;
									(!_0x22251d.job || isTeacher) && (_0x221d56.doublespeed = 1);
									_0x4a4e93 && (_0x221d56.jobid = _0x4a4e93, !_0x22251d.job && (!isTeacher && greenligth(), ed_complete = false, _0x221d56.enableFastForward = 1, _0x221d56.enableSwitchWindow = 1, _0x221d56.headOffset = 0));
									try {
										if (_0x33600a && top.location.href.indexOf('/studentstudy') > -1) {
											var _0x1ad276 = _0x221d56.courseid || 0, _0x4fccba = _0x221d56.clazzId || 0, _0x4a5597 = _0x221d56.knowledgeid || 0, _0x19fc05 = _0x221d56.cookieFid || 0, _0x321ae9 = _0x221d56.headOffset || 0, _0x27df96 = _0x221d56.userid || 0;
											Ext.Ajax.request({
												'url': _0x413353,
												'async': false,
												'params': {
													'uid': _0x27df96,
													'schoolId': _0x19fc05,
													'moocClassId': _0x4fccba,
													'moocCourseId': _0x1ad276,
													'chapterId': _0x4a5597,
													'objectId': _0x120db1,
													'videoProgress': _0x321ae9,
													'totalVideoDuration': _0x1dfa52,
													'enc': _0x221d56.videoEnc
												},
												'method': 'get',
												'success': function (_0x16e447) {
													var _0x4bdd27 = eval('(' + _0x16e447.responseText + ')');
													_0x4bdd27.result === 1 ? (_0x221d56.eventArray = _0x4bdd27.eventArray, _0x221d56.supportHeartbeat = true) : _0x221d56.supportHeartbeat = false;
												},
												'failure': function () {
													_0x221d56.supportHeartbeat = false;
												}
											});
										}
									} catch (_0x24c478) {
										console.log(_0x24c478);
									}
									_0x221d56.reportUrl = _0x221d56.reportUrl && _0x221d56.reportUrl.replace('http://', window.location.protocol + '//');
									window['_jobindex'] = _0x12f127;
									break;
								}
							}
						} else {
							var _0x1638c9 = _0x221d56.schooldoublespeed;
							typeof _0x1638c9 == 'undefined' || _0x1638c9 == 2 ? _0x221d56.doublespeed = _0x296e6e : _0x221d56.doublespeed = _0x1638c9;
						}
						var _0x329c12 = '', _0xd60517 = '';
						(top.location.href.indexOf('nodedetailcontroller/visitnodedetail') > -1 || top.location.href.indexOf('mycourse/teacherstudy') > -1) && parseInt(_0x5beff6) === 2 && (_0x329c12 = '<span style = "display: inline-block;width: 40px; height: 20px;font-size: 12px;background:#F9F9FA;border:1px solid #D5E2F1;border-radius:4px;text-align:center;line-height:20px;color: #6B89B3;position: absolute;right: 0; top: 0px;">动画</span>', _0xd60517 = '<span style ="display: inline-block;overflow: hidden;float: right;text-overflow: ellipsis;white-space: nowrap;width: 40px;height: 20px;font-size: 12px;background: #F9F9FA;border:1px solid #D5E2F1;border-radius:4px;text-align: center;line-height:20px;color:#6B89B3;right:0;top:0;">动画</span>');
						if (_0x1f8491 != 'false') {
							Ext.fly(window.frameElement).parent().first('.ans-job-icon') != null ? top.location.href.indexOf('nodedetailcontroller/visitnodedetail') > -1 ? Ext.fly(window.frameElement).parent().insertHtml('afterBegin', '<div title="' + videoName + '" style="width: 500px;display: inline-block;line-height: 23px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">' + videoName + '</div>' + _0xd60517) : (Ext.fly(window.frameElement).parent().first('.ans-job-icon').insertHtml('beforeEnd', '<span title="' + videoName + '" style="width: 500px;margin-left: 120px;display: inline-block;height: 23px;line-height: 23px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">' + videoName + '</span>' + _0x329c12), _0x329c12 != '' && Ext.fly(window.frameElement).parent().addCls('relativeClass')) : (Ext.fly(window.frameElement).parent().insertHtml('afterBegin', '<div title="' + videoName + '" style="width: 500px;display: inline-block;line-height: 23px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">' + videoName + '</div>' + _0xd60517), _0xd60517 != '' && Ext.fly(window.frameElement).parent().addCls('relativeClass'));
						} else {
							try {
								Ext.fly(window.frameElement).parent().first('.ans-job-icon') != null ? top.location.href.indexOf('nodedetailcontroller/visitnodedetail') > -1 ? _0xd60517 != '' && Ext.fly(window.frameElement).parent().insertHtml('afterBegin', _0xd60517) : _0x329c12 != '' && (Ext.fly(window.frameElement).parent().first('.ans-job-icon').insertHtml('beforeEnd', _0x329c12), Ext.fly(window.frameElement).parent().addCls('relativeClass')) : _0xd60517 != '' && (Ext.fly(window.frameElement).parent().insertHtml('afterBegin', _0xd60517), Ext.fly(window.frameElement).parent().addCls('relativeClass'));
							} catch (_0x2f9f3f) {
								console.log(_0x2f9f3f);
							}
						}
						if (_0x221d56.ignoreVideoCtrl == 1) {
							_0x221d56.enableFastForward = 1;
							_0x221d56.enableSwitchWindow = 1;
						}
						(!_0x221d56.control || isTeacher) && (ed_complete = false, _0x221d56.enableFastForward = 1, _0x221d56.enableSwitchWindow = 1, _0x221d56.headOffset = 0);
						(_0x221d56.isPassed || _0x221d56.headOffset > _0x221d56.videoTotalTime * 0.95) && (_0x221d56.headOffset = 0);
						_0x219d18 && clearInterval(_0x219d18), _0x221d56.isSupportFace = $('.maskDiv1', top.document).length > 0 && /\/studentstudy/.test(top.location.pathname) ? true : false, _0x221d56.isShowFaceCollection = /\/studentstudy/.test(top.location.pathname) && !Ext.fly(window.frameElement).parent().hasCls('ans-job-finished');
						if (supportH5Video()) {
							_0x283b2b.danmaku && (loadMultiFile([{
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
							ff = _0x221d56.enableFastForward;
							if (typeof aplus_queue != 'undefined') {
								_0x221d56.aplus_video_id = _0x2380d1.aplus_video_id;
								_0x221d56.aplus_resource_id = _0x2380d1.aplus_resource_id;
								_0x221d56.knowledgename = _0x2380d1.knowledgename;
								_0x221d56.coursename = _0x2380d1.coursename;
							}
							showHTML5Player(_0x221d56);
						} else {
							if (!_0x27d000) {
								var _0x39f91c = 'http://www.adobe.com/go/getflashplayer';
								Ext.get('reader').setHTML('您没有安装flashplayer\uFF0C请到<a href="' + _0x39f91c + '" target="_blank">www.adobe.com</a>下载安装\u3002<br/>如果已经安装请点击此处启用\uFF1A<object id="swf_jlxl1lfb" height="50" width="100" type="application/x-shockwave-flash" data="/ananas/modules/video/cxplayer/player_4.0.11.swf?v=20161025" style="border:#ccc 1px solid"><param name="quality" value="high"><param name="allowScriptAccess" value="always"><param name="wMode" value="transparent"><param name="align" value="middle"><param name="bgcolor" value="#000000"><param name="swLiveConnect" value="true"><param name="loop" value="true"><param name="play" value="true"><param name="DeviceFont" value="false"><param name="allowFullScreen" value="true"><param name="menu" value="true"></object>');
								return;
							}
							showMoocPlayer(_0x221d56);
						}
						sendReadZTMediaLog(0);
						break;
					case 'failed':
						_0x219d18 && clearInterval(_0x219d18), _0x373b16.remove(), _0x5a13ce.show();
						break;
					case 'waiting':
						_0x373b16.update('<div class="line1"><div class="line3"></div></div><p class="tipStyle making">视频正在转码\uFF0C您无需在此页面等待\u30109001\u3011</p>');
						break;
					case 'converting':
					case 'transfer':
						_0x373b16.update('<div class="line1"><div class="line2"></div></div><p class="tipStyle">视频上传中\u30109002\u3011</p>');
						break;
				}
			},
			'failure': function (_0x34a82c) {
				_0x34a82c.status == 0 ? (_0x219d18 && clearInterval(_0x219d18), _0x373b16.update('<div class="line1"><div class="line2"></div></div><p class="tipStyle">视频加载超时\uFF0C请刷新页面重试\u30109003\u3011</p>'), Ext.get('loading').hide()) : (_0x219d18 && clearInterval(_0x219d18), _0x373b16.update('<div class="line1"><div class="line3"></div></div><p class="tipStyle">视频加载失败\uFF0C请稍后再试\u30109004\u3011</p>'), Ext.get('loading').hide());
			}
		});
	}
	_0x133710();
}
function supportH5Video() {
	var _0x4e8f2f = function () {
		var _0x28f1ce = document.createElement('video');
		if (typeof _0x28f1ce.canPlayType == 'function') {
			var _0x59d94c = _0x28f1ce.canPlayType('video/mp4;codecs="avc1.42E01E,mp4a.40.2"');
			if (_0x59d94c.toLowerCase() == 'maybe' || _0x59d94c.toLowerCase() == 'probably') {
				return true;
			}
			var _0x59d94c = _0x28f1ce.canPlayType('video/mp4;codecs="avc1.64001E,mp4a.40.2"');
			if (_0x59d94c.toLowerCase() == 'maybe' || _0x59d94c.toLowerCase() == 'probably') {
				return true;
			}
		}
		return false;
	};
	if (Ext.isIE && Ext.isIE10m) {
		return false;
	}
	return _0x4e8f2f();
}
var playLogTimer;
function sendReadZTMediaLog(_0x1ca57a) {
	try {
		var _0x582ad5 = function (_0x458259) {
			var _0x3b5a03 = new RegExp('(^|&)' + _0x458259 + '=([^&]*)(&|$)'), _0x39040e = parent.location.search.substr(1).match(_0x3b5a03);
			if (_0x39040e != null) {
				return unescape(_0x39040e[2]);
			}
			return null;
		}, _0x2e3418 = parent.AttachmentSetting, _0x50414b = window.frameElement, _0x24e163 = _0x50414b.parentElement.parentElement.parentElement.getAttribute('kid');
		if (_0x24e163) {
			var _0x4639e5 = 'marg-' + _0x24e163;
			_0x2e3418 = top[_0x4639e5];
			typeof _0x2e3418 == 'string' && (_0x2e3418 = eval('(' + _0x2e3418 + ')'));
		}
		if (!_0x2e3418) {
			return;
		}
		var _0x807184 = _0x2e3418.defaults.isFiled, _0x197096 = _0x2e3418.defaults.state;
		if (_0x807184 == 1 || _0x197096 == 1) {
			return;
		}
		var _0x36e2f1 = top.dtype || 'Course';
		if (_0x36e2f1 == 'ZT' || _0x36e2f1 == 'HB' || _0x36e2f1 == 'MAG') {
			var _0x565330 = parent.location.search || '', _0x5e12a9 = getCookie('UID'), _0x5dfd7a = config('objectid'), _0x5aa86b = 0, _0xbb41c6 = _0x2e3418.defaults.courseid, _0x2668b7 = _0x2e3418.defaults.knowledgeid, _0x14b91d = window.duration, _0xe7cdf = _0x582ad5('_from_'), _0x31ed16 = _0x2e3418.attachments, _0x406b50 = '';
			if (_0x31ed16.length > 0) {
				for (var _0x496a88 = 0, _0x446a21 = _0x31ed16.length; _0x496a88 < _0x446a21; _0x496a88++) {
					var _0xda186b = _0x31ed16[_0x496a88], _0x5065ae = _0xda186b.objectId;
					if (_0x5065ae == _0x5dfd7a) {
						if (_0x1ca57a == 0) {
							_0x406b50 = _0xda186b.enc0;
						} else {
							_0x1ca57a == 1 ? _0x406b50 = _0xda186b.enc1 : _0x406b50 = _0xda186b.enc2;
						}
						break;
					}
				}
			}
			var _0x1c5bf0 = location.protocol + '//data-xxt.aichaoxing.com/analysis/datalog?s=' + _0xbb41c6 + '&c=' + _0x2668b7 + '&o=' + _0x5dfd7a + '&st=' + _0x1ca57a + '&m=' + _0x5aa86b + '&d=' + _0x14b91d * 1000 + '&u=' + _0x5e12a9 + '&_from_=' + _0xe7cdf + '&enc=' + _0x406b50, _0x19d258 = function () {
				Ext.Ajax.request({
					'url': _0x1c5bf0,
					'success': function (_0x59f58e) {
					}
				});
			};
			_0x19d258();
			if (_0x1ca57a == 1) {
				playLogTimer && clearInterval(playLogTimer);
				playLogTimer = setInterval(function () {
					_0x19d258();
				}, 5000);
			} else {
				_0x1ca57a == 2 && (playLogTimer && clearInterval(playLogTimer));
			}
		}
	} catch (_0x488b7b) {
	}
}
function receiveStudyLog() {
	try {
		var _0x46695f = parent.AttachmentSetting;
		if (!_0x46695f) {
			return;
		}
		if (_0x46695f && _0x46695f.defaults) {
			var _0x326f44 = _0x46695f.defaults;
			if (_0x326f44.chapterCapture != 1) {
				return;
			}
			var _0x261022 = '/keeper/api/receive-studylog', _0x27b6f4 = new Date().getTime(), _0x2a2511 = _0x326f44.courseid, _0x285508 = _0x326f44.clazzId, _0x4516d8 = _0x326f44.cpi, _0x30ba65 = _0x326f44.userid, _0x5dfd1a = _0x326f44.knowledgeid, _0x366184 = _0x326f44.fid, _0x48f8e1 = '', _0x15ea57 = config('objectid'), _0x560fbb = config('jobid') || '', _0x103602 = _0x46695f.attachments;
			if (_0x103602.length > 0) {
				for (var _0x29198d = 0, _0x32b964 = _0x103602.length; _0x29198d < _0x32b964; _0x29198d++) {
					var _0x15cc59 = _0x103602[_0x29198d], _0x13e942 = _0x15cc59.objectId;
					if (_0x13e942 == _0x15ea57) {
						_0x48f8e1 = _0x15cc59.aid;
						break;
					}
				}
			}
			var _0x5ecd8d = {
				'relationId': _0x48f8e1,
				'objectId': _0x15ea57,
				'userId': _0x30ba65,
				'knowledgeId': _0x5dfd1a,
				'fid': _0x366184,
				'jobId': _0x560fbb
			}, _0x1e2aa6 = {
				'courseId': _0x2a2511,
				'clazzId': _0x285508,
				'personId': _0x4516d8,
				'eventType': 4,
				'eventTime': _0x27b6f4,
				'data': _0x5ecd8d
			}, _0x5b42b3 = _0x326f44.mtEnc;
			Ext.Ajax.request({
				'method': 'post',
				'url': _0x261022,
				'params': {
					'log': JSON.stringify(_0x1e2aa6),
					'enc': _0x5b42b3
				},
				'success': function (_0x175a17) {
				}
			});
		}
	} catch (_0x548da9) {
	}
}
;
function createVideoTask() {
	if (isViturlEdit) {
		return;
	}
	var _0x29c424 = location.protocol + '//convertservice.chaoxing.com/video/createVideoTask?objectid=' + wrongObj;
	Ext.Ajax.request({
		'timeout': 3000,
		'type': 'get',
		'async': false,
		'url': _0x29c424,
		'dataType': 'jsonp',
		'jsonp': 'jsoncallback',
		'success': function (_0x436d69) {
		},
		'failure': function (_0x4f7b40) {
			console.log('创建任务失败');
		}
	});
}
Ext.onReady(function () {
	var _0x227b80 = parent.requestSatusResourceDownGrade;
	if (_0x227b80 && _0x227b80 == 1) {
		Ext.select('body').setHTML('<img src="/ananas/css/downgradeBlueTip.jpg" width="676" height="540">');
		return;
	}
	loadVideo();
});
var danmaku = {};
function getDanmuByTime(_0x1df102, _0xa50dd0) {
	var _0x4210fe = parent.AttachmentSetting;
	if (!_0x4210fe) {
		return;
	}
	if (_0x4210fe && _0x4210fe.defaults) {
		var _0x329664 = _0x4210fe.defaults, _0xa752f2 = _0x329664.courseid, _0x2fde46 = _0x329664.clazzId;
	} else {
		return;
	}
	if (_0x1df102 == 'pause') {
		danmaku = {};
		return;
	}
	_0x1df102 == 'play' && (danmaku = {});
	var _0x5a6c10 = config('mid'), _0x27b78f = {
		'courseid': _0xa752f2,
		'classid': _0x2fde46,
		'mid': _0x5a6c10,
		'timebegin': parseInt(_0xa50dd0),
		'timeend': parseInt(_0xa50dd0) + 59
	};
	Ext.Ajax.request({
		'url': '/videodanmaku/timerange-danmakulist',
		'method': 'get',
		'params': _0x27b78f,
		'success': function (_0x416007) {
			var _0x1349a5 = eval('(' + _0x416007.responseText + ')');
			if (_0x1349a5.status == 1) {
				var _0x5230b0 = _0x1349a5.data;
				for (var _0x15dc6b = 0; _0x15dc6b < _0x5230b0.length; _0x15dc6b++) {
					var _0xe8cc29 = _0x5230b0[_0x15dc6b].timeline;
					!danmaku[_0xe8cc29] && (danmaku[_0xe8cc29] = new Array());
					danmaku[_0xe8cc29].push(_0x5230b0[_0x15dc6b].content);
				}
				_0xa50dd0 == 0 && danmuPlay(0);
			} else {
				alert('服务异常,稍后再试!');
			}
		},
		'failure': function (_0x2f4ef3) {
			alert('服务异常,稍后再试!');
		}
	});
}
var count = 0, timeFlag = -1, currentTime = 0;
function shotdanmu(_0x13975a) {
	var _0xdd83b4 = _0x13975a.clientWidth;
	_0xdd83b4 = -parseInt(_0xdd83b4);
	var _0x5c0c2e = 'translateX(' + _0xdd83b4 + 'px)';
	setTimeout(function () {
		_0x13975a.style.transform = _0x5c0c2e;
		_0x13975a.className = 'danmuItem left';
	}, 500);
}
function danmuPlay(_0x28417a) {
	currentTime = _0x28417a;
	if (timeFlag == _0x28417a) {
		return;
	}
	timeFlag = _0x28417a;
	var _0x1221fd = danmaku[_0x28417a];
	if (!_0x1221fd) {
		return;
	}
	if (!$('.sp_tanmu').hasClass('sp_tanmu_blue')) {
		return;
	}
	var _0x39018c = '<div class="danmuItem right">';
	for (var _0x3b4178 = 0; _0x3b4178 < _0x1221fd.length; _0x3b4178++) {
		if (_0x1221fd[_0x3b4178] == '@zan@') {
			_0x39018c += '<span><i class="zanIcon"></i>赞</span>';
		} else {
			if (_0x1221fd[_0x3b4178] == '@不赞同@') {
				_0x39018c += '<span><i class="noZanIcon"></i>不赞同</span>';
			} else {
				if (_0x1221fd[_0x3b4178] == '@感动@') {
					_0x39018c += '<span><i class="moveIcon"></i>感动</span>';
				} else {
					if (_0x1221fd[_0x3b4178] == '@疑惑@') {
						_0x39018c += '<span><i class="doubtIcon"></i>疑惑</span>';
					} else {
						if (_0x1221fd[_0x3b4178] == '@献花@') {
							_0x39018c += '<span><i class="huaIcon"></i>献花</span>';
						} else {
							if (_0x1221fd[_0x3b4178] == '@鼓掌@') {
								_0x39018c += '<span><i class="clapIcon"></i>鼓掌</span>';
							} else {
								_0x1221fd[_0x3b4178] == '@有趣@' ? _0x39018c += '<span><i class="interestingIcon"></i>有趣</span>' : _0x39018c += '<span>' + _0x1221fd[_0x3b4178] + '</span>';
							}
						}
					}
				}
			}
		}
	}
	_0x39018c += '</div>';
	var _0x58d21c = count % 3, _0x298325 = new Ext.XTemplate(_0x39018c).append('channel_' + _0x58d21c);
	shotdanmu(_0x298325);
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
function checkJobCountLimit(_0x13c0d3, _0x1fa2bc) {
	/\/studentstudy/.test(top.location.pathname) && (_0x1fa2bc == 0 ? top.showJobLimitTip() : top.showVideoTimeLimitTip(), playStateV2 = setInterval(function () {
		top.resumePlay && (clearStateV2Interval(), _0x13c0d3.play(), top.resumePlay = false);
	}, 300));
}
;
function isStuViewPage() {
	return /\/studentstudy/.test(top.location.pathname);
}
function showPopIframe(_0x194fa7, _0x100978) {
	try {
		top.showCustomPop && (_0x100978.pause(), top.showCustomPop(_0x194fa7), popPlayState = setInterval(function () {
			top.popPlayState && (top.popPlayState = false, clearPopStateInterval(), _0x100978.eventCount <= 0 && _0x100978.play());
		}, 1000));
	} catch (_0x21a01) {
		console.log(_0x21a01);
	}
}
function startFaceCollection(_0x6517a0, _0x5c1e00, _0x3cfb74, _0x467a65) {
	if (/\/studentstudy/.test(top.location.pathname)) {
		var _0x3b4f48 = $('.maskDiv1', top.document).length;
		if (_0x3b4f48 > 0) {
			$('#videoJobId', top.document).val(videoJobId);
			$('#chapterVideoObjectId', top.document).val(videoObjectId);
			$('#collectionTime', top.document).val(_0x467a65);
			$('#mid', top.document).val(mid);
			top.getQRCodeURLShow1 && top.getQRCodeURLShow1();
			$('.maskDiv1', top.document).css('display', 'block');
			getPlayState = setInterval(function () {
				if (top.playerState) {
					clearStateInterval();
					_0x6517a0.play();
					_0x3cfb74.firstPlayFace = false;
					top.playerState = false;
					var _0x4edc4c = _0x3cfb74.jumpTimePointList;
					_0x467a65 != -2 && typeof _0x4edc4c != 'undefined' && (_0x4edc4c.push(_0x467a65), _0x3cfb74.jumpTimePointList = _0x4edc4c);
				}
			}, 1000);
		}
	}
}
function chapterPlayNextVideo(_0x1fa38c) {
	/\/studentstudy/.test(top.location.pathname) && (top.getChapterNextVideo && top.getChapterNextVideo(_0x1fa38c));
}
function markersPlayer(_0x2ef508) {
	var _0x30d60d = _0x2ef508.getAttribute('data-marker-time');
	if (_0x30d60d) {
		return playerTime(_0x30d60d);
	}
}
function closeFullScreen() {
	$('.vjs-fullscreen-control').click();
}
function getMarkers() {
	return videojs('video').markers;
}
function playerTime(_0x10f976) {
	if (ff != 1) {
		return;
	}
	var _0x2d8117 = videojs('video');
	return _0x2d8117.currentTime(_0x10f976);
}
function playVideo() {
	var _0x4c6160 = videojs('video');
	player.volume(0);
	player.on('loadstart', function () {
		_0x4c6160.play().catch(Ext.emptyFn);
	});
}
function reSizeIframe() {
	try {
		var _0xde99e3 = parseInt(Ext.fly(Ext.select('.main').elements[0]).getWidth()), _0x284a30 = parseInt(_0xde99e3 / 16 * 9);
		Ext.fly('reader').setHeight(_0x284a30 + 'px');
		var _0x2b7360 = Ext.fly(Ext.select('.main').elements[0]).getHeight();
		Ext.fly(window.frameElement).setHeight(_0x2b7360 + 'px');
	} catch (_0x40b443) {
		console.log(_0x40b443.message);
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
		var _0x22d653 = videojs('video'), _0x34d86a = parseInt(_0x22d653.currentTime()), _0x5cc662 = parseInt(_0x34d86a / 60);
		_0x5cc662 < 10 && (_0x5cc662 = '0' + _0x5cc662.toString());
		var _0x309b4b = parseInt(_0x34d86a % 60);
		_0x309b4b < 10 && (_0x309b4b = '0' + _0x309b4b.toString());
		$('.Note_name', parent.parent.document).html(videoName + ' ' + _0x5cc662 + ':' + _0x309b4b);
		$('.Note_name', parent.parent.document).css('display', 'block');
		$('#noteVideoTime', parent.parent.document).val(_0x34d86a);
		$('#noteVideoJobId', parent.parent.document).val(videoJobId);
		$('#noteVideoObjectId', parent.parent.document).val(videoObjectId);
		parent.parent.getClazzNote && parent.parent.getClazzNote();
		parent.parent.changePan && parent.parent.changePan('3');
		$('.formTopic', parent.parent.document).size() > 0 && $('.formTopic', parent.parent.document).css('display', 'block');
	});
});