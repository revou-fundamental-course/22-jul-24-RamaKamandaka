const p1 = document.querySelectorAll('p')
p1[1].style.fontWeight = 800;
p1[1].style.marginTop = '30px';

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("image-container");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
