CNPORTFOLIO.TagModel = Backbone.Model.extend({
	initialize : function() {
		this.url = "";
	},
	getTagsFromServer : function() {
		if($.trim(this.url) != "") {
			alert(this.url);
			this.fetch({
				url : "google.com",
				success : function(model, data) {
					model.set('tags', data);
					model.trigger("TAG_LIST_RECEIVED");
				},
				error   : function() {

				}
			});	
		} else {
			this.set('tags', null);
			this.trigger("TAG_LIST_RECEIVED");
		}
		
	}
});