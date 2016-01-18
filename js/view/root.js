var Root = Backbone.View.extend({
	el: '#root',

	initialize:function(options){
		this.projects = options.projects;
		this.activities = options.activities;
		this.dates =options.dates;
		this.statusColl = options.statusColl;
	},

	render: function() {
		 var form = new Form({
			"projects": projects,
			"activities": activities,
			"dates": dates,
			"statusColl": statusColl
			});
		
		var list = new List({ collection: this.statusColl });
		 this.$el.append('<span class="status">Daily Status</span><br>');
		 this.$el.append( form.render().el );
		 this.$el.append('<label class="history">My History</label><br>');
		 	this.$el.append( list.render().el );
		 return this;
	}

});

	