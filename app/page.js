import ContestAnnouncement from "./Components/ContestAnnouncement";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Timer from "./Components/Timer";

export default function Home() {
  return (
   <div className="">
    <Navbar/>
    <Hero/>
    <Timer/>
    <ContestAnnouncement/>
   </div>
  );
}
