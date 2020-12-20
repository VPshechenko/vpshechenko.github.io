//
// obj = {
//          words: 'newspapers newspapers  books magazines'
//      }
//


// Конкатенация строк объекта
function addWords(obj, wrds) {

    obj.words = toObj(delDublicate(toArr(obj.words).concat(toArr(wrds)))).words;
}

// Удаление слов в объекте
function removeWords(obj, wrds) {

    obj.words = toObj(delDublicate(delFromArr(toArr(obj.words), toArr(wrds)))).words;
}

// Замена слов в объекте
function changeWords(obj, oldWrds, newWrds) {
    removeWords(obj, oldWrds);
    addWords(obj, newWrds);
    //obj.words = toObj(addWords(removeWords(obj, oldWrds), newWrds)).words;
}

// Разбивает строку из слов, разделенных пробелами, на массив слов
function toArr(str) {
    return arrClear(str.split(' '));
}

// Удаляет в массиве елементы "пустая строка" "" и возвращает новый массив
function arrClear(arr) {
    let result = [];
    arr.forEach(function(item, index, array){
        if(item.length !== 0) {
            result.push(item);
        }
    });
    return result;
}

// Удаляет дубликаты элементов массива, возвращает новый массив уникальных строк
function delDublicate(arr) {
    let result = [];
    arr.forEach(function(item, index, array){
        if(!result.includes(item, 0)) {
            result.push(item);
        }
    });
    return result;
}

// Преобразовывает массив в объект типа obj = { words: '[0] [1] ... [n]'}
function toObj(arr) {
    let obj = { words: ''};
    arr.forEach(function(item, index, array){
        obj.words += (index ? ' ' : '') + item;
    });
    return obj;
}

// Удаляет из первого массива элементы второго массива
function delFromArr(arr, pattern) {
    let result = [];
    arr.forEach(function(item, key, array){
        if(!pattern.includes(item, 0)) {
            result.push(item);
        }
    });
    return result;
}