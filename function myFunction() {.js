function myFunction() {
    let x = document.getElementById("myTopnav");
    if (x.classList.contains("responsive")) {
        x.classList.remove("responsive");
    }
    else {
        X.classList.add("responsive");
    }
}
document.getElementById("contactForm")
.addEventListener("submit", function(event) {
    event.preventDefault(); 
    alert("Form submitted successfully!");
});// Prevent the form from submitting normally