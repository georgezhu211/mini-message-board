var express = require('express')
var router = express.Router()

// sample messages
const messages = [
  {
    text: 'Hello World!',
    user: 'stranger1',
    added: new Date(),
  },
  {
    text: 'Nice too meet you',
    user: 'stranger2',
    added: new Date(),
  },
  {
    text: 'Goodbye World!',
    user: 'stranger3',
    added: new Date(),
  },
]
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { messages: messages })
})

router.get('/new', function (req, res, next) {
  res.render('form')
})

router.post('/new', function (req, res, next) {
  const name = req.body.author
  const message = req.body.message
  messages.push({
    text: message,
    user: name,
    added: new Date(),
  })
  res.redirect('/')
})

module.exports = router
