import { useThree } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { TextureLoader } from "three";

export default function BackGround() {
    const { scene } = useThree();
    const [imageUrl, setImageUrl] = useState(null);

    // 1️⃣ Generar URL de Google Maps Static API
    useEffect(() => {
        // const apiKey = "AIzaSyAAhqNQiO7azdI63iHFYzQZiTgh12mWYRs"; // ⚠️ tu API key
        // const lat = 41.3851; // Barcelona
        // const lon = 2.1734;
        // const zoom = 17;
        // const size = "1024x1024";
        // const mapType = "satellite";

        // const url = `https://www.google.com/maps/embed/v1/place?key=AIzaSyAAhqNQiO7azdI63iHFYzQZiTgh12mWYRs&q=Space+Needle,Seattle+WA`;
        const url : any = `https://maps.googleapis.com/maps/api/staticmap?center=Space+Needle,Seattle+WA&zoom=17&size=1024x1024&maptype=satellite&key=AIzaSyAAhqNQiO7azdI63iHFYzQZiTgh12mWYRs`;
        setImageUrl(url);
        // const url = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lon}&zoom=${zoom}&size=${size}&maptype=${mapType}&key=${apiKey}`;
        // setImageUrl(url);
        // const url = "https://threejs.org/examples/textures/uv_grid_opengl.jpg";
        // setImageUrl(url);

    }, []);

    // 2️⃣ Cargar textura y aplicarla como fondo
    useEffect(() => {
        if (!imageUrl) return;

        const loader = new TextureLoader();
        const texture = loader.load(
            imageUrl,
            (tex) => {
                scene.background = tex;
            },
            undefined,
            (error) => {
                console.error("Error cargando textura:", error);
            }
        );

        // Limpieza si el componente se desmonta
        return () => {
            texture.dispose();
            scene.background = null;
        };
    }, [imageUrl, scene]);

    return null;
}
