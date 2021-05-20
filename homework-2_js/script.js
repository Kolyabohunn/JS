// //1 Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).
// let ageOfThePerson = +prompt("Який твiй вiк?");
// if (ageOfThePerson <= 2) {
//   alert(`Ти дитина`);
// } else if (ageOfThePerson >= 12 && ageOfThePerson <= 18) {
//   alert(`Ти пiдросток`);
// } else if (ageOfThePerson >= 18 && ageOfThePerson <= 60) {
//   alert(`Ти дорослий`);
// } else if (ageOfThePerson >= 60) {
//   alert(`Ти пенсiонер`);
// }
// //2 Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).
// let numericSpecialCharacters = +prompt("Вкажи число с 1 до 9");
// switch (numericSpecialCharacters) {
//   case 1:
//     alert(`Спецсимвол "!"`);
//     break;
//   case 2:
//     alert(`Спецсимвол "@"`);
//     break;
//   case 3:
//     alert(`Спецсимвол "#"`);
//     break;
//   case 4:
//     alert(`Спецсимвол "$"`);
//     break;
//   case 5:
//     alert(`Спецсимвол "%"`);
//     break;
//   case 6:
//     alert(`Спецсимвол "^"`);
//     break;
//   case 7:
//     alert(`Спецсимвол "&"`);
//     break;
//   case 8:
//     alert(`Спецсимвол "*"`);
//     break;
//   case 9:
//     alert(`Спецсимвол "("`);
// }
// //3 Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.
// let number = +prompt("Введiть трьохкратне число :");
// let number1 = parseInt(number / 100);
// let number2 = parseInt(number / 10) % 10;
// let number3 = number % 10;
// if (number1 === number2 || number2 === number3 || number1 === number3)
//   alert(`Найдено совмiснiсть цифер`);
// else {
//   alert(`Совмiснiсть ненайдена`);
// }
// //4 Чи могло так бути ?
// // Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.
// let aLeapYear = +prompt(`Впишiть рiк:`);
// if (aLeapYear % 4 === 0) {
//   alert(`Цей рiк високосний`);
// } else {
//   alert(`Цей рiк не э високосним`);
// }
//4.2 Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.
// let aLeapYear2 = +prompt(`Впишiть рiк:`);
// if (aLeapYear2 % 4 === 0 || (aLeapYear2 % 100 != 0 && aLeapYear2 % 400 === 0)) {
//   alert(`Цей рiк високосний`);
// } else {
//   alert(`Цей рiк не э високосним`);
// }
// //5 Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.
// const number4 = +prompt(`Напишiть пятизначне число`);
// let firstDigit = Math.floor(number4 / 10000);
// let secondDigit = Math.floor(number4 / 1000) - 10 * firstDigit;
// let thirdDigit =
//   Math.floor(number4 / 100) - (100 * firstDigit + 10 * secondDigit);
// let fourthDigit =
//   Math.floor(number4 / 10) -
//   (1000 * firstDigit + 100 * secondDigit + 10 * thirdDigit);
// let fifthDigit =
//   number4 -
//   (10000 * firstDigit +
//     1000 * secondDigit +
//     100 * thirdDigit +
//     10 * fourthDigit);
// if (firstDigit === 0 || number4 < 10000 || number4 > 99999) {
//   alert(`Число э полiндромним`);
// } else {
//   alert(`Число не э полiндромним`);
// }
// // 6 Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести
////EUR, UAN или AZN, и получает в ответ соответствующую сумму.
// const priceInDollars = +prompt(`Вкажiть цiну`);
// const currencySelection = +prompt(`Вкажiть валюту 1."EUR" 2."UAN" 3."AZN"`);
// if (currencySelection === 1) {
//   let priceEUR = priceInDollars / 1.21;
//   alert(`Цiна в EUR ${priceEUR}`);
// } else if (currencySelection === 2) {
//   let priceinUAN = priceInDollars * 27.44;
//   alert(`Цiна в UAN ${priceinUAN}`);
// } else if (currencySelection === 3) {
//   let priceAZN = priceInDollars * 1.68;
//   alert(`Цiна в AZN ${priceAZN}`);
// }
// // 7 Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой:
// // от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.
// const purchaceAmount = +prompt(`Введiть суму покупки`);
// if (purchaceAmount >= 200 && purchaceAmount <= 300) {
//   let threePercentDiscount = purchaceAmount - (purchaceAmount / 100) * 3;
//   alert(`Цiна зi скидкою 3% ${threePercentDiscount}`);
// } else if (purchaceAmount >= 300 && purchaceAmount <= 500) {
//   let fivePercentDiscount = purchaceAmount - (purchaceAmount / 100) * 5;
//   alert(`Цiна зi скидкою 5% ${fivePercentDiscount}`);
// } else if (purchaceAmount >= 500) {
//   let sevenPercentDiscount = purchaceAmount - (purchaceAmount / 100) * 7;
//   alert(`Цiна зi скидкою 7% ${sevenPercentDiscount}`);
// } else {
//   alert(`Неправильний ввод`);
// }
// // 8 Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.
// const circleLenght = +prompt(`Задай довжину окружностi`);
// const perimeterOfTheSquare = +prompt(`Задай периметр квадрата`);
// if (circleLenght === perimeterOfTheSquare) {
//   let solvung = perimeterOfTheSquare * 3.14;
//   alert(`Така окружнiсть помiщаэться в квадрат i маэ довжину ${solvung} CM `);
// } else {
//   alert(`Така окружнiсть не помiщаэться в квадрат`);
// }
// // 9 Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла.
// //После вопросов выведите пользователю количество набранных баллов.
// alert(`Iгра`);
// let points = 0;
// alert(
//   `Сколько месяцев в году имеют 28 дней? \n1. 1 мiсяць \n2. 2 мiсяця \n3. Все месяцы`
// );
// const question1 = prompt(`Варианит вiдповiдi`);

// if (question1 === "Все месяцы") {
//   points = 2;
//   alert(`який ти молодець`);
// } else {
//   alert(`невгадав`);
// }
// alert(`Что в огне не горит и в воде не тонет?\n1.Лёд\n2.железо\n3.камень`);
// const question2 = prompt(`Варианит вiдповiдi`);

// if (question2 === "Лёд") {
//   points += 2;
//   alert(`який ти молодець`);
// } else {
//   alert(`невгадав`);
// }
// alert(`Кого австралийцы называют морской осой?\n1.Корали\n2.Акулу\n3.Медузу`);
// const question3 = prompt(`Варианит вiдповiдi`);

// if (question3 === "Медузу") {
//   points += 2;
//   alert(`який ти молодець`);
// } else {
//   alert(`невгадав`);
// }
// alert(`твои бали ${points}`);
