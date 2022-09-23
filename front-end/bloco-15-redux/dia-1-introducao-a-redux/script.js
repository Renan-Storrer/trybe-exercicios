const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'NEXT_COLOR':
      return {
        ...state,
        index: state.index === state.colors.length - 1 ? 0 : state.index + 1,
      };
    case 'PREVIOUS_COLOR':
      return {
        ...state,
        index: state.index === 0 ? state.colors.length - 1 : state.index - 1,
      };
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

const btnPrevious = document.getElementById('previous');
const btnNext = document.getElementById('next');

btnPrevious.addEventListener('click', () => {
  store.dispatch({ type: 'PREVIOUS_COLOR' });
});

btnNext.addEventListener('click', () => {
  store.dispatch({ type: 'NEXT_COLOR' });
});