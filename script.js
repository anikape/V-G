let time = 3000,
    currentImageIndex = 0,
    images = document
    .querySelectorAll("#slider img")
max = images.length;

function nextImage() {

    images[currentImageIndex]
        .classList.remove("s1")

    currentImageIndex++ //++ pq são mais duas imagens após a primeira

    if (currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("s1")
}

function start() {
    setInterval(() => {
        // troca de imagem
        nextImage()
    }, time)
}

window.addEventListener("load", start)