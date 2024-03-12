/*** Express setup & start ***/
import * as dotenv from 'dotenv'

// Importeer het npm pakket express uit de node_modules map
import express from 'express'
// Importeer de zelfgemaakte functie fetchJson uit de ./helpers map
import fetchJson from './helpers/fetch-json.js'
// Importeer de routes
import indexRoute from './routes/index.js'
import lessonsRoute from './routes/lessons.js'
import profileRoute from './routes/profile.js'
import statisticsRoute from './routes/statistics.js'
import testingRoute from './routes/testing.js'

// 1. Opzetten van de webserver

dotenv.config()

// Stel het basis endpoint in
const apiUrl = process.env.API_URL

// Maak een nieuwe express app aan
const app = express()

// Stel ejs in als template engine
// View engine zorgt ervoor dat data die je ophaalt uit de api , waar je in je code dingen mee doet, daar html van maakt
app.set('view engine', 'ejs')

// Stel de map met ejs templates in
app.set('views', './views')

// Gebruik de map 'public' voor statische resources, zoals stylesheets, afbeeldingen en client-side JavaScript
app.use(express.static('public'))

// Zorg dat werken met request data makkelijker wordt
app.use(express.urlencoded({ extended: true }))

/*** Routes & data ***/

// 2. Routes die HTTP Request and Responses afhandelen
app.use('/', indexRoute)
app.use('/testing', testingRoute)
app.use('/lessons', lessonsRoute)
app.use('/statistics', statisticsRoute)
app.use('/profile', profileRoute)

// 3. Start de webserver

// Stel het poortnummer in waar express op moet gaan luisteren
app.set('port', process.env.PORT || 8000)

// Start express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})
