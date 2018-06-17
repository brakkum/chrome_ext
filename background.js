// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     var activeTab = tabs[0];
//     url = activeTab.url.toString()
//     regex = /https?:\/\/www.flickr.com\/photos\/([^\/]*)\/([^\/]*)\/sizes\/o\//
//     if (url.match(regex)) {
//         url = url.replace(
//             /https?:\/\/www.flickr.com\/photos\/([^\/]*)\/([^\/]*)\/sizes\/o\//,
//             'https://www.flickr.com/photos/$1/$2/sizes/l/')
//     }
// });
chrome.runtime.onMessage.addListener(function(r, s, sR) {
    url = s.url
    regex = /https?:\/\/www\.flickr\.com\/photos\/([^\/]*)\/([^\/]*)\/sizes\/o\//
    if (url.match(regex)) {
        url = url.replace(
            /https?:\/\/www.flickr.com\/photos\/([^\/]*)\/([^\/]*)\/sizes\/o\//,
            'https://www.flickr.com/photos/$1/$2/sizes/l/')
        chrome.tabs.query({active: true}, (tabs) => {
            chrome.tabs.update(null, {url: url}, (tab) => { 
                console.log(tab.status); // loading
            })
        })
    }
});