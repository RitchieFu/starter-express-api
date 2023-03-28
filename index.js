const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})

app.get("/test", (req, res) => {
    res.send('what??')
})

app.get("/envtest", (req, res) => {
    res.send(process.env.CYCLIC_APP_ID)
})
app.listen(process.env.PORT || 3000)