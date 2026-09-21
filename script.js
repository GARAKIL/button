const scrollTopBtn = document.getElementById('btn-scroll-top');

scrollTopBtn.addEventListener('click', function() {
    if (typeof gtag === 'function') {
        gtag('event', 'click_scroll_top_btn');
    }

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
