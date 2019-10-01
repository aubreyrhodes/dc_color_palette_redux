let randomColor = () =>  "#" + Math.random().toString(16).slice(2, 8);

let initialState = {
  proposedColor: randomColor(),
  palette: []
};

let mainReducer = (state = initialState, action) => {
  if(action.type === 'ADD_COLOR') {
    return {
      palette: [...state.palette, state.proposedColor],
      proposedColor: randomColor()
    }
  } else if (action.type === 'SKIP_COLOR'){
    return {
      ...state,
      proposedColor: randomColor()
    }
  } else {
    return state;
  }
}

export default mainReducer;