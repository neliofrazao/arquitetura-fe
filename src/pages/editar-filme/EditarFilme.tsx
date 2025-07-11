import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import "../../style/cadastrar-filmes.css";
import { useNavigate, useParams } from "react-router-dom";

interface Filme {
  id: number;
  titulo: string;
  genero: string;
  estrelas: number;
  sinopse: string;
  assistido: boolean;
}

type FilmeForm = Omit<Filme, "id">;

function EditarFilme() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FilmeForm>();

  useEffect(() => {
    const fetchFilme = async () => {
      try {
        const res = await fetch(`http://localhost:3000/filmes/${id}`);
        const data: Filme = await res.json();
        setValue("titulo", data.titulo);
        setValue("genero", data.genero);
        setValue("estrelas", data.estrelas);
        setValue("sinopse", data.sinopse);
        setValue("assistido", data.assistido);
      } catch {
        alert("Erro ao carregar filme.");
        navigate("/");
      }
    };
    fetchFilme();
  }, [id, setValue, navigate]);

  const onSubmit = async (data: FilmeForm) => {
    try {
      await fetch(`http://localhost:3000/filmes/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          estrelas: Number(data.estrelas),
          assistido: String(data.assistido) === "true" ? true : false,
        }),
      });
      alert("Filme editado com sucesso!");
      navigate("/");
    } catch {
      alert("Erro ao editar filme.");
    }
  };

  return (
    <div className="container">
      <header className="container-header">
        <h1>Editar Filme</h1>
        <button onClick={() => navigate("/")}>Voltar</button>
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
        <button type="submit" disabled={isSubmitting}>
          Salvar Alterações
        </button>
      </form>
    </div>
  );
}

export default EditarFilme;
