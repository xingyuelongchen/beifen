const express = require('express');
const request = require('request');
const app = express();
const PATH = require('path');
const fs = require('fs');
app.use(express.static(PATH.join(__dirname, './')));
app.use('/js', (req, res) => {
    ex('/js', req, res)
})
app.use('/images', (req, res) => {
    ex('/images', req, res)
})
app.use('/css', (req, res) => {
    ex('/css', req, res)
})


app.listen(9000, () => {
    console.log(`vue ssr started at http://127.0.0.1:9000`)
})

function ex(path, req, res) {
    let search = [];
    for (let k in req.query) {
        let a = k + '=' + req.query[k]
        search.push(a)
    }
    search = search.length ? '' : '?' + search.join('&')
    let url = 'http://ds.dianqihang.cn/' + path + req.url + search;
    request({
        uri: url,
        method: req.method,
        encoding: 'binary'
    }, (_err, _res, result) => {
        if (!_err) {
            res.send(result);
            save('.' + path + req.url, result);

        }
    })
}

function save(path, str) {
    path = path.replace(/\/?$/, '')
    console.log('asdf:', path);
    if (!createDir(path)) return;
    path = path.replace(/\?[\w=\d\.]+$/, '')
    fs.writeFileSync(path, str, 'binary')
}
function createDir(path) {
    if (!path) return false;
    path = path.replace(/\/[\w_\.\?\=\w\d]+$/, '');
    let pathArr = PATH.normalize(path).split('\\');
    let a = '';
    pathArr.forEach(e => {
        a += e;
        if (!fs.existsSync(a)) {
            fs.mkdirSync(a)
        }
        a += '\\';
    })
    return true
}