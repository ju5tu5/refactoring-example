import * as dotenv from 'dotenv'

import express from 'express'
import fetchJson from '../helpers/fetch-json.js'

dotenv.config()

// Stel het basis endpoint in
const apiUrl = process.env.API_URL

const lessons = express.Router()

// Maak een GET route voor de lessons pagina
lessons.get('/', function (request, response) {
  Promise.all([
    fetchJson(apiUrl + '/tm_story'),
    fetchJson(apiUrl + '/tm_language'),
    fetchJson(apiUrl + '/tm_playlist'),
    fetchJson(apiUrl + '/tm_audio'),
  ]).then(([storyData, languageData, playlistData, audioData]) => {
    response.render('lessons', {
      stories: storyData.data,
      languages: languageData.data,
      playlists: playlistData.data,
      audio: audioData.data,
    })
  })
})

// Maak een GET route voor de stories pagina

lessons.get('/stories', function (request, response) {
  Promise.all([
    fetchJson(apiUrl + '/tm_story'),
    fetchJson(apiUrl + '/tm_language'),
    fetchJson(apiUrl + '/tm_playlist'),
    fetchJson(apiUrl + '/tm_audio'),
  ]).then(([storyData, languageData, playlistData, audioData]) => {
    response.render('stories', {
      stories: storyData.data,
      languages: languageData.data,
      playlists: playlistData.data,
      audio: audioData.data,
    })
  })
})

export default lessons
