import { useState } from "react";
import sucesso from "../assets/sucesso_titas.webp";
import erro from "../assets/erro_titas.png";

//Componente responsável por exibir o modal de "missão",
// onde o usuário digita uma resposta e recebe o feedback (acerto/erro)
export function MissaoModal({ missao, onClose, onConcluir }) {
  // Estados locais do componente
  const [resposta, setResposta] = useState(""); // guarda o texto digitado pelo usuário
  const [resultado, setResultado] = useState(null); // guarda a mensagem de feedback ("correta" ou "incorreta")
  const [status, setStatus] = useState(null); // controla se o resultado foi sucesso ou erro (para trocar imagem)
  const [erroInput, setErroInput] = useState(false); // indica se o campo de texto está vazio (erro de validação)

  //Função que valida a resposta digitada pelo usuário
  const verificarResposta = () => {
    //Se o usuário clicar em "Enviar" sem digitar nada, mostra o erro
    if (!resposta.trim()) {
      setErroInput(true);
      return;
    }

    //Normaliza as respostas (remove espaços extras e transforma em minúsculas)
    const respostaNormalizada = resposta.trim().toLowerCase();
    const certaNormalizada = missao.respostaCorreta.trim().toLowerCase();

    //Se as respostas forem iguais → sucesso
    if (respostaNormalizada === certaNormalizada) {
      setResultado("Resposta correta. Missão concluída.");
      setStatus("sucesso");

      //Aguarda 1 segundo e chama a função de concluir missão (vinda do componente pai)
      setTimeout(() => {
        onConcluir(missao.id);
      }, 1000);
    } else {
      //Caso contrário → erro
      setResultado("Resposta incorreta. Tente novamente.");
      setStatus("erro");
    }

    //BLOQUEIO DE SCROLL
    // (deveria estar fora da função, mas mantém a ideia de impedir o scroll da página ao abrir o modal)
    useEffect(() => {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "auto";
      };
    }, []);
  };

  return (
    //Estrutura principal do modal
    <dialog
      open
      className="modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="titulo-missao"
      aria-describedby="descricao-missao"
    >
      {/* Botão de fechar modal */}
      <button
        className="fechar-modal"
        onClick={onClose}
        aria-label="Fechar modal"
      >
        ✕
      </button>

      {/* Título e descrição da missão */}
      <h2 id="titulo-missao">{missao.titulo}</h2>
      <p id="descricao-missao">{missao.descricao}</p>

      {/* Campo de entrada de resposta */}
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
            setErroInput(false); // remove o erro quando o usuário começa a digitar
            setResposta(e.target.value);
          }}
          required
        />

        {/* Mensagem de erro (caso o campo esteja vazio) */}
        {erroInput && (
          <p id="erro-resposta" className="mensagemErro">
            Digite uma resposta antes de enviar.
          </p>
        )}
      </div>

      {/* Botões de ação */}
      <div className="modal-botoes">
        <button onClick={verificarResposta} aria-label="Enviar resposta">
          Enviar
        </button>
        <button onClick={onClose} aria-label="Fechar modal">
          Fechar
        </button>
      </div>

      {/* Se houver resultado, mostra o feedback e a imagem correspondente */}
      {resultado && (
        <div className="resultado" role="status" aria-live="polite">
          <p>{resultado}</p>

          {status === "sucesso" && (
            <img
              src={sucesso}
              alt="Missão concluída com sucesso"
              width="190"
            />
          )}

          {status === "erro" && (
            <img
              src={erro}
              alt="Resposta incorreta"
              width="190"
            />
          )}
        </div>
      )}
    </dialog>
  );
}