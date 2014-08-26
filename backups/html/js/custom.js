$(window).load(function(){
      $('.showTest').flexslider({
        animation: "fade",
		slideshowSpeed: 10000,
		animationSpeed: 600,
        start: function(slider){
			var getCurrent = slider.currentSlide;
		  	$('.showTest li:eq('+getCurrent+')').find(".testQute").css({
				"left":$('.showTest').width()
				}).animate({
				"left":0
				}, 2000);
        },
		controlNav: false,
		directionNav: false,
		before: function(slider){
			var getCurrent = slider.currentSlide;			
			$('.showTest li:eq('+getCurrent+')').find(".testQute").animate({
				"left":(-1*$('.showTest').width())
				},"slow");
		},
		after: function(slider){
			var getCurrent = slider.currentSlide;
			$('.showTest li:eq('+getCurrent+')').find(".testQute").css({
				"left":$('.showTest').width()
				}).animate({
				"left":0
				}, 2000);
		}
      });
	  
	  $(".portFolioList").flexslider({
		  	animation: "slide",
			controlNav: false
		  });
		  
		$(".bannerSlide").flexslider({
		  	animation: "slide",
			controlNav: false,
			startAt: 0,
			start:function(slider){
				//console.log(slider.height());
				//var getHeight = slider.height();
				//$(".bannerSlide").find(".flex-viewport").height(getHeight);
				
				},
			before:function(slider){
			//console.log(linkArr[slider.currentSlide]);
			//console.log(slider.currentSlide);
			}
		  }); 
		 evenSliderHeight($(".bannerSlide"), $(".slist"));
    });
	
	jQuery(document).ready(function($) {
		$(".mainNav > li").each(function(index, element) {
            $(this).find("a:first").append("<span class='menuShad'></span>");
			if($(this).find(".subMenu").length>0){
				$(this).addClass("subPar");
				}
        });
		$(window).load(function(){
			$(".showTest li").each(function(index, val) {
				changeHeight($(this).find(".box"), 767);
			});
			changeHeight($(".pricecont .nomarpad"),767);
			changeHeight($(".pbox"),767);
		});		
		$(window).resize(function(event) {
			$(".showTest li").each(function(index, val) {
				changeHeight($(this).find(".box"), 767);
			});
			changeHeight($(".pricecont .nomarpad"),767);
			changeHeight($(".pbox"),767);
			if($(window).width()>767){
				$(".mobileMenuConten").show();
			}
			$(".bannerSlide").each(function(index, element) {
                $(this).find(".slist").css("min-height","");
            });
			 evenSliderHeight($(".bannerSlide"), $(".slist"));
			//changeHeight();
		});
		/*stick nav start*/
		//console.log($(window).scrollTop());
		if ($(window).scrollTop() > 50) {
			$('#outer-wrap').addClass('fixed');
			$('.back-to-top').fadeIn("slow");
			} else {
			$('#outer-wrap').removeClass('fixed');
			$('.back-to-top').fadeOut("slow");
			}
			$(window).bind('scroll', function() {
			if ($(window).scrollTop() > 50) {
			$('.back-to-top').fadeIn("slow");
			$('#outer-wrap').addClass('fixed');
			
			} else {
			$('#outer-wrap').removeClass('fixed');
			$("#inner-wrap, #header").removeAttr("style");
			$("#inner-wrap").removeClass("slide");
			$('.back-to-top').fadeOut("slow",0.0);
			}

		});
		/*stick nav end*/
		//smooth scroll start
		/*var $window = $(window);	//Window object
		var scrollTime = 0.2;	//Scroll time
		var scrollDistance = 100;	//Distance. Use smaller value for shorter scroll and greater value for longer scroll
		$window.on("mousewheel DOMMouseScroll", function(event){
			event.preventDefault();	
			var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
			var scrollTop = $window.scrollTop();
			var finalScroll = scrollTop - parseInt(delta*scrollDistance);
			TweenMax.to($window, scrollTime, {
				scrollTo : { y: finalScroll, autoKill:true },
				ease: Power1.easeOut,	//For more easing functions see http://api.greensock.com/js/com/greensock/easing/package-detail.html
				autoKill: true,
				overwrite: 5	
			});
		});*/
		//smooth scroll start
		$(".toggleMenu").click(function(e){
			e.preventDefault();
			//alert("test");
			$(this).toggleClass("closeState");
			$(this).toggleClass("openState");
			
			if(!$("#inner-wrap").hasClass("slide")){
				var getHead = $("#header")
				
				$("#inner-wrap").addClass("slide").animate({
					"left":"-377px"
				},function(){
					$(this).find("#header");
					/*.width($(this).width())
					.css("left", $(this).css("left"))*/;
					
				});
				getHead.animate({
					"width":(getHead.width()-378)
					});
			}else{
				$("#header").animate({
					"width":"100%"
					});
				$("#inner-wrap").removeClass("slide").animate({
					"left":"0"
				},function(){
					$(this).find("#header").width($(this).width()).css("left", $(this).css("left"));
					
				});	
			}
		});
		$(".togglemenumobile").click(function(){
			$(this).toggleClass("showMenu");			
			$(".mobileMenuConten").toggle();
		});
		
		//body navigation function
		$(".whyU a").click(function(e){
		e.preventDefault();
		var getAttr = $(this).attr("href");
		$("body, html").stop(true,true).animate({"scrollTop":$(getAttr).offset().top});
		});
		
		//body navigation function
		$("#secdondMenu li a, a.priceDesc2, a.priceDesc1, a.getStarted").click(function(e){
		e.preventDefault();
		var getAttr = $(this).attr("href");
		if($(window).width()>1024){
			//alert($(getAttr).offset().top);
			
			$("body, html").stop(true,true).animate({"scrollTop":($(getAttr).offset().top-180)});
		}else{
			$("body, html").stop(true,true).animate({"scrollTop":$(getAttr).offset().top});
		}
		});
		$("li.active").parents("li").addClass("active-menu-parent");
		
		/*$(".mainNav").find("li").mouseenter(function(){
			//console.log("enter");
			if($(".mainNav").parents(".slide").length>0){
				//console.log("enter");
				var getChild = $(this).find(".subMenu");
				if(!getChild.is(":visible")){
					$(".subMenu").hide();
					getChild.show();
				}
				
			}
		})*/
		
		$("a.back-to-top").click(function(e){
			e.preventDefault();
			$("body, html").stop(true,true).animate({"scrollTop":0});

		});

	});
	//document ready end
	
function changeHeight(eh, maxwidth){
	var getMaxHeight = [];
	if(maxwidth===undefined){
		maxwidth=0;
	}
	eh.each(function(index, element) {
            $(this).removeAttr('style');
			getMaxHeight.push(parseInt($(this).outerHeight()));
    });
	if($(window).width()>maxwidth){
		eh.height(getMax(getMaxHeight));
	}else{
		eh.css("height","auto");
	}
}
function getMax(arrelm){
	var getMx = 0;
	for(var i=0; i<=(arrelm.length-1); i++){
		if(getMx<arrelm[i]){
			getMx = arrelm[i];
		}
	}
	return getMx;
} 
var evenSliderHeight = function(slideContainer, slideItem) {
  var slider_height = 0;
  
  var $slider_slide = $(slideContainer).find(slideItem).css("min-height","");
  
  $slider_slide.each(function() {
	  
    var __height = $(this).outerHeight(true);
    if ( slider_height < __height ) {
       slider_height = __height;
    }
  });
  //console.log(slider_height);
  $slider_slide.css('min-height', slider_height);
};

function validation(fn) {
    var ec = 0;
    var fnel = $(fn).find("#nameInput");
    var snel = $(fn).find("#phoneno");
    var emel = $(fn).find("#email");

    var fN = fnel.val();
    var sN = snel.val();
    var em = emel.val();
    //alert(fN);
    if (fN == "") {
        fnel.next(".vt").text("Please enter name").show("fast");
        ec++;
        //return false;
    } else if (fN != "") {
        if (fnel.next(".vt").is(":visible")) {
            fnel.next(".vt").hide("fast");
        }
    }
    if (sN == "") {
        snel.next(".vt").text("Please enter phone no").show("fast");
        ec++;
    } else if (sN != "") {
        if (snel.next(".vt").is(":visible")) {
            snel.next(".vt").hide("fast");
        }
    }
    if (em == "") {
        emel.next(".vt").text("Please enter email address").show("fast");
        ec++;
    } else if (em != "") {
		//alert(validateEmail(em));
		if (validateEmail(em)) {
			if (emel.next(".vt").is(":visible")) {
				emel.next(".vt").hide("fast");
			}			
		} else {
			
			emel.next(".vt").text("Please enter a valid email address").show("fast");
			ec++;
		}
    }
    //alert(ec);
    if (ec > 0) {
        return false;
    } else if (ec == 0) {


        //$(fn).hide();
        //$(fn).next(".successContent").show();
        return true;

    }
}
function validateEmail(email) { 
  
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
