CNPORTFOLIO.ThumbView = Backbone.View.extend({
	initialize : function(options) {
		this.model = new CNPORTFOLIO.ThumbModel();
		this.$el = $(".thumbList");
		this.template = options.template;
		this.id = options.id;
		this.bindEvents();
		var self = this;
		
	},

	initiateDisplayThumb : function(event) {
		event.preventDefault();
		var divToOpen = $(event.currentTarget).attr('href');
		$.fancybox({
	        href: divToOpen, 
	        modal: true,
	        helpers: {
                title: {
                    type: 'outside'
                },
                overlay: {
                    speedOut: 0
                }
            },
            'hideOnContentClick': true
	    });
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
		var self = this;
		$(".thumbList li a").unbind('click');
		$(".thumbList li a").click(function(event){self.initiateDisplayThumb(event)});
	},

	prepareData : function(data) {
		var data = {thumbs : data};
		return data;
	}
});