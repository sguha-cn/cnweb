CNPORTFOLIO.TagView = Backbone.View.extend({
	
	initialize : function(options) {
		this.model = new CNPORTFOLIO.TagModel();
		this.$el = $("#ul_tags");
		this.template = options.template;
		this.bindEvents();
	},

	bindEvents : function() {
		var selfObject = this;
		this.listenTo(this.model, "TAG_LIST_RECEIVED", this.populateTags);
		$("#ul_tags li a").on('click', function() {
			alert("x");
		})
	},

	startDisplayingTags : function() {
		this.model.getTagsFromServer();
	},

	populateTags : function() {
		var data = this.model.get('tags');
		var rendarableData = this.prepareData(data);
		var html = Mustache.render(this.template, rendarableData);
		this.$el.html(html);
		$("#ul_tags li").on('click', function(event){selfObject.clearCenterContent(event)});
	},

	prepareData : function(data) {
		var data = {tags : data};
		return data;
	}
});