console.log("I feel good. Everything is fine.");

//var adj = ["German Engineering","Perfectly Fine","Right Honorable","Best in Show","Whole Grain","Post Rock","Easy Rider"];
//document.getElementById("adjective").innerHTML = adj[Math.floor(Math.random() * adj.length)] + "!";

var pas = ["Graphic Design","Pottery","Cashiering","Landscaping","Literary Criticism","Kayaking","Journalism","Koala Raising","Hammocking"];
document.getElementById("formerPassion").innerHTML = pas[Math.floor(Math.random() * pas.length)];

var tabs = document.getElementById("tabs").childNodes;

for (var x = 1; x < tabs.length - 1; x++) //wonder why that is.
{
    var tex = tabs[x].innerHTML;
    tabs[x].addEventListener("click", function(){readData(this.innerHTML)}, false);
}

function readData(x)
{
    fetch("./data/" + x + ".txt")
        .then(response => response.text())
        .then(text => write(text));
}

function write(x)
{
    let dest = document.getElementById("tabContent");
    dest.innerHTML = "";
    let splitLines = x.split(/\r?\n/);
    for (var i = 0; i < splitLines.length; i++)
    {
        let t = splitLines[i];
        let p = eatTwo(t);
        if (t.charAt(0) == 'B') dest.innerHTML += "<p><b>" + p + "</b></p>";
        if (t.charAt(0) == 'W') dest.innerHTML += "<p>" + p + "</p>";
        if (t.charAt(0) == 'I') dest.innerHTML += "<img src = "+p+"></src>";
        if (t.charAt(0) == 'A') dest.innerHTML += "<a href = "+p+">" + p + "</a>";
    }
}

function eatTwo(x)
{
    return x.substring(2, x.length);
}