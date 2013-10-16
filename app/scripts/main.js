/*global Projects, $*/


window.backboneTodo = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';

        backboneTodo.dat = backboneTodo.dat || {};
        backboneTodo.dat.CategoriesCollection = new this.Collections.CategoriesCollection();
        backboneTodo.dat.CategoriesView = new this.Views.CategoriesView({
            collection: backboneTodo.dat.CategoriesCollection
        });

        backboneTodo.dat = backboneTodo.dat || {};
        backboneTodo.dat.FiltersCollection = new this.Collections.FiltersCollection();
        backboneTodo.dat.FiltersView = new this.Views.FiltersView({
            collection: backboneTodo.dat.FiltersCollection
        });


        backboneTodo.dat.TodosCollection = new this.Collections.TodosCollection();
        backboneTodo.dat.TodosView = new this.Views.TodosView({
            collection: backboneTodo.dat.TodosCollection
        });

    }
};

$(document).ready(function () {
    'use strict';
    backboneTodo.init();
});
