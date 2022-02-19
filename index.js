var map1 = document.getElementById("map-1")
var map2 = document.getElementById("map-2")

document.getElementById("home").addEventListener("click", function() {
    map1.style.display = "block";
    map2.style.display = "none";
});

document.getElementById("alternate").addEventListener("click", function() {
    map1.style.display = "none";
    map2.style.display = "block";
});