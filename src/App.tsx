import './App.css';
import { MyFirstComponent, MySecondComponent } from './components';

function App() {
  return (
    // react Fragment
    <>
      <MyFirstComponent
        inputName='nome'
        labelText='Nome'
        fieldsetTitle='Input de Nome'
        placeholderText='Digite o nome corretamente'
        value='Valor inicial'
      />
      <MyFirstComponent inputName='email' labelText='Email' value='email@email.com' />
      <MySecondComponent />
    </>
  );
}

export default App;
