var express = require('express')
var bodyParser = require('body-parser')

var app = express()
var port = process.env.PORT || 5000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/keyboard', function (req, res) {
  var data = {
    type: 'buttons',
    buttons: ['최신 영화', '최애 영화', '흥얼흥얼']
  }
  res.json(data)
})

app.post('/message', function (req, res) {
  var msg = req.body.content
  console.log('전달 받은 키워드 : ' + msg)

  var responseMsg
  switch (msg) {
  case '최신 영화':
    responseMsg = {
      message: {
        text: '독전을 추천드려요!'
      }
    }
    break
  
  case '최애 영화':
    responseMsg = {
      message: {
        text: '아이언맨3 추천드려요!'
      }
    }
    break
  
  default:
    responseMsg = {
      message: {
        text: '흥얼흥얼 :)'
      }
    }
    break
  }

  res.json(responseMsg)
})

app.listen(port, function () {
  console.log(port + '번 포트에서 서버가 돌아가는 중..')
})
