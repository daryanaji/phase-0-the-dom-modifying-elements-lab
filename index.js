// Write your code here!
const p = document.createElement("p");
const newHeader = document.createElement("h1");

document.getElementById("main").remove();
console.log("first")
p.style.color = "red";
//newHeader.id = "victory";
newHeader.setAttribute("id", "victory")

newHeader.innerHTML = "is the champion"
document.body.append(newHeader);
document.body.append(p);
p.innerHTML = "hello world"