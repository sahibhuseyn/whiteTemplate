/*main slider functions*/
function slider(z) {
	var a = z.src;
	document.getElementById("slider").setAttribute("style","background-image:url("+a+")");
}
// var slideIndex = 1;
// leftRight(slideIndex +=n);

// function leftRight(b) {
//   showImages(slideIndex += b);
// }
function leftRight(b) {
  var i;
  var x=document.getElementsByClassName("images")
  var c= document.getElementById("slider");
  // if (b > x.length) {slideIndex = 1}    
  if (b < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
  	console.log(x[i])
    c.setAttribute('style','background-image:url('+ x[i].src +')')
  } 
}
/*client thoughts*/
var slideNum = 1;
showSlides(slideNum);
function currentSlide(n) {
  showSlides(slideNum = n);
}

function showSlides(n) {
  var i;
  var slice = document.getElementsByClassName("txt");
  var bullet = document.getElementsByClassName("bullets");
  if (n > slice.length) {slideNum = 1}    
  if (n < 1) {slideNum = slice.length}
  for (i = 0; i < slice.length; i++) {
      slice[i].style.display = "none";
  }
  for (i = 0; i < bullet.length; i++) {
     bullet[i].className = bullet[i].className.replace(" active", "");
  }
  slice[slideNum-1].style.display = "block";  
  bullet[slideNum-1].className += " active";
}
