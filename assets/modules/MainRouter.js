CNPORTFOLIO.mainRouter = Backbone.Router.extend({
	
	routes: {
		""         : "loadPortfolio",
		
	},
	
	loadPortfolio : function() {
		this.loadTags();
	},

	loadTags : function() {
		require(["assets/modules/tags/models/TagModel.js"], function() {
			require(["assets/modules/tags/views/TagView.js"], function() {
				$.ajax({
					url : "assets/modules/tags/views/TagTemplate.html",
					success : function(data) {
						var tagViewObject = new CNPORTFOLIO.TagView({
							template : data
						});
						tagViewObject.startDisplayingTags();
					}
				});
			});
		});
	}
	
});
var mainRouter_object = new CNPORTFOLIO.mainRouter();
if(!Backbone.history.isStarted) {
	Backbone.history.start();
}