    let canço = new Audio("audio1.mp3");
        let canço2 = new Audio("audio2.mp3")
document.getElementById("musica").addEventListener ("click", function () {

    canço.play();
})
document.getElementById("musica2").addEventListener("click", function () {
    
    canço2.play();
})
document.getElementById("musica1p").addEventListener ("click", function () {

    canço.pause();
})
document.getElementById("musica2p").addEventListener("click", function () {

    canço2.pause();
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

