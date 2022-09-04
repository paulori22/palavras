interface PropsKeyboard {
  addLetter: (s: string) => void;
  deleteLastLetter: () => void;
  sendCurrentWord: () => void;
}
const keyBoardLayoutLetters = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l", "ç"],
  ["z", "x", "c", "v", "b", "n", "m"],
];
const Keyboard = ({
  addLetter,
  deleteLastLetter,
  sendCurrentWord,
}: PropsKeyboard) => {
  const handleClick = (letter: string) => {
    addLetter(letter);
  };
  return (
    <>
      {keyBoardLayoutLetters.map((letters, index) => {
        const row = letters.map((keyLetter) => (
          <button
            key={keyLetter}
            data-key={keyLetter}
            onClick={() => handleClick(keyLetter)}
          >
            {keyLetter.toUpperCase()}
          </button>
        ));
        return (
          <div key={index} className="row">
            {row}
          </div>
        );
      })}
      <div className="row">
        <button data-key="↵" onClick={sendCurrentWord}>
          ENTER
        </button>
        <button data-key="←" onClick={deleteLastLetter}>
          Delete
        </button>
      </div>
    </>
  );
};

export default Keyboard;
