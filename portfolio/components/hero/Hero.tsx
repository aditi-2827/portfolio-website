"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Planet } from "../Planet";
import { Environment, Float, Lightformer } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import AnimatedHeaderSection from "../AnimatedHeaderSection";
import { personalInfo } from "@/lib/data";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const text = `${personalInfo.shortPositioning}\n${personalInfo.role}`;

  return (
    <section id="home" className="flex flex-col justify-end min-h-screen relative overflow-hidden">
      <div className="relative z-10">
        <AnimatedHeaderSection
          subTitle={"B.Sc. IT Student • Software & Web Developer"}
          title={personalInfo.name.replace(/\s+/g, "\u00A0")}
          text={text}
          textColor={"text-black"}
        />
      </div>
      <figure
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ width: "100%", height: "100vh" }}
      >
        <Canvas
          shadows
          camera={{ position: [0, 0, -10], fov: 17.5, near: 1, far: 20 }}
        >
          <ambientLight intensity={0.5} />
          <Suspense fallback={null}>
            <Float speed={0.5}>
              <Planet scale={isMobile ? 0.7 : 1} />
            </Float>
            <Environment resolution={256}>
              <group rotation={[-Math.PI / 3, 4, 1]}>
                <Lightformer
                  form={"circle"}
                  intensity={2}
                  position={[0, 5, -9]}
                  scale={10}
                />
                <Lightformer
                  form={"circle"}
                  intensity={2}
                  position={[0, 3, 1]}
                  scale={10}
                />
                <Lightformer
                  form={"circle"}
                  intensity={2}
                  position={[-5, -1, -1]}
                  scale={10}
                />
                <Lightformer
                  form={"circle"}
                  intensity={2}
                  position={[10, 1, 0]}
                  scale={16}
                />
              </group>
            </Environment>
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
};

export default Hero;
