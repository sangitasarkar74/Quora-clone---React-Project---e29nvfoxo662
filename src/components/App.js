import React from 'react'
import '../styles/App.css';
// import Login from "./Login";
// import LoginForm from './LoginForm';
import Routes from './Routes';
import { QuestionsProvider } from './QuestionsContext';

const App = () => {

  return (
    <QuestionsProvider>
      <div className="App">
        <Routes />
      </div>
    </QuestionsProvider>
  );

}
export default App;
