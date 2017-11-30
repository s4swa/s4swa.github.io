$(function() { 
  var social = $(".page-wrapper");
	
  $(".nani").click(function() {
    social.html(window.dnani.dhtml);
  });
  $(".home").click(function() {
    social.html(window.dhome.dhtml);	  
  });
});
