$.ajax({
    url: "http://wx30ffbb438bd4e11b.wechat.h5.ayibang.com/mp/sharesignare",
    type: "post",
    data: {
        url: location.href.split("#")[0]
    },
    dataType: "json",
    success: function (e) {
        var n = e.result,
            t = {
                title: "闃垮Ж甯�-鎮ㄧ殑瀹跺涵濂藉府鎵�",
                desc: ""
            },
            a = "www.ayibang.com/",
            i = n.appid,
            o = n.timestamp,
            s = n.nonceStr,
            c = n.signature;
        wx.config({
            debug: !1,
            appId: i,
            timestamp: o,
            nonceStr: s,
            signature: c,
            jsApiList: ["checkJsApi", "onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo"]
        }), wx.ready(function () {
            var e = (location.host, {
                title: t.title,
                desc: t.desc,
                link: a,
                imgUrl: "http://s1.ayibang.com/vendor/website/img/share_8f76e67.png",
                trigger: function () {},
                success: function () {},
                cancel: function () {},
                fail: function () {}
            });
            wx.onMenuShareTimeline(e), wx.onMenuShareQQ(e), wx.onMenuShareWeibo(e), e.title = t.title, wx.onMenuShareAppMessage(e)
        })
    }
});