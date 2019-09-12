import React from 'react';
import './App.css';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
// import PersonList from './components/PersonList';
// import EventBinding from './components/EventBinding';
// import ParentComponent from './components/ParentComponent';
// import ClassClick from './components/ClassClick';
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import { Greet } from './components/Greet';
// import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import Hello from './components/Hello';
// import Message from './components/Message';
// import UserGreeting from './components/UserGreeting';
import './appStyles.css';
import styles from './appStyles.module.css';

function App() {
  return (
    <div className="App">
      <h3 className='error'>appStyles.css</h3>
      <h3 className={styles.success}>appStyles.module.css</h3>
      <Stylesheet primary={true} />
      <Inline />
      {/*<PersonList />*/}
      {/*<UserGreeting />*/}
      {/*<ParentComponent />*/}
      {/*<EventBinding />*/}
      {/*<ClassClick />*/}
      {/*<FunctionClick />*/}
      {/*<Counter />*/}
      {/*<Greet name="Tony Stark" heroName="Iron Man">
        <p>This is children props</p>
      </Greet>*/}
      {/*<Greet name="Bruce Banner" heroName="Hulk">
        <button>Action</button>
      </Greet>*/}
      {/*<Greet name="Peter Parker" heroName="Spider Man" />*/}
      {/*<Welcome name="Tony Stark" heroName="Iron Man" />*/}
      {/*<Welcome name="Bruce Banner" heroName="Hulk" />*/}
      {/*<Welcome name="Peter Parker" heroName="Spider Man" />*/}
      {/*<Hello />*/}
      {/*<Message />*/}
    </div>
  );
}

export default App;
