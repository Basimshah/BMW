//hamburger functionality
//Toggling the hamburger menu
let navBar = document.querySelector('#header-style');
let menuBar = document.querySelector('#bar');

menuBar.onclick = () => {
    menuBar.classList.toggle('fa-solid.fa-bars');
    navBar.classList.toggle('show_bar');
}



//function to show text in "BMW_Series_Logos" div

function toggleText(textNumber) {
    // Hide all text elements
    var texts = document.getElementsByClassName('text');
    for (var i = 0; i < texts.length; i++) {
        texts[i].classList.remove('show');
    }

    // Show the selected text element
    var selectedText = document.getElementById('text' + textNumber);
    selectedText.classList.add('show');
}

