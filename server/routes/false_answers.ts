import express from 'express'
import * as db from '../db/connection.ts'

const router = express.Router()
//Create

//Read all
router.get('/', async (req, res, next) => {
  try {
    const false_answers = await db.getAllFalseAnswers()
    res.json({ false_answers })
  } catch (error) {
    next(error)
  }
})
//Read by id
router.get('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id)
    const false_answer = await db.getFalseAnswerById(id)
    res.json({ false_answer })
  } catch (error) {
    next(error)
  }
})

//Update

//Delete
export default router
