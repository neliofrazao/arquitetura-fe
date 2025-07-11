import React from "react";
import { useForm } from "react-hook-form";
import "../../style/cadastrar-filmes.css";
import { useNavigate } from "react-router-dom";

interface Filme {
  id: number;
  titulo: string;
  genero: string;
  estrelas: number;
  sinopse: string;
  assistido: boolean;
}

type FilmeForm = Omit<Filme, "id">;

const CadastrarFilme: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FilmeForm>();

  const onSubmit = async (data: FilmeForm) => {
    try {
      await fetch("http://localhost:3000/filmes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      alert("Filme cadastrado com sucesso!");
      reset();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      alert("Erro ao cadastrar filme.");
    }
  };

  return (
    <div className="container">
      <header className="container-header">
      <h1>Cadastrar Filme</h1>
      <button onClick={() => navigate('/')}>Voltar</button>
    </header>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-field">
        <label>Título:</label>
        <input {...register("titulo", { required: "Título é obrigatório" })} />
        {errors.titulo && <span>{errors.titulo.message}</span>}
      </div>
      <div className="form-field">
        <label>Gênero:</label>
        <input {...register("genero", { required: "Gênero é obrigatório" })} />
        {errors.genero && <span>{errors.genero.message}</span>}
      </div>
      <div className="form-field">
        <label>Estrelas (1 a 5):</label>
        <select
          {...register("estrelas", {
            required: "Estrelas é obrigatório",
            validate: (value) =>
              (value >= 1 && value <= 5) || "Selecione entre 1 e 5",
          })}
        >
          <option value="">Selecione</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        {errors.estrelas && <span>{errors.estrelas.message}</span>}
      </div>
      <div className="form-field">
        <label>Sinopse:</label>
        <textarea
          {...register("sinopse", { required: "Sinopse é obrigatória" })}
        />
        {errors.sinopse && <span>{errors.sinopse.message}</span>}
      </div>
      
      
      <div className="form-field">
        <label>Assistido:</label>
          <select
            {...register("assistido", {
              required: "Selecione se foi assistido",
            })}
          >
            <option value="">Selecione</option>
            <option value="true">Sim</option>
            <option value="false">Não</option>
          </select>
        
        {errors.assistido && <span>{errors.assistido.message}</span>}
      </div>
      
      <button type="submit">Cadastrar Filme</button>
    </form>
    </div>
  );
};

export default CadastrarFilme;
