import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [hasNumbers, setHasNumbers] = useState(false);
  const [hasCharacters, setHasCharacters] = useState(false);
  const [password, setPassword] = useState("");

  const passowordRef = useRef(null);

  const copyPassword = useCallback(() => {
    passowordRef.current.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (hasNumbers) str += "0123456789";
    if (hasCharacters) str += "!@#$%^&*_+";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, hasNumbers, hasCharacters, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, hasNumbers, hasCharacters, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 pb-4 text-orange-500 bg-gray-700">
        <h1 className="text-2xl text-white text-center py-2 my-3">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            ref={passowordRef}
            readOnly
          />
          <button
            onClick={copyPassword}
            className="outline-none hover:bg-blue-600 bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={hasNumbers}
              id="numberInput"
              onChange={() => setHasNumbers(!hasNumbers)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={hasCharacters}
              id="characterInput"
              onChange={() => setHasCharacters(!hasCharacters)}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
