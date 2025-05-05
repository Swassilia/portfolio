// Fonction pour obtenir le chemin correct des ressources
function getAssetPath(path) {
    // Ajoutez le préfixe du dépôt GitHub
    return `${import.meta.env.BASE_URL}${path}`;
}

export function displayDialogue(text, onDisplayEnd) {
    const dialogueUI = document.getElementById("textbox-container");
    const dialogue = document.getElementById("dialogue");
    const SoundBtn= document.getElementById("sound");

    const textSound = new Audio(getAssetPath("click.wav")); 
    textSound.volume = 0.01;
    let SonOn=true;
   
    dialogueUI.style.display = "block";
    const messages = Array.isArray(text) ? text : [text];
    let currentMessageIndex = 0;
    let index = 0;
    let currenText = "";
    let intervalRef = null;

    function startTyping(message) {
        currenText = "";
        index = 0;
        dialogue.innerHTML = "";

        intervalRef = setInterval(() => {
            if (index < message.length) {
                currenText += message[index];
                dialogue.innerHTML = currenText;
            
                if (textSound.paused) {
                    textSound.currentTime = 0;
                    textSound.play().catch(() => {});
                }
                index++;
                return;
            }
            clearInterval(intervalRef);
            textSound.pause();
            textSound.currentTime = 0;
        }, 5);
    }
    const closeBTN = document.getElementById("close");
    function onCloseBtnClick() {
        if (intervalRef) clearInterval(intervalRef);

        if (index < messages[currentMessageIndex].length) {
            dialogue.innerHTML = messages[currentMessageIndex];
            index = messages[currentMessageIndex].length;
            return;
        }

        currentMessageIndex++;

        if (currentMessageIndex < messages.length) {
            startTyping(messages[currentMessageIndex]);
        } else {
            dialogueUI.style.display = "none";
            dialogue.innerHTML = "";
            closeBTN.removeEventListener("click", onCloseBtnClick);
            if (onDisplayEnd) onDisplayEnd();
        }
    }

    closeBTN.addEventListener("click", onCloseBtnClick);
    startTyping(messages[currentMessageIndex]);
}

export function setCamScale(k) {
    const resizeFactor = k.width() / k.height();
    if (resizeFactor < 1) {
        k.camScale(k.vec2(1));
        return;
    }

    k.camScale(k.vec2(1.5));
}