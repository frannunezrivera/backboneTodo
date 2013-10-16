/*global backboneTodo, Backbone, JST*/

backboneTodo.Views = backboneTodo.Views || {};

(function () {
    'use strict';

    backboneTodo.Views.FilterView = Backbone.View.extend({

        template: JST['app/scripts/templates/filter.ejs'],
        
        tagName: 'li',
    	
    	className: '',

	    events: {
	    	'change input[type="radio"]': 'filterView'
	    },

	    initialize: function () {
	        this.listenTo(this.model, 'change', this.render);
	    },

	    render: function () {
	        this.$el.html(this.template(this.model.toJSON()));

	        return this;
	    },

	    toggle : function(){
	    	this.$(':checked').prop('checked',false);
	    	this.$el.prop('checked', true);

	    	
	    	backboneTodo.dat.FiltersCollection.each(function(filter){
	    		if(filter.get('selected')){
	    			filter.toggle();
	    		}
	    	});

	    	this.model.toggle();

	    },

	    filterView: function(event) {
	    	this.toggle();

		    switch(event.target.value)
			{
				case 'all':
				default:
				  backboneTodo.dat.TodosCollection.reset(backboneTodo.dat.TodosCollection);
				  break;
				case 'todo':
				  backboneTodo.dat.TodosView.addAllTodoItems(backboneTodo.dat.TodosCollection.filterByToDo());
				  break;
				case 'done':
				  backboneTodo.dat.TodosView.addAllTodoItems(backboneTodo.dat.TodosCollection.filterByDone());
				  break;
			}
		}
    });

})();
