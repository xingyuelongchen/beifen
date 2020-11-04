if (!(/(iPhone|Android)/.test(window.navigator.appVersion))) {
    window.location.href = 'http://www.guangyizhou.cn' + window.location.pathname + window.location.search
}
window.url = 'http://www.guangyizhou.cn'
// window.url = 'http://192.168.0.10'
const AutoRem = 10.80;
(function (AutoRem) {
    let rootEl = document.documentElement;
    let metaEl = document.querySelector('meta[name="viewport"]');
    let dpr = window.devicePixelRatio || 1;
    let rem = rootEl.clientWidth * dpr / AutoRem;
    let scale = (1 / dpr).toFixed(2);
    metaEl.setAttribute('content', 'width=' + dpr * rootEl.clientWidth + ',initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale + ',user-scalable=no');
    rootEl.setAttribute('data-dpr', dpr);
    rootEl.setAttribute('style', 'font-size:' + rem.toFixed(2) + 'px!important;');
    window.rem2px = function (v) {
        v = parseFloat(v);
        return v * rem;
    };
    window.px2rem = function (v) {
        v = parseFloat(v);
        return v / rem;
    };
})(AutoRem);

var bp = document.createElement('script');
var curProtocol = window.location.protocol.split(':')[0];
if (curProtocol === 'https') {
    bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
} else {
    bp.src = 'http://push.zhanzhang.baidu.com/push.js';
}
var s = document.getElementsByTagName("script")[0];
s.parentNode.insertBefore(bp, s);
