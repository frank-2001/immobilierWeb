// Initialize and Configure Magnific Popup Lightbox Plugin
$('.popup-gallery').magnificPopup({
    delegate: '.house-gallery',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    },
}); 

// Initialize and Configure Scroll Reveal Animation
window.sr = ScrollReveal();
sr.reveal('.sr-icons', {
    duration: 1500,
    scale: 0.3,
    distance: '0px'
}, 200);
sr.reveal('.sr-img', {
    duration: 2500,
    delay: 800
});
