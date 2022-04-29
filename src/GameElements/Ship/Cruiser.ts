export default class Cruiser {
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
        [startingRow + 2, startingColumn],
      ];
    }
    return [
      [startingRow, startingColumn],
      [startingRow, startingColumn + 1],
      [startingRow, startingColumn + 2],
    ];
  }

  get length(): number {
    return this.coordinates.length;
  }
}
