function nextPage() {
    document .getElementById ("page1").style.display = "none";

    document .getElementById ("page2").style.display = "block";
}
function moveButton() {

    let button = document.getElementById("noBtn");

    let x = Math.random() * 250 - 125;
    let y = Math.random() * 250 - 125;

    button.style.left = x + "px";
     button.style.top = y + "px";
}
function yesAnswer() {
       document .getElementById ("page2").style.display = "none";
        document .getElementById ("page3").style.display = "block";
        for (let i =0; i <30; i++) {
            let flower = document.createElement("div")
            flower.innerHTML ="💮";
            flower.className = "flower";
            flower.style.left = Math.random() * 100 + "vw";
            flower.style.animationDelay = Math.random() *2+ "s";
            document.body.appendChild(flower);
        }
}

