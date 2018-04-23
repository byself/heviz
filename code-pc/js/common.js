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

function favSKU(e){
    var $target = $(e);

    if($target.hasClass("on")){
        $target.removeClass("on");
    }else{
        $target.addClass("on");
    }

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

});