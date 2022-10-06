Ext.Ajax.autoAbort = true;
Ext.isIpad = (navigator.userAgent.indexOf('iPad') > -1);
Ext.isIos = (!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/));
Ext.isAndroid = (navigator.userAgent.indexOf("Android") > -1);
Ext.isSogou = !!navigator.userAgent.match(/metasr/i);
Ext.isChaoxing = (navigator.userAgent.indexOf("ChaoXingStudy") > -1);
function greenligth() {
	Ext.fly(window.frameElement).parent().addCls('ans-job-finished');
}
function isUnFinishJob() {
	try {
		var var_20220311_1 = Ext.fly(window.frameElement).prev();
		if (var_20220311_1 && var_20220311_1.hasCls('ans-job-icon')) {
			return !Ext.fly(window.frameElement).parent().hasCls('ans-job-finished');
		}
		return false;
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
	var arrstr = document.cookie.split("; ");
	for (var i = 0; i < arrstr.length; i++) {
		var temp = arrstr[i].split("=");
		if (temp[0] == objname) {
			return unescape(temp[1]);
		}
	}
}
function showMoocPlayer(paras) {
	loadMultiFile([{
		src: 'cxplayer/jquery.min.js',
		tag: 'script',
		type: 'text/javascript',
		defer: 'defer'
	}, {
		src: '/ananas/swfobject/swfobject.js',
		tag: 'script',
		type: 'text/javascript',
		defer: 'defer'
	}, {
		src: 'cxplayer/json.util.js',
		tag: 'script',
		type: 'text/javascript',
		defer: 'defer'
	}], function () {
		loadMultiFile([{
			src: 'cxplayer/scroll.js',
			tag: 'script',
			type: 'text/javascript',
			defer: 'defer'
		}, {
			src: 'cxplayer/cxplayer.4.0.5.js?v=20160405',
			tag: 'script',
			type: 'text/javascript',
			defer: 'defer'
		}, {
			src: 'cxplayer/moocplayer_4.0.11.js?v=2020-1016-2010',
			tag: 'script',
			type: 'text/javascript',
			defer: 'defer'
		}], function () {
			var mp = new MoocPlayer({
				isSendLog: !!parent.AttachmentSetting && parent.AttachmentSetting.control,
				data: paras,
				height: 540,
				width: 676
			});
		});
	});
}
function showHTML5Player(paras) {
	Ext.get('reader').setHTML('<video id="video" class="video-js vjs-default-skin vjs-big-play-centered"></video>');
	new ans.VideoJs({
		videojs: 'video',
		params: paras
	});
	document.getElementsByTagName('video')[0].addEventListener('play', function () {
		var iframearray = parent.document.getElementsByTagName("iframe");
		for (var i = 0; i < iframearray.length; i++) {
			if (iframearray[i].getAttribute("src").indexOf("microCourse") != -1) {
				var item = iframearray[i].contentWindow.document.getElementsByTagName("iframe")[0].contentWindow;
				item.PageView.stopAll && item.PageView.stopAll();
			}
		}
		$(".vjs-subs-caps-button .vjs-icon-placeholder").hover(function () {
			if ($(".vjs-subs-caps-button .vjs-menu-content").length > 0) {
				$(".vjs-subs-caps-button .vjs-menu-content").niceScroll({ cursorborder: "", cursorwidth: 8, cursorcolor: "#CAD5E6", boxzoom: false, autohidemode: true });
				$(".vjs-subs-caps-button .vjs-menu-content").getNiceScroll().resize()
			}
		})
	})
	function changePPTTop() {
		var videoHeight = $("#video").height();
		var picHeight = $("#sp_video_ppt_pic").height();
		var topHeight = (parseInt(videoHeight) - 60 - parseInt(picHeight)) / 2;
		if ($("#sp_video_ppt_pic").length > 0 && $("#sp_video_ppt_pic").hasClass("sp_ppt_pic_fullScreen")) {
			$("#sp_video_ppt_pic").css("top", topHeight + "px");
			$("#sp_video_ppt_pic").css("left", "0");
		} else {
			$("#sp_video_ppt_pic").css("top", "0px");
			$("#sp_video_ppt_pic").css("left", "0px");
		}
	}
	$(".vjs-fullscreen-control").click(function () {
		setTimeout(changePPTTop, 300);
	})
	$(window).resize(function () {
		setTimeout(changePPTTop, 500);
	});
}
var wrongObj = "";
var videoName = "";
var videoJobId = "";
var videoObjectId = "";
function loadVideo() {
	var objectid = config('objectid');
	var reader = Ext.get('reader');
	if (!objectid) {
		reader.setHTML('未找到该文件');
		return;
	}
	wrongObj = objectid;
	videoObjectId = objectid;
	var iframe = window.frameElement;
	var data = Ext.decode(iframe.getAttribute('data'));
	var setting = parent.AttachmentSetting;
	var mid = config('mid');
	var percent = 0;
	var vbegin = config('vbegin');
	var vend = config('vend');
	var jobid = config('jobid') || "";
	var danmaku = data ? data.danmaku == null ? 0 : data.danmaku : 0;
	var videoTopicCloud = setting && setting.videoTopicCloud;
	var fastforward = config('fastforward') == 'true' ? true : false;
	var switchwindow = config('switchwindow') == 'true' ? true : false;
	var note = Ext.get('note');
	var hl = Ext.get('hl');
	var note1Wrap = Ext.get('note1-wrap');
	var note1 = Ext.get('note1');
	var timer = null;
	var rt = data ? (data.rt ? data.rt : 0.9) : 0.9;
	if (jobid == "") {
		videoJobId = data && data._jobid ? data._jobid : "";
	} else {
		videoJobId = jobid;
	}
	var fls = flashChecker().hasFlash;
	try {
		isTeacher = top.location.href.indexOf("teacherstudy") > 0 || top.location.href.indexOf("course/phone/chapterdata") > 0;
	} catch (e) { }
	var isVideoVisibleName = parent.isVideoVisibleName;
	var doublespeed = data ? data.doublespeed != 0 ? 1 : 0 : 1;
	if (data.v_begin && data.v_end && data.pobjectid) {
		isViturlEdit = true;
	}
	function setTopicName(list) {
		if (list && list.length == 0) {
			return;
		}
		if (Ext.select(".zsCloud_ul") != null) {
			var spanList = "";
			for (var i = 0, len = list.length; i < len; i++) {
				spanList += "<li><span class='zsCloud_span topicId" + list[i].id + "' onclick='markersPlayer(this)'>" + list[i].name + " </span></li>";
			}
			Ext.select(".zsCloud_ul").setHTML(spanList);
			Ext.select(".zsCloud").setStyle('display', 'block');
		}
	}
	function request() {
		if (percent <= 100) {
			hl.setWidth((percent += 5) + "%");
		}
		var k = getCookie('fid') || '';
		Ext.Ajax.request({
			url: '/ananas/status/' + objectid + '?k=' + k + "&flag=normal",
			success: function (response) {
				var oData = eval('(' + response.responseText + ')');
				Ext.get('loading').hide();
				switch (oData.status) {
					case 'success':
						note1Wrap.remove();
						videoName = data && data.name || '';
						if (isVideoVisibleName != "false") {
							if (Ext.fly(window.frameElement).parent().first('.ans-job-icon') != null) {
								Ext.fly(window.frameElement).parent().first('.ans-job-icon').insertHtml('beforeEnd', '<span title="' + videoName + '" style="width: 500px;margin-left: 120px;display: inline-block;height: 23px;line-height: 23px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">' + videoName + '</span>');
							} else {
								Ext.fly(window.frameElement).parent().insertHtml('afterBegin', '<div title="' + videoName + '" style="width: 500px;display: inline-block;line-height: 23px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">' + videoName + '</div>');
							}
						}
						var d = oData.duration,
							paras = {
								enableFastForward: fastforward ? 0 : 1,
								enableSwitchWindow: switchwindow ? 0 : 1,
								duration: d,
								httpmd: oData.httpmd,
								http: oData.http,
								httphd: oData.httphd,
								httpshd: oData.httpshd,
								filename: oData.filename,
								dtoken: oData.dtoken,
								videoTopicCloud: videoTopicCloud
							};
						window.duration = d;
						if (oData.cdn) {
							paras.cdn = oData.cdn;
						}
						if (document.cookie.length > 0) {
							paras.memberinfo = getCookie('memberinfo');
							paras.questionErrorLogUrl = ServerHosts.MASTER_HOST + '/question/addquestionerror';
						}
						if (mid) {
							paras.mid = mid;
						}
						if (oData.duration) {
							paras.videoTotalTime = oData.duration;
						}
						if (setting && setting.isErya == 1) {
							paras.screenshot = "https://p.ananas.chaoxing.com/star3/origin/a26e16b5ac8e769bba6bda57343b7d57.png";
						} else if (oData.screenshot) {
							paras.screenshot = oData.screenshot;
						}
						if (setting) {
							paras.chapterVideoTranslate = setting.chapterVideoTranslate;
						}
						if (oData.thumbnails) {
							paras.thumbnails = oData.thumbnails;
						}
						if (oData.subobjectid) {
							paras.subobjectid = oData.subobjectid;
						}
						if (vbegin) {
							paras.startTime = vbegin;
						}
						if (vend) {
							paras.endTime = vend;
						}
						paras.rt = rt;
						paras.control = setting && setting.control;
						if (isTeacher) {
							paras.control = false;
						}
						var m = {}, s, vb, ve;
						if (setting && setting.control) {
							var attachments = setting.attachments,
								defaults = setting.defaults,
								spec = oData.objectid + "-" + (vbegin ? vbegin : 0) + "-" + (vend ? vend : d) + "-" + jobid;
							if (defaults) {
								paras.userid = defaults.userid || '';
								paras.fid = defaults.fid || '';
							}
							for (var i = 0; i < attachments.length; i++) {
								m = attachments[i], vb = 0, ve = d;
								if (m.property) {
									if (m.property.vbegin) {
										vb = m.property.vbegin;
									}
									if (m.property.vend) {
										ve = m.property.vend;
									}
								}
								if (!m.jobid) {
									m.jobid = "";
								}
								s = m.objectId + "-" + vb + "-" + ve + "-" + m.jobid;
								if (spec == s) {
									Ext.apply(paras, setting.defaults);
									paras.headOffset = m.headOffset ? Math.floor(parseInt(m.headOffset) / 1000) : 0;
									paras.objectId = m.objectId;
									paras.otherInfo = m.otherInfo;
									paras.isPassed = m.isPassed;
									paras.aId = m.aid;
									paras.danmaku = danmaku;
									if (m.topicList) {
										setTopicName(m.topicList);
									}
									if (m.property && m.property.fastforward && m.property.fastforward == "true") {
										paras.enableFastForward = 0;
									}
									if (m.property && typeof m.property.doublespeed != "undefined" && m.property.doublespeed == 0) {
										paras.doublespeed = 0;
										doublespeed = 0;
									}
									var schoolDoubleSpeed = paras.schooldoublespeed;
									if (typeof schoolDoubleSpeed == "undefined" || schoolDoubleSpeed == 2) {
										paras.doublespeed = doublespeed
									} else {
										paras.doublespeed = schoolDoubleSpeed;
									}
									if (jobid) {
										paras.jobid = jobid;
										if (!m.job) {
											if (!isTeacher) {
												greenligth();
											}
											ed_complete = false;
											paras.enableFastForward = 1;
											paras.enableSwitchWindow = 1;
											paras.headOffset = 0;
										}
									}
									paras.reportUrl = paras.reportUrl && paras.reportUrl.replace("http://", window.location.protocol + "//");
									window._jobindex = i;
									break;
								}
							}
						} else {
							var schoolDoubleSpeed = paras.schooldoublespeed;
							if (typeof schoolDoubleSpeed == "undefined" || schoolDoubleSpeed == 2) {
								paras.doublespeed = doublespeed;
							} else {
								paras.doublespeed = schoolDoubleSpeed;
							}
						}
						if (paras.ignoreVideoCtrl == 1) {
							paras.enableFastForward = 1;
							paras.enableSwitchWindow = 1;
						}
						if (!paras.control || isTeacher) {
							ed_complete = false;
							paras.enableFastForward = 1;
							paras.enableSwitchWindow = 1;
							paras.headOffset = 0;
						}
						if (paras.isPassed || paras.headOffset > paras.videoTotalTime * 0.95) {
							paras.headOffset = 0;
						}
						timer && clearInterval(timer);
						paras.isSupportFace = $(".maskDiv1", top.document).length > 0 && (/\/studentstudy/.test(top.location.pathname)) ? true : false;
						paras.isShowFaceCollection = /\/studentstudy/.test(top.location.pathname) && !Ext.fly(window.frameElement).parent().hasCls("ans-job-finished");
						if (supportH5Video()) {
							if (data.danmaku) {
								loadMultiFile([{
									src: 'cxplayer/jquery.min.js',
									tag: 'script',
									type: 'text/javascript',
									defer: 'defer'
								}], function () {
									loadMultiFile([{
										src: 'cxplayer/scroll.js',
										tag: 'script',
										type: 'text/javascript',
										defer: 'defer'
									}], function () {
										loadMultiFile([{
											src: 'cxplayer/videodanmu.js',
											tag: 'script',
											type: 'text/javascript',
											defer: 'defer'
										}])
									});
								});
								Ext.select(".rage_bd").setStyle('display', 'block');
								Ext.select(".sp_function").setStyle("height", "66px");
							}
							ff = paras.enableFastForward;
							showHTML5Player(paras);
						} else {
							if (!fls) {
								var href = 'http://www.adobe.com/go/getflashplayer';
								Ext.get('reader').setHTML('您没有安装flashplayer，请到<a href="' + href + '" target="_blank">www.adobe.com</a>下载安装。<br/>如果已经安装请点击此处启用：<object id="swf_jlxl1lfb" height="50" width="100" type="application/x-shockwave-flash" data="/ananas/modules/video/cxplayer/player_4.0.11.swf?v=20161025" style="border:#ccc 1px solid"><param name="quality" value="high"><param name="allowScriptAccess" value="always"><param name="wMode" value="transparent"><param name="align" value="middle"><param name="bgcolor" value="#000000"><param name="swLiveConnect" value="true"><param name="loop" value="true"><param name="play" value="true"><param name="DeviceFont" value="false"><param name="allowFullScreen" value="true"><param name="menu" value="true"></object>');
								return;
							}
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
						break;
				}
			},
			failure: function (resp) {
				if (resp.status == 0) {
					timer && clearInterval(timer);
					note1Wrap.update('<div class="line1"><div class="line2"></div></div><p class="tipStyle">视频加载超时，请刷新页面重试【9003】</p>');
					Ext.get('loading').hide();
				} else {
					timer && clearInterval(timer);
					note1Wrap.update('<div class="line1"><div class="line3"></div></div><p class="tipStyle">视频加载失败，请稍后再试【9004】</p>');
					Ext.get('loading').hide();
				}
			}
		});
	}
	request();
}
function supportH5Video() {
	var videoMp4Support = function () {
		var elem = document.createElement('video');
		if (typeof elem.canPlayType == 'function') {
			var playable = elem.canPlayType('video/mp4;codecs="avc1.42E01E,mp4a.40.2"');
			if ((playable.toLowerCase() == 'maybe') || (playable.toLowerCase() == 'probably')) {
				return true;
			}
			var playable = elem.canPlayType('video/mp4;codecs="avc1.64001E,mp4a.40.2"');
			if ((playable.toLowerCase() == 'maybe') || (playable.toLowerCase() == 'probably')) {
				return true;
			}
		}
		return false;
	}
	if (Ext.isIE && Ext.isIE10m) {
		return false;
	}
	return videoMp4Support();
}
var playLogTimer;
function sendReadZTMediaLog(st) {
	try {
		var GetQueryString = function (name) {
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
			var r = parent.location.search.substr(1).match(reg);
			if (r != null) return unescape(r[2]); return null;
		};
		var setting = parent.AttachmentSetting;
		var iframe = window.frameElement;
		var kid = iframe.parentElement.parentElement.parentElement.getAttribute("kid");
		if (kid) {
			var margKid = 'marg-' + kid;
			setting = top[margKid];
			if (typeof (setting) == "string") {
				setting = eval('(' + setting + ')');
			}
		}
		if (!setting) {
			return;
		}
		var isFiled = setting.defaults.isFiled;
		var state = setting.defaults.state;
		if (isFiled == 1 || state == 1) {
			return;
		}
		var dtype = top.dtype || 'Course';
		if (dtype == "ZT" || dtype == "HB" || dtype == "MAG") {
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
						if (st == 0) {
							enc = item.enc0;
						} else if (st == 1) {
							enc = item.enc1;
						} else {
							enc = item.enc2;
						}
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
			if (st == 1) {
				playLogTimer && clearInterval(playLogTimer);
				playLogTimer = setInterval(function () {
					logRequest();
				}, 5000);
			} else if (st == 2) {
				playLogTimer && clearInterval(playLogTimer);
			}
		}
	} catch (error) { }
}
function receiveStudyLog() {
	try {
		var setting = parent.AttachmentSetting;
		if (!setting) {
			return;
		}
		if (setting && setting.defaults) {
			var defaults = setting.defaults;
			if (defaults.chapterCapture != 1) {
				return;
			}
			var url = '/keeper/api/receive-studylog';
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
			if (attachments.length > 0) {
				for (var i = 0, len = attachments.length; i < len; i++) {
					var item = attachments[i];
					var obj = item.objectId;
					if (obj == objectId) {
						relationId = item.aid;
						break;
					}
				}
			}
			var data = {
				"relationId": relationId,
				"objectId": objectId,
				"userId": userId,
				"knowledgeId": knowledgeId,
				"fid": fid,
				"jobId": jobid
			}
			var log = {
				"courseId": courseId,
				"clazzId": clazzId,
				"personId": personId,
				"eventType": 4,
				"eventTime": eventTime,
				"data": data
			};
			var monitorEnc = defaults.mtEnc;
			Ext.Ajax.request({
				method: 'post',
				url: url,
				params: { "log": JSON.stringify(log), "enc": monitorEnc },
				success: function (data) { }
			});
		}
	} catch (err) { }
}
function createVideoTask() {
	if (isViturlEdit) {
		return;
	}
	var taskUrl = location.protocol + '//convertservice.chaoxing.com/video/createVideoTask?objectid=' + wrongObj;
	Ext.Ajax.request({
		timeout: 3000,
		type: "get",
		async: false,
		url: taskUrl,
		dataType: "jsonp",
		jsonp: "jsoncallback",
		success: function (response) { },
		failure: function (resp) {
			console.log("创建任务失败");
		}
	});
}
Ext.onReady(function () {
	var requestSatusResourceDownGrade = parent.requestSatusResourceDownGrade;
	if (requestSatusResourceDownGrade && requestSatusResourceDownGrade == 1) {
		var tipImg = '<img src="/ananas/css/downgradeBlueTip.jpg" width="676" height="540">';
		Ext.select('body').setHTML(tipImg);
		return;
	}
	loadVideo();
});
var danmaku = {};
function getDanmuByTime(state, time) {
	var setting = parent.AttachmentSetting;
	if (!setting) {
		return;
	}
	if (setting && setting.defaults) {
		var defaults = setting.defaults;
		var courseId = defaults.courseid;
		var clazzId = defaults.clazzId;
	} else {
		return;
	}
	if (state == "pause") {
		danmaku = {};
		return;
	}
	if (state == "play") {
		danmaku = {};
	}
	var mid = config('mid');
	var param = {
		"courseid": courseId,
		"classid": clazzId,
		"mid": mid,
		"timebegin": parseInt(time),
		"timeend": parseInt(time) + 59
	};
	Ext.Ajax.request({
		url: '/videodanmaku/timerange-danmakulist',
		method: 'get',
		params: param,
		success: function (response) {
			var result = eval('(' + response.responseText + ')');
			if (result.status == 1) {
				var data = result.data;
				for (var i = 0; i < data.length; i++) {
					var key = data[i].timeline;
					if (!danmaku[key]) {
						danmaku[key] = new Array();
					}
					danmaku[key].push(data[i].content);
				}
				if (time == 0) {
					danmuPlay(0);
				}
			} else {
				alert("服务异常,稍后再试!");
			}
		},
		failure: function (resp) {
			alert("服务异常,稍后再试!");
		}
	});
}
var count = 0;
var timeFlag = -1;
var currentTime = 0;
function shotdanmu(dom) {
	var clientWidth = dom.clientWidth;
	clientWidth = -parseInt(clientWidth);
	var transformX = 'translateX(' + clientWidth + 'px)';
	setTimeout(function () {
		dom.style.transform = transformX;
		dom.className = 'danmuItem left';
	}, 500);
}
function danmuPlay(time) {
	currentTime = time;
	if (timeFlag == time) {
		return;
	}
	timeFlag = time;
	var list = danmaku[time];
	if (!list) {
		return;
	}
	if (!$('.mui-switch').hasClass("checked")) {
		return;
	}
	var content = '<div class="danmuItem right">';
	for (var i = 0; i < list.length; i++) {
		if (list[i] == "@zan@") {
			content += '<span><i class="zanIcon"></i>赞</span>';
		} else if (list[i] == "@不赞同@") {
			content += '<span><i class="noZanIcon"></i>不赞同</span>';
		} else if (list[i] == "@感动@") {
			content += '<span><i class="moveIcon"></i>感动</span>';
		} else if (list[i] == "@疑惑@") {
			content += '<span><i class="doubtIcon"></i>疑惑</span>';
		} else if (list[i] == "@献花@") {
			content += '<span><i class="huaIcon"></i>献花</span>';
		} else if (list[i] == "@鼓掌@") {
			content += '<span><i class="clapIcon"></i>鼓掌</span>';
		} else if (list[i] == "@有趣@") {
			content += '<span><i class="interestingIcon"></i>有趣</span>';
		} else {
			content += '<span>' + list[i] + '</span>';
		}
	}
	content += '</div>';
	var r = count % 3;
	var el = new Ext.XTemplate(content).append("channel_" + r);
	shotdanmu(el);
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
	if (/\/studentstudy/.test(top.location.pathname)) {
		if (var_20220610_1 == 0) {
			top.showJobLimitTip();
		} else {
			top.showVideoTimeLimitTip();
			playStateV2 = setInterval(function () {
				if (top.resumePlay) {
					clearStateV2Interval();
					var_20220311_2.play();
					top.resumePlay = false;
				}
			}, 300);
		}
	}
}
function startFaceCollection(player, collectionType, obj) {
	if (/\/studentstudy/.test(top.location.pathname)) {
		var len = $(".maskDiv1", top.document).length;
		if (len > 0) {
			$("#videoJobId", top.document).val(videoJobId);
			$("#chapterVideoObjectId", top.document).val(videoObjectId);
			top.getQRCodeURLShow1 && top.getQRCodeURLShow1();
			$(".maskDiv1", top.document).css("display", "block");
			getPlayState = setInterval(function () {
				if (top.playerState) {
					clearStateInterval();
					obj.isPlay = true;
					player.play();
					top.playerState = false;
				}
			}, 1000);
		}
	}
}
function chapterPlayNextVideo(aId) {
	if (/\/studentstudy/.test(top.location.pathname)) {
		top.getChapterNextVideo && top.getChapterNextVideo(aId);
	}
}
function markersPlayer(marker) {
	var time = marker.getAttribute("data-marker-time");
	if (time) {
		return playerTime(time);
	}
}
function getMarkers() {
	return videojs("video").markers;
}
function playerTime(time) {
	if (ff != 1) {
		return;
	}
	var videoPlayer = videojs("video");
	return videoPlayer.currentTime(time);
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
	} catch (e) { console.log(e.message) }
}
function removeDownloadBtn() {
	Ext.select(".xl-chrome-ext-bar").remove();
}
Ext.onReady(function () {
	window.setInterval("reSizeIframe()", 200);
	window.setInterval("removeDownloadBtn()", 500);
	if (/\/studentstudy/.test(top.location.pathname)) {
		$(".writeNote").css("display", "block");
		Ext.select(".sp_function").setStyle("height", "66px");
	}
	$(".writeNote").click(function () {
		$("#type", parent.parent.document).val(1);
		$("#noteVideoName", parent.parent.document).val(videoName);
		var cPlayer = videojs("video");
		var videoTime = parseInt(cPlayer.currentTime());
		var minuteTime = parseInt(videoTime / 60);
		if (minuteTime < 10) {
			minuteTime = "0" + minuteTime.toString();
		}
		var secondTime = parseInt(videoTime % 60);
		if (secondTime < 10) {
			secondTime = "0" + secondTime.toString();
		}
		$(".Note_name", parent.parent.document).html(videoName + " " + minuteTime + ":" + secondTime);
		$(".Note_name", parent.parent.document).css("display", "block");
		$("#noteVideoTime", parent.parent.document).val(videoTime);
		$("#noteVideoJobId", parent.parent.document).val(videoJobId);
		$("#noteVideoObjectId", parent.parent.document).val(videoObjectId);
		parent.parent.getClazzNote && parent.parent.getClazzNote();
		parent.parent.changePan && parent.parent.changePan('3');
		if ($(".formTopic", parent.parent.document).size() > 0) {
			$(".formTopic", parent.parent.document).css("display", "block");
		}
	})
})