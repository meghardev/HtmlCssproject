/* counter */
var aone = 0;
$(window).scroll(function () {
   var oTop = $("#counter").offset().top - window.innerHeight;
   if (aone == 0 && $(window).scrollTop() > oTop) {
      $(".counter-value").each(function () {
         var $this = $(this),
            countTo = $this.attr("data-count");
         $({
            countNum: $this.text(),
         }).animate(
            {
               countNum: countTo,
            },
            {
               duration: 2000,
               easing: "swing",
               step: function () {
                  $this.text(Math.floor(this.countNum));
               },
               complete: function () {
                  $this.text(this.countNum);
                  //alert('finished');
               },
            }
         );
      });
      aone = 1;
   }
});

$(".buttonnav").first().addClass("active");

$(".buttonnav").click(function () {
   var $this = $(this);
   ($siblings = $this.parent().children()), (position = $siblings.index($this));
   console.log(position);

   $(".content div").removeClass("active").eq(position).addClass("active");

   $siblings.removeClass("active");
   $this.addClass("active");
});
//mobile navigation
$(document).ready(function () {
   $(".navbtn .togglebtn").click(function () {
      if ($(window).width() < 992) {
         $(this).toggleClass("on");
         $(".navigation").slideToggle("on");
      }
   });
   $(window).resize(function () {
      if ($(window).width() > 992) {
         $(".navigation").addClass("desknav").attr("style", "");
         $(".navbtn .togglebtn").removeClass("on");
      } else {
         $(".navigation").removeClass("desknav");
      }
   });
});
