class tv {
  //atributos
  brand: string;
  size: number;
  resolution: string;
  connections: string;
  connectedTo: string;

  constructor(b: string, s: number, r: string, c: string, ct: string) {
    this.brand = b;
    this.size = s;
    this.resolution = r;
    this.connections = c;
    this.connectedTo = ct;
  }
}