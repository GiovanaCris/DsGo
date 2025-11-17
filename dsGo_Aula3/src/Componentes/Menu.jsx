import { Link } from 'react-router-dom';
import mutano from '../assets/mutano_img.png';
import ravena from '../assets/ravena_img.png';
import robin from '../assets/robin_img.webp';
import estelar from '../assets/estelar_img.png';

export function Menu() {
    return (
        <nav className="menu" aria-label="Menu principal">
            <ul className="menu-list">
                
                <li className="menu-item">
                    <Link to="missao" className="menu-link" aria-label="Ir para Missões">
                        <figure>
                            <img 
                                src={mutano} 
                                alt="Mutano" 
                                className="menu-img"
                            />
                            <figcaption className="menu-caption">Missões</figcaption>
                        </figure>
                    </Link>
                </li>

                <li className="menu-item">
                    <Link to="inventario" className="menu-link" aria-label="Ir para Inventário">
                        <figure>
                            <img 
                                src={ravena} 
                                alt="Ravena" 
                                className="menu-img"
                            />
                            <figcaption className="menu-caption">Inventário</figcaption>
                        </figure>
                    </Link>
                </li>

                <li className="menu-item">
                    <Link to="#" className="menu-link" aria-label="Ir para Geolocalização">
                        <figure>
                            <img 
                                src={robin} 
                                alt="Robin" 
                                className="menu-img"
                            />
                            <figcaption className="menu-caption">Geolocalização</figcaption>
                        </figure>
                    </Link>
                </li>

                <li className="menu-item">
                    <Link to="camera" className="menu-link" aria-label="Ir para Câmera">
                        <figure>
                            <img 
                                src={estelar} 
                                alt="Estelar" 
                                className="menu-img"
                            />
                            <figcaption className="menu-caption">Câmera</figcaption>
                        </figure>
                    </Link>
                </li>

            </ul>
        </nav>
    );
}