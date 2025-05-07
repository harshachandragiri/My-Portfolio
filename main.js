var typed = new Typed(".typewriter-text ", {
    strings: [
        " ",
        "MEAN-STACK Developer",

        "MERN-STACK Developer",

        "PYTHON & JAVA DEVELOPER",

        "GEN-AI DEVELOPER"
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
});

let menuIcon = document.querySelector('#menu-icons');
let navbar = document.querySelector('.navbar');

// let section = document.querySelectorAll('.section');
let sections = document.querySelectorAll('.section');
let navLinks = document.querySelectorAll('.header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = window.offsetTop - 150;
        let height = window.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

let closeMenu = document.querySelector('#close-menu');

closeMenu.onclick = () => {
    navbar.classList.remove('active');
    menuIcon.classList.add('fa-bars');
    menuIcon.classList.remove('fa-xmark');
};

function Dark() {
    // alert("Working");
    let dataval = document.getElementById('bil');
    // dataval.innerHtml="";
    // dataval.innerHtml="Dark";
    // dataval.style.color = 'black';
    dataval.style.backgroundColor = 'red';
    alert("Fine")

}









