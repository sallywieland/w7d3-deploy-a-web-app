'use strict'

const Post = use('App/Model/Post')
// importing MODEL to use here

class BlogController {

  * index(request, response) {
    var allPosts = yield Post.query().select('*').orderBy('id', 'desc')

    yield response.sendView('posts', {
      posts: allPosts // this connects to the var name above
    })
  }

  * create(request, response) {
    yield response.sendView('create')
    // similar to express when we did response.render()
  }

  * store(request, response) {
    // response.json(request.all())
    // .all takes all the input and spits it out as an object as JSON data.
    var post = new Post() // creates new post object
    post.author = request.input('author') // setting properties to the object
    post.headline = request.input('headline') // mapping properties to new post object
    post.body = request.input('body')

    yield post.save() // saves to table

    response.redirect('/blog/create')
  }

  * show(request, response) {
    var singlePost = yield Post.find(request.param('id'))

    yield response.sendView('post', {
      post: singlePost
    })
  }

  * edit(request, response) {
    //
  }

  * update(request, response) {
    //
  }

  * destroy(request, response) {
    //
  }

}

module.exports = BlogController
