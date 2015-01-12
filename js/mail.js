$(function(){
	$("#envoyer").click(function(){
	valid = true;
	if($("#nom").val() == ""){
		$('.error-message').html("Champs incorrect");
		valid = false;
	}else{
		$('.error-message').css("display", "none");
	}
	if($("#email").val() == ""){
		$('.error-message').html("Champs incorrect");
		valid = false;
	}else{
		$('.error-message').css("display", "none");
	}
	return valid;
});
});