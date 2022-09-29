var count = ['1', '2', '3']
    var art = ['Julius Caesar', 'Into the Abyss', 'Discobolous']
    var price = ['221 ETH', '157 ETH', '95 ETH']
    var swiper = new Swiper(".mySwiper", {
      direction: "vertical",
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      slidesPerView: 1,
      spaceBetween: 30,
      mousewheel: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<p class="' + className + '">' + ('#0' + (count[index])) + '<span>' + (art[index]) + '</span>' + '<span>' + (price[index]) + '</span>' + "</p>";
          },
      },
    });