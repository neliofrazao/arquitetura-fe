import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "../style/ListaFilmes.css";

interface Filme {
    id: number;
    titulo: string;
    genero: string;
    estrelas: number;
    sinopse: string;
    assistido: boolean;
}

export default function ListaFilmes() {
    const [filmes, setFilmes] = useState<Filme[]>([]);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const queryString = searchParams.toString();
        fetch(`http://localhost:3000/filmes?${queryString}`)
            .then((res) => res.json())
            .then((dados) => setFilmes(dados));
    }, [searchParams]);
    
    

    return (
        // criar um container shared, com titulo como props
        <div className="lista-filmes-container">
            <h1>Meus Filmes</h1>
             <div className="filtros">
                <input
                    className="input-text"
                    placeholder="Buscar por nome"
                    value={searchParams.get("titulo") || ""}
                    onChange={(e) =>setSearchParams({ titulo: e.target.value })}
                />

                <select
                    className="select"
                    value={searchParams.get("assistido") || ""}  
                    onChange={(e) =>setSearchParams({ assistido: e.target.value })}>
                    <option value="">Todos</option>
                    <option value="true">Assistidos</option>
                    <option value="false">Não assistidos</option>
                </select>

                <select 
                    className="select"
                    value={searchParams.get("estrelas") || ""}
                    onChange={(e) =>setSearchParams({ estrelas: e.target.value })}>
                    <option value="">Todas as estrelas</option>
                    <option value="3">3+ estrelas</option>
                    <option value="4">4+ estrelas</option>
                    <option value="5">5 estrelas</option>
                </select>
                <button onClick={() => setSearchParams({})}>Limpar Busca</button>
            </div>

            <div className="lista-filmes-grid">
                {filmes?.map((filme) => (
                    <div key={filme.id}>
                        <h3>{filme.titulo}</h3>
                        <p>Gênero: {filme.genero}</p>
                        <p>Estrelas: {filme.estrelas}</p>
                        <p>{filme.assistido ? "Assistido" : "Não assistido"}</p>
                        <Link to={`/filmes/${filme.id}`}>Ver detalhes</Link>
                    </div>
                ))}
                

                {filmes.length === 0 && <p>Nenhum filme encontrado.</p>}
            </div>
        </div>
    );
}
