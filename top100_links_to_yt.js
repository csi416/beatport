// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.beatport.com/genre/*/top-100
// @icon         https://www.google.com/s2/favicons?sz=64&domain=beatport.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const tracks = document.querySelectorAll(".buk-track-meta-parent");
    for (let i = 0; i < tracks.length; i++) {
        const title = tracks[i].children[0].children[0].children[0].innerHTML;
        const remix = tracks[i].children[0].children[0].children[1].innerHTML;
        const artist = tracks[i].children[1].children[0].innerHTML;
        const yt_search_query = artist + "+" + title + "+" + remix;
        tracks[i].children[0].children[0].setAttribute("href", "https://www.youtube.com/results?search_query=" + yt_search_query);
        tracks[i].children[0].children[0].setAttribute("target", "_blank");
    }
})();
