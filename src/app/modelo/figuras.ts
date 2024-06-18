// Jerarquia de clases

// Clase abstracta 

export abstract class FiguraGeometrica {
    nombre: string = ""

    constructor(nombre: string) {
        this.nombre = nombre
    }

    abstract calcularPerimetro(): number


}

// Clase Circulo que extiende la clase Figura Geometrica

export class Circulo extends FiguraGeometrica {
    radio: number

    constructor(nombre: string, radio: number) {
        super(nombre)
        this.radio = radio
    }

    calcularPerimetro(): number {
        return Math.PI * this.radio * 2
    }
}

// Clase triangulo escaleno que extiende la clase Figura Geometrica
export class TrianguloEscaleno extends FiguraGeometrica {
    ladoA: number
    ladoB: number
    ladoC: number

    constructor(nombre: string, ladoA: number, ladoB: number, ladoC: number) {
        super(nombre)
        this.ladoA = ladoA
        this.ladoB = ladoB
        this.ladoC = ladoC
    }

    calcularPerimetro(): number {
        return this.ladoA + this.ladoB + this.ladoC
    }
}

// Clase triangulo Equilatero que extiende la clase triangulo Escaleno

export class TrianguloEquilatero extends TrianguloEscaleno {
    constructor(lado: number) {
        super('Triángulo Equilátero', lado, lado, lado);
    }
}