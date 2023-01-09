import logo from './logo.svg';
import './App.css';
import Constructor from './Component/Constructor'
import GetDerivedState from './Component/GetDerivedState';
import ComponentDidMountMethod from './Component/ComponentDidmountmethod';
import UpdateMethod from './Component/Updatemethod';
import GetSnapshot from './Component/GetSnapshot';
import ComponentDidUpdate from './Component/ComponentDidUpdate';
function App() {
  return (
    <div className="App">
      <Constructor favcol="yellow"/>
      <GetDerivedState favcol="yellow"/>
      <ComponentDidMountMethod/>
      <UpdateMethod />
      <GetSnapshot/>
      <ComponentDidUpdate/>

    </div>
  );
}

export default App;
