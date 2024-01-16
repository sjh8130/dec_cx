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
		var _0x69c2b6 = Ext.fly(window.frameElement).prev();
		if (_0x69c2b6 && _0x69c2b6.hasCls('ans-job-icon')) {
			return !Ext.fly(window.frameElement).parent().hasCls('ans-job-finished');
		}
		return false;
	} catch (_0x5cdbad) {
		console.log(_0x5cdbad);
	}
	return false;
}
var isViturlEdit = false, ff = 1;
function proxy_completed() {
	ed_complete && (greenligth(), ed_complete());
}
function config(_0x3f02fb) {
	return window.frameElement.getAttribute(_0x3f02fb);
}
function getCookie(_0x504074) {
	var _0x234931 = document.cookie.split('; ');
	for (var _0x259a38 = 0; _0x259a38 < _0x234931.length; _0x259a38++) {
		var _0x1f84c4 = _0x234931[_0x259a38].split('=');
		if (_0x1f84c4[0] == _0x504074) {
			return unescape(_0x1f84c4[1]);
		}
	}
}
function showMoocPlayer(_0x36db54) {
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
			var _0x2db87e = new MoocPlayer({
				'isSendLog': !!parent.AttachmentSetting && parent.AttachmentSetting.control,
				'data': _0x36db54,
				'height': 540,
				'width': 676
			});
		});
	});
}
function bindVjsClick(_0x25bcf6) {
	try {
		var _0x4869ec = _0x25bcf6.enableFastForward, _0x4cd07f = _0x25bcf6.jobid;
		if (typeof _0x4869ec != 'undefined' && _0x4869ec === 0 && typeof _0x4cd07f != 'undefined' && _0x4cd07f != '' && window.parent.parent.location.href.indexOf('studentstudy') > -1) {
			var _0x2b26e4 = $('.video-js .toolTipBox1'), _0x2b76dd = $('#tipDiv');
			_0x2b26e4.length === 0 && _0x2b76dd.length > 0 && ($('.video-js').prepend(_0x2b76dd.html()), $('.vjs-progress-control').on('click', function () {
				!$('.toolTipBox1').is(':visible') && ($('.toolTipBox1').show(), setTimeout(function () {
					$('.toolTipBox1').hide();
				}, 800));
			}));
		}
	} catch (_0x9ac5dd) {
		console.log(_0x9ac5dd);
	}
}
function showHTML5Player(_0x5860d6) {
	Ext.get('reader').setHTML('<video id="video" class="video-js vjs-default-skin vjs-big-play-centered"></video>');
	new ans.VideoJs({
		'videojs': 'video',
		'params': _0x5860d6
	});
	if (typeof aplus_queue != 'undefined') {
		var _0x5fd06e = parent.AttachmentSetting;
		if (_0x5fd06e) {
			var _0x1d23e5 = _0x5fd06e.aplus_video_id, _0x53a784 = _0x5fd06e.aplus_resource_id, _0x38d5b9 = _0x5fd06e.knowledgename, _0x33d820 = _0x5fd06e.coursename, _0x4bf144 = {
				'video_name': _0x38d5b9,
				'video_id': _0x1d23e5,
				'resource_id': _0x53a784,
				'resource_name': _0x33d820
			};
			$('.vjs-big-play-button')[0].addEventListener('click', function () {
				typeof aplus_queue != 'undefined' && aplus_queue.push({
					'action': 'aplus.record',
					'arguments': [
						'video_pybk_click',
						'CLK',
						_0x4bf144
					]
				});
			});
			$('.vjs-mute-control')[0].addEventListener('click', function () {
				!$(this).hasClass('vjs-vol-0') ? typeof aplus_queue != 'undefined' && aplus_queue.push({
					'action': 'aplus.record',
					'arguments': [
						'no_sound_click',
						'CLK',
						_0x4bf144
					]
				}) : typeof aplus_queue != 'undefined' && aplus_queue.push({
					'action': 'aplus.record',
					'arguments': [
						'enable_sound_click',
						'CLK',
						_0x4bf144
					]
				});
			});
			$('.vjs-volume-level')[0].addEventListener('mouseup', function () {
				typeof aplus_queue != 'undefined' && aplus_queue.push({
					'action': 'aplus.record',
					'arguments': [
						'volume_control_drag',
						'OTHER',
						_0x4bf144
					]
				});
			});
			$('.vjs-fullscreen-control')[0].addEventListener('click', function () {
				$(this).attr('title') == '全屏' ? typeof aplus_queue != 'undefined' && aplus_queue.push({
					'action': 'aplus.record',
					'arguments': [
						'full_screen_click',
						'CLK',
						_0x4bf144
					]
				}) : typeof aplus_queue != 'undefined' && aplus_queue.push({
					'action': 'aplus.record',
					'arguments': [
						'small_screen_click',
						'CLK',
						_0x4bf144
					]
				});
			});
		}
	}
	document.getElementsByTagName('video')[0].addEventListener('play', function () {
		var _0x46a618 = parent.document.getElementsByTagName('iframe');
		for (var _0x166cb9 = 0; _0x166cb9 < _0x46a618.length; _0x166cb9++) {
			if (_0x46a618[_0x166cb9].getAttribute('src').indexOf('microCourse') != -1) {
				var _0xa8b6d2 = _0x46a618[_0x166cb9].contentWindow.document.getElementsByTagName('iframe')[0].contentWindow;
				_0xa8b6d2.PageView.stopAll && _0xa8b6d2.PageView.stopAll();
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
	function _0x5d9bc8() {
		var _0x3d8ebb = $('#video').height(), _0x95d2c4 = $('#sp_video_ppt_pic').height(), _0x12f2e9 = (parseInt(_0x3d8ebb) - 60 - parseInt(_0x95d2c4)) / 2;
		$('#sp_video_ppt_pic').length > 0 && $('#sp_video_ppt_pic').hasClass('sp_ppt_pic_fullScreen') ? ($('#sp_video_ppt_pic').css('top', _0x12f2e9 + 'px'), $('#sp_video_ppt_pic').css('left', '0')) : ($('#sp_video_ppt_pic').css('top', '0px'), $('#sp_video_ppt_pic').css('left', '0px'));
	}
	$('.vjs-fullscreen-control').click(function () {
		setTimeout(_0x5d9bc8, 300);
	});
	$(window).resize(function () {
		setTimeout(_0x5d9bc8, 500);
	});
	bindVjsClick(_0x5860d6);
}
var wrongObj = '', videoName = '', videoJobId = '', videoObjectId = '', mid = '';
function loadVideo() {
	var _0x342a70 = config('objectid'), _0x50a3f9 = Ext.get('reader');
	if (!_0x342a70) {
		_0x50a3f9.setHTML('未找到该文件');
		return;
	}
	wrongObj = _0x342a70;
	videoObjectId = _0x342a70;
	var _0x56432f = window.frameElement, _0x5ee660 = Ext.decode(_0x56432f.getAttribute('data')), _0x1f506f = parent.AttachmentSetting, _0x2454a7 = parent.previewAttachments;
	mid = config('mid');
	var _0xfa4256 = 0, _0x3b2d1e = config('vbegin'), _0x2d45b9 = config('vend'), _0x11ae61 = config('jobid') || '', _0x43d135 = _0x5ee660 ? _0x5ee660.danmaku == null ? 0 : _0x5ee660.danmaku : 0, _0x4080e2 = _0x1f506f && _0x1f506f.videoTopicCloud, _0x47ae98 = _0x1f506f && _0x1f506f.supportHeartbeat, _0x25b7e2 = _0x1f506f && _0x1f506f.requestConfigUrl, _0x362dc6 = config('fastforward') == 'true' ? true : false, _0x396be4 = config('switchwindow') == 'true' ? true : false, _0x57c89a = Ext.get('note'), _0x3d491d = Ext.get('hl'), _0x2135c0 = Ext.get('note1-wrap'), _0x64b398 = Ext.get('note1'), _0x38f3d8 = null, _0x500554 = _0x5ee660 ? _0x5ee660.rt ? _0x5ee660.rt : 0.9 : 0.9;
	_0x11ae61 == '' ? videoJobId = _0x5ee660 && _0x5ee660['_jobid'] ? _0x5ee660['_jobid'] : '' : videoJobId = _0x11ae61;
	var _0x460587 = flashChecker().hasFlash, _0x1bd705 = _0x1f506f && _0x1f506f.defaults && _0x1f506f.defaults.isForScreen == 1;
	try {
		isTeacher = top.location.href.indexOf('teacherstudy') > 0 || top.location.href.indexOf('course/phone/chapterdata') > 0 || _0x1bd705;
	} catch (_0x3d8e69) {
	}
	var _0xe4a781 = parent.isVideoVisibleName, _0x4a13bb = _0x5ee660 ? _0x5ee660.doublespeed != 0 ? 1 : 0 : 1;
	_0x5ee660.v_begin && _0x5ee660.v_end && _0x5ee660.pobjectid && (isViturlEdit = true);
	function _0x455616(_0x1df6a1) {
		if (_0x1df6a1 && _0x1df6a1.length == 0) {
			return;
		}
		if (Ext.select('.zsCloud_ul') != null) {
			var _0x230cf1 = '';
			for (var _0x29ffbe = 0, _0x232a70 = _0x1df6a1.length; _0x29ffbe < _0x232a70; _0x29ffbe++) {
				_0x230cf1 += '<li><span class=\'zsCloud_span topicId' + _0x1df6a1[_0x29ffbe].id + '\' onclick=\'markersPlayer(this)\'>' + _0x1df6a1[_0x29ffbe].name + ' </span></li>';
			}
			Ext.select('.zsCloud_ul').setHTML(_0x230cf1);
			Ext.select('.zsCloud').setStyle('display', 'block');
		}
	}
	function _0x337654() {
		_0xfa4256 <= 100 && _0x3d491d.setWidth((_0xfa4256 += 5) + '%');
		var _0x89adc9 = getCookie('fid') || '';
		Ext.Ajax.request({
			'url': '/ananas/status/' + _0x342a70 + '?k=' + _0x89adc9 + '&flag=normal',
			'success': function (_0x308b3d) {
				var _0x4676d7 = eval('(' + _0x308b3d.responseText + ')');
				Ext.get('loading').hide();
				switch (_0x4676d7.status) {
					case 'success':
						_0x2135c0.remove(), videoName = _0x5ee660 && _0x5ee660.name || '';
						var _0x213154 = 0;
						try {
							var _0x58d455 = _0x4676d7.duration;
							if (_0x2454a7 && top.location.href.indexOf('nodedetailcontroller/visitnodedetail') > -1) {
								var _0x4905d9 = _0x4676d7.objectid + '-' + (_0x3b2d1e ? _0x3b2d1e : 0) + '-' + (_0x2d45b9 ? _0x2d45b9 : _0x58d455) + '-' + _0x11ae61;
								for (var _0xf385df = 0; _0xf385df < _0x2454a7.length; _0xf385df++) {
									var _0x39bb0e = _0x2454a7[_0xf385df], _0xdd6b88 = 0, _0x353cea = _0x58d455;
									_0x39bb0e.property && (_0x39bb0e.property.vbegin && (_0xdd6b88 = _0x39bb0e.property.vbegin), _0x39bb0e.property.vend && (_0x353cea = _0x39bb0e.property.vend));
									!_0x39bb0e.jobid && (_0x39bb0e.jobid = '');
									var _0x3d2393 = _0x39bb0e.objectId + '-' + _0xdd6b88 + '-' + _0x353cea + '-' + _0x39bb0e.jobid;
									_0x4905d9 == _0x3d2393 && (_0x213154 = _0x39bb0e.customType);
								}
							}
						} catch (_0x3a9a9f) {
							console.log(_0x3a9a9f);
						}
						var _0x2721bf = _0x4676d7.duration, _0x5ca9e2 = {
							'enableFastForward': _0x362dc6 ? 0 : 1,
							'enableSwitchWindow': _0x396be4 ? 0 : 1,
							'duration': _0x2721bf,
							'httpmd': _0x4676d7.httpmd,
							'http': _0x4676d7.http,
							'httphd': _0x4676d7.httphd,
							'httpshd': _0x4676d7.httpshd,
							'filename': _0x4676d7.filename,
							'dtoken': _0x4676d7.dtoken,
							'videoTopicCloud': _0x4080e2
						};
						window.duration = _0x2721bf;
						_0x4676d7.cdn && (_0x5ca9e2.cdn = _0x4676d7.cdn);
						if (document.cookie.length > 0) {
							_0x5ca9e2.memberinfo = getCookie('memberinfo');
							_0x5ca9e2.questionErrorLogUrl = ServerHosts.MASTER_HOST + '/question/addquestionerror';
						}
						mid && (_0x5ca9e2.mid = mid);
						_0x4676d7.duration && (_0x5ca9e2.videoTotalTime = _0x4676d7.duration);
						if (_0x1f506f && _0x1f506f.isErya == 1) {
							_0x5ca9e2.screenshot = 'https://p.ananas.chaoxing.com/star3/origin/a26e16b5ac8e769bba6bda57343b7d57.png';
						} else {
							_0x4676d7.screenshot && (_0x5ca9e2.screenshot = _0x4676d7.screenshot);
						}
						_0x1f506f && (_0x5ca9e2.chapterVideoTranslate = _0x1f506f.chapterVideoTranslate);
						_0x4676d7.thumbnails && (_0x5ca9e2.thumbnails = _0x4676d7.thumbnails);
						_0x4676d7.subobjectid && (_0x5ca9e2.subobjectid = _0x4676d7.subobjectid);
						_0x3b2d1e && (_0x5ca9e2.startTime = _0x3b2d1e);
						_0x2d45b9 && (_0x5ca9e2.endTime = _0x2d45b9);
						_0x5ca9e2.objectid = _0x342a70, _0x5ca9e2.rt = _0x500554, _0x5ca9e2.control = _0x1f506f && _0x1f506f.control;
						isTeacher && (_0x5ca9e2.control = false);
						var _0x239bd8 = {}, _0x2541fd, _0x300425, _0x26034f;
						if (_0x1f506f && _0x1f506f.control) {
							var _0x40c8c4 = _0x1f506f.attachments, _0x4b2413 = _0x1f506f.defaults, _0x552b2e = _0x4676d7.objectid + '-' + (_0x3b2d1e ? _0x3b2d1e : 0) + '-' + (_0x2d45b9 ? _0x2d45b9 : _0x2721bf) + '-' + _0x11ae61;
							_0x4b2413 && (_0x5ca9e2.userid = _0x4b2413.userid || '', _0x5ca9e2.fid = _0x4b2413.fid || '', _0x5ca9e2.courseid = _0x4b2413.courseid || '', _0x5ca9e2.clazzId = _0x4b2413.clazzId || '', _0x5ca9e2.knowledgeid = _0x4b2413.knowledgeid || '', _0x5ca9e2.cookieFid = _0x4b2413.cookieFid || '');
							for (var _0x292191 = 0; _0x292191 < _0x40c8c4.length; _0x292191++) {
								_0x239bd8 = _0x40c8c4[_0x292191];
								_0x300425 = 0;
								_0x26034f = _0x2721bf;
								_0x239bd8.property && (_0x239bd8.property.vbegin && (_0x300425 = _0x239bd8.property.vbegin), _0x239bd8.property.vend && (_0x26034f = _0x239bd8.property.vend));
								!_0x239bd8.jobid && (_0x239bd8.jobid = '');
								_0x2541fd = _0x239bd8.objectId + '-' + _0x300425 + '-' + _0x26034f + '-' + _0x239bd8.jobid;
								if (_0x552b2e == _0x2541fd) {
									_0x5ca9e2.videoEnc = _0x239bd8.videoEnc || '';
									Ext.apply(_0x5ca9e2, _0x1f506f.defaults);
									_0x213154 = _0x239bd8.customType;
									var _0x169a80 = _0x239bd8.begins ? parseInt(_0x239bd8.begins) : 0;
									_0x169a80 > 0 && _0x4676d7.duration ? _0x5ca9e2.begins = _0x169a80 > _0x4676d7.duration ? 0 : _0x169a80 : _0x5ca9e2.begins = 0;
									var _0x553d43 = _0x239bd8.ends ? parseInt(_0x239bd8.ends) : 0;
									if (_0x553d43 > 0 && _0x4676d7.duration) {
										var _0x4f87b3 = _0x4676d7.duration - _0x553d43;
										_0x5ca9e2.ends = _0x4f87b3 < 0 ? 0 : _0x4f87b3;
									} else {
										_0x5ca9e2.ends = 0;
									}
									if (_0x5ca9e2.ends < _0x5ca9e2.begins) {
										_0x5ca9e2.begins = 0;
										_0x5ca9e2.ends = 0;
									}
									_0x5ca9e2.headOffset = _0x239bd8.headOffset ? Math.floor(parseInt(_0x239bd8.headOffset) / 1000) : 0;
									_0x5ca9e2.objectId = _0x239bd8.objectId;
									_0x5ca9e2.otherInfo = _0x239bd8.otherInfo;
									_0x5ca9e2.isPassed = _0x239bd8.isPassed;
									_0x5ca9e2.aId = _0x239bd8.aid;
									_0x5ca9e2.danmaku = _0x43d135;
									_0x239bd8.topicList && _0x455616(_0x239bd8.topicList);
									_0x5ca9e2.jumpTimePointList = _0x239bd8.jumpTimePointList;
									_0x239bd8.property && _0x239bd8.property.fastforward && _0x239bd8.property.fastforward == 'true' && (_0x5ca9e2.enableFastForward = 0);
									_0x239bd8.property && typeof _0x239bd8.property.doublespeed != 'undefined' && _0x239bd8.property.doublespeed == 0 && (_0x5ca9e2.doublespeed = 0, _0x4a13bb = 0);
									var _0x9ddaa = _0x5ca9e2.schooldoublespeed;
									typeof _0x9ddaa == 'undefined' || _0x9ddaa == 2 ? _0x5ca9e2.doublespeed = _0x4a13bb : _0x5ca9e2.doublespeed = _0x9ddaa;
									_0x11ae61 && (_0x5ca9e2.jobid = _0x11ae61, !_0x239bd8.job && (!isTeacher && greenligth(), ed_complete = false, _0x5ca9e2.enableFastForward = 1, _0x5ca9e2.enableSwitchWindow = 1, _0x5ca9e2.headOffset = 0));
									try {
										if (_0x47ae98 && top.location.href.indexOf('/studentstudy') > -1) {
											var _0x3b86b9 = _0x5ca9e2.courseid || 0, _0x54918a = _0x5ca9e2.clazzId || 0, _0x551303 = _0x5ca9e2.knowledgeid || 0, _0x51a28e = _0x5ca9e2.cookieFid || 0, _0x5d0e45 = _0x5ca9e2.headOffset || 0, _0x5c2d50 = _0x5ca9e2.userid || 0;
											Ext.Ajax.request({
												'url': _0x25b7e2,
												'async': false,
												'params': {
													'uid': _0x5c2d50,
													'schoolId': _0x51a28e,
													'moocClassId': _0x54918a,
													'moocCourseId': _0x3b86b9,
													'chapterId': _0x551303,
													'objectId': _0x342a70,
													'videoProgress': _0x5d0e45,
													'totalVideoDuration': _0x58d455,
													'enc': _0x5ca9e2.videoEnc
												},
												'method': 'get',
												'success': function (_0x57c33e) {
													var _0x3b023d = eval('(' + _0x57c33e.responseText + ')');
													_0x3b023d.result === 1 ? (_0x5ca9e2.eventArray = _0x3b023d.eventArray, _0x5ca9e2.supportHeartbeat = true) : _0x5ca9e2.supportHeartbeat = false;
												},
												'failure': function () {
													_0x5ca9e2.supportHeartbeat = false;
												}
											});
										}
									} catch (_0x479bfc) {
										console.log(_0x479bfc);
									}
									_0x5ca9e2.reportUrl = _0x5ca9e2.reportUrl && _0x5ca9e2.reportUrl.replace('http://', window.location.protocol + '//');
									window['_jobindex'] = _0x292191;
									break;
								}
							}
						} else {
							var _0x9ddaa = _0x5ca9e2.schooldoublespeed;
							typeof _0x9ddaa == 'undefined' || _0x9ddaa == 2 ? _0x5ca9e2.doublespeed = _0x4a13bb : _0x5ca9e2.doublespeed = _0x9ddaa;
						}
						var _0x24cc69 = '', _0x4c2f0f = '';
						(top.location.href.indexOf('nodedetailcontroller/visitnodedetail') > -1 || top.location.href.indexOf('mycourse/teacherstudy') > -1) && parseInt(_0x213154) === 2 && (_0x24cc69 = '<span style = "display: inline-block;width: 40px; height: 20px;font-size: 12px;background:#F9F9FA;border:1px solid #D5E2F1;border-radius:4px;text-align:center;line-height:20px;color: #6B89B3;position: absolute;right: 0; top: 0px;">动画</span>', _0x4c2f0f = '<span style ="display: inline-block;overflow: hidden;float: right;text-overflow: ellipsis;white-space: nowrap;width: 40px;height: 20px;font-size: 12px;background: #F9F9FA;border:1px solid #D5E2F1;border-radius:4px;text-align: center;line-height:20px;color:#6B89B3;right:0;top:0;">动画</span>');
						if (_0xe4a781 != 'false') {
							Ext.fly(window.frameElement).parent().first('.ans-job-icon') != null ? top.location.href.indexOf('nodedetailcontroller/visitnodedetail') > -1 ? Ext.fly(window.frameElement).parent().insertHtml('afterBegin', '<div title="' + videoName + '" style="width: 500px;display: inline-block;line-height: 23px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">' + videoName + '</div>' + _0x4c2f0f) : (Ext.fly(window.frameElement).parent().first('.ans-job-icon').insertHtml('beforeEnd', '<span title="' + videoName + '" style="width: 500px;margin-left: 120px;display: inline-block;height: 23px;line-height: 23px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">' + videoName + '</span>' + _0x24cc69), _0x24cc69 != '' && Ext.fly(window.frameElement).parent().addCls('relativeClass')) : (Ext.fly(window.frameElement).parent().insertHtml('afterBegin', '<div title="' + videoName + '" style="width: 500px;display: inline-block;line-height: 23px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">' + videoName + '</div>' + _0x4c2f0f), _0x4c2f0f != '' && Ext.fly(window.frameElement).parent().addCls('relativeClass'));
						} else {
							try {
								Ext.fly(window.frameElement).parent().first('.ans-job-icon') != null ? top.location.href.indexOf('nodedetailcontroller/visitnodedetail') > -1 ? _0x4c2f0f != '' && Ext.fly(window.frameElement).parent().insertHtml('afterBegin', _0x4c2f0f) : _0x24cc69 != '' && (Ext.fly(window.frameElement).parent().first('.ans-job-icon').insertHtml('beforeEnd', _0x24cc69), Ext.fly(window.frameElement).parent().addCls('relativeClass')) : _0x4c2f0f != '' && (Ext.fly(window.frameElement).parent().insertHtml('afterBegin', _0x4c2f0f), Ext.fly(window.frameElement).parent().addCls('relativeClass'));
							} catch (_0x2667ef) {
								console.log(_0x2667ef);
							}
						}
						if (_0x5ca9e2.ignoreVideoCtrl == 1) {
							_0x5ca9e2.enableFastForward = 1;
							_0x5ca9e2.enableSwitchWindow = 1;
						}
						(!_0x5ca9e2.control || isTeacher) && (ed_complete = false, _0x5ca9e2.enableFastForward = 1, _0x5ca9e2.enableSwitchWindow = 1, _0x5ca9e2.headOffset = 0);
						(_0x5ca9e2.isPassed || _0x5ca9e2.headOffset > _0x5ca9e2.videoTotalTime * 0.95) && (_0x5ca9e2.headOffset = 0);
						_0x38f3d8 && clearInterval(_0x38f3d8), _0x5ca9e2.isSupportFace = $('.maskDiv1', top.document).length > 0 && /\/studentstudy/.test(top.location.pathname) ? true : false, _0x5ca9e2.isShowFaceCollection = /\/studentstudy/.test(top.location.pathname) && !Ext.fly(window.frameElement).parent().hasCls('ans-job-finished');
						if (supportH5Video()) {
							_0x5ee660.danmaku && (loadMultiFile([{
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
							ff = _0x5ca9e2.enableFastForward;
							if (typeof aplus_queue != 'undefined') {
								_0x5ca9e2.aplus_video_id = _0x1f506f.aplus_video_id;
								_0x5ca9e2.aplus_resource_id = _0x1f506f.aplus_resource_id;
								_0x5ca9e2.knowledgename = _0x1f506f.knowledgename;
								_0x5ca9e2.coursename = _0x1f506f.coursename;
							}
							showHTML5Player(_0x5ca9e2);
						} else {
							if (!_0x460587) {
								var _0xdfc1aa = 'http://www.adobe.com/go/getflashplayer';
								Ext.get('reader').setHTML('您没有安装flashplayer\uFF0C请到<a href="' + _0xdfc1aa + '" target="_blank">www.adobe.com</a>下载安装\u3002<br/>如果已经安装请点击此处启用\uFF1A<object id="swf_jlxl1lfb" height="50" width="100" type="application/x-shockwave-flash" data="/ananas/modules/video/cxplayer/player_4.0.11.swf?v=20161025" style="border:#ccc 1px solid"><param name="quality" value="high"><param name="allowScriptAccess" value="always"><param name="wMode" value="transparent"><param name="align" value="middle"><param name="bgcolor" value="#000000"><param name="swLiveConnect" value="true"><param name="loop" value="true"><param name="play" value="true"><param name="DeviceFont" value="false"><param name="allowFullScreen" value="true"><param name="menu" value="true"></object>');
								return;
							}
							showMoocPlayer(_0x5ca9e2);
						}
						sendReadZTMediaLog(0);
						break;
					case 'failed':
						_0x38f3d8 && clearInterval(_0x38f3d8), _0x2135c0.remove(), _0x57c89a.show();
						break;
					case 'waiting':
						_0x2135c0.update('<div class="line1"><div class="line3"></div></div><p class="tipStyle making">视频正在转码\uFF0C您无需在此页面等待\u30109001\u3011</p>');
						break;
					case 'converting':
					case 'transfer':
						_0x2135c0.update('<div class="line1"><div class="line2"></div></div><p class="tipStyle">视频上传中\u30109002\u3011</p>');
						break;
				}
			},
			'failure': function (_0x4a53e2) {
				_0x4a53e2.status == 0 ? (_0x38f3d8 && clearInterval(_0x38f3d8), _0x2135c0.update('<div class="line1"><div class="line2"></div></div><p class="tipStyle">视频加载超时\uFF0C请刷新页面重试\u30109003\u3011</p>'), Ext.get('loading').hide()) : (_0x38f3d8 && clearInterval(_0x38f3d8), _0x2135c0.update('<div class="line1"><div class="line3"></div></div><p class="tipStyle">视频加载失败\uFF0C请稍后再试\u30109004\u3011</p>'), Ext.get('loading').hide());
			}
		});
	}
	_0x337654();
}
function supportH5Video() {
	var _0x31a165 = function () {
		var _0x31fe94 = document.createElement('video');
		if (typeof _0x31fe94.canPlayType == 'function') {
			var _0x418aa7 = _0x31fe94.canPlayType('video/mp4;codecs="avc1.42E01E,mp4a.40.2"');
			if (_0x418aa7.toLowerCase() == 'maybe' || _0x418aa7.toLowerCase() == 'probably') {
				return true;
			}
			var _0x418aa7 = _0x31fe94.canPlayType('video/mp4;codecs="avc1.64001E,mp4a.40.2"');
			if (_0x418aa7.toLowerCase() == 'maybe' || _0x418aa7.toLowerCase() == 'probably') {
				return true;
			}
		}
		return false;
	};
	if (Ext.isIE && Ext.isIE10m) {
		return false;
	}
	return _0x31a165();
}
var playLogTimer;
function sendReadZTMediaLog(_0x579be9) {
	try {
		var _0x3ed9cb = function (_0x1f8aff) {
			var _0x1ae086 = new RegExp('(^|&)' + _0x1f8aff + '=([^&]*)(&|$)'), _0x2220b6 = parent.location.search.substr(1).match(_0x1ae086);
			if (_0x2220b6 != null) {
				return unescape(_0x2220b6[2]);
			}
			return null;
		}, _0x19f7d7 = parent.AttachmentSetting, _0x573e2e = window.frameElement, _0x504851 = _0x573e2e.parentElement.parentElement.parentElement.getAttribute('kid');
		if (_0x504851) {
			var _0x963134 = 'marg-' + _0x504851;
			_0x19f7d7 = top[_0x963134];
			typeof _0x19f7d7 == 'string' && (_0x19f7d7 = eval('(' + _0x19f7d7 + ')'));
		}
		if (!_0x19f7d7) {
			return;
		}
		var _0x117a07 = _0x19f7d7.defaults.isFiled, _0x357da5 = _0x19f7d7.defaults.state;
		if (_0x117a07 == 1 || _0x357da5 == 1) {
			return;
		}
		var _0x1cb225 = top.dtype || 'Course';
		if (_0x1cb225 == 'ZT' || _0x1cb225 == 'HB' || _0x1cb225 == 'MAG') {
			var _0x3785fd = parent.location.search || '', _0x50ec29 = getCookie('UID'), _0xafadd6 = config('objectid'), _0x5ae897 = 0, _0x2f9e2d = _0x19f7d7.defaults.courseid, _0x2be530 = _0x19f7d7.defaults.knowledgeid, _0xe75f55 = window.duration, _0x3b2cdc = _0x3ed9cb('_from_'), _0x125bc0 = _0x19f7d7.attachments, _0x4dc19e = '';
			if (_0x125bc0.length > 0) {
				for (var _0x37bf6d = 0, _0xf7e4c8 = _0x125bc0.length; _0x37bf6d < _0xf7e4c8; _0x37bf6d++) {
					var _0x314ebc = _0x125bc0[_0x37bf6d], _0x4f0465 = _0x314ebc.objectId;
					if (_0x4f0465 == _0xafadd6) {
						if (_0x579be9 == 0) {
							_0x4dc19e = _0x314ebc.enc0;
						} else {
							_0x579be9 == 1 ? _0x4dc19e = _0x314ebc.enc1 : _0x4dc19e = _0x314ebc.enc2;
						}
						break;
					}
				}
			}
			var _0x3f028f = location.protocol + '//data-xxt.aichaoxing.com/analysis/datalog?s=' + _0x2f9e2d + '&c=' + _0x2be530 + '&o=' + _0xafadd6 + '&st=' + _0x579be9 + '&m=' + _0x5ae897 + '&d=' + _0xe75f55 * 1000 + '&u=' + _0x50ec29 + '&_from_=' + _0x3b2cdc + '&enc=' + _0x4dc19e, _0x129a51 = function () {
				Ext.Ajax.request({
					'url': _0x3f028f,
					'success': function (_0x37cf87) {
					}
				});
			};
			_0x129a51();
			if (_0x579be9 == 1) {
				playLogTimer && clearInterval(playLogTimer);
				playLogTimer = setInterval(function () {
					_0x129a51();
				}, 5000);
			} else {
				_0x579be9 == 2 && (playLogTimer && clearInterval(playLogTimer));
			}
		}
	} catch (_0x3bed2a) {
	}
}
function receiveStudyLog() {
	try {
		var _0xb377f = parent.AttachmentSetting;
		if (!_0xb377f) {
			return;
		}
		if (_0xb377f && _0xb377f.defaults) {
			var _0x1b66e7 = _0xb377f.defaults;
			if (_0x1b66e7.chapterCapture != 1) {
				return;
			}
			var _0x284356 = '/keeper/api/receive-studylog', _0x46a53e = new Date().getTime(), _0xe0eb12 = _0x1b66e7.courseid, _0x1bbc82 = _0x1b66e7.clazzId, _0x2fab2c = _0x1b66e7.cpi, _0x59ff7e = _0x1b66e7.userid, _0x39b9ba = _0x1b66e7.knowledgeid, _0x339eae = _0x1b66e7.fid, _0x52c074 = '', _0x499e0b = config('objectid'), _0x52b404 = config('jobid') || '', _0x526f54 = _0xb377f.attachments;
			if (_0x526f54.length > 0) {
				for (var _0x16a713 = 0, _0x4183da = _0x526f54.length; _0x16a713 < _0x4183da; _0x16a713++) {
					var _0x13c9d0 = _0x526f54[_0x16a713], _0x17d2b0 = _0x13c9d0.objectId;
					if (_0x17d2b0 == _0x499e0b) {
						_0x52c074 = _0x13c9d0.aid;
						break;
					}
				}
			}
			var _0x147a6e = {
				'relationId': _0x52c074,
				'objectId': _0x499e0b,
				'userId': _0x59ff7e,
				'knowledgeId': _0x39b9ba,
				'fid': _0x339eae,
				'jobId': _0x52b404
			}, _0x5d59c0 = {
				'courseId': _0xe0eb12,
				'clazzId': _0x1bbc82,
				'personId': _0x2fab2c,
				'eventType': 4,
				'eventTime': _0x46a53e,
				'data': _0x147a6e
			}, _0x6011da = _0x1b66e7.mtEnc;
			Ext.Ajax.request({
				'method': 'post',
				'url': _0x284356,
				'params': {
					'log': JSON.stringify(_0x5d59c0),
					'enc': _0x6011da
				},
				'success': function (_0x4697a2) {
				}
			});
		}
	} catch (_0x61bad2) {
	}
}
function createVideoTask() {
	if (isViturlEdit) {
		return;
	}
	var _0x34ff18 = location.protocol + '//convertservice.chaoxing.com/video/createVideoTask?objectid=' + wrongObj;
	Ext.Ajax.request({
		'timeout': 3000,
		'type': 'get',
		'async': false,
		'url': _0x34ff18,
		'dataType': 'jsonp',
		'jsonp': 'jsoncallback',
		'success': function (_0x143cc7) {
		},
		'failure': function (_0xd7c370) {
			console.log('创建任务失败');
		}
	});
}
Ext.onReady(function () {
	var _0x7f46d1 = parent.requestSatusResourceDownGrade;
	if (_0x7f46d1 && _0x7f46d1 == 1) {
		var _0xb5e29 = '<img src="/ananas/css/downgradeBlueTip.jpg" width="676" height="540">';
		Ext.select('body').setHTML(_0xb5e29);
		return;
	}
	loadVideo();
});
var danmaku = {};
function getDanmuByTime(_0xc1cc14, _0x3fa952) {
	var _0x5371b6 = parent.AttachmentSetting;
	if (!_0x5371b6) {
		return;
	}
	if (_0x5371b6 && _0x5371b6.defaults) {
		var _0x7a87df = _0x5371b6.defaults, _0x5d1fdf = _0x7a87df.courseid, _0x3a6ea5 = _0x7a87df.clazzId;
	} else {
		return;
	}
	if (_0xc1cc14 == 'pause') {
		danmaku = {};
		return;
	}
	_0xc1cc14 == 'play' && (danmaku = {});
	var _0x5b8360 = config('mid'), _0x123304 = {
		'courseid': _0x5d1fdf,
		'classid': _0x3a6ea5,
		'mid': _0x5b8360,
		'timebegin': parseInt(_0x3fa952),
		'timeend': parseInt(_0x3fa952) + 59
	};
	Ext.Ajax.request({
		'url': '/videodanmaku/timerange-danmakulist',
		'method': 'get',
		'params': _0x123304,
		'success': function (_0x2ec917) {
			var _0x41b1bf = eval('(' + _0x2ec917.responseText + ')');
			if (_0x41b1bf.status == 1) {
				var _0xf715c8 = _0x41b1bf.data;
				for (var _0x5ed30d = 0; _0x5ed30d < _0xf715c8.length; _0x5ed30d++) {
					var _0xb74390 = _0xf715c8[_0x5ed30d].timeline;
					!danmaku[_0xb74390] && (danmaku[_0xb74390] = new Array());
					danmaku[_0xb74390].push(_0xf715c8[_0x5ed30d].content);
				}
				_0x3fa952 == 0 && danmuPlay(0);
			} else {
				alert('服务异常,稍后再试!');
			}
		},
		'failure': function (_0xead0dd) {
			alert('服务异常,稍后再试!');
		}
	});
}
var count = 0, timeFlag = -1, currentTime = 0;
function shotdanmu(_0x4dd725) {
	var _0x41b0d3 = _0x4dd725.clientWidth;
	_0x41b0d3 = -parseInt(_0x41b0d3);
	var _0x4516f5 = 'translateX(' + _0x41b0d3 + 'px)';
	setTimeout(function () {
		_0x4dd725.style.transform = _0x4516f5;
		_0x4dd725.className = 'danmuItem left';
	}, 500);
}
function danmuPlay(_0x33de91) {
	currentTime = _0x33de91;
	if (timeFlag == _0x33de91) {
		return;
	}
	timeFlag = _0x33de91;
	var _0x1225fd = danmaku[_0x33de91];
	if (!_0x1225fd) {
		return;
	}
	if (!$('.mui-switch').hasClass('checked')) {
		return;
	}
	var _0x5ad961 = '<div class="danmuItem right">';
	for (var _0x581968 = 0; _0x581968 < _0x1225fd.length; _0x581968++) {
		if (_0x1225fd[_0x581968] == '@zan@') {
			_0x5ad961 += '<span><i class="zanIcon"></i>赞</span>';
		} else {
			if (_0x1225fd[_0x581968] == '@不赞同@') {
				_0x5ad961 += '<span><i class="noZanIcon"></i>不赞同</span>';
			} else {
				if (_0x1225fd[_0x581968] == '@感动@') {
					_0x5ad961 += '<span><i class="moveIcon"></i>感动</span>';
				} else {
					if (_0x1225fd[_0x581968] == '@疑惑@') {
						_0x5ad961 += '<span><i class="doubtIcon"></i>疑惑</span>';
					} else {
						if (_0x1225fd[_0x581968] == '@献花@') {
							_0x5ad961 += '<span><i class="huaIcon"></i>献花</span>';
						} else {
							if (_0x1225fd[_0x581968] == '@鼓掌@') {
								_0x5ad961 += '<span><i class="clapIcon"></i>鼓掌</span>';
							} else {
								_0x1225fd[_0x581968] == '@有趣@' ? _0x5ad961 += '<span><i class="interestingIcon"></i>有趣</span>' : _0x5ad961 += '<span>' + _0x1225fd[_0x581968] + '</span>';
							}
						}
					}
				}
			}
		}
	}
	_0x5ad961 += '</div>';
	var _0xf38b67 = count % 3, _0x19bd89 = new Ext.XTemplate(_0x5ad961).append('channel_' + _0xf38b67);
	shotdanmu(_0x19bd89);
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
function checkJobCountLimit(_0x1582a1, _0x4a19c4) {
	/\/studentstudy/.test(top.location.pathname) && (_0x4a19c4 == 0 ? top.showJobLimitTip() : top.showVideoTimeLimitTip(), playStateV2 = setInterval(function () {
		top.resumePlay && (clearStateV2Interval(), _0x1582a1.play(), top.resumePlay = false);
	}, 300));
}
function isStuViewPage() {
	return /\/studentstudy/.test(top.location.pathname);
}
function showPopIframe(_0x4e6dd1, _0x49bb33) {
	try {
		top.showCustomPop && (_0x49bb33.pause(), top.showCustomPop(_0x4e6dd1), popPlayState = setInterval(function () {
			top.popPlayState && (top.popPlayState = false, clearPopStateInterval(), _0x49bb33.eventCount <= 0 && _0x49bb33.play());
		}, 1000));
	} catch (_0x53077c) {
		console.log(_0x53077c);
	}
}
function startFaceCollection(_0x24a8ad, _0x484c6d, _0x43a1af, _0xe52147) {
	if (/\/studentstudy/.test(top.location.pathname)) {
		var _0x55e654 = $('.maskDiv1', top.document).length;
		if (_0x55e654 > 0) {
			$('#videoJobId', top.document).val(videoJobId);
			$('#chapterVideoObjectId', top.document).val(videoObjectId);
			$('#collectionTime', top.document).val(_0xe52147);
			$('#mid', top.document).val(mid);
			top.getQRCodeURLShow1 && top.getQRCodeURLShow1();
			$('.maskDiv1', top.document).css('display', 'block');
			getPlayState = setInterval(function () {
				if (top.playerState) {
					clearStateInterval();
					_0x24a8ad.play();
					_0x43a1af.firstPlayFace = false;
					top.playerState = false;
					var _0x19fd85 = _0x43a1af.jumpTimePointList;
					_0xe52147 != -2 && typeof _0x19fd85 != 'undefined' && (_0x19fd85.push(_0xe52147), _0x43a1af.jumpTimePointList = _0x19fd85);
				}
			}, 1000);
		}
	}
}
function chapterPlayNextVideo(_0x24da9) {
	/\/studentstudy/.test(top.location.pathname) && (top.getChapterNextVideo && top.getChapterNextVideo(_0x24da9));
}
function markersPlayer(_0x2ee9d4) {
	var _0x44b8c9 = _0x2ee9d4.getAttribute('data-marker-time');
	if (_0x44b8c9) {
		return playerTime(_0x44b8c9);
	}
}
function getMarkers() {
	return videojs('video').markers;
}
function playerTime(_0x1a2594) {
	if (ff != 1) {
		return;
	}
	var _0x1827d9 = videojs('video');
	return _0x1827d9.currentTime(_0x1a2594);
}
function playVideo() {
	var _0x5a01e7 = videojs('video');
	player.volume(0);
	player.on('loadstart', function () {
		_0x5a01e7.play().catch(Ext.emptyFn);
	});
}
function reSizeIframe() {
	try {
		var _0x23d15d = Ext.fly(Ext.select('.main').elements[0]).getHeight();
		Ext.fly(window.frameElement).setHeight(_0x23d15d + 'px');
	} catch (_0x238d47) {
		console.log(_0x238d47.message);
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
		var _0x28a42b = videojs('video'), _0x54ff59 = parseInt(_0x28a42b.currentTime()), _0x218e3b = parseInt(_0x54ff59 / 60);
		_0x218e3b < 10 && (_0x218e3b = '0' + _0x218e3b.toString());
		var _0x50f053 = parseInt(_0x54ff59 % 60);
		_0x50f053 < 10 && (_0x50f053 = '0' + _0x50f053.toString());
		$('.Note_name', parent.parent.document).html(videoName + ' ' + _0x218e3b + ':' + _0x50f053);
		$('.Note_name', parent.parent.document).css('display', 'block');
		$('#noteVideoTime', parent.parent.document).val(_0x54ff59);
		$('#noteVideoJobId', parent.parent.document).val(videoJobId);
		$('#noteVideoObjectId', parent.parent.document).val(videoObjectId);
		parent.parent.getClazzNote && parent.parent.getClazzNote();
		parent.parent.changePan && parent.parent.changePan('3');
		$('.formTopic', parent.parent.document).size() > 0 && $('.formTopic', parent.parent.document).css('display', 'block');
	});
});