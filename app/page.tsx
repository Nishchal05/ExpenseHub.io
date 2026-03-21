import Image from "next/image";
import Navbar from "./_component/Navbar";
import Herosection from "./_component/Herosection";
import Demosection from "./_component/Demosection";

export default function Home() {
  return (
    <div className=" h-screen">
      <Herosection/>
      <Demosection/>
    </div>
  );
}
