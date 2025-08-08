const visor = document:getElementById("visor");
function calculate(x) {
visor.value += x;
}
function clear() {
  visor.value = "";
}
function finish() {
visor.value = eval(visor.value);
}
