function sumar(a:number, b:number):number{
    return a+b
}

const resultado=sumar(4,6)
console.log(resultado)

function multiplicar(n1:number, base:number=6):number{
    return n1*base
}
console.log(multiplicar(3,5))
console.log(multiplicar(3))

//const addNumberArrow=(a:number, b:number):string=>{return`${a+b}`}

interface Mascotas{
    apodo:string;
    nombre:string;
    edad:number;
    raza:string;
    sexo?:string;
    vacunado:boolean;
    mostrarEdad:()=>void
}

function mostarMascota(mascota:Mascotas, x:number):void{
    mascota.edad+=x;
    console.log(mascota);
    console.log(mascota.mostrarEdad())
}

const nuevaMascota:Mascotas={
    apodo:"perro pendejo",
    nombre:"perro",
    edad: 4,
    raza:"pendejo",
    vacunado:true,
    mostrarEdad(){
        console.log(`la edad de ${this.edad} es ${this.apodo}`)
    },
}

mostarMascota(nuevaMascota,2)