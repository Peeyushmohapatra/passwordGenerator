import { useState } from "react";
import "./App.css";
import CheckBox from "./CheckBox";
import GeneratePassword from "./GeneratePassword";
import Input from "./Input";
import PasswordGenerator from "./PasswordGenerator";
import {
  symbolArray,
  uppercaseArray,
  lowercaseArray,
  numberArray,
} from "./Arrayscontainer";

function App() {
  const [password, setPassword] = useState({
    uppercase: false,
    lowercase: false,
    symbol: false,
    number: false,
    length: null,
  });

  const [copied, setCopied] = useState(false);

  const [handleText, setHandleText] = useState("");
  function handleuppercaseChange() {
    setPassword({
      ...password,
      uppercase: !password.uppercase,
    });
  }
  function handlelowercaseChange() {
    setPassword({
      ...password,
      lowercase: !password.lowercase,
    });
  }
  function handlesymbolChange() {
    setPassword({
      ...password,
      symbol: !password.symbol,
    });
  }
  function handlenumberChange() {
    setPassword({
      ...password,
      number: !password.number,
    });
  }
  function handlelengthChange(value) {
    setPassword({
      ...password,
      length: value,
    });
  }

  function passwordGenerate() {
    // console.log(handleText, password);

    const { uppercase, lowercase, symbol, number, length } = password;

    function generateWord(uppercase, lowercase, symbol, number, length) {
      const availableValue = [
        ...(uppercase ? uppercaseArray : []),
        ...(lowercase ? lowercaseArray : []),
        ...(symbol ? symbolArray : []),
        ...(number ? numberArray : []),
      ];
      function shuffleArray(array) {
        return array.sort(() => {
          return Math.random() - 0.6;
        });
      }
      const ans = shuffleArray(availableValue)
        .slice(0, password.length)
        .join("");
      setHandleText(ans);
      return ans;
    }
    generateWord(uppercase, lowercase, symbol, number, length);
  }

  return (
    <div className="App">
      <h2 style={{ textAlign: "center" }}>Password Generator</h2>
      <PasswordGenerator
        handleText={handleText}
        setHandleText={setHandleText}
        copied={copied}
        setCopied={setCopied}
      />
      <Input label={"Enter Password Length"} onchange={handlelengthChange} />

      <CheckBox label={"Include Uppercase letters"} onchange={handleuppercaseChange} />
      <CheckBox label={"Include Lowercase letters"} onchange={handlelowercaseChange} />
      <CheckBox label={"Include Symbols"} onchange={handlesymbolChange} />
      <CheckBox label={"Include Numbers"} onchange={handlenumberChange} />
      <GeneratePassword onclick={passwordGenerate} />
    </div>
  );
}

export default App;
