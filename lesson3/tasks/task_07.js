/*Your task is to write such a run-length encoding.
 For a given string, return a list (or array) of
  pairs (or arrays) [ (i1, s1), (i2, s2), …, (in, sn) ],
   such that one can reconstruct the original string by replicating the character sx ix times and concatening
all those strings. Your run-length encoding should be minimal, ie
. for all i the values si and si+1 should differ.*/
// runLengthEncoding("hello world!")
//=>      [[1,'h'], [1,'e'], [2,'l'], [1,'o'], [1,' '], [1,'w'], [1,'o'], [1,'r'], [1,'l'], [1,'d'], [1,'!']]
// runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb")
//  // => [[34,'a'], [3,'b']]

/*  
    Для заданной строки верните массив пар [ [i1, s1], [i2, s2], …, [in, sn] ], 
    чтобы можно было восстановить исходную строку, 
    повторив символ 's' 'i' раз и объединив все эти строки.
*/

function runLengthEncoding(str) {
    let result = [];
    let count = 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            result.push([count, str[i]]);
            count = 1;
        }
    }
    return result;
}














































































module.exports = runLengthEncoding