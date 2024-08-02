document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const menuItems = document.querySelector('.topbox div');
    const burgerIcon = document.querySelector('.burger-icon');

    function toggleMenu() {
        const isOpen = menuToggle.checked;
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
        menuItems.style.display = isOpen ? 'flex' : 'none';
        burgerIcon.classList.toggle('cross', isOpen);
    }

    function closeMenu() {
        menuToggle.checked = false;
        toggleMenu();
    }

    function handleWindowSize() {
        const screenWidth = window.innerWidth;

        if (screenWidth <= 768) {
            menuToggle.addEventListener('change', toggleMenu);
            menuItems.addEventListener('click', closeMenu);
            burgerIcon.addEventListener('click', toggleMenu);
        } else {
            menuToggle.removeEventListener('change', toggleMenu);
            menuItems.removeEventListener('click', closeMenu);
            burgerIcon.removeEventListener('click', toggleMenu);
        }
    }

    handleWindowSize();

    window.addEventListener('resize', handleWindowSize);
});


