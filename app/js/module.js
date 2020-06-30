console.log('Привет мир');
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtb2R1bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coJ9Cf0YDQuNCy0LXRgiDQvNC40YAnKTsiXSwiZmlsZSI6Im1vZHVsZS5qcyJ9
const incpanel = document.querySelector('#incpanel');
const incmenu = document.querySelector('#incmenu');
const slidersection = document.querySelector('#slidersection');
let incmenuclicked = false;

incpanel.addEventListener('click', function() {
    incmenuclicked = true;
    if (incmenu.style.display === 'flex')
    {
        incmenu.style.display = 'none';
    }
    else
    {
        incmenu.style.display = 'flex';
    }
})

slidersection.addEventListener('click', function() {
    if (!incmenuclicked)
    {
        incmenu.style.display = 'none';
    }
    incmenuclicked = false;
})
