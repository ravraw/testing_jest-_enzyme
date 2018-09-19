import React from "react";

const Button = props => {
  return (
    <div>
      <button onClick={props.add}>ADD</button>

      <button onClick={props.subtract}>SUBTRACT</button>

      <button onClick={props.reset}>RESET</button>

      <div>
        <form onSubmit={e => props.set(e)}>
          <input
            type="number"
            name="counterInput"
            value={props.newCounter}
            placeholder="Set counter"
          />
          <button>Set</button>
        </form>
      </div>
    </div>
  );
};

export default Button;
