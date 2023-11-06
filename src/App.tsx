import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { Model3 } from "./Three/Pedal3";
import { useState } from "react";

const ThreeCanvas = ({ knobs }: { knobs: number[] }) => {
  // const cameraControlRef = useRef<CameraControls | null>(null);
  return (
    <Canvas
      shadows
      camera={{ fov: 45, position: [0, 0, 20] }}
      onCreated={({ camera, gl }) => {
        camera.lookAt(new THREE.Vector3(0, 0, 0));
        gl.shadowMap.enabled = true;
        gl.shadowMap.type = THREE.PCFSoftShadowMap;
      }}
    >
      {/* <CameraControls ref={cameraControlRef} /> */}
      <ambientLight intensity={0.5} />
      <directionalLight
        color="white"
        // castShadow
        intensity={5}
        position={[-115, 25, 0]}
        lookAt={() => new THREE.Vector3(0, -9, 0)}
      />
      <Model3
        knobs={knobs}
        rotation={[Math.PI * 0.5, 0, Math.PI * 0.3]}
        position={[10, 0, 0]}
      />
      <mesh receiveShadow position={[0, -9, 0]}>
        <boxGeometry args={[100, 5, 50]} />
        <meshStandardMaterial color={new THREE.Color("pink")} />
      </mesh>
    </Canvas>
  );
};

function App() {
  const [values, setValues] = useState([0, 0, 0, 0, 0, 0]);

  const handleChange = (index: number, value: string) => {
    setValues((prev) =>
      prev.map((localValue, localIndex) =>
        index === localIndex ? parseInt(value) : localValue
      )
    );
  };

  return (
    <div className="app">
      <div className="main-body">
        <h1>Bender Instruments</h1>
        <div className="controls-container">
          {values.map((value, index) => (
            <input
              type="range"
              aria-orientation="vertical"
              min={-125}
              max={25}
              value={value}
              onChange={(event) => handleChange(index, event.target.value)}
              className="slider"
            />
          ))}
        </div>
      </div>
      <ThreeCanvas knobs={values} />
    </div>
  );
}

export default App;
