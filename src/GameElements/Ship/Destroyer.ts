export default class Destroyer {
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
      return [
        [startingRow, startingColumn],
        [startingRow + 1, startingColumn],
      ];
    }
    return [
      [startingRow, startingColumn],
      [startingRow, startingColumn + 1],
    ];
  }

  get length(): number {
    return this.coordinates.length;
  }
}
