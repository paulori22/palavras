import { ConfigGameState, GameActionTypes, GameState } from "./types";

export const INITIAL_CONFIG: ConfigGameState = {
  maxWordAttempt: 6,
  wordLength: 5,
};

export const initialAttemptWordsState = (
  maxWordAttempt: number,
  wordLength: number
) => {
  const initialState = [];
  for (let index = 0; index < maxWordAttempt; index++) {
    const word = [];
    for (let j = 0; j < wordLength; j++) {
      word.push("");
    }
    initialState.push(word);
  }
  return initialState;
};

export const INITIAL_STATE: GameState = {
  config: INITIAL_CONFIG,
  guessWord: "carros".split(""),
  wordAttempt: 0,
  currentGuessPositionLetter: 0,
  attemptWords: initialAttemptWordsState(
    INITIAL_CONFIG.maxWordAttempt,
    INITIAL_CONFIG.wordLength
  ),
};

export const gameReducer = (state: GameState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GameActionTypes.INCREMENT_CURRENT_GUESS_POSITION_LETTER:
      const newPositionIncrement = state.currentGuessPositionLetter + 1;
      if (newPositionIncrement > state.config.wordLength) {
        return state;
      }
      return {
        ...state,
        currentGuessPositionLetter: newPositionIncrement,
      };
    case GameActionTypes.DECREASE_CURRENT_GUESS_POSITION_LETTER:
      const newPositionDecrease = state.currentGuessPositionLetter - 1;
      if (newPositionDecrease < 0) {
        return state;
      }
      return {
        ...state,
        currentGuessPositionLetter: newPositionDecrease,
      };
    case GameActionTypes.RESET_CURRENT_GUESS_POSITION_LETTER:
      return {
        ...state,
        currentGuessPositionLetter: 0,
      };
    default:
      return state;
  }
};
