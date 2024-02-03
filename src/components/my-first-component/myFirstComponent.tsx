interface MyFirstComponentProps { 
  labelText: string;
  inputName: string;
  fieldsetTitle?: string;
}

export const MyFirstComponent = ({ labelText, inputName, fieldsetTitle }: MyFirstComponentProps) => {
  // console.log('MyFirstComponent render', fieldsetTitle);
  console.log('MyFirstComponent render2', Boolean(fieldsetTitle));
  return (
    <fieldset>
      { fieldsetTitle && <legend>{ fieldsetTitle }</legend> }
      <label htmlFor={inputName}>{labelText}: </label>
      <input type='text' name={inputName} id={inputName} />
    </fieldset>
  );
};
