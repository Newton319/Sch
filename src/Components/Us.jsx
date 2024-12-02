import biu2 from "../assets/biu2.jpg";
import ceo1 from "../assets/ceo1.jpg";
import ceo from "../assets/ceo.jpg";
function Us() {
  return (
    <div className="flex gap-10  shadow-md flex-col ">
      <div>
        <img className=" h-auto w-full" src={biu2} alt="biu2" />
      </div>
      <div className="">
        {" "}
        <p className="text-3xl p-4">ABOUT ROYAL COLLEGE OF EDUCATION</p>
        Welcome to ROYAL COLLEGE OF EDUCATON Nestled in the heart of OWERRI, our
        school is a vibrant and inclusive community dedicated to providing
        exceptional education to students from diverse backgrounds. Founded in
        1984, our school has a rich history of academic excellence, innovative
        teaching methods, and a strong commitment to character development. At
        ROYAL COLLEGE OF EDUCATION, we strive to inspire our students to become
        confident, creative, and compassionate individuals who are equipped to
        succeed in an ever-changing world.
      </div>
      <div className="">
        <p className="text-3xl p-4"> Our Story</p>
        Established in 1950 Our school was founded by a group of visionary
        educators who sought to provide quality education to the local
        community. With a humble beginning of just 50 students, the school has
        grown exponentially over the years. Milestones: - 1960: Introduction of
        science and technology programs - 1975: Establishment of a library and
        resource center - 1990: Expansion of the campus to include new
        classrooms and facilities - 2000: Implementation of computer-aided
        learning - 2010: Accreditation by the national education board Today:
        Our school has evolved into a thriving institution with over 1,000
        students, 50 teachers, and a wide range of academic and extracurricular
        programs. We continue to strive for excellence in education, fostering a
        community of lifelong learners.
      </div>
      <div className="flex gap-5 flex-col md:flex-row">
        <div className="shadow-md flex-1  ">
          <img src={ceo1} alt="ceo1" /> <p className="text-2xl">The Founder</p>
        </div>
        <div className="shadow-md flex-1 ">
          {" "}
          <img src={ceo} alt="ceo" />
          <p className="text-2xl">The Principal</p>
        </div>
      </div>
      <div>
        {" "}
        <p className="text-3xl p-4">OUR MISSION</p>
        Our mission is to provide a nurturing and inclusive environment that
        fosters academic excellence, creativity, and character development. We
        aim to inspire our students to become curious, critical thinkers, and
        compassionate global citizens.
      </div>
      <div>
        <p className="text-3xl p-4"> CORE VALUE </p>
        <ul className="list-disc list-inside ">
          <li>Academic Excellence</li>
          <li>Integerity and Respet</li>
          <li>Creativity and Innovation</li>
          <li>Community and Inclusion</li>
          <li>Emotional Intelligence and Well-being</li>
        </ul>
      </div>
      <div>
        <p className="text-3xl p-4"> OUR VISION </p>
        To be a leading institution that prepares students for success in an
        ever-changing world, while cultivating a love of learning that
        lasts a lifetime.
      </div>

      <div className="h-auto shadow-md bg-slate-100">
        <p className="text-3xl">
          We want to thank you for helping us making our SCHOOL better and
          better
        </p>
        <a href="http://wa.me/+2349134034538">
          <button className="bg-blue-400 p-2 rounded-md ">Contact us</button>{" "}
        </a>
      </div>
    </div>
  );
}
export default Us;
