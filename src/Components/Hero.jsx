import playground4 from "../assets/playground4.webp";
import playground2 from "../assets/playground2.jpg";
import playground7 from "../assets/playground7.jpg";
import biu2 from "../assets/biu2.jpg";
import ceo1 from "../assets/ceo1.jpg";
import ceo from "../assets/ceo.jpg";
function Hero() {
  return (
    <div className=" flex  h-auto flex-col md:flex-row ">
      <div className="flex-1 flex border">
        {" "}
        <img className="flex h-60 " src={playground4} alt="playground4" />{" "}
      </div>
      <div className="flex-1 border">
        {" "}
        <img className="flex h-60 " src={playground2} alt="playground2" />
      </div>
      <div className="flex-1 border">
        {" "}
        <img className="flex h-60 " src={playground7} alt="playground7" />
        <div className="flex gap-10 md:hidden flex-col "></div>
      </div>
    </div>
  );
}
export default Hero;
