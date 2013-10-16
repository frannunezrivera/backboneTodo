/*global backboneTodo, Backbone, JST*/

backboneTodo.Views = backboneTodo.Views || {};

(function () {
    'use strict';

    backboneTodo.Views.TodoView = Backbone.View.extend({

        tagName: 'li',

	    template: JST['app/scripts/templates/todo.ejs'],

	    events: {
	        'click input[type="checkbox"]': 'toggle',
	        'dblclick': 'toggleEdit',
	        'click span.icon-trash': 'removeTodo',
	        'submit form': 'toggleEdit',
	        'click ul.todo-categories-edit li': 'removeCategory',
	        //'blur input[type="text"]': 'toggleEdit'
	    },

	    initialize: function () {
	        this.listenTo(this.model, 'change', this.render);
	    },

	    render: function () {
	        this.$el.html(this.template(this.model.toJSON()));

	        return this;
	    },

	    toggle: function () {
	        this.model.toggle();
	    },

	    toggleEdit: function (e) {
	        var input = this.$('form input');
	        var title = input.val().trim();

	        if (!title) {
	            this.removeTodo();
	            return;
	        }

	        this.$el.toggleClass('editing');
	        this.$('.todo-categories').toggleClass('hide');
	        this.$('.todo-categories-edit').slideToggle();

	        if (title === this.model.get('title')) {
	            // Edit mode.
	            input.val(title);
	            input.focus();
	        } else {
	            // Done editing.
	            this.model.set('title', title);

	            this.model.save();

	            this.render();
	        }
	    },

	    removeCategory: function(e){
	    	_.each(this.model.get('categories'), function(category, index){
	    		if (category.id === this.$(e.currentTarget).data('id')){
	    			this.model.get('categories').splice(index,1);
	    		}
	    	},this);

	    	this.model.save();
	    	this.toggleEdit();
	    	this.render();
	    },

	    removeTodo: function(){
	    	this.model.destroy();
	        this.remove();
	        this.render();
	    }

    });

})();
