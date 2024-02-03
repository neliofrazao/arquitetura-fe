import { useEffect, useState } from 'react';
import './App.css';
import { CounterClick, MyFirstComponent, MySecondComponent } from './components';
import { InputComponent } from './components/form-components';

interface Address {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

const intialAddress: Address = {
  cep: '',
  logradouro: '',
  complemento: '',
  bairro: '',
  localidade: '',
  uf: '',
  ibge: '',
  gia: '',
  ddd: '',
  siafi: '',
};

function App() {
  const [address, setAddress] = useState<Address>(intialAddress);
  const [cepValue, setCepValue] = useState('58050060');
  const [isMount, setIsMount] = useState(false);
  // mounting
  // updating
  const abort = new AbortController();
  useEffect(() => {
    setIsMount(true);
    fetch(`https://viacep.com.br/ws/${cepValue}/json/`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => setAddress(data))
      .catch((err) => alert('Cep inválido'));
    // unmounting
    return () => {
      abort.abort();
    };
  }, [cepValue]);

  console.log('endereço', address);

  const handleCepChange = (value: string) => setCepValue(value);
  console.log('cepValue', cepValue);

  if (!isMount) return <p>Carregando...</p>;
  return (
    // react Fragment
    <>
      <InputComponent />
      {/* <button onClick={() => handleCepChange('58036442')}>Buscar CEP</button>
      <CounterClick /> */}
      {/* <MyFirstComponent
        inputName='nome'
        labelText='Nome'
        fieldsetTitle='Input de Nome'
        placeholderText='Digite o nome corretamente'
        value={address.bairro}
      />
      <MyFirstComponent inputName='email' labelText='Email' value='email@email.com' />
      <MySecondComponent /> */}
    </>
  );
}

export default App;
