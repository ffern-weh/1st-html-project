document.addEventListener("DOMContentLoaded", function () {
    var nameNode = document.getElementById("name");

    if (nameNode) {
        nameNode.addEventListener("click", function () {
            alert("Welcome to my page!");
        });
    } else {
        console.error("Element with id 'name' not found.");
    }
});
