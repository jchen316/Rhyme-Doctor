/* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */

import React from 'react';

import store from '../../redux/store';
import './colorPicker.css';

class ColorPicker extends React.Component {
  componentDidMount() {
    this.setState(store.getState()); // eslint-disable-line
    store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  clickHandler = (e) => {
    store.dispatch({
      type: 'changecolor',
      body: {
        color: e.target.style.backgroundColor,
      },
    });
  }

  render() {
    return (
      <label className="colorpicker-padding" htmlFor="colorpad">
        <div id="colorpad">
          <span
            style={{
              padding: '20px',
              background: '#C62D42',
              margin: '5px',
            }}
            onClick={this.clickHandler}
          />
          <span
            style={{
              padding: '20px',
              background: '#E77200',
              margin: '5px',
            }}
            onClick={this.clickHandler}
          />
          <span
            style={{
              padding: '20px',
              background: '#4D8C57',
              margin: '5px',
            }}
            onClick={this.clickHandler}
          />
          <span
            style={{
              padding: '20px',
              background: '#2887C8',
              margin: '5px',
            }}
            onClick={this.clickHandler}
          />
          <span
            style={{
              padding: '20px',
              background: '#7070CC',
              margin: '5px',
            }}
            onClick={this.clickHandler}
          />
          <span
            style={{
              padding: '20px',
              background: '#8E3179',
              margin: '5px',
            }}
            onClick={this.clickHandler}
          />
          <span
            style={{
              padding: '20px',
              background: '#93CCEA',
              margin: '5px',
            }}
            onClick={this.clickHandler}
          />
          <span
            style={{
              padding: '20px',
              background: '#00755E',
              margin: '5px',
            }}
            onClick={this.clickHandler}
          />
        </div>
      </label>
    );
  }
}

export default ColorPicker;
