<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Emailing</title>
	<link href='http://fonts.googleapis.com/css?family=Roboto:500,900italic,900,400italic,100,700italic,300,700,500italic,100italic,300italic,400' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<script type="text/javascript"	src="js/jquery-1.11.1.min.js"></script>
	<script type="text/javascript" src="js/jquery-ui.min.js"></script>
	<script type="text/javascript" src="js/moderniz.js"></script>
	<script type="text/javascript" src="js/listBatiment.js"></script>
	<script type="text/javascript">
	function fb_login(){
				  

			FB.login(function(response) {
				   if (response.authResponse) {
				     FB.api('/me', function(response) {
				       $('.h2_profil').html(response.name);
				       
				     });
				   } else {
				     console.log('User cancelled login or did not fully authorize.');
				   }
				 });
	}
	</script>
</head>
<body class="profil">
<div class="profil_op">
<div class="menu_container" id="monument_template">
		<div class="hamburger"><img src="img/hamburger_w.png" alt="toggleMenu" width="28px" height="28px"></div>
			<div class="nav">
				<a href="#"><img src="img/close.png" alt="" class="closeMenu" ></a>
				<div class="nav_logo">
				 	<p><a href="#"><img src="img/logo_rw.png" alt="logo mons 2015"></a></p>
				 	<!-- <div class="nav_fleche"></div> -->
				</div>
				<ul class="ul_top">
					<li></li>
				</ul>
			<ul class="ul_bottom">
				<li class="li_bottom"><a class="nav_bottom" href="index.html" id="home"></a></li>
				<li class="li_bottom"><a class="nav_bottom" href="mail.html" id="newsletter"></a></li>
				<li class="li_bottom"><a class="nav_bottom" href="https://www.facebook.com" id="face"></a></li>
				<li class="li_bottom"><a class="nav_bottom" href="https://www.twitter.com" id="twit"></a></li>
			</ul>

	</div>
</div>
<div class="contenu_profil">
<div class="h2"><span>25 000 euros en 3 mois oui c'est possible grace a ma méthode</span></div>
<div class="mask2"></div>
	<?php 
			error_reporting(-1);
			$users_id = 347177570;
			$client_id = "87338f4214514fc7ae03102ffc523132";
			$limit = 21;
			$endpoint ="https://api.instagram.com/v1/users/$users_id/media/recent/?client_id=$client_id&count=$limit";

		try {
			$curl = curl_init($endpoint);
			curl_setopt($curl, CURLOPT_CONNECTTIMEOUT, 3);
		    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
		    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
			
			$data = json_decode(curl_exec($curl));

			} catch (Exception $e) {
				die($e->getMessage());
			}
			
			if ($data->meta->code == 200) {
				// echo "<p>J'ai bien récupéré les images</p>";

				foreach($data->data as $image){
		    		if ($image->type == 'image') {
		        		echo "<img src='{$image->images->standard_resolution->url}'>";
		    	}
				}
			} else {
				echo "<p>error</p>";
			}
			// var_dump($data);
 ?>
</div>

	<script type="text/javascript" src="js/main.js"></script>
</div>
</body>
</html>