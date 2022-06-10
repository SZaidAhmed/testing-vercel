import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [state, setState] = useState();
  useEffect(() => {
    axios.get(`https://mozakcrm.herokuapp.com/api/v1/customers/getAllCustomers`)
      .then((data) => console.log(data))
    //  setState(response)
  }, [])

  return (
    <div className="App">
      `{state}`
    </div>
  );
}

export default App;
