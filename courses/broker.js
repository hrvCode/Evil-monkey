
var e = document.getElementById('form');
var a = document.getElementById('thanks');
var b = document.getElementById('button');

function toggle_visibility() {
    if(e.style.display == 'block')
       e.style.display = 'none';
       a.style.display = 'block';
    else
       e.style.display = 'block';
       a.style.display = 'none';
 }

 b.addEventListener("click", toggle_visibility);