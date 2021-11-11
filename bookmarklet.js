var jQueryLib = document.createElement("script");
jQueryLib.src = "http://code.jquery.com/jquery-3.6.0.min.js";
document.head.appendChild(jQueryLib);
var myCode = setTimeout(function() {
        $.getScript("http://localhost:8080/" + "reader.js", function() {
        main();
        });
    },1000);    