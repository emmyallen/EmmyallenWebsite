let newX = 0, newY = 0, startX = 0, startY = 0;
let popup = document.getElementById("popup");
const card = document.getElementById('card');
const dragBar = document.getElementById('dragBar');

dragBar.addEventListener('mousedown', mouseDown);

function mouseDown(e) {
    e.preventDefault();
    startX = e.clientX;
    startY = e.clientY;

    // disable centering transform when dragging
    card.style.transform = "none";

    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseup', mouseUp);
}

function mouseMove(e) {
    e.preventDefault();

    newX = e.clientX - startX;
    newY = e.clientY - startY;

    card.style.left = (card.offsetLeft + newX) + 'px';
    card.style.top = (card.offsetTop + newY) + 'px';

    startX = e.clientX;
    startY = e.clientY;
}

function mouseUp() {
    document.removeEventListener('mousemove', mouseMove);
    document.removeEventListener('mouseup', mouseUp);
}

function openPopup() {
    popup.classList.add("open-popup");

    // Center the popup each time it's opened
    card.style.top = "50%";
    card.style.left = "50%";
    card.style.transform = "translate(-50%, -50%)";
}

function closePopup() {
    popup.classList.remove("open-popup");
}



// DS Popup
function openDSPopup() {
    document.getElementById("popupDS").classList.add("open-popup");
}

function closeDSPopup() {
    document.getElementById("popupDS").classList.remove("open-popup");
}


// DS Popup open/close
function openDSPopup() {
    document.getElementById("popupDS").classList.add("open-popup");
}

function closeDSPopup() {
    document.getElementById("popupDS").classList.remove("open-popup");
}

// DS Contact Form Submission
document.getElementById("dsContactForm").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent default form submission

    emailjs.sendForm('service_tinc0h9', 'template_linp07r', this)
        .then(function() {
            document.getElementById("dsSuccessMessage").style.display = "block";
            document.getElementById("dsContactForm").reset();
        }, function(error) {
            alert('Failed to send message: ' + JSON.stringify(error));
        });
});


// DS Popup draggable
let newXDS = 0, newYDS = 0, startXDS = 0, startYDS = 0;
const cardDS = document.getElementById('cardDS');
const dragBarDS = document.getElementById('dragBarDS');

dragBarDS.addEventListener('mousedown', mouseDownDS);

function mouseDownDS(e) {
    e.preventDefault();
    startXDS = e.clientX;
    startYDS = e.clientY;

    // disable centering transform when dragging
    cardDS.style.transform = "none";

    document.addEventListener('mousemove', mouseMoveDS);
    document.addEventListener('mouseup', mouseUpDS);
}

function mouseMoveDS(e) {
    e.preventDefault();

    newXDS = e.clientX - startXDS;
    newYDS = e.clientY - startYDS;

    cardDS.style.left = (cardDS.offsetLeft + newXDS) + 'px';
    cardDS.style.top = (cardDS.offsetTop + newYDS) + 'px';

    startXDS = e.clientX;
    startYDS = e.clientY;
}

function mouseUpDS() {
    document.removeEventListener('mousemove', mouseMoveDS);
    document.removeEventListener('mouseup', mouseUpDS);
}


function openDSPopup() {
    const popupDS = document.getElementById("popupDS");
    popupDS.classList.add("open-popup");
    document.body.style.cursor = "url('img/42150.png') 0 0, auto";
}

function closeDSPopup() {
    const popupDS = document.getElementById("popupDS");
    popupDS.classList.remove("open-popup");
    document.body.style.cursor = "auto";
}

