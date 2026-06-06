window.addEventListener('DOMContentLoaded', () => {
    // Activate Bootstrap scrollspy on the main nav element.
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: mainNav.offsetHeight,
        });
    }

    // When on mobile variant, clicking a nav link doesn't automatically collapse the navbar. This code ensures it collapses.
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#mainNav .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
});
