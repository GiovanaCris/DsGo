import { useNavigate } from 'react-router-dom';

export function Inicial() {
  const navigate = useNavigate();

  return (
    <main className="inicial">
      <div className='text_inicial'>
        <h2>GET STARTED</h2>
      </div>
      <div className="btn-box">
        <button onClick={() => navigate('/dsgo')} className="btn">
          ENTRAR
        </button>
      </div>
    </main>
  );
}
