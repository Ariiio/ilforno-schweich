const hamburger = document.querySelector('.hamburger');
const linkContainer = document.querySelector('.link-container');
const links = document.querySelector('.links');
const link = document.querySelectorAll('.link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('burger-sleep');
    linkContainer.classList.toggle('active-sidebar');
    links.classList.toggle('active-items');
})

link.forEach((item) => {
    item.addEventListener('click', (e) => {
        hamburger.classList.remove('burger-sleep');
        linkContainer.classList.remove('active-sidebar');
        links.classList.remove('active-items');
        e.preventDefault();
        const id = e.currentTarget.getAttribute('href');
        const element = document.querySelector(id);
        let position = element.offsetTop - 89.85;
        if (id === '#left') position = 0;
        console.log(position);
        window.scrollTo({
            top: position,
            behavior: 'smooth'
        })
    })
})