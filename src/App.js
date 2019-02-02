import React, { Component } from 'react';
import FormContainer from './form/FormContainer';
import FormComponent from './form/FormComponent';
import './App.css';

// Higher Order Component
const Form = FormContainer(FormComponent);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
      </div>
    );
  }
}

export default App;
