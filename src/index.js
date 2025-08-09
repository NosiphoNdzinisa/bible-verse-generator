function displayVerse(response) {
    console.log("verse generated");
    new Typewriter("#verse", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
    });
    }


function generateVerse(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("user-instructions");
    let apiKey = "46eb1514fecb5a730ct10b7d5o64c5f7";
    let prompt = `User instructions: Generate a bible verse about ${instructionsInput.value}`;
    let context =
    "You are a Bible verse expert who provides accurate scripture with references, and explains it in a short, uplifting sentence.Make sure to follow user instructions.";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    console.log("Generating verse");
    console.log(`prompt: ${prompt}`);
    console.log(`context: ${context}`);
    
    axios.get(apiUrl).then(displayVerse)
}


let verseFormElement = document.querySelector("verseGeneratorForm");
verseFormElement.addEventListener("submit", generateVerse);