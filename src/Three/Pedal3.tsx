/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.14 pedal3.gltf -t --shadows 
*/

import * as THREE from "three";
// import React, { useRef } from 'react'
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { GroupProps } from "@react-three/fiber";
import Knob from "./Knob";

const knobPositions = [
  new THREE.Vector3(-2.207, 1.241, -2.423), // Blend
  new THREE.Vector3(0.037, 1.241, -2.423), // Pace
  new THREE.Vector3(2.281, 1.241, -2.423), // Flow
  new THREE.Vector3(-2.207, 1.241, 0.169), // Mass
  new THREE.Vector3(0.037, 1.241, 0.169), // Accent
  new THREE.Vector3(2.281, 1.241, 0.169), // Load
];

type GLTFResult = GLTF & {
  nodes: {
    PlateB: THREE.Mesh;
    PlateA: THREE.Mesh;
    PCB_1: THREE.Mesh;
    PCB_2: THREE.Mesh;
    Knob1_1: THREE.Mesh;
    Knob1_2: THREE.Mesh;
  };
  materials: {
    ["Powder Black 2"]: THREE.MeshStandardMaterial;
    ["Powder Black"]: THREE.MeshStandardMaterial;
    ["Plastic Rough Black"]: THREE.MeshStandardMaterial;
    Brass: THREE.MeshStandardMaterial;
    ["Plastic Black"]: THREE.MeshStandardMaterial;
    ["Stainless Steel"]: THREE.MeshStandardMaterial;
  };
};

// type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>
interface PedalProps extends GroupProps {
  knobs?: number[];
}
const Pedal = ({ ...props }: PedalProps) => {
  const { nodes, materials } = useGLTF("/pedal3.gltf") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        geometry={nodes.PlateB.geometry}
        material={materials["Powder Black 2"]}
        position={[0.395, -0.354, 0.549]}
        scale={0.064}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PlateA.geometry}
        material={materials["Powder Black"]}
        position={[0.126, 0.597, -0.292]}
        scale={0.064}
      />
      <group position={[1.327, 0.06, 2.178]} scale={0.064}>
        <mesh
          geometry={nodes.PCB_1.geometry}
          material={materials["Plastic Rough Black"]}
        />
        <mesh geometry={nodes.PCB_2.geometry} material={materials.Brass} />
      </group>
      {knobPositions.map((position, index) => (
        <Knob
          key={`knob${index}`}
          position={position}
          scale={0.064}
          // rotation={knobRotation}
          bodyGeometry={nodes.Knob1_1.geometry}
          capGeometry={nodes.Knob1_2.geometry}
          bodyMaterial={materials["Plastic Black"]}
          capMaterial={materials["Stainless Steel"]}
        />
      ))}
    </group>
  );
};

useGLTF.preload("/pedal3.gltf");

export default Pedal;
