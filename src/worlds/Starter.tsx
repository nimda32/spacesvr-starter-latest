import { useThree } from "@react-three/fiber";
import { Spinning, Floating, StandardReality } from "spacesvr";
import { Globals } from "@react-spring/shared";
import { useEffect } from "react";

function Test() {
  const { camera } = useThree();
  console.log(camera);
  return <></>;
}

export default function Starter() {
  useEffect(() => {
    Globals.assign({
      frameLoop: "always",
    });
  }, []);

  return (
    <StandardReality>
      <ambientLight />
      <group position={[0, 0, -4]}>
        <Floating>
          <Spinning xSpeed={0.2} ySpeed={0.4} zSpeed={0.3}>
            <mesh>
              <torusKnotBufferGeometry args={[1, 0.2]} />
              <meshStandardMaterial color="blue" />
            </mesh>
          </Spinning>
        </Floating>
        <Test />
      </group>
    </StandardReality>
  );
}
