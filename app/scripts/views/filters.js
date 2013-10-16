/*global backboneTodo, Backbone, JST*/

backboneTodo.Views = backboneTodo.Views || {};

(function () {
    'use strict';

    backboneTodo.Views.FiltersView = Backbone.View.extend({

    	el: '#filters',

        template: JST['app/scripts/templates/filters.ejs'],

        initialize: function () {
	        this.render();
	        this.listenTo(this.collection, 'reset', this.addAllFilterItems);
	        //this.collection.fetch();
	        
	        this.collection.reset(
			    [
				new backboneTodo.Models.FilterModel({title:'All', value: 'all', selected: true}),
			    new backboneTodo.Models.FilterModel({title:'To do', value: 'todo', selected: false}),
			    new backboneTodo.Models.FilterModel({title:'Done', value: 'done', selected: false})]
			);
	    },

	    render: function () {
	        this.$el.html(this.template());

	        return this;
	    },

	    addFilterItem: function (filter) {
	        var view = new backboneTodo.Views.FilterView({ model: filter });
	        this.$('#filterby').append(view.render().el);
	    },

	    addAllFilterItems: function(){
	    	this.collection.each(this.addFilterItem, this);
	    }

    });

})();
