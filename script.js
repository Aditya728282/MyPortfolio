document.querySelectorAll('.letter').forEach(letter => {
    letter.addEventListener('click', () => {
        const selectedLetter = letter.getAttribute('data-letter');
        const word = letter.getAttribute('data-word');
        playAnimation(selectedLetter, word);
        speakText(`${selectedLetter} for ${word}`);
    });
});

function playAnimation(letter, word) {
    const animationText = document.getElementById('animation-text');
    const objectImage = document.getElementById('object-image');

    // Update the text
    animationText.textContent = `${letter} for ${word}`;

    // Show the corresponding image
    objectImage.src = `${word.toLowerCase()}.png`; // Make sure you have an apple.png in your project folder
    objectImage.classList.remove('hidden');
    objectImage.style.transform = "scale(1)"; // reset scale
    objectImage.style.animation = "bounce 1s infinite";

    // Animate the object image (e.g., bounce or zoom effect)
    setTimeout(() => {
        objectImage.style.transform = "scale(1.2)";
    }, 100);
}

function speakText(text) {
    const msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
}
