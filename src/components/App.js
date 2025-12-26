import React, { useState, useEffect } from "react";
import "./../styles/App.css";

const App = () => {
  const [input, setInput] = useState(0);
  const [sum, setSum] = useState(0);
  useEffect(() => {
    setSum((prev) => prev + +input);
  }, [input]);

  return (
    <div>
      <input
        type="number"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <p>Sum: {sum}</p>
    </div>
  );
};

export default App;
