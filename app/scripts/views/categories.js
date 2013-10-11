/*global backboneBlog, Backbone, JST*/

backboneTodo.Views = backboneTodo.Views || {};

(function () {
    'use strict';

    backboneTodo.Views.CategoriesView = Backbone.View.extend({

    	el: '#menu',

	    template: JST['app/scripts/templates/categories.ejs'],

	    initialize: function () {
	        this.render();
	        this.listenTo(this.collection, 'reset', this.addAllCategoriesItems);
	        //this.collection.fetch();
	        
	        this.collection.reset(
			    [
				new backboneTodo.Models.CategoryModel({title:'Personal', "categoryId": 0}),
			    new backboneTodo.Models.CategoryModel({title:'Work', "categoryId": 1}),
			    new backboneTodo.Models.CategoryModel({title:'Important', "categoryId": 2}),
			    new backboneTodo.Models.CategoryModel({title:'Shopping', "categoryId": 3})]
			);
	    },

	    render: function () {
	        this.$el.html(this.template());

	        return this;
	    },

	    addCategoryItem: function (category) {

	        var view = new backboneTodo.Views.CategoryView({ model: category });
	        this.$('#categories').append(view.render().el);
	    },

	    addAllCategoriesItems: function(){
	    	this.collection.each(this.addCategoryItem, this);
	    }

    });

})();
