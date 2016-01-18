var ListItem=Backbone.View.extend({
	tagName: 'li',
	className: 'list-group-item',

		initialize: function(options) {
			this.projects = options.projects;
			this.activities = options.activities;
			this.dates =options.dates;
			this.statusColl = options.statusColl;
			},

	render: function() {
		
		var projectId =parseInt(this.model.get('project_id'));
		var foundProject = this.projects.findWhere({id: projectId});
		var projectName  = foundProject.get('value');
			
		var activityId = parseInt(this.model.get('activity_id'));
		var foundActivity = this.activities.findWhere({id: activityId});
		var activityName  = foundActivity.get('value');	
					
		var date = parseInt(this.model.get('date'));
		var foundDate = this.dates.findWhere({id: date});
		var date  = foundDate.get('value');	
		
		var currDate = new Date();
		var dd = currDate.getDate();
		var mm=currDate.getMonth()+1;
		if(dd<10){
        dd='0'+dd
    	} 
    	if(mm<10){
        mm='0'+mm
    	} 
		var yr=currDate.getFullYear();
		/*var hr = currDate.getHours();
		var min = currDate.getMinutes();
		var sec = currDate.getSeconds();
		var time = hr +':'+ min +':' + sec;*/
		
		this.$el.append('<span class="post">Posted on : ' + dd+'/'+ mm +'/' + yr +'</span>');
		this.$el.append('<span class="info">Project:' + projectName + '</span><br>');
		this.$el.append('<span class="info">' + activityName + ','+'</span><br><br>');
		this.$el.append('<span class="info">' + date  +'</span>');
		this.$el.append('<label class="desc">' + this.model.get('description')+ '</label>');

		return this;
				
	}

	
});


var List = Backbone.View.extend({
	tagName: 'ul',
	className: 'table',

	// listen to the collection for addition/deletion and re-render
	initialize: function() {
		this.listenTo( this.collection, 'add', this.render );
		this.listenTo( this.collection, 'remove', this.render );

		_.bind( this.render, this );
	},

	render: function() {
		var listItem,
			html = [];

		this.collection.each(function(todayStatus) {
			listItem = new ListItem({ model: todayStatus,
			"projects": projects,
			"activities": activities,
			"dates": dates,
			"statusColl": statusColl});
			html.push( listItem.render().el )

		});

		this.$el.html( html );


		return this;
	}
});