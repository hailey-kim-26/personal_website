document.addEventListener("DOMContentLoaded", () => {
  setTimeout(typeWriter, speed);

  const mobileIcon = document.querySelector(".mobile-icon");
  const menuLinks = document.querySelector(".menu-links");

  mobileIcon.addEventListener("click", () => {
    mobileIcon.classList.toggle("open");
    menuLinks.classList.toggle("open");
  });
});

const firstText = "cat README";
const secondText = [
    "Name: Hailey Kim",
    "Major: B.S. Computer Science",
    "Minor: Mathematics",
    "School: University of Nevada-Las Vegas",
    "Download my resume",
    "Visit my GitHub",
    "hailey@desktop:~$ "
  ];

let index = 0;
const speed = 120;

function typeWriter() {
  if (index < firstText.length) {
    document.getElementById("typewriter").innerHTML += firstText.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  } else {
    document.getElementById("cursor").style.display = 'none';
    showSecondText();
  }
}

function showSecondText() {
    setTimeout(() => {
        for (let i = 0; i < secondText.length; i++) {
            document.getElementById(`line${i + 1}`).classList.remove("hidden");
        }
        document.getElementById("final-cursor").style.display = 'inline-block';
    }, 1000); // Delay of 1 second (1000ms) before showing all lines
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(typeWriter, speed);
});
