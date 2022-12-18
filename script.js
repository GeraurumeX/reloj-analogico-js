function setClock() {
    // Obtener el tiempo actual
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    //Calcular la rotacion de las manecillas, suando el tiempo actual. (360 grados)
    hrValue = (hours * 30) + (minutes * 6) / 12;
    minValue = minutes * 6;
    secValue = seconds * 6;

    // Agregar la rotacion calculada de las manecillas
    document.querySelector(".hr-hand").style.transform = "rotate(" + hrValue + "deg)";

    document.querySelector(".min-hand").style.transform = "rotate(" + minValue + "deg)";

    document.querySelector(".sec-hand").style.transform = "rotate(" + secValue + "deg)";
}

setInterval(setClock, 1000);