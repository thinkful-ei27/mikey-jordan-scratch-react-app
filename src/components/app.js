import React from 'react';
import Button1 from './button1';
import Button2 from './button2';
import Image1 from './image1';
import Image2 from './image2';
import Image3 from './image3';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      button1 : false,
      button2 : false,
    }
  }

activateButton1(){
  this.setState(
  this.state.button1 === false ? {button1:true} : {button1:false}
  )
}

activateButton2(){
  this.setState(
    this.state.button2 === false ? {button2:true} : {button2:false}
    )}

  render(){

      return (
        <div className="party">
        <h1>Party?</h1>
          <div className="party-buttons">
            <Button1 onClick={()=>this.activateButton1()} />
            <Button2 onClick={()=>this.activateButton2()}/>
          </div>
          <div className="party-space">
            <Image1 button1={this.state.button1}/>
            <Image2 button2={this.state.button2}/>
            <Image3 buttons={this.state}/>
          </div>
      </div>
      )
    }
  }
