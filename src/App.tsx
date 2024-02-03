import './App.css';
import { CounterClick, MyFirstComponent, MySecondComponent } from './components';

function App() {
  return (
    // react Fragment
    <>
      <CounterClick />
      <MyFirstComponent
        inputName='nome'
        labelText='Nome'
        fieldsetTitle='Input de Nome'
        placeholderText='Digite o nome corretamente'
        value={true}
      />
      <MyFirstComponent inputName='email' labelText='Email' value='email@email.com' />
      <MySecondComponent />
    </>
  );
}

export default App;
