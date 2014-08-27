CNPORTFOLIO.ThumbModel = Backbone.Model.extend({
	initialize : function() {
		this.url = "";
	},
	getThumbsFromServer : function() {
		if($.trim(this.url) != "") {
			this.fetch({
				url : "google.com",
				success : function(model, data) {
					model.set('thumbs', data);
					model.trigger("THUMB_LIST_RECEIVED");
				},
				error   : function() {

				}
			});	
		} else {
			this.set('thumbs', null);
			this.trigger("THUMB_LIST_RECEIVED");
		}
		
	}
});