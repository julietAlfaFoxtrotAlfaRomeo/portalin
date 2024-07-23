/*------------------------------------------------------------------

Project Name :      Vetra - HTML Admin Dashboard Template
Version :           1.0
Author :            Laborasyon
Author Portfolio :  https://themeforest.net/user/laborasyon/portfolio
Author Website :    https://laborasyon.com/

------------------------------------------------------------------*/
'use strict';

(function ($) {
  var wind_ = $(window),
      body_ = $('body'),
      doc_ = $(document),
      settings = {
    menu_level_icon: body_.hasClass('rtl') ? 'ti-angle-left' : 'bi bi-arrow-right' // ti-angle-up

  };
  flexTable(); // Active pages, automatically show on the menu

  if ($('.menu').length) {
    $('.menu .menu-body ul li a.active').parent().parents('li').addClass('open');
  }

  if ($('.header .header-menu').length) {
    $('.header .header-menu ul.navbar-nav li a.active').parent().parents('li').addClass('open');
  }

  var table_responsive_stack = $(".table-responsive-stack");
  table_responsive_stack.find("th").each(function (i) {
    $(".table-responsive-stack td:nth-child(" + (i + 1) + ")").prepend('<span class="table-responsive-stack-thead">' + $(this).text() + ":</span> ");
    $(".table-responsive-stack-thead").hide();
  });
  table_responsive_stack.each(function () {
    var thCount = $(this).find("th").length,
        rowGrow = 100 / thCount + "%";
    $(this).find("th, td").css("flex-basis", rowGrow);
  }); //------------------- Methods -------------------

  $.createOverlay = function () {
    if ($('.overlay').length < 1) {
      body_.addClass('no-scroll').append('<div class="overlay"></div>');
      $('.overlay').addClass('show');
    }
  };

  $.removeOverlay = function () {
    body_.removeClass('no-scroll sidebar-active');
    $('.overlay').remove();
  };

  function flexTable() {
    if (wind_.width() < 768) {
      $(".table-responsive-stack").each(function (i) {
        $(this).find(".table-responsive-stack-thead").show();
        $(this).find("thead").hide();
      }); // window is less than 768px
    } else {
      $(".table-responsive-stack").each(function (i) {
        $(this).find(".table-responsive-stack-thead").hide();
        $(this).find("thead").show();
      });
    }
  }

  function initNicescroll() {
    if (wind_.width() >= 1200) {
      if ($('.demo-code-preview > pre').length) {
        $('.demo-code-preview > pre').niceScroll();
      }

      if ($('.table-responsive').length) {
        $('.table-responsive').niceScroll();
      }

      if ($('.menu').length) {
        $('.menu .menu-body').niceScroll();
      }

      if ($('.dropdown-menu .dropdown-menu-body').length) {
        $('.dropdown-menu .dropdown-menu-body').niceScroll();
      }

      var header_dropdown = document.querySelectorAll('.header [data-bs-toggle="dropdown"]');
      header_dropdown.forEach(function (item) {
        item.addEventListener('show.bs.dropdown', function (e) {
          setTimeout(function () {
            $('.dropdown-menu .dropdown-menu-body').getNiceScroll().resize();
          }, 150);
        });
      });
    }
  }
  /*
  $('.table-responsive').on('show.bs.dropdown', function () {
   $('.table-responsive').css( "overflow", "inherit" );
  });
  $('.table-responsive').on('hide.bs.dropdown', function () {
   $('.table-responsive').css( "overflow", "auto" );
  })
   */


  function menuShowActivePage() {
    if ($('.menu').length) {
      var menu_active_link = $('.menu .menu-body ul li a.active');
      $('.menu .menu-body').scrollTop(menu_active_link.position().top - wind_.height() / 3);
    }
  }

  if ($('.chat-block').length > 0) {
    body_.addClass('chat-app');
    wind_.scrollTop(0);
  }

  $('.bg-image').each(function () {
    var item = $(this);
    item.css({
      'background': 'url(' + item.data('image') + ')'
    });
    setTimeout(function () {
      item.removeAttr('data-image');
    }, 100);
  }); //------------------- Events -------------------

  window.onresize = function () {
    flexTable();
  };

  doc_.on('click', '.overlay', function () {
    $.removeOverlay();
    $('.menu').removeClass('open');
  });
  doc_.on('click', '.menu ul li a.disabled', function () {
    return false;
  });
  doc_.on('click', '[data-sidebar-target]', function () {
    var target = $(this).data('sidebar-target');
    body_.addClass('no-scroll sidebar-active plate-show');
    $('.sidebar').removeClass('show');
    $('.sidebar' + target).addClass('show');
    $('.sidebar' + target + ' .sidebar-content').niceScroll();
    return false;
  });
  doc_.on('click', '*', function (e) {
    if (!$(e.target).is($('.sidebar, .sidebar *, [data-sidebar-target], [data-sidebar-target] *'))) {
      $('.sidebar').removeClass('show');
      body_.removeClass('no-scroll sidebar-active plate-show');
    }
  });
  wind_.on('load', function () {
    $('.preloader').fadeOut(300, function () {
      menuShowActivePage();
    });
    initNicescroll();
    setTimeout(function () {
      if ($('.menu').length) {
        $('.menu .menu-body ul li a').each(function () {
          var $this = $(this);

          if ($this.next('ul').length) {
            $this.append('<i class="sub-menu-arrow ' + settings.menu_level_icon + '"></i>');
          }
        });
      }

      $('.header-menu li a').each(function () {
        var $this = $(this);

        if ($this.next('.nav-sub-menu').length) {
          $this.append('<i class="sub-menu-arrow ' + settings.menu_level_icon + '"></i>');
        }
      });
    }, 150);
  });
  doc_.on('click', '[data-sidebar-close]', function () {
    $('.sidebar').removeClass('show');
    body_.removeClass('no-scroll sidebar-active plate-show');
    return false;
  });
  doc_.on('click', '.menu-toggle-btn a', function () {
    if (body_.hasClass('top-menu')) {
      $('.header .header-menu').addClass('open');
      body_.addClass('overflow-hidden');
    } else {
      $('.menu').addClass('open');
      body_.addClass('plate-show');
    }

    return false;
  });
  doc_.on('click', '.header-menu-close', function () {
    $('.header .header-menu').removeClass('open');
    body_.removeClass('overflow-hidden');
    return false;
  });
  doc_.on('click', '*', function (e) {
    if (!$(e.target).is($('.menu, .menu *, .menu-toggle-btn, .menu-toggle-btn *'))) {
      $('.menu').removeClass('open');
      body_.removeClass('plate-show');
    }
  });
  doc_.on('click', '.menu-close-btn', function () {
    $('.menu').removeClass('open');
    body_.removeClass('overflow-hidden');
    return false;
  }); // Header bar (mobile)

  doc_.on('click', '.header-mobile-buttons .actions-btn', function () {
    $('.header .header-bar').addClass('open');
    return false;
  });
  doc_.on('click', '*', function (e) {
    if (!$(e.target).is($('.header header-bar, .header header-bar *, .header-mobile-buttons .actions-btn, .header-mobile-buttons .actions-btn *'))) {
      $('.header .header-bar').removeClass('open');
    }
  }); // -------------------
  // Header mobile search

  doc_.on('click', '.header-mobile-buttons .search-bar-btn', function () {
    $('.header .search-form').addClass('show');
    body_.addClass('overflow-hidden');
    setTimeout(function () {
      $('.header .search-form input').focus();
    }, 150);
    return false;
  });
  doc_.on('click', '.close-header-search-bar', function () {
    $('.header .search-form').removeClass('show');
    body_.removeClass('overflow-hidden');
    return false;
  }); // -------------------

  $('.collapsed-menu .menu').hover(function () {
    $('.collapsed-menu .menu .menu-body').niceScroll().resize();
  }, function () {
    var collapsed_menu = $('.collapsed-menu .menu .menu-body');
    collapsed_menu.niceScroll().resize();
    collapsed_menu.find('ul ul').removeAttr('style');
    collapsed_menu.find('ul li a .sub-menu-arrow').removeClass('rotate-in');
  });

  if ($('.color-filter-group').length) {
    $('.color-filter-group input.form-check-input[type="checkbox"]').each(function () {
      $(this).css('backgroundColor', $(this).val());
    });
  }
  /*------------- responsive table dropdown -------------*/


  var dropdownMenu,
      table_responsive = $('.table-responsive');
  table_responsive.on('show.bs.dropdown', function (e) {
    dropdownMenu = $(e.target).find('.dropdown-menu');
    body_.append(dropdownMenu.detach());
    var eOffset = $(e.target).offset();
    dropdownMenu.css({
      'display': 'block',
      'top': eOffset.top + $(e.target).outerHeight(),
      'left': eOffset.left,
      'width': '184px',
      'font-size': '14px'
    });
    dropdownMenu.addClass("mobPosDropdown");
  });
  table_responsive.on('hide.bs.dropdown', function (e) {
    $(e.target).append(dropdownMenu.detach());
    dropdownMenu.hide();
  });
  /*------------- responsive table dropdown -------------*/

  /*------------- Menu collapse -------------*/

  doc_.on('click', '.menu ul li a', function () {
    var $this = $(this);

    if ($this.next('ul').length) {
      if (!body_.hasClass('header-menu') || wind_.width() < 1200) {
        var sub_menu_arrow = $this.find('.sub-menu-arrow');
        $('.menu ul li a .sub-menu-arrow').removeClass('rotate-in');
        $this.next('ul').toggle(150, function () {
          if ($(this).is(":visible")) {
            sub_menu_arrow.addClass('rotate-in');
            $('.menu .menu-body').niceScroll().resize();
          } else {
            sub_menu_arrow.removeClass('rotate-in');
          }
        });
        $this.parent('li').siblings().not($this.parent('li')).find('ul').hide(250);
        $this.next('ul').find('li>ul').hide('open');
      }

      return false;
    }
  });
  /*------------- Top menu collapse -------------*/

  doc_.on('click', '.header .header-menu li a', function () {
    if (wind_.width() < 1400) {
      var $this = $(this);

      if ($this.next('.nav-sub-menu').length) {
        $this.next('.nav-sub-menu').toggle();
        $this.parent('li').siblings().not($this.parent('li')).find('.nav-sub-menu').hide();
        return false;
      }
    }
  });
  doc_.on('click', '.dropdown-menu', function (e) {
    e.stopPropagation();
  });

  if ($('#TableOfContents').length) {
    var obj = [];
    var index;
    var table_of_contents = '<ul>';
    var a = 0;
    $('.bd-content > h4, .bd-content > h5').each(function (i, e) {
      var text = $(this).text();

      if ($('.bd-content > h4').length > 0) {
        if ($(this)[0].nodeName == 'H4') {
          obj[text] = [];
          index = text;
          $(this).attr('id', $(this).text().replace(/\s/g, '-').replaceAll(',', '').toLocaleLowerCase());
        }

        if ($(this)[0].nodeName == 'H5') {
          obj[index][text] = [];
          $(this).attr('id', $(this).text().replace(/\s/g, '-').replaceAll(',', '').toLocaleLowerCase() + '-' + a);
          a++;
        }
      } else {
        if ($(this)[0].nodeName == 'H5') {
          obj[text] = [];
          $(this).attr('id', $(this).text().replace(/\s/g, '-').replaceAll(',', '').toLocaleLowerCase());
        }
      }
    });
    var table_of_content_index = 0;
    Object.keys(obj).map(function (e, i) {
      table_of_contents += '<li><a href="#' + e.replace(/\s/g, '-').replaceAll(',', '').toLocaleLowerCase() + '">' + e + '</a></li>';

      if (obj[e]) {
        table_of_contents += '<ul>';
        Object.keys(obj[e]).map(function (x, i) {
          table_of_contents += '<li><a href="#' + x.replace(/\s/g, '-').replaceAll(',', '').toLocaleLowerCase() + '-' + table_of_content_index + '">' + x + '</a></li>';
          table_of_content_index++;
        });
        table_of_contents += '</ul>';
      }
    });
    table_of_contents += '</ul>';
    $('#TableOfContents').html(table_of_contents);
  }

  doc_.on('click', '#TableOfContents li a', function () {
    var aTag = $($(this).attr('href'));
    $('html,body').animate({
      scrollTop: aTag.offset().top - $('.header').height() - 20
    }, 300);
  });
  $('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget),
        recipient = button.data('whatever'),
        modal = $(this);
    modal.find('.modal-title').text('New message to ' + recipient);
    modal.find('.modal-body input').val(recipient);
  });
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl, {
      animation: false
    });
  });
  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
  popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });
})(jQuery);