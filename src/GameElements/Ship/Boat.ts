export default class Boat {
  axis: string;

  startingCoordinate: number[];

  constructor(axis: string, startingCoordinate: number[]) {
    this.axis = axis;
    this.startingCoordinate = startingCoordinate;
  }

  get coordinates(): number[][] {
    const startingRow: number = this.startingCoordinate[0];
    const startingColumn: number = this.startingCoordinate[1];
    if (this.axis === 'v') {
      return [[startingRow, startingColumn]];
    }
    return [[startingRow, startingColumn]];
  }

  get length(): number {
    return this.coordinates.length;
  }
}
