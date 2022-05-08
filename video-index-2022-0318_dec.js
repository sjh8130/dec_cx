Ext.Ajax['autoAbort'] = true;
Ext['isIpad'] = navigator['userAgent'].indexOf('iPad') > -0x1;
Ext['isIos'] = !!navigator['userAgent']['match'](/\(i[^;]+;( U;)? CPU.+Mac OS X/);
Ext['isAndroid'] = navigator['userAgent'].indexOf('Android') > -0x1;
Ext['isSogou'] = !!navigator['userAgent']['match'](/metasr/i);
Ext['isChaoxing'] = navigator['userAgent'].indexOf('ChaoXingStudy') > -1;
function greenligth() {
	Ext.fly(window.frameElement).parent()['addCls']('ans-job-finished');
}
function isUnFinishJob() {
	try {
		var _0xb12f1b = Ext.fly(window.frameElement)['prev']();
		if (_0xb12f1b && _0xb12f1b['hasCls']('ans-job-icon'))
			return !Ext.fly(window.frameElement).parent()['hasCls']('ans-job-finished');
		return false;
	} catch (_0xed312) {
		console.log(_0xed312);
	}
	return false;
}
var isViturlEdit = false
	, ff = 0x1;
function proxy_completed() {
	ed_complete && (greenligth(),
		ed_complete());
}
function config(d) {
	return window.frameElement.getAttribute(d);
}
function getCookie(objname) {
	var arrstr = document.cookie.split(';\x20');
	for (var i = 0; i < arrstr.length; i++) {
		var temp = arrstr[i].split('=');
		if (temp[0] == objname)
			return unescape(temp[0x1]);
	}
}
function showMoocPlayer(paras) {
	loadMultiFile([{
		'src': 'cxplayer/jquery.min.js',
		'tag': 'script',
		'type': 'text/javascript',
		'defer': 'defer'
	}, {
		'src': '/ananas/swfobject/swfobject.js',
		'tag': 'script',
		'type': 'text/javascript',
		'defer': 'defer'
	}, {
		'src': 'cxplayer/json.util.js',
		'tag': 'script',
		'type': 'text/javascript',
		'defer': 'defer'
	}], function () {
		loadMultiFile([{
			'src': 'cxplayer/scroll.js',
			'tag': 'script',
			'type': 'text/javascript',
			'defer': 'defer'
		}, {
			'src': 'cxplayer/cxplayer.4.0.5.js?v=20160405',
			'tag': 'script',
			'type': 'text/javascript',
			'defer': 'defer'
		}, {
			'src': 'cxplayer/moocplayer_4.0.11.js?v=2020-1016-2010',
			'tag': 'script',
			'type': 'text/javascript',
			'defer': 'defer'
		}], function () {
			var mp = new MoocPlayer({
				'isSendLog': !!parent.AttachmentSetting && parent.AttachmentSetting.control,
				'data': paras,
				'height': 0x21c,
				'width': 0x2a4
			});
		});
	});
}
function showHTML5Player(paras) {
	Ext.get('reader').setHTML('<video id="video" class="video-js vjs-default-skin vjs-big-play-centered"></video>'),
		new ans[('VideoJs')]({
			'videojs': 'video',
			'params': paras
		}),
		document.getElementsByTagName('video')[0].addEventListener('play', function () {
			var iframearray = parent.document.getElementsByTagName('iframe');
			for (var i = 0; i < iframearray.length; i++) {
				if (iframearray[i].getAttribute('src').indexOf('microCourse') != -0x1) {
					var item = iframearray[i].contentWindow.document.getElementsByTagName('iframe')[0].contentWindow;
					item.PageView.stopAll && item.PageView.stopAll();
				}
			}
			$('.vjs-subs-caps-button .vjs-icon-placeholder').hover(function () {
				$('.vjs-subs-caps-button .vjs-menu-content').length > 0 && ($('.vjs-subs-caps-button .vjs-menu-content').niceScroll({
					'cursorborder': '',
					'cursorwidth': 0x8,
					'cursorcolor': '#CAD5E6',
					'boxzoom': false,
					'autohidemode': true
				}),
					$('.vjs-subs-caps-button\x20.vjs-menu-content').getNiceScroll().resize());
			});
		});
	function changePPTTop() {
		var videoHeight = $('#video').height(),
			picHeight = $('#sp_video_ppt_pic').height(),
			topHeight = (parseInt(videoHeight) - 0x3c - parseInt(picHeight)) / 2;
		$('#sp_video_ppt_pic').length > 0 && $('#sp_video_ppt_pic').hasClass('sp_ppt_pic_fullScreen') ? ($('#sp_video_ppt_pic').css('top', topHeight + 'px'),
			$('#sp_video_ppt_pic').css('left', '0')) : ($('#sp_video_ppt_pic').css('top', '0px'),
				$('#sp_video_ppt_pic').css('left', '0px'));
	}
	$('.vjs-fullscreen-control').click(function () {
		setTimeout(changePPTTop, 0x12c);
	}),
		$(window).resize(function () {
			setTimeout(changePPTTop, 0x1f4);
		});
}
var wrongObj = ''
	, videoName = ''
	, videoJobId = ''
	, videoObjectId = '';
function loadVideo() {
	var objectid = config('objectid')
		, reader = Ext.get('reader');
	if (!objectid) {
		reader.setHTML('未找到该文件');
		return;
	}
	wrongObj = objectid,
		videoObjectId = objectid;
	var iframe = window.frameElement
		, data = Ext.decode(iframe.getAttribute('data'))
		, setting = parent.AttachmentSetting
		, mid = config('mid')
		, percent = 0
		, _0x35a9fe = config('vbegin')
		, _0x11630a = config('vend')
		, _0x2cc93f = config('jobid') || ''
		, _0x185d82 = data ? data.danmaku == null ? 0 : data.danmaku : 0
		, _0x1daec2 = setting && setting.videoTopicCloud
		, fastforward = config('fastforward') == 'true' ? true : false
		, switchwindow = config('switchwindow') == 'true' ? true : false
		, note = Ext.get('note')
		, hl = Ext.get('hl')
		, note1Wrap = Ext.get('note1-wrap')
		, _0x28e764 = Ext.get('note1')
		, timer = null
		, _0x5d15d1 = data ? data.rt ? data.rt : 0.9 : 0.9;
	_0x2cc93f == '' ? videoJobId = data && data['_jobid'] ? data['_jobid'] : '' : videoJobId = _0x2cc93f;
	var fls = flashChecker()['hasFlash'];
	try {
		isTeacher = top.location.href.indexOf('teacherstudy') > 0 || top.location.href.indexOf('course/phone/chapterdata') > 0;
	} catch (_0x17b9ee) { }
	var isVideoVisibleName = parent['isVideoVisibleName']
		, doublespeed = data ? data.doublespeed != 0 ? 0x1 : 0 : 0x1;
	data['v_begin'] && data['v_end'] && data['pobjectid'] && (isViturlEdit = true);
	function setTopicName(list) {
		if (list && list.length == 0)
			return;
		if (Ext.select('.zsCloud_ul') != null) {
			var spanList = '';
			for (var i = 0, len = list.length; i < len; i++) {
				spanList += "<li><span class='zsCloud_span topicId" + list[i]['id'] + "' onclick='markersPlayer(this)'>" + list[i].name + ' </span></li>';
			}
			Ext.select('.zsCloud_ul').setHTML(spanList),
				Ext.select('.zsCloud').setStyle('display', 'block');
		}
	}
	function request() {
		percent <= 0x64 && hl['setWidth']((percent += 0x5) + '%');
		var k = getCookie('fid') || '';
		Ext.Ajax.request({
			'url': '/ananas/status/' + objectid + '?k=' + k + '&flag=normal',
			'success': function (response) {
				var oData = eval('(' + response['responseText'] + ')');
				Ext.get('loading')['hide']();
				switch (oData.status) {
					case 'success':
						note1Wrap.remove(),
							videoName = data && data.name || '';
						isVideoVisibleName != 'false' && (Ext.fly(window.frameElement).parent()['first']('.ans-job-icon') != null ? Ext.fly(window.frameElement).parent()['first']('.ans-job-icon')['insertHtml']('beforeEnd', '<span\x20title=\x22' + videoName + '" style="width: 500px;margin-left: 120px;display: inline-block;height: 23px;line-height: 23px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">' + videoName + '</span>') : Ext.fly(window.frameElement).parent()['insertHtml']('afterBegin', '<div title="' + videoName + '" style="width: 500px;display: inline-block;line-height: 23px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">' + videoName + '</div>'));
						var d = oData['duration']
							, paras = {
								'enableFastForward': fastforward ? 0 : 1,
								'enableSwitchWindow': switchwindow ? 0 : 1,
								'duration': d,
								'httpmd': oData['httpmd'],
								'http': oData['http'],
								'httphd': oData['httphd'],
								'httpshd': oData['httpshd'],
								'filename': oData['filename'],
								'dtoken': oData['dtoken'],
								'videoTopicCloud': _0x1daec2
							};
						window['duration'] = d;
						oData.cdn && (paras.cdn = oData.cdn);
						document.cookie.length > 0 && (paras['memberinfo'] = getCookie('memberinfo'),
							paras['questionErrorLogUrl'] = ServerHosts.MASTER_HOST + '/question/addquestionerror');
						mid && (paras.mid = mid);
						oData['duration'] && (paras['videoTotalTime'] = oData['duration']);
						if (setting && setting['isErya'] == 0x1)
							paras['screenshot'] = 'https://p.ananas.chaoxing.com/star3/origin/a26e16b5ac8e769bba6bda57343b7d57.png';
						else
							oData['screenshot'] && (paras['screenshot'] = oData['screenshot']);
						setting && (paras.chapterVideoTranslate = setting.chapterVideoTranslate);
						oData['thumbnails'] && (paras['thumbnails'] = oData['thumbnails']);
						oData['subobjectid'] && (paras['subobjectid'] = oData['subobjectid']);
						_0x35a9fe && (paras['startTime'] = _0x35a9fe);
						_0x11630a && (paras['endTime'] = _0x11630a);
						paras.rt = _0x5d15d1,
							paras.control = setting && setting.control;
						isTeacher && (paras.control = false);
						var _0x2652e6 = {}, _0x22b723, _0x4b190b, _0x3402ae;
						if (setting && setting.control) {
							var _0x398bc7 = setting['attachments']
								, _0x5eb051 = setting['defaults']
								, _0x2c1bb7 = oData['objectid'] + '-' + (_0x35a9fe ? _0x35a9fe : 0) + '-' + (_0x11630a ? _0x11630a : d) + '-' + _0x2cc93f;
							_0x5eb051 && (paras['userid'] = _0x5eb051['userid'] || '',
								paras['fid'] = _0x5eb051['fid'] || '');
							for (var _0x54a0ca = 0; _0x54a0ca < _0x398bc7.length; _0x54a0ca++) {
								_0x2652e6 = _0x398bc7[_0x54a0ca],
									_0x4b190b = 0,
									_0x3402ae = d;
								_0x2652e6['property'] && (_0x2652e6['property']['vbegin'] && (_0x4b190b = _0x2652e6['property']['vbegin']),
									_0x2652e6['property']['vend'] && (_0x3402ae = _0x2652e6['property']['vend']));
								!_0x2652e6['jobid'] && (_0x2652e6['jobid'] = '');
								_0x22b723 = _0x2652e6.objectId + '-' + _0x4b190b + '-' + _0x3402ae + '-' + _0x2652e6['jobid'];
								if (_0x2c1bb7 == _0x22b723) {
									Ext.apply(paras, setting['defaults']),
										paras['headOffset'] = _0x2652e6['headOffset'] ? Math['floor'](parseInt(_0x2652e6['headOffset']) / 0x3e8) : 0,
										paras.objectId = _0x2652e6.objectId,
										paras['otherInfo'] = _0x2652e6['otherInfo'],
										paras['isPassed'] = _0x2652e6['isPassed'],
										paras['aId'] = _0x2652e6['aid'],
										paras.danmaku = _0x185d82;
									_0x2652e6['topicList'] && setTopicName(_0x2652e6['topicList']);
									_0x2652e6['property'] && _0x2652e6['property']['fastforward'] && _0x2652e6['property']['fastforward'] == 'true' && (paras.enableFastForward = 0);
									_0x2652e6['property'] && typeof _0x2652e6['property'].doublespeed != 'undefined' && _0x2652e6['property'].doublespeed == 0 && (paras.doublespeed = 0,
										doublespeed = 0);
									var schoolDoubleSpeed = paras['schooldoublespeed'];
									typeof schoolDoubleSpeed == 'undefined' || schoolDoubleSpeed == 0x2 ? paras.doublespeed = doublespeed : paras.doublespeed = schoolDoubleSpeed;
									_0x2cc93f && (paras['jobid'] = _0x2cc93f,
										!_0x2652e6['job'] && (!isTeacher && greenligth(),
											ed_complete = false,
											paras.enableFastForward = 1,
											paras.enableSwitchWindow = 1,
											paras['headOffset'] = 0));
									paras.reportUrl = paras.reportUrl && paras.reportUrl.replace('http://', window.location.protocol + '//'),
										window['_jobindex'] = _0x54a0ca;
									break;
								}
							}
						} else {
							var schoolDoubleSpeed = paras['schooldoublespeed'];
							typeof schoolDoubleSpeed == 'undefined' || schoolDoubleSpeed == 0x2 ? paras.doublespeed = doublespeed : paras.doublespeed = schoolDoubleSpeed;
						}
						paras['ignoreVideoCtrl'] == 0x1 && (paras.enableFastForward = 1,
							paras.enableSwitchWindow = 0x1);
						(!paras.control || isTeacher) && (ed_complete = false,
							paras.enableFastForward = 1,
							paras.enableSwitchWindow = 1,
							paras['headOffset'] = 0);
						(paras['isPassed'] || paras['headOffset'] > paras['videoTotalTime'] * 0.95) && (paras['headOffset'] = 0);
						timer && clearInterval(timer),
							paras['isSupportFace'] = $('.maskDiv1', top.document).length > 0 && /\/studentstudy/.test(top.location['pathname']) ? true : false,
							paras['isShowFaceCollection'] = /\/studentstudy/.test(top.location['pathname']) && !Ext.fly(window.frameElement).parent()['hasCls']('ans-job-finished');
						if (supportH5Video())
							data.danmaku && (loadMultiFile([{
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
							}),
								Ext.select('.rage_bd').setStyle('display', 'block'),
								Ext.select('.sp_function').setStyle('height', '66px')),
								ff = paras.enableFastForward,
								showHTML5Player(paras);
						else {
							if (!fls) {
								var href = 'http://www.adobe.com/go/getflashplayer';
								Ext.get('reader').setHTML('您没有安装flashplayer，请到<a\x20href=\x22' + href + '" target="_blank">www.adobe.com</a>下载安装。<br/>如果已经安装请点击此处启用：<object id="swf_jlxl1lfb" height="50" width="100" type="application/x-shockwave-flash" data="/ananas/modules/video/cxplayer/player_4.0.11.swf?v=20161025" style="border:#ccc 1px solid"><param name="quality" value="high"><param name="allowScriptAccess" value="always"><param name="wMode" value="transparent"><param name="align" value="middle"><param name="bgcolor" value="#000000"><param name="swLiveConnect" value="true"><param name="loop" value="true"><param name="play" value="true"><param name="DeviceFont" value="false"><param name="allowFullScreen" value="true"><param name="menu" value="true"></object>');
								return;
							}
							showMoocPlayer(paras);
						}
						sendReadZTMediaLog(0);
						break;
					case 'failed':
						timer && clearInterval(timer),
							note1Wrap.remove(),
							note.show();
						break;
					case 'waiting':
						note1Wrap.update('<div class="line1"><div class="line3"></div></div><p class="tipStyle making">视频正在转码，您无需在此页面等待【9001】</p>');
						break;
					case 'converting':
					case 'transfer':
						note1Wrap.update('<div class="line1"><div class="line2"></div></div><p class="tipStyle">视频上传中【9002】</p>');
						break;
				}
			},
			'failure': function (resp) {
				resp.status == 0 ? (timer && clearInterval(timer),
					note1Wrap.update('<div class="line1"><div class="line2"></div></div><p class="tipStyle">视频加载超时，请刷新页面重试【9003】</p>'),
					Ext.get('loading')['hide']()) : (timer && clearInterval(timer),
						note1Wrap.update('<div class="line1"><div class="line3"></div></div><p class="tipStyle">视频加载失败，请稍后再试【9004】</p>'),
						Ext.get('loading')['hide']());
			}
		});
	}
	request();
}
function supportH5Video() {
	var videoMp4Support = function () {
		var elem = document['createElement']('video');
		if (typeof elem['canPlayType'] == 'function') {
			var playable = elem['canPlayType']('video/mp4;codecs="avc1.42E01E,mp4a.40.2"');
			if (playable['toLowerCase']() == 'maybe' || playable['toLowerCase']() == 'probably')
				return true;
			var playable = elem['canPlayType']('video/mp4;codecs="avc1.64001E,mp4a.40.2"');
			if (playable['toLowerCase']() == 'maybe' || playable['toLowerCase']() == 'probably')
				return true;
		}
		return false;
	};
	if (Ext['isIE'] && Ext['isIE10m'])
		return false;
	return videoMp4Support();
}
var playLogTimer;
function sendReadZTMediaLog(st) {
	try {
		var GetQueryString = function (name) {
			var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
				, r = parent.location['search'].substr(0x1)['match'](reg);
			if (r != null)
				return unescape(r[0x2]);
			return null;
		}
			, setting = parent.AttachmentSetting
			, _0x3b1e39 = window.frameElement
			, _0x7482c7 = _0x3b1e39['parentElement']['parentElement']['parentElement'].getAttribute('kid');
		if (_0x7482c7) {
			var _0x3e217a = 'marg-' + _0x7482c7;
			setting = top[_0x3e217a],
				typeof setting == 'string' && (setting = eval('(' + setting + ')'));
		}
		if (!setting)
			return;
		var _0x5f449f = setting['defaults'].isFiled
			, _0x5dfdac = setting['defaults']['state'];
		if (_0x5f449f == 0x1 || _0x5dfdac == 0x1)
			return;
		var _0x1d4536 = top['dtype'] || 'Course';
		if (_0x1d4536 == 'ZT' || _0x1d4536 == 'HB' || _0x1d4536 == 'MAG') {
			var _0x4d7e7c = parent.location['search'] || ''
				, _0x599fb0 = getCookie('UID')
				, _0x4237fa = config('objectid')
				, _0x3ab824 = 0
				, _0x4cdaaa = setting['defaults'].courseid
				, _0x28d9e2 = setting['defaults']['knowledgeid']
				, _0x5bce32 = window['duration']
				, _0x233352 = GetQueryString('_from_')
				, _0x386360 = setting['attachments']
				, _0x1fa814 = '';
			if (_0x386360.length > 0)
				for (var _0x4612c6 = 0, _0x443b90 = _0x386360.length; _0x4612c6 < _0x443b90; _0x4612c6++) {
					var _0x3c3c35 = _0x386360[_0x4612c6]
						, _0x5b2f15 = _0x3c3c35.objectId;
					if (_0x5b2f15 == _0x4237fa) {
						if (st == 0)
							_0x1fa814 = _0x3c3c35['enc0'];
						else
							st == 0x1 ? _0x1fa814 = _0x3c3c35['enc1'] : _0x1fa814 = _0x3c3c35['enc2'];
						break;
					}
				}
			var _0x1ddb39 = location.protocol + '//data-xxt.aichaoxing.com/analysis/datalog?s=' + _0x4cdaaa + '&c=' + _0x28d9e2 + '&o=' + _0x4237fa + '&st=' + st + '&m=' + _0x3ab824 + '&d=' + _0x5bce32 * 0x3e8 + '&u=' + _0x599fb0 + '&_from_=' + _0x233352 + '&enc=' + _0x1fa814
				, _0xd823a9 = function () {
					Ext.Ajax.request({
						'url': _0x1ddb39,
						'success': function (_0x240839) { }
					});
				};
			_0xd823a9();
			if (st == 0x1)
				playLogTimer && clearInterval(playLogTimer),
					playLogTimer = setInterval(function () {
						_0xd823a9();
					}, 0x1388);
			else
				st == 0x2 && (playLogTimer && clearInterval(playLogTimer));
		}
	} catch (_0x19c485) { }
}
function receiveStudyLog() {
	try {
		var _0xf900b6 = parent.AttachmentSetting;
		if (!_0xf900b6)
			return;
		if (_0xf900b6 && _0xf900b6['defaults']) {
			var _0x3e337b = _0xf900b6['defaults'];
			if (_0x3e337b['chapterCapture'] != 0x1)
				return;
			var _0x256406 = '/keeper/api/receive-studylog'
				, _0x424c84 = new Date()['getTime']()
				, _0x4c2abc = _0x3e337b.courseid
				, _0x14e74f = _0x3e337b.clazzId
				, _0x1abaf7 = _0x3e337b.cpi
				, _0x462bf2 = _0x3e337b['userid']
				, _0xcd418d = _0x3e337b['knowledgeid']
				, _0x2e789 = _0x3e337b['fid']
				, _0x4880af = ''
				, _0x424407 = config('objectid')
				, _0x43eda9 = config('jobid') || ''
				, _0x5bd41e = _0xf900b6['attachments'];
			if (_0x5bd41e.length > 0)
				for (var _0x3852fe = 0, _0x3f1f48 = _0x5bd41e.length; _0x3852fe < _0x3f1f48; _0x3852fe++) {
					var _0x21b374 = _0x5bd41e[_0x3852fe]
						, _0x4cbe76 = _0x21b374.objectId;
					if (_0x4cbe76 == _0x424407) {
						_0x4880af = _0x21b374['aid'];
						break;
					}
				}
			var _0x1d7b9d = {
				'relationId': _0x4880af,
				'objectId': _0x424407,
				'userId': _0x462bf2,
				'knowledgeId': _0xcd418d,
				'fid': _0x2e789,
				'jobId': _0x43eda9
			}
				, _0x2701d6 = {
					'courseId': _0x4c2abc,
					'clazzId': _0x14e74f,
					'personId': _0x1abaf7,
					'eventType': 0x4,
					'eventTime': _0x424c84,
					'data': _0x1d7b9d
				}
				, _0x2234d8 = _0x3e337b['mtEnc'];
			Ext.Ajax.request({
				'method': 'post',
				'url': _0x256406,
				'params': {
					'log': JSON['stringify'](_0x2701d6),
					'enc': _0x2234d8
				},
				'success': function (_0x313be6) { }
			});
		}
	} catch (_0x1d8ed7) { }
}
function createVideoTask() {
	if (isViturlEdit)
		return;
	var _0x4cbb74 = location.protocol + '//convertservice.chaoxing.com/video/createVideoTask?objectid=' + wrongObj;
	Ext.Ajax.request({
		'timeout': 0xbb8,
		'type': 'get',
		'async': false,
		'url': _0x4cbb74,
		'dataType': 'jsonp',
		'jsonp': 'jsoncallback',
		'success': function (_0x257aea) { },
		'failure': function (_0x456b51) {
			console.log('创建任务失败');
		}
	});
}
Ext.onReady(function () {
	var _0xdb141 = parent['requestSatusResourceDownGrade'];
	if (_0xdb141 && _0xdb141 == 0x1) {
		var _0x186bae = '<img\x20src=\x22/ananas/css/downgradeBlueTip.jpg\x22\x20width=\x22676\x22\x20height=\x22540\x22>';
		Ext.select('body').setHTML(_0x186bae);
		return;
	}
	loadVideo();
});
var danmaku = {};
function getDanmuByTime(_0x2a49da, _0x1f4711) {
	var _0x394887 = parent.AttachmentSetting;
	if (!_0x394887)
		return;
	if (_0x394887 && _0x394887['defaults'])
		var _0x529a8f = _0x394887['defaults']
			, _0x22ce18 = _0x529a8f.courseid
			, _0x4842b6 = _0x529a8f.clazzId;
	else
		return;
	if (_0x2a49da == 'pause') {
		danmaku = {};
		return;
	}
	_0x2a49da == 'play' && (danmaku = {});
	var _0x556ec0 = config('mid')
		, _0x1c0ee9 = {
			'courseid': _0x22ce18,
			'classid': _0x4842b6,
			'mid': _0x556ec0,
			'timebegin': parseInt(_0x1f4711),
			'timeend': parseInt(_0x1f4711) + 0x3b
		};
	Ext.Ajax.request({
		'url': '/videodanmaku/timerange-danmakulist',
		'method': 'get',
		'params': _0x1c0ee9,
		'success': function (_0x2dd350) {
			var _0x53686b = eval('(' + _0x2dd350['responseText'] + ')');
			if (_0x53686b.status == 0x1) {
				var _0x4880d5 = _0x53686b['data'];
				for (var _0x2da19b = 0; _0x2da19b < _0x4880d5.length; _0x2da19b++) {
					var _0x429f9a = _0x4880d5[_0x2da19b]['timeline'];
					!danmaku[_0x429f9a] && (danmaku[_0x429f9a] = new Array()),
						danmaku[_0x429f9a].push(_0x4880d5[_0x2da19b]['content']);
				}
				_0x1f4711 == 0 && danmuPlay(0);
			} else
				alert('服务异常,稍后再试!');
		},
		'failure': function (_0x468c5c) {
			alert('服务异常,稍后再试!');
		}
	});
}
var count = 0
	, timeFlag = -0x1
	, currentTime = 0;
function shotdanmu(_0x47ccc5) {
	var _0x16913f = _0x47ccc5['clientWidth'];
	_0x16913f = -parseInt(_0x16913f);
	var _0x131276 = 'translateX(' + _0x16913f + 'px)';
	setTimeout(function () {
		_0x47ccc5['style']['transform'] = _0x131276,
			_0x47ccc5['className'] = 'danmuItem left';
	}, 0x1f4);
}
function danmuPlay(_0x2ba751) {
	currentTime = _0x2ba751;
	if (timeFlag == _0x2ba751)
		return;
	timeFlag = _0x2ba751;
	var _0x5bfbc2 = danmaku[_0x2ba751];
	if (!_0x5bfbc2)
		return;
	if (!$('.mui-switch').hasClass('checked'))
		return;
	var _0x5338f = '<div class="danmuItem right">';
	for (var _0x199141 = 0; _0x199141 < _0x5bfbc2.length; _0x199141++) {
		if (_0x5bfbc2[_0x199141] == '@zan@')
			_0x5338f += '<span><i class="zanIcon"></i>赞</span>';
		else {
			if (_0x5bfbc2[_0x199141] == '@不赞同@')
				_0x5338f += '<span><i\x20class=\x22noZanIcon\x22></i>不赞同</span>';
			else {
				if (_0x5bfbc2[_0x199141] == '@感动@')
					_0x5338f += '<span><i class="moveIcon"></i>感动</span>';
				else {
					if (_0x5bfbc2[_0x199141] == '@疑惑@')
						_0x5338f += '<span><i\x20class=\x22doubtIcon\x22></i>疑惑</span>';
					else {
						if (_0x5bfbc2[_0x199141] == '@献花@')
							_0x5338f += '<span><i class="huaIcon"></i>献花</span>';
						else {
							if (_0x5bfbc2[_0x199141] == '@鼓掌@')
								_0x5338f += '<span><i class="clapIcon"></i>鼓掌</span>';
							else
								_0x5bfbc2[_0x199141] == '@有趣@' ? _0x5338f += '<span><i class="interestingIcon"></i>有趣</span>' : _0x5338f += '<span>' + _0x5bfbc2[_0x199141] + '</span>';
						}
					}
				}
			}
		}
	}
	_0x5338f += '</div>';
	var _0x5908e5 = count % 0x3
		, _0xc8a527 = new Ext[('XTemplate')](_0x5338f)['append']('channel_' + _0x5908e5);
	shotdanmu(_0xc8a527),
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
function checkJobCountLimit(_0x22e0cd) {
	/\/studentstudy/.test(top.location['pathname']) && (top['showJobLimitTip'](),
		playStateV2 = setInterval(function () {
			top['resumePlay'] && (clearStateV2Interval(),
				_0x22e0cd['play'](),
				top['resumePlay'] = false);
		}, 0x12c));
}
function startFaceCollection(_0x47459d, _0x2b332c, _0x3d484d) {
	if (/\/studentstudy/.test(top.location['pathname'])) {
		var _0x3be050 = $('.maskDiv1', top.document).length;
		_0x3be050 > 0 && ($('#videoJobId', top.document)['val'](videoJobId),
			$('#chapterVideoObjectId', top.document)['val'](videoObjectId),
			top['getQRCodeURLShow1'] && top['getQRCodeURLShow1'](),
			$('.maskDiv1', top.document).css('display', 'block'),
			getPlayState = setInterval(function () {
				top['playerState'] && (clearStateInterval(),
					_0x3d484d['isPlay'] = true,
					_0x47459d['play'](),
					top['playerState'] = false);
			}, 0x3e8));
	}
}
function chapterPlayNextVideo(_0x5e63cb) {
	/\/studentstudy/.test(top.location['pathname']) && (top['getChapterNextVideo'] && top['getChapterNextVideo'](_0x5e63cb));
}
function markersPlayer(marker) {
	var time = marker.getAttribute('data-marker-time');
	if (time)
		return playerTime(time);
}
function getMarkers() {
	return videojs('video')['markers'];
}
function playerTime(time) {
	if (ff != 0x1)
		return;
	var videoPlayer = videojs('video');
	return videoPlayer.currentTime(time);
}
function playVideo() {
	var videoPlayer = videojs('video');
	player['volume'](0),
		player.on('loadstart', function () {
			videoPlayer['play']()['catch'](Ext['emptyFn']);
		});
}
function reSizeIframe() {
	try {
		var height = Ext.fly(Ext.select('.main')['elements'][0])['getHeight']();
		Ext.fly(window.frameElement)['setHeight'](height + 'px');
	} catch (e) {
		console.log(e['message']);
	}
}
function removeDownloadBtn() {
	Ext.select('.xl-chrome-ext-bar').remove();
}
Ext.onReady(function () {
	window.setInterval('reSizeIframe()', 0xc8),
		window.setInterval('removeDownloadBtn()', 0x1f4),
		/\/studentstudy/.test(top.location['pathname']) && ($('.writeNote').css('display', 'block'),
			Ext.select('.sp_function').setStyle('height', '66px')),
		$('.writeNote').click(function () {
			$('#type', parent.parent.document)['val'](0x1),
				$('#noteVideoName', parent.parent.document)['val'](videoName);
			var _0x28f6d6 = videojs('video')
				, _0x787b9 = parseInt(_0x28f6d6.currentTime())
				, _0x4fdf46 = parseInt(_0x787b9 / 0x3c);
			_0x4fdf46 < 0xa && (_0x4fdf46 = '0' + _0x4fdf46['toString']());
			var _0x416473 = parseInt(_0x787b9 % 0x3c);
			_0x416473 < 0xa && (_0x416473 = '0' + _0x416473['toString']()),
				$('.Note_name', parent.parent.document)['html'](videoName + '\x20' + _0x4fdf46 + ':' + _0x416473),
				$('.Note_name', parent.parent.document).css('display', 'block'),
				$('#noteVideoTime', parent.parent.document)['val'](_0x787b9),
				$('#noteVideoJobId', parent.parent.document)['val'](videoJobId),
				$('#noteVideoObjectId', parent.parent.document)['val'](videoObjectId),
				parent.parent['getClazzNote'] && parent.parent['getClazzNote'](),
				parent.parent['changePan'] && parent.parent['changePan']('3'),
				$('.formTopic', parent.parent.document)['size']() > 0 && $('.formTopic', parent.parent.document).css('display', 'block');
		});
})