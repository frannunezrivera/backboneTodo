/*global backboneTodo, Backbone*/

backboneTodo.Collections = backboneTodo.Collections || {};

(function () {
    'use strict';

    backboneTodo.Collections.FiltersCollection = Backbone.Collection.extend({
        localStorage: new Backbone.LocalStorage('backbone-generator-todos-filters'),
    	model: backboneTodo.Models.FilterModel,
        initialize: function () {
        	
    	}

    });

})();
