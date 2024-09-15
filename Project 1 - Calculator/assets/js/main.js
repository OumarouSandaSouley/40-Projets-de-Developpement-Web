/* CSS JavaScript Calculator by Oumarou Sanda Souley 
Github: https://github.com/OumarouSandaSouley
Tel: +237690726925
All rights reserved 

Give It a Star */

const screen = document.querySelector("#screen");
let sign = "+";

const addToScreen = (key) => {
  if (sign == "-" && key != "+" && key != "-" && key != "/" && key != "*") {
    key = "(-" + key + ")";
    sign = '+'
  }
  if (screen.value == 0) screen.value = key;
  else {
    screen.value += key;
  }
};
const populateCalcul = () => {
  let result = eval(screen.value);
  screen.value = result;
};
const deleteAll = () => {
  screen.value = 0;
};

const deleteLast = () => {
  screen.value = screen.value.toString().slice(0, -1);
};

const populateSign = () => {
  if (sign == "+") {
    sign = "-";
  } else {
    sign = "+";
  }
};

const percentage = () =>{
    screen.value = (eval(screen.value) / 100)
}
screen.value = 0;
