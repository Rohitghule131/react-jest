import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';

import Link from './components/link';
import Greetings from './components/greetings';
import InputField from './components/input';
import ButtonField from './components/button';


function App() {
  const [dummy, setDummy] = React.useState({});

  useEffect(() => {
    setDummy({
      name: "rohit",
      age: 20,
      veg: false,
    });

  }, [])

  const clickFunction = (name, value) => {
    let oldDict = { ...dummy };
    oldDict[name] = value;

    setDummy({ ...oldDict });
  };

  return (
    <div className="App">
      <Greetings/>
      <p>learn react</p>
      <ButtonField/>
      <Link>
        <p>
          LINK
        </p>
      </Link>
      <InputField/>
    </div>
  );
}

export default App;
