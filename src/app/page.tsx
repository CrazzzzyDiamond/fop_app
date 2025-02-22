import Image from "next/image";
import './home.css';

export default function Home() {
  return (
    <div className="hero">
      <div 
        className="
          container m-auto pt-20 justify-between h-full flex flex-col
          lg:items-center lg:flex-row 
        "
      >
        <div className="flex items-center">
          <div className="
            text-center lg:text-left p-5
            lg:pr-5
          ">
            <h1
              className="text-4xl font-bold text-gray-900"
            >
              FOP calculating tool
            </h1>
            <p className="text-gray-700 mt-14 text-2xl">
              Are you looking way to easy calculate taxes for your FOP?
              <br />
              <br />
              You are in!
            </p>
          </div>
        </div>

        <div className="
          flex items-end justify-center
          lg:w-1/3 lg:h-full
        ">
          <Image
            src="/heroBg.png"
            alt="Next.js Logo"
            width={300}
            height={500}
            className="max-h-full lg:w-full lg:object-contain lg:h-auto"
          />
        </div>
      </div>
    </div>
  );
}
