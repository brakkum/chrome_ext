chrome.runtime.onMessage.addListener(function(r, s, sR) {
    has_large = r.has_large
    has_med = r.has_med
    url = s.url
    regex = /https?:\/\/www\.flickr\.com\/photos\/([^\/]*)\/([^\/]*)\/sizes\/o\//
    if (url.match(regex)) {
        if (has_large) {
            size_avail = 'l'
        } else if (has_med) {
            size_avail = 'z'
        } else {
            size_avail = 'm'
        }
        url = url.replace(
            regex, 'https://www.flickr.com/photos/$1/$2/sizes/' + size_avail)
        chrome.tabs.query({active: true}, (tabs) => {
            chrome.tabs.update(null, {url: url})
        })
    }
});