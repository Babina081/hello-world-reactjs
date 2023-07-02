import React, { Component } from 'react';
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'babina',
    };
    console.log('LifeCycleA constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('LifeCylceA getDerivedStateFromProps');
    return null;
  }

  componentDidMount() {
    console.log('LifeCycleA componentDidMount');
  }

  shouldComponentUpdate() {
    console.log('lifecycleA shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log('lifecycleA getSnapshotBeforeUpdate');
    return null
  }

  componentDidUpdate() {
    console.log('lifecycleA componentDidUpdate');
  }

  changeState = () => {
    this.setState({
      name: 'babina',
    });
  };

  render() {
    console.log('LifeCycleA render');
    return (
      <div>
        <div>LifeCycleA</div>
        <button onClick={this.changeState}>Change State</button>
        <LifeCycleB></LifeCycleB>
      </div>
    );
  }
}

export default LifeCycleA;
