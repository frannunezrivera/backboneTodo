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
	        this.collection.fetch();
	    },

	    render: function () {
	        this.$el.html(this.template());

	        return this;
	    },

	    createTodo: function (event) {
	        event.preventDefault();
	        
	        var title = this.$('#new-todo').val().trim();

	        if (title) {
	        	var categories = _.map(backboneTodo.dat.CategoriesCollection.getActiveCategories(),function(categoryId) {
				  return {
				  			name: backboneTodo.dat.CategoriesCollection.findWhere({categoryId:categoryId}).get('title'),
				  			id: categoryId
				  		}
				});

	            this.collection.create(new backboneTodo.Models.TodoModel({
	                title: title,
	                categories: categories
	            }));

	            $('#new-todo').val('');
	        }
	    },

	    addTodoItem: function (todo) {
	        var view = new backboneTodo.Views.TodoView({ model: todo });
	        this.$('ul.todos').append(view.render().el);
	    },

	    addAllTodoItems: function (filtered) {
	    	this.render();
	    	if (filtered instanceof Array && filtered.length){
	        	_.each(filtered,this.addTodoItem, this);
	        }else{
	        	
	        	this.collection.fetch();
	        }
	    }
    });

})();
