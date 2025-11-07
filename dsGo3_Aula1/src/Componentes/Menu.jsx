import mutano from '../assets/mutano_img.png';
import ravena from '../assets/ravena_img.png';
import robin from '../assets/robin_img.webp';
import estelar from '../assets/estelar_img.png';
import { Link } from 'react-router-dom'
export function Menu() {
    return (
        <div className='menu'>
            <ul>
                <Link to = 'missao'>
                <li>
                    <figure>
                        <img src={mutano} alt="Imagem do personagem mutano" />
                        <figcaption className='missoes_part'>Missões</figcaption>
                    </figure>
                </li>
                </Link>
                
                <li>
                    <figure>
                        <img src={ravena} alt="Imagem da personagem Ravena" />
                        <figcaption className='inventario_part'>Inventário</figcaption>
                    </figure>
                    
                </li>
                <li>
                    <figure>
                        <img src={robin} alt="Imagem do personagem Robin" />
                        <figcaption className='geolocation_part'>GeoLocalização</figcaption>
                    </figure>
                </li>
                 <li>
                    
                    <figure>
                        <img src={estelar} alt="Imagem da pesonagem Estelar" />
                        <figcaption className='camera_part'>Camera</figcaption>
                    </figure>
                    
                </li>
            </ul>
            
        </div>
    )
}