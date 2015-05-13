App.IndexRoute = Ember.Route.extend({
	beforeModel: function(){
		this.transitionTo("tracks");
	}
})

App.TracksRoute = Ember.Route.extend({
	model: function(){
		return this.store.find("track")
	}
})

App.TrackRoute = Ember.Route.extend({
	model: function(params){
		return this.store.find("track", params.track_id)
	}
})

App.SessionRoute = Ember.Route.extend({
	model: function(params){
		return this.store.find("session", params.session_id)
	}
})