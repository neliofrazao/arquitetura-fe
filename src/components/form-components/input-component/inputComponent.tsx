import { useState } from 'react';

interface InputComponentValues {
  name?: string;
  lastname?: string;
}

const intialInputComponentValues: InputComponentValues = {
  name: '',
  lastname: '',
};
// Converte as chaves do objeto para opcional
// type FormErrosType = { [key in keyof InputComponentValues]?: string };

export const InputComponent = () => {
  const [inputValue, setInputValue] = useState<InputComponentValues>(intialInputComponentValues);
  const [inputError, setInputError] = useState<InputComponentValues>({});

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name, e.target.value);
    setInputValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    // undefined é um false natural
    // limpeza dos campos obrigatorios
    if (inputError[e.target.name as keyof InputComponentValues]) {
      setInputError((prevErrors) => ({
        ...prevErrors,
        [e.target.name]: undefined,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('inputValue', inputValue);

    //   inputValue
    // {
    //     "name": "ssssssdf4f",
    //     "lastname": "sssss"
    //     }

    //     Object.entries(inputValue)
    //     [
    //       ["name", "ssssssdf4f"],
    //       ["lastname", "sssss"]
    //      ]
    const errors: InputComponentValues = {};
    Object.entries(inputValue).map(([key, value]) => {
      if (!value) {
        // cast tipagem
        errors[key as keyof InputComponentValues] = 'Campo obrigatório';
        setInputError(errors);
      }
    });

    // adicone a lógica que  envia para a api os dados do formulário
  };
  console.log('inputError', inputError);
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Dados Pessoais</legend>
        <label htmlFor='Nome'>Nome: </label>
        <input
          type='text'
          name='name'
          id='name'
          value={inputValue.name}
          onChange={handleOnchange}
        />
        {inputError.name && <span>{inputError.name}</span>}
        <label htmlFor='lastname'>Sobrenome: </label>
        <input
          type='text'
          name='lastname'
          id='lastname'
          value={inputValue.lastname}
          onChange={(e) => handleOnchange(e)}
        />
        {inputError.lastname && <span>{inputError.lastname}</span>}
      </fieldset>
      <button type='submit'>Enviar</button>
    </form>
  );
};
