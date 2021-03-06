/*global backboneBlog, Backbone, JST*/

backboneTodo.Views = backboneTodo.Views || {};

(function () {
    'use strict';

    backboneTodo.Views.CategoryView = Backbone.View.extend({

    	tagName: 'li',
    	className: 'clickable',

	    template: JST['app/scripts/templates/category.ejs'],

	    events: {
	    	'click': 'toggle'
	    },

	    initialize: function () {
	        this.listenTo(this.model, 'change', this.render);
	    },

	    render: function () {
	        this.$el.html(this.template(this.model.toJSON()));
	        this.$el.addClass("category-" + this.model.get('title'));

	        return this;
	    },

	    toggle : function(){
	    	
	    	this.model.toggle();
	    	this.$el.toggleClass("active");
	    	
	    	var ActiveCat = backboneTodo.dat.CategoriesCollection.getActiveCategories();
	    	if (ActiveCat.length){
	    		backboneTodo.dat.TodosView.addAllTodoItems(backboneTodo.dat.TodosCollection.filterByCategoryIds(ActiveCat));
	    	}else{
	    		backboneTodo.dat.TodosCollection.reset(backboneTodo.dat.TodosCollection);
	    	}
	    },

    });

})();
