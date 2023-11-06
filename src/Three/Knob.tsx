const Knob = ({
  rotation,
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
  const rotationRads = Math.PI * (rotation / 100);
  return (
    <group position={position} scale={scale} rotation={[0, rotationRads, 0]}>
      <mesh castShadow geometry={bodyGeometry} material={bodyMaterial} />
      <mesh geometry={capGeometry} material={capMaterial} />
    </group>
  );
};

export default Knob;