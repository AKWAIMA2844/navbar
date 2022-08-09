let h = document.getElementsByClassName('ham')[0];
let m = document.getElementsByClassName('nav-details')[0];

h.addEventListener("click", function() {
    if (m.style.display == "none" || m.style.display == ""){
        m.style.display="flex";
    } else {
        m.style.display = "none";
    }
}) 