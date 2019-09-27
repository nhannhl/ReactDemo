import React, { Component } from 'react'
import './App.css';
// import FormikYupForm from './components/FormikYupForm'
// import MyEnhancedForm from './components/YumikForm2';
import YumikForm2 from './components/YumikForm2';
// import { UserProvider } from './components/userContext';
// import ContextCompC from './components/ContextCompC';
// import ClickCounterTwo from './components/ClickCounterTwo';
// import HoverCounterTwo from './components/HoverCounterTwo';
// import Counter from './components/Counter';
// import User from './components/User';
// import ClickCounter from './components/ClickCounter';
// import HoverCounter from './components/HoverCounter';
// import Hero from './components/Hero';
// import ErrorBoundary from './components/ErrorBoundary';
// import ProtalDemo from './components/ProtalDemo';
// import FRParentInput from './components/FRParentInput';
// import FocusInput from './components/FocusInput';
// import RefsDemo from './components/RefsDemo';
// import ParentComp from './components/ParentComp';
// import PureComp from './components/PureComp';
// import RegularComp from './components/RegularComp';
// import Form from './components/Form';
// import LifecycleA from './components/LifecycleA';
// import FragmentDemo from './components/FragmentDemo';
// import Table from './components/Table';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <YumikForm2 />
        {/*<FormikYupForm />*/}
        {/*<MyEnhancedForm />*/}
        {/*<UserProvider value='Robo'>*/}
          {/*<ContextCompC />*/}
        {/*</UserProvider>*/}
        {/*<Counter render={(count, incrementCount) => <HoverCounterTwo count={count} incrementCount={incrementCount} />} />
        <Counter render={(count, incrementCount) => <ClickCounterTwo count={count} incrementCount={incrementCount} />} />*/}
        {/*meo' chay*/}
        {/*<Counter {(count, incrementCount) => <HoverCounterTwo count={count} incrementCount={incrementCount} />}></Counter>
        <Counter {(count, incrementCount) => <ClickCounterTwo count={count} incrementCount={incrementCount} />}></Counter>*/}
        {/*<ClickCounterTwo />
        <HoverCounterTwo />
        <User render={(isLoggedIn) => isLoggedIn ? 'Robo' : 'Guest'}/>*/}
        {/*<HoverCounter name='robo' />*/}
        {/*<ClickCounter />*/}
        {/*<Form />*/}
        {/*<LifecycleA />*/}
        {/*<FragmentDemo />*/}
        {/*<Table />*/}
        {/*<PureComp />*/}
        {/*<RegularComp />*/}
        {/*<ParentComp />*/}
        {/*<RefsDemo />*/}
        {/*<FocusInput />*/}
        {/*<FRParentInput />*/}
        {/*<ProtalDemo />*/}
        {/*<ErrorBoundary>
          <Hero heroName="Iron Man" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Thanos" />
        </ErrorBoundary>*/}
        </React.Fragment>
    )
  }
}

export default App

