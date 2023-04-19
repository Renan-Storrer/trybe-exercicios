class Car {
  brand: string;
  color: string;
  doors: number;

  constructor(brand: string, color: string, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }

  turnOn(): void {
    console.log('Carro ligado!');
  }

  turnOff(): void {
    console.log('Carro desligado!');
  }

  honk(): void {
    console.log('BUZINANDO: BIP BIP');
  }

  speedUp(): void {
    console.log('Acelerando!');
  }

  speedDown(): void {
    console.log('Freiando!');
  }

  stop(): void {
    console.log('Carro parado!');
  }

  turn(direction: string): void{
    console.log(`Virando para ${direction}!`);
  }
}

export default Car;