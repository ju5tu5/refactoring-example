import * as dotenv from 'dotenv'

import express from 'express'
import fetchJson from '../helpers/fetch-json.js'

dotenv.config()

// Stel het basis endpoint in
const apiUrl = process.env.API_URL

const testing = express.Router()

testing.get('/', function (request, response) {
  response.send('testing')
})

export default testing
