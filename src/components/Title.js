import React, {useState, useEffect} from "react";

const Title = () => {
   
    const words = ["Beauty", "Wonders", "Splendor", "Paradise"];
    const [currentWord, setCurrentWord] = useState("Paradise");
  
    useEffect(() => {
      const changeWord = () => {
        const randomIndex = Math.floor(Math.random() * words.length);
        setCurrentWord(words[randomIndex]);
      };
  
      changeWord();
      const intervalId = setInterval(changeWord, 3000);
      return () => clearInterval(intervalId);
    }, []);
    
  return (
    <>
      <h1 className="display-3 mt-5 mt-md-0">
        <span className="fw-semibold">Discover</span> the Allure
        <br />
        of Sri Lanka's
        <span className="fw-semibold"> {currentWord}</span>
      </h1>
    </>
  );
};

export default Title;
