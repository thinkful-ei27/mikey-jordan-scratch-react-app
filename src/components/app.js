import React from 'react';
import Button1 from './button1';
import Button2 from './button2';
import Button3 from './button3';
import Image1 from './image1';
import Image2 from './image2';
import Image3 from './image3';

let sectionStyle = {
  width: "100%",
  height: "100%",
  backgroundImage: "url(https://media.giphy.com/media/3xz2BRU6WpaxKiPzuE/giphy.gif)"
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      button1: false,
      button2: false,
      button3: false
    }
  }

  activateButton1() {
    this.setState(
      this.state.button1 === false ? { button1: true } : { button1: false }
    )
  }

  activateButton2() {
    this.setState(
      this.state.button2 === false ? { button2: true } : { button2: false }
    )
  }

  activateButton3() {
    this.setState(
      this.state.button3 === false ? { button3: true } : { button3: false }
    )
  }

  activateParty() {
    if (this.state.button1 && this.state.button2 && this.state.button3) {
      return sectionStyle;
    } else {
      return null
    }
  }

  render() {

    return (
      <div className="party" style={this.activateParty()}>
        <h1>Party?</h1>
        <div className="party-buttons">
          <Button1 onClick={() => this.activateButton1()} />
          <Button2 onClick={() => this.activateButton2()} />
          <Button3 onClick={() => this.activateButton3()} />
        </div>
        <div className="party-space">
          <Image1 button1={this.state.button1} />
          <Image2 button2={this.state.button2} />
          <Image3 button3={this.state.button3} />
        </div>
      </div>
    )
  }
}
