'use strict'

const Pusher = require('pusher')
const Chat = use('App/Model/Chat')

class ChatsController {

  * index(request, response) {
    var chats = yield Chat.query().orderBy('id','desc') // orders the messages coming in by id in descending order, so that newest chat added shows up on top)
    yield response.sendView('chats', { // sendView refers to chats.njk (what is seen on browser)
      chats: chats // this connects with the variable named stated above
    })
  }

  * store(request, response) {
    var message = request.input('message') // connects message to the chats.njk file --> {{ chat.message }}

    var pusher = new Pusher({ // Pusher boiler plate?
      appId: '131622',
      key: '6e5f67bde794d28881ed',
      secret: 'cc5ab615a7d0aa9056c4',
      encrypted: true
    })

    pusher.trigger('chat_app', 'new_chat', {
      message: message
    })

    var chat = new Chat() // creates new chat object
    chat.message = message // mapping property to new chat object
    yield chat.save() // stores and saves new message to table it's connected to.

    response.json(true)
  }
}

module.exports = ChatsController
