let messages = []

let id = 0

function addMessages(req, res){
    const {text, time} = req.body

    messages.push({
        text,
        time,
        id
    })

    id++

    res.status(200).json(messages)
}

function readMessages(req, res){
    res.status(200).json(messages)
}

function updateMessages(req, res){
    const {id} = req.params
    const {text} = req.body

    const index = messages.findIndex(ele => ele.id == id)

    messages[index].text = text

    res.status(200).json(messages)
}

function deleteMessages(req, res){
    const {id} = req.params

    const index = messages.findIndex(ele => ele.id == id)
    
    messages.splice(index, 1)

    res.status(200).json(messages)
}

module.exports = {
    addMessages,
    readMessages,
    updateMessages,
    deleteMessages
}