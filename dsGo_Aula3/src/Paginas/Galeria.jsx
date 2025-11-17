import { useState } from "react";
import { Camera } from "../Componentes/Camera";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import toast, { Toaster } from "react-hot-toast";

export function Galeria() {
  const [fotos, setFotos] = useState([]);

  const adicionarFoto = (novaFoto) => {
    setFotos((prevFotos) => {
      const atualizadas = [...prevFotos, novaFoto];

      if (atualizadas.length % 3 === 0) {
        toast.success(`Você já tirou ${atualizadas.length} fotos!`);
      }

      return atualizadas;
    });
  };

  return (
    <main className="container">
      <Toaster position="top-right" />
      <Camera onFotoTirada={adicionarFoto} />

      <h2>Galeria de Fotos</h2>

      {fotos.length === 0 ? (
        <p>Nenhuma foto ainda! Tire uma com a câmera.</p>
      ) : (
        <ImageList
          sx={{
            width: "100%",
            maxWidth: 1400,
            height: 400,
            margin: "0 auto",
          }}
          cols={6}
          rowHeight={180}
        >
          {fotos.map((foto, index) => (
            <ImageListItem key={index}>
              <img
                src={foto}
                alt={`Foto ${index + 1}`}
                loading="lazy"
                style={{ borderRadius: "8px" }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      )}
    </main>
  );
}


// import { useState } from "react";
// import { Camera } from "../Componentes/Camera";
// import ImageList from "@mui/material/ImageList";
// import ImageListItem from "@mui/material/ImageListItem";

// export function Galeria() {
//   const [fotos, setFotos] = useState([]);

//   // Função chamada toda vez que a câmera tira uma nova foto
//   const adicionarFoto = (novaFoto) => {
//     setFotos((prevFotos) => [...prevFotos, novaFoto]);
//   };

//   return (
//     <main className="container">
//       <Camera onFotoTirada={adicionarFoto} />

//       <h2>Galeria de Fotos</h2>
//       {fotos.length === 0 ? (
//         <p>Nenhuma foto ainda! Tire uma com a câmera.</p>
//       ) : (
//         <ImageList
//           sx={{
//             width: "100%",
//             maxWidth: 800,
//             margin: "0 auto",
//             height: "auto",
//           }}
//           cols={4}
//           rowHeight={164}
//         >
//           {fotos.map((foto, index) => (
//             <ImageListItem key={index}>
//               <img
//                 src={foto}
//                 alt={`Foto ${index + 1}`}
//                 loading="lazy"
//                 style={{ borderRadius: "8px" }}
//               />
//             </ImageListItem>
//           ))}
//         </ImageList>
//       )}
//     </main>
//   );
// }
