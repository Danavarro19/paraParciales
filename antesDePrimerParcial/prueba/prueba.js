
function ocurrencias(array){
    return array.map((element,index) => `${typeof(element)} indice: ${index}`);
}

function suma(array){
    return array.reduce((total, element) => total + element, 0);
}

function countInstances(word){
    letters =  word.split('');

    return countletters = letters.reduce(function (object, key){
        object[key] = object[key]? object[key] +1 : 1;
        return object;
    }, {});
}
