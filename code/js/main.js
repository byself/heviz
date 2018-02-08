(function(){

    var $scroll = $(".main");
    scrollEvent();
    //监听页面滚动事件
    function scrollEvent() {

        var $head = $(".head");
        var $topnav = $(".topnav");
        var $foot = $(".foot");

        $scroll.scroll(function (e) {
            alert("main");
            scrollFunc();
            if(scrollDirection == 'down'){
                $head.addClass("hide-head");
                $topnav.addClass("hide-head");
                $foot.addClass("hide-foot");
            }else if(scrollDirection == 'up'){
                $head.removeClass("hide-head");
                $topnav.removeClass("hide-head");
                $foot.removeClass("hide-foot");
            }

            pageSwiper && pageSwiper.update();

            e.stopPropagation();
        });
    }

    var scrollAction = {x: 'undefined', y: 'undefined'}, scrollDirection;
    function scrollFunc() {

        pageXOffset = $scroll.scrollLeft();
        pageYOffset = $scroll.scrollTop();

        if (typeof scrollAction.x == 'undefined') {
            scrollAction.x = pageXOffset;
            scrollAction.y = pageYOffset;
        }
        var diffX = scrollAction.x - pageXOffset;
        var diffY = scrollAction.y - pageYOffset;
        if (diffX < 0) {
            // Scroll right
            scrollDirection = 'right';
        } else if (diffX > 0) {
            // Scroll left
            scrollDirection = 'left';
        } else if (diffY < 0) {
            // Scroll down
            scrollDirection = 'down';
        } else if (diffY > 0) {
            // Scroll up
            scrollDirection = 'up';
        } else {
            // First scroll event
        }
        scrollAction.x = pageXOffset;
        scrollAction.y = pageYOffset;
    }

})();
