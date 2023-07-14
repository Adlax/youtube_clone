window.onload = () => {
    const burgerIcon = document.getElementById("burger");
    const leftNav = document.getElementById("left-nav");

    if(burgerIcon) {
        burgerIcon.addEventListener("click", () => {
            console.log("Clicked Burger");
            if(leftNav.style.display === "block") {
                leftNav.style.display = "none";
            } else {
                leftNav.style.display = "block";
            }
        });
        if(leftNav) {
            leftNav.addEventListener("mouseleave", () => {
                leftNav.style.display = "none";
            });
        }
    }
}