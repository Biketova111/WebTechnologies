let degreesCelsius = Number.parseFloat(
  prompt("Введите температуру в градусах по Цельсия")
);

let degreesFahrenheit = degreesCelsius * 9 / 5 + 32;
alert(
  `Цельсия:  ${degreesCelsius}, Фаренгейт:  ${degreesFahrenheit.toFixed(1)}`
);
