/*
* Нужно написать функцию, принимающую строку в качестве аргумента и возвращающую количество гласных, которые содержатся в строке.
Гласными являются «a», «e», «i», «o», «u», «y».
* */

function getVowelsCount(str) {
    var letters = ['a', 'e', 'i', 'o', 'u', 'y'];
    var count = 0;
    for (var i = 0; i < str.length; i++)
        if (letters.indexOf(str[i]) !== -1)
            count++;

    return count;
}












































module.exports = getVowelsCount