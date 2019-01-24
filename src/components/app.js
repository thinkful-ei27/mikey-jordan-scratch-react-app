import React from 'react';
import Button1 from './button1'
import Button2 from './button2'

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      
    }
  }

  render(){
    return (
      <div className="party">
        <div className="party-buttons">
          <Button1 />
          <Button2 />
        </div>
        <div className="party-space">
          <h1>Party!</h1>
        </div>
    </div>
    )
  }
}