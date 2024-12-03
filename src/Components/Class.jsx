function Class() {
  return (
    <div className="flex gap-5 shadow-md flex-col ">
      <div className="shadow-lg">
        <p className="text-4xl">Nursery Section</p>

        <ul className="list-disc list-inside">
          <li>Cetch</li>
          <li>Nursery One</li>
          <li>Nursery Two</li>
          <li>Nursery Three</li>
        </ul>
        <p className="text-4xl">Primary Section</p>
        <ul className="list-disc list-inside">
          <li>Basic One</li>
          <li>Basic Two</li>
          <li>Basic Three</li>
          <li>Basic Four</li>
          <li>Basic Five</li>
        </ul>
      </div>
      <div className="gap-7">
        <p className="text-4xl text-blue-400">Secondary Section</p>
        <p className="text-2xl ">Junior Secondary Section</p>
        <ul>
          <li>Jss1</li>
          <li>Jss2</li>
          <li>Jss3</li>
          <p className="text-2xl ">Senior Secondary Section</p>
          <li>Sss1</li>
          <li>Sss2</li>
          <li>Sss3</li>
        </ul>
      </div>
    </div>
  );
}
export default Class;
