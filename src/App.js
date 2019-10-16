//https://jsramblings.com/2018/03/04/how-to-use-semantic-ui-with-a-custom-theme-in-your-CRA-app.html
//gulp watch
//yarn start
//site.variables


import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import {Button, Input} from 'semantic-ui-react';
import './semantic/dist/semantic.min.css';



function App() {
  const handleFocus = (event) => event.target.select();
  const handleBlur = (e) => {
    let val = e.target.value;
    e.target.value = parseFloat(val).toFixed(2);
  };



  return (
    <div>
      <button className="ui button">Button</button>
      <button className="ui primary button">Button</button>
      <Button primary>Primary Button React</Button>
      <Button secondary>Secondary Button React</Button>
      <Button secondary>Another Secondary Button React</Button>
      <Input type="text" value="16" onBlur={handleBlur.bind(this)} onFocus={handleFocus.bind(this)}/>

    </div>
  );
}

export default App;
