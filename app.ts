import express = require('express')

const ipLocate =  require("node-iplocate")

const app: express.Application = express()

const port = 1999


app.get('/api/hello', async (req: express.Request, res: express.Response) => {

  const client = req.query.visitor_name

  const result = await ipLocate(req.socket.remoteAddress)

  res.json({
    "client_ip": req.ip,
    "location": result.city,
    "greeting": `Hello, ${client}!, the temperature is 11 degrees Celcius in ${result.city}`
  })
})


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})