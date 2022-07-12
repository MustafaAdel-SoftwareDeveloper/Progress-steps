//get elements into variable
let inputEle = document.getElementById("input");
let btnEle = document.getElementById("btn");
let msgEle = document.getElementById("msg");

//Events

btnEle.addEventListener("click", function () {
  let inputVal = inputEle.value;
  if (inputVal != "") {
    msgEle.innerHTML = inputVal;
    inputEle.value = "";
  }
});
