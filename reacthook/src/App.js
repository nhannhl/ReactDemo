import React from 'react';
import './App.css';
import DataFetchingTwo from './components/useReducerDemo/DataFetchingTwo';
import DataFetchingOne from './components/useReducerDemo/DataFetchingOne';

// import CompContextC from './components/userContextDemo/CompContextC';
// import { ChannelContextProvider } from './components/userContextDemo/ChannelContext'

// export const UserContext = React.createContext()

function App() {
  return (
    <div>
        <DataFetchingOne />
        <DataFetchingTwo />
      {/*<UserContext.Provider value={'robo'}>
        <ChannelContextProvider value={'nta'}>
          <CompContextC />
        </ChannelContextProvider>
      </UserContext.Provider>*/}
    </div>
  );
}

export default App;
