/*
*  Если мы получили палиндром, функция должна вернуть значение true. Если же нет — false.
* */

function isPalindrome(str) {
    
    var revers = str.split("").reverse().join("");

    return str === revers;
}

















































module.exports = isPalindrome