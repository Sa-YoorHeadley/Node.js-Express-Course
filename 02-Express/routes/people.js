const express = require('express')
const router = express.Router()
const {getPeople, createPerson, createPersonPostman, updatePerson, deletePerson} = require('../controllers/people.js')


//GET
router.get('/', getPeople)

//POST
router.post('/', createPerson)

router.post('/postman', createPersonPostman)

//PUT
router.put('/:id', updatePerson)

//DELETE
router.delete('/:id', deletePerson)

module.exports = router