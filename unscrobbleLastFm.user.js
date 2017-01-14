// ==UserScript==
// @name LastFM "bad" songs remover
// @description This subject was used to sweat out my library from songs with no covers on it.
// @author tworogue
// @version 1.0
// @include http://last.fm/user/*
// @include https://last.fm/user/*
// ==/UserScript==

(function (window, undefined) {
	setTimeout(function() {
		var isThereAnyBadSongs = false;
		var songs = document.getElementsByClassName('js-lazy-buylinks-focus-container');
		
		for (var i = 0; i < songs.length; ++i) {
			var song = songs[i];
			var art = song.getElementsByClassName('cover-art');
			var imgSource = art[0].currentSrc;
			
			if (imgSource == "https://lastfm-img2.akamaized.net/i/u/64s/4128a6eb29f94943c9d206c08e625904.png" || imgSource == "https://lastfm-img2.akamaized.net/i/u/64s/c6f59c1e5e7240a4c0d427abd71f3dbb.png") {
				console.log(song.getElementsByClassName('chartlist-ellipsis-wrap')[0].innerText);
				song.getElementsByClassName('chartlist-delete-button')[0].click();
				isThereAnyBadSongs = true;
			}
		}
		
		if (!isThereAnyBadSongs) {
			var currentHref = window.location.href.replace('http://www.last.fm/user/tworogue/library?page=', '');
			var newPage = Number(currentHref) + 1;
			
			console.log("Now go to the page №" + newPage);
			window.location.replace('http://www.last.fm/user/tworogue/library?page=' + newPage);
		} else {
			window.location.reload();
		}
	}, 7000);
})(window);