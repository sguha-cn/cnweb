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
		
	},

	startDisplayingTags : function() {
		this.model.getTagsFromServer();
	},

	populateTags : function() {
		var data = this.model.get('tags');
		var rendarableData = this.prepareData(data);
		var html = Mustache.render(this.template, rendarableData);
		this.$el.html(html);
		var selfObject = this;
		$("#ul_tags li a").unbind('click');
		$("#ul_tags li a").click(function(event){selfObject.clearCenterContent(event)});
	},

	clearCenterContent : function(event) {
		if($(event.currentTarget).attr('href') != window.location.hash) {
			$(".thumbList").empty();
			$(".loadmore").css({
				"display" : "none"
			});	
		}
	},

	prepareData : function(data) {
		var data = {tags : $.map(data.Message, function(el) { return el; })};
		return data;
	}
});