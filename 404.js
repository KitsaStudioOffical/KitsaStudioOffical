var i = 0;
var txt = 'Error 40+4. Page not found.';

typeWriter(500);

function typeWriter(speed) {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
