const router = require('express').Router()
const Event = require('../models/event')

router.get('/', (req, res) => {
  res.render('events', {})
})

router.get('/events/new', (req, res) => {
  res.render('events/new')
})

router.get('/events/:id', (req, res) => {
  res.render('events/detail', {})
})

router.get('/events/:id/edit', (req, res) => {
  res.render('events/edit', {})
})

// router.put('/events/:id')
router.post('/events/:id', async (req, res) => {
  // TODO
})

router.post('/events', async (req, res) => {
  // TODO
})

router.delete('/events/:id', async (req, res) => {
  // TODO
})

module.exports = router
