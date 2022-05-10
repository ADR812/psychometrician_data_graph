import './App.css';
import SearchBar from './Components/SearchBar';
import Data from "../src/TestTASK2.json"
import Graph from "../src/Components/Graph"
import { useState } from 'react';

function App() {
  const [curr, setcurr] = useState(Data[0]);
  return (
    <div className="App">
      <SearchBar Placeholder="enter name" data={Data} setcurr = {setcurr}/>
      <div className='graph_box'>
      <Graph data = {curr}/>
      </div>
    </div>
  );
}

export default App;
