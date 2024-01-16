Ext.Ajax.autoAbort = true;
Ext.isIpad = navigator.userAgent.indexOf('iPad') > -1;
Ext.isIos = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
Ext.isAndroid = navigator.userAgent.indexOf('Android') > -1;
Ext.isSogou = !!navigator.userAgent.match(/metasr/i);
Ext.isChaoxing = navigator.userAgent.indexOf('ChaoXingStudy') > -1;
function greenligth() {
	Ext.fly(window.frameElement).parent().addCls('ans-job-finished');
}
var isViturlEdit = false, ff = 1;
function proxy_completed() {
	ed_complete && (greenligth(), ed_complete());
}
function config(d) {
	return window.frameElement.getAttribute(d);
}
function getCookie(objname) {
	var arrstr = document.cookie.split('; ');
	for (var i = 0; i < arrstr.length; i++) {
		var temp = arrstr[i].split('=');
		if (temp[0] == objname) {
			return unescape(temp[1]);
		}
	}
}
function showMoocPlayer(paras) {
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
			var _0x2c5b96 = new MoocPlayer({
				'isSendLog': !!parent.AttachmentSetting && parent.AttachmentSetting.control,
				'data': paras,
				'height': 540,
				'width': 676
			});
		});
	});
}
function showHTML5Player(paras) {
	Ext.get('reader').setHTML('<video id="video" class="video-js vjs-default-skin vjs-big-play-centered"></video>');
	new ans.VideoJs({
		'videojs': 'video',
		'params': paras
	});
	document.getElementsByTagName('video')[0].addEventListener('play', function () {
		var iframearray = parent.document.getElementsByTagName('iframe');
		for (var i = 0; i < iframearray.length; i++) {
			if (iframearray[i].getAttribute('src').indexOf('microCourse') != -1) {
				var item = iframearray[i].contentWindow.document.getElementsByTagName('iframe')[0].contentWindow;
				item.PageView.stopAll && item.PageView.stopAll();
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
	function _0x426238() {
		var _0x4cf76c = $('#video').height(), _0x3cd4e9 = $('#sp_video_ppt_pic').height(), _0xade7d6 = (parseInt(_0x4cf76c) - 60 - parseInt(_0x3cd4e9)) / 2;
		$('#sp_video_ppt_pic').length > 0 && $('#sp_video_ppt_pic').hasClass('sp_ppt_pic_fullScreen') ? ($('#sp_video_ppt_pic').css('top', _0xade7d6 + 'px'), $('#sp_video_ppt_pic').css('left', '0')) : ($('#sp_video_ppt_pic').css('top', '0px'), $('#sp_video_ppt_pic').css('left', '0px'));
	}
	$('.vjs-fullscreen-control').click(function () {
		setTimeout(_0x426238, 300);
	});
	$(window).resize(function () {
		setTimeout(_0x426238, 500);
	});
}
var wrongObj = '', videoName = '', videoJobId = '', videoObjectId = '';
function loadVideo() {
	var _0x5d3bc7 = config('objectid'), _0x1d98bf = Ext.get('reader');
	if (!_0x5d3bc7) {
		_0x1d98bf.setHTML('未找到该文件');
		return;
	}
	wrongObj = _0x5d3bc7;
	videoObjectId = _0x5d3bc7;
	var _0x365eb1 = window.frameElement, _0x4f1808 = Ext.decode(_0x365eb1.getAttribute('data')), _0x8bf0f0 = parent.AttachmentSetting, _0x2763c2 = config('mid'), _0x26080a = 0, _0x1d2538 = config('vbegin'), _0x265c73 = config('vend'), _0x264973 = config('jobid') || '', _0x281396 = _0x4f1808 ? _0x4f1808.danmaku == null ? 0 : _0x4f1808.danmaku : 0, _0x5213d7 = _0x8bf0f0 && _0x8bf0f0.videoTopicCloud, _0x4619f5 = config('fastforward') == 'true' ? true : false, _0x348ae6 = config('switchwindow') == 'true' ? true : false, _0xc4e313 = Ext.get('note'), _0xeae2e1 = Ext.get('hl'), _0x49428f = Ext.get('note1-wrap'), _0x26916b = Ext.get('note1'), _0x53d966 = null, _0xdaeeef = _0x4f1808 ? _0x4f1808.rt ? _0x4f1808.rt : 0.9 : 0.9;
	_0x264973 == '' ? videoJobId = _0x4f1808 && _0x4f1808['_jobid'] ? _0x4f1808['_jobid'] : '' : videoJobId = _0x264973;
	var _0x3f5d8c = flashChecker().hasFlash;
	try {
		isTeacher = top.location.href.indexOf('teacherstudy') > 0 || top.location.href.indexOf('course/phone/chapterdata') > 0;
	} catch (_0x16add9) {
	}
	var _0x40b6e9 = parent.isVideoVisibleName, _0x24a749 = _0x4f1808 ? _0x4f1808.doublespeed != 0 ? 1 : 0 : 1;
	_0x4f1808.v_begin && _0x4f1808.v_end && _0x4f1808.pobjectid && (isViturlEdit = true);
	function _0xd991da(_0xafaa22) {
		if (_0xafaa22 && _0xafaa22.length == 0) {
			return;
		}
		if (Ext.select('.zsCloud_ul') != null) {
			var _0x468ddb = '';
			for (var _0x124454 = 0, _0x3e8e87 = _0xafaa22.length; _0x124454 < _0x3e8e87; _0x124454++) {
				_0x468ddb += '<li><span class=\'topicId' + _0xafaa22[_0x124454].id + '\' onclick=\'markersPlayer(this)\'>' + _0xafaa22[_0x124454].name + ' </span></li>';
			}
			Ext.select('.zsCloud_ul').setHTML(_0x468ddb);
			Ext.select('.zsCloud').setStyle('display', 'block');
		}
	}
	function _0x44b806() {
		_0x26080a <= 100 && _0xeae2e1.setWidth((_0x26080a += 5) + '%');
		var _0x1b0e22 = getCookie('fid') || '';
		Ext.Ajax.request({
			'url': '/ananas/status/' + _0x5d3bc7 + '?k=' + _0x1b0e22 + '&flag=normal',
			'success': function (_0x23be19) {
				var _0x309ab2 = eval('(' + _0x23be19.responseText + ')');
				Ext.get('loading').hide();
				switch (_0x309ab2.status) {
					case 'success':
						_0x49428f.remove(), videoName = _0x4f1808 && _0x4f1808.name || '';
						_0x40b6e9 != 'false' && (Ext.fly(window.frameElement).parent().first('.ans-job-icon') != null ? Ext.fly(window.frameElement).parent().first('.ans-job-icon').insertHtml('beforeEnd', '<span title="' + videoName + '" style="width: 500px;margin-left: 120px;display: inline-block;height: 23px;line-height: 23px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">' + videoName + '</span>') : Ext.fly(window.frameElement).parent().insertHtml('afterBegin', '<div title="' + videoName + '" style="width: 500px;display: inline-block;line-height: 23px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">' + videoName + '</div>'));
						var _0x462c67 = _0x309ab2.duration, _0x5678df = {
							'enableFastForward': _0x4619f5 ? 0 : 1,
							'enableSwitchWindow': _0x348ae6 ? 0 : 1,
							'duration': _0x462c67,
							'httpmd': _0x309ab2.httpmd,
							'http': _0x309ab2.http,
							'httphd': _0x309ab2.httphd,
							'httpshd': _0x309ab2.httpshd,
							'filename': _0x309ab2.filename,
							'dtoken': _0x309ab2.dtoken,
							'videoTopicCloud': _0x5213d7
						};
						window.duration = _0x462c67;
						_0x309ab2.cdn && (_0x5678df.cdn = _0x309ab2.cdn);
						if (document.cookie.length > 0) {
							_0x5678df.memberinfo = getCookie('memberinfo');
							_0x5678df.questionErrorLogUrl = ServerHosts.MASTER_HOST + '/question/addquestionerror';
						}
						_0x2763c2 && (_0x5678df.mid = _0x2763c2);
						_0x309ab2.duration && (_0x5678df.videoTotalTime = _0x309ab2.duration);
						if (_0x8bf0f0 && _0x8bf0f0.isErya == 1) {
							_0x5678df.screenshot = 'https://p.ananas.chaoxing.com/star3/origin/a26e16b5ac8e769bba6bda57343b7d57.png';
						} else {
							_0x309ab2.screenshot && (_0x5678df.screenshot = _0x309ab2.screenshot);
						}
						_0x8bf0f0 && (_0x5678df.chapterVideoTranslate = _0x8bf0f0.chapterVideoTranslate);
						_0x309ab2.thumbnails && (_0x5678df.thumbnails = _0x309ab2.thumbnails);
						_0x309ab2.subobjectid && (_0x5678df.subobjectid = _0x309ab2.subobjectid);
						_0x1d2538 && (_0x5678df.startTime = _0x1d2538);
						_0x265c73 && (_0x5678df.endTime = _0x265c73);
						_0x5678df.rt = _0xdaeeef, _0x5678df.control = _0x8bf0f0 && _0x8bf0f0.control;
						isTeacher && (_0x5678df.control = false);
						var _0x30ea28 = {}, _0x14905a, _0x194a32, _0x16581e;
						if (_0x8bf0f0 && _0x8bf0f0.control) {
							var _0xf0b1fd = _0x8bf0f0.attachments, _0x31c287 = _0x8bf0f0.defaults, _0x43dbd6 = _0x309ab2.objectid + '-' + (_0x1d2538 ? _0x1d2538 : 0) + '-' + (_0x265c73 ? _0x265c73 : _0x462c67) + '-' + _0x264973;
							_0x31c287 && (_0x5678df.userid = _0x31c287.userid || '', _0x5678df.fid = _0x31c287.fid || '');
							for (var _0x17b6ad = 0; _0x17b6ad < _0xf0b1fd.length; _0x17b6ad++) {
								_0x30ea28 = _0xf0b1fd[_0x17b6ad];
								_0x194a32 = 0;
								_0x16581e = _0x462c67;
								_0x30ea28.property && (_0x30ea28.property.vbegin && (_0x194a32 = _0x30ea28.property.vbegin), _0x30ea28.property.vend && (_0x16581e = _0x30ea28.property.vend));
								!_0x30ea28.jobid && (_0x30ea28.jobid = '');
								_0x14905a = _0x30ea28.objectId + '-' + _0x194a32 + '-' + _0x16581e + '-' + _0x30ea28.jobid;
								if (_0x43dbd6 == _0x14905a) {
									Ext.apply(_0x5678df, _0x8bf0f0.defaults);
									_0x5678df.headOffset = _0x30ea28.headOffset ? Math.floor(parseInt(_0x30ea28.headOffset) / 1000) : 0;
									_0x5678df.objectId = _0x30ea28.objectId;
									_0x5678df.otherInfo = _0x30ea28.otherInfo;
									_0x5678df.isPassed = _0x30ea28.isPassed;
									_0x5678df.aId = _0x30ea28.aid;
									_0x5678df.danmaku = _0x281396;
									_0x30ea28.topicList && _0xd991da(_0x30ea28.topicList);
									_0x30ea28.property && _0x30ea28.property.fastforward && _0x30ea28.property.fastforward == 'true' && (_0x5678df.enableFastForward = 0);
									_0x30ea28.property && typeof _0x30ea28.property.doublespeed != 'undefined' && _0x30ea28.property.doublespeed == 0 && (_0x5678df.doublespeed = 0, _0x24a749 = 0);
									var _0xe15a64 = _0x5678df.schooldoublespeed;
									typeof _0xe15a64 == 'undefined' || _0xe15a64 == 2 ? _0x5678df.doublespeed = _0x24a749 : _0x5678df.doublespeed = _0xe15a64;
									_0x264973 && (_0x5678df.jobid = _0x264973, !_0x30ea28.job && (!isTeacher && greenligth(), ed_complete = false, _0x5678df.enableFastForward = 1, _0x5678df.enableSwitchWindow = 1, _0x5678df.headOffset = 0));
									_0x5678df.reportUrl = _0x5678df.reportUrl && _0x5678df.reportUrl.replace('http://', window.location.protocol + '//');
									window['_jobindex'] = _0x17b6ad;
									break;
								}
							}
						} else {
							var _0xe15a64 = _0x5678df.schooldoublespeed;
							typeof _0xe15a64 == 'undefined' || _0xe15a64 == 2 ? _0x5678df.doublespeed = _0x24a749 : _0x5678df.doublespeed = _0xe15a64;
						}
						if (_0x5678df.ignoreVideoCtrl == 1) {
							_0x5678df.enableFastForward = 1;
							_0x5678df.enableSwitchWindow = 1;
						}
						(!_0x5678df.control || isTeacher) && (ed_complete = false, _0x5678df.enableFastForward = 1, _0x5678df.enableSwitchWindow = 1, _0x5678df.headOffset = 0);
						(_0x5678df.isPassed || _0x5678df.headOffset > _0x5678df.videoTotalTime * 0.95) && (_0x5678df.headOffset = 0);
						_0x53d966 && clearInterval(_0x53d966), _0x5678df.isSupportFace = $('.maskDiv1', top.document).length > 0 && /\/studentstudy/.test(top.location.pathname) ? true : false, _0x5678df.isShowFaceCollection = /\/studentstudy/.test(top.location.pathname) && !Ext.fly(window.frameElement).parent().hasCls('ans-job-finished');
						if (supportH5Video()) {
							_0x4f1808.danmaku && (loadMultiFile([{
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
							ff = _0x5678df.enableFastForward;
							showHTML5Player(_0x5678df);
						} else {
							if (!_0x3f5d8c) {
								var _0x1f7517 = 'http://www.adobe.com/go/getflashplayer';
								Ext.get('reader').setHTML('您没有安装flashplayer\uFF0C请到<a href="' + _0x1f7517 + '" target="_blank">www.adobe.com</a>下载安装\u3002<br/>如果已经安装请点击此处启用\uFF1A<object id="swf_jlxl1lfb" height="50" width="100" type="application/x-shockwave-flash" data="/ananas/modules/video/cxplayer/player_4.0.11.swf?v=20161025" style="border:#ccc 1px solid"><param name="quality" value="high"><param name="allowScriptAccess" value="always"><param name="wMode" value="transparent"><param name="align" value="middle"><param name="bgcolor" value="#000000"><param name="swLiveConnect" value="true"><param name="loop" value="true"><param name="play" value="true"><param name="DeviceFont" value="false"><param name="allowFullScreen" value="true"><param name="menu" value="true"></object>');
								return;
							}
							showMoocPlayer(_0x5678df);
						}
						sendReadZTMediaLog(0);
						break;
					case 'failed':
						_0x53d966 && clearInterval(_0x53d966), _0x49428f.remove(), _0xc4e313.show();
						break;
					case 'waiting':
						_0x49428f.update('<div class="line1"><div class="line3"></div></div><p class="tipStyle making">视频正在转码\uFF0C您无需在此页面等待\u30109001\u3011</p>');
						break;
					case 'converting':
					case 'transfer':
						_0x49428f.update('<div class="line1"><div class="line2"></div></div><p class="tipStyle">视频上传中\u30109002\u3011</p>');
						break;
				}
			},
			'failure': function (_0x28181e) {
				_0x28181e.status == 0 ? (_0x53d966 && clearInterval(_0x53d966), _0x49428f.update('<div class="line1"><div class="line2"></div></div><p class="tipStyle">视频加载超时\uFF0C请刷新页面重试\u30109003\u3011</p>'), Ext.get('loading').hide()) : (_0x53d966 && clearInterval(_0x53d966), _0x49428f.update('<div class="line1"><div class="line3"></div></div><p class="tipStyle">视频加载失败\uFF0C请稍后再试\u30109004\u3011</p>'), Ext.get('loading').hide());
			}
		});
	}
	_0x44b806();
}
function supportH5Video() {
	var _0x6aeaaa = function () {
		var _0x41c4a5 = document.createElement('video');
		if (typeof _0x41c4a5.canPlayType == 'function') {
			var _0x4f069c = _0x41c4a5.canPlayType('video/mp4;codecs="avc1.42E01E,mp4a.40.2"');
			if (_0x4f069c.toLowerCase() == 'maybe' || _0x4f069c.toLowerCase() == 'probably') {
				return true;
			}
			var _0x4f069c = _0x41c4a5.canPlayType('video/mp4;codecs="avc1.64001E,mp4a.40.2"');
			if (_0x4f069c.toLowerCase() == 'maybe' || _0x4f069c.toLowerCase() == 'probably') {
				return true;
			}
		}
		return false;
	};
	if (Ext.isIE && Ext.isIE10m) {
		return false;
	}
	return _0x6aeaaa();
}
var playLogTimer;
function sendReadZTMediaLog(_0x18fbc6) {
	try {
		var _0x5d72c4 = function (_0x3de9ed) {
			var _0x3aa9cf = new RegExp('(^|&)' + _0x3de9ed + '=([^&]*)(&|$)'), _0x2e5eb0 = parent.location.search.substr(1).match(_0x3aa9cf);
			if (_0x2e5eb0 != null) {
				return unescape(_0x2e5eb0[2]);
			}
			return null;
		}, _0x192651 = parent.AttachmentSetting, _0x4183cc = window.frameElement, _0x34617c = _0x4183cc.parentElement.parentElement.parentElement.getAttribute('kid');
		if (_0x34617c) {
			var _0x56f02c = 'marg-' + _0x34617c;
			_0x192651 = top[_0x56f02c];
			typeof _0x192651 == 'string' && (_0x192651 = eval('(' + _0x192651 + ')'));
		}
		if (!_0x192651) {
			return;
		}
		var _0x2b5975 = _0x192651.defaults.isFiled, _0x1cf8d3 = _0x192651.defaults.state;
		if (_0x2b5975 == 1 || _0x1cf8d3 == 1) {
			return;
		}
		var _0x3b5837 = top.dtype || 'Course';
		if (_0x3b5837 == 'ZT' || _0x3b5837 == 'HB' || _0x3b5837 == 'MAG') {
			var _0x47b016 = parent.location.search || '', _0x9ab180 = getCookie('UID'), _0x153b3a = config('objectid'), _0x235b32 = 0, _0x2d694b = _0x192651.defaults.courseid, _0x14e7f4 = _0x192651.defaults.knowledgeid, _0x49508f = window.duration, _0xbe6748 = _0x5d72c4('_from_'), _0x8d819 = _0x192651.attachments, _0x4e5f66 = '';
			if (_0x8d819.length > 0) {
				for (var _0x2a25f9 = 0, _0x51100c = _0x8d819.length; _0x2a25f9 < _0x51100c; _0x2a25f9++) {
					var _0xe00c88 = _0x8d819[_0x2a25f9], _0x422c86 = _0xe00c88.objectId;
					if (_0x422c86 == _0x153b3a) {
						if (_0x18fbc6 == 0) {
							_0x4e5f66 = _0xe00c88.enc0;
						} else {
							_0x18fbc6 == 1 ? _0x4e5f66 = _0xe00c88.enc1 : _0x4e5f66 = _0xe00c88.enc2;
						}
						break;
					}
				}
			}
			var _0x188913 = location.protocol + '//data-xxt.aichaoxing.com/analysis/datalog?s=' + _0x2d694b + '&c=' + _0x14e7f4 + '&o=' + _0x153b3a + '&st=' + _0x18fbc6 + '&m=' + _0x235b32 + '&d=' + _0x49508f * 1000 + '&u=' + _0x9ab180 + '&_from_=' + _0xbe6748 + '&enc=' + _0x4e5f66, _0x191267 = function () {
				Ext.Ajax.request({
					'url': _0x188913,
					'success': function (_0x5cf289) {
					}
				});
			};
			_0x191267();
			if (_0x18fbc6 == 1) {
				playLogTimer && clearInterval(playLogTimer);
				playLogTimer = setInterval(function () {
					_0x191267();
				}, 5000);
			} else {
				_0x18fbc6 == 2 && (playLogTimer && clearInterval(playLogTimer));
			}
		}
	} catch (_0x1e8c7d) {
	}
}
function receiveStudyLog() {
	try {
		var _0x362835 = parent.AttachmentSetting;
		if (!_0x362835) {
			return;
		}
		if (_0x362835 && _0x362835.defaults) {
			var _0x53d020 = _0x362835.defaults;
			if (_0x53d020.chapterCapture != 1) {
				return;
			}
			var _0x41c4a9 = '/keeper/api/receive-studylog', _0x336a5f = new Date().getTime(), _0x322cc9 = _0x53d020.courseid, _0x22bcda = _0x53d020.clazzId, _0x50c402 = _0x53d020.cpi, _0x1ffbad = _0x53d020.userid, _0x44c2d8 = _0x53d020.knowledgeid, _0x3f6092 = _0x53d020.fid, _0x4aac66 = '', _0x4ce411 = config('objectid'), _0x517600 = config('jobid') || '', _0x598e13 = _0x362835.attachments;
			if (_0x598e13.length > 0) {
				for (var _0x2a0ce9 = 0, _0x39acc6 = _0x598e13.length; _0x2a0ce9 < _0x39acc6; _0x2a0ce9++) {
					var _0x4e1ac4 = _0x598e13[_0x2a0ce9], _0x42c11d = _0x4e1ac4.objectId;
					if (_0x42c11d == _0x4ce411) {
						_0x4aac66 = _0x4e1ac4.aid;
						break;
					}
				}
			}
			var _0xea7eb0 = {
				'relationId': _0x4aac66,
				'objectId': _0x4ce411,
				'userId': _0x1ffbad,
				'knowledgeId': _0x44c2d8,
				'fid': _0x3f6092,
				'jobId': _0x517600
			}, _0x4f245f = {
				'courseId': _0x322cc9,
				'clazzId': _0x22bcda,
				'personId': _0x50c402,
				'eventType': 4,
				'eventTime': _0x336a5f,
				'data': _0xea7eb0
			}, _0x133d02 = _0x53d020.mtEnc;
			Ext.Ajax.request({
				'method': 'post',
				'url': _0x41c4a9,
				'params': {
					'log': JSON.stringify(_0x4f245f),
					'enc': _0x133d02
				},
				'success': function (_0xe3e1b2) {
				}
			});
		}
	} catch (_0x186560) {
	}
}
function createVideoTask() {
	if (isViturlEdit) {
		return;
	}
	var _0x5761a1 = location.protocol + '//convertservice.chaoxing.com/video/createVideoTask?objectid=' + wrongObj;
	Ext.Ajax.request({
		'timeout': 3000,
		'type': 'get',
		'async': false,
		'url': _0x5761a1,
		'dataType': 'jsonp',
		'jsonp': 'jsoncallback',
		'success': function (_0x4df9df) {
		},
		'failure': function (_0x554ccb) {
			console.log('创建任务失败');
		}
	});
}
Ext.onReady(function () {
	var _0x56a748 = parent.requestSatusResourceDownGrade;
	if (_0x56a748 && _0x56a748 == 1) {
		var _0x3822c3 = '<img src="/ananas/css/downgradeBlueTip.jpg" width="676" height="540">';
		Ext.select('body').setHTML(_0x3822c3);
		return;
	}
	loadVideo();
});
var danmaku = {};
function getDanmuByTime(_0x76ec7c, _0x4edabf) {
	var _0x32ee39 = parent.AttachmentSetting;
	if (!_0x32ee39) {
		return;
	}
	if (_0x32ee39 && _0x32ee39.defaults) {
		var _0x369d0c = _0x32ee39.defaults, _0x137863 = _0x369d0c.courseid, _0x3b0974 = _0x369d0c.clazzId;
	} else {
		return;
	}
	if (_0x76ec7c == 'pause') {
		danmaku = {};
		return;
	}
	_0x76ec7c == 'play' && (danmaku = {});
	var _0x4a06c9 = config('mid'), _0x19a4af = {
		'courseid': _0x137863,
		'classid': _0x3b0974,
		'mid': _0x4a06c9,
		'timebegin': parseInt(_0x4edabf),
		'timeend': parseInt(_0x4edabf) + 59
	};
	Ext.Ajax.request({
		'url': '/videodanmaku/timerange-danmakulist',
		'method': 'get',
		'params': _0x19a4af,
		'success': function (_0x3a366d) {
			var _0x13aea4 = eval('(' + _0x3a366d.responseText + ')');
			if (_0x13aea4.status == 1) {
				var _0x31b97e = _0x13aea4.data;
				for (var _0x2d12d0 = 0; _0x2d12d0 < _0x31b97e.length; _0x2d12d0++) {
					var _0x55cbab = _0x31b97e[_0x2d12d0].timeline;
					!danmaku[_0x55cbab] && (danmaku[_0x55cbab] = new Array());
					danmaku[_0x55cbab].push(_0x31b97e[_0x2d12d0].content);
				}
				_0x4edabf == 0 && danmuPlay(0);
			} else {
				alert('服务异常,稍后再试!');
			}
		},
		'failure': function (_0x1eb100) {
			alert('服务异常,稍后再试!');
		}
	});
}
var count = 0, timeFlag = -1, currentTime = 0;
function shotdanmu(_0x26be9c) {
	var _0x24f480 = _0x26be9c.clientWidth;
	_0x24f480 = -parseInt(_0x24f480);
	var _0x4fcf9e = 'translateX(' + _0x24f480 + 'px)';
	setTimeout(function () {
		_0x26be9c.style.transform = _0x4fcf9e;
		_0x26be9c.className = 'danmuItem left';
	}, 500);
}
function danmuPlay(_0x4ae9d6) {
	currentTime = _0x4ae9d6;
	if (timeFlag == _0x4ae9d6) {
		return;
	}
	timeFlag = _0x4ae9d6;
	var _0xd02b6c = danmaku[_0x4ae9d6];
	if (!_0xd02b6c) {
		return;
	}
	if (!$('.mui-switch').hasClass('checked')) {
		return;
	}
	var _0x382c6b = '<div class="danmuItem right">';
	for (var _0x5f5bd9 = 0; _0x5f5bd9 < _0xd02b6c.length; _0x5f5bd9++) {
		if (_0xd02b6c[_0x5f5bd9] == '@zan@') {
			_0x382c6b += '<span><i class="zanIcon"></i>赞</span>';
		} else {
			if (_0xd02b6c[_0x5f5bd9] == '@不赞同@') {
				_0x382c6b += '<span><i class="noZanIcon"></i>不赞同</span>';
			} else {
				if (_0xd02b6c[_0x5f5bd9] == '@感动@') {
					_0x382c6b += '<span><i class="moveIcon"></i>感动</span>';
				} else {
					if (_0xd02b6c[_0x5f5bd9] == '@疑惑@') {
						_0x382c6b += '<span><i class="doubtIcon"></i>疑惑</span>';
					} else {
						if (_0xd02b6c[_0x5f5bd9] == '@献花@') {
							_0x382c6b += '<span><i class="huaIcon"></i>献花</span>';
						} else {
							if (_0xd02b6c[_0x5f5bd9] == '@鼓掌@') {
								_0x382c6b += '<span><i class="clapIcon"></i>鼓掌</span>';
							} else {
								_0xd02b6c[_0x5f5bd9] == '@有趣@' ? _0x382c6b += '<span><i class="interestingIcon"></i>有趣</span>' : _0x382c6b += '<span>' + _0xd02b6c[_0x5f5bd9] + '</span>';
							}
						}
					}
				}
			}
		}
	}
	_0x382c6b += '</div>';
	var _0x20f7da = count % 3, _0x279a70 = new Ext.XTemplate(_0x382c6b).append('channel_' + _0x20f7da);
	shotdanmu(_0x279a70);
	count++;
}
var getPlayState;
function clearStateInterval() {
	getPlayState && clearInterval(getPlayState);
}
function startFaceCollection(_0x1ddb36, _0xa37f8e, _0x542d5b) {
	if (/\/studentstudy/.test(top.location.pathname)) {
		var _0xcbea2d = $('.maskDiv1', top.document).length;
		if (_0xcbea2d > 0) {
			$('#videoJobId', top.document).val(videoJobId);
			$('#chapterVideoObjectId', top.document).val(videoObjectId);
			top.getQRCodeURLShow1 && top.getQRCodeURLShow1();
			$('.maskDiv1', top.document).css('display', 'block');
			getPlayState = setInterval(function () {
				top.playerState && (clearStateInterval(), _0x542d5b.isPlay = true, _0x1ddb36.play(), top.playerState = false);
			}, 1000);
		}
	}
}
function chapterPlayNextVideo(_0x39979c) {
	/\/studentstudy/.test(top.location.pathname) && (top.getChapterNextVideo && top.getChapterNextVideo(_0x39979c));
}
function markersPlayer(_0x4c9cbf) {
	var _0x3bbede = _0x4c9cbf.getAttribute('data-marker-time');
	if (_0x3bbede) {
		return playerTime(_0x3bbede);
	}
}
function getMarkers() {
	return videojs('video').markers;
}
function playerTime(_0x342ddc) {
	if (ff != 1) {
		return;
	}
	var _0x1a7179 = videojs('video');
	return _0x1a7179.currentTime(_0x342ddc);
}
function playVideo() {
	var _0x25aa1a = videojs('video');
	player.volume(0);
	player.on('loadstart', function () {
		_0x25aa1a.play().catch(Ext.emptyFn);
	});
}
function reSizeIframe() {
	try {
		var _0xe62449 = Ext.fly(Ext.select('.main').elements[0]).getHeight();
		Ext.fly(window.frameElement).setHeight(_0xe62449 + 'px');
	} catch (_0xf333a9) {
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
		var _0x567610 = videojs('video'), _0x363653 = parseInt(_0x567610.currentTime()), _0x576872 = parseInt(_0x363653 / 60);
		_0x576872 < 10 && (_0x576872 = '0' + _0x576872.toString());
		var _0x4c60ef = parseInt(_0x363653 % 60);
		_0x4c60ef < 10 && (_0x4c60ef = '0' + _0x4c60ef.toString());
		$('.Note_name', parent.parent.document).html(videoName + ' ' + _0x576872 + ':' + _0x4c60ef);
		$('.Note_name', parent.parent.document).css('display', 'block');
		$('#noteVideoTime', parent.parent.document).val(_0x363653);
		$('#noteVideoJobId', parent.parent.document).val(videoJobId);
		$('#noteVideoObjectId', parent.parent.document).val(videoObjectId);
		parent.parent.getClazzNote && parent.parent.getClazzNote();
		parent.parent.changePan && parent.parent.changePan('3');
		$('.formTopic', parent.parent.document).size() > 0 && $('.formTopic', parent.parent.document).css('display', 'block');
	});
});