CNPORTFOLIO.TagModel = Backbone.Model.extend({
	initialize : function() {
		this.url = CNPORTFOLIO.baseUrl + "cnweb/webservice/Alltags?token=123cn123";
	},
	getTagsFromServer : function() {
		if($.trim(this.url) != "") {
			var self = this;
			this.fetch({
				url : self.url,
				type : "GET",
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