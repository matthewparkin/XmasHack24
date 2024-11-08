import React from "react";
import { MainCanvas } from "../components/three/mainCanvas";

const Home = () => {
  return (
    // Simple scene view
    <div>
      <div className="mx-auto flex w-full flex-col flex-wrap items-center md:flex-row  lg:w-4/5">
        {/* jumbo */}
        <div className="flex w-full flex-col items-start justify-center p-12 text-center md:w-2/5 md:text-left">
          <p className="w-full uppercase">Matthew Parkin</p>
          <h1 className="my-4 text-5xl font-bold leading-tight">
            GET CHRISMASSY
          </h1>
          <p className="mb-8 text-2xl leading-normal">
            A hack using React, React-three-fiber and Threejs.
          </p>
        </div>

        <div className="w-full text-center md:w-3/5">
          <main className="flex h-96 w-full flex-col items-center justify-center">
            <MainCanvas />
          </main>
          {/* <View className='flex h-96 w-full flex-col items-center justify-center'>
            <Suspense fallback={null}>
              <Logo route='/blob' scale={0.6} position={[0, 0, 0]} />
              <Common />
            </Suspense>
          </View> */}
        </div>
      </div>

      <div className="mx-auto flex w-full flex-col flex-wrap items-center p-12 md:flex-row  lg:w-4/5">
        {/* first row */}
        <div className="relative h-48 w-full py-6 sm:w-1/2 md:my-12 md:mb-40">
          <h2 className="mb-3 text-3xl font-bold leading-none text-gray-800">
            place holder text
          </h2>
          <p className="mb-8 text-gray-600">Place holder Text.</p>
        </div>
        <div className="relative my-12 h-48 w-full py-6 sm:w-1/2 md:mb-40">
          {/* <secondaryCanvas scale={2} position={[0, -1.6, 0]} rotation={[0.0, -0.3, 0]} /> */}
        </div>
        {/* second row */}
        <div className="relative my-12 h-48 w-full py-6 sm:w-1/2 md:mb-40">
          {/* <thirdCanvas route='/blob' scale={2} position={[0, -1.6, 0]} /> */}
        </div>
        <div className="w-full p-6 sm:w-1/2">
          <h2 className="mb-3 text-3xl font-bold leading-none text-gray-800">
            Place holder Text.
          </h2>
          <p className="mb-8 text-gray-600">Place holder Text.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
