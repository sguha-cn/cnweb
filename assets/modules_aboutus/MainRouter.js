CNABOUTUS.mainRouter = Backbone.Router.extend({
	
	routes: {
		""              : "loadPortfolio",
		"tagfilter/:id" : "loadPortfolio",
		"showall"       : "loadAllProject"
	},

	loadAllProject : function() {
		if($.trim($("#ul_tags").html()) == "") {
			this.loadTags();
		}
		var showAll = true;
		this.loadThumbs(null, showAll);
	},
	
	loadPortfolio : function(id) {
		if($.trim($("#ul_tags").html()) == "") {
			this.loadTags();
		}
		this.loadThumbs(id, false);
	},

	loadTags : function() {
		require(["assets/modules_aboutus/tags/models/TagModel.js"], function() {
			require(["assets/modules_aboutus/tags/views/TagView.js"], function() {
				$.ajax({
					url : "assets/modules_aboutus/tags/templates/TagTemplate.html",
					success : function(data) {
						var tagViewObject = new CNABOUTUS.TagView({
							template : data
						});
						tagViewObject.startDisplayingTags();
					}
				});
			});
		});
	},

	loadThumbs : function(id, showAll) {
		require(["assets/modules_aboutus/thumbs/models/ThumbModel.js"], function() {
			require(["assets/modules_aboutus/thumbs/views/ThumbView.js"], function() {
				$.ajax({
					url : "assets/modules_aboutus/thumbs/templates/ThumbTemplate.html",
					success : function(data) {
						var thumbViewObject = new CNABOUTUS.ThumbView({
							template : data,
							tag      : id
						});
						thumbViewObject.startDisplayingThumbs(id, showAll);
					}
				});
			});
		});
	}
	
});
var mainRouter_object = new CNABOUTUS.mainRouter();
if(!Backbone.history.isStarted) {
	Backbone.history.start();
}