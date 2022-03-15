let textLength = 0;
let text = 'Aşağıdakı şəkillərə klikləyərək portfoliomuz ilə yaxından tanış ola bilərsiniz.';

function type() {
    let textChar = text.charAt(textLength++);
    let paragraph = document.getElementById("typed");
    let charElement = document.createTextNode(textChar);
    paragraph.appendChild(charElement);
    if(textLength < text.length+1) {
        setTimeout('type()', 50);
    } else {
        text = '';
    }
}

document.addEventListener("DOMContentLoaded", function() {
    type();
});

