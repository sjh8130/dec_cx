Ext.Ajax.autoAbort = false;
Ext.isIpad = navigator.userAgent.indexOf('iPad') > -1;
Ext.isIos = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
Ext.isAndroid = navigator.userAgent.indexOf('Android') > -1;
Ext.isSogou = !!navigator.userAgent.match(/metasr/i);
Ext.isChaoxing = navigator.userAgent.indexOf('ChaoXingStudy') > -1;
;
if (window.location.hostname.indexOf('.jsjy.ah.cn') > 0) {
	var pwindow = window.parent;
} else {
	var pwindow = top;
}
var fontSize = 18, fontOpacity = 80, device = 0;
(pwindow.location.href.indexOf('/studentstudy') > -1 || pwindow.location.href.indexOf('/mycourse/teacherstudy') > -1 || pwindow.location.href.indexOf('nodedetailcontroller/visitnodedetail') > -1) && (device = 1);
function greenligth() {
	Ext.fly(window.frameElement).parent().addCls('ans-job-finished');
	greenLightSetAriaLabel();
}
function greenLightSetAriaLabel() {
	try {
		var _0x2b960c = Ext.fly(window.frameElement).parent();
		if (_0x2b960c) {
			var _0x32fbc = _0x2b960c.down('.ans-job-icon');
			_0x32fbc && _0x32fbc.set({ 'aria-label': '任务点已完成' });
		}
	} catch (_0x42abe4) {
		console.log(_0x42abe4);
	}
}
function isUnFinishJob() {
	try {
		var _0x66052f = Ext.fly(window.frameElement).prev();
		if (_0x66052f && _0x66052f.hasCls('ans-job-icon')) {
			return !Ext.fly(window.frameElement).parent().hasCls('ans-job-finished');
		}
		return false;
	} catch (_0x4c59e7) {
		console.log(_0x4c59e7);
	}
	return false;
}
var isViturlEdit = false, ff = 1;
function proxy_completed() {
	ed_complete && (greenligth(), ed_complete());
}
function config(_0x3f1e4c) {
	return window.frameElement.getAttribute(_0x3f1e4c);
}
function getCookie(_0x202f6b) {
	var _0x4fc26c = document.cookie.split('; ');
	for (var _0xd813cc = 0; _0xd813cc < _0x4fc26c.length; _0xd813cc++) {
		var _0xbdb21e = _0x4fc26c[_0xd813cc].split('=');
		if (_0xbdb21e[0] == _0x202f6b) {
			return unescape(_0xbdb21e[1]);
		}
	}
}
function showMoocPlayer(_0x4eaf6b) {
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
			var _0x4eb05d = new MoocPlayer({
				'isSendLog': !!parent.AttachmentSetting && parent.AttachmentSetting.control,
				'data': _0x4eaf6b,
				'height': 540,
				'width': 676
			});
		});
	});
}
function bindVjsClick() {
	try {
		var _0x1cbfe9 = config('jobid') || '';
		if (_0x1cbfe9 != '' && window.parent.parent.location.href.indexOf('studentstudy') > -1) {
			var _0x2e9c3d = $('.video-js .toolTipBox1'), _0x37bb83 = $('#tipDiv');
			_0x2e9c3d.length === 0 && _0x37bb83.length > 0 && $('.video-js').prepend(_0x37bb83.html());
			if (!$('.toolTipBox1').is(':visible')) {
				$('.toolTipBox1').html($('#tipDiv .toolTipBox1').html());
				var _0x224f6c = $('#video_html5_api').height();
				$('.toolTipBox1').css('top', parseInt(_0x224f6c / 2) + 'px');
				$('.toolTipBox1').show();
				setTimeout(function () {
					$('.toolTipBox1').hide();
				}, 800);
			}
		}
	} catch (_0x13244c) {
		console.log(_0x13244c);
	}
}
function bindVjsRateClick() {
	try {
		var _0x1b37f3 = $('.video-js .toolTipBox1'), _0x4dd61b = $('#tipDiv'), _0x53b5c3 = '<i class="loadicon"><img width="100%" height="100%" src="/ananas/videoeditor/images/tips_pop.png"/></i>该视频教师已关闭倍速功能\uFF0C任务点完成后可倍速播放';
		_0x1b37f3.length === 0 && _0x4dd61b.length > 0 ? $('.video-js').prepend('<div class="toolTipBox1" style="display: none"><i class="loadicon"><img width="100%" height="100%" src="/ananas/videoeditor/images/tips_pop.png"/></i>该视频教师已关闭倍速功能\uFF0C任务点完成后可倍速播放</div>') : $(_0x1b37f3).html(_0x53b5c3);
		if (!$('.toolTipBox1').is(':visible')) {
			var _0x34dfc2 = $('#video_html5_api').height();
			$('.toolTipBox1').css('top', parseInt(_0x34dfc2 / 2) + 'px');
			$('.toolTipBox1').show();
			setTimeout(function () {
				$('.toolTipBox1').hide();
			}, 800);
		}
	} catch (_0x576c23) {
		console.log(_0x576c23);
	}
}
;
function showHTML5Player(_0x3b08c8) {
	var _0x2ef5a3 = '<div class="watermark"><p class="uname">' + _0x3b08c8.studentName + '</p>' + '<p style="margin-top: 10px;" class="loginName">' + _0x3b08c8.studentLoginName + '</p>' + '</div>';
	!_0x3b08c8.showWatermark && (_0x2ef5a3 = '');
	Ext.get('reader').setHTML('<video id="video" class="video-js vjs-default-skin vjs-big-play-centered" crossorigin="Anonymous"></video>' + _0x2ef5a3);
	new ans.VideoJs({
		'videojs': 'video',
		'params': _0x3b08c8
	});
	if (_0x3b08c8.fid == 179952 || _0x3b08c8.cookieFid == 179952 || getCookie('fid') == 179952) {
		var _0x3ac616 = document.createElement('style');
		_0x3ac616.type = 'text/css';
		_0x3ac616.innerHTML = '.vjs-text-track-display{bottom:6em !important;}.fullScreenContainer.full .vjs-text-track-display{bottom: 8em !important;}';
		document.head.appendChild(_0x3ac616);
	}
	if (typeof aplus_queue != 'undefined') {
		var _0x1adc35 = parent.AttachmentSetting;
		if (_0x1adc35) {
			var _0x5c8abe = _0x1adc35.aplus_video_id, _0x181a88 = _0x1adc35.aplus_resource_id, _0x33edb2 = _0x1adc35.knowledgename, _0x54cea8 = _0x1adc35.coursename, _0x336e0c = {
				'video_name': _0x33edb2,
				'video_id': _0x5c8abe,
				'resource_id': _0x181a88,
				'resource_name': _0x54cea8
			};
			$('.vjs-big-play-button')[0].addEventListener('click', function () {
				typeof aplus_queue != 'undefined' && aplus_queue.push({
					'action': 'aplus.record',
					'arguments': [
						'video_pybk_click',
						'CLK',
						_0x336e0c
					]
				});
			});
			$('.vjs-mute-control')[0].addEventListener('click', function () {
				!$(this).hasClass('vjs-vol-0') ? typeof aplus_queue != 'undefined' && aplus_queue.push({
					'action': 'aplus.record',
					'arguments': [
						'no_sound_click',
						'CLK',
						_0x336e0c
					]
				}) : typeof aplus_queue != 'undefined' && aplus_queue.push({
					'action': 'aplus.record',
					'arguments': [
						'enable_sound_click',
						'CLK',
						_0x336e0c
					]
				});
			});
			$('.vjs-volume-level')[0].addEventListener('mouseup', function () {
				typeof aplus_queue != 'undefined' && aplus_queue.push({
					'action': 'aplus.record',
					'arguments': [
						'volume_control_drag',
						'OTHER',
						_0x336e0c
					]
				});
			});
			var _0x48e1fe = null;
			function _0x15d401() {
				if ($('.vjs-fullscreen-control-self').length > 0) {
					$('.vjs-fullscreen-control-self')[0].addEventListener('click', function () {
						$(this).attr('title') == '全屏' ? typeof aplus_queue != 'undefined' && aplus_queue.push({
							'action': 'aplus.record',
							'arguments': [
								'full_screen_click',
								'CLK',
								_0x336e0c
							]
						}) : typeof aplus_queue != 'undefined' && aplus_queue.push({
							'action': 'aplus.record',
							'arguments': [
								'small_screen_click',
								'CLK',
								_0x336e0c
							]
						});
					});
					clearInterval(_0x48e1fe);
				}
			}
			_0x48e1fe = setInterval(_0x15d401, 100);
		}
	}
	document.getElementsByTagName('video')[0].addEventListener('play', function () {
		var _0x16cde5 = parent.document.getElementsByTagName('iframe');
		for (var _0xa3e7aa = 0; _0xa3e7aa < _0x16cde5.length; _0xa3e7aa++) {
			if (_0x16cde5[_0xa3e7aa].getAttribute('src').indexOf('microCourse') != -1) {
				var _0x30a857 = _0x16cde5[_0xa3e7aa].contentWindow.document.getElementsByTagName('iframe')[0].contentWindow;
				_0x30a857.PageView.stopAll && _0x30a857.PageView.stopAll();
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
		document.getElementsByClassName('vjs-fullscreen-control-self').length > 0 && document.getElementsByClassName('vjs-fullscreen-control-self')[0].addEventListener('click', function () {
			$(this).parents('#reader').find('.watermark').remove();
			$(this).parents('#video').append(_0x2ef5a3);
		});
	});
	function _0x89a254() {
		var _0x1882ca = $('#video').height(), _0x4dbb58 = $('#sp_video_ppt_pic').height(), _0x555cd7 = (parseInt(_0x1882ca) - 60 - parseInt(_0x4dbb58)) / 2;
		$('#sp_video_ppt_pic').length > 0 && $('#sp_video_ppt_pic').hasClass('sp_ppt_pic_fullScreen') ? ($('#sp_video_ppt_pic').css('top', _0x555cd7 + 'px'), $('#sp_video_ppt_pic').css('left', '0')) : ($('#sp_video_ppt_pic').css('top', '0px'), $('#sp_video_ppt_pic').css('left', '0px'));
	}
	var _0x3b17b0 = null;
	function _0x48feff() {
		if ($('.vjs-fullscreen-control-self').length > 0) {
			$('.vjs-fullscreen-control-self')[0].addEventListener('click', function () {
				setTimeout(_0x89a254, 300);
			});
			clearInterval(_0x3b17b0);
		}
	}
	_0x3b17b0 = setInterval(_0x48feff, 100);
	$(window).resize(function () {
		setTimeout(_0x89a254, 500);
	});
}
var wrongObj = '', videoName = '', videoJobId = '', videoObjectId = '', mid = '';
function loadVideo() {
	var _0x5037a2 = config('objectid'), _0x4051d9 = Ext.get('reader');
	if (!_0x5037a2) {
		_0x4051d9.setHTML('未找到该文件');
		return;
	}
	wrongObj = _0x5037a2;
	videoObjectId = _0x5037a2;
	var _0x5162aa = window.frameElement, _0x50bb1d = Ext.decode(_0x5162aa.getAttribute('data')), _0x28d061 = parent.AttachmentSetting, _0x431f44 = parent.previewAttachments;
	mid = config('mid');
	var _0x1b8ef4 = 0, _0x29ca9f = config('vbegin'), _0x931d30 = config('vend'), _0x34f2d5 = config('jobid') || '', _0x1f1248 = _0x50bb1d ? _0x50bb1d.danmaku == null ? 0 : _0x50bb1d.danmaku : 0, _0x20e2c5 = _0x28d061 && _0x28d061.videoTopicCloud, _0x5d41b3 = _0x28d061 && _0x28d061.supportHeartbeat, _0x39c6f0 = _0x28d061 && _0x28d061.requestConfigUrl, _0xd3284a = config('fastforward') == 'true' ? true : false, _0x564478 = config('switchwindow') == 'true' ? true : false, _0xdb6972 = Ext.get('note'), _0x3f2584 = Ext.get('hl'), _0x532356 = Ext.get('note1-wrap'), _0x2b390d = Ext.get('note1'), _0x3b134c = null, _0x4c8c5b = _0x50bb1d ? _0x50bb1d.rt ? _0x50bb1d.rt : 0.9 : 0.9;
	_0x34f2d5 == '' ? videoJobId = _0x50bb1d && _0x50bb1d['_jobid'] ? _0x50bb1d['_jobid'] : '' : videoJobId = _0x34f2d5;
	var _0xa322be = flashChecker().hasFlash, _0x1eac48 = _0x28d061 && _0x28d061.defaults && _0x28d061.defaults.isForScreen == 1;
	try {
		var _0x1afa3f = pwindow.location.href.indexOf('teacherstudy') > 0 || pwindow.location.href.indexOf('course/phone/chapterdata') > 0 || _0x1eac48;
	} catch (_0x5ba194) {
		_0x1afa3f = false;
	}
	var _0x106b62 = parent.isVideoVisibleName, _0x4d49b8 = _0x50bb1d ? _0x50bb1d.doublespeed != 0 ? 1 : 0 : 1;
	_0x50bb1d.v_begin && _0x50bb1d.v_end && _0x50bb1d.pobjectid && (isViturlEdit = true);
	function _0x52b57c(_0x205960) {
		if (_0x205960 && _0x205960.length == 0) {
			return;
		}
		if (Ext.select('.zsCloud_ul') != null) {
			var _0x461d55 = '';
			for (var _0x4ef59b = 0, _0x84b9dd = _0x205960.length; _0x4ef59b < _0x84b9dd; _0x4ef59b++) {
				_0x461d55 += '<li><span class=\'zsCloud_span topicId' + _0x205960[_0x4ef59b].id + '\' onclick=\'markersPlayer(this)\'>' + _0x205960[_0x4ef59b].name + ' </span></li>';
			}
			Ext.select('.zsCloud_ul').setHTML(_0x461d55);
			Ext.select('.zsCloud').setStyle('display', 'block');
		}
	}
	function _0x593f23() {
		_0x1b8ef4 <= 100 && _0x3f2584.setWidth((_0x1b8ef4 += 5) + '%');
		var _0x2bb021 = getCookie('fid') || '';
		Ext.Ajax.request({
			'url': '/ananas/status/' + _0x5037a2 + '?k=' + _0x2bb021 + '&flag=normal',
			'success': function (_0x384e33) {
				var _0x21045c = eval('(' + _0x384e33.responseText + ')');
				Ext.get('loading').hide();
				switch (_0x21045c.status) {
					case 'success':
						_0x532356.remove(), videoName = _0x50bb1d && _0x50bb1d.name || '';
						var _0x188e61 = 0;
						try {
							var _0x1a9c39 = _0x21045c.duration;
							if (_0x431f44 && pwindow.location.href.indexOf('nodedetailcontroller/visitnodedetail') > -1) {
								var _0x5038cf = _0x21045c.objectid + '-' + (_0x29ca9f ? _0x29ca9f : 0) + '-' + (_0x931d30 ? _0x931d30 : _0x1a9c39) + '-' + _0x34f2d5;
								for (var _0x19741a = 0; _0x19741a < _0x431f44.length; _0x19741a++) {
									var _0x3e3639 = _0x431f44[_0x19741a], _0x25530d = 0, _0x1ebf96 = _0x1a9c39;
									_0x3e3639.property && (_0x3e3639.property.vbegin && (_0x25530d = _0x3e3639.property.vbegin), _0x3e3639.property.vend && (_0x1ebf96 = _0x3e3639.property.vend));
									!_0x3e3639.jobid && (_0x3e3639.jobid = '');
									var _0xd8dcc = _0x3e3639.objectId + '-' + _0x25530d + '-' + _0x1ebf96 + '-' + _0x3e3639.jobid;
									_0x5038cf == _0xd8dcc && (_0x188e61 = _0x3e3639.customType);
								}
							}
						} catch (_0x402753) {
							console.log(_0x402753);
						}
						var _0xa8061a = _0x21045c.duration, _0x5e4111 = {
							'enableFastForward': _0xd3284a ? 0 : 1,
							'enableSwitchWindow': _0x564478 ? 0 : 1,
							'duration': _0xa8061a,
							'httpmd': _0x21045c.httpmd,
							'http': _0x21045c.http,
							'httphd': _0x21045c.httphd,
							'httpshd': _0x21045c.httpshd,
							'filename': _0x21045c.filename,
							'dtoken': _0x21045c.dtoken,
							'videoTopicCloud': _0x20e2c5
						};
						window.duration = _0xa8061a;
						_0x21045c.cdn && (_0x5e4111.cdn = _0x21045c.cdn);
						if (document.cookie.length > 0) {
							_0x5e4111.memberinfo = getCookie('memberinfo');
							_0x5e4111.questionErrorLogUrl = ServerHosts.MASTER_HOST + '/question/addquestionerror';
						}
						mid && (_0x5e4111.mid = mid);
						_0x21045c.duration && (_0x5e4111.videoTotalTime = _0x21045c.duration);
						if (_0x28d061 && _0x28d061.isErya == 1) {
							_0x5e4111.screenshot = ServerHosts.P_HOST + '/star3/origin/a26e16b5ac8e769bba6bda57343b7d57.png';
						} else {
							_0x21045c.screenshot && (!_0x50bb1d.screenshot ? _0x5e4111.screenshot = _0x21045c.screenshot : _0x5e4111.screenshot = _0x50bb1d.screenshot);
						}
						_0x28d061 && (_0x5e4111.chapterVideoTranslate = _0x28d061.chapterVideoTranslate);
						_0x21045c.thumbnails && (_0x5e4111.thumbnails = _0x21045c.thumbnails);
						_0x21045c.subobjectid && (_0x5e4111.subobjectid = _0x21045c.subobjectid);
						_0x29ca9f && (_0x5e4111.startTime = _0x29ca9f);
						_0x931d30 && (_0x5e4111.endTime = _0x931d30);
						_0x5e4111.objectid = _0x5037a2, _0x5e4111.rt = _0x4c8c5b, _0x5e4111.control = _0x28d061 && _0x28d061.control;
						_0x1afa3f && (_0x5e4111.control = false);
						var _0x2a753b = {}, _0x34eb35, _0x3fdce7, _0x5044d, _0x298b7d = '', _0x5c65e0 = '';
						if (_0x28d061 && _0x28d061.control) {
							var _0x1e08a7 = _0x28d061.attachments, _0x4a42ae = _0x28d061.defaults, _0x5f0a6e = _0x21045c.objectid + '-' + (_0x29ca9f ? _0x29ca9f : 0) + '-' + (_0x931d30 ? _0x931d30 : _0xa8061a) + '-' + _0x34f2d5;
							_0x4a42ae && (_0x5e4111.userid = _0x4a42ae.userid || '', _0x5e4111.fid = _0x4a42ae.fid || '', _0x5e4111.courseid = _0x4a42ae.courseid || '', _0x5e4111.clazzId = _0x4a42ae.clazzId || '', _0x5e4111.knowledgeid = _0x4a42ae.knowledgeid || '', _0x5e4111.cookieFid = _0x4a42ae.cookieFid || '', _0x298b7d = _0x4a42ae.username || '', _0x5c65e0 = _0x4a42ae.loginName || '');
							!_0x1afa3f && (_0x5e4111.studentName = _0x298b7d, _0x5e4111.studentLoginName = _0x5c65e0, _0x5e4111.showWatermark = true);
							for (var _0x4f3506 = 0; _0x4f3506 < _0x1e08a7.length; _0x4f3506++) {
								_0x2a753b = _0x1e08a7[_0x4f3506];
								_0x3fdce7 = 0;
								_0x5044d = _0xa8061a;
								_0x2a753b.property && (_0x2a753b.property.vbegin && (_0x3fdce7 = _0x2a753b.property.vbegin), _0x2a753b.property.vend && (_0x5044d = _0x2a753b.property.vend));
								!_0x2a753b.jobid && (_0x2a753b.jobid = '');
								_0x34eb35 = _0x2a753b.objectId + '-' + _0x3fdce7 + '-' + _0x5044d + '-' + _0x2a753b.jobid;
								if (_0x5f0a6e == _0x34eb35) {
									_0x5e4111.videoEnc = _0x2a753b.videoEnc || '';
									Ext.apply(_0x5e4111, _0x28d061.defaults);
									_0x188e61 = _0x2a753b.customType;
									var _0x3af216 = _0x2a753b.begins ? parseInt(_0x2a753b.begins) : 0;
									_0x3af216 > 0 && _0x21045c.duration ? _0x5e4111.begins = _0x3af216 > _0x21045c.duration ? 0 : _0x3af216 : _0x5e4111.begins = 0;
									var _0x24a161 = _0x2a753b.ends ? parseInt(_0x2a753b.ends) : 0;
									if (_0x24a161 > 0 && _0x21045c.duration) {
										var _0x498eae = _0x21045c.duration - _0x24a161;
										_0x5e4111.ends = _0x498eae < 0 ? 0 : _0x498eae;
									} else {
										_0x5e4111.ends = 0;
									}
									if (_0x5e4111.ends < _0x5e4111.begins) {
										_0x5e4111.begins = 0;
										_0x5e4111.ends = 0;
									}
									_0x5e4111.headOffset = _0x2a753b.headOffset ? Math.floor(parseInt(_0x2a753b.headOffset) / 1000) : 0;
									_0x5e4111.objectId = _0x2a753b.objectId;
									_0x5e4111.otherInfo = _0x2a753b.otherInfo;
									_0x5e4111.isPassed = _0x2a753b.isPassed;
									_0x5e4111.aId = _0x2a753b.aid;
									_0x5e4111.danmaku = _0x1f1248;
									_0x2a753b.topicList && _0x52b57c(_0x2a753b.topicList);
									_0x5e4111.jumpTimePointList = _0x2a753b.jumpTimePointList;
									_0x2a753b.property && _0x2a753b.property.fastforward && _0x2a753b.property.fastforward == 'true' && (_0x5e4111.enableFastForward = 0);
									_0x2a753b.property && typeof _0x2a753b.property.doublespeed != 'undefined' && _0x2a753b.property.doublespeed == 0 && (_0x5e4111.doublespeed = 0, _0x4d49b8 = 0);
									var _0x3e04f8 = _0x5e4111.schooldoublespeed;
									typeof _0x3e04f8 == 'undefined' || _0x3e04f8 == 2 ? _0x5e4111.doublespeed = _0x4d49b8 : _0x5e4111.doublespeed = _0x3e04f8;
									(!_0x2a753b.job || _0x1afa3f) && (_0x5e4111.doublespeed = 1);
									_0x34f2d5 && (_0x5e4111.jobid = _0x34f2d5, !_0x2a753b.job && (!_0x1afa3f && greenligth(), ed_complete = false, _0x5e4111.enableFastForward = 1, _0x5e4111.enableSwitchWindow = 1, _0x2a753b.headOffset == _0x2a753b.playTime && _0x2a753b.headOffset == _0x5e4111.videoTotalTime * 1000 ? _0x5e4111.headOffset = 0 : _0x5e4111.headOffset = Math.floor(parseInt(_0x2a753b.playTime) / 1000)));
									try {
										if (_0x5d41b3 && pwindow.location.href.indexOf('/studentstudy') > -1) {
											var _0xb6d9d2 = _0x5e4111.courseid || 0, _0x24d086 = _0x5e4111.clazzId || 0, _0x23e07e = _0x5e4111.knowledgeid || 0, _0x1e6fd0 = _0x5e4111.cookieFid || 0, _0x549a6d = _0x5e4111.headOffset || 0, _0x3840b0 = _0x5e4111.userid || 0;
											Ext.Ajax.request({
												'url': _0x39c6f0,
												'async': false,
												'params': {
													'uid': _0x3840b0,
													'schoolId': _0x1e6fd0,
													'moocClassId': _0x24d086,
													'moocCourseId': _0xb6d9d2,
													'chapterId': _0x23e07e,
													'objectId': _0x5037a2,
													'videoProgress': _0x549a6d,
													'totalVideoDuration': _0x1a9c39,
													'enc': _0x5e4111.videoEnc
												},
												'method': 'get',
												'success': function (_0x1504e9) {
													var _0x374fde = eval('(' + _0x1504e9.responseText + ')');
													_0x374fde.result === 1 ? (_0x5e4111.eventArray = _0x374fde.eventArray, _0x5e4111.supportHeartbeat = true) : _0x5e4111.supportHeartbeat = false;
												},
												'failure': function () {
													_0x5e4111.supportHeartbeat = false;
												}
											});
										}
									} catch (_0xcaadc9) {
										console.log(_0xcaadc9);
									}
									_0x5e4111.reportUrl = _0x5e4111.reportUrl && _0x5e4111.reportUrl.replace('http://', window.location.protocol + '//');
									window['_jobindex'] = _0x4f3506;
									break;
								}
							}
						} else {
							var _0x3e04f8 = _0x5e4111.schooldoublespeed;
							typeof _0x3e04f8 == 'undefined' || _0x3e04f8 == 2 ? _0x5e4111.doublespeed = _0x4d49b8 : _0x5e4111.doublespeed = _0x3e04f8;
						}
						var _0xf61ca7 = '', _0x6617c8 = '';
						(pwindow.location.href.indexOf('nodedetailcontroller/visitnodedetail') > -1 || pwindow.location.href.indexOf('mycourse/teacherstudy') > -1) && parseInt(_0x188e61) === 2 && (_0xf61ca7 = '<span style = "display: inline-block;width: 40px; height: 20px;font-size: 12px;background:#F9F9FA;border:1px solid #D5E2F1;border-radius:4px;text-align:center;line-height:20px;color: #6B89B3;position: absolute;right: 0; top: 0px;">动画</span>', _0x6617c8 = '<span style ="display: inline-block;overflow: hidden;float: right;text-overflow: ellipsis;white-space: nowrap;width: 40px;height: 20px;font-size: 12px;background: #F9F9FA;border:1px solid #D5E2F1;border-radius:4px;text-align: center;line-height:20px;color:#6B89B3;right:0;top:0;">动画</span>');
						if (_0x106b62 != 'false') {
							Ext.fly(window.frameElement).parent().first('.ans-job-icon') != null ? pwindow.location.href.indexOf('nodedetailcontroller/visitnodedetail') > -1 ? Ext.fly(window.frameElement).parent().insertHtml('afterBegin', '<div title="' + videoName + '" style="width: 500px;display: inline-block;line-height: 23px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">' + videoName + '</div>' + _0x6617c8) : (Ext.fly(window.frameElement).parent().first('.ans-job-icon').insertHtml('beforeEnd', '<span title="' + videoName + '" style="width: 500px;margin-left: 120px;display: inline-block;height: 23px;line-height: 23px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">' + videoName + '</span>' + _0xf61ca7), _0xf61ca7 != '' && Ext.fly(window.frameElement).parent().addCls('relativeClass')) : (Ext.fly(window.frameElement).parent().insertHtml('afterBegin', '<div title="' + videoName + '" style="width: 500px;display: inline-block;line-height: 23px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">' + videoName + '</div>' + _0x6617c8), _0x6617c8 != '' && Ext.fly(window.frameElement).parent().addCls('relativeClass'));
						} else {
							try {
								Ext.fly(window.frameElement).parent().first('.ans-job-icon') != null ? pwindow.location.href.indexOf('nodedetailcontroller/visitnodedetail') > -1 ? _0x6617c8 != '' && Ext.fly(window.frameElement).parent().insertHtml('afterBegin', _0x6617c8) : _0xf61ca7 != '' && (Ext.fly(window.frameElement).parent().first('.ans-job-icon').insertHtml('beforeEnd', _0xf61ca7), Ext.fly(window.frameElement).parent().addCls('relativeClass')) : _0x6617c8 != '' && (Ext.fly(window.frameElement).parent().insertHtml('afterBegin', _0x6617c8), Ext.fly(window.frameElement).parent().addCls('relativeClass'));
							} catch (_0x9bfdba) {
								console.log(_0x9bfdba);
							}
						}
						if (_0x5e4111.ignoreVideoCtrl == 1) {
							_0x5e4111.enableFastForward = 1;
							_0x5e4111.enableSwitchWindow = 1;
						}
						(!_0x5e4111.control || _0x1afa3f) && (ed_complete = false, _0x5e4111.enableFastForward = 1, _0x5e4111.enableSwitchWindow = 1, _0x5e4111.headOffset = 0);
						_0x5e4111.isPassed && _0x5e4111.headOffset > _0x5e4111.videoTotalTime * 0.95 && (_0x5e4111.headOffset = 0);
						_0x3b134c && clearInterval(_0x3b134c), _0x5e4111.isSupportFace = $('.maskDiv1', pwindow.document).length > 0 && /\/studentstudy/.test(pwindow.location.pathname) ? true : false, _0x5e4111.isShowFaceCollection = /\/studentstudy/.test(pwindow.location.pathname) && !Ext.fly(window.frameElement).parent().hasCls('ans-job-finished');
						if (supportH5Video()) {
							_0x50bb1d.danmaku && (loadMultiFile([{
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
										'src': 'ion.rangeSlider.min.js',
										'tag': 'script',
										'type': 'text/javascript',
										'defer': 'defer'
									}], function () {
										loadMultiFile([{
											'src': 'cxplayer/videodanmu.js?v=18',
											'tag': 'script',
											'type': 'text/javascript',
											'defer': 'defer'
										}]);
									});
								});
							}), Ext.select('.danmuDiv').setStyle('display', 'inline-block'), Ext.select('.sp_function').setStyle('height', '66px'));
							ff = _0x5e4111.enableFastForward;
							if (typeof aplus_queue != 'undefined') {
								_0x5e4111.aplus_video_id = _0x28d061.aplus_video_id;
								_0x5e4111.aplus_resource_id = _0x28d061.aplus_resource_id;
								_0x5e4111.knowledgename = _0x28d061.knowledgename;
								_0x5e4111.coursename = _0x28d061.coursename;
							}
							_0x5e4111.deviceType = device;
							showHTML5Player(_0x5e4111);
						} else {
							if (!_0xa322be) {
								var _0x2fa820 = 'http://www.adobe.com/go/getflashplayer';
								Ext.get('reader').setHTML('您没有安装flashplayer\uFF0C请到<a href="' + _0x2fa820 + '" target="_blank">www.adobe.com</a>下载安装\u3002<br/>如果已经安装请点击此处启用\uFF1A<object id="swf_jlxl1lfb" height="50" width="100" type="application/x-shockwave-flash" data="/ananas/modules/video/cxplayer/player_4.0.11.swf?v=20161025" style="border:#ccc 1px solid"><param name="quality" value="high"><param name="allowScriptAccess" value="always"><param name="wMode" value="transparent"><param name="align" value="middle"><param name="bgcolor" value="#000000"><param name="swLiveConnect" value="true"><param name="loop" value="true"><param name="play" value="true"><param name="DeviceFont" value="false"><param name="allowFullScreen" value="true"><param name="menu" value="true"></object>');
								return;
							}
							showMoocPlayer(_0x5e4111);
						}
						sendReadZTMediaLog(0);
						break;
					case 'failed':
						_0x3b134c && clearInterval(_0x3b134c), _0x532356.remove(), _0xdb6972.show();
						break;
					case 'waiting':
						_0x532356.update('<div class="line1"><div class="line3"></div></div><p class="tipStyle making">视频正在转码\uFF0C您无需在此页面等待\u30109001\u3011</p>');
						break;
					case 'converting':
					case 'transfer':
						_0x532356.update('<div class="line1"><div class="line2"></div></div><p class="tipStyle">视频上传中\u30109002\u3011</p>');
						break;
				}
			},
			'failure': function (_0x2b98fc) {
				_0x2b98fc.status == 0 ? (_0x3b134c && clearInterval(_0x3b134c), _0x532356.update('<div class="line1"><div class="line2"></div></div><p class="tipStyle">视频加载超时\uFF0C请刷新页面重试\u30109003\u3011</p>'), Ext.get('loading').hide()) : (_0x3b134c && clearInterval(_0x3b134c), _0x532356.update('<div class="line1"><div class="line3"></div></div><p class="tipStyle">视频加载失败\uFF0C请稍后再试\u30109004\u3011</p>'), Ext.get('loading').hide());
			}
		});
	}
	_0x593f23();
}
function supportH5Video() {
	var _0x32da25 = function () {
		var _0x562df1 = document.createElement('video');
		if (typeof _0x562df1.canPlayType == 'function') {
			var _0x500720 = _0x562df1.canPlayType('video/mp4;codecs="avc1.42E01E,mp4a.40.2"');
			if (_0x500720.toLowerCase() == 'maybe' || _0x500720.toLowerCase() == 'probably') {
				return true;
			}
			var _0x500720 = _0x562df1.canPlayType('video/mp4;codecs="avc1.64001E,mp4a.40.2"');
			if (_0x500720.toLowerCase() == 'maybe' || _0x500720.toLowerCase() == 'probably') {
				return true;
			}
		}
		return false;
	};
	if (Ext.isIE && Ext.isIE10m) {
		return false;
	}
	return _0x32da25();
}
var playLogTimer;
function sendReadZTMediaLog(_0x22c3d8) {
	try {
		var _0x312cde = function (_0x42d2c9) {
			var _0x4da4c0 = new RegExp('(^|&)' + _0x42d2c9 + '=([^&]*)(&|$)'), _0x3bfe16 = parent.location.search.substr(1).match(_0x4da4c0);
			if (_0x3bfe16 != null) {
				return unescape(_0x3bfe16[2]);
			}
			return null;
		}, _0x31413b = parent.AttachmentSetting, _0x47997c = window.frameElement, _0x19cb06 = _0x47997c.parentElement.parentElement.parentElement.getAttribute('kid');
		if (_0x19cb06) {
			var _0x481b87 = 'marg-' + _0x19cb06;
			_0x31413b = top[_0x481b87];
			typeof _0x31413b == 'string' && (_0x31413b = eval('(' + _0x31413b + ')'));
		}
		if (!_0x31413b) {
			return;
		}
		var _0x53b4c1 = _0x31413b.defaults.isFiled, _0x286a2b = _0x31413b.defaults.state;
		if (_0x53b4c1 == 1 || _0x286a2b == 1) {
			return;
		}
		var _0x279c19 = pwindow.dtype || 'Course';
		if (_0x279c19 == 'ZT' || _0x279c19 == 'HB' || _0x279c19 == 'MAG') {
			var _0xcf3ba = parent.location.search || '', _0x80dd53 = getCookie('UID'), _0x67c787 = config('objectid'), _0x2bb36c = 0, _0x5775a6 = _0x31413b.defaults.courseid, _0x5bfb27 = _0x31413b.defaults.knowledgeid, _0x2f4670 = window.duration, _0xe0db1d = _0x312cde('_from_'), _0x364dc4 = _0x31413b.attachments, _0x40ff55 = '';
			if (_0x364dc4.length > 0) {
				for (var _0x12ed83 = 0, _0x1b7689 = _0x364dc4.length; _0x12ed83 < _0x1b7689; _0x12ed83++) {
					var _0x13e909 = _0x364dc4[_0x12ed83], _0x224509 = _0x13e909.objectId;
					if (_0x224509 == _0x67c787) {
						if (_0x22c3d8 == 0) {
							_0x40ff55 = _0x13e909.enc0;
						} else {
							_0x22c3d8 == 1 ? _0x40ff55 = _0x13e909.enc1 : _0x40ff55 = _0x13e909.enc2;
						}
						break;
					}
				}
			}
			var _0x4befa2 = ServerHosts.DATA_XXT + '/analysis/datalog?s=' + _0x5775a6 + '&c=' + _0x5bfb27 + '&o=' + _0x67c787 + '&st=' + _0x22c3d8 + '&m=' + _0x2bb36c + '&d=' + _0x2f4670 * 1000 + '&u=' + _0x80dd53 + '&_from_=' + _0xe0db1d + '&enc=' + _0x40ff55, _0xc716b0 = function () {
				Ext.Ajax.request({
					'url': _0x4befa2,
					'success': function (_0x464877) {
					}
				});
			};
			_0xc716b0();
			if (_0x22c3d8 == 1) {
				playLogTimer && clearInterval(playLogTimer);
				playLogTimer = setInterval(function () {
					_0xc716b0();
				}, 5000);
			} else {
				_0x22c3d8 == 2 && (playLogTimer && clearInterval(playLogTimer));
			}
		}
	} catch (_0x13b3cc) {
	}
}
function receiveStudyLog() {
	try {
		var _0x7dbd17 = parent.AttachmentSetting;
		if (!_0x7dbd17) {
			return;
		}
		if (_0x7dbd17 && _0x7dbd17.defaults) {
			var _0x4f702f = _0x7dbd17.defaults;
			if (_0x4f702f.chapterCapture != 1) {
				return;
			}
			var _0x2085a3 = new Date().getTime(), _0x38724c = _0x4f702f.courseid, _0x28cf61 = _0x4f702f.clazzId, _0x41d810 = _0x4f702f.cpi, _0x3e35dc = _0x4f702f.userid, _0x3b2b2f = _0x4f702f.knowledgeid, _0x410b3e = _0x4f702f.fid, _0x4dcbeb = '', _0xfbc495 = config('objectid'), _0x211dea = config('jobid') || '', _0xcabf17 = _0x7dbd17.attachments;
			if (_0xcabf17.length > 0) {
				for (var _0x1ef260 = 0, _0x3cf2a5 = _0xcabf17.length; _0x1ef260 < _0x3cf2a5; _0x1ef260++) {
					var _0x56cda7 = _0xcabf17[_0x1ef260], _0x3fac13 = _0x56cda7.objectId;
					if (_0x3fac13 == _0xfbc495) {
						_0x4dcbeb = _0x56cda7.aid;
						break;
					}
				}
			}
			var _0x2bddc4 = {
				'relationId': _0x4dcbeb,
				'objectId': _0xfbc495,
				'userId': _0x3e35dc,
				'knowledgeId': _0x3b2b2f,
				'fid': _0x410b3e,
				'jobId': _0x211dea
			}, _0x5ccf89 = {
				'courseId': _0x38724c,
				'clazzId': _0x28cf61,
				'personId': _0x41d810,
				'eventType': 4,
				'eventTime': _0x2085a3,
				'data': _0x2bddc4
			}, _0x54f875 = _0x4f702f.mtEnc;
			Ext.Ajax.request({
				'method': 'post',
				'url': '/keeper/api/receive-studylog',
				'params': {
					'log': JSON.stringify(_0x5ccf89),
					'enc': _0x54f875
				},
				'success': function (_0x2f66b6) {
				}
			});
		}
	} catch (_0x130a92) {
	}
}
function createVideoTask() {
	if (isViturlEdit) {
		return;
	}
	var _0x115a26 = ServerHosts.CONVERTSERVICE + '/video/createVideoTask?objectid=' + wrongObj;
	Ext.Ajax.request({
		'timeout': 3000,
		'type': 'get',
		'async': false,
		'url': _0x115a26,
		'dataType': 'jsonp',
		'jsonp': 'jsoncallback',
		'success': function (_0x13cee2) {
		},
		'failure': function (_0x322a63) {
			console.log('创建任务失败');
		}
	});
}
Ext.onReady(function () {
	var _0x390c13 = parent.requestSatusResourceDownGrade;
	if (_0x390c13 && _0x390c13 == 1) {
		var _0x302f45 = '<img src="/ananas/css/downgradeBlueTip.jpg" width="676" height="540">';
		Ext.select('body').setHTML(_0x302f45);
		return;
	}
	loadVideo();
});
var danmaku = {};
function getDanmuByTime(_0x2748f7, _0x93d48b) {
	var _0x1f4ee4 = parent.AttachmentSetting;
	if (!_0x1f4ee4) {
		return;
	}
	if (_0x1f4ee4 && _0x1f4ee4.defaults) {
		var _0x23cea0 = _0x1f4ee4.defaults, _0x33951e = _0x23cea0.courseid, _0x5e617d = _0x23cea0.clazzId;
	} else {
		return;
	}
	if (_0x2748f7 == 'pause') {
		danmaku = {};
		return;
	}
	_0x2748f7 == 'play' && (danmaku = {});
	var _0x2e825c = config('mid'), _0x1ca853 = {
		'courseid': _0x33951e,
		'classid': _0x5e617d,
		'mid': _0x2e825c,
		'timebegin': parseInt(_0x93d48b),
		'timeend': parseInt(_0x93d48b) + 59,
		'limit': 2000
	};
	Ext.Ajax.request({
		'url': '/mooc-ans/videodanmaku/timerange-danmakulist',
		'method': 'get',
		'params': _0x1ca853,
		'success': function (_0x11a9fd) {
			var _0x10e99f = eval('(' + _0x11a9fd.responseText + ')');
			if (_0x10e99f.status == 1) {
				danmaku = {};
				var _0x2c83b0 = _0x10e99f.data;
				for (var _0x137793 = 0; _0x137793 < _0x2c83b0.length; _0x137793++) {
					var _0x5f43f7 = _0x2c83b0[_0x137793].timeline;
					!danmaku[_0x5f43f7] && (danmaku[_0x5f43f7] = new Array());
					danmaku[_0x5f43f7].push(_0x2c83b0[_0x137793].content);
				}
				_0x93d48b == 0 && danmuPlay(0);
			} else {
				console.log('服务异常,稍后再试!');
			}
		},
		'failure': function (_0x27bc68) {
			console.log('服务异常,稍后再试!');
		}
	});
}
var count = 0, timeFlag = -1, currentTime = 0, leftcancel = false, cancelOneSpan = false;
function shotdanmu(_0x16ed4e) {
	_0x16ed4e.addEventListener('mouseover', function () {
		cancelOneSpan = true;
		leftcancel = true;
	});
	_0x16ed4e.addEventListener('mouseout', function () {
		if (videojs('video').playStatus != 'pause') {
			cancelOneSpan = false;
			leftcancel = false;
		}
	});
	var _0x493827 = setInterval(function () {
		if (!leftcancel && !cancelOneSpan) {
			var _0xd852c3 = _0x16ed4e.offsetLeft;
			_0xd852c3 -= 10;
			_0x16ed4e.style.left = _0xd852c3 + 'px';
			if (_0xd852c3 < -_0x16ed4e.offsetWidth) {
				clearInterval(_0x493827);
				_0x16ed4e.remove();
			}
		}
	}, 100);
}
function danmuPlay(_0x208222) {
	currentTime = _0x208222;
	if (timeFlag == _0x208222) {
		return;
	}
	timeFlag = _0x208222;
	var _0x54aee4 = danmaku[_0x208222];
	if (!_0x54aee4) {
		return;
	}
	if (!$('.sp_tanmu').hasClass('sp_tanmu_blue')) {
		return;
	}
	var _0x503c29 = '<div class="danmuItem right" style="font-size:' + fontSize + 'px; opacity: ' + parseFloat(parseInt(fontOpacity) / 100) + '">';
	for (var _0x93d7b3 = 0; _0x93d7b3 < _0x54aee4.length; _0x93d7b3++) {
		if (_0x54aee4[_0x93d7b3] == '@赞同@') {
			_0x503c29 += '<span><i class="zanIcon"></i>赞同</span>';
		} else {
			if (_0x54aee4[_0x93d7b3] == '@不赞同@') {
				_0x503c29 += '<span><i class="noZanIcon"></i>不赞同</span>';
			} else {
				if (_0x54aee4[_0x93d7b3] == '@感动@') {
					_0x503c29 += '<span><i class="moveIcon"></i>感动</span>';
				} else {
					if (_0x54aee4[_0x93d7b3] == '@疑惑@' || _0x54aee4[_0x93d7b3] == '@听不懂@') {
						_0x503c29 += '<span><i class="doubtIcon"></i>听不懂</span>';
					} else {
						if (_0x54aee4[_0x93d7b3] == '@献花@' || _0x54aee4[_0x93d7b3] == '@讲得好@') {
							_0x503c29 += '<span><i class="huaIcon"></i>讲得好</span>';
						} else {
							if (_0x54aee4[_0x93d7b3] == '@鼓掌@') {
								_0x503c29 += '<span><i class="clapIcon"></i>鼓掌</span>';
							} else {
								if (_0x54aee4[_0x93d7b3] == '@有趣@') {
									_0x503c29 += '<span><i class="interestingIcon"></i>有趣</span>';
								} else {
									_0x54aee4[_0x93d7b3] == '@好难@' ? _0x503c29 += '<span><i class="hnIcon"></i>好难</span>' : _0x503c29 += '<span>' + _0x54aee4[_0x93d7b3] + '</span>';
								}
							}
						}
					}
				}
			}
		}
	}
	_0x503c29 += '</div>';
	var _0x44ade2 = $('.channel').length, _0x42af7d = count % _0x44ade2, _0xaddb3c = new Ext.XTemplate(_0x503c29).append('channel_' + _0x42af7d);
	shotdanmu(_0xaddb3c);
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
function checkJobCountLimit(_0x4f83d9, _0x541aa0) {
	/\/studentstudy/.test(pwindow.location.pathname) && (_0x541aa0 == 0 ? pwindow.showJobLimitTip() : pwindow.showVideoTimeLimitTip(), playStateV2 = setInterval(function () {
		pwindow.resumePlay && (clearStateV2Interval(), _0x4f83d9.play(), pwindow.resumePlay = false);
	}, 300));
}
;
function isStuViewPage() {
	return /\/studentstudy/.test(pwindow.location.pathname);
}
function showPopIframe(_0x52a29f, _0x16a168) {
	try {
		pwindow.showCustomPop && (_0x16a168.pause(), pwindow.showCustomPop(_0x52a29f), popPlayState = setInterval(function () {
			pwindow.popPlayState && (pwindow.popPlayState = false, clearPopStateInterval(), _0x16a168.eventCount <= 0 && _0x16a168.play());
		}, 1000));
	} catch (_0x58ad59) {
		console.log(_0x58ad59);
	}
}
function startFaceCollection(_0x16fe30, _0x5a61d8, _0x2203f6, _0x5dfc50) {
	if (/\/studentstudy/.test(pwindow.location.pathname)) {
		var _0xff6055 = $('.maskDiv1', pwindow.document).length;
		if (_0xff6055 > 0) {
			$('#videoJobId', pwindow.document).val(videoJobId);
			$('#chapterVideoObjectId', pwindow.document).val(videoObjectId);
			$('#collectionTime', pwindow.document).val(_0x5dfc50);
			$('#mid', pwindow.document).val(mid);
			pwindow.getQRCodeURLShow1 && pwindow.getQRCodeURLShow1();
			$('.maskDiv1', pwindow.document).css('display', 'block');
			getPlayState = setInterval(function () {
				if (pwindow.playerState) {
					clearStateInterval();
					_0x16fe30.play();
					_0x2203f6.firstPlayFace = false;
					pwindow.playerState = false;
					var _0x2d4149 = _0x2203f6.jumpTimePointList;
					_0x5dfc50 != -2 && typeof _0x2d4149 != 'undefined' && (_0x2d4149.push(_0x5dfc50), _0x2203f6.jumpTimePointList = _0x2d4149);
				}
			}, 1000);
		}
	}
}
function chapterPlayNextVideo(_0x47b508) {
	/\/studentstudy/.test(pwindow.location.pathname) && (pwindow.getChapterNextVideo && pwindow.getChapterNextVideo(_0x47b508));
}
function markersPlayer(_0x472219) {
	var _0x445821 = _0x472219.getAttribute('data-marker-time');
	if (_0x445821) {
		return playerTime(_0x445821);
	}
}
function closeFullScreen() {
	$('.vjs-fullscreen-control-self').click();
}
function getMarkers() {
	return videojs('video').markers;
}
function playerTime(_0x11d696) {
	if (ff != 1) {
		return;
	}
	var _0x2d0c78 = videojs('video');
	return _0x2d0c78.currentTime(_0x11d696);
}
function playVideo() {
	var _0x218d1 = videojs('video');
	player.volume(0);
	player.on('loadstart', function () {
		_0x218d1.play().catch(Ext.emptyFn);
	});
}
function fullele() {
	return document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement || document.mozFullScreenElement || null;
}
;
function isFullScreen() {
	return !!(document.webkitIsFullScreen || this.fullele());
}
function exitFullscreen() {
	if (document.exitFullScreen) {
		document.exitFullScreen();
	} else {
		if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else {
			if (document.webkitExitFullscreen) {
				document.webkitExitFullscreen();
			} else {
				document.msExitFullscreen && document.msExitFullscreen();
			}
		}
	}
}
;
var isFull = false;
function full(_0x340705) {
	if (_0x340705.requestFullscreen) {
		_0x340705.requestFullscreen();
	} else {
		if (_0x340705.mozRequestFullScreen) {
			_0x340705.mozRequestFullScreen();
		} else {
			if (_0x340705.webkitRequestFullscreen) {
				_0x340705.webkitRequestFullscreen();
			} else {
				_0x340705.msRequestFullscreen && _0x340705.msRequestFullscreen();
			}
		}
	}
}
;
top.bodyScrollNum = top.window.document.documentElement.scrollTop;
if (device == 1) {
	function toggleFullScreen() {
		isFullScreen() ? (exitFullscreen(), isFull = false, $('.fullScreenContainer').removeClass('full'), setTimeout(function () {
			top.window.document.documentElement.scrollTop = top.bodyScrollNum;
		}, 700)) : (top.bodyScrollNum = top.window.document.documentElement.scrollTop, isFull = true, full($('.fullScreenContainer')[0]), $('.fullScreenContainer').addClass('full'));
		reSizeIframe();
	}
	window.addEventListener('resize', function () {
		isFullScreen() ? ($('.vjs-fullscreen-control-self').attr('title', '退出全屏'), $('.vjs-fullscreen-control-self').children('i').addClass('closeFull'), isFull = true) : (isFull = false, $('.vjs-fullscreen-control-self').attr('title', '全屏'), $('.vjs-fullscreen-control-self').children('i').removeClass('closeFull'));
		reSizeIframe();
	});
}
function reSizeIframe() {
	try {
		if (/\/teacherstudy/.test(pwindow.location.pathname) || /\/studentstudy/.test(pwindow.location.pathname) || /\/nodedetailcontroller\/visitnodedetail/.test(pwindow.location.pathname)) {
			var _0x596c82 = parseInt(Ext.fly(Ext.select('.main').elements[0]).getWidth()), _0x3d630e = parseInt(_0x596c82 / 16 * 9);
			Ext.fly('reader').setHeight(_0x3d630e + 'px');
		}
		if (device == 1) {
			if (!isFull) {
				$('.vjs-control-bar .danmuDiv').remove();
			} else {
				Ext.fly('reader').setHeight('100%');
				if ($('.danmuDiv').css('display') != 'none' && $('.vjs-control-bar .danmuDiv').length == 0) {
					var _0x387e6c = $('.sp_function .danmuDiv').clone(true);
					$('.vjs-control-bar').append(_0x387e6c);
					bindDanmuSet();
					$('.vjs-control-bar .danmuDiv .sp_video_input').attr('placeholder', '发送弹幕\u2026');
				}
			}
			Ext.fly('boxscroll').setHeight(parseInt($('#video').height()) - 70 + 'px');
		}
		var _0x2d8987 = Ext.fly(Ext.select('.main').elements[0]).getHeight();
		Ext.fly(window.frameElement).setHeight(_0x2d8987 + 'px');
	} catch (_0x20155f) {
		console.log(_0x20155f.message);
	}
}
function removeDownloadBtn() {
	Ext.select('.xl-chrome-ext-bar').remove();
}
function getFontValIndex(_0x27298c, _0x18ed21) {
	if (_0x18ed21.length > 0) {
		for (var _0x498835 = 0; _0x498835 < _0x18ed21.length; _0x498835++) {
			if (_0x27298c == _0x18ed21[_0x498835]) {
				return _0x498835;
			}
		}
	}
}
function bindDanmuSet() {
	if ($('.vjs-control-bar .danmuDiv .set-content').length > 0) {
		$('.vjs-control-bar .danmuDiv .set-content').remove();
		var _0x5d3432 = ' <div class="set-content"><div class="range-container"><p>字号</p><input class="full-single-slider"/><div class="rangeVal" id="fullrangeVal1">标准</div></div><div class="range-container"><p>不透明度</p> <input class="full-slider2"/><div class="rangeVal" id="fullrangeVal2">80%</div></div></div>';
		$('.vjs-control-bar .danmuDiv .settings-container').append(_0x5d3432);
		$('.full-single-slider').ionRangeSlider({
			'skin': 'big',
			'min': 0,
			'max': 3,
			'step': 1,
			'from': getFontValIndex(fontSize, [
				14,
				18,
				22,
				26
			]),
			'grid': true,
			'values': [
				14,
				18,
				22,
				26
			],
			'onStart': function (_0x36ec0f) {
				$('.full-single-slider').prop('value', fontSize);
				$('#fullrangeVal1').html(_0x24bf61[fontSize]);
			},
			'onChange': function (_0x40166a) {
				$('#fullrangeVal1').html(_0x5d6513[_0x40166a.from_value]);
				fontSize = _0x40166a.from_value;
				$('.full-single-slider').prop('value', fontSize);
				$('.danmuItem').css('font-size', fontSize + 'px');
				var _0x135e5d = $('.single-slider').data('ionRangeSlider');
				_0x135e5d && _0x135e5d.update({
					'from': getFontValIndex(fontSize, [
						14,
						18,
						22,
						26
					])
				});
				$('.single-slider').prop('value', fontSize);
				$('#rangeVal1').html(_0x5d6513[_0x40166a.from_value]);
			}
		});
		$('.full-slider2').ionRangeSlider({
			'skin': 'big',
			'min': 1,
			'max': 100,
			'step': 1,
			'from': fontOpacity,
			'onStart': function (_0x388642) {
				$('.full-slider2').prop('value', fontOpacity);
				$('#fullrangeVal2').html(fontOpacity + '%');
			},
			'onChange': function (_0x1f65e7) {
				var _0x24e669 = _0x1f65e7.from;
				$('#fullrangeVal2').html(_0x24e669 + '%');
				fontOpacity = _0x24e669;
				$('.danmuItem').css('opacity', parseFloat(parseInt(_0x24e669) / 100));
				var _0x5cbc2b = $('.slider2').data('ionRangeSlider');
				_0x5cbc2b && (_0x5cbc2b.update({ 'from': fontOpacity }), $('.slider2').prop('value', fontOpacity), $('#rangeVal2').html(fontOpacity + '%'));
			}
		});
		$('.vjs-control-bar .danmuDiv .settings-container button').click(function () {
			fontSize = 18;
			fontOpacity = 80;
			var _0x21c5a3 = $('.full-slider2').data('ionRangeSlider');
			_0x21c5a3 && (_0x21c5a3.update({ 'from': fontOpacity }), $('.full-slider2').prop('value', fontOpacity), $('#fullrangeVal2').html(fontOpacity + '%'));
			var _0x21c5a3 = $('.slider2').data('ionRangeSlider');
			_0x21c5a3 && (_0x21c5a3.update({ 'from': fontOpacity }), $('.slider2').prop('value', fontOpacity), $('#rangeVal2').html(fontOpacity + '%'));
			var _0xac39fa = $('.full-single-slider').data('ionRangeSlider');
			_0xac39fa && (_0xac39fa.update({ 'from': 1 }), $('.full-single-slider').prop('value', 18), $('#fullrangeVal1').html('标准'));
			var _0x975c09 = $('.single-slider').data('ionRangeSlider');
			_0x975c09 && (_0x975c09.update({ 'from': 1 }), $('.single-slider').prop('value', 18), $('#rangeVal1').html('标准'));
		});
		$('.danmuItem').css('font-size', fontSize + 'px');
		$('.danmuItem').css('opacity', fontOpacity + '%');
	}
}
Ext.onReady(function () {
	window.setInterval('reSizeIframe()', 200);
	window.setInterval('removeDownloadBtn()', 500);
	/\/studentstudy/.test(pwindow.location.pathname) && typeof parent.parent.MultiEditor != 'undefined' && ($('.writeNote').css('display', 'block'), $('.writeNote_vid').css('display', 'block'), Ext.select('.sp_function').setStyle('height', '66px'));
	$('.writeNote_vid_edit').click(function () {
		$('#type', parent.parent.document).val(1);
		$('#noteVideoName', parent.parent.document).val(videoName);
		var _0x1d1123 = videojs('video'), _0x1a3153 = parseInt(_0x1d1123.currentTime());
		if (!parent.parent.writeVideoNote) {
			var _0x567ea1 = parseInt(_0x1a3153 / 60);
			_0x567ea1 < 10 && (_0x567ea1 = '0' + _0x567ea1.toString());
			var _0x539df7 = parseInt(_0x1a3153 % 60);
			_0x539df7 < 10 && (_0x539df7 = '0' + _0x539df7.toString());
			$('.Note_name', parent.parent.document).html(videoName + ' ' + _0x567ea1 + ':' + _0x539df7);
			$('.Note_name', parent.parent.document).css('display', 'block');
			$('#noteVideoTime', parent.parent.document).val(_0x1a3153);
			$('#noteVideoJobId', parent.parent.document).val(videoJobId);
			$('#noteVideoObjectId', parent.parent.document).val(videoObjectId);
		}
		parent.parent.getClazzNote && parent.parent.getClazzNote();
		parent.parent.changePan && parent.parent.changePan('3');
		if ($('.formTopic', parent.parent.document).size() > 0) {
			$('.formTopic', parent.parent.document).css('display', 'block');
			parent.parent.writeVideoNote && parent.parent.writeVideoNote(_0x1a3153, mid, window.frameElement);
		}
	});
});