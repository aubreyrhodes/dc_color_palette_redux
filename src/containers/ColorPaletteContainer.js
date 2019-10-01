import ColorPalette from '../components/ColorPalette';
import { connect } from 'react-redux';

let matchStateToProps = (state) => {
  return state;
};

let matchDispatchToProps = (dispatch) => {
  return {
    onAdd: () => dispatch({type: 'ADD_COLOR'}),
    onSkip: () => dispatch({type: 'SKIP_COLOR'})
  }
}

export default connect(matchStateToProps, matchDispatchToProps)(ColorPalette);