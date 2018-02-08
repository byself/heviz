(function(){

    scrollEvent();
    //监听页面滚动事件
    function scrollEvent() {

        var $head = $(".head");
        var $topnav = $(".topnav");
        var $foot = $(".foot");

        $(window).scroll(function (e) {
            // console.log("main:", scrollDirection);
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

        });
    }


    var distance = 0;
    var scrollAction = {x: 0, y: 0}, scrollDirection;

    var winHeight = $(window).height();
    function scrollFunc() {

        var pageYOffset = window.scrollY;
        var docHeight = $(document).height();

        // console.log("pageYOffset:",window.scrollY);
        // console.log("docHeight:",docHeight);
        // console.log("winHeight:",winHeight);
        // console.log("winHeight2:",winHeight + pageYOffset < docHeight);

        if(pageYOffset >= 0 && (winHeight + pageYOffset < docHeight)){
            var diffY = scrollAction.y - pageYOffset;

            if (diffY < distance) {
                // Scroll down
                scrollDirection = 'down';
            } else if (diffY > distance) {
                // Scroll up
                scrollDirection = 'up';
            }

            scrollAction.y = pageYOffset;
        }


    }


})();
