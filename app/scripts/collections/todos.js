/*global backboneTodo, Backbone*/

backboneTodo.Collections = backboneTodo.Collections || {};

(function () {
    'use strict';

    backboneTodo.Collections.TodosCollection = Backbone.Collection.extend({
    	localStorage: new Backbone.LocalStorage('backbone-generator-todos'),
        initialize: function () {
       		this.model = backboneTodo.Models.TodoModel;
    	}
    });

})();
