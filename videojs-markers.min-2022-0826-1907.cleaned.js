//!LOCATE 'use strict';var _0x245bff=_0x2183;
'use strict';
(function (getAttribute, _video2, undefined) {
	var defaultSetting = {
		'markerStyle': {
			'width': '7px',
			'border-radius': '30%',
			'background': 'url(/ananas/modules/video/marker/point.png) no-repeat center center',
			'background-size': '100%'
		},
		'markerStyle2': {
			'width': '7px',
			'border-radius': '30%',
			'background': 'url(/ananas/modules/video/marker/point2.png) no-repeat center center',
			'background-size': '100%'
		},
		'markerTip': {
			'display': true,
			'text': function (marker) {
				return 'Break: ' + marker.text;
			},
			'time': function (marker) {
				return marker.time;
			}
		},
		breakOverlay: {
			display: false,
			displayTime: 3,
			text: function (marker) {
				return 'Break overlay: ' + marker.overlayText;
			},
			style: {
				'width': '100%',
				'height': '20%',
				'background-color': 'rgba(0,0,0,0.7)',
				'color': 'white',
				'font-size': '17px'
			}
		},
		'onMarkerClick': function (marker) { },
		'onMarkerReached': function (marker, index) { },
		'markers': []
	};
	function generateUUID() {
		var d = new Date().getTime();
		var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
			var r = (d + Math.random() * 16) % 16 | 0;
			return d = Math.floor(d / 16), (c == 'x' ? r : r & 3 | 8).toString(16);
		});
		return uuid;
	}
	var NULL_INDEX = -1;
	function registerVideoJsMarkersPlugin(options) {
		var setting = getAttribute.extend(true, {}, defaultSetting, options),
			markersMap = {},
			markersList = [],
			player_el = getAttribute(this.el()),
			currentMarkerIndex = NULL_INDEX,
			player = this,
			markerTip = null,
			breakOverlay = null,
			overlayIndex = NULL_INDEX;
		function sortMarkersList() {
			markersList.sort(function (a, b) {
				return setting.markerTip.time(a) - setting.markerTip.time(b);
			});
		}
		function addMarkers(newMarkers) {
			newMarkers.forEach(function (marker) {
				marker.key = generateUUID();
				player_el.find('.vjs-progress-holder').append(createMarkerDiv(marker));
				markersMap[marker.key] = marker;
				markersList.push(marker);
			});
			sortMarkersList();
		}
		function getPosition(marker) {
			return setting.markerTip.time(marker) / player.duration() * 100;
		}
		function createMarkerDiv(marker) {
			var markerDiv = getAttribute('<div class=\'vjs-marker\'></div>');
			var styleStr = setting.markerStyle;
			return (marker.text == '片头' || marker.text == '片尾') && (styleStr = setting.markerStyle2), markerDiv.css(styleStr).css({
				'margin-left': -parseFloat(markerDiv.css('width')) / 2 + 'px',
				'left': getPosition(marker) + '%'
			}).attr('data-marker-key', marker.key).attr('data-marker-time', setting.markerTip.time(marker)), marker.class && markerDiv.addClass(marker.class), markerDiv.on('click', function (e) {
				var preventDefault = false;
				typeof setting.onMarkerClick === 'function' && (preventDefault = setting.onMarkerClick(marker) === false);
				if (!preventDefault) {
					var key = getAttribute(this).data('marker-key');
					player.currentTime(setting.markerTip.time(markersMap[key]));
				}
			}), setting.markerTip.display && registerMarkerTipHandler(markerDiv), markerDiv;
		}
		function updateMarkers() {
			markersList.forEach(function (marker) {
				var markerDiv = player_el.find('.vjs-marker[data-marker-key=\'' + marker.key + '\']'), markerTime = setting.markerTip.time(marker);
				markerDiv.data('marker-time') !== markerTime && markerDiv.css({ 'left': getPosition(marker) + '%' }).attr('data-marker-time', markerTime);
			});
			sortMarkersList();
		}
		function removeMarkers(indexArray) {
			!!breakOverlay && (overlayIndex = NULL_INDEX, breakOverlay.css('visibility', 'hidden'));
			currentMarkerIndex = NULL_INDEX;
			var deleteIndexList = [];
			indexArray.forEach(function (index) {
				var marker = markersList[index];
				marker && (delete markersMap[marker.key], deleteIndexList.push(index), player_el.find('.vjs-marker[data-marker-key=\'' + marker.key + '\']').remove());
			});
			deleteIndexList.reverse();
			deleteIndexList.forEach(function (deleteIndex) {
				markersList.splice(deleteIndex, 1);
			});
			sortMarkersList();
		}
		function registerMarkerTipHandler(markerDiv) {
			markerDiv.on('mouseover', function () {
				var marker = markersMap[getAttribute(markerDiv).data('marker-key')];
				!!markerTip && (markerTip.find('.vjs-tip-inner').text(setting.markerTip.text(marker)), markerTip.css({
					'left': getPosition(marker) + '%',
					'margin-left': -parseFloat(markerTip.width()) / 2 - 5 + 'px',
					'visibility': 'visible'
				}));
			});
			markerDiv.on('mouseout', function () {
				!!markerTip && markerTip.css('visibility', 'hidden');
			});
		}
		function initializeMarkerTip() {
			markerTip = getAttribute('<div class=\'vjs-tip\'><div class=\'vjs-tip-arrow\'></div><div class=\'vjs-tip-inner\'></div></div>');
			player_el.find('.vjs-progress-holder').append(markerTip);
			var markerTip2 = getAttribute('<div class=\'vjs-tip2\'><div class=\'vjs-tip-arrow2\'></div><div class=\'vjs-tip-inner2\'></div></div>');
			player_el.find('.vjs-progress-holder').append(markerTip2);
		}
		function updateBreakOverlay() {
			if (!setting.breakOverlay.display || currentMarkerIndex < 0) {
				return;
			}
			var currentTime = player.currentTime(), marker = markersList[currentMarkerIndex], markerTime = setting.markerTip.time(marker);
			currentTime >= markerTime && currentTime <= markerTime + setting.breakOverlay.displayTime ? (overlayIndex !== currentMarkerIndex && (overlayIndex = currentMarkerIndex, breakOverlay && breakOverlay.find('.vjs-break-overlay-text').html(setting.breakOverlay.text(marker))), breakOverlay && breakOverlay.css('visibility', 'visible')) : (overlayIndex = NULL_INDEX, breakOverlay && breakOverlay.css('visibility', 'hidden'));
		}
		function initializeOverlay() {
			breakOverlay = getAttribute('<div class=\'vjs-break-overlay\'><div class=\'vjs-break-overlay-text\'></div></div>').css(setting.breakOverlay.style);
			player_el.append(breakOverlay);
			overlayIndex = NULL_INDEX;
		}
		function onTimeUpdate() {
			onUpdateMarker();
			updateBreakOverlay();
			options.onTimeUpdateAfterMarkerUpdate && options.onTimeUpdateAfterMarkerUpdate();
		}
		function onUpdateMarker() {
			if (!markersList.length) {
				return;
			}
			var getNextMarkerTime = function (index) {
				if (index < markersList.length - 1) {
					return setting.markerTip.time(markersList[index + 1]);
				}
				return player.duration();
			}, currentTime = player.currentTime(), newMarkerIndex = NULL_INDEX;
			if (currentMarkerIndex !== NULL_INDEX) {
				var nextMarkerTime = getNextMarkerTime(currentMarkerIndex);
				if (currentTime >= setting.markerTip.time(markersList[currentMarkerIndex]) && currentTime < nextMarkerTime) {
					return;
				}
				if (currentMarkerIndex === markersList.length - 1 && currentTime === player.duration()) {
					return;
				}
			}
			if (currentTime < setting.markerTip.time(markersList[0])) {
				newMarkerIndex = NULL_INDEX;
			} else {
				for (var i = 0; i < markersList.length; i++) {
					nextMarkerTime = getNextMarkerTime(i);
					if (currentTime >= setting.markerTip.time(markersList[i]) && currentTime < nextMarkerTime) {
						newMarkerIndex = i;
						break;
					}
				}
			}
			if (newMarkerIndex !== currentMarkerIndex) {
				newMarkerIndex !== NULL_INDEX && options.onMarkerReached && options.onMarkerReached(markersList[newMarkerIndex], newMarkerIndex);
				currentMarkerIndex = newMarkerIndex;
			}
		}
		function initialize() {
			setting.markerTip.display && initializeMarkerTip();
			player.markers.removeAll();
			addMarkers(options.markers);
			setting.breakOverlay.display && initializeOverlay();
			onTimeUpdate();
			player.on('timeupdate', onTimeUpdate);
		}
		player.on('loadedmetadata', function () {
			initialize();
		});
		player.markers = {
			'getMarkers': function getMarkers() {
				return markersList;
			},
			'next': function next() {
				var currentTime = player.currentTime();
				for (var i = 0; i < markersList.length; i++) {
					var markerTime = setting.markerTip.time(markersList[i]);
					if (markerTime > currentTime) {
						player.currentTime(markerTime);
						break;
					}
				}
			},
			'prev': function prev() {
				var currentTime = player.currentTime();
				for (var i = markersList.length - 1; i >= 0; i--) {
					var markerTime = setting.markerTip.time(markersList[i]);
					if (markerTime + 0.5 < currentTime) {
						player.currentTime(markerTime);
						return;
					}
				}
			},
			'add': function add(newMarkers) {
				addMarkers(newMarkers);
			},
			'remove': function remove(indexArray) {
				removeMarkers(indexArray);
			},
			'removeAll': function removeAll() {
				var indexArray = [];
				for (var i = 0; i < markersList.length; i++) {
					indexArray.push(i);
				}
				removeMarkers(indexArray);
			},
			'updateTime': function updateTime() {
				updateMarkers();
			},
			'reset': function reset(newMarkers) {
				player.markers.removeAll();
				addMarkers(newMarkers);
			},
			'destroy': function destroy() {
				player.markers.removeAll();
				breakOverlay && breakOverlay.remove();
				markerTip && markerTip.remove();
				player.off('timeupdate', updateBreakOverlay);
				delete player.markers;
			}
		};
	}
	_video2.registerPlugin('markers', registerVideoJsMarkersPlugin);
}(jQuery, window.videojs));