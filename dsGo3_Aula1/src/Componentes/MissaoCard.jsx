export function MissaoCard({ missao, onIniciarMissao, concluida }) {
//Cards de missão com os dados vindos do JS
  return (
    <article
      className="missao-card"
      aria-labelledby={`titulo-missao-${missao.id}`}
      aria-describedby={`descricao-missao-${missao.id}`}
      role="region"
    >
      <h3 id={`titulo-missao-${missao.id}`}>{missao.titulo}</h3>

      <p id={`descricao-missao-${missao.id}`}>
        {missao.missao}
      </p>

      <button
        onClick={() => onIniciarMissao(missao)}
        disabled={concluida}
        aria-disabled={concluida}
        aria-label={
          concluida
            ? "Missão já concluída"
            : `Iniciar missão ${missao.titulo}`
        }
        className="missao-btn"
      >
        {concluida ? "Missão concluída" : "Iniciar Missão"}
      </button>
    </article>
  );
}
