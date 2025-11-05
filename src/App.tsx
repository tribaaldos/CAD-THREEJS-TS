
import { Canvas } from '@react-three/fiber'
import './App.css'
import { OrbitControls } from '@react-three/drei'
import BackGround from './BackGround'
// import BackGround from './BackGround'

function App() {


  return (
    <>
      <Canvas>
        <mesh>
          <boxGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>
        <ambientLight intensity={0.5} />
        <OrbitControls />
        <BackGround/>
      </Canvas>
      {/* <img src="https://ethic.es/wp-content/uploads/2023/03/imagen.jpg" alt="Imagen de ejemplo" /> */}



    </>
  )
}

export default App
