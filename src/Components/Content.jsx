import { Link } from "react-router-dom";
import student from "../assets/student.jpg";
function Content() {
  return (
    <div className="flex shadow-md ">
      <div className=" flex-1 hidden md:flex w-full ">
        <img src={student} alt="student" />
      </div>
      <div className="flex-1   bg-slate-200 py-11">
        <p className="px-10 text-yellow-400">WELLCOME TO OUR SITE</p>
        <p className="text-6xl">Primary</p>
        <p>and</p>
        <p className="text-6xl">Secondary School</p>
        <p className="py-7">
          Lorem ipsum dolor sit amet.Etian ullamcorper. Suspendisse a
          pellentesque dui, non felis. Maecenas malesuada elite lectus.
        </p>
        <b className="justify-around items-end">
          <Link to="/Aboutus" className="bg-red-500 p-2">
            {" "}
            Learn more{" "}
          </Link>
        </b>
      </div>
    </div>
  );
}
export default Content;
