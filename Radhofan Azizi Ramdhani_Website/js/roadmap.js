$(document).ready(function() {
    var count = $(".box-container").find("li").length;
    var x = 3; 
    var y = count % x; 

    if (y === 1) {
        $(".box-container").append(
            '<li class="before-none"><div></div></li>' +
            '<li class="before-none"><div></div></li>'
        );
    } else if (y === 2) {
        $(".box-container").append(
            '<li class="before-none"><div></div></li>'
        );
    }

    window.w3_open = function() {
        $("#mySidebar").show(); 
        $("#overlay").show();
    }

    window.w3_close = function() {
        $("#mySidebar").hide(); 
        $("#overlay").hide(); 
    }
});
