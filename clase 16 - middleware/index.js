import express from 'express'
import { appendFile } from 'fs'

const app = express()
const PORT = process.env.PORT ||3001


app.use((_req, res, next) => {
  const start = Date.now()
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`Response time for the request was of ${duration}ms`)
  })
  next()
})

app.use((req, res, next) => {
  const originalSend = res.send
  res.send = (body) => {
    const log = `${new Date().toISOString()} - ${req.method} ${req.originalUrl} ${res.statusCode}\n`
    appendFile('request.txt', log, (err) => {
      if (err) {
        console.error('Error writing to file', err)
      }
    })
    originalSend.apply(res, arguments)
  }
  next()
})

app.get('/', (req, res) => {
  res.send("Hello world")
})

app.listen(PORT, () => {
  console.log(`APP RUNNING ON PORT ${PORT} ...`)
})