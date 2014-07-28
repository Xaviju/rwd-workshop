console.log('loaded');

window.onresize=function(){
    var element;
    var prevelement;
    console.log('resize');
    if (window.matchMedia("(min-width: 900px)").matches) {
        element = document.getElementById("match-1");
        prevelement = document.getElementById("match-2");

        element.classList.add('hidden');
        prevelement.classList.remove('hidden');
    } else {
        element = document.getElementById("match-2");
        prevelement = document.getElementById("match-1");

        element.classList.add('hidden');
        prevelement.classList.remove('hidden');
    }
};
