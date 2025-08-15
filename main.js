var time = 0.0;
var fps = 20;

function main()
{
    let i = 0;
    while (i < 5)
    {
        setTimeout(show_logo, i * 100, i);
        i++;
    }

    setInterval(process, 1000 / fps);
}

function show_logo(i)
{
    document.getElementById("logo").children[i].style.scale = "100%";
}

var bgX = 0;
var bgY = 0;

var logoOffsets = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function process()
{
    time += 1.0 / fps;

    bgX += 50 + Math.floor(Math.random() * 100);
    bgY += 50 + Math.floor(Math.random() * 100);
    document.body.style.backgroundPosition = bgX + "px " + bgY + "px";

    for (i in [0, 0, 0, 0, 0])
    {
        logoOffsets[i * 2] = Math.min(Math.max(logoOffsets[i * 2] - 1 + Math.floor(Math.random() * 3), -20), 20);
        logoOffsets[i * 2 + 1] = Math.min(Math.max(logoOffsets[i * 2 + 1] - 1 + Math.floor(Math.random() * 3), -20), 20);
        document.getElementById("logo").children[i].style.left = Math.sin(2 * time * Math.cos(i + 4) + i * 153.2745) * 5 + "px"; //logoOffsets[i * 2] + "px";
        document.getElementById("logo").children[i].style.top = Math.sin(2 * time * Math.cos(i + 13) + i * 603.7364) * 10 + "px"; //logoOffsets[i * 2 + 1] + "px";
    }
}

function open_pane(pane)
{
    document.getElementById("bottom-pane").style.top = "0%";
    for (var paneDiv in document.getElementById("bottom-pane").children)
    {
        document.getElementById("bottom-pane").children[paneDiv].className = pane == paneDiv ? "selected" : "";
    }
}

function close_pane()
{
    document.getElementById("bottom-pane").style.top = "100%";
}
