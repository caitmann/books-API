const router = require('express').Router()
const db = require('../models/book.js')

router.get('/seed', (req, res) => {
    db.insertMany([{
        "title": "The Shinobi Initiative",
        "description": "The reality-bending adventures of a clandestine service agency in the year 2166",
        "year": 2014,
        "quantity": 10,
        "imageURL": "https://imgur.com/LEqsHy5.jpeg"
      },
      {
        "title": "Tess the Wonder Dog",
        "description": "The tale of a dog who gets super powers",
        "year": 2007,
        "quantity": 3,
        "imageURL": "https://imgur.com/cEJmGKV.jpg"
      },
      {
        "title": "The Annals of Arathrae",
        "description": "This anthology tells the intertwined narratives of six fairy tales.",
        "year": 2016,
        "quantity": 8,
        "imageURL": "https://imgur.com/VGyUtrr.jpeg"
      },
      {
        "title": "Wâˆ€RP",
        "description": "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
        "year": 2010,
        "quantity": 4,
        "imageURL": "https://imgur.com/qYLKtPH.jpeg"
      }])
        .then(res.status(200).json({
            message: 'Seed successful'
        }))
        .catch(res.status(400).json({
            message: 'Seed unsuccessful'
        }))
})

router.get('/', (req, res) => {
    db.find()
    .then((books) => {
        res.status(200).json(books)
    })
    .catch(err => {
        res.status(404).send('Not Found!')
    })
})

router.get('/:id', (req, res) => {
    db.findById(req.params.id)
    .then(book => {
        res.status(200).json(book)
    })
    .catch(err => {
        res.status(404).send('Not Found!')
    })
})

router.put('/:id', (req, res) => {
    db.findByIdAndUpdate(req.params.id, req.body)
    .then((book) => {
        res.status(200).json(book)
    })
    .catch(err => {
        res.status(400).send('Bad Request')
    })
})

router.delete('/:id', (req, res) => {
    db.findByIdAndDelet(req.params.id)
    .then(book => {
        res.status(200).json({
            message: 'Book deleted successfully.'
        })
    })
    .catch(err => {
        res.status(400).send('Bad Request')
    })
})

router.post('/', (req, res) => {
    db.create(req.body)
    .then((book) => {
        res.status(200).json(book)
    })
    .catch(err => {
        res.status(400).send('Bad Request')
    })
})

module.exports = router