import express = require('express')

const ipLocate =  require("node-iplocate")

const app: express.Application = express()

const port = 1999


app.get('/api/hello', async (req: express.Request, res: express.Response) => {

  try{
    const client = req.query.visitor_name

    const ip_address = req.headers['x-real-ip'] || req.connection.remoteAddress;
  
    const result = await ipLocate(ip_address)
  
    res.json({
      "client_ip": req.ip,
      "location": result.city,
      "greeting": `Hello, ${client}!, the temperature is 10 degrees Celcius in ${result.city}`
    })
  }
  catch(err){
    console.log(err)
  }
})


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})