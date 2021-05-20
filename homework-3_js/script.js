// 1.Подсчитать сумму всех чисел в заданном пользователем диапазоне.
let beginning = +prompt("Введiть початок дiапазону");
let theEnd = +prompt("Введiть кiнець дiапазону");
let sum = 0;

while (beginning < theEnd) {
  beginning++;
  alert(beginning);
  sum += beginning;
  console.log(sum);
}
alert(sum);
// 2.Запросить 2 числа и найти только наибольший общий делитель.
const commonDivisor = +prompt(`задай 1 дiлитель `);
const commonDivisor2 = +prompt(`задай 2 дiлитель `);
