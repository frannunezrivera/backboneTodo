/*global backboneTodo, Backbone, JST*/

backboneTodo.Views = backboneTodo.Views || {};

(function () {
    'use strict';

    backboneTodo.Views.TodosView = Backbone.View.extend({

       el: '#todo-app',

	    template: JST['app/scripts/templates/todos.ejs'],

	    templateStats: JST['app/scripts/templates/stats.ejs'],

	    events: {
	        'submit': 'createTodo',
	        'click #removeDone': 'clearDone'
	    },

	    initialize: function () {
	    	this.render();
	        this.listenTo(this.collection, 'add', this.addTodoItem);
	        this.listenTo(this.collection, 'reset', this.addAllTodoItems);
	        this.collection.fetch();
	        this.renderStats();
	        
	    },

	    render: function () {

	        this.$el.html(this.template());
	        

	        return this;
	    },

	    renderStats: function(){

	    	var todoCounter = this.collection.filterByToDo().length;
	    	var doneCounter = this.collection.filterByDone().length;

	    	this.$('#counters').html(this.templateStats({todo: todoCounter, done: doneCounter}));
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

	        this.renderStats();

	    },

	    clearDone: function () {
			_.invoke(backboneTodo.dat.TodosCollection.filterByDone(), 'destroy');
			return false;
		}

    });

})();
