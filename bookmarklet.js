var j = document.createElement("script");
j.src = "http://code.jquery.com/jquery-3.6.0.min.js";
document.head.appendChild(j);
var m = setTimeout(function() {
        $.getScript("http://localhost:8080/" + "reader.js", function() {
            window.alert("Loading RSM...");
            main();
        });
    },1000);    