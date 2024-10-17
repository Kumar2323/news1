$(function() {
    var i = 0;
    $("section.X").addClass("bg");
    $("section.X").toggleClass("bg");
    $("section.X").click(function() {
        $("#Menu").toggle();
        $("#L2").fadeToggle();
        $("section.X").toggleClass("bg");
    i++;
    if (i%2 == 1) {
        document.getElementById('L1M').beginElement();
        document.getElementById('L3M').beginElement();
        
    }
    else {
        document.getElementById('L4M').beginElement();
        document.getElementById('L5M').beginElement();
    }
    });
    var a1 = setInterval(dotAnim1, 7500);
    var a2 = setInterval(dotAnim2, 15000);
    var a3 = setInterval(dotAnim3, 22500);
    var a4 = setInterval(dotAnim4, 30000);
    var a5 = setInterval(dotAnim5, 37500);
    var a6 = setInterval(dotAnim6, 45000);
    function dotAnim1() {
        $("circle").removeClass("cactive");
        $("#c2").addClass("cactive");
        clearInterval(a1);
        var a7 = setInterval(dotAnim1, 45000);
    }
    function dotAnim2() {
        $("circle").removeClass("cactive");
        $("#c3").addClass("cactive");
        clearInterval(a2);
        var a8 = setInterval(dotAnim2, 45000);
    }
    function dotAnim3() {
        $("circle").removeClass("cactive");
        $("#c4").addClass("cactive");
        clearInterval(a3);
        var a9 = setInterval(dotAnim3, 45000);
    }
    function dotAnim4() {
        $("circle").removeClass("cactive");
        $("#c5").addClass("cactive");
        clearInterval(a4);
        var a10 = setInterval(dotAnim4, 45000);
    }
    function dotAnim5() {
        $("circle").removeClass("cactive");
        $("#c6").addClass("cactive");
        clearInterval(a5);
        var a11 = setInterval(dotAnim5, 45000);
    }
    function dotAnim6() {
        $("circle").removeClass("cactive");
        $("#c1").addClass("cactive");
        clearInterval(a6);
        var a12 = setInterval(dotAnim6, 45000);
    }
    $("#wn1").click(function() {
        $("iframe").attr("src", "https://www.youtube.com/embed/9kaE5JoYeyA");
        $("#wn1").removeClass("vpass");
        $("#wn1").addClass("vactive").siblings().removeClass("vactive").addClass("vpass");
    });
    $("#wn2").click(function() {
        $("iframe").attr("src", "https://www.youtube.com/embed/0M5VuQBBCQ8");
        $("#wn2").removeClass("vpass");
        $("#wn2").addClass("vactive").siblings().removeClass("vactive").addClass("vpass");
    });
    $("#wn3").click(function() {
        $("iframe").attr("src", "https://www.youtube.com/embed/g834oDPbe28");
        $("#wn3").removeClass("vpass");
        $("#wn3").addClass("vactive").siblings().removeClass("vactive").addClass("vpass");
    });
    $("#wn4").click(function() {
        $("iframe").attr("src", "https://www.youtube.com/embed/bbSviTUVIaU");
        $("#wn4").removeClass("vpass");
        $("#wn4").addClass("vactive").siblings().removeClass("vactive").addClass("vpass");
    });
});
