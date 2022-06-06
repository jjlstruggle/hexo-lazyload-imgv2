# hexo-lazyload-image

**hexo-lazyload-imgv2** is a hexo plugin which is used to have all images support lazyload automatically. With the help of this functionality, it will improve lots of the loading proformance..

## Install

```bash
$ npm install hexo-lazylaod-imagev2 --save
```

or

```bash
$ yarn add hexo-lazylaod-imagev2 --save
```

## Usage

First add configuration in `_config.yml` from your hexo project.

```yaml
lazyload:
  enable: true
  onlypost: false # optional
  loadingImg: # required eg ./images/loading.gif
  preloadRatio: 1 # 0-1 默认为1 这个是图片与视口交叉阈值
```

**onlypost**

- If true, only the images from post or page will support lazy-load.
- If false, the whole images of your site will use lazy-load, including the images dist from your theme, but not including the background images from CSS style.

**loadingImg**

- If you keep the value nothing (by default), then it will no work.
- you need to copy your loading image to your current theme image folder and then change this path to find it.

**preloadRatio**
This is the image and viewport cross threshold

### specify **no-lazy** for specify image

we can also disable the lazy process if specify a attribute on img tag in both markdown or html

```
<img no-lazy src="abc.png" />
```

## License

MIT
