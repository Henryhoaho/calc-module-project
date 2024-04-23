// tip caculator

// Event listener
document.getElementById("enter-btn").addEventListener("click", caculateTip);
document.getElementById("clear-btn").addEventListener("click", clear);
document.getElementById("if-button").addEventListener("click", morePeople);
document.getElementById("i1").addEventListener("input", restrictNumberInput);
document.getElementById("i2").addEventListener("input", restrictNumberInput);
document.getElementById("i3").addEventListener("input", restrictNumberInput);
document.getElementById("i2").addEventListener("input", tipPrecent);

// Event function
function caculateTip() {
  let input1 = +document.getElementById("i1").value;
  let input2 = +document.getElementById("i2").value;
  let input3 = +document.getElementById("i3").value;
  // processes
  let precent = input1 / 100;
  let priceoftip = precent * input3;
  let perPerson = priceoftip / input2;
  let tax = input3 * 0.05;
  let totalAmount = priceoftip + input3;

  //   output
  document.getElementById("output-1").innerHTML = priceoftip.toFixed(2);
  document.getElementById("output-2").innerHTML = perPerson.toFixed(2);
  document.getElementById("output-3").innerHTML = totalAmount.toFixed(2);
  document.getElementById("output-4").innerHTML = tax.toFixed(2);
}

function clear() {
  document.getElementById("output-1").innerHTML = ` ---`;
  document.getElementById("output-2").innerHTML = ` ---`;
  document.getElementById("output-3").innerHTML = ` ---`;
  document.getElementById("i1").value = ``;
  document.getElementById("i2").value = ``;
  document.getElementById("i3").value = ``;
  document.getElementById("i1").readOnly = false;
}

function morePeople() {
  document.getElementById("i1").value = "25";
  document.getElementById("i1").readOnly = true;
}
function restrictNumberInput() {
  let max = parseInt(this.max);
  let min = parseInt(this.min);
  if (parseInt(this.value) > max) {
    this.value = max;
  } else if (parseInt(this.value) < min) {
    this.value = min;
  }
}
function tipPrecent() {
  if (this.value >= 15) {
    document.getElementById("i1").value = 25;
    document.getElementById("i1").readOnly = true;
  }
}
