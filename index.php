<?php
include_once('links.php');
?>

<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body align="center">
	<form method="post" enctype="multipart/form-data" id="UploadMedia">
		<div class="container-fluid">
			<div class="row">				
				<div class="col s6 push-s3">
					<div class="card card-panel hoverable">
						<div class="card-image">
							<img src="images/images.png" class="img-responsive" id="previewImage">
							<span class="card-title">Image Show Here</span>
						</div>
						<div class="card-content">
							<div class="file-field input-field">
								<div class="btn" style="background-color:#757575">
									<span>File</span>
									<input type="file" name="file" id="file" multiple>
								</div>
								<div class="file-path-wrapper">
									<input class="file-path validate" type="text" placeholder="Upload one or more files">
								</div>
							</div>							
						</div>														
					</div>
				</div>								
			</div>				
		</div>	
	</form>
</body>
</html>