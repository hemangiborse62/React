import React, { Component } from "react";

import "./styles.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <table>
            <tr>
              <th>Name</th>
              <th className="margin">Job</th>
            </tr>
            <hr />
            <tr>
              <td>Charlie</td>
              <td className="margin">Janitor</td>
            </tr>{" "}
            <hr />
            <tr>
              <td>Mac</td>
              <td className="margin">Bouncer</td>
            </tr>
            <hr />
            <tr>
              <td>Dee</td>
              <td className="margin">Aspiring Actress</td>
            </tr>
            <hr />
            <tr>
              <td>Dennis</td>
              <td className="margin">Bartender</td>
            </tr>
            <hr />
          </table>
        </div>
      </div>
    );
  }
}
export default App;