import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const MyHeader = styled.header`
  background: #999;
  width: 100%;
  height: 10vh;
`;

const Header = () => {
  return <header className="header">hello word</header>;
};

const SideBar = () => {
  return (
    <side style={{ fontSize: "20px" }}>
      <ul style={{ display: "flex", listStyle: "none", padding: "20px" }}>
        <li>a</li>
        <li>i</li>
        <li>u</li>
        <li>e</li>
        <li>o</li>
      </ul>
    </side>
  );
};

const Button = () => {
  return (
    <button
      onClick={() => {
        alert("ok");
      }}
    >
      ボタン
    </button>
  );
};

const App = () => {
  const [input, setInput] = useState("ここに表示されます");
  return (
    <div>
      <MyHeader />
      <Header />
      <SideBar />
      <Button />
      {/* イベントの取り出し */}
      {/*() => {} 無名関数 */}
      {/* <input
        type="text"
        onClick={e => { 
          setInput("qqqqqqqq");
        }}
        onChange={e => {
        // onBlur={e => {
          setInput(e.target.value);
        }}
      />
      <br />
      {input} */}

      <form>
        <ul>
          <li>
            <label>name:</label>
            <input
              type="text"
              onChange={e => {
                setInput(e.target.value);
              }}
            />
            <br />
            {input}
          </li>
          <li>
            <label>mail:</label>
            <input
              type="mail"
              onChange={e => {
                setInput(e.target.value);
              }}
            />
            <br />
            {input}
          </li>
          <button>送信</button>
        </ul>
      </form>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
