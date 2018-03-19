import React from 'react';
import $ from 'jquery';

import Textarea from '../textarea/Textarea';
import Paragraph from '../text/Paragraph';
import FriendChat from '../../components/buttons/FriendChat';
import store from '../../redux/store';

const centerStyle = {
  float: 'none',
  margin: '0 auto',
};

const clickHandler = () => {
  $.ajax({
    method: 'POST',
    url: '/api/content/post',
    data: {
      text: $('#lyrics').val(),
    },
    success(res) {
      console.log(res);
    },
    error(res) {
      alert(res); // eslint-disable-line
    },
  });
};

const hitHandler = () => {
  $.ajax({
    method: 'POST',
    url: 'http://localhost:3001/parse',
    data: {
      text: $('#lyrics').val(),
    },
    success(res) {
      console.log(res);
      const colors = JSON.parse(res);
      const coords = Object.keys(colors);
      coords.forEach((coord) => {
        store.dispatch({
          type: 'straighthighlight',
          body: {
            coord,
            color: colors[coord],
          },
        });
      });
    },
    error(res) {
      alert(res); // eslint-disable-line
    },
  });
};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  render() {
    return (
      <div className="container-fluid">
        {/* this.navSwitch() */}
        <div className="row">
          <div className="col text-center" style={centerStyle}>
            <h3>Lyrics</h3>
          </div>
        </div>
        <div className="row">
          <Textarea />
          <Paragraph className="text-center" style={centerStyle} text={this.state.text} />
        </div>
        <div className="row">
          <div className="col-md-2">
            <button className="btn btn-outline-primary" onClick={clickHandler}>Post</button>
          </div>
          <div className="col-md-2">
            <button className="btn btn-outline-primary" onClick={hitHandler}>Hit API</button>
          </div>
        </div>
        {this.state.session && <FriendChat />}
      </div>
    );
  }
}

export default Home;
