Ember.Handlebars.helper('datefmt', function(value, fmt){
	return new Ember.Handlebars.SafeString(moment(value).format(fmt));
})