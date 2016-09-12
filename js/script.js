$(function(){
	$('#file').change(function(){
		console.log(this,'this');
		console.log($('#file').get(0).files[0]);
		var file=this.files[0];		
		var imagetype=file.type;
		var extentions=['image/jpeg',"image/png","image/jpg","image/gif"];		
		if(extentions.indexOf(imagetype)>0){
			Materialize.toast('File Is Valid!', 2000);			
			var filereader=new FileReader();
			filereader.onload=FileLoadCheck;
			filereader.readAsDataURL(this.files[0]);
			FileUploadAjaxCall();
		}else{
			Materialize.toast('File Is Invalid!', 2000);
			$('#previewImage').attr('src','images/images.png');
			return false;
		}
	});
	function FileLoadCheck(e){
		console.log(e,'Object');
		$('#previewImage').attr('src',e.target.result);
	}
	
});
function FileUploadAjaxCall(){	
	$.ajax({
		url:'fileupload.php?_'+new Date().getTime(),
			type:'POST',
			data:new FormData($('#UploadMedia').get(0)),
			contentType:false,
			cache:false,
			processData:false,
			success:function(data){
				console.log(data,'data');
				Materialize.toast('File Upload Successfully!', 2000);
			}
		});
}
