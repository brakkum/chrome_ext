url = window.location.toString()
regex = /https?:\/\/www.flickr.com\/photos\/([^\/]*)\/([^\/]*)\/sizes\/o\//
if (url.match(regex)) {
    has_large = document.documentElement.innerHTML.includes('Large 1024')
    has_med = document.documentElement.innerHTML.includes('Medium 640')
    chrome.runtime.sendMessage({
        message: 'url_match',
        has_large: has_large,
        has_med: has_med})
}