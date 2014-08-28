CNPORTFOLIO.mainRouter = Backbone.Router.extend({
	
	routes: {
		""              : "loadPortfolio",
		"tagfilter/:id" : "loadPortfolio"
		
	},
	
	loadPortfolio : function(id) {
		if($.trim($("#ul_tags").html()) == "") {
			this.loadTags();
		}
		this.loadThumbs(id);
	},

	loadTags : function() {
		require(["assets/modules/tags/models/TagModel.js"], function() {
			require(["assets/modules/tags/views/TagView.js"], function() {
				$.ajax({
					url : "assets/modules/tags/templates/TagTemplate.html",
					success : function(data) {
						var tagViewObject = new CNPORTFOLIO.TagView({
							template : data
						});
						tagViewObject.startDisplayingTags();
					}
				});
			});
		});
	},

	loadThumbs : function(id) {
		require(["assets/modules/thumbs/models/ThumbModel.js"], function() {
			require(["assets/modules/thumbs/views/ThumbView.js"], function() {
				$.ajax({
					url : "assets/modules/thumbs/templates/ThumbTemplate.html",
					success : function(data) {
						var thumbViewObject = new CNPORTFOLIO.ThumbView({
							template : data,
							tag      : id
						});
						thumbViewObject.startDisplayingThumbs(id);
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