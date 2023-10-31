import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useState } from "react";
// import { Scene } from "three";
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const Pedal = () => {
  const gltf = useLoader(GLTFLoader, "./23.gltf");
  const [scene, setScene] = useState(gltf.scene);
  const [rotation, setRotation] = useState(0)
  useFrame(() => {
    setRotation(prev => prev += 0.002)
  })
  useEffect(() => {
    // console.log(scene);
    setScene((prev: GLTF) => {
      const newScene = prev;
      // newScene.nodes.Plane.visibility = false;
      return newScene;
    });
  }, [scene]);

  return (
    <>
      <primitive object={scene} rotation={[0, rotation, 0]} />
    </>
  );
};

export default Pedal;
