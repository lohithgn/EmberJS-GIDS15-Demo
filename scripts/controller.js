App.SessionsController = Ember.Controller.extend({
	sortProperties: ['speaker'],
	sortedSessions: Ember.computed.sort("model","sortProperties")
})