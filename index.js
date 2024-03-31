function handleLoad() {
    var spinner = document.getElementById("spinner");
    var spinnerText = document.getElementById("spinner-loading");
    var loadedText = document.getElementById("spinner-loaded");
    setTimeout(function () {
        spinner.remove();
        spinnerText.remove();
        loadedText.style.display = "block";
    }, Math.floor(Math.random() * (3000 - 500 + 1) + 500));
}

function handleClick() {
    if (document.getElementById("spinner") != null) {
        return;
    } else {
        document.title = "\u161B\u2050\u1550\u1437";
        document.getElementById("cover").remove();
        document.getElementById("audio").play();
    }
}