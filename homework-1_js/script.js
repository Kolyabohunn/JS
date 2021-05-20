// 1 Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».
let userName = prompt("Как тебя зовут ?");
alert(`Привет ${userName}`);
//2 Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат.Текущий год укажите в коде как константу.
let userAge = prompt("Якого ти року народження?");
let year = 2021;
const userAgeYear = year - userAge;
alert(`Тобi ${userAgeYear} рокiв `);
// 3Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.
let sideofTheSquare = prompt("Запишiть сторону квадрата");
const sideSquare = 4;
const squareCalc = sideofTheSquare * sideSquare;
alert(`Периметер квадрата ${squareCalc} cm`);
// 4 Запросите у пользователя радиус окружности и выведите площадь такой окружности.
let radiusOfTheCirclev = prompt("Задай радiус окружносi в 'М'");
const Pr_2 = 2;
const P = 3.14;
const circleCalc = Pr_2 * P * radiusOfTheCirclev;
alert(`Площать окружностi ${circleCalc} M`);
//5 Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться.
// Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.
let distanteOfCities = prompt("Вкажiть вiдстань мiж мiстами!");
let hourInKm = prompt(
  "Вкажiть час за який хочете добратись до мiсця призначення"
);
const calcInTime = distanteOfCities / hourInKm;
alert(`Час за який ти доберешся до пункту призначення ${calcInTime} КМ/Год`);
//6 Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.
let dollarTransfer = prompt("Впишiть цiну переводу!");
const euroPrice = 1.21;
const moneyTransfer = dollarTransfer / euroPrice;
alert(`Перевод в Евро ${moneyTransfer}`);
//7 Пользователь указывает объем флешки в Гб. Программа должна посчитать сколько файлов размером в 820 Мб помещается на флешку.
let flashDriveSize = prompt("Вкажiть розмiр флешки в ГБ");
const theSizeOfOneGB = 1024;
let onefile = 820;
const filesOnAFlashDrive = (flashDriveSize * theSizeOfOneGB) / onefile;
alert(`${filesOnAFlashDrive} Стiльки файлiв помiщаэться на флешцi`);
//8 Пользователь вводит сумму денег в кошельке и цену одной шоколадки.
//Программа выводит сколько шоколадок может купить пользователь и сколько сдачи у него останется.
let amountInWallet = prompt("Ведiть всю суму");
let thepriceOfChocolate = prompt("Введiть цiну шоколадки");
const numberOfChocolates = amountInWallet / thepriceOfChocolate;
alert(`Шоколадок ${numberOfChocolates} ШТ`);
const deliveryOfChocolates = amountInWallet % thepriceOfChocolate;
alert(`здача ${deliveryOfChocolates}`);
// 9 Запросите у пользователя трехзначное число и выведите его задом наперед.
//Для решения задачи вам понадобится оператор % (остаток от деления).
let number = prompt("Введiть трьох значне число");
let number2 = number % 10;
let number3 = number % 100;
alert(
  `Число задом на перед ${
    number2 * 100 + (number3 - number2) + (number - number3) / 100
  }`
);
//10 Пользователь вводит сумму вклада в банк на 2 месяца, с процентной ставкой депозита 5% годовых. Вывести сумму начисленных процентов.
let deposit = +prompt("Введiть суму вкладу");
let xz = (deposit / 100) * 5;
let xz2 = xz / 12;
let xz3 = xz2 * 2;
alert(`Сума начислиних процентiв за 2 мiсяця ${xz3}`);
