let dugme = document.querySelector("#dugme");
let dugme2 = document.querySelector("#dugme2");
let dugme3 = document.querySelector("#dugme3");
let dugme4 = document.querySelector("#dugme4");
let dugme5 = document.querySelector("#dugme5");
let labelaInupt = document.querySelector("#labela input");
let labelaInupt2 = document.querySelector("#labela2 input");
let labelaInupt3 = document.querySelector("#labela3 input");
let labelaInupt4 = document.querySelector("#labela4 input");
let labelaInupt5 = document.querySelector("#labela5 input");
let tekst = document.querySelector("#tekst");
let tekst2 = document.querySelector("#tekst2");
let tekst3 = document.querySelector("#tekst3");
let tekst4 = document.querySelector("#tekst4");
let tekst5 = document.querySelector("#tekst5");
let niz = [];
let niz2 = [];
let niz3 = [];
let niz4 = [];
let niz5 = [];
dugme.addEventListener("click", function() {
  niz.push(labelaInupt.value);
  document.getElementById("tekst").innerHTML = niz;
})
dugme2.addEventListener("click", function() {
  niz.pop();
  document.getElementById("tekst").innerHTML = niz;
})
dugme3.addEventListener("click", function() {
  niz2.push(labelaInupt2.value);
  document.getElementById("tekst2").innerHTML = niz2;
})
dugme4.addEventListener("click", function() {
  niz2.pop();
  document.getElementById("tekst2").innerHTML = niz2;
})
dugme5.addEventListener("click", function() {
  niz3.push(labelaInupt3.value);
  document.getElementById("tekst3").innerHTML = niz3;
})
dugme6.addEventListener("click", function() {
  niz3.pop();
  document.getElementById("tekst3").innerHTML = niz3;
})
dugme7.addEventListener("click", function() {
  niz4.push(labelaInupt4.value);
  document.getElementById("tekst4").innerHTML = niz4;
})
dugme8.addEventListener("click", function() {
  niz4.pop();
  document.getElementById("tekst4").innerHTML = niz4;
})
dugme9.addEventListener("click", function() {
  niz5.push(labelaInupt5.value);
  document.getElementById("tekst5").innerHTML = niz5;
})
dugme10.addEventListener("click", function() {
  niz5.pop();
  document.getElementById("tekst5").innerHTML = niz5;
})
