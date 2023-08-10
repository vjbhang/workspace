import React from 'react';
import './App.css';

// key generator
let guid = () => {
  let s4 = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
  }
  //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

function App() {
  let ReactModel = new ReactObject();

  ReactModel.createContainer();
  ReactModel.addHeaderChild({title: "hello world"});
  ReactModel.addHeaderChild({title: "i'm going to say hello!"})
  ReactModel.addHeaderChild({title: "Hello Earth"})
  ReactModel.addHeaderChild({title: "Hello Mars"})

  
  return (
    <div>
      {ReactModel.jsx}
    </div>
  );
}

export default App;

function ReactObject() {
  this.jsx = {};
}

ReactObject.prototype = {
  createContainer: function() {
    let Container = <div><h1>Trying to put a child here:</h1><h1>Test</h1></div>;
    this.jsx= Container;
  },
  addHeaderChild: function({title}) {
    console.log(title, this.jsx);
    this.jsx = React.cloneElement(this.jsx, {children: [this.jsx.props.children, React.createElement('h1', {key: guid()}, title)]} );
  },
}