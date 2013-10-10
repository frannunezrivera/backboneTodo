/*global Projects, $*/


window.backboneTodo = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        new this.Views.CategoriesView({
            collection: new this.Collections.CategoriesCollection()
        });

        new this.Views.TodosView({
            collection: new this.Collections.TodosCollection()
        });

    }
};

$(document).ready(function () {
    'use strict';
    backboneTodo.init();
});
