$(function () {

    // NAV
    const portfolio = document.getElementById('main');
    const contact = document.getElementById('contact');

    // PORTFOLIO BUTTON
    $('#portfolio').on("click", () => {
        if (portfolio.style.display === 'block') {
            portfolio.style.display = 'none';
        } else {
        portfolio.style.display = 'block';
        contact.style.display = 'none';
        }
    });

    $('#portfolio').on("click", () => {
        if (marquee.style.display === 'block') {
            marquee.style.display = 'none';
    };
    });

    // CONTACT BUTTON
    $('#about').on("click", () => {
        if (contact.style.display === 'block') {
            contact.style.display = 'none';
        } else {
        portfolio.style.display = 'none';
        contact.style.display = 'block';
        }
    });

    $('#about').on("click", () => {
        if (marquee.style.display === 'block') {
            marquee.style.display = 'none';
    };
    });

    // MAIN BUTTON
    $('#front').on("click", () => {
        if (contact.style.display === 'block') {
            contact.style.display = 'none';
        } else {
        portfolio.style.display === 'block'
            portfolio.style.display = 'none';
        };
    });

    $('#front').on("click", () => {
        if (marquee.style.display === 'none') {
            marquee.style.display = 'block';
    };
    });

    // MODALS
    $('[data-toggle="popover"]').popover({
        placement: 'top',
        trigger: 'hover'
    });

});