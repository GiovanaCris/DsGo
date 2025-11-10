import { useEffect, useState } from "react";

export function Inventario() {
  const [figurinhas, setFigurinhas] = useState([]);
  const [mostrarConfirmacao, setMostrarConfirmacao] = useState(false);

  // Carrega o inventário salvo ao iniciar
  useEffect(() => {
    const armazenado = localStorage.getItem("inventario");
    if (armazenado) {
      setFigurinhas(JSON.parse(armazenado));
    }
  }, []);

  // Remove o inventário e atualiza o estado
  const confirmarLimpeza = () => {
    localStorage.removeItem("inventario");
    setFigurinhas([]); // limpa o estado, atualiza a tela
    setMostrarConfirmacao(false);
  };

  return (
    <main className="conteiner" role="main" aria-labelledby="titulo-inventario">
      <section className="inventario">
        <h1 id="titulo-inventario">Inventário</h1>

        {/* Botão para abrir modal */}
        {figurinhas.length > 0 && (
          <button
            className="limpar-inventario"
            onClick={() => setMostrarConfirmacao(true)}
            aria-label="Limpar inventário"
          >
            Limpar Inventário
          </button>
        )}

        {/* Mensagem se estiver vazio */}
        {figurinhas.length === 0 ? (
          <p className="vazio" aria-live="polite">
            Nenhuma figurinha coletada ainda.
          </p>
        ) : (
          <div className="grid">
            {figurinhas.map((f) => (
              <div key={f.id} className="figurinha">
                <img src={f.imagem} alt={f.nome} className="img-figurinha" />
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Modal de confirmação */}
      {mostrarConfirmacao && (
        <dialog
          open
          className="modal-confirmacao"
          role="alertdialog"
          aria-modal="true"
          aria-labelledby="confirma-titulo"
          aria-describedby="confirma-texto"
        >
          <h2 id="confirma-titulo">Confirmar limpeza</h2>
          <p id="confirma-texto">
            Tem certeza que deseja limpar o inventário?
          </p>

          <div className="acoes">
            <button onClick={confirmarLimpeza} aria-label="Confirmar limpeza">
              Confirmar
            </button>

            <button
              onClick={() => setMostrarConfirmacao(false)}
              aria-label="Cancelar limpeza"
            >
              Cancelar
            </button>
          </div>
        </dialog>
      )}
    </main>
  );
}