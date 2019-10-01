import React from 'react';
import '../css/ColorPalette.css';
import Swatch from './Swatch.js'

export default (props) => {
  let paletteJsx = props.palette.map( color => <Swatch color={color} />);

  return (
    <div className="ColorPalette">
      <h1>Color Palette Generator</h1>
      <div>
        <strong>How about this color?</strong>
      </div>
      <Swatch color={props.proposedColor} hideHex={true} />
      <div>
        <button onClick={props.onAdd}>Add this color</button>
        <button onClick={props.onSkip}>Skip this color</button>
      </div>
      <hr />
      {paletteJsx}
    </div>
  );
};