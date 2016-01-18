
var Form = Backbone.View.extend({
	tagName: 'form',
	className: 'form-group',

	events:{
		'submit':'onSubmit'
	},

	initialize: function(options){
		this.projects = options.projects;
		this.activities = options.activities;
		this.dates =options.dates;
		this.statusColl = options.statusColl;


		
	},


	render: function() {
		var html =[];
		//this.$el.append( this.complied );

		this.chooseProject = new Select({
			data: this.projects,
			settings:{
				'title':'Select a project',
			}
		});
		//html.push('<span class="project_header">Project</span>');
		html.push(this.chooseProject.render().el);

		this.chooseActivity = new Select({
			data:this.activities,
			settings:{
				'title':'Select an activity',
			}
		});
		//html.push('<label class="activity_header">Activity</label>');

		html.push(this.chooseActivity.render().el);


		this.chooseDate = new Select({
			data:this.dates,
			settings:{
				'title':'Select a date',
			}
		});
	//	html.push('<label class="date_header">Date</label>');
		html.push(this.chooseDate.render().el);

		  this.chooseDescription =  new TextArea({
		  	settings:{
		  		'title' :'Description'
		  	}
		  });
		  //html.push('<span class="descr_header">Activity Description</span>');
		html.push(this.chooseDescription.render().el);
			this.$el.append( html );

		this.$el.append( '<hr><button type="submit" class="save">Save</button>' );
		return this;
	},

	onSubmit: function (e) {
		e.preventDefault();

		this.statusColl.add({
			'project_id': this.chooseProject.getValue(),
			'activity_id': this.chooseActivity.getValue(),
			'date': this.chooseDate.getValue(),
			'description': this.chooseDescription.getValue(),
			});
		
       var stringData = JSON.stringify( this.statusColl.toJSON() );
		localStorage.setItem( LS_KEY, stringData );
		console.log(stringData);
    }
});

