export function MissaoCard({ missao, onIniciarMissao, concluida }) {
  const inventario = JSON.parse(localStorage.getItem("inventario")) || [];
  const concluidaLocal = inventario.some((f) => f.id === missao.id);
  const isConcluida = concluida !== undefined ? concluida : concluidaLocal;
 
  return (
    <article className="missao-card">
      <h3 id={missao.id}>{missao.titulo}</h3>
      <p>{missao.missao}</p>
      <button
        onClick={() => onIniciarMissao(missao)}
        disabled={isConcluida}
      >
        {isConcluida ? "Concluída" : "Iniciar missão"}
      </button>
    </article>
  );
}