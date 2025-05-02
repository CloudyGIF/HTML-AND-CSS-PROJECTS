var images = document.querySelectorAll(".gall-img");



for(var i=0; i < images.length; i++){
    images[i].addEventListener("click", openModal);

};

var closemodal = document.getElementById("close");

closemodal.addEventListener("click", closeModal);

var imagessml = document.querySelectorAll(".img-sml");
for(var i=0; i < imagessml.length; i++){
    imagessml[i].addEventListener("click", function(){
        currentSlide(this.dataset.id)});

};



//event listeners 

var IndexSlide = 1;



function openModal(event) {
    document.getElementById("myModal").style.display = "block";
    var i = event.currentTarget.dataset.id;
    currentSlide(i);
  }
  
  // Close the Modal
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
    
  }

  function plusSlides(n) {
    
    showSlides(IndexSlide += n);
    
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(IndexSlide = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("img-sml");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {IndexSlide = 1}
    if (n < 1) {IndexSlide = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[IndexSlide-1].style.display = "block";
    dots[IndexSlide-1].className += " active";
    captionText.innerHTML = dots[IndexSlide-1].alt;
  }

 
