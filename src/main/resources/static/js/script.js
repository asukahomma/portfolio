$(function () {

	//scroll 
	var navHeight = $(".gnav").outerHeight();

 	$('a[href^="#"]').on("click", function () {
    	var href = $(this).attr("href");
    	var target = $(href == "#" || href == "" ? "html" : href);
    	var position = target.offset().top - navHeight;
    	$("html, body").animate({ scrollTop: position, }, 300, "swing");
    	if($(".works-item-detail").is(":visible")){
			$(".works-item-detail").hide();
      	}
    	return false;
  	});

	//page top
	$("#js-page-top").on("click", function () {
    	$("body,html").animate({ scrollTop: 0, }, 300);
    	return false;
  	});
  
  
  	$(document).click(function(e) {
	  	if($(e.target).closest(".works-item").length){
			//show work-item-detail element
		  	var workIteId = $(e.target).closest(".works-item").data("workItemId");
		  	if($(".works-item-detail").is(":visible")){
			  	$(".works-item-detail").hide();
		  	}
		  	if($("#work-item-detail-" + workIteId).is(":hidden")){
			  	$("#work-item-detail-" + workIteId).show();
		  	}
		  	return;
	  	}
	  	if($(".works-item-detail").is(":visible") && !$(e.target).closest(".works-item-detail").length) {
		  	//hide work-item-detail element
          	$(".works-item-detail").hide();
          	return;
      	}
  	});
  
	$(".gnav-inner").click(function(e){
	  	if($(".works-item-detail").is(":visible")){
	    	$(".works-item-detail").hide();
      	}
  	});
  
    //download resume
  	function downloadResume() {
      	$.ajax({
	    	url: '/files/downloadResume',
            type: 'GET',
            contentType: 'application/json',
            data: JSON.stringify(message),
            success: function(response) {
                $('#result').text(response);
            },
            error: function(error) {
                $('#result').text('error!: ' + error.status);
            }
        });
    }
});
