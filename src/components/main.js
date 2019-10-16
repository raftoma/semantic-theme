import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import {Button} from 'semantic-ui-react';


class Main extends Component {
  render() {
    return (
      <div>
        <button className="ui button">Button</button>
        <button className="ui primary button">Button</button>
        <Button primary>Primary Button React</Button>
        <Button secondary>Secondary Button React</Button>
        <Button secondary>Another Secondary Button React</Button>
      </div>
    );
  }
}

export default Main;