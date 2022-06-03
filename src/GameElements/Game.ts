import GameBoard, { Coordinate } from './GameBoard';
import Player from './Player';

export default class Game {
  player1: Player;

  player2: Player;

  constructor() {
    this.player1 = new Player();
    this.player2 = new Player();
    this.player1.rival = this.player2;
    this.player2.rival = this.player1;
    this.player2.placeRandomly();
  }

  reset() {
    this.player1 = new Player();
    this.player2 = new Player();
    this.player1.rival = this.player2;
    this.player2.rival = this.player1;
    this.player1.gameBoard = new GameBoard();
    this.player2.gameBoard = new GameBoard();
    this.player2.placeRandomly();
    this.playerOnesTurn = true;
  }

  get winner(): string | undefined {
    if (this.player1.health === 0) {
      return 'Game Bot';
    }
    if (this.player2.health === 0) {
      return 'Player';
    }
    return undefined;
  }

  get playerOnesTurn() {
    return this.player1.playerOnesTurn;
  }

  set playerOnesTurn(value) {
    this.player1.playerOnesTurn = value;
  }

  get isReady() {
    return this.player1.health === 20 && this.player2.health === 20;
  }

  get isPlayer1Ready(): boolean {
    return this.player1.isReady;
  }

  get isPlayer2Ready(): boolean {
    return this.player2.isReady;
  }

  randomAttack(): void {
    const availableAttacks: Coordinate[] = this.player1.gameBoard.coordinates.filter(
      (coordinate) => coordinate.attacked === false,
    );

    const randomAttackIndex: number = Math.floor(
      Math.random() * availableAttacks.length,
    );

    const { row } = availableAttacks[randomAttackIndex];
    const { column } = availableAttacks[randomAttackIndex];

    this.player2.attack([row, column]);
    this.playerOnesTurn = !this.playerOnesTurn;
  }
}
