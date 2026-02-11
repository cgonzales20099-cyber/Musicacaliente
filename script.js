
document.getElementById("musica").addEventListener ("click", function () {
    let canço = new Audio("audio1.mp3")
    canço.play();
})
document.getElementById("musica2").addEventListener("click", function () {
    let canço = new Audio("audio2.mp3")
    canço.play();
})
document.getElementById("musica").addEventListener ("click", function () {
    let canço = new Audio("audio1.mp3")
    canço.pause();
})
document.getElementById("musica2").addEventListener("click", function () {
    let canço = new Audio("audio2.mp3")
    canço.pause();
})


document.addEventListener("keydown", function (e) {
    if (e.key == "a") {
        let so = new Audio("audio1.mp3")
        so.play();
    }
    if (e.key == "c") {
        let so2 = new Audio("audio1.mp3")
        so2.play();
    }
    if (e.key == "b") {
        let so3 = new Audio("audio1.mp3")
        so3.play();
    }
})

