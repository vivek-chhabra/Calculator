let result = document.querySelectorAll(".result")[0];
const buttons = document.querySelectorAll(".button");
const allClear = document.querySelector("#ac");
const del = document.querySelector("#de");

// function ==========================================================================================================================

// clear the value
function clearAll() {
  value = "";
  result.value = value;
}

// ===================================================================================================================================

// click effect
buttons.forEach((ele) => {
  ele.addEventListener("click", () => {
    ele.classList.add("click");
    setTimeout(() => {
      ele.classList.remove("click");
    }, 150);
  });
});

// functionality of the buttons
var value = "";
buttons.forEach((ele) => {
  ele.addEventListener("click", () => {
    if (ele.innerText == "=") {
      if (value == "Wrong Expression") {
        clearAll();
      }
      try {
        value = eval(value);
      } catch (err) {
        value = "Wrong Expression";
      }
      result.value = value;
    } else if (ele.innerText == "pi") {
      if (value == "Wrong Expression") {
        clearAll();
      }
      value += "3.14";
      result.value = value;
    } else if (ele.innerText != "AC" && ele.innerText != "DE") {
      if (value == "Wrong Expression") {
        clearAll();
      }
      value += ele.innerText;
      result.value = value;
    }
  });
});

// to clear all calculations
allClear.addEventListener("click", () => {
  clearAll();
});

// to delete the input content one by one
let newInput;
let inputValue;
del.addEventListener("click", () => {
  inputValue = result.value;
  value = inputValue.substring(0, inputValue.length - 1);
  result.value = value;
});

// to disable the keys
result.addEventListener("keyup", (e) => {
  result.value = value;
});
// to disable the keys
result.addEventListener("keydown", (e) => {
  result.value = value;
});
