

// JavaScript code
function search_clubs() {
  let input = document.getElementById('search-input').value
  input = input.toLowerCase();
  let x = document.getElementsByClassName('columns has-text-centered');

  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    }
    else {
      x[i].style.display = "columns-item";
    }
  }
}




popup = {
  init: function () {
    $('figure').click(function () {
      popup.open($(this));
    });

    $(document).on('click', '.popup img', function () {
      return false;
    }).on('click', '.popup', function () {
      popup.close();
    })
  },
  open: function ($figure) {
    $('.gallery').addClass('pop');
    $popup = $('<div class="popup" />').appendTo($('body'));
    $fig = $figure.clone().appendTo($('.popup'));
    $bg = $('<div class="bg" />').appendTo($('.popup'));
    $close = $('<div class="close"><svg><use xlink:href="#close"></use></svg></div>').appendTo($fig);
    $shadow = $('<div class="shadow" />').appendTo($fig);
    src = $('img', $fig).attr('src');
    $shadow.css({ backgroundImage: 'url(' + src + ')' });
    $bg.css({ backgroundImage: 'url(' + src + ')' });
    setTimeout(function () {
      $('.popup').addClass('pop');
    }, 10);
  },
  close: function () {
    $('.gallery, .popup').removeClass('pop');
    setTimeout(function () {
      $('.popup').remove()
    }, 100);
  }
}

popup.init()




$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });


  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});
