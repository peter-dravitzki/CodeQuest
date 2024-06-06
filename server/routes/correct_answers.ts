import express from 'express'
import * as db from '../db/connection.ts'

const router = express.Router()
//Create
//STRETCH

//Read all
router.get('/', async (req, res, next) => {
  try {
    const correct_answers = await db.getAllCorrectAnswers()
    res.json({ correct_answers })
  } catch (error) {
    next(error)
  }
})

//Read by id
router.get('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id)
    const correct_answer = await db.getCorrectAnswerById(id)
    res.json({ correct_answer })
  } catch (error) {
    next(error)
  }
})

//Update

//Delete
export default router
