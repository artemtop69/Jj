document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('navbar');
    const menuToggle = document.getElementById('mobile-menu');

    // обработчик для открытия/закрытия меню
    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
    });

    // обработчик для закрытия меню при клике вне его
    document.addEventListener('click', function(event) {
        if (!mobileMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            mobileMenu.classList.remove('active');
        }
    });
});