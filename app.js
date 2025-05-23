let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
  if (inp.value == "") {
    return;
  }
  let item = document.createElement("li");
  item.innerText = inp.value;
  item.style.color = "red";
  item.style.width = "250px";
  item.style.paddingTop = "10px";
  item.style.paddingBottom = "10px";
  let delbtn = document.createElement("button");
  delbtn.innerHTML = `<i class="fa-solid fa-x"></i>`;
  delbtn.style.borderRadius = "7px";
  delbtn.style.border = "none";
  delbtn.style.textDecoration = "none";
  delbtn.style.backgroundColor = "#FBFBFB";
  delbtn.classList.add("delete");
  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  ul.appendChild(item);
  item.appendChild(delbtn);
  item.appendChild(checkbox);
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      this.parentElement.style.color = "green";
      item.style.textDecoration = "line-through";
    }
    else {
      this.parentElement.style.color = "red";
      item.style.textDecoration = "none";
    }
  });
  inp.value = "";
});

ul.addEventListener("click", function (event) {
  console.dir(event.target.nodeName);
  if (event.target.nodeName == "BUTTON") {
    let ListItem = event.target.parentElement;
    ListItem.remove();
  }
  if (event.target.nodeName == "I") {
    let ListItem = event.target.parentElement.parentElement;
    ListItem.remove();
  }
});


