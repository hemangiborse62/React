import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Clock from "./Clock";

export default function App() {
  return (
    <div className="App">
      <table>
        <tr class="first">
          <h1>Digital Clock</h1>
        </tr>
        <tr>
          <h1>
            <button>Calender</button>
          </h1>
        </tr>
        <tr>
          <div class="circle">
            <Clock />
          </div>
        </tr>
      </table>
    </div>
  );
}
