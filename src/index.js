const base = "/Ragam-Certificate-Generator"
// const base =""
// const base = "/certificates"

button.addEventListener("click", function(e) {
    e.preventDefault();
    var s = document.getElementById("categories");
    var value=s.value;
    if(value == "none") {
        alert("Choose a Category");
        return;
    }
    if(value === "ragam") {
        window.location.href = base + '/categories.html?category=ragam21';
    }
    else {
        window.location.href = base + '/categories.html?category=ca21';
    }       
}, false);