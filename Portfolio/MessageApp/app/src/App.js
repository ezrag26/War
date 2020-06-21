import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App grid">
      <div className={'left grid'}>
        <header className="my-info grid center border" style={{  }}>
          My Info
        </header>
        <div className={'grid center border'} id={'search'}>
          <input type={'text'} placeholder={'Search'} style={{ height: '50%', width: '80%', border: '2px solid black', borderRadius: '10px', outline: 'none', fontSize: '1em', paddingLeft: '10px' }}/>
        </div>
        <div className={'grid border'} id={'chats'}>
          Chats
        </div>
      </div>
      <div className={'right grid'}>
        <div className={'grid center border'} id={'current-chat-title'} >GOATs</div>

        <div className={'grid border'} id={'current-chat'}>Sent messages</div>
        <div className={'grid border'} id={'message-box'}>
          <textarea placeholder={'Message'} style={{ width: '90%', borderRadius: '10px', fontSize: '1em' }}></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
