$(function () {
    var e = navigator.userAgent,
        n = (e.indexOf("MicroMessenger") >= 0, "f=app" == location.href.split("?")[1], e.indexOf("Android") >= 0, e.indexOf("iPhone") >= 0, $("#fullpage").height(), function () {
            $("#fullpage>div").each(function (e) {
                $(this).hasClass("s" + (e + 1)) || $(this).addClass("s" + (e + 1))
            })
        }),
        i = setInterval(function () {
            "complete" == document.readyState && (clearInterval(i), $(window).resize(n).triggerHandler("resize"))
        }, 10)
});