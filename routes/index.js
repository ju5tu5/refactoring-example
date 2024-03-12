import * as dotenv from 'dotenv'

import express from 'express'
import fetchJson from '../helpers/fetch-json.js'

dotenv.config()

// Stel het basis endpoint in
const apiUrl = process.env.API_URL

const index = express.Router()

index.get('/', function (request, response) {
  Promise.all([
    // Fetch data from all endpoints concurrently using Promise.all()
    fetchJson(apiUrl + '/tm_story'), // Fetch data from the tm_story endpoint
    fetchJson(apiUrl + '/tm_language'), // Fetch data from the tm_language endpoint
    fetchJson(apiUrl + '/tm_playlist'), // Fetch data from the tm_playlist endpoint
    fetchJson(apiUrl + '/tm_audio'), // Fetch data from the tm_audio endpoint
  ]).then(([storyData, languageData, playlistData, audioData]) => {
    // After all promises are resolved, this function will be executed with the fetched data

    // Render the 'index.ejs' template and pass all fetched data to the view
    response.render('index', {
      stories: storyData.data, // Pass fetched story data to the view under the 'stories' key
      languages: languageData.data, // Pass fetched language data to the view under the 'languages' key
      playlists: playlistData.data, // Pass fetched playlist data to the view under the 'playlists' key
      audio: audioData.data,
    }) // Pass fetched audio data to the view under the 'audio' key
  })
})

export default index
