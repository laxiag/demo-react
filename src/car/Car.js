import React from 'react';
import CarLevelA from './CarLevelA';
import { Rank } from './Rank';

@Rank
export default class Car extends React.PureComponent {
  constructor(props) {
    super(props);
    console.log(Car.defaulRank);
  }

  getCarLevelARef = (ref) => {
    this.claRef = ref;
  }

  showCarLevelAProduceStatus = () => {
    console.log(this.claRef);
  }

  render() {
    return (
      <CarLevelA
        type={'carLevelA'}
        getCarLevelARef={this.getCarLevelARef}
        showCarLevelAProduceStatus={this.showCarLevelAProduceStatus}
      />
    );
  }
}