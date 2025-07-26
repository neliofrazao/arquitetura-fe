// interface InputTextProps {
//   label: string;
//   id: string;
//   register: any;
//   required?: boolean;
//   error?: boolean;
// }

// export const InputText = ({ label, id, register, required, error }: InputTextProps) => {
//   return (
//     <div className="form-field">
//       <label htmlFor={id}>{label}</label>
//       <input
//         {...register(id, { required })}
//         type="text"
//         id={id}
//         name={id}
//       />
//       {error && <p>Esse campo é obrigatório</p>}
//     </div>
//   );
// };
