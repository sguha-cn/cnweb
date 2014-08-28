CNPORTFOLIO.ThumbModel = Backbone.Model.extend({
	initialize : function() {
		
	},
	getThumbsFromServer : function(id,startIndex) {
		var url = "google.com";
		if(id) {
			url = CNPORTFOLIO.baseUrl + "cnweb/webservice/Projectsbytag?token=123cn123&tag=" + id;
		} else {
			url = CNPORTFOLIO.baseUrl + "cnweb/webservice/ShowAllProjects?token=123cn123&start_index="+startIndex+"&stop_index="+(startIndex+10);
		}
		if($.trim(this.url) != "") {
			var selfObject = this;
			this.fetch({
				url : url,
				success : function(model, data) {
					model.set('thumbs', data);
					model.trigger("THUMB_LIST_RECEIVED");
				},
				error   : function() {
					selfObject.set('thumbs', null);
					selfObject.trigger("THUMB_LIST_RECEIVED");	
				}
			});	
		} else {
			this.set('thumbs', null);
			this.trigger("THUMB_LIST_RECEIVED");
		}
		
	}
});