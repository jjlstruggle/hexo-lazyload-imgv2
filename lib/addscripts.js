
const fs = require('hexo-fs');
const UglifyJS = require('uglify-js');
const lazyLoadPath = __dirname + '/simple-lazyload.js';

module.exports.addScript = function (htmlContent) {
    let injectSetting = function () {
        return `<script>
            window.imageLazyLoadSetting = {
                preloadRatio: ${this.config.lazyload.preloadRatio || 1},
                processImages: null,
            };
        </script>`;
    };
    let injectExtraScript = function (filePath) {
        if (!fs.exists(filePath)) throw new TypeError(filePath + ' not found!');
        let sourceCode = fs.readFileSync(filePath, { escape: true });
        return '<script>' + UglifyJS.minify(sourceCode).code + '</script>';
    };
    let appendScript = function (content, htmlContent) {
        let lastIndex = htmlContent.lastIndexOf('</body>');
        return htmlContent.substring(0, lastIndex) + content + htmlContent.substring(lastIndex, htmlContent.length);
    };
    if (/<\/body>/gi.test(htmlContent)) {
        htmlContent = appendScript(injectSetting.bind(this)(), htmlContent);
        htmlContent = appendScript(injectExtraScript(lazyLoadPath), htmlContent);
    }
    return htmlContent;
};