
function Accord(selector) {
    const accord = document.querySelector(selector);
    const items = accord.querySelector('[data-list]').children;
    const closeButton = document.querySelector('.accord__close-btn');

    accord.addEventListener('click', function(e) {
        e.preventDefault ();
        const target = e.target.closest('[data]');

        if (e.target.classList.contains('accord__close-btn'))
        {
            e.target.parentNode.parentNode.parentNode.classList.remove('item-active')
        }

        if(!target) return;

        const item = target.parentNode;

        if (item.classList.contains('item-active')) {
            item.classList.remove('item-active');
        }else {
            for (let i = 0; i < items.length; i++) {
                items[i].classList.remove('item-active');
            }

            item.classList.add('item-active');
        }
    });

}

Accord ('#accord-menu')
