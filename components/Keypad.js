const React = require('react');

class Keypad extends React.Component {
  constructor(){
    super();
    this.passwordPopup = this.passwordPopup.bind(this);
  }
  passwordPopup(){
    console.log('Entering password...');
  }
  render(){
    return(
      <input onKeyUp={this.passwordPopup} type="password" />
    );
  }
}

module.exports = Keypad;
