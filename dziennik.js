const btn2 = document.querySelector("#btn2");
const display = document.querySelector("#display2");

btn2.addEventListener("click", function () {
  const date = document.querySelector("#date").value;
  const dzial = document.querySelector("#dzial").value;
  const opiekun = document.querySelector("#opiekun").value;
  const material = document.querySelector("#material").value;

  const text = `Data odbycia praktyki: ${date}\nWybrany dział: ${dzial}\nOpiekun: ${opiekun}\nRealizacja materiału: ${material}`;

  display.innerHTML = text;
});
