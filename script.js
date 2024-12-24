/*
    Typewriter effect and blinking cursor in Text line
*/
const firstText = "cat README";
const secondText = [
    "Name: Hailey Kim",
    "Major: B.S. Computer Science",
    "Minor: Mathematics",
    "School: University of Nevada-Las Vegas",
    "hailey@desktop:~$ "
];

let index = 0; // track current position in the firstText
const speed = 100; // speed in milliseconds for typing effect

function typeWriter() {
    if (index < firstText.length) {
        document.getElementById("typewriter").innerHTML += firstText.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
    else {
        // hide the initial cursor after the firstText is fully typed out
        document.getElementById("cursor").style.display = 'none';
        showSecondText(); // Show all the second text lines simultaneously
    }
}

function showSecondText() {
    for (let i = 0; i < secondText.length; i++) {
        const lineId = `line${i + 1}`;
        document.getElementById(lineId).classList.remove('hidden');
    }
    document.getElementById("final-cursor").style.display = 'inline-block';
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeWriter, speed); // start the typewriter effect once the document is loaded
});

document.querySelector('.mobile-icon').addEventListener('click', function() {
    this.classList.toggle('open');
    document.querySelector('.menu-links').classList.toggle('open');
});
