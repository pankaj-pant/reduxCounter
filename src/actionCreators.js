import * as actions from './ActionTypes';

export const valueIncreased = () => ({
  type: actions.VALUE_INCREASED,
});

export const valueDecreased = () => ({
  type: actions.VALUE_DECREASED,
});

export const valueZeroed = () => ({
  type: actions.VALUE_ZEROED,
});
