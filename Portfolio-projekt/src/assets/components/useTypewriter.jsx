import { useEffect, useState } from "react";

function useTypewriter(texts, speed = 100, delayBetween = 1500) {
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0); 
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (index >= texts.length) return;

    const currentString = texts[index];
    if (charIndex <= currentString.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) =>
          prev + currentString.charAt(charIndex)
        );
        setCharIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      const delay = setTimeout(() => {
        setCurrentText((prev) => prev + "\n");
        setCharIndex(0);
        setIndex((prev) => prev + 1);
      }, delayBetween);
      return () => clearTimeout(delay);
    }
  }, [charIndex, index, texts, speed, delayBetween]);

  return currentText;
}

export default useTypewriter;