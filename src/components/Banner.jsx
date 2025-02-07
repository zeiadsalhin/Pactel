export default function Banner() {
  return (
    <div
      className="reveal first md:py-60 my-5 py-12 m-0.5 bg-cover"
      style={{
        backgroundImage: "url('/assets/welcome2.webp')",
        backgroundPosition: "right bottom",
        filter: "brightness(1)",
        height: "auto",
        width: "auto",
        backgroundSize: "cover",
      }}
    >
      <div className="text-sm brightness-200">
        <p className="md:font-semibold md:text-xl font-sans mb-10 rounded" id="demo">
          <span className="text-gray-200 md:p-10 md:mr-10 md:ml-10 font-bold md:text-4xl">
            Welcome,
          </span>
          <br />
          <span className="md:p-20 py-5 px-5 md:mr-10 md:ml-10 md:text-4xl text-blue-800 md:py-20">
            ________To Pactel
          </span>
        </p>
      </div>
    </div>
  );
}
