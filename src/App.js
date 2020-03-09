import React from 'react';
import Movies from "./components/movies"
import useSpinner from "./components/UseSpinner"


function App() {

  const [spinner]=useSpinner(<Movies/>);

  return (
    <div className="App">
      {/* <Movies></Movies> */}
      {spinner}
    </div>
  );
  

}

export default App;
