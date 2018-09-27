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
    
}