import React, { Component } from 'react';

class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'babina',
    };
    console.log('LifeCycleB constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('LifeCylceA getDerivedStateFromProps');
    return null;
  }

  componentDidMount() {
    console.log('LifeCycleB componentDidMount');
  }

  shouldComponentUpdate() {
    console.log('lifecycleB shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log('lifecycleB getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate() {
    console.log('lifecycleB componentDidUpdate');
  }

  render() {
    console.log('LifeCycleB render');
    return <div>LifeCycleB</div>;
  }
}

export default LifeCycleB;
