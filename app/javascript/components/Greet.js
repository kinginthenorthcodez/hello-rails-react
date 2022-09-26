import React from "react";
import { useSelector } from "react-redux";
function Greet() {
  const message = useSelector((state) => state);
  return (
    <>
      <div className="App">
        <header className="App-header">
          <p style={{ fontSize: 26 }}>Message: {message.greet}</p>
        </header>
      </div>
    </>
  );
}

export default Greet;
