//start document
$(document).on("ready", init);

function init() {
	//connected to start tutorial
	$("#easy").on("pageshow", function () {
		var lastPage = localStorage.getItem("page");
		//getting the lastpage
		$("#start").attr("href", "#" + lastPage);
		//jumping to lastpage from the #easy page
	});
	$('.stepClass').on("pageshow", function (event, data) {
		stepId = $(data.toPage).attr('id');
		//setting the value 
		localStorage.setItem('page', stepId)
	});
}