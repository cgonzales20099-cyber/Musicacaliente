    let canço = new Audio("audio1.mp3");
        let canço2 = new Audio("audio2.mp3");
        let canço3 = new Audio("Cancion3.mp3")
    document.getElementById("musica3").addEventListener ("click", function () {

    canço3.play();
})
   document.getElementById("musica3p").addEventListener ("click", function () {

    canço3.pause();
})

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

function reiniciarCanciones() {
    [canço, canço2, canço3].forEach(audio => {
        audio.pause();       
        audio.currentTime = 0; 
    });
    console.log("Canciones reiniciadas");
}


document.addEventListener("keydown", function(event) {
    
    if (event.key === "r" ) {
        reiniciarCanciones();
    }
});

let so = new Audio("sound1.mp3");
let so2 = new Audio("sound2.mp3");
let so3 = new Audio("sound3.mp3");
let so4 = new Audio("sound4.mp3");
let so5 = new Audio("sound5_reverse.mp3");

document.addEventListener("keydown", function (e) {

    if (e.key == "a") {
        so.play();
    }

    if (e.key == "s") {
        so2.play();
    }
      if (e.key == "x") {
        so2.pause();
    }

    if (e.key == "d") {
        so3.play();
    }

    if (e.key == "c") {
        so3.pause();   
    }

    if (e.key == "f") {
        so4.play();
    }

    if (e.key == "v") {
        so4.pause();
    }

    if (e.key == "g") {
        so5.play();
    }

});
