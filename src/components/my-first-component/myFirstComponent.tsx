import { useEffect, useState } from 'react';
import { FormComponentEnum, FormComponentProps } from '../types';

interface MyFirstComponentProps extends FormComponentProps {
  placeholderText?: string;
}

export const MyFirstComponent = ({
  labelText,
  inputName,
  fieldsetTitle,
  value,
  placeholderText = 'Digite o texto aqui',
}: MyFirstComponentProps) => {
  const [inputValue, setInputValue] = useState('');

  // console.log('MyFirstComponent render', fieldsetTitle);

  // {
  //   fieldsetTitle && <legend>{fieldsetTitle}</legend>;
  // }

  // if (fieldsetTitle !== undefined) {
  //   return fieldsetTitle && <legend>{fieldsetTitle}</legend>;
  // }

  useEffect(() => {
    if (typeof value === 'boolean') {
      setInputValue(value ? 'Sim' : 'Não');
    }
  }, [value]);

  return (
    <fieldset>
      {fieldsetTitle && <legend>{fieldsetTitle}</legend>}
      <label htmlFor={inputName}>{labelText}: </label>
      <input
        type={FormComponentEnum.TEXT}
        name={inputName}
        id={inputName}
        placeholder={placeholderText}
        value={inputValue}
      />
    </fieldset>
  );
};
