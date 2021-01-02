console.log("I feel good. Everything is fine.");

var adj = ["German Engineering","Perfectly Fine","Right Honorable","Best in Show"];
document.getElementById("adjective").innerHTML = adj[Math.floor(Math.random() * adj.length)] + "!";

var pas = ["Graphic Design","Pottery","Cashiering","Landscaping","Literary Criticism","Kayaking","Journalism"];
document.getElementById("formerPassion").innerHTML = pas[Math.floor(Math.random() * pas.length)];