$(function () {

    // NAV
    const portfolio = document.getElementById('main');
    const contact = document.getElementById('contact');

    $('#portfolio').on("click", () => {
        if (portfolio.style.display === 'block') {
            portfolio.style.display = 'none';
        } else {
        portfolio.style.display = 'block';
        contact.style.display = 'none';
        }
    });

    $('#about').on("click", () => {
        if (contact.style.display === 'block') {
            contact.style.display = 'none';
        } else {
        portfolio.style.display = 'none';
        contact.style.display = 'block';
        }
    });

    // MODALS
    $('[data-toggle="popover"]').popover({
        placement: 'top',
        trigger: 'hover'
    });

});