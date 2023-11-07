// import { useSpring } from "@react-spring/three";
// import { Bounds } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useState } from "react";
import { useGesture } from "react-use-gesture";
import * as THREE from "three";

const Knob = ({
  // rotation,
  position,
  scale,
  bodyGeometry,
  capGeometry,
  bodyMaterial,
  capMaterial,
}: {
  rotation: number;
  position: THREE.Vector3;
  scale: number;
  bodyGeometry: THREE.BufferGeometry;
  capGeometry: THREE.BufferGeometry;
  bodyMaterial: THREE.MeshStandardMaterial;
  capMaterial: THREE.MeshStandardMaterial;
}) => {
  // const rotationRads = Math.PI * (rotation / 100);
  const [bodyMat, setBodyMat] = useState(bodyMaterial);

  const focusMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color(0xb04759),
  });
  const handleFocus = () => setBodyMat(focusMaterial);
  const handleUnFocus = () => setBodyMat(bodyMaterial);
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;

  const [dragRotation, seDragRotation] = useState(0);

  // const [spring, set] = useSpring(() => ({
  //   rotation: [0, 0, 0],
  //   config: { friction: 10 },
  // }));
  const max = 1;
  const min = -4;
  const bind = useGesture({
    onDrag: ({ offset: [x, y] }) => {
      const dragValue = y / aspect || x / aspect;
      console.log(dragValue);
      if (dragValue > max) seDragRotation(max);
      else if (dragValue < min) seDragRotation(min);
      else seDragRotation(dragValue);
      handleFocus();
    },
    onDragEnd: () => handleUnFocus(),
  });

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore 
    <group
      position={position}
      scale={scale}
      rotation={[0, dragRotation, 0]}
      {...(bind() ?? {})}
    >
      <mesh castShadow geometry={bodyGeometry} material={bodyMat} />
      <mesh geometry={capGeometry} material={capMaterial} />
    </group>
  );
};

export default Knob;
