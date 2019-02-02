import React from 'react';

const FormComponent = props => {
  const { text } = props.text;
  return (
    <form
    onSubmit={event => {
      event.preventDefault();
      props.submitAction();
      alert(text);
    }}
  >
    <h1>Form</h1>
    <h2>What are you typing?</h2>
    <h3>{text}</h3>
    <div>
      <textarea
        onChange={event => props.textAction({ text: event.target.value })}
        defaultValue={text}
      />
    </div>
    <div>
      <input type="submit" value="Submit" />
    </div>
  </form>
  )
};

export default FormComponent;
