const burgerBtn = $('#burger');
const hamburger = $('.hamburger-panel');
const closeBtn = $('.close-btn');

function switcher(elem, className) {
    elem.toggleClass(className);
}

let flag = true;

burgerBtn.click( e => {
    e.preventDefault();

    if(flag) {
        flag = false;
        hamburger.removeClass('hidden');
        setTimeout(function() {
            switcher(hamburger, 'isActive');
            flag = true;
        }, 500);
    }
});

closeBtn.click( e => {
    e.preventDefault();

    if(flag) {
        flag = false;
        hamburger.removeClass('isActive');
        setTimeout(function() {
            switcher(hamburger, 'hidden');
            flag = true;
        }, 500);
    }

});
