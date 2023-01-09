import ReactDOM from 'react-dom/client';
import React from 'react';
class ComponentDidMountMethod extends React.Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"};
    }
    componentDidMount() {
       setTimeout(()=>{
           this.setState({favoritecolor: "blue"})
       },4000)
    }
    
    render() {
      return (
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      );
    }
  }
  
  export default ComponentDidMountMethod;