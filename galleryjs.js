 var swiper = new Swiper(".mySwiper", {
         slidesPerView: 3,
         spaceBetween: 30,
         pagination: {
            el: ".swiper-pagination",
            clickable: true,
         },
         breakpoints: {

           200: {
               slidesPerView: 1
           },

           501: {
              slidesPerView: 1.5
           },

           769: {
               slidesPerView: 2.5,
               spaceBetween: 10
           },
           1025: {
               slidesPerView: 3,
               spaceBetween: 20
           },
        }
      }); 