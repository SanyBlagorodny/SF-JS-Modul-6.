let anyNum = prompt("Введите любое число");

if (isNaN(anyNum)) {
  alert("Вы ввели не число. Попробуйте еще раз");
} else {
  alert("Вы ввели число");
  +anyNum;
}

let arr = [];

for (i = 0; i <= anyNum; i++) {
  arr.push(i);
}

alert(arr);
