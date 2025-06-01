import React, { useState, useEffect } from "react";

// Custom dictionary for spell-checking
const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};


function App(){
  const [text,setText] = useState('');
  const [suggestedText, setSuggestedText] = useState('');

  const spellcheck = (input) => {
    const words = input.split(' ');

    for (let word of words){
      const lowerCaseword = word.toLowerCase();
      if(customDictionary[lowerCaseword]){
        return `Did you mean: ${customDictionary[lowerCaseword]}?`;
      }
    }

    return '';
  };


  useEffect(() => {
    if(text.trim() === ''){
      setSuggestedText('');
    }
    else{
      const availableSuggestion = spellcheck(text);
      setSuggestedText(availableSuggestion);
    }
  },[text]);


  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>

      <textarea 
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text..."
        rows={10}
        cols={50}
      />

      {suggestedText && <p>{suggestedText}</p>}
    </div>
  )


}


export default App;