import { useEffect, useState } from "react";

export function Inventario() {
  const [figurinhas, setFigurinhas] = useState([]);
  const [mostrarConfirmacao, setMostrarConfirmacao] = useState(false);

  useEffect(() => {
    const armazenado = localStorage.getItem("inventario");
    if (armazenado) {
      setFigurinhas(JSON.parse(armazenado));
    }
  }, []);

  const confirmarLimpeza = () => {
    localStorage.removeItem("inventario");
    setFigurinhas([]);
    setMostrarConfirmacao(false);
  };

  return (
    <main className="conteinerInventario" role="main" aria-labelledby="titulo-inventario">
      <section className="inventario">
        <h1 id="titulo-inventario">Inventário</h1>

        {figurinhas.length > 0 && (
          <button
            className="btn-acao limpar-inventario" //Ação que limpa o inventário 
            onClick={() => setMostrarConfirmacao(true)}
            aria-label="Limpar inventário"
          >
            Limpar Inventário
          </button>
        )}

        {/*Mensagem para quando não conter nenhuma figurinha no inventário*/}
        {figurinhas.length === 0 ? (
          <p className="vazio" aria-live="polite">
            Nenhuma figurinha coletada ainda.
          </p>
        ) : (
          //Função para mostrar as figurinhas vindas do dadosMissao, juntamente com o nome da matéria
          <div className="grid">
            {figurinhas.map((f) => (
              <div key={f.id} className="figurinha">
                <img src={f.imagem} alt={f.nome} className="img-figurinha" />
                <p>{f.nome}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/*Confirmação da limpeza do inventário para fins de tratativa e prevenção de erro garantindo uma boa experiência do usuário*/}
      {mostrarConfirmacao && (
        <dialog
          open
          className="modal modal-confirmacao"
          role="alertdialog"
          aria-modal="true"
          aria-labelledby="confirma-titulo"
          aria-describedby="confirma-texto"
        >
          <button
            className="fechar-modal"
            onClick={() => setMostrarConfirmacao(false)}
            aria-label="Fechar modal"
          >
            ✕
          </button>

          <h2 id="confirma-titulo">Confirmar limpeza</h2>

          <p id="confirma-texto">
            Tem certeza que deseja limpar o inventário?
          </p>

          <div className="modal-botoes">
            <button
              className="btn-acao"
              onClick={confirmarLimpeza}
              aria-label="Confirmar limpeza"
            >
              Confirmar
            </button>

            <button
              className="btn-acao cancelar"
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
