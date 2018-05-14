const subtitleFirst = document.getElementById("item-1-subtitle");
const image1 = document.getElementById("image-1");

function changeSubtitleFirst() {
    subtitleFirst.innerHTML = "www.test.com";
    image1.classList.add("move-from-left");

}

function firsItemOff() {
    subtitleFirst.innerHTML = "Description of the project";
    image1.classList.remove("move-from-left");

}