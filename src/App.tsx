import { Canvas } from "@react-three/fiber";
import { CameraControls } from "@react-three/drei";

import { useRef } from "react";
// import Pedal from "./Pedal";
import * as THREE from "three";
import { Model } from "./23";

function App() {
  const cameraControlRef = useRef<CameraControls | null>(null);

  return (
    <div className="app">
      <Canvas
        camera={{ fov: 45, position: [0, 0, 25] }}
        onCreated={({ camera, gl, scene }) => {
          camera.lookAt(new THREE.Vector3(0, 0, 0));
          scene.background = new THREE.Color("yellow");
          gl.shadowMap.enabled = true;
          gl.shadowMap.type = THREE.PCFSoftShadowMap;
        }}
      >
        <CameraControls ref={cameraControlRef} />
        <ambientLight intensity={1} />
        <directionalLight
          color="white"
          position={[20, 50, 0]}
          lookAt={() => new THREE.Vector3(0, 0, 0)}
        />
        <mesh position={[0, -1.5, 0]}>
          <boxGeometry args={[20, 1.5, 20]} />
          <meshStandardMaterial color={new THREE.Color("yellow")} />
        </mesh>
        {/* <Pedal /> */}
        <Model />
      </Canvas>
    </div>
  );
}

export default App;
