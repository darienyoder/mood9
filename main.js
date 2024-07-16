
const max_scroll = 3

window.addEventListener("wheel", event => {
    if (can_scroll)
    {
        scroll_to(current_scroll + Math.sign(event.deltaY))
        can_scroll = false
        setTimeout(allow_scroll, 1000)
    }
});

var can_scroll = true

var current_scroll = 1;

function scroll_to(scroll_id)
{
    current_scroll = Math.min(Math.max(scroll_id, 1), max_scroll)
    document.getElementById(current_scroll.toString()).scrollIntoView(true);
    for (var i = 0; i < max_scroll; i++)
    {
        if (i == current_scroll - 1)
            document.getElementById("navlinks").children[i].id = "active-navlink";
        else
            document.getElementById("navlinks").children[i].id = "";
    }
}

function allow_scroll()
{
    can_scroll = true
}


var touchstartY = 0;
var touchendY = 0;
var can_touch_scroll = true;

function checkDirection() {
    if (touchendY < touchstartY)
        scroll_to(current_scroll + 1);
    else
        scroll_to(current_scroll - 1);
}

window.addEventListener('touchstart', e => {
  touchstartY = e.changedTouches[0].screenY;
})

window.addEventListener('touchstart', e => {
  can_touch_scroll = true;
})

window.addEventListener('touchmove', e => {
  touchendY = e.changedTouches[0].screenY;
  if (can_touch_scroll)
    checkDirection();
  can_touch_scroll = false;
})
