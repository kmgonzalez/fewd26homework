// On Page Load/Read 
jQuery(document/.ready(function(){

	//On click of #submit
	jQuery("#submit").on("click",function(){
	//Get value of A
	var a = parseFloat(jQuery("#a").val());
	//Get value of B
	var a = parseFloat(jQuery("#b").val());
	// If A > B
	jQuery("#comparison").text(">");
}else if (a == b){
	// If A == B
	jQuery("#comparison").text("<");
}else if (a < b){	
	// If A < B
	jQuery("#comparison").text("<");
}else {
	// Not Applicable 
	jQuery("#comparison").text("N/A");
}	

});