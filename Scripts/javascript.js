function addToCart() {
    const productName = document.getElementById("productName").innerText;
    alert(`${productName} added to cart.`);
}

function buyNow() {
    const productName = document.getElementById("productName").innerText;
    alert(`${productName} Purchased successfully.`);
    window.location.href = "../products.html";
}

function startTimer() {
    let totalSeconds = 315900;
    const timer = document.getElementById("timer");

    setInterval(function() {
        if (totalSeconds >= 0) {
            let d = Math.floor(totalSeconds / 86400);
            let h = Math.floor((totalSeconds / 3600) % 24);
            let m = Math.floor((totalSeconds / 60) % 60);
            let s = totalSeconds % 60;

            timer.innerText = (d + "d " + h + "h " + m + "m " + s + "s");
            totalSeconds--;
        }
    }, 1000);
}

startTimer();