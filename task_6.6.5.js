const obj = {
        some: 'some',
        dom: 'text',
        arr: [1, 2, 3, 4, 5],
        tom: 'there'
    };

const arrValues = [];

//обходим ключи объекта
for(let key in obj){
  //проверяем, является ли свойство массивом
  if(Array.isArray(obj[key])){
     //обходим свойство-массив и добавляем каждый элемент этого массива в arrValues
    for(let i=0; i<obj[key].length; i++){
      arrValues.push(obj[key][i])
}
  } else{
  arrValues.push(obj[key])}
    console.log(arrValues);
}
