const burgerBtn = $('#burger');
const hamburger = $('.hamburger-panel');
const closeBtn = $('.close-btn');
const hambLink = $('.hamburger-panel__link');

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

hambLink.click( e => {
    hamburger.removeClass('isActive');
    setTimeout(function() {
        switcher(hamburger, 'hidden');
        flag = false;
        }, 500);
});
