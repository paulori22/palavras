import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Keyboard from "../components/Keyboard";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [guessWordLetters, setGuessWordLetters] = useState<string[]>(
    "carro".split("")
  );
  const [wordLength, setWordLength] = useState<number>(5);
  const [maxWordAttempt, setMaxWordAttempt] = useState<number>(6);
  const [wordAttempt, setWordAttempt] = useState<number>(0);
  const [posLetter, setPostLetter] = useState<number>(0);

  const initialWordsState = [];
  for (let index = 0; index < maxWordAttempt; index++) {
    const word = [];
    for (let j = 0; j < wordLength; j++) {
      word.push("");
    }
    initialWordsState.push(word);
  }
  const [words, setWords] = useState<string[][]>(initialWordsState);

  const incrementPosLetter = () => {
    const newPos = posLetter + 1;
    if (newPos <= wordLength) {
      setPostLetter(newPos);
    }
  };

  const decrementPosLetter = () => {
    const newPos = posLetter - 1;
    if (newPos >= 0) {
      setPostLetter(newPos);
    }
  };

  const addLetter = (letter: string) => {
    const newWordsState = [...words];
    const currentWord = newWordsState[wordAttempt];
    if (posLetter < wordLength) {
      currentWord[posLetter] = letter;
      setWords(newWordsState);
      incrementPosLetter();
    }
  };

  const deleteLastLetter = () => {
    const newWordsState = [...words];
    const currentWord = newWordsState[wordAttempt];
    const newPosLetter = posLetter - 1;
    if (newPosLetter >= 0) {
      currentWord[newPosLetter] = "";
      setWords(newWordsState);
      decrementPosLetter();
    }
  };

  const isValidWord = (word: string[]) => {
    return true;
  };

  const incrementWordAttempt = () => {
    const newWordAttempt = wordAttempt + 1;
    if (newWordAttempt < maxWordAttempt) {
      setWordAttempt(newWordAttempt);
    }
  };

  const checkWord = (letters: string[]) => {
    const word = letters.join();
    const guessWord = guessWordLetters.join();
    if (word === guessWord) {
    } else {
    }
  };

  const sendCurrentWord = () => {
    const currentWord = words[wordAttempt];
    if (currentWord.length != posLetter) {
      alert("Faltando Letras");
      return false;
    }
    if (!isValidWord(currentWord)) {
      alert("Palavra não existe");
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Palavras</title>
        <meta name="description" content="projeto" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>PALAVRAS</h1>

        {words.map((word, index) => {
          const word_html = word.map((letter, index) => (
            <p key={index} className={styles.card}>
              {letter}
            </p>
          ));
          return (
            <div key={index} className={styles.grid}>
              {word_html}
            </div>
          );
        })}
        <Keyboard
          addLetter={addLetter}
          deleteLastLetter={deleteLastLetter}
          sendCurrentWord={sendCurrentWord}
        />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
