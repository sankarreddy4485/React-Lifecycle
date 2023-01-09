import ReactDOM from 'react-dom/client';
import React from 'react';
class GetDerivedState extends React.Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"};
    }
    static getDerivedStateFromProps(props, state){
      return {favoritecolor: props.favcol };
    }
    render() {
      return (
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      );
    }
  }
  
  export default GetDerivedState;