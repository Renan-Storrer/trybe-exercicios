"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    constructor(brand, color, doors) {
        this.brand = brand;
        this.color = color;
        this.doors = doors;
    }
    turnOn() {
        console.log('Carro ligado!');
    }
    turnOff() {
        console.log('Carro desligado!');
    }
    honk() {
        console.log('BUZINANDO: BIP BIP');
    }
    speedUp() {
        console.log('Acelerando!');
    }
    speedDown() {
        console.log('Freiando!');
    }
    stop() {
        console.log('Carro parado!');
    }
    turn(direction) {
        console.log(`Virando para ${direction}!`);
    }
}
exports.default = Car;
