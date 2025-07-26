import { Link, useNavigate } from "react-router-dom";
import { Container } from "../../shared/container";
import "../../style/cadastrar-filmes.css";
import { useForm } from "react-hook-form";
import { useState } from "react";

type Inputs = {
  titulo: string;
  genero: string;
  estrelas: number;
  sinopse: string;
  assistido: boolean;
};

export const CriarFilme = () => {
  const { register, handleSubmit, formState } = useForm<Inputs>();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const onSubmit = (data: Inputs) => {
    try {
      setIsLoading(true);
      fetch("http://localhost:3000/filmes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error("Erro ao cadastrar filme:", error);
    } finally {
      setIsLoading(false);
      alert("Filme cadastrado com sucesso!");
      navigate("/");
    }
  };

  return (
    <Container
      title="Cadastrar Filme"
      actionButton={
        <Link className="button-primary" to="/">
          Voltar
        </Link>
      }
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-field">
          <label htmlFor="titulo">Título</label>
          <input
            {...register("titulo", { required: true })}
            type="text"
            id="titulo"
            name="titulo"
          />
          {formState.errors.titulo && <p>Esse campo é obrigatório</p>}
        </div>

        <div className="form-field">
          <label htmlFor="genero">Gênero</label>
          <input
            {...register("genero", { required: true })}
            type="text"
            id="genero"
            name="genero"
          />
          {formState.errors.genero && <p>Esse campo é obrigatório</p>}
        </div>
        <div className="form-field">
          <label htmlFor="estrelas">Estrelas</label>
          <select {...register("estrelas", { required: true })}>
            <option value="">Selecione</option>
            <option value="1">1 Estrela</option>
            <option value="2">2 Estrelas</option>
            <option value="3">3 Estrelas</option>
            <option value="4">4 Estrelas</option>
            <option value="5">5 Estrelas</option>
          </select>
          {formState.errors.estrelas && <p>Esse campo é obrigatório</p>}
        </div>

        <div className="form-field">
          <label htmlFor="sinopse">Sinopse</label>
          <textarea {...register("sinopse", { required: true })} />
          {formState.errors.sinopse && <p>Esse campo é obrigatório</p>}
        </div>

        <div className="form-field">
          <label htmlFor="assistido">Assistido</label>
          <select {...register("assistido", { required: true })}>
            <option value="">Selecione</option>
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
          </select>
          {formState.errors.assistido && <p>Esse campo é obrigatório</p>}
        </div>

        <button
          type="submit"
          className={isLoading ? "button-disabled" : "button-primary"}
          disabled={isLoading}
        >
          {isLoading ? "Cadastrando..." : "Cadastrar Filme"}
        </button>
      </form>
    </Container>
  );
};
