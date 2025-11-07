import { useEffect, useState } from "react";

export function Inventario() {
  const [figurinhas, setFigurinhas] = useState([]);
  const [mostrarConfirmacao, setMostrarConfirmacao] = useState(false);

  useEffect(() => {
    const armazenado = JSON.parse(localStorage.getItem("inventario")) || [];
    setFigurinhas(armazenado);
  }, []);

  const confirmarLimpeza = () => {
    localStorage.removeItem("inventario");
    setFigurinhas([]);
    setMostrarConfirmacao(false);
  };

  return (
    <main
      className="conteiner"
      role="main"
      aria-labelledby="titulo-inventario"
    >
      <section className="inventario">
        <h1 id="titulo-inventario">Inventário</h1>

        <button
          className="limpar-inventario"
          onClick={() => setMostrarConfirmacao(true)}
          aria-label="Limpar inventário"
        >
          Limpar Inventário
        </button>

        {figurinhas.length === 0 ? (
          <p className="vazio" aria-live="polite">
            Nenhuma figurinha coletada ainda.
          </p>
        ) : (
          <div className="grid">
            {figurinhas.map((f) => (
              <div key={f.id} className="figurinha">
                <img
                  src={f.imagem}
                  alt={f.nome}
                  className="img-figurinha"
                />
              </div>
            ))}
          </div>
        )}
      </section>

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