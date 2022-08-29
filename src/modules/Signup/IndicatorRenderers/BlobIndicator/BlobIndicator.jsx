import "./BlobIndicator.css";
import { Suspense } from "react";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Wrapper = ({children}) => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[-2, 5, 2]} />
      <Suspense fallback={null}>
        {children}
      </Suspense>
    </Canvas>
  );
};

function BlobObject({step}) {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color={step.complete ? '#adff2f' : 'white'}
        attach="material"
        distort={step.active ? .7 : 0}
        speed={step.active ? 2 : 0}
        roughness={0}
      />
    </Sphere>
  );
}

export default function BlobIndicator(step) {

  return (
    <div className="BlobIndicator-container">
      <Wrapper>
        <BlobObject step={step} />
      </Wrapper>
      <span>{step.label}</span>
    </div>
  );
}

