import express from 'express'

const ipLocate =  require("node-iplocate")

const app = express()

const port = 1999


app.get('/api/hello', async (req: express.Request, res: express.Response) => {

  const client = req.query.visitor_name

  let fetch_res = await fetch(`https://ipapi.co/${req.ip}/json/`);
  let fetch_data = await fetch_res.json()

  const result = await ipLocate('197.210.227.111')

  console.log(result)

  res.json({
    "client_ip": req.ip,
    "location": result.city,
    "greeting": `Hello, ${client}!, the temperature is 11 degrees Celcius in ${result.city}`
  })
})


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})