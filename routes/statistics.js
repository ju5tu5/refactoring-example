import * as dotenv from 'dotenv'

import express from 'express'
import fetchJson from '../helpers/fetch-json.js'

dotenv.config()

// Stel het basis endpoint in
const apiUrl = process.env.API_URL

const statistics = express.Router()

statistics.get('/', function (request, response) {
  response.send('statistics')
})

export default statistics
