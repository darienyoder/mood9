
const max_scroll = 3

setInterval(allow_scroll, 1000)

window.addEventListener("wheel", event => {
    if (can_scroll)
    {
        scroll_to(current_scroll + Math.sign(event.deltaY))
    }
    can_scroll = false
});

var can_scroll = true

var current_scroll = 0;

function scroll_to(scroll_id)
{
    current_scroll = Math.min(Math.max(scroll_id, 0), max_scroll)
    document.getElementById(current_scroll.toString()).scrollIntoView(true);
}

function allow_scroll()
{
    can_scroll = true
}


let touchstartY = 0
let touchendY = 0

function checkDirection() {
    if (touchendY < touchstartY)
        alert("up");
    else
        alert("down");
}

window.addEventListener('touchstart', e => {
  touchstartY = e.changedTouches[0].screenY
})

window.addEventListener('touchmove', e => {
  touchendY = e.changedTouches[0].screenY
  checkDirection()
})
