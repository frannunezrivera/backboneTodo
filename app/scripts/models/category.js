/*global backboneTodo, Backbone*/

backboneTodo.Models = backboneTodo.Models || {};

(function () {
    'use strict';

    backboneTodo.Models.CategoryModel = Backbone.Model.extend({
    	defaults: {
	        title: '',
	        categoryId: 0
	    },
    });

})();
