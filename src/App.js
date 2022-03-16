import "./styles.css";
import { useState } from "react";

export default function App() {
  const [year, setYear] = useState(0);
  const [sentence, setSentence] = useState();

  const onClickButton = () => {
    if (year === 2015) {
      setSentence(`${year}. I'm in the present!`);
    } else if (year < 2015) {
      setSentence(`${year}. Whoa! Blast from the past!`);
    } else {
      setSentence(`${year}. Greetings from the future!`);
    }
  };

  return (
    <div className="App">
      <input
        placeholder="input year"
        year={year}
        onChange={(e) => {
          setYear(e.target.value);
        }}
      />
      <br />
      <button onClick={onClickButton}>click</button>
      <h1>{year}</h1>
      <p>{sentence}</p>
    </div>
  );
}
