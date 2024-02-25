
$(document).ready(function () {
    $(".submit-search-pc").click(function () {
        if ($("#qr_search").val() != "")
            $('#searchformtab').submit(); return false;
    });
});
$(document).ready(function () {
    $(".search-icon").click(function () {
        $(".search-pc").stop().slideToggle("fast");
        return false;
    });
});




