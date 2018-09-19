import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";

class Counter extends React.Component {
  state = {
    counter: 0,
    setTo: undefined
  };

  handleAddCounter = () => {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  };
  handleSubtractCounter = () => {
    this.setState(prevState => ({ counter: prevState.counter - 1 }));
  };
  handlResetCounter = () => {
    this.setState(prevState => ({ counter: 0 }));
  };
  handleSetCounter = e => {
    e.preventDefault();
    let newCounter = e.target.elements.counterInput.value;
    this.setState({
      counter: +newCounter
    });
    e.target.elements.counterInput.value = "";
  };

  handleInputChange = e => {
    const newCounter = e.target.elements.counterInput.value;
    this.setState({
      setTo: newCounter
    });
  };
  render() {
    return (
      <div>
        <h1>The counter value is {this.state.counter} </h1>
        <Button
          add={this.handleAddCounter}
          subtract={this.handleSubtractCounter}
          reset={this.handlResetCounter}
          set={this.handleSetCounter}
          newCounter={this.state.setTo}
        />
      </div>
    );
  }
}

export default Counter;
