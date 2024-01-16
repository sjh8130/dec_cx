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
		var _0x22d155 = Ext.fly(window.frameElement).prev();
		if (_0x22d155 && _0x22d155.hasCls('ans-job-icon')) {
			return !Ext.fly(window.frameElement).parent().hasCls('ans-job-finished');
		}
		return false;
	} catch (_0x17f813) {
		console.log(_0x17f813);
	}
	return false;
}
var isViturlEdit = false, ff = 1;
function proxy_completed() {
	ed_complete && (greenligth(), ed_complete());
}
function config(_0x109136) {
	return window.frameElement.getAttribute(_0x109136);
}
function getCookie(_0x565e19) {
	var _0x12497e = document.cookie.split('; ');
	for (var _0x1daf86 = 0; _0x1daf86 < _0x12497e.length; _0x1daf86++) {
		var _0x439120 = _0x12497e[_0x1daf86].split('=');
		if (_0x439120[0] == _0x565e19) {
			return unescape(_0x439120[1]);
		}
	}
}
function showMoocPlayer(_0x2e6345) {
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
			var _0x28d594 = new MoocPlayer({
				'isSendLog': !!parent.AttachmentSetting && parent.AttachmentSetting.control,
				'data': _0x2e6345,
				'height': 540,
				'width': 676
			});
		});
	});
}
function bindVjsClick(_0x1566e7) {
	try {
		var _0x497f80 = _0x1566e7.enableFastForward, _0xba7ba0 = _0x1566e7.jobid;
		if (typeof _0x497f80 != 'undefined' && _0x497f80 === 0 && typeof _0xba7ba0 != 'undefined' && _0xba7ba0 != '' && window.parent.parent.location.href.indexOf('studentstudy') > -1) {
			var _0x1b0de3 = $('.video-js .toolTipBox1'), _0x42ef9d = $('#tipDiv');
			_0x1b0de3.length === 0 && _0x42ef9d.length > 0 && ($('.video-js').prepend(_0x42ef9d.html()), $('.vjs-progress-control').on('click', function () {
				!$('.toolTipBox1').is(':visible') && ($('.toolTipBox1').show(), setTimeout(function () {
					$('.toolTipBox1').hide();
				}, 800));
			}));
		}
	} catch (_0x79b330) {
		console.log(_0x79b330);
	}
}
function showHTML5Player(_0x5d1aab) {
	Ext.get('reader').setHTML('<video id="video" class="video-js vjs-default-skin vjs-big-play-centered"></video>');
	new ans.VideoJs({
		'videojs': 'video',
		'params': _0x5d1aab
	});
	document.getElementsByTagName('video')[0].addEventListener('play', function () {
		var _0x4aecbc = parent.document.getElementsByTagName('iframe');
		for (var _0x3acee4 = 0; _0x3acee4 < _0x4aecbc.length; _0x3acee4++) {
			if (_0x4aecbc[_0x3acee4].getAttribute('src').indexOf('microCourse') != -1) {
				var _0xb844fb = _0x4aecbc[_0x3acee4].contentWindow.document.getElementsByTagName('iframe')[0].contentWindow;
				_0xb844fb.PageView.stopAll && _0xb844fb.PageView.stopAll();
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
	function _0x3b36fe() {
		var _0x5970b2 = $('#video').height(), _0x2b6bc1 = $('#sp_video_ppt_pic').height(), _0x586193 = (parseInt(_0x5970b2) - 60 - parseInt(_0x2b6bc1)) / 2;
		$('#sp_video_ppt_pic').length > 0 && $('#sp_video_ppt_pic').hasClass('sp_ppt_pic_fullScreen') ? ($('#sp_video_ppt_pic').css('top', _0x586193 + 'px'), $('#sp_video_ppt_pic').css('left', '0')) : ($('#sp_video_ppt_pic').css('top', '0px'), $('#sp_video_ppt_pic').css('left', '0px'));
	}
	$('.vjs-fullscreen-control').click(function () {
		setTimeout(_0x3b36fe, 300);
	});
	$(window).resize(function () {
		setTimeout(_0x3b36fe, 500);
	});
	bindVjsClick(_0x5d1aab);
}
var wrongObj = '', videoName = '', videoJobId = '', videoObjectId = '', mid = '';
function loadVideo() {
	var _0x560814 = config('objectid'), _0x6f0577 = Ext.get('reader');
	if (!_0x560814) {
		_0x6f0577.setHTML('未找到该文件');
		return;
	}
	wrongObj = _0x560814;
	videoObjectId = _0x560814;
	var _0xaa3d6c = window.frameElement, _0x1a1fdc = Ext.decode(_0xaa3d6c.getAttribute('data')), _0x2da735 = parent.AttachmentSetting, _0x2d173e = parent.previewAttachments;
	mid = config('mid');
	var _0x3d7215 = 0, _0x388ffc = config('vbegin'), _0x4b14f4 = config('vend'), _0x493e53 = config('jobid') || '', _0xeab43f = _0x1a1fdc ? _0x1a1fdc.danmaku == null ? 0 : _0x1a1fdc.danmaku : 0, _0x456917 = _0x2da735 && _0x2da735.videoTopicCloud, _0x134fa4 = config('fastforward') == 'true' ? true : false, _0x3eb68c = config('switchwindow') == 'true' ? true : false, _0x2c5672 = Ext.get('note'), _0x457962 = Ext.get('hl'), _0x39e751 = Ext.get('note1-wrap'), _0x4ce7a2 = Ext.get('note1'), _0x354a10 = null, _0x213601 = _0x1a1fdc ? _0x1a1fdc.rt ? _0x1a1fdc.rt : 0.9 : 0.9;
	_0x493e53 == '' ? videoJobId = _0x1a1fdc && _0x1a1fdc['_jobid'] ? _0x1a1fdc['_jobid'] : '' : videoJobId = _0x493e53;
	var _0x1b313c = flashChecker().hasFlash, _0x581544 = _0x2da735 && _0x2da735.defaults && _0x2da735.defaults.isForScreen == 1;
	try {
		isTeacher = top.location.href.indexOf('teacherstudy') > 0 || top.location.href.indexOf('course/phone/chapterdata') > 0 || _0x581544;
	} catch (_0xe210cd) {
	}
	var _0x1a9868 = parent.isVideoVisibleName, _0x5af4fb = _0x1a1fdc ? _0x1a1fdc.doublespeed != 0 ? 1 : 0 : 1;
	_0x1a1fdc.v_begin && _0x1a1fdc.v_end && _0x1a1fdc.pobjectid && (isViturlEdit = true);
	function _0x24f1fb(_0x3b7007) {
		if (_0x3b7007 && _0x3b7007.length == 0) {
			return;
		}
		if (Ext.select('.zsCloud_ul') != null) {
			var _0x6b6e = '';
			for (var _0x39b0f2 = 0, _0xd41fa2 = _0x3b7007.length; _0x39b0f2 < _0xd41fa2; _0x39b0f2++) {
				_0x6b6e += '<li><span class=\'zsCloud_span topicId' + _0x3b7007[_0x39b0f2].id + '\' onclick=\'markersPlayer(this)\'>' + _0x3b7007[_0x39b0f2].name + ' </span></li>';
			}
			Ext.select('.zsCloud_ul').setHTML(_0x6b6e);
			Ext.select('.zsCloud').setStyle('display', 'block');
		}
	}
	function _0x37f4c6() {
		_0x3d7215 <= 100 && _0x457962.setWidth((_0x3d7215 += 5) + '%');
		var _0x457770 = getCookie('fid') || '';
		Ext.Ajax.request({
			'url': '/ananas/status/' + _0x560814 + '?k=' + _0x457770 + '&flag=normal',
			'success': function (_0x550fb0) {
				var _0x325c76 = eval('(' + _0x550fb0.responseText + ')');
				Ext.get('loading').hide();
				switch (_0x325c76.status) {
					case 'success':
						_0x39e751.remove(), videoName = _0x1a1fdc && _0x1a1fdc.name || '';
						var _0x7a44f8 = 0;
						try {
							var _0x19a260 = _0x325c76.duration;
							if (_0x2d173e && top.location.href.indexOf('nodedetailcontroller/visitnodedetail') > -1) {
								var _0x1917f4 = _0x325c76.objectid + '-' + (_0x388ffc ? _0x388ffc : 0) + '-' + (_0x4b14f4 ? _0x4b14f4 : _0x19a260) + '-' + _0x493e53;
								for (var _0x4ec173 = 0; _0x4ec173 < _0x2d173e.length; _0x4ec173++) {
									var _0x587b6c = _0x2d173e[_0x4ec173], _0x291b8f = 0, _0x4258a1 = _0x19a260;
									_0x587b6c.property && (_0x587b6c.property.vbegin && (_0x291b8f = _0x587b6c.property.vbegin), _0x587b6c.property.vend && (_0x4258a1 = _0x587b6c.property.vend));
									!_0x587b6c.jobid && (_0x587b6c.jobid = '');
									var _0x3e9e13 = _0x587b6c.objectId + '-' + _0x291b8f + '-' + _0x4258a1 + '-' + _0x587b6c.jobid;
									_0x1917f4 == _0x3e9e13 && (_0x7a44f8 = _0x587b6c.customType);
								}
							}
						} catch (_0x3497e1) {
							console.log(_0x3497e1);
						}
						var _0x339a4b = _0x325c76.duration, _0xc3dbee = {
							'enableFastForward': _0x134fa4 ? 0 : 1,
							'enableSwitchWindow': _0x3eb68c ? 0 : 1,
							'duration': _0x339a4b,
							'httpmd': _0x325c76.httpmd,
							'http': _0x325c76.http,
							'httphd': _0x325c76.httphd,
							'httpshd': _0x325c76.httpshd,
							'filename': _0x325c76.filename,
							'dtoken': _0x325c76.dtoken,
							'videoTopicCloud': _0x456917
						};
						window.duration = _0x339a4b;
						_0x325c76.cdn && (_0xc3dbee.cdn = _0x325c76.cdn);
						if (document.cookie.length > 0) {
							_0xc3dbee.memberinfo = getCookie('memberinfo');
							_0xc3dbee.questionErrorLogUrl = ServerHosts.MASTER_HOST + '/question/addquestionerror';
						}
						mid && (_0xc3dbee.mid = mid);
						_0x325c76.duration && (_0xc3dbee.videoTotalTime = _0x325c76.duration);
						if (_0x2da735 && _0x2da735.isErya == 1) {
							_0xc3dbee.screenshot = 'https://p.ananas.chaoxing.com/star3/origin/a26e16b5ac8e769bba6bda57343b7d57.png';
						} else {
							_0x325c76.screenshot && (_0xc3dbee.screenshot = _0x325c76.screenshot);
						}
						_0x2da735 && (_0xc3dbee.chapterVideoTranslate = _0x2da735.chapterVideoTranslate);
						_0x325c76.thumbnails && (_0xc3dbee.thumbnails = _0x325c76.thumbnails);
						_0x325c76.subobjectid && (_0xc3dbee.subobjectid = _0x325c76.subobjectid);
						_0x388ffc && (_0xc3dbee.startTime = _0x388ffc);
						_0x4b14f4 && (_0xc3dbee.endTime = _0x4b14f4);
						_0xc3dbee.rt = _0x213601, _0xc3dbee.control = _0x2da735 && _0x2da735.control;
						isTeacher && (_0xc3dbee.control = false);
						var _0x645f2 = {}, _0x221b9b, _0x4e18ab, _0x519ca0;
						if (_0x2da735 && _0x2da735.control) {
							var _0x2bf2bd = _0x2da735.attachments, _0x375116 = _0x2da735.defaults, _0x5bd74d = _0x325c76.objectid + '-' + (_0x388ffc ? _0x388ffc : 0) + '-' + (_0x4b14f4 ? _0x4b14f4 : _0x339a4b) + '-' + _0x493e53;
							_0x375116 && (_0xc3dbee.userid = _0x375116.userid || '', _0xc3dbee.fid = _0x375116.fid || '');
							for (var _0x2c67f5 = 0; _0x2c67f5 < _0x2bf2bd.length; _0x2c67f5++) {
								_0x645f2 = _0x2bf2bd[_0x2c67f5];
								_0x4e18ab = 0;
								_0x519ca0 = _0x339a4b;
								_0x645f2.property && (_0x645f2.property.vbegin && (_0x4e18ab = _0x645f2.property.vbegin), _0x645f2.property.vend && (_0x519ca0 = _0x645f2.property.vend));
								!_0x645f2.jobid && (_0x645f2.jobid = '');
								_0x221b9b = _0x645f2.objectId + '-' + _0x4e18ab + '-' + _0x519ca0 + '-' + _0x645f2.jobid;
								if (_0x5bd74d == _0x221b9b) {
									Ext.apply(_0xc3dbee, _0x2da735.defaults);
									_0x7a44f8 = _0x645f2.customType;
									var _0x52d69f = _0x645f2.begins ? parseInt(_0x645f2.begins) : 0;
									_0x52d69f > 0 && _0x325c76.duration ? _0xc3dbee.begins = _0x52d69f > _0x325c76.duration ? 0 : _0x52d69f : _0xc3dbee.begins = 0;
									var _0x3b0a96 = _0x645f2.ends ? parseInt(_0x645f2.ends) : 0;
									if (_0x3b0a96 > 0 && _0x325c76.duration) {
										var _0x4e73af = _0x325c76.duration - _0x3b0a96;
										_0xc3dbee.ends = _0x4e73af < 0 ? 0 : _0x4e73af;
									} else {
										_0xc3dbee.ends = 0;
									}
									if (_0xc3dbee.ends < _0xc3dbee.begins) {
										_0xc3dbee.begins = 0;
										_0xc3dbee.ends = 0;
									}
									_0xc3dbee.headOffset = _0x645f2.headOffset ? Math.floor(parseInt(_0x645f2.headOffset) / 1000) : 0;
									_0xc3dbee.objectId = _0x645f2.objectId;
									_0xc3dbee.otherInfo = _0x645f2.otherInfo;
									_0xc3dbee.isPassed = _0x645f2.isPassed;
									_0xc3dbee.aId = _0x645f2.aid;
									_0xc3dbee.danmaku = _0xeab43f;
									_0x645f2.topicList && _0x24f1fb(_0x645f2.topicList);
									_0xc3dbee.jumpTimePointList = _0x645f2.jumpTimePointList;
									_0x645f2.property && _0x645f2.property.fastforward && _0x645f2.property.fastforward == 'true' && (_0xc3dbee.enableFastForward = 0);
									_0x645f2.property && typeof _0x645f2.property.doublespeed != 'undefined' && _0x645f2.property.doublespeed == 0 && (_0xc3dbee.doublespeed = 0, _0x5af4fb = 0);
									var _0x2ea32f = _0xc3dbee.schooldoublespeed;
									typeof _0x2ea32f == 'undefined' || _0x2ea32f == 2 ? _0xc3dbee.doublespeed = _0x5af4fb : _0xc3dbee.doublespeed = _0x2ea32f;
									_0x493e53 && (_0xc3dbee.jobid = _0x493e53, !_0x645f2.job && (!isTeacher && greenligth(), ed_complete = false, _0xc3dbee.enableFastForward = 1, _0xc3dbee.enableSwitchWindow = 1, _0xc3dbee.headOffset = 0));
									_0xc3dbee.reportUrl = _0xc3dbee.reportUrl && _0xc3dbee.reportUrl.replace('http://', window.location.protocol + '//');
									window['_jobindex'] = _0x2c67f5;
									break;
								}
							}
						} else {
							var _0x2ea32f = _0xc3dbee.schooldoublespeed;
							typeof _0x2ea32f == 'undefined' || _0x2ea32f == 2 ? _0xc3dbee.doublespeed = _0x5af4fb : _0xc3dbee.doublespeed = _0x2ea32f;
						}
						var _0x5b65b6 = '', _0x239f58 = '';
						(top.location.href.indexOf('nodedetailcontroller/visitnodedetail') > -1 || top.location.href.indexOf('mycourse/teacherstudy') > -1) && parseInt(_0x7a44f8) === 2 && (_0x5b65b6 = '<span style = "display: inline-block;width: 40px; height: 20px;font-size: 12px;background:#F9F9FA;border:1px solid #D5E2F1;border-radius:4px;text-align:center;line-height:20px;color: #6B89B3;position: absolute;right: 0; top: 0px;">动画</span>', _0x239f58 = '<span style ="display: inline-block;overflow: hidden;float: right;text-overflow: ellipsis;white-space: nowrap;width: 40px;height: 20px;font-size: 12px;background: #F9F9FA;border:1px solid #D5E2F1;border-radius:4px;text-align: center;line-height:20px;color:#6B89B3;right:0;top:0;">动画</span>');
						if (_0x1a9868 != 'false') {
							Ext.fly(window.frameElement).parent().first('.ans-job-icon') != null ? top.location.href.indexOf('nodedetailcontroller/visitnodedetail') > -1 ? Ext.fly(window.frameElement).parent().insertHtml('afterBegin', '<div title="' + videoName + '" style="width: 500px;display: inline-block;line-height: 23px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">' + videoName + '</div>' + _0x239f58) : (Ext.fly(window.frameElement).parent().first('.ans-job-icon').insertHtml('beforeEnd', '<span title="' + videoName + '" style="width: 500px;margin-left: 120px;display: inline-block;height: 23px;line-height: 23px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">' + videoName + '</span>' + _0x5b65b6), _0x5b65b6 != '' && Ext.fly(window.frameElement).parent().addCls('relativeClass')) : (Ext.fly(window.frameElement).parent().insertHtml('afterBegin', '<div title="' + videoName + '" style="width: 500px;display: inline-block;line-height: 23px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">' + videoName + '</div>' + _0x239f58), _0x239f58 != '' && Ext.fly(window.frameElement).parent().addCls('relativeClass'));
						} else {
							try {
								Ext.fly(window.frameElement).parent().first('.ans-job-icon') != null ? top.location.href.indexOf('nodedetailcontroller/visitnodedetail') > -1 ? _0x239f58 != '' && Ext.fly(window.frameElement).parent().insertHtml('afterBegin', _0x239f58) : _0x5b65b6 != '' && (Ext.fly(window.frameElement).parent().first('.ans-job-icon').insertHtml('beforeEnd', _0x5b65b6), Ext.fly(window.frameElement).parent().addCls('relativeClass')) : _0x239f58 != '' && (Ext.fly(window.frameElement).parent().insertHtml('afterBegin', _0x239f58), Ext.fly(window.frameElement).parent().addCls('relativeClass'));
							} catch (_0x37e618) {
								console.log(_0x37e618);
							}
						}
						if (_0xc3dbee.ignoreVideoCtrl == 1) {
							_0xc3dbee.enableFastForward = 1;
							_0xc3dbee.enableSwitchWindow = 1;
						}
						(!_0xc3dbee.control || isTeacher) && (ed_complete = false, _0xc3dbee.enableFastForward = 1, _0xc3dbee.enableSwitchWindow = 1, _0xc3dbee.headOffset = 0);
						(_0xc3dbee.isPassed || _0xc3dbee.headOffset > _0xc3dbee.videoTotalTime * 0.95) && (_0xc3dbee.headOffset = 0);
						_0x354a10 && clearInterval(_0x354a10), _0xc3dbee.isSupportFace = $('.maskDiv1', top.document).length > 0 && /\/studentstudy/.test(top.location.pathname) ? true : false, _0xc3dbee.isShowFaceCollection = /\/studentstudy/.test(top.location.pathname) && !Ext.fly(window.frameElement).parent().hasCls('ans-job-finished');
						if (supportH5Video()) {
							_0x1a1fdc.danmaku && (loadMultiFile([{
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
							ff = _0xc3dbee.enableFastForward;
							showHTML5Player(_0xc3dbee);
						} else {
							if (!_0x1b313c) {
								var _0x132252 = 'http://www.adobe.com/go/getflashplayer';
								Ext.get('reader').setHTML('您没有安装flashplayer\uFF0C请到<a href="' + _0x132252 + '" target="_blank">www.adobe.com</a>下载安装\u3002<br/>如果已经安装请点击此处启用\uFF1A<object id="swf_jlxl1lfb" height="50" width="100" type="application/x-shockwave-flash" data="/ananas/modules/video/cxplayer/player_4.0.11.swf?v=20161025" style="border:#ccc 1px solid"><param name="quality" value="high"><param name="allowScriptAccess" value="always"><param name="wMode" value="transparent"><param name="align" value="middle"><param name="bgcolor" value="#000000"><param name="swLiveConnect" value="true"><param name="loop" value="true"><param name="play" value="true"><param name="DeviceFont" value="false"><param name="allowFullScreen" value="true"><param name="menu" value="true"></object>');
								return;
							}
							showMoocPlayer(_0xc3dbee);
						}
						sendReadZTMediaLog(0);
						break;
					case 'failed':
						_0x354a10 && clearInterval(_0x354a10), _0x39e751.remove(), _0x2c5672.show();
						break;
					case 'waiting':
						_0x39e751.update('<div class="line1"><div class="line3"></div></div><p class="tipStyle making">视频正在转码\uFF0C您无需在此页面等待\u30109001\u3011</p>');
						break;
					case 'converting':
					case 'transfer':
						_0x39e751.update('<div class="line1"><div class="line2"></div></div><p class="tipStyle">视频上传中\u30109002\u3011</p>');
						break;
				}
			},
			'failure': function (_0x316000) {
				_0x316000.status == 0 ? (_0x354a10 && clearInterval(_0x354a10), _0x39e751.update('<div class="line1"><div class="line2"></div></div><p class="tipStyle">视频加载超时\uFF0C请刷新页面重试\u30109003\u3011</p>'), Ext.get('loading').hide()) : (_0x354a10 && clearInterval(_0x354a10), _0x39e751.update('<div class="line1"><div class="line3"></div></div><p class="tipStyle">视频加载失败\uFF0C请稍后再试\u30109004\u3011</p>'), Ext.get('loading').hide());
			}
		});
	}
	_0x37f4c6();
}
function supportH5Video() {
	var _0x3a837d = function () {
		var _0x3ac11c = document.createElement('video');
		if (typeof _0x3ac11c.canPlayType == 'function') {
			var _0x1c555f = _0x3ac11c.canPlayType('video/mp4;codecs="avc1.42E01E,mp4a.40.2"');
			if (_0x1c555f.toLowerCase() == 'maybe' || _0x1c555f.toLowerCase() == 'probably') {
				return true;
			}
			var _0x1c555f = _0x3ac11c.canPlayType('video/mp4;codecs="avc1.64001E,mp4a.40.2"');
			if (_0x1c555f.toLowerCase() == 'maybe' || _0x1c555f.toLowerCase() == 'probably') {
				return true;
			}
		}
		return false;
	};
	if (Ext.isIE && Ext.isIE10m) {
		return false;
	}
	return _0x3a837d();
}
var playLogTimer;
function sendReadZTMediaLog(_0x57398c) {
	try {
		var _0x15a187 = function (_0x146d3a) {
			var _0x5c7152 = new RegExp('(^|&)' + _0x146d3a + '=([^&]*)(&|$)'), _0x22c4da = parent.location.search.substr(1).match(_0x5c7152);
			if (_0x22c4da != null) {
				return unescape(_0x22c4da[2]);
			}
			return null;
		}, _0x6b2836 = parent.AttachmentSetting, _0x41b420 = window.frameElement, _0x42030e = _0x41b420.parentElement.parentElement.parentElement.getAttribute('kid');
		if (_0x42030e) {
			var _0x5278c5 = 'marg-' + _0x42030e;
			_0x6b2836 = top[_0x5278c5];
			typeof _0x6b2836 == 'string' && (_0x6b2836 = eval('(' + _0x6b2836 + ')'));
		}
		if (!_0x6b2836) {
			return;
		}
		var _0x2614a2 = _0x6b2836.defaults.isFiled, _0x261fa3 = _0x6b2836.defaults.state;
		if (_0x2614a2 == 1 || _0x261fa3 == 1) {
			return;
		}
		var _0x3b04a8 = top.dtype || 'Course';
		if (_0x3b04a8 == 'ZT' || _0x3b04a8 == 'HB' || _0x3b04a8 == 'MAG') {
			var _0x412dbd = parent.location.search || '', _0x169b32 = getCookie('UID'), _0x50ca80 = config('objectid'), _0x56c064 = 0, _0x245b6c = _0x6b2836.defaults.courseid, _0x5603a3 = _0x6b2836.defaults.knowledgeid, _0x420a02 = window.duration, _0x299530 = _0x15a187('_from_'), _0x52e623 = _0x6b2836.attachments, _0x26c54c = '';
			if (_0x52e623.length > 0) {
				for (var _0x102616 = 0, _0x38b040 = _0x52e623.length; _0x102616 < _0x38b040; _0x102616++) {
					var _0x560ecb = _0x52e623[_0x102616], _0x21680c = _0x560ecb.objectId;
					if (_0x21680c == _0x50ca80) {
						if (_0x57398c == 0) {
							_0x26c54c = _0x560ecb.enc0;
						} else {
							_0x57398c == 1 ? _0x26c54c = _0x560ecb.enc1 : _0x26c54c = _0x560ecb.enc2;
						}
						break;
					}
				}
			}
			var _0x2ddde2 = location.protocol + '//data-xxt.aichaoxing.com/analysis/datalog?s=' + _0x245b6c + '&c=' + _0x5603a3 + '&o=' + _0x50ca80 + '&st=' + _0x57398c + '&m=' + _0x56c064 + '&d=' + _0x420a02 * 1000 + '&u=' + _0x169b32 + '&_from_=' + _0x299530 + '&enc=' + _0x26c54c, _0x3c0531 = function () {
				Ext.Ajax.request({
					'url': _0x2ddde2,
					'success': function (_0x5f57eb) {
					}
				});
			};
			_0x3c0531();
			if (_0x57398c == 1) {
				playLogTimer && clearInterval(playLogTimer);
				playLogTimer = setInterval(function () {
					_0x3c0531();
				}, 5000);
			} else {
				_0x57398c == 2 && (playLogTimer && clearInterval(playLogTimer));
			}
		}
	} catch (_0x3fc6e5) {
	}
}
function receiveStudyLog() {
	try {
		var _0x334c4e = parent.AttachmentSetting;
		if (!_0x334c4e) {
			return;
		}
		if (_0x334c4e && _0x334c4e.defaults) {
			var _0x272217 = _0x334c4e.defaults;
			if (_0x272217.chapterCapture != 1) {
				return;
			}
			var _0xa2f5a4 = '/keeper/api/receive-studylog', _0x16f071 = new Date().getTime(), _0x4aff43 = _0x272217.courseid, _0x2cfaec = _0x272217.clazzId, _0x2cfbec = _0x272217.cpi, _0x1039c8 = _0x272217.userid, _0x15a2cc = _0x272217.knowledgeid, _0x20f312 = _0x272217.fid, _0x3624c2 = '', _0x42584 = config('objectid'), _0x508b95 = config('jobid') || '', _0x4fc604 = _0x334c4e.attachments;
			if (_0x4fc604.length > 0) {
				for (var _0x3cec60 = 0, _0x388e2e = _0x4fc604.length; _0x3cec60 < _0x388e2e; _0x3cec60++) {
					var _0x4cf22a = _0x4fc604[_0x3cec60], _0x518aee = _0x4cf22a.objectId;
					if (_0x518aee == _0x42584) {
						_0x3624c2 = _0x4cf22a.aid;
						break;
					}
				}
			}
			var _0xe0dfd4 = {
				'relationId': _0x3624c2,
				'objectId': _0x42584,
				'userId': _0x1039c8,
				'knowledgeId': _0x15a2cc,
				'fid': _0x20f312,
				'jobId': _0x508b95
			}, _0x52096d = {
				'courseId': _0x4aff43,
				'clazzId': _0x2cfaec,
				'personId': _0x2cfbec,
				'eventType': 4,
				'eventTime': _0x16f071,
				'data': _0xe0dfd4
			}, _0x3baca0 = _0x272217.mtEnc;
			Ext.Ajax.request({
				'method': 'post',
				'url': _0xa2f5a4,
				'params': {
					'log': JSON.stringify(_0x52096d),
					'enc': _0x3baca0
				},
				'success': function (_0x5932f7) {
				}
			});
		}
	} catch (_0x2eecbf) {
	}
}
function createVideoTask() {
	if (isViturlEdit) {
		return;
	}
	var _0x19def2 = location.protocol + '//convertservice.chaoxing.com/video/createVideoTask?objectid=' + wrongObj;
	Ext.Ajax.request({
		'timeout': 3000,
		'type': 'get',
		'async': false,
		'url': _0x19def2,
		'dataType': 'jsonp',
		'jsonp': 'jsoncallback',
		'success': function (_0x274a23) {
		},
		'failure': function (_0x123dc2) {
			console.log('创建任务失败');
		}
	});
}
Ext.onReady(function () {
	var _0xa60e2c = parent.requestSatusResourceDownGrade;
	if (_0xa60e2c && _0xa60e2c == 1) {
		var _0x431a4d = '<img src="/ananas/css/downgradeBlueTip.jpg" width="676" height="540">';
		Ext.select('body').setHTML(_0x431a4d);
		return;
	}
	loadVideo();
});
var danmaku = {};
function getDanmuByTime(_0x473ff7, _0x79462c) {
	var _0x129ae7 = parent.AttachmentSetting;
	if (!_0x129ae7) {
		return;
	}
	if (_0x129ae7 && _0x129ae7.defaults) {
		var _0x3a779e = _0x129ae7.defaults, _0x1096c5 = _0x3a779e.courseid, _0x2e6dbc = _0x3a779e.clazzId;
	} else {
		return;
	}
	if (_0x473ff7 == 'pause') {
		danmaku = {};
		return;
	}
	_0x473ff7 == 'play' && (danmaku = {});
	var _0x123c27 = config('mid'), _0x1456db = {
		'courseid': _0x1096c5,
		'classid': _0x2e6dbc,
		'mid': _0x123c27,
		'timebegin': parseInt(_0x79462c),
		'timeend': parseInt(_0x79462c) + 59
	};
	Ext.Ajax.request({
		'url': '/videodanmaku/timerange-danmakulist',
		'method': 'get',
		'params': _0x1456db,
		'success': function (_0x58771a) {
			var _0x378112 = eval('(' + _0x58771a.responseText + ')');
			if (_0x378112.status == 1) {
				var _0x3a266d = _0x378112.data;
				for (var _0x57fec2 = 0; _0x57fec2 < _0x3a266d.length; _0x57fec2++) {
					var _0x403920 = _0x3a266d[_0x57fec2].timeline;
					!danmaku[_0x403920] && (danmaku[_0x403920] = new Array());
					danmaku[_0x403920].push(_0x3a266d[_0x57fec2].content);
				}
				_0x79462c == 0 && danmuPlay(0);
			} else {
				alert('服务异常,稍后再试!');
			}
		},
		'failure': function (_0x3cb0a8) {
			alert('服务异常,稍后再试!');
		}
	});
}
var count = 0, timeFlag = -1, currentTime = 0;
function shotdanmu(_0x945c7a) {
	var _0x3ccda9 = _0x945c7a.clientWidth;
	_0x3ccda9 = -parseInt(_0x3ccda9);
	var _0x48ef1e = 'translateX(' + _0x3ccda9 + 'px)';
	setTimeout(function () {
		_0x945c7a.style.transform = _0x48ef1e;
		_0x945c7a.className = 'danmuItem left';
	}, 500);
}
function danmuPlay(_0x5c83f2) {
	currentTime = _0x5c83f2;
	if (timeFlag == _0x5c83f2) {
		return;
	}
	timeFlag = _0x5c83f2;
	var _0x512455 = danmaku[_0x5c83f2];
	if (!_0x512455) {
		return;
	}
	if (!$('.mui-switch').hasClass('checked')) {
		return;
	}
	var _0x28c155 = '<div class="danmuItem right">';
	for (var _0x1575dc = 0; _0x1575dc < _0x512455.length; _0x1575dc++) {
		if (_0x512455[_0x1575dc] == '@zan@') {
			_0x28c155 += '<span><i class="zanIcon"></i>赞</span>';
		} else {
			if (_0x512455[_0x1575dc] == '@不赞同@') {
				_0x28c155 += '<span><i class="noZanIcon"></i>不赞同</span>';
			} else {
				if (_0x512455[_0x1575dc] == '@感动@') {
					_0x28c155 += '<span><i class="moveIcon"></i>感动</span>';
				} else {
					if (_0x512455[_0x1575dc] == '@疑惑@') {
						_0x28c155 += '<span><i class="doubtIcon"></i>疑惑</span>';
					} else {
						if (_0x512455[_0x1575dc] == '@献花@') {
							_0x28c155 += '<span><i class="huaIcon"></i>献花</span>';
						} else {
							if (_0x512455[_0x1575dc] == '@鼓掌@') {
								_0x28c155 += '<span><i class="clapIcon"></i>鼓掌</span>';
							} else {
								_0x512455[_0x1575dc] == '@有趣@' ? _0x28c155 += '<span><i class="interestingIcon"></i>有趣</span>' : _0x28c155 += '<span>' + _0x512455[_0x1575dc] + '</span>';
							}
						}
					}
				}
			}
		}
	}
	_0x28c155 += '</div>';
	var _0x2f7fb0 = count % 3, _0x5dce24 = new Ext.XTemplate(_0x28c155).append('channel_' + _0x2f7fb0);
	shotdanmu(_0x5dce24);
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
function checkJobCountLimit(_0x239628, _0x45bd3e) {
	/\/studentstudy/.test(top.location.pathname) && (_0x45bd3e == 0 ? top.showJobLimitTip() : top.showVideoTimeLimitTip(), playStateV2 = setInterval(function () {
		top.resumePlay && (clearStateV2Interval(), _0x239628.play(), top.resumePlay = false);
	}, 300));
}
function startFaceCollection(_0x40e0ac, _0x2a3341, _0x5c7984, _0x139b62) {
	if (/\/studentstudy/.test(top.location.pathname)) {
		var _0xe47e19 = $('.maskDiv1', top.document).length;
		if (_0xe47e19 > 0) {
			$('#videoJobId', top.document).val(videoJobId);
			$('#chapterVideoObjectId', top.document).val(videoObjectId);
			$('#collectionTime', top.document).val(_0x139b62);
			$('#mid', top.document).val(mid);
			top.getQRCodeURLShow1 && top.getQRCodeURLShow1();
			$('.maskDiv1', top.document).css('display', 'block');
			getPlayState = setInterval(function () {
				if (top.playerState) {
					clearStateInterval();
					_0x40e0ac.play();
					_0x5c7984.firstPlayFace = false;
					top.playerState = false;
					var _0x493d1c = _0x5c7984.jumpTimePointList;
					_0x139b62 != -2 && typeof _0x493d1c != 'undefined' && (_0x493d1c.push(_0x139b62), _0x5c7984.jumpTimePointList = _0x493d1c);
				}
			}, 1000);
		}
	}
}
function chapterPlayNextVideo(_0x29bdd3) {
	/\/studentstudy/.test(top.location.pathname) && (top.getChapterNextVideo && top.getChapterNextVideo(_0x29bdd3));
}
function markersPlayer(_0x2480c5) {
	var _0x35c524 = _0x2480c5.getAttribute('data-marker-time');
	if (_0x35c524) {
		return playerTime(_0x35c524);
	}
}
function getMarkers() {
	return videojs('video').markers;
}
function playerTime(_0x6ce79c) {
	if (ff != 1) {
		return;
	}
	var _0x2a9889 = videojs('video');
	return _0x2a9889.currentTime(_0x6ce79c);
}
function playVideo() {
	var _0x5d0b38 = videojs('video');
	player.volume(0);
	player.on('loadstart', function () {
		_0x5d0b38.play().catch(Ext.emptyFn);
	});
}
function reSizeIframe() {
	try {
		var _0x36ef27 = Ext.fly(Ext.select('.main').elements[0]).getHeight();
		Ext.fly(window.frameElement).setHeight(_0x36ef27 + 'px');
	} catch (_0x30ee2a) {
		console.log(_0x30ee2a.message);
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
		var _0x2c1d89 = videojs('video'), _0x12ac3d = parseInt(_0x2c1d89.currentTime()), _0x1741aa = parseInt(_0x12ac3d / 60);
		_0x1741aa < 10 && (_0x1741aa = '0' + _0x1741aa.toString());
		var _0x27f2e5 = parseInt(_0x12ac3d % 60);
		_0x27f2e5 < 10 && (_0x27f2e5 = '0' + _0x27f2e5.toString());
		$('.Note_name', parent.parent.document).html(videoName + ' ' + _0x1741aa + ':' + _0x27f2e5);
		$('.Note_name', parent.parent.document).css('display', 'block');
		$('#noteVideoTime', parent.parent.document).val(_0x12ac3d);
		$('#noteVideoJobId', parent.parent.document).val(videoJobId);
		$('#noteVideoObjectId', parent.parent.document).val(videoObjectId);
		parent.parent.getClazzNote && parent.parent.getClazzNote();
		parent.parent.changePan && parent.parent.changePan('3');
		$('.formTopic', parent.parent.document).size() > 0 && $('.formTopic', parent.parent.document).css('display', 'block');
	});
});