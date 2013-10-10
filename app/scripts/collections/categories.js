/*global backboneBlog, Backbone*/

backboneTodo.Collections = backboneTodo.Collections || {};

(function () {
    'use strict';

    backboneTodo.Collections.CategoriesCollection = Backbone.Collection.extend({
    	model: backboneTodo.Models.CategoryModel,
    	url: "../data/categories.json",
        initialize: function () {
    	}

    });

})();
