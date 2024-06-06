import express from 'express'
import * as Path from 'node:path'
import correctAnswerRoutes from './routes/correct_answers'
import falseAnswersRoutes from './routes/false_answers'
import questionsRoutes from './routes/questions'

const server = express()

server.use(express.json())

server.use('/api/v1/correct_answer', correctAnswerRoutes)
server.use('/api/v1/false_answers', falseAnswersRoutes)
server.use('/api/v1/questions', questionsRoutes)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
