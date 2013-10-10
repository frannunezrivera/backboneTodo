/*global backboneBlog, Backbone, JST*/

backboneTodo.Views = backboneTodo.Views || {};

(function () {
    'use strict';

    backboneTodo.Views.CategoriesView = Backbone.View.extend({

    	el: '#menu',

	    template: JST['app/scripts/templates/categories.ejs'],

	    initialize: function () {
	        this.render();
	        this.listenTo(this.collection, 'sync', this.addAllCategoriesItems);
	        this.collection.fetch();
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
