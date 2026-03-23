import Image from "next/image";
import Navbar from "./_component/Navbar";
import Herosection from "./_component/Herosection";
import Demosection from "./_component/Demosection";
import Featured from "./_component/Featured";
import Discovered from "./_component/discovered";
import Service from "./_component/Service";

export default function Home() {
  return (
    <div className=" h-screen">
      <Herosection/>
      <Demosection/>
      <Featured/>
      <Discovered/>
      <Service/>
    </div>
  );
}
