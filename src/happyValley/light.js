import React from 'react';

export default class Light extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      initColor: 0xff0000,
    };
    this.timer = null;
  }
  componentWillMount() {
    this.changeColor();
  }
  changeColor = () => {
    this.timer = setTimeout(() => {
      this.changeColor();
    }, 500);
    this.setState(state => {
      const color = state.initColor + 16;
      if (color >= 0xff00ff) {
        clearTimeout(this.timer);
      }
      return {
        initColor: color,
      };
    });
  }
  render() {
    return (
      <div style={{ color: `#${this.state.initColor.toString(16)}` }}>
        It's my show time!
      </div>
    );
  }
}