import { useNavigate } from "react-router-dom";

//Página inicial do sistema
export function Inicial() {
  const navigate = useNavigate();

  return (
    <main
      className="inicial"
      role="main"
      aria-labelledby="titulo-inicial"
    >
      <section className="text_inicial">
        <h1 id="titulo-inicial">Get Started</h1>
      </section>

      <section className="btn-box">
        <button
          className="btn"
          onClick={() => navigate("/dsgo")}
          aria-label="Entrar no sistema"
        >
          Entrar
        </button>
      </section>
    </main>
  );
}