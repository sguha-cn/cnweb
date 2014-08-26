CNPORTFOLIO.TagView = Backbone.View.extend({
	
	initialize : function(options) {
		this.model = new CNPORTFOLIO.TagModel();
		this.$el = $("#ul_tags");
		this.template = options.template;
		this.bindEvents();
	},

	bindEvents : function() {
		this.listenTo(this.model, "TAG_LIST_RECEIVED", this.populateTags);
	},

	startDisplayingTags : function() {
		this.model.getTagsFromServer();
	},

	populateTags : function() {
		var data = this.model.get('tags');
		var rendarableData = this.prepareData(data);
		var html = Mustache.render(this.template, rendarableData);
		this.$el.html(html);
	},

	prepareData : function(data) {
		var data = {tags : data};
		return data;
	}
});