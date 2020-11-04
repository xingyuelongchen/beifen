if (/(iPhone|Android)/.test(window.navigator.appVersion)) {
    window.location.href = 'http://m.guangyizhou.cn' + window.location.pathname + window.location.search
}

window.url = 'http://api.guangyizhou.cn';
// window.url = 'http://192.168.0.10';
var bp = document.createElement('script');
var curProtocol = window.location.protocol.split(':')[0];
if (curProtocol === 'https') {
    bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
}
else {
    bp.src = 'http://push.zhanzhang.baidu.com/push.js';
}
var s = document.getElementsByTagName("script")[0];
s.parentNode.insertBefore(bp, s);