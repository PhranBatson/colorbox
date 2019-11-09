var howManyBoxes = 16;

for (i = 1; i <= howManyBoxes; i++) {
    document.getElementById("container").innerHTML += "<div class='box' id='num" + i + "'></div>";
}

for (i = 1; i <= howManyBoxes; i++) {
    id = "num" + i;
    document.getElementById(id).addEventListener("mouseover", (event) => { changeColor(event) } );
}


function changeColor(event) {
    id = event.target.id;

    box = document.getElementById(id);
    if (box.className == "box") /*(box.className == "box")*/
    {
        box.style.backgroundColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
        str = "";
        str += "<div class=\"boxgen2\" id=\"" + id +".1\" onmouseover=\"changeColor('" + id +".1')\"></div>";
        str += "<div class=\"boxgen2\" id=\"" + id +".2\" onmouseover=\"changeColor('" + id +".2')\"></div>";
        str += "<div class=\"boxgen2\" id=\"" + id +".3\" onmouseover=\"changeColor('" + id +".3')\"></div>";
        str += "<div class=\"boxgen2\" id=\"" + id +".4\" onmouseover=\"changeColor('" + id +".4')\"></div>";

        box.innerHTML = str;

        document.getElementById(id).className = "none";
    }
    else if (box.className == "boxgen2")
    {
        box.style.backgroundColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
        str = "";
        str += "<div class=\"boxgen3\" id=\"" + id +".1\" onmouseover=\"changeColor('" + id +".1')\"></div>";
        str += "<div class=\"boxgen3\" id=\"" + id +".2\" onmouseover=\"changeColor('" + id +".2')\"></div>";
        str += "<div class=\"boxgen3\" id=\"" + id +".3\" onmouseover=\"changeColor('" + id +".3')\"></div>";
        str += "<div class=\"boxgen3\" id=\"" + id +".4\" onmouseover=\"changeColor('" + id +".4')\"></div>";

        box.innerHTML = str;

        document.getElementById(id).className = "none2";
    }
    else if (box.className == "boxgen3")
    {
        box.style.backgroundColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
        str = "";
        str += "<div class=\"boxgen4\" id=\"" + id +".1\" onmouseover=\"changeColor('" + id +".1')\"></div>";
        str += "<div class=\"boxgen4\" id=\"" + id +".2\" onmouseover=\"changeColor('" + id +".2')\"></div>";
        str += "<div class=\"boxgen4\" id=\"" + id +".3\" onmouseover=\"changeColor('" + id +".3')\"></div>";
        str += "<div class=\"boxgen4\" id=\"" + id +".4\" onmouseover=\"changeColor('" + id +".4')\"></div>";

        box.innerHTML = str;

        document.getElementById(id).className = "none3";
    }
    else if (box.className == "boxgen4")
    {
        box.style.backgroundColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
        str = "";
        str += "<div class=\"boxgen5\" id=\"" + id +".1\" onmouseover=\"changeColor('" + id +".1')\"></div>";
        str += "<div class=\"boxgen5\" id=\"" + id +".2\" onmouseover=\"changeColor('" + id +".2')\"></div>";
        str += "<div class=\"boxgen5\" id=\"" + id +".3\" onmouseover=\"changeColor('" + id +".3')\"></div>";
        str += "<div class=\"boxgen5\" id=\"" + id +".4\" onmouseover=\"changeColor('" + id +".4')\"></div>";

        box.innerHTML = str;

        document.getElementById(id).className = "none4";
    }
    else if (box.className == "boxgen5")
    {
        box.style.backgroundColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
    }
}