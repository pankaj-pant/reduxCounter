import * as actions from './ActionTypes';

const reducer = (state = { value: 0 }, action) => {
  switch (action.type) {
    case actions.VALUE_INCREASED:
      return { value: state.value + 1 };
    case actions.VALUE_DECREASED:
      return { value: state.value - 1 };
    case actions.VALUE_ZEROED:
      return { value: 0 };
    default:
      return state;
  }
};

export default reducer;
