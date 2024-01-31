import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormState {
  name: string;
  email: string;
}

const ControlledForm: React.FC = () => {
  const initialFormState: FormState = {
    name: '',
    email: '',
  };

  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<{ [key in keyof FormState]?: string }>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (errors[name as keyof FormState]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors: { [key in keyof FormState]?: string } = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (!value) {
        newErrors[key as keyof FormState] = 'Campo obrigatório';
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log('Dados do formulário:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='name'>Nome:</label>
        <input type='text' id='name' name='name' value={formData.name} onChange={handleChange} />
        {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
      </div>
      <div>
        <label htmlFor='email'>E-mail:</label>
        <input
          type='email'
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
      </div>
      <button type='submit'>Enviar</button>
    </form>
  );
};

export default ControlledForm;
