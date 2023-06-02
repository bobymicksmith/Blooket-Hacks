var a = document.createElement("iframe");
document.body.append(a);
window.alert = a.contentWindow.alert.bind(window);
window.prompt = a.contentWindow.prompt.bind(window);
a.remove();
var bsid = prompt("Whats the bsid you want to login to?");
document.cookie = "bsid="+bsid+";domain=.blooket.com;path=/";
location.reload();
