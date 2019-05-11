import React from 'react';

export function CarFactory(Car) {
  return class HocCar extends React.PureComponent {
    constructor(props) {
      super(props);
    }
    render() {
      const props = { ...this.props, producer: 'China' };
      if (typeof props.getCarLevelARef === 'function') {
        props.ref = props.getCarLevelARef;
      }
      return (
        <Car {...props} />
      );
    }
  }
}