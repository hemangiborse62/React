import React, { Component } from "react";
class Clock extends Component {
  state = { time: null };

  componentDidMount() {
    setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  render() {
    console.log(this.state.time);
    return (
      <div>
        <div className="time">{this.state.time}</div>
      </div>
    );
  }
}
export default Clock;