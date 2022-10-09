export enum GameActionTypes {
  INCREMENT_CURRENT_GUESS_POSITION_LETTER = "INCREMENT_CURRENT_GUESS_POSITION_LETTER",
  DECREASE_CURRENT_GUESS_POSITION_LETTER = "DECREASE_CURRENT_GUESS_POSITION_LETTER",
  RESET_CURRENT_GUESS_POSITION_LETTER = "RESET_CURRENT_GUESS_POSITION_LETTER",
}

export interface AnyAction {
  type: GameActionTypes;
}

export interface ConfigGameState {
  wordLength: number;
  maxWordAttempt: number;
}

export interface GameState {
  config: ConfigGameState;
  guessWord: string[];
  wordAttempt: number;
  currentGuessPositionLetter: number;
  attemptWords: string[][];
}
