$(function(){
	$("#envoyer").click(function(){
		valid = true;
		if($("#nom").val() == ""){
			$("#nom").closest("p").find(".error-message").fadeIn().text("Le champs nom est erroné!");
			// console.log("error");
			valid = false;
		}else{
			$("#nom").closest("p").find(".error-message").fadeOut();
		}
		if($("#email").val() == ""){
			$("#email").closest("p").find(".error-message").fadeIn().text("Email non valide!");
			// console.log("error");
			valid = false;
		}else if(!$("#email").val().match(/^\w+(\.-]?\w+)*@\w+(\.-]?\w+)*(\.\w{2,})+$/i)){
			$("#email").closest("p").find(".error-message").fadeIn().text("Email non valide!2");
			console.log("error");
			valid = false;
		}else{
			$("#email").closest("p").find(".error-message").fadeOut();
		}
		return valid;
	});

});