function change_maker() {
  if(this.textContent == " "){
    this.textContent = "X";
  }
  else if(this.textContent == "X"){
    this.textContent = "O";
  }
  else {
    this.textContent = " ";
  }
}
var b = document.querySelectorAll("td");
for(var i = 0; i<9; i++){
  b[i].addEventListener("click", change_maker);
}

function clear_board() {
  for(var i = 0; i<9; i++){
    b[i].textContent = " ";
  }
}
var r = document.querySelector("a");
r.addEventListener("click", clear_board);
