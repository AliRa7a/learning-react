import "./App.css";
import React, { useState, useCallback } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = useCallback(() => {
    let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      charset += "0123456789";
    }
    if (characterAllowed) {
      charset += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    }

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }

    setPassword(generatedPassword);
  }, [length, numberAllowed, characterAllowed]);

  const handleLengthChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 4 && value <= 20) {
      setLength(value);
      generatePassword();
    }
  };

  const handleCopyPassword = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  };

  return (
    <div className="App bg-gray-600 w-full max-w-xl mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500">
      <h1 className="text-4xl text-center text-white mb-4">
        Password Generator
      </h1>
      <div className="flex justify-center mb-4">
        <label className="text-white mr-2">Length:</label>
        <input
          type="range"
          min="8"
          max="20"
          value={length}
          onChange={handleLengthChange}
          className="px-2 py-1 w-full max-w-md rounded border border-gray-400"
        />
        <span className="text-white ml-2">{length}</span>
      </div>
      <div className="flex justify-center mb-4">
        <label className="text-white mr-2">
          <input
            type="checkbox"
            checked={numberAllowed}
            onChange={() => setNumberAllowed(!numberAllowed)}
          />
          Include Numbers
        </label>
        <label className="text-white ml-4">
          <input
            type="checkbox"
            checked={characterAllowed}
            onChange={() => setCharacterAllowed(!characterAllowed)}
          />
          Include Special Characters
        </label>
      </div>
      <div className="flex justify-center mb-4 py-4 shadow rounded-lg overflow-hidden">
        <input
          type="text"
          value={password}
          readOnly
          className="px-2 py-1 w-full rounded border border-gray-400"
        />
        <button
          onClick={handleCopyPassword}
          disabled={!password}
          className="px-4 py-2 bg-orange-500 text-white rounded"
        >
          Copy
        </button>
      </div>
    </div>
  );
}

export default App;
