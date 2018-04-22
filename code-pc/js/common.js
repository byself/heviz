/**
 * 视频播放
 */
function video(id) {
    var $box = $("#"+id).parent();
    $box.show();
    videojs(id, {
        loop: true,
        muted: true,
        preload: "auto",
        fluid: true,
        controls: true,
        sources: [{
            src: 'http://vjs.zencdn.net/v/oceans.mp4',
            type: 'video/mp4'
        }, {
            src: 'http://vjs.zencdn.net/v/oceans.webm',
            type: 'video/webm'
        }]
    }, function onPlayerReady() {

        $box.css("opacity", 1);
        this.play();
    });
}

$(function(){

    $(".nav-menu").hover(function(){
        var $this = $(this);
        var $submenu = $(".submenu", $this);
        $submenu.show();
    }, function(){
        var $this = $(this);
        var $submenu = $(".submenu", $this);
        $submenu.hide();
    });

    $("#top-search-btn").on("click", function(){
        $(".top-search").toggle();
    });

    var bannerSwiper = new Swiper('.banner-swiper-container', {
        loop : true,
        pagination: {
            el: '.banner-swiper-pagination'
        }
    });

    var bannerSwiper = new Swiper('.index-swiper-container-1', {
        loop : true,
        pagination: {
            el: '.index-swiper-pagination'
        }
    });

    $(".shutter-item").on("click", function(){
        var $this = $(this);
        $(".shutter-item.active").removeClass("active");
        $this.addClass("active");
    })

});