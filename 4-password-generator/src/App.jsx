import { useState, useCallback, useEffect, useRef } from "react";
import React from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copy, setCopy] = useState("Copy");

  // useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "`~!@#$%^&*()_-+={}[];,./:<>?";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
    // console.log(password);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(password);

    setCopy("Copied");
    setTimeout(() => {
      setCopy("Copy");
    }, 2000);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);
  return (
    <>
      <div className="w-full h-screen text-white bg-zinc-700 flex items-center justify-center">
        <div className="px-8 py-4 bg-zinc-900 flex flex-col gap-8 rounded-md">
          <h1 className="text-3xl text-center px-1">Password Generator</h1>
          <div className="flex gap-8 flex-col">
            <div className="flex justify-between">
              <input
                className="rounded-md text-black px-1"
                type="text"
                value={password}
                placeholder="password"
                readOnly
                ref={passwordRef}
              />
              <button
                className="bg-red-700 hover:bg-red-900 px-4 py-2 rounded-md text-lg duration-150 ml-2"
                onClick={copyPasswordToClipboard}
              >
                {copy}
              </button>
            </div>
            <div className="flex justify-between">
              <input
                type="range"
                min={6}
                max={20}
                value={length}
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <span>Length : {length}</span>
            </div>

            <div className="flex justify-between">
              <label className="flex items-center gap-4">
                <input
                  type="checkbox"
                  className="cursor-pointer"
                  defaultChecked={numberAllowed}
                  onChange={() => setNumberAllowed((pre) => !pre)}
                />
                <span>Number</span>
              </label>
              <label className="flex items-center gap-4">
                <input
                  type="checkbox"
                  className="cursor-pointer"
                  defaultChecked={numberAllowed}
                  onChange={() => setCharAllowed((pre) => !pre)}
                />
                <span>Symbols</span>
              </label>
            </div>
            <button
              className="duration-200 w-full text-lg bg-red-700 px-4 py-2 rounded-md hover:bg-red-900"
              onClick={passwordGenerator}
            >
              Generate
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
