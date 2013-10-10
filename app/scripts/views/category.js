/*global backboneBlog, Backbone, JST*/

backboneTodo.Views = backboneTodo.Views || {};

(function () {
    'use strict';

    backboneTodo.Views.CategoryView = Backbone.View.extend({

    	tagName: 'button',
    	className: 'btn btn-default',

	    template: JST['app/scripts/templates/category.ejs'],

	    events: {
	    	'click': 'toggle'
	    },

	    initialize: function () {
	        this.listenTo(this.model, 'change', this.render);
	    },

	    render: function () {
	        this.$el.html(this.template(this.model.toJSON()));

	        return this;
	    },

	    toggle : function(){
	    	this.$el.toggleClass("active");
	    	debugger;
	    	var TodosCollection = new backboneTodo.Collections.TodosCollection();
	    	TodosCollection.where({category: 0});
	    	
	    	console.log(TodosCollection.where({category: 0}));
	    }

    });

})();
