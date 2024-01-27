// scripts.js

// Display a message on hover
function showHoverMessage() {
    alert("Hovering over the button!");
}

// Toggle visibility of an element
function toggleVisibility() {
    var hiddenElement = document.getElementById("hiddenElement");
    if (hiddenElement.style.display === "none") {
        hiddenElement.style.display = "block";
    } else {
        hiddenElement.style.display = "none";
    }
}

// Change font size of a text element
function changeFontSize() {
    var dynamicText = document.getElementById("dynamicText");
    var currentSize = parseInt(window.getComputedStyle(dynamicText, null).getPropertyValue('font-size'));
    dynamicText.style.fontSize = (currentSize + 2) + 'px';
}

// Display an image dynamically
function displayImage() {
    var imageContainer = document.getElementById("imageContainer");
    var img = document.createElement("img");
    img.src = "path/to/your/image.jpg"; // Replace with the actual path to your image
    img.alt = "Dynamic Image";
    imageContainer.appendChild(img);
}
