(function ($) {
    "use strict";

    // Toggle color palate visibility
    $(".color-trigger").on("click", function () {
        $(this).parent().parent().toggleClass("visible-palate");
    });

    // Toggle Dark Mode
    var colorModeBtn = $(".color-palate .color-mode li");
    var body = $("body");
    colorModeBtn.on("click", function (e) {
        var $this = $(this);
        $this.addClass("active").siblings("li").removeClass("active");
        if ($this.hasClass("dark")) {
            body.addClass("dark-layout");
        } else {
            body.removeClass("dark-layout");
        }
    });

    // Toggle RTL/LTR
    var directionChanger = $(".color-palate .rtl-version li");
    var wrapper = $("body"); // Apply RTL to the entire body
    directionChanger.on("click", function (e) {
        var $this = $(this);
        $this.addClass("active").siblings("li").removeClass("active");
        if ($this.hasClass("rtl")) {
            wrapper.addClass("rtl");
        } else {
            wrapper.removeClass("rtl");
        }
    });

})(jQuery);