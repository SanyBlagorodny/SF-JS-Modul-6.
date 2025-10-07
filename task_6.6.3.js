let anyNum = prompt("Введите любое число");

if (anyNum === null || anyNum.trim() === "") {
  alert("Ввод отменён или пустой. Перезагрузите страницу и попробуйте снова.");
} else {
  const parsed = Number(anyNum);
  if (Number.isNaN(parsed)) {
    alert("Вы ввели не число. Перезагрузите страницу и попробуйте снова.");
  } else {
    alert("Вы ввели число");
    const arr = [];
    for (let i = 0; i <= parsed; i++) {
      arr.push(i);
    }
    alert(arr);
  }
}
