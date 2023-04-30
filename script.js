let result = document.querySelectorAll(".result")[0];
const buttons = document.querySelectorAll(".button");
const allClear = document.querySelector("#ac");
const del = document.querySelector("#de");

// click effect
buttons.forEach((ele) => {
  ele.addEventListener("click", () => {
    ele.classList.add("click");
    setTimeout(() => {
      ele.classList.remove("click");
    }, 150);
  });
});

let value = "";
buttons.forEach((ele) => {
  ele.addEventListener("click", () => {
    if (ele.innerText == "=") {
      value = eval(value);
      result.value = value;
    } else if (ele.innerText != "AC" && ele.innerText != "DE") {
      console.log(value.length);
      value += ele.innerText;
      result.value = value;
    }
  });
});

// to clear all calculations
allClear.addEventListener("click", () => {
  result.value = "";
  value = "";
});

// to delete the input content one by one
let newInput;
let inputValue;
del.addEventListener("click", () => {
  let delChar = value.charAt(result.value.length - 1);
  value = value.replace(delChar, "");
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
