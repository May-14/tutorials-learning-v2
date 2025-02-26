const container = document.querySelector("#container");
const redParagraph = document.createElement("p");
redParagraph.textContent = "Hey I'm red!";
redParagraph.style.color = "red";
container.appendChild(redParagraph);
const blueH3Tag = document.createElement("h3");
blueH3Tag.textContent = "I'm a blue h3!";
blueH3Tag.style.color = "blue";
container.appendChild(blueH3Tag);
const pinkDiv = document.createElement("div");
pinkDiv.setAttribute("style", "border: 1px solid black; background-color: pink;" );
container.appendChild(pinkDiv);
const h1 = document.createElement("h1");
h1.textContent = "I'm in a div"
pinkDiv.appendChild(h1);
const anotherP = document.createElement("p");
anotherP.textContent = "ME TOO!";
pinkDiv.appendChild(anotherP);
const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");
const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", function (e) {
    e.target.style.background = "blue";
  });

