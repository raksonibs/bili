import React from 'react';

export default class Post extends React.Component {
  render() {
    return (
          <li> {this.props.spanish_text}
          </li>
    )
  }
}

module.exports = Post