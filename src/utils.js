export function displayDialogue(text, onDisplayEnd){
    const dialogueUI=document.getElementById("textbox-container");
    const dialogue =document.getElementById("dialogue");

    dialogueUI.style.display="block";

    //text scrolling
    let index=0;
    let currenText="";
    const intervalRef=setInterval(()=>{
        if (index<text.length){
            currenText+=text[index];
            dialogue.innerHTML=currenText;
            index++;
            return;
        }
        clearInterval(intervalRef);
    }
    , 5);

    const closeBTN= document.getElementById("close");
    function onCloseBtnClick(){
        onDisplayEnd();
        dialogueUI.style.display="none";
        dialogue.innerHTML="";
        clearInterval(intervalRef);
        closeBTN.removeEventListener("click", onCloseBtnClick);
    }
    closeBTN.addEventListener("click", onCloseBtnClick);
}

export function setCamScale(k){
    const resizeFactor=k.width()/k.height();
    if (resizeFactor<1){
        k.camScale(k.vec2(1));
        return;
    }

    k.camScale(k.vec2(1.5));
}