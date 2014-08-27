CNPORTFOLIO.ThumbModel = Backbone.Model.extend({
	initialize : function() {
		this.url = "";
	},
	getThumbsFromServer : function(id) {
		if($.trim(this.url) != "") {
			var url = "google.com";
			if(id) {
				url = "sfsfas"
			}
			this.fetch({
				url : url,
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