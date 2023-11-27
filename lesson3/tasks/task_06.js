/* Вам предоставляется словарь/хэш/объект, содержащий несколько языков, и результаты вашего теста на этих языках.
  Верните список языков, на которых ваш результат теста не ниже 60, в порядке убывания баллов.
 {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
{"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
{"C++": 50, "ASM": 10, "Haskell": 20}     -->  []
Note: оценки всегда будут уникальными (поэтому никаких повторяющихся значений) */

function myLanguages(results) {

    // Создаем новый массив ключей словаря
    let languages = Object.keys(results);
    
    // Фильтруем языки, у которых значения баллов >= 60
    let passedLanguages = languages.filter(language => results[language] >= 60);
    
    // Сортируем языки по убыванию баллов
    passedLanguages.sort((a, b) => results[b] - results[a]);
    
    return passedLanguages;
    }













































































module.exports = myLanguages

