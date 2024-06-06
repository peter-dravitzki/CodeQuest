import express from 'express'
import * as db from '../db/connection.ts'

const router = express.Router()
//Create
//router.post

//Read all
router.get('/', async (req, res, next) => {
  try {
    const questions = await db.getAllQuestions()
    res.json(questions)
  } catch (error) {
    next(error)
  }
})

//Read by id
router.get('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id)
    const question = await db.getQuestionById(id)
    res.json({ question })
  } catch (error) {
    next(error)
  }
})

//Update

//Delete
export default router
