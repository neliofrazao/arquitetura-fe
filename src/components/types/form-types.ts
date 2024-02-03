type ValueType = string | number;

export interface FormComponentProps {
  value: ValueType;
  labelText: string;
  inputName: string;
  fieldsetTitle?: string;
}
