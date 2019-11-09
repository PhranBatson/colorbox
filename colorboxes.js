var howManyBoxes = 4;

for (i = 1; i <= howManyBoxes; i++) {
    id = "num" + i;
    document.getElementById("container").innerHTML += "<div class='box' id='" + id + "'></div>";
    // document.getElementById(id).addEventListener("mouseover", (event) => { theMouseIsOnMe(event) } );
}

for (i = 1; i <= howManyBoxes; i++) {
    id = "num" + i;
    document.getElementById(id).addEventListener("mouseover", (event) => { theMouseIsOnMe(event) } );
}

function theMouseIsOnMe(event) {
    id = event.target.id;

    document.getElementById(id).removeEventListener("mousover", (event) => { theMouseIsOnMe(event) } );
    changeColor(id);
    stickBoxesInMe(id);
}

function stickBoxesInMe(id) {

    box = document.getElementById(id);
    box.style.backgroundColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
    str = "";
    str += "<div class=\"box\" id=\"" + id +".1\" onmouseover=\"theMouseIsOnMe('" + id +".1')\"></div>";
    str += "<div class=\"box\" id=\"" + id +".2\" onmouseover=\"theMouseIsOnMe('" + id +".2')\"></div>";
    str += "<div class=\"box\" id=\"" + id +".3\" onmouseover=\"theMouseIsOnMe('" + id +".3')\"></div>";
    str += "<div class=\"box\" id=\"" + id +".4\" onmouseover=\"theMouseIsOnMe('" + id +".4')\"></div>";

    box.innerHTML = str;
}

function changeColor(id) {

    box = document.getElementById(id);
    box.style.backgroundColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
}