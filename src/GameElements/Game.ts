import { Coordinate } from './GameBoard';
import Player from './Player';

export default class Game {
  player1: Player;

  player2: Player;
  // isReady: boolean

  constructor() {
    this.player1 = new Player();
    this.player2 = new Player();
    this.player1.rival = this.player2;
    this.player2.rival = this.player1;
    this.player2.placeRandomly();
    // this.isReady = false
  }

  get winner(): string | undefined {
    if (this.player1.health === 0) {
      return 'Player 2';
    }
    if (this.player2.health === 0) {
      return 'Player 1';
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
