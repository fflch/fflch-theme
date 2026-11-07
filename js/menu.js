var $ = jQuery;

(function () {
  function initMobileNav() {
    var isMobile = $(window).width() < 768;
    var $button = $('.navbar-toggler');
    var $nav = $('#mainNavigation');

    if (!isMobile) {
      $nav.removeClass('show in');
      $button.attr('aria-expanded', 'false');
      return;
    }

    $button.off('click.fflchMobile').on('click.fflchMobile', function (event) {
      event.preventDefault();
      event.stopPropagation();

      var expanded = $(this).attr('aria-expanded') === 'true';
      var shouldOpen = !expanded;

      $(this).attr('aria-expanded', String(shouldOpen));
      $nav.toggleClass('show', shouldOpen);
      $nav.toggleClass('in', shouldOpen);
    });

    $('.main-navigation-dropdown .submenu-toggle, .dropdown-submenu .submenu-toggle').off('click.fflchSubmenu').on('click.fflchSubmenu', function (event) {
      event.preventDefault();
      event.stopPropagation();

      var $toggle = $(this);
      var $parent = $toggle.closest('.main-navigation-dropdown, .dropdown-submenu');
      var $menu = $parent.find('> .dropdown-menu');
      var isOpen = $toggle.attr('aria-expanded') === 'true';

      if (!$menu.length) {
        return;
      }

      $toggle.attr('aria-expanded', String(!isOpen));
      $menu.toggleClass('show', !isOpen);
      $menu.toggleClass('toggle', !isOpen);
      $parent.toggleClass('open', !isOpen);
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


