$(function() {
    $(".filterButton").click(function() {
        if ($(this).hasClass("btn-light")) {
            $(this).removeClass("btn-light").addClass("btn-dark")
        } else {
            $(this).removeClass("btn-dark").addClass("btn-light")
        }
        
    });

    $(".js-range-slider").ionRangeSlider({
        skin: "square",
        type: "single",
        grid_num: 4,
        step: 1,
        min: 1,
        max: 4
        
    });

    $(".navbar-toggler").click(function() {
        $("#toDoorNavBar").collapse("show");
        $(".sidenav").css("width", "250px");
        $("#mask").css("display", "block");
    });

    $(".close").click(function() {
        $(this).collapse("hide");
        $(".sidenav").css("width", "0");
        $("#mask").css("display", "none");
    });

    $("#menu-tab").click(function() {
        if (!$(this).hasClass("border-bottom")) {
            $(this).addClass("border-bottom");
            $("#dinner-tab").removeClass("border-bottom");
            $("#lunch-tab").removeClass("border-bottom");
        } 
    });

    $("#dinner-tab").click(function() {
        if (!$(this).hasClass("border-bottom")) {
            $(this).addClass("border-bottom");
            $("#menu-tab").removeClass("border-bottom");
            $("#lunch-tab").removeClass("border-bottom");
        } 
    });

    $("#lunch-tab").click(function() {
        if (!$(this).hasClass("border-bottom")) {
            $(this).addClass("border-bottom");
            $("#menu-tab").removeClass("border-bottom");
            $("#dinner-tab").removeClass("border-bottom");
        } 
    });

    $(".h").mouseenter(function() {
        $(this).addClass("border-dark");
    })

    $(".h").mouseleave(function() {
        $(this).removeClass("border-dark");
    })
});

// signin changing color for Next Button
let inputEvent = document.getElementById('inputEmail');

function changeColor() {
    if (inputEvent.value.length > 0) {
        document.getElementById('nextButton').classList.remove('bg-light');
        document.getElementById('nextButton').classList.add('bg-warning');
        document.getElementById('nextButton').style.color='black';   
    } else {
        document.getElementById('nextButton').classList.remove('bg-warning');
        document.getElementById('nextButton').classList.add('bg-light');
        document.getElementById('nextButton').style.color='#495057'; 
    }
}

inputEvent.addEventListener('keyup', changeColor);

