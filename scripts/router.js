App.Router.map(function(){
	this.resource("tracks");
	this.resource("track",{path: "/track/:track_id"});
	this.resource("session",{path: "/session/:session_id"});
})