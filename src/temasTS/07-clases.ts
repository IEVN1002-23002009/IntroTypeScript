class Persona{
    nombre:string
    edad:number

    constructor(nom:string,edad:number){
        this.nombre=nom
        this.edad=edad
    }

    imprimir(){
        console.log(`hola me llamo ${this.nombre} y tengo ${this.edad} años`)
    }
}

let persona:Persona
persona=new Persona("Juan", 23)
persona.imprimir()