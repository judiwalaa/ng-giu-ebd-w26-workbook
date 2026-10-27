
import { items } from "./items.js";

export function renderItems(list) {
  const ul = document.getElementById("list");
  ul.innerHTML = "";

  list.forEach(function(item) {
    const li = document.createElement("li");
    li.className = "row";
    li.textContent = `${item.name} (${item.category})`;
    ul.appendChild(li);
  });
}

export function matching() {
  return items.filter(function(item) {
    return item.category === "electronics";
  });
}

export function start() {
  renderItems(items);

  const button = document.getElementById("shortlist");

  button.addEventListener("click", function() {
    renderItems(matching());
  });
}


