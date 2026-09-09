interface Reproductor{
    volumen:Number,
    segundo:Number,
    cancion:String,
    detalles:Detalles
}

interface Detalles{
    autor:String,
    anio:Number
}

const reproductor:Reproductor={
    volumen:90,
    segundo:36,
    cancion:"Mess",
    detalles:{
        autor:"Ed Sheraan",
        anio:2015
    }
}

console.log("El volumen es: ",reproductor.volumen);
console.log("El segundo es: ",reproductor.segundo);
console.log("La cancion es: ",reproductor.cancion);
console.log("El autor es: ",reproductor.detalles.autor);
console.log("El anio es: ",reproductor.detalles.anio);

//desestructuracion de objetos
const{volumen,segundo,cancion,detalles}=reproductor;
const{autor,anio}=detalles;

console.log('El volumen actual es: ',volumen);
console.log('El tiempo actual es: ',segundo);
console.log('La cancion actual es: ',cancion);
console.log('El autor actual es: ',autor);
console.log('El anio actual es: ',anio);

//DESESTRUCTURACION DE ARREGLOS
const dbz:string[]=["Goku", "Vegeta", "Trunks"];
const [p1,p2,p3]=dbz
console.log("Personaje 1: ",p1);
console.log("Personaje 2: ",p2);
console.log("Personaje 3: ",p3);
