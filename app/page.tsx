import Image from "next/image";
import Navbar from "./_component/Navbar";
import Herosection from "./_component/Herosection";
import Demosection from "./_component/Demosection";
import Featured from "./_component/Featured";
import Discovered from "./_component/discovered";
import Service from "./_component/Service";
import Productfeature from "./_component/Productfeature";
import About from "./_component/About";
import Review from "./_component/Reviews";
import Footer from "./_component/Footer";
export default function Home() {
  return (
    <div className=" h-screen">
      <Herosection/>
      <Demosection/>
      <Featured/>
      <Discovered/>
      <Service/>
      <Productfeature/>
      <About/>
      <Review/>
    </div>
  );
}
