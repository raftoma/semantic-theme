//https://jsramblings.com/2018/03/04/how-to-use-semantic-ui-with-a-custom-theme-in-your-CRA-app.html
//yarn start
//site.variables


import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import {Button} from 'semantic-ui-react';
import './semantic/dist/semantic.min.css';

function App() {
  return (
    <div>
      <button class="ui button">Button</button>
      <button class="ui primary button">Button</button>
      <Button primary>Primary Button React</Button>
      <Button secondary>Secondary Button React</Button>
      <Button secondary>Another Secondary Button React</Button>

    </div>
  );
}

export default App;
