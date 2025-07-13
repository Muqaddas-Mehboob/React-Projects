// 🔽 Importing React hooks
import { useCallback, useEffect, useRef, useState } from 'react';

function App() {
  // ✅ useState Hook
  // useState is used to create state variables
  const [length, setLength] = useState(8);            // Password length
  const [isNumber, setIsNumber] = useState(false);    // Include numbers?
  const [isChar, setIsChar] = useState(false);        // Include special characters?
  const [password, setPassword] = useState("");       // Final password

  // ✅ useRef Hook
  // useRef is used to directly access the input element
  const passwordRef = useRef(null); // Ref for the password input field

  // ✅ useCallback Hook
  // useCallback is used to prevent re-creating this function on every render
  let passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    // Add numbers and characters if selected
    if (isNumber) str += "0123456789";
    if (isChar) str += "~!@#$%^&*()_{}[]`|/?><";

    // Randomly generate password based on selected options
    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    // Save the password in state
    setPassword(pass);

  }, [length, isNumber, isChar, setPassword]);

  // ✅ useCallback Hook (for copying password)
  const copyPassword = useCallback(() => {
    // Select the text in input field using useRef
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 20);

    // Copy to clipboard
    window.navigator.clipboard.writeText(password);
  }, [password]);

  // ✅ useEffect Hook
  // useEffect runs when component mounts or when dependencies change
  useEffect(() => {
    passwordGenerator(); // Automatically generate password when options change
  }, [length, isChar, isNumber, passwordGenerator]);

  return (
    <>
      <div className='w-full max-w-md h-40 mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-4xl text-center text-white p-4'>Password Generator</h1>

        {/* Password input field and copy button */}
        <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white'>
          <input
            type='text' // ✅ Corrected from '{text}' to 'text'
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passwordRef} // useRef attached here
          />
          <button
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
            onClick={copyPassword} // Call copy function
          >
            Copy
          </button>
        </div>

        {/* Settings: length, numbers, characters */}
        <div className='flex text-sm gap-x-2'>
          {/* Password Length Slider */}
          <div className='flex items-center gap-x-1'>
            <input
              type='range'
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)} // Update length
            />
            <label>Length: {length}</label>
          </div>

          {/* Checkbox: Include Numbers */}
          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              defaultChecked={isNumber}
              id='NumberInput'
              onChange={() => setIsNumber((prev) => !prev)} // Toggle number
            />
            <label htmlFor='NumberInput'>Number</label>
          </div>

          {/* Checkbox: Include Characters */}
          <div className='flex items-center gap-x-1 mx-2'>
            <input
              type='checkbox'
              defaultChecked={isChar}
              id='CharInput'
              onChange={() => setIsChar((prev) => !prev)} // Toggle characters
            />
            <label htmlFor='CharInput'>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
