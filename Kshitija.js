// script for adding an list item on clicking MORE button
window.onload = function () {
    let moreBtn = document.getElementById("more-btn")
    let listElement = document.getElementById("my-list")
    moreBtn.addEventListener("click", function () {
        let listItem = document.createElement("li")
        listItem.innerHTML = "unknown";
        listElement.appendChild(listItem)
    })

    // script for adding random four characters to the original text of span
    let allSpan = document.querySelectorAll('span')
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for (let span of allSpan) {
        span.innerHTML += " ";
        // https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
        for (let i = 0; i < 4; i++) {
            span.innerHTML += characters.charAt(Math.floor(Math.random() * characters.length))
        }
    }
}