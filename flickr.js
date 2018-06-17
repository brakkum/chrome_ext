url = window.location.toString()
regex = /https?:\/\/www.flickr.com\/photos\/([^\/]*)\/([^\/]*)\/sizes\/[okh]\//
if (url.match(regex)) {
    pic = document.getElementById('allsizes-photo')
    pic.children[0].style.width = '90%'
}