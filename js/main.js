(function() {
"use strict";
var input = document.getElementById("count");
var list = document.getElementById("list");
var sumValue = document.getElementById('sum');
var totalValue = document.getElementById('totalSum');

function count() {
  var newValue = this.checked ? +1 : -1;
  sumValue.textContent = newValue + parseInt(sumValue.textContent);
  totalValue.textContent = newValue + parseInt(totalValue.textContent);
}

input.onchange = function() {
  for (var i = 0; i < input.value; i++) {
    var el = document.createElement("input");
    el.type = "checkbox";
    list.appendChild(el);
    list.childNodes[i].onclick = count;
  }
  input.oninput = function() {
    list.innerHTML = "";
    totalValue.textContent = 0;
  };
};
})();
