var express = require('express')
var app = express()

var port = process.env.PORT || 5000

app.get('/keyboard', function (req, res) {
  var data = {
    type: 'buttons',
    buttons: ['최신 영화', '최애 영화', '흥얼흥얼']
  }
  res.json(data)
})

app.listen(port, function () {
  console.log(port + '번 포트에서 서버가 돌아가는 중..')
})
