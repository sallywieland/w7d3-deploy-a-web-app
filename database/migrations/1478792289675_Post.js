'use strict'

const Schema = use('Schema')

class PostsTableSchema extends Schema {
// migration --> TABLE connected to Post.js --> automatically names it plural
  up () {
    this.create('posts', (table) => {
      table.increments() // creates primary key
      table.string('author') // default length for .string --> 255 character limit
      table.string('headline') // can add a second argument, an integer, to specify a longer length if necessary
      table.text('body') // default length for .text --> 64,000 character length
      table.string('image') // can add a .unique() to these --> mostly used with usernames
      table.timestamps()
    })
  }

  down () {
    this.drop('posts')
  }

}

module.exports = PostsTableSchema
