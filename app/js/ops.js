const sections = $("section");
const display = $(".maincontent");
const sideMenu = $(".fixed-menu");
const menuItems = sideMenu.find(".fixed-menu__item");

const mobiled = new MobileDetect(window.navigator.userAgent);
const isMobile = mobiled.mobile();

let inScroll = false;

sections.first().addClass("active");

const countSectionPosition = sectionEq => {

    return sectionEq * -100;

    //let hei = activeSection.next().height();
};

const changeMenuThemeForSection = (sectionEq) => {
    const currentSection = sections.eq(sectionEq);
    const menuTheme = currentSection.attr("data-sidemenu-theme");
    const activeClass = "fixed-menu--shadowed";

    if (menuTheme === "black") {
        sideMenu.addClass(activeClass);
    } else {
        sideMenu.removeClass(activeClass);
    }
};

const resetActiveClassForItem = (items, itemEq, activeClass) => {
    items.eq(itemEq).addClass(activeClass).siblings().removeClass(activeClass);
}

const performTransition = sectionEq => {

    if (inScroll) return;

    const transitionOver = 1000;
    const mouseInertiaOver = 300;

    inScroll = true;

    const position = countSectionPosition(sectionEq);

    changeMenuThemeForSection(sectionEq);


    display.css({
        transform: `translateY(${position}%)`
    });

    resetActiveClassForItem(sections, sectionEq, "active");
    sections.eq(sectionEq).addClass("active").siblings().removeClass("active");


    setTimeout(() => {
        inScroll = false;

        resetActiveClassForItem(menuItems, sectionEq, "fixed-menu__item--active");

    }, transitionOver + mouseInertiaOver)

};

const scrollViewport = direction => {
    const activeSection = sections.filter(".active");
    const nextSection = activeSection.next();
    const prevSection = activeSection.prev();

    if (direction === "next" && nextSection.length) {
        performTransition(nextSection.index());
    }

    if (direction === "prev" && prevSection.length) {
        performTransition(prevSection.index());
    }
};

$(window).on("wheel", e => {
    const deltaY = e.originalEvent.deltaY;

    if (deltaY > 0) {
        scrollViewport("next");
    }

    if (deltaY < 0) {
        scrollViewport("prev");
    }
});

$(window).on("keydown", e => {

    const tagname = e.target.tagName.toLowerCase();
    const userTypingInInputs = tagname === "input" || tagname === "textarea";
    if (userTypingInInputs) return;

    switch (e.keyCode) {
        case 38:
            scrollViewport("prev");
            break;
        case 40:
            scrollViewport("next");
            break;
    }
});

$(".wrapper").on("touchmove", e => e.preventDefault());

$("[data-scroll-to]").click(e => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const target = $this.attr("data-scroll-to");
    const reqSection = $(`[data-section-id=${target}]`);

    performTransition(reqSection.index());

});

if (isMobile)
{
    $("body").swipe({
        swipe: function (event, direction) {
            if (direction === "up")
            {
                scrollViewport("next");
            }
            if (direction === "down")
            {
                scrollViewport("prev");
            }
        }
    });
}


