(function (window) {
    window.imageLazyLoadSetting.processImages = processImages;

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
                    el.src = originSrc
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
