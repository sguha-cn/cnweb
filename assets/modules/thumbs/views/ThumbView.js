CNPORTFOLIO.ThumbView = Backbone.View.extend({
	initialize : function(options) {
		this.model = new CNPORTFOLIO.ThumbModel();
		this.$el = $(".thumbList");
		this.template = options.template;
		this.id = options.id;
		this.bindEvents();
	},

	bindEvents : function() {
		this.listenTo(this.model, "THUMB_LIST_RECEIVED", this.populateThumbs);
	},

	startDisplayingThumbs : function() {
		this.model.getThumbsFromServer(this.id);
	},

	populateThumbs : function() {
		var data = this.model.get('thumbs');
		var rendarableData = this.prepareData(data);
		var html = Mustache.render(this.template, rendarableData);
		this.$el.html(html);
	},

	prepareData : function(data) {
		var data = {thumbs : data};
		return data;
	}
});