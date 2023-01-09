import React from 'react';
import ReactDOM from 'react-dom/client';

class UpdateMethod extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
//   static getDerivedStateFromProps(props, state) {
//     return {favoritecolor: props.favcol };
//   }
  changeColor = () => {
    this.setState({favoritecolor: "blue"});
  }
  shouldComponentUpdate(){
      return true;
  }
  render() {
    return (
      <div>
      <h1>My Favorite Color is for update {this.state.favoritecolor}</h1>
      <button type="button" onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
}
export default UpdateMethod;