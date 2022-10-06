Ext.Ajax.autoAbort = true;
Ext.isIpad = -1 < navigator.userAgent.indexOf('iPad');
Ext.isIos = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
Ext.isAndroid = -1 < navigator.userAgent.indexOf('Android');
Ext.isSogou = !!navigator.userAgent.match(/metasr/i);
Ext.isChaoxing = -1 < navigator.userAgent.indexOf('ChaoXingStudy');
function greenligth() {
	Ext.fly(window.frameElement).parent().addCls('ans-job-finished');
}
function isUnFinishJob() {
	try {
		var var_20220311_1 = Ext.fly(window.frameElement).prev();
		return var_20220311_1 && var_20220311_1.hasCls('ans-job-icon') ? !Ext.fly(window.frameElement).parent().hasCls('ans-job-finished') : false;
	} catch (e) {
		console.log(e);
	}
	return false;
}
var isViturlEdit = false;
var ff = 1;
function proxy_completed() {
	if (ed_complete) {
		greenligth();
		ed_complete();
	}
}
function config(d) {
	return window.frameElement.getAttribute(d);
}
function getCookie(objname) {
	for (var arrstr = document.cookie.split("; "), i = 0; i < arrstr.length; i++) {
		var temp = arrstr[i].split("=");
		if (temp[0] == objname) {
			return unescape(temp[1]);
		}
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
			new MoocPlayer({
				'isSendLog': !!parent.AttachmentSetting && parent.AttachmentSetting.control,
				'data': paras,
				'height': 540,
				'width': 676
			});
		});
	});
}
function bindVjsClick(var_20220715_1) {
	try {
		var var_20220715_2, var_20220715_3, var_20220715_4 = var_20220715_1.enableFastForward, var_20220715_5 = var_20220715_1.jobid;
		void 0 !== var_20220715_4 && 0 === var_20220715_4 && void 0 !== var_20220715_5 && '' != var_20220715_5 && -1 < window.parent.parent.location.href.indexOf('studentstudy') && (var_20220715_2 = $('.video-js .toolTipBox1'),
			var_20220715_3 = $('#tipDiv'),
			0 === var_20220715_2.length && 0 < var_20220715_3.length && ($('.video-js').prepend(var_20220715_3.html()),
				$('.vjs-control').on('click', function () {
					$('.toolTipBox1').is(':visible') || ($('.toolTipBox1').show(),
						setTimeout(function () {
							$('.toolTipBox1').hide();
						}, 800));
				})));
	} catch (e) {
		console.log(e);
	}
}
function showHTML5Player(paras) {
	function changePPTTop() {
		var videoHeight = $("#video").height();
		picHeight = $("#sp_video_ppt_pic").height();
		videoHeight = (parseInt(videoHeight) - 60 - parseInt(picHeight)) / 2;
		0 < $("#sp_video_ppt_pic").length && $("#sp_video_ppt_pic").hasClass("sp_ppt_pic_fullScreen") ? ($("#sp_video_ppt_pic").css("top", videoHeight + "px"),
			$("#sp_video_ppt_pic").css("left", "0")) : ($("#sp_video_ppt_pic").css("top", "0px"),
				$("#sp_video_ppt_pic").css("left", "0px"));
	}
	Ext.get('reader').setHTML('<video id="video" class="video-js vjs-default-skin vjs-big-play-centered"></video>');
	new ans[('VideoJs')]({
		'videojs': 'video',
		'params': paras
	});
	document.getElementsByTagName('video')[0].addEventListener('play', function () {
		for (var var_20220715_6, iframearray = parent.document.getElementsByTagName('iframe'), i = 0; i < iframearray.length; i++)
			-1 != iframearray[i].getAttribute('src').indexOf('microCourse') && (var_20220715_6 = iframearray[i].contentWindow.document.getElementsByTagName('iframe')[0].contentWindow).PageView.stopAll && var_20220715_6.PageView.stopAll();
		$(".vjs-subs-caps-button .vjs-icon-placeholder").hover(function () {
			0 < $(".vjs-subs-caps-button .vjs-menu-content").length && ($(".vjs-subs-caps-button .vjs-menu-content").niceScroll({
				'cursorborder': "",
				'cursorwidth': 8,
				'cursorcolor': "#CAD5E6",
				'boxzoom': false,
				'autohidemode': true
			}),
				$(".vjs-subs-caps-button .vjs-menu-content").getNiceScroll().resize());
		});
	}),
		$(".vjs-fullscreen-control").click(function () {
			setTimeout(changePPTTop, 300);
		}),
		$(window).resize(function () {
			setTimeout(changePPTTop, 500);
		}),
		bindVjsClick(paras);
}
var wrongObj = "";
var videoName = "";
var videoJobId = "";
var videoObjectId = "";
var mid = "";
var playLogTimer;
function loadVideo() {
	var objectid = config('objectid');
	var reader = Ext.get('reader');
	if (objectid) {
		wrongObj = objectid;
		videoObjectId = objectid;
		var iframe = window.frameElement;
		var data = Ext.decode(iframe.getAttribute('data'));
		var setting = parent.AttachmentSetting;
		var percent = (mid = config('mid'), 0);
		var vbegin = config('vbegin');
		var vend = config('vend');
		var jobid = config('jobid') || "";
		var danmaku = !data || null == data.danmaku ? 0 : data.danmaku;
		var videoTopicCloud = setting && setting.videoTopicCloud;
		var fastforward = 'true' == config('fastforward');
		var switchwindow = 'true' == config('switchwindow');
		var note = Ext.get('note');
		var hl = Ext.get('hl');
		var note1Wrap = Ext.get('note1-wrap');
		var note1 = Ext.get('note1');
		var timer = null;
		var rt = data && data.rt || 0.9;
		var videoJobId = (videoJobId = "" == jobid ? data && data._jobid ? data._jobid : "" : jobid,
			flashChecker().hasFlash);
		try {
			isTeacher = 0 < top.location.href.indexOf("teacherstudy") || 0 < top.location.href.indexOf("course/phone/chapterdata");
		} catch (e) { }
		var isVideoVisibleName = parent.isVideoVisibleName;
		var doublespeed = !data || 0 != data.doublespeed ? 1 : 0;
		data.v_begin && data.v_end && data.pobjectid && (isViturlEdit = true);
		request();
	} else
		reader.setHTML('未找到该文件');
	function setTopicName(list) {
		if ((!list || 0 != list.length) && null != Ext.select(".zsCloud_ul")) {
			for (var spanList = "", i = 0, len = list.length; i < len; i++) {
				spanList += "<li><span class='zsCloud_span topicId" + list[i].id + "' onclick='markersPlayer(this)'>" + list[i].name + " </span></li>";
			}
			Ext.select(".zsCloud_ul").setHTML(spanList);
			Ext.select(".zsCloud").setStyle('display', 'block');
		}
	}
	function request() {
		percent <= 100 && hl.setWidth((percent += 5) + "%");
		var k = getCookie('fid') || '';
		Ext.Ajax.request({
			'url': '/ananas/status/' + objectid + '?k=' + k + "&flag=normal",
			'success': function (response) {
				var oData = eval('(' + response.responseText + ')');
				switch (Ext.get('loading').hide(),
				oData.status) {
					case 'success':
						note1Wrap.remove();
						videoName = data && data.name || '';
						if ("false" != isVideoVisibleName) {
							null == Ext.fly(window.frameElement).parent().first('.ans-job-icon') || -1 < top.location.href.indexOf('nodedetailcontroller/visitnodedetail') ? Ext.fly(window.frameElement).parent().insertHtml('afterBegin', '<div title="' + videoName + '" style="width: 500px;display: inline-block;line-height: 23px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">' + videoName + '</div>') : Ext.fly(window.frameElement).parent().first('.ans-job-icon').insertHtml('beforeEnd', '<span title="' + videoName + '" style="width: 500px;margin-left: 120px;display: inline-block;height: 23px;line-height: 23px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">' + videoName + '</span>');
						}
						var d = oData.duration,
							paras = {
								'enableFastForward': fastforward ? 0 : 1,
								'enableSwitchWindow': switchwindow ? 0 : 1,
								'duration': d,
								'httpmd': oData.httpmd,
								'http': oData.http,
								'httphd': oData.httphd,
								'httpshd': oData.httpshd,
								'filename': oData.filename,
								'dtoken': oData.dtoken,
								'videoTopicCloud': videoTopicCloud
							},
							m = (window.duration = d,
								oData.cdn && (paras.cdn = oData.cdn),
								0 < document.cookie.length && (paras.memberinfo = getCookie('memberinfo'),
									paras.questionErrorLogUrl = ServerHosts.MASTER_HOST + '/question/addquestionerror'),
								mid && (paras.mid = mid),
								oData.duration && (paras.videoTotalTime = oData.duration),
								setting && 1 == setting.isErya ? paras.screenshot = 'https://p.ananas.chaoxing.com/star3/origin/a26e16b5ac8e769bba6bda57343b7d57.png' : oData.screenshot && (paras.screenshot = oData.screenshot),
								setting && (paras.chapterVideoTranslate = setting.chapterVideoTranslate),
								oData.thumbnails && (paras.thumbnails = oData.thumbnails),
								oData.subobjectid && (paras.subobjectid = oData.subobjectid),
								vbegin && (paras.startTime = vbegin),
								vend && (paras.endTime = vend),
								paras.rt = rt,
								paras.control = setting && setting.control,
								isTeacher && (paras.control = false),
								{}), s, vb, ve, href;
						if (setting && setting.control) {
							var attachments = setting.attachments,
								defaults = setting.defaults,
								spec = oData.objectid + "-" + (vbegin || 0) + "-" + (vend || d) + "-" + jobid;
							if (defaults) {
								paras.userid = defaults.userid || '';
								paras.fid = defaults.fid || '';
							}
							for (var i = 0; i < attachments.length; i++)
								if (m = attachments[i], vb = 0, ve = d, m.property && (m.property.vbegin && (vb = m.property.vbegin),
									m.property.vend && (ve = m.property.vend)),
									m.jobid || (m.jobid = ''),
									s = m.objectId + '-' + vb + '-' + ve + '-' + m.jobid,
									spec == s) {
									Ext.apply(paras, setting.defaults),
										paras.headOffset = m.headOffset ? Math.floor(parseInt(m.headOffset) / 1000) : 0,
										paras.objectId = m.objectId,
										paras.otherInfo = m.otherInfo,
										paras.isPassed = m.isPassed,
										paras.aId = m.aid,
										paras.danmaku = danmaku,
										m.topicList && setTopicName(m.topicList),
										paras.jumpTimePointList = m.jumpTimePointList,
										m.property && m.property.fastforward && "true" == m.property.fastforward && (paras.enableFastForward = 0),
										m.property && void 0 !== m.property.doublespeed && 0 == m.property.doublespeed && (paras.doublespeed = 0,
											doublespeed = 0);
									var schoolDoubleSpeed = paras.schooldoublespeed;
									paras.doublespeed = void 0 === schoolDoubleSpeed || 2 == schoolDoubleSpeed ? doublespeed : schoolDoubleSpeed,
										jobid && (paras.jobid = jobid,
											m.job || (isTeacher || greenligth(),
												ed_complete = false,
												paras.enableFastForward = 1,
												paras.enableSwitchWindow = 1,
												paras.headOffset = 0)),
										paras.reportUrl = paras.reportUrl && paras.reportUrl.replace("http://", window.location.protocol + "//"),
										window._jobindex = i;
									break;
								}
						} else {
							var schoolDoubleSpeed = paras.schooldoublespeed;
							paras.doublespeed = void 0 === schoolDoubleSpeed || 2 == schoolDoubleSpeed ? doublespeed : schoolDoubleSpeed;
						}
						if (1 == paras.ignoreVideoCtrl && (paras.enableFastForward = 1,
							paras.enableSwitchWindow = 1),
							paras.control && !isTeacher || (ed_complete = false,
								paras.enableFastForward = 1,
								paras.enableSwitchWindow = 1,
								paras.headOffset = 0),
							(paras.isPassed || paras.headOffset > 0.95 * paras.videoTotalTime) && (paras.headOffset = 0),
							timer && clearInterval(timer),
							paras.isSupportFace = !!(0 < $('.maskDiv1', top.document).length && /\/studentstudy/.test(top.location.pathname)),
							paras.isShowFaceCollection = /\/studentstudy/.test(top.location.pathname) && !Ext.fly(window.frameElement).parent().hasCls('ans-job-finished'),
							supportH5Video())
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
							if (!videoJobId)
								return href = 'http://www.adobe.com/go/getflashplayer',
									void Ext.get('reader').setHTML('您没有安装flashplayer，请到<a href="' + href + '" target="_blank">www.adobe.com</a>下载安装。<br/>如果已经安装请点击此处启用：<object id="swf_jlxl1lfb" height="50" width="100" type="application/x-shockwave-flash" data="/ananas/modules/video/cxplayer/player_4.0.11.swf?v=20161025" style="border:#ccc 1px solid"><param name="quality" value="high"><param name="allowScriptAccess" value="always"><param name="wMode" value="transparent"><param name="align" value="middle"><param name="bgcolor" value="#000000"><param name="swLiveConnect" value="true"><param name="loop" value="true"><param name="play" value="true"><param name="DeviceFont" value="false"><param name="allowFullScreen" value="true"><param name="menu" value="true"></object>');
							showMoocPlayer(paras);
						}
						sendReadZTMediaLog(0);
						break;
					case 'failed':
						timer && clearInterval(timer);
						note1Wrap.remove();
						note.show();
						break;
					case 'waiting':
						note1Wrap.update('<div class="line1"><div class="line3"></div></div><p class="tipStyle making">视频正在转码，您无需在此页面等待【9001】</p>');
						break;
					case 'converting':
					case 'transfer':
						note1Wrap.update('<div class="line1"><div class="line2"></div></div><p class="tipStyle">视频上传中【9002】</p>');
				}
			},
			'failure': function (resp) {
				0 == resp.status ? (timer && clearInterval(timer),
					note1Wrap.update('<div class="line1"><div class="line2"></div></div><p class="tipStyle">视频加载超时，请刷新页面重试【9003】</p>')) : (timer && clearInterval(timer),
						note1Wrap.update('<div class="line1"><div class="line3"></div></div><p class="tipStyle">视频加载失败，请稍后再试【9004】</p>')),
					Ext.get('loading').hide();
			}
		});
	}
}
function supportH5Video() {
	if (Ext.isIE && Ext.isIE10m) {
		return false;
	}
	var elem = document.createElement('video');
	if ('function' == typeof elem.canPlayType) {
		var playable = elem.canPlayType('video/mp4;codecs="avc1.42E01E,mp4a.40.2"');
		if ('maybe' == playable.toLowerCase() || 'probably' == playable.toLowerCase())
			return true;
		if ('maybe' == (playable = elem.canPlayType('video/mp4;codecs="avc1.64001E,mp4a.40.2"')).toLowerCase() || 'probably' == playable.toLowerCase())
			return true;
	}
	return false;
}
function sendReadZTMediaLog(st) {
	try {
		var GetQueryString = function (name) {
			return reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)'),
				r = parent.location.search.substr(1).match(reg),
				null != r ? unescape(r[2]) : null;
		}, setting = parent.AttachmentSetting, iframe = window.frameElement, kid = iframe.parentElement.parentElement.parentElement.getAttribute('kid'), margKid, setting;
		if (kid && (margKid = 'marg-' + kid,
			setting = top[margKid],
			"string" == typeof setting && (setting = eval('(' + setting + ')'))),
			!setting) {
			return;
		}
		var isFiled = setting.defaults.isFiled;
		var state = setting.defaults.state;
		if (isFiled == 1 || state == 1) {
			return;
		}
		var dtype = top.dtype || 'Course';
		if ("ZT" == dtype || "HB" == dtype || "MAG" == dtype) {
			var search = parent.location.search || '';
			var uid = getCookie('UID');
			var objectId = config('objectid');
			var type = 0;
			var courseId = setting.defaults.courseid;
			var chapterId = setting.defaults.knowledgeid;
			var duration = window.duration;
			var _from_ = GetQueryString('_from_');
			var attachments = setting.attachments;
			var enc = "";
			if (attachments.length > 0) {
				for (var i = 0, len = attachments.length; i < len; i++) {
					var item = attachments[i];
					var obj = item.objectId;
					if (obj == objectId) {
						enc = 0 == st ? item.enc0 : 1 == st ? item.enc1 : item.enc2;
						break;
					}
				}
			}
			var logUrl = location.protocol + '//data-xxt.aichaoxing.com/analysis/datalog?s=' + courseId + '&c=' + chapterId + '&o=' + objectId + '&st=' + st + '&m=' + type + '&d=' + duration * 1000 + '&u=' + uid + '&_from_=' + _from_ + "&enc=" + enc;
			var logRequest = function () {
				Ext.Ajax.request({
					url: logUrl,
					success: function (response) { }
				});
			};
			logRequest();
			1 == st ? (playLogTimer && clearInterval(playLogTimer),
				playLogTimer = setInterval(function () {
					logRequest();
				}, 4000)) : 2 == st && playLogTimer && clearInterval(playLogTimer);
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
			if (1 != defaults.chapterCapture) {
				return;
			}
			var eventTime = new Date().getTime();
			var courseId = defaults.courseid;
			var clazzId = defaults.clazzId;
			var personId = defaults.cpi;
			var userId = defaults.userid;
			var knowledgeId = defaults.knowledgeid;
			var fid = defaults.fid;
			var relationId = "";
			var objectId = config('objectid');
			var jobid = config('jobid') || "";
			var attachments = setting.attachments;
			if (0 < attachments.length)
				for (var i = 0, len = attachments.length; i < len; i++) {
					var item = attachments[i];
					if (item.objectId == objectId) {
						relationId = item.aid;
						break;
					}
				}
			var log = {
				"courseId": courseId,
				"clazzId": clazzId,
				"personId": personId,
				"eventType": 4,
				"eventTime": eventTime,
				"data": {
					"relationId": relationId,
					"objectId": objectId,
					"userId": userId,
					"knowledgeId": knowledgeId,
					"fid": fid,
					"jobId": jobid
				}
			}
				, monitorEnc = defaults.mtEnc;
			Ext.Ajax.request({
				'method': 'post',
				'url': '/keeper/api/receive-studylog',
				'params': { "log": JSON.stringify(log), "enc": monitorEnc },
				'success': function (data) { }
			});
		}
	} catch (e) { }
}
function createVideoTask() {
	var taskUrl;
	isViturlEdit || (taskUrl = location.protocol + '//convertservice.chaoxing.com/video/createVideoTask?objectid=' + wrongObj,
		Ext.Ajax.request({
			'timeout': 3000,
			'type': 'get',
			'async': false,
			'url': taskUrl,
			'dataType': 'jsonp',
			'jsonp': 'jsoncallback',
			'success': function (response) { },
			'failure': function (resp) {
				console.log('创建任务失败');
			}
		}));
}
Ext.onReady(function () {
	var requestSatusResourceDownGrade = parent.requestSatusResourceDownGrade;
	if (requestSatusResourceDownGrade && 1 == requestSatusResourceDownGrade) {
		return void Ext.select('body').setHTML('<img src="/ananas/css/downgradeBlueTip.jpg" width="676" height="540">');
	}
	loadVideo();
});
var danmaku = {};
function getDanmuByTime(state, time) {
	var setting = parent.AttachmentSetting,
		defaults,
		courseId,
		clazzId,
		mid,
		param;
	setting && setting.defaults && (defaults = setting.defaults,
		courseId = defaults.courseid,
		clazzId = defaults.clazzId,
		'pause' == state ? danmaku = {} : ('play' == state && (danmaku = {}),
			mid = config('mid'),
			param = {
				'courseid': courseId,
				'classid': clazzId,
				'mid': mid,
				'timebegin': parseInt(time),
				'timeend': parseInt(time) + 59
			},
			Ext.Ajax.request({
				'url': '/videodanmaku/timerange-danmakulist',
				'method': 'get',
				'params': param,
				'success': function (response) {
					var result = eval('(' + response.responseText + ')');
					if (1 == result.status) {
						for (var data = result.data, i = 0; i < data.length; i++) {
							var key = data[i].timeline;
							danmaku[key] || (danmaku[key] = new Array());
							danmaku[key].push(data[i].content);
						}
						0 == time && danmuPlay(0);
					} else
						alert("服务异常,稍后再试!");
				},
				'failure': function (resp) {
					alert("服务异常,稍后再试!");
				}
			})));
}
var count = 0;
var timeFlag = -1;
var currentTime = 0;
var getPlayState;
var playStateV2;
function shotdanmu(dom) {
	var clientWidth = dom.clientWidth;
	var transformX = 'translateX(' + -parseInt(clientWidth) + 'px)';
	setTimeout(function () {
		dom.style.transform = transformX;
		dom.className = 'danmuItem left';
	}, 500);
}
function danmuPlay(time) {
	if (timeFlag != (currentTime = time)) {
		var list = danmaku[timeFlag = time];
		if (list && $('.mui-switch').hasClass("checked")) {
			for (var content = '<div class="danmuItem right">', i = 0; i < list.length; i++)
				"@zan@" == list[i] ? content += '<span><i class="zanIcon"></i>赞</span>' : "@不赞同@" == list[i] ? content += '<span><i class="noZanIcon"></i>不赞同</span>' : "@感动@" == list[i] ? content += '<span><i class="moveIcon"></i>感动</span>' : "@疑惑@" == list[i] ? content += '<span><i class="doubtIcon"></i>疑惑</span>' : "@献花@" == list[i] ? content += '<span><i class="huaIcon"></i>献花</span>' : "@鼓掌@" == list[i] ? content += '<span><i class="clapIcon"></i>鼓掌</span>' : "@有趣@" == list[i] ? content += '<span><i class="interestingIcon"></i>有趣</span>' : content += '<span>' + list[i] + '</span>';
			content += '</div>',
				time = count % 3,
				(shotdanmu(new Ext.XTemplate(content).append("channel_" + time)),
					count++);
		}
	}
}
function clearStateInterval() {
	getPlayState && clearInterval(getPlayState);
}
function clearStateV2Interval() {
	playStateV2 && clearInterval(playStateV2);
}
function checkJobCountLimit(var_20220311_2, var_20220610_1) {
	/\/studentstudy/.test(top.location.pathname) && (0 == var_20220610_1 ? top.showJobLimitTip() : top.showVideoTimeLimitTip(),
		playStateV2 = setInterval(function () {
			top.resumePlay && (clearStateV2Interval(),
				var_20220311_2.play(),
				top.resumePlay = false);
		}, 300));
}
function startFaceCollection(player, collectionType, top, videoObjectId) {
	/\/studentstudy/.test(top.location.pathname) && 0 < $(".maskDiv1", top.document).length && ($("#videoJobId", top.document).val(videoJobId),
		$("#chapterVideoObjectId", top.document).val(videoObjectId),
		$('#collectionTime', top.document).val(videoObjectId),
		$('#mid', top.document).val(mid),
		top.getQRCodeURLShow1 && top.getQRCodeURLShow1(),
		$(".maskDiv1", top.document).css("display", "block"),
		getPlayState = setInterval(function () {
			var var_20220715_7;
			top.playerState && (clearStateInterval(),
				player.play(),
				top.firstPlayFace = false,
				top.playerState = false,
				var_20220715_7 = top.jumpTimePointList,
				-2 != videoObjectId && void 0 !== var_20220715_7 && (var_20220715_7.push(videoObjectId),
					top.jumpTimePointList = var_20220715_7));
		}, 1000));
}
function chapterPlayNextVideo(aId) {
	/\/studentstudy/.test(top.location.pathname) && top.getChapterNextVideo && top.getChapterNextVideo(aId);
}
function markersPlayer(marker) {
	time = marker.getAttribute("data-marker-time");
	if (time) {
		return playerTime(time);
	}
}
function getMarkers() {
	return videojs("video").markers;
}
function playerTime(time) {
	if (1 == ff)
		return videojs("video").currentTime(time);
}
function playVideo() {
	var videoPlayer = videojs("video");
	player.volume(0);
	player.on("loadstart", function () {
		videoPlayer.play().catch(Ext.emptyFn);
	});
}
function reSizeIframe() {
	try {
		var height = Ext.fly(Ext.select(".main").elements[0]).getHeight();
		Ext.fly(window.frameElement).setHeight(height + "px");
	} catch (e) {
		console.log(e.message);
	}
}
function removeDownloadBtn() {
	Ext.select(".xl-chrome-ext-bar").remove();
}
Ext.onReady(function () {
	window.setInterval("reSizeIframe()", 200),
		window.setInterval("removeDownloadBtn()", 500),
		/\/studentstudy/.test(top.location.pathname) && ($(".writeNote").css("display", "block"),
			Ext.select(".sp_function").setStyle("height", "66px")),
		$(".writeNote").click(function () {
			$("#type", parent.parent.document).val(1),
				$("#noteVideoName", parent.parent.document).val(videoName);
			var cPlayer = videojs("video");
			var cPlayer = parseInt(cPlayer.currentTime());
			var minuteTime = parseInt(cPlayer / 59);
			var secondTime = (minuteTime < 10 && (minuteTime = '0' + minuteTime.toString()), parseInt(cPlayer % 59));
			secondTime < 10 && (secondTime = '0' + secondTime.toString()),
				$('.Note_name', parent.parent.document).html(videoName + ' ' + minuteTime + ':' + secondTime),
				$('.Note_name', parent.parent.document).css('display', 'block'),
				$('#noteVideoTime', parent.parent.document).val(cPlayer),
				$('#noteVideoJobId', parent.parent.document).val(videoJobId),
				$('#noteVideoObjectId', parent.parent.document).val(videoObjectId),
				parent.parent.getClazzNote && parent.parent.getClazzNote(),
				parent.parent.changePan && parent.parent.changePan('3'),
				0 < $('.formTopic', parent.parent.document).size() && $('.formTopic', parent.parent.document).css('display', 'block');
		});
});
