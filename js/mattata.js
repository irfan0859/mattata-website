function collapseNavbar() {
    $(".navbar").offset().top > 50 ? $(".navbar-fixed-top").addClass("top-nav-collapse") : $(".navbar-fixed-top").removeClass("top-nav-collapse")
}
$(window).scroll(collapseNavbar), $(document).ready(collapseNavbar), $(".navbar-collapse ul li a").click(function() {
    $(this).closest(".collapse").collapse("toggle")
});