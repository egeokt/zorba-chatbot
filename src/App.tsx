import React from 'react';
import Chatbot from 'react-chatbot-kit';

import './App.css';
import config from './config/chatbotConfig';
import MessageParser from './chatbot/MessageParser';
import ActionProvider from './chatbot/ActionProvider';

function App() {
  return ( 
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        Hello */}
         <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
      </header>
      <div className="main-container">
        <div className='trigger-container'>
          <button className='trigger-button'>
            trigger chatbot
          </button>
        </div>
        <div className='chatbot-container'>
       
        </div>
      </div>
    </div>
  );
}

export default App;
