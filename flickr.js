url = window.location.toString()
regex = /https?:\/\/www.flickr.com\/photos\/([^\/]*)\/([^\/]*)\/sizes\/o\//
if (url.match(regex)) {
    chrome.runtime.sendMessage({message: 'url_match'})
}
