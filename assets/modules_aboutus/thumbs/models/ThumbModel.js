CNABOUTUS.ThumbModel = Backbone.Model.extend({
	initialize : function() {
		
	},
	getThumbsFromServer : function(id,startIndex, showAll) {
		var url = "google.com";
		if(id) {
			url = CNABOUTUS.baseUrl + "cnweb/webservice/Aboutsbytag?token=123cn123&tag=" + id + "&start_index=" + startIndex + "&stop_index="+(startIndex+9);
		} else {
			url = CNABOUTUS.baseUrl + "cnweb/webservice/ShowAllAboutus?token=123cn123&start_index=" + startIndex + "&stop_index="+(startIndex+9);
		}
		if(typeof showAll != "undefined" && showAll) {
			url = CNABOUTUS.baseUrl + "cnweb/webservice/ShowAllAboutus?token=123cn123&start_index=" + startIndex + "&stop_index=" + (startIndex + 9) + "&showall=true";
		}
		if($.trim(this.url) != "") {
			var selfObject = this;
			this.fetch({
				url : url,
				success : function(model, data) {
					if(data.Message == "No About us Found.") {
						model.set('thumbs', null);	
					}
					else {
						model.set('thumbs', data);	
					}
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