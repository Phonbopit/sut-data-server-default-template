const router = require('express').Router()
const Event = require('../models/event')

router.get('/', (req, res) => {
  Event
    .find({})
    .then(function(data) {
      res.render('events/list', { events: data })
    }).catch(function(err) {
      res.render('test')
    })
})

router.get('/events/new', (req, res) => {
  res.render('events/new')
})

router.get('/events/:id', (req, res) => {
  const id = req.params.id

  Event.findById(id).then(function(event) {
    res.render('events/detail', { event })
  }).catch(function(err) {
    res.render('error')
  })
}) 

router.get('/events/:id/edit', (req, res) => {
  const { id } = req.params

  Event.findById(id).then(event => {
    res.render('events/edit', { event })
  }).catch(err => {
    res.render('error')
  })
})

// router.put('/events/:id')
router.post('/events/:id', async (req, res) => {
  const { id } = req.params

  const updated = {
    $set: req.body
  }

  const success = function(data) {
    res.redirect('/events/' + id)
  }
  const error = function(error) {
    res.render('error')
  }

  Event
    .findByIdAndUpdate(id, updated)
    .then(success)
    .catch(error)
})

router.post('/events', async (req, res) => {
  const payload = req.body

  // 1. Promise
  new Event(payload).save()
    .then(function(data) {
      res.redirect('/')
    })
    .catch(function(err) {
      res.render('test')
    })

  // 2. async/await
  // await new Event(payload).save()
  // res.redirect('/')
})

router.delete('/events/:id', async (req, res) => {
  const { id } = req.params

  const success = function(data) {
    res.json({ message: 'Deleted!' })
  }
  const error = function(error) {}

  Event.findByIdAndRemove(id)
    .then(success)
    .catch(error)
})

module.exports = router
