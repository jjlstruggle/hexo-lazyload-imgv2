(function (window) {

    var preloadRatio = window.imageLazyLoadSetting.preloadRatio || 1;
    var images = Array.from(document.querySelectorAll('img[data-src]'))

    const io = new IntersectionObserver(function (entries) {
        entries.forEach(entrie => {
            const { isIntersecting, target } = entrie
            const originSrc = target.getAttribute('data-src')
            const loadingImage = target.src
            if (isIntersecting) {
                let img = new Image()
                img.src = originSrc
                img.onload = () => {
                    target.src = originSrc
                }
            } else {
                target.src = loadingImage
            }
        })
    }, {
        threshold: 1 - preloadRatio
    })

    images.forEach(image => io.observe(image))

})(this);

function imgFix() {
    let codeImageBoxs = Array.from(document.querySelectorAll('.img-item'))
    codeImageBoxs.forEach(codeImageBox => {
        let img = codeImageBox.childNodes[0]
        let src = img.getAttribute('data-src')
        codeImageBox.setAttribute('data-src', src)
    })
    window.removeEventListener('load', imgFix)
}

window.addEventListener('load', imgFix)