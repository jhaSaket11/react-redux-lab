import React, { Component } from 'react';
import Hello from './Hello';
import { connect } from 'react-redux';

const App = (props) => {
  return (
    <div>
      <Hello name={"Saket Jha"} />
      <p>Count: {props.count}</p>
      <button onClick={props.increment}>INCREMENT</button>
      <button onClick={props.decrement}>DECREMENT</button>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    count: state,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)







