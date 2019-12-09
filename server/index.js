const express = require('express')
const app = express()
const { addMessages, readMessages, updateMessages, deleteMessages } = require('./controllers/message_controller')

app.use(express.json())
app.use(express.static(__dirname + '/../public/build'))

const baseUrl = '/api/messages'

app.post(baseUrl, addMessages)

app.get(baseUrl, readMessages)

app.put(`${baseUrl}/:id`, updateMessages)

app.delete(`${baseUrl}/:id`, deleteMessages)



const port = 3001 

app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})