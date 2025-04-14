import {useEffect, useState } from "react";

 function useTypewriterWithErase(texts, speed = 100, delayBetween = 1500) {
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (texts.length === 0) return;

    const currentWord = texts[index];
    let timeout;

    if (!isDeleting && charIndex < currentWord.length) {
      timeout = setTimeout(() => {
        setCurrentText(currentWord.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, speed);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setCurrentText(currentWord.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, speed);
    } else if (!isDeleting && charIndex === currentWord.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, delayBetween);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index, texts, speed, delayBetween]);

  return currentText;
}
 

export default useTypewriterWithErase;