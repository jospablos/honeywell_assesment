import { Suspense, useRef } from "react";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";

const Wrapper = ({ children }) => {
  return (
    <Canvas camera={{ position: [0, 0, -20] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[-2, 5, 2]} />
      <Suspense fallback={null}>{children}</Suspense>
    </Canvas>
  );
};

function LoaderObject({ step }) {
  const ref = useRef();

  useFrame((state) => {
    ref.current.position.y = -2 - Math.sin(state.clock.elapsedTime * 3.4) * 1.5;
    ref.current.scale.setScalar(4 + Math.abs(Math.sin(state.clock.elapsedTime * .5)) * 2);
    ref.current.material.color.setRGB(.1 + Math.sin(state.clock.elapsedTime * 2), 0 + Math.sin(state.clock.elapsedTime * .5), .8 + Math.sin(state.clock.elapsedTime * .1));
  });

  return (
      <Sphere visible args={[1, 100, 200]} scale={4} ref={ref}>
        <MeshDistortMaterial
          color={"white"}
          attach="material"
          distort={.6}
          speed={1}
          roughness={0}
        />
      </Sphere>
  );
}

export default function Loader(step) {
  return (
    <div className="Loader-container">
      <Wrapper>
        <LoaderObject step={step} />
      </Wrapper>
    </div>
  );
}
