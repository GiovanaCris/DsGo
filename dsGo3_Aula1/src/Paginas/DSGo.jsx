import { Outlet } from 'react-router-dom';
import { Menu } from '../Componentes/Menu';

//Importação dos componentes principais da página
export function DSGo(){
    return(
        <main className="corpo">
            <Outlet/>
            <Menu/>            
        </main>

    )
}