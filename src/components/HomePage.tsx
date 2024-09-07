import React, { useState, useEffect } from "react";

function HomePage() {
  const fullText = `I am David, a passionate student with a deep love for programming and problem-solving.
  I am constantly exploring new technologies and like to turn my ideas into reality. 
  Whether it is about full-stack development, automation or Machine Learning. 
  Feel free to check them out.`;

  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isAfterPunctuation, setIsAfterPunctuation] = useState(false);
  const [isFinished, setIsFinished] = useState(false); // New state to track if typing is done

  useEffect(() => {
    if (index < fullText.length) {
      const currentChar = fullText[index];

      // Determine the delay before the next character is written
      let typingDelay = isAfterPunctuation ? 1000 : 50; // Longer delay after punctuation, default is 50ms

      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentChar);
        setIndex((prev) => prev + 1);

        // Check if the current character is punctuation, if so, set the next character to have a longer delay
        if ([".", "!", "?"].includes(currentChar)) {
          setIsAfterPunctuation(true); // The next character will have a longer delay
        } else {
          setIsAfterPunctuation(false); // Reset to normal speed for other characters
        }

        if (index === fullText.length - 1) {
          setIsFinished(true);
        }
      }, typingDelay); // Apply the delay (longer if after punctuation)

      return () => clearTimeout(timeout);
    }
  }, [index, fullText, isAfterPunctuation]);

  return (
    <div className="homePage page">
      <div className="introduction_text">
        {displayedText}
        {/* Show the blinking cursor only while typing, hide it when finished */}
        {!isFinished && <span className="cursor">|</span>}
      </div>
      {/* Show the blinking arrow when typing is finished */}
      {isFinished && <span className="arrow">{"=>"}</span>}
    </div>
  );
}

export default HomePage;
