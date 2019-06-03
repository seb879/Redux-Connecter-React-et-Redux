import React from "react";
import { connect } from "react-redux";


const mapStateToProps = state => ({
  counter: state
});

const mapDispatchToProps = dispatch => ({
  add1: () => dispatch({ type: "ADD1" }),
  remove1: () => dispatch({ type: "REMOVE1" }),
  add10: () => dispatch({ type: "ADD10" }),
  remove10: () => dispatch({ type: "REMOVE10" }),
  reset: () => dispatch({ type: "RESET" })
  });

const counterComponent = ({ counter, add1, remove1, add10, remove10, reset }) => (
  <div>
      <p>{counter}</p>
      <button onClick={add1}>+1</button>
      <button onClick={remove1}>-1</button>
      <button onClick={add10}>+10</button>
      <button onClick={remove10}>-10</button>
      <button onClick={reset}>reset</button> 
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(counterComponent);
