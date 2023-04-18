export function getSquareArea(side: number): number {
  return side ** 2
};

export function getRetangleArea(base: number, height: number): number {
  return base * height;
};

export function getTriangleArea(base: number, height: number): number {
  return (base * height) / 2;
};


export function getPolygonPerimeter(sides: number[]): number {
  return sides.reduce((acc, side) => acc + side, 0);
};