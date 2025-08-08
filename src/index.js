function generateVerse(event) {
    event.preventDefault();


new Typewriter("#verse", {
    strings: ["Hello", "World"],
    autoStart: true,
    delay: 1,
    cursor: "",
});
verseElement.innerHTML = ""
}


let verseFormElement = document.querySelector("verseGeneratorForm");
verseFormElement.addEventListener("submit", generateVerse);