import { useState } from "react";
import sucesso from "../assets/win.png";
import erro from "../assets/raios.png";

export function MissaoModal({ missao, onClose, onConcluir }) {
  const [resposta, setResposta] = useState("");
  const [resultado, setResultado] = useState(null);
  const [status, setStatus] = useState(null);
  const [erroInput, setErroInput] = useState(false);

  const verificarResposta = () => {
    if (!resposta.trim()) {
      setErroInput(true);
      return;
    }

    const respostaNormalizada = resposta.trim().toLowerCase();
    const certaNormalizada = missao.respostaCorreta.trim().toLowerCase();

    if (respostaNormalizada === certaNormalizada) {
      setResultado("Resposta correta. Missão concluída.");
      setStatus("sucesso");

      setTimeout(() => {
        onConcluir(missao.id);
      }, 1000);
    } else {
      setResultado("Resposta incorreta. Tente novamente.");
      setStatus("erro");
    }
    useEffect(() => {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "auto";
      };
    }, []);

  };

  return (
    <dialog
      open
      className="modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="titulo-missao"
      aria-describedby="descricao-missao"
    >
      <button
        className="fechar-modal"
        onClick={onClose}
        aria-label="Fechar modal"
      >
        ✕
      </button>

      <h2 id="titulo-missao">{missao.titulo}</h2>
      <p id="descricao-missao">{missao.descricao}</p>

      <div className="campo-resposta">
        <label htmlFor="resposta" className="sr-only">
          Digite sua resposta
        </label>

        <input
          className={`caixaTexto ${erroInput ? "erro" : ""}`}
          id="resposta"
          type="text"
          placeholder="Digite sua resposta..."
          aria-invalid={erroInput}
          aria-describedby={erroInput ? "erro-resposta" : undefined}
          value={resposta}
          onChange={(e) => {
            setErroInput(false);
            setResposta(e.target.value);
          }}
          required
        />

        {erroInput && (
          <span id="erro-resposta" className="texto-erro">
            Digite uma resposta antes de enviar.
          </span>
        )}
      </div>

      <div className="modal-botoes">
        <button onClick={verificarResposta} aria-label="Enviar resposta">
          Enviar
        </button>
        <button onClick={onClose} aria-label="Fechar modal">
          Fechar
        </button>
      </div>

      {resultado && (
        <div
          className="resultado"
          role="status"
          aria-live="polite"
        >
          <p>{resultado}</p>

          {status === "sucesso" && (
            <img
              src={sucesso}
              alt="Missão concluída com sucesso"
              width="100"
            />
          )}

          {status === "erro" && (
            <img
              src={erro}
              alt="Resposta incorreta"
              width="100"
            />
          )}
        </div>
      )}
    </dialog>
  );
}