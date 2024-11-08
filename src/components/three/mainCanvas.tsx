"use client";
import React from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { MainScene } from "./mainScene";

import { Perf } from "r3f-perf";
import { ACESFilmicToneMapping } from "three";

export const MainCanvas = () => {
  return (
    // Set the size and background color of the container
    <div className="flex h-96 w-full flex-col items-center justify-center">
      <Canvas
        shadows={"soft"}
        camera={{
          near: 5,
          far: 1000,
          rotation: [0, 0, 0],
          position: [-1, 2, 9],
          fov: 60,
        }}
        onCreated={({ gl }) => {
          gl.localClippingEnabled = true;
          gl.toneMapping = ACESFilmicToneMapping;
        }}
      >
        {/* <pointLight
          intensity={15.413}
          decay={1}
          position={[2.076, 8.904, -1.005]}
          rotation={[-1.839, 0.602, 1.932]}
          userData={{ name: "Light" }}
          castShadow
        /> */}

        {/* {color && <color attach='background' args={[color]} />} */}
        <ambientLight intensity={7} />
        <pointLight position={[20, 30, 10]} intensity={3} decay={0.2} />
        <pointLight position={[-10, -10, -10]} color="blue" decay={0.2} />

        {/* <color attach="background" args={["#ccc"]} /> */}

        {/* Enable orbit controls for camera navigation */}
        {/* <OrbitControls makeDefault /> */}
        <OrbitControls autoRotate autoRotateSpeed={0.1} />

        {/* Render the main scene object */}
        <MainScene />

        {/* // This is a component from the @react-three/drei library. It sets the environment of the 3D scene. The 'preset' prop sets the type of environment. The 'background', 'blur', and 'backgroundBlurriness' props control the appearance of the environment. */}

        {/* // This is a component from the @react-three/drei library. It's used to monitor the performance of the 3D scene. */}
        <Perf />

        {/* <axesHelper args={[1]} /> */}
      </Canvas>
    </div>
  );
};
