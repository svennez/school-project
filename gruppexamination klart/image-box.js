var images;
var activeImageIndex = 0;

window.addEventListener('load', function () {

	images = document.querySelectorAll('.image-box .image');
	if(images.length > 0){
		setInterval(goToNextImage, 2000);
	}	
});

function goToNextImage() {
	images[activeImageIndex].className = "image";
	activeImageIndex += 1;
	if(activeImageIndex >= images.length) {
		activeImageIndex = 0;
	}
	images[activeImageIndex].className = "image active";
}