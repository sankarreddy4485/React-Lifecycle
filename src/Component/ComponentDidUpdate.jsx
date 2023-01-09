import React from 'react';
import ReactDOM from 'react-dom/client';

class ComponentDidUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: "Green"})
    }, 5000)
  }
 
  componentDidUpdate() {
    document.getElementById("mydiv").innerHTML =
    "The updated favorite is " + this.state.favoritecolor;
  }
  render() {
    return (
      <div id='mydiv'>
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
     
      </div>
    );
  }
}
export default ComponentDidUpdate;