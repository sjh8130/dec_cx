Ext.Ajax.autoAbort = true,
	Ext.isIpad = navigator.userAgent.indexOf('iPad') > -0x1,
	Ext.isIos = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
	Ext.isAndroid = navigator.userAgent.indexOf('Android') > -0x1,
	Ext.isSogou = !!navigator.userAgent.match(/metasr/i),
	Ext.isChaoxing = navigator.userAgent.indexOf('ChaoXingStudy') > -0x1;
function greenligth() {
	Ext.fly(window.frameElement).parent().addCls('ans-job-finished');
}
function isUnFinishJob() {
	try {
		var var_20220311_1 = Ext.fly(window.frameElement).prev();
		if (var_20220311_1 && var_20220311_1.hasCls('ans-job-icon'))
			return !Ext.fly(window.frameElement).parent().hasCls('ans-job-finished');
		return false;
	} catch (e) {
		console.log(e);
	}
	return false;
}
var isViturlEdit = false, ff = 0x1;
function proxy_completed() {
	ed_complete && (greenligth(),
		ed_complete());
}
function config(d) {
	return window.frameElement.getAttribute(d);
}
function getCookie(objname) {
	var arrstr = document.cookie.split('; ');
	for (var i = 0x0; i < arrstr.length; i++) {
		var temp = arrstr[i].split('=');
		if (temp[0x0] == objname)
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
function bindVjsClick(var_20220715_1) {
	try {
		var var_20220715_4 = var_20220715_1.enableFastForward, var_20220715_5 = var_20220715_1.jobid;
		if (typeof var_20220715_4 != 'undefined' && var_20220715_4 === 0x0 && typeof var_20220715_5 != 'undefined' && var_20220715_5 != '' && window.parent.parent.location.href.indexOf('studentstudy') > -0x1) {
			var var_20220715_2 = $('.video-js .toolTipBox1'), var_20220715_3 = $('#tipDiv');
			var_20220715_2.length === 0x0 && var_20220715_3.length > 0x0 && ($('.video-js').prepend(var_20220715_3.html()),
				$('.vjs-progress-control').on('click', function () {
					!$('.toolTipBox1').is(':visible') && ($('.toolTipBox1').show(),
						setTimeout(function () {
							$('.toolTipBox1').hide();
						}, 0x320));
				}));
		}
	} catch (e) { console.log(e); }
}
function showHTML5Player(paras) {
	Ext.get('reader').setHTML('<video id="video" class="video-js vjs-default-skin vjs-big-play-centered"></video>');
	new ans[('VideoJs')]({
		'videojs': 'video',
		'params': paras
	});
	document.getElementsByTagName('video')[0x0].addEventListener('play', function () {
		var iframearray = parent.document.getElementsByTagName('iframe');
		for (var i = 0x0; i < iframearray.length; i++) {
			if (iframearray[i].getAttribute('src').indexOf('microCourse') != -0x1) {
				var var_20220715_6 = iframearray[i].contentWindow.document.getElementsByTagName('iframe')[0x0].contentWindow;
				var_20220715_6.PageView.stopAll && var_20220715_6.PageView.stopAll();
			}
		}
		$('.vjs-subs-caps-button .vjs-icon-placeholder').hover(function () {
			$('.vjs-subs-caps-button .vjs-menu-content').length > 0x0 && ($('.vjs-subs-caps-button .vjs-menu-content').niceScroll({
				'cursorborder': '',
				'cursorwidth': 0x8,
				'cursorcolor': '#CAD5E6',
				'boxzoom': false,
				'autohidemode': true
			}),
				$('.vjs-subs-caps-button .vjs-menu-content').getNiceScroll().resize());
		});
	});
	function changePPTTop() {
		var videoHeight = $('#video').height(), picHeight = $('#sp_video_ppt_pic').height(), topHeight = (parseInt(videoHeight) - 0x3c - parseInt(picHeight)) / 0x2;
		$('#sp_video_ppt_pic').length > 0x0 && $('#sp_video_ppt_pic').hasClass('sp_ppt_pic_fullScreen') ? ($('#sp_video_ppt_pic').css('top', topHeight + 'px'),
			$('#sp_video_ppt_pic').css('left', '0')) : ($('#sp_video_ppt_pic').css('top', '0px'),
				$('#sp_video_ppt_pic').css('left', '0px'));
	}
	$('.vjs-fullscreen-control').click(function () {
		setTimeout(changePPTTop, 0x12c);
	}),
		$(window).resize(function () {
			setTimeout(changePPTTop, 0x1f4);
		}),
		bindVjsClick(paras);
}
var wrongObj = '', videoName = '', videoJobId = '', videoObjectId = '', mid = '';
function loadVideo() {
	var objectid = config('objectid'), reader = Ext.get('reader');
	if (!objectid) {
		reader.setHTML('未找到该文件');
		return;
	}
	wrongObj = objectid,
		videoObjectId = objectid;
	var iframe = window.frameElement, data = Ext.decode(iframe.getAttribute('data')), setting = parent.AttachmentSetting, var_20220922_1 = parent.previewAttachments;
	mid = config('mid');
	var percent = 0x0, vbegin = config('vbegin'), vend = config('vend'), jobid = config('jobid') || '', danmaku = data ? data.danmaku == null ? 0x0 : data.danmaku : 0x0, videoTopicCloud = setting && setting.videoTopicCloud, fastforward = config('fastforward') == 'true' ? true : false, switchwindow = config('switchwindow') == 'true' ? true : false, note = Ext.get('note'), hl = Ext.get('hl'), note1Wrap = Ext.get('note1-wrap'), note1 = Ext.get('note1'), timer = null, rt = data ? data.rt ? data.rt : 0.9 : 0.9;
	jobid == '' ? videoJobId = data && data._jobid ? data._jobid : '' : videoJobId = jobid;
	var fls = flashChecker().hasFlash, var_20220922_2 = setting && setting.defaults && setting.defaults.isForScreen == 0x1;
	try {
		isTeacher = top.location.href.indexOf('teacherstudy') > 0x0 || top.location.href.indexOf('course/phone/chapterdata') > 0x0 || var_20220922_2;
	} catch (e) { }
	var isVideoVisibleName = parent.isVideoVisibleName, doublespeed = data ? data.doublespeed != 0x0 ? 0x1 : 0x0 : 0x1;
	data.v_begin && data.v_end && data.pobjectid && (isViturlEdit = true);
	function setTopicName(list) {
		if (list && list.length == 0x0)
			return;
		if (Ext.select('.zsCloud_ul') != null) {
			var spanList = '';
			for (var i = 0x0, len = list.length; i < len; i++) {
				spanList += '<li><span class=\x27zsCloud_span topicId' + list[i].id + '\x27 onclick=\x27markersPlayer(this)\x27>' + list[i].name + ' </span></li>';
			}
			Ext.select('.zsCloud_ul').setHTML(spanList),
				Ext.select('.zsCloud').setStyle('display', 'block');
		}
	}
	function request() {
		percent <= 0x64 && hl.setWidth((percent += 0x5) + '%');
		var k = getCookie('fid') || '';
		Ext.Ajax.request({
			'url': '/ananas/status/' + objectid + '?k=' + k + '&flag=normal',
			'success': function (response) {
				var oData = eval('(' + response.responseText + ')');
				Ext.get('loading').hide();
				switch (oData.status) {
					case 'success':
						note1Wrap.remove(),
							videoName = data && data.name || '';
						var var_20220922_3 = 0x0;
						try {
							var var_20220922_4 = oData.duration;
							if (var_20220922_1 && top.location.href.indexOf('nodedetailcontroller/visitnodedetail') > -0x1) {
								var var_20220922_5 = oData.objectid + '-' + (vbegin ? vbegin : 0x0) + '-' + (vend ? vend : var_20220922_4) + '-' + jobid;
								for (var i = 0x0; i < var_20220922_1.length; i++) {
									var var_20220922_6 = var_20220922_1[i]
										, var_20220922_7 = 0x0
										, var_20220922_8 = var_20220922_4;
									var_20220922_6.property && (var_20220922_6.property.vbegin && (var_20220922_7 = var_20220922_6.property.vbegin),
										var_20220922_6.property.vend && (var_20220922_8 = var_20220922_6.property.vend));
									!var_20220922_6.jobid && (var_20220922_6.jobid = '');
									var var_20220922_9 = var_20220922_6.objectId + '-' + var_20220922_7 + '-' + var_20220922_8 + '-' + var_20220922_6.jobid;
									var_20220922_5 == var_20220922_9 && (var_20220922_3 = var_20220922_6.customType);
								}
							}
						} catch (e) { console.log(e); }
						var d = oData.duration, paras = {
							'enableFastForward': fastforward ? 0x0 : 0x1,
							'enableSwitchWindow': switchwindow ? 0x0 : 0x1,
							'duration': d,
							'httpmd': oData.httpmd,
							'http': oData.http,
							'httphd': oData.httphd,
							'httpshd': oData.httpshd,
							'filename': oData.filename,
							'dtoken': oData.dtoken,
							'videoTopicCloud': videoTopicCloud
						};
						window.duration = d;
						oData.cdn && (paras.cdn = oData.cdn);
						document.cookie.length > 0x0 && (paras.memberinfo = getCookie('memberinfo'),
							paras.questionErrorLogUrl = ServerHosts.MASTER_HOST + '/question/addquestionerror');
						mid && (paras.mid = mid);
						oData.duration && (paras.videoTotalTime = oData.duration);
						if (setting && setting.isErya == 0x1)
							paras.screenshot = 'https://p.ananas.chaoxing.com/star3/origin/a26e16b5ac8e769bba6bda57343b7d57.png';
						else
							oData.screenshot && (paras.screenshot = oData.screenshot);
						setting && (paras.chapterVideoTranslate = setting.chapterVideoTranslate);
						oData.thumbnails && (paras.thumbnails = oData.thumbnails);
						oData.subobjectid && (paras.subobjectid = oData.subobjectid);
						vbegin && (paras.startTime = vbegin);
						vend && (paras.endTime = vend);
						paras.rt = rt,
							paras.control = setting && setting.control;
						isTeacher && (paras.control = false);
						var m = {}, s, vb, ve;
						if (setting && setting.control) {
							var attachments = setting.attachments, defaults = setting.defaults, spec = oData.objectid + '-' + (vbegin ? vbegin : 0x0) + '-' + (vend ? vend : d) + '-' + jobid;
							defaults && (paras.userid = defaults.userid || '',
								paras.fid = defaults.fid || '');
							for (var i = 0x0; i < attachments.length; i++) {
								m = attachments[i],
									vb = 0x0,
									ve = d;
								m.property && (m.property.vbegin && (vb = m.property.vbegin),
									m.property.vend && (ve = m.property.vend));
								!m.jobid && (m.jobid = '');
								s = m.objectId + '-' + vb + '-' + ve + '-' + m.jobid;
								if (spec == s) {
									Ext.apply(paras, setting.defaults),
										var_20220922_3 = m.customType;
									var var_20220922_10 = m.begins ? parseInt(m.begins) : 0x0;
									var_20220922_10 > 0x0 && oData.duration ? paras.begins = var_20220922_10 > oData.duration ? 0x0 : var_20220922_10 : paras.begins = 0x0;
									var var_20220922_11 = m.ends ? parseInt(m.ends) : 0x0;
									if (var_20220922_11 > 0x0 && oData.duration) {
										var var_20220922_12 = oData.duration - var_20220922_11;
										paras.ends = var_20220922_12 < 0x0 ? 0x0 : var_20220922_12;
									} else
										paras.ends = 0x0;
									paras.ends < paras.begins && (paras.begins = 0x0, paras.ends = 0x0);
									paras.headOffset = m.headOffset ? Math.floor(parseInt(m.headOffset) / 0x3e8) : 0x0,
										paras.objectId = m.objectId,
										paras.otherInfo = m.otherInfo,
										paras.isPassed = m.isPassed,
										paras.aId = m.aid,
										paras.danmaku = danmaku;
									m.topicList && setTopicName(m.topicList);
									paras.jumpTimePointList = m.jumpTimePointList;
									m.property && m.property.fastforward && m.property.fastforward == 'true' && (paras.enableFastForward = 0x0);
									m.property && typeof m.property.doublespeed != 'undefined' && m.property.doublespeed == 0x0 && (paras.doublespeed = 0x0,
										doublespeed = 0x0);
									var schoolDoubleSpeed = paras.schooldoublespeed;
									typeof schoolDoubleSpeed == 'undefined' || schoolDoubleSpeed == 0x2 ? paras.doublespeed = doublespeed : paras.doublespeed = schoolDoubleSpeed;
									jobid && (paras.jobid = jobid,
										!m.job && (!isTeacher && greenligth(),
											ed_complete = false,
											paras.enableFastForward = 0x1,
											paras.enableSwitchWindow = 0x1,
											paras.headOffset = 0x0));
									paras.reportUrl = paras.reportUrl && paras.reportUrl.replace('http://', window.location.protocol + '//'),
										window._jobindex = i;
									break;
								}
							}
						} else {
							var schoolDoubleSpeed = paras.schooldoublespeed;
							typeof schoolDoubleSpeed == 'undefined' || schoolDoubleSpeed == 0x2 ? paras.doublespeed = doublespeed : paras.doublespeed = schoolDoubleSpeed;
						}
						var var_20220922_13 = '', var_20220922_14 = '';
						(top.location.href.indexOf('nodedetailcontroller/visitnodedetail') > -0x1 || top.location.href.indexOf('mycourse/teacherstudy') > -0x1) && parseInt(var_20220922_3) === 0x2 && (var_20220922_13 = '<span style = "display: inline-block;width: 40px; height: 20px;font-size: 12px;background:#F9F9FA;border:1px solid #D5E2F1;' + 'border-radius:4px;text-align:center;line-height:20px;color: #6B89B3;position: absolute;right: 0; top: 0px;\x22>动画</span>',
							var_20220922_14 = '<span style =\x22display: inline-block;overflow: hidden;float: right;text-overflow: ellipsis;white-space: nowrap;width: 40px;' + 'height: 20px;font-size: 12px;background: #F9F9FA;border:1px solid #D5E2F1;border-radius:4px;text-align: center;line-height:20px;color:#6B89B3;right:0;top:0;">动画</span>');
						if (isVideoVisibleName != 'false')
							Ext.fly(window.frameElement).parent().first('.ans-job-icon') != null ? top.location.href.indexOf('nodedetailcontroller/visitnodedetail') > -0x1 ? Ext.fly(window.frameElement).parent().insertHtml('afterBegin', '<div title="' + videoName + '" style="width: 500px;display: inline-block;line-height: 23px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">' + videoName + '</div>' + var_20220922_14) : (Ext.fly(window.frameElement).parent().first('.ans-job-icon').insertHtml('beforeEnd', '<span title="' + videoName + '\x22 style=\x22width: 500px;margin-left: 120px;display: inline-block;height: 23px;line-height: 23px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;\x22>' + videoName + '</span>' + var_20220922_13),
								var_20220922_13 != '' && Ext.fly(window.frameElement).parent().addCls('relativeClass')) : (Ext.fly(window.frameElement).parent().insertHtml('afterBegin', '<div title=\x22' + videoName + '" style="width: 500px;display: inline-block;line-height: 23px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">' + videoName + '</div>' + var_20220922_14),
									var_20220922_14 != '' && Ext.fly(window.frameElement).parent().addCls('relativeClass'));
						else
							try {
								Ext.fly(window.frameElement).parent().first('.ans-job-icon') != null ? top.location.href.indexOf('nodedetailcontroller/visitnodedetail') > -0x1 ? var_20220922_14 != '' && Ext.fly(window.frameElement).parent().insertHtml('afterBegin', var_20220922_14) : var_20220922_13 != '' && (Ext.fly(window.frameElement).parent().first('.ans-job-icon').insertHtml('beforeEnd', var_20220922_13),
									Ext.fly(window.frameElement).parent().addCls('relativeClass')) : var_20220922_14 != '' && (Ext.fly(window.frameElement).parent().insertHtml('afterBegin', var_20220922_14),
										Ext.fly(window.frameElement).parent().addCls('relativeClass'));
							} catch (e) { console.log(e); }
						paras.ignoreVideoCtrl == 0x1 && (paras.enableFastForward = 0x1,
							paras.enableSwitchWindow = 0x1);
						(!paras.control || isTeacher) && (ed_complete = false,
							paras.enableFastForward = 0x1,
							paras.enableSwitchWindow = 0x1,
							paras.headOffset = 0x0);
						(paras.isPassed || paras.headOffset > paras.videoTotalTime * 0.95) && (paras.headOffset = 0x0);
						timer && clearInterval(timer),
							paras.isSupportFace = $('.maskDiv1', top.document).length > 0x0 && /\/studentstudy/.test(top.location.pathname) ? true : false,
							paras.isShowFaceCollection = /\/studentstudy/.test(top.location.pathname) && !Ext.fly(window.frameElement).parent().hasCls('ans-job-finished');
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
								Ext.get('reader').setHTML('您没有安装flashplayer，请到<a href=\x22' + href + '" target="_blank">www.adobe.com</a>下载安装。<br/>如果已经安装请点击此处启用：<object id="swf_jlxl1lfb" height="50" width="100" type="application/x-shockwave-flash" data="/ananas/modules/video/cxplayer/player_4.0.11.swf?v=20161025" style="border:#ccc 1px solid"><param name="quality" value="high"><param name="allowScriptAccess" value="always"><param name="wMode" value="transparent"><param name="align" value="middle"><param name="bgcolor" value="#000000"><param name="swLiveConnect" value="true"><param name="loop" value="true"><param name="play" value="true"><param name="DeviceFont" value="false"><param name="allowFullScreen" value="true"><param name="menu" value="true"></object>');
								return;
							}
							showMoocPlayer(paras);
						}
						sendReadZTMediaLog(0x0);
						break;
					case 'failed':
						timer && clearInterval(timer),
							note1Wrap.remove(),
							note.show();
						break;
					case 'waiting':
						note1Wrap.update('<div class=\x22line1\x22><div class=\x22line3\x22></div></div><p class=\x22tipStyle making\x22>视频正在转码，您无需在此页面等待【9001】</p>');
						break;
					case 'converting':
					case 'transfer':
						note1Wrap.update('<div class="line1"><div class="line2"></div></div><p class="tipStyle">视频上传中【9002】</p>');
						break;
				}
			},
			'failure': function (resp) {
				resp.status == 0x0 ? (timer && clearInterval(timer),
					note1Wrap.update('<div class="line1"><div class="line2"></div></div><p class="tipStyle">视频加载超时，请刷新页面重试【9003】</p>'),
					Ext.get('loading').hide()) : (timer && clearInterval(timer),
						note1Wrap.update('<div class="line1"><div class="line3"></div></div><p class="tipStyle">视频加载失败，请稍后再试【9004】</p>'),
						Ext.get('loading').hide());
			}
		});
	}
	request();
}
function supportH5Video() {
	var videoMp4Support = function () {
		var elem = document.createElement('video');
		if (typeof elem.canPlayType == 'function') {
			var playable = elem.canPlayType('video/mp4;codecs=\x22avc1.42E01E,mp4a.40.2\x22');
			if (playable.toLowerCase() == 'maybe' || playable.toLowerCase() == 'probably')
				return true;
			var playable = elem.canPlayType('video/mp4;codecs="avc1.64001E,mp4a.40.2"');
			if (playable.toLowerCase() == 'maybe' || playable.toLowerCase() == 'probably')
				return true;
		}
		return false;
	};
	if (Ext.isIE && Ext.isIE10m)
		return false;
	return videoMp4Support();
}
var playLogTimer;
function sendReadZTMediaLog(st) {
	try {
		var GetQueryString = function (name) {
			var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)'), r = parent.location.search.substr(0x1).match(reg);
			if (r != null)
				return unescape(r[0x2]);
			return null;
		}, setting = parent.AttachmentSetting, iframe = window.frameElement, kid = iframe.parentElement.parentElement.parentElement.getAttribute('kid');
		if (kid) {
			var margKid = 'marg-' + kid;
			setting = top[margKid],
				typeof setting == 'string' && (setting = eval('(' + setting + ')'));
		}
		if (!setting)
			return;
		var isFiled = setting.defaults.isFiled, state = setting.defaults.state;
		if (isFiled == 0x1 || state == 0x1)
			return;
		var dtype = top.dtype || 'Course';
		if (dtype == 'ZT' || dtype == 'HB' || dtype == 'MAG') {
			var search = parent.location.search || '', uid = getCookie('UID'), objectId = config('objectid'), type = 0x0, courseId = setting.defaults.courseid, chapterId = setting.defaults.knowledgeid, duration = window.duration, _from_ = GetQueryString('_from_'), attachments = setting.attachments, enc = '';
			if (attachments.length > 0x0)
				for (var i = 0x0, len = attachments.length; i < len; i++) {
					var item = attachments[i], obj = item.objectId;
					if (obj == objectId) {
						if (st == 0x0)
							enc = item.enc0;
						else
							st == 0x1 ? enc = item.enc1 : enc = item.enc2;
						break;
					}
				}
			var logUrl = location.protocol + '//data-xxt.aichaoxing.com/analysis/datalog?s=' + courseId + '&c=' + chapterId + '&o=' + objectId + '&st=' + st + '&m=' + type + '&d=' + duration * 0x3e8 + '&u=' + uid + '&_from_=' + _from_ + '&enc=' + enc, logRequest = function () {
				Ext.Ajax.request({
					'url': logUrl,
					'success': function (response) { }
				});
			};
			logRequest();
			if (st == 0x1)
				playLogTimer && clearInterval(playLogTimer),
					playLogTimer = setInterval(function () {
						logRequest();
					}, 0x1388);
			else
				st == 0x2 && (playLogTimer && clearInterval(playLogTimer));
		}
	} catch (e) { }
}
function receiveStudyLog() {
	try {
		var setting = parent.AttachmentSetting;
		if (!setting)
			return;
		if (setting && setting.defaults) {
			var defaults = setting.defaults;
			if (defaults.chapterCapture != 0x1)
				return;
			var url = '/keeper/api/receive-studylog', eventTime = new Date().getTime(), courseId = defaults.courseid, clazzId = defaults.clazzId, personId = defaults.cpi, userId = defaults.userid, knowledgeId = defaults.knowledgeid, fid = defaults.fid, relationId = '', objectId = config('objectid'), jobid = config('jobid') || '', attachments = setting.attachments;
			if (attachments.length > 0x0)
				for (var i = 0x0, len = attachments.length; i < len; i++) {
					var item = attachments[i], obj = item.objectId;
					if (obj == objectId) {
						relationId = item.aid;
						break;
					}
				}
			var data = {
				'relationId': relationId,
				'objectId': objectId,
				'userId': userId,
				'knowledgeId': knowledgeId,
				'fid': fid,
				'jobId': jobid
			}, log = {
				'courseId': courseId,
				'clazzId': clazzId,
				'personId': personId,
				'eventType': 0x4,
				'eventTime': eventTime,
				'data': data
			}, monitorEnc = defaults.mtEnc;
			Ext.Ajax.request({
				'method': 'post',
				'url': url,
				'params': {
					'log': JSON.stringify(log),
					'enc': monitorEnc
				},
				'success': function (data) { }
			});
		}
	} catch (err) { }
}
function createVideoTask() {
	if (isViturlEdit)
		return;
	var taskUrl = location.protocol + '//convertservice.chaoxing.com/video/createVideoTask?objectid=' + wrongObj;
	Ext.Ajax.request({
		'timeout': 0xbb8,
		'type': 'get',
		'async': false,
		'url': taskUrl,
		'dataType': 'jsonp',
		'jsonp': 'jsoncallback',
		'success': function (response) { },
		'failure': function (resp) {
			console.log('创建任务失败');
		}
	});
}
Ext.onReady(function () {
	var requestSatusResourceDownGrade = parent.requestSatusResourceDownGrade;
	if (requestSatusResourceDownGrade && requestSatusResourceDownGrade == 0x1) {
		var tipImg = '<img src="/ananas/css/downgradeBlueTip.jpg" width="676" height="540">';
		Ext.select('body').setHTML(tipImg);
		return;
	}
	loadVideo();
});
var danmaku = {};
function getDanmuByTime(state, time) {
	var setting = parent.AttachmentSetting;
	if (!setting)
		return;
	if (setting && setting.defaults)
		var defaults = setting.defaults, courseId = defaults.courseid, clazzId = defaults.clazzId;
	else
		return;
	if (state == 'pause') {
		danmaku = {};
		return;
	}
	state == 'play' && (danmaku = {});
	var mid = config('mid'), param = {
		'courseid': courseId,
		'classid': clazzId,
		'mid': mid,
		'timebegin': parseInt(time),
		'timeend': parseInt(time) + 0x3b
	};
	Ext.Ajax.request({
		'url': '/videodanmaku/timerange-danmakulist',
		'method': 'get',
		'params': param,
		'success': function (response) {
			var result = eval('(' + response.responseText + ')');
			if (result.status == 0x1) {
				var data = result.data;
				for (var i = 0x0; i < data.length; i++) {
					var key = data[i].timeline;
					!danmaku[key] && (danmaku[key] = new Array()),
						danmaku[key].push(data[i].content);
				}
				time == 0x0 && danmuPlay(0x0);
			} else
				alert('服务异常,稍后再试!');
		},
		'failure': function (resp) {
			alert('服务异常,稍后再试!');
		}
	});
}
var count = 0x0, timeFlag = -0x1, currentTime = 0x0;
function shotdanmu(dom) {
	var clientWidth = dom.clientWidth;
	clientWidth = -parseInt(clientWidth);
	var transformX = 'translateX(' + clientWidth + 'px)';
	setTimeout(function () {
		dom.style.transform = transformX,
			dom.className = 'danmuItem left';
	}, 0x1f4);
}
function danmuPlay(time) {
	currentTime = time;
	if (timeFlag == time)
		return;
	timeFlag = time;
	var list = danmaku[time];
	if (!list)
		return;
	if (!$('.mui-switch').hasClass('checked'))
		return;
	var content = '<div class="danmuItem right">';
	for (var i = 0x0; i < list.length; i++) {
		if (list[i] == '@zan@')
			content += '<span><i class=\x22zanIcon\x22></i>赞</span>';
		else {
			if (list[i] == '@不赞同@')
				content += '<span><i class="noZanIcon"></i>不赞同</span>';
			else {
				if (list[i] == '@感动@')
					content += '<span><i class="moveIcon"></i>感动</span>';
				else {
					if (list[i] == '@疑惑@')
						content += '<span><i class="doubtIcon"></i>疑惑</span>';
					else {
						if (list[i] == '@献花@')
							content += '<span><i class="huaIcon"></i>献花</span>';
						else {
							if (list[i] == '@鼓掌@')
								content += '<span><i class="clapIcon"></i>鼓掌</span>';
							else
								list[i] == '@有趣@' ? content += '<span><i class="interestingIcon"></i>有趣</span>' : content += '<span>' + list[i] + '</span>';
						}
					}
				}
			}
		}
	}
	content += '</div>';
	var r = count % 0x3, el = new Ext[('XTemplate')](content).append('channel_' + r);
	shotdanmu(el),
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
function checkJobCountLimit(var_20220311_2, var_20220610_1) {
	/\/studentstudy/.test(top.location.pathname) && (var_20220610_1 == 0x0 ? top.showJobLimitTip() : top.showVideoTimeLimitTip(),
		playStateV2 = setInterval(function () {
			top.resumePlay && (clearStateV2Interval(),
				var_20220311_2.play(),
				top.resumePlay = false);
		}, 0x12c));
}
function startFaceCollection(player, collectionType, top, videoObjectId) {
	if (/\/studentstudy/.test(top.location.pathname)) {
		var len = $('.maskDiv1', top.document).length;
		len > 0x0 && ($('#videoJobId', top.document).val(videoJobId),
			$('#chapterVideoObjectId', top.document).val(videoObjectId),
			$('#collectionTime', top.document).val(videoObjectId),
			$('#mid', top.document).val(mid),
			top.getQRCodeURLShow1 && top.getQRCodeURLShow1(),
			$('.maskDiv1', top.document).css('display', 'block'),
			getPlayState = setInterval(function () {
				if (top.playerState) {
					clearStateInterval(),
						player.play(),
						top.firstPlayFace = false,
						top.playerState = false;
					var var_20220715_7 = top.jumpTimePointList;
					videoObjectId != -0x2 && typeof var_20220715_7 != 'undefined' && (var_20220715_7.push(videoObjectId),
						top.jumpTimePointList = var_20220715_7);
				}
			}, 0x3e8));
	}
}
function chapterPlayNextVideo(aId) {
	/\/studentstudy/.test(top.location.pathname) && (top.getChapterNextVideo && top.getChapterNextVideo(aId));
}
function markersPlayer(marker) {
	var time = marker.getAttribute('data-marker-time');
	if (time)
		return playerTime(time);
}
function getMarkers() {
	return videojs('video').markers;
}
function playerTime(time) {
	if (ff != 0x1)
		return;
	var videoPlayer = videojs('video');
	return videoPlayer.currentTime(time);
}
function playVideo() {
	var videoPlayer = videojs('video');
	player.volume(0x0),
		player.on('loadstart', function () {
			videoPlayer.play().catch(Ext.emptyFn);
		});
}
function reSizeIframe() {
	try {
		var height = Ext.fly(Ext.select('.main').elements[0x0]).getHeight();
		Ext.fly(window.frameElement).setHeight(height + 'px');
	} catch (e) {
		console.log(e.message);
	}
}
function removeDownloadBtn() {
	Ext.select('.xl-chrome-ext-bar').remove();
}
Ext.onReady(function () {
	window.setInterval('reSizeIframe()', 0xc8),
		window.setInterval('removeDownloadBtn()', 0x1f4),
		/\/studentstudy/.test(top.location.pathname) && ($('.writeNote').css('display', 'block'),
			Ext.select('.sp_function').setStyle('height', '66px')),
		$('.writeNote').click(function () {
			$('#type', parent.parent.document).val(0x1);
			$('#noteVideoName', parent.parent.document).val(videoName);
			var cPlayer = videojs('video'), videoTime = parseInt(cPlayer.currentTime()), minuteTime = parseInt(videoTime / 0x3c);
			minuteTime < 0xa && (minuteTime = '0' + minuteTime.toString());
			var secondTime = parseInt(videoTime % 0x3c);
			secondTime < 0xa && (secondTime = '0' + secondTime.toString()),
				$('.Note_name', parent.parent.document).html(videoName + ' ' + minuteTime + ':' + secondTime),
				$('.Note_name', parent.parent.document).css('display', 'block'),
				$('#noteVideoTime', parent.parent.document).val(videoTime),
				$('#noteVideoJobId', parent.parent.document).val(videoJobId),
				$('#noteVideoObjectId', parent.parent.document).val(videoObjectId),
				parent.parent.getClazzNote && parent.parent.getClazzNote(),
				parent.parent.changePan && parent.parent.changePan('3'),
				$('.formTopic', parent.parent.document).size() > 0x0 && $('.formTopic', parent.parent.document).css('display', 'block');
		});
});
