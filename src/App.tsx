import { Canvas } from "@react-three/fiber";
// import { CameraControls } from "@react-three/drei";

// import { useRef } from "react";
import * as THREE from "three";
import { Model3 } from "./Pedal3";

function App() {
  // const cameraControlRef = useRef<CameraControls | null>(null);

  return (
    <div className="app">
      <Canvas
        shadows
        camera={{ fov: 45, position: [0, 0, 20] }}
        onCreated={({ camera, gl, scene }) => {
          camera.lookAt(new THREE.Vector3(0, 0, 0));
          scene.background = new THREE.Color("pink");
          gl.shadowMap.enabled = true;
          gl.shadowMap.type = THREE.PCFSoftShadowMap;
        }}
      >
        {/* <CameraControls ref={cameraControlRef} /> */}
        <ambientLight intensity={1} />
        <directionalLight
          color="white"
          castShadow
          intensity={8}
          position={[-30, 5, -7]}
          // position={[-6, 30, -20]}
          lookAt={() => new THREE.Vector3(0, -9, 0)}
        />
        <Model3
          rotation={[Math.PI * 0.5, 0, Math.PI * 0.3]}
          position={[10, 0, 0]}
        />
        <mesh receiveShadow position={[0, -9, 0]}>
          <boxGeometry args={[80, 5, 50]} />
          <meshStandardMaterial color={new THREE.Color("pink")} />
        </mesh>
      </Canvas>
      <div className="controls-container">
        <div className="slide-container">
          <input
            type="range"
            min="1"
            max="100"
            value="50"
            className="slider"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
