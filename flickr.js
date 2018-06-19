url = window.location.toString()
regex = /https?:\/\/www.flickr.com\/photos\/([^\/]*)\/([^\/]*)\/sizes\/\w+\//
if (url.match(regex)) {
    pic = document.getElementById('allsizes-photo')
    for (i = 0; i < pic.children.length; i++) {
        if (pic.children[i].src) {
            pic.children[i].style.width = '100%'
        }
    }
}