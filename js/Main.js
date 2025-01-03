
const input = document.querySelector("#input");
const btn = document.querySelector(".btn");
const box = document.querySelector(".box");

// Making Tag 
const ul = document.createElement("ul");
const li = document.createElement("li");
const span = document.createElement("span");
box.appendChild(ul);
ul.appendChild(li);
li.appendChild(span);



btn.addEventListener("click", function () {
    alert("Added");
    console.log(box);

    span.innerHTML = input.value;
});

