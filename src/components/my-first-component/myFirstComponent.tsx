import { FormComponentProps } from '../types';

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
  // console.log('MyFirstComponent render', fieldsetTitle);
  console.log('MyFirstComponent render2', Boolean(fieldsetTitle));

  // {
  //   fieldsetTitle && <legend>{fieldsetTitle}</legend>;
  // }

  // if (fieldsetTitle !== undefined) {
  //   return fieldsetTitle && <legend>{fieldsetTitle}</legend>;
  // }

  return (
    <fieldset>
      {fieldsetTitle && <legend>{fieldsetTitle}</legend>}
      <label htmlFor={inputName}>{labelText}: </label>
      <input
        type='text'
        name={inputName}
        id={inputName}
        placeholder={placeholderText}
        value={value}
      />
    </fieldset>
  );
};
