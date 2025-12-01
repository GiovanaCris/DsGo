import { Routes, Route } from "react-router-dom";
import { Inicial } from "../Paginas/Inicial";
import { DSGo } from "../Paginas/DSGo";
import { Missao} from "../Paginas/Missao";
import { Inventario } from "../Paginas/Inventario";
import { Camera } from "../Componentes/Camera";
import { Geolocalizacao } from "../Paginas/Geolocalizacao";

export function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Inicial />} />
            <Route path="/dsgo" element={<DSGo />} >  
                <Route path="missao" element={<Missao />} />
                <Route path="inventario" element={<Inventario />} />
                <Route path="camera" element={<Camera />} />
                <Route path="geolocalizacao" element={<Geolocalizacao />} />
            </Route>   
        </Routes>
    );
}   