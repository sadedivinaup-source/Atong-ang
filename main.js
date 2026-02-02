/* ============================= scroll section active link ===============================*/
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');
let menuIcon = document.querySelector('#menu-icon'); // make sure your icon has this id
let navbar = document.querySelector('.navbar'); // make sure your navbar has this class

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => { 
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) { 
            navlinks.forEach(link => link.classList.remove('active'));
            let activeLink = document.querySelector(`header nav a[href="#${id}"]`);
            if(activeLink) activeLink.classList.add('active');
        }
    });

    /* ============================= sticky navbar ===============================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', top > 100);

    /* ============================= remove toggle icon and navbar ===============================*/
    if(menuIcon && navbar){
        menuIcon.classList.remove('fa-xmark');
        navbar.classList.remove('active');
    }
};

/* ============================= scroll reveal ===============================*/
if (typeof ScrollReveal !== 'undefined') {
    ScrollReveal({ distance: '80px', duration: 2000, delay: 200 });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });
}

/* ============================= typed js ===============================*/
if (typeof Typed !== 'undefined') {
    const typed = new Typed('.multiple-text', {
        strings: ['Samuel Divina'],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        loop: true
    });
}
