import { useState } from 'react';

import './App.css';

import messagesList from './data/messagesList';

import List from './components/List';

function App() {
  const [messages, setMessages] = useState(messagesList);

  const setMessageStatus = (messageId, newStatus) => {
    const updatedMessages = messages.map((currentMessage) => {
      if (currentMessage.id === messageId) {
        return { ...currentMessage, status: newStatus };
      }
      return currentMessage;
    });

    setMessages(updatedMessages);
  };

  return (
    <div className="App">
      <header>
        <h1>TrybeMail</h1>
      </header>

      <List
        messages={ messages }
        setMessageStatus={ setMessageStatus }
      />
      
    </div>
  );
}

export default App;