const express = require('express');
const request = require('request');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, './')));
app.use('/api', (req, res) => {
    let search = [];
    for (let k in req.query) {
        let a = k + '=' + req.query[k]
        search.push(a)
    }
    search = search.length ? '' : '?' + search.join('&')
    let url = 'http://api.guangyizhou.cn' + req.url + search
    request({
        uri: url,
        method: req.method,
        json: true
    }, (_err, _res, result) => {
        if (_err) {
            res.json({ code: 0, data: {} })
        } else {
            res.json(result)
        }
    })
})
app.listen(8787, () => {
    console.log(`vue ssr started at http://127.0.0.1:8787`)
})