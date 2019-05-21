import React from 'react';
import { CarFactory } from './CarFactory';
import { Button, Input } from 'antd';
import { func } from 'prop-types';

class CarLevelA extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      produceStatus: ['The level car is ready to produce!'],
    };
  }

  produceControl = (flag) => {
    if (flag === 'start') {
      this.setState({
        produceStatus: [...this.state.produceStatus, `${flag} produce...(${new Date().toLocaleString()})`],
      });
    } else {
      this.setState({
        produceStatus: [...this.state.produceStatus, `${flag} produce...(${new Date().toLocaleString()})`],
      });
    }
    this.props && this.props.showCarLevelAProduceStatus();
  }

  // debounce
  producePlanControl = (e) => {
    let timer = null;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        console.log(`The production plan is ok! (${new Date().getTime()})`);
      }, 2000);
    };
  }

  render() {
    return (
      <div>
        <div>
          {this.state.produceStatus.map((item, index) => <div key={index}>{item}</div>)}
        </div>
        <div>
          <Input onKeyDown={this.producePlanControl.bind(this)()} />
        </div>
        <div>
          <Button onClick={this.produceControl.bind(this, 'start')}>start</Button>
          <Button onClick={this.produceControl.bind(this, 'stop')}>stop</Button>
        </div>
      </div>
    );
  }
}

export default CarFactory(CarLevelA);