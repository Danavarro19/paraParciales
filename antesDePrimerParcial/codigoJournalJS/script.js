//declaracion variable journal
journal = [];

//funcion que imprime el contenido en el diario
imprimirJournal = function(){
    for(let i=0;i<journal.length;i++){
        console.log("Eventos: " + journal[i].events + " accidente: | " + journal[i].accidente);
    }
}

//funcion para ingresar un dia al journal
var ingresarJournal = function(eventos,isAccidente){
    let dia = {};
    dia.events = eventos;
    dia.accidente = isAccidente;

    journal.push(dia);

    imprimirJournal();
}

//funcion que calcula coeficiente de chi
var calcTabla = function(evento){
    var arr = [0,0,0,0];
    let index = 2;
    for(let i=0;i<journal.length;i++){
        if(journal[i].events.include(evento)) {index-=2;}
        if(!journal[i].isAccidente) {index+=1;}
    }

    return arr;
}

var calcPhi = function(Tabla){
    return tabla[1];
}


/*function listing_types(array){
    return array.map(element => typeof(element))
            .reduce((dictionary, element) => { dictionary[element] = dictionary[element] ?
            dictionary[element] +1 : 1;
            return dictionary;
          }, {});
  }*/

array1 = [1,21,3,45,5,6,7,80,9,10,78];

/*array1.forEach(element => { //si se quiere un el index, se pone a la par y con parentesislo dos 
    console.log(element);
});*/

var filtro = array1.filter(numero => numero >= 10); //para filtrar

/*var pruebaMapa = array1
    .map(numero => numero*2)
    .map(numero => Math.sqrt(numero));*/

/*var sortArray = array1.sort((a,b) => (a > b ? 1 : -1));*/

/*var sortArray = array1.sort((a,b) => (a-b));*/

var suma = array1.reduce( (total,numero) => total + numero ,0);
