function isPal(str) {
  let newstr; //str с убранными пробелами
  let newstrarr; //массив букв из строки
  let palidr; //палиндром

  //проверяем, что передана строка
  if (typeof str === "string") {
    newstr = str.toLowerCase(); //приводим все к прописным буквам
  } else {
    newstr = str.toString.toLowerCase(); //приводим в строковому формату
  }

 
  newstr = newstr.replace(/\s+/g, "");  //убираем все пробелы в строке: \s+ - учитывать более одного пробела подряд, g - глобальный флаг - ищет пробелы по всей строке

  newstrarr = newstr.split(""); //режем строку на массив букв
  newstrarr.reverse(); //переворачиваем массив букв

  palidr = newstrarr.join("").replace(/\s+/g, ""); //соединяем перевернутый массив букв в единую строку, убрав все пробелы

  //проверяем является ли слово палиндромом
  if (palidr === newstr) {
    console.log(`Слово ${str} является палиндромом`);
  } else {
    console.log(`Слово ${str} не является палиндромом`);
  }
}

isPal("Довод");
isPal("Сантимент");
isPal("А роза упала на лапу Азора");
