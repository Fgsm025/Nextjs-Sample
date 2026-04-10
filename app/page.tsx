import Image from "next/image";

const Homepage = () => (
  <main className="w-full h-screen flex flex-col items-center justify-center bg-[rgb(2,6,13)]">
    <div className="w-fit h-fit flex flex-col items-center justify-center gap-6 p-12">
      <Image
        src="./webstacks.svg"
        alt="Webstacks Logo"
        width={100}
        height={100}
        className="w-full min-h-12 md:min-h-15"
      />
      <h1 className="text-white text-xl md:text-2xl text-center font-bold">
        Next.js CodeSubmit
      </h1>
    </div>
  </main>
);

export default Homepage;
