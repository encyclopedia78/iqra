// JavaScript für die Funktionalität der Buttons

// Event-Listener für den Validieren-Button
document.getElementById("validateButton").addEventListener("click", function() {
    const inputs = document.getElementsByClassName("wortInput");

    for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i];
        const expectedWord = input.getAttribute("data-correct-answer");
        const userInput = input.value.trim();

        if (userInput.toLowerCase() === expectedWord.toLowerCase()) {
            input.style.backgroundColor = "lightgreen";
        } else {
            input.style.backgroundColor = "orangered";
        }
    }
});

// Event-Listener für den Richtige Antworten einfügen-Button
document.getElementById("populateButton").addEventListener("click", function() {
    const inputs = document.getElementsByClassName("wortInput");

    for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i];
        const expectedWord = input.getAttribute("data-correct-answer");
        input.value = expectedWord;
        input.style.backgroundColor = ""; // Zurücksetzen der Hintergrundfarbe
    }
});

// Event-Listener für den Alle Felder löschen-Button
document.getElementById("clearButton").addEventListener("click", function() {
    const inputs = document.getElementsByClassName("wortInput");

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
        inputs[i].style.backgroundColor = ""; // Zurücksetzen der Hintergrundfarbe
    }
});
