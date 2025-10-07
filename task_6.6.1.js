function isPal(str) {
  // Возвращаем false для null/undefined и нестроковых значений
  if (typeof str !== "string") {
    return false;
  }

  const normalized = str.toLowerCase().replace(/\s+/g, "");
  const reversed = normalized.split("").reverse().join("");
  return normalized === reversed;
}

console.log(isPal("Довод"));
console.log(isPal("Сантимент"));
console.log(isPal("А роза упала на лапу Азора"));
