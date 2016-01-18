var Description = Backbone.Model.extend({
	defaults:{
		'text':''
	}
})

var DescriptionColl = Backbone.Collection.extend({
	model: Description
})