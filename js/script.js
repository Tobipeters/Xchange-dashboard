$(document).ready(function() {

    $(".expand").each(function(index) {
        $(this).on("click", function() {
            $(".sub-menu").toggle("fast")
        })
    })

})