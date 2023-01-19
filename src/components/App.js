import React from 'react'
import '../styles/App.css';
import Routes from './Routes';
import { QuestionsProvider } from './QuestionsContext';

const App = () => {

  return (

    <div className="App">
      <Routes />
    </div>

  );

}
export default App;
