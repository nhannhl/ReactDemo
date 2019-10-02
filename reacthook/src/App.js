import React from 'react';
import './App.css';
import UserForm from './components/customHookDemo/UserForm';

// import CompContextC from './components/userContextDemo/CompContextC';
// import { ChannelContextProvider } from './components/userContextDemo/ChannelContext'

// export const UserContext = React.createContext()

function App() {
  return (
    <div>
      <UserForm />

      {/*<UserContext.Provider value={'robo'}>
        <ChannelContextProvider value={'nta'}>
          <CompContextC />
        </ChannelContextProvider>
      </UserContext.Provider>*/}
    </div>
  );
}

export default App;
