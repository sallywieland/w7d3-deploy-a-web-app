var userChat = document.getElementById('message')

// Pusher Setup
var pusher = new Pusher('6e5f67bde794d28881ed', {
  encrypted: true
})

var pusherChannel = pusher.subscribe('chat_app')

pusherChannel.bind('new_chat', function(chat) {
  addChatMessage(chat)
})

userChat.addEventListener('keypress', pressEnter)
function pressEnter(event) {
  if (event.key === 'Enter'){
    updateMessages()
  }
}

function updateMessages() {
  fetch('/chats', {
    body: JSON.stringify({
      message: userChat.value // grabbing the value that's entered into the text input box.
    }),
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  userChat.value = '' // clears value in text input box.
}

function addChatMessage(chat) {
  var newMessages = document.createElement('li') // creating new li for new message instance --> why we are repeating what is already stated in the chats.njk file
  newMessages.classList.add('list-group-item') // adding class to to li element
  newMessages.innerHTML = chat.message // setting innerHTML to li element to the messages being sent in ({{ chat.message }})
  parentDiv = document.getElementById('messages') // grabbing the parent UL element
  var child = parentDiv.firstChild // setting child variable to return the first child of messages UL (what is appearing already in the chats.njk file)
  parentDiv.insertBefore(newMessages, child)
  // insertBefore method inserts the new instance of the li element (newMessages) BEFORE the existing first child of the UL (child)
  console.log(chat)
}
