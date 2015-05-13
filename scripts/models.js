App.Track = DS.Model.extend({
	name: DS.attr('string'),
	date: DS.attr('date'),
	desc:DS.attr('string'),
	tag:DS.attr('string'),
	sessions:DS.hasMany('session',{async:true})
})

App.Session = DS.Model.extend({
	title: DS.attr('string'),
	speaker: DS.attr('string'),
	hall: DS.attr('string'),
	time: DS.attr('string'),
	img: DS.attr('string'),
	track: DS.belongsTo('track')
})

