export enum Position {
  Boss = 1,
  Manager = 2,
  Employee = 3,
}

export class Kontakt {
  id: number;
  name: string;
  surname: string;
  poster: string;
  position: Position;

  getType(x: number): any {
    return Position[x];
  }
}
