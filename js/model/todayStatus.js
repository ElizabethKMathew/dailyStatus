var TodayStatus = Backbone.Model.extend({
	defaults: {
		
		'project_id': '',
		'activity_id': '',
		'date':'',
		'description': ''
	},
	url: '/app/save-status'
});

var TodayStatusCollection = Backbone.Collection.extend({
	model: TodayStatus
	
});