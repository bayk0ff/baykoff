/*
* Написать функцию, которая принимает массив чисел, например [1,2,3,4,5] и функция возращает полусумму, (округлить результат до десятых)
* */


function abs(arr) {
  if (arr.length === 0) {
  return 0;
  }
  
  const sum = arr.reduce((acc, num) => acc + num, 0);
  const avg = sum / arr.length;
  
  const roundedAvg = Math.floor(avg * 10) / 10;
  
  return roundedAvg;
  }
  
  module.exports = abs;



































module.exports = abs