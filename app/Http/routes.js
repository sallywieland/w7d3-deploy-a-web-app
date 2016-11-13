'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.resource('/blog', 'BlogController')
// anything that comes in on /blog (route), it will be passed onto BlogController (controller)

Route.resource('/chats', 'ChatsController')
// anything that comes in on /chats (route), will be passed onto the ChatsController (controller)
Route.on('/').render('welcome')
