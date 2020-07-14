$('.owl-carousel').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    items : 1
    
})
var count=0;
function change()
{
document.getElementById("like").innerHTML=++count;

}
function myFunc(){
    var dots = document.getElementById("dots"),
   moreText = document.getElementById("more"),
   btnText = document.getElementById("read-more-btn"),
   hope = document.querySelector(".hope");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.style.display="none"; 
    moreText.style.display = "inline";
    hope.style.opacity = "1"

    
  }
}
function topFunction() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }