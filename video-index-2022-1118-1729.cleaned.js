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
		var _0x15cb72 = Ext.fly(window.frameElement).prev();
		if (_0x15cb72 && _0x15cb72.hasCls('ans-job-icon')) {
			return !Ext.fly(window.frameElement).parent().hasCls('ans-job-finished');
		}
		return false;
	} catch (_0x33d9d5) {
		console.log(_0x33d9d5);
	}
	return false;
}
var isViturlEdit = false, ff = 1;
function proxy_completed() {
	ed_complete && (greenligth(), ed_complete());
}
function config(_0x5b324f) {
	return window.frameElement.getAttribute(_0x5b324f);
}
function getCookie(_0x41504f) {
	var _0x298a5d = document.cookie.split('; ');
	for (var _0x463b70 = 0; _0x463b70 < _0x298a5d.length; _0x463b70++) {
		var _0x169b45 = _0x298a5d[_0x463b70].split('=');
		if (_0x169b45[0] == _0x41504f) {
			return unescape(_0x169b45[1]);
		}
	}
}
function showMoocPlayer(_0xac955d) {
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
			var _0x15ce91 = new MoocPlayer({
				'isSendLog': !!parent.AttachmentSetting && parent.AttachmentSetting.control,
				'data': _0xac955d,
				'height': 540,
				'width': 676
			});
		});
	});
}
function bindVjsClick(_0x49a4e5) {
	try {
		var _0x4453da = _0x49a4e5.enableFastForward, _0x386da0 = _0x49a4e5.jobid;
		if (typeof _0x4453da != 'undefined' && _0x4453da === 0 && typeof _0x386da0 != 'undefined' && _0x386da0 != '' && window.parent.parent.location.href.indexOf('studentstudy') > -1) {
			var _0xb94ca6 = $('.video-js .toolTipBox1'), _0x3cc9d2 = $('#tipDiv');
			_0xb94ca6.length === 0 && _0x3cc9d2.length > 0 && ($('.video-js').prepend(_0x3cc9d2.html()), $('.vjs-progress-control').on('click', function () {
				if (!$('.toolTipBox1').is(':visible')) {
					$('.toolTipBox1').html($('#tipDiv .toolTipBox1').html());
					var _0x2c733c = $('#video_html5_api').height();
					$('.toolTipBox1').css('top', parseInt(_0x2c733c / 2) + 'px');
					$('.toolTipBox1').show();
					setTimeout(function () {
						$('.toolTipBox1').hide();
					}, 800);
				}
			}));
		}
	} catch (_0xc9b838) {
		console.log(_0xc9b838);
	}
}
function bindVjsRateClick() {
	try {
		var _0xf792d9 = $('.video-js .toolTipBox1'), _0x2051a0 = $('#tipDiv'), _0xe4b6de = '<div class="toolTipBox1" style="display: none"><i class="loadicon"><img width="100%" height="100%" src="/ananas/videoeditor/images/tips_pop.png"/></i>该视频教师已关闭倍速功能\uFF0C任务点完成后可倍速播放</div>', _0x172b49 = '<i class="loadicon"><img width="100%" height="100%" src="/ananas/videoeditor/images/tips_pop.png"/></i>该视频教师已关闭倍速功能\uFF0C任务点完成后可倍速播放';
		_0xf792d9.length === 0 && _0x2051a0.length > 0 ? $('.video-js').prepend(_0xe4b6de) : $(_0xf792d9).html(_0x172b49);
		if (!$('.toolTipBox1').is(':visible')) {
			var _0x17f53d = $('#video_html5_api').height();
			$('.toolTipBox1').css('top', parseInt(_0x17f53d / 2) + 'px');
			$('.toolTipBox1').show();
			setTimeout(function () {
				$('.toolTipBox1').hide();
			}, 800);
		}
	} catch (_0x2fd5ad) {
		console.log(_0x2fd5ad);
	}
}
function showHTML5Player(_0x2c795e) {
	Ext.get('reader').setHTML('<video id="video" class="video-js vjs-default-skin vjs-big-play-centered"></video>');
	new ans.VideoJs({
		'videojs': 'video',
		'params': _0x2c795e
	});
	if (typeof aplus_queue != 'undefined') {
		var _0x124491 = parent.AttachmentSetting;
		if (_0x124491) {
			var _0x3f5731 = _0x124491.aplus_video_id, _0x2e0634 = _0x124491.aplus_resource_id, _0x33a251 = _0x124491.knowledgename, _0x38d420 = _0x124491.coursename, _0x323c42 = {
				'video_name': _0x33a251,
				'video_id': _0x3f5731,
				'resource_id': _0x2e0634,
				'resource_name': _0x38d420
			};
			$('.vjs-big-play-button')[0].addEventListener('click', function () {
				typeof aplus_queue != 'undefined' && aplus_queue.push({
					'action': 'aplus.record',
					'arguments': [
						'video_pybk_click',
						'CLK',
						_0x323c42
					]
				});
			});
			$('.vjs-mute-control')[0].addEventListener('click', function () {
				!$(this).hasClass('vjs-vol-0') ? typeof aplus_queue != 'undefined' && aplus_queue.push({
					'action': 'aplus.record',
					'arguments': [
						'no_sound_click',
						'CLK',
						_0x323c42
					]
				}) : typeof aplus_queue != 'undefined' && aplus_queue.push({
					'action': 'aplus.record',
					'arguments': [
						'enable_sound_click',
						'CLK',
						_0x323c42
					]
				});
			});
			$('.vjs-volume-level')[0].addEventListener('mouseup', function () {
				typeof aplus_queue != 'undefined' && aplus_queue.push({
					'action': 'aplus.record',
					'arguments': [
						'volume_control_drag',
						'OTHER',
						_0x323c42
					]
				});
			});
			$('.vjs-fullscreen-control')[0].addEventListener('click', function () {
				$(this).attr('title') == '全屏' ? typeof aplus_queue != 'undefined' && aplus_queue.push({
					'action': 'aplus.record',
					'arguments': [
						'full_screen_click',
						'CLK',
						_0x323c42
					]
				}) : typeof aplus_queue != 'undefined' && aplus_queue.push({
					'action': 'aplus.record',
					'arguments': [
						'small_screen_click',
						'CLK',
						_0x323c42
					]
				});
			});
		}
	}
	document.getElementsByTagName('video')[0].addEventListener('play', function () {
		var _0x1c35fe = parent.document.getElementsByTagName('iframe');
		for (var _0x384c43 = 0; _0x384c43 < _0x1c35fe.length; _0x384c43++) {
			if (_0x1c35fe[_0x384c43].getAttribute('src').indexOf('microCourse') != -1) {
				var _0x50b5b2 = _0x1c35fe[_0x384c43].contentWindow.document.getElementsByTagName('iframe')[0].contentWindow;
				_0x50b5b2.PageView.stopAll && _0x50b5b2.PageView.stopAll();
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
	});
	function _0x4af20b() {
		var _0x2edd6c = $('#video').height(), _0x1dd2d0 = $('#sp_video_ppt_pic').height(), _0x3264c3 = (parseInt(_0x2edd6c) - 60 - parseInt(_0x1dd2d0)) / 2;
		$('#sp_video_ppt_pic').length > 0 && $('#sp_video_ppt_pic').hasClass('sp_ppt_pic_fullScreen') ? ($('#sp_video_ppt_pic').css('top', _0x3264c3 + 'px'), $('#sp_video_ppt_pic').css('left', '0')) : ($('#sp_video_ppt_pic').css('top', '0px'), $('#sp_video_ppt_pic').css('left', '0px'));
	}
	$('.vjs-fullscreen-control').click(function () {
		setTimeout(_0x4af20b, 300);
	});
	$(window).resize(function () {
		setTimeout(_0x4af20b, 500);
	});
	bindVjsClick(_0x2c795e);
}
var wrongObj = '', videoName = '', videoJobId = '', videoObjectId = '', mid = '';
function loadVideo() {
	var _0x424116 = config('objectid'), _0x2b0e11 = Ext.get('reader');
	if (!_0x424116) {
		_0x2b0e11.setHTML('未找到该文件');
		return;
	}
	wrongObj = _0x424116;
	videoObjectId = _0x424116;
	var _0x4f0b58 = window.frameElement, _0x27eb03 = Ext.decode(_0x4f0b58.getAttribute('data')), _0x1d4654 = parent.AttachmentSetting, _0x2f6df0 = parent.previewAttachments;
	mid = config('mid');
	var _0x3c1430 = 0, _0xde09c2 = config('vbegin'), _0x350a2a = config('vend'), _0x938936 = config('jobid') || '', _0x539155 = _0x27eb03 ? _0x27eb03.danmaku == null ? 0 : _0x27eb03.danmaku : 0, _0x2103be = _0x1d4654 && _0x1d4654.videoTopicCloud, _0x6cceff = _0x1d4654 && _0x1d4654.supportHeartbeat, _0x442e4c = _0x1d4654 && _0x1d4654.requestConfigUrl, _0x497c65 = config('fastforward') == 'true' ? true : false, _0x50fcfa = config('switchwindow') == 'true' ? true : false, _0x43831d = Ext.get('note'), _0x512fba = Ext.get('hl'), _0x4ece16 = Ext.get('note1-wrap'), _0x456789 = Ext.get('note1'), _0x4c643a = null, _0x2ae138 = _0x27eb03 ? _0x27eb03.rt ? _0x27eb03.rt : 0.9 : 0.9;
	_0x938936 == '' ? videoJobId = _0x27eb03 && _0x27eb03['_jobid'] ? _0x27eb03['_jobid'] : '' : videoJobId = _0x938936;
	var _0x42d775 = flashChecker().hasFlash, _0x1c56a4 = _0x1d4654 && _0x1d4654.defaults && _0x1d4654.defaults.isForScreen == 1;
	try {
		isTeacher = top.location.href.indexOf('teacherstudy') > 0 || top.location.href.indexOf('course/phone/chapterdata') > 0 || _0x1c56a4;
	} catch (_0x7e0c7c) {
	}
	var _0xcaaf4f = parent.isVideoVisibleName, _0x1444c6 = _0x27eb03 ? _0x27eb03.doublespeed != 0 ? 1 : 0 : 1;
	_0x27eb03.v_begin && _0x27eb03.v_end && _0x27eb03.pobjectid && (isViturlEdit = true);
	function _0x2c1da1(_0x457181) {
		if (_0x457181 && _0x457181.length == 0) {
			return;
		}
		if (Ext.select('.zsCloud_ul') != null) {
			var _0x2f64ca = '';
			for (var _0x2d4da0 = 0, _0x39f0e4 = _0x457181.length; _0x2d4da0 < _0x39f0e4; _0x2d4da0++) {
				_0x2f64ca += '<li><span class=\'zsCloud_span topicId' + _0x457181[_0x2d4da0].id + '\' onclick=\'markersPlayer(this)\'>' + _0x457181[_0x2d4da0].name + ' </span></li>';
			}
			Ext.select('.zsCloud_ul').setHTML(_0x2f64ca);
			Ext.select('.zsCloud').setStyle('display', 'block');
		}
	}
	function _0x5be775() {
		_0x3c1430 <= 100 && _0x512fba.setWidth((_0x3c1430 += 5) + '%');
		var _0x1946c8 = getCookie('fid') || '';
		Ext.Ajax.request({
			'url': '/ananas/status/' + _0x424116 + '?k=' + _0x1946c8 + '&flag=normal',
			'success': function (_0x173b72) {
				var _0x572dc9 = eval('(' + _0x173b72.responseText + ')');
				Ext.get('loading').hide();
				switch (_0x572dc9.status) {
					case 'success':
						_0x4ece16.remove(), videoName = _0x27eb03 && _0x27eb03.name || '';
						var _0x30c3dd = 0;
						try {
							var _0x48c1ab = _0x572dc9.duration;
							if (_0x2f6df0 && top.location.href.indexOf('nodedetailcontroller/visitnodedetail') > -1) {
								var _0x187845 = _0x572dc9.objectid + '-' + (_0xde09c2 ? _0xde09c2 : 0) + '-' + (_0x350a2a ? _0x350a2a : _0x48c1ab) + '-' + _0x938936;
								for (var _0x5b32fb = 0; _0x5b32fb < _0x2f6df0.length; _0x5b32fb++) {
									var _0x7b780f = _0x2f6df0[_0x5b32fb], _0x61ef9b = 0, _0x135b80 = _0x48c1ab;
									_0x7b780f.property && (_0x7b780f.property.vbegin && (_0x61ef9b = _0x7b780f.property.vbegin), _0x7b780f.property.vend && (_0x135b80 = _0x7b780f.property.vend));
									!_0x7b780f.jobid && (_0x7b780f.jobid = '');
									var _0x51566c = _0x7b780f.objectId + '-' + _0x61ef9b + '-' + _0x135b80 + '-' + _0x7b780f.jobid;
									_0x187845 == _0x51566c && (_0x30c3dd = _0x7b780f.customType);
								}
							}
						} catch (_0x462bcc) {
							console.log(_0x462bcc);
						}
						var _0x1e3a97 = _0x572dc9.duration, _0x451be7 = {
							'enableFastForward': _0x497c65 ? 0 : 1,
							'enableSwitchWindow': _0x50fcfa ? 0 : 1,
							'duration': _0x1e3a97,
							'httpmd': _0x572dc9.httpmd,
							'http': _0x572dc9.http,
							'httphd': _0x572dc9.httphd,
							'httpshd': _0x572dc9.httpshd,
							'filename': _0x572dc9.filename,
							'dtoken': _0x572dc9.dtoken,
							'videoTopicCloud': _0x2103be
						};
						window.duration = _0x1e3a97;
						_0x572dc9.cdn && (_0x451be7.cdn = _0x572dc9.cdn);
						if (document.cookie.length > 0) {
							_0x451be7.memberinfo = getCookie('memberinfo');
							_0x451be7.questionErrorLogUrl = ServerHosts.MASTER_HOST + '/question/addquestionerror';
						}
						mid && (_0x451be7.mid = mid);
						_0x572dc9.duration && (_0x451be7.videoTotalTime = _0x572dc9.duration);
						if (_0x1d4654 && _0x1d4654.isErya == 1) {
							_0x451be7.screenshot = 'https://p.ananas.chaoxing.com/star3/origin/a26e16b5ac8e769bba6bda57343b7d57.png';
						} else {
							_0x572dc9.screenshot && (_0x451be7.screenshot = _0x572dc9.screenshot);
						}
						_0x1d4654 && (_0x451be7.chapterVideoTranslate = _0x1d4654.chapterVideoTranslate);
						_0x572dc9.thumbnails && (_0x451be7.thumbnails = _0x572dc9.thumbnails);
						_0x572dc9.subobjectid && (_0x451be7.subobjectid = _0x572dc9.subobjectid);
						_0xde09c2 && (_0x451be7.startTime = _0xde09c2);
						_0x350a2a && (_0x451be7.endTime = _0x350a2a);
						_0x451be7.objectid = _0x424116, _0x451be7.rt = _0x2ae138, _0x451be7.control = _0x1d4654 && _0x1d4654.control;
						isTeacher && (_0x451be7.control = false);
						var _0x47aac6 = {}, _0x14e024, _0x5d0d03, _0x36dd10;
						if (_0x1d4654 && _0x1d4654.control) {
							var _0x3db104 = _0x1d4654.attachments, _0x58537e = _0x1d4654.defaults, _0x9849ed = _0x572dc9.objectid + '-' + (_0xde09c2 ? _0xde09c2 : 0) + '-' + (_0x350a2a ? _0x350a2a : _0x1e3a97) + '-' + _0x938936;
							_0x58537e && (_0x451be7.userid = _0x58537e.userid || '', _0x451be7.fid = _0x58537e.fid || '', _0x451be7.courseid = _0x58537e.courseid || '', _0x451be7.clazzId = _0x58537e.clazzId || '', _0x451be7.knowledgeid = _0x58537e.knowledgeid || '', _0x451be7.cookieFid = _0x58537e.cookieFid || '');
							for (var _0xf6ae1 = 0; _0xf6ae1 < _0x3db104.length; _0xf6ae1++) {
								_0x47aac6 = _0x3db104[_0xf6ae1];
								_0x5d0d03 = 0;
								_0x36dd10 = _0x1e3a97;
								_0x47aac6.property && (_0x47aac6.property.vbegin && (_0x5d0d03 = _0x47aac6.property.vbegin), _0x47aac6.property.vend && (_0x36dd10 = _0x47aac6.property.vend));
								!_0x47aac6.jobid && (_0x47aac6.jobid = '');
								_0x14e024 = _0x47aac6.objectId + '-' + _0x5d0d03 + '-' + _0x36dd10 + '-' + _0x47aac6.jobid;
								if (_0x9849ed == _0x14e024) {
									_0x451be7.videoEnc = _0x47aac6.videoEnc || '';
									Ext.apply(_0x451be7, _0x1d4654.defaults);
									_0x30c3dd = _0x47aac6.customType;
									var _0x17798d = _0x47aac6.begins ? parseInt(_0x47aac6.begins) : 0;
									_0x17798d > 0 && _0x572dc9.duration ? _0x451be7.begins = _0x17798d > _0x572dc9.duration ? 0 : _0x17798d : _0x451be7.begins = 0;
									var _0x5d7f2a = _0x47aac6.ends ? parseInt(_0x47aac6.ends) : 0;
									if (_0x5d7f2a > 0 && _0x572dc9.duration) {
										var _0x2ec1ed = _0x572dc9.duration - _0x5d7f2a;
										_0x451be7.ends = _0x2ec1ed < 0 ? 0 : _0x2ec1ed;
									} else {
										_0x451be7.ends = 0;
									}
									if (_0x451be7.ends < _0x451be7.begins) {
										_0x451be7.begins = 0;
										_0x451be7.ends = 0;
									}
									_0x451be7.headOffset = _0x47aac6.headOffset ? Math.floor(parseInt(_0x47aac6.headOffset) / 1000) : 0;
									_0x451be7.objectId = _0x47aac6.objectId;
									_0x451be7.otherInfo = _0x47aac6.otherInfo;
									_0x451be7.isPassed = _0x47aac6.isPassed;
									_0x451be7.aId = _0x47aac6.aid;
									_0x451be7.danmaku = _0x539155;
									_0x47aac6.topicList && _0x2c1da1(_0x47aac6.topicList);
									_0x451be7.jumpTimePointList = _0x47aac6.jumpTimePointList;
									_0x47aac6.property && _0x47aac6.property.fastforward && _0x47aac6.property.fastforward == 'true' && (_0x451be7.enableFastForward = 0);
									_0x47aac6.property && typeof _0x47aac6.property.doublespeed != 'undefined' && _0x47aac6.property.doublespeed == 0 && (_0x451be7.doublespeed = 0, _0x1444c6 = 0);
									var _0x273fb6 = _0x451be7.schooldoublespeed;
									typeof _0x273fb6 == 'undefined' || _0x273fb6 == 2 ? _0x451be7.doublespeed = _0x1444c6 : _0x451be7.doublespeed = _0x273fb6;
									(!_0x47aac6.job || isTeacher) && (_0x451be7.doublespeed = 1);
									_0x938936 && (_0x451be7.jobid = _0x938936, !_0x47aac6.job && (!isTeacher && greenligth(), ed_complete = false, _0x451be7.enableFastForward = 1, _0x451be7.enableSwitchWindow = 1, _0x451be7.headOffset = 0));
									try {
										if (_0x6cceff && top.location.href.indexOf('/studentstudy') > -1) {
											var _0x286ea7 = _0x451be7.courseid || 0, _0x21a3fe = _0x451be7.clazzId || 0, _0x107e42 = _0x451be7.knowledgeid || 0, _0x2aa845 = _0x451be7.cookieFid || 0, _0x28d845 = _0x451be7.headOffset || 0, _0x4a1b70 = _0x451be7.userid || 0;
											Ext.Ajax.request({
												'url': _0x442e4c,
												'async': false,
												'params': {
													'uid': _0x4a1b70,
													'schoolId': _0x2aa845,
													'moocClassId': _0x21a3fe,
													'moocCourseId': _0x286ea7,
													'chapterId': _0x107e42,
													'objectId': _0x424116,
													'videoProgress': _0x28d845,
													'totalVideoDuration': _0x48c1ab,
													'enc': _0x451be7.videoEnc
												},
												'method': 'get',
												'success': function (_0x1723cd) {
													var _0x1bd6b7 = eval('(' + _0x1723cd.responseText + ')');
													_0x1bd6b7.result === 1 ? (_0x451be7.eventArray = _0x1bd6b7.eventArray, _0x451be7.supportHeartbeat = true) : _0x451be7.supportHeartbeat = false;
												},
												'failure': function () {
													_0x451be7.supportHeartbeat = false;
												}
											});
										}
									} catch (_0x1115a2) {
										console.log(_0x1115a2);
									}
									_0x451be7.reportUrl = _0x451be7.reportUrl && _0x451be7.reportUrl.replace('http://', window.location.protocol + '//');
									window['_jobindex'] = _0xf6ae1;
									break;
								}
							}
						} else {
							var _0x273fb6 = _0x451be7.schooldoublespeed;
							typeof _0x273fb6 == 'undefined' || _0x273fb6 == 2 ? _0x451be7.doublespeed = _0x1444c6 : _0x451be7.doublespeed = _0x273fb6;
						}
						var _0x5ed4db = '', _0x5bde0c = '';
						(top.location.href.indexOf('nodedetailcontroller/visitnodedetail') > -1 || top.location.href.indexOf('mycourse/teacherstudy') > -1) && parseInt(_0x30c3dd) === 2 && (_0x5ed4db = '<span style = "display: inline-block;width: 40px; height: 20px;font-size: 12px;background:#F9F9FA;border:1px solid #D5E2F1;border-radius:4px;text-align:center;line-height:20px;color: #6B89B3;position: absolute;right: 0; top: 0px;">动画</span>', _0x5bde0c = '<span style ="display: inline-block;overflow: hidden;float: right;text-overflow: ellipsis;white-space: nowrap;width: 40px;height: 20px;font-size: 12px;background: #F9F9FA;border:1px solid #D5E2F1;border-radius:4px;text-align: center;line-height:20px;color:#6B89B3;right:0;top:0;">动画</span>');
						if (_0xcaaf4f != 'false') {
							Ext.fly(window.frameElement).parent().first('.ans-job-icon') != null ? top.location.href.indexOf('nodedetailcontroller/visitnodedetail') > -1 ? Ext.fly(window.frameElement).parent().insertHtml('afterBegin', '<div title="' + videoName + '" style="width: 500px;display: inline-block;line-height: 23px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">' + videoName + '</div>' + _0x5bde0c) : (Ext.fly(window.frameElement).parent().first('.ans-job-icon').insertHtml('beforeEnd', '<span title="' + videoName + '" style="width: 500px;margin-left: 120px;display: inline-block;height: 23px;line-height: 23px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">' + videoName + '</span>' + _0x5ed4db), _0x5ed4db != '' && Ext.fly(window.frameElement).parent().addCls('relativeClass')) : (Ext.fly(window.frameElement).parent().insertHtml('afterBegin', '<div title="' + videoName + '" style="width: 500px;display: inline-block;line-height: 23px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">' + videoName + '</div>' + _0x5bde0c), _0x5bde0c != '' && Ext.fly(window.frameElement).parent().addCls('relativeClass'));
						} else {
							try {
								Ext.fly(window.frameElement).parent().first('.ans-job-icon') != null ? top.location.href.indexOf('nodedetailcontroller/visitnodedetail') > -1 ? _0x5bde0c != '' && Ext.fly(window.frameElement).parent().insertHtml('afterBegin', _0x5bde0c) : _0x5ed4db != '' && (Ext.fly(window.frameElement).parent().first('.ans-job-icon').insertHtml('beforeEnd', _0x5ed4db), Ext.fly(window.frameElement).parent().addCls('relativeClass')) : _0x5bde0c != '' && (Ext.fly(window.frameElement).parent().insertHtml('afterBegin', _0x5bde0c), Ext.fly(window.frameElement).parent().addCls('relativeClass'));
							} catch (_0x4f6088) {
								console.log(_0x4f6088);
							}
						}
						if (_0x451be7.ignoreVideoCtrl == 1) {
							_0x451be7.enableFastForward = 1;
							_0x451be7.enableSwitchWindow = 1;
						}
						(!_0x451be7.control || isTeacher) && (ed_complete = false, _0x451be7.enableFastForward = 1, _0x451be7.enableSwitchWindow = 1, _0x451be7.headOffset = 0);
						(_0x451be7.isPassed || _0x451be7.headOffset > _0x451be7.videoTotalTime * 0.95) && (_0x451be7.headOffset = 0);
						_0x4c643a && clearInterval(_0x4c643a), _0x451be7.isSupportFace = $('.maskDiv1', top.document).length > 0 && /\/studentstudy/.test(top.location.pathname) ? true : false, _0x451be7.isShowFaceCollection = /\/studentstudy/.test(top.location.pathname) && !Ext.fly(window.frameElement).parent().hasCls('ans-job-finished');
						if (supportH5Video()) {
							_0x27eb03.danmaku && (loadMultiFile([{
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
							ff = _0x451be7.enableFastForward;
							if (typeof aplus_queue != 'undefined') {
								_0x451be7.aplus_video_id = _0x1d4654.aplus_video_id;
								_0x451be7.aplus_resource_id = _0x1d4654.aplus_resource_id;
								_0x451be7.knowledgename = _0x1d4654.knowledgename;
								_0x451be7.coursename = _0x1d4654.coursename;
							}
							showHTML5Player(_0x451be7);
						} else {
							if (!_0x42d775) {
								var _0x23793f = 'http://www.adobe.com/go/getflashplayer';
								Ext.get('reader').setHTML('您没有安装flashplayer\uFF0C请到<a href="' + _0x23793f + '" target="_blank">www.adobe.com</a>下载安装\u3002<br/>如果已经安装请点击此处启用\uFF1A<object id="swf_jlxl1lfb" height="50" width="100" type="application/x-shockwave-flash" data="/ananas/modules/video/cxplayer/player_4.0.11.swf?v=20161025" style="border:#ccc 1px solid"><param name="quality" value="high"><param name="allowScriptAccess" value="always"><param name="wMode" value="transparent"><param name="align" value="middle"><param name="bgcolor" value="#000000"><param name="swLiveConnect" value="true"><param name="loop" value="true"><param name="play" value="true"><param name="DeviceFont" value="false"><param name="allowFullScreen" value="true"><param name="menu" value="true"></object>');
								return;
							}
							showMoocPlayer(_0x451be7);
						}
						sendReadZTMediaLog(0);
						break;
					case 'failed':
						_0x4c643a && clearInterval(_0x4c643a), _0x4ece16.remove(), _0x43831d.show();
						break;
					case 'waiting':
						_0x4ece16.update('<div class="line1"><div class="line3"></div></div><p class="tipStyle making">视频正在转码\uFF0C您无需在此页面等待\u30109001\u3011</p>');
						break;
					case 'converting':
					case 'transfer':
						_0x4ece16.update('<div class="line1"><div class="line2"></div></div><p class="tipStyle">视频上传中\u30109002\u3011</p>');
						break;
				}
			},
			'failure': function (_0xa94232) {
				_0xa94232.status == 0 ? (_0x4c643a && clearInterval(_0x4c643a), _0x4ece16.update('<div class="line1"><div class="line2"></div></div><p class="tipStyle">视频加载超时\uFF0C请刷新页面重试\u30109003\u3011</p>'), Ext.get('loading').hide()) : (_0x4c643a && clearInterval(_0x4c643a), _0x4ece16.update('<div class="line1"><div class="line3"></div></div><p class="tipStyle">视频加载失败\uFF0C请稍后再试\u30109004\u3011</p>'), Ext.get('loading').hide());
			}
		});
	}
	_0x5be775();
}
function supportH5Video() {
	var _0x11b4b2 = function () {
		var _0x135e0d = document.createElement('video');
		if (typeof _0x135e0d.canPlayType == 'function') {
			var _0x530e46 = _0x135e0d.canPlayType('video/mp4;codecs="avc1.42E01E,mp4a.40.2"');
			if (_0x530e46.toLowerCase() == 'maybe' || _0x530e46.toLowerCase() == 'probably') {
				return true;
			}
			var _0x530e46 = _0x135e0d.canPlayType('video/mp4;codecs="avc1.64001E,mp4a.40.2"');
			if (_0x530e46.toLowerCase() == 'maybe' || _0x530e46.toLowerCase() == 'probably') {
				return true;
			}
		}
		return false;
	};
	if (Ext.isIE && Ext.isIE10m) {
		return false;
	}
	return _0x11b4b2();
}
var playLogTimer;
function sendReadZTMediaLog(_0x7d3323) {
	try {
		var _0x256a67 = function (_0x41cd7b) {
			var _0x3b1050 = new RegExp('(^|&)' + _0x41cd7b + '=([^&]*)(&|$)'), _0x340f7d = parent.location.search.substr(1).match(_0x3b1050);
			if (_0x340f7d != null) {
				return unescape(_0x340f7d[2]);
			}
			return null;
		}, _0x2c7621 = parent.AttachmentSetting, _0x50e4a2 = window.frameElement, _0x11b30f = _0x50e4a2.parentElement.parentElement.parentElement.getAttribute('kid');
		if (_0x11b30f) {
			var _0x1fb724 = 'marg-' + _0x11b30f;
			_0x2c7621 = top[_0x1fb724];
			typeof _0x2c7621 == 'string' && (_0x2c7621 = eval('(' + _0x2c7621 + ')'));
		}
		if (!_0x2c7621) {
			return;
		}
		var _0x52d389 = _0x2c7621.defaults.isFiled, _0x3644c8 = _0x2c7621.defaults.state;
		if (_0x52d389 == 1 || _0x3644c8 == 1) {
			return;
		}
		var _0x19991a = top.dtype || 'Course';
		if (_0x19991a == 'ZT' || _0x19991a == 'HB' || _0x19991a == 'MAG') {
			var _0x3f1741 = parent.location.search || '', _0xc5a7b2 = getCookie('UID'), _0x4e4597 = config('objectid'), _0x44837d = 0, _0xe24350 = _0x2c7621.defaults.courseid, _0x38e998 = _0x2c7621.defaults.knowledgeid, _0xa6111d = window.duration, _0xe3869c = _0x256a67('_from_'), _0x5befea = _0x2c7621.attachments, _0xa4890a = '';
			if (_0x5befea.length > 0) {
				for (var _0x2c9764 = 0, _0x47498b = _0x5befea.length; _0x2c9764 < _0x47498b; _0x2c9764++) {
					var _0x4966c7 = _0x5befea[_0x2c9764], _0x52c670 = _0x4966c7.objectId;
					if (_0x52c670 == _0x4e4597) {
						if (_0x7d3323 == 0) {
							_0xa4890a = _0x4966c7.enc0;
						} else {
							_0x7d3323 == 1 ? _0xa4890a = _0x4966c7.enc1 : _0xa4890a = _0x4966c7.enc2;
						}
						break;
					}
				}
			}
			var _0x4121cc = location.protocol + '//data-xxt.aichaoxing.com/analysis/datalog?s=' + _0xe24350 + '&c=' + _0x38e998 + '&o=' + _0x4e4597 + '&st=' + _0x7d3323 + '&m=' + _0x44837d + '&d=' + _0xa6111d * 1000 + '&u=' + _0xc5a7b2 + '&_from_=' + _0xe3869c + '&enc=' + _0xa4890a, _0x49959e = function () {
				Ext.Ajax.request({
					'url': _0x4121cc,
					'success': function (_0x258978) {
					}
				});
			};
			_0x49959e();
			if (_0x7d3323 == 1) {
				playLogTimer && clearInterval(playLogTimer);
				playLogTimer = setInterval(function () {
					_0x49959e();
				}, 5000);
			} else {
				_0x7d3323 == 2 && (playLogTimer && clearInterval(playLogTimer));
			}
		}
	} catch (_0x5701bc) {
	}
}
function receiveStudyLog() {
	try {
		var _0x5023d8 = parent.AttachmentSetting;
		if (!_0x5023d8) {
			return;
		}
		if (_0x5023d8 && _0x5023d8.defaults) {
			var _0x2c7390 = _0x5023d8.defaults;
			if (_0x2c7390.chapterCapture != 1) {
				return;
			}
			var _0x17bdb6 = '/keeper/api/receive-studylog', _0x18c3b0 = new Date().getTime(), _0x29ed0c = _0x2c7390.courseid, _0x279182 = _0x2c7390.clazzId, _0x3d06a6 = _0x2c7390.cpi, _0x47be62 = _0x2c7390.userid, _0x28995f = _0x2c7390.knowledgeid, _0x3a0a40 = _0x2c7390.fid, _0x55221e = '', _0x5adefd = config('objectid'), _0xc8194a = config('jobid') || '', _0x968440 = _0x5023d8.attachments;
			if (_0x968440.length > 0) {
				for (var _0x25559e = 0, _0x212724 = _0x968440.length; _0x25559e < _0x212724; _0x25559e++) {
					var _0x48f671 = _0x968440[_0x25559e], _0x2bcc61 = _0x48f671.objectId;
					if (_0x2bcc61 == _0x5adefd) {
						_0x55221e = _0x48f671.aid;
						break;
					}
				}
			}
			var _0x5d4c77 = {
				'relationId': _0x55221e,
				'objectId': _0x5adefd,
				'userId': _0x47be62,
				'knowledgeId': _0x28995f,
				'fid': _0x3a0a40,
				'jobId': _0xc8194a
			}, _0x122ee9 = {
				'courseId': _0x29ed0c,
				'clazzId': _0x279182,
				'personId': _0x3d06a6,
				'eventType': 4,
				'eventTime': _0x18c3b0,
				'data': _0x5d4c77
			}, _0x38f385 = _0x2c7390.mtEnc;
			Ext.Ajax.request({
				'method': 'post',
				'url': _0x17bdb6,
				'params': {
					'log': JSON.stringify(_0x122ee9),
					'enc': _0x38f385
				},
				'success': function (_0x11a4b7) {
				}
			});
		}
	} catch (_0x4ad899) {
	}
}
function createVideoTask() {
	if (isViturlEdit) {
		return;
	}
	var _0x3d98a7 = location.protocol + '//convertservice.chaoxing.com/video/createVideoTask?objectid=' + wrongObj;
	Ext.Ajax.request({
		'timeout': 3000,
		'type': 'get',
		'async': false,
		'url': _0x3d98a7,
		'dataType': 'jsonp',
		'jsonp': 'jsoncallback',
		'success': function (_0x52a70c) {
		},
		'failure': function (_0x1789fc) {
			console.log('创建任务失败');
		}
	});
}
Ext.onReady(function () {
	var _0x4e1fa5 = parent.requestSatusResourceDownGrade;
	if (_0x4e1fa5 && _0x4e1fa5 == 1) {
		var _0x40136a = '<img src="/ananas/css/downgradeBlueTip.jpg" width="676" height="540">';
		Ext.select('body').setHTML(_0x40136a);
		return;
	}
	loadVideo();
});
var danmaku = {};
function getDanmuByTime(_0x1b6447, _0x125643) {
	var _0x4701e4 = parent.AttachmentSetting;
	if (!_0x4701e4) {
		return;
	}
	if (_0x4701e4 && _0x4701e4.defaults) {
		var _0x403070 = _0x4701e4.defaults, _0x91a108 = _0x403070.courseid, _0x1ed447 = _0x403070.clazzId;
	} else {
		return;
	}
	if (_0x1b6447 == 'pause') {
		danmaku = {};
		return;
	}
	_0x1b6447 == 'play' && (danmaku = {});
	var _0x23555d = config('mid'), _0x33b3ec = {
		'courseid': _0x91a108,
		'classid': _0x1ed447,
		'mid': _0x23555d,
		'timebegin': parseInt(_0x125643),
		'timeend': parseInt(_0x125643) + 59
	};
	Ext.Ajax.request({
		'url': '/videodanmaku/timerange-danmakulist',
		'method': 'get',
		'params': _0x33b3ec,
		'success': function (_0x2d3c63) {
			var _0x366169 = eval('(' + _0x2d3c63.responseText + ')');
			if (_0x366169.status == 1) {
				var _0x52b4c1 = _0x366169.data;
				for (var _0x48aea0 = 0; _0x48aea0 < _0x52b4c1.length; _0x48aea0++) {
					var _0x5e7f07 = _0x52b4c1[_0x48aea0].timeline;
					!danmaku[_0x5e7f07] && (danmaku[_0x5e7f07] = new Array());
					danmaku[_0x5e7f07].push(_0x52b4c1[_0x48aea0].content);
				}
				_0x125643 == 0 && danmuPlay(0);
			} else {
				alert('服务异常,稍后再试!');
			}
		},
		'failure': function (_0x2277bb) {
			alert('服务异常,稍后再试!');
		}
	});
}
var count = 0, timeFlag = -1, currentTime = 0;
function shotdanmu(_0x2cc52d) {
	var _0x462b23 = _0x2cc52d.clientWidth;
	_0x462b23 = -parseInt(_0x462b23);
	var _0x38d795 = 'translateX(' + _0x462b23 + 'px)';
	setTimeout(function () {
		_0x2cc52d.style.transform = _0x38d795;
		_0x2cc52d.className = 'danmuItem left';
	}, 500);
}
function danmuPlay(_0x29d62e) {
	currentTime = _0x29d62e;
	if (timeFlag == _0x29d62e) {
		return;
	}
	timeFlag = _0x29d62e;
	var _0x569af7 = danmaku[_0x29d62e];
	if (!_0x569af7) {
		return;
	}
	if (!$('.mui-switch').hasClass('checked')) {
		return;
	}
	var _0x3ae21b = '<div class="danmuItem right">';
	for (var _0x1023e8 = 0; _0x1023e8 < _0x569af7.length; _0x1023e8++) {
		if (_0x569af7[_0x1023e8] == '@zan@') {
			_0x3ae21b += '<span><i class="zanIcon"></i>赞</span>';
		} else {
			if (_0x569af7[_0x1023e8] == '@不赞同@') {
				_0x3ae21b += '<span><i class="noZanIcon"></i>不赞同</span>';
			} else {
				if (_0x569af7[_0x1023e8] == '@感动@') {
					_0x3ae21b += '<span><i class="moveIcon"></i>感动</span>';
				} else {
					if (_0x569af7[_0x1023e8] == '@疑惑@') {
						_0x3ae21b += '<span><i class="doubtIcon"></i>疑惑</span>';
					} else {
						if (_0x569af7[_0x1023e8] == '@献花@') {
							_0x3ae21b += '<span><i class="huaIcon"></i>献花</span>';
						} else {
							if (_0x569af7[_0x1023e8] == '@鼓掌@') {
								_0x3ae21b += '<span><i class="clapIcon"></i>鼓掌</span>';
							} else {
								_0x569af7[_0x1023e8] == '@有趣@' ? _0x3ae21b += '<span><i class="interestingIcon"></i>有趣</span>' : _0x3ae21b += '<span>' + _0x569af7[_0x1023e8] + '</span>';
							}
						}
					}
				}
			}
		}
	}
	_0x3ae21b += '</div>';
	var _0x74e1db = count % 3, _0x20062e = new Ext.XTemplate(_0x3ae21b).append('channel_' + _0x74e1db);
	shotdanmu(_0x20062e);
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
function checkJobCountLimit(_0xf8a30, _0x46a1ff) {
	/\/studentstudy/.test(top.location.pathname) && (_0x46a1ff == 0 ? top.showJobLimitTip() : top.showVideoTimeLimitTip(), playStateV2 = setInterval(function () {
		top.resumePlay && (clearStateV2Interval(), _0xf8a30.play(), top.resumePlay = false);
	}, 300));
}
function isStuViewPage() {
	return /\/studentstudy/.test(top.location.pathname);
}
function showPopIframe(_0x2ef7de, _0x4139bc) {
	try {
		top.showCustomPop && (_0x4139bc.pause(), top.showCustomPop(_0x2ef7de), popPlayState = setInterval(function () {
			top.popPlayState && (top.popPlayState = false, clearPopStateInterval(), _0x4139bc.eventCount <= 0 && _0x4139bc.play());
		}, 1000));
	} catch (_0x48bda6) {
		console.log(_0x48bda6);
	}
}
function startFaceCollection(_0x493144, _0x1870c2, _0x5b2166, _0x334ad1) {
	if (/\/studentstudy/.test(top.location.pathname)) {
		var _0x41f205 = $('.maskDiv1', top.document).length;
		if (_0x41f205 > 0) {
			$('#videoJobId', top.document).val(videoJobId);
			$('#chapterVideoObjectId', top.document).val(videoObjectId);
			$('#collectionTime', top.document).val(_0x334ad1);
			$('#mid', top.document).val(mid);
			top.getQRCodeURLShow1 && top.getQRCodeURLShow1();
			$('.maskDiv1', top.document).css('display', 'block');
			getPlayState = setInterval(function () {
				if (top.playerState) {
					clearStateInterval();
					_0x493144.play();
					_0x5b2166.firstPlayFace = false;
					top.playerState = false;
					var _0x3ce710 = _0x5b2166.jumpTimePointList;
					_0x334ad1 != -2 && typeof _0x3ce710 != 'undefined' && (_0x3ce710.push(_0x334ad1), _0x5b2166.jumpTimePointList = _0x3ce710);
				}
			}, 1000);
		}
	}
}
function chapterPlayNextVideo(_0x5e7411) {
	/\/studentstudy/.test(top.location.pathname) && (top.getChapterNextVideo && top.getChapterNextVideo(_0x5e7411));
}
function markersPlayer(_0x2fcc6a) {
	var _0x239cc4 = _0x2fcc6a.getAttribute('data-marker-time');
	if (_0x239cc4) {
		return playerTime(_0x239cc4);
	}
}
function getMarkers() {
	return videojs('video').markers;
}
function playerTime(_0x5e9618) {
	if (ff != 1) {
		return;
	}
	var _0x395b68 = videojs('video');
	return _0x395b68.currentTime(_0x5e9618);
}
function playVideo() {
	var _0x4e96ae = videojs('video');
	player.volume(0);
	player.on('loadstart', function () {
		_0x4e96ae.play().catch(Ext.emptyFn);
	});
}
function reSizeIframe() {
	try {
		var _0xfec310 = Ext.fly(Ext.select('.main').elements[0]).getHeight();
		Ext.fly(window.frameElement).setHeight(_0xfec310 + 'px');
	} catch (_0x4ee7f4) {
		console.log(_0x4ee7f4.message);
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
		var _0x20d924 = videojs('video'), _0x4dce9d = parseInt(_0x20d924.currentTime()), _0x2b1d1e = parseInt(_0x4dce9d / 60);
		_0x2b1d1e < 10 && (_0x2b1d1e = '0' + _0x2b1d1e.toString());
		var _0x20ffc0 = parseInt(_0x4dce9d % 60);
		_0x20ffc0 < 10 && (_0x20ffc0 = '0' + _0x20ffc0.toString());
		$('.Note_name', parent.parent.document).html(videoName + ' ' + _0x2b1d1e + ':' + _0x20ffc0);
		$('.Note_name', parent.parent.document).css('display', 'block');
		$('#noteVideoTime', parent.parent.document).val(_0x4dce9d);
		$('#noteVideoJobId', parent.parent.document).val(videoJobId);
		$('#noteVideoObjectId', parent.parent.document).val(videoObjectId);
		parent.parent.getClazzNote && parent.parent.getClazzNote();
		parent.parent.changePan && parent.parent.changePan('3');
		$('.formTopic', parent.parent.document).size() > 0 && $('.formTopic', parent.parent.document).css('display', 'block');
	});
});