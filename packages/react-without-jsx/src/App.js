import React from 'react';
import './App.css';

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
      <h1>Earth goes to Mars</h1>
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
    this.jsx = React.cloneElement(this.jsx, {children: [this.jsx, React.createElement('h1', null, title)]} );
  },
}