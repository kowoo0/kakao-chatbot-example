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
  var responseMsg
  switch (msg) {
  case '최신 영화':
    responseMsg = {
      message: {
        text: '현재 1위를 달리는 최신 영화입니다 :)',
        photo: {
          url: 'http://imgnews.naver.com/image/382/2018/05/22/0000647846_001_20180522070018869.jpg',
          width: 600,
          height: 418
        },
        message_button: {
          label: '예고편 확인',
          url: 'https://youtu.be/QKWlXvt9x7c'
        }
      }
    }
    break
  
  case '최애 영화':
    responseMsg = {
      message: {
        text: '가장 재미있게 본 영화입니다 :)',
        photo: {
          url: 'http://cafefiles.naver.net/20130412_293/sw210_1365774948507QJbII_JPEG/-939269668.jpg',
          width: 420,
          height: 262
        },
        message_button: {
          label: '명장면 확인',
          url: 'https://youtu.be/AIhJvXPZH6U'
        }
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
