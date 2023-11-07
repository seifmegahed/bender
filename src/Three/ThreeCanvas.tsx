import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import Pedal from "./Pedal3";

const ThreeCanvas = ({ knobs }: { knobs?: number[] }) => {
  // const cameraControlRef = useRef<CameraControls | null>(null);
  return (
    <Canvas
      shadows
      frameloop="demand"
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
      <Pedal
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

export default ThreeCanvas;
