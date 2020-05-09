import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard'


function App() {
  return (
    <div className="App">
      <PersonCard firstName="Jayne" lastName="Doe" age={80} hairColor={"Brown"}/> 
      <PersonCard firstName="John" lastName="Smith" age={70} hairColor={"Brown"}/> 
      <PersonCard firstName="Millard" lastName="Filmore" age={90} hairColor={"Brown"}/> 
      <PersonCard firstName="Maria" lastName="Smith" age={60} hairColor={"Brown"}/> 

    </div>
  );
}

export default App;
