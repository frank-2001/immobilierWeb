//jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function() {
        $(document).on('click', 'a.page-scroll', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
        
    });

// Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

// Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse .page-scroll').click(function() {
        $('.navbar-toggle:visible').click();
    })

//Dropdown icon alternance
    $('.dropdown-toggle').click(function(){
        if ($(this).find('.fa').hasClass('fa-angle-up')) {
            $(this).find('.fa').removeClass('fa-angle-up');
            $(this).find('.fa').addClass('fa-angle-down');
        }else{
            $(this).find('.fa').removeClass('fa-angle-down');
            $(this).find('.fa').addClass('fa-angle-up');
        }
    })

// Search Button
    $('.search-field').on('click', '#search-field-btn', function () {
        if ($('body').hasClass('search-show')) {
            $('body').removeClass('search-show');
        } else {
            $('body').addClass('search-show');
        }
            return false;
    });

// Search Close
    $('body.search-show').on('click', '#search-field-btn', function () {
        if ($('body').hasClass('search-show')) {
            $('body').removeClass('search-show');
        }
        return false;
    });

    $('html').on('click', 'body.search-show', function () {
        $('body').removeClass('search-show');
    });
    $('body').on('click', '.search-field', function(event){
        event.stopPropagation();
    });

// Activation of the carousel
    $('.carousel').carousel({
        interval: 8000// the speed
    })

// For Page2 Social Icon appearance
    $('.social-icon-menu').click(function(){
        $(this).find('.socials-icon').slideToggle(1200);
    })

// Counters | Progress bar
    if ($('.facts-i-percent').length > 0) {
        var waypoints = $('.facts-i-percent').eq(1).waypoint({
            handler: function(direction) {
                $('.facts-i-percent').each(function () {

                    var bar = new ProgressBar.Circle('#' + $(this).attr('id'), {
                        strokeWidth: 4,
                        trailWidth: 1,
                        easing: 'easeInOut',
                        duration: 1400,
                        text: {
                            autoStyleContainer: false
                        },
                        from: { color: '#dddddd', width: 1 },
                        to: { color: '#d92400;', width: 4 },
                        step: function(state, circle) {
                            circle.path.setAttribute('stroke', state.color);
                            circle.path.setAttribute('stroke-width', state.width);

                            var value = Math.round(circle.value() * 100);
                            if (value === 0) {
                                circle.setText('');
                            } else {
                                circle.setText(value + '<span>%</span>');
                            }

                        }
                    });

                    bar.animate($(this).data('num'));  // Number from 0.0 to 1.0

                });

                this.disable();
            },
            offset: 'bottom-in-view'
        });
    }  
  
// Counters
    if ($('.facts-i-num').length > 0) {
        var waypoints = $('.facts-i-num').eq(1).waypoint({
            handler: function(direction) {
                $('.facts-i-num').each(function () {
                    $(this).prop('Counter',0).animate({
                        Counter: $(this).data('num')
                    }, {
                        duration: 3000,
                        step: function (now) {
                            $(this).text(Math.ceil(now));
                        }
                    });
                });
                this.disable();
            },
            offset: 'bottom-in-view'
        });
    }


// Accordions
    $('.accordion-tab-cont').on('click', '.accordion-tab-mob', function () {
        if ($(this).hasClass('active') || $(this).attr('data-accordion') == '')
            return false;
        $(this).parents('.accordion-tab-cont').find('.accordion-tab-mob').removeClass('active');
        $(this).addClass('active');

        $($(this).attr('data-accordion')).parents('.accordion-tab-cont').find('.accordion-tab').animate({
            'height': '0px'
        }, 350);
        $($(this).attr('data-accordion')).animate({
            'height': $($(this).attr('data-accordion')).find('.accordion-inner').outerHeight()+'px'
        }, 350);

        return false;
    });

//contact button appears after scrolling
    var fixed = false;
    $(document).scroll(function() {
        if ($(this).scrollTop() > 150) {
            if (!fixed) {
                fixed = true;
                // contact button fixed
                $('.contact-icon').show("slow", function() {
                    $('.contact-icon').css({
                        position: 'fixed',
                        display: 'block'
                    });
                });
            }
        } else {
            if (fixed) {
                fixed = false;
                $('.contact-icon').hide("slow", function() {
                    $('.contact-icon').css({
                        display: 'none'
                    });
                });
            }
        }
    });
    
// Floating label headings for the contact form
    $(function() {
        $("body").on("input propertychange", ".form-block", function(e) {
            $(this).toggleClass("form-block-value", !!$(e.target).val());
        }).on("focus", ".form-block", function() {
            $(this).addClass("form-block-focus");
        }).on("blur", ".form-block", function() {
            $(this).removeClass("form-block-focus");
        });
    });