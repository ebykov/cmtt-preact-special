import { createStore, combineReducers } from 'redux';

const initialTestState = {};

const reducer = function(state = initialTestState, action) {
  switch (action.type) {
    case 'APP__STATUS':
      return { ...state, status: action.status };
  }
  return state;
};

const reducers = combineReducers({
  appState: reducer,
});

export default createStore(reducers);
