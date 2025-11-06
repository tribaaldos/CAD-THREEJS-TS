import { useEffect } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export function CustomOrbitControls() {
  const { camera, gl } = useThree()

  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.enablePan = true
    controls.enableZoom = true
    controls.target.set(0, 0, 0)

    // Limpieza al desmontar
    return () => {
      controls.dispose()
    }
  }, [camera, gl])

  // Actualizamos cada frame
  useFrame(() => {
    camera.updateProjectionMatrix()
  })

  return null
}
