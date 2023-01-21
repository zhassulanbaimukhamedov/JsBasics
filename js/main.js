// document.write("Hello");
// console.log("console log");
// console.info("info console");
// console.error("error message");
// console.warn("warining");

// var num_1 = 5;
// var num_2 = 15;
// var res = num_1 - num_2;
// console.log("Result: " + res);

// var num_3 = 5;
// num_3 += 7;
// console.log("Result: " + num_3);

// var str_1 = Number(12);
// var str_2 = Number("2");
// console.log("Result: " + (str_1 + str_2));

// console.log("Math: " + Math.PI);
// console.log("Math: " + Math.E);
// console.log("Math: " + Math.min(4, 2, 3));
// console.log("Math: " + Math.max(4, 2, 3));

// var number = 15;
// if (number != 5) {
//   console.log("Ok");
// }

// switch (number) {
//   case 1:
//     console.log("1");
//     break;
//   case 2:
//     console.log("2");
//     break;
//   case 3:
//     console.log("3");
//     break;
//   case 4:
//     console.log("4");
//     break;
//   default:
//     console.log("def");
// }

//var arr = new Array(1,2 3);
// var arr = [];
// arr = [1, 2, 3];
// var arr = [1, true, "string", 1.2, 0, -100];
// console.log(arr);
// var matrix = [
//   [1, 2, 3],
//   ["s", 1.2],
//   [0, -100],
// ];
// console.log(matrix[1][0]);

// for (var i = 100; i > 5; i /= 2) {
//   console.log(i);
// }

// var j = 1000;
// while (j >= 100) {
//   console.log(j);
//   j -= 100;
// }

// var x = 100;
// do {
//   console.log(x);
//   x -= 10;
// } while (x > 50);

// alert("hi!");
// var data = confirm("Are you sure?");
// console.log(data);
// var data = prompt("Enter number");
// console.log(data);

document.getElementById("mainForm").addEventListener("submit", CheckForm);
// function CheckForm(el) {
function CheckForm(event) {
  event.preventDefault(); // отключаем стандартное поведение события, а стандартное поведение это перезагрузка страницы
  var el = document.getElementById("mainForm");
  var name = el.name.value;
  console.log(name);
  document.getElementById("error").innerHTML = name;
  return false;
}

var counter = 0;
// var id = setInterval(timerFunc, 1000);
// function timerFunc() {
//   counter++;
//   console.log("Counter: " + counter);
//   if (counter == 3) {
//     clearInterval(id);
//   }
// }

// var id = setInterval(function () {
//   counter++;
//   console.log("Counter: " + counter);
//   if (counter == 3) {
//     clearInterval(id);
//   }
// }, 1000);

// setTimeout(function () {
//   console.log("Timer is working");
// }, 1000);

var date = new Date();
//console.log(date.getFullYear());
//console.log(date.getMonth() + 1);

var arr = [8, 90, 5, 7, 0, 8, 9];
//console.log(arr.join("|||"));
var stroka = arr.reverse().join(",");
// console.log(stroka.split(","));
// console.log(arr.reverse());

// class Person {
//   constructor(name2, age, happiness) {
//     this.name = name2;
//     this.age = age;
//     this.happiness = happiness;
//   }
//   info() {
//     console.log(this.name);
//   }
// }

// var alex = new Person("Alex", 45, true);
// alex.info();
