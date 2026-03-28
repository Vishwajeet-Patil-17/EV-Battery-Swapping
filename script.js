function checkAnswer(option) {
    const result = document.getElementById("result");

    if (option === "b") {
        result.innerHTML = "Correct! Battery swapping reduces downtime significantly.";
        result.style.color = "green";
    } else {
        result.innerHTML = "Incorrect. Try again!";
        result.style.color = "red";
    }
}