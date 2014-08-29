CNABOUTUS.TagModel = Backbone.Model.extend({
	initialize : function() {//http://stagingpc.com/cnweb/webservice/Allabouttags?token=123cn123
		this.url = CNABOUTUS.baseUrl + "cnweb/webservice/Allabouttags?token=123cn123";
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