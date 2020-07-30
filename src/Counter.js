import React from 'react';
import store from './store';
import { valueIncreased, valueDecreased, valueZeroed } from './actionCreators';
import { connect } from 'react-redux';

import './styles.scss';

store.subscribe(() => {
  console.log('State changed!', store.getState().value);
});

const Counter = ({ value, valueIncreased, valueDecreased, valueZeroed }) => {
  return (
    <main className="Counter">
      <p className="count">{value}</p>
      <section className="controls">
        <button onClick={valueIncreased}>Increment</button>
        <button onClick={valueDecreased}>Decrement</button>
        <button onClick={valueZeroed}>Reset</button>
      </section>
    </main>
  );
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = {
  valueIncreased,
  valueDecreased,
  valueZeroed,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
