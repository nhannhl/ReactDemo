import React from 'react';
import './App.css';
import HookCounter from './components/useStateDemo/HookCounter';

// import CompContextC from './components/userContextDemo/CompContextC';
// import { ChannelContextProvider } from './components/userContextDemo/ChannelContext'

// export const UserContext = React.createContext()

function App() {
  return (
    <div>
      <HookCounter />    

      {/*<UserContext.Provider value={'robo'}>
        <ChannelContextProvider value={'nta'}>
          <CompContextC />
        </ChannelContextProvider>
      </UserContext.Provider>*/}
    </div>
  );
}

export default App;
