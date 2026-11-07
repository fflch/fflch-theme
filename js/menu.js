var $ = jQuery;

(function() {
    function initMobileNav() {
        var isMobile = $(window).width() < 768;
        var $button = $('.navbar-toggler');
        var $nav = $('#mainNavigation');

        if (!isMobile) {
            $nav.removeClass('show');
            $button.attr('aria-expanded', 'false');
            $('body').removeClass('mobile-menu-open');
            return;
        }

        $button.off('click.fflchMobile').on('click.fflchMobile', function (event) {
            event.preventDefault();
            event.stopPropagation();

            var expanded = $(this).attr('aria-expanded') === 'true';
            var shouldOpen = !expanded;

            $(this).attr('aria-expanded', String(shouldOpen));
            $nav.toggleClass('show', shouldOpen);
            $('body').toggleClass('mobile-menu-open', shouldOpen);
        });

        $(document).off('click.fflchMobileClose').on('click.fflchMobileClose', function (event) {
            if (!$(event.target).closest('.navbar-collapse, .navbar-toggler').length) {
                $nav.removeClass('show');
                $button.attr('aria-expanded', 'false');
                $('body').removeClass('mobile-menu-open');
            }
        });
    }

    $(document).ready(function () {
        initMobileNav();
        $(window).on('resize.fflchMobile', initMobileNav);
    });
})();

jQuery(document).ready(function(){
    if(jQuery(window).scrollTop() < 767) {
      jQuery('.dropdown-menu > li > svg, .main-navigation-dropdown svg').bind('click', toggleSubmenu);
    }
});

jQuery(window).resize(function(){
    if(jQuery(window).scrollTop() < 767) {
      jQuery('.dropdown-menu > li > svg, .main-navigation-dropdown svg').unbind('click', toggleSubmenu);
      jQuery('.dropdown-menu > li > svg, .main-navigation-dropdown svg').bind('click', toggleSubmenu);
    }
});

function toggleSubmenu(){
    var li = jQuery(this).parent();
    jQuery(li).find('.dropdown-menu').toggleClass('toggle');
}

$.fn.dropdown = (function() {
    var $bsDropdown = $.fn.dropdown;
    return function(config) {
        if (typeof config === 'string' && config === 'toggle') {
            $('.has-child-dropdown-show').removeClass('has-child-dropdown-show');
            $(this).closest('.dropdown').parents('.dropdown').addClass('has-child-dropdown-show');
        }
        var ret = $bsDropdown.call($(this), config);
        $(this).off('click.bs.dropdown');
        return ret;
    }
})();

$(function() {
    $('.dropdown [data-toggle="dropdown"]').on('click', function(e) {
        $(this).dropdown('toggle');
        e.stopPropagation();
    });
    $('.dropdown').on('hide.bs.dropdown', function(e) {
        if ($(this).is('.has-child-dropdown-show')) {
            $(this).removeClass('has-child-dropdown-show');
            e.preventDefault();
        }
        e.stopPropagation();
    });
});


