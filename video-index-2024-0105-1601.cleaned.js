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
var currentLanguage = (function () {
	var _0x17ebb7 = getCookieFun('browserLocale'), _0x30ed43 = _0x17ebb7 && _0x17ebb7 == 'zh_TW' ? 'zh-tw' : 'zh-cn';
	return _0x17ebb7 && _0x17ebb7 == 'en_US' ? 'en' : _0x30ed43;
}()), isEn = currentLanguage == 'en' ? true : false;
function greenLightSetAriaLabel() {
	try {
		var _0x540149 = Ext.fly(window.frameElement).parent();
		if (_0x540149) {
			var _0x401eba = _0x540149.down('.ans-job-icon');
			_0x401eba && _0x401eba.set({ 'aria-label': '任务点已完成' });
		}
	} catch (_0x18c6df) {
		console.log(_0x18c6df);
	}
}
function isUnFinishJob() {
	try {
		var _0x2f72f6 = Ext.fly(window.frameElement).prev();
		if (_0x2f72f6 && _0x2f72f6.hasCls('ans-job-icon')) {
			return !Ext.fly(window.frameElement).parent().hasCls('ans-job-finished');
		}
		return false;
	} catch (_0xfdf2ed) {
		console.log(_0xfdf2ed);
	}
	return false;
}
var isViturlEdit = false, ff = 1;
function proxy_completed() {
	ed_complete && (greenligth(), ed_complete());
}
function config(_0x1e18b2) {
	return window.frameElement.getAttribute(_0x1e18b2);
}
function getCookie(_0x2f8a56) {
	var _0x171777 = document.cookie.split('; ');
	for (var _0x37da2e = 0; _0x37da2e < _0x171777.length; _0x37da2e++) {
		var _0x750e1e = _0x171777[_0x37da2e].split('=');
		if (_0x750e1e[0] == _0x2f8a56) {
			return unescape(_0x750e1e[1]);
		}
	}
}
function showMoocPlayer(_0x3026ab) {
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
			var _0x2d6375 = new MoocPlayer({
				'isSendLog': !!parent.AttachmentSetting && parent.AttachmentSetting.control,
				'data': _0x3026ab,
				'height': 540,
				'width': 676
			});
		});
	});
}
function bindVjsClick() {
	try {
		var _0x28baaa = config('jobid') || '';
		if (_0x28baaa != '' && window.parent.parent.location.href.indexOf('studentstudy') > -1) {
			var _0xbad7fb = $('.video-js .toolTipBox1'), _0x4bb34e = $('#tipDiv');
			_0xbad7fb.length === 0 && _0x4bb34e.length > 0 && $('.video-js').prepend(_0x4bb34e.html());
			if (!$('.toolTipBox1').is(':visible')) {
				$('.toolTipBox1').html($('#tipDiv .toolTipBox1').html());
				var _0x136718 = $('#video_html5_api').height();
				$('.toolTipBox1').css('top', parseInt(_0x136718 / 2) + 'px');
				$('.toolTipBox1').show();
				setTimeout(function () {
					$('.toolTipBox1').hide();
				}, 800);
			}
		}
	} catch (_0x44c45e) {
		console.log(_0x44c45e);
	}
}
function bindVjsRateClick() {
	try {
		var _0x1e8324 = $('.video-js .toolTipBox1'), _0x5a5b50 = $('#tipDiv'), _0x16654e = '该视频教师已关闭倍速功能\uFF0C任务点完成后可倍速播放';
		isEn && (_0x16654e = 'The teacher has set the video not allow double speed, and you can play double speed after the task point is completed');
		var _0x2cb546 = '<div class="toolTipBox1" style="display: none"><i class="loadicon"><img width="100%" height="100%" src="/ananas/videoeditor/images/tips_pop.png"/></i>' + _0x16654e + '</div>', _0x392f76 = '<i class="loadicon"><img width="100%" height="100%" src="/ananas/videoeditor/images/tips_pop.png"/></i>' + _0x16654e;
		_0x1e8324.length === 0 && _0x5a5b50.length > 0 ? $('.video-js').prepend(_0x2cb546) : $(_0x1e8324).html(_0x392f76);
		if (!$('.toolTipBox1').is(':visible')) {
			var _0x4e8ad4 = $('#video_html5_api').height();
			$('.toolTipBox1').css('top', parseInt(_0x4e8ad4 / 2) + 'px');
			$('.toolTipBox1').show();
			setTimeout(function () {
				$('.toolTipBox1').hide();
			}, 800);
		}
	} catch (_0x27d867) {
		console.log(_0x27d867);
	}
}
var watermarkStr = '', showWaterMark = false, studentName = '', studentLoginName = '';
function getTimeByDay() {
	var _0x6e14c4 = new Date(), _0x26b3a5 = _0x6e14c4.getFullYear(), _0x31676a = _0x6e14c4.getMonth() + 1, _0x523ba8 = _0x6e14c4.getDate();
	return _0x31676a = _0x31676a < 10 ? '0' + _0x31676a : _0x31676a, _0x523ba8 = _0x523ba8 < 10 ? '0' + _0x523ba8 : _0x523ba8, _0x26b3a5 + '-' + _0x31676a + '-' + _0x523ba8;
}
function showHTML5Player(_0x21cd25) {
	showWaterMark = _0x21cd25.showWatermark;
	Ext.get('reader').setHTML('<video id="video" class="video-js vjs-default-skin vjs-big-play-centered" crossorigin="Anonymous"></video>');
	new ans.VideoJs({
		'videojs': 'video',
		'params': _0x21cd25
	});
	if (_0x21cd25.fid == 179952 || _0x21cd25.cookieFid == 179952 || getCookie('fid') == 179952) {
		var _0x17fb9a = document.createElement('style');
		_0x17fb9a.type = 'text/css';
		_0x17fb9a.innerHTML = '.vjs-text-track-display{bottom:6em !important;}.fullScreenContainer.full .vjs-text-track-display{bottom: 8em !important;}';
		document.head.appendChild(_0x17fb9a);
	}
	$('.vjs-big-play-button')[0].addEventListener('click', function () {
		if (_0x21cd25.duration < 120 || pwindow.location.href.indexOf('nodedetailcontroller/visitnodedetail') > -1 || _0x21cd25.ut == 't') {
			$('.video_setting_hotmap').hide();
			$('.vjs-sub-title.videoTitle').css('margin-top', '0px');
			return;
		}
		var _0x1d1681 = {
			'clazzid': _0x21cd25.clazzId,
			'knowledgeid': _0x21cd25.knowledgeid,
			'objectid': _0x21cd25.objectid,
			'courseid': _0x21cd25.courseid,
			'cpi': _0x21cd25.cpi,
			'ut': _0x21cd25.ut
		};
		Ext.Ajax.request({
			'url': '/mooc-ans/courseapi/getvideohotdata',
			'method': 'get',
			'params': _0x1d1681,
			'success': function (_0x5b7551) {
				var _0x2e946a = eval('(' + _0x5b7551.responseText + ')');
				if (_0x2e946a.code == 1) {
					var _0x3bbadc = _0x2e946a.data, _0x2bfa96 = [];
					for (var _0xd034f4 = 0; _0xd034f4 < _0x3bbadc.length; _0xd034f4++) {
						var _0x3b2d2a = _0x3bbadc[_0xd034f4];
						_0x2bfa96.push(_0x3b2d2a.count);
					}
					if (_0x2bfa96.length < 2) {
						$('.video_setting_hotmap').hide();
						$('.vjs-sub-title.videoTitle').css('margin-top', '0px');
						return;
					}
					var _0x91647a = '<div id="hot_map_main" style="height:60px;width:100%;position:absolute;bottom:48px;"></div>';
					$('.vjs-control-bar').append(_0x91647a);
					var _0xbd2be2 = document.getElementById('hot_map_main'), _0x2c8360 = echarts.init(_0xbd2be2), _0x1cc9ad;
					_0x1cc9ad = {
						'color': [
							'#6CA9FF80',
							'#00DDFF',
							'#37A2FF',
							'#FF0087',
							'#FFBF00'
						],
						'tooltip': {
							'show': false,
							'trigger': 'axis',
							'axisPointer': {
								'type': 'cross',
								'label': { 'backgroundColor': '#6a7985' }
							}
						},
						'grid': {
							'left': '0%',
							'right': '0%',
							'bottom': '0%',
							'top': 0,
							'containLabel': true
						},
						'xAxis': [{
							'type': 'category',
							'boundaryGap': false,
							'axisTick': { 'show': false },
							'axisLine': { 'show': false },
							'axisLabel': { 'show': false },
							'splitLine': { 'show': false }
						}],
						'yAxis': [{
							'type': 'value',
							'axisTick': { 'show': false },
							'axisLine': { 'show': false },
							'axisLabel': { 'show': false },
							'splitLine': { 'show': false }
						}],
						'series': [{
							'name': 'Line 1',
							'type': 'line',
							'stack': 'Total',
							'smooth': true,
							'lineStyle': { 'width': 0 },
							'showSymbol': false,
							'areaStyle': { 'opacity': 0.5 },
							'emphasis': { 'focus': 'series' },
							'data': _0x2bfa96
						}]
					};
					_0x1cc9ad && _0x2c8360.setOption(_0x1cc9ad);
					_0x2bfa96.length > 1 ? ($('.vjs-control-bar .vjs-self-setting').show(), $('.vjs-resolution-button').css('right', '140px'), $('.vjs-playline-button').css('right', '100px'), $('.video_setting_hotmap .vjs_hotmap_title .hotmapSwitch').click(function (_0x3e80ad) {
						$(this).hasClass('swithOn') ? ($(this).removeClass('swithOn'), $('#hot_map_main').hide()) : ($(this).addClass('swithOn'), $('#hot_map_main').show());
					})) : ($('.video_setting_hotmap').hide(), $('.vjs-sub-title.videoTitle').css('margin-top', '0px'));
				} else {
					$('.video_setting_hotmap').hide();
					$('.vjs-sub-title.videoTitle').css('margin-top', '0px');
					console.log('服务异常,稍后再试!');
				}
			},
			'failure': function (_0x482d6e) {
				console.log('服务异常,稍后再试!');
			}
		});
	});
	studentName = _0x21cd25.studentName;
	studentLoginName = _0x21cd25.studentLoginName;
	showWaterMark && studentName && (watermarkStr = studentName + ' ' + (studentLoginName ? studentLoginName + ' ' : '') + getTimeByDay(), watermark({
		'watermarl_element': 'video',
		'watermark_txt': watermarkStr
	}));
	if (typeof aplus_queue != 'undefined') {
		var _0x59db75 = parent.AttachmentSetting;
		if (_0x59db75) {
			var _0x2a337a = _0x59db75.aplus_video_id, _0x15d35a = _0x59db75.aplus_resource_id, _0x147874 = _0x59db75.knowledgename, _0x2f13dc = _0x59db75.coursename, _0x3b54d9 = {
				'video_name': _0x147874,
				'video_id': _0x2a337a,
				'resource_id': _0x15d35a,
				'resource_name': _0x2f13dc
			};
			$('.vjs-big-play-button')[0].addEventListener('click', function () {
				typeof aplus_queue != 'undefined' && aplus_queue.push({
					'action': 'aplus.record',
					'arguments': [
						'video_pybk_click',
						'CLK',
						_0x3b54d9
					]
				});
			});
			$('.vjs-mute-control')[0].addEventListener('click', function () {
				!$(this).hasClass('vjs-vol-0') ? typeof aplus_queue != 'undefined' && aplus_queue.push({
					'action': 'aplus.record',
					'arguments': [
						'no_sound_click',
						'CLK',
						_0x3b54d9
					]
				}) : typeof aplus_queue != 'undefined' && aplus_queue.push({
					'action': 'aplus.record',
					'arguments': [
						'enable_sound_click',
						'CLK',
						_0x3b54d9
					]
				});
			});
			$('.vjs-volume-level')[0].addEventListener('mouseup', function () {
				typeof aplus_queue != 'undefined' && aplus_queue.push({
					'action': 'aplus.record',
					'arguments': [
						'volume_control_drag',
						'OTHER',
						_0x3b54d9
					]
				});
			});
			var _0x5b1bdd = null;
			function _0x34c800() {
				if ($('.vjs-fullscreen-control-self').length > 0) {
					$('.vjs-fullscreen-control-self')[0].addEventListener('click', function () {
						$(this).attr('title') == '全屏' ? typeof aplus_queue != 'undefined' && aplus_queue.push({
							'action': 'aplus.record',
							'arguments': [
								'full_screen_click',
								'CLK',
								_0x3b54d9
							]
						}) : typeof aplus_queue != 'undefined' && aplus_queue.push({
							'action': 'aplus.record',
							'arguments': [
								'small_screen_click',
								'CLK',
								_0x3b54d9
							]
						});
					});
					clearInterval(_0x5b1bdd);
				}
			}
			_0x5b1bdd = setInterval(_0x34c800, 100);
		}
	}
	document.getElementsByTagName('video')[0].addEventListener('play', function () {
		var _0x594a20 = parent.document.getElementsByTagName('iframe');
		for (var _0x1b554b = 0; _0x1b554b < _0x594a20.length; _0x1b554b++) {
			if (_0x594a20[_0x1b554b].getAttribute('src').indexOf('microCourse') != -1) {
				var _0x19add9 = _0x594a20[_0x1b554b].contentWindow.document.getElementsByTagName('iframe')[0].contentWindow;
				_0x19add9.PageView.stopAll && _0x19add9.PageView.stopAll();
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
			showWaterMark && studentName && ($('#video').find('.mask_div').remove(), watermark({
				'watermarl_element': 'video',
				'watermark_txt': watermarkStr
			}));
		});
	});
	function _0x4f3351() {
		var _0x419d27 = $('#video').height(), _0x40097e = $('#sp_video_ppt_pic').height(), _0x118dbb = (parseInt(_0x419d27) - 60 - parseInt(_0x40097e)) / 2;
		$('#sp_video_ppt_pic').length > 0 && $('#sp_video_ppt_pic').hasClass('sp_ppt_pic_fullScreen') ? ($('#sp_video_ppt_pic').css('top', _0x118dbb + 'px'), $('#sp_video_ppt_pic').css('left', '0')) : ($('#sp_video_ppt_pic').css('top', '0px'), $('#sp_video_ppt_pic').css('left', '0px'));
		showWaterMark && studentName && ($('#video').find('.mask_div').remove(), watermark({
			'watermarl_element': 'video',
			'watermark_txt': watermarkStr
		}));
	}
	var _0x73cc7f = null;
	function _0x3628f7() {
		if ($('.vjs-fullscreen-control-self').length > 0) {
			$('.vjs-fullscreen-control-self')[0].addEventListener('click', function () {
				setTimeout(_0x4f3351, 300);
			});
			clearInterval(_0x73cc7f);
		}
	}
	_0x73cc7f = setInterval(_0x3628f7, 100);
	$(window).resize(function () {
		setTimeout(_0x4f3351, 500);
	});
}
var wrongObj = '', videoName = '', videoJobId = '', videoObjectId = '', mid = '';
function loadVideo() {
	var _0x47fed7 = config('objectid'), _0x29dbee = Ext.get('reader');
	if (!_0x47fed7) {
		_0x29dbee.setHTML('未找到该文件');
		return;
	}
	wrongObj = _0x47fed7;
	videoObjectId = _0x47fed7;
	var _0x236e20 = window.frameElement, _0xc32502 = Ext.decode(_0x236e20.getAttribute('data')), _0x5e7544 = parent.AttachmentSetting, _0x406618 = parent.previewAttachments;
	mid = config('mid');
	var _0x5d5a36 = 0, _0x2cdd52 = config('vbegin'), _0x38c435 = config('vend'), _0x15e51e = config('jobid') || '', _0x43eb6c = _0xc32502 ? _0xc32502.danmaku == null ? 0 : _0xc32502.danmaku : 0, _0x7354b0 = _0x5e7544 && _0x5e7544.videoTopicCloud, _0x40be11 = _0x5e7544 && _0x5e7544.supportHeartbeat, _0x2fe99c = _0x5e7544 && _0x5e7544.supportVideoPluginV1, _0x2bffbb = _0x5e7544 && _0x5e7544.requestConfigUrl, _0x261763 = config('fastforward') == 'true' ? true : false, _0x1e5679 = config('switchwindow') == 'true' ? true : false, _0x638c27 = Ext.get('note'), _0x5a9583 = Ext.get('hl'), _0x5131b1 = Ext.get('note1-wrap'), _0x2f7180 = Ext.get('note1'), _0x2dd9d2 = null, _0x192571 = _0xc32502 ? _0xc32502.rt ? _0xc32502.rt : 0.9 : 0.9;
	_0x15e51e == '' ? videoJobId = _0xc32502 && _0xc32502['_jobid'] ? _0xc32502['_jobid'] : '' : videoJobId = _0x15e51e;
	var _0xb9f6c1 = flashChecker().hasFlash, _0x30275b = _0x5e7544 && _0x5e7544.defaults && _0x5e7544.defaults.isForScreen == 1;
	try {
		var _0x31ad4b = pwindow.location.href.indexOf('teacherstudy') > 0 || pwindow.location.href.indexOf('course/phone/chapterdata') > 0 || _0x30275b;
	} catch (_0x523f50) {
		_0x31ad4b = false;
	}
	var _0x38becd = parent.isVideoVisibleName, _0x33a48b = _0xc32502 ? _0xc32502.doublespeed != 0 ? 1 : 0 : 1;
	_0xc32502.v_begin && _0xc32502.v_end && _0xc32502.pobjectid && (isViturlEdit = true);
	function _0x51696c(_0x2a2336) {
		if (_0x2a2336 && _0x2a2336.length == 0) {
			return;
		}
		if (Ext.select('.zsCloud_ul') != null) {
			var _0x2f98be = '';
			for (var _0x45eebc = 0, _0x648e7d = _0x2a2336.length; _0x45eebc < _0x648e7d; _0x45eebc++) {
				_0x2f98be += '<li><span class=\'zsCloud_span topicId' + _0x2a2336[_0x45eebc].id + '\' onclick=\'markersPlayer(this)\'>' + _0x2a2336[_0x45eebc].name + ' </span></li>';
			}
			Ext.select('.zsCloud_ul').setHTML(_0x2f98be);
			Ext.select('.zsCloud').setStyle('display', 'block');
		}
	}
	function _0x50ad86() {
		_0x5d5a36 <= 100 && _0x5a9583.setWidth((_0x5d5a36 += 5) + '%');
		var _0x2dfb04 = getCookie('fid') || '';
		Ext.Ajax.request({
			'url': '/ananas/status/' + _0x47fed7 + '?k=' + _0x2dfb04 + '&flag=normal',
			'success': function (_0x906512) {
				var _0x92386c = eval('(' + _0x906512.responseText + ')');
				Ext.get('loading').hide();
				switch (_0x92386c.status) {
					case 'success':
						_0x5131b1.remove(), videoName = _0xc32502 && _0xc32502.name || '';
						var _0x3267a7 = 0;
						try {
							var _0x4aea5c = _0x92386c.duration;
							if (_0x406618 && pwindow.location.href.indexOf('nodedetailcontroller/visitnodedetail') > -1) {
								var _0xbcdfd5 = _0x92386c.objectid + '-' + (_0x2cdd52 ? _0x2cdd52 : 0) + '-' + (_0x38c435 ? _0x38c435 : _0x4aea5c) + '-' + _0x15e51e;
								for (var _0x418c2f = 0; _0x418c2f < _0x406618.length; _0x418c2f++) {
									var _0x3917ce = _0x406618[_0x418c2f], _0x573b5e = 0, _0x27b0e1 = _0x4aea5c;
									_0x3917ce.property && (_0x3917ce.property.vbegin && (_0x573b5e = _0x3917ce.property.vbegin), _0x3917ce.property.vend && (_0x27b0e1 = _0x3917ce.property.vend));
									!_0x3917ce.jobid && (_0x3917ce.jobid = '');
									var _0x29a400 = _0x3917ce.objectId + '-' + _0x573b5e + '-' + _0x27b0e1 + '-' + _0x3917ce.jobid;
									_0xbcdfd5 == _0x29a400 && (_0x3267a7 = _0x3917ce.customType);
								}
							}
						} catch (_0x1bf3c1) {
							console.log(_0x1bf3c1);
						}
						var _0x5b4408 = _0x92386c.duration, _0x7fffaa = {
							'enableFastForward': _0x261763 ? 0 : 1,
							'enableSwitchWindow': _0x1e5679 ? 0 : 1,
							'duration': _0x5b4408,
							'httpmd': _0x92386c.httpmd,
							'http': _0x92386c.http,
							'httphd': _0x92386c.httphd,
							'httpshd': _0x92386c.httpshd,
							'filename': _0x92386c.filename,
							'dtoken': _0x92386c.dtoken,
							'videoTopicCloud': _0x7354b0
						};
						window.duration = _0x5b4408;
						_0x92386c.cdn && (_0x7fffaa.cdn = _0x92386c.cdn);
						if (document.cookie.length > 0) {
							_0x7fffaa.memberinfo = getCookie('memberinfo');
							_0x7fffaa.questionErrorLogUrl = ServerHosts.MASTER_HOST + '/question/addquestionerror';
						}
						mid && (_0x7fffaa.mid = mid);
						_0x92386c.duration && (_0x7fffaa.videoTotalTime = _0x92386c.duration);
						if (_0x5e7544 && _0x5e7544.isErya == 1) {
							_0x7fffaa.screenshot = ServerHosts.P_HOST + '/star3/origin/a26e16b5ac8e769bba6bda57343b7d57.png';
						} else {
							_0x92386c.screenshot && (!_0xc32502.screenshot ? _0x7fffaa.screenshot = _0x92386c.screenshot : _0x7fffaa.screenshot = _0xc32502.screenshot);
						}
						_0x5e7544 && (_0x7fffaa.chapterVideoTranslate = _0x5e7544.chapterVideoTranslate);
						_0x92386c.thumbnails && (_0x7fffaa.thumbnails = _0x92386c.thumbnails);
						_0x92386c.subobjectid && (_0x7fffaa.subobjectid = _0x92386c.subobjectid);
						_0x2cdd52 && (_0x7fffaa.startTime = _0x2cdd52);
						_0x38c435 && (_0x7fffaa.endTime = _0x38c435);
						_0x7fffaa.objectid = _0x47fed7, _0x7fffaa.rt = _0x192571, _0x7fffaa.control = _0x5e7544 && _0x5e7544.control;
						_0x31ad4b && (_0x7fffaa.control = false);
						_0x7fffaa.ut = _0x5e7544 && _0x5e7544.ut;
						var _0x4e1f6c = {}, _0x407628, _0x120741, _0x190860, _0x4c2633 = '', _0xe9011d = '';
						if (_0x5e7544 && _0x5e7544.control) {
							var _0x5870bf = _0x5e7544.attachments, _0x55ed4a = _0x5e7544.defaults, _0x405d3c = _0x92386c.objectid + '-' + (_0x2cdd52 ? _0x2cdd52 : 0) + '-' + (_0x38c435 ? _0x38c435 : _0x5b4408) + '-' + _0x15e51e;
							_0x55ed4a && (_0x7fffaa.userid = _0x55ed4a.userid || '', _0x7fffaa.fid = _0x55ed4a.fid || '', _0x7fffaa.courseid = _0x55ed4a.courseid || '', _0x7fffaa.clazzId = _0x55ed4a.clazzId || '', _0x7fffaa.knowledgeid = _0x55ed4a.knowledgeid || '', _0x7fffaa.cookieFid = _0x55ed4a.cookieFid || '', _0x4c2633 = _0x55ed4a.username || '', _0xe9011d = _0x55ed4a.loginName || '', _0x7fffaa.cFid = _0x55ed4a.cFid || '');
							!_0x31ad4b && (_0x7fffaa.studentName = _0x4c2633, _0x7fffaa.studentLoginName = _0xe9011d, _0x7fffaa.showWatermark = true);
							for (var _0x1c6ccb = 0; _0x1c6ccb < _0x5870bf.length; _0x1c6ccb++) {
								_0x4e1f6c = _0x5870bf[_0x1c6ccb];
								_0x120741 = 0;
								_0x190860 = _0x5b4408;
								_0x4e1f6c.property && (_0x4e1f6c.property.vbegin && (_0x120741 = _0x4e1f6c.property.vbegin), _0x4e1f6c.property.vend && (_0x190860 = _0x4e1f6c.property.vend));
								!_0x4e1f6c.jobid && (_0x4e1f6c.jobid = '');
								_0x407628 = _0x4e1f6c.objectId + '-' + _0x120741 + '-' + _0x190860 + '-' + _0x4e1f6c.jobid;
								if (_0x405d3c == _0x407628) {
									_0x7fffaa.videoEnc = _0x4e1f6c.videoEnc || '';
									Ext.apply(_0x7fffaa, _0x5e7544.defaults);
									_0x3267a7 = _0x4e1f6c.customType;
									var _0x28c60a = _0x4e1f6c.begins ? parseInt(_0x4e1f6c.begins) : 0;
									_0x28c60a > 0 && _0x92386c.duration ? _0x7fffaa.begins = _0x28c60a > _0x92386c.duration ? 0 : _0x28c60a : _0x7fffaa.begins = 0;
									var _0x1121de = _0x4e1f6c.ends ? parseInt(_0x4e1f6c.ends) : 0;
									if (_0x1121de > 0 && _0x92386c.duration) {
										var _0x4778a3 = _0x92386c.duration - _0x1121de;
										_0x7fffaa.ends = _0x4778a3 < 0 ? 0 : _0x4778a3;
									} else {
										_0x7fffaa.ends = 0;
									}
									if (_0x7fffaa.ends < _0x7fffaa.begins) {
										_0x7fffaa.begins = 0;
										_0x7fffaa.ends = 0;
									}
									_0x7fffaa.headOffset = _0x4e1f6c.headOffset ? Math.floor(parseInt(_0x4e1f6c.headOffset) / 1000) : 0;
									_0x7fffaa.objectId = _0x4e1f6c.objectId;
									_0x7fffaa.otherInfo = _0x4e1f6c.otherInfo;
									_0x7fffaa.isPassed = _0x4e1f6c.isPassed;
									_0x7fffaa.aId = _0x4e1f6c.aid;
									_0x7fffaa.danmaku = _0x43eb6c;
									_0x4e1f6c.topicList && _0x51696c(_0x4e1f6c.topicList);
									_0x7fffaa.jumpTimePointList = _0x4e1f6c.jumpTimePointList;
									_0x4e1f6c.property && _0x4e1f6c.property.fastforward && _0x4e1f6c.property.fastforward == 'true' && (_0x7fffaa.enableFastForward = 0);
									_0x4e1f6c.property && typeof _0x4e1f6c.property.doublespeed != 'undefined' && _0x4e1f6c.property.doublespeed == 0 && (_0x7fffaa.doublespeed = 0, _0x33a48b = 0);
									var _0x566b4f = _0x7fffaa.schooldoublespeed;
									typeof _0x566b4f == 'undefined' || _0x566b4f == 2 ? _0x7fffaa.doublespeed = _0x33a48b : _0x7fffaa.doublespeed = _0x566b4f;
									(!_0x4e1f6c.job || _0x31ad4b) && (_0x7fffaa.doublespeed = 1);
									_0x15e51e && (_0x7fffaa.jobid = _0x15e51e, !_0x4e1f6c.job && (!_0x31ad4b && greenligth(), ed_complete = false, _0x7fffaa.enableFastForward = 1, _0x7fffaa.enableSwitchWindow = 1, _0x4e1f6c.headOffset == _0x4e1f6c.playTime && _0x4e1f6c.headOffset == _0x7fffaa.videoTotalTime * 1000 ? _0x7fffaa.headOffset = 0 : _0x7fffaa.headOffset = Math.floor(parseInt(_0x4e1f6c.playTime) / 1000)));
									try {
										if (_0x40be11 && pwindow.location.href.indexOf('/studentstudy') > -1) {
											var _0xd14fb = _0x7fffaa.courseid || 0, _0x287b78 = _0x7fffaa.clazzId || 0, _0xb21413 = _0x7fffaa.knowledgeid || 0, _0x33107d = _0x7fffaa.cookieFid || 0, _0x433454 = _0x7fffaa.headOffset || 0, _0x54ce44 = _0x7fffaa.userid || 0;
											Ext.Ajax.request({
												'url': _0x2bffbb,
												'async': false,
												'params': {
													'uid': _0x54ce44,
													'schoolId': _0x33107d,
													'moocClassId': _0x287b78,
													'moocCourseId': _0xd14fb,
													'chapterId': _0xb21413,
													'objectId': _0x47fed7,
													'videoProgress': _0x433454,
													'totalVideoDuration': _0x4aea5c,
													'enc': _0x7fffaa.videoEnc
												},
												'method': 'get',
												'success': function (_0x341772) {
													var _0x3e24c0 = eval('(' + _0x341772.responseText + ')');
													_0x3e24c0.result === 1 ? (_0x7fffaa.eventArray = _0x3e24c0.eventArray, _0x7fffaa.supportHeartbeat = true) : _0x7fffaa.supportHeartbeat = false;
												},
												'failure': function () {
													_0x7fffaa.supportHeartbeat = false;
												}
											});
										}
										if (_0x2fe99c && pwindow.location.href.indexOf('/studentstudy') > -1) {
											var _0xd14fb = _0x7fffaa.courseid || 0, _0x287b78 = _0x7fffaa.clazzId || 0, _0xb21413 = _0x7fffaa.knowledgeid || 0, _0x33107d = _0x7fffaa.cookieFid || 0, _0x433454 = _0x7fffaa.headOffset || 0, _0x54ce44 = _0x7fffaa.userid || 0;
											Ext.Ajax.request({
												'url': _0x2bffbb,
												'async': false,
												'params': {
													'uid': _0x54ce44,
													'schoolId': _0x33107d,
													'moocClassId': _0x287b78,
													'moocCourseId': _0xd14fb,
													'chapterId': _0xb21413,
													'objectId': _0x47fed7,
													'videoProgress': _0x433454,
													'totalVideoDuration': _0x4aea5c,
													'enc': _0x7fffaa.videoEnc
												},
												'method': 'get',
												'success': function (_0x398968) {
													var _0x295a2c = eval('(' + _0x398968.responseText + ')');
													_0x295a2c.result === 1 ? (_0x7fffaa.eventArray = _0x295a2c.eventArray, _0x7fffaa.supportVideoPluginV1 = true) : _0x7fffaa.supportVideoPluginV1 = false;
												},
												'failure': function () {
													_0x7fffaa.supportVideoPluginV1 = false;
												}
											});
										}
									} catch (_0x24d45c) {
										console.log(_0x24d45c);
									}
									_0x7fffaa.reportUrl = _0x7fffaa.reportUrl && _0x7fffaa.reportUrl.replace('http://', window.location.protocol + '//');
									window['_jobindex'] = _0x1c6ccb;
									break;
								}
							}
						} else {
							var _0x566b4f = _0x7fffaa.schooldoublespeed;
							typeof _0x566b4f == 'undefined' || _0x566b4f == 2 ? _0x7fffaa.doublespeed = _0x33a48b : _0x7fffaa.doublespeed = _0x566b4f;
						}
						var _0x51c0d1 = '', _0x188d2a = '';
						(pwindow.location.href.indexOf('nodedetailcontroller/visitnodedetail') > -1 || pwindow.location.href.indexOf('mycourse/teacherstudy') > -1) && parseInt(_0x3267a7) === 2 && (_0x51c0d1 = '<span style = "display: inline-block;width: 40px; height: 20px;font-size: 12px;background:#F9F9FA;border:1px solid #D5E2F1;border-radius:4px;text-align:center;line-height:20px;color: #6B89B3;position: absolute;right: 0; top: 0px;">动画</span>', _0x188d2a = '<span style ="display: inline-block;overflow: hidden;float: right;text-overflow: ellipsis;white-space: nowrap;width: 40px;height: 20px;font-size: 12px;background: #F9F9FA;border:1px solid #D5E2F1;border-radius:4px;text-align: center;line-height:20px;color:#6B89B3;right:0;top:0;">动画</span>');
						if (_0x38becd != 'false') {
							Ext.fly(window.frameElement).parent().first('.ans-job-icon') != null ? pwindow.location.href.indexOf('nodedetailcontroller/visitnodedetail') > -1 ? Ext.fly(window.frameElement).parent().insertHtml('afterBegin', '<div title="' + videoName + '" style="width: 500px;display: inline-block;line-height: 23px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">' + videoName + '</div>' + _0x188d2a) : (Ext.fly(window.frameElement).parent().first('.ans-job-icon').insertHtml('beforeEnd', '<span title="' + videoName + '" style="width: 500px;margin-left: 137px;display: inline-block;height: 23px;line-height: 23px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">' + videoName + '</span>' + _0x51c0d1), _0x51c0d1 != '' && Ext.fly(window.frameElement).parent().addCls('relativeClass')) : (Ext.fly(window.frameElement).parent().insertHtml('afterBegin', '<div title="' + videoName + '" style="width: 500px;display: inline-block;line-height: 23px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">' + videoName + '</div>' + _0x188d2a), _0x188d2a != '' && Ext.fly(window.frameElement).parent().addCls('relativeClass'));
						} else {
							try {
								Ext.fly(window.frameElement).parent().first('.ans-job-icon') != null ? pwindow.location.href.indexOf('nodedetailcontroller/visitnodedetail') > -1 ? _0x188d2a != '' && Ext.fly(window.frameElement).parent().insertHtml('afterBegin', _0x188d2a) : _0x51c0d1 != '' && (Ext.fly(window.frameElement).parent().first('.ans-job-icon').insertHtml('beforeEnd', _0x51c0d1), Ext.fly(window.frameElement).parent().addCls('relativeClass')) : _0x188d2a != '' && (Ext.fly(window.frameElement).parent().insertHtml('afterBegin', _0x188d2a), Ext.fly(window.frameElement).parent().addCls('relativeClass'));
							} catch (_0x19cf78) {
								console.log(_0x19cf78);
							}
						}
						if (_0x7fffaa.ignoreVideoCtrl == 1) {
							_0x7fffaa.enableFastForward = 1;
							_0x7fffaa.enableSwitchWindow = 1;
						}
						(!_0x7fffaa.control || _0x31ad4b) && (ed_complete = false, _0x7fffaa.enableFastForward = 1, _0x7fffaa.enableSwitchWindow = 1, _0x7fffaa.headOffset = 0);
						_0x7fffaa.isPassed && _0x7fffaa.headOffset > _0x7fffaa.videoTotalTime * 0.95 && (_0x7fffaa.headOffset = 0);
						_0x2dd9d2 && clearInterval(_0x2dd9d2), _0x7fffaa.isSupportFace = $('.maskDiv1', pwindow.document).length > 0 && /\/studentstudy/.test(pwindow.location.pathname) ? true : false, _0x7fffaa.isShowFaceCollection = /\/studentstudy/.test(pwindow.location.pathname) && !Ext.fly(window.frameElement).parent().hasCls('ans-job-finished');
						if (supportH5Video()) {
							_0xc32502.danmaku && (loadMultiFile([{
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
											'src': 'cxplayer/videodanmu.js?v=19',
											'tag': 'script',
											'type': 'text/javascript',
											'defer': 'defer'
										}]);
									});
								});
							}), Ext.select('.danmuDiv').setStyle('display', 'inline-block'), Ext.select('.sp_function').setStyle('height', '66px'));
							ff = _0x7fffaa.enableFastForward;
							if (typeof aplus_queue != 'undefined') {
								_0x7fffaa.aplus_video_id = _0x5e7544.aplus_video_id;
								_0x7fffaa.aplus_resource_id = _0x5e7544.aplus_resource_id;
								_0x7fffaa.knowledgename = _0x5e7544.knowledgename;
								_0x7fffaa.coursename = _0x5e7544.coursename;
							}
							_0x7fffaa.deviceType = device;
							showHTML5Player(_0x7fffaa);
						} else {
							if (!_0xb9f6c1) {
								var _0x17f9a2 = 'http://www.adobe.com/go/getflashplayer';
								Ext.get('reader').setHTML('您没有安装flashplayer\uFF0C请到<a href="' + _0x17f9a2 + '" target="_blank">www.adobe.com</a>下载安装\u3002<br/>如果已经安装请点击此处启用\uFF1A<object id="swf_jlxl1lfb" height="50" width="100" type="application/x-shockwave-flash" data="/ananas/modules/video/cxplayer/player_4.0.11.swf?v=20161025" style="border:#ccc 1px solid"><param name="quality" value="high"><param name="allowScriptAccess" value="always"><param name="wMode" value="transparent"><param name="align" value="middle"><param name="bgcolor" value="#000000"><param name="swLiveConnect" value="true"><param name="loop" value="true"><param name="play" value="true"><param name="DeviceFont" value="false"><param name="allowFullScreen" value="true"><param name="menu" value="true"></object>');
								return;
							}
							showMoocPlayer(_0x7fffaa);
						}
						sendReadZTMediaLog(0);
						break;
					case 'failed':
						_0x2dd9d2 && clearInterval(_0x2dd9d2), _0x5131b1.remove(), _0x638c27.show();
						break;
					case 'waiting':
						_0x5131b1.update('<div class="line1"><div class="line3"></div></div><p class="tipStyle making">视频正在转码\uFF0C您无需在此页面等待\u30109001\u3011</p>');
						break;
					case 'converting':
					case 'transfer':
						_0x5131b1.update('<div class="line1"><div class="line2"></div></div><p class="tipStyle">视频上传中\u30109002\u3011</p>');
						break;
				}
			},
			'failure': function (_0xc2d566) {
				_0xc2d566.status == 0 ? (_0x2dd9d2 && clearInterval(_0x2dd9d2), _0x5131b1.update('<div class="line1"><div class="line2"></div></div><p class="tipStyle">视频加载超时\uFF0C请刷新页面重试\u30109003\u3011</p>'), Ext.get('loading').hide()) : (_0x2dd9d2 && clearInterval(_0x2dd9d2), _0x5131b1.update('<div class="line1"><div class="line3"></div></div><p class="tipStyle">视频加载失败\uFF0C请稍后再试\u30109004\u3011</p>'), Ext.get('loading').hide());
			}
		});
	}
	_0x50ad86();
}
function supportH5Video() {
	var _0x144d61 = function () {
		var _0x27125d = document.createElement('video');
		if (typeof _0x27125d.canPlayType == 'function') {
			var _0xcc400d = _0x27125d.canPlayType('video/mp4;codecs="avc1.42E01E,mp4a.40.2"');
			if (_0xcc400d.toLowerCase() == 'maybe' || _0xcc400d.toLowerCase() == 'probably') {
				return true;
			}
			var _0xcc400d = _0x27125d.canPlayType('video/mp4;codecs="avc1.64001E,mp4a.40.2"');
			if (_0xcc400d.toLowerCase() == 'maybe' || _0xcc400d.toLowerCase() == 'probably') {
				return true;
			}
		}
		return false;
	};
	if (Ext.isIE && Ext.isIE10m) {
		return false;
	}
	return _0x144d61();
}
var playLogTimer;
function sendReadZTMediaLog(_0x49f98e) {
	try {
		var _0x597e8b = function (_0x3974e6) {
			var _0x2aaa1d = new RegExp('(^|&)' + _0x3974e6 + '=([^&]*)(&|$)'), _0x53a90a = parent.location.search.substr(1).match(_0x2aaa1d);
			if (_0x53a90a != null) {
				return unescape(_0x53a90a[2]);
			}
			return null;
		}, _0x3b6058 = parent.AttachmentSetting, _0x2e4c29 = window.frameElement, _0x5ad8b1 = _0x2e4c29.parentElement.parentElement.parentElement.getAttribute('kid');
		if (_0x5ad8b1) {
			var _0x256ca6 = 'marg-' + _0x5ad8b1;
			_0x3b6058 = top[_0x256ca6];
			typeof _0x3b6058 == 'string' && (_0x3b6058 = eval('(' + _0x3b6058 + ')'));
		}
		if (!_0x3b6058) {
			return;
		}
		var _0x282925 = _0x3b6058.defaults.isFiled, _0x119f4e = _0x3b6058.defaults.state;
		if (_0x282925 == 1 || _0x119f4e == 1) {
			return;
		}
		var _0x21c4fb = pwindow.dtype || 'Course';
		if (_0x21c4fb == 'ZT' || _0x21c4fb == 'HB' || _0x21c4fb == 'MAG') {
			var _0x2366bf = parent.location.search || '', _0x4f744f = getCookie('UID'), _0x4a25b6 = config('objectid'), _0x390caf = 0, _0x2c7399 = _0x3b6058.defaults.courseid, _0x2ea1d0 = _0x3b6058.defaults.knowledgeid, _0x4c4aa5 = window.duration, _0x551e6c = _0x597e8b('_from_'), _0x15a66d = _0x3b6058.attachments, _0x5db77b = '';
			if (_0x15a66d.length > 0) {
				for (var _0x29e680 = 0, _0x13ccd0 = _0x15a66d.length; _0x29e680 < _0x13ccd0; _0x29e680++) {
					var _0x1f0f19 = _0x15a66d[_0x29e680], _0x44faef = _0x1f0f19.objectId;
					if (_0x44faef == _0x4a25b6) {
						if (_0x49f98e == 0) {
							_0x5db77b = _0x1f0f19.enc0;
						} else {
							_0x49f98e == 1 ? _0x5db77b = _0x1f0f19.enc1 : _0x5db77b = _0x1f0f19.enc2;
						}
						break;
					}
				}
			}
			var _0x22a322 = ServerHosts.DATA_XXT + '/analysis/datalog?s=' + _0x2c7399 + '&c=' + _0x2ea1d0 + '&o=' + _0x4a25b6 + '&st=' + _0x49f98e + '&m=' + _0x390caf + '&d=' + _0x4c4aa5 * 1000 + '&u=' + _0x4f744f + '&_from_=' + _0x551e6c + '&enc=' + _0x5db77b, _0x18202f = function () {
				Ext.Ajax.request({
					'url': _0x22a322,
					'success': function (_0x676866) {
					}
				});
			};
			_0x18202f();
			if (_0x49f98e == 1) {
				playLogTimer && clearInterval(playLogTimer);
				playLogTimer = setInterval(function () {
					_0x18202f();
				}, 5000);
			} else {
				_0x49f98e == 2 && (playLogTimer && clearInterval(playLogTimer));
			}
		}
	} catch (_0x2506df) {
	}
}
function receiveStudyLog() {
	try {
		var _0x274689 = parent.AttachmentSetting;
		if (!_0x274689) {
			return;
		}
		if (_0x274689 && _0x274689.defaults) {
			var _0x5df0e5 = _0x274689.defaults;
			if (_0x5df0e5.chapterCapture != 1) {
				return;
			}
			var _0x45ca7b = '/keeper/api/receive-studylog', _0x58fb37 = new Date().getTime(), _0x18fe39 = _0x5df0e5.courseid, _0x121756 = _0x5df0e5.clazzId, _0x4612f3 = _0x5df0e5.cpi, _0x49f12a = _0x5df0e5.userid, _0x1036f3 = _0x5df0e5.knowledgeid, _0x32c069 = _0x5df0e5.fid, _0x3b30d1 = '', _0x19e098 = config('objectid'), _0x573050 = config('jobid') || '', _0x2549de = _0x274689.attachments;
			if (_0x2549de.length > 0) {
				for (var _0x4f0d6b = 0, _0x2ec6ec = _0x2549de.length; _0x4f0d6b < _0x2ec6ec; _0x4f0d6b++) {
					var _0x2ffb7c = _0x2549de[_0x4f0d6b], _0x1e9a6e = _0x2ffb7c.objectId;
					if (_0x1e9a6e == _0x19e098) {
						_0x3b30d1 = _0x2ffb7c.aid;
						break;
					}
				}
			}
			var _0x257d9b = {
				'relationId': _0x3b30d1,
				'objectId': _0x19e098,
				'userId': _0x49f12a,
				'knowledgeId': _0x1036f3,
				'fid': _0x32c069,
				'jobId': _0x573050
			}, _0x2e66b4 = {
				'courseId': _0x18fe39,
				'clazzId': _0x121756,
				'personId': _0x4612f3,
				'eventType': 4,
				'eventTime': _0x58fb37,
				'data': _0x257d9b
			}, _0x3ebf7c = _0x5df0e5.mtEnc;
			Ext.Ajax.request({
				'method': 'post',
				'url': _0x45ca7b,
				'params': {
					'log': JSON.stringify(_0x2e66b4),
					'enc': _0x3ebf7c
				},
				'success': function (_0x1a3c7b) {
				}
			});
		}
	} catch (_0x1a042d) {
	}
}
function createVideoTask() {
	if (isViturlEdit) {
		return;
	}
	var _0x537a9a = ServerHosts.CONVERTSERVICE + '/video/createVideoTask?objectid=' + wrongObj;
	Ext.Ajax.request({
		'timeout': 3000,
		'type': 'get',
		'async': false,
		'url': _0x537a9a,
		'dataType': 'jsonp',
		'jsonp': 'jsoncallback',
		'success': function (_0x4c004d) {
		},
		'failure': function (_0x262062) {
			console.log('创建任务失败');
		}
	});
}
Ext.onReady(function () {
	var _0x2816e4 = parent.requestSatusResourceDownGrade;
	if (_0x2816e4 && _0x2816e4 == 1) {
		Ext.select('body').setHTML('<img src="/ananas/css/downgradeBlueTip.jpg" width="676" height="540">');
		return;
	}
	loadVideo();
});
var danmaku = {};
function getDanmuByTime(_0x4d64ec, _0x1dd317) {
	var _0x23f90e = parent.AttachmentSetting;
	if (!_0x23f90e) {
		return;
	}
	if (_0x23f90e && _0x23f90e.defaults) {
		var _0x225a62 = _0x23f90e.defaults, _0x26437f = _0x225a62.courseid, _0x1bbbf4 = _0x225a62.clazzId;
	} else {
		return;
	}
	if (_0x4d64ec == 'pause') {
		danmaku = {};
		return;
	}
	_0x4d64ec == 'play' && (danmaku = {});
	var _0x21106b = config('mid'), _0x28af01 = {
		'courseid': _0x26437f,
		'classid': _0x1bbbf4,
		'mid': _0x21106b,
		'timebegin': parseInt(_0x1dd317),
		'timeend': parseInt(_0x1dd317) + 59,
		'limit': 2000
	};
	Ext.Ajax.request({
		'url': '/mooc-ans/videodanmaku/timerange-danmakulist',
		'method': 'get',
		'params': _0x28af01,
		'success': function (_0xc3be5e) {
			var _0x197db9 = eval('(' + _0xc3be5e.responseText + ')');
			if (_0x197db9.status == 1) {
				danmaku = {};
				var _0x148930 = _0x197db9.data;
				for (var _0x265cab = 0; _0x265cab < _0x148930.length; _0x265cab++) {
					var _0x1f1131 = _0x148930[_0x265cab].timeline;
					!danmaku[_0x1f1131] && (danmaku[_0x1f1131] = new Array());
					danmaku[_0x1f1131].push(_0x148930[_0x265cab].content);
				}
				_0x1dd317 == 0 && danmuPlay(0);
			} else {
				console.log('服务异常,稍后再试!');
			}
		},
		'failure': function (_0x4bdcdf) {
			console.log('服务异常,稍后再试!');
		}
	});
}
var count = 0, timeFlag = -1, currentTime = 0, leftcancel = false, cancelOneSpan = false;
function shotdanmu(_0x28e957) {
	_0x28e957.addEventListener('mouseover', function () {
		cancelOneSpan = true;
		leftcancel = true;
	});
	_0x28e957.addEventListener('mouseout', function () {
		if (videojs('video').playStatus != 'pause') {
			cancelOneSpan = false;
			leftcancel = false;
		}
	});
	var _0x5539bd = setInterval(function () {
		if (!leftcancel && !cancelOneSpan) {
			var _0x14334e = _0x28e957.offsetLeft;
			_0x14334e -= 10;
			_0x28e957.style.left = _0x14334e + 'px';
			if (_0x14334e < -_0x28e957.offsetWidth) {
				clearInterval(_0x5539bd);
				_0x28e957.remove();
			}
		}
	}, 100);
}
function danmuPlay(_0x58a691) {
	currentTime = _0x58a691;
	if (timeFlag == _0x58a691) {
		return;
	}
	timeFlag = _0x58a691;
	var _0x40faed = danmaku[_0x58a691];
	if (!_0x40faed) {
		return;
	}
	if (!$('.sp_tanmu').hasClass('sp_tanmu_blue')) {
		return;
	}
	var _0x58418c = '<div class="danmuItem right" style="font-size:' + fontSize + 'px; opacity: ' + parseFloat(parseInt(fontOpacity) / 100) + '">';
	for (var _0x286dc6 = 0; _0x286dc6 < _0x40faed.length; _0x286dc6++) {
		if (_0x40faed[_0x286dc6] == '@赞同@') {
			_0x58418c += '<span><i class="zanIcon"></i>赞同</span>';
		} else {
			if (_0x40faed[_0x286dc6] == '@不赞同@') {
				_0x58418c += '<span><i class="noZanIcon"></i>不赞同</span>';
			} else {
				if (_0x40faed[_0x286dc6] == '@感动@') {
					_0x58418c += '<span><i class="moveIcon"></i>感动</span>';
				} else {
					if (_0x40faed[_0x286dc6] == '@疑惑@' || _0x40faed[_0x286dc6] == '@听不懂@') {
						_0x58418c += '<span><i class="doubtIcon"></i>听不懂</span>';
					} else {
						if (_0x40faed[_0x286dc6] == '@献花@' || _0x40faed[_0x286dc6] == '@讲得好@') {
							_0x58418c += '<span><i class="huaIcon"></i>讲得好</span>';
						} else {
							if (_0x40faed[_0x286dc6] == '@鼓掌@') {
								_0x58418c += '<span><i class="clapIcon"></i>鼓掌</span>';
							} else {
								if (_0x40faed[_0x286dc6] == '@有趣@') {
									_0x58418c += '<span><i class="interestingIcon"></i>有趣</span>';
								} else {
									_0x40faed[_0x286dc6] == '@好难@' ? _0x58418c += '<span><i class="hnIcon"></i>好难</span>' : _0x58418c += '<span>' + _0x40faed[_0x286dc6] + '</span>';
								}
							}
						}
					}
				}
			}
		}
	}
	_0x58418c += '</div>';
	var _0x243f54 = $('.channel').length, _0x30a6f6 = count % _0x243f54, _0x3efa0d = new Ext.XTemplate(_0x58418c).append('channel_' + _0x30a6f6);
	shotdanmu(_0x3efa0d);
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
function checkJobCountLimit(_0x2ecad6, _0xdd431d) {
	/\/studentstudy/.test(pwindow.location.pathname) && (_0xdd431d == 0 ? pwindow.showJobLimitTip() : pwindow.showVideoTimeLimitTip(), playStateV2 = setInterval(function () {
		pwindow.resumePlay && (clearStateV2Interval(), _0x2ecad6.play(), pwindow.resumePlay = false);
	}, 300));
}
function isStuViewPage() {
	return /\/studentstudy/.test(pwindow.location.pathname);
}
function pushVideoInfo(_0x142950) {
	try {
		if (typeof _0x142950 == 'undefined') {
			return;
		}
		pwindow.pushVideoInfo && pwindow.pushVideoInfo(_0x142950);
	} catch (_0x293324) {
		console.log(_0x293324);
	}
}
function showPopIframe(_0x535748, _0x7ef93f) {
	try {
		pwindow.showCustomPop && (ifFullExitFullScreen(), _0x7ef93f.pause(), pwindow.showCustomPop(_0x535748), popPlayState = setInterval(function () {
			pwindow.popPlayState && (pwindow.popPlayState = false, clearPopStateInterval(), _0x7ef93f.eventCount <= 0 && _0x7ef93f.play());
		}, 500));
	} catch (_0xa864e4) {
		console.log(_0xa864e4);
	}
}
;
function startFaceCollection(_0x5f0004, _0x294f2a, _0x2234c4, _0x5cf376) {
	if (/\/studentstudy/.test(pwindow.location.pathname)) {
		var _0x500c6d = $('.maskDiv1', pwindow.document).length;
		if (_0x500c6d > 0) {
			$('#videoJobId', pwindow.document).val(videoJobId);
			$('#chapterVideoObjectId', pwindow.document).val(videoObjectId);
			$('#collectionTime', pwindow.document).val(_0x5cf376);
			$('#mid', pwindow.document).val(mid);
			pwindow.getQRCodeURLShow1 && pwindow.getQRCodeURLShow1();
			$('.maskDiv1', pwindow.document).css('display', 'block');
			getPlayState = setInterval(function () {
				if (pwindow.playerState) {
					clearStateInterval();
					_0x5f0004.play();
					_0x2234c4.firstPlayFace = false;
					pwindow.playerState = false;
					var _0x42ae66 = _0x2234c4.jumpTimePointList;
					_0x5cf376 != -2 && typeof _0x42ae66 != 'undefined' && (_0x42ae66.push(_0x5cf376), _0x2234c4.jumpTimePointList = _0x42ae66);
				}
			}, 1000);
		}
	}
}
function chapterPlayNextVideo(_0x21f821) {
	/\/studentstudy/.test(pwindow.location.pathname) && (pwindow.getChapterNextVideo && pwindow.getChapterNextVideo(_0x21f821));
}
function markersPlayer(_0xec0e8b) {
	var _0x387159 = _0xec0e8b.getAttribute('data-marker-time');
	if (_0x387159) {
		return playerTime(_0x387159);
	}
}
function closeFullScreen() {
	$('.vjs-fullscreen-control-self').click();
}
function getMarkers() {
	return videojs('video').markers;
}
;
function playerTime(_0x16045d) {
	if (ff != 1) {
		return;
	}
	var _0x3d89f8 = videojs('video');
	return _0x3d89f8.currentTime(_0x16045d);
}
function playVideo() {
	var _0x585a4c = videojs('video');
	player.volume(0);
	player.on('loadstart', function () {
		_0x585a4c.play().catch(Ext.emptyFn);
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
function full(_0x23e042) {
	if (_0x23e042.requestFullscreen) {
		_0x23e042.requestFullscreen();
	} else {
		if (_0x23e042.mozRequestFullScreen) {
			_0x23e042.mozRequestFullScreen();
		} else {
			if (_0x23e042.webkitRequestFullscreen) {
				_0x23e042.webkitRequestFullscreen();
			} else {
				_0x23e042.msRequestFullscreen && _0x23e042.msRequestFullscreen();
			}
		}
	}
}
;
function ifFullExitFullScreen() {
	try {
		device == 1 && (isFullScreen() && (exitFullscreen(), isFull = false, $('.fullScreenContainer').removeClass('full'), setTimeout(function () {
			top.window.document.documentElement.scrollTop = top.bodyScrollNum;
		}, 700), reSizeIframe()));
	} catch (_0x48cf5c) {
		console.log(_0x48cf5c);
	}
}
top.bodyScrollNum = top.window.document.documentElement.scrollTop;
if (device == 1) {
	function toggleFullScreen() {
		isFullScreen() ? (exitFullscreen(), isFull = false, $('.fullScreenContainer').removeClass('full'), setTimeout(function () {
			top.window.document.documentElement.scrollTop = top.bodyScrollNum;
		}, 700)) : (top.bodyScrollNum = top.window.document.documentElement.scrollTop, isFull = true, full($('.fullScreenContainer')[0]), $('.fullScreenContainer').addClass('full'));
		reSizeIframe();
	}
	window.addEventListener('resize', function () {
		isFullScreen() ? ($('.vjs-fullscreen-control-self').attr('title', isEn ? 'Exit full screen' : '退出全屏'), $('.vjs-fullscreen-control-self').children('i').addClass('closeFull'), isFull = true) : (isFull = false, $('.vjs-fullscreen-control-self').attr('title', isEn ? 'Fullscreen' : '全屏'), $('.vjs-fullscreen-control-self').children('i').removeClass('closeFull'));
		reSizeIframe();
	});
}
function reSizeIframe() {
	try {
		if (/\/teacherstudy/.test(pwindow.location.pathname) || /\/studentstudy/.test(pwindow.location.pathname) || /\/nodedetailcontroller\/visitnodedetail/.test(pwindow.location.pathname)) {
			var _0x3bd997 = parseInt(Ext.fly(Ext.select('.main').elements[0]).getWidth()), _0x477d33 = parseInt(_0x3bd997 / 16 * 9);
			Ext.fly('reader').setHeight(_0x477d33 + 'px');
		}
		if (device == 1) {
			if (!isFull) {
				$('.vjs-control-bar .danmuDiv').remove();
			} else {
				Ext.fly('reader').setHeight('100%');
				if ($('.danmuDiv').css('display') != 'none' && $('.vjs-control-bar .danmuDiv').length == 0) {
					var _0x1b1a76 = $('.sp_function .danmuDiv').clone(true);
					$('.vjs-control-bar').append(_0x1b1a76);
					bindDanmuSet();
					$('.vjs-control-bar .danmuDiv .sp_video_input').attr('placeholder', isEn ? 'Post bullet screen\u2026' : '发送弹幕\u2026');
					isEn && ($('.set-content .setFontSize').text('Font size'), $('.set-content .setBgPercent').text('Opacity'));
				}
			}
			Ext.fly('boxscroll').setHeight(parseInt($('#video').height()) - 70 + 'px');
		}
		var _0x1ba16c = Ext.fly(Ext.select('.main').elements[0]).getHeight();
		Ext.fly(window.frameElement).setHeight(_0x1ba16c + 'px');
	} catch (_0x4c0e9b) {
		console.log(_0x4c0e9b.message);
	}
}
function removeDownloadBtn() {
	Ext.select('.xl-chrome-ext-bar').remove();
}
function getFontValIndex(_0x2083c5, _0x294425) {
	if (_0x294425.length > 0) {
		for (var _0x5cf919 = 0; _0x5cf919 < _0x294425.length; _0x5cf919++) {
			if (_0x2083c5 == _0x294425[_0x5cf919]) {
				return _0x5cf919;
			}
		}
	}
}
function bindDanmuSet() {
	if ($('.vjs-control-bar .danmuDiv .set-content').length > 0) {
		$('.vjs-control-bar .danmuDiv .set-content').remove();
		var _0x1f1139 = ' <div class="set-content"><div class="range-container"><p class="setFontSize">字号</p><input class="full-single-slider"/><div class="rangeVal" id="fullrangeVal1">标准</div></div><div class="range-container"><p class="setBgPercent">不透明度</p> <input class="full-slider2"/><div class="rangeVal" id="fullrangeVal2">80%</div></div></div>';
		$('.vjs-control-bar .danmuDiv .settings-container').append(_0x1f1139);
		var _0x304e32 = {
			'Small': isEn ? 'Small' : '小',
			'Large': isEn ? 'Large' : '大',
			'Maximum': isEn ? 'Max' : '极大',
			'Standard': isEn ? 'Standard' : '标准'
		};
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
			'onStart': function (_0x499bda) {
				var _0x19d895 = {
					14: _0x304e32.Small,
					18: _0x304e32.Standard,
					22: _0x304e32.Large,
					26: _0x304e32.Maximum
				};
				$('.full-single-slider').prop('value', fontSize);
				$('#fullrangeVal1').html(_0x19d895[fontSize]);
			},
			'onChange': function (_0x5e807f) {
				var _0x4a2f8d = {
					14: _0x304e32.Small,
					18: _0x304e32.Standard,
					22: _0x304e32.Large,
					26: _0x304e32.Maximum
				};
				$('#fullrangeVal1').html(_0x4a2f8d[_0x5e807f.from_value]);
				fontSize = _0x5e807f.from_value;
				$('.full-single-slider').prop('value', fontSize);
				$('.danmuItem').css('font-size', fontSize + 'px');
				var _0x3adb79 = $('.single-slider').data('ionRangeSlider');
				_0x3adb79 && _0x3adb79.update({
					'from': getFontValIndex(fontSize, [
						14,
						18,
						22,
						26
					])
				});
				$('.single-slider').prop('value', fontSize);
				$('#rangeVal1').html(_0x4a2f8d[_0x5e807f.from_value]);
			}
		});
		$('.full-slider2').ionRangeSlider({
			'skin': 'big',
			'min': 1,
			'max': 100,
			'step': 1,
			'from': fontOpacity,
			'onStart': function (_0x28103a) {
				$('.full-slider2').prop('value', fontOpacity);
				$('#fullrangeVal2').html(fontOpacity + '%');
			},
			'onChange': function (_0x13ff14) {
				var _0x18be59 = _0x13ff14.from;
				$('#fullrangeVal2').html(_0x18be59 + '%');
				fontOpacity = _0x18be59;
				$('.danmuItem').css('opacity', parseFloat(parseInt(_0x18be59) / 100));
				var _0x2e0e93 = $('.slider2').data('ionRangeSlider');
				_0x2e0e93 && (_0x2e0e93.update({ 'from': fontOpacity }), $('.slider2').prop('value', fontOpacity), $('#rangeVal2').html(fontOpacity + '%'));
			}
		});
		$('.vjs-control-bar .danmuDiv .settings-container button').click(function () {
			fontSize = 18;
			fontOpacity = 80;
			var _0x384c2c = $('.full-slider2').data('ionRangeSlider');
			_0x384c2c && (_0x384c2c.update({ 'from': fontOpacity }), $('.full-slider2').prop('value', fontOpacity), $('#fullrangeVal2').html(fontOpacity + '%'));
			var _0x384c2c = $('.slider2').data('ionRangeSlider');
			_0x384c2c && (_0x384c2c.update({ 'from': fontOpacity }), $('.slider2').prop('value', fontOpacity), $('#rangeVal2').html(fontOpacity + '%'));
			var _0xecd291 = $('.full-single-slider').data('ionRangeSlider');
			_0xecd291 && (_0xecd291.update({ 'from': 1 }), $('.full-single-slider').prop('value', 18), $('#fullrangeVal1').html(_0x304e32.Standard));
			var _0xf47e2b = $('.single-slider').data('ionRangeSlider');
			_0xf47e2b && (_0xf47e2b.update({ 'from': 1 }), $('.single-slider').prop('value', 18), $('#rangeVal1').html(_0x304e32.Standard));
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
		var _0x469cf8 = videojs('video'), _0x3564e0 = parseInt(_0x469cf8.currentTime());
		if (!parent.parent.writeVideoNote) {
			var _0x103f75 = parseInt(_0x3564e0 / 60);
			_0x103f75 < 10 && (_0x103f75 = '0' + _0x103f75.toString());
			var _0x52b650 = parseInt(_0x3564e0 % 60);
			_0x52b650 < 10 && (_0x52b650 = '0' + _0x52b650.toString());
			$('.Note_name', parent.parent.document).html(videoName + ' ' + _0x103f75 + ':' + _0x52b650);
			$('.Note_name', parent.parent.document).css('display', 'block');
			$('#noteVideoTime', parent.parent.document).val(_0x3564e0);
			$('#noteVideoJobId', parent.parent.document).val(videoJobId);
			$('#noteVideoObjectId', parent.parent.document).val(videoObjectId);
		}
		parent.parent.getClazzNote && parent.parent.getClazzNote();
		parent.parent.changePan && parent.parent.changePan('3');
		if ($('.formTopic', parent.parent.document).size() > 0) {
			$('.formTopic', parent.parent.document).css('display', 'block');
			parent.parent.writeVideoNote && parent.parent.writeVideoNote(_0x3564e0, mid, window.frameElement);
		}
	});
});