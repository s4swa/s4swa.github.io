$(function() { 
  var social = $(".page-wrapper");
	
  $(".nani").click(function() {
    social.html(window.dnani.dhtml);
    $(".nani").addClass("active");
  });
  $(".").click(function() {
    social.html(window.committee.dhtml);
	  
  });
});
