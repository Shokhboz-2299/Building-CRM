const express = require('express')
const app = express()
const cors = require('cors')
const { PORT } = require('./config')

app.use(express.json())
app.use(cors())
app.use(require('./modules'))


app.listen(PORT || process.env.PORT, console.log(PORT))