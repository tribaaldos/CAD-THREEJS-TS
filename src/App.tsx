
import { Canvas } from '@react-three/fiber'
import './App.css'
import NewPolygonDrawer from './NewPolygonDraw'
import BuildingUI from './BuildingUI'
import BackGround from './BackGround'
// import { CustomOrbitControls } from './CustomOrbitControls'
import { Environment, OrbitControls } from '@react-three/drei'

export default function Scene() {
  // color leva controls

  return (
    <>
      <BuildingUI />
      <Canvas camera={{ position: [0, 10, 10], fov: 45 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[0, 5, 0]} intensity={5} />
        <BackGround />
        {/* <gridHelper args={[100, 100]} /> */}
        {/* <PolygonDrawer/> */}
        <Environment preset="night" backgroundIntensity={0.2} background />
        <NewPolygonDrawer />
        <OrbitControls />
        {/* <CustomOrbitControls /> */}

      </Canvas>
    </>
  )
}
