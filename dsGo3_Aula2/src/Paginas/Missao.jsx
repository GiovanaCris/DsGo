import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { missoes } from "../Dados/dadosMissao";
import { MissaoCard } from "../Componentes/MissaoCard";
import { MissaoModal } from "../Componentes/MissaoModal";

//Modal das missões realizadas
export function Missao() {
  const navigate = useNavigate();
  const [missaoSelecionada, setMissaoSelecionada] = useState(null);
  const [missoesConcluidas, setMissoesConcluidas] = useState([]);

  const concluirMissao = (id) => {
    setMissoesConcluidas((prev) => [...prev, id]);
    setMissaoSelecionada(null);
  };

  return (
    <div className="modal-wrapper">
      <main className="conteiner" role="main" aria-labelledby="titulo-missoes">
        {/*Botão para fechar as missões*/}
        <button
          className="fechar-missoes"
          onClick={() => navigate(-1)}
          aria-label="Voltar para a página anterior"
        >
          ✕
        </button>

        <h1 id="titulo-missoes">Suas Missões</h1>

        {/*Listagem das missões disponíveis*/}
        <section className="missoes-grid" aria-label="Lista de missões disponíveis">
          {missoes.map((m) => (
            <MissaoCard
              key={m.id}
              missao={m}
              onIniciarMissao={() => setMissaoSelecionada(m)}
              concluida={missoesConcluidas.includes(m.id)}
            />
          ))}
        </section>

        {missaoSelecionada && (
          <MissaoModal
            missao={missaoSelecionada}
            onClose={() => setMissaoSelecionada(null)}
            onConcluir={() => concluirMissao(missaoSelecionada.id)}
          />
        )}
      </main>
    </div>
  );
}