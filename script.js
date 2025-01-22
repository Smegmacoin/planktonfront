document.getElementById("sing-button").addEventListener("click", async () => {
    const textInput = document.getElementById("text-input").value;
    const audioPlayer = document.getElementById("audio-player");

    if (!textInput) {
        alert("Please enter some text!");
        return;
    }

    try {
        const response = await fetch("https://plankton-fee75e91b57e.herokuapp.com/sing", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ text: textInput }),
        });

        const data = await response.json();
        if (data.error) {
            alert(data.error);
        } else {
            // Placeholder for audio file (will update with TTS)
            audioPlayer.src = `data:audio/wav;base64,${data.audio}`;
            audioPlayer.play();
        }
    } catch (error) {
        alert("Error connecting to Plankton Karaoke backend!");
        console.error(error);
    }
});
