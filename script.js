/* ============================================
   LEAHU ELECTRI SERVICE - JQUERY LOGIC
   ============================================ */

$(document).ready(function() {
    // ========== CAROUSEL FUNCTIONALITY ==========
    let currentSlide = 0;
    const slides = $('.carousel-image');
    const slideCount = slides.length;

    function nextSlide() {
        slides.eq(currentSlide).removeClass('active');
        currentSlide = (currentSlide + 1) % slideCount;
        slides.eq(currentSlide).addClass('active');
    }

    // Auto slide every 5 seconds
    setInterval(nextSlide, 5000);

    // ========== STICKY NAVBAR ==========
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
            $('.back-to-top').addClass('show');
        } else {
            $('.navbar').removeClass('scrolled');
            $('.back-to-top').removeClass('show');
        }
    });

    // ========== SMOOTH SCROLLING ==========
    $('a.nav-link, a.btn-secondary').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 80
            }, 800);
        }
    });

    // ========== BACK TO TOP ==========
    $('#backToTop').on('click', function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
    });

    // ========== MODAL LOGIC ==========
    window.openModal = function(modalId) {
        $(`#${modalId}`).fadeIn(300).css('display', 'flex').addClass('open');
        $('body').css('overflow', 'hidden');
    };

    window.closeModal = function(modalId) {
        $(`#${modalId}`).fadeOut(300, function() {
            $(this).removeClass('open');
        });
        $('body').css('overflow', 'auto');
    };

    // Close modal on click outside content
    $('.modal').on('click', function(e) {
        if ($(e.target).is('.modal')) {
            const id = $(this).attr('id');
            closeModal(id);
        }
    });

    // ========== LANGUAGE SWITCHER ==========
    $('.lang-btn').on('click', function() {
        const lang = $(this).data('lang');
        const currentPage = window.location.pathname;
        let targetPage = 'index-en.html';

        if (lang === 'es') targetPage = 'index-es.html';
        if (lang === 'ro') targetPage = 'index-ro.html';

        if (!currentPage.includes(targetPage)) {
            window.location.href = targetPage;
        }
    });

    // ========== REVEAL ON SCROLL ==========
    const revealElements = $('[data-reveal]');
    
    function checkReveal() {
        const windowHeight = $(window).height();
        const scrollTop = $(window).scrollTop();
        
        revealElements.each(function() {
            const elementTop = $(this).offset().top;
            if (scrollTop + windowHeight > elementTop + 50) {
                $(this).addClass('revealed');
            }
        });
    }

    // Initial check and on scroll
    checkReveal();
    $(window).on('scroll', checkReveal);

    // ========== HOVER EFFECTS FOR CARDS ==========
    $('.service-card, .stat-card, .review-card').hover(
        function() { $(this).css('transform', 'translateY(-10px)'); },
        function() { $(this).css('transform', 'translateY(0)'); }
    );
});
