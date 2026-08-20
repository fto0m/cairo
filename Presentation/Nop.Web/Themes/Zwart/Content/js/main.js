$(document).ready(function () {
  $(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    $('body').delay(350).css({ 'overflow': 'visible' });
  })

  var header_top_height = $('.header-top').height();
  $(window).scroll(function () {
    if ($(this).scrollTop() > header_top_height) {
      $('.global-header').css({
        'transform': 'translateY(' + "-" + header_top_height + "px" + ')',
        'transition': 'all 0.2s'
      });
    } else {
      $('.global-header').css({
        'transform': 'translateY(0)'
      });
    }
  })

  //mobile sidebar - old menu code disabled, using new MainMenu component instead
  // Check if old mobile-menu exists before attaching handlers (for backward compatibility)
  if ($('.mobile-menu').length > 0 && $('.mm-navbar').length === 0) {
    $('.menu-toggle-btn').on('click', function (e) {
      e.stopPropagation();
      $('.mobile-menu').toggleClass('isActive');
    })
    $('.mobile-menu').on('click', function (e) {
      e.stopPropagation();
    })
    $('body,html').on('click', function () {
      $('.mobile-menu').removeClass('isActive');
    })
  }

  // New MainMenu mobile menu handlers
  function toggleMobileMenu(event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    
    var menu = document.querySelector('.mm-navbar');
    if (menu) {
      var isClosed = menu.classList.contains('closed');
      
      if (isClosed) {
        var headerTop = document.querySelector('.header-top');
        var topNavContainer = document.querySelector('.top-nav-container');
        var headerTopHeight = headerTop ? headerTop.offsetHeight : 0;
        var topNavHeight = topNavContainer ? topNavContainer.offsetHeight : 0;
        var totalHeaderHeight = headerTopHeight + topNavHeight;
        
        menu.style.top = totalHeaderHeight + 'px';
        menu.style.height = 'calc(100vh - ' + totalHeaderHeight + 'px)';
        
        menu.classList.remove('closed');
        menu.classList.add('open');
        document.body.classList.add('menu-open');
      } else {
        menu.classList.add('closed');
        menu.classList.remove('open');
        document.body.classList.remove('menu-open');
      }
    }
    return false;
  }
  
  window.toggleMobileMenu = toggleMobileMenu;
  
  function closeMobileMenu() {
    var menu = document.querySelector('.mm-navbar');
    if (menu) {
      menu.classList.add('closed');
      menu.classList.remove('open');
      document.body.classList.remove('menu-open');
      
      // Reset all submenus when menu is closed
      $(menu).find('.show').removeClass('show');
      $(menu).find('.submenu-open').removeClass('submenu-open');
    }
  }
  
  window.closeMobileMenu = closeMobileMenu;

  // Close menu button
  $(document).on("click", "#close-menu", function(e) {
    e.preventDefault();
    closeMobileMenu();
  });
  
  // Handle submenu toggle on mobile
  $(document).on('click', '.mm-navbar .sublist-toggle', function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    var $toggle = $(this);
    var $menuItem = $toggle.closest('.mm-nav-item');
    var $sublist = $menuItem.children('.sublist').first();
    
    // Toggle the current submenu
    if ($sublist.hasClass('show')) {
      // Close submenu
      $sublist.removeClass('show');
      $menuItem.removeClass('submenu-open');
    } else {
      // Close any other open submenus at the same level
      $menuItem.siblings('.mm-nav-item.submenu-open').each(function() {
        $(this).removeClass('submenu-open');
        $(this).children('.sublist').removeClass('show');
      });
      
      // Open this submenu
      $sublist.addClass('show');
      $menuItem.addClass('submenu-open');
    }
  });
  
  // Close menu when clicking outside
  $(document).on("click", function(e) {
    if (!$(e.target).closest('.mm-navbar, .menu-toggle-btn, #mobile-menu-toggle').length) {
      closeMobileMenu();
      // Reset all submenus
      $(".mm-navbar .show").removeClass("show");
      $(".mm-navbar .submenu-open").removeClass("submenu-open");
    }
  });

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });
  //scroll up
  $('.scrollup').on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
  });


  var header_height = $(".global-header").height();
  $(".body-container, .products-list-header").css("margin-top", header_height);

  $(window).resize(function (e) {
    var header_height = $(".global-header").height();
    $(".body-container, .products-list-header").css("margin-top", header_height);
  });

  //category slider
  var isRtl = $('html').attr('dir') === 'rtl';
  $('#category-adds').owlCarousel({
    dots: true,
    autoplay: true,
    nav: true,
    loop: true,
    rtl: isRtl,
    responsive: {
      0: {
        items: 1
      },
      575: {
        items: 2
      },
      768: {
        items: 2
      },
      992: {
        items: 4
      },
      1200: {
        items: 3
      },
      1500: {
        items: 3
      }
    }
  });

  //advanced - products - tab



  //related Product
  $('.related-products-grid .item-grid').addClass("ocarousel owl-carousel");
  $('#also-purchased-products, #related-product').owlCarousel({
    dots: true,
    autoplay: true,
    nav: true,
    loop: true,
    margin: 10,
    rtl: isRtl,
    responsive: {
      0: {
        items: 1
      },
      575: {
        items: 2
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      },
      1200: {
        items: 4
      },
      1500: {
        items: 6
      }
    }
  });



  // Set owl navigation icons - swap for RTL
  if (isRtl) {
    $(".owl-next").html("<i class='icon-right-arrow3'></i>");
    $(".owl-prev").html("<i class='icon-right-arrow31'></i>");
  } else {
    $(".owl-next").html("<i class='icon-right-arrow31'></i>");
    $(".owl-prev").html("<i class='icon-right-arrow3'></i>");
  }

  if (window.matchMedia('(max-width: 991px)').matches) {
    $(".collapse.show").removeClass("show");
    $("[data-toggle='collapse']").addClass('collapsed');
  } else {
  };

  new WOW().init();
})


function openFacebook(title, url) {
  window.open('http://www.facebook.com/sharer.php?u=' + encodeURIComponent(url) + '&t=' + encodeURIComponent(title));
  return false;
}

function openTwitter(title, url) {
  window.open("https://twitter.com/share?url=" + encodeURIComponent(url) + "&text=" + title);
  return false;
}

function openMessenger(title, url) {
  window.open('https://www.facebook.com/dialog/send?app_id=140586622674265&link=' + encodeURIComponent(url) + '&redirect_uri=' + encodeURIComponent(url));
  return false;
}

function openGmail(title, url) {
  window.open("https://mail.google.com/mail/u/?view=cm&fs=1&to&su=" + encodeURIComponent(title) + "&body=" + encodeURIComponent(url));
  return false;
}

function openLinkedin(title, url) {
  window.open("https://www.linkedin.com/sharing/share-offsite/?url=" + encodeURIComponent(url));
  return false;
}