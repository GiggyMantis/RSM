var jQueryLib = document.createElement("script");
jQueryLib.src = "http://code.jquery.com/jquery-3.6.0.min.js";
document.body.appendChild(jQueryLib);
/* Give the browser a short while to load jQuery */
var myCode = setTimeout(function() {
    var url = "reader.js";
        $.getScript("http://localhost:8080/" + url, function() {
        read();
        });
    },1000);    