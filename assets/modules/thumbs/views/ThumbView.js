CNPORTFOLIO.ThumbView = Backbone.View.extend({
	initialize : function(options) {
		this.model = new CNPORTFOLIO.ThumbModel();
		this.$el = $(".thumbList");
		this.template = options.template;
		this.bindEvents();
		var self = this;
		
	},

	initiateDisplayThumb : function(event) {
		event.preventDefault();
		var divToOpen = $(event.currentTarget).attr('href');
		$.fancybox({
	        "href": divToOpen, 
	    });
	},

	bindEvents : function() {
		this.listenTo(this.model, "THUMB_LIST_RECEIVED", this.populateThumbs);
	},

	startDisplayingThumbs : function(id) {
		this.id=id;
		this.model.getThumbsFromServer(id,0);
	},

	loadThumbs : function(startIndex) {
		this.model.getThumbsFromServer(this.id, startIndex);
	},

	populateThumbs : function() {
		var data = this.model.get('thumbs');
		var rendarableData = this.prepareData(data);
		var html = Mustache.render(this.template, rendarableData);
		this.$el.append(html);
		var self = this;
		$(".thumbList li a").unbind('click');
		$(".thumbList li a").click(function(event){self.initiateDisplayThumb(event)});
		$(".portfolioDetailsBlk2 .loadmore").unbind('click');
		$(".portfolioDetailsBlk2 .loadmore").click(function(){self.loadThumbs(parseInt($(".portfolioDetailsBlk2 .loadmore").attr('data-last-val')))});
		if($(".thumbList li").length<9) {
			$(".portfolioDetailsBlk2 .loadmore").css({
				"display" : "none"
			}); 
			
		} else {
			$(".portfolioDetailsBlk2 .loadmore").css({
				"display" : "block"
			});
		}
		if(!rendarableData.thumbs) {
			$(".portfolioDetailsBlk2 .loadmore").css({
				"display" : "none"
			});
		}
		$(".portfolioDetailsBlk2 .loadmore").attr('data-last-val', $(".thumbList li").length);
	},

	prepareData : function(data) {
		var data = {thumbs : ((data)?data.Message:null)};
		return data;
	}
});