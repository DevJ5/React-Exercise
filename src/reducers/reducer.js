const initState = [];

const reducer = (state = initState, action = {}) => {
  switch (action.type) {
    case 'ADD_COMPUTER':
      return [...state, action.payload];
    default:
      return state;
  }
};

export default reducer;
