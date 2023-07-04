import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import StyledSheet from './components/StyledSheet';
import Inline from './components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css';
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <PureComp></PureComp>

        {/* <FragmentDemo></FragmentDemo>
        <Table></Table> */}

        {/* <LifeCycleA></LifeCycleA> */}

        {/* <Form></Form> */}

        {/* <h1 className="error">Error</h1>
        <h1 className={styles.success}>Success</h1>
        <Inline></Inline> */}

        {/* <StyledSheet primary={true}></StyledSheet> */}

        {/* <NameList></NameList> */}

        {/* <UserGreeting></UserGreeting> */}

        {/* <ParentComponent></ParentComponent> */}

        {/* <EventBind></EventBind> */}

        {/* <FunctionClick></FunctionClick>
        <ClassClick></ClassClick> */}

        {/* <Greet name="babina" heroName="abc">
          <p>This is children props</p>
        </Greet>
        <Greet name="sabina" heroName="efg">
          <button>Action</button>
        </Greet>
        <Greet name="nabina" heroName="xyz" /> */}

        {/* <Welcome name="babina" heroName="abc"></Welcome>
        <Welcome name="sabina" heroName="xyz"></Welcome>
        <Welcome name="nabine " heroName="efg"></Welcome> */}

        {/* <Hello></Hello> */}

        {/* <Message></Message> */}

        {/* <Counter></Counter> */}
      </div>
    );
  }
}

export default App;
