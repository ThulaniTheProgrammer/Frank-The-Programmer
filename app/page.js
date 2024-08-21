import Image from "next/image";
import Main from "./components/main";
import Toptext from "./components/toptext";
import About from "./components/About";
import Achivements from "./components/Achivements";
import Skills from "./components/Skills";
import Example from "./components/Carousel";
import Innovate from "./components/Innovate";
import Footer from "./components/Footer";

export default function Home() {
  return (
    
       <body className="bg-gray-900  text-white h-screen">  
    <div >
<Main/>
<Toptext/>
<About/>
<Achivements/>
<Skills/>
<Example/>
<Innovate/>
<Footer/>


        </div>
        </body>
  );
}
