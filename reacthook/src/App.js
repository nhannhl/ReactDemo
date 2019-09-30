import React from 'react';
import './App.css';
import CounterThree from './components/useReducerDemo/CounterThree';

// import CompContextC from './components/userContextDemo/CompContextC';
// import { ChannelContextProvider } from './components/userContextDemo/ChannelContext'

// export const UserContext = React.createContext()

function App() {
  return (
    <div>
      <CounterThree />

      {/*<UserContext.Provider value={'robo'}>
        <ChannelContextProvider value={'nta'}>
          <CompContextC />
        </ChannelContextProvider>
      </UserContext.Provider>*/}
    </div>
  );
}

export default App;
