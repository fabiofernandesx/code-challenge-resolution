import express, { json } from 'express'
import cors from 'cors'

const app = express()

const port = 7001

app.use(json())
app.use(cors())

app.get('/', (_, res) => {
  res.json({ message: 'Easiest API ever' })
})

app.listen(port, () => {
  console.log(`Server running at port: ${port}`)
})
