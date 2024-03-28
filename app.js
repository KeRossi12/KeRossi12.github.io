const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const divLinks = document.querySelectorAll('.services__card');
const mainButton = document.querySelector('.main__btn');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

mainButton.addEventListener('click', function() {
    window.open("/content/Spring 2024 RossiKennethResume.pdf", '_blank').focus();
});

divLinks.forEach(e => e.addEventListener('click', () => {
    if (e.childNodes[1].innerHTML == "Project Eureka")
    {
        window.open("https://o3de.org/industries/education/", '_blank').focus();
    }
    else if (e.childNodes[1].innerHTML == "State of Matter")
    {
        window.open("https://store.steampowered.com/app/2844240/State_of_Matter/", '_blank').focus();
    }
}));