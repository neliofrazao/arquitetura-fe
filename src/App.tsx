import './App.css';
import { MyFirstComponent, MySecondComponent } from './components';

function App() {
  return (
    // react Fragment
    <>
      <MyFirstComponent inputName='nome' labelText='Nome' fieldsetTitle='Input de Nome' />
      <MyFirstComponent inputName='email' labelText='Email'  />
      <MySecondComponent />
    </>
  );
}

export default App;
