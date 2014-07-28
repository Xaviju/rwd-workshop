console.log('loaded');

window.onresize=function(){
    var target = $('.match-image');
    if (window.matchMedia("(min-width: 900px)").matches) {
        target.attr('src', 'images/image1.jpg');
    } else {
        target.attr('src', 'images/image2.jpg');
    }
};
