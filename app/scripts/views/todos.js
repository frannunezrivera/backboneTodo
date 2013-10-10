/*global backboneTodo, Backbone, JST*/

backboneTodo.Views = backboneTodo.Views || {};

(function () {
    'use strict';

    backboneTodo.Views.TodosView = Backbone.View.extend({

       el: '#todo-app',

	    template: JST['app/scripts/templates/todos.ejs'],

	    events: {
	        'submit': 'createTodo'
	    },

	    initialize: function () {
	        
	        this.render();

	        this.listenTo(this.collection, 'add', this.addTodoItem);
	        this.listenTo(this.collection, 'reset', this.addAllTodoItems);
	        this.listenTo(this.collection, 'sync', this.test);
	        this.collection.fetch();
	    },

	    test: function() {
	    	debugger;
	    	console.log(this.collection.where({category: 0}));
	    },

	    render: function () {
	        this.$el.html(this.template());

	        return this;
	    },

	    createTodo: function (event) {
	        event.preventDefault();
	        
	        var title = this.$('#new-todo').val().trim();

	        if (title) {
	            this.collection.create(new backboneTodo.Models.TodoModel({
	                title: title
	            }));

	            $('#new-todo').val('');
	        }
	    },

	    addTodoItem: function (todo) {
	        var view = new backboneTodo.Views.TodoView({ model: todo });
	        this.$('ul').append(view.render().el);
	    },

	    addAllTodoItems: function () {
	        this.collection.each(this.addTodoItem, this);

	    }

    });

})();
