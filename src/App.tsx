import { Canvas } from "@react-three/fiber";
// import { CameraControls } from "@react-three/drei";

// import { useRef } from "react";
import * as THREE from "three";
import { Model3 } from "./Pedal3";
import { useState } from "react";
function App() {
  const [values, setValues] = useState({
    knob1: 0,
    knob2: 0,
    knob3: 0,
    knob4: 0,
    knob5: 0,
    knob6: 0,
  });
  // const cameraControlRef = useRef<CameraControls | null>(null);

  const handleChange = (name: string, value: string) => {
    setValues((prev) => {
      const newValues = { ...prev, [name]: parseInt(value) };
      console.log(newValues);
      return newValues;
    });
  };

  return (
    <div className="app">
      <div className="main-body">
        <div className="controls-container">
          <input
            type="range"
            min={-125}
            max={25}
            value={values.knob1}
            onChange={(event) => handleChange("knob1", event.target.value)}
            className="slider"
          />
          <input
            type="range"
            min={-125}
            max={25}
            value={values.knob2}
            onChange={(event) => handleChange("knob2", event.target.value)}
            className="slider"
          />
          <input
            type="range"
            min={-125}
            max={25}
            value={values.knob3}
            onChange={(event) => handleChange("knob3", event.target.value)}
            className="slider"
          />
          <input
            type="range"
            min={-125}
            max={25}
            value={values.knob4}
            onChange={(event) => handleChange("knob4", event.target.value)}
            className="slider"
          />
          <input
            type="range"
            min={-125}
            max={25}
            value={values.knob5}
            onChange={(event) => handleChange("knob5", event.target.value)}
            className="slider"
          />
          <input
            type="range"
            min={-125}
            max={25}
            value={values.knob6}
            onChange={(event) => handleChange("knob6", event.target.value)}
            className="slider"
          />
        </div>
      </div>
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
          castShadow
          intensity={5}
          position={[-115, 25, 0]}
          lookAt={() => new THREE.Vector3(0, -9, 0)}
        />
        <Model3
          knobs={values}
          rotation={[Math.PI * 0.5, 0, Math.PI * 0.3]}
          position={[10, 0, 0]}
        />
        <mesh receiveShadow position={[0, -9, 0]}>
          <boxGeometry args={[80, 5, 50]} />
          <meshStandardMaterial color={new THREE.Color("pink")} />
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
