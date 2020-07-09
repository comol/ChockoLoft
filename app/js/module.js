//console.log('Привет мир');
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtb2R1bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coJ9Cf0YDQuNCy0LXRgiDQvNC40YAnKTsiXSwiZmlsZSI6Im1vZHVsZS5qcyJ9
const incpanel = document.querySelector('#incpanel');
const incmenu = document.querySelector('#incmenu');
const incpanel2 = document.querySelector('#incpanel2');
const incmenu2 = document.querySelector('#incmenu2');
let a = 7;
incpanel.addEventListener('mouseover', function() {
    incmenu.style.display = 'flex';
})

incpanel.addEventListener('mouseout', function() {
    incmenu.style.display = 'none';
})

incpanel2.addEventListener('mouseover', function() {
    incmenu2.style.display = 'flex';
})

incpanel2.addEventListener('mouseout', function() {
    incmenu2.style.display = 'none';
})
