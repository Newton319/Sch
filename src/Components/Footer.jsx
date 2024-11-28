function Footer() {
  return (
    <div className="p-8 bg-cyan-700 flex ">
      <div className="flex1  text-white  py-5 ">
        <p>2018 Royal College of Education</p>
        <p>Registered charity No. 226437773</p>
        <p className="underline">Become a Psychiatrist / Training / Event </p>
      </div>

      <div className="flex-1 gap-3 flex justify-end items-end    ">
        {" "}
        <button>
          {" "}
          <span className="icon-facebook bg-blue-500 rounded-md p-1 "></span>{" "}
        </button>
        <button>
          {" "}
          <span className="icon-twitter bg-cyan-500 rounded-md p-1"></span>{" "}
        </button>
        <button>
          {" "}
          <span className="icon-youtube-play bg-red-500 rounded-md p-1"></span>{" "}
        </button>
      </div>
    </div>
  );
}
export default Footer;
