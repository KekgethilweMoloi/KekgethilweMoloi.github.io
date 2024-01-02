// Function to handle button click event
function handleClick() {
    alert("Hello! This is a simple portfolio website.");
}

// Add event listener to the button
document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementById("clickButton");
    if (button) {
        button.addEventListener("click", handleClick);
    }
});
