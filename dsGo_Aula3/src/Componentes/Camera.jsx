import { useRef, useState, useEffect } from "react";

export function Camera() {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [foto, setFoto] = useState(null);

    // Inicia a câmera automaticamente ao carregar
    useEffect(() => {
        iniciarCamera();
    }, []);

    const iniciarCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }
        } catch (error) {
            console.error("Erro ao acessar a câmera:", error);
        }
    };

    const tirarFoto = () => {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        // Define o tamanho do canvas igual ao do vídeo
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        // Captura a imagem do vídeo
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        // Salva a foto em base64
        const imagem = canvas.toDataURL("image/png");
        setFoto(imagem);
    };

    const reiniciar = () => {
        setFoto(null);
        iniciarCamera();
    };

    return (
        <section className="camera-box">
            <h2>Captura de Imagem</h2>

            <div className="preview">
                {!foto ? (
                    <video ref={videoRef} autoPlay playsInline aria-label="Fluxo da câmera" />
                ) : (
                    <img src={foto} alt="Foto capturada" />
                )}
            </div>

            <div className="botoes">
                {!foto ? (
                    <button onClick={tirarFoto} className="btn-acao">Tirar Foto</button>
                ) : (
                    <button onClick={reiniciar} className="btn-secundario">Nova Foto</button>
                )}
            </div>

            {/* Canvas escondido só para capturar a imagem */}
            <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
        </section>
    );
}