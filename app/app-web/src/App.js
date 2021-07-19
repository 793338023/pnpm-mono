import React, { useState, useEffect } from "react";
import { Foo } from "components";
import "./App.css";

function App() {
  const [data, setData] = useState({ a: 1, b: 2 });

  useEffect(() => {
    setTimeout(() => {
      setData((prev)=>({ ...prev, c: 2 }));
    }, 10);
    setData({});
  }, []);
  console.log(data);
  return (
    <div className="App">
      123
      <Foo title="xxx123" />
    </div>
  );
}

export default App;
